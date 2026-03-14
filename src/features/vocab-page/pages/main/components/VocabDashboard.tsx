import { Show, createMemo } from "solid-js"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { usePreferences } from "@/lib/preferences"
import { FolderBrowser } from "./FolderBrowser"
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

  const dashboardData = useConvexQuery(
    api.api.learning_paths.getDashboardData,
    () => ({ pathId: preferences().activeLearningPath }),
    () => ({ enabled: !!preferences().activeLearningPath }),
  )

  const activeLearningPathName = () => {
    const pathId = preferences().activeLearningPath
    return dashboardData.data()?.paths.find((p) => p.id === pathId)?.shortName
  }

  const activeChapterData = () => {
    const slug = preferences().activeChapter
    const chapters = dashboardData.data()?.chapters
    return chapters?.find((c) => c.slug === slug) ?? chapters?.[0]
  }

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

      <div class="mx-auto max-w-4xl space-y-6 pt-4">
        <Show when={ctx.isLoading()}>
          <div class="flex items-center justify-center py-12">
            <div class="text-muted-foreground text-sm">Loading...</div>
          </div>
        </Show>

        <Show when={!ctx.isLoading()}>
          <div
            class="animate-fade-up flex flex-col gap-6 opacity-0 md:flex-row"
            style={{ "animation-delay": "0ms" }}
          >
            <div class="md:w-1/2">
              <ComingUpSection
                recentCompletions={recentVocabCompletions}
                decks={ctx.decks}
                chapter={activeChapterData}
                learningPathName={activeLearningPathName}
              />
            </div>
            <div class="md:w-1/2">
              <RecentlyStudiedSection
                recentCompletions={recentVocabCompletions()}
                decks={ctx.decks()}
              />
            </div>
          </div>

          <div
            class="animate-fade-up opacity-0"
            style={{ "animation-delay": "75ms" }}
          >
            <FolderBrowser folders={ctx.folders} decks={ctx.decks} />
          </div>
        </Show>
      </div>
    </>
  )
}
