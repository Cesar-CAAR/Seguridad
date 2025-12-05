import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: [
      'nonrescissory-keturah-unshafted.ngrok-free.dev'
    ],
    host: true
  }
});
