import { useMutation } from "convex-solidjs"
import { api } from "convex/_generated/api"

export function useRecordVocabProgress(modulePath: () => string) {
  const mutation = useMutation(api.api.progress.recordProgressEvent)

  return (progressUnitsDelta: number, questionsAnsweredDelta: number) => {
    mutation.mutate({
      modulePath: modulePath(),
      moduleType: "vocab-practice",
      progressUnitsDelta,
      questionsAnsweredDelta,
      eventTs: Date.now(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
    })
  }
}
