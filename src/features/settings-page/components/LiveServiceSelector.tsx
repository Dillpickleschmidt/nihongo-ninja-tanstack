import { Show } from "solid-js"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"
import type {
  SRSServiceType,
  AllSRSServicePreferences,
} from "@/features/main-cookies/schemas/user-settings"
import { getActiveService } from "@/features/srs-services/utils"
import { SettingsSection } from "./SettingsSection"
import { Link } from "@tanstack/solid-router"
import { ExternalLink } from "lucide-solid"

interface LiveServiceSelectorProps {
  preferences: AllSRSServicePreferences
  onServiceChange: (service: "nihongo" | SRSServiceType) => Promise<void>
  isProcessing: boolean
  errors: Record<SRSServiceType, string | null>
  setError: (service: SRSServiceType, error: string) => void
  clearError: (service: SRSServiceType) => void
}

export const LiveServiceSelector = (props: LiveServiceSelectorProps) => {
  const activeService = () => getActiveService(props.preferences) || "nihongo"

  const handleServiceSelect = async (value: string) => {
    await props.onServiceChange(value as "nihongo" | SRSServiceType)
  }

  const services = [
    { value: "nihongo", label: "None (use Nihongo Ninja)" },
    { value: "anki", label: "Anki" },
  ]

  return (
    <SettingsSection
      title="Live External Service Connection"
      description="Connect to an external SRS service to sync your reviews in real-time. Only one service can be active at a time."
    >
      <div class="space-y-6">
        <Select
          value={activeService()}
          onChange={handleServiceSelect}
          options={services.map((s) => s.value)}
          placeholder="Select service"
          disabled={props.isProcessing}
          itemComponent={(itemProps) => (
            <SelectItem item={itemProps.item}>
              {services.find((s) => s.value === itemProps.item.rawValue)?.label}
            </SelectItem>
          )}
        >
          <SelectTrigger class="w-full h-14 border-white/10 bg-background/40 backdrop-blur-sm rounded-xl px-4 text-base hover:bg-background/60 transition-colors">
            <SelectValue>
              {(state) =>
                services.find((s) => s.value === state.selectedOption())?.label ??
                "Select service"
              }
            </SelectValue>
          </SelectTrigger>
          <SelectContent />
        </Select>

        {/* Anki Guide Link */}
        <Show when={activeService() === "anki"}>
          <div class="rounded-xl border border-blue-500/20 bg-blue-500/10 p-6 backdrop-blur-sm">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 class="text-base font-bold text-blue-100">Anki Connection Setup</h4>
                <p class="text-sm text-blue-200/70 mt-1">
                  Need help connecting? Check out our step-by-step guide to setting up AnkiConnect.
                </p>
              </div>
              <Link
                to="/import/anki/connect"
                class="whitespace-nowrap rounded-lg bg-blue-500/20 px-4 py-2 text-sm font-bold text-blue-300 transition-colors hover:bg-blue-500/30 hover:text-blue-200 flex items-center gap-2"
              >
                View Guide <ExternalLink class="size-3" />
              </Link>
            </div>

            <Show when={props.preferences.anki.is_api_key_valid}>
              <div class="mt-4 flex items-center gap-2 text-sm font-medium text-green-400">
                <div class="size-2 rounded-full bg-green-400 animate-pulse" />
                Connected to Anki - Live access enabled
              </div>
            </Show>

            <Show when={props.errors.anki}>
              <div class="mt-4 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
                ✗ {props.errors.anki}
              </div>
            </Show>
          </div>
        </Show>
      </div>
    </SettingsSection>
  )
}
