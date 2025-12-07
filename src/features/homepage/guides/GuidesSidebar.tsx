import { For, Show } from "solid-js"
import { Link, useLocation } from "@tanstack/solid-router"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"
import { getInitialAnimationStyles } from "@/utils/animations"

interface NavigationItem {
  title: string
  href: string
}

interface NavigationSection {
  label?: string
  items: NavigationItem[]
}

const guidesNavigation: NavigationSection[] = [
  {
    label: "Nihongo Ninja",
    items: [
      {
        title: "Home",
        href: "/guides",
      },
    ],
  },
  {
    label: "Guides",
    items: [
      {
        title: "Japanese Guide",
        href: "/guides/japanese-guide",
      },
      {
        title: "Hiragana + Katakana",
        href: "/guides/hiragana",
      },
      {
        title: "Typing in Japanese",
        href: "/guides/typing",
      },
      {
        title: "Finding Shows & Movies",
        href: "/guides/finding-shows",
      },
      {
        title: "Writing Practice",
        href: "/guides/writing-practice",
      },
      {
        title: "Support the Creators",
        href: "/guides/creator-support",
      },
    ],
  },
  {
    label: "Browser Extension",
    items: [
      {
        title: "Nihongo Extension",
        href: "/guides/nihongo-extension",
      },
    ],
  },
  {
    label: "FAQ",
    items: [
      {
        title: "Spaced Repetition System",
        href: "/guides/srs",
      },
      {
        title: "Using Anki or Other SRS?",
        href: "/guides/comparison",
      },
    ],
  },
]

interface GuidesSidebarProps {
  ref?: (el: HTMLDivElement) => void
}

export function GuidesSidebar(props: GuidesSidebarProps) {
  const location = useLocation()

  const isActive = (href: string) => {
    const pathname = location().pathname === "/" ? "/guides" : location().pathname
    return pathname === href || pathname.startsWith(href + "/")
  }

  return (
    <div
      ref={props.ref}
      class="fixed top-17 left-0 h-[calc(100vh-68px)] w-72"
      style={getInitialAnimationStyles("left")}
    >
      <div class="flex h-full flex-col px-6 pt-8">
        <div class="flex-1 space-y-1">
          <For each={guidesNavigation}>
            {(section) => (
              <div class="flex flex-col space-y-1 py-3">
                <Show when={section.label}>
                  <div class="text-muted-foreground px-3 py-1 text-[0.68rem] font-semibold tracking-wide uppercase">
                    {section.label}
                  </div>
                </Show>
                <For each={section.items}>
                  {(item) => (
                    <Link to={item.href}>
                      <Button
                        variant="ghost"
                        class={cn("hover:bg-card-foreground/50 justify-start px-3 w-full")}
                      >
                        <span class={cn(
                          "text-[0.85rem] font-medium",
                          isActive(item.href) && "text-indigo-400",
                        )}>
                          {item.title}
                        </span>
                      </Button>
                    </Link>
                  )}
                </For>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  )
}
