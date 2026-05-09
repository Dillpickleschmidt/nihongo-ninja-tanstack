import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/solid-start/plugin/vite'
import viteSolid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import lucidePreprocess from 'vite-plugin-lucide-preprocess'
import solidSvg from 'vite-plugin-solid-svg'

export default defineConfig({
  server: {
    host: true,
    port: 3000,
    allowedHosts: ["valleyvault"],
  },
  ssr: {
    noExternal: ["@convex-dev/better-auth"],
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    lucidePreprocess(),
    solidSvg(),
    tailwindcss(),
    tanstackStart(),
    viteSolid({ ssr: true }),
  ],
})
