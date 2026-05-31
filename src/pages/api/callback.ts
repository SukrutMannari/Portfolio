import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  
  const client_id = import.meta.env.GITHUB_CLIENT_ID;
  const client_secret = import.meta.env.GITHUB_CLIENT_SECRET;

  if (!code) {
    return new Response('Error: Missing authorization code from GitHub.', { 
      status: 400,
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  if (!client_id || !client_secret) {
    return new Response('Error: Server environment variables GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET are not defined.', { 
      status: 500,
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id,
        client_secret,
        code,
      }),
    });

    const data = await response.json() as { access_token?: string; error?: string; error_description?: string };

    let scriptContent = '';
    if (data.access_token) {
      const responseData = {
        token: data.access_token,
        provider: 'github',
      };
      scriptContent = `
        const token = "${data.access_token}";
        const provider = "github";
        window.opener.postMessage(
          "authorization:github:success:" + JSON.stringify({ token, provider }),
          window.location.origin
        );
      `;
    } else {
      const errorMessage = data.error_description || data.error || 'Unknown OAuth error';
      scriptContent = `
        window.opener.postMessage(
          "authorization:github:error:" + JSON.stringify({ error: "${errorMessage}" }),
          window.location.origin
        );
      `;
    }

    const html = `
      <!doctype html>
      <html>
        <head>
          <title>Authenticating...</title>
        </head>
        <body>
          <p>Please wait while we log you in...</p>
          <script>
            ${scriptContent}
          </script>
        </body>
      </html>
    `;

    return new Response(html, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  } catch (err: any) {
    const html = `
      <!doctype html>
      <html>
        <head>
          <title>Authentication Failed</title>
        </head>
        <body>
          <p>Authentication failed: ${err.message || err}</p>
          <script>
            window.opener.postMessage(
              "authorization:github:error:" + JSON.stringify({ error: "${err.message || err}" }),
              window.location.origin
            );
          </script>
        </body>
      </html>
    `;
    return new Response(html, {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  }
};
