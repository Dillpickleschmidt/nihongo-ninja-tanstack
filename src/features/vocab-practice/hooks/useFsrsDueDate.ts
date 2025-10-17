import { createMemo } from "solid-js"

type FsrsCardData = {
  fsrs_card?: {
    due?: string | Date
  }
}

/**
 * Hook to calculate if an FSRS item is due
 */
export function useFsrsDueDate(fsrsData: () => FsrsCardData | undefined) {
  const isDue = createMemo(() => {
    const data = fsrsData()
    const dueDate = data?.fsrs_card?.due
    if (!dueDate) return false
    return new Date(dueDate) <= new Date()
  })

  const dueDate = createMemo(() => {
    const data = fsrsData()
    return data?.fsrs_card?.due
  })

  return {
    isDue,
    dueDate,
  }
}
