import type { RichAnswer } from "../../../core/types"

export type HierarchicalGroup = {
  sourceAnswerIndex: number
  polite: {
    pronounGroups: Map<
      string,
      {
        honorificGroups: Map<
          string,
          {
            kanji: RichAnswer[]
            kana: RichAnswer[]
          }
        >
      }
    >
  }
  casual: {
    pronounGroups: Map<
      string,
      {
        honorificGroups: Map<
          string,
          {
            kanji: RichAnswer[]
            kana: RichAnswer[]
          }
        >
      }
    >
  }
}

export function groupDebugAnswers(allAnswers: RichAnswer[]): HierarchicalGroup[] {
  const groups = new Map<number, HierarchicalGroup>()

  allAnswers.forEach((answer) => {
    const sourceIndex = answer.sourceAnswerIndex ?? 0
    const politeForm = answer.originalPoliteForm ? "polite" : "casual"
    const pronounType = answer.pronounType ?? "none"
    const honorificType = answer.honorificType ?? "none"
    const isKana = answer.isKanaVariation ?? false

    if (!groups.has(sourceIndex)) {
      groups.set(sourceIndex, {
        sourceAnswerIndex: sourceIndex,
        polite: { pronounGroups: new Map() },
        casual: { pronounGroups: new Map() },
      })
    }

    const group = groups.get(sourceIndex)!
    const formGroup = politeForm === "polite" ? group.polite : group.casual

    if (!formGroup.pronounGroups.has(pronounType)) {
      formGroup.pronounGroups.set(pronounType, {
        honorificGroups: new Map(),
      })
    }

    const pronounGroup = formGroup.pronounGroups.get(pronounType)!

    if (!pronounGroup.honorificGroups.has(honorificType)) {
      pronounGroup.honorificGroups.set(honorificType, {
        kanji: [],
        kana: [],
      })
    }

    const honorificGroup = pronounGroup.honorificGroups.get(honorificType)!

    if (isKana) {
      honorificGroup.kana.push(answer)
    } else {
      honorificGroup.kanji.push(answer)
    }
  })

  return Array.from(groups.values()).sort(
    (a, b) => a.sourceAnswerIndex - b.sourceAnswerIndex,
  )
}
