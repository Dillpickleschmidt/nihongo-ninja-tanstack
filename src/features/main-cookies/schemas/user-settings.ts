// features/main-cookies/schemas/user-settings.ts
import { z } from "zod"
import { ConjugationPracticeSettingsSchema } from "@/features/conjugation-practice/schemas/settings"

// ============================================================================
// SERVICE PREFERENCES (user-specific, syncs to DB)
// ============================================================================

export type ServiceType = "anki" | "wanikani" | "jpdb"
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
})

// ============================================================================
// TEXTBOOK & DECK SETTINGS (user-specific, syncs to DB)
// ============================================================================

const TextbookIDSchema = z.enum(["genki_1", "genki_2"]).or(z.string().length(0))

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
  "flip-vocab-qa": z.boolean().default(false),
  "flip-kanji-radical-qa": z.boolean().default(true),
})

const TourSettingsSchema = z.object({
  currentTourId: z.string().nullable().default(null),
  currentTourStep: z.number().default(0), // -1 = dismissed, 0+ = active step
})

const RouteSettingsSchema = z.object({
  vocab: VocabRouteSettingsSchema.default(VocabRouteSettingsSchema.parse({})),
  "vocab-practice": VocabPracticeSettingsSchema.default(
    VocabPracticeSettingsSchema.parse({}),
  ),
})

// ============================================================================
// COMBINED USER SETTINGS SCHEMA
// ============================================================================

export const UserSettingsSchema = z.object({
  // --- USER-SPECIFIC SETTINGS (syncs to DB) ---
  "service-preferences": ServicePreferencesSchema.default(
    ServicePreferencesSchema.parse({}),
  ),
  "active-textbook": TextbookIDSchema.default("genki_1"),
  "active-deck": z.string().max(20).default("chapter-0"),
  "completed-tours": z.array(z.string()).default([]),
  "override-settings": OverrideSettingsSchema.default({
    vocabularyOverrides: DEFAULT_VOCABULARY_STACKS,
    kanjiOverrides: DEFAULT_KANJI_STACKS,
  }),
  "conjugation-practice": ConjugationPracticeSettingsSchema.default(
    ConjugationPracticeSettingsSchema.parse({}),
  ),
  "textbook-positions": z.record(z.string(), z.string()).default({}),
  timestamp: z.number().default(0),

  // --- DEVICE-SPECIFIC SETTINGS (cookie only, no DB sync) ---
  routes: RouteSettingsSchema.default(RouteSettingsSchema.parse({})),
  tour: TourSettingsSchema.default(TourSettingsSchema.parse({})),
  "device-type": z.enum(["mobile", "desktop"]).nullable().default(null),
})

// ============================================================================
// EXPORTED TYPES
// ============================================================================

export type UserSettings = z.infer<typeof UserSettingsSchema>
export type ServicePreference = z.infer<typeof ServicePreferenceSchema>
export type AllServicePreferences = z.infer<typeof ServicePreferencesSchema>
