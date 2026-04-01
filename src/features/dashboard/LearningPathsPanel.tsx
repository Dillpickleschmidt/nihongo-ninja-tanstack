import { createSignal, For, Show, type Component } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import * as DialogPrimitive from "@kobalte/core/dialog"
import { Clapperboard, Video, FileUp, FileText, X } from "lucide-solid"
import { usePreferences } from "@/lib/preferences"
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

export function LearningPathsPanel(props: {
  paths: LearningPathSummary[]
  loading: boolean
}) {
  const [showSubtitleDialog, setShowSubtitleDialog] = createSignal(false)
  const [showPlaceholder, setShowPlaceholder] = createSignal<string | null>(
    null,
  )

  return (
    <div>
      {/* Create a Learning Path */}
      <h3 class="text-xs font-semibold uppercase tracking-wider text-white/40">
        Create a Learning Path
      </h3>
      <div class="mt-3 grid grid-cols-2 gap-3">
        <CreationTrigger
          icon={Clapperboard}
          label="Browse Shows"
          description="From anime or drama subs"
          onClick={() => setShowPlaceholder("Browse Shows")}
        />
        <CreationTrigger
          icon={Video}
          label="YouTube"
          description="Learn from a video"
          onClick={() => setShowPlaceholder("YouTube Video")}
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

      {/* Your Learning Paths — compact row */}
      <h3 class="mt-6 text-xs font-semibold uppercase tracking-wider text-white/40">
        Your Learning Paths
      </h3>
      <div class="mt-3">
        <Show
          when={!props.loading}
          fallback={
            <div class="flex gap-3">
              <div class="h-10 w-24 animate-pulse rounded-lg bg-white/5" />
              <div class="h-10 w-24 animate-pulse rounded-lg bg-white/5" />
            </div>
          }
        >
          <Show
            when={props.paths.length > 0}
            fallback={
              <p class="text-sm text-white/30">No learning paths yet</p>
            }
          >
            <div class="flex flex-wrap gap-2">
              <For each={props.paths}>
                {(path) => <PathChip path={path} />}
              </For>
            </div>
          </Show>
        </Show>
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

function PathChip(props: { path: LearningPathSummary }) {
  const { setPreferences } = usePreferences()
  const navigate = useNavigate()

  const progress = () => {
    if (props.path.totalModules <= 0) return null
    return `${props.path.completedModules}/${props.path.totalModules}`
  }

  return (
    <button
      onClick={() => {
        setPreferences({ activeLearningPath: props.path.id })
        navigate({ to: "/learn" })
      }}
      class="flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1.5 transition-colors hover:bg-white/5"
    >
      <div class="size-8 shrink-0 overflow-hidden rounded">
        <Show
          when={props.path.thumbnailUrl}
          fallback={
            <div class="flex size-full items-center justify-center bg-gradient-to-br from-(--landing-accent)/30 to-(--landing-accent-end)/30">
              <span class="text-xs font-bold text-white/70">
                {props.path.shortName.charAt(0)}
              </span>
            </div>
          }
        >
          <img
            src={props.path.thumbnailUrl!}
            alt={props.path.shortName}
            class="size-full object-cover"
          />
        </Show>
      </div>
      <div class="min-w-0">
        <p class="truncate text-sm font-medium text-white/70">
          {props.path.shortName}
        </p>
        <Show when={progress()}>
          {(p) => <p class="text-[11px] text-white/30">{p()}</p>}
        </Show>
      </div>
    </button>
  )
}

function CreationTrigger(props: {
  icon: Component<{ class?: string }>
  label: string
  description: string
  onClick: () => void
}) {
  return (
    <button
      onClick={props.onClick}
      class="flex cursor-pointer items-center gap-3.5 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3.5 text-left transition-all duration-200 hover:border-(--landing-accent)/25 hover:bg-white/[0.06]"
    >
      <props.icon class="size-5 shrink-0 text-(--landing-accent)" />
      <div>
        <p class="text-sm font-medium text-white/85">{props.label}</p>
        <p class="mt-0.5 text-[11px] leading-tight text-white/35">{props.description}</p>
      </div>
    </button>
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
