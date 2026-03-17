import { For, Show, Suspense, createMemo, createSignal, onCleanup, type JSXElement } from "solid-js"
import { useQuery } from "@tanstack/solid-query"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/custom/skeleton"
import { Book, Grid2x2, AudioLines } from "lucide-solid"
import { convertFuriganaToRubyHtml } from "@/data/utils/text/furigana"
import {
  fetchImmersionKitExamples,
  rankExamples,
  type ImmersionKitExample,
} from "../../../../lib/immersion-kit"
import type { VocabularyItem } from "convex/validators"

const mobileTriggerClass =
  "h-7 w-full rounded-md text-primary/50 hover:text-primary data-[selected]:bg-transparent data-[selected]:text-primary data-[selected]:shadow-none"
const desktopTriggerClass =
  "h-7 rounded-md text-xs text-primary/50 hover:text-primary data-[selected]:bg-transparent data-[selected]:text-primary data-[selected]:shadow-none"

interface VocabularyCardProps {
  item: VocabularyItem
  index: number
  orderedKeys?: string[]
  knownWords?: string[]
}

export function VocabularyCard(props: VocabularyCardProps) {
  return (
    <div class="w-full">
      <div
        class={`border-card-foreground/70 relative rounded-lg border shadow-md backdrop-blur-sm ${
          (props.index + 1) % 2 === 0 ? "bg-card/60" : "bg-card/50"
        }`}
      >
        <div class="px-6 py-6">
          {/* Mobile: Tabbed Layout */}
          <div class="md:hidden">
            <CardHeader item={props.item} index={props.index} />
            <Tabs defaultValue="info" class="w-full">
              <TabsList class="w-full bg-background/40 backdrop-blur-sm">
                <TabsTrigger value="info" class={mobileTriggerClass}>
                  <Book class="mr-1.5 h-3.5 w-3.5" />
                  <span class="text-xs">Info</span>
                </TabsTrigger>
                <TabsTrigger value="examples-simple" class={mobileTriggerClass}>
                  <Grid2x2 class="mr-1.5 h-3.5 w-3.5" />
                  <span class="text-xs">Simple Examples</span>
                </TabsTrigger>
                <TabsTrigger value="examples-real" class={mobileTriggerClass}>
                  <Grid2x2 class="mr-1.5 h-3.5 w-3.5" />
                  <span class="text-xs">Real Examples</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="info">
                <VocabInfo item={props.item} />
              </TabsContent>

              <TabsContent value="examples-simple">
                <VocabExamples item={props.item} />
              </TabsContent>

              <TabsContent value="examples-real">
                <Suspense fallback={<RealExamplesSkeleton />}>
                  <RealExamples
                    word={props.item.word}
                    orderedKeys={props.orderedKeys}
                    knownWords={props.knownWords ?? []}
                  />
                </Suspense>
              </TabsContent>
            </Tabs>
          </div>

          {/* Desktop: Compact Layout */}
          <Tabs defaultValue="examples-real" class="hidden md:block">
            <CardHeader item={props.item} index={props.index}>
              <TabsList class="bg-background/40 backdrop-blur-sm">
                <TabsTrigger value="examples-simple" class={desktopTriggerClass}>
                  Simple Examples
                </TabsTrigger>
                <TabsTrigger value="examples-real" class={desktopTriggerClass}>
                  Real Examples
                </TabsTrigger>
              </TabsList>
            </CardHeader>

            <div class="flex gap-6">
              <div class="w-1/2 border-l-2 border-orange-400/60 pl-6 saturate-75">
                <VocabInfo item={props.item} />
              </div>
              <div class="bg-background/40 border-card-foreground/70 w-1/2 rounded-lg border p-4 backdrop-blur-sm">
                <TabsContent value="examples-simple">
                  <VocabExamples item={props.item} />
                </TabsContent>

                <TabsContent value="examples-real">
                  <Suspense fallback={<RealExamplesSkeleton />}>
                    <RealExamples
                      word={props.item.word}
                      orderedKeys={props.orderedKeys}
                    knownWords={props.knownWords ?? []}
                    />
                  </Suspense>
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

function CardHeader(props: {
  item: VocabularyItem
  index: number
  children?: JSXElement
}) {
  return (
    <div class="border-border mb-6 border-b pb-4">
      <div class="flex items-center justify-between gap-4">
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
          <span class="text-foreground/70 text-sm italic">
            {props.item.english.join(", ")}
          </span>
        </div>
        {props.children}
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
                      <span class="text-foreground/70">{mnemonic}</span>
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
                      <span class="text-foreground/70">{mnemonic}</span>
                    </div>
                  )}
                </For>
              </div>
            )}
        </div>
      )}

      {props.item.info && props.item.info.length > 0 && (
        <ul class="text-foreground/70 ml-4 space-y-1 text-sm">
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
      {props.item.exampleSentences && props.item.exampleSentences.length > 0 ? (
        <>
          <div class="space-y-4">
            <For each={props.item.exampleSentences}>
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

const TOP_N = 2

function RealExamples(props: {
  word: string
  orderedKeys?: string[]
  knownWords: string[]
}) {
  const query = useQuery(() => ({
    queryKey: ["immersion-kit", props.word],
    queryFn: () => fetchImmersionKitExamples(props.word),
    enabled: !!props.word,
  }))

  const examples = createMemo(() => {
    const data = query.data
    if (!data) return undefined
    return rankExamples(data, props.word, props.orderedKeys, props.knownWords).slice(0, TOP_N)
  })
  const [playingUrl, setPlayingUrl] = createSignal<string | null>(null)
  let currentAudio: HTMLAudioElement | undefined

  const playAudio = (soundUrl: string) => {
    if (playingUrl() === soundUrl) {
      currentAudio?.pause()
      setPlayingUrl(null)
      return
    }

    currentAudio?.pause()
    const audio = new Audio(soundUrl)
    currentAudio = audio

    setPlayingUrl(soundUrl)
    audio.play()

    audio.onended = () => {
      if (playingUrl() === soundUrl) setPlayingUrl(null)
    }
    audio.onerror = () => {
      if (playingUrl() === soundUrl) setPlayingUrl(null)
    }
  }

  onCleanup(() => {
    currentAudio?.pause()
  })

  return (
    <Show
      when={examples()?.length}
      fallback={
        <p class="text-muted-foreground text-sm">No real examples found</p>
      }
    >
      <div class="space-y-4">
        <For each={examples()}>
          {(example) => (
            <div class="flex flex-col gap-3 sm:flex-row">
              <Show when={example.image}>
                <div class="shrink-0 sm:w-36">
                  <img
                    src={example.image}
                    alt="Scene"
                    class="h-44 w-full cursor-pointer rounded-lg object-cover opacity-90 transition-opacity hover:opacity-100 sm:h-24 sm:w-36"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                    }}
                    onClick={() =>
                      example.sound && playAudio(example.sound)
                    }
                  />
                </div>
              </Show>
              <div class="min-w-0 flex-grow">
                <div class="mb-1.5 flex items-center gap-2">
                  <button
                    class="hover:bg-muted rounded-full p-1.5 transition-colors"
                    onClick={() =>
                      example.sound && playAudio(example.sound)
                    }
                    disabled={!example.sound}
                  >
                    <AudioLines
                      class={`h-4 w-4 ${
                        playingUrl() === example.sound
                          ? "text-emerald-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  </button>
                  <span class="text-muted-foreground text-xs">
                    {example.title.replace(/_/g, " ")}
                  </span>
                </div>
                <p class="font-japanese text-base leading-relaxed">
                  {example.sentence}
                </p>
                <p class="text-muted-foreground mt-1 text-xs leading-relaxed">
                  {example.translation}
                </p>
              </div>
            </div>
          )}
        </For>
      </div>
    </Show>
  )
}

function RealExamplesSkeleton() {
  return (
    <div class="space-y-4">
      <For each={[0, 1]}>
        {() => (
          <div class="flex gap-3">
            <Skeleton class="h-24 w-36 shrink-0 rounded-lg" />
            <div class="min-w-0 flex-grow space-y-2">
              <Skeleton class="h-4 w-24 rounded" />
              <Skeleton class="h-5 w-full rounded" />
              <Skeleton class="h-3 w-3/4 rounded" />
            </div>
          </div>
        )}
      </For>
    </div>
  )
}
