import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Is Kenji going somewhere this weekend?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは 週末[しゅうまつ]" },
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
      },
      {
        segments: [
          {
            text: "けんじさんは 週末[しゅうまつ] どこかに 行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
      },
      {
        segments: [
          {
            text: "けんじさんは 週末[しゅうまつ] どこかへ 行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "けんじさんは 今週末[こんしゅうまつ]" },
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
        notes: "今週末 (this weekend) instead of 週末",
      },
      {
        segments: [
          { text: "けんじさんは 今週末[こんしゅうまつ]" },
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
        notes: "今週末 + へ",
      },
    ],
  },
  {
    english: "I didn't go anywhere last weekend — I just chilled out at home.",
    answers: [
      {
        segments: [
          { text: "先週[せんしゅう]の 週末[しゅうまつ]は、" },
          { text: "どこにも", blank: true },
          { text: "行[い]かなかった。うちで ごろごろして" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
          { text: "。" },
        ],
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]の 週末[しゅうまつ]は、どこにも 行[い]かなかった。うちで ごろごろしていた。",
          },
        ],
        notes: "Display answer in plain text",
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]の 週末[しゅうまつ]は、どこにも 行[い]きませんでした。うちで ごろごろしていました。",
          },
        ],
        notes: "Polite form",
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]の 週末[しゅうまつ]は、どこへも 行[い]かなかった。うちで ごろごろしていた。",
          },
        ],
        notes: "どこへも instead of どこにも",
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]の 週末[しゅうまつ]は、どこへも 行[い]きませんでした。うちで ごろごろしていました。",
          },
        ],
        notes: "どこへも polite",
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]の 週末[しゅうまつ]は、どこにも 行[い]かなかった。家[いえ]で ごろごろしていた。",
          },
        ],
        notes: "家 instead of うち",
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]の 週末[しゅうまつ]、どこにも 行[い]かなかった。うちで ごろごろしていた。",
          },
        ],
        notes: "は dropped after 週末",
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]の 週末[しゅうまつ]、どこへも 行[い]かなかった。家[いえ]で ごろごろしていた。",
          },
        ],
        notes: "どこへも, 家, は dropped",
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]の 週末[しゅうまつ]は、どこへも 行[い]きませんでした。家[いえ]で ごろごろしていました。",
          },
        ],
        notes: "どこへも, 家, polite",
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]の 週末[しゅうまつ]は、どこにも 行[い]きませんでした。家[いえ]で ごろごろしていました。",
          },
        ],
        notes: "家, polite",
      },
    ],
  },
  {
    english: "Anyone can join this club.",
    answers: [
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
      },
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
        notes: "には instead of は",
      },
      {
        segments: [
          { text: "このサークルに" },
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
        notes: "に instead of は",
      },
      {
        segments: [
          { text: "このクラブは" },
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
        notes: "クラブ instead of サークル",
      },
      {
        segments: [
          { text: "誰[だれ]でも このクラブに" },
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
        notes: "誰でも fronted + クラブに",
      },
      {
        segments: [
          { text: "誰[だれ]でも このサークルに" },
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
        notes: "誰でも fronted + サークルに",
      },
    ],
  },
  {
    english: "I'm so hungry — I'd eat anything right now.",
    answers: [
      {
        segments: [
          { text: "おなかが すいた、今[いま]は" },
          { text: "なんでも 食[た]べられる", blank: true },
        ],
      },
      {
        segments: [
          { text: "おなかが すいた、今[いま]は なんでも 食[た]べられる" },
        ],
      },
      {
        segments: [
          { text: "おなかが すいた。今[いま]は なんでも 食[た]べられる" },
        ],
      },
      {
        segments: [
          { text: "おなかが すいた。今[いま]は なんでも 食[た]べられます" },
        ],
      },
      {
        segments: [
          { text: "おなかが すいたから、今[いま]は なんでも 食[た]べられる" },
        ],
      },
      {
        segments: [
          { text: "おなかが すいたから、今[いま]は なんでも 食[た]べられます" },
        ],
      },
      {
        segments: [
          { text: "おなかが すいて、今[いま]は なんでも 食[た]べられる" },
        ],
      },
      {
        segments: [{ text: "おなかが すごく すいた。なんでも 食[た]べられる" }],
      },
      {
        segments: [
          {
            text: "すごく おなかが すいた。今[いま]は なんでも 食[た]べられる",
          },
        ],
      },
    ],
  },
  {
    english: "No one was at the library yesterday, so I went home early.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]、図書館[としょかん]に" },
          { text: "だれも いなかった", blank: true },
          { text: "から、早[はや]く 帰[かえ]った" },
        ],
      },
      {
        segments: [
          {
            text: "昨日[きのう]、図書館[としょかん]にだれもいなかったから、早[はや]く 帰[かえ]った",
          },
        ],
      },
      {
        segments: [
          {
            text: "昨日[きのう]、図書館[としょかん]にはだれもいなかったから、早[はや]く 帰[かえ]った",
          },
        ],
      },
      {
        segments: [
          {
            text: "昨日[きのう]、図書館[としょかん]にだれもいなかったので、早[はや]く 帰[かえ]った",
          },
        ],
      },
      {
        segments: [
          {
            text: "昨日[きのう]、図書館[としょかん]にはだれもいなかったので、早[はや]く 帰[かえ]った",
          },
        ],
      },
      {
        segments: [
          {
            text: "昨日[きのう]は、図書館[としょかん]にだれもいなかったから、早[はや]く 帰[かえ]った",
          },
        ],
      },
      {
        segments: [
          {
            text: "昨日[きのう]は、図書館[としょかん]にはだれもいなかったから、早[はや]く 帰[かえ]った",
          },
        ],
      },
    ],
  },
  {
    english: "I can meet anytime.",
    answers: [
      {
        segments: [
          { text: "いつでも" },
          {
            text: " 会[あ]える",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は いつでも" },
          {
            text: " 会[あ]える",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は",
      },
      {
        segments: [
          { text: "いつでも 暇[ひま]だから、" },
          {
            text: " 会[あ]える",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "With 暇 context",
      },
    ],
  },
  {
    english: "Is there somewhere quieter we could study?",
    answers: [
      {
        segments: [
          { text: "どこか 静[しず]かなところで", blank: true },
          {
            text: "勉強[べんきょう]できる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "どこか 静[しず]かなところで 勉強[べんきょう]できないか" },
        ],
      },
      {
        segments: [
          { text: "どこか 静[しず]かなところで 勉強[べんきょう]しない" },
        ],
      },
      {
        segments: [
          { text: "どこか 静[しず]かなところで 勉強[べんきょう]しないか" },
        ],
      },
      {
        segments: [{ text: "静[しず]かなところが どこかに あるかな" }],
        register: "casual",
      },
      {
        segments: [{ text: "静[しず]かなところが どこかに あるか" }],
      },
      {
        segments: [
          {
            text: "どこか 静[しず]かなところで 勉強[べんきょう]できる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "With か question particle",
      },
      {
        segments: [
          {
            text: "どこか 静[しず]かなところで 勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "勉強しない variation",
      },
    ],
  },
  {
    english: "I looked everywhere, but I couldn't find my wallet.",
    answers: [
      {
        segments: [
          { text: "どこも 見[み]たけど、 財布[さいふ]が" },
          { text: "どこにも なかった", blank: true },
        ],
      },
      {
        segments: [
          { text: "どこも見[み]たけど、財布[さいふ]がどこにもなかった" },
        ],
      },
      {
        segments: [
          { text: "どこも見[み]たけど、財布[さいふ]はどこにもなかった" },
        ],
      },
      {
        segments: [
          { text: "どこも見[み]たが、財布[さいふ]がどこにもなかった" },
        ],
      },
      {
        segments: [
          { text: "どこも見[み]たが、財布[さいふ]はどこにもなかった" },
        ],
      },
      {
        segments: [
          { text: "財布[さいふ]がどこにもなかった。どこも見[み]たけど。" },
        ],
      },
    ],
  },
  {
    english:
      "No one in my family is good at cooking, so we eat out somewhere every night.",
    answers: [
      {
        segments: [
          {
            text: "家族[かぞく]の 中[なか]で 料理[りょうり]が 上手[じょうず]な 人[ひと]は",
          },
          {
            text: "だれも いない",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "から、毎晩[まいばん]" },
          { text: "どこかで", blank: true },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          {
            text: "家族[かぞく]の 中[なか]で 料理[りょうり]が 上手[じょうず]な 人[ひと]は だれも いないから、毎晩[まいばん] どこかで 食[た]べる",
          },
        ],
        notes: "base form",
      },
      {
        segments: [
          {
            text: "家族[かぞく]に 料理[りょうり]が 上手[じょうず]な 人[ひと]は だれも いないから、毎晩[まいばん] どこかで 食[た]べる",
          },
        ],
        notes: "家族に variant",
      },
      {
        segments: [
          {
            text: "家族[かぞく]の 中[なか]で 料理[りょうり]が 上手[じょうず]な 人[ひと]は だれも いないから、毎晩[まいばん] どこかへ 食[た]べに 行[い]く",
          },
        ],
        notes: "どこかへ食べに行く variant",
      },
      {
        segments: [
          {
            text: "家族[かぞく]に 料理[りょうり]が 上手[じょうず]な 人[ひと]は だれも いないから、毎晩[まいばん] どこかへ 食[た]べに 行[い]く",
          },
        ],
        notes: "家族に + どこかへ食べに行く",
      },
      {
        segments: [
          {
            text: "うちの 家族[かぞく]の 中[なか]で 料理[りょうり]が 上手[じょうず]な 人[ひと]は だれも いないから、毎晩[まいばん] どこかで 食[た]べる",
          },
        ],
        notes: "うちの家族 variant",
      },
      {
        segments: [
          {
            text: "家族[かぞく]の 中[なか]で 料理[りょうり]が 上手[じょうず]な 人[ひと]は だれも",
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "から、毎晩[まいばん] どこかで" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "base form",
      },
      {
        segments: [
          {
            text: "家族[かぞく]に 料理[りょうり]が 上手[じょうず]な 人[ひと]は だれも",
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "から、毎晩[まいばん] どこかで" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "家族に variant",
      },
      {
        segments: [
          {
            text: "家族[かぞく]の 中[なか]で 料理[りょうり]が 上手[じょうず]な 人[ひと]は だれも",
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "から、毎晩[まいばん] どこかへ 食[た]べに" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "どこかへ陀べに行く variant",
      },
      {
        segments: [
          {
            text: "家族[かぞく]に 料理[りょうり]が 上手[じょうず]な 人[ひと]は だれも",
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "から、毎晩[まいばん] どこかへ 食[た]べに" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "家族に + どこかへ食べに行く variant",
      },
      {
        segments: [
          {
            text: "うちの 家族[かぞく]の 中[なか]で 料理[りょうり]が 上手[じょうず]な 人[ひと]は だれも",
          },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "から、毎晩[まいばん] どこかで" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "うちの家族 variant",
      },
    ],
  },
  {
    english: "I want to go somewhere warm this winter — anywhere is fine.",
    answers: [
      {
        segments: [
          { text: "今年[ことし]の 冬[ふゆ]は、暖[あたた]かい" },
          { text: "どこかに 行[い]きたい", blank: true },
          { text: "。" },
          { text: "どこでもいい", blank: true },
          { text: "。" },
        ],
      },
      {
        segments: [
          {
            text: "今年[ことし]の 冬[ふゆ]は、暖[あたた]かい どこかへ 行[い]きたい。どこでもいい。",
          },
        ],
        notes: "へ instead of に",
      },
      {
        segments: [
          {
            text: "今年[ことし]の 冬[ふゆ]、暖[あたた]かい どこかに 行[い]きたい。どこでもいい。",
          },
        ],
        notes: "は dropped after 冬",
      },
      {
        segments: [
          {
            text: "今年[ことし]の 冬[ふゆ]、暖[あたた]かい どこかへ 行[い]きたい。どこでもいい。",
          },
        ],
        notes: "は dropped + へ",
      },
    ],
  },
  {
    english:
      "Takeshi said he wants to go somewhere in Italy, but I want to go anywhere in Spain.",
    hint: "Takeshi = たけし",
    answers: [
      {
        segments: [
          { text: "たけしさんはイタリアの" },
          { text: "どこかに", blank: true },
          { text: "行[い]くと 聞[き]いたけど、スペインは" },
          { text: "どこでも", blank: true },
          { text: "いい。" },
        ],
      },
      {
        segments: [
          {
            text: "たけしさんはイタリアのどこかに行[い]くと聞[き]いたけど、私はスペインはどこでもいい。",
          },
        ],
      },
      {
        segments: [
          {
            text: "たけしさんはイタリアのどこかに行[い]くと聞[き]いたけど、私はスペインのどこでもいい。",
          },
        ],
      },
      {
        segments: [
          {
            text: "たけしさんはイタリアのどこかに行[い]くって聞[き]いたけど、スペインはどこでもいい。",
          },
        ],
      },
      {
        segments: [
          {
            text: "たけしさんはイタリアのどこかに行[い]くって聞[き]いたけど、私はスペインのどこでもいい。",
          },
        ],
      },
      {
        segments: [
          {
            text: "たけしさんはイタリアのどこかに行[い]くと聞[き]いたが、スペインはどこでもいい。",
          },
        ],
      },
      {
        segments: [
          {
            text: "たけしさんはイタリアのどこかに行[い]くと聞[き]いたが、私はスペインのどこでもいい。",
          },
        ],
      },
      {
        segments: [
          {
            text: "たけしさんはイタリアのどこかへ行[い]くと聞[き]いたけど、スペインはどこでもいい。",
          },
        ],
      },
      {
        segments: [
          {
            text: "たけしさんはイタリアのどこかへ行[い]くと聞[き]いたけど、私はスペインのどこでもいい。",
          },
        ],
      },
    ],
  },
  {
    english: "I asked everyone, but no one knew where Sora had gone.",
    hint: "Sora = そら",
    answers: [
      {
        segments: [
          { text: "みんなに 聞[き]いたけど、そらさんが どこに 行[い]ったか、" },
          { text: "だれも 知[し]らなかった", blank: true },
        ],
      },
      {
        segments: [
          {
            text: "みんなに 聞[き]いたけど、そらさんが どこに 行[い]ったか、だれも 知[し]らなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "みんなに 聞[き]いたけど、そらさんが どこへ 行[い]ったか、だれも 知[し]らなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "だれにも 聞[き]いたけど、そらさんが どこに 行[い]ったか、だれも 知[し]らなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "みんなに 聞[き]いたが、そらさんが どこに 行[い]ったか、だれも 知[し]らなかった",
          },
        ],
      },
    ],
  },
  {
    english:
      "I'm free this Sunday — we could go anywhere, but somewhere with good food would be best.",
    answers: [
      {
        segments: [
          { text: "今度[こんど]の 日曜日[にちようび]は 暇[ひま]だから、" },
          {
            text: "どこでもいいけど、食[た]べ 物[もの]がおいしいどこかに 行[い]きましょう",
            blank: true,
          },
        ],
      },
      {
        segments: [
          {
            text: "今度[こんど]の 日曜日[にちようび]は 暇[ひま]だから、どこでもいいけど、食[た]べ 物[もの]がおいしいどこかに 行[い]きましょう",
          },
        ],
      },
      {
        segments: [
          {
            text: "今度[こんど]の 日曜日[にちようび]は 暇[ひま]だから、どこでもいいけど、食[た]べ 物[もの]がおいしいどこかへ 行[い]きましょう",
          },
        ],
      },
      {
        segments: [
          {
            text: "今度[こんど]の 日曜日[にちようび]、暇[ひま]だから、どこでもいいけど、食[た]べ 物[もの]がおいしいどこかに 行[い]きましょう",
          },
        ],
      },
      {
        segments: [
          {
            text: "今度[こんど]の 日曜日[にちようび]、暇[ひま]だから、どこでもいいけど、食[た]べ 物[もの]がおいしいどこかへ 行[い]きましょう",
          },
        ],
      },
      {
        segments: [
          {
            text: "今周[こんしゅう]の 日曜日[にちようび]は 暇[ひま]だから、どこでもいいけど、食[た]べ 物[もの]がおいしいどこかに 行[い]きましょう",
          },
        ],
      },
      {
        segments: [
          {
            text: "今周[こんしゅう]の 日曜日[にちようび]は 暇[ひま]だから、どこでもいいけど、食[た]べ 物[もの]がおいしいどこかへ 行[い]きましょう",
          },
        ],
      },
      {
        segments: [
          {
            text: "日曜日[にちようび]は 暇[ひま]だから、どこでもいいけど、食[た]べ 物[もの]がおいしいどこかに 行[い]きましょう",
          },
        ],
      },
      {
        segments: [
          {
            text: "今度[こんど]の 日曜日[にちようび]は 暇[ひま]だから、どこでもいいけど、おいしい 食[た]べ 物[もの]があるどこかに 行[い]きましょう",
          },
        ],
        notes: "Using おいしい食べ物がある instead of 食べ物がおいしい",
      },
    ],
  },
  {
    english:
      "Someone called while I was sleeping, but I didn't recognize the number.",
    answers: [
      {
        segments: [
          { text: "寝[ね]て" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
          { text: "時[とき]に、" },
          { text: "誰[だれ]かから", blank: true },
          { text: "電話[でんわ]があったけど、番号[ばんごう]がわからなかった" },
        ],
      },
      {
        segments: [
          {
            text: "誰[だれ]かから 電話[でんわ]があったけど、誰[だれ]かわからなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "誰[だれ]かから 電話[でんわ]があったけど、誰[だれ]だかはわからなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "誰[だれ]かから 電話[でんわ]があったけど、誰[だれ]かはわからなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "寝[ね]ていた 時[とき]に、誰[だれ]かから電話[でんわ]があったけど、番号[ばんごう]がわからなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "寝[ね]ている 間[あいだ]に、誰[だれ]かから電話[でんわ]があったけど、番号[ばんごう]がわからなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "寝[ね]ていた 間[あいだ]に、誰[だれ]かから電話[でんわ]があったけど、番号[ばんごう]がわからなかった",
          },
        ],
      },
      {
        segments: [
          {
            text: "寝[ね]ていた 時[とき]、誰[だれ]かから電話[でんわ]があったけど、番号[ばんごう]がわからなかった",
          },
        ],
      },
    ],
  },
  {
    english:
      "I want to live somewhere in Japan — anywhere is fine, as long as it's warmer than here.",
    answers: [
      {
        segments: [
          { text: "日本[にほん]の" },
          { text: "どこかに 住[す]みたい", blank: true },
          { text: "。ここより 暖[あたた]かいどこでもいい。" },
        ],
      },
      {
        segments: [
          {
            text: "日本[にほん]のどこかがいいと思[おも]います。ここより暖[あたた]かいどこでもいいです。",
          },
        ],
        notes: "Polite version",
      },
      {
        segments: [
          {
            text: "日本[にほん]のどこかに住[す]んでいるのがいいと思[おも]う。ここより暖[あたた]かいどこでもいい。",
          },
        ],
        notes: "どこかに variation with 住んでいる",
      },
      {
        segments: [
          {
            text: "日本[にほん]のどこかに 住[す]みたいです。ここより 暖[あたた]かいどこでもいいです。",
          },
        ],
        notes: "Polite form with たいです",
      },
      {
        segments: [
          {
            text: "日本[にほん]のどこかで 住[す]みたい。ここより 暖[あたた]かいどこでもいい。",
          },
        ],
        notes: "どこかで variant (in/at somewhere)",
      },
      {
        segments: [
          {
            text: "私[わたし]は 日本[にほん]のどこかに 住[す]みたい。ここより 暖[あたた]かいどこでもいい。",
          },
        ],
        notes: "Explicit subject 私は at start",
      },
      {
        segments: [
          {
            text: "私[わたし]は 日本[にほん]のどこかに 住[す]みたいです。ここより 暖[あたた]かいどこでもいいです。",
          },
        ],
        notes: "Polite with 私は",
      },
    ],
  },
  {
    english:
      "I've never been anywhere outside of Japan, so I want to go somewhere in Europe someday.",
    answers: [
      {
        segments: [
          { text: "日本[にほん]からどこにも" },
          {
            text: "行[い]かなかったから、いつかヨーロッパのどこかに行[い]くつもり",
            blank: true,
          },
          { text: "です" },
        ],
      },
      {
        segments: [
          {
            text: "日本[にほん]からどこにも行[い]かなかったから、いつかヨーロッパのどこかに行[い]くつもりです",
          },
        ],
      },
      {
        segments: [
          {
            text: "日本[にほん]からどこにも行[い]かなかったから、いつかヨーロッパのどこかへ行[い]くつもりです",
          },
        ],
      },
      {
        segments: [
          {
            text: "日本[にほん]からどこにも行[い]かなかったから、ヨーロッパのどこかにいつか行[い]くつもりです",
          },
        ],
      },
      {
        segments: [
          {
            text: "日本[にほん]からどこにも行[い]かなかったから、ヨーロッパのどこかへいつか行[い]くつもりです",
          },
        ],
      },
      {
        segments: [
          {
            text: "日本[にほん]からどこにも行[い]かなかったから、いつかヨーロッパのどこかに",
          },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "つもりだ" },
        ],
        notes: "casual explicit だ",
      },
    ],
  },
  {
    english:
      "I've heard that Hina is moving somewhere — has anyone told you more about it?",
    hint: "Hina = ひな",
    answers: [
      {
        segments: [
          { text: "ひなさんはどこかに住[す]むと 聞[き]いたけど、" },
          { text: "だれかから 何[なに]か 聞[き]きましたか", blank: true },
        ],
      },
      {
        segments: [
          {
            text: "ひなさんはどこかに住[す]むと 聞[き]いたけど、だれかから 何[なに]か 聞[き]きましたか",
          },
        ],
      },
      {
        segments: [
          {
            text: "ひなさんはどこかへ住[す]むと 聞[き]いたけど、だれかから 何[なに]か 聞[き]きましたか",
          },
        ],
        notes: "へ instead of に",
      },
      {
        segments: [
          {
            text: "ひなさんはどこかに行[い]くと 聞[き]いたけど、だれかから 何[なに]か 聞[き]きましたか",
          },
        ],
        notes: "行く instead of 住む",
      },
      {
        segments: [
          {
            text: "ひなさんはどこかに 住[す]むと 聞[き]いたけど、だれかから 何[なに]か 聞[き]いたか",
          },
        ],
        notes: "casual ending",
      },
      {
        segments: [
          {
            text: "ひなさんはどこかに 行[い]くと 聞[き]いたけど、だれかから 何[なに]か 聞[き]いたか",
          },
        ],
        notes: "行く + casual",
      },
      {
        segments: [
          {
            text: "ひなさんはどこかに 住[す]むと 聞[き]いたけど、あなたはだれかから 何[なに]か 聞[き]きましたか",
          },
        ],
        notes: "with あなたは",
      },
    ],
  },
  {
    english:
      "I haven't told anyone yet, but I'm thinking of moving somewhere outside of this town.",
    answers: [
      {
        segments: [
          {
            text: "まだ 誰[だれ]にも 話[はな]していないけど、この 町[まち]を 出[で]て どこかに 住[す]むつもり",
            blank: true,
          },
        ],
      },
      {
        segments: [
          {
            text: "まだ誰[だれ]にも話[はな]していないけど、この町[まち]を出[で]てどこかに住[す]むつもりだ",
          },
        ],
      },
      {
        segments: [
          {
            text: "まだ誰[だれ]にも話[はな]していないが、この町[まち]を出[で]てどこかに住[す]むつもりです",
          },
        ],
      },
      {
        segments: [
          {
            text: "まだ誰[だれ]にも話[はな]していませんが、この町[まち]を出[で]てどこかに住[す]むつもりです",
          },
        ],
      },
      {
        segments: [
          {
            text: "まだ誰[だれ]にも話[はな]していませんけど、この町[まち]を出[で]てどこかに住[す]むつもりです",
          },
        ],
      },
      {
        segments: [
          {
            text: "まだ誰[だれ]にも話[はな]していないけど、この町[まち]を出[で]てどこかに住[す]むつもりです",
          },
        ],
      },
      {
        segments: [
          {
            text: "まだ誰[だれ]にも話[はな]していないけど、この町[まち]を出[で]てどこかに住[す]むつもりがある",
          },
        ],
      },
      {
        segments: [
          {
            text: "まだ誰[だれ]にも話[はな]していないけど、この町[まち]を出[で]てどこかへ住[す]むつもり",
          },
        ],
      },
      {
        segments: [
          {
            text: "まだ 誰[だれ]にも 話[はな]していないが、この 町[まち]を 出[で]てどこかに 住[す]むつもりだ",
          },
        ],
      },
      {
        segments: [
          {
            text: "まだ 誰[だれ]にも 話[はな]していないけど、この 町[まち]を 出[で]てどこかへ 住[す]むつもりだ",
          },
        ],
      },
      {
        segments: [
          {
            text: "まだ 誰[だれ]にも 話[はな]していないけど、この 町[まち]を 出[で]てどこかへ 住[す]むつもりです",
          },
        ],
      },
    ],
  },
  {
    english:
      "I haven't met anyone interesting lately — I want to meet someone new somewhere outside of this town.",
    answers: [
      {
        segments: [
          { text: "このごろ、面白[おもしろ]い 人[ひと]に" },
          { text: "誰[だれ]も 会[あ]って", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "。この 町[まち]を 出[で]て、" },
          {
            text: "どこかで 新[あたら]しい 人[ひと]に 会[あ]いたい",
            blank: true,
          },
        ],
      },
      {
        segments: [
          {
            text: "このごろ、面白[おもしろ]い 人[ひと]に誰[だれ]も 会[あ]っていない。この 町[まち]を 出[で]て、どこかで 新[あたら]しい 人[ひと]に 会[あ]いたい",
          },
        ],
      },
      {
        segments: [
          {
            text: "このごろ、面白[おもしろ]い 人[ひと]に誰[だれ]も会[あ]っていない。どこか、この 町[まち]じゃないところで 新[あたら]しい 人[ひと]に 会[あ]いたい",
          },
        ],
      },
      {
        segments: [
          {
            text: "このごろ、面白[おもしろ]い 人[ひと]に誰[だれ]も会[あ]っていない。この 町[まち]を 出[で]て、どこかに 新[あたら]しい 人[ひと]に 会[い]に行[い]きたい",
          },
        ],
      },
    ],
  },
]
