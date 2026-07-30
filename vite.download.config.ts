import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Single-file build config — outputs one self-contained index.html
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist-html',
    minify: true,
    sourcemap: false,
    assetsInlineLimit: 100_000_000,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    viteSingleFile(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
