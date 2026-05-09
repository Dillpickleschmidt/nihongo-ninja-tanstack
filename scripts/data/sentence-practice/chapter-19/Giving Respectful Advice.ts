import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "The doctor will be here soon, so please have a seat here.",
    answers: [
      {
        segments: [
          { text: "医者[いしゃ]は すぐ 来[き]ますから、どうぞ、こちらに" },
          { text: "お 掛[か]けください", blank: true },
        ],
      },
      {
        segments: [
          { text: "医者[いしゃ]は すぐ 来[き]ますから、こちらに" },
          { text: "お 掛[か]けください", blank: true },
        ],
      },
      {
        segments: [
          { text: "医者[いしゃ]は すぐ 来[き]ますから、ここに" },
          { text: "お 掛[か]けください", blank: true },
        ],
      },
      {
        segments: [
          { text: "医者[いしゃ]は すぐ 来[き]ますから、どうぞ、ここに" },
          { text: "お 掛[か]けください", blank: true },
        ],
      },
      {
        segments: [
          { text: "医者[いしゃ]は すぐ 来[き]ますから、どうぞ、こちらへ" },
          { text: "お 掛[か]けください", blank: true },
        ],
      },
      {
        segments: [
          { text: "医者[いしゃ]は すぐ 来[き]ますから、こちらへ" },
          { text: "お 掛[か]けください", blank: true },
        ],
      },
      {
        segments: [
          { text: "医者[いしゃ]は すぐ 来[き]ますから、どうぞ、こちらに" },
          { text: "お 座[すわ]りください", blank: true },
        ],
      },
      {
        segments: [
          { text: "医者[いしゃ]は すぐ 来[き]ますから、こちらに" },
          { text: "お 座[すわ]りください", blank: true },
        ],
      },
    ],
  },
  {
    english: "The app coupon is on this smartphone, so please use it.",
    hint: "app = アプリ; coupon = クーポン",
    answers: [
      {
        segments: [
          { text: "アプリの クーポンは このスマホに ありますから、このスマホを" },
          { text: "お 使[つか]いください", blank: true },
        ],
      },
      {
        segments: [
          { text: "アプリの クーポンは このスマートフォンに ありますから、このスマートフォンを" },
          { text: "お 使[つか]いください", blank: true },
        ],
      },
      {
        segments: [
          { text: "アプリの クーポンは このスマホに ありますから、どうぞ、このスマホを" },
          { text: "お 使[つか]いください", blank: true },
        ],
      },
      {
        segments: [
          { text: "アプリの クーポンは このスマートフォンに ありますから、どうぞ、このスマートフォンを" },
          { text: "お 使[つか]いください", blank: true },
        ],
      },
    ],
  },
  {
    english: "We are preparing your room now, so please wait here for about ten minutes.",
    answers: [
      {
        segments: [
          { text: "今[いま]、部屋[へや]を 準備[じゅんび]していますから、ここで 十分[じゅっぷん]ぐらい" },
          { text: "お 待[ま]ちください", blank: true },
        ],
      },
      {
        segments: [
          { text: "今[いま]、部屋[へや]を 準備[じゅんび]していますから、こちらで 十分[じゅっぷん]ぐらい" },
          { text: "お 待[ま]ちください", blank: true },
        ],
      },
      {
        segments: [
          { text: "今[いま]、部屋[へや]を 準備[じゅんび]していますから、ここで 十分[じゅっぷん]ほど" },
          { text: "お 待[ま]ちください", blank: true },
        ],
      },
      {
        segments: [
          { text: "今[いま]、部屋[へや]を 準備[じゅんび]していますから、こちらで 十分[じゅっぷん]ほど" },
          { text: "お 待[ま]ちください", blank: true },
        ],
      },
    ],
  },
];
