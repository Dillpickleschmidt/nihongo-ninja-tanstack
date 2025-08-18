// vocab-practice/components/shared/PracticeCardContainer.tsx
import { JSX, Show } from "solid-js"
import { cn } from "@/utils/util"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"

export function PracticeCardContainer(props: {
  children: JSX.Element
  class?: string
}) {
  const { currentCard } = useVocabPracticeContext()

  return (
    <div
      class={cn(
        "bg-card border-card-foreground relative w-full rounded-2xl border p-6 shadow-md sm:p-8 lg:p-10",
        props.class,
      )}
    >
      {/* Card Type Badge */}
      <Show when={currentCard()}>
        {(card) => (
          <div class="absolute top-6 right-6 z-10 flex gap-2">
            <span
              class={cn(
                "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide uppercase",
                card().practiceItemType === "vocabulary" &&
                  "bg-orange-500/20 text-orange-400",
                card().practiceItemType === "kanji" &&
                  "bg-pink-500/20 text-pink-400",
                card().practiceItemType === "radical" &&
                  "bg-green-500/20 text-green-400",
              )}
            >
              {card().practiceItemType}
            </span>
          </div>
        )}
      </Show>
      {props.children}
    </div>
  )
}
