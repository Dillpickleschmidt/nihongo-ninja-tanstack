import { createContext, useContext, type ParentComponent } from "solid-js"
import { createPracticeStore, type PracticeStore } from "./practiceStore"

const PracticeContext = createContext<PracticeStore>()

export const PracticeProvider: ParentComponent = (props) => {
  const practiceStore = createPracticeStore()

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
