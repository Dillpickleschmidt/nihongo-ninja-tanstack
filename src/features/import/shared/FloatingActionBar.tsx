import { createSignal, Show } from "solid-js"
import { Portal } from "solid-js/web"
import { cn } from "@/utils"
import { StatusButton, ClearStatusButton } from "./StatusButton"
import { ConfirmActionDialog } from "./ConfirmActionDialog"
import { STATUS_CONFIG, type ItemStatus } from "./status"

interface FloatingActionBarProps {
  selectedCount: number
  onApply: (status: NonNullable<ItemStatus>) => void
  onClearSelection: () => void
  mode: "manual" | "automatic"
  getCountAtOrAbove?: (status: ItemStatus) => number
  onClearOverrides?: () => void
}

export function FloatingActionBar(props: FloatingActionBarProps) {
  const [pendingStatus, setPendingStatus] = createSignal<ItemStatus>(null)
  const [showConfirm, setShowConfirm] = createSignal(false)

  const handleStatusClick = (status: ItemStatus) => {
    setPendingStatus(status)
    setShowConfirm(true)
  }

  const handleConfirm = () => {
    const status = pendingStatus()
    if (status !== null) {
      props.onApply(status)
    }
    setShowConfirm(false)
    setPendingStatus(null)
  }

  const confirmTitle = () => {
    const status = pendingStatus()
    return status ? `Set to ${STATUS_CONFIG[status].label}` : ""
  }

  const confirmDescription = () => {
    const status = pendingStatus()
    if (!status) return ""

    const count = props.selectedCount
    const alreadyAtOrAbove = props.getCountAtOrAbove?.(status) ?? 0
    const toChange = count - alreadyAtOrAbove

    if (alreadyAtOrAbove === 0) {
      return `Set ${count} item${count !== 1 ? "s" : ""} to "${STATUS_CONFIG[status].label}"?`
    }

    return `Set ${toChange} item${toChange !== 1 ? "s" : ""} to "${STATUS_CONFIG[status].label}"? (${alreadyAtOrAbove} already at or above)`
  }

  return (
    <>
      <Portal>
        <div
          data-floating-bar
          class={cn(
            "fixed bottom-6 left-1/2 z-50 flex w-auto -translate-x-1/2 transition-all duration-300 ease-out md:bottom-8",
            props.selectedCount > 0
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-10 opacity-0"
          )}
        >
          <div class="flex w-full items-center justify-between gap-3 overflow-x-auto rounded-xl border border-(--accent)/20 p-3 shadow-lg shadow-black/20 backdrop-blur-md" style={{ "background-color": "color-mix(in srgb, var(--accent) 15%, rgb(23 23 23))" }}>
            {/* Counter */}
            <div class="flex items-center gap-2">
              <div class="flex size-8 items-center justify-center rounded-full bg-(--accent)/20 font-mono text-sm font-bold text-(--accent)">
                {props.selectedCount}
              </div>
              <span class="hidden text-sm text-white/50 sm:inline">
                selected
              </span>
            </div>

            {/* Status Buttons */}
            <div class="flex items-center gap-1">
              {/* Automatic mode: Learning, Decent, Mastered */}
              <Show when={props.mode === "automatic"}>
                <StatusButton status="learning" onClick={() => handleStatusClick("learning")} />
              </Show>

              <StatusButton status="decent" onClick={() => handleStatusClick("decent")} />
              <StatusButton status="mastered" onClick={() => handleStatusClick("mastered")} />

              {/* Manual mode: Clear button */}
              <Show when={props.mode === "manual" && props.onClearOverrides}>
                <div class="mx-0.5 h-6 w-px bg-white/10" />
                <ClearStatusButton onClick={() => props.onClearOverrides?.()} />
              </Show>

              {/* Close / Deselect button */}
              <div class="mx-0.5 h-6 w-px bg-white/10" />
              <button
                type="button"
                class="flex h-9 w-7 items-center justify-center rounded-lg text-white/50 transition-colors hover:bg-white/10 hover:text-white"
                onClick={props.onClearSelection}
                title="Deselect all"
              >
                <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </Portal>

      {/* Confirmation Dialog */}
      <ConfirmActionDialog
        open={showConfirm()}
        onOpenChange={setShowConfirm}
        title={confirmTitle()}
        description={confirmDescription()}
        confirmLabel="Apply"
        onConfirm={handleConfirm}
      />
    </>
  )
}
