import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I have a fever, so I'm going to rest today.",
    answers: [
      {
        segments: [
          { text: "熱[ねつ]があるので", blank: true },
          { text: "、今日[きょう]は 休[やす]みます" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "熱[ねつ]があるので", blank: true },
          { text: "、今日[きょう]は 休[やす]む" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "今日[きょう]は" },
          { text: "熱[ねつ]があるので", blank: true },
          { text: "、休[やす]みます" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "今日[きょう]は" },
          { text: "熱[ねつ]があるので", blank: true },
          { text: "、休[やす]む" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "熱[ねつ]があるので", blank: true },
          { text: "、今日[きょう]は 寝[ね]ます" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "熱[ねつ]があるので", blank: true },
          { text: "、今日[きょう]は 寝[ね]る" },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "Since I'm free this weekend, do you want to go see a movie together?",
    answers: [
      {
        segments: [
          { text: "今週末[こんしゅうまつ]は" },
          { text: "暇[ひま]なので", blank: true },
          { text: "、一緒[いっしょ]に 映画[えいが]を 見[み]に 行[い]きませんか" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]は" },
          { text: "暇[ひま]なので", blank: true },
          { text: "、一緒[いっしょ]に 映画[えいが]を 見[み]に 行[い]きましょうか" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]は" },
          { text: "暇[ひま]なので", blank: true },
          { text: "、一緒[いっしょ]に 映画[えいが]を 見[み]に 行[い]きませんか" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]が" },
          { text: "暇[ひま]なので", blank: true },
          { text: "、一緒[いっしょ]に 映画[えいが]を 見[み]に 行[い]きませんか" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]は" },
          { text: "暇[ひま]なので", blank: true },
          { text: "、映画[えいが]を 一緒[いっしょ]に 見[み]に 行[い]きませんか" },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "This café is quiet, so I often study here.",
    answers: [
      {
        segments: [
          { text: "このカフェは" },
          { text: "静[しず]かなので", blank: true },
          { text: "、ここでよく 勉強[べんきょう]します" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "このカフェは" },
          { text: "静[しず]かなので", blank: true },
          { text: "、ここでよく 勉強[べんきょう]する" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "このカフェは" },
          { text: "静[しず]かなので", blank: true },
          { text: "、よくここで 勉強[べんきょう]します" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "このカフェは" },
          { text: "静[しず]かなので", blank: true },
          { text: "、私[わたし]はここでよく 勉強[べんきょう]します" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "このカフェは" },
          { text: "静[しず]かなので", blank: true },
          { text: "、ここでよく 勉強[べんきょう]をします" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "このカフェが" },
          { text: "静[しず]かなので", blank: true },
          { text: "、ここでよく 勉強[べんきょう]します" },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "Since tomorrow is an exam, I'm not going out tonight.",
    answers: [
      {
        segments: [
          { text: "明日[あした]は 試験[しけん]なので", blank: true },
          { text: "、今晩[こんばん]は 出[で]かけません" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "明日[あした]は 試験[しけん]なので", blank: true },
          { text: "、今晩[こんばん]は 出[で]かけない" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "明日[あした]は 試験[しけん]なので", blank: true },
          { text: "、今夜[こんや]は 出[で]かけません" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "明日[あした]試験[しけん]があるので", blank: true },
          { text: "、今晩[こんばん]は 出[で]かけません" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "明日[あした]はテストなので", blank: true },
          { text: "、今晩[こんばん]は 出[で]かけません" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "明日[あした]テストがあるので", blank: true },
          { text: "、今夜[こんや]は 出[で]かけません" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "明日[あした]は 試験[しけん]なので", blank: true },
          { text: "、今夜[こんや]は 外[そと]に 出[で]ません" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "明日[あした]は 試験[しけん]なので", blank: true },
          { text: "、今晩[こんばん]は 外[そと]に 出[で]ない" },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "I'm hungry, so I'm going to go buy a sandwich.",
    hint: "sandwich = サンドイッチ",
    answers: [
      {
        segments: [
          { text: "おなかがすいているので", blank: true },
          { text: "、サンドイッチを 買[か]いに 行[い]きます" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "おなかがすいているので", blank: true },
          { text: "、サンドイッチを 買[か]いに 行[い]く" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "おなかがすいたので", blank: true },
          { text: "、サンドイッチを 買[か]いに 行[い]きます" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "おなかがすいたので", blank: true },
          { text: "、サンドイッチを 買[か]いに 行[い]く" },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "I forgot my wallet, so I can't buy anything.",
    answers: [
      {
        segments: [
          { text: "財布[さいふ]を 忘[わす]れたので", blank: true },
          { text: "、何[なに]も 買[か]えません" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "財布[さいふ]を 忘[わす]れたので", blank: true },
          { text: "、何[なに]も 買[か]えない" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "財布[さいふ]を 忘[わす]れたので", blank: true },
          { text: "、何[なに]も 買[か]うことができません" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "財布[さいふ]を 忘[わす]れたので", blank: true },
          { text: "、何[なに]も 買[か]うことができない" },
        ],
        register: "casual",
      },
    ],
  },
];
