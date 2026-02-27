import { createContext, useContext, type ParentComponent } from "solid-js"
import { createPracticeStore, type PracticeStore } from "./practiceStore"
import { useMutation } from "convex-solidjs"
import { api } from "convex/_generated/api"

const PracticeContext = createContext<PracticeStore>()

export const PracticeProvider: ParentComponent<{ modulePath: string }> = (
  props,
) => {
  const recordProgressMutation = useMutation(api.api.progress.recordProgressEvent)

  const practiceStore = createPracticeStore(
    (progressUnitsDelta, questionsAnsweredDelta) => {
      recordProgressMutation.mutate({
        modulePath: props.modulePath,
        moduleType: "sentence-practice",
        progressUnitsDelta,
        questionsAnsweredDelta,
        eventTs: Date.now(),
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
      })
    },
  )

  return (
    <PracticeContext.Provider value={practiceStore}>
      {props.children}
    </PracticeContext.Provider>
  )
}

export function usePractice(): PracticeStore {
  const context = useContext(PracticeContext)
  if (!context) {
    throw new Error("usePractice must be used within a PracticeProvider")
  }
  return context
}
