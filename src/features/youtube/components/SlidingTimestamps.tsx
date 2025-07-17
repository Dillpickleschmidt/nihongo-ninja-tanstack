// src/features/youtube/components/SlidingTimestamps.tsx
import { cn } from "@/utils"
import { formatDuration } from "@/utils/timeFormat"
import { VocabTimestamp } from "../YouTube"

export default function SlidingTimestamps(props: {
  vocabTimestamps: VocabTimestamp[]
  currentTime: number
}) {
  const getCurrentIndex = () => {
    const currentTimestamp = props.vocabTimestamps.reduce(
      (prev, curr, index) => {
        if (
          props.currentTime >= curr.time &&
          (!prev?.timestamp || curr.time > prev.timestamp.time)
        ) {
          return { timestamp: curr, index }
        }
        return prev
      },
      null as { timestamp: VocabTimestamp; index: number } | null,
    )

    return currentTimestamp?.index ?? -1
  }

  return (
    <div class="relative h-[7.25rem] overflow-hidden">
      <div
        class="absolute inset-0"
        style={{
          "mask-image":
            "linear-gradient(to bottom, transparent, black, transparent)",
          "-webkit-mask-image":
            "linear-gradient(to bottom, transparent, black, transparent)",
        }}
      >
        <div
          class="text-muted-foreground flex flex-col items-center transition-transform duration-500 ease-out"
          style={{
            transform: `translateY(${-getCurrentIndex() * 2.25 + 2.25}rem)`,
          }}
        >
          <div class="relative">
            {props.vocabTimestamps.map((timestamp, index) => (
              <div
                class={cn(
                  "flex h-[2.25rem] items-end space-x-2",
                  index === getCurrentIndex()
                    ? "text-primary transition duration-500 ease-out"
                    : "",
                )}
              >
                <span class="min-w-8 text-base font-light text-blue-400">
                  {formatDuration(timestamp.time)}
                </span>
                <span class="font-japanese text-xl">{timestamp.japanese}</span>
                <span>- {timestamp.english}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
