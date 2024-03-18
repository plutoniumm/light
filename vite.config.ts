import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    fs: {
      allow: ['.'],
    },
    port: 3000,
  }
});