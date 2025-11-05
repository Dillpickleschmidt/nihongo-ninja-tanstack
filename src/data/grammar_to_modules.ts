import type { GrammarPatternId } from "./grammar_patterns"

/**
 * Maps grammar patterns to lesson module IDs
 * Each grammar pattern can be taught in one or more modules
 */
export const GRAMMAR_TO_MODULES: Partial<Record<GrammarPatternId, string[]>> = {
  // Example mapping (populate this as you create lesson modules)
  // 'te_form': ['genki_1_ch13-grammar', 'genki_1_ch13-practice'],
  // 'past_tense': ['genki_1_ch9-grammar'],
}
