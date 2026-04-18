import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I'm going to the library to read magazines.",
    answers: [
      {
        segments: [
          { text: "図書館[としょかん]に 雑誌[ざっし]を" },
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
      },
      {
        segments: [
          { text: "図書館[としょかん]へ 雑誌[ざっし]を" },
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
        notes: "へ instead of に for destination",
      },
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
        notes: "Particle を dropped (casual)",
      },
    ],
  },
  {
    english: "Is Kenji going to the park to take pictures?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは 公園[こうえん]に 写真[しゃしん]を" },
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
          { text: "けんじさんは 公園[こうえん]へ 写真[しゃしん]を" },
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
          { text: "けんじさんは 公園[こうえん]に 写真[しゃしん]" },
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
        notes: "を dropped (casual)",
      },
      {
        segments: [
          { text: "けんじさんは 公園[こうえん]へ 写真[しゃしん]" },
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
        notes: "へ + を dropped",
      },
      {
        segments: [
          { text: "けんじさんが 公園[こうえん]に 写真[しゃしん]を" },
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
          { text: "けんじさんが 公園[こうえん]へ 写真[しゃしん]を" },
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
    english: "I'm going to the cafeteria to eat lunch.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 食堂[しょくどう]に 昼[ひる]ご 飯[はん]を" },
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
          { text: "私[わたし]は 食堂[しょくどう]へ 昼[ひる]ご 飯[はん]を" },
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
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "私[わたし]は 食堂[しょくどう]に ご 飯[はん]を" },
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
        notes: "ご飯 instead of 昼ご飯",
      },
      {
        segments: [
          { text: "私[わたし]は 食堂[しょくどう]へ ご 飯[はん]を" },
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
        notes: "ご飯 + へ",
      },
      {
        segments: [
          { text: "食堂[しょくどう]に 昼[ひる]ご 飯[はん]を" },
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
        notes: "Subject 私は dropped",
      },
    ],
  },
  {
    english: "I'm going to the cafe to drink coffee.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は カフェに コーヒーを" },
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
      },
      {
        segments: [
          { text: "私[わたし]は カフェへ コーヒーを" },
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
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "私[わたし]が カフェに コーヒーを" },
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
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "私[わたし]が カフェへ コーヒーを" },
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
        notes: "が + へ",
      },
      {
        segments: [
          { text: "私[わたし]は コーヒーを" },
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
        notes: "Purpose before destination",
      },
      {
        segments: [
          { text: "私[わたし]は コーヒーを" },
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
        notes: "Purpose before destination + へ",
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
          { text: "私[わたし]が 公園[こうえん]に 友[とも]だちに" },
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
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "私[わたし]が 公園[こうえん]へ 友[とも]だちに" },
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
        notes: "が + へ",
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
          { text: "友[とも]だちに" },
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
        notes: "Purpose before destination; subject 私は dropped",
      },
    ],
  },
  {
    english: "Is Yuki going to the karaoke place to sing tonight?",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "ゆきさんは 今晩[こんばん] カラオケに" },
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
          { text: "ゆきさんは 今夜[こんや] カラオケに" },
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
          { text: "ゆきさんは 今晩[こんばん] カラオケへ" },
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
          { text: "ゆきさんは 今夜[こんや] カラオケへ" },
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
          { text: "今晩[こんばん]、 ゆきさんは カラオケに" },
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
          { text: "今夜[こんや]、 ゆきさんは カラオケに" },
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
          { text: "ゆきさんが 今晩[こんばん] カラオケに" },
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
          { text: "ゆきさんは 今晩[こんばん] カラオケに 歌[うた]を" },
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
          { text: "ゆきさんは 今晩[こんばん] カラオケ 屋[や]に" },
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
          { text: "今週末[こんしゅうまつ]は 友[とも]だちの 家[いえ]に ゲームを" },
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
    english: "I'm going to the hospital to see a friend.",
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
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "病院[びょういん]に 友[とも]だちに" },
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
        notes: "私は dropped",
      },
      {
        segments: [
          { text: "病院[びょういん]へ 友[とも]だちに" },
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
        notes: "私は dropped + へ",
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
        notes: "友達 (full kanji) instead of 友だち",
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
        notes: "友達 + へ",
      },
      {
        segments: [
          { text: "私[わたし]が 病院[びょういん]に 友[とも]だちに" },
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
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "病院[びょういん]に 友[とも]だちを" },
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
        notes: "見舞いに行く (visit sick person) — idiomatic for \"see a friend at hospital\"",
      },
    ],
  },
  {
    english: "I'm going to the sea this weekend to surf.",
    hint: "surf = サーフィン (as in サーフィンをする)",
    answers: [
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
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "私[わたし]は 海[うみ]に 週末[しゅうまつ] サーフィンを" },
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
        notes: "Destination first, then time",
      },
      {
        segments: [
          { text: "私[わたし]は 海[うみ]へ 週末[しゅうまつ] サーフィンを" },
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
        notes: "Destination first + へ",
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
        notes: "を dropped (casual)",
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
        notes: "を dropped + へ",
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
        notes: "今週末は + 私は dropped",
      },
    ],
  },
  {
    english: "Isn't Saki going to the supermarket to buy fruit?",
    hint: "Saki = さき",
    answers: [
      {
        segments: [
          { text: "さきさんは スーパーに 果物[くだもの]を" },
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
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "さきさんは スーパーへ 果物[くだもの]を" },
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
          { text: "か" },
        ],
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "さきさんは 果物[くだもの]を" },
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
          { text: "か" },
        ],
        notes: "Purpose before destination",
      },
      {
        segments: [
          { text: "さきさんは 果物[くだもの]を" },
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
          { text: "か" },
        ],
        notes: "Purpose before destination + へ",
      },
      {
        segments: [
          { text: "さきさんが スーパーに 果物[くだもの]を" },
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
          { text: "か" },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "さきさんが スーパーへ 果物[くだもの]を" },
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
          { text: "か" },
        ],
        notes: "が + へ",
      },
    ],
  },
  {
    english: "Takeshi goes to Italy to eat pizza.",
    hint: "Takeshi = たけし",
    answers: [
      {
        segments: [
          { text: "たけしさんは イタリアへ ピザを" },
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
          { text: "たけしさんは イタリアに ピザを" },
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
        notes: "に instead of へ",
      },
      {
        segments: [
          { text: "たけしさんは ピザを" },
          { text: "食[た]べに", blank: true },
          { text: "イタリアへ", blank: true },
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
          { text: "たけしさんは ピザを" },
          { text: "食[た]べに", blank: true },
          { text: "イタリアに", blank: true },
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
        notes: "Purpose before destination + に",
      },
      {
        segments: [
          { text: "たけしさんが イタリアへ ピザを" },
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
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "たけしさんが イタリアに ピザを" },
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
        notes: "が + に",
      },
    ],
  },
  {
    english: "Sota goes to cram school to study kanji.",
    hint: "Sota = そうた",
    answers: [
      {
        segments: [
          { text: "そうたさんは 塾[じゅく]へ 漢字[かんじ]を 勉強[べんきょう]" },
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
          { text: "そうたさんは 塾[じゅく]に 漢字[かんじ]を 勉強[べんきょう]" },
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
        notes: "に instead of へ",
      },
      {
        segments: [
          { text: "そうたさんは 漢字[かんじ]を 勉強[べんきょう]" },
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
        notes: "Purpose before destination",
      },
      {
        segments: [
          { text: "そうたさんは 漢字[かんじ]を 勉強[べんきょう]" },
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
        notes: "Purpose before destination + に",
      },
    ],
  },
  {
    english: "Rina goes to the restaurant to eat tonkatsu.",
    hint: "Rina = りな",
    answers: [
      {
        segments: [
          { text: "りなさんは レストランに とんかつを" },
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
          { text: "りなさんは レストランへ とんかつを" },
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
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "りなさんは とんかつを" },
          { text: "食[た]べに", blank: true },
          { text: "レストランに", blank: true },
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
          { text: "りなさんは とんかつを" },
          { text: "食[た]べに", blank: true },
          { text: "レストランへ", blank: true },
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
  {
    english: "I'm going to Hana's place to return her textbook.",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "私[わたし]は はなさんのうちに 教科書[きょうかしょ]を" },
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
      },
      {
        segments: [
          { text: "私[わたし]は はなさんのうちへ 教科書[きょうかしょ]を" },
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
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "はなさんのうちに 教科書[きょうかしょ]を" },
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
        notes: "私は dropped",
      },
      {
        segments: [
          { text: "はなさんのうちへ 教科書[きょうかしょ]を" },
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
        notes: "私は dropped + へ",
      },
      {
        segments: [
          { text: "教科書[きょうかしょ]を はなさんのうちに" },
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
        notes: "Object fronted",
      },
      {
        segments: [
          { text: "私[わたし]は 教科書[きょうかしょ]を はなさんのうちに" },
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
        notes: "私は + object before destination",
      },
      {
        segments: [
          { text: "私[わたし]は 教科書[きょうかしょ]を はなさんのうちへ" },
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
        notes: "私は + object before destination + へ",
      },
      {
        segments: [
          { text: "私[わたし]は はなさんのところに 教科書[きょうかしょ]を" },
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
        notes: "ところ instead of うち",
      },
      {
        segments: [
          { text: "私[わたし]は はなさんのところへ 教科書[きょうかしょ]を" },
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
    ],
  },
  {
    english: "Daiki is going to the teacher's place to ask about the homework.",
    hint: "Daiki = だいき",
    answers: [
      {
        segments: [
          {
            text: "だいきさんは 先生[せんせい]のところに 宿題[しゅくだい]について",
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
      },
      {
        segments: [
          {
            text: "だいきさんは 先生[せんせい]のところへ 宿題[しゅくだい]について",
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
        notes: "へ instead of に",
      },
      {
        segments: [
          {
            text: "だいきさんは 先生[せんせい]のところに 宿題[しゅくだい]のことを",
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
        notes: "のことを instead of について",
      },
      {
        segments: [
          {
            text: "だいきさんは 先生[せんせい]のところへ 宿題[しゅくだい]のことを",
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
        notes: "のことを + へ",
      },
      {
        segments: [
          {
            text: "だいきさんは 宿題[しゅくだい]について 先生[せんせい]のところに",
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
        notes: "について fronted",
      },
      {
        segments: [
          { text: "だいきさんは 先生[せんせい]のところに 宿題[しゅくだい]を" },
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
        notes: "宿題を (direct object) instead of について",
      },
      {
        segments: [
          { text: "だいきさんは 先生[せんせい]のところへ 宿題[しゅくだい]を" },
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
        notes: "宿題を + へ",
      },
    ],
  },
  {
    english: "I'm going to Mei's place to borrow a dictionary.",
    hint: "Mei = めい",
    answers: [
      {
        segments: [
          { text: "私[わたし]は めいさんのうちに 辞書[じしょ]を" },
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
      },
      {
        segments: [
          { text: "私[わたし]は めいさんのところに 辞書[じしょ]を" },
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
        notes: "ところ instead of うち",
      },
      {
        segments: [
          { text: "私[わたし]は めいさんのうちへ 辞書[じしょ]を" },
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
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "私[わたし]は めいさんのところへ 辞書[じしょ]を" },
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
          { text: "めいさんのうちに 辞書[じしょ]を" },
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
        notes: "私は dropped",
      },
      {
        segments: [
          { text: "めいさんのうちへ 辞書[じしょ]を" },
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
        notes: "私は dropped + へ",
      },
      {
        segments: [
          { text: "私[わたし]は 辞書[じしょ]を" },
          { text: "借[か]りに", blank: true },
          { text: "めいさんのうちに", blank: true },
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
          { text: "私[わたし]は 辞書[じしょ]を" },
          { text: "借[か]りに", blank: true },
          { text: "めいさんのところに", blank: true },
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
        notes: "Purpose before destination + ところ",
      },
    ],
  },
  {
    english: "I'm going to Riku's place to watch a movie.",
    hint: "Riku = りく",
    answers: [
      {
        segments: [
          { text: "私[わたし]は りくさんのうちに 映画[えいが]を" },
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
      },
      {
        segments: [
          { text: "私[わたし]は りくさんのうちへ 映画[えいが]を" },
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
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "私[わたし]は りくさんのところに 映画[えいが]を" },
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
        notes: "ところ instead of うち",
      },
      {
        segments: [
          { text: "私[わたし]は りくさんのところへ 映画[えいが]を" },
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
          { text: "映画[えいが]を" },
          { text: "見[み]に", blank: true },
          { text: "りくさんのうちに", blank: true },
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
          { text: "映画[えいが]を" },
          { text: "見[み]に", blank: true },
          { text: "りくさんのうちへ", blank: true },
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
      {
        segments: [
          { text: "私[わたし]は りくさんのいえに 映画[えいが]を" },
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
        notes: "いえ instead of うち",
      },
      {
        segments: [
          { text: "私[わたし]は りくさんのいえへ 映画[えいが]を" },
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
        notes: "いえ + へ",
      },
    ],
  },
  {
    english: "Hana goes to the bookstore to buy a souvenir.",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "はなさんは 本屋[ほんや]へ お 土産[みやげ]を" },
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
          { text: "はなさんは 本屋[ほんや]に お 土産[みやげ]を" },
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
        notes: "に instead of へ",
      },
      {
        segments: [
          { text: "はなさんは お 土産[みやげ]を" },
          { text: "買[か]いに", blank: true },
          { text: "本屋[ほんや]へ", blank: true },
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
          { text: "はなさんは お 土産[みやげ]を" },
          { text: "買[か]いに", blank: true },
          { text: "本屋[ほんや]に", blank: true },
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
        notes: "Purpose before destination + に",
      },
      {
        segments: [
          { text: "はなさんは 本屋[ほんや]へ 土産[みやげ]を" },
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
        notes: "土産 without honorific お",
      },
      {
        segments: [
          { text: "はなさんは 本屋[ほんや]に 土産[みやげ]を" },
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
        notes: "土産 + に",
      },
      {
        segments: [
          { text: "はなさんが 本屋[ほんや]へ お 土産[みやげ]を" },
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
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "はなさんが 本屋[ほんや]に お 土産[みやげ]を" },
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
        notes: "が + に",
      },
    ],
  },
  {
    english: "I'm going to the convenience store to buy some water.",
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
          { text: "コンビニに 水[みず]を" },
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
        notes: "私は dropped",
      },
      {
        segments: [
          { text: "コンビニへ 水[みず]を" },
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
        notes: "私は dropped + へ",
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
