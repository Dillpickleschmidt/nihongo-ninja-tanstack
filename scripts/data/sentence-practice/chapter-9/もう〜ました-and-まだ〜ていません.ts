import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I haven't eaten breakfast yet.",
    answers: [
      {
        segments: [
          { text: "朝[あさ]ご 飯[はん]は" },
          { text: "まだ", blank: true },
          { text: " 食[た]べて", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "まだ with 朝ご飯 as the topic",
      },
      {
        segments: [
          { text: "まだ", blank: true },
          { text: "朝[あさ]ご 飯[はん]を 食[た]べて", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "まだ moved to front; を particle instead of は",
      },
      {
        segments: [
          { text: "朝[あさ]ご 飯[はん]を まだ", blank: true },
          { text: " 食[た]べて", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "を particle; まだ after を phrase",
      },
      {
        segments: [
          { text: "私[わたし]は 朝[あさ]ご 飯[はん]を" },
          { text: "まだ", blank: true },
          { text: " 食[た]べて", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は subject; を particle on 朝ごはん",
      },
      {
        segments: [
          { text: "私[わたし]は 朝[あさ]ご 飯[はん]は" },
          { text: "まだ", blank: true },
          { text: " 食[た]べて", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Explicit 私は subject; は particle on 朝ごはん (double-は contrastive nuance)",
      },
    ],
  },
  {
    english: "Is Kenji home already?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんはもう 家[いえ]に" },
          {
            text: " 帰[かえ]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes:
          'Using 帰る (to return home) in past tense question — "Did Kenji already return home?"',
      },
      {
        segments: [
          { text: "けんじさんはもう" },
          {
            text: " 帰[かえ]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "Without 家に",
      },
      {
        segments: [
          { text: "けんじさんはもう 家[いえ]に" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes:
          'Using いる (to be at home) — "Is Kenji already home?" present state',
      },

      {
        segments: [
          { text: "けんじさんはもう 家[いえ]に" },
          {
            text: " 帰[かえ]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending (irregular verb)",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "の" },
          { text: "か" },
        ],
        register: "casual",
        notes: "の added before か for a softer question",
      },
      {
        segments: [
          { text: "けんじさんはもう 家[いえ]に 帰[かえ]って" },
          {
            text: "くる",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "帰ってきた emphasizes coming back home",
      },
      {
        segments: [
          { text: "けんじさんはもう" },
          { text: " 家[いえ]", blank: true },
          { text: "ですか" },
        ],
        notes: "Conversational: もう家ですか",
      },
    ],
  },
  {
    english: "I still have homework, so I'm not going out tonight.",
    answers: [
      {
        segments: [
          { text: "まだ 宿題[しゅくだい]が", blank: true },
          { text: "ある" },
          { text: "から、 今晩[こんばん]は" },
          {
            text: " 出[で]かける",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "まだ with 宿題があるから",
      },
      {
        segments: [
          { text: "まだ 宿題[しゅくだい]が", blank: true },
          { text: "ある" },
          { text: "から、 今夜[こんや]は" },
          {
            text: " 出[で]かける",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: '今夜 instead of 今晩 for "tonight"',
      },
      {
        segments: [
          { text: "宿題[しゅくだい]がまだあるから、 今晩[こんばん]は" },
          {
            text: " 出[で]かける",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "まだ after 宿題が",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]がまだ 終[お]わって" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "から、 今晩[こんばん]は" },
          {
            text: " 出[で]かける",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "宿題がまだ終わっていない phrasing",
      },
      {
        segments: [
          { text: "まだ 宿題[しゅくだい]が 終[お]わって", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "から、 今晩[こんばん]は", blank: true },
          {
            text: " 出[で]かける",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "まだ before 宿題が with 終わっていない",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]がまだあるから、 今夜[こんや]は" },
          {
            text: " 出[で]かける",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "まだ after 宿題が, with 今夜",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]がまだ 終[お]わって" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "から、 今夜[こんや]は" },
          {
            text: " 出[で]かける",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "宿題がまだ終わっていない with 今夜",
      },
      {
        segments: [
          { text: "まだ 宿題[しゅくだい]が", blank: true },
          { text: "あるから、 今晩[こんばん]" },
          {
            text: " 出[で]かける",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        register: "casual",
        notes: "Without は after 今晩",
      },
      {
        segments: [
          { text: "まだ 宿題[しゅくだい]が", blank: true },
          { text: "あるので、 今夜[こんや]は" },
          {
            text: " 出[で]かける",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "ので (more neutral connector) instead of から",
      },
      {
        segments: [
          { text: "まだ 宿題[しゅくだい]が", blank: true },
          { text: "あるので、 今晩[こんばん]は" },
          {
            text: " 出[で]かける",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "ので + 今晩",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]がまだあるので、 今晩[こんばん]は" },
          {
            text: " 出[で]かける",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "宿題がまだあるので",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]がまだ 終[お]わって" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "ので、 今晩[こんばん]は" },
          {
            text: " 出[で]かける",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "宿題がまだ終わっていないので",
      },
    ],
  },
  {
    english: "I already watched that movie, but I still haven't read the book.",
    answers: [
      {
        segments: [
          { text: "その 映画[えいが]は" },
          { text: "もう 見[み]た", blank: true },
          { text: "けど、 本[ほん]はまだ 読[よ]んで" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "もう見た + まだ読んでいない, with けど",
      },
      {
        segments: [
          { text: "あの 映画[えいが]は" },
          { text: "もう 見[み]た", blank: true },
          { text: "けど、 本[ほん]はまだ 読[よ]んで" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: 'あの instead of その for "that movie"',
      },
      {
        segments: [
          { text: "私[わたし]はその 映画[えいが]を" },
          { text: "もう 見[み]た", blank: true },
          { text: "けど、 本[ほん]はまだ 読[よ]んで" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes:
          "私は subject explicit, を instead of は for movie (object marker)",
      },
      {
        segments: [
          { text: "その 映画[えいが]を" },
          { text: "もう 見[み]た", blank: true },
          { text: "けど、 本[ほん]はまだ 読[よ]んで" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes:
          "を instead of は for movie (direct object marker, no topic emphasis)",
      },
      {
        segments: [
          { text: "その 映画[えいが]は" },
          { text: "もう 見[み]た", blank: true },
          { text: "が、 本[ほん]はまだ 読[よ]んで" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: 'が instead of けど/でも for "but" (more formal conjunction)',
      },

      {
        segments: [
          { text: "その 映画[えいが]は" },
          { text: "もう 見[み]た", blank: true },
          { text: "けど、 本[ほん]をまだ 読[よ]んで" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "本を (direct object を) instead of 本は for the book",
      },
      {
        segments: [
          { text: "その 映画[えいが]はもう" },
          {
            text: "見[み]る",
            blank: true,
            conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" },
          },
          { text: "が、 本[ほん]はまだ" },
          { text: "読[よ]んで", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "が (more formal connector) instead of けど",
      },
      {
        segments: [
          { text: "その 映画[えいが]は" },
          { text: "もう 見[み]た", blank: true },
          { text: "けど、 まだ 本[ほん]は 読[よ]んで" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "まだ before 本は",
      },
      {
        segments: [
          { text: "その 映画[えいが]は" },
          { text: "もう 見[み]た", blank: true },
          { text: "けど、 まだ 本[ほん]を 読[よ]んで" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "まだ before 本を",
      },
    ],
  },
  {
    english: "I still haven't done the laundry.",
    answers: [
      {
        segments: [
          { text: "まだ 洗濯[せんたく]", blank: true },
          { text: "して" },
          {
            text: "いる", blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "まだ洗濯していない phrasing",
      },
      {
        segments: [
          { text: "まだ 洗濯[せんたく]を", blank: true },
          { text: "して" },
          {
            text: "いる", blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "With を after 洗濯",
      },
      {
        segments: [
          { text: "洗濯[せんたく]はまだ", blank: true },
          { text: "して" },
          {
            text: "いる", blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "洗濯はまだ",
      },
      {
        segments: [
          { text: "洗濯[せんたく]をまだ", blank: true },
          { text: "して" },
          {
            text: "いる", blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "洗濯をまだ",
      },
    ],
  },
  {
    english: "Has Takeshi already called his host family?",
    hint: "Takeshi = たけし",
    answers: [
      {
        segments: [
          { text: "たけしさんはもうホストファミリーに" },
          {
            text: " 電話[でんわ]する",
            blank: true,
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "たけしさんはもうホストファミリーに 電話[でんわ]を" },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "Using を particle: 電話を + した",
      },
      {
        segments: [
          { text: "たけしさんはもうホストファミリーへ" },
          {
            text: " 電話[でんわ]する",
            blank: true,
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "Using へ instead of に particle with ホストファミリー",
      },
    ],
  },
  {
    english: "I already bought the tickets, but Saki still hasn't called me.",
    hint: "Saki = さき",
    answers: [
      {
        segments: [
          { text: "チケットは" },
          { text: "もう" },
          {
            text: " 買[か]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、さきさんはまだ 私[わたし]に 電話[でんわ]して" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "チケットはもう買った + さきさんはまだ電話していない",
      },
      {
        segments: [
          { text: "もう チケットを" },
          {
            text: " 買[か]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、さきさんはまだ 私[わたし]に 電話[でんわ]して" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "もう at start, チケットを (を instead of は)",
      },
      {
        segments: [
          { text: "チケットは" },
          { text: "もう" },
          {
            text: " 買[か]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、さきさんはまだ 私[わたし]に 電話[でんわ]して" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "が instead of けど as conjunction",
      },
      {
        segments: [
          { text: "もう チケットを" },
          {
            text: " 買[か]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、さきさんはまだ 私[わたし]に 電話[でんわ]して" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "もう at start, を particle, が conjunction",
      },
      {
        segments: [
          { text: "チケットは" },
          { text: "もう" },
          {
            text: " 買[か]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、さきさんはまだ 電話[でんわ]して" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "私に omitted (implied), チケットは, けど",
      },
      {
        segments: [
          { text: "もう チケットを" },
          {
            text: " 買[か]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、さきさんはまだ 電話[でんわ]して" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "もう at start, を particle, 私に omitted, けど",
      },
      {
        segments: [
          { text: "チケットは" },
          { text: "もう" },
          {
            text: " 買[か]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、さきさんはまだ 電話[でんわ]して" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "が conjunction, 私に omitted, チケットは",
      },
      {
        segments: [
          { text: "もう チケットを" },
          {
            text: " 買[か]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、さきさんはまだ 電話[でんわ]して" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "もう at start, を, が conjunction, 私に omitted",
      },
      {
        segments: [
          { text: "チケットは" },
          { text: "もう" },
          {
            text: " 買[か]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、さきさんはまだ 私[わたし]に 電話[でんわ]をして" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          "電話をして (を object marker added to 電話), チケットは, けど, 私に",
      },
      {
        segments: [
          { text: "私[わたし]はもう チケットを" },
          {
            text: " 買[か]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、さきさんはまだ 私[わたし]に 電話[でんわ]して" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "私は explicit subject at start, チケットを, けど",
      },
      {
        segments: [
          { text: "私[わたし]はもう チケットを" },
          {
            text: " 買[か]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、さきさんはまだ 私[わたし]に 電話[でんわ]して" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "私は at start, チケットを, が conjunction",
      },
      {
        segments: [
          { text: "チケットはもう 買[か]ってありますけど、", blank: true },
          { text: "さきさんはまだ 私[わたし]に 電話[でんわ]して" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "買ってあります resultant-state phrasing",
      },
      {
        segments: [
          { text: "チケットはもう" },
          {
            text: " 買[か]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、さきさんからはまだ 電話[でんわ]が" },
          { text: "ありません", blank: true },
        ],
        notes: "さきさんからはまだ電話がありません",
      },
    ],
  },
  {
    english:
      "I already washed the vegetables, but I still haven't made dinner.",
    answers: [
      {
        segments: [
          { text: "野菜[やさい]はもう" },
          {
            text: " 洗[あら]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、 夕[ゆう]ご 飯[はん]はまだ 作[つく]って" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "夕ご飯 instead of 晩ご飯",
      },
      {
        segments: [
          { text: "野菜[やさい]はもう" },
          {
            text: " 洗[あら]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、 晩[ばん]ご 飯[はん]はまだ 作[つく]って" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using が instead of けど to connect clauses; 晩ご飯.",
      },
      {
        segments: [
          { text: "野菜[やさい]はもう" },
          {
            text: " 洗[あら]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、 夕[ゆう]ご 飯[はん]はまだ 作[つく]って" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using が to connect; 夕ご飯 for dinner.",
      },

      {
        segments: [
          { text: "野菜[やさい]はもう" },
          {
            text: " 洗[あら]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、ご 飯[はん]はまだ 作[つく]って" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "ご飯 alone (meal) instead of 晩ご飯/夕ご飯; けど; 作る.",
      },
      {
        segments: [
          { text: "野菜[やさい]はもう" },
          {
            text: " 洗[あら]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、 晩[ばん]ご 飯[はん]はまだ 作[つく]って" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "晩ご飯 + けど + 作る",
      },
      {
        segments: [
          { text: "もう 野菜[やさい]は" },
          {
            text: " 洗[あら]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、 夕[ゆう]ご 飯[はん]はまだ 作[つく]って" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "もう野菜は word order",
      },
      {
        segments: [
          { text: "野菜[やさい]はもう 洗[あら]ってありますけど、", blank: true },
          { text: "夕[ゆう]ご 飯[はん]はまだ 作[つく]って" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "洗ってあります resultant-state phrasing",
      },
      {
        segments: [
          { text: "野菜[やさい]はもう" },
          {
            text: " 洗[あら]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、 夕飯[ゆうはん]はまだ 作[つく]って" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "夕飯 instead of 夕ご飯",
      },
    ],
  },
  {
    english:
      "I already read the magazine, but I still haven't written the essay.",
    answers: [
      {
        segments: [
          { text: "雑誌[ざっし]はもう" },
          {
            text: " 読[よ]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、 作文[さくぶん]はまだ 書[か]いて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "雑誌はもう読んだ + 作文はまだ書いていない, with けど",
      },
      {
        segments: [
          { text: "雑誌[ざっし]はもう" },
          {
            text: " 読[よ]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、 作文[さくぶん]はまだ 書[か]いて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Same as above but が conjunction instead of けど",
      },
      {
        segments: [
          { text: "私[わたし]は 雑誌[ざっし]をもう" },
          {
            text: " 読[よ]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、 作文[さくぶん]はまだ 書[か]いて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          "私は subject added, 雑誌を object marker instead of topic は, けど conjunction",
      },
      {
        segments: [
          { text: "私[わたし]は 雑誌[ざっし]をもう" },
          {
            text: " 読[よ]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、 作文[さくぶん]はまだ 書[か]いて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "私は subject, 雑誌を object marker, が conjunction",
      },
      {
        segments: [
          { text: "雑誌[ざっし]をもう" },
          {
            text: " 読[よ]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、 作文[さくぶん]はまだ 書[か]いて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "雑誌を object marker (no 私は), 作文は topic, けど",
      },
      {
        segments: [
          { text: "雑誌[ざっし]をもう" },
          {
            text: " 読[よ]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、 作文[さくぶん]はまだ 書[か]いて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "雑誌を object marker, が conjunction",
      },
      {
        segments: [
          { text: "雑誌[ざっし]はもう" },
          {
            text: " 読[よ]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、まだ 作文[さくぶん]を 書[か]いて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          "まだ moved before 作文を (object-marked) in the second clause; は topic on 雑誌; けど",
      },
      {
        segments: [
          { text: "雑誌[ざっし]はもう" },
          {
            text: " 読[よ]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、まだ 作文[さくぶん]を 書[か]いて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "まだ moved before 作文を, が conjunction, 雑誌は topic",
      },
      {
        segments: [
          { text: "雑誌[ざっし]はもう 読[よ]んでありますけど、", blank: true },
          { text: "作文[さくぶん]はまだ 書[か]いて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "読んであります resultant-state phrasing",
      },
    ],
  },
  {
    english: "Has the concert already started?",
    answers: [
      {
        segments: [
          { text: "コンサートはもう", blank: true },
          {
            text: " 始[はじ]まる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "コンサートは + もう word order",
      },

      {
        segments: [
          { text: "コンサートがもう", blank: true },
          {
            text: " 始[はじ]まる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "が instead of は: コンサートが + もう",
      },

      {
        segments: [
          { text: "コンサートはもう", blank: true },
          {
            text: " 始[はじ]まる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "の" },
          { text: "か" },
        ],
        register: "casual",
        notes: "Soft question with の at the end: もう始まったの？",
      },
      {
        segments: [
          { text: "コンサートがもう", blank: true },
          {
            text: " 始[はじ]まる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "の" },
          { text: "か" },
        ],
        register: "casual",
        notes: "が + の soft question: コンサートがもう始まったの？",
      },
      {
        segments: [
          { text: "コンサートはもう 始[はじ]まって", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "始まっていますか",
      },
    ],
  },
  {
    english: "I still haven't answered the questionnaire.",
    answers: [
      {
        segments: [
          { text: "アンケートに" },
          { text: "まだ", blank: true },
          { text: " 答[こた]えて", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "に marks the questionnaire as the target",
      },
      {
        segments: [
          { text: "私[わたし]はまだアンケートに" },
          { text: " 答[こた]えて", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Explicit 私は subject added at the start",
      },
      {
        segments: [
          { text: "アンケートはまだ" },
          { text: " 答[こた]えて", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "アンケートは topic-marked",
      },
    ],
  },
  {
    english: "Yuki still hasn't taken a shower yet.",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "ゆきさんはまだシャワーを" },
          { text: " 浴[あ]びて", blank: true },
          {
            text: "いる", blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "ゆきさんは as the topic",
      },

      {
        segments: [
          { text: "ゆきさんはシャワーをまだ" },
          { text: " 浴[あ]びて", blank: true },
          {
            text: "いる", blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          "まだ placed after the object シャワーを, still natural Japanese",
      },
      {
        segments: [
          { text: "ゆきさんはまだシャワーに" },
          { text: " 入[はい]って", blank: true },
          {
            text: "いる", blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "シャワーに入っていない",
      },
    ],
  },
  {
    english: "I still haven't written in my diary today.",
    answers: [
      {
        segments: [
          { text: "今日[きょう]は まだ 日記[にっき]を 書[か]いて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "今日 is marked with は",
      },
      {
        segments: [
          { text: "今日[きょう]は まだ 日記[にっき]に 書[か]いて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          'に instead of を — writing "in/into" the diary (に marks the diary as destination/container)',
      },
      {
        segments: [
          { text: "まだ 今日[きょう]の 日記[にっき]を 書[か]いて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          '今日の日記 — "today\'s diary (entry)" using の to connect 今日 directly to 日記, まだ fronted',
      },
      {
        segments: [
          { text: "まだ 今日[きょう]の 日記[にっき]に 書[か]いて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: '今日の日記に — "in today\'s diary" using に, まだ fronted',
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]まだ 日記[にっき]を 書[か]いて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "私は at the start, with 今日まだ order",
      },
      {
        segments: [
          { text: "まだ 今日[きょう]は 日記[にっき]を 書[か]いて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "まだ今日は",
      },
      {
        segments: [
          { text: "今日[きょう]の 日記[にっき]はまだ 書[か]いて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "今日の日記はまだ",
      },
      {
        segments: [
          { text: "今日[きょう]はまだ 日記[にっき]を つけて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "日記をつける",
      },
    ],
  },
  {
    english: "I already took a shower, but I still haven't done my homework.",
    answers: [
      {
        segments: [
          { text: "もう", blank: true },
          { text: "シャワーを 浴[あ]びたけど、" },
          { text: "まだ", blank: true },
          { text: " 宿題[しゅくだい]を" },
          { text: "して" },
          {
            text: "いる", blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "もう + past clause, then まだ宿題をしていない",
      },
      {
        segments: [
          { text: "もう", blank: true },
          { text: "シャワーを 浴[あ]びたが、" },
          { text: "まだ", blank: true },
          { text: " 宿題[しゅくだい]を" },
          { text: "して" },
          {
            text: "いる", blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          "が instead of けど as the conjunction (more formal/written style)",
      },
      {
        segments: [
          { text: "もう", blank: true },
          { text: "シャワーを 浴[あ]びたけど、" },
          { text: "まだ", blank: true },
          { text: " 宿題[しゅくだい]は" },
          { text: "して" },
          {
            text: "いる", blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          "宿題は (topicalized with は) instead of 宿題を — けど conjunction",
      },
      {
        segments: [
          { text: "もう", blank: true },
          { text: "シャワーを 浴[あ]びたが、" },
          { text: "まだ", blank: true },
          { text: " 宿題[しゅくだい]は" },
          { text: "して" },
          {
            text: "いる", blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "が conjunction + 宿題は topicalized",
      },
      {
        segments: [
          { text: "シャワーは" },
          { text: "もう", blank: true },
          { text: " 浴[あ]びたけど、" },
          { text: "まだ", blank: true },
          { text: " 宿題[しゅくだい]を" },
          { text: "して" },
          {
            text: "いる", blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          "シャワーは もう — topicalizing シャワー at the start; けど conjunction, 宿題を",
      },
      {
        segments: [
          { text: "シャワーは" },
          { text: "もう", blank: true },
          { text: " 浴[あ]びたが、" },
          { text: "まだ", blank: true },
          { text: " 宿題[しゅくだい]を" },
          { text: "して" },
          {
            text: "いる", blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "シャワーは もう + が conjunction + 宿題を",
      },
      {
        segments: [
          { text: "シャワーは" },
          { text: "もう", blank: true },
          { text: " 浴[あ]びたけど、" },
          { text: "まだ", blank: true },
          { text: " 宿題[しゅくだい]は" },
          { text: "して" },
          {
            text: "いる", blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Both シャワーは and 宿題は topicalized; けど conjunction",
      },
      {
        segments: [
          { text: "もう", blank: true },
          { text: "シャワーを 浴[あ]びたけど、" },
          { text: "まだ", blank: true },
          { text: " 宿題[しゅくだい]を" },
          { text: "やって" },
          {
            text: "いる", blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "やる instead of する, with けど",
      },
      {
        segments: [
          { text: "もう", blank: true },
          { text: "シャワーを 浴[あ]びたが、" },
          { text: "まだ", blank: true },
          { text: " 宿題[しゅくだい]を" },
          { text: "やって" },
          {
            text: "いる", blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "やる instead of する, with が",
      },
      {
        segments: [
          { text: "シャワーは" },
          { text: "もう", blank: true },
          { text: " 浴[あ]びたけど、" },
          { text: "まだ", blank: true },
          { text: " 宿題[しゅくだい]を" },
          { text: "やって" },
          {
            text: "いる", blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "シャワーは as the topic, やる instead of する",
      },
      {
        segments: [
          { text: "シャワーはもう 済[す]ませましたけど、", blank: true },
          { text: "まだ" },
          { text: " 宿題[しゅくだい]を" },
          { text: "して" },
          {
            text: "いる", blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "シャワーを済ませる",
      },
      {
        segments: [
          { text: "もうシャワーに 入[はい]りましたけど、", blank: true },
          { text: "まだ" },
          { text: " 宿題[しゅくだい]を" },
          { text: "して" },
          {
            text: "いる", blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "シャワーに入る",
      },
    ],
  },
  {
    english: "Has the exam still not finished?",
    answers: [
      {
        segments: [
          { text: "試験[しけん]は" },
          { text: "まだ", blank: true },
          { text: " 終[お]わって", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "試験 for exam",
      },
      {
        segments: [
          { text: "テストは" },
          { text: "まだ", blank: true },
          { text: " 終[お]わって", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using テスト instead of 試験 for exam",
      },

    ],
  },
  {
    english: "Has Hana already gone to sleep?",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "はなさんはもう", blank: true },
          {
            text: " 寝[ね]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "もう with past tense question",
      },

      {
        segments: [
          { text: "はなさんはもう" },
          {
            text: " 寝[ね]る",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "かな" },
        ],
        notes:
          'かな ending — wondering/musing tone ("I wonder if Hana has already gone to sleep")',
        register: "casual",
      },
      {
        segments: [
          { text: "はなさんはもう 寝[ね]て", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "寝ていますか resultant-state phrasing",
      },
    ],
  },
  {
    english: "Has Riku already eaten lunch?",
    hint: "Riku = りく",
    answers: [
      {
        segments: [
          { text: "りくさんはもう 昼[ひる]ご 飯[はん]を" },
          {
            text: " 食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "もう with past tense question",
      },
      {
        segments: [
          { text: "りくさんはもう 昼[ひる]ご 飯[はん]を" },
          {
            text: " 食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "の" },
          { text: "か" },
        ],
        register: "casual",
        notes: "Casual question with の for added nuance/curiosity",
      },
      {
        segments: [
          { text: "りくさんはもう 昼[ひる]ご 飯[はん]を" },
          {
            text: " 食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "のか" },
        ],
        register: "casual",
        notes: "Question with のか for a more direct/probing tone",
      },
      {
        segments: [
          { text: "りくさんはもう お 昼[ひる]を" },
          {
            text: " 食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "お昼 instead of 昼ご飯",
      },
      {
        segments: [
          { text: "りくさんはもう 昼食[ちゅうしょく]を" },
          {
            text: " 食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "昼食 instead of 昼ご飯",
      },
    ],
  },
  {
    english:
      "I already bought a boxed lunch, but I still haven't eaten it yet.",
    answers: [
      {
        segments: [
          { text: "お 弁当[べんとう]はもう" },
          { text: " 買[か]った", blank: true },
          { text: "けど、まだ" },
          { text: " 食[た]べて", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "お弁当は as the topic",
      },
      {
        segments: [
          { text: "お 弁当[べんとう]は" },
          { text: "もう", blank: true },
          { text: " 買[か]ったが、" },
          { text: "まだ 食[た]べて", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "が instead of けど",
      },
      {
        segments: [
          { text: "お 弁当[べんとう]を" },
          { text: "もう", blank: true },
          { text: " 買[か]ったけど、" },
          { text: "まだ 食[た]べて", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using を instead of は for お弁当",
      },
      {
        segments: [
          { text: "弁当[べんとう]はもう 買[か]ったけど、" },
          { text: "まだ 食[た]べて", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using 弁当 without お prefix",
      },
      {
        segments: [
          { text: "もう お 弁当[べんとう]を 買[か]ったけど、" },
          { text: "まだ 食[た]べて", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "もう at sentence start, with を",
      },
      {
        segments: [
          { text: "もう お 弁当[べんとう]は 買[か]ったけど、" },
          { text: "まだ 食[た]べて", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "もう placed before お弁当は (front position)",
      },
      {
        segments: [
          { text: "弁当[べんとう]はもう 買[か]ったが、" },
          { text: "まだ 食[た]べて", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Using 弁当 without お prefix, が (but)",
      },
      {
        segments: [
          { text: "お 弁当[べんとう]を" },
          { text: "もう", blank: true },
          { text: " 買[か]ったが、" },
          { text: "まだ 食[た]べて", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "を instead of は, with が",
      },
      {
        segments: [
          { text: "お 弁当[べんとう]はもう 買[か]いましたけど、", blank: true },
          { text: "まだ 食[た]べて", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "買いましたけど",
      },
      {
        segments: [
          { text: "お 弁当[べんとう]はもう 買[か]ってありますけど、", blank: true },
          { text: "まだ 食[た]べて", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "買ってあります resultant-state phrasing",
      },
    ],
  },
  {
    english: "I still have money, so let's buy a souvenir!",
    answers: [
      {
        segments: [
          { text: "まだ", blank: true },
          { text: "お 金[かね]があるから、お 土産[みやげ]を" },
          {
            text: " 買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "まだお金があるから",
      },
      {
        segments: [
          { text: "お 金[かね]が" },
          { text: "まだ", blank: true },
          { text: "あるから、お 土産[みやげ]を" },
          {
            text: " 買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "まだ placed after お金が (adverb position variation)",
      },
      {
        segments: [
          { text: "まだ", blank: true },
          { text: "お 金[かね]があるから、 土産[みやげ]を" },
          {
            text: " 買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 土産 instead of お土産",
      },
      {
        segments: [
          { text: "まだ", blank: true },
          { text: " 金[かね]があるから、お 土産[みやげ]を" },
          {
            text: " 買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "casual",
        notes: "金 instead of お金",
      },
      {
        segments: [
          { text: "まだ", blank: true },
          { text: "お 金[かね]がある。だから、お 土産[みやげ]を" },
          {
            text: " 買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using だから as a sentence connector instead of から clause",
      },
      {
        segments: [
          { text: "お 金[かね]が" },
          { text: "まだ", blank: true },
          { text: "ある。だから、お 土産[みやげ]を" },
          {
            text: " 買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "まだ after お金が + だから sentence connector",
      },
      {
        segments: [
          { text: "まだ", blank: true },
          { text: "お 金[かね]があるので、お 土産[みやげ]を" },
          {
            text: " 買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "ので instead of から",
      },
      {
        segments: [
          { text: "お 金[かね]が" },
          { text: "まだ", blank: true },
          { text: "あるので、お 土産[みやげ]を" },
          {
            text: " 買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "お金がまだあるので",
      },
      {
        segments: [
          { text: "まだ", blank: true },
          { text: "お 金[かね]が 残[のこ]っているから、お 土産[みやげ]を" },
          {
            text: " 買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "volitional",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "お金が残っている",
      },
    ],
  },
  {
    english: "I'm not free anymore, so I still haven't memorized the kanji.",
    answers: [
      {
        segments: [
          { text: "もう", blank: true },
          { text: " 暇[ひま]じゃないから、" },
          { text: "まだ", blank: true },
          { text: " 漢字[かんじ]を 覚[おぼ]えて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "漢字を as the object",
      },
      {
        segments: [
          { text: "もう", blank: true },
          { text: " 暇[ひま]じゃないから、 漢字[かんじ]は" },
          { text: "まだ", blank: true },
          { text: " 覚[おぼ]えて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Using は for contrastive topic on 漢字",
      },
      {
        segments: [
          { text: "もう", blank: true },
          { text: " 暇[ひま]じゃないから、 漢字[かんじ]を" },
          { text: "まだ", blank: true },
          { text: " 覚[おぼ]えて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "まだ placed after 漢字を (object-first order)",
      },
      {
        segments: [
          { text: "もう", blank: true },
          { text: " 暇[ひま]じゃない。だから" },
          { text: "まだ", blank: true },
          { text: " 漢字[かんじ]を 覚[おぼ]えて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Using だから as a separate conjunction instead of から",
      },
      {
        segments: [
          { text: "もう", blank: true },
          { text: " 暇[ひま]じゃない。だから 漢字[かんじ]は" },
          { text: "まだ", blank: true },
          { text: " 覚[おぼ]えて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "だから conjunction with は on 漢字 for contrastive topic",
      },
      {
        segments: [
          { text: "もう", blank: true },
          { text: " 暇[ひま]じゃない。だから 漢字[かんじ]を" },
          { text: "まだ", blank: true },
          { text: " 覚[おぼ]えて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "だから conjunction with を on 漢字, まだ after object",
      },
      {
        segments: [
          { text: "もう", blank: true },
          { text: " 時間[じかん]がないから、" },
          { text: "まだ", blank: true },
          { text: " 漢字[かんじ]を 覚[おぼ]えて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "もう時間がないから",
      },
      {
        segments: [
          { text: "もう", blank: true },
          { text: " 暇[ひま]な 時間[じかん]がないから、" },
          { text: "まだ", blank: true },
          { text: " 漢字[かんじ]を 覚[おぼ]えて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "もう暇な時間がないから",
      },
      {
        segments: [
          { text: "もう", blank: true },
          { text: " 自由[じゆう]な 時間[じかん]がないから、" },
          { text: "まだ", blank: true },
          { text: " 漢字[かんじ]を 覚[おぼ]えて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "もう自由な時間がないから",
      },
    ],
  },
]
