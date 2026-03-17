import { For, createSignal, createEffect, on, onMount } from "solid-js"
import { getRouteApi } from "@tanstack/solid-router"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { usePreferences } from "@/lib/preferences"
import { getChapterDisplayNumber } from "@/data/utils/chapter-helpers"
import {
  getFolderChildren,
  getDecksInFolder,
} from "@/features/vocab-page/utils/hierarchy"
import { filterDecks } from "../utils"
import { DeckTimelineList } from "./DeckTimelineList"
import type { Folder, Deck } from "@/features/vocab-page/context/VocabContext"

export function ChapterAccordion(props: {
  folderId: string
  folders: Folder[]
  decks: Deck[]
  matchingDeckIds: Set<string> | null
}) {
  const vocabRoute = getRouteApi("/_home/vocab/")
  const search = vocabRoute.useSearch()
  const { preferences } = usePreferences()
  const chapters = () => getFolderChildren(props.folders, props.folderId)

  const activeChapterFolderId = () => {
    if (props.folderId !== preferences().activeLearningPath) return null
    const slug = preferences().activeChapter
    return slug ? `${props.folderId}/${slug}` : null
  }

  const [expandedIds, setExpandedIds] = createSignal<string[]>(
    activeChapterFolderId() ? [activeChapterFolderId()!] : [],
  )
  createEffect(
    on(
      () => props.folderId,
      () => setExpandedIds(activeChapterFolderId() ? [activeChapterFolderId()!] : []),
    ),
  )

  onMount(() => {
    const chapter = search().chapter
    if (chapter) {
      // Delay to allow parent mount animations to settle
      requestAnimationFrame(() => {
        document.getElementById(chapter)?.scrollIntoView({ behavior: "smooth", block: "start" })
      })
    }
  })

  const visibleChapters = () => {
    const allChapters = chapters()
    if (!props.matchingDeckIds) return allChapters
    return allChapters.filter((chapter) => {
      const decks = getDecksInFolder(props.decks, chapter.id)
      return decks.some((d) => props.matchingDeckIds!.has(d.id))
    })
  }

  return (
    <div>
      <Accordion multiple value={expandedIds()} onChange={setExpandedIds}>
        <For each={visibleChapters()}>
          {(chapter) => {
            const allDecks = () => getDecksInFolder(props.decks, chapter.id)
            const decks = () => filterDecks(allDecks(), props.matchingDeckIds)
            const isActive = () => chapter.id === activeChapterFolderId()
            const slug = chapter.id.split("/").pop()!
            const displayNum =
              getChapterDisplayNumber(slug) ||
              chapter.folderName.match(/\d+/)?.[0] ||
              ""

            return (
              <AccordionItem value={chapter.id} class="border-0" id={slug}>
                <AccordionTrigger class="hover:no-underline">
                  <div class="flex items-center gap-2">
                    <div
                      class={`flex size-6 items-center justify-center rounded-md text-xs font-bold ${
                        isActive()
                          ? "bg-gradient-to-br from-orange-500/30 to-amber-500/30 text-orange-400"
                          : "bg-gradient-to-br from-white/10 to-white/5 text-white/50"
                      }`}
                    >
                      {displayNum}
                    </div>
                    <span
                      class={`text-sm font-semibold ${
                        isActive() ? "text-orange-400" : "text-white/70"
                      }`}
                    >
                      {chapter.folderName}
                    </span>
                    <span class="text-muted-foreground/60 text-xs">
                      · {decks().length}{" "}
                      {decks().length === 1 ? "deck" : "decks"}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <DeckTimelineList decks={decks()} isActiveChapter={isActive()} />
                </AccordionContent>
              </AccordionItem>
            )
          }}
        </For>
      </Accordion>
    </div>
  )
}
