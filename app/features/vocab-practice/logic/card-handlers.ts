// vocab-practice/logic/card-handlers.ts
import { VocabPracticeContextType } from "../context/VocabPracticeContext"
import type { Card } from "@/data/types"

export function handleNextQuestion(context: VocabPracticeContextType) {
  const currentCard =
    context.deckState.activeDeck[context.gameState.currentCardIndex]
  let cardToAdd = currentCard

  // Update wrong answer count if answer is incorrect
  if (!context.gameState.isAnswerCorrect) {
    const wrongAnswerCount = getWrongAnswerCount(
      context.deckState.data,
      context.deckState.activeDeck,
      context.gameState.currentCardIndex,
    )
    const cardIndex = context.deckState.data.findIndex(
      (card) => card.key === currentCard.key,
    )

    // Update the wrong answer count in the data array
    const updatedData = [...context.deckState.data]
    updatedData[cardIndex] = {
      ...updatedData[cardIndex],
      wrongAnswerCount: wrongAnswerCount + 1,
    }
    context.setDeckState({ data: updatedData })

    // Create new card with updated wrong answer count
    cardToAdd = {
      ...currentCard,
      wrongAnswerCount: wrongAnswerCount + 1,
    }
  }

  // Add the potentially updated card to recently seen cards
  const updatedRecentlySeenCards = [
    ...context.deckState.recentlySeenCards,
    cardToAdd,
  ]
  context.setDeckState({ recentlySeenCards: updatedRecentlySeenCards })

  handleMainPhase(context)

  context.setGameState({
    hasUserAnswered: false,
    isAnswerCorrect: false,
  })
}

function getWrongAnswerCount(
  data: Card[],
  activeDeck: Card[],
  currentCardIndex: number,
) {
  const activeCardKey = activeDeck[currentCardIndex].key
  const matchingEntry = data.find((card) => card.key === activeCardKey)

  let wrongAnswerCount = 0

  if (matchingEntry) {
    wrongAnswerCount = matchingEntry.wrongAnswerCount
  }
  return wrongAnswerCount
}

function handleMainPhase(context: VocabPracticeContextType) {
  const currentCard =
    context.deckState.activeDeck[context.gameState.currentCardIndex]
  if (context.gameState.isAnswerCorrect) {
    if (currentCard.cardStyle === "write") {
      // Mark card as done in the main data array
      const cardIndex = context.deckState.data.findIndex(
        (card) => card.key === currentCard.key,
      )
      const updatedData = [...context.deckState.data]
      updatedData[cardIndex] = {
        ...updatedData[cardIndex],
        cardStyle: "done",
      }
      context.setDeckState({ data: updatedData })

      if (context.deckState.deckRefillIndex >= context.deckState.data.length) {
        cycleCards(context, "done")
      } else {
        removeAndAddNewCard(context)
      }
    } else {
      // turn it into write and cycle
      cycleCards(context, "write")
    }
  } else {
    // if incorrect answer, cycle without changes
    cycleCards(context, "multiple-choice")
  }
}

function removeAndAddNewCard(context: VocabPracticeContextType) {
  const deckRefillIndex = context.deckState.deckRefillIndex
  const activeDeck = context.deckState.activeDeck
  const nextCardToAdd = context.deckState.data[deckRefillIndex]
  const newActiveDeck = [
    ...activeDeck.slice(1, activeDeck.length),
    nextCardToAdd,
  ]
  context.setDeckState({
    activeDeck: newActiveDeck,
    deckRefillIndex: deckRefillIndex + 1,
  })
}

type CardStyle = "write" | "multiple-choice" | "done"

function cycleCards(context: VocabPracticeContextType, cardStyle: CardStyle) {
  const activeDeck = context.deckState.activeDeck
  const newActiveDeck = [...activeDeck.slice(1), { ...activeDeck[0] }]

  switch (cardStyle) {
    case "multiple-choice":
      newActiveDeck[activeDeck.length - 1].cardStyle = "multiple-choice"
      break
    case "write":
      newActiveDeck[activeDeck.length - 1].cardStyle = "write"
      break
    default:
      newActiveDeck[activeDeck.length - 1].cardStyle = "done"
  }

  let loopIterations = 0
  while (
    newActiveDeck[context.gameState.currentCardIndex].cardStyle === "done"
  ) {
    newActiveDeck.push(newActiveDeck.shift()!)
    loopIterations++

    if (loopIterations === newActiveDeck.length) {
      context.setGameState({ currentPage: "finish" })
      return
    }
  }

  context.setDeckState({ activeDeck: newActiveDeck })
}
