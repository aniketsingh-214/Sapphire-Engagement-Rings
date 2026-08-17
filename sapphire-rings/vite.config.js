import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allow external tunnel hosts (cloudflare, ngrok, etc.) in dev
    allowedHosts: true,
  },
  build: {
    outDir: 'dist',
  },
})
