import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    // Compress assets for faster load times
    compression({
      algorithm: "brotliCompress", // Use Brotli compression for smaller files
      threshold: 1024, // Compress files larger than 1KB
    }),
    // Optimize images (JPEG, PNG, SVG, WebP)
    viteImagemin({
      gifsicle: { optimizationLevel: 3 },
      optipng: { optimizationLevel: 5 },
      mozjpeg: { quality: 75 },
      svgo: { plugins: [{ removeViewBox: false }] },
    }),
  ],
  build: {
    minify: "terser", // Minify JS & CSS
    sourcemap: false, // Disable source maps in production
    chunkSizeWarningLimit: 500, // Avoid large JS bundle warnings
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react-vendor"; // React in a separate file
            if (id.includes("flowbite")) return "flowbite"; // Flowbite in its own file
            return "vendor"; // Other dependencies
          }
        },
      },
    },
  },
  server: {
    port: 3000,
    strictPort: true, // Avoid port conflicts
    open: true, // Automatically open browser
  },
  optimizeDeps: {
    include: ["react", "react-dom"], // Pre-bundle dependencies for faster dev start
  },
});
