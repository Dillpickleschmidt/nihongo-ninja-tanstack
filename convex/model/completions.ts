import type { MutationCtx, QueryCtx } from "../_generated/server"

/**
 * Gets all completed module paths for the authenticated user.
 */
export async function getCompletedModules(ctx: QueryCtx) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return null

  const completions = await ctx.db
    .query("userCompletedModules")
    .withIndex("by_user", (q) => q.eq("userId", identity.subject))
    .collect()

  return completions.map((c) => c.modulePath)
}

/**
 * Marks a module as completed (idempotent).
 */
export async function completeModule(ctx: MutationCtx, modulePath: string) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new Error("Unauthenticated")

  const existing = await ctx.db
    .query("userCompletedModules")
    .withIndex("by_user_module", (q) =>
      q.eq("userId", identity.subject).eq("modulePath", modulePath),
    )
    .first()

  if (existing) return

  await ctx.db.insert("userCompletedModules", {
    userId: identity.subject,
    modulePath,
    completedAt: Date.now(),
  })
}

/**
 * Syncs local completions to the database (for guest → authenticated transition).
 */
export async function syncCompletions(
  ctx: MutationCtx,
  completions: { modulePath: string; completedAt: number }[],
) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new Error("Unauthenticated")

  const existing = await ctx.db
    .query("userCompletedModules")
    .withIndex("by_user", (q) => q.eq("userId", identity.subject))
    .collect()

  const existingPaths = new Set(existing.map((c) => c.modulePath))

  for (const completion of completions) {
    if (!existingPaths.has(completion.modulePath)) {
      await ctx.db.insert("userCompletedModules", {
        userId: identity.subject,
        modulePath: completion.modulePath,
        completedAt: completion.completedAt,
      })
    }
  }
}
