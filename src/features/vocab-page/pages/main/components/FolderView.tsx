import { For, Show } from "solid-js"
import { Link } from "@tanstack/solid-router"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { FolderCard } from "../../../shared/components/FolderCard"
import { DeckCard } from "../../../shared/components/DeckCard"
import { getFolderLevelItems } from "../../../utils/hierarchy"
import {
  buildFolderBreadcrumbs,
  type BreadcrumbItem as BreadcrumbItemType,
} from "../../../utils/navigation"
import { useVocab } from "../../../context/VocabContext"

interface FolderViewProps {
  folderId: string
}

/**
 * View component for displaying folder contents
 * Shows breadcrumbs, folder title, and grid of subfolders/decks
 */
export function FolderView(props: FolderViewProps) {
  const ctx = useVocab()

  const folder = () => ctx.folders().find((f) => f.id === props.folderId)
  const breadcrumbs = () =>
    buildFolderBreadcrumbs(ctx.folders(), props.folderId)
  const items = () =>
    getFolderLevelItems(ctx.folders(), ctx.decks(), props.folderId)

  const currentFolderName = () => folder()?.folderName || "Folder"

  return (
    <div class="space-y-6">
      {/* Breadcrumb Navigation */}
      <FolderBreadcrumbs items={breadcrumbs()} />

      {/* Page Header */}
      <div class="mb-4">
        <h2 class="text-foreground mb-2 text-2xl font-bold">
          {currentFolderName()}
        </h2>
      </div>

      {/* Grid with empty state */}
      <Show
        when={items().length > 0}
        fallback={<EmptyState message="No folders or decks yet" />}
      >
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <For each={items()}>
            {(node) => {
              switch (node.type) {
                case "folder":
                  return <FolderCard folder={node.data} />
                case "deck":
                  return <DeckCard deck={node.data} />
                default:
                  return null
              }
            }}
          </For>
        </div>
      </Show>
    </div>
  )
}

// ===== Internal Helper Components =====

interface FolderBreadcrumbsProps {
  items: BreadcrumbItemType[]
  class?: string
}

/**
 * Breadcrumb navigation for folder hierarchy
 * Only shows when there are multiple levels (more than just root)
 */
function FolderBreadcrumbs(props: FolderBreadcrumbsProps) {
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
                      fallback={
                        <span class="text-foreground">{item.label}</span>
                      }
                    >
                      <BreadcrumbLink as={Link} to={item.href}>
                        {item.label}
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

interface EmptyStateProps {
  message: string
}

/**
 * Empty state display for when folder has no contents
 */
function EmptyState(props: EmptyStateProps) {
  return (
    <div class="border-border/50 rounded-lg border border-dashed p-8 text-center">
      <p class="text-muted-foreground text-sm">{props.message}</p>
    </div>
  )
}
