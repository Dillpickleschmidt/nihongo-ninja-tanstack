import { createFileRoute } from "@tanstack/solid-router"
import { useQuery } from "@tanstack/solid-query"
import { createMemo, For, onCleanup, onMount, Show, type JSX } from "solid-js"
import { Dynamic } from "solid-js/web"
import { Check, Search, Sparkle, X } from "lucide-solid"
import {
  getModuleIcon,
  getModuleIconClasses,
} from "@/data/utils/module-helpers"
import { cn } from "@/utils"
import { ActiveLearningPathBackgroundMedia } from "@/features/backgrounds/components/ActiveLearningPathBackgroundMedia"
import {
  KanjiAnimation,
  type KanjiAnimationRef,
} from "@/components/KanjiAnimation"
import { kanjiSvgQueryOptions } from "@/query/query-options"
import { processSvgString } from "@/utils/svg-processor"

export const Route = createFileRoute("/_home/tool-card-previews")({
  loader: ({ context }) => {
    context.queryClient.prefetchQuery(kanjiSvgQueryOptions("忍"))
  },
  component: ToolCardPreviewsRoute,
})

type PreviewScene = {
  name: string
  caption: string
  render: () => JSX.Element
}

type ToolPreview = {
  id: string
  title: string
  subtitle: string
  description: string
  moduleType: string
  tags: string[]
  scenes: PreviewScene[]
}

type PathState = "active" | "idle"
type ChapterState = "done" | "active" | "locked"
type ModuleState = "done" | "active" | "next" | "locked" | "completing"

const toolPreviews: ToolPreview[] = [
  {
    id: "learning-path",
    title: "Learning Path",
    subtitle: "Night school field guide",
    description:
      "Follow a structured path through lessons, vocabulary, and grammar",
    moduleType: "lesson",
    tags: ["All"],
    scenes: [
      {
        name: "Paths",
        caption: "choose a course",
        render: () => <LearningPathPathsScene />,
      },
      {
        name: "Chapters",
        caption: "pick a chapter",
        render: () => <LearningPathChaptersScene />,
      },
      {
        name: "Modules",
        caption: "follow the stack",
        render: () => <LearningPathModulesScene />,
      },
      {
        name: "Progress",
        caption: "complete one",
        render: () => <LearningPathProgressScene />,
      },
      {
        name: "Overview",
        caption: "progress carries forward",
        render: () => <LearningPathOverviewScene />,
      },
    ],
  },
  {
    id: "sentence-practice",
    title: "Sentence Practice",
    subtitle: "Amber correction desk",
    description: "Practice reading and understanding full Japanese sentences",
    moduleType: "sentence-practice",
    tags: ["Writing", "Grammar", "Vocabulary"],
    scenes: [
      {
        name: "Answering",
        caption: "near miss input",
        render: () => <SentenceAnsweringScene />,
      },
      {
        name: "Feedback",
        caption: "compare answers",
        render: () => <SentenceFeedbackScene />,
      },
      {
        name: "Continue",
        caption: "progress advances",
        render: () => <SentenceContinueScene />,
      },
    ],
  },
  {
    id: "vocab-practice",
    title: "Vocabulary Practice",
    subtitle: "Orange memory forge",
    description: "Master words with spaced repetition flashcards",
    moduleType: "vocab-practice",
    tags: ["Vocabulary"],
    scenes: [
      {
        name: "Kanji",
        caption: "prerequisite intro",
        render: () => <VocabKanjiIntroScene />,
      },
      {
        name: "Unlock",
        caption: "word becomes available",
        render: () => <VocabUnlockScene />,
      },
      {
        name: "Choice",
        caption: "recognition first",
        render: () => <VocabChoiceScene />,
      },
      {
        name: "Write",
        caption: "recall next",
        render: () => <VocabWriteScene />,
      },
      {
        name: "Cleared",
        caption: "answered correctly",
        render: () => <VocabClearedScene />,
      },
    ],
  },
]

const paths: Array<{
  label: string
  image: string
  state: PathState
  progress: number
}> = [
  {
    label: "JFZ",
    image: "/img/backgrounds/japanese-gate.png",
    state: "active",
    progress: 4,
  },
  {
    label: "Genki",
    image: "/img/backgrounds/clay-banks-hwLAI5lRhdM-unsplash.jpg",
    state: "idle",
    progress: 2,
  },
  {
    label: "Custom",
    image: "/img/backgrounds/morning_village_by_k_jackson_katss_djrsova.jpg",
    state: "idle",
    progress: 1,
  },
]

const chapters: Array<{
  label: string
  image: string
  state: ChapterState
  progress: number
}> = [
  {
    label: "Ch. 1",
    image: "/img/backgrounds/japanese-gate.png",
    state: "done",
    progress: 5,
  },
  {
    label: "Ch. 2",
    image: "/img/backgrounds/red-temple.jpg",
    state: "active",
    progress: 3,
  },
  {
    label: "Ch. 3",
    image: "/img/backgrounds/morning_village_by_k_jackson_katss_djrsova.jpg",
    state: "locked",
    progress: 0,
  },
]

const moduleRows: Array<{ type: string; state: ModuleState; width: string }> = [
  { type: "lesson", state: "done", width: "w-16" },
  { type: "vocab", state: "done", width: "w-20" },
  { type: "grammar-notes", state: "done", width: "w-14" },
  { type: "sentence-practice", state: "active", width: "w-24" },
  { type: "vocab-practice", state: "next", width: "w-16" },
  { type: "worksheet", state: "locked", width: "w-20" },
]

const sentencePatterns = [
  { state: "done", width: "w-24" },
  { state: "active", width: "w-32" },
  { state: "idle", width: "w-20" },
]

const DOTS = [0, 1, 2, 3, 4, 5]

function ToolCardPreviewsRoute() {
  return (
    <main class="relative min-h-screen text-white">
        <div class="mx-auto max-w-[1920px] px-6 pt-12 pb-32">
          <header class="mb-10 max-w-3xl">
            <div class="mb-3 flex items-center gap-3">
              <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-(--landing-accent)">
                preview
              </span>
              <span class="h-px flex-1 bg-gradient-to-r from-(--landing-accent)/35 to-transparent" />
              <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
                dashboard tool cards
              </span>
            </div>
            <h1 class="font-excalifont text-4xl">Tool Card Previews</h1>
            <p class="mt-3 font-excalifont text-white/55">
              Static storyboard frames for animated dashboard cards.
            </p>
          </header>

          <div class="space-y-14">
            <For each={toolPreviews}>
              {(preview) => <ToolPreviewSection preview={preview} />}
            </For>
          </div>
        </div>
    </main>
  )
}

function ToolPreviewSection(props: { preview: ToolPreview }) {
  return (
    <section>
      <div class="mb-5 flex items-end justify-between gap-6">
        <div>
          <h2 class="font-excalifont text-2xl text-white">
            {props.preview.title}
          </h2>
          <p class="mt-1 text-sm text-white/45">{props.preview.subtitle}</p>
        </div>
        <div class="hidden h-px flex-1 bg-gradient-to-r from-white/10 to-transparent md:block" />
      </div>

      <div class="-mx-6 overflow-x-auto px-6 pb-6">
        <div class="flex min-w-fit gap-4 pb-2">
          <For each={props.preview.scenes}>
            {(scene, index) => (
              <PreviewSceneFrame
                preview={props.preview}
                scene={scene}
                number={index() + 1}
              />
            )}
          </For>
        </div>
      </div>
    </section>
  )
}

function PreviewSceneFrame(props: {
  preview: ToolPreview
  scene: PreviewScene
  number: number
}) {
  return (
    <div class="flex w-[380px] shrink-0 flex-col">
      <div class="mb-3 flex items-baseline gap-3 px-1">
        <span class="font-mono text-[10px] tabular-nums tracking-[0.2em] text-(--landing-accent)">
          {String(props.number).padStart(2, "0")}
        </span>
        <span class="font-excalifont text-sm text-white">
          {props.scene.name}
        </span>
        <span class="ml-auto font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
          {props.scene.caption}
        </span>
      </div>

      <DashboardCardFrame preview={props.preview}>
        {props.scene.render()}
      </DashboardCardFrame>
    </div>
  )
}

function DashboardCardFrame(props: {
  preview: ToolPreview
  children: JSX.Element
}) {
  const Icon = getModuleIcon(props.preview.moduleType)

  return (
    <div class="group overflow-hidden rounded-2xl border border-white/5 bg-white/2">
      <div class="relative aspect-[16/10] overflow-hidden">
        {props.children}
        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-300 group-hover:opacity-65" />
        <div class="pointer-events-none absolute inset-x-0 bottom-0 p-4">
          <div class="flex items-center gap-2">
            <Dynamic
              component={Icon}
              class={`size-4 ${getModuleIconClasses(props.preview.moduleType)}`}
            />
            <h3 class="font-semibold text-white">{props.preview.title}</h3>
          </div>
          <p class="mt-1 line-clamp-2 text-sm text-white/50">
            {props.preview.description}
          </p>
        </div>
        <Show when={props.preview.tags.length}>
          <div class="absolute right-2 bottom-2 flex flex-wrap justify-end gap-1">
            <For each={props.preview.tags}>
              {(tag) => (
                <span class="rounded-full bg-background/80 px-1.5 py-0.5 font-excalifont text-[10px] text-white/60">
                  {tag}
                </span>
              )}
            </For>
          </div>
        </Show>
      </div>
    </div>
  )
}

function LearningPathPathsScene() {
  return (
    <LearningPathBackdrop>
      <ContextLabel primary="Learning Paths" />
      <div class="absolute left-5 right-5 top-10 grid grid-cols-[1.15fr_.85fr] gap-2.5">
        <PathCard path={paths[0]} featured />
        <div class="grid gap-2.5">
          <PathCard path={paths[1]} />
          <PathCard path={paths[2]} />
        </div>
      </div>
    </LearningPathBackdrop>
  )
}

function LearningPathChaptersScene() {
  return (
    <LearningPathBackdrop>
      <ContextLabel primary="JFZ" secondary="Chapters" />
      <div class="absolute left-5 right-5 top-10 grid grid-cols-3 gap-2.5">
        <For each={chapters}>
          {(chapter) => <ChapterCard chapter={chapter} />}
        </For>
      </div>
    </LearningPathBackdrop>
  )
}

function LearningPathModulesScene() {
  return (
    <LearningPathBackdrop>
      <ContextLabel primary="Chapter 2" counter="3 / 6" />
      <ModulePanel progress={3} />
    </LearningPathBackdrop>
  )
}

function LearningPathProgressScene() {
  const completed = moduleRows.map((row, index) =>
    index === 3
      ? { ...row, state: "completing" as const }
      : index === 4
        ? { ...row, state: "active" as const }
        : row,
  )

  return (
    <LearningPathBackdrop>
      <ContextLabel primary="Chapter 2" counter="4 / 6" counterSuccess />
      <ModulePanel progress={4} rows={completed} celebrate />
    </LearningPathBackdrop>
  )
}

function LearningPathOverviewScene() {
  return (
    <LearningPathBackdrop>
      <ContextLabel primary="JFZ" secondary="Path" counter="13 / 30" counterSuccess />
      <div class="absolute left-5 top-10 w-[120px]">
        <PathCard path={paths[0]} compact />
      </div>
      <div class="absolute left-[152px] right-5 top-10 grid grid-cols-3 gap-2">
        <ChapterCard chapter={chapters[0]} compact />
        <ChapterCard chapter={{ ...chapters[1], progress: 4 }} compact />
        <ChapterCard chapter={chapters[2]} compact />
      </div>
      <div class="absolute left-5 right-5 top-[128px] h-1 overflow-hidden rounded-full bg-white/10">
        <div class="h-full w-[43%] rounded-full bg-emerald-400" />
      </div>
    </LearningPathBackdrop>
  )
}

function LearningPathBackdrop(props: { children: JSX.Element }) {
  return (
    <div class="absolute inset-0 overflow-hidden bg-[#0d110f]">
      <ActiveBackgroundUnderlay />
      <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(17,23,19,.68)_0%,rgba(13,14,13,.66)_48%,rgba(13,21,20,.74)_100%)]" />
      <div class="absolute inset-0 bg-[radial-gradient(80%_70%_at_16%_0%,rgba(34,197,94,0.11),transparent_64%)]" />
      <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-(--landing-accent)/25 to-transparent" />
      {props.children}
    </div>
  )
}

function ActiveBackgroundUnderlay() {
  return (
    <ActiveLearningPathBackgroundMedia class="absolute inset-0 opacity-80 blur-px" />
  )
}

function ContextLabel(props: {
  primary: string
  secondary?: string
  counter?: string
  counterSuccess?: boolean
}) {
  return (
    <div class="absolute left-4 right-4 top-3 z-10 flex items-center gap-2">
      <span class="font-excalifont text-[9px] uppercase tracking-[0.25em] text-white/45">
        {props.primary}
      </span>
      <Show when={props.secondary}>
        <span class="text-[9px] text-white/25">/</span>
        <span class="font-excalifont text-[9px] uppercase tracking-[0.25em] text-(--landing-accent)">
          {props.secondary}
        </span>
      </Show>
      <div class="h-px flex-1 bg-gradient-to-r from-(--landing-accent)/22 to-transparent" />
      <Show when={props.counter}>
        {(counter) => <Counter value={counter()} success={props.counterSuccess} />}
      </Show>
    </div>
  )
}

function Counter(props: { value: string; success?: boolean }) {
  return (
    <span
      class={cn(
        "font-mono text-[9px] tabular-nums",
        props.success ? "text-emerald-400" : "text-white/45",
      )}
    >
      {props.value}
    </span>
  )
}

function PathCard(props: {
  path: (typeof paths)[number]
  featured?: boolean
  compact?: boolean
}) {
  const active = () => props.path.state === "active"

  return (
    <div
      class={cn(
        "relative overflow-hidden rounded-xl border bg-white/3.5",
        props.featured ? "h-[112px]" : props.compact ? "h-[70px]" : "h-[51px]",
        active()
          ? "border-(--landing-accent)/70"
          : "border-white/10 opacity-72",
      )}
    >
      <PreviewImage src={props.path.image} />
      <Show when={active()}>
        <div class="absolute left-2 top-2 rounded-full bg-(--landing-accent) px-1.5 py-px text-[8px] font-bold uppercase tracking-[0.12em] text-black">
          Active
        </div>
      </Show>
      <div class="absolute bottom-2 left-2 right-2">
        <div class="mb-1 text-[10px] font-medium leading-none text-white/90">
          {props.path.label}
        </div>
        <ProgressDots total={5} filled={props.path.progress} />
      </div>
    </div>
  )
}

function ChapterCard(props: {
  chapter: (typeof chapters)[number]
  compact?: boolean
}) {
  const state = () => props.chapter.state

  return (
    <div
      class={cn(
        "relative overflow-hidden rounded-xl border bg-white/3.5",
        props.compact ? "h-[70px]" : "h-[102px]",
        state() === "active"
          ? "border-(--landing-accent)/70"
          : state() === "done"
            ? "border-emerald-400/50"
            : "border-white/10 opacity-45",
      )}
    >
      <PreviewImage src={props.chapter.image} />
      <Show when={state() === "done"}>
        <div class="absolute right-2 top-2 grid size-4 place-items-center rounded-full bg-emerald-400 text-black">
          <Check class="size-3" stroke-width={4} />
        </div>
      </Show>
      <Show when={state() === "active"}>
        <div class="absolute left-2 top-2 rounded-full bg-(--landing-accent) px-1.5 py-px text-[8px] font-bold uppercase tracking-[0.12em] text-black">
          Now
        </div>
      </Show>
      <div class="absolute bottom-2 left-2 right-2">
        <div class="mb-1 text-[10px] font-medium leading-none text-white/90">
          {props.chapter.label}
        </div>
        <ProgressDots total={5} filled={props.chapter.progress} />
      </div>
    </div>
  )
}

function PreviewImage(props: { src: string }) {
  return (
    <>
      <img
        src={props.src}
        alt=""
        class="absolute inset-0 size-full object-cover opacity-54 saturate-[.85]"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/84 via-black/45 to-black/12" />
    </>
  )
}

function ModulePanel(props: {
  progress: number
  rows?: typeof moduleRows
  celebrate?: boolean
}) {
  const rows = () => props.rows ?? moduleRows

  return (
    <div class="absolute left-7 right-7 top-9 rounded-2xl border border-white/10 bg-white/4.5 p-3.5 backdrop-blur-md">
      <div class="mb-3 flex items-center justify-between">
        <div class="flex gap-1.5">
          <div class="h-2.5 w-12 rounded-full bg-white/24" />
          <div class="h-2.5 w-5 rounded-full bg-(--landing-accent)/65" />
        </div>
        <div class="w-24">
          <ProgressDots total={6} filled={props.progress} />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <For each={rows()}>{(row) => <ModuleRow row={row} />}</For>
      </div>
      <Show when={props.celebrate}>
        <Sparkle
          class="absolute left-[49%] top-[53%] size-5 -translate-x-1/2 -translate-y-1/2 text-emerald-300 drop-shadow-[0_0_8px_rgba(110,231,183,.75)]"
          fill="currentColor"
          stroke-width={0}
        />
      </Show>
    </div>
  )
}

function ModuleRow(props: {
  row: { type: string; state: ModuleState; width: string }
}) {
  const ModuleIcon = getModuleIcon(props.row.type)
  const done = () =>
    props.row.state === "done" || props.row.state === "completing"

  return (
    <div
      class={cn(
        "relative flex h-8 items-center gap-2 overflow-hidden rounded-lg border bg-white/3.5 px-2",
        done() && "border-emerald-400/40 bg-emerald-400/10",
        props.row.state === "active" &&
          "border-(--landing-accent)/70 bg-(--landing-accent)/10",
        props.row.state === "next" && "border-white/14",
        props.row.state === "locked" && "border-white/8 opacity-55",
      )}
    >
      <Show when={props.row.state === "completing"}>
        <div class="absolute inset-0 bg-emerald-300/10" />
      </Show>
      <div class="relative z-10 grid size-5 shrink-0 place-items-center">
        <Show
          when={done()}
          fallback={
            <ModuleIcon class={`size-4 ${getModuleIconClasses(props.row.type)}`} />
          }
        >
          <Check class="size-4 text-emerald-300" />
        </Show>
      </div>
      <div
        class={cn(
          "relative z-10 h-2 rounded-full",
          props.row.width,
          props.row.state === "active"
            ? "bg-(--landing-accent)/70"
            : "bg-white/24",
        )}
      />
      <div
        class={cn(
          "relative z-10 ml-auto size-1.5 rounded-full",
          done()
            ? "bg-emerald-300"
            : props.row.state === "active"
              ? "bg-(--landing-accent)"
              : "bg-white/18",
        )}
      />
    </div>
  )
}

function SentencePatternsScene() {
  return (
    <SentenceBackdrop>
      <SentenceContextLabel primary="Sentence Practice" />
      <div class="absolute right-5 top-10 flex h-8 w-28 items-center gap-2 rounded-lg border border-white/10 bg-white/4 px-2">
        <Search class="size-3.5 text-white/35" />
        <div class="h-2 w-16 rounded-full bg-white/18" />
      </div>
      <div class="absolute left-5 top-10 w-[210px]">
        <div class="mb-2 flex items-center gap-2">
          <div class="grid size-6 place-items-center rounded-md bg-amber-400/15 text-xs font-bold text-amber-300">
            3
          </div>
          <div class="h-2.5 w-20 rounded-full bg-white/22" />
          <span class="text-[10px] text-white/30">· 5 patterns</span>
        </div>
        <div class="space-y-2 border-l-2 border-white/12 pl-3">
          <For each={sentencePatterns}>
            {(pattern) => <SentencePatternRow pattern={pattern} />}
          </For>
        </div>
      </div>
    </SentenceBackdrop>
  )
}

function SentenceAnsweringScene() {
  return (
    <SentenceBackdrop>
      <SentenceSessionHeader progress={4} total={20} />
      <div class="absolute left-6 right-6 top-10 space-y-2">
        <EnglishPrompt />
        <div class="rounded-xl border border-white/10 bg-transparent p-2 font-japanese text-[16px] leading-relaxed text-white shadow-[0_0_0_2px_rgba(245,158,11,0.22)]">
          給料をもらうたら、買い物に
          <span class="ml-1 inline-block h-5 w-px translate-y-1 bg-amber-300" />
        </div>
      </div>
    </SentenceBackdrop>
  )
}

function SentenceFeedbackScene() {
  return (
    <SentenceBackdrop>
      <SentenceSessionHeader progress={4} total={20} />
      <div class="absolute left-6 right-6 top-10 space-y-2">
        <FeedbackLabel>Your answer:</FeedbackLabel>
        <div class="flex items-center gap-1.5">
          <SentenceAnswerBox>
            給料をもら<ErrorText>う</ErrorText>たら、買い物に行きます
          </SentenceAnswerBox>
          <div class="shrink-0 px-1 text-lg font-bold leading-none text-rose-400">
            ×
          </div>
        </div>

        <FeedbackLabel>Correct answer:</FeedbackLabel>
        <SentenceAnswerBox correct>
          給料をもら<CorrectText>った</CorrectText>ら、買い物に行きます
        </SentenceAnswerBox>
        <div class="text-xs text-white/30">Similarity: 86%</div>
      </div>
    </SentenceBackdrop>
  )
}

function SentenceContinueScene() {
  return (
    <SentenceBackdrop>
      <SentenceSessionHeader progress={5} total={20} success />
      <div class="absolute left-6 right-6 top-11 space-y-2">
        <SentenceAnswerBox correct large>
          給料をもらったら、買い物に行きます
        </SentenceAnswerBox>
        <div class="flex justify-end">
          <NextPill />
        </div>
        <div class="-mt-3 space-y-1">
          <div class="text-xs font-medium text-white/45">
            Alternative Answers
          </div>
          <div class="rounded-xl border border-white/10 bg-white/4 px-2 py-1.5 font-japanese text-[14px] text-white/68">
            給料をもらったら、買い物に行く
          </div>
        </div>
      </div>
    </SentenceBackdrop>
  )
}

function SentenceBackdrop(props: { children: JSX.Element }) {
  return (
    <div class="absolute inset-0 overflow-hidden bg-[#15100a]">
      <ActiveBackgroundUnderlay />
      <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(23,17,10,.68)_0%,rgba(16,16,16,.66)_48%,rgba(21,16,12,.74)_100%)]" />
      <div class="absolute inset-0 bg-[radial-gradient(80%_70%_at_16%_0%,rgba(245,158,11,0.14),transparent_64%)]" />
      <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />
      {props.children}
    </div>
  )
}

function SentenceAnswerBox(props: {
  children: JSX.Element
  correct?: boolean
  large?: boolean
}) {
  return (
    <div
      class={cn(
        "rounded-xl p-2 font-japanese leading-relaxed text-white",
        props.large ? "text-[17px]" : "text-[16px]",
        props.correct
          ? "border border-emerald-400/45 bg-emerald-400/10"
          : "flex-1 border border-white/10 bg-white/4.5",
      )}
    >
      {props.children}
    </div>
  )
}

function ErrorText(props: { children: string }) {
  return (
    <span class="rounded-md border-2 border-black bg-rose-500 px-0.5 font-medium text-black">
      {props.children}
    </span>
  )
}

function CorrectText(props: { children: string }) {
  return (
    <span class="rounded-md border-2 border-black bg-emerald-500 px-0.5 font-medium text-black">
      {props.children}
    </span>
  )
}

function NextPill() {
  return (
    <div class="flex w-fit items-center gap-1.5 rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold text-black">
      <Check class="size-3" stroke-width={4} />
      Next
    </div>
  )
}

function SentenceContextLabel(props: { primary: string }) {
  return (
    <div class="absolute left-4 right-4 top-3 z-10 flex items-center gap-2">
      <span class="font-excalifont text-[9px] uppercase tracking-[0.25em] text-amber-300/75">
        {props.primary}
      </span>
      <div class="h-px flex-1 bg-gradient-to-r from-amber-300/22 to-transparent" />
    </div>
  )
}

function SentenceSessionHeader(props: {
  progress: number
  total: number
  success?: boolean
}) {
  return (
    <div class="absolute left-5 right-5 top-4 flex items-center gap-2">
      <X class="size-4 text-white/25" />
      <div class="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
        <div
          class={cn(
            "h-full rounded-full",
            props.success ? "bg-emerald-400/85" : "bg-amber-400/80",
          )}
          style={{ width: `${(props.progress / props.total) * 100}%` }}
        />
      </div>
      <span class="font-mono text-[10px] text-white/28">
        {props.progress}/{props.total}
      </span>
    </div>
  )
}

function SentencePatternRow(props: {
  pattern: { state: string; width: string }
}) {
  const active = () => props.pattern.state === "active"
  const done = () => props.pattern.state === "done"

  return (
    <div
      class={cn(
        "relative flex h-9 items-center gap-2 rounded-lg border bg-white/3.5 px-2",
        active() ? "border-amber-300/60 bg-amber-300/10" : "border-white/10",
        done() && "border-emerald-400/35 bg-emerald-400/8",
      )}
    >
      <div
        class={cn(
          "absolute -left-[18px] size-2.5 rounded-full border",
          active()
            ? "border-amber-300 bg-amber-300"
            : done()
              ? "border-emerald-400 bg-emerald-400"
              : "border-white/20 bg-[#15100a]",
        )}
      />
      <div
        class={cn(
          "h-2 rounded-full",
          props.pattern.width,
          active() ? "bg-amber-300/70" : "bg-white/22",
        )}
      />
      <Dynamic
        component={getModuleIcon("sentence-practice")}
        class="ml-auto size-4 text-amber-400"
      />
    </div>
  )
}

function EnglishPrompt() {
  return (
    <div>
      <p class="text-base leading-snug text-white/72">
        After I get paid, I'll go shopping.
      </p>
    </div>
  )
}

function FeedbackLabel(props: { children: string }) {
  return <div class="text-xs font-medium text-white/50">{props.children}</div>
}

function VocabKanjiIntroScene() {
  return (
    <VocabBackdrop>
      <VocabSessionHeader progress={1} total={12} />
      <div class="absolute inset-x-0 top-9 flex flex-col items-center">
        <span class="mb-1 rounded-full bg-orange-400/15 px-2 py-0.5 text-[10px] font-medium text-orange-300">
          kanji
        </span>
        <LoopingKanji character="忍" />
        <div class="-mt-1 text-sm font-medium text-orange-300">
          endure, stealth
        </div>
      </div>
    </VocabBackdrop>
  )
}

function VocabUnlockScene() {
  return (
    <VocabBackdrop>
      <VocabSessionHeader progress={2} total={12} />
      <div class="absolute left-6 right-6 top-10 grid grid-cols-[0.8fr_1.2fr] gap-3">
        <div class="rounded-2xl border border-emerald-400/45 bg-emerald-400/10 p-3 text-center">
          <div class="mb-2 flex items-center justify-between">
            <span class="text-[10px] text-white/40">kanji</span>
            <Check class="size-4 text-emerald-300" />
          </div>
          <div class="font-japanese text-5xl leading-none text-white">忍</div>
          <div class="mt-2 text-xs text-emerald-300">learned</div>
        </div>
        <div class="rounded-2xl border border-orange-300/55 bg-orange-300/10 p-3">
          <div class="mb-2 flex items-center justify-between">
            <span class="text-[10px] text-white/40">vocabulary</span>
            <span class="rounded-full bg-orange-300 px-2 py-0.5 text-[9px] font-bold text-black">
              Unlocked
            </span>
          </div>
          <div class="font-japanese text-4xl leading-none text-white">忍者</div>
          <div class="mt-2 text-sm text-white/55">ninja</div>
        </div>
      </div>
    </VocabBackdrop>
  )
}

function VocabChoiceScene() {
  return (
    <VocabBackdrop>
      <VocabSessionHeader progress={3} total={12} />
      <VocabPracticePanel label="What does this mean?">
        <div class="grid grid-cols-2 gap-x-3 gap-y-2.5 px-3 py-1">
          <ChoiceButton state="correct">ninja ✓</ChoiceButton>
          <ChoiceButton>teacher</ChoiceButton>
          <ChoiceButton>station</ChoiceButton>
          <ChoiceButton>salary</ChoiceButton>
        </div>
      </VocabPracticePanel>
    </VocabBackdrop>
  )
}

function VocabWriteScene() {
  return (
    <VocabBackdrop>
      <VocabSessionHeader progress={4} total={12} />
      <VocabPracticePanel label="Type the meaning">
        <div class="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-center text-lg font-medium text-white shadow-[0_0_0_2px_rgba(249,115,22,0.18)]">
          ninja
          <span class="ml-1 inline-block h-5 w-px translate-y-1 bg-orange-300" />
        </div>
      </VocabPracticePanel>
    </VocabBackdrop>
  )
}

function VocabClearedScene() {
  return (
    <VocabBackdrop>
      <VocabSessionHeader progress={5} total={12} success />
      <VocabPracticePanel label="Correct!" success>
        <div class="rounded-2xl border border-emerald-400/50 bg-emerald-400/10 px-5 py-3 text-center text-lg font-medium text-emerald-300">
          ninja
        </div>
        <div class="flex justify-end">
          <div class="flex w-fit items-center gap-1.5 rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold text-black">
            <Check class="size-3" stroke-width={4} />
            Cleared
          </div>
        </div>
      </VocabPracticePanel>
    </VocabBackdrop>
  )
}

function VocabBackdrop(props: { children: JSX.Element }) {
  return (
    <div class="absolute inset-0 overflow-hidden bg-[#140f0a]">
      <ActiveBackgroundUnderlay />
      <div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(23,17,12,.68)_0%,rgba(16,16,16,.66)_48%,rgba(21,16,10,.74)_100%)]" />
      <div class="absolute inset-0 bg-[radial-gradient(80%_70%_at_16%_0%,rgba(249,115,22,0.14),transparent_64%)]" />
      <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300/30 to-transparent" />
      {props.children}
    </div>
  )
}

function VocabSessionHeader(props: {
  progress: number
  total: number
  success?: boolean
}) {
  return (
    <div class="absolute left-5 right-5 top-4 flex items-center gap-2">
      <X class="size-4 text-white/25" />
      <div class="h-1.5 flex-1 overflow-hidden rounded-full bg-white/8">
        <div
          class={cn(
            "h-full rounded-full",
            props.success ? "bg-emerald-400/85" : "bg-orange-400/80",
          )}
          style={{ width: `${(props.progress / props.total) * 100}%` }}
        />
      </div>
      <span class="font-mono text-[10px] text-white/28">
        {props.progress}/{props.total}
      </span>
    </div>
  )
}

function LoopingKanji(props: { character: string }) {
  const svgQuery = useQuery(() => kanjiSvgQueryOptions(props.character))
  const processedSvg = createMemo(() => {
    const svg = svgQuery.data
    if (!svg) return null
    return processSvgString(svg, {
      size: 104,
      strokeColor: "color-mix(in srgb, var(--color-primary) 80%, transparent)",
      strokeWidth: 3,
      showGrid: true,
      autostart: true,
      showNumbers: true,
      showStartDots: true,
      showDirectionLines: false,
    })
  })

  return (
    <Show
      when={processedSvg()}
      fallback={
        <div class="grid size-26 place-items-center font-japanese text-7xl text-white">
          {props.character}
        </div>
      }
    >
      {(svg) => (
        <KanjiAnimation
          processedSvgContent={svg()}
          styleSettings={{
            size: 104,
            strokeColor:
              "color-mix(in srgb, var(--color-primary) 80%, transparent)",
            strokeWidth: 3,
            showGrid: true,
          }}
          displaySettings={{
            numbers: true,
            startDots: true,
            directionLines: false,
          }}
          animationSettings={{ speed: 0.75, autostart: true }}
        >
          {(ref) => <KanjiLoopControl animationRef={ref} />}
        </KanjiAnimation>
      )}
    </Show>
  )
}

function KanjiLoopControl(props: { animationRef: KanjiAnimationRef }) {
  onMount(() => {
    const interval = window.setInterval(() => props.animationRef.reset(), 3200)
    onCleanup(() => window.clearInterval(interval))
  })
  return null
}

function VocabQuestion(props: { label: string; success?: boolean }) {
  return (
    <div class="absolute inset-x-0 top-9 flex flex-col items-center gap-1">
      <span
        class={cn(
          "text-sm",
          props.success ? "text-emerald-300" : "text-white/40",
        )}
      >
        {props.label}
      </span>
      <span class="rounded-full bg-orange-400/15 px-2 py-0.5 text-[10px] font-medium text-orange-300">
        vocabulary
      </span>
      <div class="font-japanese text-4xl font-medium text-white">忍者</div>
    </div>
  )
}

function VocabPracticePanel(props: {
  label: string
  success?: boolean
  children: JSX.Element
}) {
  return (
    <div class="absolute left-10 right-10 top-10 space-y-2">
      <div class="flex items-center justify-between">
        <div>
          <div
            class={cn(
              "text-sm",
              props.success ? "text-emerald-300" : "text-white/40",
            )}
          >
            {props.label}
          </div>
          <div class="mt-1 w-fit rounded-full bg-orange-400/15 px-2 py-0.5 text-[10px] font-medium text-orange-300">
            vocabulary
          </div>
        </div>
        <div class="font-japanese text-4xl font-medium leading-none text-white">
          忍者
        </div>
      </div>
      {props.children}
    </div>
  )
}

function ChoiceButton(props: { children: JSX.Element; state?: "correct" }) {
  const tint = () =>
    props.state === "correct" ? "rgb(16,185,129)" : "rgb(60,60,60)"

  return (
    <div
      class="relative mb-1 rounded-lg px-3 py-1.5 text-center text-sm font-bold"
      style={{
        background: `color-mix(in srgb, ${tint()} 50%, rgb(255,248,248))`,
        border: `1px solid color-mix(in srgb, ${tint()} 75%, rgb(140,140,140))`,
        color: `color-mix(in srgb, ${tint()} 10%, rgb(25,20,18))`,
        "box-shadow": `0 0.22em 0 color-mix(in srgb, ${tint()} 70%, rgb(255,230,230)), 0 0.22em 0 1px color-mix(in srgb, ${tint()} 75%, rgb(140,140,140))`,
      }}
    >
      {props.children}
    </div>
  )
}

function ProgressDots(props: { total: number; filled: number }) {
  return (
    <div class="flex gap-[3px]">
      <For each={DOTS.slice(0, props.total)}>
        {(dot) => (
          <div
            class={cn(
              "h-[3px] flex-1 rounded-full",
              dot < props.filled ? "bg-emerald-400" : "bg-white/16",
            )}
          />
        )}
      </For>
    </div>
  )
}
