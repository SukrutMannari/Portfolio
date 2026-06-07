import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const { body, title, category, hasThumbnail, hasCover, hasGallery, collection } = await request.json();

    const apiKey = locals?.runtime?.env?.GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({
        score: 0,
        suggestions: [
          "Warning: GEMINI_API_KEY is not defined in the environment.",
          "Please add it to your local .env file or Cloudflare settings to enable the AI coach feedback."
        ],
        mediaReminders: []
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 1. Programmatic Media Check
    const mediaReminders: string[] = [];
    if (collection === 'projects') {
      if (!hasThumbnail) {
        mediaReminders.push("Thumbnail image is missing. In the editor, add a 'Thumbnail' image to make the project stand out on the main page grid!");
      }
      if (!hasGallery) {
        mediaReminders.push("Gallery images are empty. Add a few step-by-step photos under the 'Gallery' list to document your engineering build process!");
      }
    } else if (collection === 'journal') {
      if (!hasCover) {
        mediaReminders.push("Cover image is missing. Upload a 'Cover Image' in the editor to make this post look visually appealing when opened!");
      }
    }

    // 2. AI prompt engineering for the Coach
    const prompt = `
You are a friendly, encouraging AI Writing Coach for a middle-school student (named Sukrut) who is updating his personal portfolio and engineering blog.
Evaluate his draft post for quality, depth, and engagement. Be supportive and construct feedback in a way that guides him to reflect on the experience and write engaging updates.

Draft details:
- Title: "${title || 'Untitled'}"
- Collection: "${collection}"
- Category: "${category || 'N/A'}"
- Content: "${body || '(No content written yet)'}"

Guidelines for suggestions:
- Encourage him to include specific details for each activity depending on the topic.
- If this is a music performance or concert (e.g. Category is "music", or Title relates to a concert/band): Ask questions like "which song did you play in the winter concert?", "what instrument did you play?", or "what was the general atmosphere of the concert?".
- If this is a builder, engineering, or robotics project (e.g. Category is "engineering", or Collection is "projects"): Ask questions like "did this build require soldering or wiring?", "what challenges did you run into while assembling?", or "what tools/software did you use?".
- If this is volunteering or library work (e.g. Category is "service"): Ask questions like "what role did you play?", "did you help any visitors?", or "what was the most satisfying part of the day?".
- Focus on asking 2-3 friendly, leading questions that make it easy for him to expand the post.

Return your response ONLY as a JSON object with this exact structure:
{
  "score": number (0 to 100, where 100 is highly descriptive and engaging, and less than 50 is very brief or placeholder text),
  "suggestions": string[] (exactly 3 friendly, actionable bullet points or questions)
}
`;

    // 3. Request Gemini API
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const geminiResponse = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
        }],
        generationConfig: {
          responseMimeType: "application/json"
        }
      })
    });

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      throw new Error(`Gemini API returned status ${geminiResponse.status}: ${errorText}`);
    }

    const geminiData = await geminiResponse.json();
    const resultText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
    
    // Parse the JSON returned by Gemini
    const aiResult = JSON.parse(resultText.trim());

    return new Response(JSON.stringify({
      score: typeof aiResult.score === 'number' ? aiResult.score : 50,
      suggestions: Array.isArray(aiResult.suggestions) ? aiResult.suggestions : ["Draft updated! Write more to get specific tips."],
      mediaReminders
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });

  } catch (err: any) {
    console.error('[AI Feedback Error]:', err.message);
    return new Response(JSON.stringify({
      score: 0,
      suggestions: [
        "Unable to generate AI suggestions right now.",
        "Error details: " + err.message
      ],
      mediaReminders: []
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
