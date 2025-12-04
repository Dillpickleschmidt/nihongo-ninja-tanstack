// features/vocab-page/pages/main/components/VocabularyCard.tsx
import { For } from "solid-js"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Book, Grid2x2 } from "lucide-solid"
import { convertFuriganaToRubyHtml } from "@/data/utils/text/furigana"
import type { VocabularyItem } from "@/data/types"

interface VocabularyCardProps {
  item: VocabularyItem
  index: number
}

export function VocabularyCard(props: VocabularyCardProps) {
  return (
    <div class="w-full">
      <div
        class={`border-card-foreground/70 relative rounded-lg border shadow-md backdrop-blur-sm ${(props.index + 1) % 2 === 0 ? "bg-card/60" : "bg-card/50"
          }`}
      >
        <div class="px-6 py-6">
          <div class="border-border mb-6 border-b pb-4">
            <div class="flex items-baseline gap-4">
              <h3 class="font-japanese flex items-baseline text-xl font-bold">
                <span class="text-muted-foreground mr-3 text-base">
                  {`${props.index + 1}.`}
                </span>
                <span
                  class="text-xl"
                  innerHTML={convertFuriganaToRubyHtml(props.item.furigana)}
                />
              </h3>
              <span class="text-muted-foreground text-sm italic">
                {props.item.english.join(", ")}
              </span>
            </div>
          </div>

          {/* Mobile: Tabbed Layout */}
          <div class="md:hidden">
            <Tabs defaultValue="info" class="w-full">
              <TabsList class="bg-background/40 border-card-foreground/70 border backdrop-blur-sm">
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
                <VocabInfo item={props.item} />
              </TabsContent>

              <TabsContent value="examples">
                <VocabExamples item={props.item} />
              </TabsContent>
            </Tabs>
          </div>

          {/* Desktop: Compact Layout */}
          <div class="hidden md:flex md:justify-between md:gap-6">
            <div class="max-w-[50%] border-l-2 border-orange-400/60 pl-6 saturate-[75%]">
              <VocabInfo item={props.item} />
            </div>
            <div class="bg-background/40 border-card-foreground/70 w-full max-w-[60%] rounded-lg border p-4 backdrop-blur-sm">
              <VocabExamples item={props.item} />
            </div>
          </div>
        </div>
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
        <div class="space-y-2 pt-2">
          {props.item.mnemonics.kanji &&
            props.item.mnemonics.kanji.length > 0 && (
              <div class="space-y-1">
                <span class="text-sm font-medium text-sky-400">
                  Kanji Mnemonics:
                </span>
                <For each={props.item.mnemonics.kanji}>
                  {(mnemonic) => (
                    <div class="ml-2 text-sm">
                      <span class="text-muted-foreground">{mnemonic}</span>
                    </div>
                  )}
                </For>
              </div>
            )}
          {props.item.mnemonics.reading &&
            props.item.mnemonics.reading.length > 0 && (
              <div class="space-y-1">
                <span class="text-sm font-medium text-emerald-400">
                  Reading Mnemonics:
                </span>
                <For each={props.item.mnemonics.reading}>
                  {(mnemonic) => (
                    <div class="ml-2 text-sm">
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
