export interface StaticModule {
  title: string
  link: string
  module_type:
    | "grammar-notes"
    | "chapter-vocab-overview"
    | "lesson"
    | "vocab-test"
    | "conjugation-practice"
    | "counter-practice"
    | "worksheet"
    | "video"
    | "audio"
    | "reading"
    | "culture-note"
    | "game"
    | "listening-material"
  description?: string
  daily_prog_amount?: number
}

export const static_modules: Record<string, StaticModule> = {
  "welcome-overview": {
    title: "Welcome to Nihongo Ninja",
    link: "/guides",
    module_type: "lesson",
  },
  "lesson-structure": {
    title: "Lesson Structure",
    link: "/lessons/welcome-overview",
    module_type: "lesson",
  },
  "writing-systems": {
    title: "Writing Systems",
    link: "/lessons/writing-systems",
    module_type: "lesson",
  },
  hiragana: {
    title: "Hiragana",
    link: "/lessons/hiragana",
    module_type: "lesson",
  },
  "dakuten-handakuten": {
    title: "Dakuten & Handakuten",
    link: "/lessons/dakuten-handakuten",
    module_type: "lesson",
  },
  "contracted-sounds": {
    title: "Contracted Sounds",
    link: "/lessons/contracted-sounds",
    module_type: "lesson",
  },
  "long-vowels-paused-consonants": {
    title: "Long Vowels & Paused Consonants",
    link: "/lessons/long-vowels-paused-consonants",
    module_type: "lesson",
  },
  "punctuation-misc": {
    title: "Punctuation and Misc.",
    link: "/lessons/punctuation-misc",
    module_type: "lesson",
  },
  greetings: {
    title: "Greetings",
    link: "/lessons/greetings",
    module_type: "lesson",
  },
  "common-expressions": {
    title: "Common Expressions",
    link: "/lessons/common-expressions",
    module_type: "lesson",
  },
  "numbers-0-100": {
    title: "Numbers 0-100",
    link: "/lessons/numbers-0-100",
    module_type: "lesson",
  },
  "grammar-notes": {
    title: "Grammar Notes",
    link: "/lessons/grammar-notes", // General grammar notes page
    module_type: "grammar-notes",
  },
  "kanji-numbers": {
    title: "Kanji Numbers",
    link: "/lessons/kanji-numbers",
    module_type: "lesson", // Keeping as vocab as it's a list of kanji
  },
  "x-wa-y-desu": {
    title: "X は Y です",
    link: "/lessons/x-wa-y-desu",
    module_type: "lesson",
  },
  "self-introductions": {
    title: "Self Introductions",
    link: "/lessons/self-introductions",
    module_type: "lesson",
  },
  "japanese-names-honorifics": {
    title: "Japanese Names & Honorifics",
    link: "/lessons/japanese-names-honorifics",
    module_type: "lesson",
  },
  "saying-you-in-japanese": {
    title: 'Saying "You" in Japanese',
    link: "/lessons/saying-you-in-japanese",
    module_type: "lesson",
  },
  "genki_1_ch1_useful-expressions": {
    title: "Useful Expressions",
    link: "/lessons/useful-expressions",
    module_type: "lesson",
  },
  "questions-with-ka": {
    title: "Questions with か",
    link: "/lessons/questions-with-ka",
    module_type: "lesson",
  },
  "the-no-particle": {
    title: "Modifying Nouns: の",
    link: "/lessons/the-no-particle",
    module_type: "lesson",
  },
  "worksheet-1": {
    title: "Worksheet 1",
    link: "/lessons/worksheet-1",
    module_type: "worksheet",
  },
  "anou-etto": {
    title: "Sounding Natural: あのう、えっと。。。",
    link: "/lessons/anou-etto",
    module_type: "lesson",
  },
  "telling-time": {
    title: "Telling Time",
    link: "/lessons/telling-time",
    module_type: "lesson",
  },
  minutes: {
    title: "Minutes",
    link: "/lessons/minutes",
    module_type: "lesson",
  },
  katakana: {
    title: "Katakana",
    link: "/lessons/katakana",
    module_type: "lesson",
  },
  "katakana-words-worksheet": {
    title: "Katakana Words Worksheet",
    link: "/lessons/katakana-words-worksheet",
    module_type: "worksheet",
  },
  "words-that-point": {
    title: "Words That Point",
    link: "/lessons/words-that-point",
    module_type: "lesson",
  },
  "ga-particle": {
    title: "が - The Subject Marker",
    link: "/lessons/ga-particle",
    module_type: "lesson",
  },
  dare: {
    title: "だれ",
    link: "/lessons/dare",
    module_type: "lesson",
  },
  "mo-particle": {
    title: "Saying also with も",
    link: "/lessons/mo-particle",
    module_type: "lesson",
  },
  janai: {
    title: "じゃないです - Is not...",
    link: "/lessons/janai",
    module_type: "lesson",
  },
  "ne-yo-particles": {
    title: "ね, よ",
    link: "/lessons/ne-yo-particles",
    module_type: "lesson",
  },
  "big-numbers": {
    title: "Big Numbers",
    link: "/lessons/big-numbers",
    module_type: "lesson",
  },
  "japanese-money": {
    title: "Japanese Money",
    link: "/lessons/japanese-money",
    module_type: "lesson",
  },
  "practice-money": {
    title: "Practice Money",
    link: "/lessons/chapter-2/practice-money",
    module_type: "worksheet",
  },
  "introduction-to-kanji": {
    title: "Introduction to Kanji",
    link: "/lessons/kanji",
    module_type: "lesson",
  },
  "kanji-radicals": {
    title: "Kanji Radicals",
    link: "/lessons/kanji-radicals",
    module_type: "lesson",
  },
  jpdb: {
    title: "jpdb.io Flashcards",
    link: "/lessons/jpdb",
    module_type: "lesson",
  },
  "verb-conj-masu": {
    title: "Verb Conj. - ます, Godan, Ichidan",
    link: "/lessons/verb-conj-masu",
    module_type: "lesson",
  },
  "negative-masu-conj": {
    title: "Negative ます Conjugation",
    link: "/lessons/negative-masu-conj",
    module_type: "lesson",
  },
  "conjugation-practice-masu": {
    title: "Practice Pos/Neg ます Conjugation",
    link: "/practice/conjugation?normal=true&teForm=false&volitional=false&taiForm=false&tariForm=false&potential=false&imperative=false&conditional=false&passive=false&causative=false&causativePassive=false&verb=false&iAdjective=true&naAdjective=true&polite=true&plain=false&nonPast=true&past=false&positive=true&negative=true",
    module_type: "conjugation-practice",
  },
  "o-de-ni-e-particles": {
    title: "Particles - を, で, に, へ",
    link: "/lessons/o-de-ni-e-particles",
    module_type: "lesson",
  },
  "word-order": {
    title: "Word Order",
    link: "/lessons/word-order",
    module_type: "lesson",
  },
  "polite-invitations": {
    title: "Polite Invitations - ませんか",
    link: "/lessons/polite-invitations",
    module_type: "lesson",
  },
  "saying-and-so-but": {
    title: "Saying And, So, and But",
    link: "/lessons/saying-and-so-but",
    module_type: "lesson",
  },
  adverbs: {
    title: "Adverbs",
    link: "/lessons/adverbs",
    module_type: "lesson",
  },
  "iru-aru": {
    title: "いる・ある - Existence",
    link: "/lessons/iru-aru",
    module_type: "lesson",
  },
  "where-things-are": {
    title: "Where Things Are",
    link: "/lessons/where-things-are",
    module_type: "lesson",
  },
  "polite-past-tense": {
    title: "でした・ました - Polite Past Tense",
    link: "/lessons/polite-past-tense",
    module_type: "lesson",
  },
  "conjugation-practice-polite-past-tense-verbs": {
    title: "Practice Polite Past-Tense Verbs",
    link: "/lessons/chapter-4/sentence-practice/deshita-past-tense-verbs",
    module_type: "conjugation-practice",
  },
  "to-particle": {
    title: "と - And/With",
    link: "/lessons/to-particle",
    module_type: "lesson",
  },
  "mo-particle1": {
    title: "も - Also/Too",
    link: "/lessons/mo-particle",
    module_type: "lesson",
  },
  jikan: {
    title: "時間 - Time Duration",
    link: "/lessons/jikan",
    module_type: "lesson",
  },
  "counter-practice": {
    title: "Counters Practice",
    link: "/lessons/counter-practice",
    module_type: "counter-practice",
  },
  takusan: {
    title: "たくさん - Many",
    link: "/lessons/takusan",
    module_type: "lesson",
  },
  "adjective-conjugation": {
    title: "い/な-Adjective Conjugation",
    link: "/lessons/adjective-conjugation",
    module_type: "lesson",
  },
  "conjugation-practice-adjective": {
    title: "Practice Adjective Conjugation",
    link: "/practice/conjugation?normal=true&teForm=false&volitional=false&taiForm=false&tariForm=false&potential=false&imperative=false&conditional=false&passive=false&causative=false&causativePassive=false&verb=false&iAdjective=true&naAdjective=true&polite=true&plain=false&nonPast=true&past=true&positive=true&negative=true",
    module_type: "conjugation-practice",
  },
  "when-not-to-use-wa": {
    title: "When Not to use は",
    link: "/lessons/when-not-to-use-wa",
    module_type: "lesson",
  },
  "adj-modifying-nouns": {
    title: "Adjectives Modifying Nouns",
    link: "/lessons/adj-modifying-nouns",
    module_type: "lesson",
  },
  "suki-kirai": {
    title: "好き・嫌い",
    link: "/lessons/suki-kirai",
    module_type: "lesson",
  },
  "wa-comparisons": {
    title: "は For Comparisons",
    link: "/lessons/wa-comparisons",
    module_type: "lesson",
  },
  "suru-vs-yaru": {
    title: "する vs. やる",
    link: "/lessons/suru-vs-yaru",
    module_type: "lesson",
  },
  "polite-volitional": {
    title: "Polite Volitional - ましょう・ましょうか",
    link: "/lessons/polite-volitional",
    module_type: "lesson",
  },
  counters: {
    title: "Counters",
    link: "/lessons/counters",
    module_type: "lesson",
  },
  "te-form": {
    title: "て-Form (Verbs)",
    link: "/lessons/te-form",
    module_type: "lesson",
  },
  "conjugation-practice-te-form": {
    title: "Practice て-Form Conjugation",
    link: "/practice/conjugation?normal=false&teForm=true&volitional=false&taiForm=false&tariForm=false&potential=false&imperative=false&conditional=false&passive=false&causative=false&causativePassive=false&verb=true&iAdjective=false&naAdjective=false&polite=true&plain=false&nonPast=true&past=false&positive=true&negative=false",
    module_type: "conjugation-practice",
  },
  "te-form-connection": {
    title: "Connecting Actions With て-Form",
    link: "/lessons/te-form-connection",
    module_type: "lesson",
  },
  "te-kudasai": {
    title: "～てください",
    link: "/lessons/te-kudasai",
    module_type: "lesson",
  },
  "te-mo-ii-desu": {
    title: "～てもいいです",
    link: "/lessons/te-mo-ii-desu",
    module_type: "lesson",
  },
  "te-wa-ikemasen": {
    title: "～てはいけません - Must Not Do",
    link: "/lessons/te-wa-ikemasen",
    module_type: "lesson",
  },
  dame: {
    title: "だめ - No Good",
    link: "/lessons/dame",
    module_type: "lesson",
  },
  "te-form-adj-nouns": {
    title: "て-Form (Adj. & Nouns)",
    link: "/lessons/te-form-adj-nouns",
    module_type: "lesson",
  },
  kara: {
    title: "から",
    link: "/lessons/kara",
    module_type: "lesson",
  },
  "body-parts": {
    title: "Body Parts",
    link: "/lessons/genki_1/chapter-7/body-parts",
    module_type: "lesson",
  },
  "adj-to-adv": {
    title: "Convert Adjectives to Adverbs",
    link: "/lessons/adj-to-adv",
    module_type: "lesson",
  },
}
