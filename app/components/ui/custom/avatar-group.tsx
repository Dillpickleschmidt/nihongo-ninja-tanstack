import { For, Show, ValidComponent, createMemo, splitProps } from "solid-js"
import { Avatar, AvatarFallback, AvatarImage } from "../avatar"
import { cn } from "~/utils"
import type { PolymorphicProps } from "@kobalte/core/polymorphic"

// Define the type for each avatar item
export type AvatarGroupItem = {
  src: string
  fallback?: string
  notes_internal?: string
}

type AvatarGroupProps<T extends ValidComponent = "div"> = {
  items: AvatarGroupItem[]
  class?: string
  maxItems?: number
  overlap?: number // Percentage of overlap between avatars (0-100)
  direction?: "ltr" | "rtl" // Left-to-right or right-to-left stacking
}

/**
 * AvatarGroup component displays a row of overlapping avatars.
 *
 * @param items - Array of avatar data to display
 * @param maxItems - Maximum number of avatars to display (defaults to all)
 * @param overlap - Percentage of overlap between avatars (0-100, default: 25)
 * @param direction - Direction of stacking: "ltr" (leftmost on top) or "rtl" (rightmost on top)
 */
export const AvatarGroup = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, AvatarGroupProps<T>>,
) => {
  const [local, others] = splitProps(props as AvatarGroupProps, [
    "items",
    "class",
    "maxItems",
    "overlap",
    "direction",
  ])

  // Default settings
  const maxItems = () => local.maxItems || local.items.length
  const overlap = () => local.overlap ?? 8 // Use pixels instead of percentage
  const direction = () => local.direction ?? "ltr"

  // Process items to respect maxItems limit
  const displayItems = createMemo(() => {
    if (maxItems() >= local.items.length) return local.items
    return local.items.slice(0, maxItems())
  })

  // Generate z-index values based on direction
  const getZIndex = (index: number) => {
    if (direction() === "ltr") {
      return displayItems().length - index
    } else {
      return index + 1
    }
  }

  return (
    <div class={cn("flex items-center", local.class)} {...others}>
      <For each={displayItems()}>
        {(item, index) => (
          <div
            class="relative"
            style={{
              "z-index": getZIndex(index()),
              "margin-left":
                index() > 0 && direction() === "ltr"
                  ? `-${overlap()}px`
                  : undefined,
              "margin-right":
                index() > 0 && direction() === "rtl"
                  ? `-${overlap()}px`
                  : undefined,
            }}
          >
            <Avatar class="border border-black shadow-md">
              <AvatarImage src={item.src} />
              <Show when={item.fallback}>
                <AvatarFallback>{item.fallback}</AvatarFallback>
              </Show>
            </Avatar>
          </div>
        )}
      </For>

      {/* Display count of hidden avatars if any */}
      <Show when={local.items.length > maxItems()}>
        <div
          class="bg-muted relative flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-medium"
          style={{
            "z-index": direction() === "ltr" ? 0 : displayItems().length + 1,
            "margin-left":
              direction() === "ltr" ? `-${overlap()}px` : undefined,
            "margin-right":
              direction() === "rtl" ? `-${overlap()}px` : undefined,
          }}
        >
          +{local.items.length - maxItems()}
        </div>
      </Show>
    </div>
  )
}
