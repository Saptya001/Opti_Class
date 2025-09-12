import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // optional, allows @/ to reference src/
    },
  },
  server: {
    port: 5173, // dev server port
    open: true, // opens browser automatically
    strictPort: true, // fails if port is busy
  },
  build: {
    outDir: 'dist',
    sourcemap: true, // optional: generate source maps
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
});
