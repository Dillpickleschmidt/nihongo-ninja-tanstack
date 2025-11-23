import { For, Show } from "solid-js"
import { Link } from "@tanstack/solid-router"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import type { BreadcrumbItem as BreadcrumbItemType } from "../hooks/useVocabDashboard"

interface VocabBreadcrumbProps {
  items: BreadcrumbItemType[]
  class?: string
}

/**
 * Breadcrumb navigation component for vocab dashboard
 * Shows navigation path: Vocabulary > Folder > Deck
 */
export function VocabBreadcrumb(props: VocabBreadcrumbProps) {
  return (
    <Show when={props.items && props.items.length > 1}>
      <nav class={props.class}>
        <Breadcrumb>
          <BreadcrumbList>
            <For each={props.items}>
              {(item, index) => (
                <>
                  <BreadcrumbItem>
                    <Show
                      when={!item.current}
                      fallback={<span class="text-foreground">{item.label}</span>}
                    >
                      <BreadcrumbLink asChild>
                        <Link to={item.href}>{item.label}</Link>
                      </BreadcrumbLink>
                    </Show>
                  </BreadcrumbItem>
                  <Show when={index() < props.items.length - 1}>
                    <BreadcrumbSeparator />
                  </Show>
                </>
              )}
            </For>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>
    </Show>
  )
}
