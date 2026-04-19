import { For, Show, createMemo, type JSX } from "solid-js"
import { Check, Upload } from "lucide-solid"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { cn } from "@/utils"
import { BUILT_IN_BACKGROUND_LIST, type BuiltInBackground } from "../catalog"
import {
  getAssignedBackgroundId,
  type BackgroundOverrides,
  type BackgroundScope,
} from "../overrides"
import { resolveBackground } from "../resolveBackground"
import { BackgroundPreviewMedia } from "./BackgroundPreviewMedia"

interface BackgroundAssignmentDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  contextLabel: string
  scope: BackgroundScope
  previewPathId?: string
  previewChapterSlug?: string
  overrides: BackgroundOverrides
  onAssignBackground: (backgroundId: string) => void
  onClearOverride: () => void
}

export function BackgroundAssignmentDialog(
  props: BackgroundAssignmentDialogProps,
) {
  const resolvedBackground = createMemo(() =>
    resolveBackground(
      props.previewPathId,
      props.previewChapterSlug,
      props.overrides,
    ),
  )

  const assignedBackgroundId = createMemo(() =>
    getAssignedBackgroundId(props.overrides, props.scope),
  )

  const highlightId = createMemo(
    () => assignedBackgroundId() ?? resolvedBackground().assignedBackgroundId,
  )

  const orderedBuiltIns = createMemo(() => {
    const all = BUILT_IN_BACKGROUND_LIST
    const id = highlightId()
    if (!id) return all
    const highlighted = all.find((b) => b.id === id)
    if (!highlighted) return all
    return [highlighted, ...all.filter((b) => b.id !== id)]
  })

  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <DialogContent
        class="max-h-[88vh] w-full overflow-y-auto rounded-xl border border-dynamic-accent/20 p-0 text-white shadow-xl backdrop-blur-2xl sm:max-w-3xl"
        style={{
          "background-color":
            "color-mix(in srgb, var(--dynamic-accent) 12%, rgb(10 10 10 / 0.78))",
        }}
      >
        <header class="border-b border-white/5 px-6 py-4">
          <h2 class="text-base font-semibold text-white">
            Choose a background
          </h2>
          <p class="mt-0.5 font-excalifont text-sm text-white/55">
            {props.contextLabel}
          </p>
        </header>

        <div class="space-y-7 px-6 py-6">
          <section>
            <SectionHeader
              label="Your uploads"
              trailing={
                <button
                  type="button"
                  class="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  onClick={() => {
                    /* upload flow TBD */
                  }}
                >
                  <Upload class="size-3.5" />
                  Upload
                </button>
              }
            />
            <UploadsEmptyState />
          </section>

          <section>
            <SectionHeader
              label="Built-in"
              trailing={
                <Show when={assignedBackgroundId()}>
                  <button
                    type="button"
                    onClick={props.onClearOverride}
                    class="text-sm text-white/55 underline-offset-2 transition-colors hover:text-white hover:underline"
                  >
                    Clear override
                  </button>
                </Show>
              }
            />
            <BackgroundOptionsGrid
              backgrounds={orderedBuiltIns()}
              assignedBackgroundId={assignedBackgroundId()}
              effectiveBackgroundId={resolvedBackground().assignedBackgroundId}
              onSelect={props.onAssignBackground}
            />
          </section>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function SectionHeader(props: { label: string; trailing?: JSX.Element }) {
  return (
    <div class="mb-3 flex items-center justify-between gap-4">
      <h3 class="text-[11px] uppercase tracking-widest text-white/45">
        {props.label}
      </h3>
      <Show when={props.trailing}>{props.trailing}</Show>
    </div>
  )
}

function UploadsEmptyState() {
  return (
    <div class="flex items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/2 px-4 py-8 text-center">
      <div>
        <p class="text-sm text-white/65">No uploads yet</p>
        <p class="mt-1 font-excalifont text-sm text-white/40">
          Upload an image to use it as a background
        </p>
      </div>
    </div>
  )
}

interface BackgroundOptionsGridProps {
  backgrounds: BuiltInBackground[]
  assignedBackgroundId?: string
  effectiveBackgroundId?: string
  onSelect: (backgroundId: string) => void
}

function BackgroundOptionsGrid(props: BackgroundOptionsGridProps) {
  return (
    <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <For each={props.backgrounds}>
        {(background) => {
          const isAssigned = () => props.assignedBackgroundId === background.id
          const isEffective = () =>
            !isAssigned() && props.effectiveBackgroundId === background.id

          return (
            <button
              type="button"
              onClick={() => props.onSelect(background.id)}
              class={cn(
                "group relative overflow-hidden rounded-xl border bg-white/2 text-left transition-colors",
                isAssigned()
                  ? "border-dynamic-accent/60"
                  : "border-white/5 hover:border-white/20",
              )}
            >
              <div class="relative aspect-[16/10] overflow-hidden bg-black/40">
                <BackgroundPreviewMedia
                  background={background}
                  width={320}
                  height={200}
                  class="h-full w-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                <Show when={isAssigned()}>
                  <div class="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-dynamic-accent text-black shadow-sm">
                    <Check class="size-3.5" stroke-width={3} />
                  </div>
                </Show>
                <Show when={isEffective()}>
                  <div class="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 font-excalifont text-xs text-white/80 backdrop-blur-sm">
                    <span class="size-1 rounded-full bg-white/80" />
                    In use
                  </div>
                </Show>
              </div>
            </button>
          )
        }}
      </For>
    </div>
  )
}
