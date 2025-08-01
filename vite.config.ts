// vite.config.ts
import { defineConfig } from "vite"
import tsConfigPaths from "vite-tsconfig-paths"
import { tanstackStart } from "@tanstack/solid-start/plugin/vite"
import viteSolid from "vite-plugin-solid"
import lucidePreprocess from "vite-plugin-lucide-preprocess"

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths(),
    lucidePreprocess(),
    tanstackStart({
      target: "aws-lambda",
      customViteSolidPlugin: true,
    }),
    viteSolid({ ssr: true }),
  ],
})
