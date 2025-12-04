// store/PracticeContext.tsx
import {
  createContext,
  useContext,
  JSX,
  createEffect,
  createSignal,
  onMount,
} from "solid-js"
import { isServer } from "solid-js/web"
import type { Difficulty, PracticeState } from "./types"
import type { SetStoreFunction } from "solid-js/store"
import type { CheckResult } from "../core/answer-processing/types"
import { createPracticeStore } from "./practiceStore"
import { ViteFileLoader } from "./viteFileLoader"
import { useSessionTracking } from "@/features/module-session-manager/useSessionTracking"
import { useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import { KagomeWorkerManager } from "../kagome/kagome-worker-manager"

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

export function PracticeProvider(props: {
  children: JSX.Element
  moduleId: string
}) {
  const context = useRouteContext({ from: RootRoute.id })
  const sessionTracking = useSessionTracking(
    context().user?.id || null,
    props.moduleId,
    "sentence-practice",
  )
  const fileLoader = new ViteFileLoader()
  const practiceStore = createPracticeStore(
    fileLoader,
    sessionTracking.addTimeAndQuestions,
  )

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

  // Start session when questions are loaded
  createEffect(() => {
    if (
      !practiceStore.store.isLoading &&
      practiceStore.store.questions.length > 0
    ) {
      void sessionTracking.startSession()
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
