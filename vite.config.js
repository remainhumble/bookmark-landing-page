import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  cacheDir: 'node_modules/.vite-temp',
  plugins: [tailwindcss(), react()],
})
