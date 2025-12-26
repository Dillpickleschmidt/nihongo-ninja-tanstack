import { Folder as FolderIcon } from "lucide-solid"
import { Show } from "solid-js"
import { FolderContextMenu } from "./FolderContextMenu"
import { useVocab, type Folder } from "../../context/VocabContext"
import { buildFolderUrlPath } from "../../utils/navigation"

interface FolderCardProps {
  folder: Folder
}

/**
 * Card component for folders (both user and built-in)
 * Shows edit/delete options via FolderContextMenu for user folders
 */
export function FolderCard(props: FolderCardProps) {
  const ctx = useVocab()
  const folderPath = () =>
    `/vocab/${buildFolderUrlPath(props.folder.id, ctx.folders())}`

  return (
    <FolderContextMenu folder={props.folder} to={folderPath()}>
      <CardContent
        title={props.folder.folderName}
        isBuiltIn={props.folder.source === "built-in"}
      />
    </FolderContextMenu>
  )
}

// Reusable card content
function CardContent(props: { title: string; isBuiltIn?: boolean }) {
  return (
    <div class="flex items-start gap-3">
      <div class="bg-muted/40 border-card-foreground/70 rounded-md border p-2 backdrop-blur-xs">
        <FolderIcon class="text-muted-foreground h-5 w-5" />
      </div>

      <div class="min-w-0 flex-1">
        <h4 class="truncate text-sm leading-tight font-medium">
          {props.title}
        </h4>
        <Show when={props.isBuiltIn}>
          <p class="text-muted-foreground mt-1 text-xs">Built-in</p>
        </Show>
      </div>
    </div>
  )
}
