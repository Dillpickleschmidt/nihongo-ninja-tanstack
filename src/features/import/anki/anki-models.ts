export type AnkiModelDef = {
  modelName: string
  fields: string[]
  promptField: string
  answerField: string
  validAnswers: (raw: string) => string[]
  frontTemplate: string
  backTemplate: string
  css?: string
}

export const ANKI_MODELS = {
  vocabMeanings: {
    modelName: "NihongoNinja::VocabMeanings",
    fields: ["NnKey", "Word", "Meaning"],
    promptField: "Word",
    answerField: "Meaning",
    validAnswers: (raw: string) => raw.split(", "),
    frontTemplate: "{{Word}}",
    backTemplate: "{{FrontSide}}<hr>{{Meaning}}",
  },
  symbolMeanings: {
    modelName: "NihongoNinja::SymbolMeanings",
    fields: ["NnKey", "Symbol", "Meaning"],
    promptField: "Symbol",
    answerField: "Meaning",
    validAnswers: (raw: string) => raw.split(", "),
    frontTemplate: "{{Symbol}}",
    backTemplate: "{{FrontSide}}<hr>{{Meaning}}",
  },
  spellings: {
    modelName: "NihongoNinja::Spellings",
    fields: ["NnKey", "Meaning", "Spelling"],
    promptField: "Meaning",
    answerField: "Spelling",
    validAnswers: (raw: string) => [raw],
    frontTemplate: "{{Meaning}}",
    backTemplate: "{{FrontSide}}<hr>{{Spelling}}",
  },
} as const satisfies Record<string, AnkiModelDef>

export const ANKI_MODEL_BY_NAME = new Map<string, AnkiModelDef>(
  Object.values(ANKI_MODELS).map((m) => [m.modelName, m as AnkiModelDef]),
)

export function meaningsDeckName(pathName: string) {
  return `NihongoNinja::${pathName}::Meanings`
}

export function spellingsDeckName(pathName: string) {
  return `NihongoNinja::${pathName}::Spellings`
}
