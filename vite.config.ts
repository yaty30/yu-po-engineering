// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from "path";
// import { fileURLToPath } from "url";

// Create dirname equivalent for ESM
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: "/yu-po-engineering/",
  resolve: {
    alias: {
      "~": "/src",
    },
  },
});
