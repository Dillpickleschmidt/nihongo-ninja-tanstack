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
    const secret = new sst.Secret("SECRET_VAL")

    new sst.aws.TanStackStart("MyWeb", {
      link: [secret],
    })
  },
})
