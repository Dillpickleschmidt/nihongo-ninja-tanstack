import { For, createSignal, createEffect, on } from "solid-js"
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
  const { preferences } = usePreferences()
  const chapters = () => getFolderChildren(props.folders, props.folderId)
  const chapterIds = () => chapters().map((c) => c.id)

  const [expandedIds, setExpandedIds] = createSignal<string[]>(chapterIds())
  createEffect(
    on(
      () => props.folderId,
      () => setExpandedIds(chapterIds()),
    ),
  )

  const activeChapterFolderId = () => {
    if (props.folderId !== preferences().activeLearningPath) return null
    const slug = preferences().activeChapter
    return slug ? `${props.folderId}/${slug}` : null
  }

  const visibleChapters = () => {
    const allChapters = chapters()
    if (!props.matchingDeckIds) return allChapters
    return allChapters.filter((chapter) => {
      const decks = getDecksInFolder(props.decks, chapter.id)
      return decks.some((d) => props.matchingDeckIds!.has(d.id))
    })
  }

  return (
    <div class="mx-auto max-w-5xl">
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
              <AccordionItem value={chapter.id} class="border-0">
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
                  <DeckTimelineList decks={decks()} />
                </AccordionContent>
              </AccordionItem>
            )
          }}
        </For>
      </Accordion>
    </div>
  )
}
