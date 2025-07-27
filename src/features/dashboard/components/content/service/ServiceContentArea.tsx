// features/dashboard/components/content/service/ServiceContentArea.tsx
import { createSignal, For, Show } from "solid-js"
import { ServiceDeckList } from "./ServiceDeckList"
import { NotesGrid } from "./NotesGrid"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import type { ServiceType } from "@/features/user-settings/schemas/user-preferences"
import {
  fetchJPDBDeckVocabulary,
  lookupJPDBVocabulary,
} from "@/features/service-api-functions/jpdb/api"

interface Deck {
  id: string
  name: string
  dueCards: number
  totalCards: number
  type: "user" | "special"
}

interface ServiceContentAreaProps {
  serviceId: ServiceType
  serviceData: {
    decks: Deck[]
    stats: {
      totalDueCards: number
      studiedToday: number
      currentStreak: number
      accuracy: number
    }
    activeDeckId: string
  }
}

interface VocabItem {
  spelling: string
  reading: string
  english: string[]
}

const getServiceName = (serviceId: ServiceType) => {
  const names = {
    anki: "Anki",
    wanikani: "WaniKani",
    jpdb: "jpdb",
  }
  return (
    names[serviceId] || serviceId.charAt(0).toUpperCase() + serviceId.slice(1)
  )
}

export function ServiceContentArea(props: ServiceContentAreaProps) {
  const [isDialogOpen, setIsDialogOpen] = createSignal(false)
  const [selectedDeckVocab, setSelectedDeckVocab] = createSignal<VocabItem[]>(
    [],
  )
  const [selectedDeckName, setSelectedDeckName] = createSignal("")

  const formatVocabItem = (item: any[]): VocabItem => {
    if (!Array.isArray(item)) {
      return { spelling: "N/A", reading: "N/A", english: [] }
    }
    return {
      spelling: item[0] || "N/A",
      reading: item[1] || "N/A",
      english: Array.isArray(item[2]) ? item[2] : [],
    }
  }

  const fetchJPDBVocabulary = async (deckId: string) => {
    const jpdbDeckIdMatch = deckId.match(/jpdb-(?:special|user)-(\d+)/)
    if (!jpdbDeckIdMatch) {
      return [
        { spelling: "Invalid JPDB deck ID format.", reading: "", english: [] },
      ]
    }

    const jpdbDeckId = parseInt(jpdbDeckIdMatch[1], 10)

    try {
      const deckVocabResponse = await fetchJPDBDeckVocabulary({
        data: { deckId: jpdbDeckId },
      })

      const vocabularyList = deckVocabResponse.vocabulary.map(
        (item: number[]) => [item[0], item[1]],
      )

      if (vocabularyList.length === 0) {
        return [
          {
            spelling: "No vocabulary found for this deck.",
            reading: "",
            english: [],
          },
        ]
      }

      const detailedVocabResponse = await lookupJPDBVocabulary({
        data: { vocabularyList },
      })

      return detailedVocabResponse.vocabulary_info.map(formatVocabItem)
    } catch (error) {
      console.error("Error fetching JPDB deck vocabulary:", error)
      return [
        {
          spelling: `Error loading vocabulary: ${error?.message || error}`,
          reading: "",
          english: [],
        },
      ]
    }
  }

  const handleDeckClick = async (deck: Deck) => {
    setSelectedDeckName(deck.name)
    setIsDialogOpen(true)

    if (props.serviceId === "jpdb") {
      const vocabulary = await fetchJPDBVocabulary(deck.id)
      setSelectedDeckVocab(vocabulary)
    } else {
      setSelectedDeckVocab([
        {
          spelling: "Vocabulary display not available for this service.",
          reading: "",
          english: [],
        },
      ])
    }
  }

  const formatEnglishMeaning = (english: string[]) => {
    if (english.length === 0) return "N/A"
    const first = english[0].split(";")[0]
    return english.length > 1 ? `${first} +${english.length - 1} more` : first
  }

  return (
    <>
      {/* Mobile Layout */}
      <SSRMediaQuery hideFrom="xl">
        <div class="px-4">
          <h2 class="mb-4 text-2xl font-bold">
            {getServiceName(props.serviceId)} Dashboard
          </h2>
        </div>
        <ServiceDeckList
          serviceId={props.serviceId}
          decks={props.serviceData.decks}
          activeDeckId={props.serviceData.activeDeckId}
          variant="mobile"
          onDeckClick={handleDeckClick}
        />
        <div class="px-4">
          <NotesGrid />
        </div>
      </SSRMediaQuery>

      {/* Desktop Layout */}
      <SSRMediaQuery showFrom="xl">
        <div class="px-8 pb-3">
          <h2 class="mb-4 pt-3 text-2xl font-bold">
            {getServiceName(props.serviceId)} Dashboard
          </h2>
        </div>

        <div class="scrollbar-hide relative h-[calc(100vh-425px)] overflow-x-hidden overflow-y-auto overscroll-x-none px-8 pb-12">
          <ServiceDeckList
            serviceId={props.serviceId}
            decks={props.serviceData.decks}
            activeDeckId={props.serviceData.activeDeckId}
            variant="desktop"
            onDeckClick={handleDeckClick}
          />
        </div>

        <div class="px-8 pt-4">
          <NotesGrid />
        </div>
      </SSRMediaQuery>

      <Dialog open={isDialogOpen()} onOpenChange={setIsDialogOpen}>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Vocabulary for {selectedDeckName()}</DialogTitle>
            <DialogDescription>
              A list of all vocabulary in this deck.
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <For each={selectedDeckVocab()}>
              {(vocab) => (
                <div class="flex items-center justify-between">
                  <span class="font-semibold">{vocab.spelling}</span>
                  <span class="text-muted-foreground">{vocab.reading}</span>
                  <span class="text-muted-foreground">
                    <HoverCard>
                      <HoverCardTrigger>
                        {formatEnglishMeaning(vocab.english)}
                      </HoverCardTrigger>
                      <HoverCardContent>
                        <For each={vocab.english}>
                          {(meaning) => (
                            <div class="mb-2 last:mb-0">{meaning}</div>
                          )}
                        </For>
                      </HoverCardContent>
                    </HoverCard>
                  </span>
                </div>
              )}
            </For>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
