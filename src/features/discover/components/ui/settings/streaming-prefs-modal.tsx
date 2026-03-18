import { createSignal, Index, Show } from "solid-js"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog"
import {
  STREAMING_SERVICES,
  hasSeenModal,
  serviceOrder,
  savePrefs,
  dismissModal,
} from "~/features/discover/hooks/useStreamingPrefs"

export function StreamingPrefsModal() {
  const [selections, setSelections] = createSignal<string[]>([...serviceOrder()])

  function toggleService(id: string) {
    setSelections((prev) => {
      if (prev.includes(id)) {
        return prev.filter((s) => s !== id)
      }
      return [...prev, id]
    })
  }

  function getRank(id: string): number {
    return selections().indexOf(id) + 1
  }

  function handleSave() {
    savePrefs(selections())
  }

  return (
    <Dialog
      open={!hasSeenModal()}
      onOpenChange={(open) => {
        if (!open) dismissModal()
      }}
    >
      <DialogContent class="max-h-[85vh] w-[92vw] max-w-sm overflow-y-auto border-white/10 bg-neutral-950/95 backdrop-blur-xl sm:w-full">
        <DialogHeader>
          <DialogTitle class="text-white/80">Where do you watch?</DialogTitle>
        </DialogHeader>

        <p class="text-[0.75rem] leading-relaxed text-white/30">
          Tap services in your preferred order. We'll prioritize links to your
          top picks.
        </p>

        <div class="mt-3 flex flex-col gap-2">
          <Index each={STREAMING_SERVICES}>
            {(service) => {
              const rank = () => getRank(service().id)
              const isSelected = () => rank() > 0

              return (
                <button
                  type="button"
                  onClick={() => toggleService(service().id)}
                  class="group flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all"
                  classList={{
                    "border-dynamic-accent/25 bg-dynamic-accent/8": isSelected(),
                    "border-white/8 bg-white/2 hover:border-white/15 hover:bg-white/4":
                      !isSelected(),
                  }}
                >
                  {/* Rank number or colored dot */}
                  <div
                    class="flex size-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-all"
                    classList={{
                      "bg-dynamic-accent/20 text-dynamic-accent": isSelected(),
                      "bg-white/6 text-white/25": !isSelected(),
                    }}
                  >
                    <Show when={isSelected()} fallback="·">
                      {rank()}
                    </Show>
                  </div>

                  {/* Service name */}
                  <span
                    class="text-sm font-medium transition-colors"
                    classList={{
                      "text-white/80": isSelected(),
                      "text-white/45": !isSelected(),
                    }}
                  >
                    {service().name}
                  </span>

                  {/* Color dot indicator */}
                  <div
                    class="ml-auto size-2 rounded-full transition-opacity"
                    classList={{
                      "opacity-100": isSelected(),
                      "opacity-30": !isSelected(),
                    }}
                    style={{ "background-color": service().color }}
                  />
                </button>
              )
            }}
          </Index>
        </div>

        {/* Action buttons */}
        <div class="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => dismissModal()}
            class="flex-1 cursor-pointer rounded-xl border border-white/8 bg-white/3 px-4 py-2.5 text-sm font-medium text-white/40 transition-colors hover:bg-white/6 hover:text-white/60"
          >
            Skip
          </button>
          <button
            type="button"
            onClick={handleSave}
            disabled={selections().length === 0}
            class="flex-1 cursor-pointer rounded-xl bg-dynamic-accent/80 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-dynamic-accent disabled:cursor-not-allowed disabled:opacity-30"
            style={{
              "box-shadow":
                "0 6px 12px -3px color-mix(in srgb, var(--dynamic-accent) 25%, transparent)",
            }}
          >
            Save
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
