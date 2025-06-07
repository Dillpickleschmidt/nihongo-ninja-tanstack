// vocab-practice/logic/card-handlers.ts
import { VocabPracticeContextType } from "../context/VocabPracticeContext"
import type { Card } from "@/data/types"

export function handleNextQuestion(context: VocabPracticeContextType) {
  const currentCard =
    context.deckState.workingSet[context.gameState.currentCardIndex]
  let cardToAdd = currentCard

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
      context.setGameState({ currentPage: "finish" })
      return
    }
  }

  context.setDeckState({ workingSet: newWorkingSet })
}
