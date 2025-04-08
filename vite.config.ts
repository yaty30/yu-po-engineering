import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/yu-po-engineering/",
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
});
