import { createSignal, For, Show } from "solid-js"
import * as DialogPrimitive from "@kobalte/core/dialog"
import { Play, X } from "lucide-solid"
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
        <h1 class="text-3xl font-bold text-white/90">Curated Videos</h1>
        <p class="mt-1 text-sm text-white/40">
          Hand-picked YouTube videos for Japanese learners
        </p>
      </div>

      {/* JLPT Filter */}
      <div class="mb-6 flex flex-wrap gap-2">
        <button
          class={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
            activeLevel() === null
              ? "bg-white/15 text-white"
              : "text-white/40 hover:bg-white/5 hover:text-white/70"
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
                  ? "bg-white/15 text-white"
                  : "text-white/40 hover:bg-white/5 hover:text-white/70"
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
          <h2 class="mb-3 text-sm font-semibold text-white/50">Featured</h2>
          <div class="scrollbar-none -mx-4 flex gap-4 overflow-x-auto px-4">
            <For each={filteredFeatured()}>
              {(video) => (
                <div class="w-72 shrink-0">
                  <VideoCard video={video} onClick={() => setSelectedVideo(video)} />
                </div>
              )}
            </For>
          </div>
        </div>
      </Show>

      {/* All Videos */}
      <h2 class="mb-3 text-sm font-semibold text-white/50">All Videos</h2>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <For each={filteredVideos()}>
          {(video) => (
            <VideoCard video={video} onClick={() => setSelectedVideo(video)} />
          )}
        </For>
      </div>

      {/* Video Player Dialog */}
      <VideoPlayerDialog
        video={selectedVideo()}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  )
}

function VideoCard(props: { video: CuratedVideo; onClick: () => void }) {
  return (
    <button
      class="group cursor-pointer overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] text-left transition-colors duration-200 hover:border-white/10 hover:bg-white/[0.05]"
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
        <h3 class="line-clamp-2 min-h-[2lh] text-sm font-medium leading-snug text-white/80 group-hover:text-white/95">
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

function VideoPlayerDialog(props: {
  video: CuratedVideo | null
  onClose: () => void
}) {
  return (
    <DialogPrimitive.Root
      open={props.video !== null}
      onOpenChange={(open) => {
        if (!open) props.onClose()
      }}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay class="fixed inset-0 z-50 bg-black/80 data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0" />

        <DialogPrimitive.Content
          class="fixed inset-4 z-50 mx-auto flex max-w-5xl items-center justify-center data-[expanded]:animate-in data-[closed]:animate-out data-[closed]:fade-out-0 data-[expanded]:fade-in-0"
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <DialogPrimitive.Title class="sr-only">
            {props.video?.title ?? "Video player"}
          </DialogPrimitive.Title>

          <DialogPrimitive.CloseButton class="absolute top-0 right-0 z-10 cursor-pointer rounded-full bg-black/60 p-2 text-white/70 transition-colors hover:bg-black/80 hover:text-white">
            <X class="size-5" />
          </DialogPrimitive.CloseButton>

          <Show when={props.video}>
            {(video) => (
              <div class="aspect-video w-full overflow-hidden rounded-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${video().videoId}?autoplay=1`}
                  title={video().title}
                  class="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            )}
          </Show>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
