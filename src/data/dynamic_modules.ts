import type { DynamicModuleCollection } from "./types"

export const dynamic_modules: DynamicModuleCollection = {
  hiragana: {
    title: "Hiragana",
    session_type: "vocab-practice",
    vocab_set_ids: ["hiragana"],
    instructions: "Practice writing and recognizing these hiragana characters.",
  },
  "hiragana-quiz": {
    title: "Hiragana Quiz",
    session_type: "vocab-test",
    vocab_set_ids: ["hiragana"],
    instructions: "Test your knowledge of these hiragana characters.",
  },
  "dakuten-handakuten": {
    title: "Dakuten & Handakuten",
    session_type: "vocab-practice",
    vocab_set_ids: ["dakuten-handakuten"],
    instructions:
      "Practice voiced (dakuten) and semi-voiced (handakuten) hiragana.",
  },
  "dakuten-handakuten-quiz": {
    title: "Dakuten & Handakuten Quiz",
    session_type: "vocab-test",
    vocab_set_ids: ["dakuten-handakuten"],
    instructions: "Test your knowledge of modified hiragana characters.",
  },
  "contracted-sounds": {
    title: "Contracted Sounds",
    session_type: "vocab-practice",
    vocab_set_ids: ["contracted-sounds"],
    instructions:
      "Practice recognizing and writing contracted hiragana sounds.",
  },
  "contracted-sounds-quiz": {
    title: "Contracted Sounds Quiz",
    session_type: "vocab-test",
    vocab_set_ids: ["contracted-sounds"],
    instructions: "Test your knowledge of contracted hiragana sounds.",
  },
  "all-hiragana-quiz": {
    title: "All Hiragana Quiz",
    session_type: "vocab-test",
    vocab_set_ids: ["all-hiragana-quiz"],
    instructions: "A comprehensive quiz covering all hiragana characters.",
  },
  "genki_1_ch0-vocab-list": {
    title: "Chapter 0 Vocabulary List",
    session_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch0-vocab-list"],
    instructions: "Review the vocabulary for this introductory chapter.",
  },
  "genki_1_ch0_greetings-common-expressions": {
    title: "Greetings & Common Expressions",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch0_greetings-common-expressions"],
    instructions: "Practice using these essential greetings and expressions.",
  },
  "genki_1_ch0_numbers-0-10": {
    title: "Numbers 0-10",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch0_numbers-0-10"],
    instructions: "Practice recognizing and saying numbers from 0 to 10.",
  },
  "genki_1_ch0_numbers-11-100": {
    title: "Numbers 11-100",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch0_numbers-11-100"],
    instructions: "Practice numbers from 11 to 100.",
  },

  // Chapter 1 Dynamic Modules
  "genki_1_ch1_vocab-list": {
    title: "Chapter 1 Vocab List",
    session_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch1_vocab-list"],
    instructions: "Review the vocabulary for Chapter 1.",
  },
  "genki_1_ch1_kanji-numbers": {
    title: "Kanji Numbers",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch1_kanji-numbers"],
    instructions: "Practice recognizing and writing Kanji numbers.",
  },
  "genki_1_ch1_people-descriptors-misc": {
    title: "People, Descriptors, Misc.",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch1_people-descriptors-misc"],
    instructions:
      "Practice vocabulary related to people, descriptors, and miscellaneous terms.",
  },
  "genki_1_ch1_family-school": {
    title: "Family & School",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch1_family-school"],
    instructions: "Practice vocabulary related to family and school.",
  },
  "sentence-practice-x-wa-y-desu": {
    title: "X は Y です Practice Sentences",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-x-wa-y-desu"],
    instructions:
      "Practice creating and understanding sentences using the pattern X は Y です.",
  },
  "genki_1_ch1_occupations-majors": {
    title: "Occupations & Majors",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch1_occupations-majors"],
    instructions: "Practice vocabulary related to occupations and majors.",
  },
  "genki_1_ch1_countries-time": {
    title: "Countries & Time",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch1_countries-time"],
    instructions: "Practice vocabulary related to countries and time.",
  },
  "sentence-practice-questions-with-ka": {
    title: "Questions with か",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-questions-with-ka"],
    instructions: "Practice forming and answering questions using か.",
  },
  "sentence-practice-the-no-particle": {
    title: "Modifying Nouns: の",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-the-no-particle"],
    instructions: "Practice using the particle の to modify nouns.",
  },
  "genki_1_ch1_telling-time": {
    title: "Time",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch1_telling-time"],
    instructions: "Practice telling time in Japanese.",
  },
  genki_1_ch1_minutes: {
    title: "Minutes",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch1_minutes"],
    instructions: "Practice counting minutes in Japanese.",
  },

  // Chapter 2 Dynamic Modules
  "genki_1_ch2_vocab-list": {
    title: "Chapter 2 Vocab List",
    session_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch2_vocab-list"],
    instructions: "Review the vocabulary for Chapter 2.",
  },
  katakana: {
    title: "Katakana",
    session_type: "vocab-practice",
    vocab_set_ids: [], // FIX
    instructions: "Practice writing and recognizing Katakana characters.",
  },
  "katakana-quiz": {
    title: "Katakana Quiz",
    session_type: "vocab-test",
    vocab_set_ids: [], // FIX
    instructions: "Test your knowledge of Katakana characters.",
  },
  genki_1_ch2_things: {
    title: "Things",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch2_things"],
    instructions: "Practice vocabulary for common objects.",
  },
  "sentence-practice-words-that-point": {
    title: "Words That Point Sentences",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-words-that-point"],
    instructions:
      "Practice creating and understanding sentences using demonstrative pronouns.",
  },
  "sentence-practice-dare": {
    title: "だれ",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-dare"],
    instructions: "Practice asking questions using だれ.",
  },
  "sentence-practice-mo-particle": {
    title: "Saying also with も",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-mo-particle"],
    instructions: "Practice using the particle も to mean 'also' or 'too'.",
  },
  "sentence-practice-janai": {
    title: "じゃないです - Is not...",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-janai"],
    instructions: "Practice forming negative statements using じゃないです.",
  },
  "sentence-practice-ne-yo": {
    title: "ね, よ",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-ne-yo"],
    instructions:
      "Practice using the particles ね and よ to soften or emphasize statements.",
  },
  "genki_1_ch2_places-money-food": {
    title: "Places, Money, Food",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch2_places-money-food"],
    instructions: "Practice vocabulary related to places, money, and food.",
  },
  "genki_1_ch2_all-vocab-test": {
    title: "All Vocab - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_1_ch2_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 2.",
  },

  // Chapter 3 Dynamic Modules
  "genki_1_ch3_vocab-list": {
    title: "Chapter 3 Vocab List",
    session_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch3_vocab-list"],
    instructions: "Review the vocabulary for Chapter 3.",
  },
  "genki_1_ch3_chapter-1-kanji-part-1": {
    title: "Chapter 1 Kanji Part 1",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_chapter-1-kanji-part-1"],
    instructions: "Practice Kanji from Chapter 1, Part 1.",
  },
  "genki_1_ch3_chapter-1-kanji-part-2": {
    title: "Chapter 1 Kanji Part 2",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_chapter-1-kanji-part-2"],
    instructions: "Practice Kanji from Chapter 1, Part 2.",
  },
  "genki_1_ch3_chapter-1-kanji-part-3": {
    title: "Chapter 1 Kanji Part 3",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_chapter-1-kanji-part-3"],
    instructions: "Practice Kanji from Chapter 1, Part 3.",
  },
  "genki_1_ch3_chapter-2-kanji": {
    title: "Chapter 2 Kanji",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_chapter-2-kanji"], // FIX
    instructions: "Practice Kanji from Chapter 2.",
  },
  genki_1_ch3_nouns: {
    title: "Nouns",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_nouns"],
  },
  "genki_1_ch3_days-and-time": {
    title: "Days & Time",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_days-and-time"],
  },
  "genki_1_ch3_verbs-and-adj": {
    title: "Verbs & Adj.",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_verbs-and-adj"],
  },
  "sentence-practice-o-de-ni-e-particles": {
    title: "Particles - を, で, に, へ",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-o-de-ni-e-particles"],
    instructions:
      "Practice using the particles を, で, に, and へ in sentences.",
  },
  "sentence-practice-polite-invitations": {
    title: "Polite Invitations - ませんか",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-polite-invitations"],
    instructions: "Practice forming and responding to polite invitations.",
  },
  "genki_1_ch3_adverbs-expressions": {
    title: "Adv. & Expres.",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_adverbs-expressions"],
  },
  "genki_1_ch3_all-vocab-test": {
    title: "All Vocab - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_1_ch3_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 3.",
  },
  "sentence-practice-time-expressions": {
    title: "Time Expressions",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-time-expressions"],
    instructions: "Practice using time expressions in sentences.",
  },
  "sentence-practice-frequency-adverbs": {
    vocab_set_ids: ["sentence-practice-frequency-adverbs"],
    title: "Frequency Adverbs",
    session_type: "sentence-practice",
    instructions: "Practice using frequency adverbs in sentences.",
  },
  "genki_1_ch4_vocab-list": {
    title: "Chapter 4 Vocab List",
    session_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch4_vocab-list"],
    instructions: "Review the vocabulary for Chapter 4.",
  },
  "genki_1_ch4_nouns-1": {
    title: "Nouns 1",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch4_nouns-1"],
  },
  "genki_1_ch4_nouns-2": {
    title: "Nouns 2",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch4_nouns-2"],
  },
  "genki_1_ch4_location-words": {
    title: "Location Words",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch4_location-words"],
  },
  "sentence-practice-iru-aru": {
    title: "いる・ある",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-iru-aru"],
    instructions: "Practice using いる and ある to express existence.",
  },
  "sentence-practice-where-things-are": {
    title: "Where Things Are",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-where-things-are"],
    instructions:
      "Practice forming sentences indicating the location of things.",
  },
  "genki_1_ch4_verbs-adv-misc": {
    title: "V, Adv, & Misc.",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch4_verbs-adv-misc"],
  },
  "genki_1_ch4_all-vocab-test": {
    title: "All Vocab - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_1_ch4_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 4.",
  },
  "sentence-practice-deshita-past-tense-verbs": {
    title: "でした + Past-Tense Verbs",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-deshita-past-tense-verbs"],
    instructions: "Practice using でした and past-tense verbs in sentences.",
  },
  "sentence-practice-to-particle": {
    title: "と",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-to-particle"],
    instructions: "Practice using the particle と to mean 'and' or 'with'.",
  },
  "sentence-practice-duration": {
    title: "Time Duration",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-duration"],
    instructions: "Practice expressing durations of time.",
  },

  // Chapter 5 Dynamic Modules
  "genki_1_ch5_vocab-list": {
    title: "Chapter 5 Vocab List",
    session_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch5_vocab-list"],
    instructions: "Review the vocabulary for Chapter 5.",
  },
  genki_1_ch5_nouns: {
    title: "Nouns 1",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch5_nouns"],
  },
  "genki_1_ch5_i-adjectives": {
    title: "い Adjectives",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch5_i-adjectives"],
  },
  "genki_1_ch5_na-adjectives": {
    title: "な Adjectives",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch5_na-adjectives"],
  },
  "sentence-practice-adjectives": {
    title: "Adjectives in Sentences",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-adjectives"],
    instructions: "Practice using adjectives in sentences.",
  },
  "sentence-practice-suki-kirai": {
    title: "好き・嫌い Sentences",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-suki-kirai"],
    instructions: "Practice forming sentences expressing likes and dislikes.",
  },
  "genki_1_ch5_verbs-adv-misc": {
    title: "Verbs, Adv, & Misc.",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch5_verbs-adv-misc"],
  },
  "genki_1_ch5_all-vocab-test": {
    title: "All Vocab - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_1_ch5_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 5.",
  },

  // Chapter 6 Dynamic Modules
  "genki_1_ch6_vocab-list": {
    title: "Chapter 6 Vocab List",
    session_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch6_vocab-list"],
    instructions: "Review the vocabulary for Chapter 6.",
  },
  genki_1_ch6_nouns: {
    title: "Nouns",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch6_nouns"],
  },
  "genki_1_ch6_u-verbs-and-adj": {
    title: "U-V & Adj",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch6_u-verbs-and-adj"],
  },
  "genki_1_ch6_ru-v-irr-v-adv-misc": {
    title: "Ru-V, Irr-V, & Misc.",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch6_ru-v-irr-v-adv-misc"],
  },
  "genki_1_ch6_all-vocab-test": {
    title: "All Vocab - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_1_ch6_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 6.",
  },

  // Chapter 7 Dynamic Modules
  "genki_1_ch7_vocab-list": {
    title: "Chapter 7 Vocab List",
    session_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch7_vocab-list"],
    instructions: "Review the vocabulary for Chapter 7.",
  },
  "genki_1_ch7_nouns-1": {
    title: "Nouns 1",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch7_nouns-1"],
  },
  "genki_1_ch7_body-parts": {
    title: "Body Parts",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch7_body-parts"],
  },
  genki_1_ch7_verbs: {
    title: "Verbs",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch7_verbs"],
  },
  "genki_1_ch7_adj-adv-misc": {
    title: "Adj, Adv, & Misc.",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch7_adj-adv-misc"],
  },
  "genki_1_ch7_all-vocab-test": {
    title: "All Vocab - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_1_ch7_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 7.",
  },

  // Chapter 8 Dynamic Modules
  "genki_1_ch8_vocab-list": {
    title: "Chapter 8 Vocab List",
    session_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch8_vocab-list"],
    instructions: "Review the vocabulary for Chapter 8.",
  },
  "genki_1_ch8_nouns-1": {
    title: "Nouns 1",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch8_nouns-1"],
  },
  "genki_1_ch8_nouns-2": {
    title: "Nouns 2",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch8_nouns-2"],
  },
  genki_1_ch8_verbs: {
    title: "Verbs",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch8_verbs"],
  },
  "genki_1_ch8_adj-adv-misc": {
    title: "Adj, Adv, & Misc.",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch8_adj-adv-misc"],
  },
  "genki_1_ch8_all-vocab-test": {
    title: "All Vocab - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_1_ch8_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 8.",
  },

  // Chapter 9 Dynamic Modules
  "genki_1_ch9_vocab-list": {
    title: "Chapter 9 Vocab List",
    session_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch9_vocab-list"],
    instructions: "Review the vocabulary for Chapter 9.",
  },
  genki_1_ch9_nouns: {
    title: "Nouns",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch9_nouns"],
  },
  "genki_1_ch9_small-item-counters": {
    title: "Small Item Counters",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch9_small-item-counters"],
  },
  genki_1_ch9_verbs: {
    title: "Verbs",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch9_verbs"],
  },
  "genki_1_ch9_adj-adv-misc": {
    title: "Adj, Adv, & Misc.",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch9_adj-adv-misc"],
  },
  "genki_1_ch9_all-vocab-test": {
    title: "All Vocab - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_1_ch9_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 9.",
  },

  // Chapter 10 Dynamic Modules
  "genki_1_ch10_vocab-list": {
    title: "Chapter 10 Vocab List",
    session_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch10_vocab-list"],
    instructions: "Review the vocabulary for Chapter 10.",
  },
  "genki_1_ch10_nouns-1": {
    title: "Nouns 1",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch10_nouns-1"],
  },
  "genki_1_ch10_nouns-2": {
    title: "Nouns 2",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch10_nouns-2"],
  },
  genki_1_ch10_verbs: {
    title: "Verbs",
    session_type: "vocab-practice",
    vocab_set_ids: [], // FIX
  },
  "genki_1_ch10_adj-adv-misc": {
    title: "Adj, Adv, & Misc.",
    session_type: "vocab-practice",
    vocab_set_ids: [], // FIX
  },
  "genki_1_ch10_all-vocab-test": {
    title: "All Vocab - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_1_ch10_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 10.",
  },

  // Chapter 11 Dynamic Modules
  "genki_1_ch11_vocab-list": {
    title: "Chapter 11 Vocab List",
    session_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch11_vocab-list"],
    instructions: "Review the vocabulary for Chapter 11.",
  },
  "genki_1_ch11_nouns-1": {
    title: "Nouns 1",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch11_nouns-1"],
  },
  "genki_1_ch11_nouns-2": {
    title: "Nouns 2",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch11_nouns-2"],
  },
  "genki_1_ch11_ru-v-u-v": {
    title: "Ru and U-Verbs",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch11_ru-v-u-v"],
  },
  "genki_1_ch11_irr-v-adv-misc": {
    title: "Irr. V, Adv, & Misc.",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch11_irr-v-adv-misc"],
  },
  genki_1_ch11_occupations: {
    title: "Occupations",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch11_occupations"],
  },
  "genki_1_ch11_all-vocab-test": {
    title: "All Vocab - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_1_ch11_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 11.",
  },

  // Chapter 12 Dynamic Modules
  "genki_1_ch12_vocab-list": {
    title: "Chapter 12 Vocab List",
    session_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch12_vocab-list"],
    instructions: "Review the vocabulary for Chapter 12.",
  },
  "genki_1_ch12_nouns-1": {
    title: "Nouns 1",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch12_nouns-1"],
  },
  "genki_1_ch12_nouns-2": {
    title: "Nouns 2",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch12_nouns-2"],
  },
  genki_1_ch12_verbs: {
    title: "Verbs",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch12_verbs"],
  },
  "genki_1_ch12_adj-adv-misc": {
    title: "Adj, Adv, & Misc.",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch12_adj-adv-misc"],
  },
  "genki_1_ch12_all-vocab-test": {
    title: "All Vocab - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_1_ch12_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 12.",
  },

  // Chapter 13 Dynamic Modules
  "genki_2_ch13_vocab-list": {
    title: "Chapter 13 Vocab List",
    session_type: "vocab-list",
    vocab_set_ids: ["genki_2_ch13_vocab-list"],
    instructions: "Review the vocabulary for Chapter 13.",
  },
  genki_2_ch13_nouns: {
    title: "Nouns",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch13_nouns"],
  },
  "genki_2_ch13_adj-and-verbs": {
    title: "Adj & Verbs",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch13_adj-and-verbs"],
  },
  "genki_2_ch13_day-count-and-misc": {
    title: "Day Count & Misc.",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch13_day-count-and-misc"],
  },
  "genki_2_ch13_all-vocab-test": {
    title: "All Vocab - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch13_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 13.",
  },

  // Chapter 14 Dynamic Modules
  "genki_2_ch14_vocab-list": {
    title: "Chapter 14 Vocab List",
    session_type: "vocab-list",
    vocab_set_ids: ["genki_2_ch14_vocab-list"],
    instructions: "Review the vocabulary for Chapter 14.",
  },
  "genki_2_ch14_nouns-1": {
    title: "Nouns 1",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch14_nouns-1"],
  },
  "genki_2_ch14_nouns-2": {
    title: "Nouns 2",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch14_nouns-2"],
  },
  "genki_2_ch14_adj-and-verbs": {
    title: "Adj & Verbs",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch14_adj-and-verbs"],
  },
  "genki_2_ch14_counters-adv-misc": {
    title: "Counters, Adv., & Misc.",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch14_counters-adv-misc"],
  },
  "genki_2_ch14_all-vocab-test": {
    title: "All Vocab - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch14_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 14.",
  },

  // Chapter 15 Dynamic Modules
  "genki_2_ch15_vocab-list": {
    title: "Chapter 15 Vocab List",
    session_type: "vocab-list",
    vocab_set_ids: ["genki_2_ch15_vocab-list"],
    instructions: "Review the vocabulary for Chapter 15.",
  },
  "genki_2_ch15_nouns-1": {
    title: "Nouns 1",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch15_nouns-1"],
  },
  "genki_2_ch15_nouns-2": {
    title: "Nouns 2",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch15_nouns-2"],
  },
  "genki_2_ch15_godan-and-ichidan-v": {
    title: "Ichidan & Godan V.",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch15_godan-and-ichidan-v"],
  },
  "genki_2_ch15_irr-v-adv-misc": {
    title: "Irreg Verbs, Adv., & Misc.",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch15_irr-v-adv-misc"],
  },
  "genki_2_ch15_all-vocab-test": {
    title: "All Vocab - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch15_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 15.",
  },

  // Chapter 16 Dynamic Modules
  "genki_2_ch16_vocab-list": {
    title: "Chapter 16 Vocab List",
    session_type: "vocab-list",
    vocab_set_ids: ["genki_2_ch16_vocab-list"],
    instructions: "Review the vocabulary for Chapter 16.",
  },
  genki_2_ch16_nouns: {
    title: "Nouns",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch16_nouns"],
  },
  "genki_2_ch16_adj-and-u-v": {
    title: "Adj. & U-V",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch16_adj-and-u-v"],
  },
  "genki_2_ch16_ru-and-irr-v": {
    title: "Ru-V & Irreg V",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch16_ru-and-irr-v"],
  },
  "genki_2_ch16_adv-and-misc": {
    title: "Adv & Misc.",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch16_adv-and-misc"],
  },
  "genki_2_ch16_all-vocab-test": {
    title: "All Vocab - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch16_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 16.",
  },

  // Chapter 17 Dynamic Modules
  "genki_2_ch17_vocab-list": {
    title: "Chapter 17 Vocab List",
    session_type: "vocab-list",
    vocab_set_ids: ["genki_2_ch17_vocab-list"],
    instructions: "Review the vocabulary for Chapter 17.",
  },
  "genki_2_ch17_nouns-1": {
    title: "Nouns 1",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch17_nouns-1"],
  },
  "genki_2_ch17_nouns-2": {
    title: "Nouns 2",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch17_nouns-2"],
  },
  genki_2_ch17_verbs: {
    title: "Verbs",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch17_verbs"],
  },
  "genki_2_ch17_adj-adv-misc": {
    title: "Adj, Adv, & Misc.",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch17_adj-adv-misc"],
  },
  "genki_2_ch17_all-vocab-test": {
    title: "All Vocab - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch17_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 17.",
  },
  "sentence-practice-sou-desu-heresay": {
    title: "～そうです - Heresay Practice",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-sou-desu-heresay"],
    instructions: "Practice using ～そうです to report what you've heard.",
  },
  "sentence-practice-tte": {
    title: "～って Practice",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-tte"],
    instructions: "Practice using the casual particle ～って.",
  },
  "sentence-practice-tara": {
    title: "～たら Practice",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-tara"],
    instructions: "Practice using the conditional form ～たら.",
  },

  // Chapter 18 Dynamic Modules
  "genki_2_ch18_vocab-list": {
    title: "Chapter 18 Vocab List",
    session_type: "vocab-list",
    vocab_set_ids: ["genki_2_ch18_vocab-list"],
    instructions: "Review the vocabulary for Chapter 18.",
  },
  "genki_2_ch18_nouns-1": {
    title: "Nouns 1",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch18_nouns-1"],
  },
  "genki_2_ch18_nouns-2-and-adjectives": {
    title: "Nouns 2 & Adj",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch18_nouns-2-and-adjectives"],
  },
  "genki_2_ch18_u-and-irr-verbs": {
    title: "U & Irr Verbs",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch18_u-and-irr-verbs"],
  },
  "genki_2_ch18_ru-verbs-and-misc": {
    title: "Ru Verbs & Misc.",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch18_ru-verbs-and-misc"],
  },
  "genki_2_ch18_all-vocab-test": {
    title: "All Vocab - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch18_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 18.",
  },

  // Chapter 19 Dynamic Modules
  "genki_2_ch19_vocab-list": {
    title: "Chapter 19 Vocab List",
    session_type: "vocab-list",
    vocab_set_ids: ["genki_2_ch19_vocab-list"],
    instructions: "Review the vocabulary for Chapter 19.",
  },
  "genki_2_ch19_chapter-13-18-nouns": {
    title: "Ch. 13-18 Nouns - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch19_chapter-13-18-nouns"],
    instructions: "Test your knowledge of nouns from Chapters 13-18.",
  },
  "genki_2_ch19_chapter-13-18-adjectives": {
    title: "Ch. 13-18 Adjectives - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch19_chapter-13-18-adjectives"],
    instructions: "Test your knowledge of adjectives from Chapters 13-18.",
  },
  "genki_2_ch19_chapter-13-18-verbs": {
    title: "Ch. 13-18 Verbs - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch19_chapter-13-18-verbs"],
    instructions: "Test your knowledge of verbs from Chapters 13-18.",
  },
  "genki_2_ch19_chapter-13-18-adv-misc": {
    title: "Ch. 13-18 Adv., Misc. - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch19_chapter-13-18-adv-misc"],
    instructions:
      "Test your knowledge of adverbs and miscellaneous vocabulary from Chapters 13-18.",
  },
  "genki_2_ch19_nouns-and-adj": {
    title: "Nouns & Adj.",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch19_nouns-and-adj"],
  },
  "genki_2_ch19_u-ru-verbs": {
    title: "U + Ru Verbs",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch19_u-ru-verbs"],
  },
  "genki_2_ch19_irr-v-adv-misc": {
    title: "Irr. Verbs, Adv., & Misc.",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch19_irr-v-adv-misc"],
  },
  "genki_2_ch19_all-vocab-test": {
    title: "Ch. 19 All Vocab - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch19_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 19.",
  },
  "sentence-practice-honorific-verbs": {
    title: "Honorific Verbs Sentence Practice",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-honorific-verbs"],
    instructions: "Practice using honorific verbs in sentences.",
  },

  // Chapter 20 Dynamic Modules
  "genki_2_ch20_vocab-list": {
    title: "Chapter 20 Vocab List",
    session_type: "vocab-list",
    vocab_set_ids: ["genki_2_ch20_vocab-list"],
    instructions: "Review the vocabulary for Chapter 20.",
  },
  genki_2_ch20_nouns: {
    title: "Nouns",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch20_nouns"],
  },
  "genki_2_ch20_adj-u-v": {
    title: "Adjectives & う-Verbs",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch20_adj-u-v"],
  },
  "genki_2_ch20_ru-v-irr-v-adv-misc": {
    title: "る-Verbs, Irr. V., Adv., & Misc.",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch20_ru-v-irr-v-adv-misc"],
    instructions:
      "Practice recognizing る-verbs, irregular verbs, adverbs, and miscellaneous vocabulary in Kana.",
  },
  "genki_2_ch20_all-vocab-test": {
    title: "All Vocab - Test",
    session_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch20_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 20.",
  },
  "sentence-practice-extra-modest-expressions": {
    title: "Extra Modest Expressions Sentence Practice",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-extra-modest-expressions"],
    instructions: "Practice using extra modest expressions in sentences.",
  },
  "sentence-practice-humble-expressions": {
    title: "Humble Expressions Sentence Practice",
    session_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-humble-expressions"],
    instructions: "Practice using humble expressions in sentences.",
  },
}
