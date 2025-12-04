import { For, Show } from "solid-js"
import { useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import { useServiceManagement } from "../context/ServiceManagementContext"
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
import { SettingsSection } from "./SettingsSection"
import { ServiceConnectionRow } from "./ServiceConnectionRow"

interface AnimeService {
  id: AnimeServiceType
  name: string
  icon: string
  description: string
}

const ANIME_SERVICES: AnimeService[] = [
  {
    id: "anilist",
    name: "AniList",
    icon: "📺",
    description: "Sync anime progress & tracking.",
  },
  {
    id: "kitsu",
    name: "Kitsu",
    icon: "🎬",
    description: "Share reviews & updates.",
  },
  {
    id: "mal",
    name: "MyAnimeList",
    icon: "🎞️",
    description: "The world's largest anime DB.",
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
    <SettingsSection
      title="Anime Service Connections"
      description="Connect to anime tracking services to sync your watching list and get personalized recommendations."
    >
      <Show
        when={userId}
        fallback={
          <div class="rounded-2xl border border-white/10 bg-background/40 p-10 text-center backdrop-blur-sm">
            <p class="text-muted-foreground mb-6 text-lg">
              Log in to your account to connect anime tracking services.
            </p>
            <a
              href="/auth"
              class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:scale-[1.02]"
            >
              Log In
            </a>
          </div>
        }
      >
        <div class="overflow-hidden rounded-2xl border border-white/10 bg-background/40 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-3">
          <For each={ANIME_SERVICES}>
            {(service, index) => (
              <ServiceConnectionRow
                name={service.name}
                icon={service.icon}
                description={service.description}
                isConnected={!!connectionStatusQuery.data?.[service.id]}
                isProcessing={isProcessing()}
                onConnect={
                  service.id === "anilist"
                    ? () => handleConnect(service.id)
                    : undefined
                }
                onDisconnect={() => handleDisconnect(service.id)}
                error={animeErrors()[service.id]}
                comingSoon={service.id !== "anilist"}
                last={index() === ANIME_SERVICES.length - 1}
              />
            )}
          </For>
        </div>
      </Show>
    </SettingsSection>
  )
}
