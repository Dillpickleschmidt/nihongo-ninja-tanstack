import type { MutationCtx, QueryCtx } from "../_generated/server"
import type { Doc } from "../_generated/dataModel"

type ProgressEventInput = {
  modulePath: string
  moduleType: string
  progressUnitsDelta: number
  questionsAnsweredDelta: number
  eventTs: number
  timeZone: string
}

type DailySummary = {
  dateKey: string
  progressUnits: number
  questionsAnswered: number
}

export async function recordProgressEvent(
  ctx: MutationCtx,
  input: ProgressEventInput,
) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) throw new Error("Unauthenticated")

  const userId = identity.subject
  const dateKey = toDateKey(input.eventTs, input.timeZone)
  const now = Date.now()

  const existing = await ctx.db
    .query("userDailyModuleStats")
    .withIndex("by_user_date_module", (q) =>
      q.eq("userId", userId)
        .eq("dateKey", dateKey)
        .eq("modulePath", input.modulePath),
    )
    .filter((q) => q.eq(q.field("moduleType"), input.moduleType))
    .first()

  if (existing) {
    await ctx.db.patch(existing._id, {
      progressUnits: existing.progressUnits + input.progressUnitsDelta,
      questionsAnswered:
        existing.questionsAnswered + input.questionsAnsweredDelta,
      lastUpdatedAt: now,
    })
    return { dateKey, updated: true }
  }

  await ctx.db.insert("userDailyModuleStats", {
    userId,
    dateKey,
    modulePath: input.modulePath,
    moduleType: input.moduleType,
    progressUnits: input.progressUnitsDelta,
    questionsAnswered: input.questionsAnsweredDelta,
    lastUpdatedAt: now,
  })

  return { dateKey, updated: false }
}

export async function getDailyModuleStatsForDate(
  ctx: QueryCtx,
  dateKey: string,
) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return []

  return ctx.db
    .query("userDailyModuleStats")
    .withIndex("by_user_date", (q) =>
      q.eq("userId", identity.subject).eq("dateKey", dateKey),
    )
    .collect()
}

export async function getRecentModuleActivity(
  ctx: QueryCtx,
  limit: number,
): Promise<Doc<"userDailyModuleStats">[]> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return []

  const rows = await ctx.db
    .query("userDailyModuleStats")
    .withIndex("by_user_lastUpdated", (q) => q.eq("userId", identity.subject))
    .order("desc")
    .take(Math.max(limit * 4, limit))

  const seen = new Set<string>()
  const unique: Doc<"userDailyModuleStats">[] = []

  for (const row of rows) {
    const key = `${row.moduleType}:${row.modulePath}`
    if (seen.has(key)) continue
    seen.add(key)
    unique.push(row)
    if (unique.length >= limit) break
  }

  return unique
}

export async function getDailyProgressRange(
  ctx: QueryCtx,
  fromDateKey: string,
  toDateKey: string,
): Promise<DailySummary[]> {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return []

  const rows = await ctx.db
    .query("userDailyModuleStats")
    .withIndex("by_user_date", (q) =>
      q
        .eq("userId", identity.subject)
        .gte("dateKey", fromDateKey)
        .lte("dateKey", toDateKey),
    )
    .collect()

  const grouped = new Map<string, DailySummary>()

  for (const row of rows) {
    const existing = grouped.get(row.dateKey)
    if (existing) {
      existing.progressUnits += row.progressUnits
      existing.questionsAnswered += row.questionsAnswered
    } else {
      grouped.set(row.dateKey, {
        dateKey: row.dateKey,
        progressUnits: row.progressUnits,
        questionsAnswered: row.questionsAnswered,
      })
    }
  }

  return Array.from(grouped.values()).sort((a, b) =>
    a.dateKey.localeCompare(b.dateKey),
  )
}

export async function getDistribution(
  ctx: QueryCtx,
  fromDateKey: string,
  toDateKey: string,
) {
  const identity = await ctx.auth.getUserIdentity()
  if (!identity) return []

  const filtered = await ctx.db
    .query("userDailyModuleStats")
    .withIndex("by_user_date", (q) =>
      q
        .eq("userId", identity.subject)
        .gte("dateKey", fromDateKey)
        .lte("dateKey", toDateKey),
    )
    .collect()

  const grouped = new Map<
    string,
    { moduleType: string; progressUnits: number; questionsAnswered: number }
  >()

  for (const row of filtered) {
    const existing = grouped.get(row.moduleType)
    if (existing) {
      existing.progressUnits += row.progressUnits
      existing.questionsAnswered += row.questionsAnswered
    } else {
      grouped.set(row.moduleType, {
        moduleType: row.moduleType,
        progressUnits: row.progressUnits,
        questionsAnswered: row.questionsAnswered,
      })
    }
  }

  return Array.from(grouped.values()).sort(
    (a, b) => b.progressUnits - a.progressUnits,
  )
}

export async function getDailyProgress(
  ctx: QueryCtx,
  dateKey: string,
): Promise<DailySummary> {
  const rows = await getDailyModuleStatsForDate(ctx, dateKey)

  return rows.reduce<DailySummary>(
    (acc, row) => {
      acc.progressUnits += row.progressUnits
      acc.questionsAnswered += row.questionsAnswered
      return acc
    },
    { dateKey, progressUnits: 0, questionsAnswered: 0 },
  )
}

function toDateKey(eventTs: number, timeZone: string): string {
  const zone = safeTimeZone(timeZone)
  const parts = getDatePartsInTimeZone(eventTs, zone)

  if (parts.hour < 4) {
    return decrementDateKey(`${parts.year}-${parts.month}-${parts.day}`)
  }

  return `${parts.year}-${parts.month}-${parts.day}`
}

function safeTimeZone(timeZone: string): string {
  try {
    Intl.DateTimeFormat("en-US", { timeZone }).format(new Date())
    return timeZone
  } catch {
    return "UTC"
  }
}

function getDatePartsInTimeZone(eventTs: number, timeZone: string) {
  const formatted = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hour12: false,
  }).formatToParts(new Date(eventTs))

  const get = (type: string) =>
    formatted.find((part) => part.type === type)?.value || "00"

  return {
    year: get("year"),
    month: get("month"),
    day: get("day"),
    hour: Number(get("hour")),
  }
}

function decrementDateKey(dateKey: string): string {
  const [year, month, day] = dateKey.split("-").map((v) => Number(v))
  const d = new Date(Date.UTC(year, month - 1, day))
  d.setUTCDate(d.getUTCDate() - 1)

  const y = d.getUTCFullYear()
  const m = String(d.getUTCMonth() + 1).padStart(2, "0")
  const dd = String(d.getUTCDate()).padStart(2, "0")
  return `${y}-${m}-${dd}`
}
