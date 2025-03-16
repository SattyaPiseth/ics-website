import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'brotliCompress', // Use Brotli instead of Gzip (better compression)
      ext: '.br', 
      deleteOriginFile: false, // Keeps original file alongside compressed
    }),
    visualizer({ open: true }) // Optional: Generates bundle size report
  ],
  server: {
    port: 3000,
    open: true, // Auto opens browser on start
    strictPort: true, // Ensures the server runs on the specified port
    cors: true, // Enables cross-origin resource sharing
  },
  build: {
    target: 'esnext', // Optimize for modern browsers
    minify: 'esbuild', // Minifies JS for better execution
    chunkSizeWarningLimit: 500, // Reduce chunk size warning
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor' // Splitting React-related packages
            if (id.includes('lodash')) return 'lodash-vendor' // Splitting lodash
            return 'vendor' // Other third-party dependencies
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src' // Simplifies imports
    }
  },
  esbuild: {
    drop: ['console', 'debugger'], // Removes console logs & debuggers in production
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Optimizes dependencies at startup
  },
  cacheDir: '.vite_cache', // Ensures persistent caching for faster builds
})
