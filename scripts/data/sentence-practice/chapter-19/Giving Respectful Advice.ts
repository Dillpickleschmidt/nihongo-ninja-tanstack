import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "Please have a seat here.",
    answers: [
      {
        segments: [
          { text: "どうぞ、こちらに" },
          { text: "お 掛[か]けください", blank: true },
        ],
      },
      {
        segments: [
          { text: "こちらに" },
          { text: "お 掛[か]けください", blank: true },
        ],
      },
      {
        segments: [
          { text: "ここに" },
          { text: "お 掛[か]けください", blank: true },
        ],
      },
      {
        segments: [
          { text: "どうぞ、ここに" },
          { text: "お 掛[か]けください", blank: true },
        ],
      },
      {
        segments: [
          { text: "どうぞ、こちらへ" },
          { text: "お 掛[か]けください", blank: true },
        ],
      },
      {
        segments: [
          { text: "こちらへ" },
          { text: "お 掛[か]けください", blank: true },
        ],
      },
      {
        segments: [
          { text: "どうぞ、こちらに" },
          { text: "お 座[すわ]りください", blank: true },
        ],
      },
      {
        segments: [
          { text: "こちらに" },
          { text: "お 座[すわ]りください", blank: true },
        ],
      },
    ],
  },
  {
    english: "Please use this smartphone.",
    answers: [
      {
        segments: [
          { text: "このスマホを" },
          { text: "お 使[つか]いください", blank: true },
        ],
      },
      {
        segments: [
          { text: "このスマートフォンを" },
          { text: "お 使[つか]いください", blank: true },
        ],
      },
      {
        segments: [
          { text: "どうぞ、このスマホを" },
          { text: "お 使[つか]いください", blank: true },
        ],
      },
      {
        segments: [
          { text: "どうぞ、このスマートフォンを" },
          { text: "お 使[つか]いください", blank: true },
        ],
      },
    ],
  },
  {
    english: "Please wait here for about ten minutes.",
    answers: [
      {
        segments: [
          { text: "ここで 十分[じゅっぷん]ぐらい" },
          { text: "お 待[ま]ちください", blank: true },
        ],
      },
      {
        segments: [
          { text: "こちらで 十分[じゅっぷん]ぐらい" },
          { text: "お 待[ま]ちください", blank: true },
        ],
      },
      {
        segments: [
          { text: "ここで 十分[じゅっぷん]ほど" },
          { text: "お 待[ま]ちください", blank: true },
        ],
      },
      {
        segments: [
          { text: "こちらで 十分[じゅっぷん]ほど" },
          { text: "お 待[ま]ちください", blank: true },
        ],
      },
    ],
  },
];
