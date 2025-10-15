// src/components/ContentBox.tsx
import { Show, createSignal, onMount, onCleanup } from "solid-js"
import { Button } from "./ui/button"
import { useLocation, useNavigate, useMatches } from "@tanstack/solid-router"
import { useQueryClient, useMutation } from "@tanstack/solid-query"
import { cva } from "class-variance-authority"
import { cn } from "@/utils"
import { User } from "@supabase/supabase-js"
import {
  createSession,
  markModuleCompleted,
} from "@/features/supabase/db/module-progress"
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

export const contentBoxVariants = cva(
  "w-full min-h-screen relative bg-background/60",
  {
    variants: {
      size: {
        default: "max-w-4xl ",
        lg: "",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
)

export default function ContentBox(props: ContentBoxProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const matches = useMatches()
  const queryClient = useQueryClient()
  const [showCompleteButton, setShowCompleteButton] = createSignal(false)

  const addCompletionMutation = useMutation(() => ({
    mutationFn: async ({
      userId,
      moduleId,
      durationSeconds,
    }: {
      userId: string
      moduleId: string
      durationSeconds: number
    }) => {
      // Create session record (time spent)
      await createSession(userId, moduleId, { durationSeconds })
      // Mark module as completed
      return markModuleCompleted(userId, moduleId)
    },
    onSuccess: (data, variables) => {
      queryClient.setQueryData(
        ["module-progress", variables.userId, "completed"],
        (old: ModuleProgress[] | undefined) => {
          const modulePath = data.module_path
          // If module already in list, return as-is
          if (old?.some((c) => c.module_path === modulePath)) return old
          // prepend - most recent first, matching DB sort order
          return [data, ...(old || [])]
        },
      )
    },
  }))

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
    location().pathname.startsWith("/external-resources/")

  const handleCompleteClick = (e: Event) => {
    e.preventDefault()

    const currentPath = location().pathname
    const moduleId = currentPath.split("/").pop()

    // Mark as complete with estimated duration
    if (props.user && moduleId) {
      // Look up module in static_modules or external_resources
      const module = static_modules[moduleId] || external_resources[moduleId]

      // Get estimated duration (default to 10 minutes = 600 seconds)
      const estimatedMinutes = module?.daily_prog_amount ?? 10
      const durationSeconds = estimatedMinutes * 60

      addCompletionMutation.mutate({
        userId: props.user.id,
        moduleId,
        durationSeconds,
      })
    }

    // Get active textbook/deck from cache
    const userSettings = queryClient.getQueryData([
      "user-settings",
      props.user?.id || null,
    ])
    const activeTextbook = userSettings!["active-textbook"]
    const activeDeck = userSettings!["active-deck"]

    navigate({
      to: "/learn/$textbookId/$chapterSlug",
      params: { textbookId: activeTextbook, chapterSlug: activeDeck },
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
        <div class="flex w-full justify-center">
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
        <div class="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 transform">
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
