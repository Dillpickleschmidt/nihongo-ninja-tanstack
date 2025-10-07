// store/createStore.ts
import { createPracticeStore } from "./practiceStore"
import { ViteFileLoader } from "./viteFileLoader"

export function createStore() {
  const fileLoader = new ViteFileLoader()
  return createPracticeStore(fileLoader)
}
