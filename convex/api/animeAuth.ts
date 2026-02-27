import { v } from "convex/values"
import {
  query,
  mutation,
  action,
  internalMutation,
} from "../_generated/server"
import { internal } from "../_generated/api"
import { animeServiceValidator } from "../validators"

/**
 * Returns which anime services the user has connected.
 */
export const getConnectionStatus = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) return { anilist: false, kitsu: false, mal: false }

    const tokens = await ctx.db
      .query("userServiceTokens")
      .withIndex("by_user_service", (q) =>
        q.eq("userId", identity.subject),
      )
      .collect()

    const connected = new Set(tokens.map((t) => t.service))
    return {
      anilist: connected.has("anilist"),
      kitsu: connected.has("kitsu"),
      mal: connected.has("mal"),
    }
  },
})

/**
 * Stores or updates a service token. Internal — called by actions only.
 */
export const storeToken = internalMutation({
  args: {
    userId: v.string(),
    service: animeServiceValidator,
    accessToken: v.string(),
    refreshToken: v.optional(v.string()),
    expiresAt: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("userServiceTokens")
      .withIndex("by_user_service", (q) =>
        q.eq("userId", args.userId).eq("service", args.service),
      )
      .first()

    if (existing) {
      await ctx.db.patch(existing._id, {
        accessToken: args.accessToken,
        refreshToken: args.refreshToken,
        expiresAt: args.expiresAt,
      })
    } else {
      await ctx.db.insert("userServiceTokens", {
        userId: args.userId,
        service: args.service,
        accessToken: args.accessToken,
        refreshToken: args.refreshToken,
        expiresAt: args.expiresAt,
      })
    }
  },
})

/**
 * Removes a service token for the authenticated user.
 */
export const disconnectService = mutation({
  args: { service: animeServiceValidator },
  handler: async (ctx, { service }) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) throw new Error("Unauthenticated")

    const token = await ctx.db
      .query("userServiceTokens")
      .withIndex("by_user_service", (q) =>
        q.eq("userId", identity.subject).eq("service", service),
      )
      .first()

    if (token) {
      await ctx.db.delete(token._id)
    }
  },
})

/**
 * Exchanges an AniList OAuth code for an access token and stores it.
 */
export const exchangeAniListToken = action({
  args: {
    code: v.string(),
    redirectUri: v.string(),
  },
  handler: async (ctx, { code, redirectUri }) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) throw new Error("Unauthenticated")

    const clientId = process.env.ANILIST_CLIENT_ID
    const clientSecret = process.env.ANILIST_CLIENT_SECRET
    if (!clientId || !clientSecret) {
      throw new Error("AniList not configured")
    }

    const response = await fetch("https://anilist.co/api/v2/oauth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        grant_type: "authorization_code",
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        code,
      }),
    })

    if (!response.ok) {
      throw new Error("Token exchange failed")
    }

    const data = await response.json()
    const expiresIn = data.expires_in || 2592000 // 30 days default

    await ctx.runMutation(internal.api.animeAuth.storeToken, {
      userId: identity.subject,
      service: "anilist",
      accessToken: data.access_token,
      refreshToken: "",
      expiresAt: Date.now() + expiresIn * 1000,
    })

    return { success: true }
  },
})
