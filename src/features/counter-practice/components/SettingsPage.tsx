import { For } from "solid-js"
import { Hash } from "lucide-solid"
import {
  TextField,
  TextFieldLabel,
  TextFieldInput,
} from "@/components/ui/text-field"
import { Button3D } from "@/components/Button3D"
import { cn } from "@/utils"
import type { CounterPattern, CounterPatternGroup } from "../types"

type CounterSettings = {
  selectedPatternIds: string[]
  amount: number
}

type SettingsPageProps = {
  allPatterns: CounterPattern[]
  groupedPatterns: CounterPatternGroup[]
  settings: () => CounterSettings
  onSettingsChange: (settings: CounterSettings) => void
  onStartPractice: () => void
}

const COUNTER_DESCRIPTIONS: Record<string, string> = {
  つ: "generic counting",
  匹: "small animals",
  本: "long/thin objects",
  枚: "flat objects",
  人: "people",
  個: "small items",
  冊: "bound volumes",
  時: "o'clock",
  分: "minutes",
  時間: "hours",
  日: "days / dates",
  月: "months",
  か月: "month durations",
  週間: "weeks",
  年: "years",
  年間: "year durations",
  分間: "minute durations",
  歳: "age",
  百: "hundreds",
  千: "thousands",
  万: "ten thousands",
  円: "yen",
  回: "frequency",
  課: "lessons",
  度: "degrees / times",
  杯: "cups / glasses",
  足: "pairs (footwear)",
  通: "letters / messages",
  階: "floors / stories",
  軒: "houses / buildings",
  ページ: "pages",
  丁目: "city blocks",
  ポンド: "pounds",
}

export function SettingsPage(props: SettingsPageProps) {
  const selected = () => new Set(props.settings().selectedPatternIds)
  const selectedCount = () => props.settings().selectedPatternIds.length
  const allSelected = () => selectedCount() === props.allPatterns.length

  function setAmount(amount: number) {
    props.onSettingsChange({
      ...props.settings(),
      amount,
    })
  }

  function togglePattern(id: string) {
    const current = selected()
    const next = new Set(current)
    if (next.has(id)) {
      if (next.size > 1) next.delete(id)
    } else {
      next.add(id)
    }
    props.onSettingsChange({
      ...props.settings(),
      selectedPatternIds: [...next],
    })
  }

  function selectAll() {
    props.onSettingsChange({
      ...props.settings(),
      selectedPatternIds: props.allPatterns.map((p) => p.id),
    })
  }

  function keepOneSelected() {
    props.onSettingsChange({
      ...props.settings(),
      selectedPatternIds: [props.allPatterns[0].id],
    })
  }

  function toggleGroup(patternIds: string[], checked: boolean) {
    const next = new Set(selected())

    if (checked) {
      for (const id of patternIds) next.add(id)
    } else {
      const remaining = props.allPatterns.length - patternIds.filter((id) => next.has(id)).length
      if (remaining < 1) return
      for (const id of patternIds) next.delete(id)
    }

    props.onSettingsChange({
      ...props.settings(),
      selectedPatternIds: [...next],
    })
  }

  return (
    <div>
      {/* Header */}
      <div class="mb-10">
        <div class="mb-2 flex items-center gap-2">
          <Hash class="size-4 text-violet-400" />
          <span class="text-xs font-semibold tracking-widest text-violet-400/90 uppercase">
            Counter Practice
          </span>
        </div>
        <h1 class="font-japanese text-4xl leading-tight font-bold tracking-tight md:text-5xl">
          数え方練習
        </h1>
        <p class="text-muted-foreground mt-2 max-w-lg text-sm leading-relaxed md:text-base">
          Practice Japanese counters and their sound change rules.
        </p>
        <div class="mt-3 flex items-center gap-2 text-xs text-white/35">
          <span>{selectedCount()} selected</span>
          <span>•</span>
          <span>{props.settings().amount} questions</span>
        </div>
      </div>

      <div class="space-y-6 pb-32">
        {/* Counter selection */}
        <section class="space-y-4">
          <h2 class="text-sm font-semibold uppercase tracking-wide text-white/40">
            Select Counters
          </h2>
          <div class="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div class="flex items-center gap-3">
              <span
                class={cn(
                  "flex size-4 shrink-0 items-center justify-center rounded-full border text-[10px] transition-colors",
                  allSelected()
                    ? "border-violet-400 bg-violet-500 text-white"
                    : "border-white/30 bg-white/10 text-transparent",
                )}
              >
                ✓
              </span>
              <div class="leading-tight">
                <p class="text-sm text-white/75">
                  {allSelected() ? "All counters selected" : "Custom selection"}
                </p>
                <p class="text-xs text-white/35">
                  {selectedCount()} of {props.allPatterns.length} selected
                </p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button
                type="button"
                onClick={selectAll}
                disabled={allSelected()}
                class={cn(
                  "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                  allSelected()
                    ? "cursor-default text-white/20"
                    : "text-white/40 hover:bg-white/10 hover:text-white/60",
                )}
              >
                Select All
              </button>
              <button
                type="button"
                onClick={keepOneSelected}
                disabled={selectedCount() === 1}
                class={cn(
                  "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                  selectedCount() === 1
                    ? "cursor-default text-white/20"
                    : "text-white/40 hover:bg-white/10 hover:text-white/60",
                )}
              >
                Unselect All
              </button>
            </div>
          </div>

          <div class="space-y-5">
            <For each={props.groupedPatterns}>
              {(group) => {
                const groupIds = () => group.patterns.map((pattern) => pattern.id)
                const groupSelectedCount = () =>
                  group.patterns.filter((pattern) => selected().has(pattern.id)).length
                const groupAllSelected = () =>
                  groupSelectedCount() === group.patterns.length

                return (
                  <div>
                    <div class="mb-3 flex items-center justify-between">
                      <div>
                        <h3 class="text-sm font-medium text-white/85">
                          {group.title}
                        </h3>
                        <p class="mt-1 text-xs text-white/35">
                          Chapter {group.chapter} · {groupSelectedCount()}/{group.patterns.length} selected
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          toggleGroup(groupIds(), !groupAllSelected())
                        }
                        class="rounded-full px-3 py-1 text-xs font-medium text-white/40 transition-colors hover:bg-white/10 hover:text-white/60"
                      >
                        {groupAllSelected() ? "Clear group" : "Select group"}
                      </button>
                    </div>

                    <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                      <For each={group.patterns}>
                        {(pattern) => {
                          const isSelected = () => selected().has(pattern.id)

                          return (
                            <Button3D
                              onClick={() => togglePattern(pattern.id)}
                              color={
                                isSelected()
                                  ? "rgb(109,40,217)"
                                  : "rgb(75,85,99)"
                              }
                              textColor="rgb(17,24,39)"
                              class={cn(
                                "mb-2 min-h-[4.75rem] rounded-xl px-3 py-3 text-left text-sm",
                              )}
                            >
                              <div class="flex w-full items-start justify-between gap-3">
                                <div class="min-w-0 flex-1">
                                  <div class="flex items-baseline gap-2">
                                    <span class="font-japanese text-xl font-bold text-black/85">
                                      {pattern.id}
                                    </span>
                                    <span class="font-japanese text-xs text-black/60">
                                      {pattern.baseReading}
                                    </span>
                                  </div>
                                  <p class="truncate text-[10px] text-black/55">
                                    {COUNTER_DESCRIPTIONS[pattern.id] ?? ""}
                                  </p>
                                </div>
                                {isSelected() && (
                                  <span class="text-[10px] font-semibold text-black/70">
                                    ON
                                  </span>
                                )}
                              </div>
                            </Button3D>
                          )
                        }}
                      </For>
                    </div>
                  </div>
                )
              }}
            </For>
          </div>
        </section>

        {/* Options */}
        <section class="space-y-4">
          <h2 class="text-sm font-semibold uppercase tracking-wide text-white/40">
            Options
          </h2>
          <div class="mb-4 flex flex-wrap gap-2">
            <For each={[10, 20, 30, 50]}>
              {(amount) => (
                <button
                  type="button"
                  onClick={() => setAmount(amount)}
                  class="rounded-full px-3 py-1 text-xs font-medium transition-colors"
                  classList={{
                    "bg-violet-500/12 text-violet-300": props.settings().amount === amount,
                    "text-white/40 hover:bg-white/10 hover:text-white/60": props.settings().amount !== amount,
                  }}
                >
                  {amount}
                </button>
              )}
            </For>
          </div>
          <div class="max-w-xs">
            <TextField class="space-y-2">
              <TextFieldLabel class="text-white/40">
                Number of questions
              </TextFieldLabel>
              <TextFieldInput
                type="number"
                value={props.settings().amount}
                onInput={(e) => {
                  const val = parseInt(e.currentTarget.value, 10)
                  if (!isNaN(val) && val >= 1 && val <= 100) setAmount(val)
                }}
                min="1"
                max="100"
                class="bg-white/5 border-white/10"
              />
            </TextField>
          </div>
        </section>
      </div>

      {/* Fixed bottom button */}
      <div class="fixed bottom-20 left-0 right-0 z-30 flex justify-center px-4">
        <div class="w-full max-w-xs">
          <Button3D color="rgb(139,92,246)" onClick={props.onStartPractice}>
            Start Practice
          </Button3D>
        </div>
      </div>
    </div>
  )
}
