import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I sometimes eat a hamburger for breakfast.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "時々[ときどき]", blank: true },
          { text: "朝[あさ]ご飯[はん]", blank: true },
          { text: "に" },
          { text: "ハンバーガー", blank: true },
          { text: "を" },
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
        notes: "Standard word order: topic は, time に, object を",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "朝[あさ]ご飯[はん]", blank: true },
          { text: "に" },
          { text: "時々[ときどき]", blank: true },
          { text: "ハンバーガー", blank: true },
          { text: "を" },
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
        notes: "時々 moved after 朝ご飯に",
      },
      // Dropped 私は variants
      {
        segments: [
          { text: "時々[ときどき]", blank: true },
          { text: "朝[あさ]ご飯[はん]", blank: true },
          { text: "に" },
          { text: "ハンバーガー", blank: true },
          { text: "を" },
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
        notes:
          "Dropped 私は; Standard word order: topic は, time に, object を",
      },
      {
        segments: [
          { text: "朝[あさ]ご飯[はん]", blank: true },
          { text: "に" },
          { text: "時々[ときどき]", blank: true },
          { text: "ハンバーガー", blank: true },
          { text: "を" },
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
        notes: "Dropped 私は; 時々 moved after 朝ご飯に",
      },
      // 私、variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "時々[ときどき]", blank: true },
          { text: "朝[あさ]ご飯[はん]", blank: true },
          { text: "に" },
          { text: "ハンバーガー", blank: true },
          { text: "を" },
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
        notes:
          "Swap は for 、Standard word order: topic は, time に, object を",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "朝[あさ]ご飯[はん]", blank: true },
          { text: "に" },
          { text: "時々[ときどき]", blank: true },
          { text: "ハンバーガー", blank: true },
          { text: "を" },
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
        notes: "Swap は for 、時々 moved after 朝ご飯に",
      },
      // Fronted 時々 variant
      {
        segments: [
          { text: "時々[ときどき]、" },
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "朝[あさ]ご飯[はん]", blank: true },
          { text: "に" },
          { text: "ハンバーガー", blank: true },
          { text: "を" },
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
        notes: "時々 fronted to the beginning of the sentence",
      },
    ],
  },
  {
    english: "I read books at the library.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "図書館[としょかん]", blank: true },
          { text: "で" },
          { text: "本[ほん]", blank: true },
          { text: "を" },
          {
            text: "読[よ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Standard word order: location で + object を + verb",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "本[ほん]", blank: true },
          { text: "を" },
          { text: "図書館[としょかん]", blank: true },
          { text: "で" },
          {
            text: "読[よ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Reversed order: object を + location で + verb",
      },
      // Dropped 私は variants
      {
        segments: [
          { text: "図書館[としょかん]", blank: true },
          { text: "で" },
          { text: "本[ほん]", blank: true },
          { text: "を" },
          {
            text: "読[よ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes:
          "Dropped 私は; Standard word order: location で + object を + verb",
      },
      {
        segments: [
          { text: "本[ほん]", blank: true },
          { text: "を" },
          { text: "図書館[としょかん]", blank: true },
          { text: "で" },
          {
            text: "読[よ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; Reversed order: object を + location で + verb",
      },
      // 私、variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "図書館[としょかん]", blank: true },
          { text: "で" },
          { text: "本[ほん]", blank: true },
          { text: "を" },
          {
            text: "読[よ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; Standard word order",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "本[ほん]", blank: true },
          { text: "を" },
          { text: "図書館[としょかん]", blank: true },
          { text: "で" },
          {
            text: "読[よ]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; Reversed order",
      },
    ],
  },
  {
    english: "I drink water.",
    answers: [
      // 私は variant
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "水[みず]", blank: true },
          { text: "を" },
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
        notes: "私は; standard",
      },
      // Dropped 私は variant
      {
        segments: [
          { text: "水[みず]", blank: true },
          { text: "を" },
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
        notes: "Dropped 私は",
      },
      // 私、variant
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "水[みず]", blank: true },
          { text: "を" },
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
        notes: "私、instead of 私は",
      },
    ],
  },
  {
    english: "I write with a pen.",
    answers: [
      // 私は variant
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "ペン", blank: true },
          { text: "で" },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は; standard",
      },
      // Dropped 私は variant
      {
        segments: [
          { text: "ペン", blank: true },
          { text: "で" },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は",
      },
      // 私、variant
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "ペン", blank: true },
          { text: "で" },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は",
      },
    ],
  },
  {
    english: "I drink coffee at a cafe.",
    answers: [
      // 私は + カフェ variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "カフェ", blank: true },
          { text: "で" },
          { text: "コーヒー", blank: true },
          { text: "を" },
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
        notes: "Standard word order: topic は, location で, object を, verb",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "コーヒー", blank: true },
          { text: "を" },
          { text: "カフェ", blank: true },
          { text: "で" },
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
        notes: "Object before location: コーヒーを before カフェで",
      },
      // 私は + 喫茶店 variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "喫茶店[きっさてん]", blank: true },
          { text: "で" },
          { text: "コーヒー", blank: true },
          { text: "を" },
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
        notes: "喫茶店 instead of カフェ",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "コーヒー", blank: true },
          { text: "を" },
          { text: "喫茶店[きっさてん]", blank: true },
          { text: "で" },
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
        notes: "喫茶店; Object before location",
      },
      // Dropped 私は + カフェ variants
      {
        segments: [
          { text: "カフェ", blank: true },
          { text: "で" },
          { text: "コーヒー", blank: true },
          { text: "を" },
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
        notes: "Dropped 私は; location first",
      },
      {
        segments: [
          { text: "コーヒー", blank: true },
          { text: "を" },
          { text: "カフェ", blank: true },
          { text: "で" },
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
        notes: "Dropped 私は; object first",
      },
      // Dropped 私は + 喫茶店 variants
      {
        segments: [
          { text: "喫茶店[きっさてん]", blank: true },
          { text: "で" },
          { text: "コーヒー", blank: true },
          { text: "を" },
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
        notes: "Dropped 私は; 喫茶店; location first",
      },
      {
        segments: [
          { text: "コーヒー", blank: true },
          { text: "を" },
          { text: "喫茶店[きっさてん]", blank: true },
          { text: "で" },
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
        notes: "Dropped 私は; 喫茶店; object first",
      },
      // 私、+ カフェ variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "カフェ", blank: true },
          { text: "で" },
          { text: "コーヒー", blank: true },
          { text: "を" },
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
        notes: "私、instead of 私は; location first",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "コーヒー", blank: true },
          { text: "を" },
          { text: "カフェ", blank: true },
          { text: "で" },
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
        notes: "私、instead of 私は; object first",
      },
      // 私、+ 喫茶店 variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "喫茶店[きっさてん]", blank: true },
          { text: "で" },
          { text: "コーヒー", blank: true },
          { text: "を" },
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
        notes: "私、instead of 私は; 喫茶店; location first",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "コーヒー", blank: true },
          { text: "を" },
          { text: "喫茶店[きっさてん]", blank: true },
          { text: "で" },
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
        notes: "私、instead of 私は; 喫茶店; object first",
      },
    ],
  },
  {
    english: "I watch TV at home.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "テレビ", blank: true },
          { text: "を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は; location first using 家",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "うち", blank: true },
          { text: "で" },
          { text: "テレビ", blank: true },
          { text: "を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は; location first using うち",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "テレビ", blank: true },
          { text: "を" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は; object first using 家",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "テレビ", blank: true },
          { text: "を" },
          { text: "うち", blank: true },
          { text: "で" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は; object first using うち",
      },
      // Dropped 私は variants
      {
        segments: [
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "テレビ", blank: true },
          { text: "を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; location first using 家",
      },
      {
        segments: [
          { text: "うち", blank: true },
          { text: "で" },
          { text: "テレビ", blank: true },
          { text: "を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; location first using うち",
      },
      {
        segments: [
          { text: "テレビ", blank: true },
          { text: "を" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; object first using 家",
      },
      {
        segments: [
          { text: "テレビ", blank: true },
          { text: "を" },
          { text: "うち", blank: true },
          { text: "で" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; object first using うち",
      },
      // 私、variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "テレビ", blank: true },
          { text: "を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; location first using 家",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "うち", blank: true },
          { text: "で" },
          { text: "テレビ", blank: true },
          { text: "を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; location first using うち",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "テレビ", blank: true },
          { text: "を" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; object first using 家",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "テレビ", blank: true },
          { text: "を" },
          { text: "うち", blank: true },
          { text: "で" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; object first using うち",
      },
    ],
  },
  {
    english: "I wake up at seven o'clock.",
    hint: "に can mark a point in time",
    answers: [
      // 私は variant
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "七[しち]時[じ]", blank: true },
          { text: "に" },
          {
            text: "起[お]きる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Basic answer: は marks topic, に marks time point",
      },
      // Dropped 私は variant
      {
        segments: [
          { text: "七[しち]時[じ]", blank: true },
          { text: "に" },
          {
            text: "起[お]きる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; に marks time point",
      },
      // 私、variant
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "七[しち]時[じ]", blank: true },
          { text: "に" },
          {
            text: "起[お]きる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; に marks time point",
      },
      // 私が variant
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "が" },
          { text: "七[しち]時[じ]", blank: true },
          { text: "に" },
          {
            text: "起[お]きる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using が instead of は for subject marker",
      },
    ],
  },
  {
    english: "Kenji comes to school on Sundays.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさん", blank: true },
          { text: "は" },
          { text: "日曜日[にちようび]", blank: true },
          { text: "に" },
          { text: "学校[がっこう]", blank: true },
          { text: "に" },
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
        notes: "Standard word order: topic は, Sunday に, school に, 来る",
      },
      {
        segments: [
          { text: "けんじさん", blank: true },
          { text: "は" },
          { text: "日曜日[にちようび]", blank: true },
          { text: "に" },
          { text: "学校[がっこう]", blank: true },
          { text: "へ" },
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
        notes: "へ instead of に for destination (school)",
      },
      {
        segments: [
          { text: "けんじさん", blank: true },
          { text: "は" },
          { text: "学校[がっこう]", blank: true },
          { text: "に" },
          { text: "日曜日[にちようび]", blank: true },
          { text: "に" },
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
        notes: "Reversed adverb order: school に first, then Sunday に",
      },
      {
        segments: [
          { text: "けんじさん", blank: true },
          { text: "は" },
          { text: "学校[がっこう]", blank: true },
          { text: "へ" },
          { text: "日曜日[にちようび]", blank: true },
          { text: "に" },
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
        notes: "Reversed order: school へ first, then Sunday に",
      },
      {
        segments: [
          { text: "けんじさん", blank: true },
          { text: "が" },
          { text: "学校[がっこう]", blank: true },
          { text: "に" },
          { text: "日曜日[にちようび]", blank: true },
          { text: "に" },
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
        notes:
          "Unusual but valid in some contexts: が instead of は for subject",
      },
      {
        segments: [
          { text: "けんじさん", blank: true },
          { text: "が" },
          { text: "学校[がっこう]", blank: true },
          { text: "へ" },
          { text: "日曜日[にちようび]", blank: true },
          { text: "に" },
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
        notes:
          "Unusual but valid in some contexts: が subject + school へ destination",
      },
      // Fronted 日曜日 variants (without に after 日曜日)
      {
        segments: [
          { text: "日曜日[にちようび]", blank: true },
          { text: "、" },
          { text: "けんじさん", blank: true },
          { text: "が" },
          { text: "学校[がっこう]", blank: true },
          { text: "に" },
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
        notes: "Fronted 日曜日、(no に) + けんじさんが + 学校に",
      },
      {
        segments: [
          { text: "日曜日[にちようび]", blank: true },
          { text: "、" },
          { text: "けんじさん", blank: true },
          { text: "が" },
          { text: "学校[がっこう]", blank: true },
          { text: "へ" },
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
        notes: "Fronted 日曜日、(no に) + けんじさんが + 学校へ",
      },
      // Fronted 日曜日に variants (with に after 日曜日)
      {
        segments: [
          { text: "日曜日[にちようび]", blank: true },
          { text: "に、" },
          { text: "けんじさん", blank: true },
          { text: "が" },
          { text: "学校[がっこう]", blank: true },
          { text: "に" },
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
        notes: "Fronted 日曜日に、+ けんじさんが + 学校に",
      },
      {
        segments: [
          { text: "日曜日[にちようび]", blank: true },
          { text: "に、" },
          { text: "けんじさん", blank: true },
          { text: "が" },
          { text: "学校[がっこう]", blank: true },
          { text: "へ" },
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
        notes: "Fronted 日曜日に、+ けんじさんが + 学校へ",
      },
      // 日曜日は as topic variants
      {
        segments: [
          { text: "日曜日[にちようび]", blank: true },
          { text: "は" },
          { text: "けんじさん", blank: true },
          { text: "が" },
          { text: "学校[がっこう]", blank: true },
          { text: "に" },
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
        notes: "日曜日は as topic + けんじさんが + 学校に",
      },
      {
        segments: [
          { text: "日曜日[にちようび]", blank: true },
          { text: "は" },
          { text: "けんじさん", blank: true },
          { text: "が" },
          { text: "学校[がっこう]", blank: true },
          { text: "へ" },
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
        notes: "日曜日は as topic + けんじさんが + 学校へ",
      },
      // Time → destination → subject が variants (no comma)
      {
        segments: [
          { text: "日曜日[にちようび]", blank: true },
          { text: "に" },
          { text: "学校[がっこう]", blank: true },
          { text: "に" },
          { text: "けんじさん", blank: true },
          { text: "が" },
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
        notes: "日曜日に + 学校に + けんじさんが (destination before subject)",
      },
      {
        segments: [
          { text: "日曜日[にちようび]", blank: true },
          { text: "に" },
          { text: "学校[がっこう]", blank: true },
          { text: "へ" },
          { text: "けんじさん", blank: true },
          { text: "が" },
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
        notes: "日曜日に + 学校へ + けんじさんが (destination before subject)",
      },
      // Time → destination → subject が variants (with comma)
      {
        segments: [
          { text: "日曜日[にちようび]", blank: true },
          { text: "に、" },
          { text: "学校[がっこう]", blank: true },
          { text: "に" },
          { text: "けんじさん", blank: true },
          { text: "が" },
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
        notes: "日曜日に、+ 学校に + けんじさんが (destination before subject)",
      },
      {
        segments: [
          { text: "日曜日[にちようび]", blank: true },
          { text: "に、" },
          { text: "学校[がっこう]", blank: true },
          { text: "へ" },
          { text: "けんじさん", blank: true },
          { text: "が" },
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
        notes: "日曜日に、+ 学校へ + けんじさんが (destination before subject)",
      },
      // 日曜日、(no に) → destination → subject が variants
      {
        segments: [
          { text: "日曜日[にちようび]", blank: true },
          { text: "、" },
          { text: "学校[がっこう]", blank: true },
          { text: "に" },
          { text: "けんじさん", blank: true },
          { text: "が" },
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
        notes:
          "日曜日、(no に) + 学校に + けんじさんが (destination before subject)",
      },
      {
        segments: [
          { text: "日曜日[にちようび]", blank: true },
          { text: "、" },
          { text: "学校[がっこう]", blank: true },
          { text: "へ" },
          { text: "けんじさん", blank: true },
          { text: "が" },
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
        notes:
          "日曜日、(no に) + 学校へ + けんじさんが (destination before subject)",
      },
    ],
  },
  {
    english: "I go back home on weekends.",
    hint: 'Use the verb meaning "to return/go back"',
    answers: [
      // 私は + 家 variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "家[いえ]", blank: true },
          { text: "に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Base form: 週末に (time) + 家に (destination with に)",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "家[いえ]", blank: true },
          { text: "へ" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using へ instead of に for the destination (家へ)",
      },
      // 私は + うち variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "うち", blank: true },
          { text: "に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: 'Using うち instead of 家 for "home"',
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "うち", blank: true },
          { text: "へ" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using うち with へ instead of に",
      },
      // Dropped 私は + 家 variants
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "家[いえ]", blank: true },
          { text: "に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; 家に destination",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "家[いえ]", blank: true },
          { text: "へ" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; 家へ destination",
      },
      // Dropped 私は + うち variants
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "うち", blank: true },
          { text: "に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; うちに destination",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "うち", blank: true },
          { text: "へ" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; うちへ destination",
      },
      // 私、+ 家 variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "家[いえ]", blank: true },
          { text: "に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; 家に destination",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "家[いえ]", blank: true },
          { text: "へ" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; 家へ destination",
      },
      // 私、+ うち variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "うち", blank: true },
          { text: "に" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; うちに destination",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "うち", blank: true },
          { text: "へ" },
          {
            text: "帰[かえ]る",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; うちへ destination",
      },
    ],
  },
  {
    english: "I eat lunch at home on Sundays.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "日曜日[にちようび]", blank: true },
          { text: "に" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "昼[ひる]ご 飯[はん]", blank: true },
          { text: "を" },
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
        notes: "Standard word order: time に + place で + object を",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "日曜日[にちようび]", blank: true },
          { text: "に" },
          { text: "昼[ひる]ご 飯[はん]", blank: true },
          { text: "を" },
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
        notes: "Reversed order: place で before time に",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "日曜日[にちようび]", blank: true },
          { text: "に" },
          { text: "うち", blank: true },
          { text: "で" },
          { text: "昼[ひる]ご 飯[はん]", blank: true },
          { text: "を" },
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
        notes: 'うち instead of 家 for "home"',
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "うち", blank: true },
          { text: "で" },
          { text: "日曜日[にちようび]", blank: true },
          { text: "に" },
          { text: "昼[ひる]ご 飯[はん]", blank: true },
          { text: "を" },
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
        notes: "うち + place で before time に",
      },
      // Dropped 私は variants
      {
        segments: [
          { text: "日曜日[にちようび]", blank: true },
          { text: "に" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "昼[ひる]ご 飯[はん]", blank: true },
          { text: "を" },
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
        notes: "Dropped 私は; standard word order with 家",
      },
      {
        segments: [
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "日曜日[にちようび]", blank: true },
          { text: "に" },
          { text: "昼[ひる]ご 飯[はん]", blank: true },
          { text: "を" },
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
        notes: "Dropped 私は; reversed order with 家",
      },
      {
        segments: [
          { text: "日曜日[にちようび]", blank: true },
          { text: "に" },
          { text: "うち", blank: true },
          { text: "で" },
          { text: "昼[ひる]ご 飯[はん]", blank: true },
          { text: "を" },
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
        notes: "Dropped 私は; standard word order with うち",
      },
      {
        segments: [
          { text: "うち", blank: true },
          { text: "で" },
          { text: "日曜日[にちようび]", blank: true },
          { text: "に" },
          { text: "昼[ひる]ご 飯[はん]", blank: true },
          { text: "を" },
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
        notes: "Dropped 私は; reversed order with うち",
      },
      // 私、variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "日曜日[にちようび]", blank: true },
          { text: "に" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "昼[ひる]ご 飯[はん]", blank: true },
          { text: "を" },
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
        notes: "私、instead of 私は; standard word order with 家",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "日曜日[にちようび]", blank: true },
          { text: "に" },
          { text: "昼[ひる]ご 飯[はん]", blank: true },
          { text: "を" },
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
        notes: "私、instead of 私は; reversed order with 家",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "日曜日[にちようび]", blank: true },
          { text: "に" },
          { text: "うち", blank: true },
          { text: "で" },
          { text: "昼[ひる]ご 飯[はん]", blank: true },
          { text: "を" },
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
        notes: "私、instead of 私は; standard word order with うち",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "うち", blank: true },
          { text: "で" },
          { text: "日曜日[にちようび]", blank: true },
          { text: "に" },
          { text: "昼[ひる]ご 飯[はん]", blank: true },
          { text: "を" },
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
        notes: "私、instead of 私は; reversed order with うち",
      },
    ],
  },
  {
    english: "I watch tennis at home.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "うち", blank: true },
          { text: "で" },
          { text: "テニス", blank: true },
          { text: "を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は; location first using うち",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "テニス", blank: true },
          { text: "を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は; location first using 家",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "テニス", blank: true },
          { text: "を" },
          { text: "うち", blank: true },
          { text: "で" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は; object first using うち",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "テニス", blank: true },
          { text: "を" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は; object first using 家",
      },
      // Dropped 私は variants
      {
        segments: [
          { text: "うち", blank: true },
          { text: "で" },
          { text: "テニス", blank: true },
          { text: "を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; location first using うち",
      },
      {
        segments: [
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "テニス", blank: true },
          { text: "を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; location first using 家",
      },
      {
        segments: [
          { text: "テニス", blank: true },
          { text: "を" },
          { text: "うち", blank: true },
          { text: "で" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; object first using うち",
      },
      {
        segments: [
          { text: "テニス", blank: true },
          { text: "を" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; object first using 家",
      },
      // 私、variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "うち", blank: true },
          { text: "で" },
          { text: "テニス", blank: true },
          { text: "を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; location first using うち",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "テニス", blank: true },
          { text: "を" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; location first using 家",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "テニス", blank: true },
          { text: "を" },
          { text: "うち", blank: true },
          { text: "で" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; object first using うち",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "テニス", blank: true },
          { text: "を" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          {
            text: "見[み]る",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; object first using 家",
      },
    ],
  },
  {
    english: "I listen to music at home every night.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "毎晩[まいばん]", blank: true },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "音楽[おんがく]", blank: true },
          { text: "を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Standard word order: time → place + で → object + を → verb",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "毎晩[まいばん]", blank: true },
          { text: "うち", blank: true },
          { text: "で" },
          { text: "音楽[おんがく]", blank: true },
          { text: "を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "うち instead of 家",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "毎晩[まいばん]", blank: true },
          { text: "音楽[おんがく]", blank: true },
          { text: "を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Place (家で) before time (毎晩)",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "うち", blank: true },
          { text: "で" },
          { text: "毎晩[まいばん]", blank: true },
          { text: "音楽[おんがく]", blank: true },
          { text: "を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "うち + place before time order",
      },
      // Dropped 私は variants
      {
        segments: [
          { text: "毎晩[まいばん]", blank: true },
          { text: "うち", blank: true },
          { text: "で" },
          { text: "音楽[おんがく]", blank: true },
          { text: "を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; standard word order with うち",
      },
      {
        segments: [
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "毎晩[まいばん]", blank: true },
          { text: "音楽[おんがく]", blank: true },
          { text: "を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; place before time with 家",
      },
      {
        segments: [
          { text: "うち", blank: true },
          { text: "で" },
          { text: "毎晩[まいばん]", blank: true },
          { text: "音楽[おんがく]", blank: true },
          { text: "を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; place before time with うち",
      },
      // 私、variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "毎晩[まいばん]", blank: true },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "音楽[おんがく]", blank: true },
          { text: "を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; standard word order with 家",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "毎晩[まいばん]", blank: true },
          { text: "うち", blank: true },
          { text: "で" },
          { text: "音楽[おんがく]", blank: true },
          { text: "を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; standard word order with うち",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "毎晩[まいばん]", blank: true },
          { text: "音楽[おんがく]", blank: true },
          { text: "を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; place before time with 家",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "うち", blank: true },
          { text: "で" },
          { text: "毎晩[まいばん]", blank: true },
          { text: "音楽[おんがく]", blank: true },
          { text: "を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; place before time with うち",
      },
      // Fronted 毎晩 variant
      {
        segments: [
          { text: "毎晩[まいばん]、" },
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "音楽[おんがく]", blank: true },
          { text: "を" },
          {
            text: "聞[き]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: '毎晩 fronted for emphasis on "every night"',
      },
    ],
  },
  {
    english: "I study Japanese at school.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は; location first",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は; object first",
      },
      // Dropped 私は variants
      {
        segments: [
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; location first",
      },
      {
        segments: [
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; object first",
      },
      // 私、variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; location first",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
          {
            text: "勉強[べんきょう]する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; object first",
      },
    ],
  },
  {
    english: "Yuki comes to my place on weekends.",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "ゆきさん", blank: true },
          { text: "は" },
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "私[わたし]のうち", blank: true },
          { text: "に" },
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
        notes: "Basic variation: うち with に for destination, 週末に for time",
      },
      {
        segments: [
          { text: "ゆきさん", blank: true },
          { text: "は" },
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "私[わたし]のうち", blank: true },
          { text: "へ" },
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
        notes: "Using へ instead of に for destination",
      },
      {
        segments: [
          { text: "ゆきさん", blank: true },
          { text: "は" },
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "私[わたし]の家[いえ]", blank: true },
          { text: "に" },
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
        notes: "Using 家 instead of うち, with に for destination",
      },
      {
        segments: [
          { text: "ゆきさん", blank: true },
          { text: "は" },
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "私[わたし]の家[いえ]", blank: true },
          { text: "へ" },
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
        notes: "Using 家 with へ for destination",
      },
      {
        segments: [
          { text: "ゆきさん", blank: true },
          { text: "は" },
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "うち", blank: true },
          { text: "に" },
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
        notes:
          'Dropping 私の — うち alone implies "my place" in casual Japanese',
      },
      {
        segments: [
          { text: "ゆきさん", blank: true },
          { text: "は" },
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "うち", blank: true },
          { text: "へ" },
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
        notes: "うち alone (no 私の) with へ for destination",
      },
      // Fronted 週末 variants (without に after 週末)
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "、" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
          { text: "私[わたし]のうち", blank: true },
          { text: "に" },
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
        notes: "Fronted 週末、(no に) + ゆきさんが + 私のうちに",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "、" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
          { text: "私[わたし]のうち", blank: true },
          { text: "へ" },
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
        notes: "Fronted 週末、(no に) + ゆきさんが + 私のうちへ",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "、" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
          { text: "私[わたし]の家[いえ]", blank: true },
          { text: "に" },
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
        notes: "Fronted 週末、(no に) + ゆきさんが + 私の家に",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "、" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
          { text: "私[わたし]の家[いえ]", blank: true },
          { text: "へ" },
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
        notes: "Fronted 週末、(no に) + ゆきさんが + 私の家へ",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "、" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
          { text: "うち", blank: true },
          { text: "に" },
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
        notes: "Fronted 週末、(no に) + ゆきさんが + うちに",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "、" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
          { text: "うち", blank: true },
          { text: "へ" },
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
        notes: "Fronted 週末、(no に) + ゆきさんが + うちへ",
      },
      // Fronted 週末に variants (with に after 週末)
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に、" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
          { text: "私[わたし]のうち", blank: true },
          { text: "に" },
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
        notes: "Fronted 週末に、+ ゆきさんが + 私のうちに",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に、" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
          { text: "私[わたし]のうち", blank: true },
          { text: "へ" },
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
        notes: "Fronted 週末に、+ ゆきさんが + 私のうちへ",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に、" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
          { text: "私[わたし]の家[いえ]", blank: true },
          { text: "に" },
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
        notes: "Fronted 週末に、+ ゆきさんが + 私の家に",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に、" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
          { text: "私[わたし]の家[いえ]", blank: true },
          { text: "へ" },
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
        notes: "Fronted 週末に、+ ゆきさんが + 私の家へ",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に、" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
          { text: "うち", blank: true },
          { text: "に" },
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
        notes: "Fronted 週末に、+ ゆきさんが + うちに",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に、" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
          { text: "うち", blank: true },
          { text: "へ" },
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
        notes: "Fronted 週末に、+ ゆきさんが + うちへ",
      },
      // Time → destination → subject が variants (no comma)
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "私[わたし]のうち", blank: true },
          { text: "に" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
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
        notes: "週末に + 私のうちに + ゆきさんが (destination before subject)",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "私[わたし]の家[いえ]", blank: true },
          { text: "に" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
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
        notes: "週末に + 私の家に + ゆきさんが (destination before subject)",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "うち", blank: true },
          { text: "に" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
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
        notes: "週末に + うちに + ゆきさんが (destination before subject)",
      },
      // Time → destination → subject が variants (with comma after time)
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に、" },
          { text: "私[わたし]のうち", blank: true },
          { text: "に" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
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
        notes: "週末に、+ 私のうちに + ゆきさんが (destination before subject)",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に、" },
          { text: "私[わたし]の家[いえ]", blank: true },
          { text: "に" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
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
        notes: "週末に、+ 私の家に + ゆきさんが (destination before subject)",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に、" },
          { text: "うち", blank: true },
          { text: "に" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
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
        notes: "週末に、+ うちに + ゆきさんが (destination before subject)",
      },
      // 週末、(no に) → destination → subject が variants
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "、" },
          { text: "私[わたし]のうち", blank: true },
          { text: "に" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
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
        notes:
          "週末、(no に) + 私のうちに + ゆきさんが (destination before subject)",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "、" },
          { text: "私[わたし]の家[いえ]", blank: true },
          { text: "に" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
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
        notes:
          "週末、(no に) + 私の家に + ゆきさんが (destination before subject)",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "、" },
          { text: "うち", blank: true },
          { text: "に" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
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
        notes:
          "週末、(no に) + うちに + ゆきさんが (destination before subject)",
      },
      // 週末は as topic variants
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "は" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
          { text: "私[わたし]のうち", blank: true },
          { text: "に" },
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
        notes: "週末は as topic + ゆきさんが + 私のうちに",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "は" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
          { text: "私[わたし]の家[いえ]", blank: true },
          { text: "に" },
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
        notes: "週末は as topic + ゆきさんが + 私の家に",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]", blank: true },
          { text: "は" },
          { text: "ゆきさん", blank: true },
          { text: "が" },
          { text: "うち", blank: true },
          { text: "に" },
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
        notes: "週末は as topic + ゆきさんが + うちに",
      },
      // Non-fronted ゆきさんが variants
      {
        segments: [
          { text: "ゆきさん", blank: true },
          { text: "が" },
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "私[わたし]のうち", blank: true },
          { text: "に" },
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
        notes: "ゆきさんが (non-fronted) + 週末に + 私のうちに",
      },
      {
        segments: [
          { text: "ゆきさん", blank: true },
          { text: "が" },
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "私[わたし]の家[いえ]", blank: true },
          { text: "に" },
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
        notes: "ゆきさんが (non-fronted) + 週末に + 私の家に",
      },
      {
        segments: [
          { text: "ゆきさん", blank: true },
          { text: "が" },
          { text: "週末[しゅうまつ]", blank: true },
          { text: "に" },
          { text: "うち", blank: true },
          { text: "に" },
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
        notes: "ゆきさんが (non-fronted) + 週末に + うちに",
      },
    ],
  },
  {
    english: "I drink green tea at school.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
          { text: "お 茶[ちゃ]", blank: true },
          { text: "を" },
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
        notes: "Standard word order: place で + object を + verb",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "お 茶[ちゃ]", blank: true },
          { text: "を" },
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
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
        notes: "Object を before place で (reversed order)",
      },
      {
        segments: [
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "お 茶[ちゃ]", blank: true },
          { text: "を" },
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
        notes: "Topic-fronted: place で at the beginning of sentence",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
          { text: "茶[ちゃ]", blank: true },
          { text: "を" },
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
        notes: "Using 茶 instead of お茶 (less polite/more casual form)",
      },
      // Dropped 私は variants
      {
        segments: [
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
          { text: "お 茶[ちゃ]", blank: true },
          { text: "を" },
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
        notes: "Dropped 私は; standard word order",
      },
      {
        segments: [
          { text: "お 茶[ちゃ]", blank: true },
          { text: "を" },
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
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
        notes: "Dropped 私は; reversed order",
      },
      {
        segments: [
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
          { text: "茶[ちゃ]", blank: true },
          { text: "を" },
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
        notes: "Dropped 私は; using 茶",
      },
      // 私、variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
          { text: "お 茶[ちゃ]", blank: true },
          { text: "を" },
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
        notes: "私、instead of 私は; standard word order",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "お 茶[ちゃ]", blank: true },
          { text: "を" },
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
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
        notes: "私、instead of 私は; reversed order",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
          { text: "茶[ちゃ]", blank: true },
          { text: "を" },
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
        notes: "私、instead of 私は; using 茶",
      },
    ],
  },
  {
    english: "I will go to the convenience store tonight.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "今晩[こんばん]", blank: true },
          { text: "コンビニ", blank: true },
          { text: "へ" },
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
        notes: "今晩 + コンビニへ",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "今晩[こんばん]", blank: true },
          { text: "コンビニ", blank: true },
          { text: "に" },
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
        notes: "今晩 + コンビニに",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "コンビニ", blank: true },
          { text: "へ" },
          { text: "今晩[こんばん]", blank: true },
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
        notes: "コンビニへ + 今晩 (reversed word order)",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "コンビニ", blank: true },
          { text: "に" },
          { text: "今晩[こんばん]", blank: true },
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
        notes: "コンビニに + 今晩 (reversed word order)",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "今夜[こんや]", blank: true },
          { text: "コンビニ", blank: true },
          { text: "へ" },
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
        notes: "今夜 instead of 今晩; へ particle",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "今夜[こんや]", blank: true },
          { text: "コンビニ", blank: true },
          { text: "に" },
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
        notes: "今夜 instead of 今晩; に particle",
      },
      // Dropped 私は variants
      {
        segments: [
          { text: "今晩[こんばん]", blank: true },
          { text: "コンビニ", blank: true },
          { text: "へ" },
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
        notes: "Dropped 私は; 今晩 + コンビニへ",
      },
      {
        segments: [
          { text: "今晩[こんばん]", blank: true },
          { text: "コンビニ", blank: true },
          { text: "に" },
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
        notes: "Dropped 私は; 今晩 + コンビニに",
      },
      {
        segments: [
          { text: "コンビニ", blank: true },
          { text: "へ" },
          { text: "今晩[こんばん]", blank: true },
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
        notes: "Dropped 私は; コンビニへ + 今晩",
      },
      {
        segments: [
          { text: "コンビニ", blank: true },
          { text: "に" },
          { text: "今晩[こんばん]", blank: true },
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
        notes: "Dropped 私は; コンビニに + 今晩",
      },
      {
        segments: [
          { text: "今夜[こんや]", blank: true },
          { text: "コンビニ", blank: true },
          { text: "へ" },
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
        notes: "Dropped 私は; 今夜 + コンビニへ",
      },
      {
        segments: [
          { text: "今夜[こんや]", blank: true },
          { text: "コンビニ", blank: true },
          { text: "に" },
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
        notes: "Dropped 私は; 今夜 + コンビニに",
      },
      // 私、variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "今晩[こんばん]", blank: true },
          { text: "コンビニ", blank: true },
          { text: "へ" },
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
        notes: "私、instead of 私は; 今晩 + コンビニへ",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "今晩[こんばん]", blank: true },
          { text: "コンビニ", blank: true },
          { text: "に" },
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
        notes: "私、instead of 私は; 今晩 + コンビニに",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "コンビニ", blank: true },
          { text: "へ" },
          { text: "今晩[こんばん]", blank: true },
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
        notes: "私、instead of 私は; コンビニへ + 今晩",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "コンビニ", blank: true },
          { text: "に" },
          { text: "今晩[こんばん]", blank: true },
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
        notes: "私、instead of 私は; コンビニに + 今晩",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "今夜[こんや]", blank: true },
          { text: "コンビニ", blank: true },
          { text: "へ" },
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
        notes: "私、instead of 私は; 今夜 + コンビニへ",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "今夜[こんや]", blank: true },
          { text: "コンビニ", blank: true },
          { text: "に" },
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
        notes: "私、instead of 私は; 今夜 + コンビニに",
      },
      // 私が variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "が" },
          { text: "今晩[こんばん]", blank: true },
          { text: "コンビニ", blank: true },
          { text: "へ" },
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
        notes:
          'が instead of は; emphasizes "I (specifically) am going"; へ particle',
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "が" },
          { text: "今晩[こんばん]", blank: true },
          { text: "コンビニ", blank: true },
          { text: "に" },
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
        notes: "が instead of は; に particle",
      },
    ],
  },
  {
    english: "I eat fish at school.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
          { text: "魚[さかな]", blank: true },
          { text: "を" },
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
        notes: "Standard word order: place で + object を + verb",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "魚[さかな]", blank: true },
          { text: "を" },
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
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
        notes: "Object を before place で (reversed order)",
      },
      // Topic-fronted
      {
        segments: [
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "魚[さかな]", blank: true },
          { text: "を" },
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
        notes: "Topic-fronted with place で at the start",
      },
      // Dropped 私は variants
      {
        segments: [
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
          { text: "魚[さかな]", blank: true },
          { text: "を" },
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
        notes: "Dropped 私は; standard word order",
      },
      {
        segments: [
          { text: "魚[さかな]", blank: true },
          { text: "を" },
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
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
        notes: "Dropped 私は; reversed order",
      },
      // 私、variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
          { text: "魚[さかな]", blank: true },
          { text: "を" },
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
        notes: "私、instead of 私は; standard word order",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "魚[さかな]", blank: true },
          { text: "を" },
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
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
        notes: "私、instead of 私は; reversed order",
      },
      // 私が variant
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "が" },
          { text: "学校[がっこう]", blank: true },
          { text: "で" },
          { text: "魚[さかな]", blank: true },
          { text: "を" },
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
        notes: "Using が instead of は for the subject (contrastive/emphatic)",
      },
    ],
  },
  {
    english: "I speak Japanese at home.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          {
            text: "話[はな]す",
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Standard answer: 家で + 日本語を + 話す",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "うち", blank: true },
          { text: "で" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          {
            text: "話[はな]す",
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: 'うち instead of 家 for "home/my place"',
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          {
            text: "話[はな]す",
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Object first, then location: 日本語を + 家で + 話す",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          { text: "うち", blank: true },
          { text: "で" },
          {
            text: "話[はな]す",
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Object first, then うち: 日本語を + うちで + 話す",
      },
      // Dropped 私は variants
      {
        segments: [
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          {
            text: "話[はな]す",
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; location first with 家",
      },
      {
        segments: [
          { text: "うち", blank: true },
          { text: "で" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          {
            text: "話[はな]す",
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; location first with うち",
      },
      {
        segments: [
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          {
            text: "話[はな]す",
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; object first with 家",
      },
      {
        segments: [
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          { text: "うち", blank: true },
          { text: "で" },
          {
            text: "話[はな]す",
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; object first with うち",
      },
      // 私、variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          {
            text: "話[はな]す",
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; location first with 家",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "うち", blank: true },
          { text: "で" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          {
            text: "話[はな]す",
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; location first with うち",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          {
            text: "話[はな]す",
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; object first with 家",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          { text: "うち", blank: true },
          { text: "で" },
          {
            text: "話[はな]す",
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; object first with うち",
      },
      // しゃべる 私は variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          {
            text: "しゃべる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "しゃべる instead of 話す; location first with 家",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "うち", blank: true },
          { text: "で" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          {
            text: "しゃべる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "しゃべる instead of 話す; location first with うち",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          {
            text: "しゃべる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "しゃべる instead of 話す; object first with 家",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          { text: "うち", blank: true },
          { text: "で" },
          {
            text: "しゃべる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "しゃべる instead of 話す; object first with うち",
      },
      // しゃべる dropped 私は variants
      {
        segments: [
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          {
            text: "しゃべる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "しゃべる; dropped 私は; location first with 家",
      },
      {
        segments: [
          { text: "うち", blank: true },
          { text: "で" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          {
            text: "しゃべる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "しゃべる; dropped 私は; location first with うち",
      },
      {
        segments: [
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          {
            text: "しゃべる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "しゃべる; dropped 私は; object first with 家",
      },
      {
        segments: [
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          { text: "うち", blank: true },
          { text: "で" },
          {
            text: "しゃべる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "しゃべる; dropped 私は; object first with うち",
      },
      // しゃべる 私、variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          {
            text: "しゃべる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "しゃべる; 私、instead of 私は; location first with 家",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "うち", blank: true },
          { text: "で" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          {
            text: "しゃべる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "しゃべる; 私、instead of 私は; location first with うち",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          { text: "家[いえ]", blank: true },
          { text: "で" },
          {
            text: "しゃべる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "しゃべる; 私、instead of 私は; object first with 家",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          { text: "うち", blank: true },
          { text: "で" },
          {
            text: "しゃべる",
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "しゃべる; 私、instead of 私は; object first with うち",
      },
    ],
  },
  {
    english: "I write Japanese with a pen.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "ペン", blank: true },
          { text: "で" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は; tool first",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          { text: "ペン", blank: true },
          { text: "で" },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は; object first",
      },
      // Dropped 私は variants
      {
        segments: [
          { text: "ペン", blank: true },
          { text: "で" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; tool first",
      },
      {
        segments: [
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          { text: "ペン", blank: true },
          { text: "で" },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は; object first",
      },
      // 私、variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "ペン", blank: true },
          { text: "で" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; tool first",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "日本語[にほんご]", blank: true },
          { text: "を" },
          { text: "ペン", blank: true },
          { text: "で" },
          {
            text: "書[か]く",
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私、instead of 私は; object first",
      },
    ],
  },
  {
    english: "I'm going to India tomorrow.",
    answers: [
      // 私は variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "明日[あした]", blank: true },
          { text: "インド", blank: true },
          { text: "に" },
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
        notes: "Standard: に for destination, 明日 before インド",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "明日[あした]", blank: true },
          { text: "インド", blank: true },
          { text: "へ" },
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
        notes: "へ instead of に for destination",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "インド", blank: true },
          { text: "に" },
          { text: "明日[あした]", blank: true },
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
        notes: "に for destination, 明日 moved after インドに",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "は" },
          { text: "インド", blank: true },
          { text: "へ" },
          { text: "明日[あした]", blank: true },
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
        notes: "へ for destination, 明日 moved after インドへ",
      },
      // Dropped 私は variants
      {
        segments: [
          { text: "明日[あした]", blank: true },
          { text: "インド", blank: true },
          { text: "に" },
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
        notes: "Dropped 私は; 明日 + インドに",
      },
      {
        segments: [
          { text: "明日[あした]", blank: true },
          { text: "インド", blank: true },
          { text: "へ" },
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
        notes: "Dropped 私は; 明日 + インドへ",
      },
      {
        segments: [
          { text: "インド", blank: true },
          { text: "に" },
          { text: "明日[あした]", blank: true },
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
        notes: "Dropped 私は; インドに + 明日",
      },
      {
        segments: [
          { text: "インド", blank: true },
          { text: "へ" },
          { text: "明日[あした]", blank: true },
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
        notes: "Dropped 私は; インドへ + 明日",
      },
      // 私、variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "明日[あした]", blank: true },
          { text: "インド", blank: true },
          { text: "に" },
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
        notes: "私、instead of 私は; 明日 + インドに",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "明日[あした]", blank: true },
          { text: "インド", blank: true },
          { text: "へ" },
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
        notes: "私、instead of 私は; 明日 + インドへ",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "インド", blank: true },
          { text: "に" },
          { text: "明日[あした]", blank: true },
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
        notes: "私、instead of 私は; インドに + 明日",
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "、" },
          { text: "インド", blank: true },
          { text: "へ" },
          { text: "明日[あした]", blank: true },
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
        notes: "私、instead of 私は; インドへ + 明日",
      },
      // 私が variants
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "が" },
          { text: "明日[あした]", blank: true },
          { text: "インド", blank: true },
          { text: "に" },
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
        notes:
          'が instead of は for subject (emphasizing "I" specifically go), に for destination',
      },
      {
        segments: [
          { text: "私[わたし]", blank: true },
          { text: "が" },
          { text: "明日[あした]", blank: true },
          { text: "インド", blank: true },
          { text: "へ" },
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
        notes: "が instead of は for subject, へ for destination",
      },
    ],
  },
]
