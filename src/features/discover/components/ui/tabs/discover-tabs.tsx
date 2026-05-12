import { Show, type JSX } from "solid-js"
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
  value: string
  onChange: (value: string) => void
  animeContent: JSX.Element
  youtubeContent: JSX.Element
  dramasContent: JSX.Element
}

const MEDIA_TABS = new Set(["anime", "dramas"])

export function DiscoverTabs(props: DiscoverTabsProps) {
  const showMediaControls = () => MEDIA_TABS.has(props.value)

  return (
    <Tabs value={props.value} onChange={props.onChange} class="w-full">
      {/* Fixed controls — each positioned independently so content between them is clickable */}
      <div class="pointer-events-none fixed top-2 right-0 left-0 z-30 flex items-start justify-between px-3">
        <div class="pointer-events-auto">
          <Show when={showMediaControls()}>
            <JlptBadge />
          </Show>
        </div>

        <div class="pointer-events-auto">
          <TabsList class="relative flex w-fit gap-0.5 rounded-lg border border-border/70 bg-background/70 p-0.5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-black/30 dark:shadow-none">
            <TabsTrigger
              value="youtube"
              class="relative z-10 rounded-md px-4 py-1.5 text-[0.7rem] font-medium tracking-wide text-muted-foreground transition-colors duration-200 data-selected:text-foreground dark:text-white/30 dark:data-selected:text-white/90"
            >
              YouTube
            </TabsTrigger>
            <TabsTrigger
              value="anime"
              class="relative z-10 rounded-md px-4 py-1.5 text-[0.7rem] font-medium tracking-wide text-muted-foreground transition-colors duration-200 data-selected:text-foreground dark:text-white/30 dark:data-selected:text-white/90"
            >
              Anime
            </TabsTrigger>
            <TabsTrigger
              value="dramas"
              class="relative z-10 rounded-md px-4 py-1.5 text-[0.7rem] font-medium tracking-wide text-muted-foreground transition-colors duration-200 data-selected:text-foreground dark:text-white/30 dark:data-selected:text-white/90"
            >
              Dramas
            </TabsTrigger>
            <TabsIndicator class="rounded-md bg-muted transition-all duration-250 dark:bg-white/10" />
          </TabsList>
        </div>

        <div class="pointer-events-auto">
          <Show when={showMediaControls()}>
            <GlobalWeightsPopover />
          </Show>
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
