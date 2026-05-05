import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "That black sweater looks warm.",
    hint: "sweater = セーター",
    answers: [
      {
        segments: [
          { text: "その 黒[くろ]い セーターは " },
          { text: "暖[あたた]かそう", blank: true },
          { text: "です" },
        ],
        notes: "Standard translation using その for 'that' and そうです after an い-adjective stem.",
      },
      {
        segments: [
          { text: "あの 黒[くろ]い セーターは " },
          { text: "暖[あたた]かそう", blank: true },
          { text: "です" },
        ],
        notes: "Using あの for a sweater farther from both speaker and listener.",
      },
      {
        segments: [
          { text: "その 黒[くろ]い セーターは " },
          { text: "暖[あたた]かそうな", blank: true },
          { text: "セーター" },
          { text: "です" },
        ],
        notes: "Using そうな before a noun: 'is a sweater that looks warm.'",
      },
      {
        segments: [
          { text: "あの 黒[くろ]い セーターは " },
          { text: "暖[あたた]かそうな", blank: true },
          { text: "セーター" },
          { text: "です" },
        ],
        notes: "そうな noun-modifying form with あの.",
      },
      {
        segments: [
          { text: "その セーターは 黒[くろ]くて " },
          { text: "暖[あたた]かそう", blank: true },
          { text: "です" },
        ],
        notes: "Rephrased as 'That sweater is black and looks warm' using adjective connective くて.",
      },
      {
        segments: [
          { text: "あの セーターは 黒[くろ]くて " },
          { text: "暖[あたた]かそう", blank: true },
          { text: "です" },
        ],
        notes: "Rephrased with あの and adjective connective くて.",
      },
      {
        segments: [
          { text: "黒[くろ]い その セーターは " },
          { text: "暖[あたた]かそう", blank: true },
          { text: "です" },
        ],
        notes: "Alternative word order emphasizing the black sweater; somewhat less common but natural in contrastive contexts.",
      },
      {
        segments: [
          { text: "黒[くろ]い あの セーターは " },
          { text: "暖[あたた]かそう", blank: true },
          { text: "です" },
        ],
        notes: "Alternative word order with あの, useful in contrastive contexts.",
      },
    ],
  },
  {
    english: "That party looks fun.",
    answers: [
      {
        segments: [
          { text: "その パーティーは " },
          { text: "楽[たの]しそう", blank: true },
          { text: "です" },
        ],
        notes: "Standard translation using その and topic は.",
      },
      {
        segments: [
          { text: "あの パーティーは " },
          { text: "楽[たの]しそう", blank: true },
          { text: "です" },
        ],
        notes: "Using あの for “that” party over there.",
      },
      {
        segments: [
          { text: "その パーティーが " },
          { text: "楽[たの]しそう", blank: true },
          { text: "です" },
        ],
        notes: "Using が to point out that specific party as looking fun.",
      },
      {
        segments: [
          { text: "あの パーティーが " },
          { text: "楽[たの]しそう", blank: true },
          { text: "です" },
        ],
        notes: "Using あの with が for a party being noticed visually.",
      },
      {
        segments: [
          { text: "それは " },
          { text: "楽[たの]しそうな", blank: true },
          { text: "パーティー" },
          { text: "です" },
        ],
        notes: "Uses そうな before a noun: “That is a fun-looking party,” ",
      },
      {
        segments: [
          { text: "あれは " },
          { text: "楽[たの]しそうな", blank: true },
          { text: "パーティー" },
          { text: "です" },
        ],
        notes: "Uses あれ and そうな before パーティー, ",
      },
    ],
  },
  {
    english: "That blue car looks fast.",
    answers: [
      {
        segments: [
          { text: "その 青[あお]い 車[くるま]は " },
          { text: "速[はや]そう", blank: true },
          { text: "です" },
        ],
        notes: "Standard translation using その for “that” near the listener and 速そうです",
      },
      {
        segments: [
          { text: "あの 青[あお]い 車[くるま]は " },
          { text: "速[はや]そう", blank: true },
          { text: "です" },
        ],
        notes: "Using あの for “that” car over there",
      },
      {
        segments: [
          { text: "あの 青[あお]い 車[くるま]は " },
          { text: "速[はや]そうな", blank: true },
          { text: " 車[くるま]" },
          { text: "です" },
        ],
        notes: "Using そうな before a noun: ‘a car that looks fast’",
      },
      {
        segments: [
          { text: "その 青[あお]い 車[くるま]は " },
          { text: "速[はや]そうな", blank: true },
          { text: " 車[くるま]" },
          { text: "です" },
        ],
        notes: "そうな noun-modifying version with その",
      },
    ],
  },
  {
    english: "That dog looks like it will sleep soon.",
    answers: [
      {
        segments: [
          { text: "その 犬[いぬ]は もうすぐ " },
          { text: "寝[ね]そう", blank: true },
          { text: "です" },
        ],
        notes: "Standard translation using verb-stem + そうです",
      },
      {
        segments: [
          { text: "あの 犬[いぬ]は もうすぐ " },
          { text: "寝[ね]そう", blank: true },
          { text: "です" },
        ],
        notes: "Using あの for 'that' (over there) instead of その",
      },
      {
        segments: [
          { text: "その 犬[いぬ]が もうすぐ " },
          { text: "寝[ね]そう", blank: true },
          { text: "です" },
        ],
        notes: "Using が to mark the dog as the observed subject",
      },
      {
        segments: [
          { text: "あの 犬[いぬ]が もうすぐ " },
          { text: "寝[ね]そう", blank: true },
          { text: "です" },
        ],
        notes: "Using あの plus が",
      },
      {
        segments: [
          { text: "その 犬[いぬ]は すぐ " },
          { text: "寝[ね]そう", blank: true },
          { text: "です" },
        ],
        notes: "Using すぐ as a natural alternative to もうすぐ",
      },
      {
        segments: [
          { text: "あの 犬[いぬ]は すぐ " },
          { text: "寝[ね]そう", blank: true },
          { text: "です" },
        ],
        notes: "Using あの and すぐ",
      },
      {
        segments: [
          { text: "その 犬[いぬ]が すぐ " },
          { text: "寝[ね]そう", blank: true },
          { text: "です" },
        ],
        notes: "Using が and すぐ",
      },
      {
        segments: [
          { text: "あの 犬[いぬ]が すぐ " },
          { text: "寝[ね]そう", blank: true },
          { text: "です" },
        ],
        notes: "Using あの, が, and すぐ",
      },
    ],
  },
  {
    english: "It looks like it will rain tonight.",
    answers: [
      {
        segments: [
          { text: "今夜[こんや]は 雨[あめ]が " },
          { text: "降[ふ]りそう", blank: true },
          { text: "です" },
        ],
        notes: "Standard translation using 雨が降りそうです",
      },
      {
        segments: [
          { text: "今晩[こんばん]は 雨[あめ]が " },
          { text: "降[ふ]りそう", blank: true },
          { text: "です" },
        ],
        notes: "Using 今晩 instead of 今夜 for tonight",
      },
      {
        segments: [
          { text: "今夜[こんや]、雨[あめ]が " },
          { text: "降[ふ]りそう", blank: true },
          { text: "です" },
        ],
        notes: "Topic は omitted; time phrase set off at the start",
      },
      {
        segments: [
          { text: "今晩[こんばん]、雨[あめ]が " },
          { text: "降[ふ]りそう", blank: true },
          { text: "です" },
        ],
        notes: "Using 今晩 with topic は omitted",
      },
      {
        segments: [
          { text: "雨[あめ]が 今夜[こんや] " },
          { text: "降[ふ]りそう", blank: true },
          { text: "です" },
        ],
        notes: "Reversed word order placing 雨 first",
      },
      {
        segments: [
          { text: "雨[あめ]が 今晩[こんばん] " },
          { text: "降[ふ]りそう", blank: true },
          { text: "です" },
        ],
        notes: "Reversed word order with 今晩",
      },
      {
        segments: [
          { text: "今夜[こんや]は " },
          { text: "雨[あめ]に なりそう", blank: true },
          { text: "です" },
        ],
        notes: "Using 雨になりそう to mean it looks like it will turn rainy",
      },
      {
        segments: [
          { text: "今晩[こんばん]は " },
          { text: "雨[あめ]に なりそう", blank: true },
          { text: "です" },
        ],
        notes: "Using 今晩 and 雨になる",
      },
    ],
  },
  {
    english: "That child is eating the hot curry like it is delicious.",
    answers: [
      {
        register: "casual",
        segments: [
          { text: "その 子供[こども]は 熱[あつ]い カレーを" },
          { text: "おいしそうに", blank: true },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation with その and は; hot as temperature 熱い",
      },
      {
        register: "casual",
        segments: [
          { text: "その 子供[こども]が 熱[あつ]い カレーを" },
          { text: "おいしそうに", blank: true },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to describe what that child is doing",
      },
      {
        register: "casual",
        segments: [
          { text: "あの 子供[こども]は 熱[あつ]い カレーを" },
          { text: "おいしそうに", blank: true },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using あの for 'that child' over there",
      },
      {
        register: "casual",
        segments: [
          { text: "あの 子供[こども]が 熱[あつ]い カレーを" },
          { text: "おいしそうに", blank: true },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using あの and が",
      },
      {
        register: "casual",
        segments: [
          { text: "その 子供[こども]は 辛[から]い カレーを" },
          { text: "おいしそうに", blank: true },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Interpreting hot curry as spicy curry",
      },
      {
        register: "casual",
        segments: [
          { text: "その 子供[こども]が 辛[から]い カレーを" },
          { text: "おいしそうに", blank: true },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Spicy curry with が",
      },
      {
        register: "casual",
        segments: [
          { text: "あの 子供[こども]は 辛[から]い カレーを" },
          { text: "おいしそうに", blank: true },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Spicy curry with あの",
      },
      {
        register: "casual",
        segments: [
          { text: "あの 子供[こども]が 辛[から]い カレーを" },
          { text: "おいしそうに", blank: true },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Spicy curry with あの and が",
      },
    ],
  },
  {
    english: "My roommate is reading the letter with a sad-looking face.",
    hint: "roommate = ルームメイト",
    answers: [
      {
        register: "casual",
        segments: [
          { text: "私[わたし]の ルームメイトは 悲[かな]し" },
          { text: "そうな", blank: true },
          { text: " 顔[かお]で 手紙[てがみ]を " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using そうな before 顔 to mean “sad-looking face”.",
      },
      {
        register: "casual",
        segments: [
          { text: "私[わたし]の ルームメイトは 手紙[てがみ]を 悲[かな]し" },
          { text: "そうな", blank: true },
          { text: " 顔[かお]で " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Object placed before the descriptive face phrase; still natural.",
      },
      {
        register: "casual",
        segments: [
          { text: "私[わたし]の ルームメイトは 悲[かな]し" },
          { text: "そうに", blank: true },
          { text: " 手紙[てがみ]を " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses そうに adverbially: reading the letter sadly / looking sad.",
      },
      {
        register: "casual",
        segments: [
          { text: "私[わたし]の ルームメイトは 手紙[てがみ]を 悲[かな]し" },
          { text: "そうに", blank: true },
          { text: " " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adverbial そうに placed between object and verb.",
      },
      {
        register: "casual",
        segments: [
          { text: "私[わたし]の ルームメイトが 悲[かな]し" },
          { text: "そうな", blank: true },
          { text: " 顔[かお]で 手紙[てがみ]を " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は to present what the roommate is doing.",
      },
      {
        register: "casual",
        segments: [
          { text: "私[わたし]の ルームメイトが 手紙[てがみ]を 悲[かな]し" },
          { text: "そうに", blank: true },
          { text: " " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が with adverbial そうに.",
      },
    ],
  },
  {
    english: "That restaurant looks quiet, so let's study there this afternoon.",
    answers: [
      {
        segments: [
          { text: "その レストランは " },
          { text: "静[しず]かそう", blank: true },
          { text: "です" },
          { text: "から、今日[きょう]の 午後[ごご]、そこで 勉強[べんきょう]" },
          { text: "する", conjugation: { pos: "Suru verb - compound word", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using そうです for 'looks quiet' and から for 'so'.",
      },
      {
        segments: [
          { text: "その レストランは " },
          { text: "静[しず]かそう", blank: true },
          { text: "です" },
          { text: "から、今日[きょう]の 午後[ごご]は そこで 勉強[べんきょう]" },
          { text: "する", conjugation: { pos: "Suru verb - compound word", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds は after 今日の午後 to mark the time as topic/contrast.",
      },
      {
        segments: [
          { text: "その レストランは " },
          { text: "静[しず]かそう", blank: true },
          { text: "です" },
          { text: "から、そこで 今日[きょう]の 午後[ごご] 勉強[べんきょう]" },
          { text: "する", conjugation: { pos: "Suru verb - compound word", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reorders the location before the time phrase.",
      },
      {
        segments: [
          { text: "その レストランは " },
          { text: "静[しず]かそう", blank: true },
          { text: "です" },
          { text: "から、そこで 今日[きょう]の 午後[ごご]は 勉強[べんきょう]" },
          { text: "する", conjugation: { pos: "Suru verb - compound word", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered with 今日の午後は as the topicalized time.",
      },
      {
        segments: [
          { text: "その " },
          { text: "静[しず]かそうな", blank: true },
          { text: " レストランで 今日[きょう]の 午後[ごご] 勉強[べんきょう]" },
          { text: "する", conjugation: { pos: "Suru verb - compound word", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses そうな attributively: 'that quiet-looking restaurant'.",
      },
      {
        segments: [
          { text: "その " },
          { text: "静[しず]かそうな", blank: true },
          { text: " レストランで 今日[きょう]の 午後[ごご]は 勉強[べんきょう]" },
          { text: "する", conjugation: { pos: "Suru verb - compound word", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Attributive そうな with the afternoon marked by は.",
      },
      {
        segments: [
          { text: "今日[きょう]の 午後[ごご]、その " },
          { text: "静[しず]かそうな", blank: true },
          { text: " レストランで 勉強[べんきょう]" },
          { text: "する", conjugation: { pos: "Suru verb - compound word", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Starts with the time phrase; uses そうな before レストラン.",
      },
      {
        segments: [
          { text: "今日[きょう]の 午後[ごご]は、その " },
          { text: "静[しず]かそうな", blank: true },
          { text: " レストランで 勉強[べんきょう]" },
          { text: "する", conjugation: { pos: "Suru verb - compound word", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time-first order with は topicalizing 'this afternoon'.",
      },
      {
        segments: [
          { text: "その レストランが " },
          { text: "静[しず]かそう", blank: true },
          { text: "です" },
          { text: "から、今日[きょう]の 午後[ごご]、そこで 勉強[べんきょう]" },
          { text: "する", conjugation: { pos: "Suru verb - compound word", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses が instead of は to identify that restaurant as the one that looks quiet.",
      },
      {
        segments: [
          { text: "その レストランが " },
          { text: "静[しず]かそう", blank: true },
          { text: "です" },
          { text: "から、今日[きょう]の 午後[ごご]は そこで 勉強[べんきょう]" },
          { text: "する", conjugation: { pos: "Suru verb - compound word", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses が for the restaurant and は for the time phrase.",
      },
    ],
  },
  {
    english: "That old bicycle looks like it won’t sell.",
    answers: [
      {
        segments: [
          { text: "その 古[ふる]い 自転車[じてんしゃ]は " },
          { text: "売[う]れなさそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses negative potential form with そうです: it does not look sellable.",
      },
      {
        segments: [
          { text: "あの 古[ふる]い 自転車[じてんしゃ]は " },
          { text: "売[う]れなさそう", blank: true },
          { text: "です" },
        ],
        notes: "Uses あの for a bicycle farther away.",
      },
    ],
  },
];
