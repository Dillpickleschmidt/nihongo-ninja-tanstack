import { Show, type JSX } from "solid-js"
import type { ResolvedBackground } from "../resolveBackground"
import { BackgroundPreviewMedia } from "./BackgroundPreviewMedia"

interface BackgroundContextRowProps {
  title: string
  resolvedBackground: ResolvedBackground
  active?: boolean
  aspect?: string
  onSelect: () => void
  actions?: JSX.Element
}

export function BackgroundContextRow(props: BackgroundContextRowProps) {
  return (
    <div class="group relative overflow-hidden rounded-xl">
      <button
        type="button"
        onClick={props.onSelect}
        class="ease-instant-hover-200 block w-full cursor-pointer rounded-xl border border-white/6 text-left hover:border-white/12"
      >
        <div
          class="relative bg-black/25"
          style={{ "aspect-ratio": props.aspect ?? "16 / 5" }}
        >
          <BackgroundPreviewMedia
            item={props.resolvedBackground.background}
            width={320}
            height={140}
            class="h-full w-full object-cover"
          />
          <div class="ease-instant-hover-200 absolute inset-0 bg-gradient-to-t from-background/82 via-background/30 to-background/0 group-hover:opacity-45" />

          <Show when={props.active}>
            <div class="absolute left-2 top-2 rounded-full bg-dynamic-accent/90 px-2 py-0.5 text-xs font-medium text-black">
              Active
            </div>
          </Show>

          <div class="absolute inset-x-0 bottom-0 px-3 pb-2.5">
            <p class="truncate text-sm font-medium text-white">
              {props.title}
            </p>
          </div>
        </div>
      </button>

      <Show when={props.actions}>
        <div class="absolute right-1.5 top-1.5 flex items-center gap-1">
          {props.actions}
        </div>
      </Show>
    </div>
  )
}
