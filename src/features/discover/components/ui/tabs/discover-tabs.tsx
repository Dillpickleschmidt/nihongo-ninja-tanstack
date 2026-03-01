import type { JSX } from "solid-js"
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsIndicator,
} from "~/components/ui/tabs"
import { JlptBadge } from "~/features/discover/components/ui/homepage/jlpt-badge"
import { GlobalWeightsPopover } from "~/features/discover/components/ui/settings/global-weights-popover"

interface DiscoverTabsProps {
  animeContent: JSX.Element
  youtubeContent: JSX.Element
  dramasContent: JSX.Element
}

export function DiscoverTabs(props: DiscoverTabsProps) {
  return (
    <Tabs defaultValue="anime" class="w-full">
      {/* Fixed controls — each positioned independently so content between them is clickable */}
      <div class="pointer-events-none fixed top-2 right-0 left-0 z-30 flex items-start justify-between px-3">
        <div class="pointer-events-auto">
          <JlptBadge />
        </div>

        <div class="pointer-events-auto">
          <TabsList class="relative flex w-fit gap-0.5 rounded-lg border border-white/10 bg-black/30 p-0.5 backdrop-blur-sm">
            <TabsTrigger
              value="youtube"
              class="relative z-10 rounded-md px-4 py-1.5 text-[0.7rem] font-medium tracking-wide text-white/30 transition-colors duration-200 data-selected:text-white/90"
            >
              YouTube
            </TabsTrigger>
            <TabsTrigger
              value="anime"
              class="relative z-10 rounded-md px-4 py-1.5 text-[0.7rem] font-medium tracking-wide text-white/30 transition-colors duration-200 data-selected:text-white/90"
            >
              Anime
            </TabsTrigger>
            <TabsTrigger
              value="dramas"
              class="relative z-10 rounded-md px-4 py-1.5 text-[0.7rem] font-medium tracking-wide text-white/30 transition-colors duration-200 data-selected:text-white/90"
            >
              Dramas
            </TabsTrigger>
            <TabsIndicator class="rounded-md bg-white/10 transition-all duration-250" />
          </TabsList>
        </div>

        <div class="pointer-events-auto">
          <GlobalWeightsPopover />
        </div>
      </div>

      <TabsContent value="youtube" class="mt-0">
        {props.youtubeContent}
      </TabsContent>
      <TabsContent value="anime" class="mt-0">
        {props.animeContent}
      </TabsContent>
      <TabsContent value="dramas" class="mt-0">
        {props.dramasContent}
      </TabsContent>
    </Tabs>
  )
}
