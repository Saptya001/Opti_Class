import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Use @ to reference src folder
    },
  },
  server: {
    port: 5173,           // Default Vite port
    open: true,           // Open browser on `npm run dev`
    strictPort: true,     // Exit if port is already in use
    cors: true,
  },
  build: {
    outDir: 'dist',       // Build output folder
    sourcemap: true,      // Include source maps for debugging
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/global.scss";`, // Optional: global SCSS
      },
    },
  },
});
