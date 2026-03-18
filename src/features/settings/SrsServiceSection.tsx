import { createSignal, Show } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { usePreferences } from "@/lib/preferences"
import { validateAnkiConnect } from "@/features/import/anki/anki-connect-client"

export function SrsServiceSection() {
  const { preferences, setPreference } = usePreferences()
  const [switching, setSwitching] = createSignal(false)
  const [error, setError] = createSignal("")

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
    <div>
      <h2 class="mb-4 text-lg font-medium text-white">SRS Service</h2>

      <div class="space-y-3">
        <label class="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
          <input
            type="radio"
            name="srs-service"
            checked={!isAnkiEnabled()}
            onChange={() => handleServiceChange("nihongo")}
            class="accent-dynamic-accent"
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
            class="accent-dynamic-accent"
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
            class="text-dynamic-accent underline underline-offset-2"
          >
            Setup instructions
          </Link>
        </p>
      </Show>
    </div>
  )
}
