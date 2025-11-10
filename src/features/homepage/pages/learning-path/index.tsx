import { Show } from "solid-js"
import { LearningPathProvider, useLearningPath } from "./LearningPathContext"
import type { User } from "@supabase/supabase-js"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import type { UseQueryResult } from "@tanstack/solid-query"
import { ChapterHeader } from "./components/ChapterHeader"
import { LearningPathSection } from "./components/LearningPathSection"
import { ChapterFooter } from "./components/ChapterFooter"
import { QuickAccessCards } from "./components/QuickAccessCards"
import { ArrowBigLeft, ChevronDown } from "lucide-solid"
import { Button } from "@/components/ui/button"
import ViewingIsEnough from "@/features/homepage/shared/assets/viewing-is-enough.svg"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { Sidebar } from "../../shared/components/Sidebar"

interface LearningPathPageProps {
  settingsQuery: UseQueryResult<UserSettings, Error>
  onChapterChange: (chapterSlug: string) => void
  onBack?: () => void
  user?: User | null
}

export function LearningPathPage(props: LearningPathPageProps) {
  return (
    <LearningPathProvider
      settingsQuery={props.settingsQuery}
      onChapterChange={props.onChapterChange}
      onBack={props.onBack}
      userId={props.user?.id || null}
    >
      <LearningPathPageContent />
    </LearningPathProvider>
  )
}

function LearningPathPageContent() {
  const context = useLearningPath()

  const activeLearningPath = () =>
    context.settingsQuery.data!["active-learning-path"]

  return (
    <div class="flex">
      <div class="sticky top-0 z-50 -mt-16 self-start md:z-0 2xl:fixed 2xl:mt-0">
        <Sidebar user={context.userId} />
      </div>
      <div class="2xl:pl-12" />
      <div class="relative mx-auto w-full max-w-7xl px-4 pt-2 pb-16 md:pt-8">
        <Show when={activeLearningPath() === "getting_started"}>
          <div class="flex h-16 items-center pl-4">
            <Button
              onClick={context.onBack}
              variant="ghost"
              class="h-auto rounded-full border-2 border-white/30 bg-transparent p-1.25 opacity-60 hover:bg-neutral-400/10 [&_svg]:size-auto"
            >
              <ArrowBigLeft class="h-12 w-12 text-white" />
            </Button>
          </div>
        </Show>

        <Show when={activeLearningPath() !== "getting_started"}>
          <div class="py-4">
            <QuickAccessCards />
          </div>
        </Show>

        <ChapterHeader />

        <Show when={activeLearningPath() === "getting_started"}>
          <SSRMediaQuery showFrom="md">
            <ViewingIsEnough class="pointer-events-none absolute right-2 -mt-9 h-auto w-68 text-neutral-400 md:right-4" />
          </SSRMediaQuery>
        </Show>

        <LearningPathSection
          lessonRefs={context.handleLessonRef}
          blinkingLessonIndex={context.blinkingLessonIndex()}
        />

        <ChapterFooter />
        <Show when={context.shouldShowButton()}>
          <Button
            onClick={context.handleScrollToNext}
            class="bg-background/20 fixed bottom-20 left-1/2 z-40 h-11 w-11 -translate-x-1/2 rounded-full p-0 backdrop-blur-sm"
            variant="outline"
          >
            <ChevronDown class="mt-0.5 h-5! w-5!" />
          </Button>
        </Show>
      </div>
    </div>
  )
}
