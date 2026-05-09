import type { Accessor, Setter } from "solid-js"
import { Rows3, List } from "lucide-solid"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ViewToggleProps {
  selectedView: Accessor<string>
  setSelectedView: Setter<string>
  class?: string
}

export function ViewToggle(props: ViewToggleProps) {
  const label = () =>
    props.selectedView() === "compact" ? "By Category" : "Chronological"

  return (
    <Tabs
      value={props.selectedView()}
      onChange={props.setSelectedView}
      class={props.class}
    >
      <div class="flex items-center gap-2 font-excalifont">
        <span class="text-sm text-white/40">{label()}</span>
        <TabsList class="flex h-8 justify-end bg-transparent">
          <TabsTrigger
            value="grid"
            class="data-selected:dark:bg-card-foreground/70 h-6 px-2"
          >
            <Rows3 class="h-4 w-4" />
          </TabsTrigger>
          <TabsTrigger
            value="compact"
            class="data-selected:dark:bg-card-foreground/70 h-6 px-2"
          >
            <List class="h-4 w-4" />
          </TabsTrigger>
        </TabsList>
      </div>
    </Tabs>
  )
}
