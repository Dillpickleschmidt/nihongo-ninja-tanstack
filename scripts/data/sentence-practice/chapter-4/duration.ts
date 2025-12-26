import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I ate for thirty minutes.",
    answers: [
      {
        segments: [
          { text: "三[さん]十[じゅっ]分[ぷん]", blank: true },
          { text: "食[た]べました" },
        ],
      },
    ],
  },
  {
    english: "Sakura waited for Kenji for thirty minutes.",
    hint: "Name spellings: Sakura - 桜（さくら）, Kenji - ケンジ",
    answers: [
      {
        segments: [
          { text: "桜[さくら]さんはケンジさんを" },
          { text: "三[さん]十[じゅっ]分[ぷん]", blank: true },
          { text: "待[ま]ちました" },
        ],
      },
    ],
  },
  {
    english: "I studied English with Yuko for four hours today.",
    hint: "優子（ゆうこ）",
    answers: [
      {
        segments: [
          { text: "今日[きょう]優子[ゆうこ]さんと 英語[えいご]を" },
          { text: "四[よ]時間[じかん]", blank: true },
          { text: "勉強[べんきょう]しました" },
        ],
      },
      {
        segments: [
          { text: "今日[きょう]はゆうこさんと 英語[えいご]を" },
          { text: "四[よ]時間[じかん]", blank: true },
          { text: "勉強[べんきょう]しました" },
        ],
      },
    ],
  },
  {
    english: "Taro practiced Japanese for two and a half hours yesterday.",
    hint: "practice -> 練習する (れんしゅうする), 太郎（たろう）",
    answers: [
      {
        segments: [
          { text: "太郎[たろう]さんは 昨日[きのう]日本語[にほんご]を" },
          { text: "二[に]時間[じかん]半[はん]", blank: true },
          { text: "練習[れんしゅう]しました" },
        ],
      },
    ],
  },
  {
    english: "Hiroko ate at the restaurant for one and a half hours.",
    hint: "寛子（ひろこ）",
    answers: [
      {
        segments: [
          { text: "寛子[ひろこ]さんはレストランで" },
          { text: "一[いち]時間[じかん]半[はん]", blank: true },
          { text: "食[た]べました" },
        ],
      },
    ],
  },
  {
    english: "Jiro studied for one hour yesterday.",
    hint: "次郎（じろう）",
    answers: [
      {
        segments: [
          { text: "次郎[じろう]さんは 昨日[きのう]" },
          { text: "一[いち]時間[じかん]", blank: true },
          { text: "勉強[べんきょう]しました" },
        ],
      },
    ],
  },
  {
    english: "Aiko read a book for thirty minutes.",
    hint: "愛子（あいこ）",
    answers: [
      {
        segments: [
          { text: "愛子[あいこ]さんは" },
          { text: "三[さん]十[じゅっ]分[ぷん]", blank: true },
          { text: "本[ほん]を 読[よ]みました" },
        ],
      },
    ],
  },
  {
    english: "We played games with Haruka for two hours.",
    answers: [
      {
        segments: [
          { text: "二[に]時間[じかん]", blank: true },
          { text: "はるかさんとゲームをしました" },
        ],
      },
    ],
  },
  {
    english: "Ryota watched TV for forty-five minutes.",
    hint: "亮太（りょうた）",
    answers: [
      {
        segments: [
          { text: "亮太[りょうた]さんはテレビを" },
          { text: "四[よん]十[じゅう]五[ご]分[ふん]", blank: true },
          { text: "見[み]ました" },
        ],
      },
    ],
  },
  {
    english: "Kaori listened to music for one and a half hours yesterday.",
    hint: "香織（かおり）",
    answers: [
      {
        segments: [
          { text: "香織[かおり]さんは 昨日[きのう]" },
          { text: "一[いち]時間[じかん]半[はん]", blank: true },
          { text: "音楽[おんがく]を 聞[き]きました" },
        ],
      },
    ],
  },
]
