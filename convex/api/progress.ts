import { v } from "convex/values"
import { mutation, query } from "../_generated/server"
import * as Progress from "../model/progress"

export const recordProgressEvent = mutation({
  args: {
    modulePath: v.string(),
    moduleType: v.string(),
    progressUnitsDelta: v.number(),
    questionsAnsweredDelta: v.number(),
    eventTs: v.number(),
    timeZone: v.string(),
  },
  handler: (ctx, args) => Progress.recordProgressEvent(ctx, args),
})

export const getDailyModuleStatsForDate = query({
  args: {
    dateKey: v.string(),
  },
  handler: (ctx, { dateKey }) =>
    Progress.getDailyModuleStatsForDate(ctx, dateKey),
})

export const getDailyProgress = query({
  args: {
    dateKey: v.string(),
  },
  handler: (ctx, { dateKey }) => Progress.getDailyProgress(ctx, dateKey),
})

export const getRecentModuleActivity = query({
  args: {
    limit: v.number(),
  },
  handler: (ctx, { limit }) => Progress.getRecentModuleActivity(ctx, limit),
})

export const getDailyProgressRange = query({
  args: {
    fromDateKey: v.string(),
    toDateKey: v.string(),
  },
  handler: (ctx, { fromDateKey, toDateKey }) =>
    Progress.getDailyProgressRange(ctx, fromDateKey, toDateKey),
})

export const getDistribution = query({
  args: {
    fromDateKey: v.string(),
    toDateKey: v.string(),
  },
  handler: (ctx, { fromDateKey, toDateKey }) =>
    Progress.getDistribution(ctx, fromDateKey, toDateKey),
})
