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
import { getDueFSRSCards } from "@/features/supabase/db/utils"
import {
  getWKHierarchy,
  getWKHierarchyWithProgress,
} from "@/data/wanikani/utils"
import { getModuleVocabulary } from "@/data/utils/vocab"
import { TextbookContentArea } from "@/features/dashboard/components/content/textbook/TextbookContentArea"
import { DashboardLayout } from "@/features/dashboard/components/layout/DashboardLayout"
import { textbooks } from "@/data/textbooks"
import type { TextbookIDEnum, DeckSource } from "@/data/types"

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
    if (vocabModuleId) {
      const vocabItems = getModuleVocabulary(vocabModuleId)
      vocabForHierarchy = vocabItems.map((item) => item.word)
    }

    const wordHierarchyData = user
      ? await getWKHierarchyWithProgress({
          data: {
            slugs: vocabForHierarchy,
            userId: user.id,
          },
        })
      : await getWKHierarchy({ data: vocabForHierarchy })

    const dueFSRSCardsPromise = user
      ? getDueFSRSCards(user.id)
      : Promise.resolve(null)

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
    }))

    return {
      user,
      textbookId,
      deck,
      lessons,
      externalResources,
      wordHierarchyData,
      deferredThumbnails: deferredIndividualThumbnails,
      dueFSRSCards: defer(dueFSRSCardsPromise),
      deckSources,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const loaderData = Route.useLoaderData()

  createEffect(() => {
    setActiveDeck("textbook", loaderData().textbookId, loaderData().deck.slug)
    console.log(
      "Set active deck: ",
      loaderData().textbookId,
      loaderData().deck.slug,
    )
  })

  return (
    <DashboardLayout
      user={loaderData().user}
      dueFSRSCardsPromise={loaderData().dueFSRSCards}
      currentDeck={loaderData().deck}
      deckSources={loaderData().deckSources}
      textbookId={loaderData().textbookId}
      chapterSlug={loaderData().deck.slug}
      wordHierarchyData={loaderData().wordHierarchyData}
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
