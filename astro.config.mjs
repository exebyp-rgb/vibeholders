import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';


export default defineConfig({
  site: 'https://vibeholders.com',
  integrations: [tailwind()[tailwind()],
  output: 'static',
});
