import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|webp)$/i,
      png: { quality: 78 },
      jpeg: { quality: 78 },
      webp: { quality: 78 },
    }),
  ],
})
