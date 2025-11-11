import { Folder } from "lucide-solid"
import { Show } from "solid-js"
import { FolderContextMenu } from "./FolderContextMenu"

interface FolderCardProps {
  title: string
  subtitle?: string
  onClick: () => void
  // Folder editing (optional - shows context menu when provided)
  folderData?: DeckFolder
}

/**
 * Unified card component for folders, learning paths, and chapters
 * Shows edit/delete options via FolderContextMenu when folder data is provided
 */
export function FolderCard(props: FolderCardProps) {
  const isEditable = () => !!props.folderData

  return (
    <Show
      when={isEditable()}
      fallback={<SimpleCard {...props} />}
    >
      <div class="bg-card/60 hover:bg-card/70 border-card-foreground/70 cursor-pointer rounded-lg border p-4 shadow-sm backdrop-blur-sm transition-colors hover:shadow-md">
        <FolderContextMenu
          folderData={props.folderData!}
        >
          <div onClick={props.onClick}>
            <CardContent
              title={props.title}
              subtitle={props.subtitle}
            />
          </div>
        </FolderContextMenu>
      </div>
    </Show>
  )
}

// Simple read-only card (for learning paths, chapters)
function SimpleCard(props: FolderCardProps) {
  return (
    <div
      onClick={props.onClick}
      class="bg-card/60 hover:bg-card/70 border-card-foreground/70 cursor-pointer rounded-lg border p-4 shadow-sm backdrop-blur-sm transition-colors hover:shadow-md"
    >
      <CardContent title={props.title} subtitle={props.subtitle} />
    </div>
  )
}

// Reusable card content
function CardContent(props: {
  title: string
  subtitle?: string
}) {
  return (
    <div class="flex items-start gap-3">
      <div class="bg-muted/40 border-card-foreground/70 rounded-md border p-2 backdrop-blur-xs">
        <Folder class="text-muted-foreground h-5 w-5" />
      </div>

      <div class="min-w-0 flex-1">
        <h4 class="truncate text-sm leading-tight font-medium">
          {props.title}
        </h4>
        <Show when={props.subtitle}>
          <p class="text-muted-foreground mt-1 text-xs">{props.subtitle}</p>
        </Show>
      </div>
    </div>
  )
}
