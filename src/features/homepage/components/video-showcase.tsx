import { createSignal, Show } from 'solid-js'
import { cn } from '@/utils'

export function VideoShowcase(props: {
  title: string
  subtitle?: string
  class?: string
  aspectRatio?: 'video' | 'square' | 'tall'
  videoSrc?: string
  autoPlay?: boolean
}) {
  const [isPlaying, setIsPlaying] = createSignal(props.autoPlay ?? false)
  let videoRef: HTMLVideoElement | undefined

  const aspectClass = () => {
    switch (props.aspectRatio) {
      case 'square': return 'aspect-square'
      case 'tall': return 'aspect-[9/16]'
      default: return 'aspect-video'
    }
  }

  const togglePlay = () => {
    if (videoRef) {
      if (isPlaying()) {
        videoRef.pause()
      } else {
        videoRef.play()
      }
      setIsPlaying(!isPlaying())
    }
  }

  return (
    <div class={cn(
      "group relative overflow-hidden rounded-2xl bg-neutral-900/60 backdrop-blur-sm border border-white/5",
      aspectClass(),
      props.class
    )}>
      {/* Video element */}
      <Show when={props.videoSrc}>
        <video
          ref={videoRef}
          src={props.videoSrc}
          class="absolute inset-0 h-full w-full object-cover"
          loop
          muted
          playsinline
          preload="metadata"
          autoplay={props.autoPlay}
        />
        {/* Darkening overlay when not playing */}
        <div class={cn(
          "absolute inset-0 bg-black/40 transition-opacity duration-300",
          isPlaying() ? "opacity-0" : "opacity-100"
        )} />
      </Show>

      {/* Gradient overlay */}
      <div class="absolute inset-0 bg-linear-to-br from-(--accent)/5 via-transparent to-(--accent-end)/5 pointer-events-none" />

      {/* Content overlay */}
      <div class={cn(
        "absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-300",
        isPlaying() ? "opacity-0 hover:opacity-100" : "opacity-100"
      )}>
        {/* Play/Pause button */}
        <div class="relative mb-4">
          <div class="absolute inset-0 rounded-full bg-(--accent)/20 blur-xl scale-150 group-hover:scale-[2] transition-transform duration-700" />
          <button
            onClick={togglePlay}
            class="relative flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-(--accent) to-(--accent-end) transition-all duration-300 group-hover:scale-110"
            style={{
              "box-shadow": "0 10px 15px -3px color-mix(in srgb, var(--accent) 25%, transparent), 0 4px 6px -4px color-mix(in srgb, var(--accent) 25%, transparent)"
            }}
          >
            <Show when={isPlaying()} fallback={
              <svg class="h-6 w-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            }>
              <svg class="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            </Show>
          </button>
        </div>

        <p class="text-lg font-medium text-white/90 text-center drop-shadow-lg">{props.title}</p>
        <Show when={props.subtitle}>
          <p class="mt-1 text-sm text-white/50 drop-shadow-lg">{props.subtitle}</p>
        </Show>
      </div>

      {/* Corner decorations */}
      <div class="absolute top-3 left-3 h-6 w-6 border-l-2 border-t-2 border-(--accent)/30 rounded-tl-lg pointer-events-none" />
      <div class="absolute top-3 right-3 h-6 w-6 border-r-2 border-t-2 border-(--accent)/30 rounded-tr-lg pointer-events-none" />
      <div class="absolute bottom-3 left-3 h-6 w-6 border-l-2 border-b-2 border-(--accent)/30 rounded-bl-lg pointer-events-none" />
      <div class="absolute bottom-3 right-3 h-6 w-6 border-r-2 border-b-2 border-(--accent)/30 rounded-br-lg pointer-events-none" />
    </div>
  )
}
