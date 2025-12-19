import { createSignal, For } from "solid-js"
import { cn } from "@/utils"

const JLPT_LEVELS = ["N5", "N4", "N3", "N2", "N1"] as const
const CATEGORIES = ["Vocabulary", "Grammar", "Kanji"] as const

export function ManualMarkingSection() {
  const [selectedLevel, setSelectedLevel] = createSignal<(typeof JLPT_LEVELS)[number]>("N5")
  const [selectedCategory, setSelectedCategory] = createSignal<(typeof CATEGORIES)[number]>("Vocabulary")

  return (
    <>
      {/* JLPT Level Tabs */}
      <div class="mb-6 flex gap-2 overflow-x-auto pb-2">
        <For each={JLPT_LEVELS}>
          {(level) => (
            <button
              type="button"
              onClick={() => setSelectedLevel(level)}
              class={cn(
                "shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-all",
                selectedLevel() === level
                  ? "bg-(--accent) text-white"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              )}
            >
              {level}
            </button>
          )}
        </For>
      </div>

      {/* Category Tabs */}
      <div class="mb-6 flex gap-2">
        <For each={CATEGORIES}>
          {(category) => (
            <button
              type="button"
              onClick={() => setSelectedCategory(category)}
              class={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-all",
                selectedCategory() === category
                  ? "bg-white/15 text-white"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70"
              )}
            >
              {category}
            </button>
          )}
        </For>
      </div>

      {/* Content Area */}
      <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        {/* Select All Header */}
        <div class="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
          <div class="flex items-center gap-3">
            <input
              type="checkbox"
              class="size-4 rounded border-white/30 bg-white/10 text-(--accent) focus:ring-(--accent)/50"
            />
            <span class="text-sm font-medium text-white">
              Select all {selectedLevel()} {selectedCategory().toLowerCase()}
            </span>
          </div>
          <span class="text-sm text-white/40">0 selected</span>
        </div>

        {/* Placeholder Items Grid */}
        <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <For each={Array.from({ length: 12 })}>
            {(_, i) => (
              <PlaceholderItem index={i()} category={selectedCategory()} />
            )}
          </For>
        </div>

        {/* Load More */}
        <div class="mt-6 text-center">
          <button
            type="button"
            class="text-sm text-white/40 hover:text-white/60 transition-colors"
          >
            Load more...
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div class="mt-6 flex justify-end">
        <button
          type="button"
          class="rounded-xl bg-(--accent) px-6 py-3 font-medium text-white transition-all hover:brightness-110"
        >
          Save Progress
        </button>
      </div>
    </>
  )
}

function PlaceholderItem(props: { index: number; category: string }) {
  const [checked, setChecked] = createSignal(false)

  const getPlaceholder = () => {
    if (props.category === "Vocabulary") {
      const words = ["食べる", "飲む", "行く", "来る", "見る", "聞く", "話す", "読む", "書く", "学ぶ", "教える", "働く"]
      return { main: words[props.index % words.length], sub: "to eat, to drink..." }
    }
    if (props.category === "Grammar") {
      const patterns = ["〜ている", "〜たい", "〜てください", "〜ましょう", "〜なければならない", "〜ことができる", "〜と思う", "〜そうです", "〜ようにする", "〜ために", "〜ば", "〜たら"]
      return { main: patterns[props.index % patterns.length], sub: "Progressive, desire..." }
    }
    const kanji = ["日", "本", "語", "学", "生", "先", "人", "大", "小", "中", "上", "下"]
    return { main: kanji[props.index % kanji.length], sub: "day, sun, Japan..." }
  }

  const placeholder = getPlaceholder()

  return (
    <label
      class={cn(
        "flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-all",
        checked()
          ? "border-(--accent)/30 bg-(--accent)/10"
          : "border-white/10 bg-white/2 hover:border-white/20"
      )}
    >
      <input
        type="checkbox"
        checked={checked()}
        onChange={(e) => setChecked(e.currentTarget.checked)}
        class="size-4 rounded border-white/30 bg-white/10 text-(--accent) focus:ring-(--accent)/50"
      />
      <div class="min-w-0 flex-1">
        <p class="truncate font-medium text-white">{placeholder.main}</p>
        <p class="truncate text-xs text-white/40">{placeholder.sub}</p>
      </div>
    </label>
  )
}
