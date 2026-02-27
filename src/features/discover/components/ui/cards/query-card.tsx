import { Show, Index, createMemo } from "solid-js"
import { useDiscoverSection } from "~/features/discover/hooks/useDiscoverSection"
import { SmallAnimeCard } from "./small-card"
import { SkeletonAnimeCard } from "./skeleton-card"
import type { SectionConfig } from "../../../utils/section-configs"

interface AnimeSectionProps {
  config: SectionConfig
}

export function AnimeSection(props: AnimeSectionProps) {
  const query = useDiscoverSection(() => props.config)
  const mediaData = createMemo(() => query.data?.media)

  return (
    <Show
      when={mediaData() !== undefined}
      fallback={
        <Index each={Array.from({ length: 10 })}>
          {() => <SkeletonAnimeCard />}
        </Index>
      }
    >
      <Show
        when={!query.error}
        fallback={
          <div class="flex h-80 w-full items-center justify-center p-5">
            <div>
              <div class="mb-1 text-center text-4xl font-bold">Ooops!</div>
              <div class="text-muted-foreground text-center text-lg">
                Looks like something went wrong!
              </div>
              <div class="text-muted-foreground text-center text-lg">
                {(query.error as Error)?.message}
              </div>
            </div>
          </div>
        }
      >
        <Show
          when={mediaData() && mediaData()!.length > 0}
          fallback={
            <div class="flex h-80 w-full items-center justify-center p-5">
              <div>
                <div class="mb-1 text-center text-4xl font-bold">Ooops!</div>
                <div class="text-muted-foreground text-center text-lg">
                  Looks like there's nothing here.
                </div>
              </div>
            </div>
          }
        >
          <Index each={mediaData()}>
            {(media) => (
              <Show when={media()}>
                {(m) => <SmallAnimeCard media={m()} />}
              </Show>
            )}
          </Index>
        </Show>
      </Show>
    </Show>
  )
}
