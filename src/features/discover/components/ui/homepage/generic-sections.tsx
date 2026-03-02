import { Index, Suspense, createSignal, onCleanup } from "solid-js"
import { AnimeSection } from "~/features/discover/components/ui/cards/query-card"
import { SkeletonAnimeCard } from "~/features/discover/components/ui/cards/skeleton-card"
import { SectionHeader } from "~/features/discover/components/ui/homepage/section-header"
import { isLargeCards } from "~/features/discover/hooks/useWeightSettings"
import type { SectionConfig } from "~/features/discover/utils/section-configs"
import type {
  DiscoverMedia,
  Media,
} from "~/features/discover/api/anilist/types"

const DEFAULT_LARGE_SECTIONS = new Set([
  "Popular This Season",
  "All Time Popular",
  "Action Anime",
])

function SingleSection(props: {
  section: SectionConfig
  titleLanguage?: string | null
  onCardClick?: (media: DiscoverMedia | Media) => void
}) {
  const [shouldLoad, setShouldLoad] = createSignal(false)
  const defaultLarge = () => DEFAULT_LARGE_SECTIONS.has(props.section.title)
  const cardSize = (): "small" | "large" =>
    isLargeCards(props.section.title, defaultLarge()) ? "large" : "small"

  const observeContainer = (el: HTMLDivElement) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0 },
    )
    observer.observe(el)
    onCleanup(() => observer.unobserve(el))
  }

  return (
    <>
      <SectionHeader section={props.section} defaultLarge={defaultLarge()} />
      <div
        class="scrollbar-none flex items-start gap-8 overflow-x-auto p-4"
        ref={observeContainer}
      >
        {shouldLoad() ? (
          <Suspense
            fallback={
              <Index each={Array.from({ length: 10 })}>
                {() => <SkeletonAnimeCard size={cardSize()} />}
              </Index>
            }
          >
            <AnimeSection
              config={props.section}
              cardSize={cardSize()}
              titleLanguage={props.titleLanguage}
              onCardClick={props.onCardClick}
            />
          </Suspense>
        ) : (
          <Index each={Array.from({ length: 10 })}>
            {() => <SkeletonAnimeCard size={cardSize()} />}
          </Index>
        )}
      </div>
    </>
  )
}

/**
 * Generic anime sections (Popular, Trending, etc.)
 * Lazy loads data as sections scroll into view
 */
export function GenericSections(props: {
  sections: SectionConfig[]
  titleLanguage?: string | null
  onCardClick?: (media: DiscoverMedia | Media) => void
}) {
  return (
    <Index each={props.sections}>
      {(section) => (
        <SingleSection
          section={section()}
          titleLanguage={props.titleLanguage}
          onCardClick={props.onCardClick}
        />
      )}
    </Index>
  )
}
