// features/main-cookies/schemas/user-preferences.ts
import { z } from "zod"
import { ConjugationPracticeSettingsSchema } from "@/features/conjugation-practice/schemas/settings"

// Service-related utility types
export type ServiceType = "anki" | "wanikani" | "jpdb"
export type ServiceMode = "disabled" | "live" | "imported"

// TextbookID validation schema
const TextbookIDSchema = z.enum(["genki_1", "genki_2"]).or(z.string().length(0))

// Individual service credential schemas
const AnkiCredentialsSchema = z.object({
  api_key: z.string().default(""),
})

const WanikaniCredentialsSchema = z.object({
  api_key: z
    .string()
    .uuid("Invalid UUID format")
    .or(z.string().length(0))
    .default(""),
})

const JpdbCredentialsSchema = z.object({
  api_key: z.string().length(32).or(z.string().length(0)).default(""),
})

// Combined service credentials schema
const ServiceCredentialsSchema = z.object({
  anki: AnkiCredentialsSchema.default(AnkiCredentialsSchema.parse({})),
  wanikani: WanikaniCredentialsSchema.default(
    WanikaniCredentialsSchema.parse({}),
  ),
  jpdb: JpdbCredentialsSchema.default(JpdbCredentialsSchema.parse({})),
})

// Individual service preference schema
const ServicePreferenceSchema = z.object({
  mode: z.string().default("disabled"),
  data_imported: z.boolean().default(false),
  is_api_key_valid: z.boolean().default(false),
})

// Combined service preferences schema
const ServicePreferencesSchema = z.object({
  anki: ServicePreferenceSchema.default(ServicePreferenceSchema.parse({})),
  wanikani: ServicePreferenceSchema.default(ServicePreferenceSchema.parse({})),
  jpdb: ServicePreferenceSchema.default(ServicePreferenceSchema.parse({})),
})

/**
 * Schema for both vocabulary and kanji stacks (identical structure)
 */
export const StackSchema = z.object({
  name: z.string(),
  enabled: z.boolean(),
  locked: z.boolean(),
  sourceId: z.string(),
  priority: z.number(),
})

/**
 * Default stack configurations
 */
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

/**
 * Zod schema for complete override settings validation
 */
export const OverrideSettingsSchema = z.object({
  vocabularyOverrides: z.array(StackSchema),
  kanjiOverrides: z.array(StackSchema),
})

// Main user preferences schema
export const UserPreferencesSchema = z.object({
  "service-credentials": ServiceCredentialsSchema.default(
    ServiceCredentialsSchema.parse({}),
  ),
  "service-preferences": ServicePreferencesSchema.default(
    ServicePreferencesSchema.parse({}),
  ),
  "active-textbook": TextbookIDSchema.default(""),
  "active-deck": z.string().max(20).default(""),
  "completed-tours": z.array(z.string()).default([]),
  "override-settings": OverrideSettingsSchema.default({
    vocabularyOverrides: DEFAULT_VOCABULARY_STACKS,
    kanjiOverrides: DEFAULT_KANJI_STACKS,
  }),
  "conjugation-practice": ConjugationPracticeSettingsSchema.default(
    ConjugationPracticeSettingsSchema.parse({}),
  ),
  timestamp: z.number().default(0),
})

// Inferred types from schemas
export type UserPreferences = z.infer<typeof UserPreferencesSchema>
export type ServicePreference = z.infer<typeof ServicePreferenceSchema>
export type ServiceCredentials = z.infer<typeof ServiceCredentialsSchema>
export type AllServicePreferences = z.infer<typeof ServicePreferencesSchema>
export type AllServiceCredentials = z.infer<typeof ServiceCredentialsSchema>
