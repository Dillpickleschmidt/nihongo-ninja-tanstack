import {
  CardHeader,
  VocabInfo,
  SimpleExamples,
  ImmersionKitExamples,
} from "@/features/vocab-page/pages/main/components/deck-view/VocabularyCard"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Book, Grid2x2 } from "lucide-solid"
import type { VocabularyItem } from "convex/validators"
import type { ImmersionKitExample } from "@/features/vocab-page/lib/immersion-kit"

const DEMO_ITEM: VocabularyItem = {
  key: "kikoeru",
  word: "聞こえる",
  furigana: "聞[き]こえる",
  english: ["to be audible"],
  particles: [{ particle: "が" }],
  mnemonics: {
    kanji: [],
    reading: [],
  },
  info: [
    "Potential variation of 聞く (to hear)",
    "Used when something can be heard naturally, without actively trying to listen",
  ],
  exampleSentences: [
    {
      japanese: ["音楽が聞こえる"],
      english: ["I can hear music"],
    },
    {
      japanese: ["ここから海の音が聞こえる"],
      english: ["I can hear the sound of the ocean from here"],
    },
  ],
}

const DEMO_EXAMPLES: ImmersionKitExample[] = [
  {
    id: "demo-1",
    sentence: "これ 着替えている音が 外に聞こえちゃわない？",
    sentence_with_furigana: "",
    translation:
      "If we're only a curtain apart, won't he hear me changing?",
    sound:
      "https://us-southeast-1.linodeobjects.com/immersionkit/media/anime/Alya%20Sometimes%20Hides%20Her%20Feelings%20in%20Russian/media/Alya_S1_002_0.19.24.623-0.19.28.002.mp3",
    image:
      "https://us-southeast-1.linodeobjects.com/immersionkit/media/anime/Alya%20Sometimes%20Hides%20Her%20Feelings%20in%20Russian/media/Alya_S1_002_0.19.26.312.jpg",
    title: "Alya Sometimes Hides Her Feelings in Russian",
    word_list: [],
    matched_indexes: [],
  },
  {
    id: "demo-2",
    sentence: "何も聞こえなくて　何も見えなくて　何も考えられなくて",
    sentence_with_furigana: "",
    translation:
      "I couldn't hear anything, see anything, or think of anything.",
    sound:
      "https://us-southeast-1.linodeobjects.com/immersionkit/media/anime/Kanon%20(2006)/media/A_Kanon_E18_1_0.17.08.430-0.17.14.270.mp3",
    image:
      "https://us-southeast-1.linodeobjects.com/immersionkit/media/anime/Kanon%20(2006)/media/A_Kanon_E18_1_0.17.11.350.jpg",
    title: "Kanon (2006)",
    word_list: [],
    matched_indexes: [],
  },
]

const triggerClass =
  "h-7 w-full rounded-md text-primary/50 hover:text-primary data-[selected]:bg-transparent data-[selected]:text-primary data-[selected]:shadow-none"

export function VocabCardDemo() {
  return (
    <div>
      <div class="border-card-foreground/70 relative rounded-lg border bg-card/50 shadow-md backdrop-blur-sm">
        <div class="px-6 py-6">
          <CardHeader item={DEMO_ITEM} index={0} />
          <Tabs defaultValue="examples-real" class="w-full">
            <TabsList class="w-full bg-background/40 backdrop-blur-sm">
              <TabsTrigger value="info" class={triggerClass}>
                <Book class="mr-1.5 h-3.5 w-3.5" />
                <span class="text-xs">Info</span>
              </TabsTrigger>
              <TabsTrigger value="examples-simple" class={triggerClass}>
                <Grid2x2 class="mr-1.5 h-3.5 w-3.5" />
                <span class="text-xs">Simple Examples</span>
              </TabsTrigger>
              <TabsTrigger value="examples-real" class={triggerClass}>
                <Grid2x2 class="mr-1.5 h-3.5 w-3.5" />
                <span class="text-xs">Real Examples</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="info">
              <VocabInfo item={DEMO_ITEM} />
            </TabsContent>

            <TabsContent value="examples-simple">
              <SimpleExamples item={DEMO_ITEM} />
            </TabsContent>

            <TabsContent value="examples-real">
              <ImmersionKitExamples examples={DEMO_EXAMPLES} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
