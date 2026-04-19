import { For, Show, createMemo, createSignal, type JSX } from "solid-js"
import { Check, Upload } from "lucide-solid"
import { api } from "convex/_generated/api"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useConvexQuery } from "@/lib/convex-query"
import { authClient } from "@/lib/auth-client"
import { cn } from "@/utils"
import {
  BUILT_IN_BACKGROUND_LIST,
  type BuiltInBackground,
} from "../catalog"
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
  const session = authClient.useSession()
  const resolvedBackground = createMemo(() =>
    resolveBackground(
      props.previewPathId,
      props.previewChapterSlug,
      props.overrides,
    ),
  )

  const assignedBackgroundId = () =>
    getAssignedBackgroundId(props.overrides, props.scope)

  const highlightId = () =>
    assignedBackgroundId() ?? resolvedBackground().assignedBackgroundId

  const orderedBuiltIns = () => {
    const all = BUILT_IN_BACKGROUND_LIST
    const id = highlightId()
    if (!id) return all
    const highlighted = all.find((b) => b.id === id)
    if (!highlighted) return all
    return [highlighted, ...all.filter((b) => b.id !== id)]
  }

  const isSignedIn = () => !!session().data

  const uploadsQuery = useConvexQuery(
    api.api.images.listMyImageAssets,
    () => ({}),
    () => ({ enabled: props.open && isSignedIn() }),
  )

  const [uploadState, setUploadState] = createSignal<
    | { status: "idle" }
    | { status: "uploading" }
    | { status: "error"; message: string }
  >({ status: "idle" })

  const uploadError = () => {
    const state = uploadState()
    return state.status === "error" ? state.message : undefined
  }

  let fileInputRef: HTMLInputElement | undefined

  const handleUploadClick = () => fileInputRef?.click()

  const handleFilePicked = async (file: File) => {
    setUploadState({ status: "uploading" })
    try {
      const width = await readImageWidth(file)
      const res = await fetch("/api/images/upload", {
        method: "POST",
        headers: {
          "content-type": file.type,
          "x-image-width": String(width),
        },
        body: file,
      })
      if (!res.ok) {
        const message = await res.text()
        throw new Error(message || `Image upload failed (${res.status})`)
      }
      const upload = (await res.json()) as { imageId: string }
      props.onAssignBackground(upload.imageId)
      setUploadState({ status: "idle" })
    } catch (err) {
      const message = err instanceof Error ? err.message : "Upload failed."
      setUploadState({ status: "error", message })
    }
  }

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

        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/avif"
          class="hidden"
          onChange={(e) => {
            const file = e.currentTarget.files?.[0]
            e.currentTarget.value = ""
            if (file) void handleFilePicked(file)
          }}
        />

        <div class="space-y-7 px-6 py-6">
          <section>
            <SectionHeader
              label="Your uploads"
              trailing={
                <button
                  type="button"
                  disabled={!isSignedIn() || uploadState().status === "uploading"}
                  onClick={handleUploadClick}
                  class="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-60"
                >
                  <Upload class="size-3.5" />
                  {uploadState().status === "uploading" ? "Uploading…" : "Upload"}
                </button>
              }
            />
            <Show
              when={isSignedIn()}
              fallback={<UploadsSignedOutState />}
            >
              <Show
                when={uploadsQuery.data() !== undefined}
                fallback={<UploadsLoadingState />}
              >
                <Show
                  when={uploadsQuery.data()!.length}
                  fallback={<UploadsEmptyState />}
                >
                  <BackgroundTileGrid
                    items={uploadsQuery.data()!.map((asset) => ({
                      id: asset.imageId,
                      upload: {
                        imageId: asset.imageId,
                        sourceWidth: asset.sourceWidth,
                      },
                    }))}
                    assignedBackgroundId={assignedBackgroundId()}
                    effectiveBackgroundId={
                      resolvedBackground().assignedBackgroundId
                    }
                    onSelect={props.onAssignBackground}
                  />
                </Show>
              </Show>
            </Show>
            <Show when={uploadError()}>
              {(message) => (
                <p class="mt-3 text-sm text-red-300/90">{message()}</p>
              )}
            </Show>
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
            <BackgroundTileGrid
              items={orderedBuiltIns().map((background) => ({
                id: background.id,
                builtIn: background,
              }))}
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

function UploadsSignedOutState() {
  return (
    <div class="flex items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/2 px-4 py-8 text-center">
      <div>
        <p class="text-sm text-white/65">Sign in to upload backgrounds</p>
      </div>
    </div>
  )
}

function UploadsLoadingState() {
  return (
    <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <For each={[0, 1, 2]}>
        {() => (
          <div class="aspect-[16/10] animate-pulse rounded-xl bg-white/5" />
        )}
      </For>
    </div>
  )
}

interface BackgroundTileGridProps {
  items: BackgroundTileItem[]
  assignedBackgroundId?: string
  effectiveBackgroundId?: string
  onSelect: (backgroundId: string) => void
}

type BackgroundTileItem = {
  id: string
  builtIn?: BuiltInBackground
  upload?: {
    imageId: string
    sourceWidth?: number
  }
}

function BackgroundTileGrid(props: BackgroundTileGridProps) {
  return (
    <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <For each={props.items}>
        {(item) => {
          const isAssigned = () => props.assignedBackgroundId === item.id
          const isEffective = () =>
            !isAssigned() && props.effectiveBackgroundId === item.id

          return (
            <button
              type="button"
              onClick={() => props.onSelect(item.id)}
              class={cn(
                "group relative overflow-hidden rounded-xl border bg-white/2 text-left transition-colors",
                isAssigned()
                  ? "border-dynamic-accent/60"
                  : "border-white/5 hover:border-white/20",
              )}
            >
              <div class="relative aspect-[16/10] overflow-hidden bg-black/40">
                <BackgroundPreviewMedia
                  background={item.builtIn}
                  upload={item.upload}
                  width={320}
                  height={200}
                  class="h-full w-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <AssignmentBadge
                  assigned={isAssigned()}
                  effective={isEffective()}
                />
              </div>
            </button>
          )
        }}
      </For>
    </div>
  )
}

async function readImageWidth(file: File): Promise<number> {
  const url = URL.createObjectURL(file)
  try {
    const img = new window.Image()
    img.src = url
    await img.decode()
    return img.naturalWidth
  } finally {
    URL.revokeObjectURL(url)
  }
}

function AssignmentBadge(props: { assigned: boolean; effective: boolean }) {
  return (
    <>
      <Show when={props.assigned}>
        <div class="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-dynamic-accent text-black shadow-sm">
          <Check class="size-3.5" stroke-width={3} />
        </div>
      </Show>
      <Show when={!props.assigned && props.effective}>
        <div class="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 font-excalifont text-xs text-white/80 backdrop-blur-sm">
          <span class="size-1 rounded-full bg-white/80" />
          In use
        </div>
      </Show>
    </>
  )
}
