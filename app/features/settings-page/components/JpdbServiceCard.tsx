import { createSignal, Show } from "solid-js"
import { Button } from "@/components/ui/button"
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from "@/components/ui/text-field"
import { ServiceCard } from "./ServiceCard"
import { useServiceConnection } from "../hooks/useServiceConnection"
import { useServiceImport } from "../hooks/useServiceImport"
import { getServiceMode, isServiceConnected } from "../utils/serviceUtils"
import type {
  AllServicesState,
  ServiceType,
  ServiceMode,
} from "../utils/serviceTypes"

interface JpdbServiceCardProps {
  servicesState: AllServicesState
  selectedModes: Record<ServiceType, ServiceMode>
  loadServiceState: () => Promise<void>
  setSelectedModes: (
    fn: (
      prev: Record<ServiceType, ServiceMode>,
    ) => Record<ServiceType, ServiceMode>,
  ) => void
  setErrors: (
    fn: (prev: Record<ServiceType, string>) => Record<ServiceType, string>,
  ) => void
  errors: Record<ServiceType, string>
  isProcessing: boolean
  setIsProcessing: (processing: boolean) => void
  onFileUpload?: (event: Event) => void
}

export const JpdbServiceCard = (props: JpdbServiceCardProps) => {
  const [jpdbApiKey, setJpdbApiKey] = createSignal("")

  const { connectToService, handleModeChange } = useServiceConnection(
    props.loadServiceState,
    props.setErrors,
  )

  const { importFromService } = useServiceImport(
    props.loadServiceState,
    props.setErrors,
    props.setIsProcessing,
  )

  const currentMode = () =>
    getServiceMode("jpdb", props.servicesState, props.selectedModes)

  const handleConnect = async () => {
    const apiKey = jpdbApiKey()
    if (!apiKey) return

    const result = await connectToService("jpdb", { api_key: apiKey })
    if (result.success) {
      setJpdbApiKey("")
    }
  }

  const handleImport = async () => {
    await importFromService("jpdb")
  }

  const onModeChange = (newMode: ServiceMode | null) => {
    console.log("jpdb mode change requested:", newMode) // Debug log
    if (newMode) {
      // Update the selected mode immediately for UI responsiveness
      props.setSelectedModes((prev) => ({ ...prev, jpdb: newMode }))

      // Then handle any server-side changes
      handleModeChange(
        "jpdb",
        newMode,
        () => props.servicesState,
        props.setSelectedModes,
      )
    }
  }

  return (
    <ServiceCard
      title="jpdb Integration"
      gradient="from-purple-600/90 via-purple-700/90 to-indigo-800/90"
      borderColor="border-purple-400/30"
      iconColor="bg-purple-300"
      service="jpdb"
      currentMode={currentMode()}
      selectedMode={props.selectedModes.jpdb}
      isProcessing={props.isProcessing}
      onModeChange={onModeChange}
    >
      <Show when={currentMode() === "live"}>
        <div class="space-y-4">
          <Show when={!isServiceConnected(props.servicesState.jpdb.status)}>
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
              disabled={!jpdbApiKey() || props.isProcessing}
              class="border-white/30 bg-white/20 text-white hover:bg-white/30"
            >
              Connect to jpdb
            </Button>
          </Show>
          <Show when={isServiceConnected(props.servicesState.jpdb.status)}>
            <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
              <p class="text-sm text-green-100">
                ✓ Connected to jpdb - Live access enabled
              </p>
            </div>
          </Show>
        </div>
      </Show>

      <Show when={currentMode() === "imported"}>
        <div class="space-y-4">
          <Show when={!props.servicesState.jpdb.use_imported_data}>
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
                onClick={handleImport}
                disabled={!jpdbApiKey() || props.isProcessing}
                class="border-white/30 bg-white/20 text-white hover:bg-white/30"
              >
                Import jpdb Data
              </Button>

              <div class="border-t border-white/20 pt-4">
                <p class="mb-2 text-sm text-white/80">
                  Alternative: Upload JSON File
                </p>
                <input
                  type="file"
                  accept=".json"
                  onChange={props.onFileUpload}
                  disabled={props.isProcessing}
                  class="block w-full text-sm text-white/70 file:mr-4 file:rounded-md file:border-0 file:bg-white/20 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-white/30 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
          </Show>
          <Show when={props.servicesState.jpdb.use_imported_data}>
            <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
              <p class="text-sm text-green-100">
                ✓ jpdb data imported successfully
              </p>
            </div>
          </Show>
        </div>
      </Show>

      <Show when={props.errors.jpdb}>
        <div class="mt-4 rounded-lg border border-red-400/30 bg-red-500/20 p-4">
          <p class="text-sm text-red-100">✗ {props.errors.jpdb}</p>
        </div>
      </Show>
    </ServiceCard>
  )
}
