// features/settings-page/components/AnkiServiceCard.tsx
import { createSignal, Show } from "solid-js"
import { Button } from "@/components/ui/button"
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from "@/components/ui/text-field"
import { ServiceCard } from "./ServiceCard"
// TODO: Implement Anki validation functions when needed
import { useServiceManagement } from "../context/ServiceManagementContext"
import type { ServicePreference } from "@/features/main-cookies/schemas/user-preferences"

type ServiceCardProps = {
  preference: () => ServicePreference
  updateServicePreference: (updates: Partial<ServicePreference>) => void
}

export const AnkiServiceCard = (props: ServiceCardProps) => {
  const { errors, isProcessing, setError, clearError, setIsProcessing } =
    useServiceManagement()
  const [ankiUsername, setAnkiUsername] = createSignal("")
  const [ankiPassword, setAnkiPassword] = createSignal("")

  const handleConnect = async () => {
    const username = ankiUsername()
    const password = ankiPassword()
    if (!username || !password) return

    setIsProcessing(true)
    clearError("anki")

    // TODO: Implement Anki API validation
    setError(
      "anki",
      "Anki integration not yet implemented with new settings system",
    )
    props.updateServicePreference({
      is_api_key_valid: false,
    })
    setIsProcessing(false)
  }

  const handleImport = async () => {
    setIsProcessing(true)
    clearError("anki")

    // TODO: Implement Anki data import
    setError(
      "anki",
      "Anki data import not yet implemented with new settings system",
    )
    props.updateServicePreference({ data_imported: false })
    setIsProcessing(false)
  }

  return (
    <ServiceCard
      title="Anki Integration"
      gradient="from-blue-600/90 via-cyan-700/90 to-sky-800/90"
      borderColor="border-blue-400/30"
      iconColor="bg-blue-300"
      service="anki"
      selectedMode={props.preference().mode || "disabled"}
      onModeChange={(mode) => props.updateServicePreference({ mode })}
    >
      <Show when={props.preference().mode === "live"}>
        <div class="space-y-4">
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
              disabled={!ankiUsername() || !ankiPassword() || isProcessing()}
              class="border-white/30 bg-white/20 text-white hover:bg-white/30"
            >
              Connect to Anki
            </Button>
          </div>
          <Show when={props.preference().is_api_key_valid}>
            <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
              <p class="text-sm text-green-100">
                ✓ Connected to AnkiWeb - Live access enabled
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
              Import Anki Data
            </Button>
          </Show>
          <Show when={props.preference().data_imported}>
            <div class="rounded-lg border border-green-400/30 bg-green-500/20 p-4">
              <p class="text-sm text-green-100">
                ✓ Anki data imported successfully
              </p>
            </div>
          </Show>
        </div>
      </Show>

      <Show when={errors().anki}>
        <div class="mt-4 rounded-lg border border-red-400/30 bg-red-500/20 p-4">
          <p class="text-sm text-red-100">✗ {errors().anki}</p>
        </div>
      </Show>
    </ServiceCard>
  )
}
