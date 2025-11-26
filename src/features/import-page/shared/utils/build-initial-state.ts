// src/features/import-page/utils/build-initial-state.ts
import type { ImportSubCategory } from "../data/jlpt-data"
import type { ImportState } from "../types"

/**
 * Builds an initial import state from import data with status properties
 * Only includes items that have a defined status (skips undefined/null by default)
 */
export function buildInitialStateFromData(
  vocab: ImportSubCategory,
  kanji: ImportSubCategory,
): ImportState {
  const state: ImportState = {}

  vocab.items.forEach((item) => {
    state[item.id] = item.status ?? null
  })

  kanji.items.forEach((item) => {
    state[item.id] = item.status ?? null
  })

  return state
}
