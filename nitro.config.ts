// nitro.config.ts
import { defineNitroConfig } from "nitropack/config"
import { copyFileSync, existsSync, mkdirSync } from "fs"
import { resolve } from "path"

export default defineNitroConfig({
  preset: "aws-lambda",
  serveStatic: true,
  routeRules: {
    "/relay-tefh/static/**": {
      proxy: "https://us-assets.i.posthog.com/static/**",
    },
    "/relay-tefh/**": {
      proxy: "https://us.i.posthog.com/**",
    },
  },
  hooks: {
    // This hook runs after the Nitro server has been compiled
    compiled(nitro) {
      console.log("[Nitro Hook] Copying database to server output...")
      const source = resolve("./public/wanikani.db")
      // nitro.options.output.serverDir is the absolute path to .output/server
      const dest = resolve(nitro.options.output.serverDir, "wanikani.db")

      // Ensure the destination directory exists (it should, but this is safe)
      if (!existsSync(nitro.options.output.serverDir)) {
        mkdirSync(nitro.options.output.serverDir, { recursive: true })
      }

      copyFileSync(source, dest)
      console.log(`[Nitro Hook] ✅ Database copied to ${dest}`)
    },
  },
})
