import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ redirect, locals }) => {
  const client_id = locals?.runtime?.env?.GITHUB_CLIENT_ID || import.meta.env.GITHUB_CLIENT_ID;
  
  if (!client_id) {
    return new Response('Error: GITHUB_CLIENT_ID environment variable is not defined.', { 
      status: 500,
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  // Generate GitHub Authorize URL. Decap CMS typically requests 'repo,user' scopes.
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${client_id}&scope=repo,user`;
  
  return redirect(githubAuthUrl);
};
