// YouTubeVideo.tsx
import { Show, For, createSignal } from "solid-js"
import { YouTubeIframe } from "./components/YouTubeIframe"
import { formatDuration } from "@/utils/timeFormat"
import { cn } from "@/utils"
import type { Accessor, JSX, Setter } from "solid-js"
import SlidingTimestamps from "./components/SlidingTimestamps"

export type Timestamp = {
  label: string
  time: number
}

export type VocabTimestamp = {
  japanese: string | JSX.Element
  english: string | JSX.Element
  time: number
}

type YouTubeVideoProps = {
  videoId: string
  title: string
  startTime?: number
  timestamps?: Timestamp[]
  vocabTimestamps?: VocabTimestamp[]
  credit?: string
  glow?: boolean
  seekTime?: Accessor<number | null>
  setSeekTime?: Setter<number | null>
  class?: string
}

export default function YouTubeVideo(props: YouTubeVideoProps) {
  const [internalSeekTime, setInternalSeekTime] = createSignal<number | null>(
    null,
  )
  const [currentTime, setCurrentTime] = createSignal(0)

  // Use provided signal and setter if available, otherwise use internal ones
  const seekTime = props.seekTime || internalSeekTime
  const setSeekTime = props.setSeekTime || setInternalSeekTime

  const YouTubePlayer = () => (
    <YouTubeIframe
      videoId={props.videoId}
      title={props.title}
      startTime={props.startTime}
      seekTime={seekTime()}
      onTimeUpdate={setCurrentTime}
    />
  )

  return (
    <div>
      <Show when={props.glow} fallback={<YouTubePlayer />}>
        <div class="glow">
          <YouTubePlayer />
        </div>
      </Show>

      <Show when={props.vocabTimestamps}>
        <div class="relative mx-auto max-w-2xl">
          <div class="bg-background absolute bottom-0 h-48 w-full rounded-3xl border px-3 shadow-md">
            <div class="absolute bottom-0 w-full">
              <SlidingTimestamps
                vocabTimestamps={props.vocabTimestamps!}
                currentTime={currentTime()}
              />
            </div>
          </div>
          <div class="h-28" />
        </div>
      </Show>

      <Show when={props.credit}>
        <div class="mt-2">
          <small class="text-muted-foreground">
            Credit: <span class="font-semibold">{props.credit}</span>
          </small>
        </div>
      </Show>

      <Show when={props.timestamps}>
        <div class="mt-4 flex justify-center">
          <ul class="list-disc">
            <For each={props.timestamps!}>
              {(timestamp) => (
                <li
                  class="transform cursor-pointer duration-150 ease-in-out hover:scale-[99%]"
                  onClick={() => setSeekTime(timestamp.time)}
                >
                  <div
                    class={cn(
                      "inline-flex space-x-2 text-base font-light text-blue-400",
                      props.class,
                    )}
                  >
                    <div class="min-w-8">{formatDuration(timestamp.time)}</div>
                    <span>{timestamp.label}</span>
                  </div>
                </li>
              )}
            </For>
          </ul>
        </div>
      </Show>
    </div>
  )
}
