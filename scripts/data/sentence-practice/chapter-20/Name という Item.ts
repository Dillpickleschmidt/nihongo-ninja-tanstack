import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "Please get off at the station called Sakura.",
    hint: "Sakura = 桜 (さくら)",
    answers: [
      {
        segments: [
          { text: "桜[さくら]" },
          { text: "という", blank: true },
          { text: "駅[えき]で 降[お]りてください" },
        ],
        notes: "Basic translation using 駅で降りる.",
      },
      {
        segments: [
          { text: "桜[さくら]" },
          { text: "という", blank: true },
          { text: "駅[えき]で 電車[でんしゃ]を 降[お]りてください" },
        ],
        notes: "Explicitly says to get off the train.",
      },
      {
        segments: [
          { text: "桜[さくら]" },
          { text: "という", blank: true },
          { text: "駅[えき]で 電車[でんしゃ]から 降[お]りてください" },
        ],
        notes: "Uses から to mark getting off from the train.",
      },
      {
        segments: [
          { text: "桜[さくら]" },
          { text: "という", blank: true },
          { text: "駅[えき]に 着[つ]いたら、降[お]りてください" },
        ],
        notes: "Uses 着いたら to say 'when you arrive at the station called Sakura.'",
      },

      {
        segments: [
          { text: "桜[さくら]" },
          { text: "という", blank: true },
          { text: "駅[えき]に 着[つ]いたら、電車[でんしゃ]を 降[お]りてください" },
        ],
        notes: "Combines arrival-at-station phrasing with explicit 電車を降りる.",
      },
    ],
  },
  {
    english: "Do you know the anime called Doraemon?",
    hint: "Doraemon = ドラえもん",
    answers: [
      {
        segments: [
          { text: "ドラえもん" },
          { text: "という", blank: true },
          { text: "アニメを 知[し]っています" },
          { text: "か" },
        ],
        notes: "Standard word order with を marking the object.",
      },
      {
        segments: [
          { text: "ドラえもん" },
          { text: "という", blank: true },
          { text: "アニメは 知[し]っています" },
          { text: "か" },
        ],
        notes: "Using は to topicalize the anime instead of marking it with を.",
      },
      {
        segments: [
          { text: "ドラえもん" },
          { text: "という", blank: true },
          { text: "アニメ、知[し]っています" },
          { text: "か" },
        ],
        notes: "Casual spoken style dropping the object particle を.",
      },
      {
        segments: [
          { text: "ドラえもん" },
          { text: "という", blank: true },
          { text: "アニメのことを 知[し]っています" },
          { text: "か" },
        ],
        notes: "Using のことを to mean “know about” the anime called Doraemon.",
      },
      {
        segments: [
          { text: "あなたは ドラえもん" },
          { text: "という", blank: true },
          { text: "アニメを 知[し]っています" },
          { text: "か" },
        ],
        notes: "Explicitly includes あなたは for “you.”",
      },
      {
        segments: [
          { text: "あなたは ドラえもん" },
          { text: "という", blank: true },
          { text: "アニメは 知[し]っています" },
          { text: "か" },
        ],
        notes: "Explicit あなたは plus topicalized object with は.",
      },
    ],
  },
  {
    english: "At the cafe, I read a manga called One Piece.",
    hint: "One Piece = ワンピース",
    answers: [
      {
        segments: [
          { text: "私[わたし]は カフェで " },
          { text: "ワンピースという", blank: true },
          { text: "漫画[まんが]を " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic word order with 私は at the start",
      },
      {
        segments: [
          { text: "カフェで 私[わたし]は " },
          { text: "ワンピースという", blank: true },
          { text: "漫画[まんが]を " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Location placed first",
      },
      {
        segments: [
          { text: "私[わたし]は " },
          { text: "ワンピースという", blank: true },
          { text: "漫画[まんが]を カフェで " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Object before location",
      },
      {
        segments: [
          { text: "カフェで " },
          { text: "ワンピースという", blank: true },
          { text: "漫画[まんが]を " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted",
      },
      {
        segments: [
          { text: "私[わたし]は カフェで " },
          { text: "ワンピースという", blank: true },
          { text: "マンガを " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using katakana マンガ instead of 漫画",
      },
      {
        segments: [
          { text: "カフェで " },
          { text: "ワンピースという", blank: true },
          { text: "マンガを " },
          { text: "読[よ]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted with katakana マンガ",
      },
    ],
  },
  {
    english: "I bought a snack called Pocky at the convenience store.",
    hint: "Pocky = ポッキー",
    answers: [
      {
        segments: [
          { text: "私[わたし]は コンビニで ポッキー" },
          { text: "という", blank: true },
          { text: "お 菓子[かし]を " },
          { text: "買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard word order with 私は as the subject",
      },
      {
        segments: [
          { text: "私[わたし]は ポッキー" },
          { text: "という", blank: true },
          { text: "お 菓子[かし]を コンビニで " },
          { text: "買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Object placed before the location phrase",
      },
      {
        segments: [
          { text: "コンビニで ポッキー" },
          { text: "という", blank: true },
          { text: "お 菓子[かし]を " },
          { text: "買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted; natural when context is clear",
      },
      {
        segments: [
          { text: "ポッキー" },
          { text: "という", blank: true },
          { text: "お 菓子[かし]を コンビニで " },
          { text: "買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted with object first",
      },
    ],
  },
  {
    english: "Last month, I stayed at a Japanese inn called Fujiya.",
    hint: "Fujiya = 富士屋",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 先月[せんげつ]、富士屋[ふじや]" },
          { text: "という", blank: true },
          { text: "旅館[りょかん]に " },
          { text: "泊[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard word order with 私は and 先月 at the beginning",
      },
      {
        segments: [
          { text: "先月[せんげつ]、私[わたし]は 富士屋[ふじや]" },
          { text: "という", blank: true },
          { text: "旅館[りょかん]に " },
          { text: "泊[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time expression placed first, followed by 私は",
      },
      {
        segments: [
          { text: "私[わたし]は 富士屋[ふじや]" },
          { text: "という", blank: true },
          { text: "旅館[りょかん]に 先月[せんげつ] " },
          { text: "泊[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Places the inn phrase before the time expression",
      },
      {
        segments: [
          { text: "私[わたし]は 先月[せんげつ]、富士屋[ふじや]" },
          { text: "という", blank: true },
          { text: "日本[にほん]の 旅館[りょかん]に " },
          { text: "泊[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Explicitly says 日本の旅館 for “Japanese inn”",
      },
      {
        segments: [
          { text: "先月[せんげつ]、私[わたし]は 富士屋[ふじや]" },
          { text: "という", blank: true },
          { text: "日本[にほん]の 旅館[りょかん]に " },
          { text: "泊[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time expression first, with explicit 日本の旅館",
      },
      {
        segments: [
          { text: "私[わたし]は 富士屋[ふじや]" },
          { text: "という", blank: true },
          { text: "日本[にほん]の 旅館[りょかん]に 先月[せんげつ] " },
          { text: "泊[と]まる", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Inn phrase first, with explicit 日本の旅館",
      },
    ],
  },
  {
    english: "Please write the word “peace” on this paper.",
    answers: [
      {
        segments: [
          { text: "この 紙[かみ]に " },
          { text: "平和[へいわ]という言葉[ことば]", blank: true },
          { text: "を 書[か]いてください" },
        ],
        notes: "Basic translation using 言葉 for “word.”",
      },
      {
        segments: [
          { text: "この 紙[かみ]に " },
          { text: "平和[へいわ]という単語[たんご]", blank: true },
          { text: "を 書[か]いてください" },
        ],
        notes: "Using 単語 instead of 言葉.",
      },
      {
        segments: [
          { text: "" },
          { text: "平和[へいわ]という言葉[ことば]", blank: true },
          { text: "を この 紙[かみ]に 書[か]いてください" },
        ],
        notes: "Reversed word order: object before location.",
      },
      {
        segments: [
          { text: "" },
          { text: "平和[へいわ]という単語[たんご]", blank: true },
          { text: "を この 紙[かみ]に 書[か]いてください" },
        ],
        notes: "Reversed word order with 単語.",
      },
      {
        segments: [
          { text: "この 紙[かみ]の 上[うえ]に " },
          { text: "平和[へいわ]という言葉[ことば]", blank: true },
          { text: "を 書[か]いてください" },
        ],
        notes: "Using この紙の上に for “on this paper.”",
      },
      {
        segments: [
          { text: "この 紙[かみ]の 上[うえ]に " },
          { text: "平和[へいわ]という単語[たんご]", blank: true },
          { text: "を 書[か]いてください" },
        ],
        notes: "Using この紙の上に with 単語.",
      },
      {
        segments: [
          { text: "" },
          { text: "平和[へいわ]という言葉[ことば]", blank: true },
          { text: "を この 紙[かみ]の 上[うえ]に 書[か]いてください" },
        ],
        notes: "Object-first word order with この紙の上に.",
      },
      {
        segments: [
          { text: "" },
          { text: "平和[へいわ]という単語[たんご]", blank: true },
          { text: "を この 紙[かみ]の 上[うえ]に 書[か]いてください" },
        ],
        notes: "Object-first word order with この紙の上に and 単語.",
      },
    ],
  },
  {
    english: "Every morning, I listen to a song called Lemon.",
    hint: "Lemon = レモン",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 毎朝[まいあさ]、レモン" },
          { text: "という", blank: true },
          { text: "歌[うた]を " },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard word order with 私は first; uses known vocabulary 歌",
      },
      {
        segments: [
          { text: "毎朝[まいあさ]、私[わたし]は レモン" },
          { text: "という", blank: true },
          { text: "歌[うた]を " },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time expression placed at the beginning",
      },
      {
        segments: [
          { text: "私[わたし]は レモン" },
          { text: "という", blank: true },
          { text: "歌[うた]を 毎朝[まいあさ] " },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adverbial time phrase placed before the verb",
      },
      {
        segments: [
          { text: "私[わたし]は 毎朝[まいあさ] レモン" },
          { text: "という", blank: true },
          { text: "歌[うた]を " },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Same standard order without comma punctuation",
      },
      {
        segments: [
          { text: "私[わたし]は 毎朝[まいあさ]、レモン" },
          { text: "という", blank: true },
          { text: "歌[うた]を 聞[き]いて" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses ている to express the habitual action",
      },
      {
        segments: [
          { text: "毎朝[まいあさ]、私[わたし]は レモン" },
          { text: "という", blank: true },
          { text: "歌[うた]を 聞[き]いて" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Habitual ている with time phrase first",
      },
      {
        segments: [
          { text: "私[わたし]は レモン" },
          { text: "という", blank: true },
          { text: "歌[うた]を 毎朝[まいあさ] 聞[き]いて" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Habitual ている with 毎朝 before the predicate",
      },
      {
        segments: [
          { text: "私[わたし]は 毎朝[まいあさ]、レモン" },
          { text: "という", blank: true },
          { text: "曲[きょく]を " },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 曲 as a natural synonym for song/piece",
      },
      {
        segments: [
          { text: "毎朝[まいあさ]、私[わたし]は レモン" },
          { text: "という", blank: true },
          { text: "曲[きょく]を " },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "曲 synonym with time expression first",
      },
      {
        segments: [
          { text: "私[わたし]は レモン" },
          { text: "という", blank: true },
          { text: "曲[きょく]を 毎朝[まいあさ] " },
          { text: "聞[き]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "曲 synonym with time phrase before the verb",
      },
      {
        segments: [
          { text: "私[わたし]は 毎朝[まいあさ]、レモン" },
          { text: "という", blank: true },
          { text: "曲[きょく]を 聞[き]いて" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "曲 synonym with habitual ている",
      },
      {
        segments: [
          { text: "毎朝[まいあさ]、私[わたし]は レモン" },
          { text: "という", blank: true },
          { text: "曲[きょく]を 聞[き]いて" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "曲 synonym, habitual ている, and time expression first",
      },
      {
        segments: [
          { text: "私[わたし]は レモン" },
          { text: "という", blank: true },
          { text: "曲[きょく]を 毎朝[まいあさ] 聞[き]いて" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "曲 synonym with 毎朝 placed before the habitual predicate",
      },
    ],
  },
  {
    english: "Yesterday, I met a chef named Marco at the restaurant.",
    hint: "Marco = マルコ",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、レストランで マルコさん" },
          { text: "という", blank: true },
          { text: "シェフに " },
          { text: "会[あ]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard word order with 私は at the start",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は レストランで マルコさん" },
          { text: "という", blank: true },
          { text: "シェフに " },
          { text: "会[あ]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time expression placed first",
      },
      {
        segments: [
          { text: "私[わたし]は レストランで 昨日[きのう]、マルコさん" },
          { text: "という", blank: true },
          { text: "シェフに " },
          { text: "会[あ]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Location before time",
      },
      {
        segments: [
          { text: "昨日[きのう]、レストランで 私[わたし]は マルコさん" },
          { text: "という", blank: true },
          { text: "シェフに " },
          { text: "会[あ]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Topic after time and location",
      },
      {
        segments: [
          { text: "昨日[きのう]、レストランで マルコさん" },
          { text: "という", blank: true },
          { text: "シェフに 私[わたし]は " },
          { text: "会[あ]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Object/person met before topic; natural contrastive topic placement",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、レストランで マルコさん" },
          { text: "という", blank: true },
          { text: "シェフと " },
          { text: "会[あ]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using と with 会う instead of に, emphasizing meeting with the chef",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は レストランで マルコさん" },
          { text: "という", blank: true },
          { text: "シェフと " },
          { text: "会[あ]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time first plus と with 会う",
      },
      {
        segments: [
          { text: "私[わたし]は レストランで 昨日[きのう]、マルコさん" },
          { text: "という", blank: true },
          { text: "シェフと " },
          { text: "会[あ]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Location before time plus と with 会う",
      },
      {
        segments: [
          { text: "昨日[きのう]、レストランで 私[わたし]は マルコさん" },
          { text: "という", blank: true },
          { text: "シェフと " },
          { text: "会[あ]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Topic after time and location plus と with 会う",
      },
      {
        segments: [
          { text: "昨日[きのう]、レストランで マルコさん" },
          { text: "という", blank: true },
          { text: "シェフと 私[わたし]は " },
          { text: "会[あ]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Person met before topic plus と with 会う",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、レストランで マルコさん" },
          { text: "という", blank: true },
          { text: "料理人[りょうりにん]に " },
          { text: "会[あ]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 料理人 as a Japanese synonym for chef/cook",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は レストランで マルコさん" },
          { text: "という", blank: true },
          { text: "料理人[りょうりにん]に " },
          { text: "会[あ]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "料理人 with time first",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、レストランで マルコさん" },
          { text: "という", blank: true },
          { text: "料理人[りょうりにん]と " },
          { text: "会[あ]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "料理人 plus と with 会う",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は レストランで マルコさん" },
          { text: "という", blank: true },
          { text: "料理人[りょうりにん]と " },
          { text: "会[あ]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "料理人 with time first plus と with 会う",
      },
    ],
  },
  {
    english: "There is a restaurant called Midori near the station.",
    hint: "Midori = みどり",
    answers: [
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くに、" },
          { text: "みどりという", blank: true },
          { text: "レストランが " },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Location first with 近くにある for “is near.”",
      },
      {
        segments: [
          { text: "みどりという", blank: true },
          { text: "レストランが 駅[えき]の 近[ちか]くに " },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Named restaurant first, then the nearby location.",
      },
      {
        segments: [
          { text: "駅[えき]の 近[ちか]くには、" },
          { text: "みどりという", blank: true },
          { text: "レストランが " },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses には to mark the location as a topic.",
      },
      {
        segments: [
          { text: "みどりという", blank: true },
          { text: "レストランは 駅[えき]の 近[ちか]くに " },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses は to present the named restaurant as the topic.",
      },
    ],
  },
  {
    english: "Yesterday, I borrowed a novel called Kokoro at the library.",
    hint: "Kokoro = 心",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、図書館[としょかん]で 心[こころ]" },
          { text: "という", blank: true },
          { text: "小説[しょうせつ]を " },
          { text: "借[か]りる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard word order with 私は, time, place, object",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 図書館[としょかん]で 心[こころ]" },
          { text: "という", blank: true },
          { text: "小説[しょうせつ]を " },
          { text: "借[か]りる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase placed at the beginning before 私は",
      },
      {
        segments: [
          { text: "私[わたし]は 図書館[としょかん]で 昨日[きのう]、心[こころ]" },
          { text: "という", blank: true },
          { text: "小説[しょうせつ]を " },
          { text: "借[か]りる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Place comes before the time phrase",
      },
      {
        segments: [
          { text: "心[こころ]" },
          { text: "という", blank: true },
          { text: "小説[しょうせつ]を、昨日[きのう] 図書館[としょかん]で " },
          { text: "借[か]りる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Object placed at the beginning; pronoun omitted naturally",
      },
      {
        segments: [
          { text: "昨日[きのう]、図書館[としょかん]で 心[こころ]" },
          { text: "という", blank: true },
          { text: "小説[しょうせつ]を " },
          { text: "借[か]りる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Pronoun omitted with standard time-place-object order",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、心[こころ]" },
          { text: "という", blank: true },
          { text: "小説[しょうせつ]を 図書館[としょかん]で " },
          { text: "借[か]りる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Object placed before location",
      },
      {
        segments: [
          { text: "昨日[きのう]、心[こころ]" },
          { text: "という", blank: true },
          { text: "小説[しょうせつ]を 図書館[としょかん]で " },
          { text: "借[か]りる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Pronoun omitted; object before location",
      },
    ],
  },
  {
    english: "The game called shogi is interesting.",
    hint: "shogi = しょうぎ",
    answers: [
      {
        segments: [
          { text: "将棋[しょうぎ]" },
          { text: "という", blank: true },
          { text: "ゲームは" },
          { text: "面白[おもしろ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation with は marking the topic",
      },
      {
        segments: [
          { text: "将棋[しょうぎ]" },
          { text: "という", blank: true },
          { text: "ゲームが" },
          { text: "面白[おもしろ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は to mark the subject",
      },
      {
        segments: [
          { text: "将棋[しょうぎ]" },
          { text: "という", blank: true },
          { text: "ゲームは とても" },
          { text: "面白[おもしろ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds とても for emphasis",
      },
      {
        segments: [
          { text: "将棋[しょうぎ]" },
          { text: "という", blank: true },
          { text: "ゲームは すごく" },
          { text: "面白[おもしろ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses すごく for stronger emphasis",
      },
      {
        segments: [
          { text: "将棋[しょうぎ]" },
          { text: "という", blank: true },
          { text: "ゲームは 本当[ほんとう]に" },
          { text: "面白[おもしろ]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 本当に to emphasize that it is really interesting",
      },
      {
        segments: [
          { text: "将棋[しょうぎ]" },
          { text: "という", blank: true },
          { text: "ゲームは" },
          { text: "楽[たの]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 楽しい as a natural description of an interesting/fun game",
      },
      {
        segments: [
          { text: "将棋[しょうぎ]" },
          { text: "という", blank: true },
          { text: "ゲームが" },
          { text: "楽[たの]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 楽しい with が marking the subject",
      },
      {
        segments: [
          { text: "将棋[しょうぎ]" },
          { text: "という", blank: true },
          { text: "ゲームは 面白[おもしろ]いゲーム" },
          { text: "です" },
        ],
        notes: "Rephrases as 'is an interesting game' with a noun predicate",
      },
    ],
  },
  {
    english: "I want a sweater in the color called beige.",
    hint: "sweater = セーター; beige = ベージュ",
    answers: [
      {
        segments: [
          { text: "私[わたし]は ベージュ" },
          { text: "という", blank: true },
          { text: "色[いろ]の セーターが " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard translation using がほしい for wanting a noun",
      },
      {
        segments: [
          { text: "ベージュ" },
          { text: "という", blank: true },
          { text: "色[いろ]の セーターが、私[わたし]は " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed word order, emphasizing the sweater",
      },
      {
        segments: [
          { text: "私[わたし]は ベージュ" },
          { text: "という", blank: true },
          { text: "色[いろ]の セーターを " },
          { text: "買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 買いたい, “want to buy,” as a natural way to express wanting the item",
      },
      {
        segments: [
          { text: "ベージュ" },
          { text: "という", blank: true },
          { text: "色[いろ]の セーターを、私[わたし]は " },
          { text: "買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed word order with 買いたい",
      },
      {
        segments: [
          { text: "私[わたし]は ベージュ" },
          { text: "という", blank: true },
          { text: "色[いろ]をした セーターが " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 色をした (“having the color…”) instead of 色の",
      },
      {
        segments: [
          { text: "ベージュ" },
          { text: "という", blank: true },
          { text: "色[いろ]をした セーターが、私[わたし]は " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed word order with 色をした",
      },
      {
        segments: [
          { text: "私[わたし]は ベージュ" },
          { text: "という", blank: true },
          { text: "色[いろ]をした セーターを " },
          { text: "買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 買いたい with 色をした",
      },
      {
        segments: [
          { text: "私[わたし]が 欲[ほ]しいのは、ベージュ" },
          { text: "という", blank: true },
          { text: "色[いろ]の セーター" },
          { text: "です" },
        ],
        notes: "Corrected cleft-style sentence with です as a separate segment for casual conversion",
      },
      {
        segments: [
          { text: "私[わたし]が 欲[ほ]しいのは、ベージュ" },
          { text: "という", blank: true },
          { text: "色[いろ]をした セーター" },
          { text: "です" },
        ],
        notes: "Corrected cleft-style sentence with 色をした and separate です",
      },
    ],
  },
  {
    english: "Please show me the photo of the island called Maui.",
    hint: "Maui = マウイ",
    answers: [
      {
        segments: [
          { text: "マウイ" },
          { text: "という", blank: true },
          { text: "島[しま]の 写真[しゃしん]を 見[み]せてください" },
        ],
        notes: "Standard wording with を marking the photo as the object.",
      },
      {
        register: "polite",
        segments: [
          { text: "マウイ" },
          { text: "という", blank: true },
          { text: "島[しま]の 写真[しゃしん]を 見[み]せていただけませんか" },
        ],
        notes: "More polite request using 見せていただけませんか.",
      },
      {
        segments: [
          { text: "マウイ" },
          { text: "という", blank: true },
          { text: "島[しま]の 写真[しゃしん]、見[み]せてください" },
        ],
        notes: "Natural spoken version dropping the object particle を.",
      },
      {
        segments: [
          { text: "マウイ" },
          { text: "という", blank: true },
          { text: "島[しま]の 写真[しゃしん]を ちょっと 見[み]せてください" },
        ],
        notes: "Adds ちょっと to soften the request.",
      },
    ],
  },
  {
    english: "This morning, I got an email from a person named Yuki.",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、ゆき" },
          { text: "という", blank: true },
          { text: "人[ひと]から メールを " },
          { text: "もらう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic translation using から for the sender/source and もらう for “got.”",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は ゆき" },
          { text: "という", blank: true },
          { text: "人[ひと]から メールを " },
          { text: "もらう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase placed at the beginning.",
      },
      {
        segments: [
          { text: "私[わたし]は ゆき" },
          { text: "という", blank: true },
          { text: "人[ひと]から 今朝[けさ] メールを " },
          { text: "もらう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "今朝 placed before the object.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、ゆき" },
          { text: "という", blank: true },
          { text: "人[ひと]に メールを " },
          { text: "もらう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using に instead of から with もらう to mark the giver.",
      },
      {
        segments: [
          { text: "今朝[けさ]、ゆき" },
          { text: "という", blank: true },
          { text: "人[ひと]から 私[わたし]に メールが " },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using メールが来る, a natural way to say an email arrived/came.",
      },
      {
        segments: [
          { text: "私[わたし]に 今朝[けさ]、ゆき" },
          { text: "という", blank: true },
          { text: "人[ひと]から メールが " },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "メールが来る with 私に at the beginning.",
      },
      {
        segments: [
          { text: "ゆき" },
          { text: "という", blank: true },
          { text: "人[ひと]から 今朝[けさ]、私[わたし]に メールが " },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Sender phrase placed first for emphasis.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、ゆき" },
          { text: "という", blank: true },
          { text: "人[ひと]から メールを " },
          { text: "受[う]け 取[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 受け取る for “received” instead of もらう.",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は ゆき" },
          { text: "という", blank: true },
          { text: "人[ひと]から メールを " },
          { text: "受[う]け 取[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "受け取る version with time phrase first.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、ゆきさん" },
          { text: "という", blank: true },
          { text: "人[ひと]から メールを " },
          { text: "もらう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using さん with the person’s name, a common natural choice.",
      },
      {
        segments: [
          { text: "今朝[けさ]、ゆきさん" },
          { text: "という", blank: true },
          { text: "人[ひと]から 私[わたし]に メールが " },
          { text: "来[く]る", conjugation: { pos: "Kuru verb - special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "さん version with メールが来る.",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、ゆき" },
          { text: "という", blank: true },
          { text: "人[ひと]からの メールを " },
          { text: "もらう", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using からのメール, “an email from…” as a noun phrase.",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は ゆきさん" },
          { text: "という", blank: true },
          { text: "人[ひと]からの メールを " },
          { text: "受[う]け 取[と]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Combines さん, からのメール, and 受け取る.",
      },
      {
        segments: [
          { text: "今朝[けさ]、ゆき" },
          { text: "という", blank: true },
          { text: "人[ひと]から 私[わたし]に メールが " },
          { text: "届[とど]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using メールが届く, another natural way to say an email arrived/was received.",
      },
    ],
  },
  {
    english: "Please call the teacher named Tanaka right away.",
    hint: "Tanaka = 田中 (たなか)",
    answers: [
      {
        segments: [
          { text: "田中[たなか]さん" },
          { text: "という", blank: true },
          { text: "先生[せんせい]に すぐ 電話[でんわ]してください" },
        ],
        notes: "Basic translation using 先生に電話してください with すぐ before the verb",
      },
      {
        segments: [
          { text: "田中[たなか]さん" },
          { text: "という", blank: true },
          { text: "先生[せんせい]に 今[いま]すぐ 電話[でんわ]してください" },
        ],
        notes: "Uses 今すぐ for “right away”",
      },
      {
        segments: [
          { text: "すぐ 田中[たなか]さん" },
          { text: "という", blank: true },
          { text: "先生[せんせい]に 電話[でんわ]してください" },
        ],
        notes: "Places すぐ at the beginning",
      },
      {
        segments: [
          { text: "今[いま]すぐ 田中[たなか]さん" },
          { text: "という", blank: true },
          { text: "先生[せんせい]に 電話[でんわ]してください" },
        ],
        notes: "Places 今すぐ at the beginning",
      },
      {
        segments: [
          { text: "田中[たなか]さん" },
          { text: "という", blank: true },
          { text: "先生[せんせい]に すぐ 電話[でんわ]を してください" },
        ],
        notes: "Uses 電話をする instead of 電話する",
      },
      {
        segments: [
          { text: "田中[たなか]さん" },
          { text: "という", blank: true },
          { text: "先生[せんせい]に 今[いま]すぐ 電話[でんわ]を してください" },
        ],
        notes: "Uses 電話をする with 今すぐ",
      },
      {
        segments: [
          { text: "すぐ 田中[たなか]さん" },
          { text: "という", blank: true },
          { text: "先生[せんせい]に 電話[でんわ]を してください" },
        ],
        notes: "Fronts すぐ and uses 電話をする",
      },
      {
        segments: [
          { text: "今[いま]すぐ 田中[たなか]さん" },
          { text: "という", blank: true },
          { text: "先生[せんせい]に 電話[でんわ]を してください" },
        ],
        notes: "Fronts 今すぐ and uses 電話をする",
      },
      {
        segments: [
          { text: "田中[たなか]さん" },
          { text: "という", blank: true },
          { text: "先生[せんせい]に すぐに 電話[でんわ]してください" },
        ],
        notes: "Uses すぐに instead of すぐ",
      },
      {
        segments: [
          { text: "田中[たなか]さん" },
          { text: "という", blank: true },
          { text: "先生[せんせい]に 今[いま]すぐに 電話[でんわ]してください" },
        ],
        notes: "Uses 今すぐに for “right away”",
      },
      {
        segments: [
          { text: "すぐに 田中[たなか]さん" },
          { text: "という", blank: true },
          { text: "先生[せんせい]に 電話[でんわ]してください" },
        ],
        notes: "Places すぐに at the beginning",
      },
      {
        segments: [
          { text: "今[いま]すぐに 田中[たなか]さん" },
          { text: "という", blank: true },
          { text: "先生[せんせい]に 電話[でんわ]してください" },
        ],
        notes: "Places 今すぐに at the beginning",
      },
      {
        segments: [
          { text: "田中[たなか]さん" },
          { text: "という", blank: true },
          { text: "先生[せんせい]に すぐに 電話[でんわ]を してください" },
        ],
        notes: "Uses すぐに and 電話をする",
      },
      {
        segments: [
          { text: "田中[たなか]さん" },
          { text: "という", blank: true },
          { text: "先生[せんせい]に 今[いま]すぐに 電話[でんわ]を してください" },
        ],
        notes: "Uses 今すぐに and 電話をする",
      },
      {
        segments: [
          { text: "すぐに 田中[たなか]さん" },
          { text: "という", blank: true },
          { text: "先生[せんせい]に 電話[でんわ]を してください" },
        ],
        notes: "Fronts すぐに and uses 電話をする",
      },
      {
        segments: [
          { text: "今[いま]すぐに 田中[たなか]さん" },
          { text: "という", blank: true },
          { text: "先生[せんせい]に 電話[でんわ]を してください" },
        ],
        notes: "Fronts 今すぐに and uses 電話をする",
      },
    ],
  },
  {
    english: "In the future, I want to work at a company called Nintendo.",
    hint: "Nintendo = 任天堂",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 将来[しょうらい]、任天堂[にんてんどう]" },
          { text: "という", blank: true },
          { text: "会社[かいしゃ]で " },
          { text: "働[はたら]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation with 将来 at the beginning",
      },
      {
        segments: [
          { text: "将来[しょうらい]、私[わたし]は 任天堂[にんてんどう]" },
          { text: "という", blank: true },
          { text: "会社[かいしゃ]で " },
          { text: "働[はたら]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time phrase placed before the subject",
      },
      {
        segments: [
          { text: "私[わたし]は 将来[しょうらい]は 任天堂[にんてんどう]" },
          { text: "という", blank: true },
          { text: "会社[かいしゃ]で " },
          { text: "働[はたら]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 将来は to topicalize 'in the future'",
      },
      {
        segments: [
          { text: "将来[しょうらい]は、私[わたし]は 任天堂[にんてんどう]" },
          { text: "という", blank: true },
          { text: "会社[かいしゃ]で " },
          { text: "働[はたら]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topicalized time phrase placed first",
      },
      {
        segments: [
          { text: "将来[しょうらい]、任天堂[にんてんどう]" },
          { text: "という", blank: true },
          { text: "会社[かいしゃ]で " },
          { text: "働[はたら]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Natural pronoun omission with time phrase first",
      },
      {
        segments: [
          { text: "任天堂[にんてんどう]" },
          { text: "という", blank: true },
          { text: "会社[かいしゃ]で、私[わたし]は 将来[しょうらい] " },
          { text: "働[はたら]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Company phrase moved to the beginning",
      },
      {
        segments: [
          { text: "任天堂[にんてんどう]" },
          { text: "という", blank: true },
          { text: "会社[かいしゃ]で 将来[しょうらい] " },
          { text: "働[はたら]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Company phrase first with pronoun omitted",
      },
      {
        segments: [
          { text: "私[わたし]は 将来[しょうらい]、任天堂[にんてんどう]" },
          { text: "という", blank: true },
          { text: "会社[かいしゃ]に " },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 会社に入る to mean join/work for the company",
      },
      {
        segments: [
          { text: "将来[しょうらい]、私[わたし]は 任天堂[にんてんどう]" },
          { text: "という", blank: true },
          { text: "会社[かいしゃ]に " },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 会社に入る with time phrase first",
      },
      {
        segments: [
          { text: "将来[しょうらい]、任天堂[にんてんどう]" },
          { text: "という", blank: true },
          { text: "会社[かいしゃ]に " },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 会社に入る with pronoun omitted",
      },
      {
        segments: [
          { text: "私[わたし]は 将来[しょうらい]は 任天堂[にんてんどう]" },
          { text: "という", blank: true },
          { text: "会社[かいしゃ]に " },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topicalized 将来は with 会社に入る",
      },
      {
        segments: [
          { text: "任天堂[にんてんどう]" },
          { text: "という", blank: true },
          { text: "会社[かいしゃ]に、私[わたし]は 将来[しょうらい] " },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Company phrase fronted with 会社に入る",
      },
      {
        segments: [
          { text: "私[わたし]は 将来[しょうらい]、任天堂[にんてんどう]" },
          { text: "という", blank: true },
          { text: "会社[かいしゃ]で 仕事[しごと]を " },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 仕事をする instead of 働く",
      },
    ],
  },
  {
    english: "At the festival, I drank a drink called Ramune.",
    hint: "Ramune = ラムネ",
    answers: [
      {
        segments: [
          { text: "私[わたし]は お祭[まつ]りで、ラムネ" },
          { text: "という", blank: true },
          { text: "飲[の]み 物[もの]を " },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic translation with お祭りで and 飲み物.",
      },
      {
        segments: [
          { text: "私[わたし]は 祭[まつ]りで、ラムネ" },
          { text: "という", blank: true },
          { text: "飲[の]み 物[もの]を " },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 祭り instead of お祭り.",
      },
      {
        segments: [
          { text: "私[わたし]は ラムネ" },
          { text: "という", blank: true },
          { text: "飲[の]み 物[もの]を お祭[まつ]りで " },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Object placed before the festival location.",
      },
      {
        segments: [
          { text: "私[わたし]は ラムネ" },
          { text: "という", blank: true },
          { text: "飲[の]み 物[もの]を 祭[まつ]りで " },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Object-first word order with 祭り.",
      },
      {
        segments: [
          { text: "お祭[まつ]りで、私[わたし]は ラムネ" },
          { text: "という", blank: true },
          { text: "飲[の]み 物[もの]を " },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Location placed at the beginning for emphasis.",
      },
      {
        segments: [
          { text: "祭[まつ]りで、私[わたし]は ラムネ" },
          { text: "という", blank: true },
          { text: "飲[の]み 物[もの]を " },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Location-first order using 祭り.",
      },
      {
        segments: [
          { text: "お祭[まつ]りで、ラムネ" },
          { text: "という", blank: true },
          { text: "飲[の]み 物[もの]を " },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Natural pronoun omission with location first.",
      },
      {
        segments: [
          { text: "祭[まつ]りで、ラムネ" },
          { text: "という", blank: true },
          { text: "飲[の]み 物[もの]を " },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Pronoun omitted; using 祭り.",
      },
      {
        segments: [
          { text: "私[わたし]は お祭[まつ]りでは、ラムネ" },
          { text: "という", blank: true },
          { text: "飲[の]み 物[もの]を " },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using では to topicalize the festival setting.",
      },
      {
        segments: [
          { text: "私[わたし]は 祭[まつ]りでは、ラムネ" },
          { text: "という", blank: true },
          { text: "飲[の]み 物[もの]を " },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using では with 祭り.",
      },
      {
        segments: [
          { text: "お祭[まつ]りでは、ラムネ" },
          { text: "という", blank: true },
          { text: "飲[の]み 物[もの]を " },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Pronoun omitted with では.",
      },
      {
        segments: [
          { text: "祭[まつ]りでは、ラムネ" },
          { text: "という", blank: true },
          { text: "飲[の]み 物[もの]を " },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Pronoun omitted; では and 祭り.",
      },
    ],
  },
  {
    english: "I use an app called LINE every day.",
    hint: "LINE = ライン",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 毎日[まいにち]、ライン" },
          { text: "という", blank: true },
          { text: "アプリを " },
          { text: "使[つか]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard word order with 毎日 at the beginning of the sentence",
      },
      {
        segments: [
          { text: "私[わたし]は ライン" },
          { text: "という", blank: true },
          { text: "アプリを 毎日[まいにち] " },
          { text: "使[つか]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adverb 毎日 placed before the verb",
      },
      {
        segments: [
          { text: "ライン" },
          { text: "という", blank: true },
          { text: "アプリを 私[わたし]は 毎日[まいにち] " },
          { text: "使[つか]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Topicalizes the object phrase by placing it first",
      },
      {
        segments: [
          { text: "私[わたし]が 毎日[まいにち] 使[つか]う アプリは、ライン" },
          { text: "という", blank: true },
          { text: "アプリ" },
          { text: "です" },
        ],
        notes: "Rephrased as “The app I use every day is an app called LINE”",
      },
    ],
  },
  {
    english: "At the art exhibition, I saw a work called Sunflowers.",
    hint: "Sunflowers = ひまわり",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 展覧会[てんらんかい]で、ひまわり" },
          { text: "という", blank: true },
          { text: "作品[さくひん]を " },
          { text: "見[み]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic translation with 私は and location before the object.",
      },
      {
        segments: [
          { text: "私[わたし]は ひまわり" },
          { text: "という", blank: true },
          { text: "作品[さくひん]を 展覧会[てんらんかい]で " },
          { text: "見[み]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Object placed before the exhibition location.",
      },
      {
        segments: [
          { text: "展覧会[てんらんかい]で、私[わたし]は ひまわり" },
          { text: "という", blank: true },
          { text: "作品[さくひん]を " },
          { text: "見[み]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed word order, starting with the exhibition location.",
      },
      {
        segments: [
          { text: "私[わたし]は 美術展[びじゅつてん]で、ひまわり" },
          { text: "という", blank: true },
          { text: "作品[さくひん]を " },
          { text: "見[み]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 美術展, a more specific word for art exhibition.",
      },
      {
        segments: [
          { text: "美術展[びじゅつてん]で、私[わたし]は ひまわり" },
          { text: "という", blank: true },
          { text: "作品[さくひん]を " },
          { text: "見[み]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Starts with 美術展で for emphasis on the location.",
      },
      {
        segments: [
          { text: "私[わたし]は ひまわり" },
          { text: "という", blank: true },
          { text: "作品[さくひん]を 美術展[びじゅつてん]で " },
          { text: "見[み]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 美術展 with object placed before the location.",
      },
      {
        segments: [
          { text: "私[わたし]は 展覧会[てんらんかい]で、ひまわり" },
          { text: "という", blank: true },
          { text: "絵[え]を " },
          { text: "見[み]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 絵 instead of 作品, natural if the work is a painting.",
      },
      {
        segments: [
          { text: "私[わたし]は 美術展[びじゅつてん]で、ひまわり" },
          { text: "という", blank: true },
          { text: "絵[え]を " },
          { text: "見[み]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses both 美術展 and 絵 for a painting-specific translation.",
      },
      {
        segments: [
          { text: "展覧会[てんらんかい]で、ひまわり" },
          { text: "という", blank: true },
          { text: "作品[さくひん]を " },
          { text: "見[み]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Drops the subject 私は, which is natural when context is clear.",
      },
    ],
  },
  {
    english: "There is a cat named Tama under the sofa.",
    hint: "Tama = タマ",
    answers: [
      {
        segments: [
          { text: "ソファの 下[した]に、タマ" },
          { text: "という", blank: true },
          { text: "猫[ねこ]が " },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Standard word order: location first, then the cat named Tama",
      },
      {
        segments: [
          { text: "タマ" },
          { text: "という", blank: true },
          { text: "猫[ねこ]が ソファの 下[した]に " },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject first, then location",
      },
      {
        segments: [
          { text: "ソファの 下[した]には、タマ" },
          { text: "という", blank: true },
          { text: "猫[ねこ]が " },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using には to mark the location as the topic",
      },
      {
        segments: [
          { text: "ソファの 下[した]に、タマ" },
          { text: "という", blank: true },
          { text: "名前[なまえ]の 猫[ねこ]が " },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using という名前の猫, literally 'a cat with the name Tama'",
      },
      {
        segments: [
          { text: "タマ" },
          { text: "という", blank: true },
          { text: "名前[なまえ]の 猫[ねこ]が ソファの 下[した]に " },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Subject-first version with という名前の猫",
      },
      {
        segments: [
          { text: "ソファの 下[した]には、タマ" },
          { text: "という", blank: true },
          { text: "名前[なまえ]の 猫[ねこ]が " },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using には with という名前の猫",
      },
    ],
  },
];
