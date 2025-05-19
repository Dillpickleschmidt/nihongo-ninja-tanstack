import type { TextbookCollection } from "./types"

export const textbooks: TextbookCollection = {
  genki_1: {
    id: "genki_1",
    name: "Genki I: An Integrated Course in Elementary Japanese (3rd Edition)",
    short_name: "Genki I",
    publisher: "The Japan Times",
    level: "N5",
    cover_image_url: "/images/textbooks/genki_1_cover.jpg", // fix
    chapters: [
      {
        id: "genki_1_ch0",
        chapter_number: 0,
        title: "新しい友達 (New Friends)",
        description:
          "Introduces basic greetings, self-introductions, and identifying people and things.",
        learning_path_items: [
          { type: "static_module", id: "welcome-overview" },
          { type: "static_module", id: "japanese-pronunciation" },
          { type: "static_module", id: "writing-systems" },
          { type: "static_module", id: "hiragana" },
          { type: "dynamic_module", id: "genki_0_ch1_practice-hiragana" },
          { type: "dynamic_module", id: "genki_0_ch1_hiragana-quiz" },
          { type: "static_module", id: "dakuten-handakuten" },
          {
            type: "dynamic_module",
            id: "genki_0_ch1_practice-dakuten-handakuten",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch0-contracted-sounds-quiz",
          },
          { type: "static_module", id: "contracted-sounds" },
          {
            type: "dynamic_module",
            id: "genki_0_ch1_practice-contracted-sounds",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch0-contracted-sounds-quiz",
          },
          { type: "static_module", id: "long-vowels-double-consonants" },
          { type: "dynamic_module", id: "genki_1_ch0-all-hiragana-quiz" },
          { type: "static_module", id: "punctuation-and-misc" },
          {
            type: "dynamic_module",
            id: "genki_1_ch0-vocab-list",
          },
          { type: "static_module", id: "greetings" },
          {
            type: "external_resource",
            id: "greetings-japanese-super-immersion",
          },
          { type: "static_module", id: "common-expressions" },
          {
            type: "external_resource",
            id: "common-expressions-japanese-super-immersion",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch0_practice-greetings-common-expressions",
          },
          { type: "static_module", id: "numbers-0-100" },
          {
            type: "dynamic_module",
            id: "genki_1_ch0_practice-numbers-0-10",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch0_practice-numbers-11-100",
          },
        ],
        vocabulary_keys: [
          "わたし",
          "あなた",
          "あのひと",
          "〜さん",
          "〜ちゃん",
          "〜じん",
          "せんせい",
          "がくせい",
          "かいしゃいん",
          "ぎんこういん",
          "いしゃ",
          "だいがく",
          "びょういん",
          "でんわ",
          "なんさい",
          "はい",
          "いいえ",
          "おはようございます",
          "こんにちは",
          "こんばんは",
          "さようなら",
          "おやすみなさい",
          "はじめまして",
          "どうぞよろしくおねがいします",
          "こちらは〜さんです",
          "〜からきました",
          "アメリカ",
          "イギリス",
          "かんこく",
          "ちゅうごく",
          "にほん",
          "これ",
          "それ",
          "あれ",
          "ほん",
          "じしょ",
          "ざっし",
          "しんぶん",
          "ノート",
          "えんぴつ",
          "かばん",
          "とけい",
          "なん",
          "だれ",
          "そうです",
          "ちがいます",
          "あのう",
          "どうぞ",
        ],
        external_resource_ids: ["res_jpod101_ch1_greetings_video"],
      },
      {
        id: "genki_1_ch1",
        chapter_number: 1,
        title: "学生です (I'm a Student)", // Assuming this is the chapter title
        description:
          "Learn to introduce yourself, talk about your nationality and occupation, and use the particle は.", // Add a relevant description
        learning_path_items: [
          { type: "static_module", id: "genki_1_ch1_vocab-list" },
          { type: "static_module", id: "grammar-notes" },
          { type: "static_module", id: "genki_1_ch1_kanji-numbers" },
          { type: "dynamic_module", id: "genki_1_ch1_practice-kanji-numbers" },
          { type: "static_module", id: "genki_1_ch1_people-descriptors-misc" },
          {
            type: "dynamic_module",
            id: "genki_1_ch1_practice-people-descriptors-misc",
          },
          { type: "static_module", id: "genki_1_ch1_family-school" },
          {
            type: "dynamic_module",
            id: "genki_1_ch1_practice-family-school",
          },
          { type: "static_module", id: "x-wa-y-desu" },
          { type: "static_module", id: "genki_1_ch1_occupations-majors" },
          {
            type: "dynamic_module",
            id: "genki_1_ch1_practice-occupations-majors",
          },
          {
            type: "dynamic_module",
            id: "practice-sentence-x-wa-y-desu",
          },
          { type: "static_module", id: "genki_1_ch1_everyday-expressions" },
          { type: "static_module", id: "self-introductions" },
          { type: "static_module", id: "japanese-names-honorifics" },
          { type: "static_module", id: "saying-you-in-japanese" },
          { type: "static_module", id: "genki_1_ch1_useful-expressions" },
          { type: "static_module", id: "genki_1_ch1_countries-time" },
          {
            type: "dynamic_module",
            id: "genki_1_ch1_practice-countries-time",
          },
          { type: "static_module", id: "questions-with-ka" },
          {
            type: "dynamic_module",
            id: "practice-sentence-questions-with-ka",
          },
          { type: "static_module", id: "the-no-particle" },
          {
            type: "dynamic_module",
            id: "practice-sentence-the-no-particle",
          },
          { type: "static_module", id: "worksheet-1" },
          { type: "static_module", id: "anou-etto" },
          { type: "external_resource", id: "kikusasaizu-1-1" },
          {
            type: "external_resource",
            id: "japanese-super-immersion-nice-to-meet-you",
          },
          { type: "external_resource", id: "my-kikitori-conversation-1" },
          { type: "static_module", id: "telling-time" },
          { type: "dynamic_module", id: "genki_1_ch1_practice-telling-time" },
          { type: "static_module", id: "minutes" },
          { type: "dynamic_module", id: "genki_1_ch1_practice-minutes" },
          { type: "external_resource", id: "my-kikitori-conversation-2" },
          { type: "external_resource", id: "kikusasaizu-1-3" },
          { type: "external_resource", id: "my-kikitori-conversation-3" },
        ],
        vocabulary_keys: [],
        external_resource_ids: [],
      },
      {
        id: "genki_1_ch2",
        chapter_number: 2,
        title: "Student", // Assuming this is the chapter title - please replace with the actual title
        description:
          "Building on introductions, learn to identify and ask about things, use particles が and も, and negate statements.", // Add a relevant description
        learning_path_items: [
          { type: "static_module", id: "genki_1_ch2_vocab-list" },
          { type: "static_module", id: "grammar-notes" },
          { type: "static_module", id: "katakana" },
          { type: "dynamic_module", id: "practice-katakana" },
          { type: "static_module", id: "katakana-quiz" },
          { type: "static_module", id: "katakana-words-worksheet" },
          { type: "static_module", id: "genki_1_ch2_things" },
          { type: "dynamic_module", id: "genki_1_ch2_practice-things" },
          { type: "static_module", id: "genki_1_ch2_words-that-point" },
          {
            type: "dynamic_module",
            id: "genki_1_ch2_practice-words-that-point",
          },
          {
            type: "dynamic_module",
            id: "practice-sentence-words-that-point",
          },
          { type: "static_module", id: "ga-particle" },
          { type: "static_module", id: "dare" },
          { type: "dynamic_module", id: "practice-sentence-dare" },
          { type: "static_module", id: "mo-particle" },
          { type: "dynamic_module", id: "practice-sentence-mo-particle" },
          { type: "static_module", id: "janai" },
          { type: "dynamic_module", id: "practice-sentence-janai" },
          { type: "external_resource", id: "kikusasaizu-2-1" },
          { type: "static_module", id: "ne-yo" },
          { type: "dynamic_module", id: "practice-sentence-ne-yo" },
          { type: "external_resource", id: "kikusasaizu-2-2" },
          { type: "static_module", id: "genki_1_ch2_places-money-food" },
          {
            type: "dynamic_module",
            id: "genki_1_ch2_practice-places-money-food",
          },
          { type: "external_resource", id: "kudasai-vs-onegaishimasu" },
          { type: "external_resource", id: "my-kikitori-at-a-cafe" },
          { type: "static_module", id: "big-numbers" },
          { type: "external_resource", id: "unlearning-japanese" },
          { type: "static_module", id: "japanese-money" },
          { type: "static_module", id: "practice-money" },
          { type: "external_resource", id: "my-kikitori-at-a-store" },
          { type: "dynamic_module", id: "genki_1_ch2_all-vocab-test" },
        ],
        vocabulary_keys: [],
        external_resource_ids: [],
      },
      {
        id: "genki_1_ch3",
        chapter_number: 3,
        title: "Going to a Party", // Assuming this is the chapter title - please replace with the actual title
        description:
          "Introduce verbs and adjectives, learn basic conjugations, and use location and direction particles.", // Add a relevant description
        learning_path_items: [
          { type: "static_module", id: "genki_1_ch3_vocab-list" },
          { type: "static_module", id: "grammar-notes" },
          { type: "static_module", id: "introduction-to-kanji" },
          { type: "static_module", id: "kanji-radicals" },
          { type: "static_module", id: "genki_1_ch3_chapter-1-kanji-part-1" },
          {
            type: "dynamic_module",
            id: "genki_1_ch3_practice-chapter-1-kanji-part-1",
          },
          { type: "static_module", id: "genki_1_ch3_chapter-1-kanji-part-2" },
          {
            type: "dynamic_module",
            id: "genki_1_ch3_practice-chapter-1-kanji-part-2",
          },
          { type: "static_module", id: "genki_1_ch3_chapter-1-kanji-part-3" },
          {
            type: "dynamic_module",
            id: "genki_1_ch3_practice-chapter-1-kanji-part-3",
          },
          { type: "static_module", id: "genki_1_ch3_chapter-2-kanji" },
          {
            type: "dynamic_module",
            id: "genki_1_ch3_practice-chapter-2-kanji",
          },
          { type: "static_module", id: "jpdb" },
          { type: "static_module", id: "genki_1_ch3_nouns" },
          { type: "dynamic_module", id: "genki_1_ch3_practice-nouns-readings" },
          { type: "dynamic_module", id: "genki_1_ch3_practice-nouns-kana" },
          { type: "static_module", id: "genki_1_ch3_days-and-time" },
          {
            type: "dynamic_module",
            id: "genki_1_ch3_practice-days-and-time-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch3_practice-days-and-time-kana",
          },
          { type: "static_module", id: "genki_1_ch3_verbs-and-adj" },
          {
            type: "dynamic_module",
            id: "genki_1_ch3_practice-verbs-and-adj-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch3_practice-verbs-and-adj-kana",
          },
          { type: "static_module", id: "verb-conj-masu" },
          { type: "static_module", id: "negative-masu-conj" },
          { type: "dynamic_module", id: "conjugation-practice" },
          { type: "static_module", id: "o-de-ni-e-particles" },
          { type: "static_module", id: "word-order" },
          {
            type: "dynamic_module",
            id: "practice-sentence-o-de-ni-e-particles",
          },
          { type: "external_resource", id: "your-japanese-voice" },
          // { type: "reading", id: "reading-practice", disabled: true },
          { type: "static_module", id: "polite-invitations" },
          {
            type: "dynamic_module",
            id: "practice-sentence-polite-invitations",
          },
          { type: "external_resource", id: "kikusasaizu-3-2" },
          { type: "external_resource", id: "kikusasaizu-3-3" },
          {
            type: "external_resource",
            id: "my-kikitori-do-you-want-to-go-to-tokyo",
          },
          { type: "static_module", id: "genki_1_ch3_adverbs-expressions" },
          {
            type: "dynamic_module",
            id: "genki_1_ch3_practice-adverbs-expressions-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch3_practice-adverbs-expressions-kana",
          },
          { type: "dynamic_module", id: "genki_1_ch3_all-vocab-test" },
          { type: "dynamic_module", id: "practice-sentence-time-expressions" },
          { type: "external_resource", id: "my-kikitori-campus-interview-1" },
          { type: "external_resource", id: "aizuchi" },
          { type: "static_module", id: "saying-and-so-but" },
          { type: "static_module", id: "adverbs" },
          {
            type: "dynamic_module",
            id: "practice-sentence-frequency-adverbs",
          },
          { type: "external_resource", id: "kikusasaizu-3-1" },
          { type: "external_resource", id: "my-kikitori-campus-interview-2" },
          { type: "external_resource", id: "long-form-conversation-immersion" },
        ],
        vocabulary_keys: [],
        external_resource_ids: [],
      },
      {
        id: "genki_1_ch4",
        chapter_number: 4,
        title: "My Daily Routine", // Assuming this is the chapter title - please replace with the actual title
        description:
          "Learn to talk about existence of things and people, use past tense, and connect nouns with と.", // Add a relevant description
        learning_path_items: [
          { type: "static_module", id: "genki_1_ch4_vocab-list" },
          { type: "static_module", id: "grammar-notes" },
          { type: "static_module", id: "genki_1_ch4_nouns-1" },
          {
            type: "dynamic_module",
            id: "genki_1_ch4_practice-nouns-1-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch4_practice-nouns-1-kana" },
          { type: "static_module", id: "genki_1_ch4_nouns-2" },
          {
            type: "dynamic_module",
            id: "genki_1_ch4_practice-nouns-2-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch4_practice-nouns-2-kana" },
          { type: "static_module", id: "genki_1_ch4_location-words" },
          {
            type: "dynamic_module",
            id: "genki_1_ch4_practice-location-words-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch4_practice-location-words-kana",
          },
          { type: "static_module", id: "iru-aru" },
          { type: "dynamic_module", id: "practice-sentence-iru-aru" },
          { type: "static_module", id: "where-things-are" },
          { type: "dynamic_module", id: "practice-sentence-where-things-are" },
          { type: "static_module", id: "genki_1_ch4_verbs-adv-misc" },
          {
            type: "dynamic_module",
            id: "genki_1_ch4_practice-verbs-adv-misc-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch4_practice-verbs-adv-misc-kana",
          },
          { type: "dynamic_module", id: "genki_1_ch4_all-vocab-test" },
          { type: "static_module", id: "polite-past-tense" },
          {
            type: "dynamic_module",
            id: "conjugation-practice-polite-past-tense-verbs",
          },
          {
            type: "dynamic_module",
            id: "practice-sentence-deshita-past-tense-verbs",
          },
          { type: "external_resource", id: "saying-no-naturally" },
          { type: "static_module", id: "to-particle" },
          { type: "external_resource", id: "immersion-with-yuta" },
          { type: "dynamic_module", id: "practice-sentence-to-particle" },
          { type: "static_module", id: "mo-particle" },
          { type: "static_module", id: "jikan" },
          { type: "dynamic_module", id: "practice-sentence-duration" },
          { type: "dynamic_module", id: "counter-practice" },
          { type: "static_module", id: "takusan" },
          { type: "external_resource", id: "beginner-guide-to-konbini" },
        ],
        vocabulary_keys: [], // Add the vocabulary keys for Chapter 4
        external_resource_ids: [], // Add the external resource IDs for Chapter 4
      },
      {
        id: "genki_1_ch5",
        chapter_number: 5,
        title: "Going to See a Movie", // Assuming this is the chapter title - please replace with the actual title
        description:
          "Learn about い and な adjectives, their conjugations, and how to use them to modify nouns.", // Add a relevant description
        learning_path_items: [
          { type: "static_module", id: "genki_1_ch5_vocab-list" },
          { type: "static_module", id: "grammar-notes" },
          { type: "static_module", id: "genki_1_ch5_nouns" },
          { type: "dynamic_module", id: "genki_1_ch5_practice-nouns-readings" },
          { type: "dynamic_module", id: "genki_1_ch5_practice-nouns-kana" },
          { type: "static_module", id: "genki_1_ch5_i-adjectives" },
          {
            type: "dynamic_module",
            id: "genki_1_ch5_practice-i-adjectives-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch5_practice-i-adjectives-kana",
          },
          { type: "static_module", id: "genki_1_ch5_na-adjectives" },
          {
            type: "dynamic_module",
            id: "genki_1_ch5_practice-na-adjectives-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch5_practice-na-adjectives-kana",
          },
          { type: "static_module", id: "adjective-conjugation" },
          { type: "dynamic_module", id: "conjugation-practice-adjective" },
          { type: "dynamic_module", id: "practice-sentence-adjectives" },
          { type: "static_module", id: "when-not-to-use-wa" },
          { type: "static_module", id: "adj-modifying-nouns" },
          { type: "static_module", id: "suki-kirai" },
          { type: "static_module", id: "wa-comparisons" },
          { type: "dynamic_module", id: "practice-sentence-suki-kirai" },
          { type: "static_module", id: "genki_1_ch5_verbs-adv-misc" },
          {
            type: "dynamic_module",
            id: "genki_1_ch5_practice-verbs-adv-misc-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch5_practice-verbs-adv-misc-kana",
          },
          { type: "dynamic_module", id: "genki_1_ch5_all-vocab-test" },
          { type: "static_module", id: "suru-vs-yaru" },
          { type: "static_module", id: "polite-volitional" },
          { type: "external_resource", id: "sports" },
          { type: "static_module", id: "counters" },
          { type: "dynamic_module", id: "counter-practice" },
        ],
        vocabulary_keys: [],
        external_resource_ids: [],
      },
      {
        id: "genki_1_ch6",
        chapter_number: 6,
        title: "Eating Breakfast", // Assuming this is the chapter title - please replace with the actual title
        description:
          "Learn the essential て-form of verbs, its various uses, and how to connect actions and ideas.", // Add a relevant description
        learning_path_items: [
          // {
          //   type: "static_module",
          //   id: "genki_1_ch6_vocab-list",
          // },
          // { type: "static_module", id: "grammar-notes" },
          { type: "static_module", id: "genki_1_ch6_nouns" },
          { type: "dynamic_module", id: "genki_1_ch6_practice-nouns-readings" },
          { type: "dynamic_module", id: "genki_1_ch6_practice-nouns-kana" },
          { type: "static_module", id: "genki_1_ch6_u-verbs-and-adj" },
          {
            type: "dynamic_module",
            id: "genki_1_ch6_practice-u-verbs-and-adj-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch6_practice-u-verbs-and-adj-kana",
          },
          { type: "static_module", id: "genki_1_ch6_ru-v-irr-v-adv-misc" },
          {
            type: "dynamic_module",
            id: "genki_1_ch6_practice-ru-v-irr-v-adv-misc-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch6_practice-ru-v-irr-v-adv-misc-kana",
          },
          { type: "static_module", id: "te-form" },
          { type: "dynamic_module", id: "conjugation-practice-te-form" },
          { type: "static_module", id: "te-form-connection" },
          { type: "static_module", id: "te-kudasai" },
          { type: "static_module", id: "te-mo-ii-desu" },
          { type: "static_module", id: "te-wa-ikemasen" },
          { type: "static_module", id: "dame" },
          { type: "static_module", id: "te-form-adj-nouns" },
          { type: "static_module", id: "kara" },
          { type: "external_resource", id: "why-your-speaking-sucks" },
          { type: "dynamic_module", id: "genki_1_ch6_all-vocab-test" },
        ],
        vocabulary_keys: [],
        external_resource_ids: [],
      },
      {
        id: "genki_1_ch7",
        chapter_number: 7,
        title: "Taking a Trip", // Assuming this is the chapter title - please replace with the actual title
        description:
          "Expand vocabulary with nouns, body parts, verbs, and adjectives, and learn about converting adjectives to adverbs.", // Add a relevant description
        learning_path_items: [
          // { type: "static_module", id: "genki_1_ch7_vocab-list" },
          // { type: "static_module", id: "grammar-notes" },
          { type: "static_module", id: "genki_1_ch7_nouns-1" },
          {
            type: "dynamic_module",
            id: "genki_1_ch7_practice-nouns-1-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch7_practice-nouns-1-kana" },
          { type: "static_module", id: "genki_1_ch7_body-parts" },
          {
            type: "dynamic_module",
            id: "genki_1_ch7_practice-body-parts-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch7_practice-body-parts-kana",
          },
          { type: "static_module", id: "genki_1_ch7_verbs" },
          { type: "dynamic_module", id: "genki_1_ch7_practice-verbs-readings" },
          { type: "dynamic_module", id: "genki_1_ch7_practice-verbs-kana" },
          { type: "static_module", id: "genki_1_ch7_adj-adv-misc" },
          {
            type: "dynamic_module",
            id: "genki_1_ch7_practice-adj-adv-misc-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch7_practice-adj-adv-misc-kana",
          },
          { type: "static_module", id: "adj-to-adv" },
          { type: "dynamic_module", id: "genki_1_ch7_all-vocab-test" },
        ],
        vocabulary_keys: [],
        external_resource_ids: [],
      },
      {
        id: "genki_1_ch8",
        chapter_number: 8,
        title: "Going to a Museum", // Assuming this is the chapter title - please replace with the actual title
        description:
          "Focus on vocabulary expansion with nouns, verbs, adjectives, and adverbs, and explore verb functionality.", // Add a relevant description
        learning_path_items: [
          // { type: "static_module", id: "genki_1_ch8_vocab-list" },
          // { type: "static_module", id: "grammar-notes" },
          { type: "static_module", id: "genki_1_ch8_nouns-1" },
          {
            type: "dynamic_module",
            id: "genki_1_ch8_practice-nouns-1-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch8_practice-nouns-1-kana" },
          { type: "static_module", id: "genki_1_ch8_nouns-2" },
          {
            type: "dynamic_module",
            id: "genki_1_ch8_practice-nouns-2-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch8_practice-nouns-2-kana" },
          { type: "static_module", id: "genki_1_ch8_verbs" },
          { type: "dynamic_module", id: "genki_1_ch8_practice-verbs-readings" },
          { type: "dynamic_module", id: "genki_1_ch8_practice-verbs-kana" },
          { type: "static_module", id: "genki_1_ch8_adj-adv-misc" },
          {
            type: "dynamic_module",
            id: "genki_1_ch8_practice-adj-adv-misc-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch8_practice-adj-adv-misc-kana",
          },
          { type: "external_resource", id: "how-verbs-work" },
          { type: "dynamic_module", id: "genki_1_ch8_all-vocab-test" },
        ],
        vocabulary_keys: [],
        external_resource_ids: [],
      },
      {
        id: "genki_1_ch9",
        chapter_number: 9,
        title: "Shopping for Clothes", // Assuming this is the chapter title - please replace with the actual title
        description:
          "Learn about various noun categories, small item counters, and continue expanding verb and adjective vocabulary.", // Add a relevant description
        learning_path_items: [
          // { type: "static_module", id: "genki_1_ch9_vocab-list" },
          // { type: "static_module", id: "grammar-notes" },
          { type: "static_module", id: "genki_1_ch9_nouns" },
          { type: "dynamic_module", id: "genki_1_ch9_practice-nouns-readings" },
          { type: "dynamic_module", id: "genki_1_ch9_practice-nouns-kana" },
          { type: "static_module", id: "genki_1_ch9_small-item-counters" },
          {
            type: "dynamic_module",
            id: "genki_1_ch9_practice-small-item-counters-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch9_practice-small-item-counters-kana",
          },
          { type: "static_module", id: "genki_1_ch9_verbs" },
          { type: "dynamic_module", id: "genki_1_ch9_practice-verbs-readings" },
          { type: "dynamic_module", id: "genki_1_ch9_practice-verbs-kana" },
          { type: "static_module", id: "genki_1_ch9_adj-adv-misc" },
          {
            type: "dynamic_module",
            id: "genki_1_ch9_practice-adj-adv-misc-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch9_practice-adj-adv-misc-kana",
          },
          { type: "external_resource", id: "colors" },
          { type: "dynamic_module", id: "genki_1_ch9_all-vocab-test" },
        ],
        vocabulary_keys: [], // Add the vocabulary keys for Chapter 9
        external_resource_ids: [], // Add the external resource IDs for Chapter 9
      },
      {
        id: "genki_1_ch10",
        chapter_number: 10,
        title: "Making an Appointment", // Assuming this is the chapter title - please replace with the actual title
        description:
          "Continue building vocabulary with different noun groups, verbs, and explore concepts like comparing sizes and emotions.", // Add a relevant description
        learning_path_items: [
          // {
          //   type: "static_module",
          //   id: "genki_1_ch10_vocab-list",
          // },
          // { type: "static_module", id: "grammar-notes" },
          { type: "static_module", id: "genki_1_ch10_nouns-1" },
          {
            type: "dynamic_module",
            id: "genki_1_ch10_practice-nouns-1-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch10_practice-nouns-1-kana" },
          { type: "static_module", id: "genki_1_ch10_nouns-2" },
          {
            type: "dynamic_module",
            id: "genki_1_ch10_practice-nouns-2-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch10_practice-nouns-2-kana" },
          { type: "static_module", id: "genki_1_ch10_verbs" },
          {
            type: "dynamic_module",
            id: "genki_1_ch10_practice-verbs-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch10_practice-verbs-kana" },
          { type: "static_module", id: "genki_1_ch10_adj-adv-misc" },
          {
            type: "dynamic_module",
            id: "genki_1_ch10_practice-adj-adv-misc-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch10_practice-adj-adv-misc-kana",
          },
          { type: "external_resource", id: "comparing-sizes" },
          { type: "external_resource", id: "emotions" },
          { type: "dynamic_module", id: "genki_1_ch10_all-vocab-test" },
        ],
        vocabulary_keys: [],
        external_resource_ids: [],
      },
      {
        id: "genki_1_ch11",
        chapter_number: 11,
        title: "Comparing Things", // Assuming this is the chapter title - please replace with the actual title
        description:
          "Delve deeper into nouns and verbs, including irregular verbs, adverbs, and occupations.", // Add a relevant description
        learning_path_items: [
          // {
          //   type: "static_module",
          //   id: "genki_1_ch11_vocab-list",
          // },
          // { type: "static_module", id: "grammar-notes" },
          { type: "static_module", id: "genki_1_ch11_nouns-1" },
          {
            type: "dynamic_module",
            id: "genki_1_ch11_practice-nouns-1-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch11_practice-nouns-1-kana" },
          { type: "static_module", id: "genki_1_ch11_nouns-2" },
          {
            type: "dynamic_module",
            id: "genki_1_ch11_practice-nouns-2-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch11_practice-nouns-2-kana" },
          { type: "static_module", id: "genki_1_ch11_ru-v-u-v" },
          {
            type: "dynamic_module",
            id: "genki_1_ch11_practice-ru-v-u-v-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch11_practice-ru-v-u-v-kana" },
          { type: "static_module", id: "genki_1_ch11_irr-v-adv-misc" },
          {
            type: "dynamic_module",
            id: "genki_1_ch11_practice-irr-v-adv-misc-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch11_practice-irr-v-adv-misc-kana",
          },
          { type: "static_module", id: "genki_1_ch11_occupations" },
          {
            type: "dynamic_module",
            id: "genki_1_ch11_practice-occupations-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch11_practice-occupations-kana",
          },
          { type: "dynamic_module", id: "genki_1_ch11_all-vocab-test" },
        ],
        vocabulary_keys: [],
        external_resource_ids: [],
      },
      {
        id: "genki_1_ch12",
        chapter_number: 12,
        title: "My Trip to Okinawa", // Assuming this is the chapter title - please replace with the actual title
        description:
          "Review and expand vocabulary with more nouns, verbs, adjectives, and adverbs.", // Add a relevant description
        learning_path_items: [
          // {
          //   type: "static_module",
          //   id: "genki_1_ch12_vocab-list",
          // },
          // { type: "static_module", id: "grammar-notes" },
          { type: "static_module", id: "genki_1_ch12_nouns-1" },
          {
            type: "dynamic_module",
            id: "genki_1_ch12_practice-nouns-1-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch12_practice-nouns-1-kana" },
          { type: "static_module", id: "genki_1_ch12_nouns-2" },
          {
            type: "dynamic_module",
            id: "genki_1_ch12_practice-nouns-2-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch12_practice-nouns-2-kana" },
          { type: "static_module", id: "genki_1_ch12_verbs" },
          {
            type: "dynamic_module",
            id: "genki_1_ch12_practice-verbs-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch12_practice-verbs-kana" },
          { type: "static_module", id: "genki_1_ch12_adj-adv-misc" },
          {
            type: "dynamic_module",
            id: "genki_1_ch12_practice-adj-adv-misc-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch12_practice-adj-adv-misc-kana",
          },
          { type: "dynamic_module", id: "genki_1_ch12_all-vocab-test" },
        ],
        vocabulary_keys: [],
        external_resource_ids: [],
      },
      {
        id: "genki_1_ch13",
        chapter_number: 13,
        title: "Playing a Game", // Assuming this is the chapter title - please replace with the actual title
        description:
          "Focus on vocabulary for nouns, adjectives, verbs, and day counts.", // Add a relevant description
        learning_path_items: [
          { type: "static_module", id: "genki_1_ch13_vocab-list" },
          // { type: "static_module", id: "grammar-notes" },
          { type: "static_module", id: "genki_1_ch13_nouns" },
          {
            type: "dynamic_module",
            id: "genki_1_ch13_practice-nouns-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch13_practice-nouns-kana" },
          { type: "static_module", id: "genki_1_ch13_adj-and-verbs" },
          {
            type: "dynamic_module",
            id: "genki_1_ch13_practice-adj-and-verbs-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch13_practice-adj-and-verbs-kana",
          },
          { type: "static_module", id: "genki_1_ch13_day-count-and-misc" },
          {
            type: "dynamic_module",
            id: "genki_1_ch13_practice-day-count-and-misc-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch13_practice-day-count-and-misc-kana",
          },
          { type: "dynamic_module", id: "genki_1_ch13_all-vocab-test" },
        ],
        vocabulary_keys: [],
        external_resource_ids: [],
      },
      {
        id: "genki_1_ch14",
        chapter_number: 14,
        title: "Describing Someone's Appearance", // Assuming this is the chapter title - please replace with the actual title
        description:
          "Introduce more nouns, adjectives, verbs, counters, adverbs, and other miscellaneous vocabulary.", // Add a relevant description
        learning_path_items: [
          { type: "static_module", id: "genki_1_ch14_vocab-list" },
          // { type: "static_module", id: "grammar-notes" },
          { type: "static_module", id: "genki_1_ch14_nouns-1" },
          {
            type: "dynamic_module",
            id: "genki_1_ch14_practice-nouns-1-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch14_practice-nouns-1-kana" },
          { type: "static_module", id: "genki_1_ch14_nouns-2" },
          {
            type: "dynamic_module",
            id: "genki_1_ch14_practice-nouns-2-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch14_practice-nouns-2-kana" },
          { type: "static_module", id: "genki_1_ch14_adj-and-verbs" },
          {
            type: "dynamic_module",
            id: "genki_1_ch14_practice-adj-and-verbs-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch14_practice-adj-and-verbs-kana",
          },
          { type: "static_module", id: "genki_1_ch14_counters-adv-misc" },
          {
            type: "dynamic_module",
            id: "genki_1_ch14_practice-counters-adv-misc-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch14_practice-counters-adv-misc-kana",
          },
          { type: "dynamic_module", id: "genki_1_ch14_all-vocab-test" },
        ],
        vocabulary_keys: [],
        external_resource_ids: [],
      },
      {
        id: "genki_1_ch15",
        chapter_number: 15,
        title: "Taking a Class", // Assuming this is the chapter title - please replace with the actual title
        description:
          "Focus on different verb types (Ichidan, Godan, Irregular) and continue expanding noun, adverb, and miscellaneous vocabulary.", // Add a relevant description
        learning_path_items: [
          { type: "static_module", id: "genki_1_ch15_vocab-list" },
          // { type: "static_module", id: "grammar-notes" },
          { type: "static_module", id: "genki_1_ch15_nouns-1" },
          {
            type: "dynamic_module",
            id: "genki_1_ch15_practice-nouns-1-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch15_practice-nouns-1-kana" },
          { type: "static_module", id: "genki_1_ch15_nouns-2" },
          {
            type: "dynamic_module",
            id: "genki_1_ch15_practice-nouns-2-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch15_practice-nouns-2-kana" },
          { type: "static_module", id: "genki_1_ch15_godan-and-ichidan-v" },
          {
            type: "dynamic_module",
            id: "genki_1_ch15_practice-godan-and-ichidan-v-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch15_practice-godan-and-ichidan-v-kana",
          },
          { type: "static_module", id: "genki_1_ch15_irr-v-adv-misc" },
          {
            type: "dynamic_module",
            id: "genki_1_ch15_practice-irr-v-adv-misc-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch15_practice-irr-v-adv-misc-kana",
          },
          { type: "external_resource", id: "hobbies-with-yuta" },
          { type: "dynamic_module", id: "genki_1_ch15_all-vocab-test" },
        ],
        vocabulary_keys: [],
        external_resource_ids: [],
      },
      {
        id: "genki_1_ch16",
        chapter_number: 16,
        title: "Inviting a Friend", // Assuming this is the chapter title - please replace with the actual title
        description:
          "Introduce more nouns, adjectives, and verbs (U, Ru, Irregular), along with adverbs and other miscellaneous terms.", // Add a relevant description
        learning_path_items: [
          { type: "static_module", id: "genki_1_ch16_vocab-list" },
          // { type: "static_module", id: "grammar-notes" },
          { type: "static_module", id: "genki_1_ch16_nouns" },
          {
            type: "dynamic_module",
            id: "genki_1_ch16_practice-nouns-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch16_practice-nouns-kana" },
          { type: "static_module", id: "genki_1_ch16_adj-and-u-v" },
          {
            type: "dynamic_module",
            id: "genki_1_ch16_practice-adj-and-u-v-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch16_practice-adj-and-u-v-kana",
          },
          { type: "static_module", id: "genki_1_ch16_ru-and-irr-v" },
          {
            type: "dynamic_module",
            id: "genki_1_ch16_practice-ru-and-irr-v-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch16_practice-ru-and-irr-v-kana",
          },
          { type: "static_module", id: "genki_1_ch16_adv-and-misc" },
          {
            type: "dynamic_module",
            id: "genki_1_ch16_practice-adv-and-misc-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch16_practice-adv-and-misc-kana",
          },
          { type: "dynamic_module", id: "genki_1_ch16_all-vocab-test" },
        ],
        vocabulary_keys: [],
        external_resource_ids: [],
      },
      {
        id: "genki_1_ch17",
        chapter_number: 17,
        title: "Talking About My Trip", // Assuming this is the chapter title - please replace with the actual title
        description:
          "Expand vocabulary with more nouns, verbs, adjectives, and adverbs, and practice new sentence patterns.", // Add a relevant description
        learning_path_items: [
          { type: "static_module", id: "genki_1_ch17_vocab-list" },
          // { type: "static_module", id: "grammar-notes" },
          { type: "static_module", id: "genki_1_ch17_nouns-1" },
          {
            type: "dynamic_module",
            id: "genki_1_ch17_practice-nouns-1-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch17_practice-nouns-1-kana" },
          { type: "static_module", id: "genki_1_ch17_nouns-2" },
          {
            type: "dynamic_module",
            id: "genki_1_ch17_practice-nouns-2-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch17_practice-nouns-2-kana" },
          { type: "static_module", id: "genki_1_ch17_verbs" },
          {
            type: "dynamic_module",
            id: "genki_1_ch17_practice-verbs-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch17_practice-verbs-kana" },
          { type: "static_module", id: "genki_1_ch17_adj-adv-misc" },
          {
            type: "dynamic_module",
            id: "genki_1_ch17_practice-adj-adv-misc-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch17_practice-adj-adv-misc-kana",
          },
          { type: "dynamic_module", id: "genki_1_ch17_all-vocab-test" },
          { type: "dynamic_module", id: "practice-sentence-sou-desu-heresay" },
          { type: "dynamic_module", id: "practice-sentence-tte" },
          { type: "dynamic_module", id: "practice-sentence-tara" },
        ],
        vocabulary_keys: [],
        external_resource_ids: [],
      },
      {
        id: "genki_1_ch18",
        chapter_number: 18,
        title: "Comparing Experiences", // Assuming this is the chapter title - please replace with the actual title
        description:
          "Further vocabulary expansion with various noun groups, adjectives, and verb types (U, Ru, Irregular).", // Add a relevant description
        learning_path_items: [
          { type: "static_module", id: "genki_1_ch18_vocab-list" },
          // { type: "static_module", id: "grammar-notes" }
          { type: "static_module", id: "genki_1_ch18_nouns-1" },
          {
            type: "dynamic_module",
            id: "genki_1_ch18_practice-nouns-1-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch18_practice-nouns-1-kana" },
          { type: "static_module", id: "genki_1_ch18_nouns-2-and-adjectives" },
          {
            type: "dynamic_module",
            id: "genki_1_ch18_practice-nouns-2-and-adjectives-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch18_practice-nouns-2-and-adjectives-kana",
          },
          { type: "static_module", id: "genki_1_ch18_u-and-irr-verbs" },
          {
            type: "dynamic_module",
            id: "genki_1_ch18_practice-u-and-irr-verbs-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch18_practice-u-and-irr-verbs-kana",
          },
          { type: "static_module", id: "genki_1_ch18_ru-verbs-and-misc" },
          {
            type: "dynamic_module",
            id: "genki_1_ch18_practice-ru-verbs-and-misc-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch18_practice-ru-verbs-and-misc-kana",
          },
          { type: "dynamic_module", id: "genki_1_ch18_all-vocab-test" },
        ],
        vocabulary_keys: [],
        external_resource_ids: [],
      },
      {
        id: "genki_1_ch19",
        chapter_number: 19,
        title: "Looking for a Job", // Assuming this is the chapter title - please replace with the actual title
        description:
          "Review and test vocabulary from previous chapters and introduce new vocabulary related to nouns, adjectives, and verbs.", // Add a relevant description
        learning_path_items: [
          { type: "static_module", id: "genki_1_ch19_vocab-list" },
          { type: "static_module", id: "grammar-notes" },
          {
            type: "static_module",
            id: "genki_1_ch19_chapter-13-18-bonus-vocab",
          },
          { type: "dynamic_module", id: "genki_1_ch19_chapter-13-18-nouns" },
          {
            type: "dynamic_module",
            id: "genki_1_ch19_chapter-13-18-adjectives",
          },
          { type: "dynamic_module", id: "genki_1_ch19_chapter-13-18-verbs" },
          { type: "dynamic_module", id: "genki_1_ch19_chapter-13-18-adv-misc" },
          { type: "static_module", id: "genki_1_ch19_nouns-and-adj" },
          {
            type: "dynamic_module",
            id: "genki_1_ch19_practice-nouns-and-adj-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch19_practice-nouns-and-adj-kana",
          },
          { type: "static_module", id: "genki_1_ch19_u-ru-verbs" },
          {
            type: "dynamic_module",
            id: "genki_1_ch19_practice-u-ru-verbs-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch19_practice-u-ru-verbs-kana",
          },
          { type: "static_module", id: "genki_1_ch19_irr-v-adv-misc" },
          {
            type: "dynamic_module",
            id: "genki_1_ch19_practice-irr-v-adv-misc-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch19_practice-irr-v-adv-misc-kana",
          },
          { type: "dynamic_module", id: "genki_1_ch19_all-vocab-test" },
          { type: "dynamic_module", id: "practice-sentence-honorific-verbs" },
        ],
        vocabulary_keys: [],
        external_resource_ids: [],
      },
      {
        id: "genki_1_ch20",
        chapter_number: 20,
        title: "Expressing Gratitude", // Assuming this is the chapter title - please replace with the actual title
        description:
          "Conclude Genki I with more vocabulary covering nouns, adjectives, and various verb types, and practice different expression levels.", // Add a relevant description
        learning_path_items: [
          { type: "static_module", id: "genki_1_ch20_vocab-list" },
          // { type: "static_module", id: "grammar-notes" },
          { type: "static_module", id: "genki_1_ch20_nouns" },
          {
            type: "dynamic_module",
            id: "genki_1_ch20_practice-nouns-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch20_practice-nouns-kana" },
          { type: "static_module", id: "genki_1_ch20_adj-u-v" },
          {
            type: "dynamic_module",
            id: "genki_1_ch20_practice-adj-u-v-readings",
          },
          { type: "dynamic_module", id: "genki_1_ch20_practice-adj-u-v-kana" },
          { type: "static_module", id: "genki_1_ch20_ru-v-irr-v-adv-misc" },
          {
            type: "dynamic_module",
            id: "genki_1_ch20_practice-ru-v-irr-v-adv-misc-readings",
          },
          {
            type: "dynamic_module",
            id: "genki_1_ch20_practice-ru-v-irr-v-adv-misc-kana",
          },
          { type: "dynamic_module", id: "genki_1_ch20_all-vocab-test" },
          {
            type: "dynamic_module",
            id: "practice-sentence-extra-modest-expressions",
          },
          {
            type: "dynamic_module",
            id: "practice-sentence-humble-expressions",
          },
        ],
        vocabulary_keys: [],
        external_resource_ids: [],
      },
    ],
  },
  genki_2: {
    id: "genki_2",
    name: "Genki II: An Integrated Course in Intermediate Japanese (3rd Edition)",
    short_name: "Genki II",
    publisher: "The Japan Times",
    level: "N4",
    cover_image_url: "/images/textbooks/genki_2_cover.jpg", // fix
    chapters: [],
  },
}
