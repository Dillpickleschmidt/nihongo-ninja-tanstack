// routes/dashboard/$textbookId.$chapterSlug.tsx
import { createFileRoute, redirect, defer } from "@tanstack/solid-router"
import { createEffect } from "solid-js"
import { z } from "zod"
import { zodValidator } from "@tanstack/zod-adapter"
import {
  getLessons,
  getExternalResources,
  getDeckBySlug,
  setActiveDeck,
} from "@/data/utils/core"
import { fetchThumbnailUrl } from "@/data/utils/thumbnails"
import { getDueFSRSCardsCount } from "@/features/supabase/db/utils"
import { getWKHierarchy, getUserProgressForVocab } from "@/data/wanikani/utils"
import { getModuleVocabulary } from "@/data/utils/vocab"
// import { TextbookContentArea } from "@/features/dashboard/components/content/textbook/TextbookContentArea"
import { DashboardLayout } from "@/features/dashboard/components/layout/DashboardLayout"
import { textbooks } from "@/data/textbooks"
import type { TextbookIDEnum, DeckSource, VocabularyItem } from "@/data/types"
import type { FullHierarchyData } from "@/data/wanikani/types"

const searchSchema = z.object({
  textbook: z.string().optional(),
  deck: z.string().optional(),
})

export const Route = createFileRoute("/dashboard/$textbookId/$chapterSlug")({
  validateSearch: zodValidator(searchSchema),
  beforeLoad: ({ context }) => {
    return {
      user: context.user,
    }
  },
  loader: async ({ context, params }) => {
    console.time("loader")
    const { user } = context
    const { textbookId, chapterSlug } = params

    console.time("getDeckBySlug")
    const fullDeck = getDeckBySlug(textbookId as TextbookIDEnum, chapterSlug)
    console.timeEnd("getDeckBySlug")

    if (!fullDeck) {
      throw redirect({
        to: "/dashboard/$textbookId/$chapterSlug",
        params: { textbookId: "genki_1", chapterSlug: "chapter-0" },
      })
    }
    const deck = {
      id: fullDeck.id,
      slug: fullDeck.slug,
      title: fullDeck.title,
      deckType: fullDeck.deckType,
      chapter_number: fullDeck.chapter_number,
      description: fullDeck.description,
      learning_path_items: [],
      external_resource_ids: [],
    }

    console.time("getLessons")
    const lessons = getLessons(fullDeck)
    console.timeEnd("getLessons")

    console.time("getExternalResources")
    const externalResources = getExternalResources(fullDeck)
    console.timeEnd("getExternalResources")

    const vocabModuleId = fullDeck.learning_path_items.find((item) =>
      item.id.endsWith("_vocab-list"),
    )?.id

    let vocabForHierarchy: string[] = []
    let vocabularyItems: VocabularyItem[] = []
    if (vocabModuleId) {
      console.time("getModuleVocabulary")
      vocabularyItems = await getModuleVocabulary(vocabModuleId)
      console.timeEnd("getModuleVocabulary")
      vocabForHierarchy = vocabularyItems.map((item) => item.word)
    }

    console.time("getWKHierarchy")
    const wkHierarchyData = await getWKHierarchy({ data: vocabForHierarchy })
    console.timeEnd("getWKHierarchy")

    const wkVocabMap = new Map(
      wkHierarchyData?.hierarchy.map((item) => [item.slug, item]) || [],
    )

    const wordHierarchyData: FullHierarchyData = {
      hierarchy: vocabularyItems.map(
        (vocab, index) =>
          wkVocabMap.get(vocab.word) || {
            id: 10000 + index,
            characters: vocab.word,
            slug: vocab.word,
            kanji: [],
          },
      ),
      uniqueKanji: wkHierarchyData?.uniqueKanji || [],
      uniqueRadicals: wkHierarchyData?.uniqueRadicals || [],
      summary: wkHierarchyData?.summary || {
        vocab: { total: 0, wellKnown: 0, learning: 0 },
        kanji: { total: 0, wellKnown: 0, learning: 0 },
        radicals: { total: 0, wellKnown: 0, learning: 0 },
      },
    }

    const slugs = [
      ...new Set([
        ...(wkHierarchyData?.hierarchy.map((item) => item.slug) || []),
        ...(wkHierarchyData?.uniqueKanji.map((item) => item.slug) || []),
        ...(wkHierarchyData?.uniqueRadicals.map((item) => item.slug) || []),
      ]),
    ]

    const progressDataPromise =
      user && slugs.length > 0
        ? getUserProgressForVocab({
            data: { slugs, userId: user.id },
          })
        : Promise.resolve(null)

    const dueFSRSCardsCountPromise = user
      ? getDueFSRSCardsCount(user.id)
      : Promise.resolve(0)

    const deferredIndividualThumbnails = externalResources.map((resource) => {
      const promise = fetchThumbnailUrl(
        resource.external_url,
        resource.creator_id,
      ).then((thumbnailUrl) => ({
        resourceId: resource.id,
        thumbnailUrl,
      }))
      return defer(promise)
    })

    const deckSources: DeckSource[] = Object.values(textbooks).map((tb) => ({
      id: tb.id,
      name: tb.short_name || tb.name,
      type: "textbook",
      decks: tb.chapters.map(
        ({ id, slug, deckType, chapter_number, title, description }) => ({
          id,
          slug,
          deckType,
          chapter_number,
          title,
          description,
          learning_path_items: [],
          external_resource_ids: [],
        }),
      ),
      disabled: false,
    }))

    console.timeEnd("loader")
    return {
      user,
      textbookId,
      deck,
      lessons,
      externalResources,
      wordHierarchyData,
      vocabularyItems,
      progressData: defer(progressDataPromise),
      deferredThumbnails: deferredIndividualThumbnails,
      dueFSRSCardsCount: defer(dueFSRSCardsCountPromise),
      deckSources,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const loaderData = Route.useLoaderData()

  createEffect(() => {
    setActiveDeck("textbook", loaderData().textbookId, loaderData().deck.slug)
  })

  return (
    <DashboardLayout
      user={loaderData().user}
      dueFSRSCardsCount={loaderData().dueFSRSCardsCount}
      currentDeck={loaderData().deck}
      deckSources={loaderData().deckSources}
      textbookId={loaderData().textbookId}
      chapterSlug={loaderData().deck.slug}
      wordHierarchyData={loaderData().wordHierarchyData}
      vocabularyItems={loaderData().vocabularyItems}
      progressData={loaderData().progressData}
    >
      {/* --- TEMPORARY CHANGE FOR TESTING --- */}
      {/* We are rendering the full layout but NOT its complex children. */}
      <div>
        <h1>[Perf Test] TextbookContentArea is disabled.</h1>
      </div>
      {/* --- END TEMPORARY CHANGE --- */}
    </DashboardLayout>
  )
}
