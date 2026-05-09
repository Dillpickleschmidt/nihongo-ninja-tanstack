import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "If the wind is strong, the train will probably be delayed.",
    answers: [
      {
        segments: [
          { text: "風[かぜ]が" },
          { text: "強[つよ]ければ", blank: true },
          { text: "、電車[でんしゃ]は たぶん" },
          { text: "遅[おく]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using たぶん and は for the train as topic",
      },
      {
        segments: [
          { text: "風[かぜ]が" },
          { text: "強[つよ]ければ", blank: true },
          { text: "、たぶん 電車[でんしゃ]は" },
          { text: "遅[おく]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adverb たぶん placed before 電車は",
      },
      {
        segments: [
          { text: "風[かぜ]が" },
          { text: "強[つよ]ければ", blank: true },
          { text: "、電車[でんしゃ]が たぶん" },
          { text: "遅[おく]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は for 電車 to mark the train as the subject",
      },
      {
        segments: [
          { text: "風[かぜ]が" },
          { text: "強[つよ]ければ", blank: true },
          { text: "、たぶん 電車[でんしゃ]が" },
          { text: "遅[おく]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が with たぶん before the subject",
      },
      {
        segments: [
          { text: "風[かぜ]が" },
          { text: "強[つよ]ければ", blank: true },
          { text: "、電車[でんしゃ]は" },
          { text: "遅[おく]れるでしょう" },
        ],
        notes: "Using でしょう to express 'will probably'",
      },
      {
        segments: [
          { text: "風[かぜ]が" },
          { text: "強[つよ]ければ", blank: true },
          { text: "、電車[でんしゃ]が" },
          { text: "遅[おく]れるでしょう" },
        ],
        notes: "Using でしょう with が for the train as subject",
      },
      {
        segments: [
          { text: "風[かぜ]が" },
          { text: "強[つよ]ければ", blank: true },
          { text: "、たぶん 電車[でんしゃ]は" },
          { text: "遅[おく]れるでしょう" },
        ],
        notes: "Combining たぶん with でしょう for a natural stronger probability expression",
      },
      {
        segments: [
          { text: "風[かぜ]が" },
          { text: "強[つよ]ければ", blank: true },
          { text: "、たぶん 電車[でんしゃ]が" },
          { text: "遅[おく]れるでしょう" },
        ],
        notes: "たぶん plus でしょう, with が marking 電車 as subject",
      },
      {
        segments: [
          { text: "風[かぜ]が" },
          { text: "強[つよ]ければ", blank: true },
          { text: "、電車[でんしゃ]は" },
          { text: "遅[おく]れるかもしれない" },
        ],
        notes: "Using かもしれない to express probability/maybe",
      },
      {
        segments: [
          { text: "風[かぜ]が" },
          { text: "強[つよ]ければ", blank: true },
          { text: "、電車[でんしゃ]が" },
          { text: "遅[おく]れるかもしれない" },
        ],
        notes: "かもしれない with が as subject marker",
      },
      {
        segments: [
          { text: "風[かぜ]が" },
          { text: "強[つよ]ければ", blank: true },
          { text: "、たぶん 電車[でんしゃ]は" },
          { text: "遅[おく]れるかもしれない" },
        ],
        notes: "Combining たぶん and かもしれない",
      },
      {
        segments: [
          { text: "風[かぜ]が" },
          { text: "強[つよ]ければ", blank: true },
          { text: "、たぶん 電車[でんしゃ]が" },
          { text: "遅[おく]れるかもしれない" },
        ],
        notes: "たぶん plus かもしれない, with が",
      },
      {
        segments: [
          { text: "強[つよ]い 風[かぜ]" },
          { text: "ならば", blank: true },
          { text: "、電車[でんしゃ]は たぶん" },
          { text: "遅[おく]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using noun phrase 強い風 with ならば instead of adjective ければ",
      },
      {
        segments: [
          { text: "強[つよ]い 風[かぜ]" },
          { text: "ならば", blank: true },
          { text: "、たぶん 電車[でんしゃ]は" },
          { text: "遅[おく]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Noun phrase ならば with たぶん before the train topic",
      },
      {
        segments: [
          { text: "強[つよ]い 風[かぜ]" },
          { text: "ならば", blank: true },
          { text: "、電車[でんしゃ]が たぶん" },
          { text: "遅[おく]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Noun phrase ならば with が marking 電車 as subject",
      },
      {
        segments: [
          { text: "強[つよ]い 風[かぜ]" },
          { text: "ならば", blank: true },
          { text: "、電車[でんしゃ]は" },
          { text: "遅[おく]れるでしょう" },
        ],
        notes: "Using 強い風ならば and でしょう for probability",
      },
      {
        segments: [
          { text: "強[つよ]い 風[かぜ]" },
          { text: "ならば", blank: true },
          { text: "、電車[でんしゃ]が" },
          { text: "遅[おく]れるでしょう" },
        ],
        notes: "強い風ならば with が and でしょう",
      },
      {
        segments: [
          { text: "風[かぜ]が" },
          { text: "強[つよ]ければ", blank: true },
          { text: "、電車[でんしゃ]は たぶん" },
          { text: "遅[おく]れるだろう" },
        ],
        notes: "Using だろう for a casual/plain probability expression",
      },
      {
        segments: [
          { text: "風[かぜ]が" },
          { text: "強[つよ]ければ", blank: true },
          { text: "、電車[でんしゃ]が たぶん" },
          { text: "遅[おく]れるだろう" },
        ],
        notes: "だろう with が marking 電車 as subject",
      },
      {
        segments: [
          { text: "強[つよ]い 風[かぜ]" },
          { text: "ならば", blank: true },
          { text: "、電車[でんしゃ]は たぶん" },
          { text: "遅[おく]れるだろう" },
        ],
        notes: "Noun phrase ならば with だろう",
      },
      {
        segments: [
          { text: "もし 風[かぜ]が" },
          { text: "強[つよ]ければ", blank: true },
          { text: "、電車[でんしゃ]は たぶん" },
          { text: "遅[おく]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adding もし to explicitly mark the conditional",
      },
      {
        segments: [
          { text: "もし 風[かぜ]が" },
          { text: "強[つよ]ければ", blank: true },
          { text: "、電車[でんしゃ]は" },
          { text: "遅[おく]れるでしょう" },
        ],
        notes: "もし with でしょう for probably",
      },
      {
        segments: [
          { text: "風[かぜ]が 強[つよ]い" },
          { text: "ならば", blank: true },
          { text: "、電車[でんしゃ]は たぶん" },
          { text: "遅[おく]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using clause + ならば instead of 強ければ",
      },
      {
        segments: [
          { text: "風[かぜ]が 強[つよ]い" },
          { text: "ならば", blank: true },
          { text: "、電車[でんしゃ]は" },
          { text: "遅[おく]れるでしょう" },
        ],
        notes: "Clause + ならば with でしょう",
      },
    ],
  },
  {
    english: "If the room isn't quiet, I can't study.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 部屋[へや]が" },
          { text: "静[しず]かでなければ", blank: true },
          { text: "、勉強[べんきょう]することが できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Standard translation using 静かでなければ and ことができない for “can’t study”",
      },
      {
        segments: [
          { text: "部屋[へや]が" },
          { text: "静[しず]かでなければ", blank: true },
          { text: "、私[わたし]は 勉強[べんきょう]することが できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Moves 私は after the conditional clause",
      },
      {
        segments: [
          { text: "私[わたし]は 部屋[へや]が" },
          { text: "静[しず]かでなければ", blank: true },
          { text: "、勉強[べんきょう]が できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses 勉強ができない as the natural potential expression",
      },
      {
        segments: [
          { text: "部屋[へや]が" },
          { text: "静[しず]かでなければ", blank: true },
          { text: "、私[わたし]は 勉強[べんきょう]が できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Conditional clause first, with 勉強ができない",
      },
      {
        segments: [
          { text: "私[わたし]は 部屋[へや]が" },
          { text: "静[しず]かじゃなければ", blank: true },
          { text: "、勉強[べんきょう]が できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "More colloquial じゃなければ instead of でなければ",
      },
      {
        segments: [
          { text: "部屋[へや]が" },
          { text: "静[しず]かじゃなければ", blank: true },
          { text: "、私[わたし]は 勉強[べんきょう]が できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Colloquial じゃなければ with conditional clause first",
      },
      {
        segments: [
          { text: "もし 部屋[へや]が" },
          { text: "静[しず]かでなければ", blank: true },
          { text: "、私[わたし]は 勉強[べんきょう]が できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses もし and 勉強ができない",
      },
      {
        segments: [
          { text: "静[しず]かな 部屋[へや]" },
          { text: "でなければ", blank: true },
          { text: "、私[わたし]は 勉強[べんきょう]が できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Noun phrase version with 勉強ができない",
      },
      {
        segments: [
          { text: "もし 部屋[へや]が" },
          { text: "静[しず]かじゃなければ", blank: true },
          { text: "、私[わたし]は 勉強[べんきょう]が できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "もし plus colloquial condition, using 勉強ができない",
      },
      {
        segments: [
          { text: "部屋[へや]は" },
          { text: "静[しず]かでなければ", blank: true },
          { text: "、私[わたし]は 勉強[べんきょう]することが できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses は to mark the room as the topic",
      },
      {
        segments: [
          { text: "部屋[へや]は" },
          { text: "静[しず]かでなければ", blank: true },
          { text: "、私[わたし]は 勉強[べんきょう]が できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Topic は with 勉強ができない",
      },
      {
        segments: [
          { text: "部屋[へや]は" },
          { text: "静[しず]かじゃなければ", blank: true },
          { text: "、私[わたし]は 勉強[べんきょう]が できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Topic は plus colloquial じゃなければ",
      },
    ],
  },
  {
    english: "If you press this switch, the light will turn on.",
    answers: [
      {
        segments: [
          { text: "この スイッチを" },
          { text: "押[お]せば", blank: true },
          { text: "、電気[でんき]が" },
          { text: "つく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation using 電気がつく",
      },
      {
        segments: [
          { text: "この スイッチを" },
          { text: "押[お]せば", blank: true },
          { text: "、電気[でんき]は" },
          { text: "つく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は to mark the light as the relevant result, slightly contrastive",
      },
      {
        segments: [
          { text: "この スイッチを" },
          { text: "押[お]せば", blank: true },
          { text: "、明[あ]かりが" },
          { text: "つく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 明かり instead of 電気 for 'the light'",
      },
      {
        segments: [
          { text: "この スイッチを" },
          { text: "押[お]せば", blank: true },
          { text: "、ライトが" },
          { text: "つく", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using loanword ライト for 'light'",
      },
    ],
  },
  {
    english: "If I bring a camera, can I take pictures at the art museum?",
    answers: [
      {
        segments: [
          { text: "カメラを" },
          { text: "持[も]っていけば", blank: true },
          { text: "、美術館[びじゅつかん]で 写真[しゃしん]を 撮[と]っても" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Standard permission phrasing with 持っていけば and 撮ってもいいですか",
      },
      {
        segments: [
          { text: "カメラを" },
          { text: "持[も]っていけば", blank: true },
          { text: "、美術館[びじゅつかん]で 写真[しゃしん]が" },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using potential 撮れる with 写真が instead of permission 撮ってもいい",
      },
      {
        segments: [
          { text: "カメラを" },
          { text: "持[も]っていけば", blank: true },
          { text: "、美術館[びじゅつかん]で 写真[しゃしん]を 撮[と]ることが" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using ことができる for ability/permission",
      },
      {
        segments: [
          { text: "美術館[びじゅつかん]に カメラを" },
          { text: "持[も]っていけば", blank: true },
          { text: "、写真[しゃしん]を 撮[と]っても" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Destination 美術館に placed in the if-clause",
      },
      {
        segments: [
          { text: "美術館[びじゅつかん]に カメラを" },
          { text: "持[も]っていけば", blank: true },
          { text: "、写真[しゃしん]が" },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Destination in if-clause plus potential 撮れる",
      },
      {
        segments: [
          { text: "カメラを 美術館[びじゅつかん]に" },
          { text: "持[も]っていけば", blank: true },
          { text: "、写真[しゃしん]を 撮[と]っても" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Reversed word order: カメラを美術館に持っていけば",
      },
      {
        segments: [
          { text: "カメラを" },
          { text: "持[も]ってくれば", blank: true },
          { text: "、美術館[びじゅつかん]で 写真[しゃしん]を 撮[と]っても" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using 持ってくれば, natural if the speaker is imagining bringing it to the museum/location",
      },
      {
        segments: [
          { text: "カメラを" },
          { text: "持[も]ってくれば", blank: true },
          { text: "、美術館[びじゅつかん]で 写真[しゃしん]が" },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "持ってくれば plus potential 写真が撮れる",
      },
      {
        segments: [
          { text: "カメラを" },
          { text: "持[も]っていけば", blank: true },
          { text: "、写真[しゃしん]を 美術館[びじゅつかん]で 撮[と]っても" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Reversed order in the main clause: 写真を美術館で",
      },
      {
        segments: [
          { text: "カメラを 持[も]って 美術館[びじゅつかん]に" },
          { text: "行[い]けば", blank: true },
          { text: "、写真[しゃしん]を 撮[と]っても" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using 行けば after 持って: if I go to the museum with a camera",
      },
      {
        segments: [
          { text: "カメラを 持[も]って 美術館[びじゅつかん]へ" },
          { text: "行[い]けば", blank: true },
          { text: "、写真[しゃしん]を 撮[と]っても" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using へ for direction to the museum",
      },
      {
        segments: [
          { text: "カメラを 持[も]って 美術館[びじゅつかん]に" },
          { text: "行[い]けば", blank: true },
          { text: "、写真[しゃしん]が" },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "持って美術館に行けば plus potential 写真が撮れる",
      },
      {
        segments: [
          { text: "カメラを 持[も]って 美術館[びじゅつかん]へ" },
          { text: "行[い]けば", blank: true },
          { text: "、写真[しゃしん]が" },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "へ direction plus potential construction",
      },
      {
        segments: [
          { text: "カメラを 持参[じさん]" },
          { text: "すれば", blank: true },
          { text: "、美術館[びじゅつかん]で 写真[しゃしん]を 撮[と]っても" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "More formal synonym 持参すれば for bring",
      },
      {
        segments: [
          { text: "カメラを 持参[じさん]" },
          { text: "すれば", blank: true },
          { text: "、美術館[びじゅつかん]で 写真[しゃしん]が" },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Formal 持参すれば with potential 写真が撮れる",
      },
      {
        segments: [
          { text: "カメラを" },
          { text: "持[も]っていけば", blank: true },
          { text: "、美術館[びじゅつかん]では 写真[しゃしん]を 撮[と]っても" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using では to mark the museum as the setting/topic",
      },
      {
        segments: [
          { text: "カメラを" },
          { text: "持[も]っていけば", blank: true },
          { text: "、美術館[びじゅつかん]では 写真[しゃしん]が" },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "では plus potential 写真が撮れる",
      },
      {
        segments: [
          { text: "カメラを" },
          { text: "持[も]ってくれば", blank: true },
          { text: "、美術館[びじゅつかん]では 写真[しゃしん]を 撮[と]っても" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "持ってくれば with では in the main clause",
      },
      {
        segments: [
          { text: "カメラを" },
          { text: "持[も]ってくれば", blank: true },
          { text: "、美術館[びじゅつかん]では 写真[しゃしん]が" },
          { text: "撮[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "potential", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "持ってくれば plus では and potential form",
      },
    ],
  },
  {
    english: "If that red sweater isn't expensive, I want to buy it.",
    hint: "sweater = セーター",
    answers: [
      {
        segments: [
          { text: "その 赤[あか]い セーターが" },
          { text: "高[たか]くなければ", blank: true },
          { text: "、買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation with その and omitted object in the main clause",
      },
      {
        segments: [
          { text: "あの 赤[あか]い セーターが" },
          { text: "高[たか]くなければ", blank: true },
          { text: "、買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using あの for 'that' over there",
      },
      {
        segments: [
          { text: "その 赤[あか]い セーターが" },
          { text: "高[たか]くなければ", blank: true },
          { text: "、それを買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Repeats the object with それを",
      },
      {
        segments: [
          { text: "あの 赤[あか]い セーターが" },
          { text: "高[たか]くなければ", blank: true },
          { text: "、あれを買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using あの/あれ consistently for something over there",
      },
      {
        segments: [
          { text: "その 赤[あか]い セーターは" },
          { text: "高[たか]くなければ", blank: true },
          { text: "、買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は to mark the sweater as the topic",
      },
      {
        segments: [
          { text: "あの 赤[あか]い セーターは" },
          { text: "高[たか]くなければ", blank: true },
          { text: "、買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using あの and topical は",
      },
      {
        segments: [
          { text: "その 赤[あか]い セーターが" },
          { text: "安[やす]ければ", blank: true },
          { text: "、買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 安ければ to express 'if it is cheap/inexpensive'",
      },
      {
        segments: [
          { text: "あの 赤[あか]い セーターが" },
          { text: "安[やす]ければ", blank: true },
          { text: "、買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses あの with 安ければ",
      },
      {
        segments: [
          { text: "その 赤[あか]い セーターは" },
          { text: "安[やす]ければ", blank: true },
          { text: "、買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic は with 安ければ",
      },
      {
        segments: [
          { text: "あの 赤[あか]い セーターは" },
          { text: "安[やす]ければ", blank: true },
          { text: "、買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic は, あの, and 安ければ",
      },
      {
        segments: [
          { text: "その 赤[あか]い セーターの 値段[ねだん]が" },
          { text: "高[たか]くなければ", blank: true },
          { text: "、買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Mentions the sweater's price explicitly",
      },
      {
        segments: [
          { text: "あの 赤[あか]い セーターの 値段[ねだん]が" },
          { text: "高[たか]くなければ", blank: true },
          { text: "、買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Mentions the price explicitly with あの",
      },
      {
        segments: [
          { text: "その 赤[あか]い セーターの 値段[ねだん]が" },
          { text: "高[たか]くなければ", blank: true },
          { text: "、それを買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit price plus explicit それを object",
      },
      {
        segments: [
          { text: "あの 赤[あか]い セーターの 値段[ねだん]が" },
          { text: "高[たか]くなければ", blank: true },
          { text: "、あれを買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit price plus explicit あれを object",
      },
      {
        segments: [
          { text: "その 赤[あか]い セーターの 値段[ねだん]は" },
          { text: "高[たか]くなければ", blank: true },
          { text: "、買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Price as topic using は",
      },
      {
        segments: [
          { text: "あの 赤[あか]い セーターの 値段[ねだん]は" },
          { text: "高[たか]くなければ", blank: true },
          { text: "、買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Price as topic using は with あの",
      },
    ],
  },
  {
    english: "If the cherry blossoms bloom, let's take a walk in the park.",
    answers: [
      {
        segments: [
          { text: "桜[さくら]が" },
          { text: "咲[さ]けば", blank: true },
          { text: "、公園[こうえん]を" },
          { text: "散歩[さんぽ]する", conjugation: { pos: "Suru verb - compound word", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard phrasing with 公園を散歩する",
      },
      {
        segments: [
          { text: "桜[さくら]が" },
          { text: "咲[さ]けば", blank: true },
          { text: "、公園[こうえん]で" },
          { text: "散歩[さんぽ]する", conjugation: { pos: "Suru verb - compound word", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using で to mark the park as the place where we walk",
      },
      {
        segments: [
          { text: "桜[さくら]の 花[はな]が" },
          { text: "咲[さ]けば", blank: true },
          { text: "、公園[こうえん]を" },
          { text: "散歩[さんぽ]する", conjugation: { pos: "Suru verb - compound word", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly says the cherry blossom flowers bloom",
      },
      {
        segments: [
          { text: "桜[さくら]の 花[はな]が" },
          { text: "咲[さ]けば", blank: true },
          { text: "、公園[こうえん]で" },
          { text: "散歩[さんぽ]する", conjugation: { pos: "Suru verb - compound word", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly mentions flowers and uses で for location",
      },
      {
        segments: [
          { text: "桜[さくら]が" },
          { text: "咲[さ]けば", blank: true },
          { text: "、公園[こうえん]を" },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 歩く instead of 散歩する",
      },
      {
        segments: [
          { text: "桜[さくら]の 花[はな]が" },
          { text: "咲[さ]けば", blank: true },
          { text: "、公園[こうえん]を" },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 歩く and explicitly mentions the blossoms/flowers",
      },
      {
        segments: [
          { text: "桜[さくら]が" },
          { text: "咲[さ]けば", blank: true },
          { text: "、公園[こうえん]へ 散歩[さんぽ]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 散歩に行く with へ for going to the park",
      },
      {
        segments: [
          { text: "桜[さくら]が" },
          { text: "咲[さ]けば", blank: true },
          { text: "、公園[こうえん]に 散歩[さんぽ]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 散歩に行く with に for destination",
      },
      {
        segments: [
          { text: "桜[さくら]の 花[はな]が" },
          { text: "咲[さ]けば", blank: true },
          { text: "、公園[こうえん]へ 散歩[さんぽ]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly mentions flowers with 散歩に行く and へ",
      },
      {
        segments: [
          { text: "桜[さくら]の 花[はな]が" },
          { text: "咲[さ]けば", blank: true },
          { text: "、公園[こうえん]に 散歩[さんぽ]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly mentions flowers with 散歩に行く and に",
      },
      {
        segments: [
          { text: "公園[こうえん]の 桜[さくら]が" },
          { text: "咲[さ]けば", blank: true },
          { text: "、散歩[さんぽ]する", conjugation: { pos: "Suru verb - compound word", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Specifies that the cherry trees in the park bloom",
      },
      {
        segments: [
          { text: "公園[こうえん]の 桜[さくら]が" },
          { text: "咲[さ]けば", blank: true },
          { text: "、公園[こうえん]を" },
          { text: "散歩[さんぽ]する", conjugation: { pos: "Suru verb - compound word", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Specifies park's cherry blossoms and still marks walking through the park",
      },
      {
        segments: [
          { text: "公園[こうえん]の 桜[さくら]が" },
          { text: "咲[さ]けば", blank: true },
          { text: "、公園[こうえん]で" },
          { text: "散歩[さんぽ]する", conjugation: { pos: "Suru verb - compound word", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Specifies park's cherry blossoms and uses で for walk location",
      },
      {
        segments: [
          { text: "公園[こうえん]の 桜[さくら]が" },
          { text: "咲[さ]けば", blank: true },
          { text: "、公園[こうえん]を" },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 歩く with park's cherry blossoms",
      },
      {
        segments: [
          { text: "公園[こうえん]の 桜[さくら]が" },
          { text: "咲[さ]けば", blank: true },
          { text: "、散歩[さんぽ]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Park is mentioned in the condition; main clause says go for a walk",
      },
      {
        segments: [
          { text: "桜[さくら]が" },
          { text: "咲[さ]けば", blank: true },
          { text: "、公園[こうえん]へ 散歩[さんぽ]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order: for a walk, to the park",
      },
      {
        segments: [
          { text: "桜[さくら]が" },
          { text: "咲[さ]けば", blank: true },
          { text: "、公園[こうえん]に 散歩[さんぽ]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order with に for destination",
      },
      {
        segments: [
          { text: "桜[さくら]の 花[はな]が" },
          { text: "咲[さ]けば", blank: true },
          { text: "、公園[こうえん]へ 散歩[さんぽ]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order and explicit blossoms",
      },
      {
        segments: [
          { text: "桜[さくら]の 花[はな]が" },
          { text: "咲[さ]けば", blank: true },
          { text: "、公園[こうえん]に 散歩[さんぽ]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order, explicit blossoms, に destination",
      },
      {
        segments: [
          { text: "公園[こうえん]の 桜[さくら]が" },
          { text: "咲[さ]けば", blank: true },
          { text: "、公園[こうえん]へ 散歩[さんぽ]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order with park's cherry blossoms",
      },
      {
        segments: [
          { text: "公園[こうえん]の 桜[さくら]が" },
          { text: "咲[さ]けば", blank: true },
          { text: "、公園[こうえん]に 散歩[さんぽ]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed order with park's cherry blossoms and に destination",
      },
    ],
  },
  {
    english: "If I speak slowly, will everyone understand?",
    answers: [
      {
        segments: [
          { text: "私[わたし]が ゆっくり " },
          { text: "話[はな]せば", blank: true },
          { text: "、みんな " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Basic translation with explicit 私が as the speaker and みんな for everyone.",
      },
      {
        segments: [
          { text: "ゆっくり " },
          { text: "話[はな]せば", blank: true },
          { text: "、みんな " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Drops the subject 私, which is very natural when the speaker is obvious.",
      },
      {
        segments: [
          { text: "私[わたし]が ゆっくりと " },
          { text: "話[はな]せば", blank: true },
          { text: "、みんな " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Uses ゆっくりと instead of ゆっくり.",
      },
      {
        segments: [
          { text: "ゆっくりと " },
          { text: "話[はな]せば", blank: true },
          { text: "、みんな " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Subject omitted and uses ゆっくりと.",
      },
      {
        segments: [
          { text: "私[わたし]が ゆっくり " },
          { text: "話[はな]せば", blank: true },
          { text: "、みんなに " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Uses みんなに分かる, meaning 'be understandable to everyone.'",
      },
      {
        segments: [
          { text: "ゆっくり " },
          { text: "話[はな]せば", blank: true },
          { text: "、みんなに " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Subject omitted, with みんなに分かる.",
      },
      {
        segments: [
          { text: "私[わたし]が ゆっくり " },
          { text: "話[はな]せば", blank: true },
          { text: "、みんなが " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Marks みんな with が as the subject of 'understand.'",
      },
      {
        segments: [
          { text: "ゆっくり " },
          { text: "話[はな]せば", blank: true },
          { text: "、みんなが " },
          { text: "分[わ]かる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Subject omitted; みんなが explicitly marks everyone as the subject.",
      },
    ],
  },
  {
    english: "If Mika comes to the party tonight, it will probably get lively.",
    hint: "Mika = 美香 (みか)",
    answers: [
      {
        segments: [
          { text: "美香[みか]さんが 今晩[こんばん]の パーティーに " },
          { text: "来[く]れば", blank: true },
          { text: "、パーティーは たぶん にぎやかに " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using 今晩のパーティー and パーティーは in the result clause",
      },
      {
        segments: [
          { text: "今晩[こんばん]の パーティーに 美香[みか]さんが " },
          { text: "来[く]れば", blank: true },
          { text: "、パーティーは たぶん にぎやかに " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic placed after the time/location phrase",
      },
      {
        segments: [
          { text: "美香[みか]さんが 今夜[こんや]の パーティーに " },
          { text: "来[く]れば", blank: true },
          { text: "、パーティーは たぶん にぎやかに " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今夜 instead of 今晩",
      },
      {
        segments: [
          { text: "今夜[こんや]の パーティーに 美香[みか]さんが " },
          { text: "来[く]れば", blank: true },
          { text: "、パーティーは たぶん にぎやかに " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今夜 and places time/location first",
      },
      {
        segments: [
          { text: "美香[みか]さんが 今晩[こんばん] パーティーに " },
          { text: "来[く]れば", blank: true },
          { text: "、たぶん にぎやかに " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Omits の and the repeated subject in the result clause",
      },
      {
        segments: [
          { text: "美香[みか]さんが 今夜[こんや] パーティーに " },
          { text: "来[く]れば", blank: true },
          { text: "、たぶん にぎやかに " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今夜 with a compact, natural sentence",
      },
      {
        segments: [
          { text: "美香[みか]さんが 今晩[こんばん]の パーティーに " },
          { text: "来[く]れば", blank: true },
          { text: "、たぶん パーティーは にぎやかに " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moves たぶん before the result-clause topic",
      },
      {
        segments: [
          { text: "美香[みか]さんが 今晩[こんばん]の パーティーに " },
          { text: "来[く]れば", blank: true },
          { text: "、パーティーは にぎやかに なる でしょう" },
        ],
        notes: "Uses でしょう to express probably; なる is kept plain before でしょう",
      },
      {
        segments: [
          { text: "美香[みか]さんが 今夜[こんや]の パーティーに " },
          { text: "来[く]れば", blank: true },
          { text: "、パーティーは にぎやかに なる でしょう" },
        ],
        notes: "Uses 今夜 and でしょう for probability",
      },
      {
        segments: [
          { text: "今晩[こんばん]の パーティーに 美香[みか]さんが " },
          { text: "来[く]れば", blank: true },
          { text: "、たぶん にぎやかに " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time/location first and omits repeated パーティー in the main clause",
      },
      {
        segments: [
          { text: "今夜[こんや]の パーティーに 美香[みか]さんが " },
          { text: "来[く]れば", blank: true },
          { text: "、たぶん にぎやかに " },
          { text: "なる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今夜 with time/location first and omitted main-clause subject",
      },
    ],
  },
  {
    english: "If the curry isn't spicy, children can eat it too.",
    answers: [
      {
        segments: [
          { text: "カレーが" },
          { text: "辛[から]くなければ", blank: true },
          { text: "、子供[こども]も" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic sentence with が and potential 食べられる",
      },
      {
        segments: [
          { text: "カレーは" },
          { text: "辛[から]くなければ", blank: true },
          { text: "、子供[こども]も" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は to mark curry as the topic",
      },
      {
        segments: [
          { text: "カレーが" },
          { text: "辛[から]くなければ", blank: true },
          { text: "、子供[こども]も カレーを 食[た]べることが" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses ことができる with explicit object",
      },
      {
        segments: [
          { text: "カレーは" },
          { text: "辛[から]くなければ", blank: true },
          { text: "、子供[こども]も 食[た]べることが" },
          { text: "できる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic は plus ことができる construction",
      },
      {
        segments: [
          { text: "カレーが" },
          { text: "辛[から]くなければ", blank: true },
          { text: "、子供[こども]たちも" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit plural 子供たち",
      },
      {
        segments: [
          { text: "カレーは" },
          { text: "辛[から]くなければ", blank: true },
          { text: "、子供[こども]たちも" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic は with explicit plural 子供たち",
      },
      {
        segments: [
          { text: "カレーが" },
          { text: "辛[から]くなければ", blank: true },
          { text: "、子供[こども]にも" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using にも to mean even/also by children",
      },
      {
        segments: [
          { text: "辛[から]くない カレー" },
          { text: "ならば", blank: true },
          { text: "、子供[こども]も" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses noun condition ならば with 辛くないカレー",
      },
    ],
  },
  {
    english: "If I think about it a little, I can remember the name.",
    answers: [
      {
        segments: [
          { text: "少[すこ]し" },
          { text: "考[かんが]えれば", blank: true },
          { text: "、名前[なまえ]が" },
          { text: "思[おも]い 出[だ]せる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation with 少し and が marking what can be recalled",
      },
      {
        segments: [
          { text: "少[すこ]し" },
          { text: "考[かんが]えれば", blank: true },
          { text: "、名前[なまえ]を" },
          { text: "思[おも]い 出[だ]せる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using を instead of が with the potential verb",
      },
      {
        segments: [
          { text: "ちょっと" },
          { text: "考[かんが]えれば", blank: true },
          { text: "、名前[なまえ]が" },
          { text: "思[おも]い 出[だ]せる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using conversational ちょっと for 'a little'",
      },
      {
        segments: [
          { text: "ちょっと" },
          { text: "考[かんが]えれば", blank: true },
          { text: "、名前[なまえ]を" },
          { text: "思[おも]い 出[だ]せる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Conversational ちょっと plus を marking the object",
      },
    ],
  },
  {
    english: "If the room isn't non-smoking, I won't stay at that Japanese inn.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 部屋[へや]が禁煙[きんえん]" },
          { text: "でなければ", blank: true },
          { text: "、その 旅館[りょかん]には" },
          { text: "泊[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Basic translation with 私は; が marks the room and には contrasts the inn",
      },
      {
        segments: [
          { text: "私[わたし]は その 部屋[へや]が禁煙[きんえん]" },
          { text: "でなければ", blank: true },
          { text: "、その 旅館[りょかん]には" },
          { text: "泊[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Specifies 'the/that room' as その部屋",
      },
      {
        segments: [
          { text: "私[わたし]は 部屋[へや]が禁煙[きんえん]" },
          { text: "でなければ", blank: true },
          { text: "、その 旅館[りょかん]に" },
          { text: "泊[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses に instead of contrastive には for the inn",
      },
      {
        segments: [
          { text: "私[わたし]は 部屋[へや]が禁煙[きんえん]" },
          { text: "でなければ", blank: true },
          { text: "、あの 旅館[りょかん]には" },
          { text: "泊[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses あの for 'that' Japanese inn",
      },
      {
        segments: [
          { text: "私[わたし]は その 部屋[へや]が禁煙[きんえん]" },
          { text: "でなければ", blank: true },
          { text: "、その 旅館[りょかん]に" },
          { text: "泊[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Specifies その部屋 and uses simple に for the lodging place",
      },
      {
        segments: [
          { text: "私[わたし]は 部屋[へや]が禁煙[きんえん]" },
          { text: "でなければ", blank: true },
          { text: "、あの 旅館[りょかん]に" },
          { text: "泊[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses あの and simple に",
      },
      {
        segments: [
          { text: "私[わたし]は その 部屋[へや]が禁煙[きんえん]" },
          { text: "でなければ", blank: true },
          { text: "、あの 旅館[りょかん]に" },
          { text: "泊[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Specifies the room and uses あの for the inn",
      },
      {
        segments: [
          { text: "私[わたし]は 部屋[へや]は禁煙[きんえん]" },
          { text: "でなければ", blank: true },
          { text: "、その 旅館[りょかん]には" },
          { text: "泊[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses は to mark the room as topic in the condition",
      },
      {
        segments: [
          { text: "私[わたし]は 部屋[へや]は禁煙[きんえん]" },
          { text: "でなければ", blank: true },
          { text: "、あの 旅館[りょかん]には" },
          { text: "泊[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Room as topic with あの旅館",
      },
      {
        segments: [
          { text: "私[わたし]は その 部屋[へや]が禁煙[きんえん]" },
          { text: "でなければ", blank: true },
          { text: "、あの 旅館[りょかん]には" },
          { text: "泊[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Specifies その部屋 and uses あの旅館 with contrastive には",
      },
      {
        segments: [
          { text: "私[わたし]は 禁煙[きんえん]の 部屋[へや]" },
          { text: "でなければ", blank: true },
          { text: "、その 旅館[りょかん]には" },
          { text: "泊[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses the noun phrase 禁煙の部屋, 'a non-smoking room'",
      },
      {
        segments: [
          { text: "私[わたし]は 禁煙[きんえん]の 部屋[へや]" },
          { text: "でなければ", blank: true },
          { text: "、あの 旅館[りょかん]には" },
          { text: "泊[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "禁煙の部屋 with あの旅館",
      },
      {
        segments: [
          { text: "私[わたし]は 禁煙[きんえん]の 部屋[へや]" },
          { text: "でなければ", blank: true },
          { text: "、その 旅館[りょかん]に" },
          { text: "泊[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "禁煙の部屋 with simple に",
      },
      {
        segments: [
          { text: "私[わたし]は 禁煙[きんえん]の 部屋[へや]" },
          { text: "でなければ", blank: true },
          { text: "、あの 旅館[りょかん]に" },
          { text: "泊[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "禁煙の部屋 with あの旅館 and simple に",
      },
    ],
  },
  {
    english: "If I lose the key, I'll call the landlord right away.",
    answers: [
      {
        segments: [
          { text: "私[わたし]が 鍵[かぎ]を" },
          { text: "なくせば", blank: true },
          { text: "、すぐ 大家[おおや]さんに" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic sentence with 私が marking the subject of losing the key; uses すぐ for right away.",
      },
      {
        segments: [
          { text: "私[わたし]が 鍵[かぎ]を" },
          { text: "なくせば", blank: true },
          { text: "、今[いま]すぐ 大家[おおや]さんに" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 今すぐ for 'right away' instead of すぐ.",
      },
      {
        segments: [
          { text: "私[わたし]は 鍵[かぎ]を" },
          { text: "なくせば", blank: true },
          { text: "、すぐ 大家[おおや]さんに" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 私は as the topic of the whole sentence.",
      },
      {
        segments: [
          { text: "私[わたし]は 鍵[かぎ]を" },
          { text: "なくせば", blank: true },
          { text: "、今[いま]すぐ 大家[おおや]さんに" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 私は as topic and 今すぐ for immediacy.",
      },
      {
        segments: [
          { text: "私[わたし]が 鍵[かぎ]を" },
          { text: "なくせば", blank: true },
          { text: "、大家[おおや]さんに すぐ" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Moves すぐ before the verb phrase after the indirect object.",
      },
      {
        segments: [
          { text: "鍵[かぎ]を" },
          { text: "なくせば", blank: true },
          { text: "、大家[おおや]さんに すぐ" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject omitted and すぐ placed right before the final verb.",
      },
      {
        segments: [
          { text: "私[わたし]が 鍵[かぎ]を" },
          { text: "なくせば", blank: true },
          { text: "、すぐに 大家[おおや]さんに" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses すぐに instead of すぐ.",
      },
      {
        segments: [
          { text: "私[わたし]は 鍵[かぎ]を" },
          { text: "なくせば", blank: true },
          { text: "、すぐに 大家[おおや]さんに" },
          { text: "電話[でんわ]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic 私は with すぐに.",
      },
    ],
  },
  {
    english: "If that meeting isn't important, I want to go home early.",
    answers: [
      {
        segments: [
          { text: "その 会議[かいぎ]が" },
          { text: "大切[たいせつ]でなければ", blank: true },
          { text: "、早[はや]く" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation using その and が; 帰る implies going home.",
      },
      {
        segments: [
          { text: "その 会議[かいぎ]が" },
          { text: "大事[だいじ]でなければ", blank: true },
          { text: "、早[はや]く" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 大事 as a natural synonym for important.",
      },
      {
        segments: [
          { text: "その 会議[かいぎ]は" },
          { text: "大切[たいせつ]でなければ", blank: true },
          { text: "、早[はや]く" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses は to mark the meeting as the topic.",
      },
      {
        segments: [
          { text: "その 会議[かいぎ]は" },
          { text: "大事[だいじ]でなければ", blank: true },
          { text: "、早[はや]く" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topic marker は with synonym 大事.",
      },
      {
        segments: [
          { text: "あの 会議[かいぎ]が" },
          { text: "大切[たいせつ]でなければ", blank: true },
          { text: "、早[はや]く" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses あの for 'that' when the meeting is distant from both speaker and listener.",
      },
      {
        segments: [
          { text: "あの 会議[かいぎ]が" },
          { text: "大事[だいじ]でなければ", blank: true },
          { text: "、早[はや]く" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "あの plus synonym 大事.",
      },
      {
        segments: [
          { text: "あの 会議[かいぎ]は" },
          { text: "大切[たいせつ]でなければ", blank: true },
          { text: "、早[はや]く" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses あの and topic marker は.",
      },
      {
        segments: [
          { text: "あの 会議[かいぎ]は" },
          { text: "大事[だいじ]でなければ", blank: true },
          { text: "、早[はや]く" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses あの, は, and 大事.",
      },
      {
        segments: [
          { text: "その 会議[かいぎ]が" },
          { text: "大切[たいせつ]でなければ", blank: true },
          { text: "、早[はや]く 家[いえ]に" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly says 家に帰る for 'go home'.",
      },
      {
        segments: [
          { text: "その 会議[かいぎ]が" },
          { text: "大事[だいじ]でなければ", blank: true },
          { text: "、早[はや]く 家[いえ]に" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 家に帰る with 大事.",
      },
      {
        segments: [
          { text: "あの 会議[かいぎ]が" },
          { text: "大切[たいせつ]でなければ", blank: true },
          { text: "、早[はや]く 家[いえ]に" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses あの and explicitly says 家に帰る.",
      },
      {
        segments: [
          { text: "その 会議[かいぎ]が" },
          { text: "大切[たいせつ]でなければ", blank: true },
          { text: "、早[はや]く 家[いえ]へ" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses へ instead of に for the destination home.",
      },
      {
        segments: [
          { text: "その 会議[かいぎ]が" },
          { text: "大切[たいせつ]でなければ", blank: true },
          { text: "、早[はや]く うちに" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses うちに帰る for 'go home'.",
      },
      {
        segments: [
          { text: "その 会議[かいぎ]が" },
          { text: "大切[たいせつ]でなければ", blank: true },
          { text: "、早[はや]く うちへ" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses うちへ帰る with destination particle へ.",
      },
      {
        segments: [
          { text: "もし その 会議[かいぎ]が" },
          { text: "大切[たいせつ]でなければ", blank: true },
          { text: "、早[はや]く" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds もし to explicitly mark the conditional.",
      },
      {
        segments: [
          { text: "もし あの 会議[かいぎ]が" },
          { text: "大切[たいせつ]でなければ", blank: true },
          { text: "、早[はや]く" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "もし with あの.",
      },
      {
        segments: [
          { text: "早[はや]く" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
          { text: "、その 会議[かいぎ]が" },
          { text: "大切[たいせつ]でなければ", blank: true },
        ],
        notes: "Reversed word order; conditional clause placed after the desire statement.",
      },
      {
        segments: [
          { text: "その 会議[かいぎ]が" },
          { text: "重要[じゅうよう]でなければ", blank: true },
          { text: "、早[はや]く" },
          { text: "帰[かえ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 重要, a very natural word for an important meeting.",
      },
    ],
  },
  {
    english: "If the documents are dirty, please make a photocopy again.",
    hint: "photocopy = コピー",
    answers: [
      {
        segments: [
          { text: "書類[しょるい]が" },
          { text: "汚[きたな]ければ", blank: true },
          { text: "、もう 一度[いちど]コピーを取[と]ってください" },
        ],
        notes: "Basic translation using が and もう一度",
      },
      {
        segments: [
          { text: "書類[しょるい]が" },
          { text: "汚[きたな]ければ", blank: true },
          { text: "、またコピーを取[と]ってください" },
        ],
        notes: "Using また for “again”",
      },
      {
        segments: [
          { text: "書類[しょるい]が" },
          { text: "汚[きたな]ければ", blank: true },
          { text: "、もう 一度[いちど]コピーしてください" },
        ],
        notes: "Using コピーする instead of コピーを取る",
      },
      {
        segments: [
          { text: "書類[しょるい]が" },
          { text: "汚[きたな]ければ", blank: true },
          { text: "、またコピーしてください" },
        ],
        notes: "Using コピーする and また",
      },
      {
        segments: [
          { text: "書類[しょるい]が" },
          { text: "汚[きたな]ければ", blank: true },
          { text: "、コピーをもう 一度[いちど]取[と]ってください" },
        ],
        notes: "Different word order: もう一度 before the verb",
      },
      {
        segments: [
          { text: "書類[しょるい]が" },
          { text: "汚[きたな]ければ", blank: true },
          { text: "、コピーをまた取[と]ってください" },
        ],
        notes: "Different word order with また before the verb",
      },
      {
        segments: [
          { text: "書類[しょるい]は" },
          { text: "汚[きたな]ければ", blank: true },
          { text: "、もう 一度[いちど]コピーを取[と]ってください" },
        ],
        notes: "Using は to mark the documents as the topic",
      },
      {
        segments: [
          { text: "書類[しょるい]は" },
          { text: "汚[きたな]ければ", blank: true },
          { text: "、またコピーを取[と]ってください" },
        ],
        notes: "Using は and また",
      },
      {
        segments: [
          { text: "書類[しょるい]は" },
          { text: "汚[きたな]ければ", blank: true },
          { text: "、もう 一度[いちど]コピーしてください" },
        ],
        notes: "Using は and コピーする",
      },
      {
        segments: [
          { text: "書類[しょるい]は" },
          { text: "汚[きたな]ければ", blank: true },
          { text: "、またコピーしてください" },
        ],
        notes: "Using は, コピーする, and また",
      },
      {
        segments: [
          { text: "書類[しょるい]は" },
          { text: "汚[きたな]ければ", blank: true },
          { text: "、コピーをもう 一度[いちど]取[と]ってください" },
        ],
        notes: "Using は with reordered もう一度",
      },
      {
        segments: [
          { text: "書類[しょるい]は" },
          { text: "汚[きたな]ければ", blank: true },
          { text: "、コピーをまた取[と]ってください" },
        ],
        notes: "Using は with reordered また",
      },
    ],
  },
  {
    english: "If I win the match, I'll treat everyone to sushi.",
    answers: [
      {
        segments: [
          { text: "私[わたし]が 試合[しあい]に" },
          { text: "勝[か]てば", blank: true },
          { text: "、みんなに 寿司[すし]を ごちそう" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation with explicit subject 私が and ごちそうする",
      },
      {
        segments: [
          { text: "試合[しあい]に" },
          { text: "勝[か]てば", blank: true },
          { text: "、みんなに 寿司[すし]を ごちそう" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Natural subject omission; context makes 'I' clear",
      },
      {
        segments: [
          { text: "私[わたし]が 試合[しあい]に" },
          { text: "勝[か]てば", blank: true },
          { text: "、寿司[すし]を みんなに ごちそう" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Object placed before recipient",
      },
      {
        segments: [
          { text: "試合[しあい]に" },
          { text: "勝[か]てば", blank: true },
          { text: "、寿司[すし]を みんなに ごちそう" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject omitted with object-before-recipient word order",
      },
      {
        segments: [
          { text: "私[わたし]が 試合[しあい]で" },
          { text: "勝[か]てば", blank: true },
          { text: "、みんなに 寿司[すし]を ごちそう" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 試合で to mean 'in the match'",
      },
      {
        segments: [
          { text: "試合[しあい]で" },
          { text: "勝[か]てば", blank: true },
          { text: "、みんなに 寿司[すし]を ごちそう" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject omitted and using 試合で",
      },
      {
        segments: [
          { text: "私[わたし]が 試合[しあい]で" },
          { text: "勝[か]てば", blank: true },
          { text: "、寿司[すし]を みんなに ごちそう" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 試合で and object-before-recipient order",
      },
      {
        segments: [
          { text: "私[わたし]が 試合[しあい]に" },
          { text: "勝[か]てば", blank: true },
          { text: "、みんなに 寿司[すし]を おごる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using おごる as a natural synonym for treating someone",
      },
      {
        segments: [
          { text: "試合[しあい]に" },
          { text: "勝[か]てば", blank: true },
          { text: "、みんなに 寿司[すし]を おごる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject omitted with おごる",
      },
      {
        segments: [
          { text: "私[わたし]が 試合[しあい]で" },
          { text: "勝[か]てば", blank: true },
          { text: "、みんなに 寿司[すし]を おごる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 試合で with おごる",
      },
      {
        segments: [
          { text: "試合[しあい]で" },
          { text: "勝[か]てば", blank: true },
          { text: "、みんなに 寿司[すし]を おごる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject omitted, 試合で, and おごる",
      },
      {
        segments: [
          { text: "私[わたし]が 試合[しあい]に" },
          { text: "勝[か]てば", blank: true },
          { text: "、寿司[すし]を みんなに おごる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Object-before-recipient order with おごる",
      },
      {
        segments: [
          { text: "試合[しあい]で" },
          { text: "勝[か]てば", blank: true },
          { text: "、寿司[すし]を みんなに おごる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject omitted and object-before-recipient order with おごる",
      },
      {
        segments: [
          { text: "私[わたし]が 試合[しあい]に" },
          { text: "勝[か]てば", blank: true },
          { text: "、みんなに 寿司[すし]を ごちそうして" },
          { text: "あげる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using てあげる to emphasize doing the treating for everyone",
      },
      {
        segments: [
          { text: "試合[しあい]に" },
          { text: "勝[か]てば", blank: true },
          { text: "、みんなに 寿司[すし]を ごちそうして" },
          { text: "あげる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject omitted with ごちそうしてあげる",
      },
      {
        segments: [
          { text: "私[わたし]が 試合[しあい]で" },
          { text: "勝[か]てば", blank: true },
          { text: "、みんなに 寿司[すし]を ごちそうして" },
          { text: "あげる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 試合で with ごちそうしてあげる",
      },
      {
        segments: [
          { text: "試合[しあい]で" },
          { text: "勝[か]てば", blank: true },
          { text: "、みんなに 寿司[すし]を ごちそうして" },
          { text: "あげる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject omitted and using 試合で with ごちそうしてあげる",
      },
      {
        segments: [
          { text: "その 試合[しあい]に 私[わたし]が" },
          { text: "勝[か]てば", blank: true },
          { text: "、みんなに 寿司[すし]を ごちそう" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using その試合 for 'the match' and placing 私が after the match phrase",
      },
      {
        segments: [
          { text: "その 試合[しあい]に" },
          { text: "勝[か]てば", blank: true },
          { text: "、みんなに 寿司[すし]を ごちそう" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using その試合 with omitted subject",
      },
      {
        segments: [
          { text: "その 試合[しあい]で 私[わたし]が" },
          { text: "勝[か]てば", blank: true },
          { text: "、みんなに 寿司[すし]を おごる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using その試合で and おごる",
      },
      {
        segments: [
          { text: "その 試合[しあい]で" },
          { text: "勝[か]てば", blank: true },
          { text: "、みんなに 寿司[すし]を おごる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using その試合で with subject omitted and おごる",
      },
    ],
  },
  {
    english: "If the soup is hot, please wait a little.",
    answers: [
      {
        segments: [
          { text: "スープが" },
          { text: "熱[あつ]ければ", blank: true },
          { text: "、少[すこ]し待[ま]ってください" },
        ],
        notes: "Basic translation using が and 少し",
      },
      {
        segments: [
          { text: "スープが" },
          { text: "熱[あつ]ければ", blank: true },
          { text: "、ちょっと待[ま]ってください" },
        ],
        notes: "Using ちょっと instead of 少し",
      },
      {
        segments: [
          { text: "スープは" },
          { text: "熱[あつ]ければ", blank: true },
          { text: "、少[すこ]し待[ま]ってください" },
        ],
        notes: "Using は to mark the soup as the topic",
      },
      {
        segments: [
          { text: "スープは" },
          { text: "熱[あつ]ければ", blank: true },
          { text: "、ちょっと待[ま]ってください" },
        ],
        notes: "Using は and ちょっと",
      },
      {
        segments: [
          { text: "スープが" },
          { text: "熱[あつ]ければ", blank: true },
          { text: "、少[すこ]し待[ま]っていてください" },
        ],
        notes: "Using 待っていてください to mean wait/remain waiting",
      },
      {
        segments: [
          { text: "スープが" },
          { text: "熱[あつ]ければ", blank: true },
          { text: "、ちょっと待[ま]っていてください" },
        ],
        notes: "Using 待っていてください with ちょっと",
      },
      {
        segments: [
          { text: "スープが" },
          { text: "熱[あつ]ければ", blank: true },
          { text: "、少[すこ]し待[ま]っていてください" },
        ],
        notes: "Adding ね for a softer request",
      },
      {
        segments: [
          { text: "スープが" },
          { text: "熱[あつ]ければ", blank: true },
          { text: "、ちょっと待[ま]っていてください" },
        ],
        notes: "Softer request with ちょっと and ね",
      },
    ],
  },
  {
    english: "If work ends early today, I plan to stop by the bookstore and buy a comic book.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今日[きょう] 仕事[しごと]が 早[はや]く " },
          { text: "終[お]われば", blank: true },
          { text: "、本屋[ほんや]に寄[よ]って、漫画[まんが]を一冊[いっさつ] 買[か]うつもり" },
          { text: "です" },
        ],
        notes: "Basic wording with つもり and 一冊 for “a comic book”",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう] 仕事[しごと]が 早[はや]く " },
          { text: "終[お]われば", blank: true },
          { text: "、本屋[ほんや]に寄[よ]って、漫画[まんが]を一冊[いっさつ] 買[か]う予定[よてい]" },
          { text: "です" },
        ],
        notes: "Using 予定 instead of つもり for “plan”",
      },
      {
        segments: [
          { text: "今日[きょう] 仕事[しごと]が 早[はや]く " },
          { text: "終[お]われば", blank: true },
          { text: "、私[わたし]は 本屋[ほんや]に寄[よ]って、漫画[まんが]を一冊[いっさつ] 買[か]うつもり" },
          { text: "です" },
        ],
        notes: "Topic 私 placed after the condition",
      },
      {
        segments: [
          { text: "今日[きょう] 仕事[しごと]が 早[はや]く " },
          { text: "終[お]われば", blank: true },
          { text: "、私[わたし]は 本屋[ほんや]に寄[よ]って、漫画[まんが]を一冊[いっさつ] 買[か]う予定[よてい]" },
          { text: "です" },
        ],
        notes: "予定 with topic after the condition",
      },
      {
        segments: [
          { text: "私[わたし]は 仕事[しごと]が 今日[きょう] 早[はや]く " },
          { text: "終[お]われば", blank: true },
          { text: "、本屋[ほんや]に寄[よ]って、漫画[まんが]を一冊[いっさつ] 買[か]うつもり" },
          { text: "です" },
        ],
        notes: "今日 placed inside the condition after 仕事が",
      },
      {
        segments: [
          { text: "私[わたし]は 仕事[しごと]が 今日[きょう] 早[はや]く " },
          { text: "終[お]われば", blank: true },
          { text: "、本屋[ほんや]に寄[よ]って、漫画[まんが]を一冊[いっさつ] 買[か]う予定[よてい]" },
          { text: "です" },
        ],
        notes: "予定 with 今日 inside the condition",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう] 仕事[しごと]が 早[はや]く " },
          { text: "終[お]われば", blank: true },
          { text: "、本屋[ほんや]に寄[よ]って、一冊[いっさつ]の漫画[まんが]を買[か]うつもり" },
          { text: "です" },
        ],
        notes: "Using 一冊の漫画 instead of 漫画を一冊",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう] 仕事[しごと]が 早[はや]く " },
          { text: "終[お]われば", blank: true },
          { text: "、本屋[ほんや]に寄[よ]って、一冊[いっさつ]の漫画[まんが]を買[か]う予定[よてい]" },
          { text: "です" },
        ],
        notes: "予定 with 一冊の漫画",
      },
      {
        segments: [
          { text: "今日[きょう] 仕事[しごと]が 早[はや]く " },
          { text: "終[お]われば", blank: true },
          { text: "、私[わたし]は 本屋[ほんや]に寄[よ]って、一冊[いっさつ]の漫画[まんが]を買[か]うつもり" },
          { text: "です" },
        ],
        notes: "Topic after condition with 一冊の漫画",
      },
      {
        segments: [
          { text: "今日[きょう] 仕事[しごと]が 早[はや]く " },
          { text: "終[お]われば", blank: true },
          { text: "、私[わたし]は 本屋[ほんや]に寄[よ]って、一冊[いっさつ]の漫画[まんが]を買[か]う予定[よてい]" },
          { text: "です" },
        ],
        notes: "予定, topic after condition, and 一冊の漫画",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]の仕事[しごと]が 早[はや]く " },
          { text: "終[お]われば", blank: true },
          { text: "、本屋[ほんや]に寄[よ]って、漫画[まんが]を一冊[いっさつ] 買[か]うつもり" },
          { text: "です" },
        ],
        notes: "Using 今日の仕事 for “today’s work”",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]の仕事[しごと]が 早[はや]く " },
          { text: "終[お]われば", blank: true },
          { text: "、本屋[ほんや]に寄[よ]って、漫画[まんが]を一冊[いっさつ] 買[か]う予定[よてい]" },
          { text: "です" },
        ],
        notes: "予定 with 今日の仕事",
      },
      {
        segments: [
          { text: "今日[きょう]の仕事[しごと]が 早[はや]く " },
          { text: "終[お]われば", blank: true },
          { text: "、私[わたし]は 本屋[ほんや]に寄[よ]って、漫画[まんが]を一冊[いっさつ] 買[か]うつもり" },
          { text: "です" },
        ],
        notes: "Topic after condition with 今日の仕事",
      },
      {
        segments: [
          { text: "今日[きょう]の仕事[しごと]が 早[はや]く " },
          { text: "終[お]われば", blank: true },
          { text: "、私[わたし]は 本屋[ほんや]に寄[よ]って、漫画[まんが]を一冊[いっさつ] 買[か]う予定[よてい]" },
          { text: "です" },
        ],
        notes: "予定 and topic after condition with 今日の仕事",
      },
      {
        segments: [
          { text: "もし 今日[きょう] 仕事[しごと]が 早[はや]く " },
          { text: "終[お]われば", blank: true },
          { text: "、本屋[ほんや]に寄[よ]って、漫画[まんが]を一冊[いっさつ] 買[か]うつもり" },
          { text: "です" },
        ],
        notes: "もし without explicit post-condition topic",
      },
      {
        segments: [
          { text: "もし 今日[きょう] 仕事[しごと]が 早[はや]く " },
          { text: "終[お]われば", blank: true },
          { text: "、本屋[ほんや]に寄[よ]って、漫画[まんが]を一冊[いっさつ] 買[か]う予定[よてい]" },
          { text: "です" },
        ],
        notes: "もし without explicit post-condition topic, using 予定",
      },
      {
        segments: [
          { text: "もし 今日[きょう]の仕事[しごと]が 早[はや]く " },
          { text: "終[お]われば", blank: true },
          { text: "、本屋[ほんや]に寄[よ]って、漫画[まんが]を一冊[いっさつ] 買[か]うつもり" },
          { text: "です" },
        ],
        notes: "もし with 今日の仕事",
      },
      {
        segments: [
          { text: "もし 今日[きょう]の仕事[しごと]が 早[はや]く " },
          { text: "終[お]われば", blank: true },
          { text: "、本屋[ほんや]に寄[よ]って、漫画[まんが]を一冊[いっさつ] 買[か]う予定[よてい]" },
          { text: "です" },
        ],
        notes: "もし with 今日の仕事 and 予定",
      },
      {
        segments: [
          { text: "今日[きょう] 早[はや]く 仕事[しごと]が " },
          { text: "終[お]われば", blank: true },
          { text: "、本屋[ほんや]に寄[よ]って、漫画[まんが]を一冊[いっさつ] 買[か]うつもり" },
          { text: "です" },
        ],
        notes: "Adverb 早く placed before 仕事が; subject omitted",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう] 仕事[しごと]が 早[はや]く " },
          { text: "終[お]われば", blank: true },
          { text: "、本屋[ほんや]に寄[よ]ってから、漫画[まんが]を一冊[いっさつ] 買[か]うつもり" },
          { text: "です" },
        ],
        notes: "Using てから to emphasize stopping by before buying",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう] 仕事[しごと]が 早[はや]く " },
          { text: "終[お]われば", blank: true },
          { text: "、本屋[ほんや]に寄[よ]ってから、漫画[まんが]を一冊[いっさつ] 買[か]う予定[よてい]" },
          { text: "です" },
        ],
        notes: "てから with 予定",
      },
      {
        segments: [
          { text: "今日[きょう]の仕事[しごと]が 早[はや]く " },
          { text: "終[お]われば", blank: true },
          { text: "、本屋[ほんや]に寄[よ]ってから、漫画[まんが]を一冊[いっさつ] 買[か]うつもり" },
          { text: "です" },
        ],
        notes: "てから with 今日の仕事 and omitted subject",
      },
      {
        segments: [
          { text: "今日[きょう]の仕事[しごと]が 早[はや]く " },
          { text: "終[お]われば", blank: true },
          { text: "、本屋[ほんや]に寄[よ]ってから、漫画[まんが]を一冊[いっさつ] 買[か]う予定[よてい]" },
          { text: "です" },
        ],
        notes: "てから, 今日の仕事, and 予定",
      },
    ],
  },
  {
    english: "If it's a secret, I won't tell anyone, so don't worry.",
    answers: [
      {
        segments: [
          { text: "秘密[ひみつ]ならば", blank: true },
          { text: "、誰[だれ]にも" },
          { text: "言[い]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "から、心配[しんぱい]しないでください" },
        ],
        notes: "Standard noun + ならば; uses 言う for 'tell'",
      },
      {
        segments: [
          { text: "秘密[ひみつ]ならば", blank: true },
          { text: "、誰[だれ]にも" },
          { text: "話[はな]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "から、心配[しんぱい]しないでください" },
        ],
        notes: "Uses 話す instead of 言う for 'tell'",
      },
      {
        segments: [
          { text: "もし " },
          { text: "秘密[ひみつ]ならば", blank: true },
          { text: "、誰[だれ]にも" },
          { text: "言[い]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "から、心配[しんぱい]しないでください" },
        ],
        notes: "Adds もし to explicitly mark the conditional",
      },
      {
        segments: [
          { text: "もし " },
          { text: "秘密[ひみつ]ならば", blank: true },
          { text: "、誰[だれ]にも" },
          { text: "話[はな]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "から、心配[しんぱい]しないでください" },
        ],
        notes: "Adds もし and uses 話す",
      },
      {
        segments: [
          { text: "秘密[ひみつ]ならば", blank: true },
          { text: "、誰[だれ]にも" },
          { text: "言[い]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "ので、心配[しんぱい]しないでください" },
        ],
        notes: "Uses ので instead of から for a softer reason clause",
      },
      {
        segments: [
          { text: "秘密[ひみつ]ならば", blank: true },
          { text: "、誰[だれ]にも" },
          { text: "話[はな]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "ので、心配[しんぱい]しないでください" },
        ],
        notes: "Uses 話す and ので",
      },
      {
        segments: [
          { text: "もし " },
          { text: "秘密[ひみつ]ならば", blank: true },
          { text: "、誰[だれ]にも" },
          { text: "言[い]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "ので、心配[しんぱい]しないでください" },
        ],
        notes: "Adds もし and uses ので",
      },
      {
        segments: [
          { text: "もし " },
          { text: "秘密[ひみつ]ならば", blank: true },
          { text: "、誰[だれ]にも" },
          { text: "話[はな]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "ので、心配[しんぱい]しないでください" },
        ],
        notes: "Adds もし, 話す, and ので",
      },
      {
        segments: [
          { text: "秘密[ひみつ]ならば", blank: true },
          { text: "、誰[だれ]にも" },
          { text: "教[おし]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "から、心配[しんぱい]しないでください" },
        ],
        notes: "Uses 教える for 'tell/inform'",
      },
      {
        segments: [
          { text: "秘密[ひみつ]ならば", blank: true },
          { text: "、誰[だれ]にも" },
          { text: "教[おし]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "ので、心配[しんぱい]しないでください" },
        ],
        notes: "Uses 教える and softer ので",
      },
      {
        segments: [
          { text: "もし " },
          { text: "秘密[ひみつ]ならば", blank: true },
          { text: "、誰[だれ]にも" },
          { text: "教[おし]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "から、心配[しんぱい]しないでください" },
        ],
        notes: "Adds もし with 教える",
      },
      {
        segments: [
          { text: "もし " },
          { text: "秘密[ひみつ]ならば", blank: true },
          { text: "、誰[だれ]にも" },
          { text: "教[おし]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "ので、心配[しんぱい]しないでください" },
        ],
        notes: "Uses もし, 教える, and ので",
      },
    ],
  },
  {
    english: "If the baby cries tonight, please sing this song.",
    answers: [
      {
        segments: [
          { text: "今夜[こんや]、赤[あか]ちゃんが" },
          { text: "泣[な]けば", blank: true },
          { text: "、この 歌[うた]を 歌[うた]ってください" },
        ],
        notes: "Basic translation using 今夜 for “tonight”",
      },
      {
        segments: [
          { text: "今晩[こんばん]、赤[あか]ちゃんが" },
          { text: "泣[な]けば", blank: true },
          { text: "、この 歌[うた]を 歌[うた]ってください" },
        ],
        notes: "Using 今晩 instead of 今夜 for “tonight”",
      },
      {
        segments: [
          { text: "今夜[こんや] 赤[あか]ちゃんが" },
          { text: "泣[な]けば", blank: true },
          { text: "、この 歌[うた]を 歌[うた]ってください" },
        ],
        notes: "Omitting comma after 今夜; same natural structure",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 今夜[こんや]" },
          { text: "泣[な]けば", blank: true },
          { text: "、この 歌[うた]を 歌[うた]ってください" },
        ],
        notes: "Putting the subject before the time expression",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 今晩[こんばん]" },
          { text: "泣[な]けば", blank: true },
          { text: "、この 歌[うた]を 歌[うた]ってください" },
        ],
        notes: "Subject-first order with 今晩",
      },
      {
        segments: [
          { text: "もし 今夜[こんや] 赤[あか]ちゃんが" },
          { text: "泣[な]けば", blank: true },
          { text: "、この 歌[うた]を 歌[うた]ってください" },
        ],
        notes: "Adding もし to explicitly mark the conditional",
      },
      {
        segments: [
          { text: "もし 今晩[こんばん] 赤[あか]ちゃんが" },
          { text: "泣[な]けば", blank: true },
          { text: "、この 歌[うた]を 歌[うた]ってください" },
        ],
        notes: "Using もし with 今晩",
      },
      {
        segments: [
          { text: "今夜[こんや]、赤[あか]ちゃんが" },
          { text: "泣[な]けば", blank: true },
          { text: "、赤[あか]ちゃんに この 歌[うた]を 歌[うた]ってください" },
        ],
        notes: "Specifying the baby as the recipient/listener with に",
      },
      {
        segments: [
          { text: "今晩[こんばん]、赤[あか]ちゃんが" },
          { text: "泣[な]けば", blank: true },
          { text: "、赤[あか]ちゃんに この 歌[うた]を 歌[うた]ってください" },
        ],
        notes: "Recipient marked with に, using 今晩",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 今夜[こんや]" },
          { text: "泣[な]けば", blank: true },
          { text: "、赤[あか]ちゃんに この 歌[うた]を 歌[うた]ってください" },
        ],
        notes: "Subject-first order plus recipient marked with に",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 今晩[こんばん]" },
          { text: "泣[な]けば", blank: true },
          { text: "、赤[あか]ちゃんに この 歌[うた]を 歌[うた]ってください" },
        ],
        notes: "Subject-first order plus recipient, using 今晩",
      },
      {
        segments: [
          { text: "もし 今夜[こんや] 赤[あか]ちゃんが" },
          { text: "泣[な]けば", blank: true },
          { text: "、赤[あか]ちゃんに この 歌[うた]を 歌[うた]ってください" },
        ],
        notes: "もし plus explicit recipient/listener",
      },
      {
        segments: [
          { text: "もし 今晩[こんばん] 赤[あか]ちゃんが" },
          { text: "泣[な]けば", blank: true },
          { text: "、赤[あか]ちゃんに この 歌[うた]を 歌[うた]ってください" },
        ],
        notes: "もし, 今晩, and explicit recipient/listener",
      },
      {
        segments: [
          { text: "今夜[こんや]、赤[あか]ちゃんが" },
          { text: "泣[な]けば", blank: true },
          { text: "、この 歌[うた]を 歌[うた]ってあげてください" },
        ],
        notes: "Using てあげてください to express singing for the baby's benefit",
      },
      {
        segments: [
          { text: "今晩[こんばん]、赤[あか]ちゃんが" },
          { text: "泣[な]けば", blank: true },
          { text: "、この 歌[うた]を 歌[うた]ってあげてください" },
        ],
        notes: "Benefactive てあげてください with 今晩",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 今夜[こんや]" },
          { text: "泣[な]けば", blank: true },
          { text: "、この 歌[うた]を 歌[うた]ってあげてください" },
        ],
        notes: "Subject-first order with benefactive てあげてください",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 今晩[こんばん]" },
          { text: "泣[な]けば", blank: true },
          { text: "、この 歌[うた]を 歌[うた]ってあげてください" },
        ],
        notes: "Subject-first order, 今晩, and benefactive request",
      },
      {
        segments: [
          { text: "もし 今夜[こんや] 赤[あか]ちゃんが" },
          { text: "泣[な]けば", blank: true },
          { text: "、この 歌[うた]を 歌[うた]ってあげてください" },
        ],
        notes: "もし plus benefactive request",
      },
      {
        segments: [
          { text: "もし 今晩[こんばん] 赤[あか]ちゃんが" },
          { text: "泣[な]けば", blank: true },
          { text: "、この 歌[うた]を 歌[うた]ってあげてください" },
        ],
        notes: "もし, 今晩, and benefactive request",
      },
      {
        segments: [
          { text: "今夜[こんや]、赤[あか]ちゃんが" },
          { text: "泣[な]けば", blank: true },
          { text: "、赤[あか]ちゃんに この 歌[うた]を 歌[うた]ってあげてください" },
        ],
        notes: "Combining explicit recipient with benefactive てあげてください",
      },
      {
        segments: [
          { text: "今晩[こんばん]、赤[あか]ちゃんが" },
          { text: "泣[な]けば", blank: true },
          { text: "、赤[あか]ちゃんに この 歌[うた]を 歌[うた]ってあげてください" },
        ],
        notes: "Explicit recipient and benefactive request, using 今晩",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 今夜[こんや]" },
          { text: "泣[な]けば", blank: true },
          { text: "、赤[あか]ちゃんに この 歌[うた]を 歌[うた]ってあげてください" },
        ],
        notes: "Subject-first order, explicit recipient, and benefactive request",
      },
      {
        segments: [
          { text: "赤[あか]ちゃんが 今晩[こんばん]" },
          { text: "泣[な]けば", blank: true },
          { text: "、赤[あか]ちゃんに この 歌[うた]を 歌[うた]ってあげてください" },
        ],
        notes: "Subject-first order with 今晩, explicit recipient, and benefactive request",
      },
      {
        segments: [
          { text: "もし 今夜[こんや] 赤[あか]ちゃんが" },
          { text: "泣[な]けば", blank: true },
          { text: "、赤[あか]ちゃんに この 歌[うた]を 歌[うた]ってあげてください" },
        ],
        notes: "もし plus explicit recipient and benefactive request",
      },
      {
        segments: [
          { text: "もし 今晩[こんばん] 赤[あか]ちゃんが" },
          { text: "泣[な]けば", blank: true },
          { text: "、赤[あか]ちゃんに この 歌[うた]を 歌[うた]ってあげてください" },
        ],
        notes: "もし, 今晩, explicit recipient, and benefactive request",
      },
      {
        segments: [
          { text: "今夜[こんや]、赤[あか]ちゃんが" },
          { text: "泣[な]けば", blank: true },
          { text: "、この 歌[うた]、歌[うた]ってください" },
        ],
        notes: "Casual dropped object particle before the request",
      },
      {
        segments: [
          { text: "今晩[こんばん]、赤[あか]ちゃんが" },
          { text: "泣[な]けば", blank: true },
          { text: "、この 歌[うた]、歌[うた]ってください" },
        ],
        notes: "Dropped object particle, using 今晩",
      },
    ],
  },
  {
    english: "If I put my wallet in this bag, I won't lose it.",
    answers: [
      {
        segments: [
          { text: "この かばんに 財布[さいふ]を" },
          { text: "入[い]れれば", blank: true },
          { text: "、財布[さいふ]を" },
          { text: "なくす", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Basic word order with このかばんに before 財布を",
      },
      {
        segments: [
          { text: "財布[さいふ]を この かばんに" },
          { text: "入[い]れれば", blank: true },
          { text: "、財布[さいふ]を" },
          { text: "なくす", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Object-first word order",
      },
      {
        segments: [
          { text: "私[わたし]が 財布[さいふ]を この かばんに" },
          { text: "入[い]れれば", blank: true },
          { text: "、財布[さいふ]を" },
          { text: "なくす", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Explicit subject with が in the conditional clause",
      },
      {
        segments: [
          { text: "私[わたし]は この かばんに 財布[さいふ]を" },
          { text: "入[い]れれば", blank: true },
          { text: "、財布[さいふ]を" },
          { text: "なくす", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Sentence-initial 私は; app can also generate pronoun-dropped version",
      },
      {
        segments: [
          { text: "この かばんに" },
          { text: "入[い]れれば", blank: true },
          { text: "、財布[さいふ]を" },
          { text: "なくす", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Drops 財布を from the conditional clause because it is clear from context",
      },
      {
        segments: [
          { text: "この かばんの 中[なか]に 財布[さいふ]を" },
          { text: "入[い]れれば", blank: true },
          { text: "、財布[さいふ]を" },
          { text: "なくす", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Uses の中に to mean inside this bag explicitly",
      },
      {
        segments: [
          { text: "財布[さいふ]を この かばんの 中[なか]に" },
          { text: "入[い]れれば", blank: true },
          { text: "、財布[さいふ]を" },
          { text: "なくす", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Object-first order with の中に",
      },
      {
        segments: [
          { text: "財布[さいふ]は この かばんに" },
          { text: "入[い]れれば", blank: true },
          { text: "、" },
          { text: "なくす", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Topicalizes the wallet with は",
      },
      {
        segments: [
          { text: "財布[さいふ]は この かばんの 中[なか]に" },
          { text: "入[い]れれば", blank: true },
          { text: "、" },
          { text: "なくす", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Topicalizes the wallet and uses の中に",
      },
    ],
  },
];
