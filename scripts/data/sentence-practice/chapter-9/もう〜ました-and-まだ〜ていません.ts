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
        notes: "Standard: まだ～ていない/ていません with topic は on 朝ごはん",
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
        notes:
          'Dropping 家に — natural casual shorthand, "Did Kenji already come home?"',
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
          { text: "もう けんじさんは 家[いえ]に" },
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
          "もう moved to front of sentence — natural alternative word order, with 家に",
      },
      {
        segments: [
          { text: "もう けんじさんは" },
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
        notes: "もう at the start, dropping 家に — very natural casual",
      },
      {
        segments: [
          { text: "もう けんじさんは 家[いえ]に" },
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
        notes: "もう at the front, using いる — word order variation",
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
        notes: "Using の to soften the question — casual, gentle tone",
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
          { text: "か" },
        ],
        notes: "Polite question with か — explicit formal question form",
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
        notes:
          "Using 帰ってきた (came back home) — て-form of 帰る + conjugated くる, emphasizes movement toward home",
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
        notes: "Core variation: まだ + noun + がある + から",
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
          { text: "まだ 宿題[しゅくだい]があるから、 今晩[こんばん]は" },
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
        notes:
          "Blank on the verb 出かける (negative) — different blank placement",
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
        notes: "まだ after 宿題が (topic-first word order), blank on verb",
      },
      {
        segments: [
          {
            text: "宿題[しゅくだい]がまだ 終[お]わっていないから、 今晩[こんばん]は",
          },
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
        notes:
          "まだ～ていない structure: 宿題がまだ終わっていない (homework still hasn't ended)",
      },
      {
        segments: [
          {
            text: "まだ 宿題[しゅくだい]が 終[お]わっていないから、 今晩[こんばん]は",
            blank: true,
          },
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
        notes:
          "まだ before the noun, blank on the まだ clause, まだ～ていない structure",
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
        notes: 'まだ after が (noun-first), 今夜 for "tonight", blank on verb',
      },
      {
        segments: [
          {
            text: "宿題[しゅくだい]がまだ 終[お]わっていないから、 今夜[こんや]は",
          },
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
        notes:
          "まだ～ていない (homework still hasn't ended), 今夜, blank on verb",
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
        notes: "は dropped after 今晩 (more casual particle drop)",
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
    ],
  },
  {
    english: "I already watched that movie, but I still haven't read the book.",
    answers: [
      {
        segments: [
          { text: "その 映画[えいが]は" },
          { text: "もう 見[み]た", blank: true },
          { text: "けど、 本[ほん]はまだ 読[よ]んでいない" },
        ],
        notes: 'Basic version: もう＋見た, まだ〜ていない, けど for "but"',
      },
      {
        segments: [
          { text: "その 映画[えいが]はもう 見[み]たけど、" },
          { text: " 本[ほん]はまだ 読[よ]んでいない", blank: true },
        ],
        notes: "Blank covers the まだ〜ていない part instead",
      },
      {
        segments: [
          { text: "あの 映画[えいが]は" },
          { text: "もう 見[み]た", blank: true },
          { text: "けど、 本[ほん]はまだ 読[よ]んでいない" },
        ],
        notes: 'あの instead of その for "that movie"',
      },
      {
        segments: [
          { text: "私[わたし]はその 映画[えいが]を" },
          { text: "もう 見[み]た", blank: true },
          { text: "けど、 本[ほん]はまだ 読[よ]んでいない" },
        ],
        notes:
          "私は subject explicit, を instead of は for movie (object marker)",
      },
      {
        segments: [
          { text: "その 映画[えいが]を" },
          { text: "もう 見[み]た", blank: true },
          { text: "けど、 本[ほん]はまだ 読[よ]んでいない" },
        ],
        notes:
          "を instead of は for movie (direct object marker, no topic emphasis)",
      },
      {
        segments: [
          { text: "その 映画[えいが]は" },
          { text: "もう 見[み]た", blank: true },
          { text: "が、 本[ほん]はまだ 読[よ]んでいない" },
        ],
        notes: 'が instead of けど/でも for "but" (more formal conjunction)',
      },
      {
        segments: [
          { text: "本[ほん]はまだ 読[よ]んでいない" },
          { text: "けど、その 映画[えいが]は" },
          { text: "もう 見[み]た", blank: true },
        ],
        notes: "Reversed clause order: book clause first, then movie clause",
      },
      {
        segments: [
          { text: "その 映画[えいが]は" },
          { text: "もう 見[み]た", blank: true },
          { text: "けど、 本[ほん]をまだ 読[よ]んでいない" },
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
          {
            text: "読[よ]んでいる",
            blank: true,
            conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" },
          },
        ],
        notes: "が (more formal connector) instead of けど",
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
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Basic form: まだ + 洗濯して + いない/いません",
      },
      {
        segments: [
          { text: "まだ 洗濯[せんたく]を", blank: true },
          { text: "して" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "With を particle before the blank",
      },
    ],
  },
  {
    english: "Has Takeshi already called the restaurant?",
    hint: "Takeshi = たけし",
    answers: [
      {
        segments: [
          { text: "もうたけしさんはレストランに" },
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
        ],
        notes:
          "もう fronted: もうたけしさんは... — but here blank is on 電話する (past verb)",
      },
      {
        segments: [
          { text: "たけしさんはもうレストランに" },
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
        ],
        notes:
          "Standard variation: たけしさんは + もう + レストランに + 電話した (に particle)",
      },
      {
        segments: [
          { text: "たけしさんはもうレストランに 電話[でんわ]を" },
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
        ],
        notes: "Using を particle: 電話を + した",
      },
      {
        segments: [
          { text: "たけしさんはもうレストランへ" },
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
        ],
        notes: "Using へ instead of に particle",
      },
      {
        segments: [
          { text: "もうたけしさんはレストランに" },
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
        ],
        notes: "もう fronted to start of sentence",
      },
      {
        segments: [
          { text: "たけしさんがもうレストランに" },
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
        ],
        notes: "Using が instead of は for たけし",
      },
      {
        segments: [
          { text: "たけしさんがもうレストランに 電話[でんわ]を" },
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
        ],
        notes: "が + を particle combination",
      },
      {
        segments: [
          { text: "たけしさんはもうレストランに" },
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
        notes: "With か question particle",
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
        notes:
          "Basic structure: チケットは + もう + 買った/買いました + けど + さきさんは + まだ + 私に + 電話して + いない/いません",
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
          { text: "いない", blank: true },
        ],
        notes:
          "夕ご飯 instead of 晩ご飯 for dinner; まだ作って + いない blank.",
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
          { text: "いない", blank: true },
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
          { text: "いない", blank: true },
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
          { text: "けど、 夕[ゆう]ご 飯[はん]はまだ 料理[りょうり]して" },
          { text: "いない", blank: true },
        ],
        notes: '料理する instead of 作る for "make dinner"; 夕ご飯.',
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
          { text: "けど、 晩[ばん]ご 飯[はん]はまだ 料理[りょうり]して" },
          { text: "いない", blank: true },
        ],
        notes: '料理する for "make"; 晩ご飯; けど connecting.',
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
          { text: "が、 晩[ばん]ご 飯[はん]はまだ 料理[りょうり]して" },
          { text: "いない", blank: true },
        ],
        notes: "が connecting; 料理する; 晩ご飯.",
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
          { text: "いない", blank: true },
        ],
        notes: "ご飯 alone (meal) instead of 晩ご飯/夕ご飯; けど; 作る.",
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
          { text: "いない", blank: true },
        ],
        notes:
          "Blank on いない at the end, with the て-form written as plain text before it",
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
          { text: "いない", blank: true },
        ],
        notes: "Using が conjunction, blank on いない",
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
          "もう+past-verb blank, まだ+て-form plain text + いる negative blank; けど conjunction; は topic markers",
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
        ],
        notes:
          "Standard word order: コンサートは + もう + 始まった/始まりましたか",
      },
      {
        segments: [
          { text: "もう", blank: true },
          { text: "コンサートは" },
          {
            text: " 始[はじ]まる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "もう fronted for emphasis: もう + コンサートは + 始まった？",
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
        ],
        notes: "が instead of は: コンサートが + もう",
      },
      {
        segments: [
          { text: "もう", blank: true },
          { text: "コンサートが" },
          {
            text: " 始[はじ]まる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "もう fronted + が particle: もう + コンサートが + 始まった？",
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
        ],
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
        ],
        notes: "が + の soft question: コンサートがもう始まったの？",
      },
      {
        segments: [
          { text: "コンサートはもう", blank: true },
          {
            text: " 始[はじ]まる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "With か question particle",
      },
      {
        segments: [
          { text: "コンサートがもう", blank: true },
          {
            text: " 始[はじ]まる",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "が + か question particle",
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
          { text: " 答[こた]えていません" },
        ],
        notes:
          "Basic variation: まだ as the blank, with に marking the questionnaire as the target",
      },
      {
        segments: [
          { text: "まだアンケートに" },
          { text: " 答[こた]えていません", blank: true },
        ],
        notes:
          "The entire ていません phrase is the blank; まだ fronted before the object",
      },
      {
        segments: [
          { text: "私[わたし]はまだアンケートに" },
          { text: " 答[こた]えていません", blank: true },
        ],
        notes: "Explicit 私は subject added at the start",
      },
      {
        segments: [
          { text: "まだアンケートに" },
          { text: " 答[こた]えて", blank: true },
          {
            text: "いる",
            conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" },
          },
        ],
        notes: "Blank on いる (negative) — 答えていない/答えていません",
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
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Basic variation with は; blank on te-form of 浴びる, いる conjugates to いない/いません",
      },
      {
        segments: [
          { text: "ゆきさんがまだシャワーを" },
          { text: " 浴[あ]びて", blank: true },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Using が instead of は as the subject particle",
      },
      {
        segments: [
          { text: "ゆきさんはシャワーをまだ" },
          { text: " 浴[あ]びて", blank: true },
          {
            text: "いる",
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
        notes: "Te-form 書いて plain, blank on いる conjugated to いない/いません",
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
        notes:
          "私は at the start (auto-dropped), 今日まだ adverb order without topic は on 今日",
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
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Base: もう + past clause + けど + まだ + ていない/ていません. 宿題をする conjugated to ていない/ていません.",
      },
      {
        segments: [
          { text: "もう", blank: true },
          { text: "シャワーを 浴[あ]びたが、" },
          { text: "まだ", blank: true },
          { text: " 宿題[しゅくだい]を" },
          { text: "して" },
          {
            text: "いる",
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
            text: "いる",
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
            text: "いる",
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
            text: "いる",
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
            text: "いる",
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
            text: "いる",
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
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          "やっていない/やっていません instead of していない — やる as synonym for する; けど conjunction, 宿題を",
      },
      {
        segments: [
          { text: "もう", blank: true },
          { text: "シャワーを 浴[あ]びたが、" },
          { text: "まだ", blank: true },
          { text: " 宿題[しゅくだい]を" },
          { text: "やって" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "やっていない/やっていません + が conjunction",
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
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes:
          "シャワーは もう topicalized + やっていない/やっていません + けど conjunction",
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
          { text: " 終[お]わっていません" },
          { text: "か" },
        ],
        notes:
          "Most standard variation: 試験 for exam, まだ～ていません in question form",
      },
      {
        segments: [
          { text: "試験[しけん]は" },
          { text: "まだ", blank: true },
          { text: " 終[お]わっていないです" },
          { text: "か" },
        ],
        notes:
          "Using ていないです instead of ていません — slightly softer/colloquial polite form",
      },
      {
        segments: [
          { text: "テストは" },
          { text: "まだ", blank: true },
          { text: " 終[お]わっていません" },
          { text: "か" },
        ],
        notes: "Using テスト instead of 試験 for exam",
      },
      {
        segments: [
          { text: "テストは" },
          { text: "まだ", blank: true },
          { text: " 終[お]わっていないです" },
          { text: "か" },
        ],
        notes: "テスト + ていないです form",
      },
      {
        segments: [
          { text: "試験[しけん]は" },
          { text: "まだ", blank: true },
          { text: " 終[お]わっていないの" },
        ],
        notes: "Casual の-question with 試験; softer inquiry tone",
      },
      {
        segments: [
          { text: "テストは" },
          { text: "まだ", blank: true },
          { text: " 終[お]わっていないの" },
        ],
        notes: "テスト + casual の-question",
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
        notes: "Standard: もう in the blank, past tense question with か",
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
          { text: "のか" },
        ],
        notes: "のか ending for casual confirmation-seeking question",
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
          { text: "もう" },
          { text: "はなさんは" },
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
          { text: "か" },
        ],
        notes: "もう at sentence start, before the topic は",
      },
      {
        segments: [
          { text: "もう" },
          { text: "はなさんは" },
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
          { text: "のか" },
        ],
        notes: "もう sentence-initial + のか confirmation question",
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
        notes: "Standard question using もう + past tense verb + か",
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
          { text: "か" },
        ],
        notes:
          "Casual question using もう + past tense verb + ？ (no か particle)",
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
        notes: "Question with のか for a more direct/probing tone",
      },
      {
        segments: [
          { text: "もうりくさんは 昼[ひる]ご 飯[はん]を" },
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
        notes: "もう fronted before りく for emphasis",
      },
      {
        segments: [
          { text: "りくさんがもう 昼[ひる]ご 飯[はん]を" },
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
        notes:
          "Using が instead of は for りく — focuses on Riku as the subject of inquiry",
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
          { text: " 食[た]べていません", blank: true },
        ],
        notes:
          "Standard: もう + past, まだ～ていません (polite negative). は marks the topic お弁当.",
      },
      {
        segments: [
          { text: "お 弁当[べんとう]はもう 買[か]ったけど、まだ" },
          { text: " 食[た]べていない", blank: true },
        ],
        notes: "Using casual ていない form as the blank instead of ていません",
      },
      {
        segments: [
          { text: "お 弁当[べんとう]は" },
          { text: "もう", blank: true },
          { text: " 買[か]ったが、" },
          { text: "まだ 食[た]べていない", blank: true },
        ],
        notes:
          "Using が (but) instead of けど, two blanks for もう and まだ～ていない",
      },
      {
        segments: [
          { text: "お 弁当[べんとう]を" },
          { text: "もう", blank: true },
          { text: " 買[か]ったけど、" },
          { text: "まだ 食[た]べていない", blank: true },
        ],
        notes: "Using を instead of は for お弁当",
      },
      {
        segments: [
          { text: "弁当[べんとう]はもう 買[か]ったけど、" },
          { text: "まだ 食[た]べていない", blank: true },
        ],
        notes: "Using 弁当 without お prefix",
      },
      {
        segments: [
          { text: "もう お 弁当[べんとう]を 買[か]ったけど、" },
          { text: "まだ 食[た]べていません", blank: true },
        ],
        notes: "もう at sentence start, を particle, ていません as the blank",
      },
      {
        segments: [
          { text: "お 弁当[べんとう]はもう 買[か]っただけど、" },
          { text: "まだ 食[た]べていない", blank: true },
        ],
        notes:
          "Using だけど instead of けど for slightly more emphatic contrast",
      },
      {
        segments: [
          { text: "お 弁当[べんとう]は" },
          { text: "もう", blank: true },
          { text: " 買[か]ったけど、" },
          { text: "まだ 食[た]べていません", blank: true },
        ],
        notes: "Two blanks: もう and まだ食べていません (polite negative)",
      },
      {
        segments: [
          { text: "お 弁当[べんとう]はもう 買[か]ったが、" },
          { text: "まだ 食[た]べていません", blank: true },
        ],
        notes: "Using が (but) instead of けど, polite ていません form",
      },
      {
        segments: [
          { text: "もう お 弁当[べんとう]は 買[か]ったけど、" },
          { text: "まだ 食[た]べていない", blank: true },
        ],
        notes: "もう placed before お弁当は (front position)",
      },
      {
        segments: [
          { text: "弁当[べんとう]はもう 買[か]ったが、" },
          { text: "まだ 食[た]べていない", blank: true },
        ],
        notes: "Using 弁当 without お prefix, が (but)",
      },
      {
        segments: [
          { text: "お 弁当[べんとう]を" },
          { text: "もう", blank: true },
          { text: " 買[か]ったが、" },
          { text: "まだ 食[た]べていない", blank: true },
        ],
        notes: "Using を instead of は, が (but), two blanks",
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
        notes:
          "Basic version with まだ + お金がある + から + お土産を買う (volitional)",
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
        notes: "Using 金 instead of お金 (more casual)",
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
        notes: "Standard with を particle, いる conjugates for polite/casual",
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
    ],
  },
]
