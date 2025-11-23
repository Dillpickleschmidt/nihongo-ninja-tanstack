// vite.config.ts
import { defineConfig } from "vite"
import tsConfigPaths from "vite-tsconfig-paths"
import { tanstackStart } from "@tanstack/solid-start/plugin/vite"
import { nitroV2Plugin } from "@tanstack/nitro-v2-vite-plugin"
import viteSolid from "vite-plugin-solid"
import lucidePreprocess from "vite-plugin-lucide-preprocess"
import solidSvg from "vite-plugin-solid-svg"
import { visualizer } from "rollup-plugin-visualizer"

export default defineConfig({
  server: {
    port: 3000,
  },
  optimizeDeps: {
    include: ["wanakana"],
  },
  plugins: [
    tsConfigPaths(),
    lucidePreprocess(),
    solidSvg(),
    tanstackStart(),
    nitroV2Plugin({
      preset: "aws-lambda",
      serveStatic: true,
    }),
    viteSolid({ ssr: true }),
    process.env.ANALYZE
      ? visualizer({
        filename: "dist/bundle-report.html",
        template: "treemap",
        gzipSize: true,
        brotliSize: true,
        open: true,
      })
      : null,
  ],
})
