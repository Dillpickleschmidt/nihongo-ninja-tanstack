// src/routes/_home/vocab/$.tsx
import { createFileRoute } from '@tanstack/solid-router'
import { Match, Switch } from 'solid-js'
import { FolderView } from '@/features/vocab-page/pages/main/components/FolderView'
import { DeckView } from '@/features/vocab-page/pages/main/components/DeckView'
import { useVocab } from '@/features/vocab-page/context/VocabContext'
import {
  resolveFolderFromPath,
  resolveDeckFromPath,
} from '@/features/vocab-page/utils/folder-utils'

export const Route = createFileRoute('/_home/vocab/$')({
  component: VocabCatchAll,
})

function VocabCatchAll() {
  const params = Route.useParams()
  const { folders, decks } = useVocab()

  // Split the splat path into segments
  const pathSegments = () => {
    const splat = params()._splat
    return splat ? splat.split('/').filter(Boolean) : []
  }

  // Try folder first (full path match)
  const folder = () => resolveFolderFromPath(pathSegments(), folders())

  // If not a folder, try deck (last segment is deck ID)
  const deck = () => {
    if (folder()) return null
    return resolveDeckFromPath(pathSegments(), decks())
  }

  return (
    <Switch
      fallback={
        <div class="flex flex-col items-center justify-center py-12">
          <p class="text-muted-foreground text-sm">Not found</p>
        </div>
      }
    >
      <Match when={folder()}>{(f) => <FolderView folderId={f().id} />}</Match>
      <Match when={deck()}>{(d) => <DeckView deck={d()} />}</Match>
    </Switch>
  )
}
