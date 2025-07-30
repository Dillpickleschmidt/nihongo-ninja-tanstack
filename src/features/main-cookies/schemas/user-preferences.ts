// features/user-settings/schemas/user-preferences.ts
import { z } from "zod"

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
  api_key: z.string().uuid("Invalid UUID format").or(z.string().length(0)).default(""),
})

const JpdbCredentialsSchema = z.object({
  api_key: z.string().length(32).or(z.string().length(0)).default(""),
})

// Combined service credentials schema
const ServiceCredentialsSchema = z.object({
  anki: AnkiCredentialsSchema.default(AnkiCredentialsSchema.parse({})),
  wanikani: WanikaniCredentialsSchema.default(WanikaniCredentialsSchema.parse({})),
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

// Main user preferences schema
export const UserPreferencesSchema = z.object({
  "service-credentials": ServiceCredentialsSchema.default(ServiceCredentialsSchema.parse({})),
  "service-preferences": ServicePreferencesSchema.default(ServicePreferencesSchema.parse({})),
  "active-textbook": TextbookIDSchema.default(""),
  "active-deck": z.string().max(20).default(""),
  // Use timestamp 0 (very old) for default so it never overrides real user preferences
  timestamp: z.number().default(0),
})

// Inferred types from schemas
export type UserPreferencesCookieData = z.infer<typeof UserPreferencesSchema>
export type ServicePreference = z.infer<typeof ServicePreferenceSchema>
export type ServiceCredentials = z.infer<typeof ServiceCredentialsSchema>
export type AllServicePreferences = z.infer<typeof ServicePreferencesSchema>
export type AllServiceCredentials = z.infer<typeof ServiceCredentialsSchema>
