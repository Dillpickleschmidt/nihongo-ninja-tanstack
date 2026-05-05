import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I hope tomorrow's test is easy.",
    answers: [
      {
        segments: [
          { text: "明日[あした]のテストが " },
          { text: "簡単[かんたん]だといい", blank: true },
          { text: "な" },
        ],
        register: "casual",
        notes: "Uses テスト and the casual hopeful ending といいな.",
      },
      {
        segments: [
          { text: "明日[あした]のテストは " },
          { text: "簡単[かんたん]だといい", blank: true },
          { text: "な" },
        ],
        register: "casual",
        notes: "Uses は instead of が to mark the test as the topic.",
      },
      {
        segments: [
          { text: "明日[あした]の試験[しけん]が " },
          { text: "簡単[かんたん]だといい", blank: true },
          { text: "な" },
        ],
        register: "casual",
        notes: "Uses 試験 instead of テスト for “test/exam.”",
      },
      {
        segments: [
          { text: "明日[あした]の試験[しけん]は " },
          { text: "簡単[かんたん]だといい", blank: true },
          { text: "な" },
        ],
        register: "casual",
        notes: "Uses 試験 and marks it as the topic with は.",
      },
      {
        segments: [
          { text: "明日[あした]は テストが " },
          { text: "簡単[かんたん]だといい", blank: true },
          { text: "な" },
        ],
        register: "casual",
        notes: "Makes 明日は the topic, with テストが as the subject.",
      },
      {
        segments: [
          { text: "明日[あした]は 試験[しけん]が " },
          { text: "簡単[かんたん]だといい", blank: true },
          { text: "な" },
        ],
        register: "casual",
        notes: "Uses 試験 with 明日は as the topic.",
      },
      {
        segments: [
          { text: "明日[あした]のテストが " },
          { text: "簡単[かんたん]だといい", blank: true },
          { text: "です" },
        ],
        register: "polite",
        notes: "Polite ending with といいです.",
      },
      {
        segments: [
          { text: "明日[あした]の試験[しけん]が " },
          { text: "簡単[かんたん]だといい", blank: true },
          { text: "です" },
        ],
        register: "polite",
        notes: "Polite phrasing using 試験.",
      },
    ],
  },
  {
    english: "I hope the last train comes on time tonight.",
    answers: [
      {
        segments: [
          { text: "今晩[こんばん]、終電[しゅうでん]が 時間[じかん]どおりに " },
          { text: "来[く]るといい", blank: true },
          { text: "な" },
        ],
        register: "casual",
        notes: "Uses 終電 for the last train and 時間どおりに for on time.",
      },
      {
        segments: [
          { text: "今夜[こんや]、終電[しゅうでん]が 時間[じかん]どおりに " },
          { text: "来[く]るといい", blank: true },
          { text: "です" },
        ],
        register: "polite",
        notes: "Polite version using 今夜 for tonight.",
      },
      {
        segments: [
          { text: "今晩[こんばん]の終電[しゅうでん]が 遅[おく]れずに " },
          { text: "来[く]るといい", blank: true },
          { text: "な" },
        ],
        register: "casual",
        notes: "Uses 遅れずに to say without being late.",
      },
    ],
  },
];
