import { VocabPracticeContextType } from "../context/VocabPracticeContext"
import type { Card } from "@/data/types"
import {
  getOrCreateFSRSCard,
  updateLocalFSRSCard,
  getFSRSRatingFromPracticeEvent,
} from "../fsrs/fsrs-utils"
import { Rating } from "ts-fsrs"
import {
  FSRSCardData,
  upsertFSRSCardForUser,
} from "@/features/supabase/db/utils"

export async function handleNextQuestion(context: VocabPracticeContextType) {
  const currentCard =
    context.deckState.workingSet[context.gameState.currentCardIndex]
  let cardToAdd = currentCard

  // --- FSRS INTEGRATION START ---
  try {
    const fsrsCards = context.deckState.moduleFSRSCards
    const practiceItemKey = currentCard.key
    const fsrsCardData = getOrCreateFSRSCard(fsrsCards, practiceItemKey)

    const cardStyle = currentCard.cardStyle as "multiple-choice" | "write"
    const rating = getFSRSRatingFromPracticeEvent(
      cardStyle,
      context.gameState.isAnswerCorrect,
    )

    const now = new Date()
    const updatedFSRSCardData = updateLocalFSRSCard(fsrsCardData, rating, now)
    // Persist to Supabase
    await upsertFSRSCardForUser({
      data: {
        practice_item_key: practiceItemKey,
        fsrs_card: updatedFSRSCardData.fsrs_card,
        // lesson_id and fsrs_log can be added if you have them
      },
    })

    const updatedCards = upsertFSRSCardInArray(
      fsrsCards, // fsrs card array to update
      updatedFSRSCardData, // updated fsrs card data
      practiceItemKey, // key of card to update
    )
    context.setDeckState({ moduleFSRSCards: updatedCards })

    console.log(
      `[FSRS] ${practiceItemKey} | Style: ${cardStyle} | Correct: ${context.gameState.isAnswerCorrect} | Rating: ${Rating[rating]}`,
    )
    console.log("[FSRS] Updated card and persisted to DB:", updatedFSRSCardData)
  } catch (err) {
    console.error("[FSRS] Error updating FSRS card:", err)
  }
  // --- FSRS INTEGRATION END ---

  // Update wrong answer count if answer is incorrect
  if (!context.gameState.isAnswerCorrect) {
    const wrongAnswerCount = getWrongAnswerCount(
      context.deckState.allCards,
      context.deckState.workingSet,
      context.gameState.currentCardIndex,
    )
    const cardIndex = context.deckState.allCards.findIndex(
      (card) => card.key === currentCard.key,
    )

    // Update the wrong answer count in the data array
    const updatedData = [...context.deckState.allCards]
    updatedData[cardIndex] = {
      ...updatedData[cardIndex],
      wrongAnswerCount: wrongAnswerCount + 1,
    }
    context.setDeckState({ allCards: updatedData })

    // Create new card with updated wrong answer count
    cardToAdd = {
      ...currentCard,
      wrongAnswerCount: wrongAnswerCount + 1,
    }
  }

  // Add the potentially updated card to seen card history
  const updatedSeenCardHistory = [
    ...context.deckState.recentlySeenCards,
    cardToAdd,
  ]
  context.setDeckState({ recentlySeenCards: updatedSeenCardHistory })

  handleMainPhase(context)

  context.setGameState({
    hasUserAnswered: false,
    isAnswerCorrect: false,
  })
}

function upsertFSRSCardInArray(
  cards: FSRSCardData[],
  updatedCard: FSRSCardData,
  practiceItemKey: string,
) {
  const exists = cards.some(
    (card) => card.practice_item_key === practiceItemKey,
  )
  if (exists) {
    return cards.map((card) =>
      card.practice_item_key === practiceItemKey ? updatedCard : card,
    )
  } else {
    return [...cards, updatedCard]
  }
}

function getWrongAnswerCount(
  allCards: Card[],
  workingSet: Card[],
  currentCardIndex: number,
) {
  const activeCardKey = workingSet[currentCardIndex].key
  const matchingEntry = allCards.find((card) => card.key === activeCardKey)

  let wrongAnswerCount = 0

  if (matchingEntry) {
    wrongAnswerCount = matchingEntry.wrongAnswerCount
  }
  return wrongAnswerCount
}

function handleMainPhase(context: VocabPracticeContextType) {
  const currentCard =
    context.deckState.workingSet[context.gameState.currentCardIndex]
  if (context.gameState.isAnswerCorrect) {
    if (currentCard.cardStyle === "write") {
      markCardAsComplete(context)
    } else {
      promoteCardToWriteMode(context)
    }
  } else {
    // if incorrect answer, cycle without changes
    handleIncorrectAnswer(context)
  }
}

function markCardAsComplete(context: VocabPracticeContextType) {
  const currentCard =
    context.deckState.workingSet[context.gameState.currentCardIndex]

  // Mark card as done in the main data array
  const cardIndex = context.deckState.allCards.findIndex(
    (card) => card.key === currentCard.key,
  )
  const updatedData = [...context.deckState.allCards]
  updatedData[cardIndex] = {
    ...updatedData[cardIndex],
    cardStyle: "done",
  }
  context.setDeckState({ allCards: updatedData })

  if (context.deckState.deckRefillIndex >= context.deckState.allCards.length) {
    cycleCards(context, "done")
  } else {
    removeAndAddNewCard(context)
  }
}

function promoteCardToWriteMode(context: VocabPracticeContextType) {
  cycleCards(context, "write")
}

function handleIncorrectAnswer(context: VocabPracticeContextType) {
  cycleCards(context, "multiple-choice")
}

function removeAndAddNewCard(context: VocabPracticeContextType) {
  const deckRefillIndex = context.deckState.deckRefillIndex
  const workingSet = context.deckState.workingSet
  const nextCardToAdd = context.deckState.allCards[deckRefillIndex]
  const newWorkingSet = [
    ...workingSet.slice(1, workingSet.length),
    nextCardToAdd,
  ]
  context.setDeckState({
    workingSet: newWorkingSet,
    deckRefillIndex: deckRefillIndex + 1,
  })
}

type CardStyle = "write" | "multiple-choice" | "done"

function cycleCards(context: VocabPracticeContextType, cardStyle: CardStyle) {
  const workingSet = context.deckState.workingSet
  const newWorkingSet = [...workingSet.slice(1), { ...workingSet[0] }]

  switch (cardStyle) {
    case "multiple-choice":
      newWorkingSet[workingSet.length - 1].cardStyle = "multiple-choice"
      break
    case "write":
      newWorkingSet[workingSet.length - 1].cardStyle = "write"
      break
    default:
      newWorkingSet[workingSet.length - 1].cardStyle = "done"
  }

  let loopIterations = 0
  while (
    newWorkingSet[context.gameState.currentCardIndex].cardStyle === "done"
  ) {
    newWorkingSet.push(newWorkingSet.shift()!)
    loopIterations++

    if (loopIterations === newWorkingSet.length) {
      // All cards are done, exit the loop
      // Let the context effect handle switch to finish page
      return
    }
  }

  context.setDeckState({ workingSet: newWorkingSet })
}
