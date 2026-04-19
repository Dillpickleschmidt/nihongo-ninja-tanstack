import { v } from "convex/values"
import { mutation, query } from "../_generated/server"
import * as model from "../model/images"

export const createImageAsset = mutation({
  args: {
    imageId: v.string(),
    storageKey: v.string(),
    contentType: v.string(),
    sourceWidth: v.number(),
    objectEtag: v.string(),
  },
  handler: (ctx, args) => model.createImageAsset(ctx, args),
})

export const listMyImageAssets = query({
  args: {},
  handler: (ctx) => model.listMyImageAssets(ctx),
})

export const getOwnedImageAsset = query({
  args: {
    imageId: v.string(),
  },
  handler: (ctx, args) => model.getOwnedImageAsset(ctx, args),
})
