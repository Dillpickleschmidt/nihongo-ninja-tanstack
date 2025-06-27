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
import type {
  ServiceAuthData,
  ServicePreference,
} from "@/features/service-config/types"

interface AnkiServiceCardProps {
  authData: () => Partial<ServiceAuthData>
  preference: () => Partial<ServicePreference>
  updateServiceAuth: (authData: Partial<ServiceAuthData>) => Promise<void>
  updateServicePreference: (preference: Partial<ServicePreference>) => void
  error: () => string
  setError: (error: string) => void
  isProcessing: () => boolean
  setIsProcessing: (processing: boolean) => void
}

export const AnkiServiceCard = (props: AnkiServiceCardProps) => {
  const [ankiUsername, setAnkiUsername] = createSignal("")
  const [ankiPassword, setAnkiPassword] = createSignal("")

  const handleConnect = async () => {
    const username = ankiUsername()
    const password = ankiPassword()
    if (!username || !password) return

    props.setIsProcessing(true)
    props.setError("")

    const result = await connectService({
      data: { service: "anki", credentials: { username, password } },
    })

    if (result.success) {
      setAnkiUsername("")
      setAnkiPassword("")
      await props.updateServiceAuth({ is_api_key_valid: true })
      props.updateServicePreference({ mode: "live" })
    } else {
      props.setError(result.error || "An unknown error occurred.")
      await props.updateServiceAuth({ is_api_key_valid: false })
    }
    props.setIsProcessing(false)
  }

  const handleImport = async () => {
    props.setIsProcessing(true)
    props.setError("")

    const result = await importServiceData({ data: { service: "anki" } })

    if (result.success) {
      props.updateServicePreference({ data_imported: true })
    } else {
      props.setError(result.error || "An unknown error occurred.")
      props.updateServicePreference({ data_imported: false })
    }
    props.setIsProcessing(false)
  }

  return (
    <ServiceCard
      title="Anki Integration"
      gradient="from-blue-600/90 via-cyan-700/90 to-sky-800/90"
      borderColor="border-blue-400/30"
      iconColor="bg-blue-300"
      service="anki"
      selectedMode={props.preference().mode || "disabled"}
      isProcessing={props.isProcessing()}
      onModeChange={(mode) => props.updateServicePreference({ mode })}
    >
      <Show when={props.preference().mode === "live"}>
        <div class="space-y-4">
          <Show when={!props.authData().is_api_key_valid}>
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
                  !ankiUsername() || !ankiPassword() || props.isProcessing()
                }
                class="border-white/30 bg-white/20 text-white hover:bg-white/30"
              >
                Connect to Anki
              </Button>
            </div>
          </Show>
          <Show when={props.authData().is_api_key_valid}>
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
              disabled={props.isProcessing()}
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

      <Show when={props.error()}>
        <div class="mt-4 rounded-lg border border-red-400/30 bg-red-500/20 p-4">
          <p class="text-sm text-red-100">✗ {props.error()}</p>
        </div>
      </Show>
    </ServiceCard>
  )
}
