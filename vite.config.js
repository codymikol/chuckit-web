import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({


  server: {

    proxy: {
      '^/v1/chuckit/.*': {
        target: 'http://localhost:4476',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1\/chuckit/, ''),
      }
    }
  },

  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
