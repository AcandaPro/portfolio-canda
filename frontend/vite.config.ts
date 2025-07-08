import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  base: "/portfolio-canda/", // IMPORTANT pour Github Pages
  plugins: [react()],
});
