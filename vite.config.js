import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // ...existing config
  test: {
    pool: "threads",
    singleThread: true,
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
