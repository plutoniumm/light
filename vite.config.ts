import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [svelte()],
  server: {
    fs: {
      allow: ['.'],
    },
    port: 3000,
  }
});