import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'web/_dist',
    rollupOptions: {
      input: {
        // CSS files
        home: resolve(__dirname, 'src/scss/home.scss'),
        services: resolve(__dirname, 'src/scss/services.scss'),
        salon: resolve(__dirname, 'src/scss/salon.scss'),
        // JS files
        main: resolve(__dirname, 'src/js/main.js'),
        'home-js': resolve(__dirname, 'src/js/home.js'),
        'services-js': resolve(__dirname, 'src/js/services.js'),
        'salon-js': resolve(__dirname, 'src/js/salon.js'),
        // Add more page-specific entries as needed
        // contact: resolve(__dirname, 'src/scss/contact.scss'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        entryFileNames: 'js/[name].js',
      },
    },
    emptyOutDir: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/scss/_variables.scss" as *;`
      }
    }
  }
});
