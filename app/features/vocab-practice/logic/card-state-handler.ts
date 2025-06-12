// vocab-practice/logic/card-state-handler.ts
import { FSRS, Rating, Grade } from "ts-fsrs"
import type { PracticeCard } from "../types"

export function handleCardAnswer(
  card: PracticeCard,
  grade: Grade,
): PracticeCard {
  const fsrsInstance = new FSRS({})

  const { card: updatedFSRSCard, log: reviewLog } = fsrsInstance.next(
    card.fsrs.card,
    new Date(),
    grade,
  )

  const logs = card.fsrs.logs ? [...card.fsrs.logs] : []
  if (reviewLog) logs.push(reviewLog)

  let sessionStyle = card.sessionStyle
  switch (card.sessionStyle) {
    case "multiple-choice":
      sessionStyle = grade === Rating.Good ? "write" : "multiple-choice"
      break
    case "write":
      sessionStyle = grade === Rating.Easy ? "done" : "multiple-choice"
      break
    case "flashcard":
      sessionStyle = grade === Rating.Again ? "multiple-choice" : "flashcard"
      break
    case "done":
      break
  }

  return {
    ...card,
    sessionStyle,
    fsrs: {
      card: updatedFSRSCard,
      logs,
    },
  }
}
