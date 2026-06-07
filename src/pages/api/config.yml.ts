import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  let yamlText = '';
  const origin = new URL(request.url).origin;
  
  try {
    // Fetch from the same origin (works on both local dev and Cloudflare Pages)
    const configUrl = `${origin}/admin/config.yml`;
    const response = await fetch(configUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch original config.yml (Status: ${response.status})`);
    }
    yamlText = await response.text();
  } catch (fetchErr: any) {
    console.error('[API Config] Fetching config.yml failed:', fetchErr.message);
    return new Response(`Error loading config: ${fetchErr.message}`, { status: 500 });
  }

  // Replace "backend:" with "backend:" and the dynamic "base_url"
  yamlText = yamlText.replace(
    /backend:/i,
    `backend:\n  base_url: ${origin}`
  );

  return new Response(yamlText, {
    headers: {
      'Content-Type': 'text/yaml; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  });
};
