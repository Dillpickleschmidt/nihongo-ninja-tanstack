// app.config.ts
import { defineConfig } from "@tanstack/solid-start/config"
import lucidePreprocess from "vite-plugin-lucide-preprocess"
import tsConfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  vite: {
    plugins: [
      lucidePreprocess(),
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
    ],
  },
  server: {
    preset: "aws-lambda",
    awsLambda: {
      streaming: true,
    },
  },
})
