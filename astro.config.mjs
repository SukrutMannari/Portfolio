import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// Update `site` to the real domain once it's registered (e.g. https://sukrutmannari.com)
export default defineConfig({
  site: 'https://sukrutmannari.com',
  output: 'hybrid',
  adapter: cloudflare(),
});
