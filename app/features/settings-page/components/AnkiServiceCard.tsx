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

interface AnkiServiceCardProps {
  servicesState: AllServicesState
  selectedModes: Record<ServiceType, ServiceMode>
  loadServiceState: () => Promise<void>
  setSelectedModes: any
  setErrors: any
  errors: Record<ServiceType, string>
  isProcessing: boolean
  setIsProcessing: (processing: boolean) => void
}

export const AnkiServiceCard = (props: AnkiServiceCardProps) => {
  const [ankiUsername, setAnkiUsername] = createSignal("")
  const [ankiPassword, setAnkiPassword] = createSignal("")

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
    getServiceMode("anki", props.servicesState, props.selectedModes)

  const handleConnect = async () => {
    const username = ankiUsername()
    const password = ankiPassword()
    if (!username || !password) return

    const result = await connectToService("anki", { username, password })
    if (result.success) {
      setAnkiUsername("")
      setAnkiPassword("")
    }
  }

  const handleImport = async () => {
    await importFromService("anki")
  }

  const onModeChange = (newMode: ServiceMode | null) => {
    handleModeChange(
      "anki",
      newMode,
      props.servicesState,
      props.setSelectedModes,
    )
  }

  return (
    <ServiceCard
      title="Anki Integration"
      gradient="from-blue-600/90 via-cyan-700/90 to-sky-800/90"
      borderColor="border-blue-400/30"
      iconColor="bg-blue-300"
      service="anki"
      currentMode={currentMode()}
      selectedMode={props.selectedModes.anki}
      isProcessing={props.isProcessing}
      onModeChange={onModeChange}
    >
      <Show when={currentMode() === "live"}>
        <div class="space-y-4">
          <Show when={!isServiceConnected(props.servicesState.anki.status)}>
            <div class="space-y-4">
              <TextField>
                <TextFieldLabel class="text-white">
                  AnkiWeb Username
                </TextFieldLabel>
                <TextFieldInput
                  type="text"
                  placeholder="Enter your AnkiWeb username"
                  class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                  value={ankiUsername()}
                  onInput={(e) => setAnkiUsername(e.currentTarget.value)}
                />
              </TextField>
              <TextField>
                <TextFieldLabel class="text-white">
                  AnkiWeb Password
                </TextFieldLabel>
                <TextFieldInput
                  type="password"
                  placeholder="Enter your AnkiWeb password"
                  class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                  value={ankiPassword()}
                  onInput={(e) => setAnkiPassword(e.currentTarget.value)}
                />
              </TextField>
              <Button
                onClick={handleConnect}
                disabled={
                  !ankiUsername() || !ankiPassword() || props.isProcessing
                }
                class="border-white/30 bg-white/20 text-white hover:bg-white/30"
              >
                Connect to Anki
              </Button>
            </div>
          </Show>
          <Show when={isServiceConnected(props.servicesState.anki.status)}>
            <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
              <p class="text-sm text-green-100">
                ✓ Connected to AnkiWeb - Live access enabled
              </p>
            </div>
          </Show>
        </div>
      </Show>

      <Show when={currentMode() === "imported"}>
        <div class="space-y-4">
          <Show when={!props.servicesState.anki.use_imported_data}>
            <div class="space-y-4">
              <TextField>
                <TextFieldLabel class="text-white">
                  AnkiWeb Username
                </TextFieldLabel>
                <TextFieldInput
                  type="text"
                  placeholder="Enter your AnkiWeb username"
                  class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                  value={ankiUsername()}
                  onInput={(e) => setAnkiUsername(e.currentTarget.value)}
                />
              </TextField>
              <TextField>
                <TextFieldLabel class="text-white">
                  AnkiWeb Password
                </TextFieldLabel>
                <TextFieldInput
                  type="password"
                  placeholder="Enter your AnkiWeb password"
                  class="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                  value={ankiPassword()}
                  onInput={(e) => setAnkiPassword(e.currentTarget.value)}
                />
              </TextField>
              <Button
                onClick={handleImport}
                disabled={
                  !ankiUsername() || !ankiPassword() || props.isProcessing
                }
                class="border-white/30 bg-white/20 text-white hover:bg-white/30"
              >
                Import Anki Data
              </Button>
            </div>
          </Show>
          <Show when={props.servicesState.anki.use_imported_data}>
            <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
              <p class="text-sm text-green-100">
                ✓ Anki data imported successfully
              </p>
            </div>
          </Show>
        </div>
      </Show>

      <Show when={props.errors.anki}>
        <div class="mt-4 rounded-lg border border-red-400/30 bg-red-500/20 p-4">
          <p class="text-sm text-red-100">✗ {props.errors.anki}</p>
        </div>
      </Show>
    </ServiceCard>
  )
}
