import { createSignal, Show, type Component } from "solid-js"
import { Link } from "@tanstack/solid-router"
import * as DialogPrimitive from "@kobalte/core/dialog"
import { Clapperboard, Video, FileUp, FileText, X } from "lucide-solid"
import { CreateSubtitlePathDialog } from "./CreateSubtitlePathDialog"

export type LearningPathSummary = {
  id: string
  name: string
  shortName: string
  isUserCreated: boolean
  thumbnailUrl?: string
  totalModules: number
  completedModules: number
  totalVocab: number
  seenVocab: number
}

export function LearningPathsPanel() {
  const [showSubtitleDialog, setShowSubtitleDialog] = createSignal(false)
  const [showPlaceholder, setShowPlaceholder] = createSignal<string | null>(
    null,
  )

  return (
    <div>
      {/* Create a Learning Path */}
      <h3 class="text-xs font-semibold uppercase tracking-wider text-white/50">
        Create a Learning Path
      </h3>
      <div class="mt-3 grid grid-cols-2 gap-3">
        <CreationTrigger
          icon={Clapperboard}
          label="Browse Shows"
          description="From anime or drama subs"
          to="/discover"
        />
        <CreationTrigger
          icon={Video}
          label="YouTube"
          description="Browse curated content or add your own"
          to="/discover"
          search={{ tab: "youtube" }}
        />
        <CreationTrigger
          icon={FileUp}
          label="Upload Subtitles"
          description="Generate from an .srt file"
          onClick={() => setShowSubtitleDialog(true)}
        />
        <CreationTrigger
          icon={FileText}
          label="Paste Text"
          description="From any Japanese text"
          onClick={() => setShowPlaceholder("Paste Text")}
        />
      </div>

      <CreateSubtitlePathDialog
        open={showSubtitleDialog()}
        onClose={() => setShowSubtitleDialog(false)}
      />

      <PlaceholderDialog
        label={showPlaceholder()}
        onClose={() => setShowPlaceholder(null)}
      />
    </div>
  )
}

const triggerClass =
  "relative flex cursor-pointer items-center gap-3.5 overflow-hidden rounded-xl border border-white/5 p-4 text-left transition-colors duration-200 hover:border-dynamic-accent/30"

function CreationTrigger(props: {
  icon: Component<{ class?: string }>
  label: string
  description: string
  to?: string
  search?: Record<string, string>
  onClick?: () => void
}) {
  const content = () => (
    <>
      <props.icon class="size-5 shrink-0 text-(--landing-accent)" />
      <div>
        <p class="text-sm font-medium text-white/85">{props.label}</p>
        <p class="mt-0.5 text-[11px] leading-tight text-white/45">
          {props.description}
        </p>
      </div>
    </>
  )

  const bgOpacity = 0.15
  const hoverOpacity = bgOpacity + 0.08
  const accentBg = {
    "background-color": `color-mix(in srgb, var(--dynamic-accent) ${bgOpacity * 100}%, transparent)`,
  }
  const onEnter = (e: MouseEvent) => {
    ;(e.currentTarget as HTMLElement).style.backgroundColor =
      `color-mix(in srgb, var(--dynamic-accent) ${hoverOpacity * 100}%, transparent)`
  }
  const onLeave = (e: MouseEvent) => {
    ;(e.currentTarget as HTMLElement).style.backgroundColor =
      `color-mix(in srgb, var(--dynamic-accent) ${bgOpacity * 100}%, transparent)`
  }

  return (
    <Show
      when={props.to}
      fallback={
        <button
          onClick={props.onClick}
          class={triggerClass}
          style={accentBg}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          <div
            class="pointer-events-none absolute inset-0 opacity-3"
            style={{
              "background-image": `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
          {content()}
        </button>
      }
    >
      {(to) => (
        <Link
          to={to()}
          search={props.search}
          class={triggerClass}
          style={accentBg}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
        >
          <div
            class="pointer-events-none absolute inset-0 opacity-3"
            style={{
              "background-image": `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
          {content()}
        </Link>
      )}
    </Show>
  )
}

function PlaceholderDialog(props: {
  label: string | null
  onClose: () => void
}) {
  return (
    <DialogPrimitive.Root
      open={props.label !== null}
      onOpenChange={(open) => {
        if (!open) props.onClose()
      }}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay class="fixed inset-0 z-50 bg-black/80 data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0" />
        <DialogPrimitive.Content class="fixed top-1/2 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-neutral-950 p-6 text-center data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0">
          <DialogPrimitive.Title class="text-lg font-semibold text-white">
            {props.label}
          </DialogPrimitive.Title>
          <DialogPrimitive.Description class="mt-2 text-sm text-white/50">
            This feature is coming soon.
          </DialogPrimitive.Description>
          <DialogPrimitive.CloseButton class="absolute top-3 right-3 cursor-pointer rounded-full p-1.5 text-white/50 transition-colors hover:bg-white/10 hover:text-white">
            <X class="size-4" />
          </DialogPrimitive.CloseButton>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
