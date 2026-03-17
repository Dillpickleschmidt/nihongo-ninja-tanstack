/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "nihongo-ninja",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    }
  },
  async run() {
    const kagome = new sst.aws.Function("KagomeTokenize", {
      runtime: "go",
      handler: "lambda/kagome-tokenize/kagome-tokenize",
      architecture: "arm64",
      memory: "256 MB",
      url: true,
    })

    return { kagomeUrl: kagome.url }
  },
})
