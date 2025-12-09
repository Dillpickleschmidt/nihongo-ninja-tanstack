// src/routes/_home/vocab/$.tsx
import { createFileRoute } from '@tanstack/solid-router'
import { Show } from 'solid-js'
import { FolderView } from '@/features/vocab-page/pages/main/components/FolderView'
import { useVocab } from '@/features/vocab-page/context/VocabContext'
import { resolveFolderFromPath } from '@/features/vocab-page/utils/folder-utils'

export const Route = createFileRoute('/_home/vocab/$')({
  component: VocabCatchAll,
})

function VocabCatchAll() {
  const params = Route.useParams()
  const { folders } = useVocab()

  // Split the splat path into segments
  const pathSegments = () => {
    const splat = params()._splat
    return splat ? splat.split('/').filter(Boolean) : []
  }

  // Resolve path segments to a folder
  const folder = () => resolveFolderFromPath(pathSegments(), folders())

  return (
    <Show
      when={folder()}
      fallback={
        <div class="flex flex-col items-center justify-center py-12">
          <p class="text-muted-foreground text-sm">Folder not found</p>
        </div>
      }
    >
      {(f) => <FolderView folderId={f().id} />}
    </Show>
  )
}
