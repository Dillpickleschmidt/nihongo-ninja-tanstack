import type { StaticModule } from "./types"

export const static_modules: Record<string, StaticModule> = {
  getting_started: {
    title: "Getting Started",
    link: "/guides",
    source_type: "lesson",
    description: "Introduction",
  },

  // Getting Started N5 Modules
  "getting_started_n5_hiragana-quiz": {
    title: "Hiragana Quiz",
    link: "/practice/hiragana-quiz",
    source_type: "lesson",
    description: "Interactive kana",
  },
  getting_started_n5_lessons: {
    title: "Lessons",
    link: "/lessons",
    source_type: "lesson",
    description: "Clear explanations",
  },
  "getting_started_n5_conjugation-practice": {
    title: "Conjugation Practice",
    link: "/practice/conjugation",
    source_type: "lesson",
    description: "Verbs & Adjectives",
  },
  "getting_started_n5_sentence-practice": {
    title: "Sentence Practice",
    link: "/sentence-practice",
    source_type: "lesson",
    description: "You'll like this one!",
  },
  "getting_started_n5_vocabulary-practice": {
    title: "Vocabulary Practice",
    link: "/vocab",
    source_type: "lesson",
    description: "SRS from day 1",
  },

  // Getting Started N4 Modules
  "getting_started_n4_sentence-practice": {
    title: "Sentence Practice",
    link: "/_home/sentence-practice",
    source_type: "lesson",
    description: "You'll like this one!",
  },
  "getting_started_n4_conjugation-practice": {
    title: "Conjugation Practice",
    link: "/practice/conjugation",
    source_type: "lesson",
    description: "Verbs & Adjectives",
  },
  "getting_started_n4_vocabulary-practice": {
    title: "Vocabulary Practice",
    link: "/practice/review",
    source_type: "lesson",
    description: "SRS from day 1",
  },
  getting_started_n4_srs: {
    title: "SRS Integration",
    link: "/guides/srs",
    source_type: "lesson",
    description: "Anki, WaniKani, and more",
  },
  "getting_started_n4_custom-decks": {
    title: "Custom Decks",
    link: "/_home/vocab",
    source_type: "lesson",
    description: "Learn what matters",
  },
  "getting_started_n4_browser-extension": {
    title: "Browser Extension",
    link: "#",
    source_type: "lesson",
    description: "Pre-configured",
  },

  // Getting Started N3 Modules
  "getting_started_n3_learning-paths": {
    title: "Learning Paths",
    link: "#",
    source_type: "lesson",
    description: "For any show",
  },
  "getting_started_n3_browser-extension": {
    title: "Browser Extension",
    link: "#",
    source_type: "lesson",
    description: "Mining subtitles",
  },
  getting_started_n3_srs: {
    title: "SRS Integration",
    link: "/guides/srs",
    source_type: "lesson",
    description: "Anki, WaniKani, and more",
  },
  "getting_started_n3_sentence-building": {
    title: "Sentence Building",
    link: "#",
    source_type: "lesson",
    description: "Grammar",
  },

  // Getting Started N2 Modules
  "getting_started_n2_learning-paths": {
    title: "Learning Paths",
    link: "#",
    source_type: "lesson",
    description: "Analyze any show",
  },
  "getting_started_n2_browser-extension": {
    title: "Browser Extension",
    link: "#",
    source_type: "lesson",
    description: "Mining subtitles",
  },
  "getting_started_n2_srs-flexibility": {
    title: "SRS Flexibility",
    link: "#",
    source_type: "lesson",
    description: "Use any platform",
  },
  "getting_started_n2_sentence-building": {
    title: "Sentence Building",
    link: "#",
    source_type: "lesson",
    description: "Grammar",
  },

  // Getting Started N1 Modules
  "getting_started_n1_learning-paths": {
    title: "Learning Paths",
    link: "#",
    source_type: "lesson",
    description: "Analyze any show",
  },
  "getting_started_n1_browser-extension": {
    title: "Browser Extension",
    link: "#",
    source_type: "lesson",
    description: "Mining subtitles",
  },
  "getting_started_n1_all-srs-platforms": {
    title: "All SRS Platforms",
    link: "#",
    source_type: "lesson",
    description: "Connected",
  },

  // Normal Modules
  "welcome-overview": {
    title: "Welcome & Overview",
    link: "/lessons/welcome-overview",
    source_type: "lesson",
  },
  "japanese-pronunciation": {
    title: "Japanese Pronunciation",
    link: "/lessons/japanese-pronunciation",
    source_type: "lesson",
  },
  "writing-systems": {
    title: "Writing Systems",
    link: "/lessons/writing-systems",
    source_type: "lesson",
  },
  hiragana: {
    title: "Hiragana",
    link: "/lessons/hiragana",
    source_type: "lesson",
  },
  "dakuten-handakuten": {
    title: "Dakuten & Handakuten",
    link: "/lessons/dakuten-handakuten",
    source_type: "lesson",
  },
  "contracted-sounds": {
    title: "Contracted Sounds",
    link: "/lessons/contracted-sounds",
    source_type: "lesson",
  },
  "long-vowels-paused-consonants": {
    title: "Long Vowels & Paused Consonants",
    link: "/lessons/long-vowels-paused-consonants",
    source_type: "lesson",
  },
  "punctuation-misc": {
    title: "Punctuation and Misc.",
    link: "/lessons/punctuation-misc",
    source_type: "lesson",
  },
  greetings: {
    title: "Greetings",
    link: "/lessons/greetings",
    source_type: "lesson",
  },
  "common-expressions": {
    title: "Common Expressions",
    link: "/lessons/common-expressions",
    source_type: "lesson",
  },
  "numbers-0-100": {
    title: "Numbers 0-100",
    link: "/lessons/numbers-0-100",
    source_type: "lesson",
  },
  "grammar-notes": {
    title: "Grammar Notes",
    link: "/lessons/grammar-notes", // General grammar notes page
    source_type: "grammar-notes",
  },
  "kanji-numbers": {
    title: "Kanji Numbers",
    link: "/lessons/kanji-numbers",
    source_type: "lesson", // Keeping as vocab as it's a list of kanji
  },
  "x-wa-y-desu": {
    title: "X は Y です",
    link: "/lessons/x-wa-y-desu",
    source_type: "lesson",
  },
  "self-introductions": {
    title: "Self Introductions",
    link: "/lessons/self-introductions",
    source_type: "lesson",
  },
  "japanese-names-honorifics": {
    title: "Japanese Names & Honorifics",
    link: "/lessons/japanese-names-honorifics",
    source_type: "lesson",
  },
  "saying-you-in-japanese": {
    title: 'Saying "You" in Japanese',
    link: "/lessons/saying-you-in-japanese",
    source_type: "lesson",
  },
  "genki_1_ch1_useful-expressions": {
    title: "Useful Expressions",
    link: "/lessons/useful-expressions",
    source_type: "lesson",
  },
  "questions-with-ka": {
    title: "Questions with か",
    link: "/lessons/questions-with-ka",
    source_type: "lesson",
  },
  "the-no-particle": {
    title: "Modifying Nouns: の",
    link: "/lessons/the-no-particle",
    source_type: "lesson",
  },
  "worksheet-1": {
    title: "Worksheet 1",
    link: "/lessons/worksheet-1",
    source_type: "worksheet",
  },
  "anou-etto": {
    title: "Sounding Natural: あのう、えっと。。。",
    link: "/lessons/anou-etto",
    source_type: "lesson",
  },
  "telling-time": {
    title: "Telling Time",
    link: "/lessons/telling-time",
    source_type: "lesson",
  },
  minutes: {
    title: "Minutes",
    link: "/lessons/minutes",
    source_type: "lesson",
  },
  katakana: {
    title: "Katakana",
    link: "/lessons/katakana",
    source_type: "lesson",
  },
  "katakana-words-worksheet": {
    title: "Katakana Words Worksheet",
    link: "/lessons/katakana-words-worksheet",
    source_type: "worksheet",
  },
  "words-that-point": {
    title: "Words That Point",
    link: "/lessons/words-that-point",
    source_type: "lesson",
  },
  "ga-particle": {
    title: "が - The Subject Marker",
    link: "/lessons/ga-particle",
    source_type: "lesson",
  },
  dare: {
    title: "だれ",
    link: "/lessons/dare",
    source_type: "lesson",
  },
  "mo-particle": {
    title: "Saying also with も",
    link: "/lessons/mo-particle",
    source_type: "lesson",
  },
  janai: {
    title: "じゃないです - Is not...",
    link: "/lessons/janai",
    source_type: "lesson",
  },
  "ne-yo-particles": {
    title: "ね, よ",
    link: "/lessons/ne-yo-particles",
    source_type: "lesson",
  },
  "big-numbers": {
    title: "Big Numbers",
    link: "/lessons/big-numbers",
    source_type: "lesson",
  },
  "japanese-money": {
    title: "Japanese Money",
    link: "/lessons/japanese-money",
    source_type: "lesson",
  },
  "practice-money": {
    title: "Practice Money",
    link: "/lessons/chapter-2/practice-money",
    source_type: "worksheet",
  },
  "introduction-to-kanji": {
    title: "Introduction to Kanji",
    link: "/lessons/kanji",
    source_type: "lesson",
  },
  "kanji-radicals": {
    title: "Kanji Radicals",
    link: "/lessons/kanji-radicals",
    source_type: "lesson",
  },
  jpdb: {
    title: "jpdb.io Flashcards",
    link: "/lessons/jpdb",
    source_type: "lesson",
  },
  "verb-conj-masu": {
    title: "Verb Conj. - ます, Godan, Ichidan",
    link: "/lessons/verb-conj-masu",
    source_type: "lesson",
  },
  "negative-masu-conj": {
    title: "Negative ます Conjugation",
    link: "/lessons/negative-masu-conj",
    source_type: "lesson",
  },
  "conjugation-practice-masu": {
    title: "Practice Pos/Neg ます Conjugation",
    link: "/practice/conjugation?normal=true&teForm=false&volitional=false&taiForm=false&tariForm=false&potential=false&imperative=false&conditional=false&passive=false&causative=false&causativePassive=false&verb=false&iAdjective=true&naAdjective=true&polite=true&plain=false&nonPast=true&past=false&positive=true&negative=true",
    source_type: "conjugation-practice",
  },
  "o-de-ni-e-particles": {
    title: "Particles - を, で, に, へ",
    link: "/lessons/o-de-ni-e-particles",
    source_type: "lesson",
  },
  "word-order": {
    title: "Word Order",
    link: "/lessons/word-order",
    source_type: "lesson",
  },
  "polite-invitations": {
    title: "Polite Invitations - ませんか",
    link: "/lessons/polite-invitations",
    source_type: "lesson",
  },
  "saying-and-so-but": {
    title: "Saying And, So, and But",
    link: "/lessons/saying-and-so-but",
    source_type: "lesson",
  },
  adverbs: {
    title: "Adverbs",
    link: "/lessons/adverbs",
    source_type: "lesson",
  },
  "iru-aru": {
    title: "いる・ある - Existence",
    link: "/lessons/iru-aru",
    source_type: "lesson",
  },
  "where-things-are": {
    title: "Where Things Are",
    link: "/lessons/where-things-are",
    source_type: "lesson",
  },
  "polite-past-tense": {
    title: "でした・ました - Polite Past Tense",
    link: "/lessons/polite-past-tense",
    source_type: "lesson",
  },
  "conjugation-practice-polite-past-tense-verbs": {
    title: "Practice Polite Past-Tense Verbs",
    link: "/lessons/chapter-4/sentence-practice/deshita-past-tense-verbs",
    source_type: "conjugation-practice",
  },
  "to-particle": {
    title: "と - And/With",
    link: "/lessons/to-particle",
    source_type: "lesson",
  },
  "mo-particle1": {
    title: "も - Also/Too",
    link: "/lessons/mo-particle",
    source_type: "lesson",
  },
  jikan: {
    title: "時間 - Time Duration",
    link: "/lessons/jikan",
    source_type: "lesson",
  },
  "counter-practice": {
    title: "Counters Practice",
    link: "/lessons/counter-practice",
    source_type: "counter-practice",
  },
  takusan: {
    title: "たくさん - Many",
    link: "/lessons/takusan",
    source_type: "lesson",
  },
  "adjective-conjugation": {
    title: "い/な-Adjective Conjugation",
    link: "/lessons/adjective-conjugation",
    source_type: "lesson",
  },
  "conjugation-practice-adjective": {
    title: "Practice Adjective Conjugation",
    link: "/practice/conjugation?normal=true&teForm=false&volitional=false&taiForm=false&tariForm=false&potential=false&imperative=false&conditional=false&passive=false&causative=false&causativePassive=false&verb=false&iAdjective=true&naAdjective=true&polite=true&plain=false&nonPast=true&past=true&positive=true&negative=true",
    source_type: "conjugation-practice",
  },
  "when-not-to-use-wa": {
    title: "When Not to use は",
    link: "/lessons/when-not-to-use-wa",
    source_type: "lesson",
  },
  "adj-modifying-nouns": {
    title: "Adjectives Modifying Nouns",
    link: "/lessons/adj-modifying-nouns",
    source_type: "lesson",
  },
  "suki-kirai": {
    title: "好き・嫌い",
    link: "/lessons/suki-kirai",
    source_type: "lesson",
  },
  "wa-comparisons": {
    title: "は For Comparisons",
    link: "/lessons/wa-comparisons",
    source_type: "lesson",
  },
  "suru-vs-yaru": {
    title: "する vs. やる",
    link: "/lessons/suru-vs-yaru",
    source_type: "lesson",
  },
  "polite-volitional": {
    title: "Polite Volitional - ましょう・ましょうか",
    link: "/lessons/polite-volitional",
    source_type: "lesson",
  },
  counters: {
    title: "Counters",
    link: "/lessons/counters",
    source_type: "lesson",
  },
  "te-form": {
    title: "て-Form (Verbs)",
    link: "/lessons/te-form",
    source_type: "lesson",
  },
  "conjugation-practice-te-form": {
    title: "Practice て-Form Conjugation",
    link: "/practice/conjugation?normal=false&teForm=true&volitional=false&taiForm=false&tariForm=false&potential=false&imperative=false&conditional=false&passive=false&causative=false&causativePassive=false&verb=true&iAdjective=false&naAdjective=false&polite=true&plain=false&nonPast=true&past=false&positive=true&negative=false",
    source_type: "conjugation-practice",
  },
  "te-form-connection": {
    title: "Connecting Actions With て-Form",
    link: "/lessons/te-form-connection",
    source_type: "lesson",
  },
  "te-kudasai": {
    title: "～てください",
    link: "/lessons/te-kudasai",
    source_type: "lesson",
  },
  "te-mo-ii-desu": {
    title: "～てもいいです",
    link: "/lessons/te-mo-ii-desu",
    source_type: "lesson",
  },
  "te-wa-ikemasen": {
    title: "～てはいけません - Must Not Do",
    link: "/lessons/te-wa-ikemasen",
    source_type: "lesson",
  },
  dame: {
    title: "だめ - No Good",
    link: "/lessons/dame",
    source_type: "lesson",
  },
  "te-form-adj-nouns": {
    title: "て-Form (Adj. & Nouns)",
    link: "/lessons/te-form-adj-nouns",
    source_type: "lesson",
  },
  kara: {
    title: "から",
    link: "/lessons/kara",
    source_type: "lesson",
  },
  "body-parts": {
    title: "Body Parts",
    link: "/lessons/genki_1/chapter-7/body-parts",
    source_type: "lesson",
  },
  "adj-to-adv": {
    title: "Convert Adjectives to Adverbs",
    link: "/lessons/adj-to-adv",
    source_type: "lesson",
  },
}
