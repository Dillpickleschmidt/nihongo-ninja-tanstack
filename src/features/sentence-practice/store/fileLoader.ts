// store/fileLoader.ts
import type { UnprocessedQuestion } from "../core/conjugation/types"

export interface FileLoader {
  loadQuestionFile: (path: string) => Promise<UnprocessedQuestion[]>
}

// Test implementation
export class TestFileLoader implements FileLoader {
  private testData: Record<string, UnprocessedQuestion[]>

  constructor(testData: Record<string, UnprocessedQuestion[]> = {}) {
    this.testData = testData
  }

  async loadQuestionFile(path: string): Promise<UnprocessedQuestion[]> {
    if (path === "non/existent/path") {
      throw new Error("File not found")
    }

    if (path in this.testData) {
      return this.testData[path]
    }

    // Default test data if path not specified
    return [
      {
        english: "Hello.",
        answers: [
          {
            segments: [{ word: "こんにちは", blank: true }],
          },
        ],
      },
      {
        english: "Good morning.",
        answers: [
          {
            segments: [{ word: "おはよう", blank: true }, "ございます"],
          },
        ],
      },
      {
        english: "Good morning.",
        answers: [
          {
            segments: ["おはよう", "ございます"],
          },
        ],
      },
    ]
  }
}
