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

    // If path includes a directory (e.g., "chapter-1/x-wa-y-desu"), use it directly
    if (path.includes("/")) {
      const filePath = `../data/${path}.json`
      if (filePath in questionModules) {
        return questionModules[filePath].default
      }
    }

    // Otherwise, search for the filename across all subdirectories
    const filename = `${path}.json`
    const matchingPath = Object.keys(questionModules).find((key) =>
      key.endsWith(`/${filename}`)
    )

    if (matchingPath) {
      return questionModules[matchingPath].default
    }

    throw new Error(`File not found: ${path}`)
  }
}
