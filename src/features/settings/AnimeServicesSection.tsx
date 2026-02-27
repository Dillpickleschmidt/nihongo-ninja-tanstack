import { createSignal, For, Show } from "solid-js"
import { useMutation, useAction } from "convex-solidjs"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { getUser } from "@/lib/auth"

const ANIME_SERVICES = [
  { id: "anilist" as const, name: "AniList" },
  { id: "kitsu" as const, name: "Kitsu", comingSoon: true },
  { id: "mal" as const, name: "MyAnimeList", comingSoon: true },
]

export function AnimeServicesSection() {
  const user = getUser()
  const connectionStatus = useConvexQuery(
    api.api.animeAuth.getConnectionStatus,
    {},
    () => ({ enabled: !!user() }),
  )
  const exchangeToken = useAction(api.api.animeAuth.exchangeAniListToken)
  const disconnect = useMutation(api.api.animeAuth.disconnectService)

  const [processing, setProcessing] = createSignal(false)
  const [animeError, setAnimeError] = createSignal("")

  const handleConnect = async (serviceId: string) => {
    if (serviceId !== "anilist") return

    setProcessing(true)
    setAnimeError("")

    try {
      const clientId = import.meta.env.VITE_ANILIST_CLIENT_ID
      if (!clientId) throw new Error("AniList not configured")

      const code = await openAniListOAuthPopup(clientId)
      const redirectUri = `${window.location.origin}/oauth-callback`
      await exchangeToken.mutate({ code, redirectUri })
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Authentication failed"
      if (msg !== "OAuth popup was closed") {
        setAnimeError(msg)
      }
    } finally {
      setProcessing(false)
    }
  }

  const handleDisconnect = async (serviceId: "anilist" | "kitsu" | "mal") => {
    setProcessing(true)
    setAnimeError("")
    try {
      await disconnect.mutate({ service: serviceId })
    } catch (err) {
      setAnimeError(err instanceof Error ? err.message : "Disconnect failed")
    } finally {
      setProcessing(false)
    }
  }

  return (
    <Show when={user()}>
      <div>
        <h2 class="mb-4 text-lg font-medium text-white">
          Anime Service Connections
        </h2>
        <div class="space-y-3">
          <For each={ANIME_SERVICES}>
            {(service) => {
              const isConnected = () => !!connectionStatus.data()?.[service.id]

              return (
                <div class="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div>
                    <span class="text-white">{service.name}</span>
                    <Show when={isConnected()}>
                      <span class="ml-2 text-xs text-emerald-400">
                        Connected
                      </span>
                    </Show>
                    <Show when={service.comingSoon}>
                      <span class="ml-2 text-xs text-white/30">
                        Coming Soon
                      </span>
                    </Show>
                  </div>

                  <Show when={!service.comingSoon}>
                    <Show
                      when={isConnected()}
                      fallback={
                        <button
                          type="button"
                          onClick={() => handleConnect(service.id)}
                          disabled={processing()}
                          class="text-sm text-(--accent) hover:underline underline-offset-2 disabled:opacity-50"
                        >
                          {processing() ? "Connecting..." : "Connect"}
                        </button>
                      }
                    >
                      <button
                        type="button"
                        onClick={() => handleDisconnect(service.id)}
                        disabled={processing()}
                        class="text-sm text-red-400 hover:underline underline-offset-2 disabled:opacity-50"
                      >
                        Disconnect
                      </button>
                    </Show>
                  </Show>
                </div>
              )
            }}
          </For>
        </div>

        <Show when={animeError()}>
          <p class="mt-3 text-sm text-red-400">{animeError()}</p>
        </Show>
      </div>
    </Show>
  )
}

function openAniListOAuthPopup(clientId: string): Promise<string> {
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
