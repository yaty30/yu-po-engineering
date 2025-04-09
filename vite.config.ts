import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = env.APP_BASE_ROUTE
    ? `${env.APP_BASE_ROUTE}/`
    : env.APP_BASE_ROUTE;

  return {
    plugins: [react()],
    base: "/yu-po-engineering/",
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  };
});
