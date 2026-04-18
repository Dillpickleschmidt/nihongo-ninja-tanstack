import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "The cherry blossoms in the park are already in bloom.",
    answers: [
      {
        segments: [
          { text: "公園[こうえん]の 桜[さくら]は もう" },
          { text: "咲[さ]いて", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "公園[こうえん]の 桜[さくら]が もう" },
          { text: "咲[さ]いて", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が instead of は — neutral subject marker",
      },
      {
        segments: [
          { text: "公園[こうえん]の 桜[さくら]の 花[はな]は もう" },
          { text: "咲[さ]いて", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "桜の花 (cherry blossom flowers) instead of just 桜, with は",
      },
      {
        segments: [
          { text: "公園[こうえん]の 桜[さくら]の 花[はな]が もう" },
          { text: "咲[さ]いて", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "桜の花 with が instead of は",
      },
      {
        segments: [
          { text: "もう公園[こうえん]の 桜[さくら]は" },
          { text: "咲[さ]いて", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "もう moved to the front of the sentence",
      },
    ],
  },
  {
    english: "The door to the classroom is already closed.",
    answers: [
      {
        segments: [
          { text: "教室[きょうしつ]のドアは もう" },
          { text: "閉[し]まっている", blank: true },
        ],
      },
      {
        segments: [
          { text: "教室[きょうしつ]のドアが もう" },
          { text: "閉[し]まっている", blank: true },
        ],
        notes: "Using が instead of は as subject marker",
      },
      {
        segments: [
          { text: "もう 教室[きょうしつ]のドアは" },
          { text: "閉[し]まっている", blank: true },
        ],
        notes: "もう moved to the front of the sentence",
      },
      {
        segments: [
          { text: "もう 教室[きょうしつ]のドアが" },
          { text: "閉[し]まっている", blank: true },
        ],
        notes: "もう at front, が as subject marker",
      },
      {
        segments: [
          { text: "教室[きょうしつ]の 扉[とびら]は もう" },
          { text: "閉[し]まっている", blank: true },
        ],
      },
      {
        segments: [
          { text: "教室[きょうしつ]の 扉[とびら]が もう" },
          { text: "閉[し]まっている", blank: true },
        ],
      },
    ],
  },
  {
    english: "The light in the living room is already on.",
    hint: "Think about the state the light is in, not the action of turning it on.",
    answers: [
      {
        segments: [
          { text: "リビングの 電気[でんき]は もう" },
          { text: "ついて", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "リビングの 電気[でんき]が もう" },
          { text: "ついて", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は",
      },
      {
        segments: [
          { text: "リビングのライトは もう" },
          { text: "ついて", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ライト instead of 電気 for \"light\", with は",
      },
      {
        segments: [
          { text: "リビングのライトが もう" },
          { text: "ついて", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ライト with が particle",
      },
      {
        segments: [
          { text: "居間[いま]の 電気[でんき]は もう" },
          { text: "ついて", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "居間 (traditional Japanese word) instead of リビング for \"living room\", with は",
      },
      {
        segments: [
          { text: "居間[いま]の 電気[でんき]が もう" },
          { text: "ついて", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "居間 with が particle",
      },
    ],
  },
  {
    english: "The eraser has fallen off the desk.",
    answers: [
      {
        segments: [
          { text: "消[け]しゴムが 机[つくえ]から" },
          { text: "落[お]ちている", blank: true },
        ],
      },
      {
        segments: [
          { text: "消[け]しゴムは 机[つくえ]から" },
          { text: "落[お]ちている", blank: true },
        ],
        notes: "は instead of が — topic-marking the eraser",
      },
      {
        segments: [
          { text: "机[つくえ]から 消[け]しゴムが" },
          { text: "落[お]ちている", blank: true },
        ],
        notes: "Reversed word order — から phrase moved to front",
      },
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]から 消[け]しゴムが" },
          { text: "落[お]ちている", blank: true },
        ],
        notes: "More specific: 机の上から (from on top of the desk) instead of 机から",
      },
      {
        segments: [
          { text: "消[け]しゴムが 机[つくえ]の 上[うえ]から" },
          { text: "落[お]ちている", blank: true },
        ],
        notes: "が subject first, then 机の上から — natural subject-first order with specific location",
      },
      {
        segments: [
          { text: "消[け]しゴムは 机[つくえ]の 上[うえ]から" },
          { text: "落[お]ちている", blank: true },
        ],
        notes: "は topic-marker + 机の上から for specific location",
      },
      {
        segments: [
          { text: "消[け]しゴムが 机[つくえ]から もう" },
          { text: "落[お]ちている", blank: true },
        ],
        notes: "Adding もう (already) to emphasize the resultant state",
      },
    ],
  },
  {
    english: "The refrigerator in the kitchen is broken.",
    answers: [
      {
        segments: [
          { text: "台所[だいどころ]の 冷蔵庫[れいぞうこ]は" },
          { text: "壊[こわ]れている", blank: true },
        ],
      },
      {
        segments: [
          { text: "台所[だいどころ]の 冷蔵庫[れいぞうこ]が" },
          { text: "壊[こわ]れている", blank: true },
        ],
        notes: "Using が instead of は — neutral subject marking, not contrastive.",
      },
      {
        segments: [
          { text: "キッチンの 冷蔵庫[れいぞうこ]は" },
          { text: "壊[こわ]れている", blank: true },
        ],
        notes: "Using katakana キッチン instead of 台所 for kitchen.",
      },
      {
        segments: [
          { text: "キッチンの 冷蔵庫[れいぞうこ]が" },
          { text: "壊[こわ]れている", blank: true },
        ],
        notes: "キッチン + が particle.",
      },
    ],
  },
  {
    english: "My older sister is already married.",
    answers: [
      {
        segments: [
          { text: "姉[あね]は もう 結婚[けっこん]して" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]の 姉[あね]は もう 結婚[けっこん]して" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "With 私の to make \"my older sister\" explicit",
      },
      {
        segments: [
          { text: "姉[あね]が もう 結婚[けっこん]して" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は",
      },
    ],
  },
  {
    english: "How come the window is open?",
    answers: [
      {
        segments: [
          { text: "どうして 窓[まど]は" },
          { text: "開[あ]いている", blank: true },
          { text: "ん" },
          { text: "です" },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "なぜ 窓[まど]は" },
          { text: "開[あ]いている", blank: true },
          { text: "ん" },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using なぜ instead of どうして (more formal \"why\")",
      },
      {
        segments: [
          { text: "どうして 窓[まど]が" },
          { text: "開[あ]いている", blank: true },
          { text: "ん" },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Using が instead of は as the subject particle",
      },
      {
        segments: [
          { text: "なぜ 窓[まど]が" },
          { text: "開[あ]いている", blank: true },
          { text: "ん" },
          { text: "です" },
          { text: "か" },
        ],
        notes: "なぜ + が particle variant",
      },
    ],
  },
  {
    english: "The train is already packed.",
    answers: [
      {
        segments: [
          { text: "電車[でんしゃ]は もう" },
          { text: "混[こ]んでいる", blank: true },
        ],
      },
      {
        segments: [
          { text: "電車[でんしゃ]は もう" },
          { text: "混[こ]んでる", blank: true },
        ],
        notes: "Casual い-dropped form: 混んでる instead of 混んでいる",
      },
      {
        segments: [
          { text: "電車[でんしゃ]が もう" },
          { text: "混[こ]んでいる", blank: true },
        ],
        notes: "Using が instead of は — emphasizing the train (as the subject) is the one that's packed",
      },
      {
        segments: [
          { text: "電車[でんしゃ]が もう" },
          { text: "混[こ]んでる", blank: true },
        ],
        notes: "が + casual い-dropped form: 混んでる",
      },
      {
        segments: [
          { text: "電車[でんしゃ]は もう すごく" },
          { text: "混[こ]んでいる", blank: true },
        ],
        notes: "Adding すごく (extremely) to emphasize \"packed\" — すごく混んでいる",
      },
      {
        segments: [
          { text: "電車[でんしゃ]は もう とても" },
          { text: "混[こ]んでいる", blank: true },
        ],
        notes: "Using とても instead of すごく to emphasize \"packed\"",
      },
      {
        segments: [
          { text: "電車[でんしゃ]は もう" },
          { text: "混[こ]んでいる", blank: true },
          { text: "よ" },
        ],
        notes: "Adding よ (assertive sentence-final particle) — informing/asserting that the train is packed",
      },
      {
        segments: [
          { text: "電車[でんしゃ]は もう" },
          { text: "混[こ]んでいる", blank: true },
          { text: "ね" },
        ],
        notes: "Adding ね (seeking agreement) — noting together that the train is already packed",
      },
    ],
  },
  {
    english: "Is Kenji angry?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは 怒[おこ]って" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "は particle; blank is いる (→いる casual / います polite)",
      },
      {
        segments: [
          { text: "けんじさんが 怒[おこ]って" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "が instead of は",
      },
    ],
  },
  {
    english: "The candle has already gone out.",
    hint: "Think about the current state the candle is in, not the action of going out.",
    answers: [
      {
        segments: [
          { text: "ろうそくは もう" },
          { text: "消[き]えている", blank: true },
        ],
      },
      {
        segments: [
          { text: "ろうそくが もう" },
          { text: "消[き]えている", blank: true },
        ],
        notes: "が instead of は — neutral observation focus",
      },
      {
        segments: [
          { text: "もう ろうそくは" },
          { text: "消[き]えている", blank: true },
        ],
        notes: "もう moved to the front of the sentence",
      },
    ],
  },
  {
    english: "The shop is already closed.",
    answers: [
      {
        segments: [
          { text: "店[みせ]は もう" },
          { text: "閉[し]まっている", blank: true },
        ],
      },
      {
        segments: [
          { text: "お店[みせ]は もう" },
          { text: "閉[し]まっている", blank: true },
        ],
      },
      {
        segments: [
          { text: "店[みせ]は もう 閉[し]まって" },
          { text: "いる", blank: true },
        ],
        notes: "Blank on いる only, separating て from いる",
      },
      {
        segments: [
          { text: "この 店[みせ]は もう" },
          { text: "閉[し]まっている", blank: true },
        ],
        notes: "この店 — \"this shop\" (referring to a nearby specific shop)",
      },
      {
        segments: [
          { text: "その 店[みせ]は もう" },
          { text: "閉[し]まっている", blank: true },
        ],
        notes: "その店 — \"that shop\" (referring to a shop near the listener)",
      },
      {
        segments: [
          { text: "この お店[みせ]は もう" },
          { text: "閉[し]まっている", blank: true },
        ],
        notes: "このお店 — polite form with demonstrative この",
      },
      {
        segments: [
          { text: "店[みせ]が もう" },
          { text: "閉[し]まっている", blank: true },
        ],
        notes: "が instead of は — neutral subject marker",
      },
      {
        segments: [
          { text: "お店[みせ]が もう" },
          { text: "閉[し]まっている", blank: true },
        ],
        notes: "お店が — polite form with が",
      },
    ],
  },
  {
    english: "The shirt has gotten dirty.",
    answers: [
      {
        segments: [
          { text: "シャツが" },
          { text: "汚[よご]れている", blank: true },
        ],
      },
      {
        segments: [
          { text: "シャツは" },
          { text: "汚[よご]れている", blank: true },
        ],
        notes: "Using は instead of が as topic marker",
      },
      {
        segments: [
          { text: "シャツがもう" },
          { text: "汚[よご]れている", blank: true },
        ],
        notes: "With もう (already) and が",
      },
      {
        segments: [
          { text: "シャツはもう" },
          { text: "汚[よご]れている", blank: true },
        ],
        notes: "With もう (already) and は",
      },
      {
        segments: [
          { text: "このシャツが" },
          { text: "汚[よご]れている", blank: true },
        ],
        notes: "With この (this shirt) and が",
      },
      {
        segments: [
          { text: "このシャツは" },
          { text: "汚[よご]れている", blank: true },
        ],
        notes: "With この (this shirt) and は",
      },
    ],
  },
  {
    english: "The flowers in the garden have already bloomed.",
    answers: [
      {
        segments: [
          { text: "庭[にわ]の 花[はな]は もう" },
          { text: "咲[さ]いている", blank: true },
        ],
      },
      {
        segments: [
          { text: "庭[にわ]の 花[はな]が もう" },
          { text: "咲[さ]いている", blank: true },
        ],
        notes: "Using が instead of は for the subject particle",
      },
    ],
  },
  {
    english: "Kenji has fallen down!",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんが" },
          { text: "転[ころ]んでいる", blank: true },
          { text: "！" },
        ],
      },
      {
        segments: [
          { text: "けんじさんが" },
          { text: "転[ころ]んでいる", blank: true },
          { text: "よ！" },
        ],
        notes: "Added よ for exclamatory emphasis",
      },
      {
        segments: [
          { text: "けんじさんは" },
          { text: "転[ころ]んでいる", blank: true },
          { text: "！" },
        ],
        notes: "は instead of が for Kenji as topic",
      },
      {
        segments: [
          { text: "けんじさんは" },
          { text: "転[ころ]んでいる", blank: true },
          { text: "よ！" },
        ],
        notes: "は for topic + よ for exclamation",
      },
    ],
  },
  {
    english: "The water is already boiling.",
    hint: "Refer to boiling water as お湯",
    answers: [
      {
        segments: [
          { text: "お 湯[ゆ]は もう" },
          { text: "沸[わ]いて", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "お 湯[ゆ]が もう" },
          { text: "沸[わ]いて", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が instead of は — が marks the subject naturally when stating a fact/observation",
      },
      {
        segments: [
          { text: "もう お 湯[ゆ]は" },
          { text: "沸[わ]いて", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "もう moved to the start of the sentence before お湯は",
      },
      {
        segments: [
          { text: "もう お 湯[ゆ]が" },
          { text: "沸[わ]いて", blank: true },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "もう at start + が particle",
      },
    ],
  },
  {
    english: "There's a bug on the desk — I think it's dead.",
    answers: [
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]に 虫[むし]がいる — 死[し]んでいると" },
          { text: "思[おも]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]に 虫[むし]がいる — 死[し]んでると" },
          { text: "思[おも]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Casual い-drop: 死んでる (ている → てる)",
      },
      {
        segments: [
          { text: "机[つくえ]に 虫[むし]がいる — 死[し]んでいると" },
          { text: "思[おも]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "机に (dropping 上に) — common natural shortening",
      },
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]に 虫[むし]がいる — 死[し]んでいるんじゃないかと" },
          { text: "思[おも]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Softer conjecture: 死んでいるんじゃないかと思う — \"I think it might be dead\"",
      },
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]に 虫[むし]がいる。死[し]んでいるかもしれない", blank: true },
        ],
        notes: "かもしれない for \"might be dead\" — blank covers the whole second clause",
      },
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]に 虫[むし]がいる — 死[し]んでいるんじゃないかと 思[おも]う", blank: true },
        ],
        notes: "All-in-one blank: 死んでいるんじゃないかと思う — softer conjecture, casual phrasing",
      },
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]に 虫[むし]がいる。死[し]んでるんじゃないかと 思[おも]う", blank: true },
        ],
        notes: "い-drop casual version: 死んでる + んじゃないかと思う",
      },
    ],
  },
  {
    english: "The movie has already started!",
    answers: [
      {
        segments: [
          { text: "映画[えいが]は もう" },
          { text: "始[はじ]まっている", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "映画[えいが]が もう" },
          { text: "始[はじ]まっている", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は — emphasizing the movie as subject",
      },
      {
        segments: [
          { text: "映画[えいが]は もう" },
          { text: "始[はじ]まっている", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "よ" },
        ],
        notes: "Adding よ particle for exclamatory/assertive tone — suits the \"!\" in the prompt",
      },
      {
        segments: [
          { text: "映画[えいが]が もう" },
          { text: "始[はじ]まっている", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "よ" },
        ],
        notes: "が + よ combination — emphatic exclamation",
      },
      {
        segments: [
          { text: "映画[えいが]は もう 始[はじ]まっている", blank: true },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "よ", blank: true },
        ],
        notes: "んですよ polite emphatic",
      },
      {
        segments: [
          { text: "映画[えいが]が もう 始[はじ]まっている", blank: true },
          { text: "ん", blank: true },
          { text: "です", blank: true },
          { text: "よ", blank: true },
        ],
        notes: "が + んですよ polite emphatic",
      },
    ],
  },
  {
    english: "The towel has gotten dirty.",
    answers: [
      {
        segments: [
          { text: "タオルが" },
          { text: "汚[よご]れて", blank: true },
          { text: "いる" },
        ],
      },
      {
        segments: [
          { text: "タオルは" },
          { text: "汚[よご]れて", blank: true },
          { text: "いる" },
        ],
        notes: "は instead of が as topic marker",
      },
      {
        segments: [
          { text: "タオルがもう" },
          { text: "汚[よご]れて", blank: true },
          { text: "いる" },
        ],
        notes: "Adding もう (already) for emphasis that it has gotten dirty",
      },
      {
        segments: [
          { text: "タオルはもう" },
          { text: "汚[よご]れて", blank: true },
          { text: "いる" },
        ],
        notes: "は topic + もう (already)",
      },
      {
        segments: [
          { text: "タオルが汚[よご]れて" },
          { text: "いる", blank: true },
        ],
        notes: "Blank is いる instead of 汚れて — different blank placement",
      },
      {
        segments: [
          { text: "タオルは汚[よご]れて" },
          { text: "いる", blank: true },
        ],
        notes: "は topic, blank is いる",
      },
    ],
  },
  {
    english: "The switch is broken.",
    hint: "switch = スイッチ",
    answers: [
      {
        segments: [
          { text: "スイッチが" },
          { text: "壊[こわ]れている", blank: true },
        ],
      },
      {
        segments: [
          { text: "スイッチは" },
          { text: "壊[こわ]れている", blank: true },
        ],
        notes: "は instead of が — topicalizing the switch",
      },
      {
        segments: [
          { text: "このスイッチが" },
          { text: "壊[こわ]れている", blank: true },
        ],
        notes: "この (this) + が particle",
      },
      {
        segments: [
          { text: "このスイッチは" },
          { text: "壊[こわ]れている", blank: true },
        ],
        notes: "この (this) + は particle",
      },
      {
        segments: [
          { text: "そのスイッチが" },
          { text: "壊[こわ]れている", blank: true },
        ],
        notes: "その (that) + が particle",
      },
      {
        segments: [
          { text: "そのスイッチは" },
          { text: "壊[こわ]れている", blank: true },
        ],
        notes: "その (that) + は particle",
      },
      {
        segments: [
          { text: "スイッチがもう" },
          { text: "壊[こわ]れている", blank: true },
        ],
        notes: "もう (already) added — the switch is already broken",
      },
      {
        segments: [
          { text: "スイッチはもう" },
          { text: "壊[こわ]れている", blank: true },
        ],
        notes: "は + もう — the switch is already broken (topicalized)",
      },
    ],
  },
  {
    english: "Kenji has already gone home.",
    hint: "Kenji = けんじ",
    answers: [
    ],
  },
];
