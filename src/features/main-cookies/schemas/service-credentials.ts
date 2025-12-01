// features/main-cookies/schemas/service-credentials.ts
import { z } from "zod"

// OAuth token schema for anime services (AniList, Kitsu, MAL)
const OAuthTokenSchema = z.object({
  accessToken: z.string().default(""),
  refreshToken: z.string().default(""),
  expiresAt: z.string().datetime().optional(),
})

// Combined service credentials schema (HttpOnly cookie - server-only)
export const ServiceCredentialsSchema = z.object({
  anilist: OAuthTokenSchema.default(OAuthTokenSchema.parse({})),
  kitsu: OAuthTokenSchema.default(OAuthTokenSchema.parse({})),
  mal: OAuthTokenSchema.default(OAuthTokenSchema.parse({})),
})

// Inferred types
export type ServiceCredentials = z.infer<typeof ServiceCredentialsSchema>
export type OAuthToken = z.infer<typeof OAuthTokenSchema>
