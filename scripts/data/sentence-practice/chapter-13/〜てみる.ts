import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "This curry looks delicious — I'll try eating it!",
    answers: [
      {
        segments: [
          { text: "このカレーは おいしい！" },
          { text: "食[た]べて", blank: true },
          { text: "みる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "このカレー、おいしそう！" },
          { text: "食[た]べて", blank: true },
          { text: "みる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "このカレーは おいしいね。" },
          { text: "食[た]べて", blank: true },
          { text: "みる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adding ね after おいしい for \"looks/sounds delicious\" nuance (seeking agreement)",
      },
      {
        segments: [
          { text: "このカレー、おいしそうだね。" },
          { text: "食[た]べて", blank: true },
          { text: "みる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "おいしそうだね — \"looks delicious, doesn't it\" with ね, then てみる",
      },
      {
        segments: [
          { text: "このカレーは おいしいよ。" },
          { text: "食[た]べて", blank: true },
          { text: "みる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "このカレー、おいしそう。" },
          { text: "食[た]べて", blank: true },
          { text: "みる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "おいしそう without だ or ね, more abrupt/casual, then てみる",
      },
      {
        segments: [
          { text: "このカレーは おいしい！" },
          { text: "食[た]べて", blank: true },
          { text: "みる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "よ" },
        ],
        notes: "Adding よ particle after みる as separate segment (食べてみるよ) — assertive tone",
      },
      {
        segments: [
          { text: "このカレー、おいしそうだね。" },
          { text: "食[た]べて", blank: true },
          { text: "みる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "よ" },
        ],
        notes: "おいしそうだね + 食べてみるよ — \"looks delicious, I'll try it!\"",
      },
    ],
  },
  {
    english: "I'll try listening to that song tonight.",
    answers: [
      {
        segments: [
          { text: "今晩[こんばん]、その 歌[うた]を 聞[き]いて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Base answer: 今晩, その歌, みる with conjugation metadata",
      },
      {
        segments: [
          { text: "今夜[こんや]、その 歌[うた]を 聞[き]いて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今夜 instead of 今晩",
      },
      {
        segments: [
          { text: "今晩[こんばん]、その 曲[きょく]を 聞[き]いて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "曲 (track/piece) instead of 歌",
      },
      {
        segments: [
          { text: "今夜[こんや]、その 曲[きょく]を 聞[き]いて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今夜 + 曲",
      },
      {
        segments: [
          { text: "今晩[こんばん]、あの 歌[うた]を 聞[き]いて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "あの歌 — \"that song (we both know)\"",
      },
      {
        segments: [
          { text: "今夜[こんや]、あの 歌[うた]を 聞[き]いて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今夜 + あの歌",
      },
      {
        segments: [
          { text: "今晩[こんばん]、あの 曲[きょく]を 聞[き]いて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今晩 + あの曲",
      },
      {
        segments: [
          { text: "今夜[こんや]、あの 曲[きょく]を 聞[き]いて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今夜 + あの曲",
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
        notes: "Casual request using てみて — the standard way to tell someone to try something",
        register: "casual",
      },
      {
        segments: [
          { text: "けんじさん、先生[せんせい]に" },
          { text: "聞[き]いてみて", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "Polite request using てみてください",
        register: "polite",
      },
      {
        segments: [
          { text: "けんじさん、先生[せんせい]に" },
          { text: "聞[き]いてみ", blank: true },
        ],
        notes: "Very casual form dropping the て of みて — \"come on, just ask!\"",
        register: "casual",
      },
    ],
  },
  {
    english: "The weather looks nice, so I'll try going to the park on foot!",
    answers: [
      {
        segments: [
          { text: "天気[てんき]がいいから、公園[こうえん]に 歩[ある]いて" },
          { text: "行[い]ってみる", blank: true },
        ],
      },
      {
        segments: [
          { text: "天気[てんき]がいいので、公園[こうえん]に 歩[ある]いて" },
          { text: "行[い]ってみる", blank: true },
        ],
        notes: "ので instead of から for reason",
      },
      {
        segments: [
          { text: "天気[てんき]はいいから、公園[こうえん]に 歩[ある]いて" },
          { text: "行[い]ってみる", blank: true },
        ],
        notes: "は instead of が for 天気, から for reason",
      },
      {
        segments: [
          { text: "天気[てんき]はいいので、公園[こうえん]に 歩[ある]いて" },
          { text: "行[い]ってみる", blank: true },
        ],
        notes: "は instead of が, ので instead of から",
      },
      {
        segments: [
          { text: "天気[てんき]がいいから、公園[こうえん]に 歩[ある]いて" },
          { text: "行[い]ってみる", blank: true },
          { text: "よ" },
        ],
        notes: "が + から + よ sentence-final particle for assertion/exclamation",
      },
      {
        segments: [
          { text: "天気[てんき]はいいから、公園[こうえん]に 歩[ある]いて" },
          { text: "行[い]ってみる", blank: true },
          { text: "よ" },
        ],
        notes: "は + から + よ sentence-final particle",
      },
      {
        segments: [
          { text: "天気[てんき]がいいので、公園[こうえん]に 歩[ある]いて" },
          { text: "行[い]ってみる", blank: true },
          { text: "よ" },
        ],
        notes: "が + ので + よ sentence-final particle",
      },
      {
        segments: [
          { text: "天気[てんき]はいいので、公園[こうえん]に 歩[ある]いて" },
          { text: "行[い]ってみる", blank: true },
          { text: "よ" },
        ],
        notes: "は + ので + よ sentence-final particle",
      },
    ],
  },
  {
    english: "I bought some avocado for the first time — I'll try making sushi with it!",
    answers: [
      {
        segments: [
          { text: "初[はじ]めて アボカドを" },
          { text: "買[か]った" },
          { text: "から、アボカドで 寿司[すし]を" },
          { text: "作[つく]ってみる", blank: true },
        ],
      },
      {
        segments: [
          { text: "初[はじ]めて アボカドを" },
          { text: "買[か]った" },
          { text: "ので、アボカドで 寿司[すし]を" },
          { text: "作[つく]ってみる", blank: true },
        ],
        notes: "Using ので instead of から",
      },
      {
        segments: [
          { text: "初[はじ]めて アボカドを" },
          { text: "買[か]った" },
          { text: "から、アボカドを 使[つか]って 寿司[すし]を" },
          { text: "作[つく]ってみる", blank: true },
        ],
        notes: "Past tense + から + アボカドを使って",
      },
      {
        segments: [
          { text: "初[はじ]めて アボカドを" },
          { text: "買[か]った" },
          { text: "から、アボカドで 寿司[すし]を" },
          { text: "作[つく]ってみる", blank: true },
          { text: "よ" },
        ],
        notes: "Past tense + から + よ for exclamatory nuance",
      },
      {
        segments: [
          { text: "初[はじ]めて アボカドを 買[か]って、アボカドで 寿司[すし]を 作[つく]って", blank: true },
          { text: "みる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "初[はじ]めて アボカドを 買[か]って、アボカドを 使[つか]って 寿司[すし]を 作[つく]って", blank: true },
          { text: "みる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using アボカドを使って instead of アボカドで, てみる with conjugation metadata",
      },
      {
        segments: [
          { text: "初[はじ]めて アボカドを 買[か]って、アボカドで 寿司[すし]を 作[つく]って", blank: true },
          { text: "みる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "よ" },
        ],
        notes: "Adding よ for exclamatory nuance, te-form connection, アボカドで, with conjugation metadata",
      },
    ],
  },
  {
    english: "Hana, that sweater looks really good — try wearing it!",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "はなさん、そのセーター、すごくいいね！" },
          { text: "着[き]て", blank: true },
          { text: "みて" },
        ],
      },
      {
        segments: [
          { text: "はなさん、そのセーター、すごくいいね！" },
          { text: "着[き]て", blank: true },
          { text: "みて" },
          { text: "ください" },
        ],
        notes: "More polite request with てみてください",
      },
      {
        segments: [
          { text: "はなさん、そのセーター、かっこいいね！" },
          { text: "着[き]て", blank: true },
          { text: "みて" },
        ],
        notes: "Using かっこいい (cool/good-looking) instead of すごくいい",
      },
      {
        segments: [
          { text: "はなさん、そのセーター、かっこいいね！" },
          { text: "着[き]て", blank: true },
          { text: "みて" },
          { text: "ください" },
        ],
        notes: "かっこいい + polite request てみてください",
      },
      {
        segments: [
          { text: "はなさん、そのセーター、とてもいいね！" },
          { text: "着[き]て", blank: true },
          { text: "みて" },
        ],
        notes: "Using とてもいい instead of すごくいい",
      },
      {
        segments: [
          { text: "はなさん、そのセーター、とてもいいね！" },
          { text: "着[き]て", blank: true },
          { text: "みて" },
          { text: "ください" },
        ],
        notes: "とてもいい + polite request てみてください",
      },
      {
        segments: [
          { text: "はなさん、そのセーター、すごくいいね！" },
          { text: "着[き]て", blank: true },
          { text: "み" },
        ],
        notes: "Very casual てみ form (dropping the て of みて) — \"come on, just try it!\"",
      },
      {
        segments: [
          { text: "はなさん、そのセーター、かっこいいね！" },
          { text: "着[き]て", blank: true },
          { text: "み" },
        ],
        notes: "Very casual てみ + かっこいい",
      },
      {
        segments: [
          { text: "はなさん、そのセーター、すてきだね！" },
          { text: "着[き]て", blank: true },
          { text: "みて" },
        ],
      },
      {
        segments: [
          { text: "はなさん、そのセーター、すてきだね！" },
          { text: "着[き]て", blank: true },
          { text: "みて" },
          { text: "ください" },
        ],
        notes: "すてきだね + polite request てみてください",
      },
    ],
  },
  {
    english: "I have some free time tomorrow, so I'll try calling that restaurant to make a reservation!",
    answers: [
      {
        segments: [
          { text: "明日[あした]は 暇[ひま]だから、あのレストランに 予約[よやく]の" },
          { text: "電話[でんわ]してみる", blank: true },
        ],
      },
      {
        segments: [
          { text: "明日[あした]は 暇[ひま]だから、あのレストランに 予約[よやく]の電話[でんわ]を" },
          { text: "かけてみる", blank: true },
        ],
        notes: "予約の電話をかけてみる — \"try placing a reservation call\"; かける = to make a phone call",
      },
      {
        segments: [
          { text: "明日[あした]は 暇[ひま]だから、あのレストランに 電話[でんわ]して" },
          { text: "予約[よやく]してみる", blank: true },
        ],
        notes: "電話して + 予約してみる (blank) — try making a reservation by calling",
      },
      {
        segments: [
          { text: "明日[あした]は 暇[ひま]があるから、あのレストランに 予約[よやく]の電話[でんわ]を" },
          { text: "かけてみる", blank: true },
        ],
        notes: "暇がある instead of 暇だ, with かけてみる",
      },
      {
        segments: [
          { text: "明日[あした]は 暇[ひま]があるから、あのレストランに 予約[よやく]の 電話[でんわ]を" },
          { text: "してみる", blank: true },
        ],
        notes: "予約の電話をしてみる — 暇がある, する for making the call",
      },
      {
        segments: [
          { text: "明日[あした]は 暇[ひま]だから、あのレストランに 予約[よやく]の 電話[でんわ]を" },
          { text: "してみる", blank: true },
        ],
        notes: "予約の電話をしてみる — 暇だ version",
      },
      {
        segments: [
          { text: "明日[あした]は 暇[ひま]なので、あのレストランに 予約[よやく]の電話[でんわ]を" },
          { text: "かけてみる", blank: true },
        ],
        notes: "暇なので (ので instead of から) — more formal reason connector",
      },
      {
        segments: [
          { text: "明日[あした]は 暇[ひま]があるので、あのレストランに 予約[よやく]の電話[でんわ]を" },
          { text: "かけてみる", blank: true },
        ],
        notes: "暇がある + ので, かけてみる",
      },
      {
        segments: [
          { text: "明日[あした]は 暇[ひま]だから、あのレストランに 予約[よやく]の電話[でんわ]を" },
          { text: "かけてみる", blank: true },
          { text: "よ" },
        ],
        notes: "Adding よ at the end for the exclamatory/emphatic nuance matching the English \"!\"",
      },
      {
        segments: [
          { text: "明日[あした]は 暇[ひま]があるから、あのレストランに 電話[でんわ]して" },
          { text: "予約[よやく]してみる", blank: true },
        ],
        notes: "暇がある + 電話して予約してみる — call then make reservation",
      },
    ],
  },
  {
    english: "I'll try writing the email in Japanese!",
    answers: [
      {
        segments: [
          { text: "日本語[にほんご]で メールを 書[か]いて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "メールを 日本語[にほんご]で 書[か]いて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "メール first, then 日本語で — reversed object/instrument order",
      },
      {
        segments: [
          { text: "日本語[にほんご]で メールを 書[か]いて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "よ" },
        ],
        notes: "With sentence-final particle よ for emphasis/declaration",
      },
      {
        segments: [
          { text: "メールを 日本語[にほんご]で 書[か]いて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "よ" },
        ],
        notes: "メール first order, with よ",
      },
      {
        segments: [
          { text: "日本語[にほんご]で メールを 書[か]いて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "ね" },
        ],
        notes: "With ね — seeking agreement/sharing excitement",
      },
      {
        segments: [
          { text: "日本語[にほんご]で Eメールを 書[か]いて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using Eメール instead of メール",
      },
      {
        segments: [
          { text: "日本語[にほんご]で Eメールを 書[か]いて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "よ" },
        ],
        notes: "Eメール with よ",
      },
      {
        segments: [
          { text: "メールは 日本語[にほんご]で 書[か]いて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "メールは (topic marker は) instead of メールを — \"as for the email, I'll try writing it in Japanese\"",
      },
      {
        segments: [
          { text: "メールは 日本語[にほんご]で 書[か]いて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "よ" },
        ],
        notes: "メールは with よ",
      },
    ],
  },
  {
    english: "I'll try singing a Japanese song at karaoke tonight!",
    answers: [
      {
        segments: [
          { text: "今晩[こんばん]、カラオケで 日本語[にほんご]の 歌[うた]を 歌[うた]って" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "今夜[こんや]、カラオケで 日本語[にほんご]の 歌[うた]を 歌[うた]って" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今夜 instead of 今晩 for \"tonight\"",
      },
      {
        segments: [
          { text: "今晩[こんばん]、カラオケで 日本[にほん]の 歌[うた]を 歌[うた]って" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "日本の歌 instead of 日本語の歌 (Japanese song by country rather than language)",
      },
      {
        segments: [
          { text: "今夜[こんや]、カラオケで 日本[にほん]の 歌[うた]を 歌[うた]って" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今夜 + 日本の歌 combination",
      },
      {
        segments: [
          { text: "今晩[こんばん]は カラオケで 日本語[にほんご]の 歌[うた]を 歌[うた]って" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今晩は (は topic marker on tonight) instead of just 今晩、",
      },
      {
        segments: [
          { text: "今夜[こんや]は カラオケで 日本語[にほんご]の 歌[うた]を 歌[うた]って" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今夜は + 日本語の歌",
      },
      {
        segments: [
          { text: "今晩[こんばん]、カラオケで 日本語[にほんご]の 歌[うた]を 歌[うた]って" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "よ" },
        ],
        notes: "Added よ for emphasis/assertion",
      },
      {
        segments: [
          { text: "今夜[こんや]、カラオケで 日本語[にほんご]の 歌[うた]を 歌[うた]って" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "よ" },
        ],
        notes: "今夜 + よ",
      },
      {
        segments: [
          { text: "今晩[こんばん]、カラオケで 日本[にほん]の 歌[うた]を 歌[うた]って" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "よ" },
        ],
        notes: "日本の歌 + よ",
      },
    ],
  },
  {
    english: "I got chopsticks at the restaurant, so I'll try using them!",
    answers: [
      {
        segments: [
          { text: "レストランで はしを もらったから、" },
          { text: "使[つか]って", blank: true },
          { text: "みる", blank: true },
        ],
      },
      {
        segments: [
          { text: "レストランで はしを もらったから、はしを" },
          { text: "使[つか]って", blank: true },
          { text: "みる", blank: true },
        ],
        notes: "はし repeated as topic before 使ってみる for emphasis",
      },
      {
        segments: [
          { text: "レストランに はしを もらったから、" },
          { text: "使[つか]って", blank: true },
          { text: "みる", blank: true },
        ],
        notes: "レストランに (at the restaurant, direction particle) instead of レストランで",
      },
      {
        segments: [
          { text: "レストランで はしを もらったので、使[つか]って" },
          { text: "みる", blank: true },
        ],
        notes: "ので instead of から as the reason connector (slightly more formal/softer)",
      },
      {
        segments: [
          { text: "レストランで はしを もらったから、そのはしを使[つか]って" },
          { text: "みる", blank: true },
        ],
        notes: "そのはしを (that chopsticks, referring back with その) instead of repeating plain はし",
      },
      {
        segments: [
          { text: "レストランで はしを もらったから、それを使[つか]って" },
          { text: "みる", blank: true },
        ],
        notes: "それを (using それ pronoun to refer back to the chopsticks) instead of repeating はし",
      },
    ],
  },
  {
    english: "I've never played golf before, so I want to try it!",
    hint: "ゴルフ = ゴルフ",
    answers: [
      {
        segments: [
          { text: "ゴルフをしたことがないから、やって" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Base answer: やる for \"play/do\", から for \"so\", したことがない for \"never done before\"",
      },
      {
        segments: [
          { text: "ゴルフをしたことがないから、して" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using する instead of やる for \"play/do golf\"",
      },
      {
        segments: [
          { text: "ゴルフをやったことがないから、やって" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "ゴルフをやったことがないから、して" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "やったことがない for \"never played\", してみたい for \"want to try\"",
      },
      {
        segments: [
          { text: "ゴルフをしたことがないので、やって" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ので instead of から, やってみたい",
      },
      {
        segments: [
          { text: "ゴルフをしたことがないので、して" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ので + してみたい",
      },
      {
        segments: [
          { text: "ゴルフをやったことがないので、やって" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "やったことがない + ので + やってみたい",
      },
      {
        segments: [
          { text: "ゴルフをやったことがないので、して" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "やったことがない + ので + してみたい",
      },
      {
        segments: [
          { text: "ゴルフはしたことがないから、やって" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ゴルフは (topic は) + したことがない + から + やってみたい",
      },
      {
        segments: [
          { text: "ゴルフはしたことがないから、して" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ゴルフは + したことがない + から + してみたい",
      },
      {
        segments: [
          { text: "ゴルフはやったことがないから、やって" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ゴルフは + やったことがない + から + やってみたい",
      },
      {
        segments: [
          { text: "ゴルフはやったことがないから、して" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ゴルフは + やったことがない + から + してみたい",
      },
      {
        segments: [
          { text: "ゴルフをしたことがないんだけど、やって" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "んだけど instead of から/ので — \"I've never played golf, but I want to try!\"",
        register: "casual",
      },
      {
        segments: [
          { text: "ゴルフをしたことがないんだけど、して" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "んだけど + してみたい",
        register: "casual",
      },
    ],
  },
  {
    english: "If you're interested in history, try visiting Kyoto!",
    hint: "Kyoto = きょうと",
    answers: [
      {
        segments: [
          { text: "歴史[れきし]に 興味[きょうみ]があるから、京都[きょうと]に" },
          { text: "行[い]ってみて", blank: true },
        ],
      },
      {
        segments: [
          { text: "歴史[れきし]に 興味[きょうみ]があるから、京都[きょうと]に" },
          { text: "行[い]ってみて", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "Polite suggestion with てみてください",
      },
      {
        segments: [
          { text: "歴史[れきし]が 好き[すき]なら、京都[きょうと]に" },
          { text: "行[い]ってみて", blank: true },
        ],
        notes: "Using 歴史が好きなら (if you like history) instead of 興味がある; なら conditional",
      },
      {
        segments: [
          { text: "歴史[れきし]が 好き[すき]なら、京都[きょうと]に" },
          { text: "行[い]ってみて", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "好きなら + polite てみてください",
      },
      {
        segments: [
          { text: "歴史[れきし]に 興味[きょうみ]があるなら、京都[きょうと]に" },
          { text: "行[い]ってみて", blank: true },
        ],
        notes: "興味があるなら (if you have interest in history) + casual てみて",
      },
      {
        segments: [
          { text: "歴史[れきし]に 興味[きょうみ]があるなら、京都[きょうと]に" },
          { text: "行[い]ってみて", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "興味があるなら + polite てみてください",
      },
      {
        segments: [
          { text: "歴史[れきし]に 興味[きょうみ]があるから、ぜひ 京都[きょうと]に" },
          { text: "行[い]ってみて", blank: true },
        ],
        notes: "Adding ぜひ (by all means) for emphasis, casual form",
      },
      {
        segments: [
          { text: "歴史[れきし]に 興味[きょうみ]があるなら、ぜひ 京都[きょうと]に" },
          { text: "行[い]ってみて", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "興味があるなら + ぜひ + polite てみてください",
      },
      {
        segments: [
          { text: "歴史[れきし]が 好き[すき]なら、ぜひ 京都[きょうと]に" },
          { text: "行[い]ってみて", blank: true },
          { text: "ください", blank: true },
        ],
        notes: "好きなら + ぜひ + polite てみてください",
      },
      {
        segments: [
          { text: "歴史[れきし]に 興味[きょうみ]があるなら、京都[きょうと]へ" },
          { text: "行[い]ってみて", blank: true },
        ],
        notes: "Using へ instead of に for direction to Kyoto",
      },
      {
        segments: [
          { text: "歴史[れきし]が 好き[すき]なら、京都[きょうと]へ" },
          { text: "行[い]ってみて", blank: true },
        ],
        notes: "好きなら + へ particle for Kyoto, casual",
      },
    ],
  },
  {
    english: "I've never eaten natto before — should I try it?",
    hint: "Express this as a suggestion to yourself using a question form, not a request to someone else. natto = なっとう",
    answers: [
      {
        segments: [
          { text: "なっとうを 食[た]べたことがないから、食[た]べて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Base: なっとうを食べたことがないから、食べてみようか — volitional question to oneself",
      },
      {
        segments: [
          { text: "なっとうは 食[た]べたことがないから、食[た]べて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "は instead of を on なっとう — topicalizing it",
      },
      {
        segments: [
          { text: "まだ なっとうを 食[た]べたことがないから、食[た]べて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Adding まだ to emphasize \"not yet / never yet\"",
      },
      {
        segments: [
          { text: "なっとうを 食[た]べたことがないので、食[た]べて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "ので instead of から for the reason clause",
      },
      {
        segments: [
          { text: "なっとうを 食[た]べたことがないんだけど、食[た]べて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "んだけど as a softer connector — \"I've never eaten natto, but maybe I should try it?\"",
        register: "casual",
      },
      {
        segments: [
          { text: "なっとうを 食[た]べたことがないんですが、食[た]べて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "んですが — polite version of んだけど",
        register: "polite",
      },
      {
        segments: [
          { text: "なっとうを 食[た]べたことがないから、一[いち]度[ど] 食[た]べて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Adding 一度 (once) — \"should I try eating it once?\"",
      },
      {
        segments: [
          { text: "なっとうを 食[た]べたことがないけど、食[た]べて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "けど as connector instead of から — \"I've never eaten natto, but should I try it?\"",
      },
      {
        segments: [
          { text: "なっとうを 食[た]べたことがないから、食[た]べて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "かな" },
        ],
        notes: "Adding かな instead of か alone — more natural \"wondering to oneself\" nuance",
        register: "casual",
      },
      {
        segments: [
          { text: "なっとうは 食[た]べたことがないから、食[た]べて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "かな" },
        ],
        notes: "は on なっとう + かな ending",
        register: "casual",
      },
      {
        segments: [
          { text: "なっとうを 食[た]べたことがないので、食[た]べて" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "かな" },
        ],
        notes: "ので + かな combination",
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
          { text: "そうたさんははなさんのことが 好[す]きだから、どうしてはなさんに" },
          { text: "話[はな]してみない", blank: true },
          { text: "の？" },
        ],
      },
      {
        segments: [
          { text: "そうたさんははなさんが 好[す]きだから、どうしてはなさんに" },
          { text: "話[はな]してみない", blank: true },
          { text: "の？" },
        ],
        notes: "が好き instead of のことが好き",
      },
      {
        segments: [
          { text: "そうたさんははなさんのことが 好[す]きだから、どうしてはなさんに" },
          { text: "話[はな]してみない", blank: true },
          { text: "んだろう？" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "そうたさんははなさんが 好[す]きだから、どうしてはなさんに" },
          { text: "話[はな]してみない", blank: true },
          { text: "んだろう？" },
        ],
        notes: "が好き + んだろう？",
        register: "casual",
      },
      {
        segments: [
          { text: "そうたさんははなさんのことが 好[す]きだから、はなさんに" },
          { text: "話[はな]してみたら", blank: true },
          { text: "いいじゃない？" },
        ],
        register: "casual",
      },
      {
        segments: [
          { text: "そうたさんははなさんが 好[す]きだから、はなさんに" },
          { text: "話[はな]してみたら", blank: true },
          { text: "いいじゃない？" },
        ],
        notes: "が好き + たらいいじゃない？",
        register: "casual",
      },
      {
        segments: [
          { text: "そうたさんははなさんのことが 好[す]きだから、どうしてはなさんに" },
          { text: "話[はな]してみない", blank: true },
          { text: "んですか？" },
        ],
        notes: "Polite version with んですか？ for \"why doesn't he?\"; のことが好き",
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
          { text: "みる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "温泉[おんせん]に 泊[と]まったことがないから、今年[ことし]の 冬[ふゆ]は 泊[と]まって", blank: true },
          { text: "みる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 泊まったことがない (never stayed) instead of 行ったことがない (never been to) — more precise to the prompt.",
      },
      {
        segments: [
          { text: "温泉[おんせん]に 行[い]ったことがないので、今年[ことし]の 冬[ふゆ]は 泊[と]まって", blank: true },
          { text: "みる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ので instead of から for the reason clause.",
      },
      {
        segments: [
          { text: "温泉[おんせん]に 泊[と]まったことがないので、今年[ことし]の 冬[ふゆ]は 泊[と]まって", blank: true },
          { text: "みる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "泊まったことがない + ので.",
      },
      {
        segments: [
          { text: "今年[ことし]の 冬[ふゆ]は 温泉[おんせん]に 行[い]ったことがないから、泊[と]まって", blank: true },
          { text: "みる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time phrase 今年の冬 moved to the front of the sentence.",
      },
      {
        segments: [
          { text: "今年[ことし]の 冬[ふゆ]は 温泉[おんせん]に 泊[と]まったことがないから、泊[と]まって", blank: true },
          { text: "みる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time phrase first + 泊まったことがない.",
      },
      {
        segments: [
          { text: "温泉[おんせん]に 行[い]ったことがないんで、今年[ことし]の 冬[ふゆ]は 泊[と]まって", blank: true },
          { text: "みる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "温泉[おんせん]に 泊[と]まったことがないんで、今年[ことし]の 冬[ふゆ]は 泊[と]まって", blank: true },
          { text: "みる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "泊まったことがない + んで.",
      },
      {
        segments: [
          { text: "温泉[おんせん]に 行[い]ったことがないから、今年[ことし]の 冬[ふゆ]は" },
          { text: "泊[と]まって", blank: true },
          { text: "みる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "よ" },
        ],
        notes: "With よ sentence-final particle for emphasis/assertion.",
      },
      {
        segments: [
          { text: "温泉[おんせん]に 泊[と]まったことがないから、今年[ことし]の 冬[ふゆ]は" },
          { text: "泊[と]まって", blank: true },
          { text: "みる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "よ" },
        ],
        notes: "泊まったことがない + よ particle.",
      },
    ],
  },
  {
    english: "I've never run in the morning before, so I'll try it tomorrow!",
    answers: [
      {
        segments: [
          { text: "朝[あさ]に 走[はし]ったことがないから、明日[あした]" },
          { text: "走[はし]って", blank: true },
          { text: "みる" },
        ],
      },
      {
        segments: [
          { text: "朝[あさ] 走[はし]ったことがないので、明日[あした]" },
          { text: "走[はし]って", blank: true },
          { text: "みる" },
        ],
        notes: "ので instead of から; 朝 without に",
      },
      {
        segments: [
          { text: "朝[あさ]に 走[はし]ったことがないので、明日[あした]" },
          { text: "走[はし]って", blank: true },
          { text: "みる" },
        ],
        notes: "ので instead of から; 朝に with に",
      },
      {
        segments: [
          { text: "朝[あさ] 走[はし]ったことがないから、明日[あした]" },
          { text: "走[はし]って", blank: true },
          { text: "みる" },
        ],
        notes: "から; 朝 without に",
      },
      {
        segments: [
          { text: "朝[あさ]に 走[はし]ったことがないから、明日[あした]" },
          { text: "走[はし]って", blank: true },
          { text: "みるよ" },
        ],
        notes: "Added よ at the end for assertive tone",
      },
      {
        segments: [
          { text: "朝[あさ] 走[はし]ったことがないから、明日[あした]" },
          { text: "走[はし]って", blank: true },
          { text: "みるよ" },
        ],
        notes: "よ at end, 朝 without に",
      },
      {
        segments: [
          { text: "今[いま]まで 朝[あさ]に 走[はし]ったことがないから、明日[あした]" },
          { text: "走[はし]って", blank: true },
          { text: "みる" },
        ],
        notes: "今まで added to emphasize \"until now/before\"",
      },
      {
        segments: [
          { text: "今[いま]まで 朝[あさ] 走[はし]ったことがないから、明日[あした]" },
          { text: "走[はし]って", blank: true },
          { text: "みる" },
        ],
        notes: "今まで added, 朝 without に",
      },
      {
        segments: [
          { text: "今[いま]まで 朝[あさ]に 走[はし]ったことがないので、明日[あした]" },
          { text: "走[はし]って", blank: true },
          { text: "みる" },
        ],
        notes: "今まで + ので, 朝に",
      },
    ],
  },
  {
    english: "I've never tried karaoke before — should I give it a go?",
    answers: [
      {
        segments: [
          { text: "カラオケを したことがないから、" },
          { text: "やってみる", blank: true },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "カラオケを したことがないから、" },
          { text: "してみる", blank: true },
          { text: "か" },
        ],
        notes: "する instead of やる",
      },
      {
        segments: [
          { text: "カラオケを したことがないから、" },
          { text: "やってみる", blank: true },
          { text: "かな" },
        ],
        notes: "やってみるかな — softer self-musing/wondering tone",
        register: "casual",
      },
      {
        segments: [
          { text: "カラオケを したことがないから、" },
          { text: "してみる", blank: true },
          { text: "かな" },
        ],
        notes: "してみるかな — する + かな softer tone",
        register: "casual",
      },
      {
        segments: [
          { text: "カラオケを したことがないから、" },
          { text: "してみる", blank: true, conjugation: { pos: "Suru verb - included", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Volitional + か: してみようか with する",
      },
      {
        segments: [
          { text: "カラオケを したことがないから、" },
          { text: "してみる", blank: true, conjugation: { pos: "Suru verb - included", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "かな" },
        ],
        notes: "Volitional + かな: してみようかな with する",
        register: "casual",
      },
      {
        segments: [
          { text: "カラオケは したことがないから、" },
          { text: "やってみる", blank: true },
          { text: "か" },
        ],
        notes: "カラオケは instead of カラオケを — topic particle",
      },
      {
        segments: [
          { text: "カラオケは したことがないので、" },
          { text: "やってみる", blank: true },
          { text: "か" },
        ],
        notes: "Using ので instead of から for reason",
      },
      {
        segments: [
          { text: "カラオケを したことがないので、" },
          { text: "やってみる", blank: true },
          { text: "か" },
        ],
        notes: "カラオケを + ので + やってみるか",
      },
      {
        segments: [
          { text: "カラオケは したことがないから、" },
          { text: "してみる", blank: true },
          { text: "かな" },
        ],
        notes: "カラオケは + する + かな variation",
        register: "casual",
      },
      {
        segments: [
          { text: "カラオケを したことがないから、やって" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Volitional + か: やってみようか — \"shall I give it a go?\" nuance",
      },
      {
        segments: [
          { text: "カラオケを したことがないから、やって" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "かな" },
        ],
        notes: "Volitional + かな: やってみようかな — softer musing \"I wonder if I should give it a go\"",
        register: "casual",
      },
    ],
  },
  {
    english: "I tried buying a boxed lunch from that convenience store, but it wasn't very good.",
    hint: "Past tense — express that you actually tried it and it turned out not great.",
    answers: [
      {
        segments: [
          { text: "あのコンビニで お 弁当[べんとう]を" },
          { text: "買[か]ってみた", blank: true },
          { text: "けど、あまり" },
          { text: "おいしい", conjugation: { pos: "I-adjective", form: "normal", polarity: "negative", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "あのコンビニで お 弁当[べんとう]を" },
          { text: "買[か]ってみた", blank: true },
          { text: "が、あまり" },
          { text: "おいしい", conjugation: { pos: "I-adjective", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "が instead of けど for \"but\" — slightly more formal",
      },
      {
        segments: [
          { text: "あのコンビニで お 弁当[べんとう]を" },
          { text: "買[か]ってみた", blank: true },
          { text: "けど、あまり" },
          { text: "よい", conjugation: { pos: "I-adjective", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "よくなかった instead of おいしくなかった — \"not very good\" (broader meaning)",
      },
      {
        segments: [
          { text: "あのコンビニで お 弁当[べんとう]を" },
          { text: "買[か]ってみた", blank: true },
          { text: "けど、ぜんぜん" },
          { text: "おいしい", conjugation: { pos: "I-adjective", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "ぜんぜん instead of あまり — stronger \"not at all delicious\"",
      },
      {
        segments: [
          { text: "あのコンビニで お 弁当[べんとう]を" },
          { text: "買[か]ってみた", blank: true },
          { text: "が、ぜんぜん" },
          { text: "おいしい", conjugation: { pos: "I-adjective", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "が + ぜんぜん: more formal \"but\" + strong negative",
      },
      {
        segments: [
          { text: "あのコンビニで お 弁当[べんとう]を" },
          { text: "買[か]ってみたんだけど", blank: true },
          { text: "、あまり" },
          { text: "おいしい", conjugation: { pos: "I-adjective", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "んだけど for a softer/explanatory nuance — \"the thing is, I tried buying it, but...\"",
        register: "casual",
      },
      {
        segments: [
          { text: "あのコンビニの お 弁当[べんとう]を" },
          { text: "買[か]ってみた", blank: true },
          { text: "けど、あまり" },
          { text: "おいしい", conjugation: { pos: "I-adjective", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "の (possession) instead of で (location) — \"that convenience store's boxed lunch\"",
      },
      {
        segments: [
          { text: "そのコンビニで お 弁当[べんとう]を" },
          { text: "買[か]ってみた", blank: true },
          { text: "けど、あまり" },
          { text: "おいしい", conjugation: { pos: "I-adjective", form: "normal", polarity: "negative", tense: "past" } },
        ],
        notes: "その instead of あの — \"that convenience store\" (closer reference)",
      },
    ],
  },
  {
    english: "I've never ridden a motorcycle before — should I try it?",
    answers: [
      {
        segments: [
          { text: "バイクに 乗[の]ったことがないから、" },
          { text: "乗[の]ってみる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "まだ バイクに 乗[の]ったことがないから、" },
          { text: "乗[の]ってみる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Adding まだ (not yet) to emphasize never having done it so far",
      },
      {
        segments: [
          { text: "バイクに 乗[の]ったことがないんだけど、" },
          { text: "乗[の]ってみる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using んだけど instead of から for a softer \"but\" nuance",
        register: "casual",
      },
      {
        segments: [
          { text: "バイクに 乗[の]ったことがないから、一度[いちど] " },
          { text: "乗[の]ってみる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Adding 一度 (once; one time) for emphasis on \"give it a try once\"",
      },
      {
        segments: [
          { text: "バイクに乗[の]ったことがないから、ちょっと " },
          { text: "乗[の]ってみる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Adding ちょっと to soften the self-suggestion (\"maybe I'll just try...\")",
      },
      {
        segments: [
          { text: "バイクに 乗[の]ったことがないから、" },
          { text: "やってみる", blank: true, conjugation: { pos: "Suru verb - special class", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using やってみるか instead of 乗ってみるか — \"try doing it\" is equally natural here, similar to sentences 11 and 17",
      },
    ],
  },
  {
    english: "I've never climbed Mt. Fuji before, so I'll try it this summer!",
    hint: "Mt. Fuji = ふじさん",
    answers: [
      {
        segments: [
          { text: "富士山[ふじさん]に 登[のぼ]ったことがないから、今年[ことし]の 夏[なつ]は 登[のぼ]って" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Base form: ことがない + から + てみる, 今年の夏は",
      },
      {
        segments: [
          { text: "富士山[ふじさん]に 登[のぼ]ったことがないので、今年[ことし]の 夏[なつ]は 登[のぼ]って" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ので instead of から",
      },
      {
        segments: [
          { text: "富士山[ふじさん]に 登[のぼ]ったことがないから、今年[ことし]の 夏[なつ] 登[のぼ]って" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今年の夏 without は (topic particle dropped)",
      },
      {
        segments: [
          { text: "まだ 富士山[ふじさん]に 登[のぼ]ったことがないから、今年[ことし]の 夏[なつ]は 登[のぼ]って" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adding まだ (not yet) to emphasize never having done it",
      },
      {
        segments: [
          { text: "富士山[ふじさん]に 登[のぼ]ったことがないから、今年[ことし]の 夏[なつ]に 登[のぼ]って" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using に instead of は after 今年の夏 (temporal に)",
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]は、富士山[ふじさん]に 登[のぼ]ったことがないから 登[のぼ]って" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time phrase 今年の夏は moved to the front",
      },
      {
        segments: [
          { text: "富士山[ふじさん]に 登[のぼ]ったことがないから、今年[ことし]の 夏[なつ]は ぜひ 登[のぼ]って" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adding ぜひ (by all means) to emphasize eagerness",
      },
      {
        segments: [
          { text: "富士山[ふじさん]に 登[のぼ]ったことがないので、今年[ことし]の 夏[なつ]に 登[のぼ]って" },
          { text: "みる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ので + に after 今年の夏",
      },
    ],
  },
];
