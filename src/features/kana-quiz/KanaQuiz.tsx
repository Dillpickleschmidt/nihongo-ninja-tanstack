// src/features/kana-quiz/KanaQuiz.tsx
import CharacterBox from "@/features/kana-quiz/components/CharacterBox"
import {
  useKanaQuiz,
  vocabularyToKana,
  type KanaItem,
} from "@/features/kana-quiz/hooks/useKanaQuiz"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { dynamic_modules } from "@/data/dynamic_modules"
import { getNextModuleLink } from "@/data/utils/modules"
import { useCompleteModule } from "@/lib/completions"
import { Link } from "@tanstack/solid-router"
import {
  createContext,
  createEffect,
  createMemo,
  createSignal,
  Index,
  onCleanup,
  onMount,
  Show,
  useContext,
  type Accessor,
} from "solid-js"
import { RotateCcw } from "lucide-solid"
import { Skeleton } from "@/components/ui/custom/skeleton"
import { HeaderCard } from "./components/HeaderCard"

type KanaQuizContext = {
  kana: Accessor<KanaItem[] | undefined>
  characterBoxes: Accessor<
    Array<KanaItem & { userInput: string; isCorrect: boolean }> | undefined
  >
  showResults: Accessor<boolean>
  numCorrect: Accessor<number>
  resultsTheme: Accessor<{ accent: string; title: string; message: string }>
  registerRef: (index: number, el: HTMLInputElement) => void
  handleSubmit: () => void
  handleRetry: () => void
}

const KanaQuizCtx = createContext<KanaQuizContext>()
const useKanaQuizCtx = () => useContext(KanaQuizCtx)!

export function KanaQuiz(props: { moduleId: string }) {
  const module = dynamic_modules[props.moduleId]

  return (
    <div class="relative">
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.3s ease-out forwards; }
      `}</style>

      <KanaQuizProvider moduleId={props.moduleId}>
        <header class="animate-fade-up opacity-0 px-4 pt-6 pb-4 text-center">
          <KanaQuizHeader title={module.title} />
        </header>

        <main
          class="animate-fade-up opacity-0 grid grid-cols-[repeat(auto-fill,minmax(145px,1fr))] justify-items-center gap-3 p-3 pb-24"
          style={{ "animation-delay": "75ms" }}
        >
          <KanaQuizGrid />
        </main>

        <KanaQuizActionBar moduleId={props.moduleId} />
      </KanaQuizProvider>
    </div>
  )
}

function KanaQuizProvider(props: { moduleId: string; children: any }) {
  const module = dynamic_modules[props.moduleId]

  const vocabQuery = useConvexQuery(api.api.vocabulary.getBySets, () => ({
    setIds: module.vocab_set_ids,
  }))

  const [kana, setKana] = createSignal<KanaItem[]>()
  createEffect(() => {
    const data = vocabQuery.data()
    if (!data || kana()) return
    const items = Object.values(data).flat()
    setKana(vocabularyToKana(items).sort(() => Math.random() - 0.5))
  })

  const {
    characterBoxes,
    showResults,
    numCorrect,
    registerRef,
    handleSubmit,
    handleRetry,
  } = useKanaQuiz(kana)

  const resultsTheme = createMemo(() => {
    const k = kana()
    if (!k) return { accent: "", title: "", message: "" }
    const percentage = numCorrect() / k.length
    if (percentage <= 0.5) {
      return {
        accent: "bg-rose-500",
        title: "There's work to do",
        message: "Review the kana and try again!",
      }
    }
    if (percentage <= 0.8) {
      return {
        accent: "bg-amber-400",
        title: "You're getting there",
        message: "Push for 80% to really master them.",
      }
    }
    return {
      accent: "bg-emerald-500",
      title: "Excellent",
      message: "You really know your kana!",
    }
  })

  return (
    <KanaQuizCtx.Provider
      value={{
        kana,
        characterBoxes,
        showResults,
        numCorrect,
        resultsTheme,
        registerRef,
        handleSubmit,
        handleRetry,
      }}
    >
      {props.children}
    </KanaQuizCtx.Provider>
  )
}

function KanaQuizHeader(props: { title: string }) {
  const { kana, showResults, numCorrect, resultsTheme } = useKanaQuizCtx()

  return (
    <Show
      when={kana()}
      fallback={
        <div class="mx-auto max-w-2xl py-2 text-center">
          <Skeleton class="mx-auto h-8 w-48 rounded-lg bg-white/10" />
          <Skeleton class="mx-auto mt-3 h-4 w-72 rounded bg-white/5" />
        </div>
      }
    >
      <Show when={showResults()} fallback={<HeaderCard title={props.title} />}>
        <HeaderCard
          title={resultsTheme().title}
          theme={{
            accent: resultsTheme().accent,
            message: `${numCorrect()} / ${kana()!.length} correct. ${resultsTheme().message}`,
          }}
        />
      </Show>
    </Show>
  )
}

function KanaQuizGrid() {
  const { characterBoxes, showResults, registerRef } = useKanaQuizCtx()

  return (
    <Show
      when={characterBoxes()}
      fallback={
        <>
          {Array.from({ length: 12 }).map(() => (
            <Skeleton class="h-[195px] w-[149px] rounded-[20px] bg-white/3" />
          ))}
        </>
      }
    >
      <Index each={characterBoxes()}>
        {(box, idx) => (
          <div
            class="animate-fade-up opacity-0"
            style={{ "animation-delay": `${idx * 15}ms` }}
          >
            <CharacterBox
              character={box().hiragana}
              registerRef={(el) => registerRef(idx, el)}
              disabled={showResults()}
              isCorrect={showResults() && box().isCorrect}
              isIncorrect={showResults() && !box().isCorrect}
            />
          </div>
        )}
      </Index>
    </Show>
  )
}

function KanaQuizActionBar(props: { moduleId: string }) {
  const { kana, showResults, handleSubmit, handleRetry } = useKanaQuizCtx()
  const nextLesson = getNextModuleLink(props.moduleId)
  const { completeModule } = useCompleteModule()

  const [showButton, setShowButton] = createSignal(false)

  onMount(() => {
    const check = () => {
      const canScroll =
        document.documentElement.scrollHeight > window.innerHeight
      setShowButton(!canScroll || window.scrollY > 100)
    }
    check()
    window.addEventListener("scroll", check, { passive: true })
    window.addEventListener("resize", check, { passive: true })
    onCleanup(() => {
      window.removeEventListener("scroll", check)
      window.removeEventListener("resize", check)
    })
  })

  return (
    <div
      class="fixed inset-x-0 bottom-20 z-50 flex justify-center gap-3 transition-all duration-300"
      classList={{
        "translate-y-0 opacity-100": showButton(),
        "translate-y-4 opacity-0 pointer-events-none": !showButton(),
      }}
    >
      <Show when={kana()}>
        <Show
          when={showResults()}
          fallback={
            <button
              type="button"
              onClick={handleSubmit}
              class="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-dynamic-accent px-8 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:brightness-110"
              style={{
                "box-shadow":
                  "0 8px 20px -4px color-mix(in srgb, var(--dynamic-accent) 30%, transparent)",
              }}
            >
              Submit
            </button>
          }
        >
          <button
            type="button"
            onClick={handleRetry}
            class="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-white/10 bg-white/6 px-6 py-3 text-sm font-semibold text-white/60 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <RotateCcw size={16} stroke-width={2.5} />
            Retry
          </button>

          <Show when={nextLesson}>
            <Link
              to={nextLesson!}
              class="no-underline"
              onClick={() => completeModule(props.moduleId)}
            >
              <button
                type="button"
                class="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-dynamic-accent px-8 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:brightness-110"
                style={{
                  "box-shadow":
                    "0 8px 20px -4px color-mix(in srgb, var(--dynamic-accent) 30%, transparent)",
                }}
              >
                Next Lesson
              </button>
            </Link>
          </Show>
        </Show>
      </Show>
    </div>
  )
}
