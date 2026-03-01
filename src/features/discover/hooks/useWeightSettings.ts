import { createSignal } from "solid-js"

export interface Weights {
  jlpt: number
  vocab: number
  prefs: number
}

const [globalWeights, setGlobalWeightsRaw] = createSignal<Weights>(
  { jlpt: 33, vocab: 33, prefs: 34 },
)
const [categoryOverrides, setCategoryOverridesRaw] = createSignal<
  Record<string, Weights>
>({})
const [overridesEnabled, setOverridesEnabledRaw] = createSignal(false)
const [largeCards, setLargeCardsRaw] = createSignal<Record<string, boolean>>(
  {},
)

export function setGlobalWeights(weights: Weights) {
  setGlobalWeightsRaw(weights)
}

export function setCategoryOverride(key: string, weights: Weights) {
  setCategoryOverridesRaw((prev) => ({ ...prev, [key]: weights }))
}

export function setOverridesEnabled(enabled: boolean) {
  setOverridesEnabledRaw(enabled)
}

export function setLargeCards(key: string, large: boolean) {
  setLargeCardsRaw((prev) => ({ ...prev, [key]: large }))
}

export function isLargeCards(key: string, defaultLarge: boolean): boolean {
  const override = largeCards()[key]
  return override !== undefined ? override : defaultLarge
}

export function getWeightsForCategory(categoryKey: string): Weights {
  if (overridesEnabled() && categoryOverrides()[categoryKey]) {
    return categoryOverrides()[categoryKey]
  }
  return globalWeights()
}

export {
  globalWeights,
  categoryOverrides,
  overridesEnabled,
}
