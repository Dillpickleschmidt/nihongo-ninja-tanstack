import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Is Kenji taking the Shinkansen somewhere this weekend?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは 今週末[こんしゅうまつ] 新幹線[しんかんせん]で" },
          { text: "どこかに", blank: true },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "今週末 explicitly means this weekend.",
      },
      {
        segments: [
          { text: "けんじさんは 今週末[こんしゅうまつ] 新幹線[しんかんせん]で" },
          { text: "どこかへ", blank: true },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Uses へ for destination.",
      },
      {
        segments: [
          { text: "けんじさんは 週末[しゅうまつ] 新幹線[しんかんせん]で" },
          { text: "どこかに", blank: true },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "週末 can mean this weekend from context.",
      },
      {
        segments: [
          { text: "けんじさんは 週末[しゅうまつ] 新幹線[しんかんせん]で" },
          { text: "どこかへ", blank: true },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "週末 with へ for destination.",
      }
    ],
  },
  {
    english: "It rained last weekend, so I didn't go anywhere. I just relaxed at home.",
    answers: [
      {
        segments: [
          { text: "先週末[せんしゅうまつ]は 雨[あめ]が 降[ふ]っていたから、" },
          { text: "どこにも", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "。家[いえ]で ごろごろして" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses 先週末 and どこにも.",
      },
      {
        segments: [
          { text: "先週末[せんしゅうまつ]は 雨[あめ]が 降[ふ]っていたから、" },
          { text: "どこへも", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "。家[いえ]で ごろごろして" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses どこへも.",
      },
      {
        segments: [
          { text: "先週末[せんしゅうまつ]、雨[あめ]が 降[ふ]っていたから、" },
          { text: "どこにも", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "。家[いえ]で ごろごろして" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。" },
        ],
        notes: "Drops は after 先週末.",
      },
      {
        segments: [
          { text: "先週末[せんしゅうまつ]、雨[あめ]が 降[ふ]っていたから、" },
          { text: "どこへも", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "。家[いえ]で ごろごろして" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "。" },
        ],
        notes: "Drops は after 先週末 and uses どこへも.",
      }
    ],
  },
  {
    english: "Anyone can join this circle.",
    answers: [
      {
        segments: [
          { text: "このサークルには" },
          { text: "だれでも", blank: true },
          {
            text: " 入[はい]れる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses には for this club as the place/context.",
      },
      {
        segments: [
          { text: "このサークルは" },
          { text: "だれでも", blank: true },
          {
            text: " 入[はい]れる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses は to topicalize this club.",
      },
      {
        segments: [
          { text: "だれでも このサークルに" },
          {
            text: " 入[はい]れる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Fronts だれでも.",
      }
    ],
  },
  {
    english: "I'm hungry, so I'll eat anything.",
    answers: [
      {
        segments: [
          { text: "おなかが すいたから、" },
          { text: "なんでも", blank: true },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses から for the reason.",
      },
      {
        segments: [
          { text: "すごく おなかが すいたから、" },
          { text: "なんでも", blank: true },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Adds すごく for very hungry.",
      },
      {
        segments: [
          { text: "おなかが すごく すいたから、" },
          { text: "なんでも", blank: true },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Alternative placement of すごく.",
      },
      {
        segments: [
          { text: "おなかが すいて、" },
          { text: "なんでも", blank: true },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses て to connect hunger and eating anything.",
      },
      {
        segments: [
          { text: "おなかが すいたから、今[いま]は" },
          { text: "なんでも", blank: true },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Keeps right now with 今は.",
      }
    ],
  },
  {
    english: "No one was at the library yesterday, so I went home early.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]、図書館[としょかん]に" },
          { text: "だれも いなかった", blank: true },
          { text: "から、早[はや]く" },
          {
            text: "帰[かえ]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Basic version with に and から.",
      },
      {
        segments: [
          { text: "昨日[きのう]、図書館[としょかん]には" },
          { text: "だれも いなかった", blank: true },
          { text: "から、早[はや]く" },
          {
            text: "帰[かえ]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses には to mark the library as the relevant location.",
      },
      {
        segments: [
          { text: "昨日[きのう]、図書館[としょかん]に" },
          { text: "だれも いなかった", blank: true },
          { text: "ので、早[はや]く" },
          {
            text: "帰[かえ]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses ので for the reason.",
      },
      {
        segments: [
          { text: "昨日[きのう]、図書館[としょかん]には" },
          { text: "だれも いなかった", blank: true },
          { text: "ので、早[はや]く" },
          {
            text: "帰[かえ]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Uses には and ので.",
      },
      {
        segments: [
          { text: "昨日[きのう]は、図書館[としょかん]に" },
          { text: "だれも いなかった", blank: true },
          { text: "から、早[はや]く" },
          {
            text: "帰[かえ]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Topicalizes yesterday.",
      },
      {
        segments: [
          { text: "昨日[きのう]は、図書館[としょかん]には" },
          { text: "だれも いなかった", blank: true },
          { text: "から、早[はや]く" },
          {
            text: "帰[かえ]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Topicalizes yesterday and uses には.",
      }
    ],
  },
  {
    english: "Please call me anytime.",
    answers: [
      {
        segments: [
          { text: "いつでも", blank: true },
          { text: "電話[でんわ]して ください", blank: true },
        ],
        register: "polite",
        notes: "Uses いつでも with a polite request.",
      },
      {
        segments: [
          { text: "いつでも", blank: true },
          { text: "私[わたし]に 電話[でんわ]して ください", blank: true },
        ],
        register: "polite",
        notes: "Adds 私に to specify call me.",
      },
      {
        segments: [
          { text: "いつでも", blank: true },
          { text: "電話[でんわ]をして ください", blank: true },
        ],
        register: "polite",
        notes: "Uses 電話をする.",
      },
      {
        segments: [
          { text: "いつでも", blank: true },
          { text: "電話[でんわ]して", blank: true },
        ],
        register: "casual",
        notes: "Casual request.",
      },
    ],
  },
  {
    english: "Let's go somewhere quiet.",
    answers: [
      {
        segments: [
          { text: "どこか 静[しず]かなところに", blank: true },
          { text: "行[い]きましょう", blank: true },
        ],
        register: "polite",
        notes: "Uses に for destination with polite let's.",
      },
      {
        segments: [
          { text: "どこか 静[しず]かなところへ", blank: true },
          { text: "行[い]きましょう", blank: true },
        ],
        register: "polite",
        notes: "Uses へ for destination.",
      },
      {
        segments: [
          { text: "どこか 静[しず]かなところに", blank: true },
          { text: "行[い]こう", blank: true },
        ],
        register: "casual",
        notes: "Casual volitional.",
      },
      {
        segments: [
          { text: "どこか 静[しず]かなところへ", blank: true },
          { text: "行[い]こう", blank: true },
        ],
        register: "casual",
        notes: "Casual volitional with へ.",
      }
    ],
  },
  {
    english:
      "No one in my family is good at cooking, so we eat out somewhere every night.",
    answers: [
      {
        segments: [
          { text: "家族[かぞく]の 中[なか]で 料理[りょうり]が 上手[じょうず]な 人[ひと]は" },
          { text: "だれも いない", blank: true },
          { text: "から、毎晩[まいばん]" },
          { text: "どこかに", blank: true },
          { text: "食[た]べに" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 家族の中で and に for destination.",
      },
      {
        segments: [
          { text: "家族[かぞく]の 中[なか]で 料理[りょうり]が 上手[じょうず]な 人[ひと]は" },
          { text: "だれも いない", blank: true },
          { text: "から、毎晩[まいばん]" },
          { text: "どこかへ", blank: true },
          { text: "食[た]べに" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses へ for destination.",
      },
      {
        segments: [
          { text: "家族[かぞく]に 料理[りょうり]が 上手[じょうず]な 人[ひと]は" },
          { text: "だれも いない", blank: true },
          { text: "から、毎晩[まいばん]" },
          { text: "どこかに", blank: true },
          { text: "食[た]べに" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses 家族に for in my family.",
      },
      {
        segments: [
          { text: "うちの 家族[かぞく]の 中[なか]で 料理[りょうり]が 上手[じょうず]な 人[ひと]は" },
          { text: "だれも いない", blank: true },
          { text: "から、毎晩[まいばん]" },
          { text: "どこかに", blank: true },
          { text: "食[た]べに" },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Uses うちの家族 for my family.",
      }
    ],
  },
  {
    english: "This winter, I want to go somewhere warm. Anywhere is fine.",
    answers: [
      {
        segments: [
          { text: "今年[ことし]の 冬[ふゆ]は、どこか 暖[あたた]かいところに " },
          {
            text: "行[い]きたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "どこでも" },
          {
            text: "いい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses ところ + に and どこでもいい.",
      },
      {
        segments: [
          { text: "今年[ことし]の 冬[ふゆ]は、どこか 暖[あたた]かいところに " },
          {
            text: "行[い]きたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "どこでも" },
          {
            text: "大丈夫[だいじょうぶ]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses ところ + に and どこでも大丈夫.",
      },
      {
        segments: [
          { text: "今年[ことし]の 冬[ふゆ]は、どこか 暖[あたた]かいところへ " },
          {
            text: "行[い]きたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "どこでも" },
          {
            text: "いい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses ところ + へ and どこでもいい.",
      },
      {
        segments: [
          { text: "今年[ことし]の 冬[ふゆ]は、どこか 暖[あたた]かいところへ " },
          {
            text: "行[い]きたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "どこでも" },
          {
            text: "大丈夫[だいじょうぶ]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses ところ + へ and どこでも大丈夫.",
      },
      {
        segments: [
          { text: "今年[ことし]の 冬[ふゆ]は、どこか 暖[あたた]かい所[ところ]に " },
          {
            text: "行[い]きたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "どこでも" },
          {
            text: "いい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses 所[ところ] + に and どこでもいい.",
      },
      {
        segments: [
          { text: "今年[ことし]の 冬[ふゆ]は、どこか 暖[あたた]かい所[ところ]に " },
          {
            text: "行[い]きたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "どこでも" },
          {
            text: "大丈夫[だいじょうぶ]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses 所[ところ] + に and どこでも大丈夫.",
      },
      {
        segments: [
          { text: "今年[ことし]の 冬[ふゆ]は、どこか 暖[あたた]かい所[ところ]へ " },
          {
            text: "行[い]きたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "どこでも" },
          {
            text: "いい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses 所[ところ] + へ and どこでもいい.",
      },
      {
        segments: [
          { text: "今年[ことし]の 冬[ふゆ]は、どこか 暖[あたた]かい所[ところ]へ " },
          {
            text: "行[い]きたい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
          { text: "どこでも" },
          {
            text: "大丈夫[だいじょうぶ]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "。" },
        ],
        notes: "Uses 所[ところ] + へ and どこでも大丈夫.",
      }
    ],
  },
  {
    english:
      "I haven't told anyone yet, but I plan to live somewhere outside this town.",
    answers: [
      {
        segments: [
          { text: "まだ" },
          { text: "誰[だれ]にも", blank: true },
          {
            text: "話[はな]している",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "が、" },
          { text: "この 町[まち]を 出[で]て" },
          { text: "どこかに", blank: true },
          { text: "住[す]むつもり" },
          { text: "です", blank: true },
        ],
        notes: "誰にも + どこかに.",
      },
    ],
  },

]
