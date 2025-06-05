// app/features/youtube/components/YouTubeIframe.tsx
import { createSignal, onMount, createEffect, onCleanup } from "solid-js"
import { loadYouTubeApi } from "../util/youtubeAPI"
import { Loader2 } from "lucide-solid"

type YouTubeIframeProps = {
  videoId: string
  title: string
  startTime?: number
  seekTime?: number | null
  onTimeUpdate?: (currentTime: number) => void
}

export function YouTubeIframe(props: YouTubeIframeProps) {
  let iframeRef!: HTMLDivElement
  const [isLoading, setIsLoading] = createSignal(true)
  const [player, setPlayer] = createSignal<YT.Player | null>(null)
  let timeUpdateInterval: number | undefined

  onMount(async () => {
    await loadYouTubeApi()

    const newPlayer = new YT.Player(iframeRef, {
      videoId: props.videoId,
      host: "https://www.youtube-nocookie.com",
      playerVars: {
        start: props.startTime ?? 0,
        enablejsapi: 1,
      },
      height: "100%",
      width: "100%",
      events: {
        onReady: (event) => {
          setIsLoading(false)
          setPlayer(event.target)
          if (props.onTimeUpdate) {
            timeUpdateInterval = window.setInterval(() => {
              const time = event.target.getCurrentTime()
              props.onTimeUpdate?.(time)
            }, 1000) as unknown as number
          }
        },
      },
    })
  })

  // Create an effect to watch for seekTime changes
  createEffect(() => {
    const currentPlayer = player()
    const seekTo = props.seekTime

    if (currentPlayer && seekTo !== null && seekTo !== undefined) {
      currentPlayer.seekTo(seekTo, true)
    }
  })

  onCleanup(() => {
    if (timeUpdateInterval) {
      clearInterval(timeUpdateInterval)
    }
    // Clean up player if needed
    player()?.destroy()
  })

  return (
    <div class="relative z-10">
      {/* Add another container div for aspect ratio */}
      <div class="relative w-full pt-[56.25%]">
        {/* 16:9 aspect ratio */}
        <div ref={iframeRef} class="absolute inset-0" />
      </div>
      {isLoading() && (
        <div class="bg-background absolute inset-0 grid place-items-center">
          <div class="flex min-h-48 items-center justify-center">
            <Loader2 class="h-20 w-20 animate-spin text-neutral-300" />
          </div>
        </div>
      )}
    </div>
  )
}
