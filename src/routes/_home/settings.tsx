import { createFileRoute } from "@tanstack/solid-router"
import { Link } from "@tanstack/solid-router"
import { useQueryClient } from "@tanstack/solid-query"
import { createSignal, onMount, Show } from "solid-js"
import { queryKeys } from "@/query/query-keys"
import { usePreferences } from "@/lib/preferences"
import { validateAnkiConnect } from "@/features/import/anki/anki-connect-client"

export const Route = createFileRoute("/_home/settings")({
  component: SettingsPage,
})

function SettingsPage() {
  const queryClient = useQueryClient()
  const { preferences, setPreference } = usePreferences()
  const [switching, setSwitching] = createSignal(false)
  const [error, setError] = createSignal("")

  onMount(() => {
    queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: 12,
      opacityOffset: -0.22,
      showGradient: false,
    })
  })

  const ankiPrefs = () => preferences().srsServicePreferences.anki
  const isAnkiEnabled = () => ankiPrefs().mode === "enabled"

  const handleServiceChange = async (service: "nihongo" | "anki") => {
    setError("")
    if (service === "nihongo") {
      setPreference("srsServicePreferences", {
        anki: { ...ankiPrefs(), mode: "disabled", is_api_key_valid: false },
      })
      return
    }

    setSwitching(true)
    const result = await validateAnkiConnect()
    setSwitching(false)

    if (result.success) {
      setPreference("srsServicePreferences", {
        anki: { ...ankiPrefs(), mode: "enabled", is_api_key_valid: true },
      })
    } else {
      setError(result.error ?? "Failed to connect to Anki")
    }
  }

  return (
    <div class="mx-auto max-w-2xl px-4 pt-24 pb-32 md:pb-16">
      <h1 class="mb-8 text-2xl font-bold text-white">Settings</h1>

      <div class="space-y-6">
        <div>
          <h2 class="mb-4 text-lg font-medium text-white">SRS Service</h2>

          <div class="space-y-3">
            <label class="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <input
                type="radio"
                name="srs-service"
                checked={!isAnkiEnabled()}
                onChange={() => handleServiceChange("nihongo")}
                class="accent-(--accent)"
              />
              <span class="text-white">None (built-in)</span>
            </label>

            <label class="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <input
                type="radio"
                name="srs-service"
                checked={isAnkiEnabled()}
                onChange={() => handleServiceChange("anki")}
                disabled={switching()}
                class="accent-(--accent)"
              />
              <span class="text-white">
                {switching() ? "Connecting to Anki..." : "Anki"}
              </span>
            </label>
          </div>

          <Show when={error()}>
            <p class="mt-3 text-sm text-red-400">{error()}</p>
          </Show>

          <Show when={isAnkiEnabled() && ankiPrefs().is_api_key_valid}>
            <p class="mt-3 text-sm text-emerald-400">Connected to Anki</p>
          </Show>

          <Show when={isAnkiEnabled() && !ankiPrefs().is_api_key_valid}>
            <p class="mt-3 text-sm text-white/50">
              Anki is selected but not connected.{" "}
              <Link
                to="/import/anki"
                class="text-(--accent) underline underline-offset-2"
              >
                Setup instructions
              </Link>
            </p>
          </Show>
        </div>
      </div>
    </div>
  )
}
