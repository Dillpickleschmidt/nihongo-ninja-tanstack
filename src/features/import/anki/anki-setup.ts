import {
  getModelNames,
  getModelFieldNames,
  createModel,
  createDeck,
} from "./anki-connect-client"
import {
  ANKI_MODELS,
  meaningsDeckName,
  spellingsDeckName,
} from "./anki-models"

export async function ensureAnkiModels(): Promise<void> {
  const existingModels = await getModelNames()

  for (const def of Object.values(ANKI_MODELS)) {
    if (!existingModels.includes(def.modelName)) {
      await createModel(
        def.modelName,
        [...def.fields],
        [{ Name: "Card 1", Front: def.frontTemplate, Back: def.backTemplate }],
        "css" in def ? (def.css as string) : undefined,
      )
    } else {
      const fields = await getModelFieldNames(def.modelName)
      if (
        fields.length !== def.fields.length ||
        fields.some((f, i) => f !== def.fields[i])
      ) {
        throw new Error(
          `Anki model "${def.modelName}" has mismatched fields. ` +
            `Expected [${def.fields.join(", ")}] but found [${fields.join(", ")}]. ` +
            `Please delete the model in Anki and restart.`,
        )
      }
    }
  }
}

export async function ensureAnkiDecks(pathSegments: string[]): Promise<{
  meaningsDeck: string
  spellingsDeck: string
}> {
  const mDeck = meaningsDeckName(pathSegments)
  const sDeck = spellingsDeckName(pathSegments)
  await Promise.all([createDeck(mDeck), createDeck(sDeck)])
  return { meaningsDeck: mDeck, spellingsDeck: sDeck }
}

export async function ensureAnkiSetup(pathSegments: string[]): Promise<{
  meaningsDeck: string
  spellingsDeck: string
}> {
  await ensureAnkiModels()
  return await ensureAnkiDecks(pathSegments)
}
