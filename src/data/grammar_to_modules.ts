import type { GrammarPatternId } from "./grammar_patterns"

/**
 * Maps grammar patterns to lesson module IDs
 * Each grammar pattern can be taught in one or more modules
 */
export const GRAMMAR_TO_MODULES: Partial<Record<GrammarPatternId, string[]>> = {
  "x_wa_y_desu": ["x-wa-y-desu", "sentence-practice-x-wa-y-desu", "wa-comparisons"],
  "ka_particle_ending": ["questions-with-ka", "sentence-practice-questions-with-ka"], // (only ending か - not 行くかどうかわからん)
  "no_particle_modifier": ["the-no-particle", "sentence-practice-the-no-particle"], // (not ending の - どこ行くの？)
  // "ga-particle_subject": ["ga-particle"],
  // "dare": ["dare", "sentence-practice-dare"],
  // "mo-also": ["mo-particle", "mo-particle1", "sentence-practice-mo-particle"],
  // "negative-noun": ["janai", "sentence-practice-janai"], // (also matches na-adjectives)
  "masu_form": ["verb-conj-masu", "conjugation-practice-masu"],
  "polite_negative": ["negative-masu-conj", "conjugation-practice-masu"],
  masen_ka: ["polite-invitations", "sentence-practice-polite-invitations"],
  // "adverb": ["adverbs", "sentence-practice-frequency-adverbs", "adj-to-adv"],
  // iru_standalone ["iru-aru", "sentence-practice-iru-aru"], // (no preceeding て-form verb like 食べている)
  // aru_standalone ["iru-aru", "sentence-practice-iru-aru"], // (no preceeding で like である)
  polite_past: ["polite-past-tense", "conjugation-practice-polite-past-tense-verbs"],
  // to-and: ["to-particle", "sentence-practice-to-particle"], // (and/with, not things like という)
  // i-adjective: ["adjective-conjugation", "conjugation-practice-adjective"],
  // na-adjective: ["adjective-conjugation", "conjugation-practice-adjective"],
  // adj-noun-modification: ["adj-modifying-nouns", "sentence-practice-adjectives"],
  polite_volitional: ["polite-volitional"],
  te_form: ["te-form", "conjugation-practice-te-form", "te-form-connection"],
  te_kudasai: ["te-kudasai"],
  te_mo_ii: ["te-mo-ii-desu"],
  te_wa_ikenai: ["te-wa-ikemasen"],
  // te_form_adj_nouns: ["te-form-adj-nouns"],
  // kara_reason: ["kara"],
  sou_desu_hearsay: ["sentence-practice-sou-desu-heresay"],
  // tte: ["sentence-practice-tte"],
  tara_conditional: ["sentence-practice-tara"],
  // honorific_verb: ["sentence-practice-honorific-verbs"],
  // extra_modest_verb: ["sentence-practice-extra-modest-expressions"],
  // humble_verb: ["sentence-practice-extra-modest-expressions"]
}

// Core lessons to add
/*
 * "welcome-overview"
 * "japanese-pronunciation"
 * "writing-systems"
 * "hiragana"
 * "dakuten-handakuten"
 * "contracted-sounds"
 * "long-vowels-paused-consonants"
 * "punctuation-misc"
 * "self-introductions"
 * "japanese-names-honorifics"
 * "saying-you-in-japanese"
 * "katakana"
 * "katakana-words-worksheet"
 * "introduction-to-kanji"
 * "kanji-radicals"
 * "word-order"
 */

// Lessons to consider for specific vocab matches (in addition to grammar patterns)
/*
 * "greetings"
 * "common-expressions"
 * "numbers-0-100"
 * "kanji-numbers"
 * "anou-etto"
 * "telling-time"
 * "minutes"
 * "words-that-point"
 * "ne-yo-particles", "sentence-practice-ne-yo"
 * "big-numbers"
 * "japanese-money", "practice-money"
 * "o-de-ni-e-particles"
 * "saying-and-so-but"
 * "where-things-are"
 * "jikan", "sentence-practice-duration"
 * "counters", "counter-practice"
 * "takusan"
 * "suki-kirai", "sentence-practice-suki-kirai"
 * "suru-vs-yaru"
 * "dame"
 * "body-parts"
 */
