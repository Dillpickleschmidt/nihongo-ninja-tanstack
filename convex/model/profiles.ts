import { MutationCtx, QueryCtx } from '../_generated/server'
import { DEFAULT_USER_PREFERENCES } from '../validators'

/**
 * Gets a profile by user ID (from auth identity subject)
 */
export async function getProfileByUserId(ctx: QueryCtx, userId: string) {
  return ctx.db
    .query('profiles')
    .withIndex('by_user', (q) => q.eq('userId', userId))
    .first()
}

/**
 * Updates a single preference field on a profile
 */
export async function updatePreference(
  ctx: MutationCtx,
  userId: string,
  field: string,
  value: unknown
) {
  const profile = await getProfileByUserId(ctx, userId)
  if (!profile) throw new Error('Profile not found')

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
export async function ensureProfileExists(ctx: MutationCtx, userId: string) {
  let profile = await getProfileByUserId(ctx, userId)

  if (!profile) {
    const id = await ctx.db.insert('profiles', {
      userId: userId as any,
      userPreferences: DEFAULT_USER_PREFERENCES,
    })
    profile = await ctx.db.get(id)
  }

  return profile
}
