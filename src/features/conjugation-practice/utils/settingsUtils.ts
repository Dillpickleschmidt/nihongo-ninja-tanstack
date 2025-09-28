import { ConjugationPracticeSettings } from "../schemas/settings"

/**
 * Validates the current settings to ensure at least one option is selected for each category.
 * @param settings - The current settings object.
 * @returns An object with boolean values indicating if each category is valid.
 */
export function validateSettings(settings: ConjugationPracticeSettings) {
  return {
    formValid:
      settings.normal ||
      settings.teForm ||
      settings.volitional ||
      settings.taiForm ||
      settings.tariForm ||
      settings.potential ||
      settings.imperative ||
      settings.conditional ||
      settings.passive ||
      settings.causative ||
      settings.causativePassive,
    partOfSpeechValid:
      settings.verb || settings.iAdjective || settings.naAdjective,
    speechLevelValid: settings.polite || settings.plain,
    tenseValid: settings.nonPast || settings.past,
    polarityValid: settings.positive || settings.negative,
  }
}

/**
 * Gets the selected JLPT levels based on the current setting.
 * @param jlptLevel - The current JLPT level setting.
 * @returns An array of JLPT levels to include.
 */
export function getJLPTLevels(jlptLevel: ConjugationPracticeSettings["jlptLevel"]): string[] {
  const levels = ["n5", "n4", "n3", "n2", "n1"]
  return levels.slice(0, levels.indexOf(jlptLevel) + 1)
}
