import { Show, JSXElement } from "solid-js"
import { Portal } from "solid-js/web"
import { X } from "lucide-solid"
import { Button } from "@/components/ui/button"

interface MobileFiltersDrawerProps {
  isOpen: () => boolean
  onClose: () => void
  onReset: () => void
  children: JSXElement
}

export function MobileFiltersDrawer(props: MobileFiltersDrawerProps) {
  return (
    <Show when={props.isOpen()}>
      <Portal>
        <div class="animate-in slide-in-from-bottom-10 fade-in bg-background fixed inset-0 z-50 flex flex-col duration-200 md:hidden">
          <div class="flex items-center justify-between border-b border-white/10 p-4">
            <div class="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={props.onClose}>
                <X class="size-5" />
              </Button>
              <span class="text-lg font-bold">Filters</span>
            </div>
            <Button
              variant="ghost"
              onClick={() => {
                props.onReset()
                props.onClose()
              }}
              class="text-primary hover:text-primary/80"
            >
              Reset
            </Button>
          </div>

          <div class="flex-1 overflow-y-auto p-6">{props.children}</div>

          <div class="border-t border-white/10 p-4">
            <Button class="w-full" onClick={props.onClose}>
              View Results
            </Button>
          </div>
        </div>
      </Portal>
    </Show>
  )
}
