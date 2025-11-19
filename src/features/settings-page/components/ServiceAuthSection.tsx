import { createSignal, For, Show } from "solid-js"
import { useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import { useServiceManagement } from "../context/ServiceManagementContext"
import { Button } from "@/components/ui/button"
import {
  getServiceCredentials,
  updateServiceCredentials,
} from "@/features/main-cookies/functions/service-credentials"
import { deleteTokenFromDB } from "@/features/supabase/db/anime-auth"
import { clearAniListToken } from "@/features/explore/api/anilist/urql-client"
type AnimeServiceType = "anilist" | "kitsu" | "mal"

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

export const ServiceAuthSection = () => {
  const context = useRouteContext({ from: RootRoute.id })
  const userId = context().user?.id || null

  const { setError, clearError, setIsProcessing, isProcessing, errors } =
    useServiceManagement()

  const [connectedServices, setConnectedServices] = createSignal<
    Record<AnimeServiceType, { username: string; expiresAt?: string } | null>
  >({
    anilist: null,
    kitsu: null,
    mal: null,
  })

  // Load current credentials on mount
  const loadCredentials = async () => {
    if (!userId) return

    try {
      const credentials = await getServiceCredentials()
      const newServices: typeof connectedServices = {
        anilist: null,
        kitsu: null,
        mal: null,
      }

      if (credentials.anilist?.accessToken) {
        newServices.anilist = {
          username: "Connected",
          expiresAt: credentials.anilist.expiresAt,
        }
      }

      if (credentials.kitsu?.accessToken) {
        newServices.kitsu = {
          username: "Connected",
          expiresAt: credentials.kitsu.expiresAt,
        }
      }

      if (credentials.mal?.accessToken) {
        newServices.mal = {
          username: "Connected",
          expiresAt: credentials.mal.expiresAt,
        }
      }

      setConnectedServices(newServices)
    } catch (error) {
      console.error("Failed to load service credentials:", error)
    }
  }

  // Load credentials on component mount
  loadCredentials()

  const handleLogout = async (serviceId: AnimeServiceType) => {
    try {
      setIsProcessing(true)
      clearError(serviceId)

      // Clear from cookie
      const credentials = await getServiceCredentials()
      const updated = {
        ...credentials,
        [serviceId]: {
          accessToken: "",
          refreshToken: "",
          expiresAt: undefined,
        },
      }

      await updateServiceCredentials(updated)

      // Clear from URQL client cache if AniList
      if (serviceId === "anilist") {
        clearAniListToken()
      }

      // Clear from database
      if (userId) {
        try {
          await deleteTokenFromDB({ data: { service: serviceId } })
        } catch (error) {
          // Continue even if DB deletion fails
        }
      }

      setConnectedServices((prev) => ({
        ...prev,
        [serviceId]: null,
      }))
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : "Logout failed"
      setError(serviceId, errorMsg)
    } finally {
      setIsProcessing(false)
    }
  }

  const handleAuthSuccess = async (serviceId: AnimeServiceType) => {
    try {
      await loadCredentials()
    } catch (error) {
      const errorMsg =
        error instanceof Error ? error.message : "Failed to load credentials"
      setError(serviceId, errorMsg)
    }
  }

  const handleAniListLogin = () => {
    const redirectUri = `${window.location.origin}/oauth-callback`
    const clientId = import.meta.env.VITE_ANILIST_CLIENT_ID

    if (!clientId) {
      setError("anilist", "AniList not configured")
      return
    }

    const authUrl = new URL("https://anilist.co/api/v2/oauth/authorize")
    authUrl.searchParams.append("client_id", clientId)
    authUrl.searchParams.append("response_type", "code")
    authUrl.searchParams.append("redirect_uri", redirectUri)
    window.open(authUrl.toString(), "anilist-auth", "width=500,height=600")
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
            {(service) => {
              const isConnected = () => connectedServices()[service.id] !== null

              return (
                <div
                  class={`overflow-hidden rounded-lg border border-neutral-700 transition-all ${
                    isConnected() ? "bg-neutral-900" : "bg-neutral-950"
                  }`}
                >
                  {/* Top Row - Connection Status */}
                  <div class={`bg-gradient-to-r ${service.color} p-4`}>
                    <div class="flex items-center gap-3">
                      <div class="text-2xl">{service.icon}</div>
                      <div class="flex-1">
                        <h3 class="font-semibold text-white">{service.name}</h3>
                        <Show
                          when={isConnected()}
                          fallback={
                            <p class="text-sm text-white/70">Not connected</p>
                          }
                        >
                          <p class="text-sm text-white/70">
                            {connectedServices()[service.id]?.username ||
                              "Connected"}
                          </p>
                        </Show>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row - Controls */}
                  <div class="bg-neutral-950 px-4 py-3">
                    <Show
                      when={isConnected()}
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
                            onClick={handleAniListLogin}
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
                        onClick={() => handleLogout(service.id)}
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
                  <Show when={errors()[service.id]}>
                    <div class="border-t border-red-800 bg-red-900/20 px-4 py-2 text-sm text-red-400">
                      {errors()[service.id]}
                    </div>
                  </Show>
                </div>
              )
            }}
          </For>
        </div>
      </Show>
    </div>
  )
}
