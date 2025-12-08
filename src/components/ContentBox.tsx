import { Show, createSignal, onMount, onCleanup } from "solid-js"
import { Button } from "./ui/button"
import { useLocation, useNavigate, useMatches } from "@tanstack/solid-router"
import { cva } from "class-variance-authority"
import { cn } from "@/utils"
import { getUser } from "@/lib/auth"

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
}

export const contentBoxVariants = cva("w-full mb-16 md:mb-0 pb-16 md:mt-17 relative", {
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
  const user = getUser()
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
    location().pathname.startsWith("/external-resources/") ||
    location().pathname === "/guides"

  const handleCompleteClick = (e: Event) => {
    e.preventDefault()
    // TODO: Add actual module completion logic
    navigate({ to: "/dashboard" })
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
        <div class="fixed bottom-24 md:bottom-8 left-1/2 z-50 -translate-x-1/2 transform">
          <Button
            as="a"
            href="/dashboard"
            onClick={handleCompleteClick}
            variant="default"
            size="lg"
            class="animate-in fade-in slide-in-from-bottom-4 duration-300"
          >
            {user() ? "Mark as Complete" : "Return"}
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
