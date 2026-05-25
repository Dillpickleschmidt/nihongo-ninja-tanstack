import { For, Match, Show, Suspense, Switch, createMemo, createSignal, type JSX } from "solid-js"
import { Check, Lock, Upload } from "lucide-solid"
import { api } from "convex/_generated/api"
import { useConvexQuery } from "@/lib/convex-query"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { authClient } from "@/lib/auth-client"
import { cn } from "@/utils"
import { getChapterDisplayNumber } from "@/data/utils/chapter-helpers"
import { usePreferences } from "@/lib/preferences"
import {
  BUILT_IN_BACKGROUND_LIST,
  type BuiltInBackground,
} from "../catalog"
import {
  applyBackgroundScope,
  applyChapterBackgroundSelection,
  clearBackgroundLock,
  clearChapterBackground,
  getActiveBackgroundLock,
  getChapterBackgroundSelection,
  type BackgroundApplyScope,
  type BackgroundLock,
  type BackgroundTarget,
} from "../overrides"
import { resolveBackground } from "../resolveBackground"
import {
  BackgroundPreviewMedia,
  type BackgroundPreviewItem,
} from "./BackgroundPreviewMedia"

interface BackgroundAssignmentDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  contextLabel: string
  target: BackgroundTarget
  getPathLabel?: (pathId: string) => string
}

export function BackgroundAssignmentDialog(
  props: BackgroundAssignmentDialogProps,
) {
  const session = authClient.useSession()
  const { preferences, setPreference } = usePreferences()
  const [applyScope, setApplyScope] = createSignal<BackgroundApplyScope>("chapter")
  const overrides = () => preferences().backgroundOverrides
  const activeLock = () => getActiveBackgroundLock(overrides(), props.target)
  const lockedByAnotherChapter = () =>
    isLockedByAnotherChapter(activeLock(), props.target)
  const pathLabel = (pathId: string) => props.getPathLabel?.(pathId) ?? pathId
  const resolvedBackground = createMemo(() =>
    resolveBackground(
      props.target.pathId,
      props.target.chapterSlug,
      overrides(),
    ),
  )

  const assignedBackgroundSelection = () =>
    getChapterBackgroundSelection(overrides(), props.target)

  const highlightId = () =>
    assignedBackgroundSelection()?.id ?? resolvedBackground().selection.id

  const orderedBuiltIns = () => {
    const all = BUILT_IN_BACKGROUND_LIST
    const id = highlightId()
    if (!id) return all
    const highlighted = all.find((b) => b.id === id)
    if (!highlighted) return all
    return [highlighted, ...all.filter((b) => b.id !== id)]
  }

  const isSignedIn = () => !!session().data

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

  const selectBackground = (selection: BackgroundPreviewItem) => {
    setPreference(
      "backgroundOverrides",
      applyChapterBackgroundSelection(overrides(), {
        ...props.target,
        selection: {
          id: selection.id,
          sourceWidth: selection.sourceWidth,
          mediaType: selection.mediaType,
        },
        scope: activeLock()?.scope ?? applyScope(),
      }),
    )
  }

  const changeApplyScope = (scope: BackgroundApplyScope) => {
    setApplyScope(scope)
    setPreference(
      "backgroundOverrides",
      applyBackgroundScope(overrides(), { ...props.target, scope }),
    )
  }

  const clearChapter = () => {
    setPreference(
      "backgroundOverrides",
      clearChapterBackground(overrides(), props.target),
    )
  }

  const unlockBackground = () => {
    const lock = activeLock()
    if (!lock) return

    const source = `${pathLabel(lock.pathId)} · Chapter ${getChapterDisplayNumber(lock.chapterSlug)}`
    const message =
      lock.scope === "global"
        ? `This background is currently locked everywhere from ${source}.\n\nUnlock and return to chapter-specific backgrounds?`
        : `This background is currently locked for ${pathLabel(lock.pathId)} from Chapter ${getChapterDisplayNumber(lock.chapterSlug)}.\n\nUnlock and return to chapter-specific backgrounds for this learning path?`
    if (!window.confirm(message)) return

    setPreference("backgroundOverrides", clearBackgroundLock(overrides()))
    setApplyScope("chapter")
  }

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
      selectBackground({
        id: upload.imageId,
        mediaType: file.type === "image/gif" ? "gif" : "image",
        src: `/api/images/private/${encodeURIComponent(upload.imageId)}`,
        sourceWidth: width,
        layout: "horizontal",
        opacity: 0.4,
      })
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
          <BackgroundScopeSection
            activeLock={activeLock()}
            target={props.target}
            applyScope={applyScope()}
            onApplyScopeChange={changeApplyScope}
            onUnlock={unlockBackground}
          />

          <section class={cn(lockedByAnotherChapter() && "pointer-events-none opacity-45")}>
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
            <Suspense fallback={<UploadsLoadingState />}>
              <BackgroundUploadsGrid
                open={props.open}
                signedIn={isSignedIn()}
                assignedBackgroundId={assignedBackgroundSelection()?.id}
                effectiveBackgroundId={resolvedBackground().selection.id}
                onSelect={selectBackground}
              />
            </Suspense>
            <Show when={uploadError()}>
              {(message) => (
                <p class="mt-3 text-sm text-red-300/90">{message()}</p>
              )}
            </Show>
          </section>

          <section class={cn(lockedByAnotherChapter() && "pointer-events-none opacity-45")}>
            <SectionHeader
              label="Built-in"
              trailing={
                <Show when={assignedBackgroundSelection()}>
                  <button
                    type="button"
                    onClick={clearChapter}
                    class="text-sm text-white/55 underline-offset-2 transition-colors hover:text-white hover:underline"
                  >
                    Clear chapter background
                  </button>
                </Show>
              }
            />
            <BackgroundTileGrid
              items={orderedBuiltIns().map((background) => ({
                id: background.id,
                item: background,
              }))}
              assignedBackgroundId={assignedBackgroundSelection()?.id}
              effectiveBackgroundId={resolvedBackground().selection.id}
              onSelect={selectBackground}
            />
          </section>
        </div>
      </DialogContent>
    </Dialog>
  )
}

const SCOPE_OPTIONS = [
  ["chapter", "This chapter"],
  ["path", "This learning path"],
  ["global", "Everywhere"],
] as const

function BackgroundScopeSection(props: {
  activeLock: BackgroundLock | null
  target: BackgroundTarget
  applyScope: BackgroundApplyScope
  onApplyScopeChange: (scope: BackgroundApplyScope) => void
  onUnlock: () => void
}) {
  const lockedByAnotherChapter = () =>
    isLockedByAnotherChapter(props.activeLock, props.target)
  const selectedScope = () => props.activeLock?.scope ?? props.applyScope

  return (
    <section>
      <Show when={lockedByAnotherChapter() ? props.activeLock : null}>
        {(lock) => (
          <div class="mb-4 flex items-center justify-between gap-3 border-b border-amber-200/15 pb-3 text-sm text-amber-50">
            <div class="flex items-center gap-2">
              <Lock class="size-4" />
              <span>
                {lock().scope === "global"
                  ? "Locked everywhere"
                  : "Locked for this learning path"}{" "}
                from {lock().pathId} · {lock().chapterSlug}
              </span>
            </div>
            <button
              type="button"
              onClick={props.onUnlock}
              class="shrink-0 text-xs font-medium text-amber-100 underline-offset-2 transition-colors hover:text-white hover:underline"
            >
              Unlock
            </button>
          </div>
        )}
      </Show>

      <div class="mb-3 text-[11px] uppercase tracking-widest text-white/45">
        Apply selected background to
      </div>
      <div class="flex flex-wrap gap-2">
        <For each={SCOPE_OPTIONS}>
          {([value, label]) => (
            <button
              type="button"
              disabled={lockedByAnotherChapter()}
              onClick={() => props.onApplyScopeChange(value)}
              class={cn(
                "rounded-full px-3 py-1.5 text-left text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-45",
                selectedScope() === value
                  ? "bg-dynamic-accent/90 text-black"
                  : "bg-white/7 text-white/70 hover:bg-white/12 hover:text-white",
              )}
            >
              {label}
            </button>
          )}
        </For>
      </div>
    </section>
  )
}

function isLockedByAnotherChapter(
  lock: BackgroundLock | null,
  target: BackgroundTarget,
) {
  return !!(
    lock && (lock.pathId !== target.pathId || lock.chapterSlug !== target.chapterSlug)
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

type UploadedBackgroundAsset = {
  imageId: string
  sourceWidth: number
  kind: { mediaType: "image" } | { mediaType: "gif" }
}

function BackgroundUploadsGrid(props: {
  open: boolean
  signedIn: boolean
  assignedBackgroundId?: string
  effectiveBackgroundId?: string
  onSelect: (item: BackgroundPreviewItem) => void
}) {
  const uploadsQuery = useConvexQuery(
    api.api.images.listMyImageAssets,
    () => ({}),
    () => ({ enabled: props.open && props.signedIn }),
  )

  const uploads = () => uploadsQuery.data() as UploadedBackgroundAsset[] | undefined

  return (
    <Switch>
      <Match when={!props.signedIn}>
        <UploadsSignedOutState />
      </Match>
      <Match when={uploads() === undefined}>
        <UploadsLoadingState />
      </Match>
      <Match when={uploads()?.length === 0}>
        <UploadsEmptyState />
      </Match>
      <Match when={uploads()}>
        {(assets) => (
          <BackgroundTileGrid
            items={assets().map((asset) => ({
              id: asset.imageId,
              item: uploadPreviewItem(asset.imageId, asset.sourceWidth, asset.kind.mediaType),
            }))}
            assignedBackgroundId={props.assignedBackgroundId}
            effectiveBackgroundId={props.effectiveBackgroundId}
            onSelect={props.onSelect}
          />
        )}
      </Match>
    </Switch>
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
  onSelect: (item: BackgroundPreviewItem) => void
}

type BackgroundTileItem = {
  id: string
  item: BackgroundPreviewItem
}

function uploadPreviewItem(
  imageId: string,
  sourceWidth: number,
  mediaType: "image" | "gif",
): BackgroundPreviewItem {
  return {
    id: imageId,
    mediaType,
    src: `/api/images/private/${encodeURIComponent(imageId)}`,
    sourceWidth,
    layout: "horizontal",
    opacity: 0.4,
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
              onClick={() => props.onSelect(item.item)}
              class={cn(
                "group relative overflow-hidden rounded-xl border bg-white/2 text-left transition-colors",
                isAssigned()
                  ? "border-dynamic-accent/60"
                  : "border-white/5 hover:border-white/20",
              )}
            >
              <div class="relative aspect-[16/10] overflow-hidden bg-black/40">
                <BackgroundPreviewMedia
                  item={item.item}
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
