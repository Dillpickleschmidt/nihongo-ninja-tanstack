import type { Question, SegmentConjugation } from "../types";

const normal = (
  pos: SegmentConjugation["pos"],
  polarity: SegmentConjugation["polarity"] = "positive",
): SegmentConjugation => ({ pos, form: "normal", polarity, tense: "non-past" });

const potential = (pos: SegmentConjugation["pos"]): SegmentConjugation => ({
  pos,
  form: "potential",
  polarity: "positive",
  tense: "non-past",
});

export const questions: Question[] = [
  {
    english: "If it's a horror movie, I can't watch it.",
    answers: [
      {
        segments: [
          { text: "ホラー 映画[えいが]なら", blank: true },
          { text: "、" },
          { text: "見[み]る", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ホラー 映画[えいが]ならば", blank: true },
          { text: "、" },
          { text: "見[み]る", conjugation: { pos: "Ichidan verb", form: "potential", polarity: "negative", tense: "non-past" } },
        ],
        notes: "ならば is a fuller form of なら.",
      },
      {
        segments: [
          { text: "ホラー 映画[えいが]なら", blank: true },
          { text: "、見[み]ることが" },
          { text: "できる", conjugation: normal("Ichidan verb", "negative") },
        ],
        notes: "ことができない gives a direct 'not able to' phrasing.",
      },
    ],
  },
  {
    english: "If you're going to buy a bag, the one at that shop is cheap and good.",
    answers: [
      {
        segments: [
          { text: "かばんを 買[か]うなら", blank: true },
          { text: "、あの 店[みせ]のが 安[やす]くて" },
          { text: "よい", conjugation: normal("I-adjective") },
        ],
      },
      {
        segments: [
          { text: "かばんを 買[か]うのなら", blank: true },
          { text: "、あの 店[みせ]のが 安[やす]くて" },
          { text: "よい", conjugation: normal("I-adjective") },
        ],
        notes: "のなら makes the condition sound a little more framed or specific.",
      },
      {
        segments: [
          { text: "かばんを 買[か]うならば", blank: true },
          { text: "、その 店[みせ]のが 安[やす]くて" },
          { text: "よい", conjugation: normal("I-adjective") },
        ],
        notes: "その店 points to a shop closer to the listener or already mentioned.",
      },
      {
        segments: [
          { text: "かばんなら", blank: true },
          { text: "、あの 店[みせ]のが 安[やす]くて" },
          { text: "よい", conjugation: normal("I-adjective") },
        ],
        notes: "かばんなら means as for bags.",
      },
    ],
  },
  {
    english: "If you're going to study, the library is quiet and good.",
    answers: [
      {
        segments: [
          { text: "勉強[べんきょう]するなら", blank: true },
          { text: "、図書館[としょかん]は 静[しず]かで" },
          { text: "よい", conjugation: normal("I-adjective") },
        ],
      },
      {
        segments: [
          { text: "勉強[べんきょう]するのなら", blank: true },
          { text: "、図書館[としょかん]は 静[しず]かで" },
          { text: "よい", conjugation: normal("I-adjective") },
        ],
        notes: "のなら makes the study plan sound more specific.",
      },
      {
        segments: [
          { text: "勉強[べんきょう]するならば", blank: true },
          { text: "、図書館[としょかん]が 静[しず]かで" },
          { text: "よい", conjugation: normal("I-adjective") },
        ],
        notes: "が points to the library as the good choice.",
      },
    ],
  },
  {
    english: "If it's the weekend, I can come.",
    answers: [
      {
        segments: [
          { text: "週末[しゅうまつ]なら", blank: true },
          { text: "、" },
          { text: "来[く]る", conjugation: potential("Kuru verb - special class") },
        ],
      },
      {
        segments: [
          { text: "週末[しゅうまつ]ならば", blank: true },
          { text: "、来[く]ることが" },
          { text: "できる", conjugation: normal("Ichidan verb") },
        ],
        notes: "ことができる states the possibility directly.",
      },
    ],
  },
  {
    english: "If it's cooking, Kenji is the best in the family.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "料理[りょうり]なら", blank: true },
          { text: "、けんじさんは 家族[かぞく]の 中[なか]で 一番[いちばん]" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "料理[りょうり]ならば", blank: true },
          { text: "、けんじさんが 家族[かぞく]の 中[なか]で 一番[いちばん]" },
          { text: "です" },
        ],
        notes: "が puts focus on Kenji as the best person.",
      },
      {
        segments: [
          { text: "料理[りょうり]のことなら", blank: true },
          { text: "、けんじさんは 家族[かぞく]の 中[なか]で 一番[いちばん] 上手[じょうず]" },
          { text: "です" },
        ],
        notes: "料理のことなら means when it comes to cooking.",
      },
    ],
  },
  {
    english: "If your stomach hurts, you should rest and not go to work today.",
    answers: [
      {
        segments: [
          { text: "おなかが 痛[いた]いなら", blank: true },
          { text: "、今日[きょう]は 仕事[しごと]に 行[い]かないで 休[やす]んだほうが" },
          { text: "よい", conjugation: normal("I-adjective") },
        ],
      },
      {
        segments: [
          { text: "おなかが 痛[いた]いのなら", blank: true },
          { text: "、今日[きょう]は 休[やす]んで 会社[かいしゃ]に 行[い]かないほうが" },
          { text: "よい", conjugation: normal("I-adjective") },
        ],
        notes: "会社に行かない means not going to the company or workplace.",
      },
      {
        segments: [
          { text: "おなかが 痛[いた]いならば", blank: true },
          { text: "、今日[きょう]は 休[やす]んだほうが" },
          { text: "よい", conjugation: normal("I-adjective") },
          { text: "し、仕事[しごと]に 行[い]かないほうが" },
          { text: "よい", conjugation: normal("I-adjective") },
        ],
        notes: "This version lists the two pieces of advice separately.",
      },
    ],
  },
  {
    english: "If it's guitar, Kenji can teach you.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "ギターなら", blank: true },
          { text: "、けんじさんが" },
          { text: "教[おし]える", conjugation: potential("Ichidan verb") },
        ],
      },
      {
        segments: [
          { text: "ギターならば", blank: true },
          { text: "、けんじさんは 教[おし]えることが" },
          { text: "できる", conjugation: normal("Ichidan verb") },
        ],
        notes: "ことができる states the ability directly.",
      },
      {
        segments: [
          { text: "ギターなら", blank: true },
          { text: "、けんじさんに 教[おし]えてもらえる" },
        ],
        notes: "教えてもらえる means you can have Kenji teach you.",
      },
    ],
  },
  {
    english: "If Hana is free on Saturday, let's all go to karaoke together.",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "はなさんが 土曜日[どようび]に 暇[ひま]なら", blank: true },
          { text: "、みんなで カラオケに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "土曜日[どようび]に はなさんが 暇[ひま]ならば", blank: true },
          { text: "、みんなで 一緒[いっしょ]に カラオケに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "The Saturday phrase starts the condition.",
      },
    ],
  },
  {
    english: "If you're going to sell the car, I want to buy it.",
    answers: [
      {
        segments: [
          { text: "車[くるま]を 売[う]るなら", blank: true },
          { text: "、私[わたし]が 買[か]い" },
          { text: "たい", conjugation: normal("I-adjective") },
        ],
      },
      {
        segments: [
          { text: "車[くるま]を 売[う]るのなら", blank: true },
          { text: "、買[か]い" },
          { text: "たい", conjugation: normal("I-adjective") },
        ],
        notes: "The subject is left unsaid in the result.",
      },
      {
        segments: [
          { text: "その 車[くるま]を 売[う]るならば", blank: true },
          { text: "、買[か]い" },
          { text: "たい", conjugation: normal("I-adjective") },
        ],
        notes: "その車 points to a specific car.",
      },
    ],
  },
  {
    english: "If you're free tomorrow, can you help me with this homework?",
    answers: [
      {
        segments: [
          { text: "たろうさんが 明日[あした] 暇[ひま]なら", blank: true },
          { text: "、この 宿題[しゅくだい]を 手伝[てつだ]ってもらえる" },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "たろうさんが 明日[あした] 暇[ひま]なのなら", blank: true },
          { text: "、この 宿題[しゅくだい]を 手伝[てつだ]ってくれる" },
          { text: "か" },
        ],
        notes: "てくれる asks whether Taro will help.",
      },
      {
        segments: [
          { text: "この 宿題[しゅくだい]、たろうさんが 明日[あした] 暇[ひま]ならば", blank: true },
          { text: "手伝[てつだ]ってもらえる" },
          { text: "か" },
        ],
        notes: "The homework is placed first as the topic.",
      },
    ],
  },
  {
    english: "If it hurts, you should go to the hospital.",
    answers: [
      {
        segments: [
          { text: "痛[いた]いなら", blank: true },
          { text: "、病院[びょういん]に 行[い]ったほうが" },
          { text: "よい", conjugation: normal("I-adjective") },
        ],
      },
      {
        segments: [
          { text: "痛[いた]いのなら", blank: true },
          { text: "、病院[びょういん]に 行[い]ったほうが" },
          { text: "よい", conjugation: normal("I-adjective") },
        ],
        notes: "のなら makes the condition sound more specific.",
      },
    ],
  },
  {
    english: "If you have a peanut allergy, it's better not to eat that cake.",
    hint: "allergy = アレルギー",
    answers: [
      {
        segments: [
          { text: "ピーナッツアレルギーがあるなら", blank: true },
          { text: "、そのケーキは 食[た]べないほうが" },
          { text: "よい", conjugation: normal("I-adjective") },
        ],
      },
      {
        segments: [
          { text: "ピーナッツアレルギーがあるのなら", blank: true },
          { text: "、あのケーキは 食[た]べないほうが" },
          { text: "よい", conjugation: normal("I-adjective") },
        ],
        notes: "あのケーキ points to a cake farther away or already known.",
      },
      {
        segments: [
          { text: "ピーナッツアレルギーなら", blank: true },
          { text: "、そのケーキを 食[た]べないほうが" },
          { text: "よい", conjugation: normal("I-adjective") },
        ],
        notes: "The allergy noun itself is used as the condition.",
      },
    ],
  },
  {
    english: "If it's sushi, Tsukiji is the most famous in the world.",
    hint: "Tsukiji = つきじ",
    answers: [
      {
        segments: [
          { text: "寿司[すし]なら", blank: true },
          { text: "、つきじが 世界[せかい]で 一番[いちばん] 有名[ゆうめい]" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "寿司[すし]ならば", blank: true },
          { text: "、つきじは 世界中[せかいじゅう]で 一番[いちばん] 有名[ゆうめい]" },
          { text: "です" },
        ],
        notes: "世界中で means throughout the world.",
      },
    ],
  },
  {
    english: "If it's Kyoto, the Shinkansen is the most convenient.",
    hint: "Kyoto = きょうと, Shinkansen = しんかんせん",
    answers: [
      {
        segments: [
          { text: "きょうとなら", blank: true },
          { text: "、新幹線[しんかんせん]が 一番[いちばん] 便利[べんり]" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "きょうとならば", blank: true },
          { text: "、新幹線[しんかんせん]は 一番[いちばん] 便利[べんり]" },
          { text: "です" },
        ],
        notes: "は makes the Shinkansen the topic.",
      },
      {
        segments: [
          { text: "きょうとなら", blank: true },
          { text: "、新幹線[しんかんせん]が 一番[いちばん]" },
          { text: "よい", conjugation: normal("I-adjective") },
        ],
        notes: "一番よい means the best choice.",
      },
    ],
  },
  {
    english: "If you're sleepy, you should sleep instead of studying.",
    answers: [
      {
        segments: [
          { text: "眠[ねむ]いなら", blank: true },
          { text: "、勉強[べんきょう]しないで 寝[ね]たほうが" },
          { text: "よい", conjugation: normal("I-adjective") },
        ],
      },
      {
        segments: [
          { text: "眠[ねむ]いのならば", blank: true },
          { text: "、勉強[べんきょう]しないで 寝[ね]たほうが" },
          { text: "よい", conjugation: normal("I-adjective") },
        ],
        notes: "のならば is a fuller conditional phrasing.",
      },
    ],
  },
  {
    english: "If it's karate, I practiced for three years, so I can teach you.",
    answers: [
      {
        segments: [
          { text: "空手[からて]なら", blank: true },
          { text: "、三年[さんねん] 練習[れんしゅう]したから、" },
          { text: "教[おし]える", conjugation: potential("Ichidan verb") },
        ],
      },
      {
        segments: [
          { text: "空手[からて]ならば", blank: true },
          { text: "、三年間[さんねんかん] 練習[れんしゅう]したから、教[おし]えることが" },
          { text: "できる", conjugation: normal("Ichidan verb") },
        ],
        notes: "三年間 emphasizes the three-year span.",
      },
    ],
  },
  {
    english: "If it's coffee, I can drink it every day.",
    answers: [
      {
        segments: [
          { text: "コーヒーなら", blank: true },
          { text: "、毎日[まいにち]" },
          { text: "飲[の]む", conjugation: potential("Godan verb with 'mu' ending") },
        ],
      },
      {
        segments: [
          { text: "コーヒーならば", blank: true },
          { text: "、毎日[まいにち]でも" },
          { text: "飲[の]む", conjugation: potential("Godan verb with 'mu' ending") },
        ],
        notes: "毎日でも means even every day.",
      },
    ],
  },
  {
    english: "If you're good at English, you can work anywhere in the world.",
    answers: [
      {
        segments: [
          { text: "英語[えいご]が 上手[じょうず]なら", blank: true },
          { text: "、世界[せかい]のどこでも 仕事[しごと]ができる" },
        ],
      },
      {
        segments: [
          { text: "英語[えいご]が 得意[とくい]なら", blank: true },
          { text: "、世界中[せかいじゅう]のどこでも" },
          { text: "働[はたら]く", conjugation: potential("Godan verb with 'ku' ending") },
        ],
        notes: "得意 means being good at something.",
      },
      {
        segments: [
          { text: "英語[えいご]が 上手[じょうず]なのなら", blank: true },
          { text: "、世界[せかい]のどこでも" },
          { text: "働[はたら]く", conjugation: potential("Godan verb with 'ku' ending") },
        ],
        notes: "なのなら fits a na-adjective condition.",
      },
    ],
  },
  {
    english: "If Yuki is going to travel abroad, it would be better to study a foreign language.",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "ゆきさんが 海外旅行[かいがいりょこう]するなら", blank: true },
          { text: "、外国語[がいこくご]を 勉強[べんきょう]したほうが" },
          { text: "よい", conjugation: normal("I-adjective") },
        ],
      },
      {
        segments: [
          { text: "ゆきさんが 外国[がいこく]に 旅行[りょこう]するのなら", blank: true },
          { text: "、外国語[がいこくご]を 勉強[べんきょう]したほうが" },
          { text: "よい", conjugation: normal("I-adjective") },
        ],
        notes: "外国に旅行する also means to travel abroad.",
      },
      {
        segments: [
          { text: "ゆきさんが 海外[かいがい]に 行[い]くなら", blank: true },
          { text: "、外国語[がいこくご]を 勉強[べんきょう]するのが" },
          { text: "よい", conjugation: normal("I-adjective") },
        ],
        notes: "海外に行く means to go abroad.",
      },
    ],
  },
  {
    english: "If you're free, can you come to the party with me?",
    answers: [
      {
        segments: [
          { text: "暇[ひま]なら", blank: true },
          { text: "、私[わたし]と 一緒[いっしょ]に パーティーに" },
          { text: "来[く]る", conjugation: potential("Kuru verb - special class") },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "暇[ひま]なのなら", blank: true },
          { text: "、私[わたし]と パーティーに 来[き]てくれる" },
          { text: "か" },
        ],
        notes: "来てくれる asks whether the person will come for the speaker.",
      },
      {
        segments: [
          { text: "暇[ひま]ならば", blank: true },
          { text: "、一緒[いっしょ]に パーティーに" },
          { text: "来[く]る", conjugation: potential("Kuru verb - special class") },
          { text: "か" },
        ],
        notes: "一緒に keeps the 'with me' idea when 私と is left out.",
      },
    ],
  },
];
