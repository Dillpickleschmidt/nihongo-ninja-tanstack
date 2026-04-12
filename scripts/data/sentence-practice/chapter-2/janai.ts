import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "This is not my book.",
    answers: [
      {
        segments: [
          { text: "これは" },
          { text: "私[わたし]の 本[ほん]じゃないです", blank: true },
        ],
        notes: "Full form with これは",
      },
      {
        segments: [
          { text: "これ、" },
          { text: "私[わたし]の 本[ほん]じゃないです", blank: true },
        ],
        notes: "Shorter with 、instead of は"
      },
      {
        segments: [{ text: "私[わたし]の 本[ほん]じゃないです", blank: true }],
        notes: "Shorter form without これ",
      },
    ],
  },
  {
    english: "Isn't this Tanaka's bag?",
    answers: [
      {
        segments: [
          { text: "これは" },
          { text: "田中[たなか]さんの 鞄[かばん]じゃないですか", blank: true },
        ],
        notes: "Full form with これは",
      },
      {
        segments: [
          { text: "これ、" },
          { text: "田中[たなか]さんの 鞄[かばん]じゃないですか", blank: true },
        ],
        notes: "Shorter with 、instead of は"
      },
      {
        segments: [
          { text: "田中[たなか]さん 鞄[かばん]じゃないですか", blank: true },
        ],
        notes: "Shorter form without これは",
      },
    ],
  },
  {
    english: "This is not Tanaka's dictionary.",
    answers: [
      {
        segments: [
          { text: "これは" },
          { text: "田中[たなか]さんの 辞書[じしょ]じゃないです", blank: true },
        ],
        notes: "Full form with これは",
      },
      {
        segments: [
          { text: "これ、" },
          { text: "田中[たなか]さんの 辞書[じしょ]じゃないです", blank: true },
        ],
        notes: "Shorter with 、instead of は"
      },
      {
        segments: [
          { text: "田中[たなか]さんの 辞書[じしょ]じゃないです", blank: true },
        ],
        notes: "Shorter form without これは",
      },
    ],
  },
  {
    english: "Tanaka is not a student. Yamada is not a student either.",
    answers: [
      {
        segments: [
          { text: "田中[たなか]さんは" },
          { text: "学生[がくせい]じゃないです", blank: true },
          { text: "。山田[やまだ]さんも" },
          { text: "学生[がくせい]じゃないです", blank: true },
          { text: "。" },
        ],
        notes: "Using も to add another person who isn't a student",
      },
    ],
  },
  {
    english: "Isn't the library over there?",
    answers: [
      {
        segments: [
          { text: "図書館[としょかん]はあそこ" },
          { text: "じゃないですか", blank: true },
        ],
        notes: "Regarding the library... isn't it over there?",
      },
      {
        segments: [
          { text: "あそこは 図書館[としょかん]" },
          { text: "じゃないですか", blank: true },
        ],
        notes: "Regarding what's over there... isn't that a library?",
      },
      {
        segments: [
          { text: "あそこが 図書館[としょかん]" },
          { text: "じゃないですか", blank: true },
        ],
        notes: "I don't see any situation where this is the correct way to answer. I won't mark it as wrong though, just in case.",
      },
      {
        segments: [
          { text: "あそこは 図書館[としょかん]" },
          { text: "ではないですか", blank: true },
        ],
        notes: "More formal ではないか instead of じゃないか",
      },
      {
        segments: [
          { text: "図書館[としょかん]はあそこ" },
          { text: "ではないですか", blank: true },
        ],
        notes: "More formal ではないか instead of じゃないか",
      },
    ],
  },
  {
    english: "This is not an English book.",
    answers: [
      {
        segments: [
          { text: "これは" },
          { text: "英語[えいご]の 本[ほん]じゃないです", blank: true },
        ],
        notes: "Full form with これは",
      },
      {
        segments: [
          { text: "これ、" },
          { text: "英語[えいご]の 本[ほん]じゃないです", blank: true },
        ],
        notes: "Shorter with 、instead of は"
      },
      {
        segments: [
          { text: "英語[えいご]の 本[ほん]じゃないです", blank: true },
        ],
        notes: "Shorter form without これ",
      },
    ],
  },
  {
    english: "Isn't that Kenji's bag?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "それは" },
          { text: "けんじさんの 鞄[かばん]じゃないですか", blank: true },
        ],
        notes: "Basic variant",
      },
      {
        segments: [
          { text: "それ、" },
          { text: "けんじさんの 鞄[かばん]じゃないですか", blank: true },
        ],
        notes: "Shorter with 、instead of は"
      },
      {
        segments: [
          { text: "それはけんじさんの 鞄[かばん]" },
          { text: "ではないですか", blank: true },
        ],
        notes: "More formal: ではないか instead of じゃないか",
      },
      {
        segments: [
          { text: "その 鞄[かばん]はけんじさんの" },
          { text: "じゃないですか", blank: true },
        ],
        notes: "Topic is \"that bag\" (そのかばんは), predicate is \"Kenji's\" (けんじの); じゃないか",
      },
      {
        segments: [
          { text: "その 鞄[かばん]はけんじさんの" },
          { text: "ではないですか", blank: true },
        ],
        notes: "Topic is \"that bag,\" predicate is \"Kenji's\"; ではないか (more formal)",
      },
      {
        segments: [
          { text: "あれはけんじさんの 鞄[かばん]" },
          { text: "じゃないですか", blank: true },
        ],
        notes: "Using あれ (that over there) — also natural when pointing out a bag across the room; じゃないですか",
      },
      {
        segments: [
          { text: "あれ、" },
          { text: "けんじさんの 鞄[かばん]じゃないですか", blank: true },
        ],
        notes: "Shorter with 、instead of は"
      },
      {
        segments: [
          { text: "あの 鞄[かばん]は けんじさんの" },
          { text: "じゃないですか", blank: true },
        ],
        notes: "あの + かばん as topic (that bag over there); じゃないか",
      },
    ],
  },
  {
    english: "Yamada is not a doctor. Kim is not a doctor either.",
    hint: "キム = kim",
    answers: [
      {
        segments: [
          { text: "山田[やまだ]さんは" },
          { text: "医者[いしゃ]じゃないです", blank: true },
          { text: "。キムさんも" },
          { text: "医者[いしゃ]じゃないです", blank: true },
          { text: "。" },
        ],
        notes: "Using も to add another person who isn't a doctor",
      },
    ],
  },
  {
    english: "Aren't you all students?",
    answers: [
      {
        segments: [
          { text: "皆[みんな]さんは" },
          { text: "学生[がくせい]じゃないですか", blank: true },
        ],
        notes: "The speaker is in disbelief",
      },
      {
        segments: [
          { text: "皆[みんな]さん、" },
          { text: "学生[がくせい]じゃないですか", blank: true },
          { text: "" },
        ],
        notes: "Pause for dramatic effect, the speaker is likely giving a speech",
      },
      {
        segments: [
          { text: "皆[みんな]さんが" },
          { text: "学生[がくせい]じゃないですか", blank: true },
          { text: "" },
        ],
        notes: "Unusual but could be okay in a very specific context: Aren't YOU ALL the students? - rhetorically questioning which group are the students among many other groups",
      },
      {
        segments: [
          { text: "皆[みんな]さんは" },
          { text: "学生[がくせい]ではないですか", blank: true },
        ],
        notes: "Using ではないか (more formal/stiff variant of じゃないか) - the speaker is definitely giving a speech",
      },
      {
        segments: [
          { text: "皆[みんな]さん、" },
          { text: "学生[がくせい]ではないですか", blank: true },
        ],
        notes: "Using ではないか (more formal/stiff variant of じゃないか) with pause - the speaker is most certainly giving a speech",
      },
    ],
  },
]
