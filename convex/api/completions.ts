import { v } from "convex/values"
import { mutation } from "../_generated/server"
import * as Completions from "../model/completions"

export const completeModule = mutation({
  args: { modulePath: v.string() },
  handler: (ctx, { modulePath }) => Completions.completeModule(ctx, modulePath),
})

export const syncCompletions = mutation({
  args: {
    completions: v.array(
      v.object({ modulePath: v.string(), completedAt: v.number() }),
    ),
  },
  handler: (ctx, { completions }) =>
    Completions.syncCompletions(ctx, completions),
})
