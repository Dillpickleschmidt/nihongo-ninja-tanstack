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
        notes: "Polite, の nominalization, 今年の冬 for \"this winter\"",
      },
      {
        segments: [
          { text: "今年[ことし]の 冬[ふよ]、雪[ゆき]が 降[ふ]る" },
          { text: "でしょうか", blank: true },
        ],
        notes: "Polite, の omitted before でしょうか",
      },
      {
        segments: [
          { text: "今年[ことし]の 冬[ふよ]、雪[ゆき]が 降[ふ]る" },
          { text: "ん", blank: true },
          { text: "でしょうか", blank: true },
        ],
        notes: "Polite, ん (contracted の) before でしょうか",
      },
      {
        segments: [
          { text: "この 冬[ふよ]、雪[ゆき]が 降[ふ]る" },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        notes: "この冬 instead of 今年の冬, polite, の nominalization",
      },
      {
        segments: [
          { text: "この 冬[ふよ]、雪[ゆき]が 降[ふ]る" },
          { text: "でしょうか", blank: true },
        ],
        notes: "この冬, polite, の omitted",
      },
      {
        segments: [
          { text: "この 冬[ふよ]、雪[ゆき]が 降[ふ]る" },
          { text: "ん", blank: true },
          { text: "でしょうか", blank: true },
        ],
        notes: "この冬, polite, ん contracted",
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
        notes: "Polite: な-adj + なの + でしょうか. Full nominalization with の.",
      },
      {
        segments: [
          { text: "たけしさんは 週末[しゅうまつ]、暇[ひま]" },
          { text: "な", blank: true },
          { text: "ん", blank: true },
          { text: "でしょうか", blank: true },
        ],
        notes: "Polite: な-adj + なん + でしょうか. Contracted ん form.",
      },
      {
        segments: [
          { text: "たけしさんは 週末[しゅうまつ]、暇[ひま]" },
          { text: "でしょうか", blank: true },
        ],
        notes: "Polite: な-adj + でしょうか. なの omitted (permitted per grammar notes).",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]、たけしさんは 暇[ひま]" },
          { text: "な", blank: true },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        notes: "Polite: time expression moved to front. なの + でしょうか.",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]、たけしさんは 暇[ひま]" },
          { text: "な", blank: true },
          { text: "ん", blank: true },
          { text: "でしょうか", blank: true },
        ],
        notes: "Polite: time first, なん + でしょうか contracted form.",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]、たけしさんは 暇[ひま]" },
          { text: "でしょうか", blank: true },
        ],
        notes: "Polite: time first, なの omitted, でしょうか only.",
      },
      {
        segments: [
          { text: "たけしさんが 週末[しゅうまつ]、暇[ひま]" },
          { text: "な", blank: true },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        notes: "Polite: が instead of は for subject marking. なの + でしょうか.",
      },
      {
        segments: [
          { text: "たけしさんは 今週末[こんしゅうまつ]、暇[ひま]" },
          { text: "な", blank: true },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        notes: "Polite: 今週末 (this weekend) instead of 週末. なの + でしょうか.",
      },
    ],
  },
  {
    english: "I wonder if the food at the party will be good.",
    answers: [
      {
        segments: [
          { text: "パーティーの 食[た]べ 物[もの]は" },
          { text: "いい", blank: true },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        notes: "Core polite form: パーティーの食べ物は + いいのでしょうか (blank)",
      },
      {
        segments: [
          { text: "パーティーの 食[た]べ 物[もの]は" },
          { text: "いい", blank: true },
          { text: "でしょうか", blank: true },
        ],
        notes: "Polite form with の omitted: いいでしょうか (の dropped)",
      },
      {
        segments: [
          { text: "パーティーの 食[た]べ 物[もの]が" },
          { text: "おいしい", blank: true },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        notes: "が instead of は; おいしい synonym for いい (good/delicious); polite でしょうか with の",
      },
      {
        segments: [
          { text: "パーティーの 食[た]べ 物[もの]が" },
          { text: "おいしいだろうか", blank: true },
        ],
        notes: "が + おいしい + だろうか; casual/masculine, の omitted",
      },
      {
        segments: [
          { text: "パーティーの 食[た]べ 物[もの]は" },
          { text: "おいしい", blank: true },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        notes: "は + おいしいのでしょうか; polite with の nominalization",
      },
      {
        segments: [
          { text: "パーティーの 食[た]べ 物[もの]は" },
          { text: "おいしいだろうか", blank: true },
        ],
        notes: "は + おいしいだろうか; casual/masculine, の omitted",
      },
      {
        segments: [
          { text: "パーティーの 料[りょう] 理[り]は" },
          { text: "いい", blank: true },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        notes: "料理 instead of 食べ物; polite でしょうか with の",
      },
      {
        segments: [
          { text: "パーティーの 料[りょう] 理[り]は" },
          { text: "いいだろうか", blank: true },
        ],
        notes: "料理は + いいだろうか; casual, の omitted",
      },
      {
        segments: [
          { text: "パーティーの 料[りょう] 理[り]は" },
          { text: "おいしい", blank: true },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        notes: "料理は + おいしいのでしょうか; polite with の",
      },
      {
        segments: [
          { text: "パーティーの 料[りょう] 理[り]は" },
          { text: "おいしいだろうか", blank: true },
        ],
        notes: "料理は + おいしいだろうか; casual, の omitted",
      },
    ],
  },
  {
    english: "The last train has probably already left, right?",
    answers: [
      {
        segments: [
          { text: "終電[しゅうでん]はもう 出[で]た", blank: true },
          { text: "でしょう" },
        ],
      },
      {
        segments: [
          { text: "終電[しゅうでん]はもう 出[で]たでしょう", blank: true },
          { text: "ね" },
        ],
        notes: "Adding ね at the end to reinforce the \"right?\" confirmation-seeking nuance",
      },
      {
        segments: [
          { text: "終電[しゅうでん]はもう 出[で]ただろう", blank: true },
          { text: "ね" },
        ],
        notes: "Casual だろう + ね",
      },
      {
        segments: [
          { text: "終電[しゅうでん]はもう 出[で]たの", blank: true },
          { text: "でしょう" },
        ],
        notes: "With の nominalization before でしょう — adds slight explanatory/reasoning nuance",
      },
      {
        segments: [
          { text: "終電[しゅうでん]はもう 出[で]て", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "でしょう" },
        ],
      },
      {
        segments: [
          { text: "終電[しゅうでん]がもう 出[で]た", blank: true },
          { text: "でしょう" },
        ],
        notes: "が instead of は — slightly more focus on 終電 as the subject",
      },
    ],
  },
  {
    english: "Kenji is probably at the library right now, right?",
    hint: "Kenji = 健一",
    answers: [
      {
        segments: [
          { text: "健一[けんいち]は 今[いま]、図書館[としょかん]に" },
          { text: "いるでしょう", blank: true },
        ],
      },
      {
        segments: [
          { text: "健一[けんいち]は 今[いま]、図書館[としょかん]に" },
          { text: "いるだろう", blank: true },
        ],
        notes: "だろう — casual/masculine equivalent",
      },
      {
        segments: [
          { text: "健一[けんいち]は 今[いま]、図書館[としょかん]に いるの" },
          { text: "でしょう", blank: true },
        ],
        notes: "のでしょう — nominalized with の, adding explanatory/rhetorical nuance",
      },
      {
        segments: [
          { text: "健一[けんいち]は 今[いま]、図書館[としょかん]に いるん" },
          { text: "でしょう", blank: true },
        ],
        notes: "んでしょう — ん (contracted の) version",
      },
      {
        segments: [
          { text: "健一[けんいち]は 今[いま]、図書館[としょかん]に いるの" },
          { text: "だろう", blank: true },
        ],
        notes: "のだろう — nominalized with の, casual/masculine",
      },
      {
        segments: [
          { text: "健一[けんいち]は 今[いま]、図書館[としょかん]に いるん" },
          { text: "だろう", blank: true },
        ],
        notes: "んだろう — ん contracted form, casual",
      },
      {
        segments: [
          { text: "今[いま]、健一[けんいち]は 図書館[としょかん]に" },
          { text: "いるでしょう", blank: true },
        ],
        notes: "今 moved to front — time-topic-location order",
      },
      {
        segments: [
          { text: "今[いま]、健一[けんいち]は 図書館[としょかん]に" },
          { text: "いるだろう", blank: true },
        ],
        notes: "今 at front + だろう",
      },
      {
        segments: [
          { text: "健一[けんいち]が 今[いま]、図書館[としょかん]に" },
          { text: "いるでしょう", blank: true },
        ],
        notes: "が instead of は — emphasizing Kenji as the subject",
      },
      {
        segments: [
          { text: "健一[けんいち]が 今[いま]、図書館[としょかん]に" },
          { text: "いるだろう", blank: true },
        ],
        notes: "が instead of は + だろう",
      },
    ],
  },
  {
    english: "That horror movie is probably scary, right?",
    hint: "ホラー = ホラー",
    answers: [
      {
        segments: [
          { text: "あのホラー 映画[えいが]は 怖[こわ]い", blank: true },
          { text: "でしょう" },
        ],
      },
      {
        segments: [
          { text: "そのホラー 映画[えいが]は 怖[こわ]い", blank: true },
          { text: "でしょう" },
        ],
        notes: "その instead of あの — both valid for \"that\"",
      },
      {
        segments: [
          { text: "あのホラー 映画[えいが]は 怖[こわ]い", blank: true },
          { text: "だろう" },
        ],
        notes: "だろう instead of でしょう — more casual/masculine",
      },
      {
        segments: [
          { text: "そのホラー 映画[えいが]は 怖[こわ]い", blank: true },
          { text: "だろう" },
        ],
        notes: "その + だろう",
      },
      {
        segments: [
          { text: "あのホラー 映画[えいが]は 怖[こわ]い", blank: true },
          { text: "でしょう" },
          { text: "ね" },
        ],
        notes: "でしょうね — adding ね to reinforce the \"right?\" nuance",
      },
      {
        segments: [
          { text: "そのホラー 映画[えいが]は 怖[こわ]い", blank: true },
          { text: "でしょう" },
          { text: "ね" },
        ],
        notes: "その + でしょうね",
      },
      {
        segments: [
          { text: "あのホラー 映画[えいが]は 怖[こわ]い", blank: true },
          { text: "だろう" },
          { text: "ね" },
        ],
        notes: "だろうね — casual with ね",
      },
      {
        segments: [
          { text: "あのホラー 映画[えいが]、 怖[こわ]い", blank: true },
          { text: "でしょう" },
        ],
        notes: "Without は particle — topic dropped, more natural casual phrasing",
      },
    ],
  },
  {
    english: "I wonder if Hana is interested in music.",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "はなさんは 音楽[おんがく]に 興味[きょうみ]がある", blank: true },
          { text: "のでしょうか" },
        ],
        notes: "Polite form: のでしょうか. 興味がある as the verb phrase, nominalized with の before でしょうか",
      },
      {
        segments: [
          { text: "はなさんは 音楽[おんがく]に 興味[きょうみ]がある", blank: true },
          { text: "のだろうか" },
        ],
        notes: "Casual/masculine form: のだろうか instead of のでしょうか",
      },
      {
        segments: [
          { text: "はなさんは 音楽[おんがく]に 興味[きょうみ]がある", blank: true },
          { text: "でしょうか" },
        ],
        notes: "の omitted before でしょうか — still natural per the grammar notes",
      },
      {
        segments: [
          { text: "はなさんは 音楽[おんがく]に 興味[きょうみ]がある", blank: true },
          { text: "だろうか" },
        ],
        notes: "の omitted before だろうか — casual, の dropped",
      },
      {
        segments: [
          { text: "はなさんが 音楽[おんがく]に 興味[きょうみ]がある", blank: true },
          { text: "のでしょうか" },
        ],
        notes: "が instead of は for subject particle; polite のでしょうか",
      },
      {
        segments: [
          { text: "はなさんが 音楽[おんがく]に 興味[きょうみ]がある", blank: true },
          { text: "のだろうか" },
        ],
        notes: "が instead of は; casual のだろうか",
      },
      {
        segments: [
          { text: "はなさんは 音楽[おんがく]に 興味[きょうみ]がある", blank: true },
          { text: "んでしょうか" },
        ],
        notes: "ん (contracted form of の) before でしょうか; polite",
      },
      {
        segments: [
          { text: "はなさんは 音楽[おんがく]に 興味[きょうみ]がある", blank: true },
          { text: "んだろうか" },
        ],
        notes: "ん (contracted form of の) before だろうか; casual",
      },
    ],
  },
  {
    english: "Working overtime every day must be tough, right?",
    answers: [
      {
        segments: [
          { text: "毎日[まいにち] 残業[ざんぎょう]するのは" },
          { text: "大変[たいへん]", blank: true },
          { text: "でしょう" },
        ],
      },
      {
        segments: [
          { text: "毎日[まいにち] 残業[ざんぎょう]するのは" },
          { text: "大変[たいへん]", blank: true },
          { text: "だろう" },
        ],
        notes: "Casual/masculine: だろう instead of でしょう",
      },
      {
        segments: [
          { text: "毎日[まいにち] 残業[ざんぎょう]しているのは" },
          { text: "大変[たいへん]", blank: true },
          { text: "でしょう" },
        ],
        notes: "Using ている (ongoing/habitual state) instead of plain する",
      },
      {
        segments: [
          { text: "毎日[まいにち] 残業[ざんぎょう]しているのは" },
          { text: "大変[たいへん]", blank: true },
          { text: "だろう" },
        ],
        notes: "ている + だろう (casual/masculine)",
      },
      {
        segments: [
          { text: "毎日[まいにち] 残業[ざんぎょう]するのが" },
          { text: "大変[たいへん]", blank: true },
          { text: "でしょう" },
        ],
        notes: "Using が instead of は as subject marker for the nominalized clause",
      },
      {
        segments: [
          { text: "毎日[まいにち] 残業[ざんぎょう]するのが" },
          { text: "大変[たいへん]", blank: true },
          { text: "だろう" },
        ],
        notes: "が + だろう (casual/masculine)",
      },
      {
        segments: [
          { text: "毎日[まいにち]の 残業[ざんぎょう]は" },
          { text: "大変[たいへん]", blank: true },
          { text: "でしょう" },
        ],
        notes: "毎日の残業は as a noun phrase topic instead of nominalized verb clause",
      },
      {
        segments: [
          { text: "毎日[まいにち]の 残業[ざんぎょう]は" },
          { text: "大変[たいへん]", blank: true },
          { text: "だろう" },
        ],
        notes: "毎日の残業は + だろう (casual/masculine)",
      },
    ],
  },
  {
    english: "I wonder if Sota will come back.",
    hint: "Sota = そうた",
    answers: [
      {
        segments: [
          { text: "そうたさんは 帰[かえ]る", blank: true },
          { text: "のでしょうか" },
        ],
        notes: "Polite でしょうか with の nominalization, は particle",
      },
      {
        segments: [
          { text: "そうたさんは 帰[かえ]る", blank: true },
          { text: "でしょうか" },
        ],
        notes: "Polite でしょうか with の omitted, は particle",
      },
      {
        segments: [
          { text: "そうたさんは 帰[かえ]るの", blank: true },
          { text: "だろうか" },
        ],
        notes: "Casual だろうか with の nominalization, は particle",
      },
      {
        segments: [
          { text: "そうたさんは 帰[かえ]る", blank: true },
          { text: "だろうか" },
        ],
        notes: "Casual だろうか with の omitted, は particle",
      },
      {
        segments: [
          { text: "そうたさんが 帰[かえ]る", blank: true },
          { text: "のでしょうか" },
        ],
        notes: "Polite でしょうか with の, が particle instead of は",
      },
      {
        segments: [
          { text: "そうたさんが 帰[かえ]るの", blank: true },
          { text: "だろうか" },
        ],
        notes: "Casual だろうか with の, が particle",
      },
      {
        segments: [
          { text: "そうたさんは 帰[かえ]ってくる", blank: true },
          { text: "のでしょうか" },
        ],
        notes: "帰ってくる (come back) instead of just 帰る, polite でしょうか with の",
      },
      {
        segments: [
          { text: "そうたさんは 帰[かえ]ってくる", blank: true },
          { text: "だろうか" },
        ],
        notes: "帰ってくる, casual だろうか, の omitted",
      },
      {
        segments: [
          { text: "そうたさんは 帰[かえ]ってくるの", blank: true },
          { text: "だろうか" },
        ],
        notes: "帰ってくる, casual だろうか with の",
      },
      {
        segments: [
          { text: "そうたさんは 帰[かえ]るんでしょうか", blank: true },
        ],
        notes: "Polite でしょうか with ん (contracted の), は particle",
      },
      {
        segments: [
          { text: "そうたさんは 帰[かえ]るんだろうか", blank: true },
        ],
        notes: "Casual だろうか with ん (contracted の), は particle",
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
      },
      {
        segments: [
          { text: "あのかばんは ゆきさんの" },
          { text: "なのだろうか", blank: true },
        ],
        notes: "Casual/masculine form: Noun + なのだろうか",
      },
      {
        segments: [
          { text: "あのかばんは ゆきさんの" },
          { text: "でしょうか", blank: true },
        ],
        notes: "Polite form with の omitted before でしょうか: Noun + でしょうか",
      },
      {
        segments: [
          { text: "あのかばんは ゆきさんの" },
          { text: "だろうか", blank: true },
        ],
        notes: "Casual form with なの omitted before だろうか: Noun + だろうか",
      },
      {
        segments: [
          { text: "あそこのかばんは ゆきさんの" },
          { text: "な", blank: true },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        notes: "Using あそこの instead of あの to express \"over there\": あそこのかばん",
      },
      {
        segments: [
          { text: "あそこのかばんは ゆきさんの" },
          { text: "なのだろうか", blank: true },
        ],
        notes: "あそこの with casual なのだろうか",
      },
      {
        segments: [
          { text: "あれは ゆきさんのかばん" },
          { text: "な", blank: true },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
      },
      {
        segments: [
          { text: "あれは ゆきさんのかばん" },
          { text: "なのだろうか", blank: true },
        ],
      },
      {
        segments: [
          { text: "あのかばんは ゆきさんの" },
          { text: "ん", blank: true },
          { text: "でしょうか", blank: true },
        ],
      },
      {
        segments: [
          { text: "あのかばんは ゆきさんの" },
          { text: "んだろうか", blank: true },
        ],
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
        notes: "Noun predicate + でしょう. Standard polite assertion.",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]は 世界[せかい]で 一番[いちばん] 速[はや]い 電車[でんしゃ]" },
          { text: "だろう", blank: true },
        ],
        notes: "Noun predicate + だろう. Casual/masculine version.",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]は 世界一[せかいいち]の 速[はや]さの 電車[でんしゃ]" },
          { text: "でしょう", blank: true },
        ],
        notes: "Using 世界一 (world's number one) instead of 世界で一番. Noun predicate + でしょう.",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]は 世界一[せかいいち]の 速[はや]さの 電車[でんしゃ]" },
          { text: "だろう", blank: true },
        ],
      },
      {
        segments: [
          { text: "世界[せかい]で 一番[いちばん] 速[はや]い 電車[でんしゃ]は 新幹線[しんかんせん]" },
          { text: "でしょう", blank: true },
        ],
        notes: "Reversed word order — \"The world's fastest train is probably the Shinkansen, right?\" Same meaning, different focus.",
      },
      {
        segments: [
          { text: "世界[せかい]で 一番[いちばん] 速[はや]い 電車[でんしゃ]は 新幹線[しんかんせん]" },
          { text: "だろう", blank: true },
        ],
        notes: "Reversed word order + だろう. Casual.",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]は 世界[せかい]で 一番[いちばん]" },
          { text: "速[はや]い", blank: true },
          { text: "でしょう" },
        ],
        notes: "い-adjective predicate + でしょう, without repeating 電車.",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]は 世界[せかい]で 一番[いちばん]" },
          { text: "速[はや]い", blank: true },
          { text: "だろう" },
        ],
        notes: "い-adjective predicate + だろう. Casual/masculine.",
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
      },
      {
        segments: [
          { text: "けいたさんは 大学院生[だいがくいんせい]なのだろうか", blank: true },
        ],
        notes: "Casual/masculine form: Noun + なのだろうか",
      },
      {
        segments: [
          { text: "けいたさんは 大学院生[だいがくいんせい]なんでしょうか", blank: true },
        ],
        notes: "Polite form with contracted ん: Noun + なんでしょうか",
      },
      {
        segments: [
          { text: "けいたさんは 大学院生[だいがくいんせい]なんだろうか", blank: true },
        ],
        notes: "Casual form with contracted ん: Noun + なんだろうか",
      },
    ],
  },
  {
    english: "I wonder if that neighborhood is quiet.",
    answers: [
      {
        segments: [
          { text: "あの 近所[きんじょ]は" },
          { text: "静[しず]かなのでしょうか", blank: true },
        ],
      },
      {
        segments: [
          { text: "あの 近所[きんじょ]は" },
          { text: "静[しず]かなんでしょうか", blank: true },
        ],
        notes: "Contracted ん version: 静かなん + でしょうか (polite). ん is a contraction of の.",
      },
      {
        segments: [
          { text: "あの 近所[きんじょ]は" },
          { text: "静[しず]かなのだろうか", blank: true },
        ],
        notes: "Casual/masculine form: 静かなの + だろうか.",
      },
      {
        segments: [
          { text: "あの 近所[きんじょ]は" },
          { text: "静[しず]かなんだろうか", blank: true },
        ],
        notes: "Casual/masculine with contracted ん: 静かなん + だろうか.",
      },
      {
        segments: [
          { text: "あの 近所[きんじょ]は" },
          { text: "静[しず]かだろうか", blank: true },
        ],
        notes: "だろうか with の omitted: 静か + だろうか. Casual, の-less variant.",
      },
      {
        segments: [
          { text: "その 近所[きんじょ]は" },
          { text: "静[しず]かなのでしょうか", blank: true },
        ],
        notes: "Using その instead of あの — \"that neighborhood (near you)\" + polite でしょうか.",
      },
      {
        segments: [
          { text: "その 近所[きんじょ]は" },
          { text: "静[しず]かなのだろうか", blank: true },
        ],
        notes: "その + casual だろうか with の.",
      },
      {
        segments: [
          { text: "その 近所[きんじょ]は" },
          { text: "静[しず]かだろうか", blank: true },
        ],
        notes: "その + casual だろうか with の omitted.",
      },
      {
        segments: [
          { text: "その 近所[きんじょ]は" },
          { text: "静[しず]かなんでしょうか", blank: true },
        ],
        notes: "その + contracted ん + でしょうか (polite).",
      },
      {
        segments: [
          { text: "あの 近所[きんじょ]は" },
          { text: "静[しず]かでしょうか", blank: true },
        ],
        notes: "あの + でしょうか with の omitted (な-adj directly + でしょうか).",
      },
      {
        segments: [
          { text: "その 近所[きんじょ]は" },
          { text: "静[しず]かでしょうか", blank: true },
        ],
        notes: "その + でしょうか with の omitted (direct な-adj + でしょうか).",
      },
    ],
  },
  {
    english: "I wonder if the new cafe near the station is popular.",
    answers: [
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェは 人気[にんき]があるのでしょうか", blank: true },
        ],
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェは 人気[にんき]があるのだろうか", blank: true },
        ],
        notes: "Casual/masculine form with だろうか; nominalized with の",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェは 人気[にんき]があるでしょうか", blank: true },
        ],
        notes: "Polite でしょうか with の omitted (casual dropping of nominalizer)",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェは 人気[にんき]があるだろうか", blank: true },
        ],
        notes: "Casual だろうか with の omitted",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェは 人気[にんき]なのでしょうか", blank: true },
        ],
        notes: "人気 treated as な-adjective: 人気なのでしょうか (polite)",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェは 人気[にんき]なのだろうか", blank: true },
        ],
        notes: "人気 as な-adjective with だろうか (casual/masculine)",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くにある 新[あたら]しいカフェは 人気[にんき]があるのでしょうか", blank: true },
        ],
        notes: "近くにある as relative clause modifying カフェ (more explicit); polite でしょうか",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くにある 新[あたら]しいカフェは 人気[にんき]があるのだろうか", blank: true },
        ],
        notes: "近くにある relative clause + だろうか (casual)",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェは 人気[にんき]があるんでしょうか", blank: true },
        ],
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェは 人気[にんき]があるんだろうか", blank: true },
        ],
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェは 人気[にんき]なんでしょうか", blank: true },
        ],
        notes: "人気 as な-adjective with ん (contracted なの) + でしょうか",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェは 人気[にんき]なんだろうか", blank: true },
        ],
        notes: "人気 as な-adjective with ん (contracted なの) + だろうか (casual)",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェが 人気[にんき]があるのでしょうか", blank: true },
        ],
        notes: "が instead of は as subject marker; polite でしょうか",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くの 新[あたら]しいカフェが 人気[にんき]があるのだろうか", blank: true },
        ],
        notes: "が instead of は + だろうか (casual)",
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
          { text: "かなう", blank: true },
          { text: "のでしょうか" },
        ],
      },
      {
        segments: [
          { text: "はなさんの 夢[ゆめ]が" },
          { text: "かなう", blank: true },
          { text: "のだろうか" },
        ],
        notes: "Casual/masculine form with が and の nominalization",
      },
      {
        segments: [
          { text: "はなさんの 夢[ゆめ]は" },
          { text: "かなう", blank: true },
          { text: "のでしょうか" },
        ],
        notes: "は instead of が, polite with の nominalization",
      },
      {
        segments: [
          { text: "はなさんの 夢[ゆめ]は" },
          { text: "かなう", blank: true },
          { text: "のだろうか" },
        ],
        notes: "は instead of が, casual/masculine with の nominalization",
      },
      {
        segments: [
          { text: "はなさんの 夢[ゆめ]が" },
          { text: "かなう", blank: true },
          { text: "でしょうか" },
        ],
        notes: "Polite form with が, の omitted",
      },
      {
        segments: [
          { text: "はなさんの 夢[ゆめ]が" },
          { text: "かなう", blank: true },
          { text: "だろうか" },
        ],
        notes: "Casual/masculine form with が, の omitted",
      },
      {
        segments: [
          { text: "はなさんの 夢[ゆめ]は" },
          { text: "かなう", blank: true },
          { text: "でしょうか" },
        ],
        notes: "は instead of が, polite, の omitted",
      },
      {
        segments: [
          { text: "はなさんの 夢[ゆめ]は" },
          { text: "かなう", blank: true },
          { text: "だろうか" },
        ],
        notes: "は instead of が, casual/masculine, の omitted",
      },
    ],
  },
  {
    english: "I wonder if Sora will buy a new camera.",
    hint: "Sora = そら",
    answers: [
      {
        segments: [
          { text: "そらは 新[あたら]しいカメラを 買[か]う" },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
      },
      {
        segments: [
          { text: "そらは 新[あたら]しいカメラを 買[か]う" },
          { text: "のだろうか", blank: true },
        ],
        notes: "Casual/masculine form with の nominalization + だろうか",
      },
      {
        segments: [
          { text: "そらは 新[あたら]しいカメラを 買[か]う" },
          { text: "でしょうか", blank: true },
        ],
        notes: "Polite でしょうか with の omitted",
      },
      {
        segments: [
          { text: "そらは 新[あたら]しいカメラを 買[か]う" },
          { text: "だろうか", blank: true },
        ],
        notes: "Casual だろうか with の omitted",
      },
      {
        segments: [
          { text: "そらが 新[あたら]しいカメラを 買[か]う" },
          { text: "の", blank: true },
          { text: "でしょうか", blank: true },
        ],
        notes: "が instead of は + のでしょうか",
      },
      {
        segments: [
          { text: "そらが 新[あたら]しいカメラを 買[か]う" },
          { text: "のだろうか", blank: true },
        ],
        notes: "が instead of は + のだろうか",
      },
      {
        segments: [
          { text: "そらは 新[あたら]しいカメラを 買[か]う" },
          { text: "ん", blank: true },
          { text: "でしょうか", blank: true },
        ],
        notes: "Contracted ん form (んでしょうか) instead of のでしょうか",
      },
      {
        segments: [
          { text: "そらは 新[あたら]しいカメラを 買[か]う" },
          { text: "んだろうか", blank: true },
        ],
        notes: "Contracted ん form (んだろうか) instead of のだろうか",
      },
    ],
  },
  {
    english: "Sushi is probably more delicious than hamburgers, right?",
    answers: [
      {
        segments: [
          { text: "すしは ハンバーガーより" },
          { text: "おいしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "でしょう" },
        ],
      },
      {
        segments: [
          { text: "ハンバーガーより すしのほうが" },
          { text: "おいしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "でしょう" },
        ],
      },
      {
        segments: [
          { text: "すしは ハンバーガーより" },
          { text: "おいしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "だろう" },
        ],
        notes: "Casual だろう instead of でしょう",
      },
      {
        segments: [
          { text: "ハンバーガーより すしのほうが" },
          { text: "おいしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "だろう" },
        ],
        notes: "のほうが + casual だろう",
      },
      {
        segments: [
          { text: "寿司[すし]は ハンバーガーより" },
          { text: "おいしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "でしょう" },
        ],
        notes: "Using kanji 寿司 instead of hiragana すし, with でしょう",
      },
      {
        segments: [
          { text: "ハンバーガーより 寿司[すし]のほうが" },
          { text: "おいしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "でしょう" },
        ],
        notes: "Kanji 寿司, のほうが, でしょう",
      },
      {
        segments: [
          { text: "寿司[すし]は ハンバーガーより" },
          { text: "おいしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "だろう" },
        ],
        notes: "Kanji 寿司, casual だろう",
      },
      {
        segments: [
          { text: "ハンバーガーより 寿司[すし]のほうが" },
          { text: "おいしい", blank: true, conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "だろう" },
        ],
        notes: "Kanji 寿司, のほうが, casual だろう",
      },
    ],
  },
];
