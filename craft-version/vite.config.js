import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'web',
    emptyOutDir: false, // Don't empty the entire web directory
    rollupOptions: {
      input: {
        // Just the main CSS and JS files - keep it simple like Vue version
        'css/main': resolve(__dirname, 'src/scss/main.scss'),
        'js/main': resolve(__dirname, 'src/js/main.js')
      },
      output: {
        // No hashing - predictable file names
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  },
  server: {
    origin: 'http://localhost:3000'
  }
});
