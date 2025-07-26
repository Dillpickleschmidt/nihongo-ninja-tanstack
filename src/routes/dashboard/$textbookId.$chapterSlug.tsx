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
import { getVocabularyForModule } from "@/data/utils/vocab"
import { DashboardLayout } from "@/features/dashboard/components/layout/DashboardLayout"
import { DashboardDataProvider } from "@/features/dashboard/context/DashboardDataContext"
import { TextbookContentArea } from "@/features/dashboard/components/content/textbook/TextbookContentArea"
import { getServicePreferencesFromCookie } from "@/features/service-config/server/service-manager"
import type { TextbookIDEnum, VocabularyItem, Deck } from "@/data/types"
import type { FullHierarchyData } from "@/data/wanikani/types"
import {
  enrichLessons,
  enrichExternalResources,
} from "@/features/dashboard/utils/loader-helpers"
import { getAllDeckSources } from "@/features/dashboard/utils/allDeckSources"

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

    const preferences = getServicePreferencesFromCookie()

    const fullDeck = getDeckBySlug(textbookId as TextbookIDEnum, chapterSlug)

    if (!fullDeck) {
      throw redirect({
        to: "/dashboard/$textbookId/$chapterSlug",
        params: { textbookId: "genki_1", chapterSlug: "chapter-0" },
      })
    }
    const deck: Deck = {
      id: fullDeck.id,
      slug: fullDeck.slug,
      title: fullDeck.title,
      deckType: fullDeck.deckType,
      chapter_number: fullDeck.chapter_number,
      description: fullDeck.description,
      learning_path_items: [],
      external_resource_ids: [],
    }

    const allEnrichedLessons = enrichLessons(getLessons(fullDeck))
    const INITIAL_LESSON_COUNT = 7 // Deferring lessons after the first 7 to load later seems to save ~150ms on initial load

    const initialLessons = allEnrichedLessons.slice(0, INITIAL_LESSON_COUNT)
    const remainingLessonsPromise = Promise.resolve(
      allEnrichedLessons.slice(INITIAL_LESSON_COUNT),
    )

    const rawResources = getExternalResources(fullDeck)

    const vocabModuleId = fullDeck.learning_path_items.find((item) =>
      item.id.endsWith("_vocab-list"),
    )?.id

    let vocabularyItems: VocabularyItem[] = []
    if (vocabModuleId) {
      vocabularyItems = await getVocabularyForModule(vocabModuleId)
    }
    const vocabForHierarchy = vocabularyItems.map((item) => item.word)

    const wkHierarchyData = await getWKHierarchy({ data: vocabForHierarchy })

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
        ? getUserProgressForVocab({ data: { slugs, userId: user.id } })
        : Promise.resolve(null)

    const dueFSRSCardsCountPromise = user
      ? getDueFSRSCardsCount(user.id)
      : Promise.resolve(0)

    const deferredIndividualThumbnails = rawResources.map(
      ({ resource, key }) => {
        const promise = fetchThumbnailUrl(
          resource.external_url,
          resource.creator_id,
        ).then((thumbnailUrl) => ({
          resourceId: key,
          thumbnailUrl,
        }))
        return defer(promise)
      },
    )

    const externalResources = enrichExternalResources(
      rawResources.map(({ resource }) => resource),
    )

    const deckSources = getAllDeckSources(user, preferences)

    return {
      user,
      textbookId,
      deck,
      initialLessons,
      remainingLessons: defer(remainingLessonsPromise),
      totalLessonCount: allEnrichedLessons.length,
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

  const dashboardData = {
    wordHierarchyData: loaderData().wordHierarchyData,
    vocabularyItems: loaderData().vocabularyItems,
    progressData: loaderData().progressData,
    dueFSRSCardsCount: loaderData().dueFSRSCardsCount,
    currentDeck: loaderData().deck,
    deckSources: loaderData().deckSources,
    totalLessonCount: loaderData().totalLessonCount,
  }

  return (
    <DashboardDataProvider data={dashboardData}>
      <DashboardLayout
        user={loaderData().user}
        textbookId={loaderData().textbookId}
        chapterSlug={loaderData().deck.slug}
      >
        <TextbookContentArea
          initialLessons={loaderData().initialLessons}
          remainingLessons={loaderData().remainingLessons}
          totalLessonCount={loaderData().totalLessonCount}
          externalResources={loaderData().externalResources}
          deferredThumbnails={loaderData().deferredThumbnails}
          progressPercentage={75}
        />
      </DashboardLayout>
    </DashboardDataProvider>
  )
}
