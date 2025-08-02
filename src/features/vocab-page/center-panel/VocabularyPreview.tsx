// features/vocab-page/center-panel/VocabularyPreview.tsx
import { For, createSignal, createEffect } from "solid-js"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Book, Grid2x2 } from "lucide-solid"
import {
  convertFuriganaToRubyHtml,
  getVocabularyForSet,
} from "@/data/utils/vocab"
import { dynamic_modules } from "@/data/dynamic_modules"
// UserDeck type is now global from global.d.ts
import type { VocabularyItem } from "@/data/types"

interface VocabularyPreviewProps {
  selectedDeck: UserDeck
}

export function VocabularyPreview(props: VocabularyPreviewProps) {
  const [vocabularyItems, setVocabularyItems] = createSignal<VocabularyItem[]>(
    [],
  )
  const [isLoading, setIsLoading] = createSignal(false)

  // Load vocabulary when deck changes
  createEffect(async () => {
    const deck = props.selectedDeck

    // Only load vocabulary from dynamic modules for built-in decks
    if (deck.source !== "built-in") {
      setVocabularyItems([])
      return
    }

    // Use the original built-in deck ID for vocabulary lookup
    const originalDeckId = deck.original_deck_id!
    const module = dynamic_modules[originalDeckId]

    if (!module || !module.vocab_set_ids) {
      setVocabularyItems([])
      return
    }

    setIsLoading(true)
    try {
      const vocab = await getVocabularyForSet(module.vocab_set_ids)
      setVocabularyItems(vocab)
    } catch (error) {
      console.error("Failed to load vocabulary:", error)
      setVocabularyItems([])
    } finally {
      setIsLoading(false)
    }
  })

  return (
    <div class="h-full w-full overflow-y-auto p-6">
      <div class="my-6 text-center">
        <h2 class="mb-2 text-2xl font-bold">{props.selectedDeck.deck_name}</h2>
        <p class="text-muted-foreground">Vocabulary Preview</p>
      </div>

      <div class="w-full space-y-6">
        {isLoading() ? (
          <div class="flex items-center justify-center py-12">
            <div class="text-muted-foreground">Loading vocabulary...</div>
          </div>
        ) : vocabularyItems().length === 0 ? (
          <div class="flex items-center justify-center py-12">
            <div class="text-muted-foreground">
              {props.selectedDeck.source === "built-in"
                ? "No vocabulary items found for this deck."
                : `${props.selectedDeck.source} deck vocabulary loading not yet implemented.`}
            </div>
          </div>
        ) : (
          <For each={vocabularyItems()}>
            {(item, index) => (
              <div class="w-full">
                <div
                  class={`relative rounded-lg shadow-sm ${
                    (index() + 1) % 2 === 0 ? "bg-card/80" : "bg-card/60"
                  }`}
                >
                  <div class="px-6 py-6">
                    <div class="border-border mb-6 border-b pb-4">
                      <div class="flex items-baseline gap-4">
                        <h3 class="font-japanese flex items-baseline text-xl font-bold">
                          <span class="text-muted-foreground mr-3 text-base">
                            {`${index() + 1}.`}
                          </span>
                          <span
                            class="text-xl"
                            innerHTML={convertFuriganaToRubyHtml(item.furigana)}
                          />
                        </h3>
                        <span class="text-muted-foreground text-sm italic">
                          {item.english.join(", ")}
                        </span>
                      </div>
                    </div>

                    {/* Mobile: Tabbed Layout */}
                    <div class="md:hidden">
                      <Tabs defaultValue="info" class="w-full">
                        <TabsList class="bg-muted">
                          <TabsTrigger value="info">
                            <Book class="mr-2 h-4 w-4" />
                            Info
                          </TabsTrigger>
                          <TabsTrigger value="examples">
                            <Grid2x2 class="mr-2 h-4 w-4" />
                            Examples
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="info">
                          <VocabInfo item={item} />
                        </TabsContent>

                        <TabsContent value="examples">
                          <VocabExamples item={item} />
                        </TabsContent>
                      </Tabs>
                    </div>

                    {/* Desktop: Compact Layout */}
                    <div class="hidden md:flex md:justify-between md:gap-6">
                      <div class="max-w-[50%] border-l-2 border-orange-400 pl-6 saturate-[75%]">
                        <VocabInfo item={item} />
                      </div>
                      <div class="bg-muted/60 w-full max-w-[60%] rounded-lg p-4">
                        <VocabExamples item={item} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </For>
        )}
      </div>
    </div>
  )
}

function VocabInfo(props: { item: VocabularyItem }) {
  return (
    <div class="space-y-4">
      {props.item.particles && (
        <div class="space-y-2">
          <For each={props.item.particles}>
            {(particle) => (
              <div class="text-sm">
                <span class="text-foreground font-medium">
                  {particle.label || "Particle"}:{" "}
                </span>
                <span class="font-japanese font-bold text-emerald-400">
                  {particle.particle}
                </span>
              </div>
            )}
          </For>
        </div>
      )}

      {props.item.mnemonics && (
        <div class="pt-2 space-y-2">
          {props.item.mnemonics.kanji && props.item.mnemonics.kanji.length > 0 && (
            <div class="space-y-1">
              <span class="font-medium text-sky-400 text-sm">Kanji Mnemonics:</span>
              <For each={props.item.mnemonics.kanji}>
                {(mnemonic) => (
                  <div class="text-sm ml-2">
                    <span class="text-muted-foreground">{mnemonic}</span>
                  </div>
                )}
              </For>
            </div>
          )}
          {props.item.mnemonics.reading && props.item.mnemonics.reading.length > 0 && (
            <div class="space-y-1">
              <span class="font-medium text-emerald-400 text-sm">Reading Mnemonics:</span>
              <For each={props.item.mnemonics.reading}>
                {(mnemonic) => (
                  <div class="text-sm ml-2">
                    <span class="text-muted-foreground">{mnemonic}</span>
                  </div>
                )}
              </For>
            </div>
          )}
        </div>
      )}

      {props.item.info && props.item.info.length > 0 && (
        <ul class="text-muted-foreground ml-4 space-y-1 text-sm">
          <For each={props.item.info}>
            {(info) => <li class="list-disc">{info}</li>}
          </For>
        </ul>
      )}
    </div>
  )
}

function VocabExamples(props: { item: VocabularyItem }) {
  return (
    <div class="space-y-3">
      {props.item.example_sentences &&
      props.item.example_sentences.length > 0 ? (
        <>
          <h4 class="text-foreground mb-3 text-sm font-medium">
            Example Sentences
          </h4>
          <div class="space-y-4">
            <For each={props.item.example_sentences}>
              {(sentence) => (
                <div class="space-y-1.5">
                  <p class="font-japanese text-base leading-relaxed">
                    <For each={sentence.japanese}>
                      {(part) =>
                        typeof part === "string" ? (
                          <span innerHTML={convertFuriganaToRubyHtml(part)} />
                        ) : (
                          <span innerHTML={convertFuriganaToRubyHtml(part.t)} />
                        )
                      }
                    </For>
                  </p>
                  <p class="text-muted-foreground text-xs leading-relaxed">
                    <For each={sentence.english}>
                      {(part) => (typeof part === "string" ? part : part.t)}
                    </For>
                  </p>
                </div>
              )}
            </For>
          </div>
        </>
      ) : (
        <p class="text-muted-foreground text-sm">No examples available</p>
      )}
    </div>
  )
}
