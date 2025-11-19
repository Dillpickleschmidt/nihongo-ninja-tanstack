import { For, Show } from "solid-js"
import { useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import { useServiceManagement } from "../context/ServiceManagementContext"
import { Button } from "@/components/ui/button"
import { useQueryClient } from "@tanstack/solid-query"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { serviceConnectionStatusQueryOptions } from "@/query/query-options"
import { queryKeys } from "@/query/utils/query-keys"
import type { AnimeServiceType } from "@/features/main-cookies/schemas/user-settings"
import {
  getServiceCredentials,
  updateServiceCredentials,
} from "@/features/main-cookies/functions/service-credentials"
import { deleteTokenFromDB } from "@/features/supabase/db/anime-auth"

interface AnimeService {
  id: AnimeServiceType
  name: string
  icon: string
  color: string
}

const ANIME_SERVICES: AnimeService[] = [
  {
    id: "anilist",
    name: "AniList",
    icon: "📺",
    color: "from-blue-600 to-blue-700",
  },
  {
    id: "kitsu",
    name: "Kitsu",
    icon: "🎬",
    color: "from-orange-600 to-orange-700",
  },
  {
    id: "mal",
    name: "MyAnimeList",
    icon: "🎞️",
    color: "from-red-600 to-red-700",
  },
]

/**
 * Opens AniList OAuth popup and waits for callback with authorization code
 */
async function openAniListOAuthPopup(clientId: string): Promise<string> {
  const redirectUri = `${window.location.origin}/oauth-callback`

  const authUrl = new URL("https://anilist.co/api/v2/oauth/authorize")
  authUrl.searchParams.append("client_id", clientId)
  authUrl.searchParams.append("response_type", "code")
  authUrl.searchParams.append("redirect_uri", redirectUri)

  const popup = window.open(
    authUrl.toString(),
    "anilist-auth",
    "width=500,height=600",
  )

  return new Promise((resolve, reject) => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return

      if (event.data?.type === "oauth_callback" && event.data?.code) {
        cleanup()
        resolve(event.data.code)
      }
    }

    const checkPopupClosed = setInterval(() => {
      if (popup?.closed) {
        cleanup()
        reject(new Error("OAuth popup was closed"))
      }
    }, 1000)

    const cleanup = () => {
      window.removeEventListener("message", handleMessage)
      clearInterval(checkPopupClosed)
    }

    window.addEventListener("message", handleMessage)
  })
}

/**
 * Exchanges OAuth code for access token via backend API
 */
async function exchangeAniListCode(code: string): Promise<void> {
  const response = await fetch("/api/auth/anilist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code }),
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.error || "Token exchange failed")
  }
}

/**
 * Clears OAuth token from cookie, database, and URQL cache
 */
async function disconnectService(
  serviceId: AnimeServiceType,
  userId: string | null,
): Promise<void> {
  // Update cookie
  const credentials = await getServiceCredentials()
  await updateServiceCredentials({
    data: {
      ...credentials,
      [serviceId]: {
        accessToken: "",
        refreshToken: "",
        expiresAt: undefined,
      },
    },
  })

  // Clear from database
  if (userId) {
    try {
      await deleteTokenFromDB({ data: { service: serviceId } })
    } catch {
      // Continue even if DB deletion fails
    }
  }
}

export const ServiceAuthSection = () => {
  const context = useRouteContext({ from: RootRoute.id })
  const userId = context().user?.id || null
  const queryClient = useQueryClient()

  const {
    setAnimeError,
    clearAnimeError,
    setIsProcessing,
    isProcessing,
    animeErrors,
  } = useServiceManagement()

  // Query for service connection status - only returns booleans, safe to cache
  const connectionStatusQuery = useCustomQuery(() =>
    serviceConnectionStatusQueryOptions(userId),
  )

  const handleConnect = async (serviceId: AnimeServiceType) => {
    if (serviceId !== "anilist") return // Only AniList is implemented

    setIsProcessing(true)
    clearAnimeError(serviceId)

    try {
      const clientId = import.meta.env.VITE_ANILIST_CLIENT_ID
      if (!clientId) {
        throw new Error("AniList not configured")
      }

      const code = await openAniListOAuthPopup(clientId)
      await exchangeAniListCode(code)

      // Refetch credentials - triggers automatic UI update
      await queryClient.invalidateQueries({
        queryKey: queryKeys.serviceConnectionStatus(userId),
      })
    } catch (error) {
      const errorMsg =
        error instanceof Error ? error.message : "Authentication failed"
      setAnimeError(serviceId, errorMsg)
    } finally {
      setIsProcessing(false)
    }
  }

  const handleDisconnect = async (serviceId: AnimeServiceType) => {
    setIsProcessing(true)
    clearAnimeError(serviceId)

    try {
      await disconnectService(serviceId, userId)

      // Refetch credentials - triggers automatic UI update
      await queryClient.invalidateQueries({
        queryKey: queryKeys.serviceConnectionStatus(userId),
      })
    } catch (error) {
      const errorMsg =
        error instanceof Error ? error.message : "Disconnect failed"
      setAnimeError(serviceId, errorMsg)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div class="space-y-4">
      <div>
        <h2 class="text-2xl font-bold">Anime Service Connections</h2>
        <p class="text-muted-foreground mt-1 text-sm">
          Connect to anime tracking services to sync your watching list and get
          personalized recommendations.
        </p>
      </div>

      <Show
        when={userId}
        fallback={
          <div class="rounded-lg border border-neutral-700 bg-neutral-950 p-6">
            <div class="text-center">
              <p class="text-muted-foreground mb-4">
                Log in to your account to connect anime tracking services.
              </p>
              <a
                href="/auth"
                class="inline-block rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Log In
              </a>
            </div>
          </div>
        }
      >
        <div class="space-y-3">
          <For each={ANIME_SERVICES}>
            {(service) => (
              <div
                class={`overflow-hidden rounded-lg border border-neutral-700 transition-all ${
                  !!connectionStatusQuery.data?.[service.id]
                    ? "bg-neutral-900"
                    : "bg-neutral-950"
                }`}
              >
                {/* Top Row - Connection Status */}
                <div class={`bg-gradient-to-r ${service.color} p-4`}>
                  <div class="flex items-center gap-3">
                    <div class="text-2xl">{service.icon}</div>
                    <div class="flex-1">
                      <h3 class="font-semibold text-white">{service.name}</h3>
                      <Show
                        when={!!connectionStatusQuery.data?.[service.id]}
                        fallback={
                          <p class="text-sm text-white/70">Not connected</p>
                        }
                      >
                        <p class="text-sm text-white/70">Connected</p>
                      </Show>
                    </div>
                  </div>
                </div>

                {/* Bottom Row - Controls */}
                <div class="bg-neutral-950 px-4 py-3">
                  <Show
                    when={!!connectionStatusQuery.data?.[service.id]}
                    fallback={
                      <Show
                        when={service.id === "anilist"}
                        fallback={
                          <Button disabled size="sm" class="w-full">
                            Coming Soon
                          </Button>
                        }
                      >
                        <Button
                          onClick={() => handleConnect(service.id)}
                          disabled={isProcessing()}
                          size="sm"
                          class="w-full"
                        >
                          Connect
                        </Button>
                      </Show>
                    }
                  >
                    <Button
                      onClick={() => handleDisconnect(service.id)}
                      disabled={isProcessing()}
                      variant="destructive"
                      size="sm"
                      class="w-full"
                    >
                      Disconnect
                    </Button>
                  </Show>
                </div>

                {/* Error Display */}
                <Show when={animeErrors()[service.id]}>
                  <div class="border-t border-red-800 bg-red-900/20 px-4 py-2 text-sm text-red-400">
                    {animeErrors()[service.id]}
                  </div>
                </Show>
              </div>
            )}
          </For>
        </div>
      </Show>
    </div>
  )
}
