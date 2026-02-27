import { v } from "convex/values"
import {
  query,
  mutation,
  action,
  internalQuery,
  internalMutation,
} from "../_generated/server"
import { animeServiceValidator } from "../validators"
import * as model from "../model/animeAuth"
import type { UserListsResponse } from "../model/animeAuth"

export const getConnectionStatus = query({
  args: {},
  handler: (ctx) => model.getConnectionStatus(ctx),
})

export const storeToken = internalMutation({
  args: {
    userId: v.string(),
    service: animeServiceValidator,
    accessToken: v.string(),
    refreshToken: v.optional(v.string()),
    expiresAt: v.optional(v.number()),
  },
  handler: (ctx, args) => model.storeToken(ctx, args),
})

export const disconnectService = mutation({
  args: { service: animeServiceValidator },
  handler: (ctx, { service }) => model.disconnectService(ctx, service),
})

export const getToken = internalQuery({
  args: { userId: v.string(), service: animeServiceValidator },
  handler: (ctx, args) => model.getToken(ctx, args.userId, args.service),
})

export const exchangeAniListToken = action({
  args: { code: v.string(), redirectUri: v.string() },
  handler: (ctx, { code, redirectUri }) =>
    model.exchangeAniListToken(ctx, code, redirectUri),
})

export const fetchUserLists = action({
  args: {},
  handler: (ctx): Promise<UserListsResponse> => model.fetchUserLists(ctx),
})
