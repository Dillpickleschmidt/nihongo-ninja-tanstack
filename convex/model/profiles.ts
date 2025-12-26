import { MutationCtx, QueryCtx } from "../_generated/server"
import { DEFAULT_USER_PREFERENCES } from "../validators"

/**
 * Gets the current user's profile
 */
export async function getProfile(ctx: QueryCtx) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return null

  return ctx.db
    .query("profiles")
    .withIndex("by_user", (q) => q.eq("userId", identity.subject))
    .first()
}

/**
 * Updates a single preference field on the current user's profile
 */
export async function updatePreference(
  ctx: MutationCtx,
  field: string,
  value: unknown,
) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new Error("Unauthenticated")

  const profile = await ctx.db
    .query("profiles")
    .withIndex("by_user", (q) => q.eq("userId", identity.subject))
    .first()
  if (!profile) throw new Error("Profile not found")

  await ctx.db.patch(profile._id, {
    userPreferences: {
      ...profile.userPreferences,
      [field]: value,
      timestamp: Date.now(),
    },
  })

  return { success: true }
}

/**
 * Creates a profile with default preferences if one doesn't exist.
 * Returns the existing or newly created profile.
 */
export async function ensureProfileExists(ctx: MutationCtx) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return null

  let profile = await ctx.db
    .query("profiles")
    .withIndex("by_user", (q) => q.eq("userId", identity.subject))
    .first()

  if (!profile) {
    const id = await ctx.db.insert("profiles", {
      userId: identity.subject,
      userPreferences: DEFAULT_USER_PREFERENCES,
    })
    profile = await ctx.db.get(id)
  }

  return profile
}
