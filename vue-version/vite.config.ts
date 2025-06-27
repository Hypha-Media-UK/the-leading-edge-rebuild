import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Using modern Sass API format
        additionalData: '@use "./src/styles/index.scss" as *;'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})
