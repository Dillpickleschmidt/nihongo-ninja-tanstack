import { Show, createSignal, For } from "solid-js"
import { Link, useNavigate } from "@tanstack/solid-router"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowRight } from "lucide-solid"
import { getChapterStyles } from "@/data/chapter_colors"
import { getMinifiedTextbookEntries } from "@/data/utils/core"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import type { UseQueryResult } from "@tanstack/solid-query"
import type { TextbookIDEnum } from "@/data/types"

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
  const [isDialogOpen, setIsDialogOpen] = createSignal(false)
  const navigate = useNavigate()
  const activeTextbook = () => props.settingsQuery.data!["active-textbook"]
  const activeDeck = () => props.settingsQuery.data!["active-deck"]

  const completedCount = () =>
    props.tiles.filter((tile) => props.isModuleCompleted(tile.href)).length
  const totalCount = () => props.tiles.length

  const textbookEntries = getMinifiedTextbookEntries()
  const otherTextbooks = () =>
    textbookEntries.filter(([id]) => id !== "getting_started")

  const handleTextbookSelect = (textbookId: TextbookIDEnum) => {
    // Get first chapter of selected textbook
    const textbook = textbookEntries.find(([id]) => id === textbookId)?.[1]
    const firstChapterSlug = textbook?.chapters[0]?.slug

    if (!firstChapterSlug) return
    setIsDialogOpen(false)
    props.onNavigationStart?.()

    // let the route loader handle settings update
    navigate({
      to: "/learn/$textbookId/$chapterSlug",
      params: { textbookId, chapterSlug: firstChapterSlug },
    })
  }

  return (
    <div class="flex w-full flex-col items-center gap-6 pt-6">
      <p class="text-muted-foreground text-xl font-semibold">
        <span class={getChapterStyles(activeDeck()).textColor}>
          {completedCount()}/{totalCount()}
        </span>{" "}
        Complete
      </p>
      <Show
        fallback={
          <Link
            to="/learn/$textbookId"
            params={{ textbookId: activeTextbook() }}
          >
            <Button class="font-poppins font-semibold" variant="secondary">
              See your dashboard
              <ArrowRight size={16} />
            </Button>
          </Link>
        }
        when={activeTextbook() === "getting_started"}
      >
        <div>
          <span>Complete the above to see your new dashboard, or</span>
          <Dialog open={isDialogOpen()} onOpenChange={setIsDialogOpen}>
            <DialogTrigger
              as={Button}
              class="text-muted-foreground ml-1 h-auto px-2.5 py-1 text-base underline underline-offset-3"
              variant="ghost"
            >
              Skip
              <ArrowRight size={16} class="-mr-1" />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Choose a textbook</DialogTitle>
              </DialogHeader>
              <div class="grid grid-cols-2 gap-4">
                <For each={otherTextbooks()}>
                  {([textbookId, textbook]) => (
                    <Button
                      variant="outline"
                      class="w-full"
                      onClick={() => handleTextbookSelect(textbookId)}
                    >
                      {textbook.short_name || textbook.name}
                    </Button>
                  )}
                </For>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </Show>
    </div>
  )
}
