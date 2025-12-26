import { createEffect, createSignal, For, Show, on, onCleanup } from "solid-js"
import { cn } from "@/utils"

export interface TOCItem {
  id: string
  title: string
}

interface TableOfContentsProps {
  items: TOCItem[]
  class?: string
  screenTopOffset?: number
}

export function TableOfContents(props: TableOfContentsProps) {
  const [activeId, setActiveId] = createSignal<string | null>(null)

  // Track which section is closest to the screen top offset
  createEffect(
    on(
      () => props.items,
      (items) => {
        if (items.length === 0) return

        const elements = items
          .map((item) => ({
            id: item.id,
            el: document.getElementById(item.id),
          }))
          .filter(
            (entry): entry is { id: string; el: HTMLElement } =>
              entry.el !== null,
          )

        if (elements.length === 0) return

        const topOffsetPercent = props.screenTopOffset ?? 50

        const updateActiveSection = () => {
          const offsetY = window.innerHeight * (topOffsetPercent / 100)

          // Find the section whose top is closest to but above the offset line
          let activeSection: string | null = null
          let smallestDistance = Infinity

          for (const { id, el } of elements) {
            const rect = el.getBoundingClientRect()
            // Section top must be at or above the offset line
            if (rect.top <= offsetY) {
              const distance = offsetY - rect.top
              if (distance < smallestDistance) {
                smallestDistance = distance
                activeSection = id
              }
            }
          }

          setActiveId(activeSection)
        }

        // Initial check
        updateActiveSection()

        // Listen for scroll
        window.addEventListener("scroll", updateActiveSection, {
          passive: true,
        })

        onCleanup(() => {
          window.removeEventListener("scroll", updateActiveSection)
        })
      },
    ),
  )

  const handleLinkClick = (itemId: string, e: MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById(itemId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <Show when={props.items.length > 0}>
      <nav class={cn("text-sm", props.class)}>
        <p class="text-foreground mb-4 font-semibold">On this page</p>
        <ul class="space-y-2">
          <For each={props.items}>
            {(item) => (
              <li>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(item.id, e)}
                  class={cn(
                    "hover:text-foreground text-muted-foreground block transition-colors",
                    activeId() === item.id &&
                      "border-l-primary text-foreground border-l-2 pl-2 font-medium",
                  )}
                >
                  {item.title}
                </a>
              </li>
            )}
          </For>
        </ul>
      </nav>
    </Show>
  )
}
