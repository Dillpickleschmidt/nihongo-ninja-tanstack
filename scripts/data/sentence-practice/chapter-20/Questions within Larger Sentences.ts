import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I don't know whether the department manager is coming to the party tonight.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 部長[ぶちょう]が 今夜[こんや]の パーティーに " },
          { text: "来[く]るかどうか", blank: true },
          { text: " " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Basic wording with 今夜のパーティー and 来る",
      },
      {
        segments: [
          { text: "私[わたし]は 部長[ぶちょう]が 今晩[こんばん]の パーティーに " },
          { text: "来[く]るかどうか", blank: true },
          { text: " " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses 今晩 instead of 今夜",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや]の パーティーに 部長[ぶちょう]が " },
          { text: "来[く]るかどうか", blank: true },
          { text: " " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Reordered: party phrase before subject",
      },
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん]の パーティーに 部長[ぶちょう]が " },
          { text: "来[く]るかどうか", blank: true },
          { text: " " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Reordered with 今晩",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや]、部長[ぶちょう]が パーティーに " },
          { text: "来[く]るかどうか", blank: true },
          { text: " " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses 今夜 as an adverbial time phrase rather than 今夜の",
      },
      {
        segments: [
          { text: "私[わたし]は 今晩[こんばん]、部長[ぶちょう]が パーティーに " },
          { text: "来[く]るかどうか", blank: true },
          { text: " " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses 今晩 as an adverbial time phrase",
      },
      {
        segments: [
          { text: "私[わたし]は 部長[ぶちょう]が パーティーに 今夜[こんや] " },
          { text: "来[く]るかどうか", blank: true },
          { text: " " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Places 今夜 immediately before 来る",
      },
      {
        segments: [
          { text: "私[わたし]は 部長[ぶちょう]が パーティーに 今晩[こんばん] " },
          { text: "来[く]るかどうか", blank: true },
          { text: " " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Places 今晩 immediately before 来る",
      },
      {
        segments: [
          { text: "私[わたし]は 部長[ぶちょう]は 今夜[こんや]の パーティーに " },
          { text: "来[く]るかどうか", blank: true },
          { text: " " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses は for 部長 to make the manager the topic within the embedded question",
      },
      {
        segments: [
          { text: "私[わたし]は 部長[ぶちょう]は 今晩[こんばん]の パーティーに " },
          { text: "来[く]るかどうか", blank: true },
          { text: " " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses は for 部長 and 今晩",
      },
      {
        segments: [
          { text: "私[わたし]は 部長[ぶちょう]が 今夜[こんや]の パーティーへ " },
          { text: "来[く]るかどうか", blank: true },
          { text: " " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses へ instead of に for direction toward the party",
      },
      {
        segments: [
          { text: "私[わたし]は 部長[ぶちょう]が 今晩[こんばん]の パーティーへ " },
          { text: "来[く]るかどうか", blank: true },
          { text: " " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses へ and 今晩",
      },
      {
        segments: [
          { text: "私[わたし]は 部長[ぶちょう]が 今夜[こんや]の パーティーに " },
          { text: "来[く]るかどうか", blank: true },
          { text: " " },
          { text: "知[し]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses 知らない instead of 分からない",
      },
      {
        segments: [
          { text: "私[わたし]は 部長[ぶちょう]が 今晩[こんばん]の パーティーに " },
          { text: "来[く]るかどうか", blank: true },
          { text: " " },
          { text: "知[し]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses 知らない with 今晩",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや]、部長[ぶちょう]が パーティーに " },
          { text: "来[く]るかどうか", blank: true },
          { text: " " },
          { text: "知[し]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses 知らない with 今夜 as an adverbial time phrase",
      },
      {
        segments: [
          { text: "私[わたし]は 部長[ぶちょう]が 今夜[こんや]の パーティーに " },
          { text: "いらっしゃるかどうか", blank: true },
          { text: " " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses the honorific verb いらっしゃる for the department manager",
      },
      {
        segments: [
          { text: "私[わたし]は 部長[ぶちょう]が 今晩[こんばん]の パーティーに " },
          { text: "いらっしゃるかどうか", blank: true },
          { text: " " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Honorific verb with 今晩",
      },
      {
        segments: [
          { text: "私[わたし]は 今夜[こんや]、部長[ぶちょう]が パーティーに " },
          { text: "いらっしゃるかどうか", blank: true },
          { text: " " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Honorific verb with 今夜 as an adverbial time phrase",
      },
    ],
  },
  {
    english: "Please check whether the refrigerator door is closed.",
    answers: [
      {
        register: "polite",
        segments: [
          { text: "冷蔵庫[れいぞうこ]の ドアが " },
          { text: "閉[し]まっているかどうか", blank: true },
          { text: "、見[み]てください" },
        ],
        notes: "Basic translation using が and 見てください for “please check/look.”",
      },
      {
        register: "polite",
        segments: [
          { text: "冷蔵庫[れいぞうこ]の ドアは " },
          { text: "閉[し]まっているかどうか", blank: true },
          { text: "、見[み]てください" },
        ],
        notes: "Using は to mark the refrigerator door as the topic.",
      },
      {
        register: "polite",
        segments: [
          { text: "冷蔵庫[れいぞうこ]の ドアが " },
          { text: "閉[し]まっているかどうか", blank: true },
          { text: "、チェックしてください" },
        ],
        notes: "Using チェックしてください, a direct borrowing for “please check.”",
      },
      {
        register: "polite",
        segments: [
          { text: "冷蔵庫[れいぞうこ]の ドアは " },
          { text: "閉[し]まっているかどうか", blank: true },
          { text: "、チェックしてください" },
        ],
        notes: "Using は with チェックしてください.",
      },
      {
        register: "polite",
        segments: [
          { text: "冷蔵庫[れいぞうこ]の ドアが " },
          { text: "閉[し]まっているかどうか", blank: true },
          { text: "、調[しら]べてください" },
        ],
        notes: "Using 調べてください for “please check.”",
      },
      {
        register: "polite",
        segments: [
          { text: "冷蔵庫[れいぞうこ]の ドアは " },
          { text: "閉[し]まっているかどうか", blank: true },
          { text: "、調[しら]べてください" },
        ],
        notes: "Using は with 調べてください.",
      },
      {
        register: "polite",
        segments: [
          { text: "冷蔵庫[れいぞうこ]の ドアが " },
          { text: "閉[し]まっているかどうか", blank: true },
          { text: "、確認[かくにん]してください" },
        ],
        notes: "Using 確認してください, the most direct word for “please confirm/check.”",
      },
      {
        register: "polite",
        segments: [
          { text: "冷蔵庫[れいぞうこ]の ドアは " },
          { text: "閉[し]まっているかどうか", blank: true },
          { text: "、確認[かくにん]してください" },
        ],
        notes: "Using は with 確認してください.",
      },
      {
        register: "polite",
        segments: [
          { text: "冷蔵庫[れいぞうこ]の ドアが " },
          { text: "閉[し]まったかどうか", blank: true },
          { text: "、見[み]てください" },
        ],
        notes: "Using past 閉まったかどうか to mean whether it has closed.",
      },
      {
        register: "polite",
        segments: [
          { text: "冷蔵庫[れいぞうこ]の ドアは " },
          { text: "閉[し]まったかどうか", blank: true },
          { text: "、見[み]てください" },
        ],
        notes: "Past 閉まった with は topic marker.",
      },
      {
        register: "polite",
        segments: [
          { text: "冷蔵庫[れいぞうこ]の ドアが " },
          { text: "閉[し]まったかどうか", blank: true },
          { text: "、チェックしてください" },
        ],
        notes: "Past 閉まった with チェックしてください.",
      },
      {
        register: "polite",
        segments: [
          { text: "冷蔵庫[れいぞうこ]の ドアは " },
          { text: "閉[し]まったかどうか", blank: true },
          { text: "、チェックしてください" },
        ],
        notes: "Past 閉まった with は and チェックしてください.",
      },
      {
        register: "polite",
        segments: [
          { text: "冷蔵庫[れいぞうこ]の ドアが " },
          { text: "閉[し]まったかどうか", blank: true },
          { text: "、調[しら]べてください" },
        ],
        notes: "Past 閉まった with 調べてください.",
      },
      {
        register: "polite",
        segments: [
          { text: "冷蔵庫[れいぞうこ]の ドアは " },
          { text: "閉[し]まったかどうか", blank: true },
          { text: "、調[しら]べてください" },
        ],
        notes: "Past 閉まった with は and 調べてください.",
      },
      {
        register: "polite",
        segments: [
          { text: "冷蔵庫[れいぞうこ]の ドアが " },
          { text: "閉[し]まったかどうか", blank: true },
          { text: "、確認[かくにん]してください" },
        ],
        notes: "Past 閉まった with 確認してください.",
      },
      {
        register: "polite",
        segments: [
          { text: "冷蔵庫[れいぞうこ]の ドアは " },
          { text: "閉[し]まったかどうか", blank: true },
          { text: "、確認[かくにん]してください" },
        ],
        notes: "Past 閉まった with は and 確認してください.",
      },
    ],
  },
  {
    english: "I'm thinking about whether to buy the red sweater.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 赤[あか]い セーターを" },
          { text: "買[か]うかどうか", blank: true },
          { text: "考[かんが]える", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic phrasing with 私は and を; uses 考えている for “am thinking/considering”",
      },
      {
        segments: [
          { text: "私[わたし]は 今[いま]、赤[あか]い セーターを" },
          { text: "買[か]うかどうか", blank: true },
          { text: "考[かんが]える", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds 今 to emphasize “right now / currently thinking”",
      },
      {
        segments: [
          { text: "私[わたし]は 赤[あか]い セーターを" },
          { text: "買[か]うかどうかを", blank: true },
          { text: "考[かんが]える", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Includes を after the embedded whether-clause, marking it as the object of 考える",
      },
      {
        segments: [
          { text: "今[いま]、私[わたし]は 赤[あか]い セーターを" },
          { text: "買[か]うかどうか", blank: true },
          { text: "考[かんが]える", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moves 今 to the front of the sentence",
      },
      {
        segments: [
          { text: "今[いま]、私[わたし]は 赤[あか]い セーターを" },
          { text: "買[か]うかどうかを", blank: true },
          { text: "考[かんが]える", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted 今 plus を after the embedded clause",
      },
      {
        segments: [
          { text: "私[わたし]は 赤[あか]い セーターを" },
          { text: "買[か]おうかどうか", blank: true },
          { text: "考[かんが]える", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses volitional 買おうかどうか, a natural way to express “whether I should buy / whether to buy”",
      },
      {
        segments: [
          { text: "私[わたし]は 今[いま]、赤[あか]い セーターを" },
          { text: "買[か]おうかどうか", blank: true },
          { text: "考[かんが]える", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Volitional embedded question with 今 after 私は",
      },
      {
        segments: [
          { text: "今[いま]、私[わたし]は 赤[あか]い セーターを" },
          { text: "買[か]おうかどうか", blank: true },
          { text: "考[かんが]える", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Volitional embedded question with 今 at the beginning",
      },
      {
        segments: [
          { text: "私[わたし]は 赤[あか]い セーターを" },
          { text: "買[か]おうかどうかを", blank: true },
          { text: "考[かんが]える", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Volitional embedded question plus object marker を after かどうか",
      },
      {
        segments: [
          { text: "今[いま]、私[わたし]は 赤[あか]い セーターを" },
          { text: "買[か]おうかどうかを", blank: true },
          { text: "考[かんが]える", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Volitional embedded question with both fronted 今 and を after かどうか",
      },
    ],
  },
  {
    english: "Please tell me whether this hotel has a large bath.",
    hint: "hotel = ホテル",
    answers: [
      {
        segments: [
          { text: "この ホテルに 大浴場[だいよくじょう]が " },
          { text: "あるかどうか", blank: true },
          { text: "、教[おし]えてください" },
        ],
        notes: "Basic translation using に for existence and 大浴場 for a large public bath",
      },
      {
        segments: [
          { text: "この ホテルに 大[おお]きい お風呂[ふろ]が " },
          { text: "あるかどうか", blank: true },
          { text: "、教[おし]えてください" },
        ],
        notes: "Uses the more literal phrase 大きいお風呂 for large bath",
      },
      {
        segments: [
          { text: "この ホテルには 大浴場[だいよくじょう]が " },
          { text: "あるかどうか", blank: true },
          { text: "、教[おし]えてください" },
        ],
        notes: "Uses には to mark the hotel as the contrastive/topic location",
      },
      {
        segments: [
          { text: "この ホテルには 大[おお]きい お風呂[ふろ]が " },
          { text: "あるかどうか", blank: true },
          { text: "、教[おし]えてください" },
        ],
        notes: "Combines には with 大きいお風呂",
      },
      {
        segments: [
          { text: "この ホテルに 大[おお]きな お風呂[ふろ]が " },
          { text: "あるかどうか", blank: true },
          { text: "、教[おし]えてください" },
        ],
        notes: "Uses 大きな as an attributive alternative to 大きい",
      },
      {
        segments: [
          { text: "この ホテルには 大[おお]きな お風呂[ふろ]が " },
          { text: "あるかどうか", blank: true },
          { text: "、教[おし]えてください" },
        ],
        notes: "Uses 大きなお風呂 with には",
      },
      {
        segments: [
          { text: "大浴場[だいよくじょう]が この ホテルに " },
          { text: "あるかどうか", blank: true },
          { text: "、教[おし]えてください" },
        ],
        notes: "Reversed word order with 大浴場 first",
      },
      {
        segments: [
          { text: "大[おお]きい お風呂[ふろ]が この ホテルに " },
          { text: "あるかどうか", blank: true },
          { text: "、教[おし]えてください" },
        ],
        notes: "Reversed word order using 大きいお風呂",
      },
      {
        segments: [
          { text: "大[おお]きな お風呂[ふろ]が この ホテルに " },
          { text: "あるかどうか", blank: true },
          { text: "、教[おし]えてください" },
        ],
        notes: "Reversed word order using 大きなお風呂",
      },
      {
        segments: [
          { text: "この ホテルに 大浴場[だいよくじょう]が " },
          { text: "あるかどうか", blank: true },
          { text: "を 教[おし]えてください" },
        ],
        notes: "Uses を after the embedded question, also natural",
      },
      {
        segments: [
          { text: "この ホテルには 大浴場[だいよくじょう]が " },
          { text: "あるかどうか", blank: true },
          { text: "を 教[おし]えてください" },
        ],
        notes: "Uses both には and を after the embedded question",
      },
      {
        segments: [
          { text: "この ホテルに 大[おお]きい お風呂[ふろ]が " },
          { text: "あるかどうか", blank: true },
          { text: "を 教[おし]えてください" },
        ],
        notes: "Uses 大きいお風呂 and marks the whole whether-clause with を",
      },
      {
        segments: [
          { text: "この ホテルには 大[おお]きい お風呂[ふろ]が " },
          { text: "あるかどうか", blank: true },
          { text: "を 教[おし]えてください" },
        ],
        notes: "Combines には, 大きいお風呂, and を marking the embedded question",
      },
      {
        segments: [
          { text: "この ホテルに 大[おお]きな お風呂[ふろ]が " },
          { text: "あるかどうか", blank: true },
          { text: "を 教[おし]えてください" },
        ],
        notes: "Uses 大きなお風呂 and を marking the embedded question",
      },
      {
        segments: [
          { text: "この ホテルには 大[おお]きな お風呂[ふろ]が " },
          { text: "あるかどうか", blank: true },
          { text: "を 教[おし]えてください" },
        ],
        notes: "Uses には, 大きなお風呂, and を marking the embedded question",
      },
    ],
  },
  {
    english: "I'm worried about whether I can pay this month's rent by the end of today.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今月[こんげつ]の 家賃[やちん]を 今日中[きょうじゅう]に " },
          { text: "払[はら]えるかどうか", blank: true },
          { text: " 心配[しんぱい]" },
          { text: "です" },
        ],
        notes: "Basic translation using を with the potential verb and 心配です.",
      },
      {
        segments: [
          { text: "私[わたし]は 今日中[きょうじゅう]に 今月[こんげつ]の 家賃[やちん]を " },
          { text: "払[はら]えるかどうか", blank: true },
          { text: " 心配[しんぱい]" },
          { text: "です" },
        ],
        notes: "Time expression placed before the object.",
      },
      {
        segments: [
          { text: "私[わたし]は 今月[こんげつ]の 家賃[やちん]が 今日中[きょうじゅう]に " },
          { text: "払[はら]えるかどうか", blank: true },
          { text: " 心配[しんぱい]" },
          { text: "です" },
        ],
        notes: "Using が with the potential verb, which is natural for potential constructions.",
      },
      {
        segments: [
          { text: "私[わたし]は 今日中[きょうじゅう]に 今月[こんげつ]の 家賃[やちん]が " },
          { text: "払[はら]えるかどうか", blank: true },
          { text: " 心配[しんぱい]" },
          { text: "です" },
        ],
        notes: "Using が with the potential verb and moving 今日中に earlier.",
      },
      {
        segments: [
          { text: "私[わたし]は 今月[こんげつ]の 家賃[やちん]を 今日中[きょうじゅう]に " },
          { text: "払[はら]うことができるかどうか", blank: true },
          { text: " 心配[しんぱい]" },
          { text: "です" },
        ],
        notes: "Using ことができる instead of the potential verb 払える.",
      },
      {
        segments: [
          { text: "私[わたし]は 今日中[きょうじゅう]に 今月[こんげつ]の 家賃[やちん]を " },
          { text: "払[はら]うことができるかどうか", blank: true },
          { text: " 心配[しんぱい]" },
          { text: "です" },
        ],
        notes: "Using ことができる with time expression first.",
      },
      {
        segments: [
          { text: "今日中[きょうじゅう]に 今月[こんげつ]の 家賃[やちん]を " },
          { text: "払[はら]えるかどうか", blank: true },
          { text: "、私[わたし]は 心配[しんぱい]" },
          { text: "です" },
        ],
        notes: "Topicalizing the embedded question at the beginning.",
      },
      {
        segments: [
          { text: "今月[こんげつ]の 家賃[やちん]を 今日中[きょうじゅう]に " },
          { text: "払[はら]えるかどうか", blank: true },
          { text: "、私[わたし]は 心配[しんぱい]" },
          { text: "です" },
        ],
        notes: "Topicalized embedded question with object before time expression.",
      },
    ],
  },
  {
    english: "I still haven't decided whether to invite my roommate to the concert.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の ルームメイトを コンサートに " },
          { text: "誘[さそ]うかどうか", blank: true },
          { text: "、まだ " },
          { text: "決[き]める", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Basic order with 私のルームメイト and コンサートに",
      },
      {
        segments: [
          { text: "私[わたし]は コンサートに 私[わたし]の ルームメイトを " },
          { text: "誘[さそ]うかどうか", blank: true },
          { text: "、まだ " },
          { text: "決[き]める", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Reversed order: destination before object",
      },
      {
        segments: [
          { text: "私[わたし]は まだ 私[わたし]の ルームメイトを コンサートに " },
          { text: "誘[さそ]うかどうか", blank: true },
          { text: " " },
          { text: "決[き]める", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "まだ placed before the embedded question",
      },
      {
        segments: [
          { text: "私[わたし]は まだ コンサートに 私[わたし]の ルームメイトを " },
          { text: "誘[さそ]うかどうか", blank: true },
          { text: " " },
          { text: "決[き]める", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "まだ placed early with destination before object",
      },
      {
        segments: [
          { text: "私[わたし]は ルームメイトを コンサートに " },
          { text: "誘[さそ]うかどうか", blank: true },
          { text: "、まだ " },
          { text: "決[き]める", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Possessive 私の omitted as natural Japanese",
      },
      {
        segments: [
          { text: "私[わたし]は コンサートに ルームメイトを " },
          { text: "誘[さそ]うかどうか", blank: true },
          { text: "、まだ " },
          { text: "決[き]める", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Possessive omitted and destination placed first",
      },
      {
        segments: [
          { text: "私[わたし]は ルームメートを コンサートに " },
          { text: "誘[さそ]うかどうか", blank: true },
          { text: "、まだ " },
          { text: "決[き]める", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using ルームメート spelling instead of ルームメイト",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の ルームメイトを コンサートへ " },
          { text: "誘[さそ]うかどうか", blank: true },
          { text: "、まだ " },
          { text: "決[き]める", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using へ instead of に for the destination/event invited to",
      },
      {
        segments: [
          { text: "私[わたし]は コンサートへ 私[わたし]の ルームメイトを " },
          { text: "誘[さそ]うかどうか", blank: true },
          { text: "、まだ " },
          { text: "決[き]める", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using へ and destination before object",
      },
      {
        segments: [
          { text: "私[わたし]は ルームメイトを コンサートへ " },
          { text: "誘[さそ]うかどうか", blank: true },
          { text: "、まだ " },
          { text: "決[き]める", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Possessive omitted, using へ",
      },
      {
        segments: [
          { text: "私[わたし]は コンサートへ ルームメイトを " },
          { text: "誘[さそ]うかどうか", blank: true },
          { text: "、まだ " },
          { text: "決[き]める", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Possessive omitted, using へ, destination first",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の ルームメイトを コンサートに " },
          { text: "招待[しょうたい]するかどうか", blank: true },
          { text: "、まだ " },
          { text: "決[き]める", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using 招待する for a more formal sense of invite",
      },
      {
        segments: [
          { text: "私[わたし]は ルームメイトを コンサートに " },
          { text: "招待[しょうたい]するかどうか", blank: true },
          { text: "、まだ " },
          { text: "決[き]める", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "招待する with possessive omitted",
      },
      {
        segments: [
          { text: "私[わたし]は コンサートに ルームメイトを " },
          { text: "招待[しょうたい]するかどうか", blank: true },
          { text: "、まだ " },
          { text: "決[き]める", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "招待する with destination before object",
      },
      {
        segments: [
          { text: "私[わたし]は ルームメイトを コンサートに " },
          { text: "誘[さそ]うかどうか", blank: true },
          { text: "は、まだ " },
          { text: "決[き]める", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Topicalizing the embedded whether-clause with は",
      },
    ],
  },
  {
    english: "I want to know whether the woman over there is a famous singer.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は あそこにいる 女[おんな]の 人[ひと]が " },
          { text: "有名[ゆうめい]な 歌手[かしゅ]かどうか", blank: true },
          { text: " 知[し]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using あそこにいる女の人 and が in the embedded question",
      },
      {
        segments: [
          { text: "私[わたし]は あの 女[おんな]の 人[ひと]が " },
          { text: "有名[ゆうめい]な 歌手[かしゅ]かどうか", blank: true },
          { text: " 知[し]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using あの女の人 for “the woman over there”",
      },
      {
        segments: [
          { text: "私[わたし]は あそこにいる 女[おんな]の 人[ひと]は " },
          { text: "有名[ゆうめい]な 歌手[かしゅ]かどうか", blank: true },
          { text: " 知[し]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は instead of が to mark the woman as the topic of the embedded question",
      },
      {
        segments: [
          { text: "私[わたし]は あの 女[おんな]の 人[ひと]は " },
          { text: "有名[ゆうめい]な 歌手[かしゅ]かどうか", blank: true },
          { text: " 知[し]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Combining あの女の人 with は",
      },
      {
        segments: [
          { text: "私[わたし]は あそこにいる 女[おんな]の 人[ひと]が " },
          { text: "有名[ゆうめい]な 歌手[かしゅ]かどうか", blank: true },
          { text: "を 知[し]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Including を after the embedded かどうか clause",
      },
      {
        segments: [
          { text: "私[わたし]は あの 女[おんな]の 人[ひと]が " },
          { text: "有名[ゆうめい]な 歌手[かしゅ]かどうか", blank: true },
          { text: "を 知[し]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using あの女の人 with explicit を",
      },
      {
        segments: [
          { text: "私[わたし]は あそこの 女[おんな]の 人[ひと]が " },
          { text: "有名[ゆうめい]な 歌手[かしゅ]かどうか", blank: true },
          { text: " 知[し]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using あそこの女の人 for “the woman over there”",
      },
      {
        segments: [
          { text: "私[わたし]は あそこの 女[おんな]の 人[ひと]が " },
          { text: "有名[ゆうめい]な 歌手[かしゅ]かどうか", blank: true },
          { text: "を 知[し]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using あそこの女の人 with explicit を",
      },
      {
        segments: [
          { text: "私[わたし]は あちらにいる 女[おんな]の 人[ひと]が " },
          { text: "有名[ゆうめい]な 歌手[かしゅ]かどうか", blank: true },
          { text: " 知[し]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using the slightly more polite あちらにいる女の人",
      },
      {
        segments: [
          { text: "私[わたし]は あちらにいる 女[おんな]の 人[ひと]が " },
          { text: "有名[ゆうめい]な 歌手[かしゅ]かどうか", blank: true },
          { text: "を 知[し]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using あちらにいる女の人 with explicit を",
      },
      {
        segments: [
          { text: "私[わたし]は あそこにいる 女[おんな]の 人[ひと]が " },
          { text: "有名[ゆうめい]な 歌手[かしゅ]かどうか", blank: true },
          { text: "が 知[し]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to mark the embedded question as the object of 知りたい",
      },
      {
        segments: [
          { text: "私[わたし]は あの 女[おんな]の 人[ひと]が " },
          { text: "有名[ゆうめい]な 歌手[かしゅ]かどうか", blank: true },
          { text: "が 知[し]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "あの女の人 with が marking the かどうか clause",
      },
      {
        segments: [
          { text: "私[わたし]は あそこの 女[おんな]の 人[ひと]が " },
          { text: "有名[ゆうめい]な 歌手[かしゅ]かどうか", blank: true },
          { text: "が 知[し]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "あそこの女の人 with が marking the かどうか clause",
      },
      {
        segments: [
          { text: "私[わたし]は あちらにいる 女[おんな]の 人[ひと]が " },
          { text: "有名[ゆうめい]な 歌手[かしゅ]かどうか", blank: true },
          { text: "が 知[し]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "あちらにいる女の人 with が marking the かどうか clause",
      },
      {
        segments: [
          { text: "あそこにいる 女[おんな]の 人[ひと]が " },
          { text: "有名[ゆうめい]な 歌手[かしゅ]かどうか", blank: true },
          { text: "、知[し]る", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omitting the initial 私は; the かどうか clause comes first",
      },
    ],
  },
  {
    english: "Could you try the soup and tell me whether it’s too spicy?",
    answers: [
      {
        register: "polite",
        segments: [
          { text: "この スープを 飲[の]んでみて、" },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "、教[おし]えていただけません" },
          { text: "か" },
        ],
        notes: "Standard translation using 飲んでみて and a polite request with いただけませんか",
      },
      {
        register: "polite",
        segments: [
          { text: "この スープを 少[すこ]し 飲[の]んでみて、" },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "、教[おし]えていただけません" },
          { text: "か" },
        ],
        notes: "Adds 少し to express trying/tasting a little",
      },
      {
        register: "polite",
        segments: [
          { text: "ちょっと この スープを 飲[の]んでみて、" },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "、教[おし]えていただけません" },
          { text: "か" },
        ],
        notes: "Adds ちょっと for a softer, more natural request",
      },
      {
        register: "polite",
        segments: [
          { text: "この スープを 飲[の]んでみて、" },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "を 教[おし]えていただけません" },
          { text: "か" },
        ],
        notes: "Uses を after the embedded question",
      },
      {
        register: "polite",
        segments: [
          { text: "この スープが " },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "、飲[の]んでみて 教[おし]えていただけません" },
          { text: "か" },
        ],
        notes: "Puts the かどうか clause before 飲んでみて",
      },
      {
        register: "polite",
        segments: [
          { text: "この スープが " },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "、少[すこ]し 飲[の]んでみて 教[おし]えていただけません" },
          { text: "か" },
        ],
        notes: "Fronted embedded question with 少し before 飲んでみて",
      },
      {
        register: "polite",
        segments: [
          { text: "この スープを 飲[の]んでみて、" },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "、教[おし]えてください" },
        ],
        notes: "Uses 教えてください instead of いただけませんか",
      },
      {
        register: "polite",
        segments: [
          { text: "この スープを 少[すこ]し 飲[の]んでみて、" },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "、教[おし]えてください" },
        ],
        notes: "教えてください with 少し for tasting a little",
      },
      {
        register: "polite",
        segments: [
          { text: "ちょっと この スープを 飲[の]んでみて、" },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "、教[おし]えてください" },
        ],
        notes: "Softer request with ちょっと and 教えてください",
      },
      {
        register: "polite",
        segments: [
          { text: "この スープが " },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "、飲[の]んでみて 教[おし]えてください" },
        ],
        notes: "Fronts the embedded question and uses 教えてください",
      },
      {
        register: "polite",
        segments: [
          { text: "この スープが " },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "、少[すこ]し 飲[の]んでみて 教[おし]えてください" },
        ],
        notes: "Fronted embedded question with 少し and 教えてください",
      },
      {
        register: "polite",
        segments: [
          { text: "スープを 飲[の]んでみて、" },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "、教[おし]えていただけません" },
          { text: "か" },
        ],
        notes: "Omits the demonstrative, relying on context for 'the soup'",
      },
      {
        register: "polite",
        segments: [
          { text: "スープを 少[すこ]し 飲[の]んでみて、" },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "、教[おし]えていただけません" },
          { text: "か" },
        ],
        notes: "Omits demonstrative and adds 少し",
      },
      {
        register: "polite",
        segments: [
          { text: "スープを 飲[の]んでみて、" },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "、教[おし]えてください" },
        ],
        notes: "Simpler request without demonstrative",
      },
      {
        register: "polite",
        segments: [
          { text: "スープを 少[すこ]し 飲[の]んでみて、" },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "、教[おし]えてください" },
        ],
        notes: "Simpler request without demonstrative, with 少し",
      },
      {
        register: "polite",
        segments: [
          { text: "その スープを 飲[の]んでみて、" },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "、教[おし]えていただけません" },
          { text: "か" },
        ],
        notes: "Uses その when the soup is near the listener or already mentioned",
      },
      {
        register: "polite",
        segments: [
          { text: "その スープを 飲[の]んでみて、" },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "、教[おし]えてください" },
        ],
        notes: "Uses その with the simpler request 教えてください",
      },
      {
        register: "polite",
        segments: [
          { text: "この スープを 飲[の]んでみて、味[あじ]が " },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "、教[おし]えていただけません" },
          { text: "か" },
        ],
        notes: "Adds 味が to specify whether the taste is too spicy",
      },
      {
        register: "polite",
        segments: [
          { text: "この スープを 飲[の]んでみて、味[あじ]が " },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "、教[おし]えてください" },
        ],
        notes: "Uses 味が with 教えてください",
      },
      {
        register: "polite",
        segments: [
          { text: "その スープを 少[すこ]し 飲[の]んでみて、" },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "、教[おし]えていただけません" },
          { text: "か" },
        ],
        notes: "Uses その and 少し with a polite request",
      },
      {
        register: "polite",
        segments: [
          { text: "その スープを 少[すこ]し 飲[の]んでみて、" },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "、教[おし]えてください" },
        ],
        notes: "Uses その and 少し with 教えてください",
      },
      {
        register: "polite",
        segments: [
          { text: "ちょっと スープを 飲[の]んでみて、" },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "、教[おし]えていただけません" },
          { text: "か" },
        ],
        notes: "Omits demonstrative and uses ちょっと to soften the request",
      },
      {
        register: "polite",
        segments: [
          { text: "ちょっと スープを 飲[の]んでみて、" },
          { text: "辛[から]すぎるかどうか", blank: true },
          { text: "、教[おし]えてください" },
        ],
        notes: "Casual-sounding softened request without demonstrative",
      },
    ],
  },
  {
    english: "I forgot whether I locked the apartment door before going out.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に アパートの ドアに 鍵[かぎ]を かけた" },
          { text: "かどうか", blank: true },
          { text: "、忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard translation with 出かける前に and ドアに鍵をかける",
      },
      {
        segments: [
          { text: "私[わたし]は アパートを 出[で]る 前[まえ]に ドアに 鍵[かぎ]を かけた" },
          { text: "かどうか", blank: true },
          { text: "、忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses アパートを出る前に instead of 出かける前に",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に アパートの ドアの 鍵[かぎ]を かけた" },
          { text: "かどうか", blank: true },
          { text: "、忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses ドアの鍵をかける instead of ドアに鍵をかける",
      },
      {
        segments: [
          { text: "私[わたし]は アパートを 出[で]る 前[まえ]に ドアの 鍵[かぎ]を かけた" },
          { text: "かどうか", blank: true },
          { text: "、忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Combines アパートを出る前に with ドアの鍵をかける",
      },
      {
        segments: [
          { text: "私[わたし]は アパートの ドアに 鍵[かぎ]を かけてから 出[で]かけた" },
          { text: "かどうか", blank: true },
          { text: "、忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses てから to express the sequence before going out",
      },
      {
        segments: [
          { text: "私[わたし]は アパートの ドアの 鍵[かぎ]を かけてから 出[で]かけた" },
          { text: "かどうか", blank: true },
          { text: "、忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses てから with ドアの鍵をかける",
      },
      {
        segments: [
          { text: "私[わたし]は アパートの ドアに 鍵[かぎ]を かけて 出[で]かけた" },
          { text: "かどうか", blank: true },
          { text: "、忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses te-form sequence without から",
      },
      {
        segments: [
          { text: "私[わたし]は アパートの ドアの 鍵[かぎ]を かけて 出[で]かけた" },
          { text: "かどうか", blank: true },
          { text: "、忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Te-form sequence with ドアの鍵をかける",
      },
      {
        segments: [
          { text: "出[で]かける 前[まえ]に、私[わたし]は アパートの ドアに 鍵[かぎ]を かけた" },
          { text: "かどうか", blank: true },
          { text: "、忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Moves 出かける前に to the beginning",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に アパートの ドアに 鍵[かぎ]を かけた" },
          { text: "かどうか", blank: true },
          { text: "を 忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Adds を after the embedded かどうか clause",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に アパートの ドアに 鍵[かぎ]を かけた" },
          { text: "かどうか", blank: true },
          { text: "、忘[わす]れてしまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses てしまう to emphasize accidentally/completely forgetting",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に アパートの ドアの 鍵[かぎ]を かけた" },
          { text: "かどうか", blank: true },
          { text: "、忘[わす]れてしまう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "てしまう variant with ドアの鍵",
      },
      {
        segments: [
          { text: "出[で]かける 前[まえ]に、アパートの ドアに 鍵[かぎ]を " },
          { text: "かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omits 私 and places 出かける前に at the beginning",
      },
      {
        segments: [
          { text: "出[で]かける 前[まえ]に、アパートの ドアの 鍵[かぎ]を " },
          { text: "かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omits 私 and uses ドアの鍵をかける",
      },
      {
        segments: [
          { text: "アパートを 出[で]る 前[まえ]に、ドアに 鍵[かぎ]を " },
          { text: "かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omits 私 and uses アパートを出る前に",
      },
      {
        segments: [
          { text: "アパートを 出[で]る 前[まえ]に、ドアの 鍵[かぎ]を " },
          { text: "かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omits 私 and combines アパートを出る前に with ドアの鍵",
      },
      {
        segments: [
          { text: "私[わたし]は 外[そと]に 出[で]る 前[まえ]に アパートの ドアに 鍵[かぎ]を " },
          { text: "かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 外に出る前に for before going out",
      },
      {
        segments: [
          { text: "私[わたし]は 外[そと]に 出[で]る 前[まえ]に アパートの ドアの 鍵[かぎ]を " },
          { text: "かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 外に出る前に with ドアの鍵",
      },
      {
        segments: [
          { text: "外[そと]に 出[で]る 前[まえ]に、アパートの ドアに 鍵[かぎ]を " },
          { text: "かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omits 私 and fronts 外に出る前に",
      },
      {
        segments: [
          { text: "外[そと]に 出[で]る 前[まえ]に、アパートの ドアの 鍵[かぎ]を " },
          { text: "かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omits 私, fronts 外に出る前に, and uses ドアの鍵",
      },
      {
        segments: [
          { text: "私[わたし]は アパートから 出[で]る 前[まえ]に ドアに 鍵[かぎ]を " },
          { text: "かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses アパートから出る前に instead of アパートを出る前に",
      },
      {
        segments: [
          { text: "私[わたし]は アパートから 出[で]る 前[まえ]に ドアの 鍵[かぎ]を " },
          { text: "かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses アパートから出る前に with ドアの鍵",
      },
      {
        segments: [
          { text: "アパートから 出[で]る 前[まえ]に、ドアに 鍵[かぎ]を " },
          { text: "かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omits 私 and fronts アパートから出る前に",
      },
      {
        segments: [
          { text: "アパートから 出[で]る 前[まえ]に、ドアの 鍵[かぎ]を " },
          { text: "かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omits 私 and uses アパートから出る前に with ドアの鍵",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に アパートの ドアに 鍵[かぎ]を " },
          { text: "かけたかどうか", blank: true },
          { text: "を " },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Past-tense forgetting with を after the embedded clause",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に アパートの ドアの 鍵[かぎ]を " },
          { text: "かけたかどうか", blank: true },
          { text: "を " },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Adds を after かどうか with ドアの鍵",
      },
      {
        segments: [
          { text: "私[わたし]は アパートを 出[で]る 前[まえ]に ドアに 鍵[かぎ]を " },
          { text: "かけたかどうか", blank: true },
          { text: "を " },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Adds を after かどうか with アパートを出る前に",
      },
      {
        segments: [
          { text: "出[で]かける 前[まえ]に、アパートの ドアに 鍵[かぎ]を " },
          { text: "かけたかどうか", blank: true },
          { text: "を " },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omits 私, fronts time phrase, and adds を after かどうか",
      },
      {
        segments: [
          { text: "私[わたし]は 出[で]かける 前[まえ]に アパートの ドアに 鍵[かぎ]を " },
          { text: "かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れてしまう", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Past-tense てしまう emphasizing accidentally forgot",
      },
      {
        segments: [
          { text: "私[わたし]は アパートを 出[で]る 前[まえ]に ドアに 鍵[かぎ]を " },
          { text: "かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れてしまう", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "てしまう variant with アパートを出る前に",
      },
      {
        segments: [
          { text: "私[わたし]は アパートを 出[で]る 前[まえ]に ドアの 鍵[かぎ]を " },
          { text: "かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れてしまう", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "てしまう variant with アパートを出る前に and ドアの鍵",
      },
      {
        segments: [
          { text: "出[で]かける 前[まえ]に、アパートの ドアに 鍵[かぎ]を " },
          { text: "かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れてしまう", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omits 私 and uses てしまう",
      },
      {
        segments: [
          { text: "出[で]かける 前[まえ]に、アパートの ドアの 鍵[かぎ]を " },
          { text: "かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れてしまう", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omits 私, uses ドアの鍵, and uses てしまう",
      },
      {
        segments: [
          { text: "私[わたし]は アパートの ドアに 鍵[かぎ]を " },
          { text: "かけてから 出[で]かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Past-tense forgetting with てから sequence in the embedded clause",
      },
      {
        segments: [
          { text: "私[わたし]は アパートの ドアの 鍵[かぎ]を " },
          { text: "かけてから 出[で]かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "てから sequence with ドアの鍵",
      },
      {
        segments: [
          { text: "アパートの ドアに 鍵[かぎ]を " },
          { text: "かけてから 出[で]かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omits 私 with てから sequence",
      },
      {
        segments: [
          { text: "アパートの ドアの 鍵[かぎ]を " },
          { text: "かけてから 出[で]かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omits 私 and uses ドアの鍵 with てから sequence",
      },
      {
        segments: [
          { text: "私[わたし]は アパートの ドアに 鍵[かぎ]を " },
          { text: "かけて 出[で]かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Past-tense forgetting with te-form sequence",
      },
      {
        segments: [
          { text: "私[わたし]は アパートの ドアの 鍵[かぎ]を " },
          { text: "かけて 出[で]かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Te-form sequence with ドアの鍵",
      },
      {
        segments: [
          { text: "アパートの ドアに 鍵[かぎ]を " },
          { text: "かけて 出[で]かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omits 私 with te-form sequence",
      },
      {
        segments: [
          { text: "アパートの ドアの 鍵[かぎ]を " },
          { text: "かけて 出[で]かけたかどうか", blank: true },
          { text: "、" },
          { text: "忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omits 私 and uses ドアの鍵 with te-form sequence",
      },
    ],
  },
  {
    english: "At the station, I’ll ask whether the last train has already left.",
    answers: [
      {
        segments: [
          { text: "駅[えき]で、終電[しゅうでん]が " },
          { text: "もう 出[で]たかどうか", blank: true },
          { text: " 聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation with 駅で and が marking the last train as the subject",
      },
      {
        segments: [
          { text: "駅[えき]で、もう 終電[しゅうでん]が " },
          { text: "出[で]たかどうか", blank: true },
          { text: " 聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adverb もう placed before 終電が",
      },
      {
        segments: [
          { text: "駅[えき]で、終電[しゅうでん]は " },
          { text: "もう 出[で]たかどうか", blank: true },
          { text: " 聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は to mark the last train as the topic within the embedded question",
      },
      {
        segments: [
          { text: "駅[えき]で、もう 終電[しゅうでん]は " },
          { text: "出[で]たかどうか", blank: true },
          { text: " 聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は with もう placed before the subject/topic",
      },
      {
        segments: [
          { text: "駅[えき]で 駅員[えきいん]に、終電[しゅうでん]が " },
          { text: "もう 出[で]たかどうか", blank: true },
          { text: " 聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Specifies asking the station attendant",
      },
      {
        segments: [
          { text: "駅[えき]で 駅員[えきいん]に、もう 終電[しゅうでん]が " },
          { text: "出[で]たかどうか", blank: true },
          { text: " 聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Specifies asking the station attendant, with もう before 終電",
      },
    ],
  },
  {
    english: "Before I move, I want to ask the landlord whether I can keep a pet in this apartment.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 引[ひ]っ越[こ]す 前[まえ]に、この アパートで ペットを " },
          { text: "飼[か]ってもよいかどうか", blank: true },
          { text: "、大家[おおや]さんに " },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Most natural permission wording with てもよいかどうか",
      },
      {
        segments: [
          { text: "私[わたし]は 引[ひ]っ越[こ]す 前[まえ]に、この アパートで ペットが " },
          { text: "飼[か]えるかどうか", blank: true },
          { text: "、大家[おおや]さんに " },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses potential 飼える for 'can keep a pet'",
      },
      {
        segments: [
          { text: "私[わたし]は 引[ひ]っ越[こ]す 前[まえ]に、この アパートで ペットを " },
          { text: "飼[か]うことができるかどうか", blank: true },
          { text: "、大家[おおや]さんに " },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses ことができる to express ability",
      },
      {
        segments: [
          { text: "私[わたし]は 引[ひ]っ越[こ]す 前[まえ]に、この アパートで ペットを " },
          { text: "飼[か]ってもかまわないかどうか", blank: true },
          { text: "、大家[おおや]さんに " },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses てもかまわない for permission instead of てもよい",
      },
      {
        segments: [
          { text: "私[わたし]は この アパートで ペットを " },
          { text: "飼[か]ってもよいかどうか", blank: true },
          { text: "、引[ひ]っ越[こ]す 前[まえ]に 大家[おおや]さんに " },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moves the かどうか clause before the time phrase",
      },
      {
        segments: [
          { text: "私[わたし]は この アパートで ペットが " },
          { text: "飼[か]えるかどうか", blank: true },
          { text: "、引[ひ]っ越[こ]す 前[まえ]に 大家[おおや]さんに " },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Potential-form version with reordered phrase",
      },
      {
        segments: [
          { text: "私[わたし]は この アパートで ペットを " },
          { text: "飼[か]うことができるかどうか", blank: true },
          { text: "、引[ひ]っ越[こ]す 前[まえ]に 大家[おおや]さんに " },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ことができる version with reordered phrase",
      },
      {
        segments: [
          { text: "私[わたし]は この アパートで ペットを " },
          { text: "飼[か]ってもかまわないかどうか", blank: true },
          { text: "、引[ひ]っ越[こ]す 前[まえ]に 大家[おおや]さんに " },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "てもかまわない version with reordered phrase",
      },
    ],
  },
  {
    english: "I'm checking whether that strange sound can be heard outside too.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は あの 不思議[ふしぎ]な 音[おと]が " },
          { text: "外[そと]でも 聞[き]こえるかどうか", blank: true },
          { text: "、調[しら]べる", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard wording with あの不思議な音 and 外でも for “outside too”",
      },
      {
        segments: [
          { text: "私[わたし]は あの 変[へん]な 音[おと]が " },
          { text: "外[そと]でも 聞[き]こえるかどうか", blank: true },
          { text: "、調[しら]べる", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 変な as a natural synonym for “strange”",
      },
      {
        segments: [
          { text: "あの 不思議[ふしぎ]な 音[おと]が " },
          { text: "外[そと]でも 聞[き]こえるかどうか", blank: true },
          { text: "、私[わたし]は 調[しら]べる", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed word order, placing the embedded question first",
      },
      {
        segments: [
          { text: "あの 変[へん]な 音[おと]が " },
          { text: "外[そと]でも 聞[き]こえるかどうか", blank: true },
          { text: "、私[わたし]は 調[しら]べる", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed word order with 変な",
      },
      {
        segments: [
          { text: "私[わたし]は あの 不思議[ふしぎ]な 音[おと]が " },
          { text: "外[そと]にも 聞[き]こえるかどうか", blank: true },
          { text: "、調[しら]べる", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 外にも, meaning the sound reaches/is audible outside too",
      },
      {
        segments: [
          { text: "私[わたし]は あの 変[へん]な 音[おと]が " },
          { text: "外[そと]にも 聞[き]こえるかどうか", blank: true },
          { text: "、調[しら]べる", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 外にも with 変な",
      },
      {
        segments: [
          { text: "あの 不思議[ふしぎ]な 音[おと]が " },
          { text: "外[そと]にも 聞[き]こえるかどうか", blank: true },
          { text: "、私[わたし]は 調[しら]べる", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Embedded question first, with 外にも",
      },
      {
        segments: [
          { text: "あの 変[へん]な 音[おと]が " },
          { text: "外[そと]にも 聞[き]こえるかどうか", blank: true },
          { text: "、私[わたし]は 調[しら]べる", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Embedded question first, with 外にも and 変な",
      },
    ],
  },
  {
    english: "I called the Japanese inn and asked whether the twin room is non-smoking.",
    hint: "twin room = ツイン",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 旅館[りょかん]に 電話[でんわ]して、ツインの 部屋[へや]が " },
          { text: "禁煙[きんえん]かどうか", blank: true },
          { text: " 聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic translation with ツインの部屋が as the embedded-question subject",
      },
      {
        segments: [
          { text: "私[わたし]は 旅館[りょかん]に 電話[でんわ]して、ツインが " },
          { text: "禁煙[きんえん]かどうか", blank: true },
          { text: " 聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "More concise: using ツイン to mean the twin room",
      },
      {
        segments: [
          { text: "私[わたし]は 旅館[りょかん]に 電話[でんわ]して、ツインルームが " },
          { text: "禁煙[きんえん]かどうか", blank: true },
          { text: " 聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses ツインルーム as a natural loanword for twin room",
      },
      {
        segments: [
          { text: "私[わたし]は 旅館[りょかん]に 電話[でんわ]して、ツインの 部屋[へや]は " },
          { text: "禁煙[きんえん]かどうか", blank: true },
          { text: " 聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using は in the embedded question, focusing on the twin room",
      },
      {
        segments: [
          { text: "私[わたし]は 旅館[りょかん]に 電話[でんわ]して、ツインルームは " },
          { text: "禁煙[きんえん]かどうか", blank: true },
          { text: " 聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "ツインルーム with は in the embedded question",
      },
      {
        segments: [
          { text: "私[わたし]は 旅館[りょかん]に、ツインの 部屋[へや]が " },
          { text: "禁煙[きんえん]かどうか", blank: true },
          { text: " 電話[でんわ]で 聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 電話で聞く instead of 電話して聞く",
      },
      {
        segments: [
          { text: "私[わたし]は 旅館[りょかん]に、ツインルームが " },
          { text: "禁煙[きんえん]かどうか", blank: true },
          { text: " 電話[でんわ]で 聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "電話で聞く with ツインルーム",
      },
    ],
  },
  {
    english: "I can't remember whether the final exam is today.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 期末試験[きまつしけん]が 今日[きょう]" },
          { text: "かどうか", blank: true },
          { text: "、" },
          { text: "思[おも]い 出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Basic wording with が marking the final exam as the subject of the embedded question",
      },
      {
        segments: [
          { text: "私[わたし]は 期末試験[きまつしけん]は 今日[きょう]" },
          { text: "かどうか", blank: true },
          { text: "、" },
          { text: "思[おも]い 出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using は to topicalize/contrast the final exam within the embedded question",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]が 期末試験[きまつしけん]" },
          { text: "かどうか", blank: true },
          { text: "、" },
          { text: "思[おも]い 出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Rephrased as whether today is the day of the final exam",
      },
      {
        segments: [
          { text: "私[わたし]は 期末試験[きまつしけん]が 今日[きょう]" },
          { text: "かどうか", blank: true },
          { text: "、忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 忘れる in past tense: 'I forgot whether...' Natural equivalent to can't remember",
      },
      {
        segments: [
          { text: "私[わたし]は 期末試験[きまつしけん]が 今日[きょう]ある" },
          { text: "かどうか", blank: true },
          { text: "、" },
          { text: "思[おも]い 出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using ある to mean the final exam is held today",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう] 期末試験[きまつしけん]が ある" },
          { text: "かどうか", blank: true },
          { text: "、" },
          { text: "思[おも]い 出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Same ある construction with 今日 placed first",
      },
      {
        segments: [
          { text: "私[わたし]は 期末試験[きまつしけん]が 今日[きょう]ある" },
          { text: "かどうか", blank: true },
          { text: "、忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 忘れる with the event-existence wording",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう] 期末試験[きまつしけん]が ある" },
          { text: "かどうか", blank: true },
          { text: "、忘[わす]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "今日 first, with 忘れる in past tense",
      },
      {
        segments: [
          { text: "私[わたし]は 期末試験[きまつしけん]が 今日[きょう]だった" },
          { text: "かどうか", blank: true },
          { text: "、" },
          { text: "思[おも]い 出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using だった in the embedded question, a natural way to refer to a remembered scheduled date",
      },
      {
        segments: [
          { text: "私[わたし]は 期末試験[きまつしけん]は 今日[きょう]だった" },
          { text: "かどうか", blank: true },
          { text: "、" },
          { text: "思[おも]い 出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Embedded topic marked with は plus だった",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]が 期末試験[きまつしけん]だった" },
          { text: "かどうか", blank: true },
          { text: "、" },
          { text: "思[おも]い 出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Reversed noun-predicate wording with だった",
      },
      {
        segments: [
          { text: "私[わたし]は 期末試験[きまつしけん]が 今日[きょう]" },
          { text: "かどうか", blank: true },
          { text: "、覚[おぼ]えて" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using 覚えていない: 'I don't remember'",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]が 期末試験[きまつしけん]" },
          { text: "かどうか", blank: true },
          { text: "、覚[おぼ]えて" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "覚えていない with reversed noun-predicate wording",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう] 期末試験[きまつしけん]が ある" },
          { text: "かどうか", blank: true },
          { text: "、覚[おぼ]えて" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "覚えていない with ある construction for 'is held today'",
      },
    ],
  },
  {
    english: "Tomorrow morning, I'm going to the park to see whether the cherry blossoms have bloomed.",
    answers: [
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]、桜[さくら]が " },
          { text: "咲[さ]いたかどうか", blank: true },
          { text: "、公園[こうえん]に 見[み]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation with 公園に and 咲いたかどうか",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]、公園[こうえん]に 桜[さくら]が " },
          { text: "咲[さ]いたかどうか", blank: true },
          { text: "見[み]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moves 公園に before the embedded question",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]、桜[さくら]が " },
          { text: "咲[さ]いたかどうか", blank: true },
          { text: "、公園[こうえん]へ 見[み]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses へ instead of に for direction to the park",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]、公園[こうえん]へ 桜[さくら]が " },
          { text: "咲[さ]いたかどうか", blank: true },
          { text: "見[み]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses へ and places the destination before the embedded question",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]、桜[さくら]が " },
          { text: "咲[さ]いているかどうか", blank: true },
          { text: "、公園[こうえん]に 見[み]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 咲いているかどうか to mean whether they are in bloom",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]、桜[さくら]が " },
          { text: "咲[さ]いているかどうか", blank: true },
          { text: "、公園[こうえん]へ 見[み]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 咲いているかどうか and へ for direction",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]、公園[こうえん]に 桜[さくら]が " },
          { text: "咲[さ]いているかどうか", blank: true },
          { text: "見[み]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 咲いているかどうか with destination before the embedded question",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]、公園[こうえん]へ 桜[さくら]が " },
          { text: "咲[さ]いているかどうか", blank: true },
          { text: "見[み]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 咲いているかどうか, へ, and destination before the embedded question",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]、桜[さくら]が " },
          { text: "咲[さ]いたかどうか", blank: true },
          { text: "、公園[こうえん]まで 見[み]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses まで to indicate going as far as the park",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]、桜[さくら]が " },
          { text: "咲[さ]いているかどうか", blank: true },
          { text: "、公園[こうえん]まで 見[み]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 咲いているかどうか with まで",
      },
    ],
  },
  {
    english: "I brought my swimsuit, but I don’t know whether the hotel pool is open.",
    hint: "open = open for use, not physically open; pool = プール",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 水着[みずぎ]を 持[も]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
          { text: "が、ホテルの プールが " },
          { text: "開[あ]いているかどうか", blank: true },
          { text: " 分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Basic translation using 開いている for a facility being open",
      },
      {
        segments: [
          { text: "私[わたし]は 水着[みずぎ]を 持[も]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
          { text: "が、ホテルの プールは " },
          { text: "開[あ]いているかどうか", blank: true },
          { text: " 分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using は for the hotel pool as the topic",
      },
      {
        segments: [
          { text: "私[わたし]は 水着[みずぎ]を 持[も]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
          { text: "けど、ホテルの プールが " },
          { text: "開[あ]いているかどうか", blank: true },
          { text: " 分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using けど instead of が for 'but'",
      },
      {
        segments: [
          { text: "私[わたし]は 水着[みずぎ]を 持[も]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
          { text: "けど、ホテルの プールは " },
          { text: "開[あ]いているかどうか", blank: true },
          { text: " 分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using けど and topical は for the pool",
      },
      {
        segments: [
          { text: "水着[みずぎ]は 持[も]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
          { text: "が、ホテルの プールが " },
          { text: "開[あ]いているかどうか", blank: true },
          { text: " 分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Topicalizing the swimsuit; 私は omitted from the start",
      },
      {
        segments: [
          { text: "水着[みずぎ]は 持[も]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
          { text: "けど、ホテルの プールが " },
          { text: "開[あ]いているかどうか", blank: true },
          { text: " 分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Topicalizing the swimsuit with casual connector けど",
      },
      {
        segments: [
          { text: "私[わたし]は 水着[みずぎ]を 持[も]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
          { text: "が、ホテルの プールが " },
          { text: "使[つか]えるかどうか", blank: true },
          { text: " 分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using 使える to mean the pool is available for use",
      },
      {
        segments: [
          { text: "私[わたし]は 水着[みずぎ]を 持[も]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
          { text: "が、ホテルの プールは " },
          { text: "使[つか]えるかどうか", blank: true },
          { text: " 分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using 使える with topical は for the pool",
      },
      {
        segments: [
          { text: "私[わたし]は 水着[みずぎ]を 持[も]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
          { text: "けど、ホテルの プールが " },
          { text: "使[つか]えるかどうか", blank: true },
          { text: " 分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using けど and 使える",
      },
      {
        segments: [
          { text: "私[わたし]は 水着[みずぎ]を 持[も]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
          { text: "けど、ホテルの プールは " },
          { text: "使[つか]えるかどうか", blank: true },
          { text: " 分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using けど, 使える, and topical は",
      },
      {
        segments: [
          { text: "水着[みずぎ]は 持[も]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
          { text: "が、ホテルの プールが " },
          { text: "使[つか]えるかどうか", blank: true },
          { text: " 分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Topicalizing the swimsuit and using 使える",
      },
      {
        segments: [
          { text: "水着[みずぎ]は 持[も]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
          { text: "けど、ホテルの プールが " },
          { text: "使[つか]えるかどうか", blank: true },
          { text: " 分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Topicalizing the swimsuit with けど and 使える",
      },
      {
        segments: [
          { text: "私[わたし]は 水着[みずぎ]を 持[も]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
          { text: "が、ホテルの プールに " },
          { text: "入[はい]れるかどうか", blank: true },
          { text: " 分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using プールに入れる to mean being able to use/get into the pool",
      },
      {
        segments: [
          { text: "私[わたし]は 水着[みずぎ]を 持[も]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
          { text: "けど、ホテルの プールに " },
          { text: "入[はい]れるかどうか", blank: true },
          { text: " 分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using けど with プールに入れる",
      },
      {
        segments: [
          { text: "水着[みずぎ]は 持[も]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
          { text: "が、ホテルの プールに " },
          { text: "入[はい]れるかどうか", blank: true },
          { text: " 分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Topicalizing the swimsuit and using プールに入れる",
      },
      {
        segments: [
          { text: "水着[みずぎ]は 持[も]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
          { text: "けど、ホテルの プールに " },
          { text: "入[はい]れるかどうか", blank: true },
          { text: " 分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Topicalizing the swimsuit with けど and プールに入れる",
      },
      {
        segments: [
          { text: "ホテルの プールが " },
          { text: "開[あ]いているかどうか", blank: true },
          { text: " 分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "が、私[わたし]は 水着[みずぎ]を 持[も]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed clause order while preserving the meaning",
      },
      {
        segments: [
          { text: "ホテルの プールは " },
          { text: "開[あ]いているかどうか", blank: true },
          { text: " 分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "が、私[わたし]は 水着[みずぎ]を 持[も]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed clause order with は for the hotel pool",
      },
      {
        segments: [
          { text: "ホテルの プールが " },
          { text: "使[つか]えるかどうか", blank: true },
          { text: " 分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "が、私[わたし]は 水着[みずぎ]を 持[も]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed clause order using 使える",
      },
      {
        segments: [
          { text: "ホテルの プールは " },
          { text: "使[つか]えるかどうか", blank: true },
          { text: " 分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "が、私[わたし]は 水着[みずぎ]を 持[も]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed clause order using 使える and は",
      },
      {
        segments: [
          { text: "ホテルの プールに " },
          { text: "入[はい]れるかどうか", blank: true },
          { text: " 分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "が、私[わたし]は 水着[みずぎ]を 持[も]って" },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed clause order using プールに入れる",
      },
    ],
  },
  {
    english: "I'm going to look into whether this old computer can still be used.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い コンピューターが " },
          { text: "まだ 使[つか]えるかどうか", blank: true },
          { text: "、調[しら]べるつもり" },
          { text: "です" },
        ],
        notes: "Basic translation using コンピューター and つもり for “going to”",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い コンピューターは " },
          { text: "まだ 使[つか]えるかどうか", blank: true },
          { text: "、調[しら]べるつもり" },
          { text: "です" },
        ],
        notes: "Using は to topicalize the old computer inside the embedded question",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い パソコンが " },
          { text: "まだ 使[つか]えるかどうか", blank: true },
          { text: "、調[しら]べるつもり" },
          { text: "です" },
        ],
        notes: "Using パソコン as a natural synonym for computer",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い コンピューターを " },
          { text: "まだ 使[つか]うことができるかどうか", blank: true },
          { text: "、調[しら]べるつもり" },
          { text: "です" },
        ],
        notes: "Using ことができる instead of the potential verb 使える",
      },
      {
        segments: [
          { text: "この 古[ふる]い コンピューターが " },
          { text: "まだ 使[つか]えるかどうか", blank: true },
          { text: "、私[わたし]は 調[しら]べるつもり" },
          { text: "です" },
        ],
        notes: "Reversed word order, placing the embedded question first",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い パソコンは " },
          { text: "まだ 使[つか]えるかどうか", blank: true },
          { text: "、調[しら]べるつもり" },
          { text: "です" },
        ],
        notes: "パソコン with は topicalization in the embedded question",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い パソコンを " },
          { text: "まだ 使[つか]うことができるかどうか", blank: true },
          { text: "、調[しら]べるつもり" },
          { text: "です" },
        ],
        notes: "パソコン plus ことができる for “can be used”",
      },
      {
        segments: [
          { text: "この 古[ふる]い パソコンが " },
          { text: "まだ 使[つか]えるかどうか", blank: true },
          { text: "、私[わたし]は 調[しら]べるつもり" },
          { text: "です" },
        ],
        notes: "パソコン with embedded question placed first",
      },
      {
        segments: [
          { text: "この 古[ふる]い コンピューターを " },
          { text: "まだ 使[つか]うことができるかどうか", blank: true },
          { text: "、私[わたし]は 調[しら]べるつもり" },
          { text: "です" },
        ],
        notes: "ことができる version with embedded question first",
      },
      {
        segments: [
          { text: "この 古[ふる]い パソコンを " },
          { text: "まだ 使[つか]うことができるかどうか", blank: true },
          { text: "、私[わたし]は 調[しら]べるつもり" },
          { text: "です" },
        ],
        notes: "パソコン and ことができる with fronted embedded question",
      },
      {
        segments: [
          { text: "私[わたし]は まだ この 古[ふる]い コンピューターが " },
          { text: "使[つか]えるかどうか", blank: true },
          { text: "、調[しら]べるつもり" },
          { text: "です" },
        ],
        notes: "Moving まだ before the noun phrase",
      },
      {
        segments: [
          { text: "私[わたし]は まだ この 古[ふる]い パソコンが " },
          { text: "使[つか]えるかどうか", blank: true },
          { text: "、調[しら]べるつもり" },
          { text: "です" },
        ],
        notes: "パソコン version with まだ before the noun phrase",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い コンピューターが " },
          { text: "まだ 使[つか]えるかどうか", blank: true },
          { text: "を 調[しら]べる予定[よてい]" },
          { text: "です" },
        ],
        notes: "Using 予定です for “am going to” and marking the embedded question with を",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い パソコンが " },
          { text: "まだ 使[つか]えるかどうか", blank: true },
          { text: "を 調[しら]べる予定[よてい]" },
          { text: "です" },
        ],
        notes: "予定です version using パソコン",
      },
      {
        segments: [
          { text: "この 古[ふる]い コンピューターが " },
          { text: "まだ 使[つか]えるかどうか", blank: true },
          { text: "を、私[わたし]は 調[しら]べる予定[よてい]" },
          { text: "です" },
        ],
        notes: "Fronted embedded question with 予定です",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い コンピューターが " },
          { text: "まだ 使[つか]えるかどうか", blank: true },
          { text: "、見[み]てみるつもり" },
          { text: "です" },
        ],
        notes: "Using 見てみるつもり as a natural “try checking/see if” expression",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い パソコンが " },
          { text: "まだ 使[つか]えるかどうか", blank: true },
          { text: "、見[み]てみるつもり" },
          { text: "です" },
        ],
        notes: "見てみるつもり version using パソコン",
      },
      {
        segments: [
          { text: "この 古[ふる]い コンピューターが " },
          { text: "まだ 使[つか]えるかどうか", blank: true },
          { text: "、私[わたし]は 見[み]てみるつもり" },
          { text: "です" },
        ],
        notes: "Fronted embedded question with 見てみるつもり",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い コンピューターを " },
          { text: "まだ 使[つか]うことができるかどうか", blank: true },
          { text: "を 調[しら]べる予定[よてい]" },
          { text: "です" },
        ],
        notes: "予定です with ことができる",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い パソコンを " },
          { text: "まだ 使[つか]うことができるかどうか", blank: true },
          { text: "を 調[しら]べる予定[よてい]" },
          { text: "です" },
        ],
        notes: "予定です with パソコン and ことができる",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い コンピューターが " },
          { text: "まだ 使[つか]えるかどうか", blank: true },
          { text: "、" },
          { text: "調[しら]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using simple non-past 調べる for future intention",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い パソコンが " },
          { text: "まだ 使[つか]えるかどうか", blank: true },
          { text: "、" },
          { text: "調[しら]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Simple future version using パソコン",
      },
      {
        segments: [
          { text: "この 古[ふる]い コンピューターが " },
          { text: "まだ 使[つか]えるかどうか", blank: true },
          { text: "、私[わたし]は " },
          { text: "調[しら]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted embedded question with simple future 調べる",
      },
      {
        segments: [
          { text: "私[わたし]は この 古[ふる]い コンピューターを " },
          { text: "まだ 使[つか]うことができるかどうか", blank: true },
          { text: "、" },
          { text: "調[しら]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Simple future version with ことができる",
      },
    ],
  },
  {
    english: "Before I buy this jacket, I want to ask a friend whether it looks good on me.",
    hint: "jacket = ジャケット",
    answers: [
      {
        segments: [
          { text: "この ジャケットを 買[か]う 前[まえ]に、私[わたし]に" },
          { text: "似合[にあ]うかどうか", blank: true },
          { text: "、友[とも]だちに" },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic natural wording; omits repeating ジャケット as the subject of 似合う",
      },
      {
        segments: [
          { text: "この ジャケットを 買[か]う 前[まえ]に、この ジャケットが 私[わたし]に" },
          { text: "似合[にあ]うかどうか", blank: true },
          { text: "、友[とも]だちに" },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly states このジャケット as the subject of 似合う",
      },
      {
        segments: [
          { text: "この ジャケットを 買[か]う 前[まえ]に、私[わたし]に" },
          { text: "似合[にあ]っているかどうか", blank: true },
          { text: "、友[とも]だちに" },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 似合っている for the state of looking good",
      },
      {
        segments: [
          { text: "この ジャケットを 買[か]う 前[まえ]に、この ジャケットが 私[わたし]に" },
          { text: "似合[にあ]っているかどうか", blank: true },
          { text: "、友[とも]だちに" },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 似合っている and explicitly states the jacket as subject",
      },
      {
        segments: [
          { text: "この ジャケットを 買[か]う 前[まえ]に、私[わたし]に" },
          { text: "似合[にあ]うかどうか", blank: true },
          { text: "を 友[とも]だちに" },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Marks the embedded question with を",
      },
      {
        segments: [
          { text: "この ジャケットを 買[か]う 前[まえ]に、私[わたし]に" },
          { text: "似合[にあ]っているかどうか", blank: true },
          { text: "を 友[とも]だちに" },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 似合っている and marks the embedded question with を",
      },
      {
        segments: [
          { text: "この ジャケットを 買[か]う 前[まえ]に、友[とも]だちに、私[わたし]に" },
          { text: "似合[にあ]うかどうか", blank: true },
          { text: "、" },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moves 友だちに before the embedded question",
      },
      {
        segments: [
          { text: "この ジャケットを 買[か]う 前[まえ]に、私[わたし]に" },
          { text: "似合[にあ]うかどうか", blank: true },
          { text: "、友人[ゆうじん]に" },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses the more formal synonym 友人 for friend",
      },
      {
        segments: [
          { text: "この ジャケットを 買[か]う 前[まえ]に、私[わたし]に" },
          { text: "似合[にあ]っているかどうか", blank: true },
          { text: "、友人[ゆうじん]に" },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 友人 and 似合っている",
      },
    ],
  },
  {
    english: "Please press this switch and see whether the light turns on.",
    hint: "switch = スイッチ",
    answers: [
      {
        segments: [
          { text: "この スイッチを 押[お]して、電気[でんき]が " },
          { text: "つくかどうか", blank: true },
          { text: "、見[み]てください" },
        ],
        notes: "Standard translation using 見てください for “please see/check.”",
      },
      {
        segments: [
          { text: "この スイッチを 押[お]して、電気[でんき]が " },
          { text: "つくかどうか", blank: true },
          { text: "、調[しら]べてください" },
        ],
        notes: "Uses 調べてください, meaning “please check whether.”",
      },
      {
        segments: [
          { text: "この スイッチを 押[お]して、電気[でんき]が " },
          { text: "つくかどうか", blank: true },
          { text: "、見[み]てみてください" },
        ],
        notes: "Uses てみる with 見る: “please try checking/seeing whether.”",
      },
      {
        segments: [
          { text: "電気[でんき]が " },
          { text: "つくかどうか", blank: true },
          { text: "、この スイッチを 押[お]して 見[み]てください" },
        ],
        notes: "Reversed order: “Press this switch and see whether the light turns on.”",
      },
    ],
  },
  {
    english: "I want to know whether the panda at the zoo understands Japanese.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 動物園[どうぶつえん]の パンダは 日本語[にほんご]が " },
          { text: "分[わ]かるかどうか", blank: true },
          { text: " " },
          { text: "知[し]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は for the panda in the embedded whether-clause, giving a slight contrast/topical nuance",
      },
      {
        segments: [
          { text: "私[わたし]は 動物園[どうぶつえん]にいる パンダは 日本語[にほんご]が " },
          { text: "分[わ]かるかどうか", blank: true },
          { text: " " },
          { text: "知[し]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 動物園にいるパンダ with は for a topical/contrastive nuance",
      },
      {
        segments: [
          { text: "私[わたし]は 動物園[どうぶつえん]の パンダに 日本語[にほんご]が " },
          { text: "分[わ]かるかどうか", blank: true },
          { text: " " },
          { text: "知[し]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using に to mark the experiencer: whether Japanese is understandable to the panda",
      },
      {
        segments: [
          { text: "私[わたし]は 動物園[どうぶつえん]にいる パンダに 日本語[にほんご]が " },
          { text: "分[わ]かるかどうか", blank: true },
          { text: " " },
          { text: "知[し]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Combining 動物園にいるパンダ with に as the experiencer marker",
      },
      {
        segments: [
          { text: "動物園[どうぶつえん]の パンダに 日本語[にほんご]が " },
          { text: "分[わ]かるかどうか", blank: true },
          { text: "、私[わたし]は " },
          { text: "知[し]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed word order with に marking the panda as experiencer",
      },
      {
        segments: [
          { text: "動物園[どうぶつえん]にいる パンダに 日本語[にほんご]が " },
          { text: "分[わ]かるかどうか", blank: true },
          { text: "、私[わたし]は " },
          { text: "知[し]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed word order combining 動物園にいるパンダ and に as experiencer",
      },
    ],
  },
];
