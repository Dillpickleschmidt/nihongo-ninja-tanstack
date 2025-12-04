// src/components/ContentBox.tsx
import { Show, createSignal, onMount, onCleanup } from "solid-js"
import { Button } from "./ui/button"
import { useLocation, useNavigate, useMatches } from "@tanstack/solid-router"
import { useQueryClient, useMutation } from "@tanstack/solid-query"
import { cva } from "class-variance-authority"
import { cn } from "@/utils"
import { User } from "@supabase/supabase-js"
import { markModuleCompletedMutation } from "@/query/query-mutations"
import { queryKeys } from "@/query/utils/query-keys"
import { static_modules } from "@/data/static_modules"
import { external_resources } from "@/data/external_resources"

type ContentBoxConfig = {
  nextButtonLink?: string
  nextButtonText?: string
  size?: "default" | "lg"
  class?: string
}

function hasContentBox(data: any): data is { contentBox: ContentBoxConfig } {
  return data && typeof data === "object" && "contentBox" in data
}

type ContentBoxProps = {
  children: any
  user?: User | null
}

export const contentBoxVariants = cva("w-full relative", {
  variants: {
    size: {
      default: "bg-card/40 max-w-4xl",
      lg: "max-w-6xl md:max-w-7xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

export default function ContentBox(props: ContentBoxProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const matches = useMatches()
  const queryClient = useQueryClient()
  const [showCompleteButton, setShowCompleteButton] = createSignal(false)

  const addCompletionMutation = useMutation(() =>
    markModuleCompletedMutation(queryClient),
  )

  const config = (): ContentBoxConfig => {
    const currentPath = location().pathname
    const match = matches().find((match) => match.pathname === currentPath)
    const loaderData = match?.loaderData

    if (hasContentBox(loaderData)) {
      return loaderData.contentBox
    }

    return {}
  }

  const isVisible = () =>
    location().pathname.startsWith("/lessons/") ||
    location().pathname.startsWith("/external-resources/") ||
    location().pathname === "/guides"

  const handleCompleteClick = (e: Event) => {
    e.preventDefault()

    const currentPath = location().pathname
    const moduleId = currentPath.split("/").pop()

    // Mark as complete with estimated duration
    if (moduleId) {
      // Look up module in static_modules or external_resources
      const module = static_modules[moduleId] || external_resources[moduleId]

      if (!module) {
        console.error(`Module not found: ${moduleId}`)
        return
      }

      // Get estimated duration (default to 10 minutes = 600 seconds)
      const estimatedMinutes = module.daily_prog_amount ?? 10
      const durationSeconds = estimatedMinutes * 60

      addCompletionMutation.mutate({
        userId: props.user?.id || null,
        moduleId,
        moduleType: module.source_type,
        durationSeconds,
      })
    }

    // Get active textbook/deck from cache
    const userSettings = queryClient.getQueryData(
      queryKeys.userSettings(props.user?.id || null),
    )
    const activeTextbook = userSettings!["active-learning-path"]
    const activeChapter = userSettings!["active-chapter"]

    navigate({
      to: "/$learningPathId/$chapterSlug",
      params: { learningPathId: activeTextbook, chapterSlug: activeChapter },
    })
  }

  const handleNextClick = (e: Event) => {
    const nextLink = config().nextButtonLink
    if (nextLink) {
      e.preventDefault()
      navigate({ to: nextLink })
    }
  }

  // scroll detection
  onMount(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const threshold = 100 // pixels from bottom

      if (documentHeight - scrollPosition <= threshold) {
        setShowCompleteButton(true)
      } else {
        setShowCompleteButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll)
    })
  })

  return (
    <>
      <Show when={isVisible()}>
        <div class="flex w-full justify-center pb-16">
          <div
            class={cn(
              contentBoxVariants({ size: config().size }),
              config().class,
            )}
          >
            {props.children}
          </div>
        </div>
      </Show>

      {/* Mark as Complete button that appears on scroll */}
      <Show when={isVisible() && showCompleteButton()}>
        <div class="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 transform">
          <Button
            as="a"
            href="/learn"
            onClick={handleCompleteClick}
            variant="default"
            size="lg"
            class="animate-in fade-in slide-in-from-bottom-4 duration-300"
          >
            {props.user ? "Mark as Complete" : "Return"}
          </Button>
        </div>
      </Show>

      {/* Next button */}
      <Show when={config().nextButtonLink}>
        <div class="absolute">
          <div class="fixed right-6 bottom-6">
            <Button
              as="a"
              href={config().nextButtonLink!}
              onClick={handleNextClick}
              variant="ghost"
              size="sm"
              class="text-muted-foreground"
            >
              {config().nextButtonText ?? "Complete & Next ->"}
            </Button>
          </div>
        </div>
      </Show>
    </>
  )
}
