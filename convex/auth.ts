import { createClient } from "@convex-dev/better-auth"
import { convex } from "@convex-dev/better-auth/plugins"
import { betterAuth, type BetterAuthOptions } from "better-auth/minimal"
import { components } from "./_generated/api"
import authConfig from "./auth.config"
import type { GenericCtx } from "@convex-dev/better-auth"
import type { DataModel } from "./_generated/dataModel"
import type { QueryCtx, MutationCtx } from "./_generated/server"

const siteUrl = process.env.SITE_URL!

// The component client has methods needed for integrating Convex with Better Auth,
// as well as helper methods for general use.
export const authComponent = createClient<DataModel>(components.betterAuth)

const createAuthOptions = (ctx: GenericCtx<DataModel>) => {
  return {
    baseURL: siteUrl,
    database: authComponent.adapter(ctx),
    // Configure simple, non-verified email/password to get started
    emailAndPassword: {
      enabled: true,
      requireEmailVerification: false,
    },
    plugins: [
      // The Convex plugin is required for Convex compatibility
      convex({
        authConfig,
        jwt: {
          expirationSeconds: 60 * 60 * 24,
        },
        jwksRotateOnTokenGenerationError: true,
      }),
    ],
  } satisfies BetterAuthOptions
}

export const createAuth = (ctx: GenericCtx<DataModel>) => {
  return betterAuth(createAuthOptions(ctx))
}

// Returns user | null - for optional auth scenarios
export const getUser = async (ctx: QueryCtx | MutationCtx) => {
  try {
    return await authComponent.getAuthUser(ctx)
  } catch {
    return null
  }
}

// Throws if not authenticated - for required auth scenarios
export const requireAuth = async (ctx: QueryCtx | MutationCtx) => {
  const user = await getUser(ctx)
  if (!user) {
    throw new Error("Unauthenticated")
  }
  return user
}
