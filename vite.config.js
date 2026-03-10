import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
   resolve: {
    caseSensitive: true  // mirrors Linux behavior locally
  },
  plugins: [vue(),
  ],
})
