import { createContext, useContext, type JSX } from "solid-js"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { usePreferences } from "@/lib/preferences"
import { isBuiltInTextbook } from "@/data/utils/textbooks"
import { getChaptersByTextbook } from "@/data/utils/chapters"

type LearningPathContextValue = ReturnType<typeof createLearningPathValue>

const LearningPathContext = createContext<LearningPathContextValue>()

function createLearningPathValue() {
  const { preferences, setPreference, setPreferences } = usePreferences()
  const selectedPathId = () => preferences().activeLearningPath

  const query = useConvexQuery(
    api.api.learning_paths.getDashboardData,
    () => ({ pathId: selectedPathId()! }),
    () => ({ enabled: !!selectedPathId() }),
  )

  const switchPath = (pathId: string) => {
    const firstChapter = isBuiltInTextbook(pathId)
      ? getChaptersByTextbook(pathId)[0]?.slug
      : "chapter-1"
    setPreferences({
      activeLearningPath: pathId,
      ...(firstChapter && { activeChapter: firstChapter }),
    })
  }

  const currentChapter = () => {
    const chapters = query.data()?.chapters
    if (!chapters?.length) return undefined
    const stored = preferences().activeChapter
    return chapters.find((c) => c.slug === stored) ?? chapters[0]
  }

  const selectedPath = () =>
    query.data()?.paths.find((p) => p.id === selectedPathId())

  return {
    query,
    preferences,
    setPreference,
    selectedPathId,
    currentChapter,
    selectedPath,
    switchPath,
  }
}

export function LearningPathProvider(props: { children: JSX.Element }) {
  const value = createLearningPathValue()
  return (
    <LearningPathContext.Provider value={value}>
      {props.children}
    </LearningPathContext.Provider>
  )
}

export function useLearningPath() {
  const context = useContext(LearningPathContext)
  if (!context) {
    throw new Error(
      "useLearningPath must be used within LearningPathProvider",
    )
  }
  return context
}
