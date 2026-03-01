import { Show, Index, createMemo } from "solid-js"
import { useDiscoverSection } from "~/features/discover/hooks/useDiscoverSection"
import { SmallAnimeCard } from "./small-card"
import { SkeletonAnimeCard } from "./skeleton-card"
import type { SectionConfig } from "../../../utils/section-configs"
import type { DiscoverMedia, Media } from "../../../api/anilist/types"

interface AnimeSectionProps {
  config: SectionConfig
  cardSize?: "small" | "large"
  onCardClick?: (media: DiscoverMedia | Media) => void
}

export function AnimeSection(props: AnimeSectionProps) {
  const query = useDiscoverSection(() => props.config)
  const mediaData = createMemo(() => query.data?.media)
  const hasMedia = createMemo(() => (mediaData()?.length ?? 0) > 0)

  return (
    <Show
      when={mediaData() !== undefined}
      fallback={
        <Index each={Array.from({ length: 10 })}>
          {() => <SkeletonAnimeCard size={props.cardSize} />}
        </Index>
      }
    >
      {query.error ? (
        <SectionMessage
          line1="Looks like something went wrong!"
          line2={(query.error as Error)?.message}
        />
      ) : hasMedia() ? (
        <Index each={mediaData()}>
          {(media) => (
            <Show when={media()}>
              {(m) => (
                <SmallAnimeCard
                  media={m()}
                  size={props.cardSize}
                  onCardClick={props.onCardClick}
                />
              )}
            </Show>
          )}
        </Index>
      ) : (
        <SectionMessage line1="Looks like there's nothing here." />
      )}
    </Show>
  )
}

function SectionMessage(props: { line1: string; line2?: string }) {
  return (
    <div class="flex h-80 w-full items-center justify-center p-5">
      <div>
        <div class="mb-1 text-center text-4xl font-bold">Ooops!</div>
        <div class="text-muted-foreground text-center text-lg">{props.line1}</div>
        <Show when={props.line2}>
          <div class="text-muted-foreground text-center text-lg">
            {props.line2}
          </div>
        </Show>
      </div>
    </div>
  )
}
