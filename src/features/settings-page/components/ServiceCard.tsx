// features/settings-page/components/ServiceCard.tsx
import { Show } from "solid-js"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { getModeDisplayName, getModeDescription } from "../utils/serviceUtils"
import { useServiceManagement } from "../context/ServiceManagementContext"

import type { ServiceType, ServiceMode } from "@/features/user-settings/schemas/user-preferences"

interface ServiceCardProps {
  title: string
  gradient: string
  borderColor: string
  iconColor: string
  service: ServiceType
  selectedMode: ServiceMode
  onModeChange: (mode: ServiceMode | undefined) => void
  children: any
}

export const ServiceCard = (props: ServiceCardProps) => {
  const { isProcessing } = useServiceManagement()
  const modeInfo = () => getModeDescription(props.selectedMode || "disabled")

  return (
    <div
      class={`relative rounded-xl border ${props.borderColor} bg-gradient-to-br ${props.gradient} p-6 shadow-lg backdrop-blur-sm`}
    >
      {/* Service Header with Mode Select */}
      <div class="mb-6 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class={`h-3 w-3 rounded-full ${props.iconColor}`}></div>
          <h2 class="text-xl font-bold text-white">{props.title}</h2>
        </div>

        <Select
          value={props.selectedMode}
          onChange={props.onModeChange}
          options={["disabled", "live", "imported"] as ServiceMode[]}
          placeholder="Select mode"
          itemComponent={(itemProps) => (
            <SelectItem item={itemProps.item}>
              {getModeDisplayName(itemProps.item.rawValue as ServiceMode)}
            </SelectItem>
          )}
          disabled={isProcessing()}
        >
          <SelectTrigger class="w-36 border-white/30 bg-white/10 text-white backdrop-blur-sm placeholder:text-white/70">
            <SelectValue<ServiceMode>>
              {(state) => {
                const mode = state.selectedOption()
                return getModeDisplayName(mode || "disabled")
              }}
            </SelectValue>
          </SelectTrigger>
          <SelectContent />
        </Select>
      </div>

      {/* Mode Explanation */}
      <Show when={modeInfo()}>
        <div class="mb-6 rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
          <div
            class={`text-sm ${props.selectedMode === "disabled" ? "text-white/70" : "text-white/90"}`}
          >
            <p class="mb-1 font-medium">
              {modeInfo().icon} {modeInfo().title}
            </p>
            <p>{modeInfo().description}</p>
          </div>
        </div>
      </Show>

      {/* Service Content */}
      <Show when={props.selectedMode !== "disabled"}>{props.children}</Show>
    </div>
  )
}
