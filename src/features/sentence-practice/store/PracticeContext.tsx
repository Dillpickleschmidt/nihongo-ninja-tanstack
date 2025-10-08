// store/PracticeContext.tsx
import { createContext, useContext, JSX, createEffect } from "solid-js"
import type { Difficulty, PracticeState } from "./types"
import type { SetStoreFunction } from "solid-js/store"
import type { CheckResult } from "../core/answer-processing/types"
import { createPracticeStore } from "./practiceStore"
import { ViteFileLoader } from "./viteFileLoader"
import { useSessionTracking } from "@/features/module-session-manager/useSessionTracking"
import { useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"

interface PracticeContextValue {
  store: PracticeState
  setStore: SetStoreFunction<PracticeState>
  actions: {
    checkAnswer: () => CheckResult | undefined
    nextQuestion: () => void
    resetInput: () => void
    toggleFurigana: () => void
    updateInput: (value: string, index?: number) => void
    loadQuestions: (path: string) => Promise<void>
    setDifficulty: (difficulty: Difficulty) => void
  }
}

const PracticeContext = createContext<PracticeContextValue>()

export function PracticeProvider(props: {
  children: JSX.Element
  moduleId: string
}) {
  const context = useRouteContext({ from: RootRoute.id })
  const sessionTracking = useSessionTracking(
    context().user?.id || null,
    props.moduleId,
  )
  const fileLoader = new ViteFileLoader()
  const practiceStore = createPracticeStore(
    fileLoader,
    sessionTracking.addTimeAndQuestions,
  )

  // Start session when questions are loaded
  createEffect(() => {
    if (
      !practiceStore.store.isLoading &&
      practiceStore.store.questions.length > 0
    ) {
      void sessionTracking.startSession()
    }
  })

  return (
    <PracticeContext.Provider value={practiceStore}>
      {props.children}
    </PracticeContext.Provider>
  )
}

export function usePracticeStore() {
  const context = useContext(PracticeContext)
  if (!context) {
    throw new Error("usePracticeStore must be used within a PracticeProvider")
  }
  return context
}
