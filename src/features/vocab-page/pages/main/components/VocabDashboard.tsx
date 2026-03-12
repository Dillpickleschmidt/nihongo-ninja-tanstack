import { Show, createMemo } from "solid-js"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { usePreferences } from "@/lib/preferences"
import { FolderBrowserGrid } from "./FolderBrowserGrid"
import { RecentlyStudiedSection } from "./RecentlyStudiedSection"
import { ComingUpSection } from "./ComingUpSection"
import { useVocab } from "../../../context/VocabContext"

export function VocabDashboard() {
  const ctx = useVocab()
  const recentActivity = useConvexQuery(
    api.api.progress.getRecentModuleActivity,
    () => ({ limit: 20 }),
  )
  const { preferences } = usePreferences()

  const recentVocabCompletions = createMemo(() => {
    const rows = recentActivity.data() ?? []
    const seen = new Set<string>()
    const results: { moduleId: string; completedAt: number }[] = []
    for (const row of rows) {
      if (row.moduleType !== "vocab-practice") continue
      const deckId = row.modulePath.replace(/^vocab-deck:/, "")
      if (seen.has(deckId)) continue
      seen.add(deckId)
      results.push({ moduleId: deckId, completedAt: row.lastUpdatedAt })
    }
    return results
  })

  return (
    <div class="space-y-8">
      <Show when={ctx.isLoading()}>
        <div class="flex items-center justify-center py-12">
          <div class="text-muted-foreground text-sm">Loading...</div>
        </div>
      </Show>

      <Show when={!ctx.isLoading()}>
        <RecentlyStudiedSection
          recentCompletions={recentVocabCompletions()}
          decks={ctx.decks()}
        />

        <ComingUpSection
          recentCompletions={recentVocabCompletions()}
          decks={ctx.decks()}
          activeLearningPath={preferences().activeLearningPath}
          activeChapter={preferences().activeChapter}
        />

        <FolderBrowserGrid folders={ctx.folders()} decks={ctx.decks()} />
      </Show>
    </div>
  )
}
