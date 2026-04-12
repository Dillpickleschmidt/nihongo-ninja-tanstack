import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I saw a black cat. Therefore, I went home",
    hint: "black -> 黒い (くろい)",
    answers: [
      {
        segments: [
          { text: "黒[くろ]い 猫[ねこ]を" },
          { text: "見[み]ました", blank: true },
          { text: "。だから 家[いえ]に" },
          { text: "帰[かえ]りました", blank: true },
        ],
      },
      {
        segments: [
          { text: "黒[くろ]い 猫[ねこ]を" },
          { text: "見[み]ました", blank: true },
          { text: "。だから" },
          { text: "帰[かえ]りました", blank: true },
        ],
      },
    ],
  },
  {
    english: "I met my friend at the temple.",
    answers: [
      {
        segments: [
          { text: "お 寺[てら]で 友達[ともだち]に" },
          { text: "会[あ]いました", blank: true },
        ],
      },
    ],
  },
  {
    english: "Kenji didn't come home last night.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは 昨日[きのう]の 夜[よる]、" },
          { text: "帰[かえ]らなかった", blank: true },
        ],
        notes:
          'Basic: けんじさんは, 昨日の夜 for "last night", negative past of う-verb 帰る',
      },
      {
        segments: [
          { text: "けんじさんは 昨日[きのう]の 夜[よる]、" },
          { text: "帰[かえ]らなかったです", blank: true },
        ],
        notes: "Semi-polite: なかったです form",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、けんじさんは" },
          { text: "帰[かえ]らなかった", blank: true },
        ],
        notes: "Time-first word order: 昨日の夜、けんじさんは",
      },
      {
        segments: [
          { text: "けんじさんは 昨晩[さくばん]、" },
          { text: "帰[かえ]らなかった", blank: true },
        ],
        notes: 'Using 昨晩 (さくばん) as an alternative word for "last night"',
      },
      {
        segments: [
          { text: "けんじさんは 昨夜[さくや]、" },
          { text: "帰[かえ]らなかった", blank: true },
        ],
        notes: 'Using 昨夜 (さくや) as another alternative for "last night"',
      },
      {
        segments: [
          { text: "けんじさんは 昨日[きのう]の 晩[ばん]、" },
          { text: "帰[かえ]らなかった", blank: true },
        ],
        notes:
          'Using 昨日の晩 (evening/night) as alternative phrasing for "last night"',
      },
      {
        segments: [
          { text: "けんじさんが 昨日[きのう]の 夜[よる]、" },
          { text: "帰[かえ]らなかった", blank: true },
        ],
        notes: "Using が instead of は for the subject particle",
      },
      {
        segments: [
          { text: "けんじさんは 昨日[きのう]の 夜[よる]、うちに" },
          { text: "帰[かえ]らなかった", blank: true },
        ],
        notes: 'Explicitly saying "didn\'t come home" with うちに帰らなかった',
      },
      {
        segments: [
          { text: "けんじさんは 昨日[きのう]の 夜[よる]、家[いえ]に" },
          { text: "帰[かえ]らなかった", blank: true },
        ],
        notes: "With 家に (home) explicitly stated",
      },
    ],
  },
  {
    english: "I bought bread at the supermarket.",
    answers: [
      {
        segments: [
          { text: "スーパーでパンを" },
          { text: "買[か]いました", blank: true },
        ],
      },
    ],
  },
  {
    english: "I waited at the hospital.",
    answers: [
      {
        segments: [
          { text: "病院[びょういん]で" },
          { text: "待[ま]ちました", blank: true },
        ],
      },
    ],
  },
  {
    english: "Last night's dinner was curry rice.",
    hint: "curry rice -> カレーライス",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]の 晩[ばん]ご 飯[はん]はカレーライス" },
          { text: "でした", blank: true },
        ],
      },
    ],
  },
  {
    english: "Why didn't you buy it?",
    answers: [
      {
        segments: [
          { text: "どうして" },
          { text: "買[か]いませんでしたか", blank: true },
        ],
      },
    ],
  },
  {
    english: "I'm sorry, I didn't take the picture.",
    answers: [
      {
        segments: [
          { text: "すみません、写真[しゃしん]を" },
          { text: "撮[と]りませんでした", blank: true },
        ],
      },
      {
        segments: [
          { text: "すみません。写真[しゃしん]を" },
          { text: "撮[と]りませんでした", blank: true },
        ],
      },
      {
        segments: [
          { text: "ごめんなさい、写真[しゃしん]を" },
          { text: "撮[と]りませんでした", blank: true },
        ],
      },
      {
        segments: [
          { text: "ごめんなさい。写真[しゃしん]を" },
          { text: "撮[と]りませんでした", blank: true },
        ],
      },
      {
        segments: [
          { text: "写真[しゃしん]を" },
          { text: "撮[と]りました", blank: true },
          { text: "。すみません" },
        ],
      },
      {
        segments: [
          { text: "写真[しゃしん]を" },
          { text: "撮[と]りました", blank: true },
          { text: "。ごめんなさい" },
        ],
      },
    ],
  },
  {
    english: "I studied a lot at school.",
    answers: [
      {
        segments: [
          { text: "学校[がっこう]でたくさん" },
          { text: "勉強[べんきょう]しました", blank: true },
        ],
      },
    ],
  },
  {
    english: "I took a picture at school.",
    answers: [
      {
        segments: [
          { text: "学校[がっこう]で 写真[しゃしん]を" },
          { text: "撮[と]りました", blank: true },
        ],
      },
    ],
  },
  {
    english: "Yesterday, I met my friend. After that, I did shopping.",
    hint: 'lit. "did shopping"',
    answers: [
      {
        segments: [
          { text: "昨日[きのう]、友達[ともだち]に" },
          { text: "会[あ]いました", blank: true },
          { text: "。それから 買い物[かいもの]を" },
          { text: "しました", blank: true },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]は 友達[ともだち]に" },
          { text: "会[あ]いました", blank: true },
          { text: "。それから 買い物[かいもの]を" },
          { text: "しました", blank: true },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、友達[ともだち]に" },
          { text: "会[あ]いました", blank: true },
          { text: "。そして 買い物[かいもの]を" },
          { text: "しました", blank: true },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]は 友達[ともだち]に" },
          { text: "会[あ]いました", blank: true },
          { text: "。そして 買い物[かいもの]を" },
          { text: "しました", blank: true },
        ],
      },
    ],
  },
  {
    english: "Yesterday, I saw a cat at the park.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]、公園[こうえん]で 猫[ねこ]を" },
          { text: "見[み]ました", blank: true },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]は 公園[こうえん]で 猫[ねこ]を" },
          { text: "見[み]ました", blank: true },
        ],
      },
    ],
  },
  {
    english: "I ate dinner at the restaurant.",
    answers: [
      {
        segments: [
          { text: "レストランで 晩[ばん]ご 飯[はん]を" },
          { text: "食[た]べました", blank: true },
        ],
      },
    ],
  },
  {
    english: "I read a book in the library.",
    answers: [
      {
        segments: [
          { text: "図書館[としょかん]で 本[ほん]を" },
          { text: "読[よ]みました", blank: true },
        ],
      },
    ],
  },
  {
    english: "Who was that person?",
    hint: "Use 人[ひと] rather than a pronoun.",
    answers: [
      {
        segments: [
          { text: "あの 人[ひと]は 誰[だれ]" },
          { text: "でした", blank: true },
          { text: "か" },
        ],
        notes: "Standard polite past question.",
      },
      {
        segments: [
          { text: "あの 人[ひと]は 誰[だれ]" },
          { text: "だった", blank: true },
          { text: "か" },
        ],
        notes: "Casual question with だったか.",
      },
    ],
  },
  {
    english: "I bought a lot of vegetables at the supermarket.",
    answers: [
      {
        segments: [
          { text: "スーパーでたくさん 野菜[やさい]を" },
          { text: "買[か]いました", blank: true },
        ],
      },
    ],
  },
  {
    english: "Was Kenji's father a doctor?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんのお父[とう]さんは 医者[いしゃ]" },
          { text: "でした", blank: true },
          { text: "か" },
        ],
        notes: "Basic polite past question: でしたか",
      },
      {
        segments: [
          { text: "けんじさんのお父[とう]さんは 医者[いしゃ]" },
          { text: "だった", blank: true },
          { text: "？" },
        ],
        notes: "Casual past question with だった？",
      },
      {
        segments: [
          { text: "けんじさんのお父[とう]さんが 医者[いしゃ]" },
          { text: "でした", blank: true },
          { text: "か" },
        ],
        notes: "Using が instead of は",
      },
      {
        segments: [
          { text: "けんじさんのお父[とう]さんが 医者[いしゃ]" },
          { text: "だった", blank: true },
          { text: "？" },
        ],
        notes: "Casual with が instead of は",
      },
      {
        segments: [
          { text: "けんじさんのお父[とう]さんは 医者[いしゃ]" },
          { text: "だった", blank: true },
          { text: "か" },
        ],
        notes:
          "Casual past question with だった + か particle (more explicit question form)",
      },
      {
        segments: [
          { text: "けんじさんのお父[とう]さんが 医者[いしゃ]" },
          { text: "だった", blank: true },
          { text: "か" },
        ],
        notes: "Casual with が + だったか",
      },
    ],
  },
  {
    english: "Takeshi's mother was actually a lawyer!",
    hint: "Takeshi = たけし",
    answers: [
      {
        segments: [
          { text: "たけしさんのお母[かあ]さんは 実[じつ]は 弁護士[べんごし]" },
          { text: "でした", blank: true },
          { text: "！" },
        ],
        notes: "Basic polite past affirmative with 実は (actually)",
      },
      {
        segments: [
          { text: "たけしさんのお母[かあ]さんは 実[じつ]は 弁護士[べんごし]" },
          { text: "だった", blank: true },
          { text: "！" },
        ],
        notes: "Casual past affirmative with だった",
      },
      {
        segments: [
          { text: "たけしさんのお母[かあ]さんは 実[じつ]は 弁護士[べんごし]" },
          { text: "だった", blank: true },
          { text: "んだ！" },
        ],
        notes: "Casual past with んだ for explanatory/exclamatory emphasis",
      },
      {
        segments: [
          { text: "たけしさんのお母[かあ]さんは 実[じつ]は 弁護士[べんごし]" },
          { text: "でした", blank: true },
          { text: "よ！" },
        ],
        notes: "Polite past with よ for assertive exclamation",
      },
      {
        segments: [
          { text: "たけしさんのお母[かあ]さんは 実[じつ]は 弁護士[べんごし]" },
          { text: "だった", blank: true },
          { text: "よ！" },
        ],
        notes: "Casual past with よ for assertive exclamation",
      },
      {
        segments: [
          { text: "たけしさんのお母[かあ]さんは 実[じつ]は 弁護士[べんごし]" },
          { text: "だった", blank: true },
          { text: "んだよ！" },
        ],
        notes: "Casual past with んだよ for strong explanatory exclamation",
      },
      {
        segments: [
          { text: "実[じつ]はたけしさんのお母[かあ]さんは 弁護士[べんごし]" },
          { text: "でした", blank: true },
          { text: "！" },
        ],
        notes: "実は moved to sentence-start (topic-fronted)",
      },
      {
        segments: [
          { text: "実[じつ]はたけしさんのお母[かあ]さんは 弁護士[べんごし]" },
          { text: "だった", blank: true },
          { text: "！" },
        ],
        notes: "実は sentence-start, casual だった",
      },
      {
        segments: [
          { text: "実[じつ]はたけしさんのお母[かあ]さんは 弁護士[べんごし]" },
          { text: "だった", blank: true },
          { text: "んだ！" },
        ],
        notes:
          "実は sentence-start, casual だったんだ for explanatory emphasis",
      },
    ],
  },
  {
    english: "I ate bento (boxed lunch) alone in the park.",
    hint: "bento -> お弁当 (おべんとう)",
    answers: [
      {
        segments: [
          { text: "公園[こうえん]で 一人[ひとり]でお 弁当[べんとう]を" },
          { text: "食[た]べました", blank: true },
        ],
      },
      {
        segments: [
          { text: "一人[ひとり]で 公園[こうえん]でお 弁当[べんとう]を" },
          { text: "食[た]べました", blank: true },
        ],
      },
    ],
  },
]
