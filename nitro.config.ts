import { defineNitroConfig } from "nitropack/config"

export default defineNitroConfig({
  preset: "aws-lambda",
  serveStatic: true,
})

