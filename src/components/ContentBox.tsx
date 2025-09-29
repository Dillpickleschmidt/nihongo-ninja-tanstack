// src/components/ContentBox.tsx
import { Show, createSignal, onMount, onCleanup } from "solid-js"
import { Button } from "./ui/button"
import {
  useLocation,
  useNavigate,
  useMatches,
  useRouter,
} from "@tanstack/solid-router"
import { cva } from "class-variance-authority"
import { cn } from "@/utils/util"
import { User } from "@supabase/supabase-js"
import { addModuleCompletion } from "@/features/supabase/db/module-completions"

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
  const router = useRouter()
  const matches = useMatches()
  const [showCompleteButton, setShowCompleteButton] = createSignal(false)

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

  const handleCompleteClick = async (e: Event) => {
    e.preventDefault()

    // Extract module ID from current path (everything after the last "/")
    const currentPath = location().pathname
    const moduleId = currentPath.split("/").pop()

    // If user is logged in and we have a moduleId, mark as complete
    if (props.user && moduleId) {
      try {
        await addModuleCompletion(props.user.id, moduleId)
      } catch (error) {
        console.error("Failed to mark module as complete:", error)
      }
    }

    navigate({ to: "/learn", reloadDocument: true })
  }

  const handleNextClick = (e: Event) => {
    const nextLink = config().nextButtonLink
    if (nextLink) {
      e.preventDefault()
      navigate({ to: nextLink })
    }
  }

  // Handle scroll detection for complete button
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
    handleScroll() // Check initial position

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

      {/* Next button only */}
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
