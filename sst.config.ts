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
    // Keep your secrets for Supabase, etc.
    const secrets = {
      SECRET_VAL: new sst.Secret("SECRET_VAL"),
      SUPABASE_URL: new sst.Secret("SUPABASE_URL"),
      SUPABASE_ANON_KEY: new sst.Secret("SUPABASE_ANON_KEY"),
      SUPABASE_JWT_SECRET: new sst.Secret("SUPABASE_JWT_SECRET"),
    }
    const allSecrets = Object.values(secrets)

    // Deploy your TanStackStart app and link the secrets
    new sst.aws.TanStackStart("MyWeb", {
      link: [...allSecrets],
    })
  },
})
