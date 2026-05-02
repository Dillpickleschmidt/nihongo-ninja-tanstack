import type { Question, SegmentConjugation } from "../types";

const miru = (
  form: SegmentConjugation["form"] = "normal",
  tense: SegmentConjugation["tense"] = "non-past",
): SegmentConjugation => ({ pos: "Ichidan verb", form, polarity: "positive", tense });

export const questions: Question[] = [
  {
    english: "This curry looks delicious — I'll try eating it!",
    answers: [
      {
        segments: [
          { text: "このカレーは おいしい！" },
          { text: "食[た]べて", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
      },
      {
        segments: [
          { text: "このカレー、おいしそう！" },
          { text: "食[た]べて", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
        notes: "おいしそう means it looks delicious.",
      },
    ],
  },
  {
    english: "I'll try listening to that song tonight.",
    answers: [
      {
        segments: [
          { text: "今晩[こんばん]、その 歌[うた]を 聞[き]いて", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
      },
      {
        segments: [
          { text: "今夜[こんや]、その 歌[うた]を 聞[き]いて", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
        notes: "今夜 is another way to say tonight.",
      },
      {
        segments: [
          { text: "今晩[こんばん]、その 曲[きょく]を 聞[き]いて", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
        notes: "曲 means a song or music track.",
      },
    ],
  },
  {
    english: "Kenji, try asking the teacher!",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさん、先生[せんせい]に" },
          { text: "聞[き]いてみて", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "けんじさん、先生[せんせい]に" },
          { text: "聞[き]いてみて", blank: true },
          { text: "ください" },
        ],
        notes: "ください makes the request polite.",
        register: "polite",
      },
    ],
  },
  {
    english: "The weather looks nice, so I'll try going to the park on foot!",
    answers: [
      {
        segments: [
          { text: "天気[てんき]が 良[よ]いから、公園[こうえん]に 歩[ある]いて 行[い]って", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
      },
      {
        segments: [
          { text: "天気[てんき]が 良[よ]いので、公園[こうえん]に 歩[ある]いて 行[い]って", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
        notes: "ので gives a softer reason than から.",
      },
    ],
  },
  {
    english: "I bought some avocado for the first time — I'll try making sushi with it!",
    answers: [
      {
        segments: [
          { text: "初[はじ]めて アボカドを 買[か]ったから、アボカドで 寿司[すし]を 作[つく]って", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
      },
      {
        segments: [
          { text: "初[はじ]めて アボカドを 買[か]ったので、アボカドで 寿司[すし]を 作[つく]って", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
        notes: "ので sounds a little softer than から.",
      },
      {
        segments: [
          { text: "初[はじ]めて アボカドを 買[か]ったから、アボカドを 使[つか]って 寿司[すし]を 作[つく]って", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
        notes: "アボカドを使って says to make sushi using avocado.",
      },
    ],
  },
  {
    english: "Hana, that sweater looks really good — try wearing it!",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "はなさん、そのセーター、すごく 良[よ]い！" },
          { text: "着[き]てみて", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "はなさん、そのセーター、とても 良[よ]い！" },
          { text: "着[き]てみて", blank: true },
          { text: "ください" },
        ],
        notes: "とても is a slightly more formal way to say very.",
        register: "polite",
      },
      {
        segments: [
          { text: "はなさん、そのセーター、すてき！" },
          { text: "着[き]てみて", blank: true },
        ],
        notes: "すてき praises the sweater as lovely or nice.",
        register: "casual",
      },
    ],
  },
  {
    english: "I have some free time tomorrow, so I'll try calling that restaurant to make a reservation!",
    answers: [
      {
        segments: [
          { text: "明日[あした]は 暇[ひま]だから、あのレストランに 予約[よやく]の 電話[でんわ]を かけて", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
      },
      {
        segments: [
          { text: "明日[あした]は 暇[ひま]なので、あのレストランに 予約[よやく]の 電話[でんわ]を かけて", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
        notes: "なので gives the reason in a softer way.",
      },
      {
        segments: [
          { text: "明日[あした]は 時間[じかん]があるから、あのレストランに 電話[でんわ]して 予約[よやく]して", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
        notes: "電話して予約してみる means to call and try making a reservation.",
      },
    ],
  },
  {
    english: "I'll try writing the email in Japanese!",
    answers: [
      {
        segments: [
          { text: "日本語[にほんご]で メールを 書[か]いて", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
      },
      {
        segments: [
          { text: "メールを 日本語[にほんご]で 書[か]いて", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
        notes: "The email comes before 日本語で in this order.",
      },
      {
        segments: [
          { text: "日本語[にほんご]で Eメールを 書[か]いて", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
        notes: "Eメール is another common word for email.",
      },
    ],
  },
  {
    english: "I'll try singing a Japanese song at karaoke tonight!",
    answers: [
      {
        segments: [
          { text: "今晩[こんばん]、カラオケで 日本語[にほんご]の 歌[うた]を 歌[うた]って", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
      },
      {
        segments: [
          { text: "今夜[こんや]、カラオケで 日本語[にほんご]の 歌[うた]を 歌[うた]って", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
        notes: "今夜 is another way to say tonight.",
      },
      {
        segments: [
          { text: "今晩[こんばん]、カラオケで 日本[にほん]の 歌[うた]を 歌[うた]って", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
        notes: "日本の歌 can mean a Japanese song by origin.",
      },
    ],
  },
  {
    english: "I got chopsticks at the restaurant, so I'll try using them!",
    answers: [
      {
        segments: [
          { text: "レストランで はしを もらったから、使[つか]って", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
      },
      {
        segments: [
          { text: "レストランで はしを もらったので、その はしを 使[つか]って", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
        notes: "そのはし points back to the chopsticks just received.",
      },
      {
        segments: [
          { text: "レストランで はしを もらったから、それを 使[つか]って", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
        notes: "それ refers to the chopsticks.",
      },
    ],
  },
  {
    english: "I've never played golf before, so I want to try it!",
    hint: "golf = ゴルフ",
    answers: [
      {
        segments: [
          { text: "ゴルフを したことがないから、やって", blank: true },
          { text: "みる", blank: true, conjugation: miru("tai-form") },
        ],
      },
      {
        segments: [
          { text: "ゴルフを したことがないので、して", blank: true },
          { text: "みる", blank: true, conjugation: miru("tai-form") },
        ],
        notes: "する is another natural verb for playing golf.",
      },
      {
        segments: [
          { text: "ゴルフは したことがないから、やって", blank: true },
          { text: "みる", blank: true, conjugation: miru("tai-form") },
        ],
        notes: "ゴルフは makes golf the topic.",
      },
    ],
  },
  {
    english: "If you're interested in history, try visiting Kyoto!",
    hint: "Kyoto = きょうと",
    answers: [
      {
        segments: [
          { text: "歴史[れきし]に 興味[きょうみ]があるなら、京都[きょうと]に" },
          { text: "行[い]ってみて", blank: true },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "歴史[れきし]に 興味[きょうみ]があるなら、京都[きょうと]に" },
          { text: "行[い]ってみて", blank: true },
          { text: "ください" },
        ],
        notes: "ください makes the suggestion polite.",
        register: "polite",
      },
      {
        segments: [
          { text: "歴史[れきし]が 好[す]きなら、ぜひ 京都[きょうと]に" },
          { text: "行[い]ってみて", blank: true },
        ],
        notes: "ぜひ adds encouragement.",
        register: "casual",
      },
    ],
  },
  {
    english: "I've never eaten natto before — should I try it?",
    hint: "natto = なっとう",
    answers: [
      {
        segments: [
          { text: "なっとうを 食[た]べたことがないから、食[た]べて", blank: true },
          { text: "みる", blank: true, conjugation: miru("volitional") },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "まだ なっとうを 食[た]べたことがないから、一度[いちど] 食[た]べて", blank: true },
          { text: "みる", blank: true, conjugation: miru("volitional") },
          { text: "か" },
        ],
        notes: "一度 adds the idea of trying it once.",
      },
      {
        segments: [
          { text: "なっとうを 食[た]べたことがないんだけど、食[た]べて", blank: true },
          { text: "みる", blank: true, conjugation: miru("volitional") },
          { text: "か" },
        ],
        notes: "んだけど sounds like the speaker is thinking it over.",
        register: "casual",
      },
    ],
  },
  {
    english: "Sota likes Hana, so why doesn't he try talking to her?",
    hint: "Sota = そうた, Hana = はな",
    answers: [
      {
        segments: [
          { text: "そうたさんは はなさんのことが 好[す]きだから、どうして はなさんに" },
          { text: "話[はな]してみない", blank: true },
          { text: "の" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "そうたさんは はなさんが 好[す]きだから、はなさんに" },
          { text: "話[はな]してみたら", blank: true },
          { text: "どうです" },
          { text: "か" },
        ],
        notes: "どうですか makes the suggestion polite.",
        register: "polite",
      },
    ],
  },
  {
    english: "I've never been to a hot spring before, so I'll try staying at one this winter!",
    answers: [
      {
        segments: [
          { text: "温泉[おんせん]に 行[い]ったことがないから、今年[ことし]の 冬[ふゆ]は 泊[と]まって", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
      },
      {
        segments: [
          { text: "温泉[おんせん]に 泊[と]まったことがないから、今年[ことし]の 冬[ふゆ]は 泊[と]まって", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
        notes: "泊まったことがない focuses on never having stayed overnight.",
      },
      {
        segments: [
          { text: "温泉[おんせん]に 行[い]ったことがないので、今年[ことし]の 冬[ふゆ]は 泊[と]まって", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
        notes: "ので is softer than から.",
      },
    ],
  },
  {
    english: "I've never run in the morning before, so I'll try it tomorrow!",
    answers: [
      {
        segments: [
          { text: "朝[あさ]に 走[はし]ったことがないから、明日[あした] 走[はし]って", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
      },
      {
        segments: [
          { text: "朝[あさ] 走[はし]ったことがないので、明日[あした] 走[はし]って", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
        notes: "朝 can be used without に in this time expression.",
      },
      {
        segments: [
          { text: "今[いま]まで 朝[あさ]に 走[はし]ったことがないから、明日[あした] 走[はし]って", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
        notes: "今まで emphasizes up to now.",
      },
    ],
  },
  {
    english: "I've never tried karaoke before — should I give it a go?",
    answers: [
      {
        segments: [
          { text: "カラオケを したことがないから、やって", blank: true },
          { text: "みる", blank: true, conjugation: miru("volitional") },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "カラオケを したことがないから、して", blank: true },
          { text: "みる", blank: true, conjugation: miru("volitional") },
          { text: "か" },
        ],
        notes: "する is another natural verb for karaoke here.",
      },
      {
        segments: [
          { text: "カラオケは したことがないので、やって", blank: true },
          { text: "みる", blank: true, conjugation: miru("volitional") },
          { text: "か" },
        ],
        notes: "カラオケは makes karaoke the topic.",
      },
    ],
  },
  {
    english: "I tried buying a boxed lunch from that convenience store, but it wasn't very good.",
    hint: "boxed lunch = お弁当[べんとう]",
    answers: [
      {
        segments: [
          { text: "あのコンビニで お弁当[べんとう]を 買[か]って", blank: true },
          { text: "みる", blank: true, conjugation: miru("normal", "past") },
          { text: "けど、あまり" },
          { text: "おいしい", conjugation: { pos: "I-adjective", form: "normal", polarity: "negative", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "あのコンビニで お弁当[べんとう]を 買[か]って", blank: true },
          { text: "みる", blank: true, conjugation: miru("normal", "past") },
          { text: "が、あまり" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "よくなかった means it was not very good in a broader sense.",
      },
      {
        segments: [
          { text: "そのコンビニで お弁当[べんとう]を 買[か]って", blank: true },
          { text: "みる", blank: true, conjugation: miru("normal", "past") },
          { text: "けど、あまり" },
          { text: "おいしい", conjugation: { pos: "I-adjective", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "その refers to a convenience store closer to the listener or already mentioned.",
      },
    ],
  },
  {
    english: "I've never ridden a motorcycle before — should I try it?",
    answers: [
      {
        segments: [
          { text: "バイクに 乗[の]ったことがないから、乗[の]って", blank: true },
          { text: "みる", blank: true, conjugation: miru("volitional") },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "まだ バイクに 乗[の]ったことがないから、一度[いちど] 乗[の]って", blank: true },
          { text: "みる", blank: true, conjugation: miru("volitional") },
          { text: "か" },
        ],
        notes: "一度 adds the idea of trying it once.",
      },
      {
        segments: [
          { text: "バイクに 乗[の]ったことがないから、ちょっと 乗[の]って", blank: true },
          { text: "みる", blank: true, conjugation: miru("volitional") },
          { text: "か" },
        ],
        notes: "ちょっと softens the self-suggestion.",
      },
    ],
  },
  {
    english: "I've never climbed Mt. Fuji before, so I'll try it this summer!",
    hint: "Mt. Fuji = 富士山[ふじさん]",
    answers: [
      {
        segments: [
          { text: "富士山[ふじさん]に 登[のぼ]ったことがないから、今年[ことし]の 夏[なつ]は 登[のぼ]って", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
      },
      {
        segments: [
          { text: "まだ 富士山[ふじさん]に 登[のぼ]ったことがないから、今年[ことし]の 夏[なつ]は 登[のぼ]って", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
        notes: "まだ emphasizes that the speaker has not done it yet.",
      },
      {
        segments: [
          { text: "富士山[ふじさん]に 登[のぼ]ったことがないので、今年[ことし]の 夏[なつ]に 登[のぼ]って", blank: true },
          { text: "みる", blank: true, conjugation: miru() },
        ],
        notes: "今年の夏に marks the time more directly.",
      },
    ],
  },
];
