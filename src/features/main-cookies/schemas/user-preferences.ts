// features/main-cookies/schemas/user-preferences.ts
import { z } from "zod"
import type { OverrideSettings } from "@/features/resolvers/types"

/**
 * Main user preferences type - explicit for clarity and database integration
 * Enhanced via global.d.ts for Database type compatibility
 */
export type UserPreferences = {
  "service-credentials": {
    anki: { api_key: string }
    wanikani: { api_key: string }
    jpdb: { api_key: string }
  }
  "service-preferences": {
    anki: { mode: string; data_imported: boolean; is_api_key_valid: boolean }
    wanikani: {
      mode: string
      data_imported: boolean
      is_api_key_valid: boolean
    }
    jpdb: { mode: string; data_imported: boolean; is_api_key_valid: boolean }
  }
  "active-textbook": string
  "active-deck": string
  "completed-tours": string[]
  "override-settings"?: OverrideSettings
  timestamp: number
}

// =============================================================================
// ZOD VALIDATION SCHEMAS
// =============================================================================

/**
 * Schema for both vocabulary and kanji stacks (identical structure)
 */
export const StackSchema = z.object({
  name: z.string(),
  enabled: z.boolean(),
  locked: z.boolean(),
  sourceType: z.enum([
    "user-deck",
    "jpdb-import",
    "wanikani-import",
    "built-in",
    "json",
  ]),
  sourceId: z.string(),
  priority: z.number(),
})

/**
 * Zod schema for complete override settings validation
 */
export const OverrideSettingsSchema = z.object({
  vocabularyOverrides: z.array(StackSchema),
  kanjiOverrides: z.array(StackSchema),
})

/**
 * Service-related schemas for inference
 */
export const ServicePreferenceSchema = z.object({
  mode: z.string(),
  data_imported: z.boolean(),
  is_api_key_valid: z.boolean(),
})

/**
 * Centralized defaults object - single source of truth
 */
const SERVICES = ["anki", "wanikani", "jpdb"] as const
const DEFAULT_SERVICE_PREFERENCE = {
  mode: "disabled",
  data_imported: false,
  is_api_key_valid: false,
}

const DEFAULT_USER_PREFERENCES: UserPreferences = {
  "service-credentials": Object.fromEntries(
    SERVICES.map((service) => [service, { api_key: "" }]),
  ) as UserPreferences["service-credentials"],
  "service-preferences": Object.fromEntries(
    SERVICES.map((service) => [service, DEFAULT_SERVICE_PREFERENCE]),
  ) as UserPreferences["service-preferences"],
  "active-textbook": "",
  "active-deck": "",
  "completed-tours": [],
  timestamp: 0,
}

/**
 * Ultra-clean runtime validation schema with full type safety
 */
const ServiceCredentialSchema = z.object({ api_key: z.string() })

export const UserPreferencesSchema = z
  .object({
    "service-credentials": z.object(
      Object.fromEntries(
        SERVICES.map((service) => [service, ServiceCredentialSchema]),
      ),
    ),
    "service-preferences": z.object(
      Object.fromEntries(
        SERVICES.map((service) => [service, ServicePreferenceSchema]),
      ),
    ),
    "active-textbook": z.string(),
    "active-deck": z.string().max(20),
    "completed-tours": z.array(z.string()),
    "override-settings": OverrideSettingsSchema.optional(),
    timestamp: z.number(),
  })
  .default(DEFAULT_USER_PREFERENCES)

/**
 * Hybrid approach: infer helper types where beneficial
 */
export type ServicePreference = z.infer<typeof ServicePreferenceSchema>
