import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I'm going to the library to read magazines.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 図書館[としょかん]に 雑誌[ざっし]を" },
          { text: "読[よ]みに", blank: true },
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
        notes: "Explicit 私は",
      },
      {
        segments: [
          { text: "私[わたし]は 図書館[としょかん]へ 雑誌[ざっし]を" },
          { text: "読[よ]みに", blank: true },
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
        notes: "Explicit 私は + へ",
      },
      {
        segments: [
          { text: "雑誌[ざっし]を" },
          { text: "読[よ]みに", blank: true },
          { text: "図書館[としょかん]に", blank: true },
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
        notes: "Purpose-fronted word order",
      },
      {
        segments: [
          { text: "雑誌[ざっし]を" },
          { text: "読[よ]みに", blank: true },
          { text: "図書館[としょかん]へ", blank: true },
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
        notes: "Purpose-fronted + へ",
      },
    ],
  },
  {
    english: "I'm going to the department store to buy shoes.",
    answers: [
      {
        segments: [
          { text: "デパートに 靴[くつ]を" },
          { text: "買[か]いに", blank: true },
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
      },
      {
        segments: [
          { text: "デパートへ 靴[くつ]を" },
          { text: "買[か]いに", blank: true },
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
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "靴[くつ]を" },
          { text: "買[か]いに", blank: true },
          { text: "デパートに", blank: true },
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
        notes: "Purpose first, then destination",
      },
      {
        segments: [
          { text: "靴[くつ]を" },
          { text: "買[か]いに", blank: true },
          { text: "デパートへ", blank: true },
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
        notes: "Purpose first + へ",
      },
      {
        segments: [
          { text: "デパートに 靴[くつ]" },
          { text: "買[か]いに", blank: true },
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
        register: "casual",
        notes: "を omitted",
      },
    ],
  },
  {
    english: "Is Kobayashi going to the park to take pictures?",
    hint: "Kobayashi = 小林 (こばやし)",
    answers: [
      {
        segments: [
          { text: "小林[こばやし]さんは 公園[こうえん]に 写真[しゃしん]を" },
          { text: "撮[と]りに", blank: true },
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
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "小林[こばやし]さんは 公園[こうえん]へ 写真[しゃしん]を" },
          { text: "撮[と]りに", blank: true },
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
          { text: "か" },
        ],
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "小林[こばやし]さんは 公園[こうえん]に 写真[しゃしん]" },
          { text: "撮[と]りに", blank: true },
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
          { text: "か" },
        ],
        register: "casual",
        notes: "を omitted",
      },
      {
        segments: [
          { text: "小林[こばやし]さんは 公園[こうえん]へ 写真[しゃしん]" },
          { text: "撮[と]りに", blank: true },
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
          { text: "か" },
        ],
        register: "casual",
        notes: "へ + を omitted",
      },
      {
        segments: [
          { text: "小林[こばやし]さんが 公園[こうえん]に 写真[しゃしん]を" },
          { text: "撮[と]りに", blank: true },
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
          { text: "か" },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "小林[こばやし]さんが 公園[こうえん]へ 写真[しゃしん]を" },
          { text: "撮[と]りに", blank: true },
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
          { text: "か" },
        ],
        notes: "が + へ",
      },
    ],
  },
  {
    english: "I'm going to the cafeteria to eat lunch with a friend.",
    answers: [
      {
        segments: [
          {
            text: "私[わたし]は 友達[ともだち]と 食堂[しょくどう]に 昼[ひる]ご 飯[はん]を",
          },
          { text: "食[た]べに", blank: true },
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
      },
      {
        segments: [
          {
            text: "私[わたし]は 友達[ともだち]と 食堂[しょくどう]へ 昼[ひる]ご 飯[はん]を",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "へ instead of に; keeps 友達と for 'with a friend'",
      },
      {
        segments: [
          {
            text: "私[わたし]は 友達[ともだち]と 食堂[しょくどう]に ご 飯[はん]を",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "ご飯 instead of 昼ご飯; keeps 友達と for 'with a friend'",
      },
      {
        segments: [
          {
            text: "私[わたし]は 友達[ともだち]と 食堂[しょくどう]へ ご 飯[はん]を",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "ご飯 + へ; keeps 友達と for 'with a friend'",
      },
      {
        segments: [
          {
            text: "私[わたし]は 食堂[しょくどう]に 友達[ともだち]と 昼[ひる]ご 飯[はん]を",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "食堂に before 友達と.",
      },
      {
        segments: [
          {
            text: "私[わたし]は 食堂[しょくどう]に 友達[ともだち]と ご 飯[はん]を",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "食堂に before 友達と + ご飯.",
      },
      {
        segments: [
          {
            text: "私[わたし]は 食堂[しょくどう]へ 友達[ともだち]と 昼[ひる]ご 飯[はん]を",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "食堂へ before 友達と.",
      },
      {
        segments: [
          {
            text: "私[わたし]は 食堂[しょくどう]へ 友達[ともだち]と ご 飯[はん]を",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "食堂へ before 友達と + ご飯.",
      },
    ],
  },
  {
    english: "I'm going to the cafe to drink coffee with a friend.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]と カフェに コーヒーを" },
          { text: "飲[の]みに", blank: true },
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
        notes: "Adds 友達と for a concrete social plan",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]と カフェへ コーヒーを" },
          { text: "飲[の]みに", blank: true },
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
        notes: "へ instead of に; adds 友達と",
      },
      {
        segments: [
          { text: "私[わたし]が 友達[ともだち]と カフェに コーヒーを" },
          { text: "飲[の]みに", blank: true },
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
        notes: "が instead of は; adds 友達と",
      },
      {
        segments: [
          { text: "私[わたし]が 友達[ともだち]と カフェへ コーヒーを" },
          { text: "飲[の]みに", blank: true },
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
        notes: "が + へ; adds 友達と",
      },
      {
        segments: [
          { text: "私[わたし]は カフェに 友達[ともだち]と コーヒーを" },
          { text: "飲[の]みに", blank: true },
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
        notes: "カフェに before 友達と.",
      },
      {
        segments: [
          { text: "私[わたし]は カフェへ 友達[ともだち]と コーヒーを" },
          { text: "飲[の]みに", blank: true },
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
        notes: "カフェへ before 友達と.",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]と コーヒーを" },
          { text: "飲[の]みに", blank: true },
          { text: "カフェに", blank: true },
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
        notes: "Purpose before destination; adds 友達と",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]と コーヒーを" },
          { text: "飲[の]みに", blank: true },
          { text: "カフェへ", blank: true },
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
        notes: "Purpose before destination + へ; adds 友達と",
      },
    ],
  },
  {
    english: "I'm going to the park to meet a friend.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 公園[こうえん]に 友[とも]だちに" },
          { text: "会[あ]いに", blank: true },
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
      },
      {
        segments: [
          { text: "私[わたし]は 公園[こうえん]へ 友[とも]だちに" },
          { text: "会[あ]いに", blank: true },
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
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "私[わたし]は 公園[こうえん]に 友[とも]だちと" },
          { text: "会[あ]いに", blank: true },
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
        notes: "友だちと (mutual meeting) instead of 友だちに",
      },
      {
        segments: [
          { text: "私[わたし]は 公園[こうえん]へ 友[とも]だちと" },
          { text: "会[あ]いに", blank: true },
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
        notes: "友だちと + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 友[とも]だちに" },
          { text: "会[あ]いに", blank: true },
          { text: "公園[こうえん]に" },
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
        notes: "Purpose before destination.",
      },
      {
        segments: [
          { text: "私[わたし]は 友[とも]だちに" },
          { text: "会[あ]いに", blank: true },
          { text: "公園[こうえん]へ" },
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
        notes: "Purpose before destination + へ.",
      },
      {
        segments: [
          { text: "私[わたし]は 友[とも]だちと" },
          { text: "会[あ]いに", blank: true },
          { text: "公園[こうえん]に" },
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
        notes: "Purpose before destination + 友だちと.",
      },
      {
        segments: [
          { text: "私[わたし]は 友[とも]だちと" },
          { text: "会[あ]いに", blank: true },
          { text: "公園[こうえん]へ" },
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
        notes: "Purpose before destination + 友だちと + へ.",
      },
    ],
  },
  {
    english: "Is Mizuki going to the karaoke place to sing tonight?",
    hint: "Mizuki = 瑞希 (みずき)",
    answers: [
      {
        segments: [
          { text: "瑞希[みずき]さんは 今晩[こんばん] カラオケに" },
          { text: "歌[うた]いに", blank: true },
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
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "瑞希[みずき]さんは 今夜[こんや] カラオケに" },
          { text: "歌[うた]いに", blank: true },
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
          { text: "か" },
        ],
        notes: "今夜 instead of 今晩",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんは 今晩[こんばん] カラオケへ" },
          { text: "歌[うた]いに", blank: true },
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
          { text: "か" },
        ],
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんは 今夜[こんや] カラオケへ" },
          { text: "歌[うた]いに", blank: true },
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
          { text: "か" },
        ],
        notes: "今夜 + へ",
      },
      {
        segments: [
          { text: "今晩[こんばん]、 瑞希[みずき]さんは カラオケに" },
          { text: "歌[うた]いに", blank: true },
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
          { text: "か" },
        ],
        notes: "今晩 fronted",
      },
      {
        segments: [
          { text: "今夜[こんや]、 瑞希[みずき]さんは カラオケに" },
          { text: "歌[うた]いに", blank: true },
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
          { text: "か" },
        ],
        notes: "今夜 fronted",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんが 今晩[こんばん] カラオケに" },
          { text: "歌[うた]いに", blank: true },
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
          { text: "か" },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんは 今晩[こんばん] カラオケに 歌[うた]を" },
          { text: "歌[うた]いに", blank: true },
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
          { text: "か" },
        ],
        notes: "歌を歌いに — explicit 歌 object",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんは 今夜[こんや] カラオケに" },
          { text: "歌[うた]いに", blank: true },
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
          { text: "の" },
        ],
        register: "casual",
        notes: "の question particle (casual)",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんは 今晩[こんばん] カラオケ 屋[や]に" },
          { text: "歌[うた]いに", blank: true },
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
          { text: "か" },
        ],
        notes: "カラオケ屋 (karaoke shop) instead of カラオケ",
      },
    ],
  },
  {
    english: "I'm going to a friend's place this weekend to play games.",
    answers: [
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちのうちに ゲームを",
          },
          { text: "しに", blank: true },
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
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちのうちへ ゲームを",
          },
          { text: "しに", blank: true },
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
        notes: "へ instead of に",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちのうちに ゲームを",
          },
          { text: "やりに", blank: true },
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
        notes: "やる instead of する",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちのうちへ ゲームを",
          },
          { text: "やりに", blank: true },
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
        notes: "やる + へ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちの 家[いえ]に ゲームを",
          },
          { text: "しに", blank: true },
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
        notes: "家 instead of うち",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちの 家[いえ]へ ゲームを",
          },
          { text: "しに", blank: true },
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
        notes: "家 + へ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちの 家[いえ]に ゲームを",
          },
          { text: "やりに", blank: true },
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
        notes: "家 + やる",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちの 家[いえ]へ ゲームを",
          },
          { text: "やりに", blank: true },
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
        notes: "家 + やる + へ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちのところに ゲームを",
          },
          { text: "しに", blank: true },
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
        notes: "ところ + に",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちのところに ゲームを",
          },
          { text: "やりに", blank: true },
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
        notes: "ところ + やる + に",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちのところへ ゲームを",
          },
          { text: "しに", blank: true },
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
        notes: "ところ + へ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちのところへ ゲームを",
          },
          { text: "やりに", blank: true },
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
        notes: "ところ + やる + へ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちのうちに ゲーム",
          },
          { text: "しに", blank: true },
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
        register: "casual",
        notes: "Casual no-を variant + うちに",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちのうちに ゲーム",
          },
          { text: "やりに", blank: true },
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
        register: "casual",
        notes: "Casual no-を + やる + うちに",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちのうちへ ゲーム",
          },
          { text: "しに", blank: true },
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
        register: "casual",
        notes: "Casual no-を variant + うちへ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちのうちへ ゲーム",
          },
          { text: "やりに", blank: true },
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
        register: "casual",
        notes: "Casual no-を + やる + うちへ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちの 家[いえ]に ゲーム",
          },
          { text: "しに", blank: true },
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
        register: "casual",
        notes: "Casual no-を variant + 家に",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちの 家[いえ]に ゲーム",
          },
          { text: "やりに", blank: true },
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
        register: "casual",
        notes: "Casual no-を + やる + 家に",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちの 家[いえ]へ ゲーム",
          },
          { text: "しに", blank: true },
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
        register: "casual",
        notes: "Casual no-を variant + 家へ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちの 家[いえ]へ ゲーム",
          },
          { text: "やりに", blank: true },
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
        register: "casual",
        notes: "Casual no-を + やる + 家へ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今週末[こんしゅうまつ]、 友[とも]だちのうちへ ゲームを",
          },
          { text: "しに", blank: true },
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
        notes: "今週末 + うちへ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今週末[こんしゅうまつ]、 友[とも]だちの 家[いえ]へ ゲームを",
          },
          { text: "しに", blank: true },
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
        notes: "今週末 + 家へ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今週末[こんしゅうまつ]、 友[とも]だちのうちに ゲームを",
          },
          { text: "やりに", blank: true },
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
        notes: "今週末 + やる + うちに",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今週末[こんしゅうまつ]、 友[とも]だちのうちへ ゲームを",
          },
          { text: "やりに", blank: true },
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
        notes: "今週末 + やる + うちへ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今週末[こんしゅうまつ]、 友[とも]だちの 家[いえ]に ゲームを",
          },
          { text: "やりに", blank: true },
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
        notes: "今週末 + やる + 家に",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今週末[こんしゅうまつ]、 友[とも]だちの 家[いえ]へ ゲームを",
          },
          { text: "やりに", blank: true },
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
        notes: "今週末 + やる + 家へ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちのうちに",
          },
          { text: "遊[あそ]びに", blank: true },
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
        notes: "遊びに行く variant (週末 + うちに).",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちのうちへ",
          },
          { text: "遊[あそ]びに", blank: true },
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
        notes: "遊びに行く variant (週末 + うちへ).",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちの 家[いえ]に",
          },
          { text: "遊[あそ]びに", blank: true },
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
        notes: "遊びに行く variant (週末 + 家に).",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちの 家[いえ]へ",
          },
          { text: "遊[あそ]びに", blank: true },
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
        notes: "遊びに行く variant (週末 + 家へ).",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちのところに",
          },
          { text: "遊[あそ]びに", blank: true },
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
        notes: "遊びに行く variant (週末 + ところに).",
      },
      {
        segments: [
          {
            text: "私[わたし]は 週末[しゅうまつ]、 友[とも]だちのところへ",
          },
          { text: "遊[あそ]びに", blank: true },
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
        notes: "遊びに行く variant (週末 + ところへ).",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今週末[こんしゅうまつ]、 友[とも]だちのうちに",
          },
          { text: "遊[あそ]びに", blank: true },
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
        notes: "遊びに行く variant (今週末 + うちに).",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今週末[こんしゅうまつ]、 友[とも]だちのうちへ",
          },
          { text: "遊[あそ]びに", blank: true },
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
        notes: "遊びに行く variant (今週末 + うちへ).",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今週末[こんしゅうまつ]、 友[とも]だちの 家[いえ]に",
          },
          { text: "遊[あそ]びに", blank: true },
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
        notes: "遊びに行く variant (今週末 + 家に).",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今週末[こんしゅうまつ]、 友[とも]だちの 家[いえ]へ",
          },
          { text: "遊[あそ]びに", blank: true },
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
        notes: "遊びに行く variant (今週末 + 家へ).",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今週末[こんしゅうまつ]、 友[とも]だちのところに",
          },
          { text: "遊[あそ]びに", blank: true },
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
        notes: "遊びに行く variant (今週末 + ところに).",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今週末[こんしゅうまつ]、 友[とも]だちのところへ",
          },
          { text: "遊[あそ]びに", blank: true },
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
        notes: "遊びに行く variant (今週末 + ところへ).",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今週末[こんしゅうまつ]、 友[とも]だちのうちに ゲームを",
          },
          { text: "しに", blank: true },
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
        notes: "今週末 (this weekend) instead of 週末",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今週末[こんしゅうまつ]、 友[とも]だちの 家[いえ]に ゲームを",
          },
          { text: "しに", blank: true },
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
        notes: "今週末 + 家",
      },
      {
        segments: [
          {
            text: "今週末[こんしゅうまつ]は 友[とも]だちの 家[いえ]に ゲームを",
          },
          { text: "しに", blank: true },
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
        notes: "今週末は (topic marker) + subject 私は dropped + 家",
      },
    ],
  },
  {
    english: "I'm going to the hospital to visit a friend.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 病院[びょういん]に 友[とも]だちに" },
          { text: "会[あ]いに", blank: true },
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
      },
      {
        segments: [
          { text: "私[わたし]は 病院[びょういん]へ 友[とも]だちに" },
          { text: "会[あ]いに", blank: true },
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
        notes: "へ for destination",
      },
      {
        segments: [
          { text: "私[わたし]は 病院[びょういん]に 友達[ともだち]に" },
          { text: "会[あ]いに", blank: true },
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
        notes: "友達 (full kanji) instead of 友だち + に",
      },
      {
        segments: [
          { text: "私[わたし]は 病院[びょういん]へ 友達[ともだち]に" },
          { text: "会[あ]いに", blank: true },
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
        notes: "友達 (full kanji) instead of 友だち + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 友[とも]だちに" },
          { text: "会[あ]いに 病院[びょういん]に", blank: true },
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
        notes: "Purpose first + に",
      },
      {
        segments: [
          { text: "私[わたし]は 友[とも]だちに" },
          { text: "会[あ]いに 病院[びょういん]へ", blank: true },
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
        notes: "Purpose first + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に" },
          { text: "会[あ]いに 病院[びょういん]に", blank: true },
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
        notes: "Purpose first + に + 友達 (full kanji)",
      },
      {
        segments: [
          { text: "私[わたし]は 友達[ともだち]に" },
          { text: "会[あ]いに 病院[びょういん]へ", blank: true },
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
        notes: "Purpose first + へ + 友達 (full kanji)",
      },
      {
        segments: [
          { text: "私[わたし]は 病院[びょういん]に 友[とも]だちを" },
          { text: "見舞[みま]いに", blank: true },
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
        notes: "見舞いに行く (visit sick person) + に",
      },
      {
        segments: [
          { text: "私[わたし]は 病院[びょういん]へ 友[とも]だちを" },
          { text: "見舞[みま]いに", blank: true },
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
        notes: "見舞いに行く (visit sick person) + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 友[とも]だちを" },
          { text: "見舞[みま]いに 病院[びょういん]に", blank: true },
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
        notes: "見舞いに行く, purpose first + に",
      },
      {
        segments: [
          { text: "私[わたし]は 友[とも]だちを" },
          { text: "見舞[みま]いに 病院[びょういん]へ", blank: true },
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
        notes: "見舞いに行く, purpose first + へ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 友[とも]だちの お見舞[みま]いに 病院[びょういん]に",
          },
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
        notes: "お見舞いに行く + に",
      },
      {
        segments: [
          {
            text: "私[わたし]は 友[とも]だちの お見舞[みま]いに 病院[びょういん]へ",
          },
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
        notes: "お見舞いに行く + へ",
      },
    ],
  },
  {
    english: "I'm going to the ocean this weekend to surf.",
    hint: "surf = サーフィン (as in サーフィンをする)",
    answers: [
      {
        segments: [
          {
            text: "私[わたし]は 今週末[こんしゅうまつ]、 海[うみ]に サーフィンを",
          },
          { text: "しに", blank: true },
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
        notes: "今週末 + に",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今週末[こんしゅうまつ]、 海[うみ]へ サーフィンを",
          },
          { text: "しに", blank: true },
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
        notes: "今週末 + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]、 海[うみ]に サーフィンを" },
          { text: "しに", blank: true },
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
        notes: "週末 + に",
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]、 海[うみ]へ サーフィンを" },
          { text: "しに", blank: true },
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
        notes: "週末 + へ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今週末[こんしゅうまつ]、 海[うみ]に サーフィン",
          },
          { text: "しに", blank: true },
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
        register: "casual",
        notes: "Casual no-を + 今週末 + に",
      },
      {
        segments: [
          {
            text: "私[わたし]は 今週末[こんしゅうまつ]、 海[うみ]へ サーフィン",
          },
          { text: "しに", blank: true },
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
        register: "casual",
        notes: "Casual no-を + 今週末 + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]、 海[うみ]に サーフィン" },
          { text: "しに", blank: true },
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
        register: "casual",
        notes: "Casual no-を + 週末 + に",
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]、 海[うみ]へ サーフィン" },
          { text: "しに", blank: true },
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
        register: "casual",
        notes: "Casual no-を + 週末 + へ",
      },
      {
        segments: [
          { text: "私[わたし]は サーフィンを" },
          { text: "しに 海[うみ]に", blank: true },
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
        notes: "Purpose first + に",
      },
      {
        segments: [
          { text: "私[わたし]は サーフィンを" },
          { text: "しに 海[うみ]へ", blank: true },
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
        notes: "Purpose first + へ",
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]は 海[うみ]に サーフィンを" },
          { text: "しに", blank: true },
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
        notes: "今週末は + 私は dropped + に",
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]は 海[うみ]へ サーフィンを" },
          { text: "しに", blank: true },
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
        notes: "今週末は + 私は dropped + へ",
      },
    ],
  },
  {
    english: "I'm not going to the supermarket to buy fruit.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は スーパーに 果物[くだもの]を" },
          { text: "買[か]いに", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は スーパーへ 果物[くだもの]を" },
          { text: "買[か]いに", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "果物 + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 果物[くだもの]を" },
          { text: "買[か]いに", blank: true },
          { text: "スーパーに", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Purpose before destination + 果物 + に",
      },
      {
        segments: [
          { text: "私[わたし]は 果物[くだもの]を" },
          { text: "買[か]いに", blank: true },
          { text: "スーパーへ", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Purpose before destination + 果物 + へ",
      },
      {
        segments: [
          { text: "私[わたし]は スーパーに フルーツを" },
          { text: "買[か]いに", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "フルーツ + に",
      },
      {
        segments: [
          { text: "私[わたし]は スーパーへ フルーツを" },
          { text: "買[か]いに", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "フルーツ + へ",
      },
      {
        segments: [
          { text: "私[わたし]は フルーツを" },
          { text: "買[か]いに", blank: true },
          { text: "スーパーに", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Purpose before destination + フルーツ + に",
      },
      {
        segments: [
          { text: "私[わたし]は フルーツを" },
          { text: "買[か]いに", blank: true },
          { text: "スーパーへ", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Purpose before destination + フルーツ + へ",
      },
    ],
  },
  {
    english: "Shunsuke usually goes to an Italian restaurant to eat pizza.",
    hint: "Shunsuke = 俊介 (しゅんすけ)",
    answers: [
      {
        segments: [
          {
            text: "俊介[しゅんすけ]さんは たいてい イタリアンレストランに ピザを",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "たいてい + Italian restaurant + に",
      },
      {
        segments: [
          {
            text: "俊介[しゅんすけ]さんは たいてい イタリアンレストランへ ピザを",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "たいてい + Italian restaurant + へ",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは たいてい ピザを" },
          { text: "食[た]べに", blank: true },
          { text: "イタリアンレストランに", blank: true },
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
        notes:
          "たいてい + purpose before destination + Italian restaurant + に",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは たいてい ピザを" },
          { text: "食[た]べに", blank: true },
          { text: "イタリアンレストランへ", blank: true },
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
        notes:
          "たいてい + purpose before destination + Italian restaurant + へ",
      },
      {
        segments: [
          {
            text: "俊介[しゅんすけ]さんは たいてい イタリア料理[りょうり]の レストランに ピザを",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "たいてい + Italian-food restaurant + に",
      },
      {
        segments: [
          {
            text: "俊介[しゅんすけ]さんは たいてい イタリア料理[りょうり]の レストランへ ピザを",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "たいてい + Italian-food restaurant + へ",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは たいてい ピザを" },
          { text: "食[た]べに", blank: true },
          { text: "イタリア料理[りょうり]の レストランに", blank: true },
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
        notes:
          "たいてい + purpose before destination + Italian-food restaurant + に",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは たいてい ピザを" },
          { text: "食[た]べに", blank: true },
          { text: "イタリア料理[りょうり]の レストランへ", blank: true },
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
        notes:
          "たいてい + purpose before destination + Italian-food restaurant + へ",
      },
      {
        segments: [
          {
            text: "俊介[しゅんすけ]さんは たいてい イタリアンの レストランに ピザを",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "たいてい + イタリアンのレストラン + に",
      },
      {
        segments: [
          {
            text: "俊介[しゅんすけ]さんは たいてい イタリアンの レストランへ ピザを",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "たいてい + イタリアンのレストラン + へ",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは たいてい ピザを" },
          { text: "食[た]べに", blank: true },
          { text: "イタリアンの レストランに", blank: true },
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
        notes:
          "たいてい + purpose before destination + イタリアンのレストラン + に",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは たいてい ピザを" },
          { text: "食[た]べに", blank: true },
          { text: "イタリアンの レストランへ", blank: true },
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
        notes:
          "たいてい + purpose before destination + イタリアンのレストラン + へ",
      },
      {
        segments: [
          {
            text: "俊介[しゅんすけ]さんは 普段[ふだん] イタリアンレストランに ピザを",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "普段 + Italian restaurant + に",
      },
      {
        segments: [
          {
            text: "俊介[しゅんすけ]さんは 普段[ふだん] イタリアンレストランへ ピザを",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "普段 + Italian restaurant + へ",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは 普段[ふだん] ピザを" },
          { text: "食[た]べに", blank: true },
          { text: "イタリアンレストランに", blank: true },
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
        notes: "普段 + purpose before destination + Italian restaurant + に",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは 普段[ふだん] ピザを" },
          { text: "食[た]べに", blank: true },
          { text: "イタリアンレストランへ", blank: true },
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
        notes: "普段 + purpose before destination + Italian restaurant + へ",
      },
      {
        segments: [
          {
            text: "俊介[しゅんすけ]さんは 普段[ふだん] イタリア料理[りょうり]の レストランに ピザを",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "普段 + Italian-food restaurant + に",
      },
      {
        segments: [
          {
            text: "俊介[しゅんすけ]さんは 普段[ふだん] イタリア料理[りょうり]の レストランへ ピザを",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "普段 + Italian-food restaurant + へ",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは 普段[ふだん] ピザを" },
          { text: "食[た]べに", blank: true },
          { text: "イタリア料理[りょうり]の レストランに", blank: true },
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
        notes:
          "普段 + purpose before destination + Italian-food restaurant + に",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは 普段[ふだん] ピザを" },
          { text: "食[た]べに", blank: true },
          { text: "イタリア料理[りょうり]の レストランへ", blank: true },
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
        notes:
          "普段 + purpose before destination + Italian-food restaurant + へ",
      },
      {
        segments: [
          {
            text: "俊介[しゅんすけ]さんは 普段[ふだん] イタリアンの レストランに ピザを",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "普段 + イタリアンのレストラン + に",
      },
      {
        segments: [
          {
            text: "俊介[しゅんすけ]さんは 普段[ふだん] イタリアンの レストランへ ピザを",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "普段 + イタリアンのレストラン + へ",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは 普段[ふだん] ピザを" },
          { text: "食[た]べに", blank: true },
          { text: "イタリアンの レストランに", blank: true },
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
        notes:
          "普段 + purpose before destination + イタリアンのレストラン + に",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは 普段[ふだん] ピザを" },
          { text: "食[た]べに", blank: true },
          { text: "イタリアンの レストランへ", blank: true },
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
        notes:
          "普段 + purpose before destination + イタリアンのレストラン + へ",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは よく イタリアンレストランに ピザを" },
          { text: "食[た]べに", blank: true },
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
        notes: "よく + Italian restaurant + に",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは よく イタリアンレストランへ ピザを" },
          { text: "食[た]べに", blank: true },
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
        notes: "よく + Italian restaurant + へ",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは よく ピザを" },
          { text: "食[た]べに", blank: true },
          { text: "イタリアンレストランに", blank: true },
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
        notes: "よく + purpose before destination + Italian restaurant + に",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは よく ピザを" },
          { text: "食[た]べに", blank: true },
          { text: "イタリアンレストランへ", blank: true },
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
        notes: "よく + purpose before destination + Italian restaurant + へ",
      },
      {
        segments: [
          {
            text: "俊介[しゅんすけ]さんは よく イタリア料理[りょうり]の レストランに ピザを",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "よく + Italian-food restaurant + に",
      },
      {
        segments: [
          {
            text: "俊介[しゅんすけ]さんは よく イタリア料理[りょうり]の レストランへ ピザを",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "よく + Italian-food restaurant + へ",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは よく ピザを" },
          { text: "食[た]べに", blank: true },
          { text: "イタリア料理[りょうり]の レストランに", blank: true },
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
        notes:
          "よく + purpose before destination + Italian-food restaurant + に",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは よく ピザを" },
          { text: "食[た]べに", blank: true },
          { text: "イタリア料理[りょうり]の レストランへ", blank: true },
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
        notes:
          "よく + purpose before destination + Italian-food restaurant + へ",
      },
      {
        segments: [
          {
            text: "俊介[しゅんすけ]さんは よく イタリアンの レストランに ピザを",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "よく + イタリアンのレストラン + に",
      },
      {
        segments: [
          {
            text: "俊介[しゅんすけ]さんは よく イタリアンの レストランへ ピザを",
          },
          { text: "食[た]べに", blank: true },
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
        notes: "よく + イタリアンのレストラン + へ",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは よく ピザを" },
          { text: "食[た]べに", blank: true },
          { text: "イタリアンの レストランに", blank: true },
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
        notes:
          "よく + purpose before destination + イタリアンのレストラン + に",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは よく ピザを" },
          { text: "食[た]べに", blank: true },
          { text: "イタリアンの レストランへ", blank: true },
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
        notes:
          "よく + purpose before destination + イタリアンのレストラン + へ",
      },
    ],
  },
  {
    english: "Yosuke goes to cram school to study English.",
    hint: "Yosuke = 陽介 (ようすけ)",
    answers: [
      {
        segments: [
          {
            text: "陽介[ようすけ]さんは 塾[じゅく]に 英語[えいご]を 勉強[べんきょう]",
          },
          { text: "しに", blank: true },
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
        notes: "英語を勉強しに + に",
      },
      {
        segments: [
          {
            text: "陽介[ようすけ]さんは 塾[じゅく]へ 英語[えいご]を 勉強[べんきょう]",
          },
          { text: "しに", blank: true },
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
        notes: "英語を勉強しに + へ",
      },
      {
        segments: [
          { text: "陽介[ようすけ]さんは 英語[えいご]を 勉強[べんきょう]" },
          { text: "しに", blank: true },
          { text: "塾[じゅく]に", blank: true },
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
        notes: "Purpose before destination + 英語を勉強しに + に",
      },
      {
        segments: [
          { text: "陽介[ようすけ]さんは 英語[えいご]を 勉強[べんきょう]" },
          { text: "しに", blank: true },
          { text: "塾[じゅく]へ", blank: true },
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
        notes: "Purpose before destination + 英語を勉強しに + へ",
      },
      {
        segments: [
          {
            text: "陽介[ようすけ]さんは 塾[じゅく]に 英語[えいご]の 勉強[べんきょう]を",
          },
          { text: "しに", blank: true },
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
        notes: "英語の勉強をしに + に",
      },
      {
        segments: [
          {
            text: "陽介[ようすけ]さんは 塾[じゅく]へ 英語[えいご]の 勉強[べんきょう]を",
          },
          { text: "しに", blank: true },
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
        notes: "英語の勉強をしに + へ",
      },
      {
        segments: [
          { text: "陽介[ようすけ]さんは 英語[えいご]の 勉強[べんきょう]を" },
          { text: "しに", blank: true },
          { text: "塾[じゅく]に", blank: true },
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
        notes: "Purpose before destination + 英語の勉強をしに + に",
      },
      {
        segments: [
          { text: "陽介[ようすけ]さんは 英語[えいご]の 勉強[べんきょう]を" },
          { text: "しに", blank: true },
          { text: "塾[じゅく]へ", blank: true },
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
        notes: "Purpose before destination + 英語の勉強をしに + へ",
      },
    ],
  },
  {
    english: "Rina goes to the mall to eat tonkatsu.",
    hint: "mall = モール / ショッピングモール",
    answers: [
      {
        segments: [
          { text: "莉奈[りな]さんは モールに とんかつを" },
          { text: "食[た]べに", blank: true },
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
        notes: "mall + に",
      },
      {
        segments: [
          { text: "莉奈[りな]さんは モールへ とんかつを" },
          { text: "食[た]べに", blank: true },
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
        notes: "mall + へ",
      },
      {
        segments: [
          { text: "莉奈[りな]さんは とんかつを" },
          { text: "食[た]べに", blank: true },
          { text: "モールに", blank: true },
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
        notes: "Purpose before destination + mall + に",
      },
      {
        segments: [
          { text: "莉奈[りな]さんは とんかつを" },
          { text: "食[た]べに", blank: true },
          { text: "モールへ", blank: true },
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
        notes: "Purpose before destination + mall + へ",
      },
      {
        segments: [
          { text: "莉奈[りな]さんは ショッピングモールに とんかつを" },
          { text: "食[た]べに", blank: true },
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
        notes: "shopping mall + に",
      },
      {
        segments: [
          { text: "莉奈[りな]さんは ショッピングモールへ とんかつを" },
          { text: "食[た]べに", blank: true },
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
        notes: "shopping mall + へ",
      },
      {
        segments: [
          { text: "莉奈[りな]さんは とんかつを" },
          { text: "食[た]べに", blank: true },
          { text: "ショッピングモールに", blank: true },
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
        notes: "Purpose before destination + shopping mall + に",
      },
      {
        segments: [
          { text: "莉奈[りな]さんは とんかつを" },
          { text: "食[た]べに", blank: true },
          { text: "ショッピングモールへ", blank: true },
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
        notes: "Purpose before destination + shopping mall + へ",
      },
    ],
  },
  {
    english: "I'm going to Kaede's place to return her textbook.",
    hint: "Kaede = 楓 (かえで)",
    answers: [
      {
        segments: [
          {
            text: "私[わたし]は 楓[かえで]さんに 教科書[きょうかしょ]を",
          },
          { text: "返[かえ]しに", blank: true },
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
        notes: "Person as indirect object; destination/place implied",
      },
      {
        segments: [
          {
            text: "私[わたし]は 教科書[きょうかしょ]を 楓[かえで]さんに",
          },
          { text: "返[かえ]しに", blank: true },
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
        notes: "Object before recipient; destination/place implied",
      },
      {
        segments: [
          {
            text: "私[わたし]は 楓[かえで]さんのうちに 教科書[きょうかしょ]を",
          },
          { text: "返[かえ]しに", blank: true },
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
        notes: "うち + に",
      },
      {
        segments: [
          {
            text: "私[わたし]は 楓[かえで]さんのうちへ 教科書[きょうかしょ]を",
          },
          { text: "返[かえ]しに", blank: true },
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
        notes: "うち + へ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 楓[かえで]さんのところに 教科書[きょうかしょ]を",
          },
          { text: "返[かえ]しに", blank: true },
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
        notes: "ところ + に",
      },
      {
        segments: [
          {
            text: "私[わたし]は 楓[かえで]さんのところへ 教科書[きょうかしょ]を",
          },
          { text: "返[かえ]しに", blank: true },
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
        notes: "ところ + へ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 楓[かえで]さんの 家[いえ]に 教科書[きょうかしょ]を",
          },
          { text: "返[かえ]しに", blank: true },
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
        notes: "家 + に",
      },
      {
        segments: [
          {
            text: "私[わたし]は 楓[かえで]さんの 家[いえ]へ 教科書[きょうかしょ]を",
          },
          { text: "返[かえ]しに", blank: true },
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
        notes: "家 + へ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 教科書[きょうかしょ]を 楓[かえで]さんのうちに",
          },
          { text: "返[かえ]しに", blank: true },
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
        notes: "Object before destination + うち + に",
      },
      {
        segments: [
          {
            text: "私[わたし]は 教科書[きょうかしょ]を 楓[かえで]さんのうちへ",
          },
          { text: "返[かえ]しに", blank: true },
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
        notes: "Object before destination + うち + へ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 教科書[きょうかしょ]を 楓[かえで]さんのところに",
          },
          { text: "返[かえ]しに", blank: true },
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
        notes: "Object before destination + ところ + に",
      },
      {
        segments: [
          {
            text: "私[わたし]は 教科書[きょうかしょ]を 楓[かえで]さんのところへ",
          },
          { text: "返[かえ]しに", blank: true },
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
        notes: "Object before destination + ところ + へ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 教科書[きょうかしょ]を 楓[かえで]さんの 家[いえ]に",
          },
          { text: "返[かえ]しに", blank: true },
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
        notes: "Object before destination + 家 + に",
      },
      {
        segments: [
          {
            text: "私[わたし]は 教科書[きょうかしょ]を 楓[かえで]さんの 家[いえ]へ",
          },
          { text: "返[かえ]しに", blank: true },
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
        notes: "Object before destination + 家 + へ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 教科書[きょうかしょ]を",
          },
          { text: "返[かえ]しに", blank: true },
          { text: "楓[かえで]さんのうちに", blank: true },
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
        notes: "Purpose before destination + うち + に",
      },
      {
        segments: [
          {
            text: "私[わたし]は 教科書[きょうかしょ]を",
          },
          { text: "返[かえ]しに", blank: true },
          { text: "楓[かえで]さんのうちへ", blank: true },
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
        notes: "Purpose before destination + うち + へ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 教科書[きょうかしょ]を",
          },
          { text: "返[かえ]しに", blank: true },
          { text: "楓[かえで]さんのところに", blank: true },
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
        notes: "Purpose before destination + ところ + に",
      },
      {
        segments: [
          {
            text: "私[わたし]は 教科書[きょうかしょ]を",
          },
          { text: "返[かえ]しに", blank: true },
          { text: "楓[かえで]さんのところへ", blank: true },
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
        notes: "Purpose before destination + ところ + へ",
      },
      {
        segments: [
          {
            text: "私[わたし]は 教科書[きょうかしょ]を",
          },
          { text: "返[かえ]しに", blank: true },
          { text: "楓[かえで]さんの 家[いえ]に", blank: true },
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
        notes: "Purpose before destination + 家 + に",
      },
      {
        segments: [
          {
            text: "私[わたし]は 教科書[きょうかしょ]を",
          },
          { text: "返[かえ]しに", blank: true },
          { text: "楓[かえで]さんの 家[いえ]へ", blank: true },
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
        notes: "Purpose before destination + 家 + へ",
      },
    ],
  },
  {
    english: "Daiki is going to go ask the teacher about the homework.",
    hint: "Daiki = 大輝 (だいき)",
    answers: [
      {
        segments: [
          {
            text: "大輝[だいき]さんは 先生[せんせい]に 宿題[しゅくだい]について",
          },
          { text: "聞[き]きに", blank: true },
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
        notes: "先生に + について",
      },
      {
        segments: [
          {
            text: "大輝[だいき]さんは 先生[せんせい]に 宿題[しゅくだい]のことを",
          },
          { text: "聞[き]きに", blank: true },
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
        notes: "先生に + のことを",
      },
      {
        segments: [
          {
            text: "大輝[だいき]さんは 先生[せんせい]のところに 宿題[しゅくだい]について",
          },
          { text: "聞[き]きに", blank: true },
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
        notes: "ところに + について",
      },
      {
        segments: [
          {
            text: "大輝[だいき]さんは 先生[せんせい]のところに 宿題[しゅくだい]のことを",
          },
          { text: "聞[き]きに", blank: true },
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
        notes: "ところに + のことを",
      },
      {
        segments: [
          {
            text: "大輝[だいき]さんは 先生[せんせい]のところへ 宿題[しゅくだい]について",
          },
          { text: "聞[き]きに", blank: true },
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
        notes: "ところへ + について",
      },
      {
        segments: [
          {
            text: "大輝[だいき]さんは 先生[せんせい]のところへ 宿題[しゅくだい]のことを",
          },
          { text: "聞[き]きに", blank: true },
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
        notes: "ところへ + のことを",
      },
      {
        segments: [
          {
            text: "大輝[だいき]さんは 宿題[しゅくだい]について 先生[せんせい]に",
          },
          { text: "聞[き]きに", blank: true },
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
        notes: "Topic first + 先生に + について",
      },
      {
        segments: [
          {
            text: "大輝[だいき]さんは 宿題[しゅくだい]のことを 先生[せんせい]に",
          },
          { text: "聞[き]きに", blank: true },
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
        notes: "Topic first + 先生に + のことを",
      },
      {
        segments: [
          {
            text: "大輝[だいき]さんは 宿題[しゅくだい]について",
          },
          { text: "聞[き]きに", blank: true },
          { text: "先生[せんせい]のところに", blank: true },
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
        notes: "Topic first + ところに + について",
      },
      {
        segments: [
          {
            text: "大輝[だいき]さんは 宿題[しゅくだい]について",
          },
          { text: "聞[き]きに", blank: true },
          { text: "先生[せんせい]のところへ", blank: true },
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
        notes: "Topic first + ところへ + について",
      },
      {
        segments: [
          {
            text: "大輝[だいき]さんは 宿題[しゅくだい]のことを",
          },
          { text: "聞[き]きに", blank: true },
          { text: "先生[せんせい]のところに", blank: true },
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
        notes: "Topic first + ところに + のことを",
      },
      {
        segments: [
          {
            text: "大輝[だいき]さんは 宿題[しゅくだい]のことを",
          },
          { text: "聞[き]きに", blank: true },
          { text: "先生[せんせい]のところへ", blank: true },
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
        notes: "Topic first + ところへ + のことを",
      },
    ],
  },
  {
    english: "I'm going to Mei's place to borrow a dictionary.",
    hint: "Mei = 芽衣 (めい)",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 芽衣[めい]さんに 辞書[じしょ]を" },
          { text: "借[か]りに", blank: true },
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
        notes: "Person as source; destination/place implied",
      },
      {
        segments: [
          { text: "私[わたし]は 辞書[じしょ]を 芽衣[めい]さんに" },
          { text: "借[か]りに", blank: true },
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
        notes: "Object before source; destination/place implied",
      },
      {
        segments: [
          { text: "私[わたし]は 芽衣[めい]さんのうちに 辞書[じしょ]を" },
          { text: "借[か]りに", blank: true },
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
        notes: "うち + に",
      },
      {
        segments: [
          { text: "私[わたし]は 芽衣[めい]さんのうちへ 辞書[じしょ]を" },
          { text: "借[か]りに", blank: true },
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
        notes: "うち + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 芽衣[めい]さんのところに 辞書[じしょ]を" },
          { text: "借[か]りに", blank: true },
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
        notes: "ところ + に",
      },
      {
        segments: [
          { text: "私[わたし]は 芽衣[めい]さんのところへ 辞書[じしょ]を" },
          { text: "借[か]りに", blank: true },
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
        notes: "ところ + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 芽衣[めい]さんの 家[いえ]に 辞書[じしょ]を" },
          { text: "借[か]りに", blank: true },
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
        notes: "家 + に",
      },
      {
        segments: [
          { text: "私[わたし]は 芽衣[めい]さんの 家[いえ]へ 辞書[じしょ]を" },
          { text: "借[か]りに", blank: true },
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
        notes: "家 + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 辞書[じしょ]を 芽衣[めい]さんのうちに" },
          { text: "借[か]りに", blank: true },
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
        notes: "Object before destination + うち + に",
      },
      {
        segments: [
          { text: "私[わたし]は 辞書[じしょ]を 芽衣[めい]さんのうちへ" },
          { text: "借[か]りに", blank: true },
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
        notes: "Object before destination + うち + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 辞書[じしょ]を 芽衣[めい]さんのところに" },
          { text: "借[か]りに", blank: true },
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
        notes: "Object before destination + ところ + に",
      },
      {
        segments: [
          { text: "私[わたし]は 辞書[じしょ]を 芽衣[めい]さんのところへ" },
          { text: "借[か]りに", blank: true },
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
        notes: "Object before destination + ところ + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 辞書[じしょ]を 芽衣[めい]さんの 家[いえ]に" },
          { text: "借[か]りに", blank: true },
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
        notes: "Object before destination + 家 + に",
      },
      {
        segments: [
          { text: "私[わたし]は 辞書[じしょ]を 芽衣[めい]さんの 家[いえ]へ" },
          { text: "借[か]りに", blank: true },
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
        notes: "Object before destination + 家 + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 辞書[じしょ]を" },
          { text: "借[か]りに", blank: true },
          { text: "芽衣[めい]さんのうちに", blank: true },
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
        notes: "Purpose before destination + うち + に",
      },
      {
        segments: [
          { text: "私[わたし]は 辞書[じしょ]を" },
          { text: "借[か]りに", blank: true },
          { text: "芽衣[めい]さんのうちへ", blank: true },
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
        notes: "Purpose before destination + うち + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 辞書[じしょ]を" },
          { text: "借[か]りに", blank: true },
          { text: "芽衣[めい]さんのところに", blank: true },
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
        notes: "Purpose before destination + ところ + に",
      },
      {
        segments: [
          { text: "私[わたし]は 辞書[じしょ]を" },
          { text: "借[か]りに", blank: true },
          { text: "芽衣[めい]さんのところへ", blank: true },
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
        notes: "Purpose before destination + ところ + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 辞書[じしょ]を" },
          { text: "借[か]りに", blank: true },
          { text: "芽衣[めい]さんの 家[いえ]に", blank: true },
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
        notes: "Purpose before destination + 家 + に",
      },
      {
        segments: [
          { text: "私[わたし]は 辞書[じしょ]を" },
          { text: "借[か]りに", blank: true },
          { text: "芽衣[めい]さんの 家[いえ]へ", blank: true },
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
        notes: "Purpose before destination + 家 + へ",
      },
    ],
  },
  {
    english: "I'm going to Riku's place to watch a movie.",
    hint: "Riku = 陸 (りく)",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 陸[りく]さんに 映画[えいが]を" },
          { text: "見[み]に", blank: true },
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
        notes: "Person target; destination/place implied",
      },
      {
        segments: [
          { text: "私[わたし]は 映画[えいが]を 陸[りく]さんに" },
          { text: "見[み]に", blank: true },
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
        notes: "Object before person target; destination/place implied",
      },
      {
        segments: [
          { text: "私[わたし]は 陸[りく]さんのうちに 映画[えいが]を" },
          { text: "見[み]に", blank: true },
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
        notes: "うち + に",
      },
      {
        segments: [
          { text: "私[わたし]は 陸[りく]さんのうちへ 映画[えいが]を" },
          { text: "見[み]に", blank: true },
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
        notes: "うち + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 陸[りく]さんのところに 映画[えいが]を" },
          { text: "見[み]に", blank: true },
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
        notes: "ところ + に",
      },
      {
        segments: [
          { text: "私[わたし]は 陸[りく]さんのところへ 映画[えいが]を" },
          { text: "見[み]に", blank: true },
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
        notes: "ところ + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 陸[りく]さんの 家[いえ]に 映画[えいが]を" },
          { text: "見[み]に", blank: true },
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
        notes: "家 + に",
      },
      {
        segments: [
          { text: "私[わたし]は 陸[りく]さんの 家[いえ]へ 映画[えいが]を" },
          { text: "見[み]に", blank: true },
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
        notes: "家 + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 映画[えいが]を 陸[りく]さんのうちに" },
          { text: "見[み]に", blank: true },
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
        notes: "Object before destination + うち + に",
      },
      {
        segments: [
          { text: "私[わたし]は 映画[えいが]を 陸[りく]さんのうちへ" },
          { text: "見[み]に", blank: true },
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
        notes: "Object before destination + うち + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 映画[えいが]を 陸[りく]さんのところに" },
          { text: "見[み]に", blank: true },
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
        notes: "Object before destination + ところ + に",
      },
      {
        segments: [
          { text: "私[わたし]は 映画[えいが]を 陸[りく]さんのところへ" },
          { text: "見[み]に", blank: true },
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
        notes: "Object before destination + ところ + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 映画[えいが]を 陸[りく]さんの 家[いえ]に" },
          { text: "見[み]に", blank: true },
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
        notes: "Object before destination + 家 + に",
      },
      {
        segments: [
          { text: "私[わたし]は 映画[えいが]を 陸[りく]さんの 家[いえ]へ" },
          { text: "見[み]に", blank: true },
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
        notes: "Object before destination + 家 + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 映画[えいが]を" },
          { text: "見[み]に", blank: true },
          { text: "陸[りく]さんのうちに", blank: true },
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
        notes: "Purpose before destination + うち + に",
      },
      {
        segments: [
          { text: "私[わたし]は 映画[えいが]を" },
          { text: "見[み]に", blank: true },
          { text: "陸[りく]さんのうちへ", blank: true },
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
        notes: "Purpose before destination + うち + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 映画[えいが]を" },
          { text: "見[み]に", blank: true },
          { text: "陸[りく]さんのところに", blank: true },
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
        notes: "Purpose before destination + ところ + に",
      },
      {
        segments: [
          { text: "私[わたし]は 映画[えいが]を" },
          { text: "見[み]に", blank: true },
          { text: "陸[りく]さんのところへ", blank: true },
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
        notes: "Purpose before destination + ところ + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 映画[えいが]を" },
          { text: "見[み]に", blank: true },
          { text: "陸[りく]さんの 家[いえ]に", blank: true },
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
        notes: "Purpose before destination + 家 + に",
      },
      {
        segments: [
          { text: "私[わたし]は 映画[えいが]を" },
          { text: "見[み]に", blank: true },
          { text: "陸[りく]さんの 家[いえ]へ", blank: true },
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
        notes: "Purpose before destination + 家 + へ",
      },
    ],
  },
  {
    english: "Kaede went to the bookstore to buy a souvenir.",
    hint: "Kaede = 楓 (かえで)",
    answers: [
      {
        segments: [
          { text: "楓[かえで]さんは 本屋[ほんや]に お 土産[みやげ]を" },
          { text: "買[か]いに", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "本屋 + お土産 + に",
      },
      {
        segments: [
          { text: "楓[かえで]さんは 本屋[ほんや]へ お 土産[みやげ]を" },
          { text: "買[か]いに", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "本屋 + お土産 + へ",
      },
      {
        segments: [
          { text: "楓[かえで]さんは お 土産[みやげ]を" },
          { text: "買[か]いに", blank: true },
          { text: "本屋[ほんや]に", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Purpose before destination + 本屋 + お土産 + に",
      },
      {
        segments: [
          { text: "楓[かえで]さんは お 土産[みやげ]を" },
          { text: "買[か]いに", blank: true },
          { text: "本屋[ほんや]へ", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Purpose before destination + 本屋 + お土産 + へ",
      },
      {
        segments: [
          { text: "楓[かえで]さんは 本屋[ほんや]さんに お 土産[みやげ]を" },
          { text: "買[か]いに", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "本屋さん + お土産 + に",
      },
      {
        segments: [
          { text: "楓[かえで]さんは 本屋[ほんや]さんへ お 土産[みやげ]を" },
          { text: "買[か]いに", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "本屋さん + お土産 + へ",
      },
      {
        segments: [
          { text: "楓[かえで]さんは お 土産[みやげ]を" },
          { text: "買[か]いに", blank: true },
          { text: "本屋[ほんや]さんに", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Purpose before destination + 本屋さん + お土産 + に",
      },
      {
        segments: [
          { text: "楓[かえで]さんは お 土産[みやげ]を" },
          { text: "買[か]いに", blank: true },
          { text: "本屋[ほんや]さんへ", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Purpose before destination + 本屋さん + お土産 + へ",
      },
      {
        segments: [
          { text: "楓[かえで]さんは 本屋[ほんや]に 土産[みやげ]を" },
          { text: "買[か]いに", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "本屋 + 土産 + に",
      },
      {
        segments: [
          { text: "楓[かえで]さんは 本屋[ほんや]へ 土産[みやげ]を" },
          { text: "買[か]いに", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "本屋 + 土産 + へ",
      },
      {
        segments: [
          { text: "楓[かえで]さんは 土産[みやげ]を" },
          { text: "買[か]いに", blank: true },
          { text: "本屋[ほんや]に", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Purpose before destination + 本屋 + 土産 + に",
      },
      {
        segments: [
          { text: "楓[かえで]さんは 土産[みやげ]を" },
          { text: "買[か]いに", blank: true },
          { text: "本屋[ほんや]へ", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Purpose before destination + 本屋 + 土産 + へ",
      },
      {
        segments: [
          { text: "楓[かえで]さんは 本屋[ほんや]さんに 土産[みやげ]を" },
          { text: "買[か]いに", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "本屋さん + 土産 + に",
      },
      {
        segments: [
          { text: "楓[かえで]さんは 本屋[ほんや]さんへ 土産[みやげ]を" },
          { text: "買[か]いに", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "本屋さん + 土産 + へ",
      },
      {
        segments: [
          { text: "楓[かえで]さんは 土産[みやげ]を" },
          { text: "買[か]いに", blank: true },
          { text: "本屋[ほんや]さんに", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Purpose before destination + 本屋さん + 土産 + に",
      },
      {
        segments: [
          { text: "楓[かえで]さんは 土産[みやげ]を" },
          { text: "買[か]いに", blank: true },
          { text: "本屋[ほんや]さんへ", blank: true },
          {
            text: "行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Purpose before destination + 本屋さん + 土産 + へ",
      },
    ],
  },
  {
    english: "I'm going to the convenience store to buy water.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は コンビニに 水[みず]を" },
          { text: "買[か]いに", blank: true },
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
      },
      {
        segments: [
          { text: "私[わたし]は コンビニへ 水[みず]を" },
          { text: "買[か]いに", blank: true },
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
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "私[わたし]は 水[みず]を" },
          { text: "買[か]いに", blank: true },
          { text: "コンビニに", blank: true },
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
        notes: "Purpose before destination",
      },
      {
        segments: [
          { text: "私[わたし]は 水[みず]を" },
          { text: "買[か]いに", blank: true },
          { text: "コンビニへ", blank: true },
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
        notes: "Purpose before destination + へ",
      },
    ],
  },
]
