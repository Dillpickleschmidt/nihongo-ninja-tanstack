import { Show, createMemo } from "solid-js"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { usePreferences } from "@/lib/preferences"
import { getUser } from "@/lib/auth"
import { FolderBrowserGrid } from "./FolderBrowserGrid"
import { RecentlyStudiedSection } from "./RecentlyStudiedSection"
import { ComingUpSection } from "./ComingUpSection"
import { MissedWordsDeckBuilder } from "./MissedWordsDeckBuilder"
import { useVocab } from "../../../context/VocabContext"

export function VocabDashboard() {
  const ctx = useVocab()
  const user = getUser()
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
    <>
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.3s ease-out forwards; }
      `}</style>

      <div class="space-y-6">
        <Show when={ctx.isLoading()}>
          <div class="flex items-center justify-center py-12">
            <div class="text-muted-foreground text-sm">Loading...</div>
          </div>
        </Show>

        <Show when={!ctx.isLoading()}>
          <div
            class="animate-fade-up opacity-0"
            style={{ "animation-delay": "0ms" }}
          >
            <ComingUpSection
              recentCompletions={recentVocabCompletions()}
              decks={ctx.decks()}
              activeLearningPath={preferences().activeLearningPath}
              activeChapter={preferences().activeChapter}
            />
          </div>

          <Show when={!!user()}>
            <div
              class="animate-fade-up opacity-0"
              style={{ "animation-delay": "75ms" }}
            >
              <MissedWordsDeckBuilder />
            </div>
          </Show>

          <div
            class="animate-fade-up opacity-0"
            style={{ "animation-delay": "150ms" }}
          >
            <FolderBrowserGrid folders={ctx.folders()} decks={ctx.decks()} />
          </div>

          <div
            class="animate-fade-up opacity-0"
            style={{ "animation-delay": "225ms" }}
          >
            <RecentlyStudiedSection
              recentCompletions={recentVocabCompletions()}
              decks={ctx.decks()}
            />
          </div>
        </Show>
      </div>
    </>
  )
}
