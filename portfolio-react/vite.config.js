import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config — dev server + build settings
export default defineConfig({
  plugins: [react()],
});
