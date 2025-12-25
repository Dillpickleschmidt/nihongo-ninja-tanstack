import { batch } from "solid-js"
import { createStore, produce } from "solid-js/store"
import type { ItemStatus } from "../status"
import type { PracticeItemType } from "convex/validators"

export interface OverrideItem {
  key: string
  type: PracticeItemType
}

type OverridesByType = Record<PracticeItemType, Record<string, ItemStatus>>

export function useStatusOverrides() {
  const [overrides, setOverrides] = createStore<OverridesByType>({
    vocabulary: {},
    kanji: {},
    radical: {},
  })

  const setOverride = (key: string, type: PracticeItemType, status: ItemStatus) => {
    setOverrides(type, key, status)
  }

  const clearOverride = (key: string, type: PracticeItemType) => {
    setOverrides(type, produce((state) => {
      delete state[key]
    }))
  }

  const clearOverrides = (items: OverrideItem[]) => {
    batch(() => {
      for (const { key, type } of items) {
        setOverrides(type, produce((state) => {
          delete state[key]
        }))
      }
    })
  }

  const applyToSelected = (items: OverrideItem[], status: ItemStatus) => {
    batch(() => {
      for (const { key, type } of items) {
        setOverrides(type, key, status)
      }
    })
  }

  const hasOverride = (key: string, type: PracticeItemType): boolean =>
    key in overrides[type]

  const getOverride = (key: string, type: PracticeItemType): ItemStatus =>
    overrides[type][key] ?? null

  return {
    overrides,
    setOverride,
    clearOverride,
    clearOverrides,
    applyToSelected,
    hasOverride,
    getOverride,
  }
}

export type StatusOverrides = ReturnType<typeof useStatusOverrides>
