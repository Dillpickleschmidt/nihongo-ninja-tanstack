import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I wonder if it'll snow this winter.",
    answers: [
      {
        segments: [
          { text: "今年[ことし]の 冬[ふゆ]、雪[ゆき]が 降[ふ]る" },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "今年[ことし]の 冬[ふゆ]、雪[ゆき]が 降[ふ]る" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "今年[ことし]の 冬[ふゆ]、雪[ゆき]が 降[ふ]る" },
          { text: "ん", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "この 冬[ふゆ]、雪[ゆき]が 降[ふ]る" },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "この 冬[ふゆ]、雪[ゆき]が 降[ふ]る" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "この 冬[ふゆ]、雪[ゆき]が 降[ふ]る" },
          { text: "ん", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "I wonder if Takeshi is free this weekend.",
    hint: "Takeshi = たけし",
    answers: [
      {
        segments: [
          { text: "たけしさんは 週末[しゅうまつ]、暇[ひま]" },
          { text: "な", blank: true },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "たけしさんは 週末[しゅうまつ]、暇[ひま]" },
          { text: "な", blank: true },
          { text: "ん", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "たけしさんは 週末[しゅうまつ]、暇[ひま]" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]、たけしさんは 暇[ひま]" },
          { text: "な", blank: true },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]、たけしさんは 暇[ひま]" },
          { text: "な", blank: true },
          { text: "ん", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]、たけしさんは 暇[ひま]" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "たけしさんが 週末[しゅうまつ]、暇[ひま]" },
          { text: "な", blank: true },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "たけしさんは 今週末[こんしゅうまつ]、暇[ひま]" },
          { text: "な", blank: true },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "I wonder if the food at the party will be good.",
    answers: [
      {
        segments: [
          { text: "パーティーの 食[た]べ 物[もの]は" },
          { text: "よい" },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "パーティーの 食[た]べ 物[もの]は" },
          { text: "よい" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "パーティーの 食[た]べ 物[もの]が" },
          { text: "おいしい" },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "パーティーの 食[た]べ 物[もの]が" },
          { text: "おいしい" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "パーティーの 食[た]べ 物[もの]は" },
          { text: "おいしい" },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "パーティーの 食[た]べ 物[もの]は" },
          { text: "おいしい" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "パーティーの 料[りょう] 理[り]は" },
          { text: "よい" },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "パーティーの 料[りょう] 理[り]は" },
          { text: "よい" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "パーティーの 料[りょう] 理[り]は" },
          { text: "おいしい" },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "パーティーの 料[りょう] 理[り]は" },
          { text: "おいしい" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "The last train has probably already left, right?",
    answers: [
      {
        segments: [
          { text: "終電[しゅうでん]はもう 出[で]た" },
          { text: "でしょう", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "終電[しゅうでん]はもう 出[で]た" },
          { text: "の", blank: true },
          { text: "でしょう", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "終電[しゅうでん]はもう 出[で]ている" },
          { text: "でしょう", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "終電[しゅうでん]がもう 出[で]た" },
          { text: "でしょう", blank: true },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "Kenji is probably at the library right now, right?",
    hint: "Kenji = 健一",
    answers: [
      {
        segments: [
          { text: "健一[けんいち]さんは 今[いま]、図書館[としょかん]に" },
          { text: "いる" },
          { text: "でしょう", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "健一[けんいち]さんは 今[いま]、図書館[としょかん]に" },
          { text: "いる" },
          { text: "だろう", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "健一[けんいち]さんは 今[いま]、図書館[としょかん]に いるの" },
          { text: "でしょう", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "健一[けんいち]さんは 今[いま]、図書館[としょかん]に いるん" },
          { text: "でしょう", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "健一[けんいち]さんは 今[いま]、図書館[としょかん]に いるの" },
          { text: "だろう", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "健一[けんいち]さんは 今[いま]、図書館[としょかん]に いるん" },
          { text: "だろう", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "今[いま]、健一[けんいち]さんは 図書館[としょかん]に" },
          { text: "いる" },
          { text: "でしょう", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "今[いま]、健一[けんいち]さんは 図書館[としょかん]に" },
          { text: "いる" },
          { text: "だろう", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "健一[けんいち]さんが 今[いま]、図書館[としょかん]に" },
          { text: "いる" },
          { text: "でしょう", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "健一[けんいち]さんが 今[いま]、図書館[としょかん]に" },
          { text: "いる" },
          { text: "だろう", blank: true },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "That horror movie is probably scary, right?",
    hint: "ホラー = ホラー",
    answers: [
      {
        segments: [
          { text: "あのホラー 映画[えいが]は 怖[こわ]い" },
          { text: "でしょう", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "そのホラー 映画[えいが]は 怖[こわ]い" },
          { text: "でしょう", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "あのホラー 映画[えいが]は 怖[こわ]い" },
          { text: "だろう", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "そのホラー 映画[えいが]は 怖[こわ]い" },
          { text: "だろう", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "あのホラー 映画[えいが]、 怖[こわ]い" },
          { text: "でしょう", blank: true },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "I wonder if Hana is interested in music.",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "はなさんは 音楽[おんがく]に 興味[きょうみ]がある" },
          { text: "の" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "はなさんは 音楽[おんがく]に 興味[きょうみ]がある" },
          { text: "の" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "はなさんは 音楽[おんがく]に 興味[きょうみ]がある" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "はなさんは 音楽[おんがく]に 興味[きょうみ]がある" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "はなさんが 音楽[おんがく]に 興味[きょうみ]がある" },
          { text: "の" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "はなさんが 音楽[おんがく]に 興味[きょうみ]がある" },
          { text: "の" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "はなさんは 音楽[おんがく]に 興味[きょうみ]がある" },
          { text: "ん" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "はなさんは 音楽[おんがく]に 興味[きょうみ]がある" },
          { text: "ん" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "Working overtime every day must be tough, right?",
    answers: [
      {
        segments: [
          { text: "毎日[まいにち] 残業[ざんぎょう]するのは" },
          { text: "大変[たいへん]" },
          { text: "でしょう", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "毎日[まいにち] 残業[ざんぎょう]するのは" },
          { text: "大変[たいへん]" },
          { text: "だろう", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "毎日[まいにち] 残業[ざんぎょう]しているのは" },
          { text: "大変[たいへん]" },
          { text: "でしょう", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "毎日[まいにち] 残業[ざんぎょう]しているのは" },
          { text: "大変[たいへん]" },
          { text: "だろう", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "毎日[まいにち] 残業[ざんぎょう]するのが" },
          { text: "大変[たいへん]" },
          { text: "でしょう", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "毎日[まいにち] 残業[ざんぎょう]するのが" },
          { text: "大変[たいへん]" },
          { text: "だろう", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "毎日[まいにち]の 残業[ざんぎょう]は" },
          { text: "大変[たいへん]" },
          { text: "でしょう", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "毎日[まいにち]の 残業[ざんぎょう]は" },
          { text: "大変[たいへん]" },
          { text: "だろう", blank: true },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "I wonder if Sota will come back.",
    hint: "Sota = そうた",
    answers: [
      {
        segments: [
          { text: "そうたさんは 帰[かえ]る" },
          { text: "の" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "そうたさんは 帰[かえ]る" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "そうたさんは 帰[かえ]るの" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "そうたさんは 帰[かえ]る" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "そうたさんが 帰[かえ]る" },
          { text: "の" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "そうたさんが 帰[かえ]るの" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "そうたさんは 帰[かえ]ってくる" },
          { text: "の" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "そうたさんは 帰[かえ]ってくる" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "そうたさんは 帰[かえ]ってくるの" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "そうたさんは 帰[かえ]るん" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "そうたさんは 帰[かえ]るん" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "I wonder if that bag over there is Yuki's.",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "あのかばんは ゆきさんの" },
          { text: "な", blank: true },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "あのかばんは ゆきさんの" },
          { text: "な" },
          { text: "の" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "あのかばんは ゆきさんの" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "あのかばんは ゆきさんの" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "あそこのかばんは ゆきさんの" },
          { text: "な", blank: true },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "あそこのかばんは ゆきさんの" },
          { text: "な" },
          { text: "の" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "あれは ゆきさんのかばん" },
          { text: "な", blank: true },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "あれは ゆきさんのかばん" },
          { text: "な" },
          { text: "の" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "あのかばんは ゆきさんの" },
          { text: "ん", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "あのかばんは ゆきさんの" },
          { text: "ん" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "The Shinkansen is probably the fastest train in the world, right?",
    answers: [
      {
        segments: [
          { text: "新幹線[しんかんせん]は 世界[せかい]で 一番[いちばん] 速[はや]い 電車[でんしゃ]" },
          { text: "でしょう", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]は 世界[せかい]で 一番[いちばん] 速[はや]い 電車[でんしゃ]" },
          { text: "だろう", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]は 世界一[せかいいち]の 速[はや]さの 電車[でんしゃ]" },
          { text: "でしょう", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]は 世界一[せかいいち]の 速[はや]さの 電車[でんしゃ]" },
          { text: "だろう", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "世界[せかい]で 一番[いちばん] 速[はや]い 電車[でんしゃ]は 新幹線[しんかんせん]" },
          { text: "でしょう", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "世界[せかい]で 一番[いちばん] 速[はや]い 電車[でんしゃ]は 新幹線[しんかんせん]" },
          { text: "だろう", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]は 世界[せかい]で 一番[いちばん]" },
          { text: "速[はや]い" },
          { text: "でしょう", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]は 世界[せかい]で 一番[いちばん]" },
          { text: "速[はや]い" },
          { text: "だろう", blank: true },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "I wonder if Keita is a graduate student.",
    hint: "Keita = けいた",
    answers: [
      {
        segments: [
          { text: "けいたさんは 大学院生[だいがくいんせい]" },
          { text: "な", blank: true },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "けいたさんは 大学院生[だいがくいんせい]" },
          { text: "な" },
          { text: "の" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "けいたさんは 大学院生[だいがくいんせい]" },
          { text: "なん" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "けいたさんは 大学院生[だいがくいんせい]" },
          { text: "なん" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "I wonder if that neighborhood is quiet.",
    answers: [
      {
        segments: [
          { text: "あの 近所[きんじょ]は" },
          { text: "静[しず]か" },
          { text: "な" },
          { text: "の" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "あの 近所[きんじょ]は" },
          { text: "静[しず]か" },
          { text: "なん" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "あの 近所[きんじょ]は" },
          { text: "静[しず]か" },
          { text: "な" },
          { text: "の" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "あの 近所[きんじょ]は" },
          { text: "静[しず]か" },
          { text: "なん" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "あの 近所[きんじょ]は" },
          { text: "静[しず]か" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "その 近所[きんじょ]は" },
          { text: "静[しず]か" },
          { text: "な" },
          { text: "の" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "その 近所[きんじょ]は" },
          { text: "静[しず]か" },
          { text: "な" },
          { text: "の" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "その 近所[きんじょ]は" },
          { text: "静[しず]か" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "その 近所[きんじょ]は" },
          { text: "静[しず]か" },
          { text: "なん" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "あの 近所[きんじょ]は" },
          { text: "静[しず]か" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "その 近所[きんじょ]は" },
          { text: "静[しず]か" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "I wonder if the new cafe near the station is popular.",
    answers: [
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェは 人気[にんき]がある" },
          { text: "の" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェは 人気[にんき]がある" },
          { text: "の" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェは 人気[にんき]がある" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェは 人気[にんき]がある" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェは 人気[にんき]" },
          { text: "な" },
          { text: "の" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェは 人気[にんき]" },
          { text: "な" },
          { text: "の" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くにある 新[あたら]しいカフェは 人気[にんき]がある" },
          { text: "の" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くにある 新[あたら]しいカフェは 人気[にんき]がある" },
          { text: "の" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェは 人気[にんき]があるん" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェは 人気[にんき]があるん" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェは 人気[にんき]" },
          { text: "なん" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェは 人気[にんき]" },
          { text: "なん" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェが 人気[にんき]がある" },
          { text: "の" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェが 人気[にんき]がある" },
          { text: "の" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "I wonder if Hana's dream will come true.",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "はなさんの 夢[ゆめ]が" },
          { text: "かなう" },
          { text: "の" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "はなさんの 夢[ゆめ]が" },
          { text: "かなう" },
          { text: "の" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "はなさんの 夢[ゆめ]は" },
          { text: "かなう" },
          { text: "の" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "はなさんの 夢[ゆめ]は" },
          { text: "かなう" },
          { text: "の" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "はなさんの 夢[ゆめ]が" },
          { text: "かなう" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "はなさんの 夢[ゆめ]が" },
          { text: "かなう" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "はなさんの 夢[ゆめ]は" },
          { text: "かなう" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "はなさんの 夢[ゆめ]は" },
          { text: "かなう" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "I wonder if Sora will buy a new camera.",
    hint: "Sora = そら",
    answers: [
      {
        segments: [
          { text: "そらさんは 新[あたら]しいカメラを 買[か]う" },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "そらさんは 新[あたら]しいカメラを 買[か]う" },
          { text: "の" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "そらさんは 新[あたら]しいカメラを 買[か]う" },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "そらさんは 新[あたら]しいカメラを 買[か]う" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "そらさんが 新[あたら]しいカメラを 買[か]う" },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "そらさんが 新[あたら]しいカメラを 買[か]う" },
          { text: "の" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "そらさんは 新[あたら]しいカメラを 買[か]う" },
          { text: "ん", blank: true },
          { text: "でしょうか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "そらさんは 新[あたら]しいカメラを 買[か]う" },
          { text: "ん" },
          { text: "だろうか", blank: true },
        ],
        register: "casual",
      },
    ],
  },
  {
    english: "Sushi is probably more delicious than hamburgers, right?",
    answers: [
      {
        segments: [
          { text: "寿司[すし]は ハンバーガーより" },
          { text: "おいしい" },
          { text: "でしょう", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "ハンバーガーより 寿司[すし]のほうが" },
          { text: "おいしい" },
          { text: "でしょう", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "寿司[すし]は ハンバーガーより" },
          { text: "おいしい" },
          { text: "だろう", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "ハンバーガーより 寿司[すし]のほうが" },
          { text: "おいしい" },
          { text: "だろう", blank: true },
        ],
        register: "casual",
      },
    ],
  },
];
