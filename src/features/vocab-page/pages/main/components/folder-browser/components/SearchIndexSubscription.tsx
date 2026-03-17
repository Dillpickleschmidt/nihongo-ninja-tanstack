import { createEffect } from "solid-js"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"

export function SearchIndexSubscription(props: {
  scopeId: string
  onData: (data: { deckId: string; terms: string[] }[]) => void
}) {
  const query = useConvexQuery(api.api.vocabulary.getVocabIndex, () => ({
    scopeId: props.scopeId,
  }))

  createEffect(() => {
    const data = query.data()
    if (data) props.onData(data.deckTerms)
  })

  return null
}
