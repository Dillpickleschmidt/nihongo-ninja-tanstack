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
import { TextbookContentArea } from "@/features/dashboard/components/content/textbook/TextbookContentArea"
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
    const { user } = context
    const { textbookId, chapterSlug } = params

    const deck = getDeckBySlug(textbookId as TextbookIDEnum, chapterSlug)

    if (!deck) {
      throw redirect({
        to: "/dashboard/$textbookId/$chapterSlug",
        params: { textbookId: "genki_1", chapterSlug: "chapter-0" },
      })
    }

    const lessons = getLessons(deck)
    const externalResources = getExternalResources(deck)

    const vocabModuleId = deck.learning_path_items.find((item) =>
      item.id.endsWith("_vocab-list"),
    )?.id

    let vocabForHierarchy: string[] = []
    let vocabularyItems: VocabularyItem[] = []
    if (vocabModuleId) {
      const vocabItems = getModuleVocabulary(vocabModuleId)
      vocabForHierarchy = vocabItems.map((item) => item.word)
      vocabularyItems = vocabItems
    }

    // Get WaniKani hierarchy (only for words that have kanji)
    const wkHierarchyData = await getWKHierarchy({ data: vocabForHierarchy })

    // Create lookup map and build complete hierarchy in one pass
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

    // Defer progress data if user exists (slow)
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
      decks: tb.chapters,
      disabled: false,
    }))

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
      <TextbookContentArea
        lessons={loaderData().lessons}
        externalResources={loaderData().externalResources}
        deferredThumbnails={loaderData().deferredThumbnails}
        progressPercentage={75}
      />
    </DashboardLayout>
  )
}
