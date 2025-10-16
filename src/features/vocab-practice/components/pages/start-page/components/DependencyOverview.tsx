import { For, Show, createMemo, createSignal } from "solid-js"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import {
  practiceHierarchyQueryOptions,
  moduleVocabularyQueryOptions,
  practiceModuleFSRSCardsQueryOptions,
  practiceDueFSRSCardsQueryOptions,
} from "@/features/vocab-practice/query/query-options"
import { useVocabPracticeContext } from "@/features/vocab-practice/context/VocabPracticeContext"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Loader2, Info } from "lucide-solid"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import type { UseQueryResult } from "@tanstack/solid-query"
import type { DefaultError } from "@tanstack/query-core"

type DependencyOverviewProps = {
  class?: string
}

/**
 * DependencyOverview
 *
 * Minimal first draft visualization for:
 * - Core counts: Vocabulary, Kanji, Radicals (scoped to this practice module)
 * - Tabs:
 *   - Vocabulary (vocab grouped with kanji chips)
 *   - Kanji → Radicals (kanji cards with radical chips and dependent vocab count)
 *
 * Notes:
 * - In live-service or spellings mode, hierarchy will be flat (no kanji/radicals).
 * - This component reuses cached queries from ModuleStartPage and is safe to mount alongside it.
 */
export default function DependencyOverview(props: DependencyOverviewProps) {
  const {
    moduleId,
    mode,
    activeService,
    settingsQuery,
    userId,
    prerequisitesEnabled,
  } = useVocabPracticeContext()

  // Queries (will hit cache if ModuleStartPage already prefetched)
  const vocabularyQuery = useCustomQuery(() =>
    moduleVocabularyQueryOptions(moduleId!),
  )

  const hierarchyQuery = useCustomQuery(() => {
    const vocabData = vocabularyQuery.data
    // Skip hierarchy when prerequisites are disabled or no vocab data
    if (!vocabData || !prerequisitesEnabled()) {
      return {
        queryKey: ["disabled-module-hierarchy"] as const,
        queryFn: () =>
          Promise.resolve({ vocabulary: [], kanji: [], radicals: [] }),
        enabled: false,
      }
    }

    return practiceHierarchyQueryOptions(
      moduleId!,
      vocabData,
      mode,
      settingsQuery.data!["override-settings"],
      activeService() !== "local",
    )
  })

  // Extract all slugs for FSRS queries
  const allHierarchySlugs = createMemo(() => {
    const h = hierarchyQuery.data
    if (!h) return []
    const slugs = new Set<string>()
    h.vocabulary?.forEach((v: any) => slugs.add(v.word))
    h.kanji?.forEach((k: any) => slugs.add(k.kanji))
    h.radicals?.forEach((r: any) => slugs.add(r.radical))
    return Array.from(slugs)
  })

  // FSRS queries - only enabled when hierarchy is available and using local service
  const fsrsCardsQuery = useCustomQuery(() => {
    const slugs = allHierarchySlugs()
    const hasHierarchy = !!hierarchyQuery.data

    return practiceModuleFSRSCardsQueryOptions(
      userId,
      slugs,
      hasHierarchy && activeService() === "local" && !!userId,
    )
  })

  const dueCardsQuery = useCustomQuery(() =>
    practiceDueFSRSCardsQueryOptions(
      userId,
      activeService() === "local" && !!userId,
    ),
  )

  // Create FSRS data map for efficient lookups
  const fsrsMap = createMemo(() => {
    const map = new Map<string, any>()
    if (!fsrsCardsQuery.data) return map
    for (const card of fsrsCardsQuery.data) {
      const key = `${card.type}:${card.practice_item_key}`
      map.set(key, card)
    }
    return map
  })

  // Selection filters (minimal)
  const [selectedKanji, setSelectedKanji] = createSignal<string | null>(null)
  const [selectedRadical, setSelectedRadical] = createSignal<string | null>(
    null,
  )

  // Derived data and indexes
  const vocabList = () => hierarchyQuery.data?.vocabulary
  const kanjiToRadicals = createMemo(() => {
    const map = new Map<string, string[]>()
    const h = hierarchyQuery.data
    if (!h) return map
    for (const k of h.kanji ?? []) {
      map.set(k.kanji, k.radicalComponents || [])
    }
    return map
  })
  const vocabToKanji = createMemo(() => {
    const map = new Map<string, string[]>()
    const h = hierarchyQuery.data
    if (!h) return map
    for (const v of h.vocabulary ?? []) {
      map.set(v.word, v.kanjiComponents || [])
    }
    return map
  })
  const kanjiToVocab = createMemo(() => {
    const map = new Map<string, string[]>()
    for (const [word, kanjiArr] of vocabToKanji().entries()) {
      for (const k of kanjiArr) {
        if (!map.has(k)) map.set(k, [])
        map.get(k)!.push(word)
      }
    }
    return map
  })
  const radicalToKanji = createMemo(() => {
    const map = new Map<string, string[]>()
    for (const [kanji, radicals] of kanjiToRadicals().entries()) {
      for (const r of radicals) {
        if (!map.has(r)) map.set(r, [])
        map.get(r)!.push(kanji)
      }
    }
    return map
  })
  const kanjiSet = createMemo(() => {
    const set = new Set<string>()
    const h = hierarchyQuery.data
    if (!h) return set
    for (const v of h.vocabulary ?? []) {
      for (const k of v.kanjiComponents ?? []) {
        set.add(k)
      }
    }
    return set
  })
  const radicalSet = createMemo(() => {
    const set = new Set<string>()
    for (const radicals of kanjiToRadicals().values()) {
      for (const r of radicals) set.add(r)
    }
    return set
  })

  // Calculate due counts for each item type
  const dueCounts = createMemo(():
    | { vocabulary: number; kanji: number; radicals: number; total: number }
    | undefined => {
    if (!fsrsCardsQuery.data || activeService() !== "local") {
      return undefined
    }

    const vocab = vocabList()
    if (!vocab) return undefined

    const now = new Date()
    let vocabDue = 0
    let kanjiDue = 0
    let radicalsDue = 0

    for (const v of vocab) {
      const fsrsData = fsrsMap().get(`vocabulary:${v.word}`)
      const dueDate = fsrsData?.fsrs_card?.due
      if (dueDate && new Date(dueDate) <= now) {
        vocabDue++
      }
    }

    for (const k of kanjiSet().values()) {
      const fsrsData = fsrsMap().get(`kanji:${k}`)
      const dueDate = fsrsData?.fsrs_card?.due
      if (dueDate && new Date(dueDate) <= now) {
        kanjiDue++
      }
    }

    for (const r of radicalSet().values()) {
      const fsrsData = fsrsMap().get(`radical:${r}`)
      const dueDate = fsrsData?.fsrs_card?.due
      if (dueDate && new Date(dueDate) <= now) {
        radicalsDue++
      }
    }

    return {
      vocabulary: vocabDue,
      kanji: kanjiDue,
      radicals: radicalsDue,
      total: vocabDue + kanjiDue + radicalsDue,
    }
  })

  const filteredVocabAll = createMemo(() => {
    const vocab = vocabList()
    if (!vocab) return undefined
    const kSel = selectedKanji()
    if (!kSel) return vocab
    return vocab.filter((v) => v.kanjiComponents?.includes(kSel))
  })

  const filteredKanji = createMemo(() => {
    const allKanji = Array.from(kanjiSet().values())
    const rSel = selectedRadical()
    const kSel = selectedKanji()
    let result = allKanji
    if (kSel) {
      result = result.filter((k) => k === kSel)
    }
    if (rSel) {
      result = result.filter((k) =>
        (kanjiToRadicals().get(k) || []).includes(rSel),
      )
    }
    return result
  })

  const isFlatHierarchy = () => {
    const h = hierarchyQuery.data
    if (!h) return false
    // Live service or spellings mode produce empty kanji/radicals in queryFn
    return (h.kanji?.length ?? 0) === 0 && (h.radicals?.length ?? 0) === 0
  }

  function toggleKanji(k: string) {
    setSelectedRadical(null)
    setSelectedKanji((prev) => (prev === k ? null : k))
  }

  function toggleRadical(r: string) {
    setSelectedKanji(null)
    setSelectedRadical((prev) => (prev === r ? null : r))
  }

  return (
    <div class={`space-y-4 ${props.class || ""}`}>
      {/* Title */}
      <div class="flex items-baseline justify-between">
        <h2 class="text-primary text-center text-lg font-semibold tracking-wide">
          <Show when={prerequisitesEnabled()} fallback="Module Content">
            Dependency Overview
          </Show>
        </h2>
      </div>

      {/* Loading/Error */}
      <Show
        when={!vocabularyQuery.isPending}
        fallback={
          <div class="bg-card/40 border-card-foreground/70 flex items-center justify-center rounded-xl border p-8">
            <span class="text-muted-foreground text-sm">
              <Show when={prerequisitesEnabled()} fallback="Loading vocabulary…">
                Loading dependencies…
              </Show>
            </span>
          </div>
        }
      >
        <Show
          when={!vocabularyQuery.isError}
          fallback={
            <div class="bg-destructive/10 border-destructive/40 text-destructive rounded-xl border p-4">
              Failed to load dependency data.
            </div>
          }
        >
          <Show
            when={prerequisitesEnabled()}
            fallback={
              <div class="bg-card/40 border-card-foreground/70 rounded-xl border p-4">
                <Show
                  when={vocabularyQuery.data && vocabularyQuery.data.length > 0}
                  fallback={
                    <p class="text-muted-foreground text-sm">
                      No vocabulary to display.
                    </p>
                  }
                >
                  <div class="space-y-3">
                    <For each={vocabularyQuery.data}>
                      {(vocabItem) => {
                        const fsrsData = () =>
                          fsrsMap().get(`vocabulary:${vocabItem.word}`)
                        const isDue = () => {
                          const dueDate = fsrsData()?.fsrs_card?.due
                          if (!dueDate) return false
                          return new Date(dueDate) <= new Date()
                        }

                        return (
                          <div class="border-card-foreground/40 rounded-lg border p-3">
                            <div class="flex items-start justify-between">
                              <div class="flex-1">
                                <div class="text-primary text-base font-semibold">
                                  {vocabItem.word}
                                </div>
                              </div>

                              {/* Due badge */}
                              <Show when={activeService() === "local"}>
                                <div class="flex h-full flex-col justify-between">
                                  <Show
                                    when={!fsrsCardsQuery.isPending}
                                    fallback={
                                      <span class="inline-flex h-[20px] w-[40px] rounded-full bg-indigo-500/20" />
                                    }
                                  >
                                    <Show when={isDue()}>
                                      <div class="ml-2 flex flex-col items-end gap-1">
                                        <span class="inline-flex items-center rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs font-semibold text-indigo-300 uppercase">
                                          Due
                                        </span>
                                        <Show when={fsrsData()?.fsrs_card?.due}>
                                          <div class="text-muted-foreground text-[11px]">
                                            {new Date(
                                              fsrsData()!.fsrs_card.due,
                                            ).toLocaleDateString(undefined, {
                                              weekday: "short",
                                              month: "short",
                                              day: "numeric",
                                            })}
                                          </div>
                                        </Show>
                                      </div>
                                    </Show>
                                  </Show>
                                </div>
                              </Show>
                            </div>
                          </div>
                        )
                      }}
                    </For>
                  </div>
                </Show>
              </div>
            }
          >
            <div class="grid grid-cols-3 gap-2 md:gap-3">
            <SummaryCard
              label="Vocabulary"
              query={hierarchyQuery}
              getValue={() => vocabList().length}
              onClick={() => {
                // Focus Vocabulary (Vocab → Kanji) tab
                const tabEl = document.querySelector(
                  '[data-dep-tabs="true"] [data-value="v2k"]',
                ) as HTMLButtonElement | null
                tabEl?.click()
              }}
            />
            <SummaryCard
              label="Kanji"
              query={hierarchyQuery}
              getValue={() => kanjiSet().size}
              dueCountQuery={fsrsCardsQuery}
              getDueCount={() => dueCounts()?.kanji}
              onClick={() => {
                // Focus K→R tab and clear selections
                setSelectedRadical(null)
                setSelectedKanji(null)
                const tabEl = document.querySelector(
                  '[data-dep-tabs="true"] [data-value="k2r"]',
                ) as HTMLButtonElement | null
                tabEl?.click()
              }}
            />
            <SummaryCard
              label="Radicals"
              query={hierarchyQuery}
              getValue={() => radicalSet().size}
              dueCountQuery={fsrsCardsQuery}
              getDueCount={() => dueCounts()?.radicals}
              onClick={() => {
                // Focus K→R tab and clear selections
                setSelectedRadical(null)
                setSelectedKanji(null)
                const tabEl = document.querySelector(
                  '[data-dep-tabs="true"] [data-value="k2r"]',
                ) as HTMLButtonElement | null
                tabEl?.click()
              }}
            />
          </div>

          {/* Mode note */}
          <Show when={isFlatHierarchy()}>
            <div class="text-muted-foreground bg-card/40 border-card-foreground/70 rounded-lg border p-3 text-xs">
              Kanji/Radicals are hidden for the current session configuration
              (live service or spellings mode).
            </div>
          </Show>

          {/* Tabs */}
          <Tabs defaultValue="v2k" class="w-full" data-dep-tabs="true">
            <div class="flex items-center justify-between">
              <TabsList class="h-8 bg-transparent">
                <TabsTrigger
                  value="v2k"
                  class="data-[selected]:dark:bg-card-foreground/70 h-6 px-2"
                >
                  Vocabulary
                </TabsTrigger>
                <TabsTrigger
                  value="k2r"
                  class="data-[selected]:dark:bg-card-foreground/70 h-6 px-2"
                >
                  Kanji → Radicals
                </TabsTrigger>
              </TabsList>

              {/* Selection status and clear */}
              <div class="text-muted-foreground flex items-center gap-2 text-xs">
                <Show when={selectedKanji()}>
                  <span class="inline-flex items-center gap-1">
                    Selected Kanji:
                    <Chip
                      label={selectedKanji()!}
                      color="indigo"
                      selected
                      onClick={() => setSelectedKanji(null)}
                    />
                  </span>
                </Show>
                <Show when={selectedRadical()}>
                  <span class="inline-flex items-center gap-1">
                    Selected Radical:
                    <Chip
                      label={selectedRadical()!}
                      color="purple"
                      selected
                      onClick={() => setSelectedRadical(null)}
                    />
                  </span>
                </Show>
              </div>
            </div>

            {/* Vocabulary (Vocab → Kanji) */}
            <TabsContent value="v2k" class="mt-2">
              <div class="bg-card/40 border-card-foreground/70 rounded-xl border p-4">
                <Show
                  when={!vocabularyQuery.isPending}
                  fallback={
                    <div class="flex items-center justify-center py-8">
                      <Loader2 class="h-8 w-8 animate-spin text-muted-foreground/50" />
                    </div>
                  }
                >
                  <Show
                    when={vocabularyQuery.data && vocabularyQuery.data.length > 0}
                    fallback={
                      <p class="text-muted-foreground text-sm">
                        No vocabulary to display.
                      </p>
                    }
                  >
                    <div class="space-y-3">
                      <For each={vocabularyQuery.data}>
                        {(vocabItem) => {
                          // Get kanji components from hierarchy if available
                          const kanjiComponents = () => {
                            const hierarchyVocab = vocabList()?.find(
                              (v: any) => v.word === vocabItem.word,
                            )
                            return hierarchyVocab?.kanjiComponents
                          }

                          const fsrsData = () =>
                            fsrsMap().get(`vocabulary:${vocabItem.word}`)
                          const isDue = () => {
                            const dueDate = fsrsData()?.fsrs_card?.due
                            if (!dueDate) return false
                            return new Date(dueDate) <= new Date()
                          }

                          return (
                            <div class="border-card-foreground/40 rounded-lg border p-3">
                              <div class="flex items-start justify-between">
                                <div class="flex-1">
                                  <div class="text-primary text-base font-semibold">
                                    {vocabItem.word}
                                  </div>
                                  <div class="mt-2 flex flex-wrap gap-1.5">
                                    <Show
                                      when={!hierarchyQuery.isPending}
                                      fallback={
                                        <span class="text-muted-foreground text-xs">
                                          —
                                        </span>
                                      }
                                    >
                                      <For each={kanjiComponents() || []}>
                                        {(k) => (
                                          <Chip
                                            label={k}
                                            color="indigo"
                                            selected={selectedKanji() === k}
                                            onClick={() => toggleKanji(k)}
                                          />
                                        )}
                                      </For>
                                      <Show when={!kanjiComponents()?.length}>
                                        <span class="text-muted-foreground text-xs">
                                          No kanji
                                        </span>
                                      </Show>
                                    </Show>
                                  </div>
                                </div>

                                {/* Due badge */}
                                <Show when={activeService() === "local"}>
                                  <div class="flex h-full flex-col justify-between">
                                    <Show
                                      when={!fsrsCardsQuery.isPending}
                                      fallback={
                                        <span class="inline-flex h-[20px] w-[40px] rounded-full bg-indigo-500/20" />
                                      }
                                    >
                                      <Show when={isDue()}>
                                        <div class="ml-2 flex flex-col items-end gap-1">
                                          <span class="inline-flex items-center rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs font-semibold text-indigo-300 uppercase">
                                            Due
                                          </span>
                                          <Show when={fsrsData()?.fsrs_card?.due}>
                                            <div class="text-muted-foreground text-[11px]">
                                              {new Date(
                                                fsrsData()!.fsrs_card.due,
                                              ).toLocaleDateString(undefined, {
                                                weekday: "short",
                                                month: "short",
                                                day: "numeric",
                                              })}
                                            </div>
                                          </Show>
                                        </div>
                                      </Show>
                                    </Show>
                                  </div>
                                </Show>
                              </div>
                            </div>
                          )
                        }}
                      </For>
                    </div>
                  </Show>
                </Show>
              </div>
            </TabsContent>

            {/* Kanji → Radicals */}
            <TabsContent value="k2r" class="mt-2">
              <div class="bg-card/40 border-card-foreground/70 rounded-xl border p-4">
                <Show
                  when={!hierarchyQuery.isPending}
                  fallback={
                    <div class="flex items-center justify-center py-8">
                      <Loader2 class="h-8 w-8 animate-spin text-muted-foreground/50" />
                    </div>
                  }
                >
                  <Show
                    when={filteredKanji().length > 0}
                    fallback={
                      <p class="text-muted-foreground text-sm">
                        No kanji to display.
                      </p>
                    }
                  >
                  <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <For each={filteredKanji()}>
                      {(k) => {
                        const radicals = kanjiToRadicals().get(k) || []
                        const usedIn = kanjiToVocab().get(k)?.length || 0
                        const fsrsData = () => fsrsMap().get(`kanji:${k}`)
                        const isDue = () => {
                          const dueDate = fsrsData()?.fsrs_card?.due
                          if (!dueDate) return false
                          return new Date(dueDate) <= new Date()
                        }
                        const isSkipped = () =>
                          !isDue() && fsrsData()?.fsrs_card?.due

                        return (
                          <div
                            class={`border-card-foreground/40 rounded-lg border p-3 ${
                              isSkipped() ? "opacity-50" : ""
                            }`}
                          >
                            <div class="flex items-center justify-between gap-2">
                              <button
                                class={`rounded-md px-2 py-1 text-left text-lg font-bold ${
                                  selectedKanji() === k
                                    ? "bg-indigo-500/15 text-indigo-400"
                                    : "text-primary hover:bg-accent/30"
                                }`}
                                onClick={() => toggleKanji(k)}
                                title="Toggle select Kanji"
                              >
                                {k}
                              </button>

                              <div class="flex flex-col items-end gap-1">
                                <div class="text-muted-foreground text-xs">
                                  Used in {usedIn}{" "}
                                  {usedIn === 1 ? "word" : "words"}
                                </div>

                                {/* Due/Skip indicator */}
                                <Show when={activeService() === "local"}>
                                  <div class="flex h-full flex-col justify-between">
                                    <Show
                                      when={!fsrsCardsQuery.isPending}
                                      fallback={
                                        <span class="inline-flex h-[20px] w-[40px] rounded-full bg-purple-500/20" />
                                      }
                                    >
                                      <Show
                                        when={isDue()}
                                        fallback={
                                          <Show when={isSkipped()}>
                                            <div class="text-muted-foreground flex items-center gap-1.5 text-[11px]">
                                              <span>Skipping</span>
                                              <Popover>
                                                <PopoverTrigger>
                                                  <Info class="h-3.5 w-3.5" />
                                                </PopoverTrigger>
                                                <PopoverContent class="bg-card border-card-foreground w-64 p-3">
                                                  <p class="text-sm">
                                                    Kanji & Radical dependencies
                                                    are skipped for the current
                                                    lesson if you've seen them
                                                    before and they aren't due so
                                                    you can focus on vocabulary.
                                                  </p>
                                                </PopoverContent>
                                              </Popover>
                                            </div>
                                          </Show>
                                        }
                                      >
                                        <span class="inline-flex items-center rounded-full bg-purple-500/20 px-2 py-0.5 text-xs font-semibold text-purple-300 uppercase">
                                          Due
                                        </span>
                                      </Show>
                                    </Show>
                                  </div>
                                </Show>
                              </div>
                            </div>

                            <div class="mt-2">
                              <div class="text-muted-foreground text-xs">
                                Radicals:
                              </div>
                              <div class="mt-1 flex flex-wrap gap-1.5">
                                <For each={radicals}>
                                  {(r) => (
                                    <Chip
                                      label={r}
                                      color="purple"
                                      selected={selectedRadical() === r}
                                      onClick={() => toggleRadical(r)}
                                    />
                                  )}
                                </For>
                                <Show when={radicals.length === 0}>
                                  <span class="text-muted-foreground text-xs">
                                    None
                                  </span>
                                </Show>
                              </div>
                            </div>
                          </div>
                        )
                      }}
                    </For>
                  </div>
                  </Show>
                </Show>
              </div>
            </TabsContent>
          </Tabs>
          </Show>
        </Show>
      </Show>
    </div>
  )
}

function SummaryCard(props: {
  label: string
  query: UseQueryResult<any, DefaultError>
  getValue: () => number
  dueCountQuery?: UseQueryResult<any, DefaultError>
  getDueCount?: () => number | undefined
  onClick?: () => void
}) {
  const { activeService } = useVocabPracticeContext()

  return (
    <button
      type="button"
      onClick={props.onClick}
      class="bg-card/40 border-card-foreground/70 hover:bg-accent/40 rounded-xl border p-3 text-left transition"
      title={`View ${props.label}`}
    >
      <div class="text-muted-foreground text-xs">{props.label}</div>
      <div class="flex items-baseline gap-2">
        <Show
          when={!props.query.isPending}
          fallback={
            <Loader2 class="mt-1 h-8 w-8 animate-spin text-muted-foreground/50" />
          }
        >
          <div class="text-primary mt-1 text-2xl font-bold">
            {props.getValue()}
          </div>
        </Show>
        <Show
          when={
            props.dueCountQuery?.isPending && activeService() === "local"
          }
        >
          <Loader2 class="h-4 w-4 animate-spin text-indigo-400/50" />
        </Show>
        <Show
          when={
            !props.dueCountQuery?.isPending &&
            props.getDueCount &&
            props.getDueCount() > 0 &&
            activeService() === "local"
          }
        >
          <span class="text-indigo-300 text-sm font-semibold">
            ({props.getDueCount!()} due)
          </span>
        </Show>
      </div>
    </button>
  )
}

function Chip(props: {
  label: string
  color: "indigo" | "purple" | "sky" | "neutral"
  selected?: boolean
  onClick?: () => void
}) {
  const base =
    "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition"
  const palette = () => {
    switch (props.color) {
      case "indigo":
        return props.selected
          ? "border-indigo-500/40 bg-indigo-500/20 text-indigo-300"
          : "border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20"
      case "purple":
        return props.selected
          ? "border-purple-500/40 bg-purple-500/20 text-purple-300"
          : "border-purple-500/30 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20"
      case "sky":
        return props.selected
          ? "border-sky-500/40 bg-sky-500/20 text-sky-300"
          : "border-sky-500/30 bg-sky-500/10 text-sky-300 hover:bg-sky-500/20"
      default:
        return props.selected
          ? "border-neutral-500/40 bg-neutral-500/20 text-neutral-300"
          : "border-neutral-500/30 bg-neutral-500/10 text-neutral-300 hover:bg-neutral-500/20"
    }
  }
  return (
    <button
      type="button"
      class={`${base} ${palette()}`}
      onClick={props.onClick}
      title={props.selected ? "Clear selection" : "Select"}
    >
      {props.label}
    </button>
  )
}
