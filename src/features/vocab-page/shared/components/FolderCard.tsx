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
  return (
    <FolderContextMenu folderData={props.folderData} onClick={props.onClick}>
      <CardContent title={props.title} subtitle={props.subtitle} />
    </FolderContextMenu>
  )
}

// Reusable card content
function CardContent(props: { title: string; subtitle?: string }) {
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
