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
      const payload = {
        token: data.access_token,
        provider: 'github',
      };
      scriptContent = `
        window.opener.postMessage(
          "authorization:github:success:" + ${JSON.stringify(JSON.stringify(payload))},
          "*"
        );
      `;
    } else {
      const errorMessage = data.error_description || data.error || 'Unknown OAuth error';
      const payload = { error: errorMessage };
      scriptContent = `
        window.opener.postMessage(
          "authorization:github:error:" + ${JSON.stringify(JSON.stringify(payload))},
          "*"
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
    const errorPayload = { error: err.message || String(err) };
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
              "authorization:github:error:" + ${JSON.stringify(JSON.stringify(errorPayload))},
              "*"
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
