import { Index } from 'solid-js'
import { ConvexAnimeSection } from '~/features/discover/components/ui/cards/query-card'
import type { SectionConfig } from '~/features/discover/utils/section-configs'

/**
 * Generic anime sections (Popular, Trending, etc.)
 */
export function GenericSections(props: { sections: SectionConfig[] }) {
  return (
    <Index each={props.sections}>
      {(section) => (
        <>
          <div class="text-muted-foreground flex cursor-pointer items-end px-4 pt-5">
            <div class="text-lg font-semibold leading-none">
              {section().title}
            </div>
            <div class="ml-auto text-xs">View More</div>
          </div>
          <div class="flex overflow-x-auto pb-4">
            <ConvexAnimeSection config={section()} />
          </div>
        </>
      )}
    </Index>
  )
}
