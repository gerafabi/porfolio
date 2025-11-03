// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://www.geradev.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    server: {
      watch: {
        ignored: ['**/dist/**', '**/node_modules/**']
      }
    }
  }
});
