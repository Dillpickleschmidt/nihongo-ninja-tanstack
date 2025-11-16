import { createSignal, For, Show } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { Play } from "lucide-solid"
import { Button } from "@/components/ui/button"
import type { FragmentOf } from "gql.tada"
import { FullMedia } from "@/features/explore/api/anilist/queries"
import type { EpisodesResponse } from "@/features/explore/api/anizip"
import { BannerImage } from "./banner-image"
import { AnimatedHeart } from "@/features/explore/components/icons/animated/heart"
import { AnimatedBookmark } from "@/features/explore/components/icons/animated/bookmark"
import {
  stripHtml,
  formatEpisodeCount,
  formatScore,
  getScoreColor,
  formatSeason,
  formatStatus,
  formatFormat,
  formatColorForCSS,
} from "@/features/explore/utils/banner-utils"

interface FullBannerProps {
  current: FragmentOf<typeof FullMedia> | null | undefined
  anizip: EpisodesResponse | null | undefined
  isDesktop: boolean
  currentIndex: number
  onSelectIndex: (index: number) => void
  itemCount: number
}

export function FullBanner(props: FullBannerProps) {
  const [isFavorited, setIsFavorited] = createSignal(false)
  const [isBookmarked, setIsBookmarked] = createSignal(false)

  const getColorVars = () => {
    const hexColor = props.current?.coverImage?.color ?? "#fff"
    const { r, g, b } = formatColorForCSS(hexColor)

    return {
      "--custom": hexColor,
      "--custom-r": r,
      "--custom-g": g,
      "--custom-b": b,
    } as any
  }

  const bannerImage = () => {
    const anime = props.current

    if (!anime) {
      return null
    }

    // Mobile: always use cover image (portrait from AniList)
    if (!props.isDesktop) {
      return anime.coverImage?.extraLarge
    }

    // Desktop: check for AniZip images first
    if (props.anizip?.images) {
      // Priority 1: AniZip Fanart (landscape banner)
      const fanart = props.anizip.images.find(
        (i) => i.coverType === "Fanart",
      )?.url
      if (fanart) {
        return fanart
      }

      // Priority 2: AniZip Poster (portrait)
      const poster = props.anizip.images.find(
        (i) => i.coverType === "Poster",
      )?.url
      if (poster) {
        return poster
      }
    }

    // Priority 3-5: Fallback to AniList chain
    return anime.bannerImage ?? anime.coverImage?.extraLarge
  }

  return (
    <>
      <style>{`
        @keyframes banner-fill {
          from { transform: translate3d(-100%, 0, 0); }
          to { transform: translate3d(0%, 0, 0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .progress-badge {
          transition: width 0.7s ease;
        }
        .progress-badge.active .progress-content {
          animation: banner-fill 15s linear;
        }
        .fade-in {
          animation: fade-in ease 0.8s;
        }
      `}</style>

      {/* Image Background Layer */}
      <Show when={props.current}>
        {(anime) => (
          <BannerImage
            src={bannerImage()}
            alt={anime().title?.userPreferred ?? "Anime banner"}
            color={anime().coverImage?.color}
          />
        )}
      </Show>

      {/* Content Overlay */}
      <div style={getColorVars()} class="relative flex h-full w-full flex-col">
        {/* Main Content Grid */}
        <Show when={props.current}>
          {(anime) => (
            <div class="mt-auto grid max-h-full w-full grid-cols-1 pb-2 md:grid-cols-2 md:pl-5">
              {/* Left Column */}
              <div class="flex w-full flex-col items-center text-center md:items-start md:text-left">
                {/* Title */}
                <Link
                  to="."
                  class="fade-in line-clamp-2 w-[900px] max-w-[85%] cursor-pointer text-3xl leading-tight font-black text-balance text-white hover:text-neutral-300 hover:underline md:text-4xl"
                >
                  {anime().title?.userPreferred}
                </Link>

                {/* Metadata Buttons */}
                <div class="flex max-w-full flex-nowrap items-center gap-2 overflow-clip py-4 pt-4 font-bold md:place-content-start md:self-start">
                  {/* Episodes/Progress */}
                  <div class="!text-custom bg-primary/5 inline-flex h-7 items-center rounded px-3.5 text-sm text-nowrap">
                    {formatEpisodeCount(anime())}
                  </div>

                  {/* Format */}
                  <Show when={anime().format}>
                    <Link to="." tabindex={-1}>
                      <Button
                        variant="ghost"
                        class="!text-custom select:!text-primary bg-primary/5 h-7 font-bold text-nowrap"
                        onClick={() => {}}
                      >
                        {formatFormat(anime().format)}
                      </Button>
                    </Link>
                  </Show>

                  {/* Status */}
                  <Show when={anime().status}>
                    <Link to="." tabindex={-1}>
                      <Button
                        variant="ghost"
                        class="!text-custom select:!text-primary bg-primary/5 h-7 font-bold text-nowrap"
                        onClick={() => {}}
                      >
                        {formatStatus(anime().status)}
                      </Button>
                    </Link>
                  </Show>

                  {/* Season */}
                  <Show when={anime().season}>
                    <Link to="." tabindex={-1}>
                      <Button
                        variant="ghost"
                        class="!text-custom select:!text-primary bg-primary/5 h-7 font-bold text-nowrap capitalize"
                        onClick={() => {}}
                      >
                        {formatSeason(anime().season)} {anime().seasonYear}
                      </Button>
                    </Link>
                  </Show>

                  {/* Score */}
                  <Show when={anime().averageScore}>
                    <Link to="." tabindex={-1}>
                      <Button
                        variant="ghost"
                        class={`select:!text-primary bg-primary/5 h-7 font-bold text-nowrap ${getScoreColor(anime().averageScore)}`}
                        onClick={() => {}}
                      >
                        {formatScore(anime().averageScore)}
                      </Button>
                    </Link>
                  </Show>
                </div>

                {/* Action Buttons Group */}
                <div class="flex w-[280px] max-w-full flex-row">
                  {/* Play Button */}
                  <Button
                    variant="default"
                    size="sm"
                    class="bg-custom select:!bg-custom-600 text-contrast mr-2 grow font-bold transition-opacity hover:opacity-90"
                  >
                    <Play fill="currentColor" size={16} />
                    <span>Watch Now</span>
                  </Button>

                  {/* Favorite Button */}
                  <Button
                    variant="ghost"
                    onClick={() => setIsFavorited(!isFavorited())}
                    class="animated-icon select:!text-custom ml-2 h-9 w-9"
                  >
                    <AnimatedHeart
                      fill={isFavorited() ? "currentColor" : "transparent"}
                      size="1rem"
                      strokeWidth={2}
                    />
                  </Button>

                  {/* Bookmark Button */}
                  <Button
                    variant="ghost"
                    onClick={() => setIsBookmarked(!isBookmarked())}
                    class="animated-icon select:!text-custom ml-2 h-9 w-9"
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
                {/* Description */}
                <Show when={anime().description}>
                  <p class="text-muted-foreground/80 fade-in line-clamp-2 max-w-[90%] pt-3 text-center text-xs text-balance md:line-clamp-3 md:max-w-[75%] md:text-right md:text-sm">
                    {stripHtml(anime().description)}
                  </p>
                </Show>

                {/* Genres */}
                <Show when={anime().genres && anime().genres!.length > 0}>
                  <div class="hidden max-w-full flex-nowrap items-center gap-2 overflow-clip pt-4 md:flex md:place-content-end md:self-end">
                    <For each={anime().genres}>
                      {(genre) => (
                        <Link to="." tabindex={-1}>
                          <Button
                            variant="ghost"
                            class="!text-custom select:!text-primary bg-primary/5 h-7 font-bold text-nowrap"
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
          style={getColorVars()}
        >
          <For each={Array(props.itemCount)}>
            {(_, index) => {
              const isActive = () => props.currentIndex === index()
              return (
                <div
                  class="pt-2 pb-4"
                  classList={{
                    "cursor-pointer": !isActive(),
                  }}
                  onClick={() => props.onSelectIndex(index())}
                >
                  <div
                    class="progress-badge mr-2 overflow-clip rounded bg-neutral-800"
                    classList={{
                      active: isActive(),
                    }}
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
