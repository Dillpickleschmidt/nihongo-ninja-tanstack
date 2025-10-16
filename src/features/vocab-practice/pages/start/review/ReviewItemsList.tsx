import { For, Show } from "solid-js"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-solid"
import { DueBadge } from "./DueBadge"
import { Chip } from "./Chip"
import { useFsrsDueDate } from "@/features/vocab-practice/hooks/useFsrsDueDate"
import type { PracticeCard } from "@/features/vocab-practice/types"

type ReviewItemsListProps = {
  reviewItems: PracticeCard[]
  visibleCount: number
  onShowMore: () => void
  fsrsMap: Map<string, any>
  activeService: () => "local" | "anki" | "wanikani" | "jpdb"
  isLoading: boolean
}

export function ReviewItemsList(props: ReviewItemsListProps) {
  const visibleItems = () => props.reviewItems.slice(0, props.visibleCount)

  return (
    <div class="mt-32 mb-20 space-y-3 md:mt-48">
      <h2 class="text-primary text-center text-lg font-semibold tracking-wide">
        Review Items
      </h2>
      <p class="text-muted-foreground text-center text-sm lg:text-base">
        This is the whole pool of items available. Only a handful of them will
        be mixed into your practice session.
      </p>
      <div class="mt-3 grid gap-3 lg:gap-4">
        <For each={visibleItems()}>
          {(card) => {
            const fsrsData = () => {
              const key = `${card.practiceItemType}:${card.key.split(":")[1]}`
              return props.fsrsMap.get(key)
            }
            const { isDue, dueDate } = useFsrsDueDate(fsrsData)

            const isKanjiOrRadical =
              card.practiceItemType === "kanji" ||
              card.practiceItemType === "radical"

            const explanationText =
              "Kanji & Radical dependencies are skipped for the current lesson if you've seen them before and they aren't due so you can focus on vocabulary."

            return (
              <div
                class={`group relative h-full overflow-hidden rounded-xl shadow-md transition-all duration-200 hover:shadow-lg ${
                  card.isDisabled ? "opacity-30" : ""
                } ${
                  card.practiceItemType === "kanji"
                    ? "border border-indigo-500/10 bg-indigo-500/5"
                    : card.practiceItemType === "radical"
                      ? "border border-purple-500/10 bg-purple-500/5"
                      : "bg-card/40 backdrop-blur-sm"
                }`}
                title={card.isDisabled ? explanationText : undefined}
              >
                <Show
                  when={!isKanjiOrRadical}
                  fallback={
                    /* Kanji/Radical layout */
                    <div class="flex h-full items-center justify-between p-3">
                      <div class="flex items-center gap-3">
                        {card.practiceItemType === "kanji" && (
                          <span class="rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs font-semibold text-indigo-400 uppercase">
                            Kanji
                          </span>
                        )}
                        {card.practiceItemType === "radical" && (
                          <span class="rounded-full bg-purple-500/20 px-2 py-0.5 text-xs font-semibold text-purple-400 uppercase">
                            Radical
                          </span>
                        )}
                        <div>
                          <h3
                            class={`text-lg leading-tight font-bold ${
                              card.isDisabled
                                ? "text-muted-foreground"
                                : card.practiceItemType === "kanji"
                                  ? "text-indigo-400"
                                  : "text-purple-400"
                            }`}
                          >
                            {card.prompt}
                          </h3>
                          <p
                            class={`text-xl font-semibold ${
                              card.isDisabled
                                ? "text-muted-foreground"
                                : "text-primary"
                            }`}
                          >
                            {card.validAnswers.join(", ")}
                          </p>
                        </div>
                      </div>
                      <Show when={props.activeService() === "local"}>
                        <DueBadge
                          isDue={isDue()}
                          dueDate={dueDate()}
                          isLoading={props.isLoading}
                          variant={
                            card.practiceItemType === "kanji"
                              ? "indigo"
                              : "purple"
                          }
                        />
                      </Show>
                    </div>
                  }
                >
                  {/* Vocabulary layout */}
                  <div class="flex h-full items-start justify-between p-5">
                    <div class="flex-1">
                      <h3
                        class={`mb-3 text-xl lg:text-2xl font-bold saturate-[125%] ${
                          card.isDisabled
                            ? "text-muted-foreground"
                            : "text-orange-400"
                        }`}
                      >
                        {card.prompt}
                      </h3>
                      <div class="space-y-1.5">
                        <p class="text-sm font-medium tracking-wider uppercase">
                          Answer:
                        </p>
                        <p
                          class={`text-base lg:text-lg font-bold ${
                            card.isDisabled
                              ? "text-muted-foreground"
                              : "text-primary"
                          }`}
                        >
                          {card.validAnswers.join(", ")}
                        </p>
                      </div>
                    </div>
                    <Show when={props.activeService() === "local"}>
                      <DueBadge
                        isDue={isDue()}
                        dueDate={dueDate()}
                        isLoading={props.isLoading}
                        variant="indigo"
                      />
                    </Show>
                  </div>
                </Show>
              </div>
            )
          }}
        </For>
      </div>

      <div class="mt-4 flex items-center justify-between">
        <div />
        <Show
          when={props.visibleCount < props.reviewItems.length}
          fallback={<p class="text-muted-foreground text-sm">No more items</p>}
        >
          <Button
            variant="outline"
            onClick={props.onShowMore}
            class="bg-card/40 border-card-foreground/70 rounded-lg hover:cursor-pointer"
          >
            Show More <ChevronDown class="h-4 w-4" />
          </Button>
        </Show>
        <p class="text-muted-foreground text-xs">
          {Math.min(props.visibleCount, props.reviewItems.length)}/
          {props.reviewItems.length}
        </p>
      </div>
    </div>
  )
}
