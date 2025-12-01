import { cn } from "@/utils"
import { Show } from "solid-js"
import { Button } from "@/components/ui/button"

interface ServiceConnectionRowProps {
  name: string
  icon: string
  description: string
  isConnected: boolean
  isProcessing: boolean
  onConnect?: () => void
  onDisconnect?: () => void
  error?: string | null
  comingSoon?: boolean
  last?: boolean
}

export const ServiceConnectionRow = (props: ServiceConnectionRowProps) => {
  return (
    <div class={cn(
      "group relative flex flex-col gap-4 p-6",
      "lg:flex-col lg:items-start lg:gap-6 lg:py-6" // Desktop: Column layout (Card style inside grid)
    )}>
      {/* Info Section */}
      <div class="flex items-center gap-4 lg:items-start lg:gap-4">
        <div class="flex size-12 shrink-0 items-center justify-center rounded-xl bg-black/20 text-2xl border border-white/5">
          {props.icon}
        </div>

        <div class="flex-1">
          <div class="flex items-center gap-3">
            <h3 class="text-lg font-bold text-white">{props.name}</h3>
            <div
              class={cn(
                "rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                props.isConnected
                  ? "bg-green-500/10 text-green-400"
                  : "bg-white/5 text-muted-foreground"
              )}
            >
              {props.isConnected ? "Connected" : "Disconnected"}
            </div>
          </div>
          <p class="text-sm text-white/60 mt-1 lg:text-base">{props.description}</p>
        </div>
      </div>

      {/* Actions Section */}
      <div class="flex w-full flex-col gap-2 lg:mt-auto">
        <Show when={props.error}>
          <p class="text-xs text-red-400 md:text-right lg:text-left">{props.error}</p>
        </Show>

        <Show
          when={!props.comingSoon}
          fallback={
            <Button disabled class="w-full bg-white/5 text-white/40 border-white/5 hover:bg-white/5" variant="outline" size="sm">
              Coming Soon
            </Button>
          }
        >
          <Show
            when={props.isConnected}
            fallback={
              <Button
                onClick={props.onConnect}
                disabled={props.isProcessing}
                class="w-full bg-white/10 text-white hover:bg-white/20 border-white/10"
                variant="outline"
                size="sm"
              >
                Connect
              </Button>
            }
          >
            <Button
              onClick={props.onDisconnect}
              disabled={props.isProcessing}
              variant="destructive"
              class="w-full bg-red-500/10 text-red-400 hover:bg-red-500/20 border-red-500/20"
              size="sm"
            >
              Disconnect
            </Button>
          </Show>
        </Show>
      </div>

      {/* Dividers */}
      <Show when={!props.last}>
        {/* Mobile: Horizontal divider with X inset */}
        <div class="absolute bottom-0 left-6 right-6 h-px bg-white/5 lg:hidden" />

        {/* Desktop: Vertical divider with Y inset */}
        <div class="hidden lg:absolute lg:right-0 lg:top-6 lg:bottom-6 lg:block lg:w-px lg:bg-white/5" />
      </Show>
    </div>
  )
}

