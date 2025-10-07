// store/viteFileLoader.ts
import type { FileLoader } from "./fileLoader"
import type { PracticeQuestion } from "../core/answer-processing/types"

// No need to redeclare ImportMeta interface for glob property

export class ViteFileLoader implements FileLoader {
  async loadQuestionFile(path: string): Promise<PracticeQuestion[]> {
    const questionModules = import.meta.glob<{ default: PracticeQuestion[] }>(
      "../data/**/*.json",
      { eager: true },
    )
    const filePath = `../data/${path}.json`

    if (filePath in questionModules) {
      return questionModules[filePath].default
    }
    throw new Error(`File not found: ${filePath}`)
  }
}
