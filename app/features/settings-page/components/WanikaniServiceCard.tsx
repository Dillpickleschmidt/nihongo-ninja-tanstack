// features/settings-page/components/WanikaniServiceCard.tsx
import { createSignal, Show } from "solid-js"
import { Button } from "@/components/ui/button"
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from "@/components/ui/text-field"
import { ServiceCard } from "./ServiceCard"
import {
  connectService,
  importServiceData,
} from "@/features/service-config/server/server-functions"
import { useSettings } from "@/context/SettingsContext"
import type { ServiceCardProps } from "@/features/service-config/types"

export const WanikaniServiceCard = (props: ServiceCardProps) => {
  const { errors, isProcessing, setError, clearError, setIsProcessing } =
    useSettings()
  const [wanikaniApiKey, setWanikaniApiKey] = createSignal("")

  const handleConnect = async () => {
    const apiKey = wanikaniApiKey()
    if (!apiKey) return

    setIsProcessing(true)
    clearError("wanikani")

    const result = await connectService({
      data: { service: "wanikani", credentials: { api_key: apiKey } },
    })

    if (result.success) {
      props.updateServicePreference({
        mode: "live",
        is_api_key_valid: true,
      })
    } else {
      setError("wanikani", result.error || "An unknown error occurred.")
      props.updateServicePreference({
        is_api_key_valid: false,
      })
    }
    setIsProcessing(false)
  }

  const handleImport = async () => {
    setIsProcessing(true)
    clearError("wanikani")

    const result = await importServiceData({ data: { service: "wanikani" } })

    if (result.success) {
      props.updateServicePreference({ data_imported: true })
    } else {
      setError("wanikani", result.error || "An unknown error occurred.")
      props.updateServicePreference({ data_imported: false })
    }
    setIsProcessing(false)
  }

  return (
    <ServiceCard
      title="WaniKani Integration"
      gradient="from-green-600/90 via-emerald-700/90 to-teal-800/90"
      borderColor="border-green-400/30"
      iconColor="bg-green-300"
      service="wanikani"
      selectedMode={props.preference().mode || "disabled"}
      onModeChange={(mode) => props.updateServicePreference({ mode })}
    >
      <Show when={props.preference().mode === "live"}>
        <div class="space-y-4">
          <TextField>
            <TextFieldLabel class="text-white">WaniKani API Key</TextFieldLabel>
            <TextFieldInput
              type="password"
              placeholder="Enter your WaniKani API key"
              class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
              value={wanikaniApiKey()}
              onInput={(e) => setWanikaniApiKey(e.currentTarget.value)}
            />
          </TextField>
          <Button
            onClick={handleConnect}
            disabled={!wanikaniApiKey() || isProcessing()}
            class="border-white/30 bg-white/20 text-white hover:bg-white/30"
          >
            Connect to WaniKani
          </Button>
          <Show when={props.preference().is_api_key_valid}>
            <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
              <p class="text-sm text-green-100">
                ✓ Connected to WaniKani - Live access enabled
              </p>
            </div>
          </Show>
        </div>
      </Show>

      <Show when={props.preference().mode === "imported"}>
        <div class="space-y-4">
          <Show when={!props.preference().data_imported}>
            <Button
              onClick={handleImport}
              disabled={isProcessing()}
              class="border-white/30 bg-white/20 text-white hover:bg-white/30"
            >
              Import WaniKani Data
            </Button>
          </Show>
          <Show when={props.preference().data_imported}>
            <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
              <p class="text-sm text-green-100">
                ✓ WaniKani data imported successfully
              </p>
            </div>
          </Show>
        </div>
      </Show>

      <Show when={errors().wanikani}>
        <div class="mt-4 rounded-lg border border-red-400/30 bg-red-500/20 p-4">
          <p class="text-sm text-red-100">✗ {errors().wanikani}</p>
        </div>
      </Show>
    </ServiceCard>
  )
}
