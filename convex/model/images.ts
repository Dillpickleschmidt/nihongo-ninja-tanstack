import type { MutationCtx, QueryCtx } from "../_generated/server"
import { ConvexError } from "convex/values"

type CreateImageAssetArgs = {
  imageId: string
  storageKey: string
  contentType: string
  sourceWidth: number
  objectEtag: string
}

export async function createImageAsset(
  ctx: MutationCtx,
  args: CreateImageAssetArgs,
) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new ConvexError("Unauthenticated")

  const existing = await ctx.db
    .query("imageAssets")
    .withIndex("by_imageId", (q) => q.eq("imageId", args.imageId))
    .first()

  if (existing) {
    if (existing.ownerUserId !== identity.subject) {
      throw new ConvexError("Image already exists")
    }
    return existing._id
  }

  return await ctx.db.insert("imageAssets", {
    imageId: args.imageId,
    ownerUserId: identity.subject,
    storageKey: args.storageKey,
    contentType: args.contentType,
    sourceWidth: args.sourceWidth,
    objectEtag: args.objectEtag,
    createdAt: Date.now(),
  })
}

export async function listMyImageAssets(ctx: QueryCtx) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return []

  return await ctx.db
    .query("imageAssets")
    .withIndex("by_owner_createdAt", (q) =>
      q.eq("ownerUserId", identity.subject),
    )
    .order("desc")
    .collect()
}

export async function getOwnedImageAsset(
  ctx: QueryCtx,
  args: { imageId: string },
) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return null

  const asset = await ctx.db
    .query("imageAssets")
    .withIndex("by_imageId", (q) => q.eq("imageId", args.imageId))
    .first()
  if (!asset || asset.ownerUserId !== identity.subject) return null
  return asset
}
