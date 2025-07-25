// features/settings-page/components/JpdbServiceCard.tsx
import { createSignal, Show } from "solid-js"
import { Button } from "@/components/ui/button"
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from "@/components/ui/text-field"
import { ServiceCard } from "./ServiceCard"
import { connectService } from "@/features/service-config/server/server-functions"
import { useSettings } from "@/context/SettingsContext"
import type { JpdbServiceCardProps } from "@/features/service-config/types"

export const JpdbServiceCard = (props: JpdbServiceCardProps) => {
  const { errors, isProcessing, setError, clearError, setIsProcessing } =
    useSettings()
  const [jpdbApiKey, setJpdbApiKey] = createSignal("")
  const [selectedFile, setSelectedFile] = createSignal<File | undefined>()

  const handleConnect = async () => {
    const apiKey = jpdbApiKey()
    if (!apiKey) return

    setIsProcessing(true)
    clearError("jpdb")

    const result = await connectService({
      data: { service: "jpdb", credentials: { api_key: apiKey } },
    })

    if (result.success) {
      props.updateServicePreference({
        mode: "live",
        is_api_key_valid: true,
      })
    } else {
      props.updateServicePreference({
        is_api_key_valid: false,
      })
      setError("jpdb", result.error || "An unknown error occurred.")
    }
    setIsProcessing(false)
  }

  const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    const file = target.files?.[0]
    setSelectedFile(() => file)
  }

  const handleImportClick = () => {
    const apiKey = jpdbApiKey()
    const file = selectedFile()
    if (!apiKey || !file) {
      setError("jpdb", "API Key and a JSON file are required for import.")
      return
    }
    props.onImport(apiKey, file)
  }

  return (
    <ServiceCard
      title="jpdb Integration"
      gradient="from-purple-600/90 via-purple-700/90 to-indigo-800/90"
      borderColor="border-purple-400/30"
      iconColor="bg-purple-300"
      service="jpdb"
      selectedMode={props.preference().mode || "disabled"}
      onModeChange={(mode) => props.updateServicePreference({ mode })}
    >
      <Show when={props.preference().mode === "live"}>
        <div class="space-y-4">
          <TextField>
            <TextFieldLabel class="text-white">jpdb API Key</TextFieldLabel>
            <TextFieldInput
              type="password"
              placeholder="Enter your jpdb API key"
              class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
              value={jpdbApiKey()}
              onInput={(e) => setJpdbApiKey(e.currentTarget.value)}
            />
          </TextField>
          <Button
            onClick={handleConnect}
            disabled={!jpdbApiKey() || isProcessing()}
            class="border-white/30 bg-white/20 text-white hover:bg-white/30"
          >
            Connect to jpdb
          </Button>
          <Show when={props.preference().is_api_key_valid}>
            <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
              <p class="text-sm text-green-100">
                ✓ Connected to jpdb - Live access enabled
              </p>
            </div>
          </Show>
        </div>
      </Show>

      <Show when={props.preference().mode === "imported"}>
        <div class="space-y-4">
          <div class="space-y-4">
            <TextField>
              <TextFieldLabel class="text-white">jpdb API Key</TextFieldLabel>
              <TextFieldInput
                type="password"
                placeholder="Enter your jpdb API key"
                class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                value={jpdbApiKey()}
                onInput={(e) => setJpdbApiKey(e.currentTarget.value)}
              />
            </TextField>
            <div class="border-t border-white/20 pt-4">
              <p class="mb-2 text-sm text-white/80">Upload JSON File</p>
              <input
                type="file"
                accept=".json"
                onChange={handleFileChange}
                disabled={isProcessing()}
                class="block w-full text-sm text-white/70 file:mr-4 file:rounded-md file:border-0 file:bg-white/20 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-white/30 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <Button
              onClick={handleImportClick}
              disabled={isProcessing() || !jpdbApiKey() || !selectedFile()}
              class="border-white/30 bg-white/20 text-white hover:bg-white/30"
            >
              Import jpdb Data
            </Button>
            <p class="text-sm text-white/80">
              *Note that jpbd has an issue where a handful of radicals do not
              get included in its exported file. Unfortunately, this is out of
              our control—you may have to repractice these but thankfully it's
              only a very small amount and will minimally affect your
              experience.
            </p>
          </div>
          <Show when={props.preference().data_imported}>
            <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
              <p class="text-sm text-green-100">
                ✓ jpdb data imported successfully
              </p>
            </div>
          </Show>
        </div>
      </Show>

      <Show when={errors().jpdb}>
        <div class="mt-4 rounded-lg border border-red-400/30 bg-red-500/20 p-4">
          <p class="text-sm text-red-100">✗ {errors().jpdb}</p>
        </div>
      </Show>
    </ServiceCard>
  )
}
