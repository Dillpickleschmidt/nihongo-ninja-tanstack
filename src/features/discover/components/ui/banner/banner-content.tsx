import { createSignal, For, Show } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { Play } from "lucide-solid"
import { Button } from "~/components/ui/button"
import type { DiscoverMedia } from "~/features/discover/api/anilist/types"
import { title } from "~/features/discover/api/anilist/util"
import { AnimatedHeart } from "~/features/discover/components/icons/animated/heart"
import { AnimatedBookmark } from "~/features/discover/components/icons/animated/bookmark"
import {
  stripHtml,
  formatEpisodeCount,
  formatScore,
  getScoreColor,
  formatSeason,
  formatStatus,
  formatFormat,
} from "~/features/discover/utils/banner-utils"

interface BannerContentProps {
  current: DiscoverMedia | null | undefined
  colorVars: Record<string, string>
  currentIndex: number
  onSelectIndex: (index: number) => void
  itemCount: number
  titleLanguage?: string | null
}

export function BannerContent(props: BannerContentProps) {
  const [isFavorited, setIsFavorited] = createSignal(false)
  const [isBookmarked, setIsBookmarked] = createSignal(false)

  return (
    <>
      <style>{`
        @keyframes banner-fill {
          from { transform: translate3d(-100%, 0, 0); }
          to { transform: translate3d(0%, 0, 0); }
        }
        .progress-badge {
          transition: width 0.7s ease;
        }
        .progress-badge.active .progress-content {
          animation: banner-fill 15s linear;
        }
      `}</style>

      <div style={props.colorVars} class="flex h-full w-full flex-col">
        {/* Main Content Grid */}
        <Show when={props.current}>
          {(anime) => (
            <div class="mt-auto grid max-h-full w-full grid-cols-1 pb-2 md:grid-cols-2 md:pl-5">
              {/* Left Column */}
              <div class="flex w-full flex-col items-center text-center md:items-start md:text-left">
                {/* Title */}
                <Link
                  to="."
                  class="line-clamp-2 w-[900px] max-w-[85%] cursor-pointer text-3xl leading-tight font-black text-balance text-white hover:text-neutral-300 hover:underline md:text-4xl"
                >
                  {title(anime(), props.titleLanguage)}
                </Link>

                {/* Metadata Buttons */}
                <div class="flex max-w-full flex-nowrap items-center gap-2 overflow-clip py-4 pt-4 font-bold md:place-content-start md:self-start">
                  <div class="text-custom! bg-primary/5 inline-flex h-7 items-center rounded px-3.5 text-sm text-nowrap">
                    {formatEpisodeCount(anime())}
                  </div>

                  <Show when={anime().format}>
                    <Link to="." tabindex={-1}>
                      <Button
                        variant="ghost"
                        class="text-custom! select:text-primary! bg-primary/5 h-7 font-bold text-nowrap"
                        onClick={() => {}}
                      >
                        {formatFormat(anime().format)}
                      </Button>
                    </Link>
                  </Show>

                  <Show when={anime().status}>
                    <Link to="." tabindex={-1}>
                      <Button
                        variant="ghost"
                        class="text-custom! select:text-primary! bg-primary/5 h-7 font-bold text-nowrap"
                        onClick={() => {}}
                      >
                        {formatStatus(anime().status)}
                      </Button>
                    </Link>
                  </Show>

                  <Show when={anime().season}>
                    <Link to="." tabindex={-1}>
                      <Button
                        variant="ghost"
                        class="text-custom! select:text-primary! bg-primary/5 h-7 font-bold text-nowrap capitalize"
                        onClick={() => {}}
                      >
                        {formatSeason(anime().season)} {anime().seasonYear}
                      </Button>
                    </Link>
                  </Show>

                  <Show when={anime().averageScore}>
                    <Link to="." tabindex={-1}>
                      <Button
                        variant="ghost"
                        class={`select:text-primary! bg-primary/5 h-7 font-bold text-nowrap ${getScoreColor(anime().averageScore)}`}
                        onClick={() => {}}
                      >
                        {formatScore(anime().averageScore)}
                      </Button>
                    </Link>
                  </Show>
                </div>

                {/* Action Buttons Group */}
                <div class="flex w-[280px] max-w-full flex-row">
                  <Button
                    variant="default"
                    size="sm"
                    class="bg-custom select:bg-custom-600! text-contrast mr-2 grow font-bold transition-opacity hover:opacity-90"
                  >
                    <Play fill="currentColor" size={16} />
                    <span>Watch Now</span>
                  </Button>

                  <Button
                    variant="ghost"
                    onClick={() => setIsFavorited(!isFavorited())}
                    class="animated-icon select:text-custom! ml-2 h-9 w-9"
                  >
                    <AnimatedHeart
                      fill={isFavorited() ? "currentColor" : "transparent"}
                      size="1rem"
                      strokeWidth={2}
                    />
                  </Button>

                  <Button
                    variant="ghost"
                    onClick={() => setIsBookmarked(!isBookmarked())}
                    class="animated-icon select:text-custom! ml-2 h-9 w-9"
                  >
                    <AnimatedBookmark
                      fill={isBookmarked() ? "currentColor" : "transparent"}
                      size="1rem"
                      strokeWidth={2}
                    />
                  </Button>
                </div>
              </div>

              {/* Right Column */}
              <div class="flex w-full min-w-0 flex-col items-center self-end md:items-end md:pr-5">
                <Show when={anime().description}>
                  <p class="text-muted-foreground/80 line-clamp-2 max-w-[90%] pt-3 text-center text-xs text-balance md:line-clamp-3 md:max-w-[75%] md:text-right md:text-sm">
                    {stripHtml(anime().description)}
                  </p>
                </Show>

                <Show when={anime().genres && anime().genres!.length > 0}>
                  <div class="hidden max-w-full flex-nowrap items-center gap-2 overflow-clip pt-4 md:flex md:place-content-end md:self-end">
                    <For each={anime().genres}>
                      {(genre) => (
                        <Link to="." tabindex={-1}>
                          <Button
                            variant="ghost"
                            class="text-custom! select:text-primary! bg-primary/5 h-7 font-bold text-nowrap"
                            onClick={() => {}}
                          >
                            {genre}
                          </Button>
                        </Link>
                      )}
                    </For>
                  </div>
                </Show>
              </div>
            </div>
          )}
        </Show>

        {/* Navigation Dots Row */}
        <div
          class="flex w-full flex-nowrap justify-center overflow-clip"
          style={props.colorVars}
        >
          <For each={Array(props.itemCount)}>
            {(_, index) => {
              const isActive = () => props.currentIndex === index()
              return (
                <div
                  class="pt-2 pb-4"
                  classList={{ "cursor-pointer": !isActive() }}
                  onClick={() => props.onSelectIndex(index())}
                >
                  <div
                    class="progress-badge mr-2 overflow-clip rounded bg-neutral-800"
                    classList={{ active: isActive() }}
                    style={{
                      height: "4px",
                      width: isActive() ? "3rem" : "1.5rem",
                    }}
                  >
                    <div
                      class="progress-content h-full w-full transform-gpu"
                      style={{
                        background: isActive()
                          ? "rgb(var(--custom-r), var(--custom-g), var(--custom-b))"
                          : "transparent",
                        animation: isActive()
                          ? "banner-fill 15s linear forwards"
                          : "none",
                      }}
                    />
                  </div>
                </div>
              )
            }}
          </For>
        </div>
      </div>
    </>
  )
}
