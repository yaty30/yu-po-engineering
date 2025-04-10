import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { loadEnv } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = env.APP_BASE_ROUTE
    ? `${env.APP_BASE_ROUTE}/`
    : env.APP_BASE_ROUTE;
  console.log(base ? "" : "");

  return {
    plugins: [react()],
    // base: "",
    base: "/yu-po-engineering/",
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
          nested: resolve(__dirname, "nested/index.html"),
        },
      },
    },
  };
});
