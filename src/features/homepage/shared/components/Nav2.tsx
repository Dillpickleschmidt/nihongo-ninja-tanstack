// Nav.tsx
import { createSignal, Show } from "solid-js"
import { Link, useNavigate } from "@tanstack/solid-router"
import { useQueryClient } from "@tanstack/solid-query"
import { Button } from "@/components/ui/button"
import { useLocation, useRouteContext } from "@tanstack/solid-router"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import {
  userSettingsQueryOptions,
  allLearningPathsQueryOptions,
} from "@/query/query-options"
import { LearningPathChapterSelector } from "@/features/homepage/shared/components/LearningPathChapterSelector"
import { Route as RootRoute } from "@/routes/__root"

export default function Nav() {
  const location = useLocation()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const context = useRouteContext({ from: RootRoute.id })
  const [isPopoverOpen, setIsPopoverOpen] = createSignal(false)

  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(context().user?.id || null),
  )

  const pathsQuery = useCustomQuery(() =>
    allLearningPathsQueryOptions(context().user?.id || null),
  )

  const activeLearningPathId = () =>
    settingsQuery.data?.["active-learning-path"] as string | undefined
  const activeChapterSlug = () => settingsQuery.data?.["active-chapter"]

  const activeChapter = () => {
    const learningPathId = activeLearningPathId()
    const chapterSlug = activeChapterSlug()
    if (!learningPathId || !chapterSlug) return null

    const path = pathsQuery.data?.find((p) => p.id === learningPathId)
    return path?.chapters?.find((ch) => ch.slug === chapterSlug) ?? null
  }

  const activeTextbookShortName = () => {
    const learningPathId = activeLearningPathId()
    if (!learningPathId) return null

    return (
      pathsQuery.data?.find((p) => p.id === learningPathId)?.short_name ?? null
    )
  }

  const handleDeckSelect = (learningPathId: string, chapterSlug: string) => {
    if (learningPathId === "getting_started") {
      // For getting_started, navigate to homepage "/"
      // unless we're already there
      if (location().pathname !== "/") {
        navigate({ to: "/" })
      }
      return
    }
    // Navigate to appropriate route for other learning paths
    navigate({
      to: "/$learningPathId/$chapterSlug",
      params: { learningPathId: learningPathId, chapterSlug: chapterSlug },
    })
  }

  const active = (path: string) =>
    location().pathname === path
      ? "text-primary dark:text-orange-200"
      : "text-foreground/80 hover:text-foreground dark:text-orange-100/70 hover:dark:text-orange-100"

  return (
    <nav class="sticky top-0 z-40 flex h-16 w-full items-center justify-between overflow-hidden px-6 py-2">
      <Show
        when={
          !pathsQuery.isPending &&
          !pathsQuery.isError &&
          !settingsQuery.isPending &&
          !settingsQuery.isError &&
          activeLearningPathId() &&
          activeChapter() &&
          activeLearningPathId() !== "getting_started"
        }
        fallback={<div />}
      >
        <div class="block md:hidden" />
        <LearningPathChapterSelector
          activeLearningPathId={activeLearningPathId()!}
          activeChapter={activeChapter()!}
          queryClient={queryClient}
          userId={context().user?.id || null}
          onChapterSelect={handleDeckSelect}
          isOpen={isPopoverOpen()}
          onOpenChange={setIsPopoverOpen}
        >
          <button class="group text-foreground/80 hover:text-foreground flex items-center gap-2">
            <span class="text-sm font-semibold">
              {activeTextbookShortName()}
            </span>
            <span class="text-sm font-medium">{activeChapter()?.title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-3 opacity-60 transition-opacity group-hover:opacity-100"
            >
              <path d="M8 9l4 -4l4 4" />
              <path d="M16 15l-4 4l-4 -4" />
            </svg>
          </button>
        </LearningPathChapterSelector>
      </Show>
      <Show when={!context().user}>
        <Button
          as={Link}
          to="/auth"
          class="h-8.5 border-2 border-black bg-indigo-400 opacity-70 transition-opacity duration-200 hover:bg-indigo-400 hover:opacity-100"
        >
          Login
        </Button>
      </Show>
    </nav>
  )
}
