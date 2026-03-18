import {
  createResource,
  createSignal,
  onCleanup,
  onMount,
  Show,
} from "solid-js"
import { createFileRoute } from "@tanstack/solid-router"
import { queryKeys } from "~/query/query-keys"
import { authQueryOptions } from "~/query/query-options"
import {
  getGenericSections,
  getCurrentSeason,
} from "~/features/discover/utils/section-configs"
import { generateBannerIndices } from "~/features/discover/utils/banner-utils"
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
import { personalSectionsQueryOptions } from "~/features/discover/hooks/usePersonalSections"
import { useBannerCarousel } from "~/features/discover/hooks/useBannerCarousel"
import { BottomNav } from "~/features/navbar/Nav"
import { DiscoverTabs } from "~/features/discover/components/ui/tabs/discover-tabs"
import { ComingSoonTab } from "~/features/discover/components/ui/tabs/coming-soon-tab"
import { ShowDetailDialog } from "~/features/discover/components/ui/detail/show-detail-dialog"
import { StreamingPrefsModal } from "~/features/discover/components/ui/settings/streaming-prefs-modal"
import type {
  DiscoverMedia,
  Media,
} from "~/features/discover/api/anilist/types"

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
    const bannerSeed = Math.floor(Math.random() * 4294967296)

    const userId = auth?.session?.user?.id ?? null
    const personalSectionsPromise = userId
      ? context.queryClient.fetchQuery(personalSectionsQueryOptions(userId))
      : Promise.resolve(null)

    context.queryClient
      .ensureInfiniteQueryData({
        queryKey: sectionQueryKey(trendingConfig),
        queryFn: () => fetchDiscoverSection(trendingConfig.queryVars!),
        initialPageParam: 1,
        getNextPageParam: () => undefined,
      })
      .then((data) => {
        const page = data.pages?.[0]
        if (!page) return
        const media =
          page.media?.filter((m): m is NonNullable<typeof m> => m != null) ?? []
        const bannerMedia = generateBannerIndices(media, bannerSeed)
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
      bannerSeed,
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
  const [vignetteOpacity, setVignetteOpacity] = createSignal(0)
  const [bannerBlur, setBannerBlur] = createSignal(0)

  const banner = useBannerCarousel(() => loaderData().bannerSeed)
  const titleLanguage = () => personalSections()?.titleLanguage ?? null
  const allSections = () => {
    const personal = personalSections()?.sections
    const generic = loaderData().genericSections
    return personal ? [...personal, ...generic] : generic
  }

  let scrollRef: HTMLDivElement | undefined
  const [bannerTransform, setBannerTransform] = createSignal(
    "scale(1.05) translate(0px, 0px)",
  )

  function handleBannerMouseMove(e: MouseEvent) {
    // Only activate once content overlay has faded out
    if (!scrollRef || scrollRef.scrollTop < 300) return
    const x = (e.clientX / window.innerWidth - 0.5) * 2
    const y = (e.clientY / window.innerHeight - 0.5) * 2
    const maxShift = 5 // px
    setBannerTransform(
      `scale(1.05) translate(${x * maxShift}px, ${y * maxShift}px)`,
    )
  }

  function handleBannerMouseLeave() {
    setBannerTransform("scale(1.05) translate(0px, 0px)")
  }

  function handleCardClick(media: DiscoverMedia | Media) {
    setSelectedMedia(media)
  }

  function handleScroll() {
    if (!scrollRef) return
    const scrollY = scrollRef.scrollTop
    setBannerImageOpacity(Math.max(0.15, 1 - scrollY / 600))
    setContentOpacity(Math.max(0, 1 - scrollY / 300))
    setVignetteOpacity(Math.min(1, Math.max(0, (scrollY - 200) / 200)))
    setBannerBlur(scrollY >= 300 ? 4 : 0)
    if (scrollY < 300) setBannerTransform("scale(1.05) translate(0px, 0px)")
  }

  onMount(() => {
    scrollRef?.addEventListener("scroll", handleScroll, { passive: true })
    onCleanup(() => scrollRef?.removeEventListener("scroll", handleScroll))
  })

  return (
    <div
      ref={scrollRef}
      class="relative h-screen overflow-y-auto bg-[#121212]"
      onMouseMove={handleBannerMouseMove}
      onMouseLeave={handleBannerMouseLeave}
    >
      <DiscoverTabs
        youtubeContent={<ComingSoonTab label="YouTube" />}
        animeContent={
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
              <Show when={!banner.isLoading()} fallback={<BannerSkeleton />}>
                <Show when={banner.current()}>
                  {(anime) => (
                    <div
                      class="absolute inset-0"
                      style={{
                        transform: bannerTransform(),
                        filter: `blur(${bannerBlur()}px)`,
                        transition:
                          "transform 300ms ease-out, filter 300ms ease-out",
                      }}
                    >
                      <BannerImage
                        src={banner.bannerImage()}
                        alt={anime().title?.userPreferred ?? "Anime banner"}
                        color={anime().coverImage?.color}
                      />
                    </div>
                  )}
                </Show>
              </Show>
              <div
                class="pointer-events-none absolute inset-0"
                style={{
                  opacity: vignetteOpacity(),
                  background:
                    "radial-gradient(ellipse at center, transparent 40%, rgba(0, 0, 0, 0.6) 100%)",
                }}
              />
            </div>

            {/* Layer 2: Content overlaid on image area — scrolls normally, fades fast */}
            <div
              class="relative z-1 -mt-[70vh] h-[70vh] md:-mt-[80vh] md:h-[80vh]"
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
                    titleLanguage={titleLanguage()}
                  />
                </Show>
              </div>
            </div>

            {/* Layer 3: Section rows — scroll naturally over the faded banner */}
            <div class="relative z-10 pb-16 sm:px-2">
              <GenericSections
                sections={allSections()}
                titleLanguage={titleLanguage()}
                onCardClick={handleCardClick}
              />
            </div>
          </Show>
        }
        dramasContent={<ComingSoonTab label="Dramas" />}
      />

      <ShowDetailDialog
        media={selectedMedia()}
        open={selectedMedia() !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedMedia(null)
        }}
        titleLanguage={titleLanguage()}
      />

      <StreamingPrefsModal />

      <BottomNav
        class="bg-background/85 opacity-100"
        dailyProgressPercentage={65}
      />
    </div>
  )
}
