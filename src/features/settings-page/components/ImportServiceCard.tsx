// features/settings-page/components/ImportServiceCard.tsx
import { Show } from "solid-js"
import { Button } from "@/components/ui/button"
import type { ServiceType } from "@/features/main-cookies/schemas/user-settings"

interface ImportServiceCardProps {
  service: ServiceType
  serviceName: string
  description: string
  hasImported: boolean
  isProcessing: boolean
  error?: string
  onImport: () => void
}

export const ImportServiceCard = (props: ImportServiceCardProps) => {
  const getGradient = () => {
    switch (props.service) {
      case "anki":
        return "from-blue-600/90 via-cyan-700/90 to-sky-800/90"
      case "wanikani":
        return "from-green-600/90 via-emerald-700/90 to-teal-800/90"
      case "jpdb":
        return "from-purple-600/90 via-purple-700/90 to-indigo-800/90"
    }
  }

  const getBorderColor = () => {
    switch (props.service) {
      case "anki":
        return "border-blue-400/30"
      case "wanikani":
        return "border-green-400/30"
      case "jpdb":
        return "border-purple-400/30"
    }
  }

  return (
    <div
      class={`rounded-xl border ${getBorderColor()} bg-gradient-to-br ${getGradient()} p-6 shadow-lg backdrop-blur-sm`}
    >
      <div class="flex items-start justify-between">
        <div class="flex-1">
          <h3 class="text-base font-semibold text-white">
            {props.serviceName}
          </h3>
          <p class="text-muted-foreground mt-1 text-sm">{props.description}</p>
        </div>

        <Show
          when={!props.hasImported}
          fallback={
            <div class="ml-4 rounded-md border border-green-400/30 bg-green-500/20 px-3 py-1.5">
              <p class="text-xs text-green-100">✓ Imported</p>
            </div>
          }
        >
          <Button
            onClick={props.onImport}
            disabled={props.isProcessing}
            size="sm"
            class="ml-4 border-white/30 bg-white/10 text-white hover:bg-white/20"
          >
            Import
          </Button>
        </Show>
      </div>

      <Show when={props.error}>
        <div class="mt-3 rounded-md border border-red-400/30 bg-red-500/20 p-2">
          <p class="text-xs text-red-100">✗ {props.error}</p>
        </div>
      </Show>
    </div>
  )
}
