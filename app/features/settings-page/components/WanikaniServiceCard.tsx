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

interface WanikaniServiceCardProps {
  servicesState: AllServicesState
  selectedModes: Record<ServiceType, ServiceMode>
  loadServiceState: () => Promise<void>
  setSelectedModes: any
  setErrors: any
  errors: Record<ServiceType, string>
  isProcessing: boolean
  setIsProcessing: (processing: boolean) => void
}

export const WanikaniServiceCard = (props: WanikaniServiceCardProps) => {
  const [wanikaniApiKey, setWanikaniApiKey] = createSignal("")

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
    getServiceMode("wanikani", props.servicesState, props.selectedModes)

  const handleConnect = async () => {
    const apiKey = wanikaniApiKey()
    if (!apiKey) return

    const result = await connectToService("wanikani", { api_key: apiKey })
    if (result.success) {
      setWanikaniApiKey("")
    }
  }

  const handleImport = async () => {
    await importFromService("wanikani")
  }

  const onModeChange = (newMode: ServiceMode | null) => {
    handleModeChange(
      "wanikani",
      newMode,
      props.servicesState,
      props.setSelectedModes,
    )
  }

  return (
    <ServiceCard
      title="WaniKani Integration"
      gradient="from-green-600/90 via-emerald-700/90 to-teal-800/90"
      borderColor="border-green-400/30"
      iconColor="bg-green-300"
      service="wanikani"
      currentMode={currentMode()}
      selectedMode={props.selectedModes.wanikani}
      isProcessing={props.isProcessing}
      onModeChange={onModeChange}
    >
      <Show when={currentMode() === "live"}>
        <div class="space-y-4">
          <Show when={!isServiceConnected(props.servicesState.wanikani.status)}>
            <TextField>
              <TextFieldLabel class="text-white">
                WaniKani API Key
              </TextFieldLabel>
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
              disabled={!wanikaniApiKey() || props.isProcessing}
              class="border-white/30 bg-white/20 text-white hover:bg-white/30"
            >
              Connect to WaniKani
            </Button>
          </Show>
          <Show when={isServiceConnected(props.servicesState.wanikani.status)}>
            <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
              <p class="text-sm text-green-100">
                ✓ Connected to WaniKani - Live access enabled
              </p>
            </div>
          </Show>
        </div>
      </Show>

      <Show when={currentMode() === "imported"}>
        <div class="space-y-4">
          <Show when={!props.servicesState.wanikani.use_imported_data}>
            <TextField>
              <TextFieldLabel class="text-white">
                WaniKani API Key
              </TextFieldLabel>
              <TextFieldInput
                type="password"
                placeholder="Enter your WaniKani API key"
                class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                value={wanikaniApiKey()}
                onInput={(e) => setWanikaniApiKey(e.currentTarget.value)}
              />
            </TextField>
            <Button
              onClick={handleImport}
              disabled={!wanikaniApiKey() || props.isProcessing}
              class="border-white/30 bg-white/20 text-white hover:bg-white/30"
            >
              Import WaniKani Data
            </Button>
          </Show>
          <Show when={props.servicesState.wanikani.use_imported_data}>
            <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
              <p class="text-sm text-green-100">
                ✓ WaniKani data imported successfully
              </p>
            </div>
          </Show>
        </div>
      </Show>

      <Show when={props.errors.wanikani}>
        <div class="mt-4 rounded-lg border border-red-400/30 bg-red-500/20 p-4">
          <p class="text-sm text-red-100">✗ {props.errors.wanikani}</p>
        </div>
      </Show>
    </ServiceCard>
  )
}
