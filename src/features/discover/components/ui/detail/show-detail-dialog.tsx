import { createSignal, Show } from "solid-js"
import { Play, BookOpen, Star, Film, Calendar } from "lucide-solid"
import { Dialog, DialogContent } from "~/components/ui/dialog"
import { LoadImage } from "../img/load-image"
import { RegionBadge } from "./region-badge"
import { LearnDialog } from "./learn-dialog"
import { getMockRegionData } from "~/features/discover/utils/mock-data"
import {
  formatEpisodeCount,
  formatScore,
  getScoreColor,
  formatSeason,
  formatFormat,
  stripHtml,
} from "~/features/discover/utils/banner-utils"
import { title, cover } from "~/features/discover/api/anilist/util"
import type { DiscoverMedia } from "~/features/discover/api/anilist/types"

interface ShowDetailDialogProps {
  media: DiscoverMedia | null
  open: boolean
  onOpenChange: (open: boolean) => void
  titleLanguage?: string | null
}

export function ShowDetailDialog(props: ShowDetailDialogProps) {
  const [learnOpen, setLearnOpen] = createSignal(false)

  const mediaTitle = () => (props.media ? title(props.media, props.titleLanguage) : "")
  const coverUrl = () => (props.media ? cover(props.media) : "")
  const description = () =>
    props.media ? stripHtml(props.media.description) : ""
  const regionData = () =>
    props.media ? getMockRegionData(props.media.id) : null
  const score = () => props.media?.averageScore ?? null
  const genres = () => props.media?.genres ?? []

  return (
    <>
      <Dialog open={props.open} onOpenChange={props.onOpenChange}>
        <DialogContent
          class="h-screen w-screen max-w-none gap-0 overflow-y-auto rounded-none border-0 bg-neutral-950 p-0 sm:h-auto sm:max-h-[85vh] sm:w-full sm:max-w-2xl sm:rounded-xl sm:border sm:border-white/10"
          overlayClass="bg-black/80"
        >
          <Show when={props.media}>
            {(media) => (
              <div class="flex flex-col">
                {/* Hero Image */}
                <div class="relative aspect-video w-full shrink-0 overflow-hidden sm:rounded-t-xl">
                  <LoadImage
                    src={coverUrl()!}
                    alt={mediaTitle()}
                    class="h-full w-full object-cover"
                    color={media().coverImage?.color}
                  />
                  {/* Gradient overlay */}
                  <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />

                  {/* Title overlay */}
                  <div class="absolute bottom-0 left-0 right-0 p-5">
                    <h2 class="text-2xl font-bold leading-tight text-white drop-shadow-lg sm:text-3xl">
                      {mediaTitle()}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div class="flex flex-col gap-4 p-5">
                  {/* Metadata row */}
                  <div class="flex flex-wrap items-center gap-3 text-sm">
                    <Show when={score()}>
                      <div
                        class="flex items-center gap-1 font-semibold"
                        classList={{
                          [getScoreColor(score())]: true,
                        }}
                      >
                        <Star class="size-3.5" />
                        {formatScore(score())}
                      </div>
                    </Show>

                    <Show when={formatEpisodeCount(media())}>
                      <div class="flex items-center gap-1 text-white/40">
                        <Film class="size-3.5" />
                        <span class="text-xs">
                          {formatEpisodeCount(media())}
                        </span>
                      </div>
                    </Show>

                    <Show when={media().seasonYear}>
                      <div class="flex items-center gap-1 text-white/40">
                        <Calendar class="size-3.5" />
                        <span class="text-xs">
                          {formatSeason(media().season ?? undefined)}{" "}
                          {media().seasonYear}
                        </span>
                      </div>
                    </Show>

                    <Show when={media().format}>
                      <span class="rounded border border-white/10 bg-white/4 px-1.5 py-0.5 text-[0.65rem] text-white/40">
                        {formatFormat(media().format ?? undefined)}
                      </span>
                    </Show>
                  </div>

                  {/* Genres */}
                  <Show when={genres().length > 0}>
                    <div class="flex flex-wrap gap-1.5">
                      {genres().map((genre) => (
                        <span class="rounded-md border border-dynamic-accent/15 bg-dynamic-accent/8 px-2 py-0.5 text-[0.65rem] font-medium text-dynamic-accent/70">
                          {genre}
                        </span>
                      ))}
                    </div>
                  </Show>

                  {/* Region badge */}
                  <Show when={regionData() && !regionData()!.available}>
                    <RegionBadge
                      service={regionData()!.service}
                      countries={regionData()!.countries}
                    />
                  </Show>

                  {/* Description */}
                  <Show when={description()}>
                    <p class="text-sm leading-relaxed text-white/40">
                      {description()}
                    </p>
                  </Show>

                  {/* Action buttons */}
                  <div class="mt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setLearnOpen(true)}
                      class="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-dynamic-accent/80 px-4 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.01] hover:bg-dynamic-accent"
                      style={{
                        "box-shadow":
                          "0 8px 15px -4px color-mix(in srgb, var(--dynamic-accent) 30%, transparent)",
                      }}
                    >
                      <BookOpen class="size-4" />
                      Learn
                    </button>
                    <button
                      type="button"
                      class="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-sm font-semibold text-white/70 transition-all hover:border-white/20 hover:bg-white/7 hover:text-white/90"
                    >
                      <Play class="size-4" />
                      Play
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Show>
        </DialogContent>
      </Dialog>

      {/* Nested Learn Dialog */}
      <LearnDialog
        open={learnOpen()}
        onOpenChange={setLearnOpen}
        title={mediaTitle()}
      />
    </>
  )
}
