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
  "genki_1_ch3_nouns-readings": {
    title: "Nouns - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_nouns"],
    instructions: "Practice the readings of nouns from Chapter 3.",
  },
  "genki_1_ch3_nouns-kana": {
    title: "Nouns - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_nouns"],
    instructions: "Practice recognizing nouns from Chapter 3 in Kana.",
  },
  "genki_1_ch3_days-and-time-readings": {
    title: "Days & Time - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_days-and-time"],
    instructions: "Practice the readings of days and time vocabulary.",
  },
  "genki_1_ch3_days-and-time-kana": {
    title: "Days & Time - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_days-and-time"],
    instructions: "Practice recognizing days and time vocabulary in Kana.",
  },
  "genki_1_ch3_verbs-and-adj-readings": {
    title: "Verbs & Adj. - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_verbs-and-adj"],
    instructions:
      "Practice the readings of verbs and adjectives from Chapter 3.",
  },
  "genki_1_ch3_verbs-and-adj-kana": {
    title: "Verbs & Adj. - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_verbs-and-adj"],
    instructions:
      "Practice recognizing verbs and adjectives from Chapter 3 in Kana.",
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
  "genki_1_ch3_adverbs-expressions-readings": {
    title: "Adv. & Expres. - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_adverbs-expressions"],
    instructions:
      "Practice the readings of adverbs and expressions from Chapter 3.",
  },
  "genki_1_ch3_adverbs-expressions-kana": {
    title: "Adv. & Expres. - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_adverbs-expressions"],
    instructions:
      "Practice recognizing adverbs and expressions from Chapter 3 in Kana.",
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
  "genki_1_ch4_nouns-1-readings": {
    title: "Nouns 1 - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch4_nouns-1"],
    instructions: "Practice the readings of the first set of nouns.",
  },
  "genki_1_ch4_nouns-1-kana": {
    title: "Nouns 1 - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch4_nouns-1"],
    instructions: "Practice recognizing the first set of nouns in Kana.",
  },
  "genki_1_ch4_nouns-2-readings": {
    title: "Nouns 2 - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch4_nouns-2"],
    instructions: "Practice the readings of the second set of nouns.",
  },
  "genki_1_ch4_nouns-2-kana": {
    title: "Nouns 2 - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch4_nouns-2"],
    instructions: "Practice recognizing the second set of nouns in Kana.",
  },
  "genki_1_ch4_location-words-readings": {
    title: "Location Words - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch4_location-words"],
    instructions: "Practice the readings of location words.",
  },
  "genki_1_ch4_location-words-kana": {
    title: "Location Words - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch4_location-words"],
    instructions: "Practice recognizing location words in Kana.",
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
  "genki_1_ch4_verbs-adv-misc-readings": {
    title: "V, Adv, & Misc. - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch4_verbs-adv-misc"],
    instructions:
      "Practice the readings of verbs, adverbs, and miscellaneous vocabulary.",
  },
  "genki_1_ch4_verbs-adv-misc-kana": {
    title: "V, Adv, & Misc. - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch4_verbs-adv-misc"],
    instructions:
      "Practice recognizing verbs, adverbs, and miscellaneous vocabulary in Kana.",
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
  "genki_1_ch5_nouns-readings": {
    title: "Nouns 1 - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch5_nouns"],
    instructions: "Practice the readings of nouns from Chapter 5.",
  },
  "genki_1_ch5_nouns-kana": {
    title: "Nouns 1 - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch5_nouns"],
    instructions: "Practice recognizing nouns from Chapter 5 in Kana.",
  },
  "genki_1_ch5_i-adjectives-readings": {
    title: "い Adjectives - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch5_i-adjectives"],
    instructions: "Practice the readings of い-adjectives.",
  },
  "genki_1_ch5_i-adjectives-kana": {
    title: "い Adjectives - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch5_i-adjectives"],
    instructions: "Practice recognizing い-adjectives in Kana.",
  },
  "genki_1_ch5_na-adjectives-readings": {
    title: "な Adjectives - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch5_na-adjectives"],
    instructions: "Practice the readings of な-adjectives.",
  },
  "genki_1_ch5_na-adjectives-kana": {
    title: "な Adjectives - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch5_na-adjectives"],
    instructions: "Practice recognizing な-adjectives in Kana.",
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
  "genki_1_ch5_verbs-adv-misc-readings": {
    title: "Verbs, Adv, & Misc. - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch5_verbs-adv-misc"],
    instructions:
      "Practice the readings of verbs, adverbs, and miscellaneous vocabulary.",
  },
  "genki_1_ch5_verbs-adv-misc-kana": {
    title: "Verbs, Adv, & Misc. - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch5_verbs-adv-misc"],
    instructions:
      "Practice recognizing verbs, adverbs, and miscellaneous vocabulary in Kana.",
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
  "genki_1_ch6_nouns-readings": {
    title: "Nouns - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch6_nouns"],
    instructions: "Practice the readings of nouns from Chapter 6.",
  },
  "genki_1_ch6_nouns-kana": {
    title: "Nouns - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch6_nouns"],
    instructions: "Practice recognizing nouns from Chapter 6 in Kana.",
  },
  "genki_1_ch6_u-verbs-and-adj-readings": {
    title: "U-V & Adj - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch6_u-verbs-and-adj"],
    instructions: "Practice the readings of U-verbs and adjectives.",
  },
  "genki_1_ch6_u-verbs-and-adj-kana": {
    title: "U-V & Adj - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch6_u-verbs-and-adj"],
    instructions: "Practice recognizing U-verbs and adjectives in Kana.",
  },
  "genki_1_ch6_ru-v-irr-v-adv-misc-readings": {
    title: "Ru-V, Irr-V, & Misc. - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch6_ru-v-irr-v-adv-misc"],
    instructions:
      "Practice the readings of Ru-verbs, irregular verbs, and miscellaneous vocabulary.",
  },
  "genki_1_ch6_ru-v-irr-v-adv-misc-kana": {
    title: "Ru-V, Irr-V, & Misc. - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch6_ru-v-irr-v-adv-misc"],
    instructions:
      "Practice recognizing Ru-verbs, irregular verbs, and miscellaneous vocabulary in Kana.",
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
  "genki_1_ch7_nouns-1-readings": {
    title: "Nouns 1 - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch7_nouns-1"],
    instructions: "Practice the readings of the first set of nouns.",
  },
  "genki_1_ch7_nouns-1-kana": {
    title: "Nouns 1 - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch7_nouns-1"],
    instructions: "Practice recognizing the first set of nouns in Kana.",
  },
  "genki_1_ch7_body-parts-readings": {
    title: "Body Parts - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch7_body-parts"],
    instructions: "Practice the readings of body parts vocabulary.",
  },
  "genki_1_ch7_body-parts-kana": {
    title: "Body Parts - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch7_body-parts"],
    instructions: "Practice recognizing body parts vocabulary in Kana.",
  },
  "genki_1_ch7_verbs-readings": {
    title: "Verbs - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch7_verbs"],
    instructions: "Practice the readings of verbs from Chapter 7.",
  },
  "genki_1_ch7_verbs-kana": {
    title: "Verbs - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch7_verbs"],
    instructions: "Practice recognizing verbs from Chapter 7 in Kana.",
  },
  "genki_1_ch7_adj-adv-misc-readings": {
    title: "Adj, Adv, & Misc. - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch7_adj-adv-misc"],
    instructions:
      "Practice the readings of adjectives, adverbs, and miscellaneous vocabulary.",
  },
  "genki_1_ch7_adj-adv-misc-kana": {
    title: "Adj, Adv, & Misc. - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch7_adj-adv-misc"],
    instructions:
      "Practice recognizing adjectives, adverbs, and miscellaneous vocabulary in Kana.",
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
  "genki_1_ch8_nouns-1-readings": {
    title: "Nouns 1 - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch8_nouns-1"],
    instructions: "Practice the readings of the first set of nouns.",
  },
  "genki_1_ch8_nouns-1-kana": {
    title: "Nouns 1 - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch8_nouns-1"],
    instructions: "Practice recognizing the first set of nouns in Kana.",
  },
  "genki_1_ch8_nouns-2-readings": {
    title: "Nouns 2 - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch8_nouns-2"],
    instructions: "Practice the readings of the second set of nouns.",
  },
  "genki_1_ch8_nouns-2-kana": {
    title: "Nouns 2 - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch8_nouns-2"],
    instructions: "Practice recognizing the second set of nouns in Kana.",
  },
  "genki_1_ch8_verbs-readings": {
    title: "Verbs - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch8_verbs"],
    instructions: "Practice the readings of verbs from Chapter 8.",
  },
  "genki_1_ch8_verbs-kana": {
    title: "Verbs - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch8_verbs"],
    instructions: "Practice recognizing verbs from Chapter 8 in Kana.",
  },
  "genki_1_ch8_adj-adv-misc-readings": {
    title: "Adj, Adv, & Misc. - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch8_adj-adv-misc"],
    instructions:
      "Practice the readings of adjectives, adverbs, and miscellaneous vocabulary.",
  },
  "genki_1_ch8_adj-adv-misc-kana": {
    title: "Adj, Adv, & Misc. - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch8_adj-adv-misc"],
    instructions:
      "Practice recognizing adjectives, adverbs, and miscellaneous vocabulary in Kana.",
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
  "genki_1_ch9_nouns-readings": {
    title: "Nouns - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch9_nouns"],
    instructions: "Practice the readings of nouns from Chapter 9.",
  },
  "genki_1_ch9_nouns-kana": {
    title: "Nouns - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch9_nouns"],
    instructions: "Practice recognizing nouns from Chapter 9 in Kana.",
  },
  "genki_1_ch9_small-item-counters-readings": {
    title: "Small Item Counters - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch9_small-item-counters"],
    instructions: "Practice the readings of small item counters.",
  },
  "genki_1_ch9_small-item-counters-kana": {
    title: "Small Item Counters - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch9_small-item-counters"],
    instructions: "Practice recognizing small item counters in Kana.",
  },
  "genki_1_ch9_verbs-readings": {
    title: "Verbs - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch9_verbs"],
    instructions: "Practice the readings of verbs from Chapter 9.",
  },
  "genki_1_ch9_verbs-kana": {
    title: "Verbs - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch9_verbs"],
    instructions: "Practice recognizing verbs from Chapter 9 in Kana.",
  },
  "genki_1_ch9_adj-adv-misc-readings": {
    title: "Adj, Adv, & Misc. - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch9_adj-adv-misc"],
    instructions:
      "Practice the readings of adjectives, adverbs, and miscellaneous vocabulary.",
  },
  "genki_1_ch9_adj-adv-misc-kana": {
    title: "Adj, Adv, & Misc. - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch9_adj-adv-misc"],
    instructions:
      "Practice recognizing adjectives, adverbs, and miscellaneous vocabulary in Kana.",
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
  "genki_1_ch10_nouns-1-readings": {
    title: "Nouns 1 - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch10_nouns-1"],
    instructions: "Practice the readings of the first set of nouns.",
  },
  "genki_1_ch10_nouns-1-kana": {
    title: "Nouns 1 - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch10_nouns-1"],
    instructions: "Practice recognizing the first set of nouns in Kana.",
  },
  "genki_1_ch10_nouns-2-readings": {
    title: "Nouns 2 - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch10_nouns-2"],
    instructions: "Practice the readings of the second set of nouns.",
  },
  "genki_1_ch10_nouns-2-kana": {
    title: "Nouns 2 - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch10_nouns-2"],
    instructions: "Practice recognizing the second set of nouns in Kana.",
  },
  "genki_1_ch10_verbs-readings": {
    title: "Verbs - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: [], // FIX
    instructions: "Practice the readings of verbs from Chapter 10.",
  },
  "genki_1_ch10_verbs-kana": {
    title: "Verbs - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: [], // FIX
    instructions: "Practice recognizing verbs from Chapter 10 in Kana.",
  },
  "genki_1_ch10_adj-adv-misc-readings": {
    title: "Adj, Adv, & Misc. - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: [], // FIX
    instructions:
      "Practice the readings of adjectives, adverbs, and miscellaneous vocabulary.",
  },
  "genki_1_ch10_adj-adv-misc-kana": {
    title: "Adj, Adv, & Misc. - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: [], // FIX
    instructions:
      "Practice recognizing adjectives, adverbs, and miscellaneous vocabulary in Kana.",
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
  "genki_1_ch11_nouns-1-readings": {
    title: "Nouns 1 - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch11_nouns-1"],
    instructions: "Practice the readings of the first set of nouns.",
  },
  "genki_1_ch11_nouns-1-kana": {
    title: "Nouns 1 - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch11_nouns-1"],
    instructions: "Practice recognizing the first set of nouns in Kana.",
  },
  "genki_1_ch11_nouns-2-readings": {
    title: "Nouns 2 - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch11_nouns-2"],
    instructions: "Practice the readings of the second set of nouns.",
  },
  "genki_1_ch11_nouns-2-kana": {
    title: "Nouns 2 - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch11_nouns-2"],
    instructions: "Practice recognizing the second set of nouns in Kana.",
  },
  "genki_1_ch11_ru-v-u-v-readings": {
    title: "Ru and U-Verbs - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch11_ru-v-u-v"],
    instructions: "Practice the readings of Ru-verbs and U-verbs.",
  },
  "genki_1_ch11_ru-v-u-v-kana": {
    title: "Ru and U-Verbs - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch11_ru-v-u-v"],
    instructions: "Practice recognizing Ru-verbs and U-verbs in Kana.",
  },
  "genki_1_ch11_irr-v-adv-misc-readings": {
    title: "Irr. V, Adv, & Misc. - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch11_irr-v-adv-misc"],
    instructions:
      "Practice the readings of irregular verbs, adverbs, and miscellaneous vocabulary.",
  },
  "genki_1_ch11_irr-v-adv-misc-kana": {
    title: "Irr. V, Adv, & Misc. - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch11_irr-v-adv-misc"],
    instructions:
      "Practice recognizing irregular verbs, adverbs, and miscellaneous vocabulary in Kana.",
  },
  "genki_1_ch11_occupations-readings": {
    title: "Occupations - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch11_occupations"],
    instructions: "Practice the readings of occupation vocabulary.",
  },
  "genki_1_ch11_occupations-kana": {
    title: "Occupations - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch11_occupations"],
    instructions: "Practice recognizing occupation vocabulary in Kana.",
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
  "genki_1_ch12_nouns-1-readings": {
    title: "Nouns 1 - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch12_nouns-1"],
    instructions: "Practice the readings of the first set of nouns.",
  },
  "genki_1_ch12_nouns-1-kana": {
    title: "Nouns 1 - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch12_nouns-1"],
    instructions: "Practice recognizing the first set of nouns in Kana.",
  },
  "genki_1_ch12_nouns-2-readings": {
    title: "Nouns 2 - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch12_nouns-2"],
    instructions: "Practice the readings of the second set of nouns.",
  },
  "genki_1_ch12_nouns-2-kana": {
    title: "Nouns 2 - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch12_nouns-2"],
    instructions: "Practice recognizing the second set of nouns in Kana.",
  },
  "genki_1_ch12_verbs-readings": {
    title: "Verbs - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch12_verbs"],
    instructions: "Practice the readings of verbs from Chapter 12.",
  },
  "genki_1_ch12_verbs-kana": {
    title: "Verbs - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch12_verbs"],
    instructions: "Practice recognizing verbs from Chapter 12 in Kana.",
  },
  "genki_1_ch12_adj-adv-misc-readings": {
    title: "Adj, Adv, & Misc. - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch12_adj-adv-misc"],
    instructions:
      "Practice the readings of adjectives, adverbs, and miscellaneous vocabulary.",
  },
  "genki_1_ch12_adj-adv-misc-kana": {
    title: "Adj, Adv, & Misc. - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch12_adj-adv-misc"],
    instructions:
      "Practice recognizing adjectives, adverbs, and miscellaneous vocabulary in Kana.",
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
  "genki_2_ch13_nouns-readings": {
    title: "Nouns - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch13_nouns"],
    instructions: "Practice the readings of nouns from Chapter 13.",
  },
  "genki_2_ch13_nouns-kana": {
    title: "Nouns - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch13_nouns"],
    instructions: "Practice recognizing nouns from Chapter 13 in Kana.",
  },
  "genki_2_ch13_adj-and-verbs-readings": {
    title: "Adj & Verbs - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch13_adj-and-verbs"],
    instructions:
      "Practice the readings of adjectives and verbs from Chapter 13.",
  },
  "genki_2_ch13_adj-and-verbs-kana": {
    title: "Adj & Verbs - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch13_adj-and-verbs"],
    instructions:
      "Practice recognizing adjectives and verbs from Chapter 13 in Kana.",
  },
  "genki_2_ch13_day-count-and-misc-readings": {
    title: "Day Count & Misc. - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch13_day-count-and-misc"],
    instructions:
      "Practice the readings of day count and miscellaneous vocabulary.",
  },
  "genki_2_ch13_day-count-and-misc-kana": {
    title: "Day Count & Misc. - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch13_day-count-and-misc"],
    instructions:
      "Practice recognizing day count and miscellaneous vocabulary in Kana.",
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
  "genki_2_ch14_nouns-1-readings": {
    title: "Nouns 1 - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch14_nouns-1"],
    instructions: "Practice the readings of the first set of nouns.",
  },
  "genki_2_ch14_nouns-1-kana": {
    title: "Nouns 1 - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch14_nouns-1"],
    instructions: "Practice recognizing the first set of nouns in Kana.",
  },
  "genki_2_ch14_nouns-2-readings": {
    title: "Nouns 2 - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch14_nouns-2"],
    instructions: "Practice the readings of the second set of nouns.",
  },
  "genki_2_ch14_nouns-2-kana": {
    title: "Nouns 2 - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch14_nouns-2"],
    instructions: "Practice recognizing the second set of nouns in Kana.",
  },
  "genki_2_ch14_adj-and-verbs-readings": {
    title: "Adj & Verbs - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch14_adj-and-verbs"],
    instructions:
      "Practice the readings of adjectives and verbs from Chapter 14.",
  },
  "genki_2_ch14_adj-and-verbs-kana": {
    title: "Adj & Verbs - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch14_adj-and-verbs"],
    instructions:
      "Practice recognizing adjectives and verbs from Chapter 14 in Kana.",
  },
  "genki_2_ch14_counters-adv-misc-readings": {
    title: "Counters, Adv., & Misc. - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch14_counters-adv-misc"],
    instructions:
      "Practice the readings of counters, adverbs, and miscellaneous vocabulary.",
  },
  "genki_2_ch14_counters-adv-misc-kana": {
    title: "Counters, Adv., & Misc. - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch14_counters-adv-misc"],
    instructions:
      "Practice recognizing counters, adverbs, and miscellaneous vocabulary in Kana.",
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
  "genki_2_ch15_nouns-1-readings": {
    title: "Nouns 1 - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch15_nouns-1"],
    instructions: "Practice the readings of the first set of nouns.",
  },
  "genki_2_ch15_nouns-1-kana": {
    title: "Nouns 1 - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch15_nouns-1"],
    instructions: "Practice recognizing the first set of nouns in Kana.",
  },
  "genki_2_ch15_nouns-2-readings": {
    title: "Nouns 2 - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch15_nouns-2"],
    instructions: "Practice the readings of the second set of nouns.",
  },
  "genki_2_ch15_nouns-2-kana": {
    title: "Nouns 2 - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch15_nouns-2"],
    instructions: "Practice recognizing the second set of nouns in Kana.",
  },
  "genki_2_ch15_godan-and-ichidan-v-readings": {
    title: "Ichidan & Godan V. - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch15_godan-and-ichidan-v"],
    instructions: "Practice the readings of Ichidan and Godan verbs.",
  },
  "genki_2_ch15_godan-and-ichidan-v-kana": {
    title: "Ichidan & Godan V. - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch15_godan-and-ichidan-v"],
    instructions: "Practice recognizing Ichidan and Godan verbs in Kana.",
  },
  "genki_2_ch15_irr-v-adv-misc-readings": {
    title: "Irreg Verbs, Adv., & Misc. - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch15_irr-v-adv-misc"],
    instructions:
      "Practice the readings of irregular verbs, adverbs, and miscellaneous vocabulary.",
  },
  "genki_2_ch15_irr-v-adv-misc-kana": {
    title: "Irreg Verbs, Adv., & Misc. - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch15_irr-v-adv-misc"],
    instructions:
      "Practice recognizing irregular verbs, adverbs, and miscellaneous vocabulary in Kana.",
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
  "genki_2_ch16_nouns-readings": {
    title: "Nouns - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch16_nouns"],
    instructions: "Practice the readings of nouns from Chapter 16.",
  },
  "genki_2_ch16_nouns-kana": {
    title: "Nouns - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch16_nouns"],
    instructions: "Practice recognizing nouns from Chapter 16 in Kana.",
  },
  "genki_2_ch16_adj-and-u-v-readings": {
    title: "Adj. & U-V - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch16_adj-and-u-v"],
    instructions: "Practice the readings of adjectives and U-verbs.",
  },
  "genki_2_ch16_adj-and-u-v-kana": {
    title: "Adj. & U-V - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch16_adj-and-u-v"],
    instructions: "Practice recognizing adjectives and U-verbs in Kana.",
  },
  "genki_2_ch16_ru-and-irr-v-readings": {
    title: "Ru-V & Irreg V - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch16_ru-and-irr-v"],
    instructions: "Practice the readings of Ru-verbs and irregular verbs.",
  },
  "genki_2_ch16_ru-and-irr-v-kana": {
    title: "Ru-V & Irreg V - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch16_ru-and-irr-v"],
    instructions: "Practice recognizing Ru-verbs and irregular verbs in Kana.",
  },
  "genki_2_ch16_adv-and-misc-readings": {
    title: "Adv & Misc. - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch16_adv-and-misc"],
    instructions:
      "Practice the readings of adverbs and miscellaneous vocabulary.",
  },
  "genki_2_ch16_adv-and-misc-kana": {
    title: "Adv & Misc. - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch16_adv-and-misc"],
    instructions:
      "Practice recognizing adverbs and miscellaneous vocabulary in Kana.",
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
  "genki_2_ch17_nouns-1-readings": {
    title: "Nouns 1 - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch17_nouns-1"],
    instructions: "Practice the readings of the first set of nouns.",
  },
  "genki_2_ch17_nouns-1-kana": {
    title: "Nouns 1 - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch17_nouns-1"],
    instructions: "Practice recognizing the first set of nouns in Kana.",
  },
  "genki_2_ch17_nouns-2-readings": {
    title: "Nouns 2 - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch17_nouns-2"],
    instructions: "Practice the readings of the second set of nouns.",
  },
  "genki_2_ch17_nouns-2-kana": {
    title: "Nouns 2 - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch17_nouns-2"],
    instructions: "Practice recognizing the second set of nouns in Kana.",
  },
  "genki_2_ch17_verbs-readings": {
    title: "Verbs - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch17_verbs"],
    instructions: "Practice the readings of verbs from Chapter 17.",
  },
  "genki_2_ch17_verbs-kana": {
    title: "Verbs - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch17_verbs"],
    instructions: "Practice recognizing verbs from Chapter 17 in Kana.",
  },
  "genki_2_ch17_adj-adv-misc-readings": {
    title: "Adj, Adv, & Misc. - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch17_adj-adv-misc"],
    instructions:
      "Practice the readings of adjectives, adverbs, and miscellaneous vocabulary.",
  },
  "genki_2_ch17_adj-adv-misc-kana": {
    title: "Adj, Adv, & Misc. - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch17_adj-adv-misc"],
    instructions:
      "Practice recognizing adjectives, adverbs, and miscellaneous vocabulary in Kana.",
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
  "genki_2_ch18_nouns-1-readings": {
    title: "Nouns 1 - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch18_nouns-1"],
    instructions: "Practice the readings of the first set of nouns.",
  },
  "genki_2_ch18_nouns-1-kana": {
    title: "Nouns 1 - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch18_nouns-1"],
    instructions: "Practice recognizing the first set of nouns in Kana.",
  },
  "genki_2_ch18_nouns-2-and-adjectives-readings": {
    title: "Nouns 2 & Adj - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch18_nouns-2-and-adjectives"],
    instructions:
      "Practice the readings of the second set of nouns and adjectives.",
  },
  "genki_2_ch18_nouns-2-and-adjectives-kana": {
    title: "Nouns 2 & Adj - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch18_nouns-2-and-adjectives"],
    instructions:
      "Practice recognizing the second set of nouns and adjectives in Kana.",
  },
  "genki_2_ch18_u-and-irr-verbs-readings": {
    title: "U & Irr Verbs - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch18_u-and-irr-verbs"],
    instructions: "Practice the readings of U-verbs and irregular verbs.",
  },
  "genki_2_ch18_u-and-irr-verbs-kana": {
    title: "U & Irr Verbs - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch18_u-and-irr-verbs"],
    instructions: "Practice recognizing U-verbs and irregular verbs in Kana.",
  },
  "genki_2_ch18_ru-verbs-and-misc-readings": {
    title: "Ru Verbs & Misc. - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch18_ru-verbs-and-misc"],
    instructions:
      "Practice the readings of Ru-verbs and miscellaneous vocabulary.",
  },
  "genki_2_ch18_ru-verbs-and-misc-kana": {
    title: "Ru Verbs & Misc. - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch18_ru-verbs-and-misc"],
    instructions:
      "Practice recognizing Ru-verbs and miscellaneous vocabulary in Kana.",
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
  "genki_2_ch19_nouns-and-adj-readings": {
    title: "Nouns & Adj. - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch19_nouns-and-adj"],
    instructions:
      "Practice the readings of nouns and adjectives from Chapter 19.",
  },
  "genki_2_ch19_nouns-and-adj-kana": {
    title: "Nouns & Adj. - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch19_nouns-and-adj"],
    instructions:
      "Practice recognizing nouns and adjectives from Chapter 19 in Kana.",
  },
  "genki_2_ch19_u-ru-verbs-readings": {
    title: "U + Ru Verbs - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch19_u-ru-verbs"],
    instructions: "Practice the readings of U and Ru verbs from Chapter 19.",
  },
  "genki_2_ch19_u-ru-verbs-kana": {
    title: "U + Ru Verbs - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch19_u-ru-verbs"],
    instructions:
      "Practice recognizing U and Ru verbs from Chapter 19 in Kana.",
  },
  "genki_2_ch19_irr-v-adv-misc-readings": {
    title: "Irr. Verbs, Adv., & Misc. - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch19_irr-v-adv-misc"],
    instructions:
      "Practice the readings of irregular verbs, adverbs, and miscellaneous vocabulary.",
  },
  "genki_2_ch19_irr-v-adv-misc-kana": {
    title: "Irr. Verbs, Adv., & Misc. - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch19_irr-v-adv-misc"],
    instructions:
      "Practice recognizing irregular verbs, adverbs, and miscellaneous vocabulary in Kana.",
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
  "genki_2_ch20_nouns-readings": {
    title: "Nouns - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch20_nouns"],
    instructions: "Practice the readings of nouns from Chapter 20.",
  },
  "genki_2_ch20_nouns-kana": {
    title: "Nouns - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch20_nouns"],
    instructions: "Practice recognizing nouns from Chapter 20 in Kana.",
  },
  "genki_2_ch20_adj-u-v-readings": {
    title: "Adjectives & う-Verbs - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch20_adj-u-v"],
    instructions: "Practice the readings of adjectives and う-verbs.",
  },
  "genki_2_ch20_adj-u-v-kana": {
    title: "Adjectives & う-Verbs - Kana",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch20_adj-u-v"],
    instructions: "Practice recognizing adjectives and う-verbs in Kana.",
  },
  "genki_2_ch20_ru-v-irr-v-adv-misc-readings": {
    title: "る-Verbs, Irr. V., Adv., & Misc. - Readings",
    session_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch20_ru-v-irr-v-adv-misc"],
    instructions:
      "Practice the readings of る-verbs, irregular verbs, adverbs, and miscellaneous vocabulary.",
  },
  "genki_2_ch20_ru-v-irr-v-adv-misc-kana": {
    title: "る-Verbs, Irr. V., Adv., & Misc. - Kana",
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
