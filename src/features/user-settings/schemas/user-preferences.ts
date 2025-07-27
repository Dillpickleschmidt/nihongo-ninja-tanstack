// features/user-settings/schemas/user-preferences.ts
import { z } from "zod"

const ServiceCredentialsSchema = z.object({
  anki: z.object({
    api_key: z.string().default(""),
  }).default({}),
  wanikani: z.object({
    api_key: z.string().uuid().or(z.string().length(0)).default(""),
  }).default({}),
  jpdb: z.object({
    api_key: z.string().length(32).or(z.string().length(0)).default(""),
  }).default({}),
})

const ServicePreferencesSchema = z.object({
  anki: z.object({
    mode: z.string().default("disabled"),
    data_imported: z.boolean().default(false),
    is_api_key_valid: z.boolean().default(false),
  }).default({}),
  wanikani: z.object({
    mode: z.string().default("disabled"),
    data_imported: z.boolean().default(false),
    is_api_key_valid: z.boolean().default(false),
  }).default({}),
  jpdb: z.object({
    mode: z.string().default("disabled"),
    data_imported: z.boolean().default(false),
    is_api_key_valid: z.boolean().default(false),
  }).default({}),
})

export const UserPreferencesSchema = z.object({
  "service-credentials": ServiceCredentialsSchema.default({}),
  "service-preferences": ServicePreferencesSchema.default({}),
  "current-chapter": z.string().default(""),
  timestamp: z.number().default(() => Date.now()),
})

export type UserPreferencesCookieData = z.infer<typeof UserPreferencesSchema>
