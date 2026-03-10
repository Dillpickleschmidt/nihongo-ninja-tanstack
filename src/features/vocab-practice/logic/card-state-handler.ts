// vocab-practice/logic/card-state-handler.ts
import { FSRS, Rating, Grade } from "ts-fsrs"
import type { PracticeCard, SessionCardStyle } from "../types"

/** Pure session-style transition — shared by FSRS and Anki modes */
export function nextSessionStyle(
  currentStyle: SessionCardStyle,
  practiceItemType: PracticeCard["practiceItemType"],
  grade: Grade,
): SessionCardStyle {
  switch (currentStyle) {
    case "multiple-choice":
      if (grade === Rating.Good) {
        return practiceItemType === "kanji" || practiceItemType === "radical"
          ? "flashcard"
          : "write"
      }
      return "multiple-choice"
    case "write":
      return grade === Rating.Good ? "done" : "multiple-choice"
    case "flashcard":
      return grade === Rating.Again ? "multiple-choice" : "flashcard"
    case "done":
      return "done"
    default:
      return currentStyle
  }
}

/** FSRS mode: style transition + FSRS card/log update */
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

  return {
    ...card,
    sessionStyle: nextSessionStyle(
      card.sessionStyle,
      card.practiceItemType,
      grade,
    ),
    fsrs: {
      card: updatedFSRSCard,
      logs,
    },
  }
}

/** Anki mode: style transition only, no FSRS */
export function handleCardAnswerAnki(
  card: PracticeCard,
  grade: Grade,
): PracticeCard {
  return {
    ...card,
    sessionStyle: nextSessionStyle(
      card.sessionStyle,
      card.practiceItemType,
      grade,
    ),
  }
}
