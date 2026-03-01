import {
  createMemo,
  createResource,
  createSignal,
  onCleanup,
  onMount,
  Show,
  Suspense,
} from "solid-js"
import { createFileRoute } from "@tanstack/solid-router"
import { queryKeys } from "~/query/query-keys"
import { authQueryOptions } from "~/query/query-options"
import {
  getGenericSections,
  getCurrentSeason,
} from "~/features/discover/utils/section-configs"
import { BannerSkeleton } from "~/features/discover/components/ui/banner/skeleton-banner"
import { BannerImage } from "~/features/discover/components/ui/banner/banner-image"
import { BannerContent } from "~/features/discover/components/ui/banner/banner-content"
import { GenericSections } from "~/features/discover/components/ui/homepage/generic-sections"
import {
  fetchDiscoverSection,
  fetchHqImage,
  hqImageQueryKey,
} from "~/features/discover/api/anilist/fetch"
import { sectionQueryKey } from "~/features/discover/hooks/useDiscoverSection"
import {
  personalSectionsQueryOptions,
} from "~/features/discover/hooks/usePersonalSections"
import { useBannerCarousel } from "~/features/discover/hooks/useBannerCarousel"
import { BottomNav } from "~/features/navbar/Nav"
import { DiscoverTabs } from "~/features/discover/components/ui/tabs/discover-tabs"
import { ComingSoonTab } from "~/features/discover/components/ui/tabs/coming-soon-tab"
import { ShowDetailDialog } from "~/features/discover/components/ui/detail/show-detail-dialog"
import { StreamingPrefsModal } from "~/features/discover/components/ui/settings/streaming-prefs-modal"
import type { DiscoverMedia, Media } from "~/features/discover/api/anilist/types"

export const Route = createFileRoute("/discover")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 0,
        opacityOffset: -1,
        showGradient: false,
      })
    }

    const { season, year } = getCurrentSeason()
    const genericSections = getGenericSections(season, year)
    const auth = context.queryClient.getQueryData(authQueryOptions().queryKey)

    const trendingConfig = genericSections.find((s) => s.type === "trending")!

    const userId = auth?.session?.user?.id ?? null
    const personalSectionsPromise = userId
      ? context.queryClient.fetchQuery(personalSectionsQueryOptions(userId))
      : Promise.resolve(null)

    context.queryClient
      .ensureQueryData({
        queryKey: sectionQueryKey(trendingConfig),
        queryFn: () =>
          fetchDiscoverSection(trendingConfig.queryVars!, {
            withBannerIndices: true,
          }),
      })
      .then((data) => {
        const media =
          data.media?.filter(
            (m): m is NonNullable<typeof m> => m != null,
          ) ?? []
        const bannerMedia = data.bannerIndices
          .map((i) => media[i])
          .filter(Boolean)

        for (const anime of bannerMedia) {
          context.queryClient.prefetchQuery({
            queryKey: hqImageQueryKey(anime.id),
            queryFn: () => fetchHqImage(anime.id),
          })
        }
      })

    return {
      genericSections,
      personalSectionsPromise,
    }
  },
  component: DiscoverPage,
})

function DiscoverPage() {
  const loaderData = Route.useLoaderData()
  const [personalSections] = createResource(
    () => loaderData().personalSectionsPromise,
  )
  const [selectedMedia, setSelectedMedia] = createSignal<
    DiscoverMedia | Media | null
  >(null)
  const [bannerImageOpacity, setBannerImageOpacity] = createSignal(1)
  const [contentOpacity, setContentOpacity] = createSignal(1)

  const banner = useBannerCarousel()
  const allSections = createMemo(() => {
    const personal = personalSections()
    const generic = loaderData().genericSections
    return personal ? [...personal, ...generic] : generic
  })

  let scrollRef: HTMLDivElement | undefined

  function handleCardClick(media: DiscoverMedia | Media) {
    setSelectedMedia(media)
  }

  function handleScroll() {
    if (!scrollRef) return
    const scrollY = scrollRef.scrollTop
    setBannerImageOpacity(Math.max(0.07, 1 - scrollY / 600))
    setContentOpacity(Math.max(0, 1 - scrollY / 300))
  }

  onMount(() => {
    scrollRef?.addEventListener("scroll", handleScroll, { passive: true })
    onCleanup(() =>
      scrollRef?.removeEventListener("scroll", handleScroll),
    )
  })

  return (
    <div ref={scrollRef} class="relative h-screen overflow-y-auto">
      <DiscoverTabs
        youtubeContent={<ComingSoonTab label="YouTube" />}
        animeContent={
          <Suspense fallback={<BannerSkeleton />}>
            <Show
              when={!banner.error()}
              fallback={
                <div class="w-full bg-red-50 p-4 text-red-600">
                  Error loading banner
                </div>
              }
            >
              {/* Layer 1: Sticky background image — fades slowly */}
              <div
                class="sticky top-0 z-0 h-[70vh] overflow-hidden md:h-[80vh]"
                style={{ opacity: bannerImageOpacity() }}
              >
                <Show when={banner.current()}>
                  {(anime) => (
                    <div class="absolute inset-0">
                      <BannerImage
                        src={banner.bannerImage()}
                        alt={anime().title?.userPreferred ?? "Anime banner"}
                        color={anime().coverImage?.color}
                      />
                    </div>
                  )}
                </Show>
              </div>

              {/* Layer 2: Content overlaid on image area — scrolls normally, fades fast */}
              <div
                class="relative z-[1] -mt-[70vh] h-[70vh] md:-mt-[80vh] md:h-[80vh]"
                style={{ opacity: contentOpacity() }}
              >
                <div class="relative flex h-full flex-col">
                  <Show when={banner.itemCount() > 0}>
                    <BannerContent
                      current={banner.current()}
                      colorVars={banner.colorVars()}
                      currentIndex={banner.currentIndex()}
                      onSelectIndex={banner.selectIndex}
                      itemCount={banner.itemCount()}
                    />
                  </Show>
                </div>
              </div>

              {/* Layer 3: Section rows — scroll naturally over the faded banner */}
              <div class="relative z-10 pb-16 sm:px-2">
                <GenericSections
                  sections={allSections()}
                  onCardClick={handleCardClick}
                />
              </div>
            </Show>
          </Suspense>
        }
        dramasContent={<ComingSoonTab label="Dramas" />}
      />

      <ShowDetailDialog
        media={selectedMedia()}
        open={selectedMedia() !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedMedia(null)
        }}
      />

      <StreamingPrefsModal />

      <BottomNav
        class="bg-background/85 opacity-100"
        dailyProgressPercentage={65}
      />
    </div>
  )
}
