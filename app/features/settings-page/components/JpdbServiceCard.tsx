import { createSignal, Show } from "solid-js"
import { Button } from "@/components/ui/button"
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from "@/components/ui/text-field"
import { ServiceCard } from "./ServiceCard"
import { connectService } from "@/features/service-config/server/server-functions"
import type {
  ServiceAuthData,
  ServicePreference,
} from "@/features/service-config/types"

interface JpdbServiceCardProps {
  authData: () => Partial<ServiceAuthData>
  preference: () => Partial<ServicePreference>
  updateServiceAuth: (authData: Partial<ServiceAuthData>) => Promise<void>
  updateServicePreference: (preference: Partial<ServicePreference>) => void
  error: () => string
  setError: (error: string) => void
  isProcessing: () => boolean
  setIsProcessing: (processing: boolean) => void
  onImport: (apiKey: string, file: File) => void
}

export const JpdbServiceCard = (props: JpdbServiceCardProps) => {
  const [jpdbApiKey, setJpdbApiKey] = createSignal(
    props.authData().api_key || "",
  )
  const [selectedFile, setSelectedFile] = createSignal<File | undefined>()

  const handleConnect = async () => {
    const apiKey = jpdbApiKey()
    if (!apiKey) return

    props.setIsProcessing(true)
    props.setError("")

    const result = await connectService({
      data: { service: "jpdb", credentials: { api_key: apiKey } },
    })

    if (result.success) {
      await props.updateServiceAuth({ is_api_key_valid: true, api_key: apiKey })
      props.updateServicePreference({ mode: "live" })
    } else {
      await props.updateServiceAuth({
        is_api_key_valid: false,
        api_key: apiKey,
      })
      props.setError(result.error || "An unknown error occurred.")
    }
    props.setIsProcessing(false)
  }

  const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    const file = target.files?.[0]
    setSelectedFile(file)
  }

  const handleImportClick = () => {
    const apiKey = jpdbApiKey()
    const file = selectedFile()
    if (!apiKey || !file) {
      props.setError("API Key and a JSON file are required for import.")
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
      isProcessing={props.isProcessing()}
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
            disabled={!jpdbApiKey() || props.isProcessing()}
            class="border-white/30 bg-white/20 text-white hover:bg-white/30"
          >
            Connect to jpdb
          </Button>
          <Show when={props.authData().is_api_key_valid}>
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
                disabled={props.isProcessing()}
                class="block w-full text-sm text-white/70 file:mr-4 file:rounded-md file:border-0 file:bg-white/20 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-white/30 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <Button
              onClick={handleImportClick}
              disabled={
                props.isProcessing() || !jpdbApiKey() || !selectedFile()
              }
              class="border-white/30 bg-white/20 text-white hover:bg-white/30"
            >
              Import jpdb Data
            </Button>
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

      <Show when={props.error()}>
        <div class="mt-4 rounded-lg border border-red-400/30 bg-red-500/20 p-4">
          <p class="text-sm text-red-100">✗ {props.error()}</p>
        </div>
      </Show>
    </ServiceCard>
  )
}
