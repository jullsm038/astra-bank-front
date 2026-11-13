import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Puente hacia el backend: todo lo que empiece con /api se envía a Spring Boot
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
})
