import { createSignal } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import { useQueryClient } from "@tanstack/solid-query"
import { useLearnPageContext } from "../../context/LearnPageContext"
import { HeroDailyProgress } from "../content/HeroDailyProgress"
import { ProgressSummary } from "../content/ProgressSummary"
import {
  LearningPathWrapper,
  LearningPathHeader,
  LearningPathContent,
} from "../content/LearningPathSection"
import { LearningPathChapterSelector } from "./LearningPathChapterSelector"
import { getDeckBySlug } from "@/data/utils/core"
import type { TextbookIDEnum } from "@/data/types"

function CenterColumn() {
  const [isPopoverOpen, setIsPopoverOpen] = createSignal(false)
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const context = useLearnPageContext()

  const activeLearningPathId = () =>
    context.settingsQuery.data!["active-learning-path"] as string
  const activeChapterSlug = () => context.settingsQuery.data!["active-chapter"]
  const activeChapter = () =>
    getDeckBySlug(activeLearningPathId(), activeChapterSlug())

  const handleDeckSelect = (learningPathId: string, chapterSlug: string) => {
    const deck = getDeckBySlug(learningPathId, chapterSlug)
    if (deck) {
      navigate({
        to: "/learn/$textbookId/$chapterSlug",
        params: { textbookId: learningPathId, chapterSlug: chapterSlug },
      })
    }
  }

  const variant = () =>
    context.settingsQuery.data!["device-type"] === "mobile"
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
                <LearningPathChapterSelector
                  activeLearningPathId={activeLearningPathId()}
                  activeChapter={activeChapter()!}
                  queryClient={queryClient}
                  userId={context.userId}
                  onChapterSelect={handleDeckSelect}
                  isOpen={isPopoverOpen()}
                  onOpenChange={setIsPopoverOpen}
                >
                  <div class="group flex items-center gap-2 text-left">
                    <h3 class="text-foreground group-hover:text-foreground/80 text-xl font-semibold transition-colors">
                      {activeChapter()?.title}
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
                </LearningPathChapterSelector>
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
