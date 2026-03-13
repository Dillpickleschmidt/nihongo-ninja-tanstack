import { For, Show } from "solid-js"
import { Link } from "@tanstack/solid-router"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DeckCard } from "../../../shared/components/DeckCard"
import { getRootOrphanDecks } from "../../../utils/hierarchy"
import { useVocab } from "../../../context/VocabContext"

export function UnsortedView() {
  const ctx = useVocab()
  const orphanDecks = () => getRootOrphanDecks(ctx.decks())

  return (
    <div class="space-y-6">
      <nav>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/vocab">
                Root
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span class="text-foreground">Unsorted</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </nav>

      <div class="mb-4">
        <h2 class="text-foreground mb-2 text-2xl font-bold">Unsorted</h2>
      </div>

      <Show
        when={orphanDecks().length > 0}
        fallback={
          <div class="border-border/50 rounded-lg border border-dashed p-8 text-center">
            <p class="text-muted-foreground text-sm">
              No unsorted decks
            </p>
          </div>
        }
      >
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <For each={orphanDecks()}>
            {(deck) => <DeckCard deck={deck} />}
          </For>
        </div>
      </Show>
    </div>
  )
}
