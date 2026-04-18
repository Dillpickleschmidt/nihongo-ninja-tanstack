export type PracticeModeEnum = "meanings" | "readings" | "both"

export interface DynamicModule {
  title: string
  module_type:
    | "vocab-list"
    | "vocab-practice"
    | "sentence-practice"
    | "vocab-test"
  vocab_set_ids: string[]
  description?: string
  instructions?: string
  allowed_practice_modes?: PracticeModeEnum[]
}

export const dynamic_modules: Record<string, DynamicModule> = {
  "hiragana-practice": {
    title: "Hiragana",
    module_type: "vocab-practice",
    vocab_set_ids: ["hiragana"],
    instructions: "Practice writing and recognizing these hiragana characters.",
    allowed_practice_modes: ["meanings"],
  },
  "hiragana-quiz": {
    title: "Hiragana Quiz",
    module_type: "vocab-test",
    vocab_set_ids: ["hiragana"],
    instructions: "Test your knowledge of these hiragana characters.",
  },
  "dakuten-handakuten-practice": {
    title: "Dakuten & Handakuten",
    module_type: "vocab-practice",
    vocab_set_ids: ["dakuten-handakuten"],
    instructions:
      "Practice voiced (dakuten) and semi-voiced (handakuten) hiragana.",
    allowed_practice_modes: ["meanings"],
  },
  "dakuten-handakuten-quiz": {
    title: "Dakuten & Handakuten Quiz",
    module_type: "vocab-test",
    vocab_set_ids: ["dakuten-handakuten"],
    instructions: "Test your knowledge of modified hiragana characters.",
  },
  "contracted-sounds-practice": {
    title: "Contracted Sounds",
    module_type: "vocab-practice",
    vocab_set_ids: ["contracted-sounds"],
    instructions:
      "Practice recognizing and writing contracted hiragana sounds.",
    allowed_practice_modes: ["meanings"],
  },
  "contracted-sounds-quiz": {
    title: "Contracted Sounds Quiz",
    module_type: "vocab-test",
    vocab_set_ids: ["contracted-sounds"],
    instructions: "Test your knowledge of contracted hiragana sounds.",
  },
  "all-hiragana-quiz": {
    title: "All Hiragana Quiz",
    module_type: "vocab-test",
    vocab_set_ids: ["all-hiragana-quiz"],
    instructions: "A comprehensive quiz covering all hiragana characters.",
  },
  "genki_1_ch0-vocab-list": {
    title: "Chapter 0 Vocabulary List",
    module_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch0-vocab-list"],
    instructions: "Review the vocabulary for this introductory chapter.",
  },
  "genki_1_ch0_greetings-common-expressions": {
    title: "Greetings & Common Expressions",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch0_greetings-common-expressions"],
    instructions: "Practice using these essential greetings and expressions.",
  },
  "genki_1_ch0_numbers-0-10": {
    title: "Numbers 0-10",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch0_numbers-0-10"],
    instructions: "Practice recognizing and saying numbers from 0 to 10.",
    allowed_practice_modes: ["meanings"],
  },
  "genki_1_ch0_numbers-11-100": {
    title: "Numbers 11-100",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch0_numbers-11-100"],
    instructions: "Practice numbers from 11 to 100.",
    allowed_practice_modes: ["meanings"],
  },

  // Chapter 1 Dynamic Modules
  "genki_1_ch1_vocab-list": {
    title: "Chapter 1 Vocab List",
    module_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch1_vocab-list"],
    instructions: "Review the vocabulary for Chapter 1.",
  },
  "genki_1_ch1_kanji-numbers": {
    title: "Kanji Numbers",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch1_kanji-numbers"],
    instructions: "Practice recognizing and writing Kanji numbers.",
  },
  "genki_1_ch1_people-descriptors-misc": {
    title: "People, Descriptors, Misc.",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch1_people-descriptors-misc"],
    instructions:
      "Practice vocabulary related to people, descriptors, and miscellaneous terms.",
  },
  "genki_1_ch1_family-school": {
    title: "Family & School",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch1_family-school"],
    instructions: "Practice vocabulary related to family and school.",
  },
  "sentence-practice-x-wa-y-desu": {
    title: "X は Y です Practice Sentences",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-x-wa-y-desu"],
    instructions:
      "Practice creating and understanding sentences using the pattern X は Y です.",
  },
  "genki_1_ch1_occupations-majors": {
    title: "Occupations & Majors",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch1_occupations-majors"],
    instructions: "Practice vocabulary related to occupations and majors.",
  },
  "genki_1_ch1_useful-expressions": {
    title: "Useful Expressions",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch1_useful-expressions"],
    instructions: "Practice common useful expressions in Japanese.",
  },
  "genki_1_ch1_countries-time": {
    title: "Countries & Time",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch1_countries-time"],
    instructions: "Practice vocabulary related to countries and time.",
  },
  "sentence-practice-questions-with-ka": {
    title: "Questions with か",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-questions-with-ka"],
    instructions: "Practice forming and answering questions using か.",
  },
  "sentence-practice-the-no-particle": {
    title: "Modifying Nouns: の",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-the-no-particle"],
    instructions: "Practice using the particle の to modify nouns.",
  },
  "genki_1_ch1_telling-time": {
    title: "Time",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch1_telling-time"],
    instructions: "Practice telling time in Japanese.",
  },
  genki_1_ch1_minutes: {
    title: "Minutes",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch1_minutes"],
    instructions: "Practice counting minutes in Japanese.",
  },

  // Chapter 2 Dynamic Modules
  "genki_1_ch2_vocab-list": {
    title: "Chapter 2 Vocab List",
    module_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch2_vocab-list"],
    instructions: "Review the vocabulary for Chapter 2.",
  },
  "katakana-practice": {
    title: "Katakana",
    module_type: "vocab-practice",
    vocab_set_ids: ["katakana"],
    instructions: "Practice writing and recognizing Katakana characters.",
    allowed_practice_modes: ["meanings"],
  },
  "katakana-quiz": {
    title: "Katakana Quiz",
    module_type: "vocab-test",
    vocab_set_ids: ["katakana"],
    instructions: "Test your knowledge of Katakana characters.",
  },
  genki_1_ch2_things: {
    title: "Things",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch2_things"],
    instructions: "Practice vocabulary for common objects.",
  },
  "sentence-practice-words-that-point": {
    title: "Words That Point Sentences",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-words-that-point"],
    instructions:
      "Practice creating and understanding sentences using demonstrative pronouns.",
  },
  "sentence-practice-dare": {
    title: "だれ",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-dare"],
    instructions: "Practice asking questions using だれ.",
  },
  "sentence-practice-mo-particle": {
    title: "Saying also with も",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-mo-particle"],
    instructions: "Practice using the particle も to mean 'also' or 'too'.",
  },
  "sentence-practice-janai": {
    title: "じゃないです - Is not...",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-janai"],
    instructions: "Practice forming negative statements using じゃないです.",
  },
  "sentence-practice-ne-yo": {
    title: "ね, よ",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-ne-yo"],
    instructions:
      "Practice using the particles ね and よ to soften or emphasize statements.",
  },
  "genki_1_ch2_places-money-food": {
    title: "Places, Money, Food",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch2_places-money-food"],
    instructions: "Practice vocabulary related to places, money, and food.",
  },
  "genki_1_ch2_all-vocab-test": {
    title: "All Vocab - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_1_ch2_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 2.",
  },

  // Chapter 3 Dynamic Modules
  "genki_1_ch3_vocab-list": {
    title: "Chapter 3 Vocab List",
    module_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch3_vocab-list"],
    instructions: "Review the vocabulary for Chapter 3.",
  },
  "genki_1_ch3_chapter-1-kanji-part-1": {
    title: "Chapter 1 Kanji Part 1",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_chapter-1-kanji-part-1"],
    instructions: "Practice Kanji from Chapter 1, Part 1.",
  },
  "genki_1_ch3_chapter-1-kanji-part-2": {
    title: "Chapter 1 Kanji Part 2",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_chapter-1-kanji-part-2"],
    instructions: "Practice Kanji from Chapter 1, Part 2.",
  },
  "genki_1_ch3_chapter-1-kanji-part-3": {
    title: "Chapter 1 Kanji Part 3",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_chapter-1-kanji-part-3"],
    instructions: "Practice Kanji from Chapter 1, Part 3.",
  },
  "genki_1_ch3_chapter-2-kanji": {
    title: "Chapter 2 Kanji",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_chapter-2-kanji"], // FIX
    instructions: "Practice Kanji from Chapter 2.",
  },
  genki_1_ch3_nouns: {
    title: "Nouns",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_nouns"],
  },
  "genki_1_ch3_days-and-time": {
    title: "Days & Time",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_days-and-time"],
  },
  "genki_1_ch3_verbs-and-adj": {
    title: "Verbs & Adj.",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_verbs-and-adj"],
  },
  "sentence-practice-o-de-ni-e-particles": {
    title: "Particles - を, で, に, へ",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-o-de-ni-e-particles"],
    instructions:
      "Practice using the particles を, で, に, and へ in sentences.",
  },
  "sentence-practice-polite-invitations": {
    title: "Polite Invitations - ませんか",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-polite-invitations"],
    instructions: "Practice forming and responding to polite invitations.",
  },
  "genki_1_ch3_adverbs-expressions": {
    title: "Adv. & Expres.",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch3_adverbs-expressions"],
  },
  "genki_1_ch3_all-vocab-test": {
    title: "All Vocab - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_1_ch3_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 3.",
  },
  "sentence-practice-time-expressions": {
    title: "Time Expressions",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-time-expressions"],
    instructions: "Practice using time expressions in sentences.",
  },
  "sentence-practice-frequency-adverbs": {
    vocab_set_ids: ["sentence-practice-frequency-adverbs"],
    title: "Frequency Adverbs",
    module_type: "sentence-practice",
    instructions: "Practice using frequency adverbs in sentences.",
  },
  "genki_1_ch4_vocab-list": {
    title: "Chapter 4 Vocab List",
    module_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch4_vocab-list"],
    instructions: "Review the vocabulary for Chapter 4.",
  },
  "genki_1_ch4_nouns-1": {
    title: "Nouns 1",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch4_nouns-1"],
  },
  "genki_1_ch4_nouns-2": {
    title: "Nouns 2",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch4_nouns-2"],
  },
  "genki_1_ch4_location-words": {
    title: "Location Words",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch4_location-words"],
  },
  "sentence-practice-iru-aru": {
    title: "いる・ある",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-iru-aru"],
    instructions: "Practice using いる and ある to express existence.",
  },
  "sentence-practice-where-things-are": {
    title: "Where Things Are",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-where-things-are"],
    instructions:
      "Practice forming sentences indicating the location of things.",
  },
  "genki_1_ch4_verbs-adv-misc": {
    title: "V, Adv, & Misc.",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch4_verbs-adv-misc"],
  },
  "genki_1_ch4_all-vocab-test": {
    title: "All Vocab - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_1_ch4_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 4.",
  },
  "sentence-practice-deshita-past-tense-verbs": {
    title: "でした + Past-Tense Verbs",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-deshita-past-tense-verbs"],
    instructions: "Practice using でした and past-tense verbs in sentences.",
  },
  "sentence-practice-to-particle": {
    title: "と",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-to-particle"],
    instructions: "Practice using the particle と to mean 'and' or 'with'.",
  },
  "sentence-practice-duration": {
    title: "Time Duration",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-duration"],
    instructions: "Practice expressing durations of time.",
  },

  // Chapter 5 Dynamic Modules
  "genki_1_ch5_vocab-list": {
    title: "Chapter 5 Vocab List",
    module_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch5_vocab-list"],
    instructions: "Review the vocabulary for Chapter 5.",
  },
  genki_1_ch5_nouns: {
    title: "Nouns 1",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch5_nouns"],
  },
  "genki_1_ch5_i-adjectives": {
    title: "い Adjectives",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch5_i-adjectives"],
  },
  "genki_1_ch5_na-adjectives": {
    title: "な Adjectives",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch5_na-adjectives"],
  },
  "sentence-practice-adjectives": {
    title: "Adjectives in Sentences",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-adjectives"],
    instructions: "Practice using adjectives in sentences.",
  },
  "sentence-practice-suki-kirai": {
    title: "好き・嫌い Sentences",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-suki-kirai"],
    instructions: "Practice forming sentences expressing likes and dislikes.",
  },
  "genki_1_ch5_verbs-adv-misc": {
    title: "Verbs, Adv, & Misc.",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch5_verbs-adv-misc"],
  },
  "genki_1_ch5_all-vocab-test": {
    title: "All Vocab - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_1_ch5_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 5.",
  },

  // Chapter 6 Dynamic Modules
  "genki_1_ch6_vocab-list": {
    title: "Chapter 6 Vocab List",
    module_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch6_vocab-list"],
    instructions: "Review the vocabulary for Chapter 6.",
  },
  genki_1_ch6_nouns: {
    title: "Nouns",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch6_nouns"],
  },
  "genki_1_ch6_u-verbs-and-adj": {
    title: "U-V & Adj",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch6_u-verbs-and-adj"],
  },
  "genki_1_ch6_ru-v-irr-v-adv-misc": {
    title: "Ru-V, Irr-V, & Misc.",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch6_ru-v-irr-v-adv-misc"],
  },
  "sentence-practice-te-form-constructions": {
    title: "て-form Constructions",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-te-form-constructions"],
    instructions:
      "Practice using て-form for requests, connecting activities, permission, and prohibition.",
  },
  "sentence-practice-te-form-adj-nouns": {
    title: "て-form for Adjectives & Nouns",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-te-form-adj-nouns"],
    instructions:
      "Practice connecting adjectives and nouns with the て-form.",
  },
  "genki_1_ch6_all-vocab-test": {
    title: "All Vocab - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_1_ch6_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 6.",
  },

  // Chapter 7 Dynamic Modules
  "genki_1_ch7_vocab-list": {
    title: "Chapter 7 Vocab List",
    module_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch7_vocab-list"],
    instructions: "Review the vocabulary for Chapter 7.",
  },
  "genki_1_ch7_nouns-1": {
    title: "Nouns 1",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch7_nouns-1"],
  },
  "genki_1_ch7_body-parts": {
    title: "Body Parts",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch7_body-parts"],
  },
  genki_1_ch7_verbs: {
    title: "Verbs",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch7_verbs"],
  },
  "genki_1_ch7_adj-adv-misc": {
    title: "Adj, Adv, & Misc.",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch7_adj-adv-misc"],
  },
  "sentence-practice-te-iru": {
    title: "〜ている",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-te-iru"],
    instructions:
      "Practice the 〜ている form for ongoing actions and resulting states.",
  },
  "sentence-practice-Verb-Stem-に行く": {
    title: "Verb Stem + に行く",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-Verb-Stem-に行く"],
    instructions:
      "Practice expressing going somewhere to do something with verb stem + に行く.",
  },
  "sentence-practice-メアリーさんは髪が長いです": {
    title: "X は Y が Z (Body Features)",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-メアリーさんは髪が長いです"],
    instructions:
      "Practice describing physical features with the は〜が pattern.",
  },
  "genki_1_ch7_all-vocab-test": {
    title: "All Vocab - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_1_ch7_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 7.",
  },

  // Chapter 8 Dynamic Modules
  "genki_1_ch8_vocab-list": {
    title: "Chapter 8 Vocab List",
    module_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch8_vocab-list"],
    instructions: "Review the vocabulary for Chapter 8.",
  },
  "genki_1_ch8_nouns-1": {
    title: "Nouns 1",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch8_nouns-1"],
  },
  "genki_1_ch8_nouns-2": {
    title: "Nouns 2",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch8_nouns-2"],
  },
  genki_1_ch8_verbs: {
    title: "Verbs",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch8_verbs"],
  },
  "genki_1_ch8_adj-adv-misc": {
    title: "Adj, Adv, & Misc.",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch8_adj-adv-misc"],
  },
  "sentence-practice-short-forms-quoted-speech": {
    title: "Short Forms in Quoted Speech",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-short-forms-quoted-speech"],
    instructions:
      "Practice reporting thoughts and speech with 〜と思う, 〜と言っていた, and 〜と聞いた.",
  },
  "sentence-practice-Verb-のが好きです／上手です": {
    title: "Verb のが 好き / 上手",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-Verb-のが好きです／上手です"],
    instructions:
      "Practice nominalizing verbs with の to express likes and skills.",
  },
  "sentence-practice-〜ないでください": {
    title: "〜ないでください",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-〜ないでください"],
    instructions: "Practice making negative requests with 〜ないでください.",
  },
  "genki_1_ch8_all-vocab-test": {
    title: "All Vocab - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_1_ch8_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 8.",
  },

  // Chapter 9 Dynamic Modules
  "genki_1_ch9_vocab-list": {
    title: "Chapter 9 Vocab List",
    module_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch9_vocab-list"],
    instructions: "Review the vocabulary for Chapter 9.",
  },
  genki_1_ch9_nouns: {
    title: "Nouns",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch9_nouns"],
  },
  "genki_1_ch9_small-item-counters": {
    title: "Small Item Counters",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch9_small-item-counters"],
  },
  genki_1_ch9_verbs: {
    title: "Verbs",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch9_verbs"],
  },
  "genki_1_ch9_adj-adv-misc": {
    title: "Adj, Adv, & Misc.",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch9_adj-adv-misc"],
  },
  "sentence-practice-past-tense-short-forms": {
    title: "Past Tense Short Forms",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-past-tense-short-forms"],
    instructions:
      "Practice past tense short forms of verbs, adjectives, and nouns across standalone and quoted clauses.",
  },
  "sentence-practice-Qualifying-Nouns-with-Verbs-and-Adjectives": {
    title: "Qualifying Nouns with Verbs/Adjectives",
    module_type: "sentence-practice",
    vocab_set_ids: [
      "sentence-practice-Qualifying-Nouns-with-Verbs-and-Adjectives",
    ],
    instructions:
      "Practice modifying nouns with verb and adjective relative clauses.",
  },
  "sentence-practice-もう〜ました-and-まだ〜ていません": {
    title: "もう〜ました / まだ〜ていません",
    module_type: "sentence-practice",
    vocab_set_ids: [
      "sentence-practice-もう〜ました-and-まだ〜ていません",
    ],
    instructions:
      "Practice expressing 'already' with もう and 'not yet' with まだ〜ていません.",
  },
  "genki_1_ch9_all-vocab-test": {
    title: "All Vocab - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_1_ch9_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 9.",
  },

  // Chapter 10 Dynamic Modules
  "genki_1_ch10_vocab-list": {
    title: "Chapter 10 Vocab List",
    module_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch10_vocab-list"],
    instructions: "Review the vocabulary for Chapter 10.",
  },
  "genki_1_ch10_nouns-1": {
    title: "Nouns 1",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch10_nouns-1"],
  },
  "genki_1_ch10_nouns-2": {
    title: "Nouns 2",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch10_nouns-2"],
  },
  genki_1_ch10_verbs: {
    title: "Verbs",
    module_type: "vocab-practice",
    vocab_set_ids: [], // FIX
  },
  "genki_1_ch10_adj-adv-misc": {
    title: "Adj, Adv, & Misc.",
    module_type: "vocab-practice",
    vocab_set_ids: [], // FIX
  },
  "sentence-practice-Comparison-between-Two-Items": {
    title: "Comparison Between Two Items",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-Comparison-between-Two-Items"],
    instructions:
      "Practice comparing two items using より and のほうが.",
  },
  "sentence-practice-Comparison-among-Three-or-More-Items": {
    title: "Comparison Among Three or More Items",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-Comparison-among-Three-or-More-Items"],
    instructions:
      "Practice superlative comparisons with 〜の中で〜が一番.",
  },
  "sentence-practice-Adjective・Noun+の": {
    title: "Adjective/Noun + の",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-Adjective・Noun+の"],
    instructions:
      "Practice using の to refer back to nouns without repeating them.",
  },
  "sentence-practice-〜つもりだ": {
    title: "〜つもりだ",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-〜つもりだ"],
    instructions: "Practice expressing intentions and plans with 〜つもりだ.",
  },
  "sentence-practice-Adjective+なる": {
    title: "Adjective + なる",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-Adjective+なる"],
    instructions:
      "Practice expressing change of state with い-adj くなる and な-adj になる.",
  },
  "sentence-practice-どこかに・どこにも": {
    title: "どこかに / どこにも",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-どこかに・どこにも"],
    instructions:
      "Practice indefinite and negative pronouns (somewhere/nowhere, anyone/no one).",
  },
  "sentence-practice-で": {
    title: "で Particle (Location of Action)",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-で"],
    instructions:
      "Practice using で to mark the location where an action takes place.",
  },
  "sentence-practice-〜てくる・〜ていく": {
    title: "〜てくる / 〜ていく",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-〜てくる・〜ていく"],
    instructions:
      "Practice 〜てくる and 〜ていく for directional movement and gradual change.",
  },
  "genki_1_ch10_all-vocab-test": {
    title: "All Vocab - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_1_ch10_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 10.",
  },

  // Chapter 11 Dynamic Modules
  "genki_1_ch11_vocab-list": {
    title: "Chapter 11 Vocab List",
    module_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch11_vocab-list"],
    instructions: "Review the vocabulary for Chapter 11.",
  },
  "genki_1_ch11_nouns-1": {
    title: "Nouns 1",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch11_nouns-1"],
  },
  "genki_1_ch11_nouns-2": {
    title: "Nouns 2",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch11_nouns-2"],
  },
  "genki_1_ch11_ru-v-u-v": {
    title: "Ru and U-Verbs",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch11_ru-v-u-v"],
  },
  "genki_1_ch11_irr-v-adv-misc": {
    title: "Irr. V, Adv, & Misc.",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch11_irr-v-adv-misc"],
  },
  genki_1_ch11_occupations: {
    title: "Occupations",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch11_occupations"],
  },
  "sentence-practice-〜たい": {
    title: "〜たい",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-〜たい"],
    instructions: "Practice expressing desires and wants with 〜たい.",
  },
  "sentence-practice-〜たり〜たりする": {
    title: "〜たり〜たりする",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-〜たり〜たりする"],
    instructions:
      "Practice listing representative actions with 〜たり〜たりする.",
  },
  "sentence-practice-〜ことがある": {
    title: "〜ことがある",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-〜ことがある"],
    instructions: "Practice expressing past experiences with 〜ことがある.",
  },
  "genki_1_ch11_all-vocab-test": {
    title: "All Vocab - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_1_ch11_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 11.",
  },

  // Chapter 12 Dynamic Modules
  "genki_1_ch12_vocab-list": {
    title: "Chapter 12 Vocab List",
    module_type: "vocab-list",
    vocab_set_ids: ["genki_1_ch12_vocab-list"],
    instructions: "Review the vocabulary for Chapter 12.",
  },
  "genki_1_ch12_nouns-1": {
    title: "Nouns 1",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch12_nouns-1"],
  },
  "genki_1_ch12_nouns-2": {
    title: "Nouns 2",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch12_nouns-2"],
  },
  genki_1_ch12_verbs: {
    title: "Verbs",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch12_verbs"],
  },
  "genki_1_ch12_adj-adv-misc": {
    title: "Adj, Adv, & Misc.",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_1_ch12_adj-adv-misc"],
  },
  "sentence-practice-〜んです": {
    title: "〜んです",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-〜んです"],
    instructions: "Practice using 〜んです for explanatory statements.",
  },
  "sentence-practice-〜ほうがいいです": {
    title: "〜ほうがいいです",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-〜ほうがいいです"],
    instructions: "Practice giving advice with 〜ほうがいいです.",
  },
  "sentence-practice-〜ので": {
    title: "〜ので",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-〜ので"],
    instructions: "Practice expressing reasons with 〜ので.",
  },
  "sentence-practice-〜でしょうか": {
    title: "〜でしょうか",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-〜でしょうか"],
    instructions: "Practice wondering and polite speculation with 〜でしょうか.",
  },
  "genki_1_ch12_all-vocab-test": {
    title: "All Vocab - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_1_ch12_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 12.",
  },

  // Chapter 13 Dynamic Modules
  "genki_2_ch13_vocab-list": {
    title: "Chapter 13 Vocab List",
    module_type: "vocab-list",
    vocab_set_ids: ["genki_2_ch13_vocab-list"],
    instructions: "Review the vocabulary for Chapter 13.",
  },
  genki_2_ch13_nouns: {
    title: "Nouns",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch13_nouns"],
  },
  "genki_2_ch13_adj-and-verbs": {
    title: "Adj & Verbs",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch13_adj-and-verbs"],
  },
  "genki_2_ch13_day-count-and-misc": {
    title: "Day Count & Misc.",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch13_day-count-and-misc"],
  },
  "sentence-practice-Potential Verbs": {
    title: "Potential Verbs",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-Potential Verbs"],
    instructions: "Practice expressing ability with potential verb forms.",
  },
  "sentence-practice-〜てみる": {
    title: "〜てみる",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-〜てみる"],
    instructions: "Practice expressing trying something with 〜てみる.",
  },
  "sentence-practice-なら": {
    title: "なら",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-なら"],
    instructions: "Practice conditional statements with なら.",
  },
  "sentence-practice-一週間に三回": {
    title: "一週間に三回",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-一週間に三回"],
    instructions: "Practice expressing frequency with time + に + counter.",
  },
  "genki_2_ch13_all-vocab-test": {
    title: "All Vocab - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch13_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 13.",
  },

  // Chapter 14 Dynamic Modules
  "genki_2_ch14_vocab-list": {
    title: "Chapter 14 Vocab List",
    module_type: "vocab-list",
    vocab_set_ids: ["genki_2_ch14_vocab-list"],
    instructions: "Review the vocabulary for Chapter 14.",
  },
  "genki_2_ch14_nouns-1": {
    title: "Nouns 1",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch14_nouns-1"],
  },
  "genki_2_ch14_nouns-2": {
    title: "Nouns 2",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch14_nouns-2"],
  },
  "genki_2_ch14_adj-and-verbs": {
    title: "Adj & Verbs",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch14_adj-and-verbs"],
  },
  "genki_2_ch14_counters-adv-misc": {
    title: "Counters, Adv., & Misc.",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch14_counters-adv-misc"],
  },
  "sentence-practice-〜かもしれません": {
    title: "〜かもしれません",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-〜かもしれません"],
    instructions: "Practice expressing possibility with 〜かもしれません.",
  },
  "genki_2_ch14_all-vocab-test": {
    title: "All Vocab - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch14_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 14.",
  },

  // Chapter 15 Dynamic Modules
  "genki_2_ch15_vocab-list": {
    title: "Chapter 15 Vocab List",
    module_type: "vocab-list",
    vocab_set_ids: ["genki_2_ch15_vocab-list"],
    instructions: "Review the vocabulary for Chapter 15.",
  },
  "genki_2_ch15_nouns-1": {
    title: "Nouns 1",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch15_nouns-1"],
  },
  "genki_2_ch15_nouns-2": {
    title: "Nouns 2",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch15_nouns-2"],
  },
  "genki_2_ch15_godan-and-ichidan-v": {
    title: "Ichidan & Godan V.",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch15_godan-and-ichidan-v"],
  },
  "genki_2_ch15_irr-v-adv-misc": {
    title: "Irreg Verbs, Adv., & Misc.",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch15_irr-v-adv-misc"],
  },
  "sentence-practice-Volitional Form": {
    title: "Volitional Form",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-Volitional Form"],
    instructions: "Practice making suggestions and expressing intent with the volitional form.",
  },
  "sentence-practice-Volitional Form + と思っています": {
    title: "Volitional Form + と思っています",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-Volitional Form + と思っています"],
    instructions: "Practice expressing ongoing intentions with 〜ようと思っています.",
  },
  "sentence-practice-〜ておく": {
    title: "〜ておく",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-〜ておく"],
    instructions: "Practice doing something in advance or in preparation with 〜ておく.",
  },
  "genki_2_ch15_all-vocab-test": {
    title: "All Vocab - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch15_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 15.",
  },

  // Chapter 16 Dynamic Modules
  "genki_2_ch16_vocab-list": {
    title: "Chapter 16 Vocab List",
    module_type: "vocab-list",
    vocab_set_ids: ["genki_2_ch16_vocab-list"],
    instructions: "Review the vocabulary for Chapter 16.",
  },
  genki_2_ch16_nouns: {
    title: "Nouns",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch16_nouns"],
  },
  "genki_2_ch16_adj-and-u-v": {
    title: "Adj. & U-V",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch16_adj-and-u-v"],
  },
  "genki_2_ch16_ru-and-irr-v": {
    title: "Ru-V & Irreg V",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch16_ru-and-irr-v"],
  },
  "genki_2_ch16_adv-and-misc": {
    title: "Adv & Misc.",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch16_adv-and-misc"],
  },
  "sentence-practice-〜ていただけませんか": {
    title: "〜ていただけませんか",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-〜ていただけませんか"],
    instructions: "Practice making polite requests with 〜ていただけませんか.",
  },
  "sentence-practice-〜時": {
    title: "〜時",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-〜時"],
    instructions: "Practice expressing 'when' with 〜時.",
  },
  "sentence-practice-〜てすみませんでした": {
    title: "〜てすみませんでした",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-〜てすみませんでした"],
    instructions: "Practice apologizing for actions with 〜てすみませんでした.",
  },
  "genki_2_ch16_all-vocab-test": {
    title: "All Vocab - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch16_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 16.",
  },

  // Chapter 17 Dynamic Modules
  "genki_2_ch17_vocab-list": {
    title: "Chapter 17 Vocab List",
    module_type: "vocab-list",
    vocab_set_ids: ["genki_2_ch17_vocab-list"],
    instructions: "Review the vocabulary for Chapter 17.",
  },
  "genki_2_ch17_nouns-1": {
    title: "Nouns 1",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch17_nouns-1"],
  },
  "genki_2_ch17_nouns-2": {
    title: "Nouns 2",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch17_nouns-2"],
  },
  genki_2_ch17_verbs: {
    title: "Verbs",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch17_verbs"],
  },
  "genki_2_ch17_adj-adv-misc": {
    title: "Adj, Adv, & Misc.",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch17_adj-adv-misc"],
  },
  "genki_2_ch17_all-vocab-test": {
    title: "All Vocab - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch17_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 17.",
  },
  "sentence-practice-sou-desu-heresay": {
    title: "～そうです - Heresay Practice",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-sou-desu-heresay"],
    instructions: "Practice using ～そうです to report what you've heard.",
  },
  "sentence-practice-tte": {
    title: "～って Practice",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-tte"],
    instructions: "Practice using the casual particle ～って.",
  },
  "sentence-practice-tara": {
    title: "～たら Practice",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-tara"],
    instructions: "Practice using the conditional form ～たら.",
  },

  // Chapter 18 Dynamic Modules
  "genki_2_ch18_vocab-list": {
    title: "Chapter 18 Vocab List",
    module_type: "vocab-list",
    vocab_set_ids: ["genki_2_ch18_vocab-list"],
    instructions: "Review the vocabulary for Chapter 18.",
  },
  "genki_2_ch18_nouns-1": {
    title: "Nouns 1",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch18_nouns-1"],
  },
  "genki_2_ch18_nouns-2-and-adjectives": {
    title: "Nouns 2 & Adj",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch18_nouns-2-and-adjectives"],
  },
  "genki_2_ch18_u-and-irr-verbs": {
    title: "U & Irr Verbs",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch18_u-and-irr-verbs"],
  },
  "genki_2_ch18_ru-verbs-and-misc": {
    title: "Ru Verbs & Misc.",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch18_ru-verbs-and-misc"],
  },
  "genki_2_ch18_all-vocab-test": {
    title: "All Vocab - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch18_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 18.",
  },

  // Chapter 19 Dynamic Modules
  "genki_2_ch19_vocab-list": {
    title: "Chapter 19 Vocab List",
    module_type: "vocab-list",
    vocab_set_ids: ["genki_2_ch19_vocab-list"],
    instructions: "Review the vocabulary for Chapter 19.",
  },
  "genki_2_ch19_chapter-13-18-nouns": {
    title: "Ch. 13-18 Nouns - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch19_chapter-13-18-nouns"],
    instructions: "Test your knowledge of nouns from Chapters 13-18.",
  },
  "genki_2_ch19_chapter-13-18-adjectives": {
    title: "Ch. 13-18 Adjectives - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch19_chapter-13-18-adjectives"],
    instructions: "Test your knowledge of adjectives from Chapters 13-18.",
  },
  "genki_2_ch19_chapter-13-18-verbs": {
    title: "Ch. 13-18 Verbs - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch19_chapter-13-18-verbs"],
    instructions: "Test your knowledge of verbs from Chapters 13-18.",
  },
  "genki_2_ch19_chapter-13-18-adv-misc": {
    title: "Ch. 13-18 Adv., Misc. - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch19_chapter-13-18-adv-misc"],
    instructions:
      "Test your knowledge of adverbs and miscellaneous vocabulary from Chapters 13-18.",
  },
  "genki_2_ch19_nouns-and-adj": {
    title: "Nouns & Adj.",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch19_nouns-and-adj"],
  },
  "genki_2_ch19_u-ru-verbs": {
    title: "U + Ru Verbs",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch19_u-ru-verbs"],
  },
  "genki_2_ch19_irr-v-adv-misc": {
    title: "Irr. Verbs, Adv., & Misc.",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch19_irr-v-adv-misc"],
  },
  "genki_2_ch19_all-vocab-test": {
    title: "Ch. 19 All Vocab - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch19_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 19.",
  },
  "sentence-practice-honorific-verbs": {
    title: "Honorific Verbs Sentence Practice",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-honorific-verbs"],
    instructions: "Practice using honorific verbs in sentences.",
  },

  // Chapter 20 Dynamic Modules
  "genki_2_ch20_vocab-list": {
    title: "Chapter 20 Vocab List",
    module_type: "vocab-list",
    vocab_set_ids: ["genki_2_ch20_vocab-list"],
    instructions: "Review the vocabulary for Chapter 20.",
  },
  genki_2_ch20_nouns: {
    title: "Nouns",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch20_nouns"],
  },
  "genki_2_ch20_adj-u-v": {
    title: "Adjectives & う-Verbs",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch20_adj-u-v"],
  },
  "genki_2_ch20_ru-v-irr-v-adv-misc": {
    title: "る-Verbs, Irr. V., Adv., & Misc.",
    module_type: "vocab-practice",
    vocab_set_ids: ["genki_2_ch20_ru-v-irr-v-adv-misc"],
    instructions:
      "Practice recognizing る-verbs, irregular verbs, adverbs, and miscellaneous vocabulary in Kana.",
  },
  "genki_2_ch20_all-vocab-test": {
    title: "All Vocab - Test",
    module_type: "vocab-test",
    vocab_set_ids: ["genki_2_ch20_vocab-list"],
    instructions: "Test your knowledge of all vocabulary from Chapter 20.",
  },
  "sentence-practice-extra-modest-expressions": {
    title: "Extra Modest Expressions Sentence Practice",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-extra-modest-expressions"],
    instructions: "Practice using extra modest expressions in sentences.",
  },
  "sentence-practice-humble-expressions": {
    title: "Humble Expressions Sentence Practice",
    module_type: "sentence-practice",
    vocab_set_ids: ["sentence-practice-humble-expressions"],
    instructions: "Practice using humble expressions in sentences.",
  },
}
