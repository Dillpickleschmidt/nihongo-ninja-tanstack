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
    english: "The university cafe is quiet, so I often study there between classes.",
    answers: [
      {
        segments: [
          { text: "大学[だいがく]の カフェは" },
          { text: "静[しず]かなので", blank: true },
          { text: "、授業[じゅぎょう]の 間[あいだ]によくそこで 勉強[べんきょう]します" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "大学[だいがく]の カフェは" },
          { text: "静[しず]かなので", blank: true },
          { text: "、授業[じゅぎょう]の 間[あいだ]によくそこで 勉強[べんきょう]する" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "大学[だいがく]の カフェは" },
          { text: "静[しず]かなので", blank: true },
          { text: "、授業[じゅぎょう]の 間[あいだ]によくそこで 勉強[べんきょう]します" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "大学[だいがく]の カフェは" },
          { text: "静[しず]かなので", blank: true },
          { text: "、私[わたし]は授業[じゅぎょう]の 間[あいだ]によくそこで 勉強[べんきょう]します" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "大学[だいがく]の カフェは" },
          { text: "静[しず]かなので", blank: true },
          { text: "、授業[じゅぎょう]の 間[あいだ]によくそこで 勉強[べんきょう]をします" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "大学[だいがく]の カフェが" },
          { text: "静[しず]かなので", blank: true },
          { text: "、授業[じゅぎょう]の 間[あいだ]によくそこで 勉強[べんきょう]します" },
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
    english: "I got hungry during class, so I'm going to buy a sandwich after class.",
    hint: "sandwich = サンドイッチ",
    answers: [
      {
        segments: [
          { text: "授業中[じゅぎょうちゅう]に おなかがすいているので", blank: true },
          { text: "、授業[じゅぎょう]の 後[あと]で サンドイッチを 買[か]いに 行[い]きます" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "授業中[じゅぎょうちゅう]に おなかがすいているので", blank: true },
          { text: "、授業[じゅぎょう]の 後[あと]で サンドイッチを 買[か]いに 行[い]く" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "授業中[じゅぎょうちゅう]に おなかがすいたので", blank: true },
          { text: "、授業[じゅぎょう]の 後[あと]で サンドイッチを 買[か]いに 行[い]きます" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "授業中[じゅぎょうちゅう]に おなかがすいたので", blank: true },
          { text: "、授業[じゅぎょう]の 後[あと]で サンドイッチを 買[か]いに 行[い]く" },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "I left my wallet at home, so I can't buy anything at the cafeteria.",
    answers: [
      {
        segments: [
          { text: "財布[さいふ]を 家[いえ]に 忘[わす]れたので", blank: true },
          { text: "、食堂[しょくどう]で 何[なに]も 買[か]えません" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "財布[さいふ]を 家[いえ]に 忘[わす]れたので", blank: true },
          { text: "、食堂[しょくどう]で 何[なに]も 買[か]えない" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "財布[さいふ]を 家[いえ]に 忘[わす]れたので", blank: true },
          { text: "、食堂[しょくどう]で 何[なに]も 買[か]うことができません" },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "財布[さいふ]を 家[いえ]に 忘[わす]れたので", blank: true },
          { text: "、食堂[しょくどう]で 何[なに]も 買[か]うことができない" },
        ],
        register: "casual",
      },
    ],
  },
];
