import { Show, createMemo } from "solid-js"
import { StatusDot } from "../status-dot"
import { LoadImage } from "../img/load-image"
import type { DiscoverMedia, Media } from "../../../api/anilist/types"
import { cover, coverMedium, title } from "../../../api/anilist/util"
import { getMockComprehension } from "../../../utils/mock-data"

interface SmallAnimeCardProps {
  media: DiscoverMedia | Media
  size?: "small" | "large"
  status?:
    | "CURRENT"
    | "PLANNING"
    | "COMPLETED"
    | "PAUSED"
    | "DROPPED"
    | "REPEATING"
  onCardClick?: (media: DiscoverMedia | Media) => void
}

function getBarColor(pct: number): string {
  if (pct >= 70) return "from-emerald-600 to-emerald-400"
  if (pct >= 45) return "from-amber-600 to-amber-400"
  return "from-red-600 to-red-400"
}

export function SmallAnimeCard(props: SmallAnimeCardProps) {
  const isLarge = () => props.size === "large"
  const coverUrl = () =>
    isLarge() ? (cover(props.media) ?? "") : (coverMedium(props.media) ?? "")
  const titleText = () => title(props.media)
  const comprehension = createMemo(() => getMockComprehension(props.media.id))

  return (
    <>
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(1rem); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.5s ease-out both; }
      `}</style>

      <button
        type="button"
        onClick={() => props.onCardClick?.(props.media)}
        class="animate-fade-up relative shrink-0 cursor-pointer text-left text-white ease-instant-hover-300 hover:scale-102 hover:brightness-115 [content-visibility:auto]"
        classList={{
          "w-38": !isLarge(),
          "w-56": isLarge(),
        }}
      >
        <div class="flex flex-col">
        {/* Cover Image */}
        <div
          class="overflow-hidden rounded-t-lg"
          classList={{ "h-54": !isLarge(), "h-72": isLarge() }}
        >
          <LoadImage
            src={coverUrl()}
            alt="cover"
            class="h-full w-full object-cover"
            color={props.media.coverImage?.color}
          />
        </div>

        {/* Comprehension bar */}
        <div class="h-1 w-full overflow-hidden rounded-b-lg bg-white/6">
          <div
            class={`h-full bg-gradient-to-r ${getBarColor(comprehension().avg)}`}
            style={{ width: `${comprehension().avg}%` }}
          />
        </div>

        {/* Comprehension numbers */}
        <div class="flex items-baseline justify-between px-0.5 pt-2">
          <div
            class="flex flex-col"
            title="Average comprehension across all episodes"
          >
            <span class="text-[0.55rem] uppercase tracking-wider text-white/25">
              avg
            </span>
            <span class="tabular-nums text-sm font-semibold text-white/70">
              {comprehension().avg}%
            </span>
          </div>
          <span class="text-white/15">/</span>
          <div
            class="flex flex-col items-end"
            title="Episode with most comprehension"
          >
            <span class="text-[0.55rem] uppercase tracking-wider text-white/25">
              best
            </span>
            <span class="tabular-nums text-sm font-bold text-(--accent)">
              {comprehension().best}%
            </span>
          </div>
        </div>

        {/* Title */}
        <div
          class="line-clamp-2 pt-2 font-black"
          classList={{
            "text-[0.8rem]": !isLarge(),
            "text-[0.9rem]": isLarge(),
          }}
        >
          <Show when={props.status}>
            <StatusDot variant={props.status!} />
          </Show>
          {titleText()}
        </div>
        </div>
      </button>
    </>
  )
}
