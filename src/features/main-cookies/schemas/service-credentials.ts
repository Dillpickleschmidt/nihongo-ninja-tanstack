// features/main-cookies/schemas/service-credentials.ts
import { z } from "zod"

// Individual service credential schemas
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

// OAuth token schema for anime services (AniList, Kitsu, MAL)
const OAuthTokenSchema = z.object({
  accessToken: z.string().default(""),
  refreshToken: z.string().default(""),
  expiresAt: z.string().datetime().optional(),
})

// Combined service credentials schema (HttpOnly cookie - server-only)
export const ServiceCredentialsSchema = z.object({
  wanikani: WanikaniCredentialsSchema.default(
    WanikaniCredentialsSchema.parse({}),
  ),
  jpdb: JpdbCredentialsSchema.default(JpdbCredentialsSchema.parse({})),
  anilist: OAuthTokenSchema.default(OAuthTokenSchema.parse({})),
  kitsu: OAuthTokenSchema.default(OAuthTokenSchema.parse({})),
  mal: OAuthTokenSchema.default(OAuthTokenSchema.parse({})),
})

// Inferred types
export type ServiceCredentials = z.infer<typeof ServiceCredentialsSchema>
export type WanikaniCredentials = z.infer<typeof WanikaniCredentialsSchema>
export type JpdbCredentials = z.infer<typeof JpdbCredentialsSchema>
export type OAuthToken = z.infer<typeof OAuthTokenSchema>
