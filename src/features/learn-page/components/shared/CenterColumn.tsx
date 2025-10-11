import { createSignal } from "solid-js"
import { useLearnPageContext } from "../../context/LearnPageContext"
import { HeroDailyProgress } from "../content/HeroDailyProgress"
import { ProgressSummary } from "../content/ProgressSummary"
import {
  LearningPathWrapper,
  LearningPathHeader,
  LearningPathContent,
} from "../content/LearningPathSection"
import { DeckSelectionPopover } from "./DeckSelectionPopover"
import { getDeckBySlug } from "@/data/utils/core"
import type { TextbookIDEnum } from "@/data/types"

function CenterColumn() {
  const [isPopoverOpen, setIsPopoverOpen] = createSignal(false)
  const context = useLearnPageContext()

  const activeTextbookId = () =>
    (context.settingsQuery.data?.["active-textbook"] ||
      "genki_1") as TextbookIDEnum
  const activeChapterSlug = () =>
    context.settingsQuery.data?.["active-deck"] || "chapter-0"
  const activeDeck = () =>
    getDeckBySlug(activeTextbookId(), activeChapterSlug())

  const variant = () =>
    context.settingsQuery.data?.["device-type"] === "mobile"
      ? "mobile"
      : "desktop"

  return (
    <>
      <LearningPathWrapper>
        <div class="flex gap-5">
          <div class="w-[47%]">
            <ProgressSummary />
            <div class="mt-5 flex items-center justify-between">
              <div class="pl-2">
                <DeckSelectionPopover
                  activeTextbookId={activeTextbookId()}
                  activeDeck={activeDeck()!}
                  isOpen={isPopoverOpen()}
                  onOpenChange={setIsPopoverOpen}
                >
                  <div class="group flex items-center gap-2 text-left">
                    <h3 class="text-foreground group-hover:text-foreground/80 text-xl font-semibold transition-colors">
                      {activeDeck()?.title}
                    </h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="size-4 opacity-60 transition-opacity group-hover:opacity-80"
                    >
                      <path d="M8 9l4 -4l4 4" />
                      <path d="M16 15l-4 4l-4 -4" />
                    </svg>
                  </div>
                </DeckSelectionPopover>
              </div>
              <LearningPathHeader variant={variant()} />
            </div>
          </div>
          <div class="w-[53%]">
            <HeroDailyProgress />
          </div>
        </div>
        <LearningPathContent variant={variant()} />
      </LearningPathWrapper>
    </>
  )
}

export default CenterColumn
