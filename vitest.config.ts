import solid from "vite-plugin-solid"
import { defineConfig } from "vitest/config"
import path from "path"

export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app"),
    },
    conditions: ["development", "browser"],
  },
  test: {
    environment: "jsdom",
    globals: true,
  },
})
