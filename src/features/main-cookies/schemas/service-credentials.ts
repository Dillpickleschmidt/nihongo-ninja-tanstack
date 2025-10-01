// features/main-cookies/schemas/service-credentials.ts
import { z } from "zod"

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

// Combined service credentials schema (HttpOnly cookie - server-only)
export const ServiceCredentialsSchema = z.object({
  anki: AnkiCredentialsSchema.default(AnkiCredentialsSchema.parse({})),
  wanikani: WanikaniCredentialsSchema.default(
    WanikaniCredentialsSchema.parse({}),
  ),
  jpdb: JpdbCredentialsSchema.default(JpdbCredentialsSchema.parse({})),
})

// Inferred types
export type ServiceCredentials = z.infer<typeof ServiceCredentialsSchema>
export type AnkiCredentials = z.infer<typeof AnkiCredentialsSchema>
export type WanikaniCredentials = z.infer<typeof WanikaniCredentialsSchema>
export type JpdbCredentials = z.infer<typeof JpdbCredentialsSchema>
