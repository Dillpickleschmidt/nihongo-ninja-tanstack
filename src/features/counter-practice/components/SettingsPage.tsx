import { For, type JSX } from "solid-js"
import { Hash } from "lucide-solid"
import {
  TextField,
  TextFieldLabel,
  TextFieldInput,
} from "@/components/ui/text-field"
import { Button3D } from "@/components/Button3D"
import type { CounterPattern } from "../types"

type CounterSettings = {
  selectedPatternIds: string[]
  amount: number
}

type SettingsPageProps = {
  allPatterns: CounterPattern[]
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

  function selectNone() {
    props.onSettingsChange({
      ...props.settings(),
      selectedPatternIds: [props.allPatterns[0].id],
    })
  }

  return (
    <div>
      {/* Header */}
      <div class="mb-10">
        <div class="mb-2 flex items-center gap-2">
          <Hash class="size-4 text-green-500" />
          <span class="text-xs font-semibold tracking-widest text-green-500/90 uppercase">
            Counter Practice
          </span>
        </div>
        <h1 class="font-japanese text-4xl leading-tight font-bold tracking-tight md:text-5xl">
          数え方練習
        </h1>
        <p class="text-muted-foreground mt-2 max-w-lg text-sm leading-relaxed md:text-base">
          Practice Japanese counters and their sound change rules.
        </p>
      </div>

      <div class="space-y-6 pb-32">
        {/* Counter selection */}
        <Section title="Select Counters">
          <div class="mb-3 flex gap-2">
            <button
              type="button"
              onClick={selectAll}
              class="rounded-full px-3 py-1 text-xs font-medium text-white/40 transition-colors hover:bg-white/10 hover:text-white/60"
            >
              Select All
            </button>
            <button
              type="button"
              onClick={selectNone}
              class="rounded-full px-3 py-1 text-xs font-medium text-white/40 transition-colors hover:bg-white/10 hover:text-white/60"
            >
              Deselect All
            </button>
          </div>
          <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            <For each={props.allPatterns}>
              {(pattern) => {
                const isSelected = () => selected().has(pattern.id)
                return (
                  <button
                    type="button"
                    onClick={() => togglePattern(pattern.id)}
                    class="flex items-center gap-3 rounded-xl border p-3 text-left transition-colors"
                    classList={{
                      "bg-green-500/10 border-green-500/30": isSelected(),
                      "bg-white/5 border-white/10 hover:border-white/20":
                        !isSelected(),
                    }}
                  >
                    <span
                      class="font-japanese text-xl font-bold"
                      classList={{
                        "text-green-400": isSelected(),
                        "text-white/50": !isSelected(),
                      }}
                    >
                      {pattern.id}
                    </span>
                    <div class="min-w-0 flex-1">
                      <p
                        class="font-japanese text-xs"
                        classList={{
                          "text-green-400/70": isSelected(),
                          "text-white/30": !isSelected(),
                        }}
                      >
                        {pattern.baseReading}
                      </p>
                      <p class="truncate text-[10px] text-white/30">
                        {COUNTER_DESCRIPTIONS[pattern.id] ?? ""}
                      </p>
                    </div>
                  </button>
                )
              }}
            </For>
          </div>
        </Section>

        {/* Options */}
        <Section title="Options">
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
                  if (!isNaN(val) && val >= 1 && val <= 100)
                    props.onSettingsChange({
                      ...props.settings(),
                      amount: val,
                    })
                }}
                min="1"
                max="100"
                class="bg-white/5 border-white/10"
              />
            </TextField>
          </div>
        </Section>
      </div>

      {/* Fixed bottom button */}
      <div class="fixed bottom-20 left-0 right-0 z-30 flex justify-center px-4">
        <div class="w-full max-w-xs">
          <Button3D color="rgb(22,163,74)" onClick={props.onStartPractice}>
            Start Practice
          </Button3D>
        </div>
      </div>
    </div>
  )
}

function Section(props: { title: string; children: JSX.Element }) {
  return (
    <section class="space-y-4 rounded-xl border border-white/10 bg-white/5 p-5">
      <h2 class="text-sm font-semibold uppercase tracking-wide text-white/40">
        {props.title}
      </h2>
      {props.children}
    </section>
  )
}
