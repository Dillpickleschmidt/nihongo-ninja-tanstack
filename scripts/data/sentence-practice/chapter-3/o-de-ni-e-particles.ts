import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I drink coffee at the cafe.",
    answers: [
      {
        segments: [
          { text: "カフェで", blank: true },
          { text: "コーヒーを", blank: true },
          { text: "飲[の]みます" },
        ],
        notes: "Location first",
      },
      {
        segments: [
          { text: "コーヒーを", blank: true },
          { text: "カフェで", blank: true },
          { text: "飲[の]みます" },
        ],
        notes: "Object first",
      },
    ],
  },
  {
    english: "I go to school.",
    answers: [
      {
        segments: [
          { text: "学校[がっこう]に", blank: true },
          { text: "行[い]きます" },
        ],
        notes: "Using に",
      },
      {
        segments: [
          { text: "学校[がっこう]へ", blank: true },
          { text: "行[い]きます" },
        ],
        notes: "Using へ",
      },
    ],
  },
  {
    english: "I study at the library.",
    answers: [
      {
        segments: [
          { text: "図書館[としょかん]で", blank: true },
          { text: "勉強[べんきょう]します" },
        ],
      },
    ],
  },
  {
    english: "I watch TV at home.",
    answers: [
      {
        segments: [
          { text: "家[いえ]で", blank: true },
          { text: "テレビを", blank: true },
          { text: "見[み]ます" },
        ],
        notes: "Location first using 家",
      },
      {
        segments: [
          { text: "うちで", blank: true },
          { text: "テレビを", blank: true },
          { text: "見[み]ます" },
        ],
        notes: "Location first using うち",
      },
      {
        segments: [
          { text: "テレビを", blank: true },
          { text: "家[いえ]で", blank: true },
          { text: "見[み]ます" },
        ],
        notes: "Object first using 家",
      },
      {
        segments: [
          { text: "テレビを", blank: true },
          { text: "うちで", blank: true },
          { text: "見[み]ます" },
        ],
        notes: "Object first using うち",
      },
    ],
  },
  {
    english: "I drink water.",
    answers: [
      {
        segments: [
          { text: "水[みず]を", blank: true },
          { text: "飲[の]みます" },
        ],
      },
    ],
  },
  {
    english: "I write with a pen.",
    answers: [
      {
        segments: [{ text: "ペンで", blank: true }, { text: "書[か]きます" }],
      },
    ],
  },
  {
    english: "I read books at the library.",
    answers: [
      {
        segments: [
          { text: "図書館[としょかん]で", blank: true },
          { text: "本[ほん]を", blank: true },
          { text: "読[よ]みます" },
        ],
        notes: "Location first",
      },
      {
        segments: [
          { text: "本[ほん]を", blank: true },
          { text: "としょかんで", blank: true },
          { text: "読[よ]みます" },
        ],
        notes: "Object first",
      },
    ],
  },
  {
    english: "I return home.",
    answers: [
      {
        segments: [
          { text: "家[いえ]に", blank: true },
          { text: "帰[かえ]ります" },
        ],
        notes: "Using 家 with に",
      },
      {
        segments: [
          { text: "家[いえ]へ", blank: true },
          { text: "帰[かえ]ります" },
        ],
        notes: "Using 家 with へ",
      },
      {
        segments: [{ text: "うちに", blank: true }, { text: "帰[かえ]ります" }],
        notes: "Using うち with に",
      },
      {
        segments: [{ text: "うちへ", blank: true }, { text: "帰[かえ]ります" }],
        notes: "Using うち with へ",
      },
    ],
  },
  {
    english: "I watch tennis at home.",
    answers: [
      {
        segments: [
          { text: "うちで", blank: true },
          { text: "テニスを", blank: true },
          { text: "見[み]ます" },
        ],
        notes: "Location first using うち",
      },
      {
        segments: [
          { text: "家[いえ]で", blank: true },
          { text: "テニスを", blank: true },
          { text: "見[み]ます" },
        ],
        notes: "Location first using 家",
      },
      {
        segments: [
          { text: "テニスを", blank: true },
          { text: "うちで", blank: true },
          { text: "見[み]ます" },
        ],
        notes: "Object first using うち",
      },
      {
        segments: [
          { text: "テニスを", blank: true },
          { text: "家[いえ]で", blank: true },
          { text: "見[み]ます" },
        ],
        notes: "Object first using 家",
      },
    ],
  },
  {
    english: "I come to university.",
    answers: [
      {
        segments: [
          { text: "大学[だいがく]に", blank: true },
          { text: "来[き]ます" },
        ],
        notes: "Using に",
      },
      {
        segments: [
          { text: "大学[だいがく]へ", blank: true },
          { text: "来[き]ます" },
        ],
        notes: "Using へ",
      },
    ],
  },
  {
    english: "I read magazines at the cafe.",
    answers: [
      {
        segments: [
          { text: "カフェで", blank: true },
          { text: "雑誌[ざっし]を", blank: true },
          { text: "読[よ]みます" },
        ],
        notes: "Location first",
      },
      {
        segments: [
          { text: "雑誌[ざっし]を", blank: true },
          { text: "カフェで", blank: true },
          { text: "読[よ]みます" },
        ],
        notes: "Object first",
      },
    ],
  },
  {
    english: "I study Japanese at school.",
    answers: [
      {
        segments: [
          { text: "学校[がっこう]で", blank: true },
          { text: "日本語[にほんご]を", blank: true },
          { text: "勉強[べんきょう]します" },
        ],
        notes: "Location first",
      },
      {
        segments: [
          { text: "日本語[にほんご]を", blank: true },
          { text: "学校[がっこう]で", blank: true },
          { text: "勉強[べんきょう]します" },
        ],
        notes: "Object first",
      },
    ],
  },
  {
    english: "I go to the bank.",
    answers: [
      {
        segments: [
          { text: "銀行[ぎんこう]に", blank: true },
          { text: "行[い]きます" },
        ],
        notes: "Using に",
      },
      {
        segments: [
          { text: "銀行[ぎんこう]へ", blank: true },
          { text: "行[い]きます" },
        ],
        notes: "Using へ",
      },
    ],
  },
  {
    english: "I speak with friends at school.",
    answers: [
      {
        segments: [
          { text: "学校[がっこう]で", blank: true },
          { text: "友[とも]だちと 話[はな]します" },
        ],
        notes: "Location first",
      },
      {
        segments: [
          { text: "友[とも]だちと" },
          { text: "学校[がっこう]で", blank: true },
          { text: "話[はな]します" },
        ],
        notes: "Person first",
      },
      {
        segments: [
          { text: "学校[がっこう]で", blank: true },
          { text: "友[とも]だちとしゃべります" },
        ],
        notes: "Location first with しゃべる",
      },
      {
        segments: [
          { text: "友[とも]だちと" },
          { text: "学校[がっこう]で", blank: true },
          { text: "しゃべります" },
        ],
        notes: "Person first with しゃべる",
      },
    ],
  },
  {
    english: "I go to the convenience store.",
    answers: [
      {
        segments: [
          { text: "コンビニに", blank: true },
          { text: "行[い]きます" },
        ],
        notes: "Using に",
      },
      {
        segments: [
          { text: "コンビニへ", blank: true },
          { text: "行[い]きます" },
        ],
        notes: "Using へ",
      },
    ],
  },
  {
    english: "I watch movies at home.",
    answers: [
      {
        segments: [
          { text: "うちで", blank: true },
          { text: "映画[えいが]を", blank: true },
          { text: "見[み]ます" },
        ],
        notes: "Location first using うち",
      },
      {
        segments: [
          { text: "家[いえ]で", blank: true },
          { text: "映画[えいが]を", blank: true },
          { text: "見[み]ます" },
        ],
        notes: "Location first using 家",
      },
      {
        segments: [
          { text: "映画[えいが]を", blank: true },
          { text: "うちで", blank: true },
          { text: "見[み]ます" },
        ],
        notes: "Object first using うち",
      },
      {
        segments: [
          { text: "映画[えいが]を", blank: true },
          { text: "家[いえ]で", blank: true },
          { text: "見[み]ます" },
        ],
        notes: "Object first using 家",
      },
    ],
  },
  {
    english: "I come to the cafe.",
    answers: [
      {
        segments: [{ text: "カフェに", blank: true }, { text: "来[き]ます" }],
        notes: "Using に",
      },
      {
        segments: [{ text: "カフェへ", blank: true }, { text: "来[き]ます" }],
        notes: "Using へ",
      },
    ],
  },
  {
    english: "I write Japanese with a pen.",
    answers: [
      {
        segments: [
          { text: "ペンで", blank: true },
          { text: "日本語[にほんご]を", blank: true },
          { text: "書[か]きます" },
        ],
        notes: "Tool first",
      },
      {
        segments: [
          { text: "日本語[にほんご]を", blank: true },
          { text: "ペンで", blank: true },
          { text: "書[か]きます" },
        ],
        notes: "Object first",
      },
    ],
  },
  {
    english: "I go to the library.",
    answers: [
      {
        segments: [
          { text: "図書館[としょかん]に", blank: true },
          { text: "行[い]きます" },
        ],
        notes: "Using に",
      },
      {
        segments: [
          { text: "としょかんへ", blank: true },
          { text: "行[い]きます" },
        ],
        notes: "Using へ",
      },
    ],
  },
  {
    english: "I read a book.",
    answers: [
      {
        segments: [
          { text: "本[ほん]を", blank: true },
          { text: "読[よ]みます" },
        ],
      },
    ],
  },
]
