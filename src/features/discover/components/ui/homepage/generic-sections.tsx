import {
  Index,
  Match,
  Show,
  Suspense,
  Switch,
  createSignal,
  createMemo,
  onMount,
  onCleanup,
} from "solid-js"
import { SmallAnimeCard } from "~/features/discover/components/ui/cards/small-card"
import { SkeletonAnimeCard } from "~/features/discover/components/ui/cards/skeleton-card"
import { SectionHeader } from "~/features/discover/components/ui/homepage/section-header"
import { useDiscoverSection } from "~/features/discover/hooks/useDiscoverSection"
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

// Approximate row heights (card + gap) for max-height calculation
const SMALL_ROW_H = 310
const LARGE_ROW_H = 390

function SingleSection(props: {
  section: SectionConfig
  titleLanguage?: string | null
  onCardClick?: (media: DiscoverMedia | Media) => void
}) {
  const [shouldLoad, setShouldLoad] = createSignal(false)
  const [expanded, setExpanded] = createSignal(false)
  const defaultLarge = () => DEFAULT_LARGE_SECTIONS.has(props.section.title)
  const cardSize = (): "small" | "large" =>
    isLargeCards(props.section.title, defaultLarge()) ? "large" : "small"

  const query = useDiscoverSection(() => props.section, {
    enabled: shouldLoad,
  })

  const media = createMemo(() => {
    if (query.status !== "success") return undefined
    if (expanded()) {
      return query.data.pages.flatMap((p) =>
        (p.media ?? []).filter((m): m is NonNullable<typeof m> => m != null),
      )
    }
    return (
      query.data.pages?.[0]?.media?.filter(
        (m): m is NonNullable<typeof m> => m != null,
      ) ?? []
    )
  })

  const maxHeight = () => {
    const isLarge = cardSize() === "large"
    const rows = expanded() ? (isLarge ? 3 : 4) : 1
    const rowH = isLarge ? LARGE_ROW_H : SMALL_ROW_H
    return rows * rowH
  }

  // Lazy load: only enable the query when section scrolls into view
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

  // Infinite scroll sentinel
  let sentinelRef: HTMLDivElement | undefined
  let scrollRef: HTMLDivElement | undefined

  onMount(() => {
    if (!sentinelRef) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry?.isIntersecting &&
          expanded() &&
          query.hasNextPage &&
          !query.isFetchingNextPage
        ) {
          query.fetchNextPage()
        }
      },
      { root: scrollRef, threshold: 0.1 },
    )
    observer.observe(sentinelRef)
    onCleanup(() => observer.disconnect())
  })

  return (
    <>
      <SectionHeader
        section={props.section}
        defaultLarge={defaultLarge()}
        expanded={expanded()}
        onToggleExpand={() => setExpanded((prev) => !prev)}
      />
      <div
        ref={(el) => {
          scrollRef = el
          observeContainer(el)
        }}
        class="grid gap-x-8 gap-y-6 p-4 transition-[max-height] duration-300 ease-in-out"
        classList={{
          "grid-cols-[repeat(auto-fill,minmax(9.5rem,1fr))]":
            cardSize() === "small",
          "grid-cols-[repeat(auto-fill,minmax(14rem,1fr))]":
            cardSize() === "large",
          "overflow-hidden": !expanded(),
          "overflow-y-auto": expanded(),
        }}
        style={{ "max-height": `${maxHeight()}px` }}
      >
        <Show
          when={shouldLoad()}
          fallback={<SectionLoading size={cardSize()} />}
        >
          <Suspense fallback={<SectionLoading size={cardSize()} />}>
            <Switch>
              <Match when={query.status === "error"}>
                <SectionMessage
                  line1="Looks like something went wrong!"
                  line2={(query.error as Error)?.message}
                />
              </Match>
              <Match when={media() !== undefined}>
                <Show
                  when={(media()?.length ?? 0) > 0}
                  fallback={
                    <SectionMessage line1="Looks like there's nothing here." />
                  }
                >
                  <Index each={media()}>
                    {(m) => (
                      <Show when={m()}>
                        {(item) => (
                          <SmallAnimeCard
                            media={item()}
                            size={cardSize()}
                            titleLanguage={props.titleLanguage}
                            onCardClick={props.onCardClick}
                          />
                        )}
                      </Show>
                    )}
                  </Index>
                  <Show when={query.isFetchingNextPage}>
                    <Index each={Array.from({ length: 10 })}>
                      {() => <SkeletonAnimeCard size={cardSize()} />}
                    </Index>
                  </Show>
                </Show>
              </Match>
              <Match when={true}>
                <SectionLoading size={cardSize()} />
              </Match>
            </Switch>
          </Suspense>
        </Show>
        <div ref={sentinelRef} class="h-1 w-full col-span-full" />
      </div>
    </>
  )
}

function SectionMessage(props: { line1: string; line2?: string }) {
  return (
    <div class="col-span-full flex h-80 w-full items-center justify-center p-5">
      <div>
        <div class="mb-1 text-center text-4xl font-bold">Ooops!</div>
        <div class="text-muted-foreground text-center text-lg">
          {props.line1}
        </div>
        <Show when={props.line2}>
          <div class="text-muted-foreground text-center text-lg">
            {props.line2}
          </div>
        </Show>
      </div>
    </div>
  )
}

function SectionLoading(props: { size: "small" | "large" }) {
  return (
    <Index each={Array.from({ length: 10 })}>
      {() => <SkeletonAnimeCard size={props.size} />}
    </Index>
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
