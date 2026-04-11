import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I rarely eat fish.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "あまり", blank: true },
          { text: "魚[さかな]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は variant",
      },
      {
        segments: [
          { text: "私[わたし]は 魚[さかな]を" },
          { text: "あまり", blank: true },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は variant with object first",
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "あまり", blank: true },
          { text: "魚[さかな]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私、 variant",
      },
      {
        segments: [
          { text: "あまり", blank: true },
          { text: "魚[さかな]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "魚[さかな]を" },
          { text: "あまり", blank: true },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "I sometimes drink tea at the café.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "時々[ときどき]", blank: true },
          { text: "カフェで お茶[おちゃ]を" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は variant",
      },
      {
        segments: [
          { text: "私[わたし]は カフェで" },
          { text: "時々[ときどき]", blank: true },
          { text: "お 茶[ちゃ]を" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は variant with location first",
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "時々[ときどき]", blank: true },
          { text: "カフェで お茶[おちゃ]を" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私、 variant",
      },
      {
        segments: [
          { text: "時々[ときどき]", blank: true },
          { text: "カフェで お茶[おちゃ]を" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "カフェで" },
          { text: "時々[ときどき]", blank: true },
          { text: "お 茶[ちゃ]を" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "カフェで お茶[おちゃ]を" },
          { text: "時々[ときどき]", blank: true },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "Ms. Takeda doesn't drink coffee at all, right?",
    hint: "Seeking agreement using ね",
    answers: [
      {
        segments: [
          { text: "武田[たけだ]さんは" },
          { text: "全然[ぜんぜん]", blank: true },
          { text: "コーヒーを" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "ね" },
        ],
      },
      {
        segments: [
          { text: "武田[たけだ]さんはコーヒーを" },
          { text: "全然[ぜんぜん]", blank: true },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "ね" },
        ],
      },
      {
        segments: [
          { text: "武田[たけだ]さんはコーヒーを" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "ね" },
          { text: "全然[ぜんぜん]", blank: true },
        ],
      },
    ],
  },
  {
    english: "I usually eat breakfast, but I'll skip it today.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "たいてい", blank: true },
          { text: "朝 ご飯[ごはん]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が 今日は" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は variant",
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "たいてい", blank: true },
          { text: "朝 ご飯[ごはん]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が 今日は" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私、 variant",
      },
      {
        segments: [
          { text: "たいてい", blank: true },
          { text: "朝 ご飯[ごはん]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が 今日は" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "朝 ご飯[ごはん]を" },
          { text: "たいてい", blank: true },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が 今日は" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "朝 ご飯[ごはん]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が" },
          { text: "たいてい", blank: true },
          { text: "今日は" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "I often come here.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "よく", blank: true },
          { text: "ここに" },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は variant",
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "よく", blank: true },
          { text: "ここに" },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私、 variant",
      },
      {
        segments: [
          { text: "よく", blank: true },
          { text: "ここに" },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "ここに" },
          { text: "よく", blank: true },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "I don't listen to music at all, but I do like TV.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "全然[ぜんぜん]", blank: true },
          { text: "音楽[おんがく]を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "がテレビが 好[す]きです" },
        ],
        notes: "Explicit 私は variant",
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "全然[ぜんぜん]", blank: true },
          { text: "音楽[おんがく]を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "がテレビが 好[す]きです" },
        ],
        notes: "Explicit 私、 variant",
      },
      {
        segments: [
          { text: "全然[ぜんぜん]", blank: true },
          { text: "音楽[おんがく]を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "がテレビが 好[す]きです" },
        ],
      },
      {
        segments: [
          { text: "音楽[おんがく]を" },
          { text: "全然[ぜんぜん]", blank: true },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "がテレビが 好[す]きです" },
        ],
      },
      {
        segments: [
          { text: "音楽[おんがく]を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "が" },
          { text: "全然[ぜんぜん]", blank: true },
          { text: "テレビが 好[す]きです" },
        ],
      },
    ],
  },
  {
    english: "I usually go to school at 8 o'clock, but I sometimes go at 7:30.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "たいてい", blank: true },
          { text: "八時[はちじ]に 学校[がっこう]に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が" },
          { text: "時々[ときどき]", blank: true },
          { text: "七時半[しちじはん]に" },
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
        notes: "Explicit 私は variant",
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "たいてい", blank: true },
          { text: "八時[はちじ]に 学校[がっこう]に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が" },
          { text: "時々[ときどき]", blank: true },
          { text: "七時半[しちじはん]に" },
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
        notes: "Explicit 私、 variant",
      },
      {
        segments: [
          { text: "たいてい", blank: true },
          { text: "八時[はちじ]に 学校[がっこう]に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が" },
          { text: "時々[ときどき]", blank: true },
          { text: "七時半[しちじはん]に" },
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
      },
      {
        segments: [
          { text: "八時[はちじ]に" },
          { text: "たいてい", blank: true },
          { text: "学校[がっこう]に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が" },
          { text: "時々[ときどき]", blank: true },
          { text: "七時半[しちじはん]に" },
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
      },
      {
        segments: [
          { text: "八時[はちじ]に 学校[がっこう]に" },
          { text: "たいてい", blank: true },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が" },
          { text: "時々[ときどき]", blank: true },
          { text: "七時半[しちじはん]に" },
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
      },
    ],
  },
  {
    english: "I sometimes eat ramen for breakfast.",
    hint: "ramen -> ラーメン",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "時々[ときどき]", blank: true },
          { text: "朝 ご飯[ごはん]に ラーメンを" },
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
        notes: "Explicit 私は variant",
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "時々[ときどき]", blank: true },
          { text: "朝 ご飯[ごはん]に ラーメンを" },
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
        notes: "Explicit 私、 variant",
      },
      {
        segments: [
          { text: "時々[ときどき]", blank: true },
          { text: "朝 ご飯[ごはん]に ラーメンを" },
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
          { text: "朝 ご飯[ごはん]に" },
          { text: "時々[ときどき]", blank: true },
          { text: "ラーメンを" },
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
          { text: "朝 ご飯[ごはん]に ラーメンを" },
          { text: "時々[ときどき]", blank: true },
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
    ],
  },
  {
    english: "Yamamoto usually drinks tea in the evening.",
    answers: [
      {
        segments: [
          { text: "山本[やまもと]さんは" },
          { text: "たいてい", blank: true },
          { text: "夜[よる]お 茶[おちゃ]を" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "山本[やまもと]さんは 夜[よる]お 茶[おちゃ]を" },
          { text: "たいてい", blank: true },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "山本[やまもと]さんは 夜[よる]" },
          { text: "たいてい", blank: true },
          { text: "お 茶[ちゃ]を" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "I don't eat meat at all.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "全然[ぜんぜん]", blank: true },
          { text: "肉[にく]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は variant",
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "全然[ぜんぜん]", blank: true },
          { text: "肉[にく]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私、 variant",
      },
      {
        segments: [
          { text: "全然[ぜんぜん]", blank: true },
          { text: "肉[にく]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "肉[にく]を" },
          { text: "全然[ぜんぜん]", blank: true },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "I rarely go to the cafe, but I like the coffee there.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "あまり", blank: true },
          { text: "カフェに" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "がそこのコーヒーが 好[す]きです" },
        ],
        notes: "Explicit 私は variant",
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "あまり", blank: true },
          { text: "カフェに" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "がそこのコーヒーが 好[す]きです" },
        ],
        notes: "Explicit 私、 variant",
      },
      {
        segments: [
          { text: "あまり", blank: true },
          { text: "カフェに" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "がそこのコーヒーが 好[す]きです" },
        ],
      },
      {
        segments: [
          { text: "カフェに" },
          { text: "あまり", blank: true },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "がそこのコーヒーが 好[す]きです" },
        ],
      },
    ],
  },
  {
    english: "Yamamoto doesn't drink juice at all, right?",
    hint: "juice -> ジュース; Seeking agreement with よね",
    answers: [
      {
        segments: [
          { text: "山本[やまもと]さんは" },
          { text: "全然[ぜんぜん]", blank: true },
          { text: "ジュースを" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "よね" },
        ],
      },
      {
        segments: [
          { text: "山本[やまもと]さんはジュースを" },
          { text: "全然[ぜんぜん]", blank: true },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "よね" },
        ],
      },
      {
        segments: [
          { text: "山本[やまもと]さんはジュースを" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "よね" },
          { text: "全然[ぜんぜん]", blank: true },
        ],
      },
    ],
  },
  {
    english:
      "I sometimes eat a few vegetables for breakfast, but I don't really like them.",
    hint: "a few -> 少し",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "時々[ときどき]", blank: true },
          {
            text: "朝 ご飯[ごはん]に 少し[すこし]野菜[やさい]を",
          },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が" },
          { text: "あまり", blank: true },
          { text: "好[す]きじゃないです" },
        ],
        notes: "Explicit 私は variant",
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "時々[ときどき]", blank: true },
          {
            text: "朝 ご飯[ごはん]に 少し[すこし]野菜[やさい]を",
          },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が" },
          { text: "あまり", blank: true },
          { text: "好[す]きじゃないです" },
        ],
        notes: "Explicit 私、 variant",
      },
      {
        segments: [
          { text: "時々[ときどき]", blank: true },
          {
            text: "朝 ご飯[ごはん]に 少し[すこし]野菜[やさい]を",
          },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が" },
          { text: "あまり", blank: true },
          { text: "好[す]きじゃないです" },
        ],
      },
      {
        segments: [
          { text: "朝 ご飯[ごはん]に" },
          { text: "時々[ときどき]", blank: true },
          { text: "少し[すこし]野菜[やさい]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が" },
          { text: "あまり", blank: true },
          { text: "好[す]きじゃないです" },
        ],
      },
      {
        segments: [
          { text: "時々[ときどき]", blank: true },
          {
            text: "朝 ご飯[ごはん]に 少し[すこし]野菜[やさい]を",
          },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が 好[す]きじゃないです" },
          { text: "あまり", blank: true },
        ],
      },
    ],
  },
  {
    english: "I don't really watch TV.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "あまり", blank: true },
          { text: "テレビを" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Adverb before the object",
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "あまり", blank: true },
          { text: "テレビを" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "私、 variant with adverb before the object",
      },
      {
        segments: [
          { text: "私[わたし]は テレビを" },
          { text: "あまり", blank: true },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Adverb directly before the verb",
      },
      {
        segments: [
          { text: "私[わたし]、 テレビを" },
          { text: "あまり", blank: true },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "私、 variant with object first",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "あんまり", blank: true },
          { text: "テレビを" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Casual あんまり variant",
      },
      {
        segments: [
          { text: "私[わたし]は テレビを" },
          { text: "あんまり", blank: true },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Casual variant with object first",
      },
      {
        segments: [
          { text: "私[わたし]は テレビは" },
          { text: "あまり", blank: true },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Contrastive テレビは variant",
      },
      {
        segments: [
          { text: "私[わたし]、 テレビは" },
          { text: "あまり", blank: true },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "私、 contrastive テレビは variant",
      },
      {
        segments: [
          { text: "私[わたし]は テレビは" },
          { text: "あんまり", blank: true },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Contrastive テレビは with casual adverb",
      },
    ],
  },
  {
    english: "I don't really go home on weekends.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]に" },
          { text: "あまり", blank: true },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]、 週末[しゅうまつ]に" },
          { text: "あまり", blank: true },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]は" },
          { text: "あまり", blank: true },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]、 週末[しゅうまつ]は" },
          { text: "あまり", blank: true },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]に" },
          { text: "あんまり", blank: true },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]は" },
          { text: "あんまり", blank: true },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "あまり", blank: true },
          { text: "週末[しゅうまつ]に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "あまり", blank: true },
          { text: "週末[しゅうまつ]に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "あんまり", blank: true },
          { text: "週末[しゅうまつ]に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]に" },
          { text: "あまり", blank: true },
          { text: "家[いえ]に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]、 週末[しゅうまつ]に" },
          { text: "あまり", blank: true },
          { text: "家[いえ]に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]に" },
          { text: "あんまり", blank: true },
          { text: "家[いえ]に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]に" },
          { text: "あまり", blank: true },
          { text: "うちに" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]、 週末[しゅうまつ]に" },
          { text: "あまり", blank: true },
          { text: "うちに" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "I don't sleep at all on weekends.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]に" },
          { text: "ぜんぜん", blank: true },
          {
            text: "寝[ね]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]、 週末[しゅうまつ]に" },
          { text: "ぜんぜん", blank: true },
          {
            text: "寝[ね]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "ぜんぜん", blank: true },
          { text: "週末[しゅうまつ]に" },
          {
            text: "寝[ね]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "ぜんぜん", blank: true },
          { text: "週末[しゅうまつ]に" },
          {
            text: "寝[ね]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "週末[しゅうまつ]は" },
          { text: "ぜんぜん", blank: true },
          {
            text: "寝[ね]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "I don't drink coffee at all in the morning.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 朝[あさ]に" },
          { text: "ぜんぜん", blank: true },
          {
            text: "コーヒーを",
          },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]、 朝[あさ]に" },
          { text: "ぜんぜん", blank: true },
          { text: "コーヒーを" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 朝[あさ]" },
          { text: "ぜんぜん", blank: true },
          { text: "コーヒーを" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 朝[あさ]に コーヒーを" },
          { text: "ぜんぜん", blank: true },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]、 朝[あさ]に コーヒーを" },
          { text: "ぜんぜん", blank: true },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 朝[あさ]コーヒーを" },
          { text: "ぜんぜん", blank: true },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 朝[あさ]に" },
          { text: "ぜんぜん", blank: true },
          { text: "コーヒーは" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]、 朝[あさ]に" },
          { text: "ぜんぜん", blank: true },
          { text: "コーヒーは" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "朝[あさ]は 私[わたし]は" },
          { text: "ぜんぜん", blank: true },
          { text: "コーヒーを" },
          {
            text: "飲[の]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "Hana doesn't really eat lunch.",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "はなは" },
          { text: "あまり", blank: true },
          { text: "昼[ひる]ご 飯[ごはん]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "はなは" },
          { text: "あんまり", blank: true },
          { text: "昼[ひる]ご 飯[ごはん]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "はなは 昼[ひる]ご 飯[ごはん]を" },
          { text: "あまり", blank: true },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "はなは 昼[ひる]ご 飯[ごはん]を" },
          { text: "あんまり", blank: true },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "はなが" },
          { text: "あまり", blank: true },
          { text: "昼[ひる]ご 飯[ごはん]を" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "I don't come to the library very often.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 図書館[としょかん]に" },
          { text: "あまり", blank: true },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]、 図書館[としょかん]に" },
          { text: "あまり", blank: true },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 図書館[としょかん]に" },
          { text: "あんまり", blank: true },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 図書館[としょかん]には" },
          { text: "あまり", blank: true },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]、 図書館[としょかん]には" },
          { text: "あまり", blank: true },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 図書館[としょかん]には" },
          { text: "あんまり", blank: true },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "あまり", blank: true },
          { text: "図書館[としょかん]に" },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]、" },
          { text: "あまり", blank: true },
          { text: "図書館[としょかん]に" },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "あんまり", blank: true },
          { text: "図書館[としょかん]に" },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "I don't watch movies at all in the evenings.",
    hint:
      'For a habitual meaning, use まいばん or 夜に, not こんばん ("tonight").',
    answers: [
      {
        segments: [
          { text: "私[わたし]は 毎晩[まいばん]" },
          { text: "ぜんぜん", blank: true },
          { text: "映画[えいが]を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]、 毎晩[まいばん]" },
          { text: "ぜんぜん", blank: true },
          { text: "映画[えいが]を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 毎晩[まいばん]映画[えいが]を" },
          { text: "ぜんぜん", blank: true },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "毎晩[まいばん]、私[わたし]は" },
          { text: "ぜんぜん", blank: true },
          { text: "映画[えいが]を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 夜[よる]に" },
          { text: "ぜんぜん", blank: true },
          { text: "映画[えいが]を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]、 夜[よる]に" },
          { text: "ぜんぜん", blank: true },
          { text: "映画[えいが]を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
    ],
  },
]
