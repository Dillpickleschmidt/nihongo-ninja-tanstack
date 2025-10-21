import { createEffect, createSignal, For, Show, on, onCleanup } from "solid-js"
import { cn } from "@/utils"

export interface TOCItem {
  id: string
  title: string
}

interface TableOfContentsProps {
  items: TOCItem[]
  class?: string
}

export function TableOfContents(props: TableOfContentsProps) {
  const [activeId, setActiveId] = createSignal<string | null>(null)

  // Use IntersectionObserver to track which section is in view
  createEffect(
    on(
      () => props.items,
      (items) => {
        if (items.length === 0) return

        // Get all target elements upfront with error handling
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

        const observer = new IntersectionObserver(
          (entries) => {
            const visibleEntries = entries.filter(
              (entry) => entry.isIntersecting,
            )
            if (visibleEntries.length > 0) {
              // IntersectionObserver already orders entries by position, so get the first
              setActiveId(visibleEntries[0].target.id)
            }
          },
          {
            rootMargin: "-20% 0% -66%",
          },
        )

        // Observe all available target elements
        elements.forEach(({ el }) => observer.observe(el))

        // Proper cleanup
        onCleanup(() => observer.disconnect())
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
