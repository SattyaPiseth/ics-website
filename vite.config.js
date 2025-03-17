import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  base: "./",  // Ensures correct asset loading
  plugins: [
    react(),
    viteCompression({ algorithm: 'gzip' }), // Enables gzip compression for assets
    visualizer({ open: true }) // Optional: Generates a visualization of bundle size
  ],
  server: {
    port: 3000,
    open: true, // Auto opens browser on start
    strictPort: true, // Ensures the server runs on the specified port
    cors: true, // Enables cross-origin resource sharing
  },
  build: {
    target: 'esnext', // Optimize for modern browsers
    minify: 'esbuild', // Minifies JS for faster execution
    chunkSizeWarningLimit: 500, // Reduce chunk size warning
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor' // Separates vendor libraries into a different chunk
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src' // Simplifies imports
    }
  },
  esbuild: {
    drop: ['console', 'debugger'], // Removes console logs & debuggers in production
  }
})
