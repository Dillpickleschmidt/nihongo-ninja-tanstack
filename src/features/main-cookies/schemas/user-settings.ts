// features/main-cookies/schemas/user-settings.ts
import { z } from "zod"
import { ConjugationPracticeSettingsSchema } from "@/features/conjugation-practice/schemas/settings"

// ============================================================================
// SERVICE PREFERENCES (user-specific, syncs to DB)
// ============================================================================

export type ServiceType =
  | "anki"
  | "wanikani"
  | "jpdb"
  | "anilist"
  | "kitsu"
  | "mal"
export type ServiceMode = "disabled" | "live" | "imported"

const ServicePreferenceSchema = z.object({
  mode: z.string().default("disabled"),
  data_imported: z.boolean().default(false),
  is_api_key_valid: z.boolean().default(false),
})

const ServicePreferencesSchema = z.object({
  anki: ServicePreferenceSchema.default(ServicePreferenceSchema.parse({})),
  wanikani: ServicePreferenceSchema.default(ServicePreferenceSchema.parse({})),
  jpdb: ServicePreferenceSchema.default(ServicePreferenceSchema.parse({})),
  anilist: ServicePreferenceSchema.default(ServicePreferenceSchema.parse({})),
  kitsu: ServicePreferenceSchema.default(ServicePreferenceSchema.parse({})),
  mal: ServicePreferenceSchema.default(ServicePreferenceSchema.parse({})),
})

// ============================================================================
// LEARNING PATH & CHAPTER SETTINGS (user-specific, syncs to DB)
// ============================================================================

const TextbookIDSchema = z
  .enum(["getting_started", "genki_1", "genki_2"])
  .or(z.string().length(0))

// ============================================================================
// STACK OVERRIDE SETTINGS (user-specific, syncs to DB)
// ============================================================================

export const StackSchema = z.object({
  name: z.string(),
  enabled: z.boolean(),
  locked: z.boolean(),
  sourceId: z.string(),
  priority: z.number(),
})

export const DEFAULT_VOCABULARY_STACKS: z.infer<typeof StackSchema>[] = [
  {
    name: "Your Decks",
    enabled: true,
    locked: true,
    sourceId: "user-decks",
    priority: 0,
  },
  {
    name: "Built-in Vocabulary",
    enabled: true,
    locked: true,
    sourceId: "vocabulary.ts",
    priority: 999,
  },
]

export const DEFAULT_KANJI_STACKS: z.infer<typeof StackSchema>[] = [
  {
    name: "JPDB Keywords",
    enabled: false,
    locked: false,
    sourceId:
      "https://zsllzwieciplioikzzmq.supabase.co/storage/v1/object/public/jpdb-keywords/jpdb-keywords.json",
    priority: 500,
  },
  {
    name: "WaniKani",
    enabled: true,
    locked: true,
    sourceId: "wanikani.db",
    priority: 999,
  },
]

export const OverrideSettingsSchema = z.object({
  vocabularyOverrides: z.array(StackSchema),
  kanjiOverrides: z.array(StackSchema),
})

// ============================================================================
// DEVICE-SPECIFIC UI SETTINGS (device-specific, cookie only)
// ============================================================================

const VocabRouteSettingsSchema = z.object({
  leftSidebarExpand: z.boolean().default(true),
  rightSidebarExpand: z.boolean().default(true),
})

const VocabPracticeSettingsSchema = z.object({
  "shuffle-answers": z.boolean().default(true),
  "enable-kanji-radical-prereqs": z.boolean().default(true),
})

const RouteSettingsSchema = z.object({
  vocab: VocabRouteSettingsSchema.default(VocabRouteSettingsSchema.parse({})),
  "vocab-practice": VocabPracticeSettingsSchema.default(
    VocabPracticeSettingsSchema.parse({}),
  ),
})

// ============================================================================
// DATABASE-SYNCED SETTINGS SCHEMA (syncs across devices via DB)
// ============================================================================

export const DbSyncedSettingsSchema = z.object({
  "service-preferences": ServicePreferencesSchema.default(
    ServicePreferencesSchema.parse({}),
  ),
  "active-learning-path": z.string().default("getting_started"),
  "active-chapter": z.string().max(20).default("n5-introduction"),
  "has-completed-onboarding": z.boolean().default(false),
  tours: z.record(z.string(), z.number()).default({}), // tourId -> step (-2=completed, -1=dismissed, 0+=active)
  "override-settings": OverrideSettingsSchema.default({
    vocabularyOverrides: DEFAULT_VOCABULARY_STACKS,
    kanjiOverrides: DEFAULT_KANJI_STACKS,
  }),
  "conjugation-practice": ConjugationPracticeSettingsSchema.default(
    ConjugationPracticeSettingsSchema.parse({}),
  ),
  timestamp: z.number().default(0),
})

// ============================================================================
// DEVICE-SPECIFIC SETTINGS SCHEMA (cookie only, no DB sync)
// ============================================================================

export const DeviceSettingsSchema = z.object({
  routes: RouteSettingsSchema.default(RouteSettingsSchema.parse({})),
  "device-type": z.enum(["mobile", "desktop"]).nullable().default(null),
})

// ============================================================================
// COMBINED USER SETTINGS SCHEMA
// ============================================================================

export const UserSettingsSchema =
  DbSyncedSettingsSchema.and(DeviceSettingsSchema)

// ============================================================================
// EXPORTED TYPES
// ============================================================================

export type DbSyncedSettings = z.infer<typeof DbSyncedSettingsSchema>
export type DeviceSettings = z.infer<typeof DeviceSettingsSchema>
export type UserSettings = z.infer<typeof UserSettingsSchema>
export type ServicePreference = z.infer<typeof ServicePreferenceSchema>
export type AllServicePreferences = z.infer<typeof ServicePreferencesSchema>
