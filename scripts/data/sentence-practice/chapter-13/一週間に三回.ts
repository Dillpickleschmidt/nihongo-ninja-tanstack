import type { Question, SegmentConjugation } from "../types";

const normal = (
  pos: SegmentConjugation["pos"],
  polarity: SegmentConjugation["polarity"] = "positive",
): SegmentConjugation => ({ pos, form: "normal", polarity, tense: "non-past" });

export const questions: Question[] = [
  {
    english: "I swim in the sea twice a week.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 海[うみ]で" },
          { text: "一週間[いっしゅうかん]に 二回[にかい]", blank: true },
          { text: "泳[およ]ぐ", conjugation: normal("Godan verb with 'gu' ending") },
        ],
      },
      {
        segments: [
          { text: "週[しゅう]に 二回[にかい]", blank: true },
          { text: "海[うみ]で" },
          { text: "泳[およ]ぐ", conjugation: normal("Godan verb with 'gu' ending") },
        ],
        notes: "週に is a shorter way to say per week.",
      },
    ],
  },
  {
    english: "Hana goes to the beauty parlor about three times a month.",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "はなさんは" },
          { text: "一[いっ]か月[げつ]に 三回[さんかい]ぐらい", blank: true },
          { text: "美容院[びよういん]に" },
          { text: "行[い]く", conjugation: normal("Godan verb - Iku/Yuku special class") },
        ],
      },
      {
        segments: [
          { text: "はなさんは" },
          { text: "一[いっ]か月[げつ]に 三回[さんかい]くらい", blank: true },
          { text: "美容院[びよういん]に" },
          { text: "行[い]く", conjugation: normal("Godan verb - Iku/Yuku special class") },
        ],
        notes: "くらい is another spelling of the same approximate amount.",
      },
    ],
  },
  {
    english: "I eat lunch at the cafeteria about four times a week.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 食堂[しょくどう]で" },
          { text: "一週間[いっしゅうかん]に 四回[よんかい]ぐらい", blank: true },
          { text: "昼[ひる]ご飯[はん]を" },
          { text: "食[た]べる", conjugation: normal("Ichidan verb") },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "一週間[いっしゅうかん]に 四回[よんかい]くらい", blank: true },
          { text: "食堂[しょくどう]で 昼食[ちゅうしょく]を" },
          { text: "食[た]べる", conjugation: normal("Ichidan verb") },
        ],
        notes: "昼食 is a more formal word for lunch.",
      },
    ],
  },
  {
    english: "Does Kenji go to karaoke five times a week?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは" },
          { text: "一週間[いっしゅうかん]に 五回[ごかい]", blank: true },
          { text: "カラオケに" },
          { text: "行[い]く", conjugation: normal("Godan verb - Iku/Yuku special class") },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "けんじさんは カラオケに" },
          { text: "一週間[いっしゅうかん]に 五回[ごかい]", blank: true },
          { text: "行[い]く", conjugation: normal("Godan verb - Iku/Yuku special class") },
          { text: "か" },
        ],
        notes: "The destination comes before the frequency phrase.",
      },
    ],
  },
  {
    english: "Saki practices piano three times a week.",
    hint: "Saki = さき",
    answers: [
      {
        segments: [
          { text: "さきさんは" },
          { text: "一週間[いっしゅうかん]に 三回[さんかい]", blank: true },
          { text: "ピアノを" },
          { text: "練習[れんしゅう]する", conjugation: normal("Suru verb - compound word") },
        ],
      },
      {
        segments: [
          { text: "さきさんは ピアノを" },
          { text: "一週間[いっしゅうかん]に 三回[さんかい]", blank: true },
          { text: "練習[れんしゅう]する", conjugation: normal("Suru verb - compound word") },
        ],
        notes: "The object comes before the frequency phrase.",
      },
    ],
  },
  {
    english: "Takeshi goes running in the park twice a week.",
    hint: "Takeshi = たけし",
    answers: [
      {
        segments: [
          { text: "たけしさんは" },
          { text: "一週間[いっしゅうかん]に 二回[にかい]", blank: true },
          { text: "公園[こうえん]で" },
          { text: "走[はし]る", conjugation: normal("Godan verb with 'ru' ending") },
        ],
      },
      {
        segments: [
          { text: "たけしさんは 公園[こうえん]で" },
          { text: "一週間[いっしゅうかん]に 二回[にかい]", blank: true },
          { text: "走[はし]る", conjugation: normal("Godan verb with 'ru' ending") },
        ],
        notes: "The location comes before the frequency phrase.",
      },
      {
        segments: [
          { text: "たけしさんは" },
          { text: "一週間[いっしゅうかん]に 二回[にかい]", blank: true },
          { text: "公園[こうえん]に 走[はし]りに" },
          { text: "行[い]く", conjugation: normal("Godan verb - Iku/Yuku special class") },
        ],
        notes: "走りに行く means to go for a run.",
      },
    ],
  },
  {
    english: "I go to a hot spring about twice a year.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "一年[いちねん]に 二回[にかい]ぐらい", blank: true },
          { text: "温泉[おんせん]に" },
          { text: "行[い]く", conjugation: normal("Godan verb - Iku/Yuku special class") },
        ],
      },
      {
        segments: [
          { text: "一年[いちねん]に 二回[にかい]くらい", blank: true },
          { text: "私[わたし]は 温泉[おんせん]へ" },
          { text: "行[い]く", conjugation: normal("Godan verb - Iku/Yuku special class") },
        ],
        notes: "へ also marks the destination.",
      },
    ],
  },
  {
    english: "I watch movies about once a week.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "一週間[いっしゅうかん]に 一回[いっかい]ぐらい", blank: true },
          { text: "映画[えいが]を" },
          { text: "見[み]る", conjugation: normal("Ichidan verb") },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "一週間[いっしゅうかん]に 一回[いっかい]くらい", blank: true },
          { text: "映画[えいが]を 見[み]に" },
          { text: "行[い]く", conjugation: normal("Godan verb - Iku/Yuku special class") },
        ],
        notes: "見に行く suggests going out to see movies.",
      },
    ],
  },
  {
    english: "How many times a week does Haruto exercise?",
    hint: "Haruto = はると",
    answers: [
      {
        segments: [
          { text: "はるとさんは 一週間[いっしゅうかん]に" },
          { text: "何回[なんかい]", blank: true },
          { text: "運動[うんどう]" },
          { text: "する", conjugation: normal("Suru verb - included") },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "一週間[いっしゅうかん]に" },
          { text: "何回[なんかい]", blank: true },
          { text: "はるとさんは 運動[うんどう]" },
          { text: "する", conjugation: normal("Suru verb - included") },
          { text: "か" },
        ],
        notes: "The timeframe starts the question.",
      },
    ],
  },
  {
    english: "I only study once a week.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "一週間[いっしゅうかん]に 一回[いっかい]しか", blank: true },
          { text: "勉強[べんきょう]する", conjugation: normal("Suru verb - compound word", "negative") },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "一週間[いっしゅうかん]に 一度[いちど]しか", blank: true },
          { text: "勉強[べんきょう]する", conjugation: normal("Suru verb - compound word", "negative") },
        ],
        notes: "一度 is another way to say once.",
      },
    ],
  },
  {
    english: "Sota eats sushi three times a week?!",
    hint: "Sota = そうた",
    answers: [
      {
        segments: [
          { text: "そうたさんは" },
          { text: "一週間[いっしゅうかん]に 三回[さんかい]も", blank: true },
          { text: "寿司[すし]を" },
          { text: "食[た]べる", conjugation: normal("Ichidan verb") },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "そうたさんは 寿司[すし]を" },
          { text: "一週間[いっしゅうかん]に 三回[さんかい]も", blank: true },
          { text: "食[た]べる", conjugation: normal("Ichidan verb") },
          { text: "か" },
        ],
        notes: "The sushi comes before the frequency phrase.",
      },
    ],
  },
  {
    english: "I go to the dentist once a month.",
    hint: "dentist = 歯科[しか]",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "一[いっ]か月[げつ]に 一回[いっかい]", blank: true },
          { text: "歯科[しか]に" },
          { text: "行[い]く", conjugation: normal("Godan verb - Iku/Yuku special class") },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 歯科[しか]に" },
          { text: "一[いっ]か月[げつ]に 一度[いちど]", blank: true },
          { text: "行[い]く", conjugation: normal("Godan verb - Iku/Yuku special class") },
        ],
        notes: "一度 is another way to say once.",
      },
    ],
  },
  {
    english: "Miki goes camping twice a year.",
    hint: "Miki = みき",
    answers: [
      {
        segments: [
          { text: "みきさんは" },
          { text: "一年[いちねん]に 二回[にかい]", blank: true },
          { text: "キャンプに" },
          { text: "行[い]く", conjugation: normal("Godan verb - Iku/Yuku special class") },
        ],
      },
      {
        segments: [
          { text: "みきさんは" },
          { text: "一年[いちねん]に 二回[にかい]", blank: true },
          { text: "キャンプを" },
          { text: "する", conjugation: normal("Suru verb - special class") },
        ],
        notes: "キャンプをする means to camp.",
      },
    ],
  },
  {
    english: "Does Riko do laundry three times a week?",
    hint: "Riko = りこ",
    answers: [
      {
        segments: [
          { text: "りこさんは" },
          { text: "一週間[いっしゅうかん]に 三回[さんかい]", blank: true },
          { text: "洗濯[せんたく]する", conjugation: normal("Suru verb - compound word") },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "りこさんは" },
          { text: "一週間[いっしゅうかん]に 三回[さんかい]も", blank: true },
          { text: "洗濯[せんたく]する", conjugation: normal("Suru verb - compound word") },
          { text: "か" },
        ],
        notes: "も adds a surprised feeling: as many as three times.",
      },
    ],
  },
  {
    english: "I call home about twice a week.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "一週間[いっしゅうかん]に 二回[にかい]ぐらい", blank: true },
          { text: "家[いえ]に 電話[でんわ]" },
          { text: "する", conjugation: normal("Suru verb - included") },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 家[いえ]に" },
          { text: "一週間[いっしゅうかん]に 二回[にかい]くらい", blank: true },
          { text: "電話[でんわ]" },
          { text: "する", conjugation: normal("Suru verb - included") },
        ],
        notes: "The home destination comes before the frequency phrase.",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "一週間[いっしゅうかん]に 二回[にかい]ぐらい", blank: true },
          { text: "うちに 電話[でんわ]" },
          { text: "する", conjugation: normal("Suru verb - included") },
        ],
        notes: "うち is a common word for home.",
      },
    ],
  },
  {
    english: "I buy new clothes about once a month.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "一[いっ]か月[げつ]に 一回[いっかい]ぐらい", blank: true },
          { text: "新[あたら]しい 服[ふく]を" },
          { text: "買[か]う", conjugation: normal("Godan verb with 'u' ending") },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "一[いっ]か月[げつ]に 一回[いっかい]くらい", blank: true },
          { text: "新[あたら]しい 洋服[ようふく]を" },
          { text: "買[か]う", conjugation: normal("Godan verb with 'u' ending") },
        ],
        notes: "洋服 is another word for clothes.",
      },
    ],
  },
  {
    english: "Yuki goes to the art museum once a week.",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "ゆきさんは" },
          { text: "一週間[いっしゅうかん]に 一回[いっかい]", blank: true },
          { text: "美術館[びじゅつかん]に" },
          { text: "行[い]く", conjugation: normal("Godan verb - Iku/Yuku special class") },
        ],
      },
      {
        segments: [
          { text: "ゆきさんは 美術館[びじゅつかん]に" },
          { text: "一週間[いっしゅうかん]に 一度[いちど]", blank: true },
          { text: "行[い]く", conjugation: normal("Godan verb - Iku/Yuku special class") },
        ],
        notes: "一度 is another way to say once.",
      },
    ],
  },
  {
    english: "Sota eats cake three times a week?!",
    hint: "Sota = そうた",
    answers: [
      {
        segments: [
          { text: "そうたさんは" },
          { text: "一週間[いっしゅうかん]に 三回[さんかい]も", blank: true },
          { text: "ケーキを" },
          { text: "食[た]べる", conjugation: normal("Ichidan verb") },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "そうたさんは ケーキを" },
          { text: "一週間[いっしゅうかん]に 三回[さんかい]も", blank: true },
          { text: "食[た]べる", conjugation: normal("Ichidan verb") },
          { text: "か" },
        ],
        notes: "The cake comes before the frequency phrase.",
      },
    ],
  },
  {
    english: "Riku only washes his hair about twice a week.",
    hint: "Riku = りく",
    answers: [
      {
        segments: [
          { text: "りくさんは" },
          { text: "一週間[いっしゅうかん]に 二回[にかい]ぐらいしか", blank: true },
          { text: "髪[かみ]を" },
          { text: "洗[あら]う", conjugation: normal("Godan verb with 'u' ending", "negative") },
        ],
      },
      {
        segments: [
          { text: "りくさんは" },
          { text: "一週間[いっしゅうかん]に 二回[にかい]くらいしか", blank: true },
          { text: "髪[かみ]の 毛[け]を" },
          { text: "洗[あら]う", conjugation: normal("Godan verb with 'u' ending", "negative") },
        ],
        notes: "髪の毛 is another way to say hair.",
      },
    ],
  },
  {
    english: "Rina rides a roller coaster about twice a year.",
    hint: "Rina = りな; roller coaster = ジェットコースター",
    answers: [
      {
        segments: [
          { text: "りなさんは" },
          { text: "一年[いちねん]に 二回[にかい]ぐらい", blank: true },
          { text: "ジェットコースターに" },
          { text: "乗[の]る", conjugation: normal("Godan verb with 'ru' ending") },
        ],
      },
      {
        segments: [
          { text: "りなさんは ジェットコースターに" },
          { text: "一年[いちねん]に 二回[にかい]くらい", blank: true },
          { text: "乗[の]る", conjugation: normal("Godan verb with 'ru' ending") },
        ],
        notes: "The ride comes before the frequency phrase.",
      },
    ],
  },
];
