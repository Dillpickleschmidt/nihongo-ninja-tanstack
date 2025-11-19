import { createFileRoute } from "@tanstack/solid-router"
import { json } from "@tanstack/solid-start"
import { getUser } from "@/features/supabase/getUser"
import {
  getServiceCredentials,
  updateServiceCredentials,
} from "@/features/main-cookies/functions/service-credentials"
import { storeTokenInDB } from "@/features/supabase/db/anime-auth"
import { setAniListToken } from "@/features/explore/api/anilist/urql-client"
import { serviceConfigs } from "@/features/service-api-functions/service-configs"
import type { ServiceType } from "@/features/main-cookies/schemas/user-settings"

/**
 * Stores token in HTTP-only cookie and database
 */
export const Route = createFileRoute("/api/auth/$service")({
  server: {
    handlers: {
      POST: async ({ request, params }) => {
        try {
          // Get authenticated user
          const userResult = await getUser()
          if (!userResult.user) {
            return json({ error: "Not authenticated" }, { status: 401 })
          }

          const service = params.service as ServiceType

          // Get service-specific configuration
          const serviceConfig = serviceConfigs[service]
          if (!serviceConfig) {
            return json(
              { error: `Unknown service: ${service}` },
              { status: 400 },
            )
          }

          // Parse request body
          const body = await request.json()

          // Validate request using service-specific validator
          const validation = serviceConfig.validateRequest(body)
          if (validation.error) {
            return json({ error: validation.error }, { status: 400 })
          }

          // Determine redirect URI from request host
          const host = request.headers.get("host")
          const protocol =
            host?.includes("localhost") || host?.includes("127.0.0.1")
              ? "http"
              : "https"
          const redirectUri = `${protocol}://${host}/oauth-callback`

          // Exchange credentials for token using service-specific logic
          const tokenData = await serviceConfig.exchangeToken(body, redirectUri)

          // Update cookie with new token
          const currentCredentials = await getServiceCredentials()
          const updatedCredentials = {
            ...currentCredentials,
            [service]: {
              accessToken: tokenData.accessToken,
              refreshToken: tokenData.refreshToken,
              expiresAt: tokenData.expiresAt,
            },
          }

          await updateServiceCredentials({ data: updatedCredentials })

          // Set token in URQL client cache for AniList
          if (service === "anilist") {
            setAniListToken(tokenData.accessToken, tokenData.expiresAt)
          }

          // Store token in database for cross-device sync
          try {
            await storeTokenInDB({
              data: {
                service,
                accessToken: tokenData.accessToken,
                refreshToken: tokenData.refreshToken,
                expiresAt: tokenData.expiresAt,
              },
            })
          } catch (error) {
            // Don't fail the request if DB storage fails - cookie is sufficient
          }

          return json({
            success: true,
            message: `${service} authenticated successfully`,
          })
        } catch (error) {
          const errorMsg =
            error instanceof Error ? error.message : "Authentication failed"
          return json({ error: errorMsg }, { status: 500 })
        }
      },
    },
  },
})
