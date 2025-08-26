// routes/_home/learn/$textbookId.$chapterSlug.tsx
import { createFileRoute, redirect, defer } from "@tanstack/solid-router"
import {
  getLessons,
  getExternalResources,
  getDeckBySlug,
} from "@/data/utils/core"
import { fetchThumbnailUrl } from "@/data/utils/thumbnails"
import { getDueFSRSCardsCount } from "@/features/supabase/db/fsrs"
import { getVocabHierarchy } from "@/features/resolvers/kanji"
import { getUserProgress } from "@/features/supabase/db/fsrs"
import { getVocabularyForModule } from "@/data/utils/vocab"
import {
  enrichLessons,
  enrichExternalResources,
} from "@/features/learn-page/utils/loader-helpers"

import { LearnDataProvider } from "@/features/learn-page/context/LearnPageDataContext"
import { LearnPageContent } from "@/features/learn-page/components/layout/LearnPageContent"
import type { TextbookIDEnum, VocabularyItem } from "@/data/types"
import type { VocabHierarchy } from "@/data/wanikani/hierarchy-builder"
import type { User } from "@supabase/supabase-js"

export const Route = createFileRoute("/_home/learn/$textbookId/$chapterSlug")({
  loader: async ({ context, params }) => {
    const { user } = context
    const { textbookId, chapterSlug } = params

    let deck = getDeckBySlug(textbookId as TextbookIDEnum, chapterSlug)

    if (!deck) {
      throw redirect({
        to: "/learn/$textbookId/$chapterSlug",
        params: { textbookId: "genki_1", chapterSlug: "chapter-0" },
      })
    }

    // Lessons
    const enrichedLessons = enrichLessons(getLessons(deck))

    // External Resources
    const externalResources = enrichExternalResources(
      getExternalResources(deck),
    )
    const deferredIndividualThumbnails = Object.entries(externalResources).map(
      ([key, resource]) => {
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

    // Vocabulary and Hierarchy
    const vocabModuleId = deck.learning_path_items.find((item) =>
      item.id.endsWith("_vocab-list"),
    )?.id

    let chapterVocabulary: VocabularyItem[] = []
    if (vocabModuleId) {
      chapterVocabulary = await getVocabularyForModule(vocabModuleId)
    }
    const vocabForHierarchy = chapterVocabulary.map((item) => item.word)
    const wkHierarchyData: VocabHierarchy | null = await getVocabHierarchy({
      data: {
        slugs: vocabForHierarchy,
        userOverrides: context.initialUserPreferenceData["override-settings"],
      },
    })

    // Collect all unique slugs from hierarchy
    const slugs = [
      ...new Set([
        ...(wkHierarchyData?.vocabulary.map((item) => item.word) || []),
        ...(wkHierarchyData?.kanji.map((item) => item.kanji) || []),
        ...(wkHierarchyData?.radicals.map((item) => item.radical) || []),
      ]),
    ]

    // Fetch user progress data for all collected slugs
    const fsrsProgressDataPromise =
      user && slugs.length > 0
        ? getUserProgress({ data: { slugs, userId: user.id } })
        : Promise.resolve(null)

    const dueFSRSCardsCountPromise = user
      ? getDueFSRSCardsCount({ data: user.id })
      : Promise.resolve(0)

    const struggles = [
      "～て",
      "留学生",
      "Intransat...",
      "～てしま",
      "助詞",
      "敬語",
    ]
    const historyItems = [
      { name: "Gym", icon: "⚡", amount: -40.99, color: "bg-orange-500" },
      { name: "Coffee", icon: "☕", amount: -5.5, color: "bg-amber-600" },
      { name: "Study Books", icon: "📚", amount: -29.99, color: "bg-blue-500" },
    ]

    return {
      user,
      textbookId,
      deck,
      lessons: enrichedLessons,
      externalResources,
      chapterVocabulary,
      wordHierarchyData: wkHierarchyData,
      fsrsProgressData: defer(fsrsProgressDataPromise),
      dueFSRSCardsCount: defer(dueFSRSCardsCountPromise),
      deferredThumbnails: deferredIndividualThumbnails,
      struggles,
      historyItems,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const loaderData = Route.useLoaderData()

  const learnPageData = {
    activeTextbookId: loaderData().textbookId as TextbookIDEnum,
    activeDeck: loaderData().deck,
    chapterVocabulary: loaderData().chapterVocabulary,
    wordHierarchyData: loaderData().wordHierarchyData,
    fsrsProgressData: loaderData().fsrsProgressData,
    dueFSRSCardsCount: loaderData().dueFSRSCardsCount,

    lessons: loaderData().lessons,
    externalResources: loaderData().externalResources,
    deferredThumbnails: loaderData().deferredThumbnails,
    progressPercentage: 75,
    struggles: loaderData().struggles,
    historyItems: loaderData().historyItems,
  }

  return (
    <LearnDataProvider data={learnPageData}>
      <LearnPageContent
        user={loaderData().user as User | null}
        activeTextbookId={loaderData().textbookId as TextbookIDEnum}
        activeDeck={loaderData().deck.slug}
      />
    </LearnDataProvider>
  )
}
