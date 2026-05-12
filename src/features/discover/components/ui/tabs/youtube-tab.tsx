import { createSignal, For, Show } from "solid-js"
import * as DialogPrimitive from "@kobalte/core/dialog"
import { ArrowLeft, BookOpen, Play, X } from "lucide-solid"
import { formatDuration } from "@/utils/timeFormat"
import {
  CURATED_VIDEOS,
  FEATURED_VIDEO_IDS,
  JLPT_LEVELS,
  JLPT_COLORS,
} from "@/data/curated_videos"
import type { CuratedVideo, JlptLevel } from "@/data/curated_videos"

export function YouTubeTab() {
  const [activeLevel, setActiveLevel] = createSignal<JlptLevel | null>(null)
  const [selectedVideo, setSelectedVideo] = createSignal<CuratedVideo | null>(
    null,
  )
  const [youtubeUrl, setYoutubeUrl] = createSignal("")
  const [urlComingSoon, setUrlComingSoon] = createSignal(false)

  const videoMap = new Map(CURATED_VIDEOS.map((v) => [v.videoId, v]))
  const allFeatured = FEATURED_VIDEO_IDS.map((id) => videoMap.get(id)!)

  const byLevel = (videos: CuratedVideo[]) => {
    const level = activeLevel()
    return level ? videos.filter((v) => v.jlptLevel === level) : videos
  }

  const filteredFeatured = () => byLevel(allFeatured)
  const filteredVideos = () => byLevel(CURATED_VIDEOS)

  return (
    <div class="mx-auto w-full max-w-6xl px-4 pb-16 pt-14">
      {/* Header */}
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-foreground dark:text-white/90">YouTube</h1>
        <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
          Browse curated videos or create a learning path from any video
        </p>
      </div>

      {/* URL Input */}
      <div class="mb-6">
        <div class="flex gap-3">
          <input
            type="text"
            placeholder="Paste a YouTube URL..."
            value={youtubeUrl()}
            onInput={(e) => {
              setYoutubeUrl(e.currentTarget.value)
              setUrlComingSoon(false)
            }}
            class="flex-1 rounded-lg border border-border/70 bg-card/50 px-4 py-2.5 text-sm text-foreground placeholder-muted-foreground/60 outline-none transition-colors focus:border-dynamic-accent/40 focus:bg-card dark:border-white/10 dark:bg-white/3 dark:text-white dark:placeholder-white/30 dark:focus:border-white/20 dark:focus:bg-white/5"
          />
          <button
            onClick={() => setUrlComingSoon(true)}
            class="shrink-0 cursor-pointer rounded-lg bg-(--landing-accent)/80 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-(--landing-accent)"
          >
            Create Path
          </button>
        </div>
        <Show when={urlComingSoon()}>
          <p class="mt-2 text-xs text-muted-foreground dark:text-white/40">
            Coming soon — transcript extraction is not yet available.
          </p>
        </Show>
      </div>

      {/* JLPT Filter */}
      <div class="mb-6 flex flex-wrap gap-2">
        <button
          class={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
            activeLevel() === null
              ? "bg-foreground/10 text-foreground dark:bg-white/15 dark:text-white"
              : "text-muted-foreground hover:bg-accent hover:text-foreground dark:text-white/40 dark:hover:bg-white/5 dark:hover:text-white/70"
          }`}
          onClick={() => setActiveLevel(null)}
        >
          All
        </button>
        <For each={JLPT_LEVELS}>
          {(level) => (
            <button
              class={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                activeLevel() === level
                  ? "bg-foreground/10 text-foreground dark:bg-white/15 dark:text-white"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground dark:text-white/40 dark:hover:bg-white/5 dark:hover:text-white/70"
              }`}
              onClick={() => setActiveLevel(level)}
            >
              {level}
            </button>
          )}
        </For>
      </div>

      {/* Featured */}
      <Show when={filteredFeatured().length > 0}>
        <div class="mb-10">
          <h2 class="mb-3 text-sm font-semibold text-foreground/70 dark:text-white/50">Featured</h2>
          <div class="scrollbar-none -mx-4 flex gap-4 overflow-x-auto px-4">
            <For each={filteredFeatured()}>
              {(video) => (
                <div class="w-72 shrink-0">
                  <VideoCard
                    video={video}
                    onClick={() => setSelectedVideo(video)}
                  />
                </div>
              )}
            </For>
          </div>
        </div>
      </Show>

      {/* All Videos */}
      <h2 class="mb-3 text-sm font-semibold text-foreground/70 dark:text-white/50">All Videos</h2>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <For each={filteredVideos()}>
          {(video) => (
            <VideoCard
              video={video}
              onClick={() => setSelectedVideo(video)}
            />
          )}
        </For>
      </div>

      {/* Video Action Dialog */}
      <VideoActionDialog
        video={selectedVideo()}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  )
}

function VideoCard(props: { video: CuratedVideo; onClick: () => void }) {
  return (
    <button
      class="group cursor-pointer overflow-hidden rounded-xl border border-border/50 bg-card/40 text-left shadow-sm transition-colors duration-200 hover:border-border hover:bg-card/70 dark:border-white/5 dark:bg-white/2 dark:shadow-none dark:hover:border-white/10 dark:hover:bg-white/5"
      onClick={props.onClick}
    >
      <div class="relative aspect-video overflow-hidden">
        <img
          src={`https://img.youtube.com/vi/${props.video.videoId}/mqdefault.jpg`}
          alt={props.video.title}
          class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div class="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/30">
          <div class="scale-75 rounded-full bg-white/90 p-3 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
            <Play class="size-5 fill-black text-black" />
          </div>
        </div>
        <span class="absolute right-1 bottom-1 rounded bg-black/80 px-1.5 py-0.5 text-[11px] font-medium text-white">
          {formatDuration(props.video.duration)}
        </span>
      </div>

      <div class="p-3">
        <h3 class="line-clamp-2 min-h-[2lh] text-sm font-medium leading-snug text-foreground/80 group-hover:text-foreground dark:text-white/80 dark:group-hover:text-white/95">
          {props.video.title}
        </h3>
        <div class="mt-2">
          <span
            class={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${JLPT_COLORS[props.video.jlptLevel]}`}
          >
            {props.video.jlptLevel}
          </span>
        </div>
      </div>
    </button>
  )
}

function VideoActionDialog(props: {
  video: CuratedVideo | null
  onClose: () => void
}) {
  const [mode, setMode] = createSignal<"info" | "player">("info")
  const [pathComingSoon, setPathComingSoon] = createSignal(false)

  return (
    <DialogPrimitive.Root
      open={props.video !== null}
      onOpenChange={(open) => {
        if (!open) {
          props.onClose()
          setMode("info")
          setPathComingSoon(false)
        }
      }}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay class="fixed inset-0 z-50 bg-black/80 data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0" />

        <DialogPrimitive.Content
          class={`fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-border/70 bg-card data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0 dark:border-white/10 dark:bg-neutral-950 ${
            mode() === "player" ? "max-w-4xl" : "max-w-lg"
          }`}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <DialogPrimitive.Title class="sr-only">
            {props.video?.title ?? "Video"}
          </DialogPrimitive.Title>

          <Show when={props.video}>
            {(video) => (
              <Show
                when={mode() === "info"}
                fallback={
                  /* Player screen */
                  <div class="relative">
                    <button
                      onClick={() => setMode("info")}
                      class="absolute top-3 left-3 z-10 cursor-pointer rounded-full bg-black/60 p-2 text-white/70 transition-colors hover:bg-black/80 hover:text-white"
                    >
                      <ArrowLeft class="size-5" />
                    </button>
                    <DialogPrimitive.CloseButton class="absolute top-3 right-3 z-10 cursor-pointer rounded-full bg-black/60 p-2 text-white/70 transition-colors hover:bg-black/80 hover:text-white">
                      <X class="size-5" />
                    </DialogPrimitive.CloseButton>
                    <div class="aspect-video w-full">
                      <iframe
                        src={`https://www.youtube.com/embed/${video().videoId}?autoplay=1`}
                        title={video().title}
                        class="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      />
                    </div>
                  </div>
                }
              >
                {/* Info screen */}
                <div class="relative">
                  <img
                    src={`https://img.youtube.com/vi/${video().videoId}/hqdefault.jpg`}
                    alt={video().title}
                    class="aspect-video w-full object-cover"
                  />
                  <span class="absolute right-2 bottom-2 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium text-white">
                    {formatDuration(video().duration)}
                  </span>
                  <DialogPrimitive.CloseButton class="absolute top-2 right-2 cursor-pointer rounded-full bg-black/60 p-1.5 text-white/70 transition-colors hover:bg-black/80 hover:text-white">
                    <X class="size-4" />
                  </DialogPrimitive.CloseButton>
                </div>
                <div class="p-5">
                  <h3 class="text-lg font-semibold text-foreground dark:text-white">
                    {video().title}
                  </h3>
                  <div class="mt-2 flex items-center gap-2">
                    <span
                      class={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${JLPT_COLORS[video().jlptLevel]}`}
                    >
                      {video().jlptLevel}
                    </span>
                    <span class="text-xs text-muted-foreground dark:text-white/30">
                      {formatDuration(video().duration)}
                    </span>
                  </div>
                  <div class="mt-5 flex gap-3">
                    <button
                      onClick={() => setMode("player")}
                      class="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border border-border/70 bg-card/40 px-4 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
                    >
                      <Play class="size-4 fill-current" />
                      Watch
                    </button>
                    <button
                      onClick={() => setPathComingSoon(true)}
                      class="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-(--landing-accent) px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-(--landing-accent)/80"
                    >
                      <BookOpen class="size-4" />
                      Create Learning Path
                    </button>
                  </div>
                  <Show when={pathComingSoon()}>
                    <p class="mt-3 text-center text-xs text-muted-foreground dark:text-white/40">
                      Coming soon — transcript extraction is not yet available.
                    </p>
                  </Show>
                </div>
              </Show>
            )}
          </Show>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
