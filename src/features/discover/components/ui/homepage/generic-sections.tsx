import { Index, Suspense, createSignal, onCleanup } from "solid-js"
import { AnimeSection } from "~/features/discover/components/ui/cards/query-card"
import { SkeletonAnimeCard } from "~/features/discover/components/ui/cards/skeleton-card"
import type { SectionConfig } from "~/features/discover/utils/section-configs"

function SingleSection(props: { section: SectionConfig }) {
  const [shouldLoad, setShouldLoad] = createSignal(false)

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
      <div class="text-muted-foreground flex cursor-pointer items-end px-4 pt-5">
        <div class="text-lg font-semibold leading-none">
          {props.section.title}
        </div>
        <div class="ml-auto text-xs">View More</div>
      </div>
      <div class="flex overflow-x-auto pb-4" ref={observeContainer}>
        {shouldLoad() ? (
          <Suspense
            fallback={
              <Index each={Array.from({ length: 10 })}>
                {() => <SkeletonAnimeCard />}
              </Index>
            }
          >
            <AnimeSection config={props.section} />
          </Suspense>
        ) : (
          <Index each={Array.from({ length: 10 })}>
            {() => <SkeletonAnimeCard />}
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
export function GenericSections(props: { sections: SectionConfig[] }) {
  return (
    <Index each={props.sections}>
      {(section) => <SingleSection section={section()} />}
    </Index>
  )
}
