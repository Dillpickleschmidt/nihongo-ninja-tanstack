// vocab-page/shared/FolderBreadcrumb.tsx
import { For } from "solid-js"
import { ChevronLeft } from "lucide-solid"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface FolderBreadcrumbProps {
  breadcrumbPath: DeckFolder[]
  canNavigateUp: boolean
  onNavigateToFolder: (folderId: number | null) => void
  onNavigateToParent: () => void
  onNavigateToRoot: () => void
}

export function FolderBreadcrumb(props: FolderBreadcrumbProps) {
  return (
    <div class="bg-muted/30 mb-4 flex items-center gap-3 rounded-lg p-3">
      {/* Back button */}
      <Button
        variant="ghost"
        size="sm"
        class="h-auto shrink-0 p-1"
        onClick={props.onNavigateToParent}
        disabled={!props.canNavigateUp}
      >
        <ChevronLeft class="h-4 w-4" />
      </Button>

      {/* Breadcrumb path using UI components */}
      <Breadcrumb class="min-w-0 flex-1">
        <BreadcrumbList>
          {/* Root item */}
          <BreadcrumbItem>
            <BreadcrumbLink
              as="button"
              onClick={props.onNavigateToRoot}
              class="truncate"
            >
              Root
            </BreadcrumbLink>
          </BreadcrumbItem>

          {/* Path segments */}
          <For each={props.breadcrumbPath}>
            {(folder, index) => {
              const isLast = () => index() === props.breadcrumbPath.length - 1
              return (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    {isLast() ? (
                      <span
                        class="text-foreground truncate text-sm font-medium"
                        title={folder.folder_name}
                      >
                        {folder.folder_name}
                      </span>
                    ) : (
                      <BreadcrumbLink
                        as="button"
                        onClick={() =>
                          props.onNavigateToFolder(folder.folder_id)
                        }
                        title={folder.folder_name}
                        class="truncate"
                      >
                        {folder.folder_name}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </>
              )
            }}
          </For>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
