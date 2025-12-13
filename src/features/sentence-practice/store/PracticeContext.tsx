// store/PracticeContext.tsx
import {
  createContext,
  useContext,
  JSX,
  createSignal,
  onMount,
} from "solid-js"
import { isServer } from "solid-js/web"
import type { Difficulty, PracticeState } from "./types"
import type { SetStoreFunction } from "solid-js/store"
import type { CheckResult } from "../core/answer-processing/types"
import { createPracticeStore } from "./practiceStore"
import { KagomeWorkerManager } from "../kagome/kagome-worker-manager"
import type { Doc } from "convex/_generated/dataModel"

interface PracticeContextValue {
  store: PracticeState
  setStore: SetStoreFunction<PracticeState>
  actions: {
    checkAnswer: () => CheckResult | undefined
    nextQuestion: () => void
    resetInput: () => void
    toggleFurigana: () => void
    updateInput: (value: string, index?: number) => void
    setQuestions: (questions: Doc<"sentencePracticeQuestions">[]) => void
    setDifficulty: (difficulty: Difficulty) => void
    setUserInputTokens: (
      tokens: import("../kagome/types/kagome").KagomeToken[],
    ) => void
    setUserInputOverlay: (
      overlay:
        | import("../core/text/KanaToKanjiOverlay").OverlayResult
        | undefined,
    ) => void
  }
  kagomeReady: () => boolean
  kagomeWorker: KagomeWorkerManager | null
}

const PracticeContext = createContext<PracticeContextValue>()

export function PracticeProvider(props: { children: JSX.Element }) {
  const practiceStore = createPracticeStore()

  // Initialize Kagome worker only on client (runs on separate thread, doesn't block main thread)
  const kagomeWorker = !isServer ? new KagomeWorkerManager() : null

  // Track when Kagome WASM is ready
  const [kagomeReady, setKagomeReady] = createSignal(false)
  onMount(() => {
    if (kagomeWorker) {
      kagomeWorker
        .waitForReady()
        .then(() => setKagomeReady(true))
        .catch((err) => console.error("[Kagome] Failed:", err))
    }
  })

  const contextValue: PracticeContextValue = {
    ...practiceStore,
    kagomeReady,
    kagomeWorker,
  }

  return (
    <PracticeContext.Provider value={contextValue}>
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
