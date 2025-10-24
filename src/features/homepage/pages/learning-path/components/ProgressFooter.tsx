import { Show } from "solid-js"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-solid"
import { getChapterStyles } from "@/data/chapter_colors"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import type { UseQueryResult } from "@tanstack/solid-query"
import SeeYourDashboardSvg from "@/features/homepage/shared/assets/see-your-dashboard.svg?component-solid"
import TextbookSelectionDialog from "./TextbookSelectionDialog"

interface ProgressFooterProps {
  settingsQuery: UseQueryResult<UserSettings, Error>
  tiles: Array<{
    title: string
    description?: string
    href: string
    moduleType: string
    iconClasses: string
  }>
  isModuleCompleted: (href: string) => boolean
  userId: string | null
  onNavigationStart?: () => void
}

export function ProgressFooter(props: ProgressFooterProps) {
  const activeTextbook = () => props.settingsQuery.data!["active-textbook"]
  const activeDeck = () => props.settingsQuery.data!["active-deck"]

  const completedCount = () =>
    props.tiles.filter((tile) => props.isModuleCompleted(tile.href)).length
  const totalCount = () => props.tiles.length

  return (
    <div class="flex w-full flex-col items-center gap-6 pt-6">
      <p class="text-muted-foreground pb-8 text-xl font-semibold">
        <span class={getChapterStyles(activeDeck()).textColor}>
          {completedCount()}/{totalCount()}
        </span>{" "}
        Complete
      </p>
      <Show
        fallback={
          <SeeYourDashboardSvg class="text-muted-foreground absolute bottom-16 left-[23%] h-auto w-64" />
        }
        when={activeTextbook() === "getting_started"}
      >
        <div class="pb-20">
          <span>Complete the above and then see your new dashboard, or</span>
          <TextbookSelectionDialog onNavigationStart={props.onNavigationStart}>
            <Button
              class="text-muted-foreground ml-1 h-auto px-2.5 py-1 text-base underline underline-offset-3"
              variant="ghost"
            >
              Skip
              <ArrowRight size={16} class="-mr-1" />
            </Button>
          </TextbookSelectionDialog>
        </div>
        <SeeYourDashboardSvg class="text-muted-foreground absolute bottom-16 left-[23%] h-auto w-64" />
      </Show>
    </div>
  )
}
