import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Default Vite port, change if needed
    open: true, // Auto-open browser on dev start
  },
  resolve: {
    alias: {
      "@": "/src", // Allows you to import like "@/components/Button"
    },
  },
});
