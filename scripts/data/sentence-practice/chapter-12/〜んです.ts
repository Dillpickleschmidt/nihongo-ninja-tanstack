import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I want to go to the party, but I have a lot of homework.",
    answers: [
      {
        segments: [
          { text: "パーティーに 行[い]きたい", blank: true },
          { text: "んですが" },
          { text: "、 宿題[しゅくだい]が たくさん " },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "パーティーに 行[い]きたい", blank: true },
          { text: "んですが" },
          { text: "、 宿題[しゅくだい]が たくさん ある" },
          { text: "ん" },
          { text: "です" },
        ],
        notes: "Both clauses use the explanatory pattern (〜んですが / 〜んです)",
      },
      {
        segments: [
          { text: "パーティーに 行[い]きたい", blank: true },
          { text: "んだけれど、 宿題[しゅくだい]が たくさん ある" },
        ],
        notes: "Casual: んだけれど (slightly more formal than けど, less than けれども)",
      },
      {
        segments: [
          { text: "パーティーに 行[い]きたい", blank: true },
          { text: "んだけれども、 宿題[しゅくだい]が たくさん ある" },
        ],
        notes: "Casual: んだけれども (most formal of the casual けど variants)",
      },
      {
        segments: [
          { text: "パーティーに 行[い]きたい", blank: true },
          { text: "のですが、 宿題[しゅくだい]が たくさん あります" },
        ],
      },
      {
        segments: [
          { text: "パーティーに 行[い]きたい", blank: true },
          { text: "のだけど、 宿題[しゅくだい]が たくさん ある" },
        ],
      },
      {
        segments: [
          { text: "パーティーに 行[い]きたい", blank: true },
          { text: "んだが、 宿題[しゅくだい]が たくさん ある" },
        ],
      },
    ],
  },
  {
    english: "I'm sorry — I actually don't eat meat.",
    answers: [
      {
        segments: [
          { text: "すみません、 肉[にく]を 食[た]べない", blank: true },
          { text: "ん" },
          { text: "です" },
        ],
        notes: "Core answer: すみません + 肉を食べない + んです. The blank covers the explanatory clause.",
      },
      {
        segments: [
          { text: "すみません、 肉[にく]を 食[た]べない", blank: true },
          { text: "の" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "肉[にく]を 食[た]べない", blank: true },
          { text: "んですが、すみません" },
        ],
      },
      {
        segments: [
          { text: "すみませんが、 肉[にく]を 食[た]べない", blank: true },
          { text: "ん" },
          { text: "です" },
        ],
        notes: "すみませんが leading into the explanation with んです",
      },
      {
        segments: [
          { text: "すみませんが、 肉[にく]を 食[た]べない", blank: true },
          { text: "の" },
          { text: "です" },
        ],
        notes: "すみませんが + のです variant",
      },
      {
        segments: [
          { text: "肉[にく]を 食[た]べない", blank: true },
          { text: "んですけど、すみません" },
        ],
      },
      {
        segments: [
          { text: "すみません、 実[じつ]は 肉[にく]を 食[た]べない", blank: true },
          { text: "ん" },
          { text: "です" },
        ],
        notes: "Adding 実は (actually/to be honest) for natural emphasis matching the English \"actually\"",
      },
      {
        segments: [
          { text: "すみません、 実[じつ]は 肉[にく]を 食[た]べない", blank: true },
          { text: "の" },
          { text: "です" },
        ],
        notes: "実は + のです variant",
      },
      {
        segments: [
          { text: "すみませんが、 実[じつ]は 肉[にく]を 食[た]べない", blank: true },
          { text: "ん" },
          { text: "です" },
        ],
        notes: "すみませんが + 実は + んです",
      },
      {
        segments: [
          { text: "すみませんが、 実[じつ]は 肉[にく]を 食[た]べない", blank: true },
          { text: "の" },
          { text: "です" },
        ],
        notes: "すみませんが + 実は + のです",
      },
      {
        segments: [
          { text: "実[じつ]は 肉[にく]を 食[た]べない", blank: true },
          { text: "んですが、すみません" },
        ],
        notes: "実は + んですが with apology after — natural explanation-first word order",
      },
      {
        segments: [
          { text: "実[じつ]は 肉[にく]を 食[た]べない", blank: true },
          { text: "のですが、すみません" },
        ],
        notes: "実は + のですが with apology after",
      },
      {
        segments: [
          { text: "実[じつ]は 肉[にく]を 食[た]べない", blank: true },
          { text: "んだけど、ごめんなさい" },
        ],
        notes: "Casual: 実は + んだけど + ごめんなさい",
      },
      {
        segments: [
          { text: "肉[にく]を 食[た]べない", blank: true },
          { text: "んだけど、ごめんなさい" },
        ],
        notes: "Casual without 実は: 肉を食べないんだけど + ごめんなさい",
      },
      {
        segments: [
          { text: "すみません、 肉[にく]は 食[た]べない", blank: true },
          { text: "ん" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "すみません、 実[じつ]は 肉[にく]は 食[た]べない", blank: true },
          { text: "ん" },
          { text: "です" },
        ],
        notes: "実は + 肉は (contrastive は) + んです",
      },
      {
        segments: [
          { text: "すみません、 実[じつ]は 肉[にく]は 食[た]べない", blank: true },
          { text: "の" },
          { text: "です" },
        ],
        notes: "実は + 肉は + のです",
      },
    ],
  },
  {
    english: "Actually, I borrowed Kenji's bicycle, but...",
    hint: "Trail off naturally — the second half is left unsaid. Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんの 自転車[じてんしゃ]を 借[か]りた", blank: true },
          { text: "んですが" },
          { text: "…" },
        ],
      },
      {
        segments: [
          { text: "けんじさんの 自転車[じてんしゃ]を 借[か]りた", blank: true },
          { text: "んだけどね…" },
        ],
        notes: "んだけどね — softened with ね, very natural spoken Japanese",
      },
      {
        segments: [
          { text: "けんじさんの 自転車[じてんしゃ]を 借[か]りた", blank: true },
          { text: "んだけれど…" },
        ],
        notes: "んだけれど — slightly more formal than けど",
      },
      {
        segments: [
          { text: "けんじさんの 自転車[じてんしゃ]を 借[か]りた", blank: true },
          { text: "んだけれども…" },
        ],
        notes: "んだけれども — more formal/complete form of けど",
      },
      {
        segments: [
          { text: "けんじさんの 自転車[じてんしゃ]を 借[か]りた", blank: true },
          { text: "んですけど…" },
        ],
        notes: "んですけど — polite with けど (slightly less formal than が)",
      },
      {
        segments: [
          { text: "けんじさんの 自転車[じてんしゃ]を 借[か]りた", blank: true },
          { text: "のですが…" },
        ],
        notes: "のですが — slightly more formal/stiff; の instead of ん",
      },
      {
        segments: [
          { text: "けんじさんの 自転車[じてんしゃ]を 借[か]りた", blank: true },
          { text: "のだけど…" },
        ],
        notes: "のだけど — の instead of ん, slightly more formal casual form",
      },
      {
        segments: [
          { text: "けんじさんの 自転車[じてんしゃ]を 借[か]りた", blank: true },
          { text: "んですけれど…" },
        ],
        notes: "んですけれど — polite with けれど (slightly more formal than けど)",
      },
    ],
  },
  {
    english: "I actually have a test tomorrow, but I haven't studied at all.",
    hint: "The \"actually\" signals んです giving an explanatory nuance.",
    answers: [
      {
        segments: [
          { text: "明日[あした]テストが" },
          { text: "ある", blank: true },
          { text: "んですが", blank: true },
          { text: "、全然[ぜんぜん]勉強[べんきょう]して" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "明日[あした]テストが" },
          { text: "あるんだけれど", blank: true },
          { text: "、全然[ぜんぜん]勉強[べんきょう]して" },
          { text: "いない", blank: true },
        ],
        notes: "んだけれど",
      },
      {
        segments: [
          { text: "明日[あした]テストが" },
          { text: "あるんだけれども", blank: true },
          { text: "、全然[ぜんぜん]勉強[べんきょう]して" },
          { text: "いない", blank: true },
        ],
        notes: "んだけれども",
      },
      {
        segments: [
          { text: "明日[あした]テストが" },
          { text: "あるのですが", blank: true },
          { text: "、全然[ぜんぜん]勉強[べんきょう]して" },
          { text: "いません", blank: true },
        ],
        notes: "のですが instead of んですが (slightly more formal)",
      },
      {
        segments: [
          { text: "明日[あした]テストが" },
          { text: "あるのだけど", blank: true },
          { text: "、全然[ぜんぜん]勉強[べんきょう]して" },
          { text: "いない", blank: true },
        ],
        notes: "のだけど (の instead of ん, casual)",
      },
      {
        segments: [
          { text: "明日[あした]はテストが" },
          { text: "ある", blank: true },
          { text: "んですが", blank: true },
          { text: "、全然[ぜんぜん]勉強[べんきょう]して" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "明日は as topic",
      },
      {
        segments: [
          { text: "明日[あした] 試験[しけん]が" },
          { text: "ある", blank: true },
          { text: "んですが", blank: true },
          { text: "、全然[ぜんぜん]勉強[べんきょう]して" },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "試験 instead of テスト",
      },
    ],
  },
  {
    english: "Actually, I'm a little hungry, but...",
    hint: "Trail off naturally — the second half is left unsaid (implied request or hesitation)",
    answers: [
      {
        segments: [
          { text: "ちょっと おなかが すいている", blank: true },
          { text: "んですが" },
          { text: "…" },
        ],
      },
      {
        segments: [
          { text: "少し[すこし] おなかが すいている", blank: true },
          { text: "んですが" },
          { text: "…" },
        ],
        notes: "少し instead of ちょっと",
      },
      {
        segments: [
          { text: "ちょっと おなかが すいている", blank: true },
          { text: "んですけど…" },
        ],
        notes: "んですけど — polite base with けど ending (softer than が)",
      },
      {
        segments: [
          { text: "少し[すこし] おなかが すいている", blank: true },
          { text: "んですけど…" },
        ],
        notes: "少し + んですけど",
      },
      {
        segments: [
          { text: "ちょっと おなかが すいている", blank: true },
          { text: "のですが…" },
        ],
        notes: "のですが — formal の variant instead of ん",
      },
      {
        segments: [
          { text: "ちょっと おなかが すいている", blank: true },
          { text: "のだけど…" },
        ],
        notes: "のだけど — formal の with casual けど",
      },
      {
        segments: [
          { text: "おなかが ちょっと すいている", blank: true },
          { text: "んですが" },
          { text: "…" },
        ],
        notes: "Word order: おなかが先, ちょっと後",
      },
      {
        segments: [
          { text: "おなかが 少し[すこし] すいている", blank: true },
          { text: "んですが…" },
        ],
        notes: "おなかが 少し order + んですが",
      },
      {
        segments: [
          { text: "ちょっと おなかは すいている", blank: true },
          { text: "んですが…" },
        ],
        notes: "おなかは (は instead of が, adds slight contrast nuance) + んですが",
      },
      {
        segments: [
          { text: "ちょっと おなかが すいている", blank: true },
          { text: "んだけれど…" },
        ],
        notes: "んだけれど — slightly more formal than んだけど",
      },
      {
        segments: [
          { text: "ちょっと おなかが すいている", blank: true },
          { text: "んですけれど…" },
        ],
        notes: "んですけれど — polite base with けれど ending",
      },
    ],
  },
  {
    english: "Actually, I have a part-time job on Saturday, but...",
    hint: "Leave the sentence trailing off — the implication is unsaid",
    answers: [
      {
        segments: [
          { text: "土曜日[どようび]に アルバイトがある" },
          { text: "んですが", blank: true },
          { text: "…" },
        ],
        notes: "Base variation: に particle, trailing off",
      },
      {
        segments: [
          { text: "土曜日[どようび]は アルバイトがある" },
          { text: "んですが", blank: true },
          { text: "…" },
        ],
        notes: "は instead of に (topic-marking Saturday)",
      },
      {
        segments: [
          { text: "土曜日[どようび]に アルバイトがある" },
          { text: "んですけど…", blank: true },
        ],
        notes: "んですけど instead of んですが (softer/more casual polite)",
      },
      {
        segments: [
          { text: "土曜日[どようび]に アルバイトがある" },
          { text: "んですけれど…", blank: true },
        ],
        notes: "んですけれど (more formal polite trailing form)",
      },
      {
        segments: [
          { text: "土曜日[どようび]に アルバイトがある" },
          { text: "のですが…", blank: true },
        ],
        notes: "のですが instead of んですが (slightly more formal/stiff)",
      },
      {
        segments: [
          { text: "土曜日[どようび]に アルバイトがある" },
          { text: "んだけれど…", blank: true },
        ],
        notes: "んだけれど (casual, slightly more formal than けど)",
      },
      {
        segments: [
          { text: "土曜日[どようび]は アルバイトがある" },
          { text: "んですけど…", blank: true },
        ],
        notes: "は particle + んですけど",
      },
    ],
  },
  {
    english: "I'm going to the park on Sunday, but do you want to come, Saki?",
    hint: "Saki = さき",
    answers: [
      {
        segments: [
          { text: "日曜日[にちようび]に 公園[こうえん]に 行[い]く", blank: true },
          { text: "んですが" },
          { text: "、さきさんも" },
          { text: "来[き]ませんか" },
        ],
      },
      {
        segments: [
          { text: "日曜日[にちようび]に 公園[こうえん]に 行[い]く", blank: true },
          { text: "んだけれど、さきさんも" },
          { text: "来[き]ませんか" },
        ],
        notes: "んだけれど variant",
      },
      {
        segments: [
          { text: "日曜日[にちようび]に 公園[こうえん]に 行[い]く", blank: true },
          { text: "んだけれども、さきさんも" },
          { text: "来[き]ませんか" },
        ],
        notes: "んだけれども variant (more formal)",
      },
      {
        segments: [
          { text: "日曜日[にちようび]に 公園[こうえん]に 行[い]く", blank: true },
          { text: "のですが、さきさんも" },
          { text: "来[き]ませんか" },
        ],
        notes: "のですが variant (slightly more formal/stiff than んですが)",
      },
      {
        segments: [
          { text: "日曜日[にちようび]に 公園[こうえん]に 行[い]く", blank: true },
          { text: "のだけど、さきさんも" },
          { text: "来[き]ませんか" },
        ],
        notes: "のだけど variant",
      },
      {
        segments: [
          { text: "日曜日[にちようび]に 公園[こうえん]に 行[い]く", blank: true },
          { text: "んですが" },
          { text: "、さきさんも 一緒[いっしょ]に" },
          { text: "来[き]ませんか" },
        ],
        notes: "〜んですが with 一緒に来ませんか (come together)",
      },
      {
        segments: [
          { text: "さきさん、日曜日[にちようび]に 公園[こうえん]に 行[い]く", blank: true },
          { text: "んですが" },
          { text: "、一緒[いっしょ]に" },
          { text: "来[き]ませんか" },
        ],
        notes: "さきさん addressed at the start; with 一緒に",
      },
      {
        segments: [
          { text: "さきさん、日曜日[にちようび]に 公園[こうえん]に 行[い]く", blank: true },
          { text: "んですが、さきさんも" },
          { text: "来[き]ませんか" },
        ],
        notes: "さきさん both at start (address) and mid-sentence with も",
      },
    ],
  },
  {
    english: "Are you going on a trip, Daiki?",
    hint: "Daiki = だいき — use んですか to seek an explanation for what you're observing",
    answers: [
      {
        segments: [
          { text: "だいきさん、旅行[りょこう]に" },
          { text: "行[い]くんですか", blank: true },
        ],
      },
      {
        segments: [
          { text: "旅行[りょこう]に" },
          { text: "行[い]くんですか", blank: true },
          { text: "、だいきさん" },
        ],
        notes: "だいきさん moved to end of sentence",
      },
      {
        segments: [
          { text: "だいきさん、" },
          { text: "旅行[りょこう]するんですか", blank: true },
        ],
      },
      {
        segments: [
          { text: "旅行[りょこう]するんですか、だいきさん", blank: true },
        ],
        notes: "旅行する + んですか with だいきさん at end",
      },
      {
        segments: [
          { text: "だいきさん、旅行[りょこう]に" },
          { text: "行[い]くのですか", blank: true },
        ],
      },
      {
        segments: [
          { text: "だいきさん、" },
          { text: "旅行[りょこう]するのですか", blank: true },
        ],
        notes: "旅行する + のですか (more formal)",
      },
      {
        segments: [
          { text: "だいきさんは、旅行[りょこう]に" },
          { text: "行[い]くんですか", blank: true },
        ],
        notes: "だいきさんは as topic with は particle",
      },
      {
        segments: [
          { text: "だいきさんは、" },
          { text: "旅行[りょこう]するんですか", blank: true },
        ],
        notes: "だいきさんは as topic + 旅行する",
      },
    ],
  },
  {
    english: "Actually, I lost my wallet, but...",
    hint: "Trail off after \"but\" — the (B) part is intentionally left unsaid",
    answers: [
      {
        segments: [
          { text: "財布[さいふ]を なくしたんですが…", blank: true },
        ],
        notes: "Most natural polite form: んですが trailing off",
      },
      {
        segments: [
          { text: "財布[さいふ]を なくしたんだけど…", blank: true },
        ],
        notes: "Casual form: んだけど trailing off",
      },
      {
        segments: [
          { text: "財布[さいふ]を なくしたんだけれど…", blank: true },
        ],
        notes: "Slightly more formal casual: んだけれど",
      },
      {
        segments: [
          { text: "財布[さいふ]を なくしたんだけれども…", blank: true },
        ],
        notes: "More formal casual: んだけれども",
      },
      {
        segments: [
          { text: "財布[さいふ]を なくしたのですが…", blank: true },
        ],
      },
      {
        segments: [
          { text: "財布[さいふ]を なくしたのだけど…", blank: true },
        ],
        notes: "の + だけど (formal-leaning casual): のだけど",
      },
      {
        segments: [
          { text: "財布[さいふ]を なくしたのだけれど…", blank: true },
        ],
        notes: "の + だけれど: のだけれど",
      },
      {
        segments: [
          { text: "財布[さいふ]を なくしたのだけれども…", blank: true },
        ],
        notes: "の + だけれども: のだけれども",
      },
    ],
  },
  {
    english: "Actually, this movie is really scary!",
    answers: [
      {
        segments: [
          { text: "この 映画[えいが]、本当[ほんとう]に 怖[こわ]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "Base answer: この映画 (no particle) + 本当に + 怖い + んです",
      },
      {
        segments: [
          { text: "この 映画[えいが]、すごく 怖[こわ]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "すごく instead of 本当に",
      },
      {
        segments: [
          { text: "この 映画[えいが]、とても 怖[こわ]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "とても instead of 本当に/すごく",
      },
      {
        segments: [
          { text: "この 映画[えいが]、本当[ほんとう]に 怖[こわ]い" },
          { text: "の", blank: true },
          { text: "です", blank: true },
        ],
        notes: "のです instead of んです (slightly more formal/written)",
      },
      {
        segments: [
          { text: "この 映画[えいが]、すごく 怖[こわ]い" },
          { text: "の", blank: true },
          { text: "です", blank: true },
        ],
        notes: "すごく + のです",
      },
      {
        segments: [
          { text: "この 映画[えいが]、とても 怖[こわ]い" },
          { text: "の", blank: true },
          { text: "です", blank: true },
        ],
        notes: "とても + のです",
      },
      {
        segments: [
          { text: "この 映画[えいが]は 本当[ほんとう]に 怖[こわ]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "この映画は (topic marker は) + 本当に + んです",
      },
      {
        segments: [
          { text: "この 映画[えいが]は すごく 怖[こわ]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "この映画は + すごく + んです",
      },
      {
        segments: [
          { text: "この 映画[えいが]は とても 怖[こわ]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "この映画は + とても + んです",
      },
      {
        segments: [
          { text: "この 映画[えいが]が 本当[ほんとう]に 怖[こわ]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "この映画が (subject marker が) + 本当に + んです",
      },
      {
        segments: [
          { text: "この 映画[えいが]が すごく 怖[こわ]い" },
          { text: "ん", blank: true },
          { text: "です", blank: true },
        ],
        notes: "この映画が + すごく + んです",
      },
    ],
  },
  {
    english: "I'm actually tired, but is it okay if I rest for a bit?",
    answers: [
      {
        segments: [
          { text: "疲[つか]れている", blank: true },
          { text: "んですが" },
          { text: "、ちょっと 休[やす]んでも いい" },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Base form: 〜んですが connector, ちょっと休んでもいいですか for the request. 疲れている is plain text (subordinate clause).",
      },
      {
        segments: [
          { text: "疲[つか]れている", blank: true },
          { text: "んですが" },
          { text: "、少[すこ]し 休[やす]んでも いい" },
          { text: "です" },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "疲[つか]れている", blank: true },
          { text: "んですが" },
          { text: "、ちょっと 休[やす]んでも かまわない" },
          { text: "です" },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "疲[つか]れている", blank: true },
          { text: "のですが、ちょっと 休[やす]んでも いい" },
          { text: "です" },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "疲[つか]れた", blank: true },
          { text: "んですが" },
          { text: "、ちょっと 休[やす]んでも いい" },
          { text: "です" },
          { text: "か" },
        ],
        notes: "疲れた (plain past) as the subordinate clause",
      },
      {
        segments: [
          { text: "疲[つか]れている", blank: true },
          { text: "んだけれど、ちょっと 休[やす]んでも いい" },
          { text: "です" },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "疲[つか]れている", blank: true },
          { text: "のだけど、ちょっと 休[やす]んでも いい" },
          { text: "です" },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "疲[つか]れている", blank: true },
          { text: "んだけれど、少[すこ]し 休[やす]んでも いい" },
          { text: "です" },
          { text: "か" },
        ],
        notes: "んだけれど + 少し休んでもいいですか",
      },
      {
        segments: [
          { text: "疲[つか]れている", blank: true },
          { text: "のですが、少[すこ]し 休[やす]んでも いい" },
          { text: "です" },
          { text: "か" },
        ],
        notes: "のですが + 少し休んでもいいですか",
      },
    ],
  },
  {
    english: "Actually, Hana and her boyfriend just broke up.",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "はなさんと 彼氏[かれし]さんが さっき 別[わか]れた", blank: true },
          { text: "ん" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "はなさんと 彼氏[かれし]さんが さっき 別[わか]れた", blank: true },
          { text: "の" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "はなさんと 彼氏[かれし]さんが もう 別[わか]れた", blank: true },
          { text: "ん" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "はなさんと 彼氏[かれし]さんが もう 別[わか]れた", blank: true },
          { text: "の" },
          { text: "です" },
        ],
        notes: "もう + のです form",
      },
      {
        segments: [
          { text: "はなさんと 彼氏[かれし]さんが 別[わか]れた", blank: true },
          { text: "ん" },
          { text: "です" },
        ],
        notes: "Without time adverb — \"actually broke up\" with んです for emphasis",
      },
      {
        segments: [
          { text: "はなさんと 彼氏[かれし]さんが 別[わか]れた", blank: true },
          { text: "の" },
          { text: "です" },
        ],
        notes: "Without time adverb + のです form",
      },
      {
        segments: [
          { text: "はなさんは 彼氏[かれし]さんと さっき 別[わか]れた", blank: true },
          { text: "ん" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "はなさんは 彼氏[かれし]さんと もう 別[わか]れた", blank: true },
          { text: "ん" },
          { text: "です" },
        ],
        notes: "は to topic-mark Hana + もう",
      },
      {
        segments: [
          { text: "はなさんは 彼氏[かれし]さんと 別[わか]れた", blank: true },
          { text: "ん" },
          { text: "です" },
        ],
        notes: "は to topic-mark Hana, no time adverb",
      },
      {
        segments: [
          { text: "はなさんと 彼[かれ]が さっき 別[わか]れた", blank: true },
          { text: "ん" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "はなさんと 彼[かれ]が もう 別[わか]れた", blank: true },
          { text: "ん" },
          { text: "です" },
        ],
        notes: "彼 + もう + んです",
      },
    ],
  },
  {
    english: "Excuse me — I'm actually looking for the library, but could you tell me where it is?",
    hint: "The \"I'm looking for the library, but...\" clause should use んですが or んだけど to set up the implicit request.",
    answers: [
      {
        segments: [
          { text: "すみません、図書館[としょかん]を" },
          { text: "探[さが]している", blank: true },
          { text: "んですが、どこにあるか 教[おし]えていただけますか" },
        ],
        notes: "Core answer: ている (searching) + んですが + polite request to be told where it is",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]を" },
          { text: "探[さが]している", blank: true },
          { text: "んですが" },
          { text: "、どこにありますか" },
        ],
        notes: "Simpler ending: just asking どこにありますか directly",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]を" },
          { text: "探[さが]している", blank: true },
          { text: "んだけど、どこにあるか 教[おし]えてもらえますか" },
        ],
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]を" },
          { text: "探[さが]している", blank: true },
          { text: "んですが" },
          { text: "…" },
        ],
        notes: "Trailing off with んですが… (implicit request, leaving the second clause unsaid)",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]を" },
          { text: "探[さが]している", blank: true },
          { text: "んですが、図書館[としょかん]はどこですか" },
        ],
        notes: "Ending with 図書館はどこですか (asking directly where the library is)",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]に" },
          { text: "行[い]きたい", blank: true },
          { text: "んですが、どこにあるか 教[おし]えていただけますか" },
        ],
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]に" },
          { text: "行[い]きたい", blank: true },
          { text: "んですが、どこにありますか" },
        ],
        notes: "行きたい + んですが + simpler どこにありますか",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]に" },
          { text: "行[い]きたい", blank: true },
          { text: "んだけど、どこにあるか 教[おし]えてもらえますか" },
        ],
        notes: "行きたい + んだけど + もらえますか request",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]を" },
          { text: "探[さが]している", blank: true },
          { text: "んですが、図書館[としょかん]はどこか 教[おし]えていただけますか" },
        ],
        notes: "Asking 図書館はどこか教えていただけますか (where is the library, could you tell me)",
      },
      {
        segments: [
          { text: "すみません、図書館[としょかん]を" },
          { text: "探[さが]している", blank: true },
          { text: "んですが、教[おし]えてもらえますか" },
        ],
        notes: "Shorter ending: んですが、教えてもらえますか (without restating location)",
      },
    ],
  },
  {
    english: "Actually, I'm really into karaoke!",
    answers: [
      {
        segments: [
          { text: "カラオケが" },
          { text: "大好[だいす]きなんです", blank: true },
        ],
        notes: "Core variation: カラオケが大好きなんです — な-adjective + な + んです, strong assertion.",
      },
      {
        segments: [
          { text: "カラオケが" },
          { text: "大好[だいす]きなのです", blank: true },
        ],
      },
      {
        segments: [
          { text: "カラオケは" },
          { text: "大好[だいす]きなんです", blank: true },
        ],
      },
      {
        segments: [
          { text: "カラオケは" },
          { text: "大好[だいす]きなのです", blank: true },
        ],
        notes: "は particle + のです (formal) variant.",
      },
      {
        segments: [
          { text: "カラオケが すごく" },
          { text: "好[す]きなんです", blank: true },
        ],
      },
      {
        segments: [
          { text: "カラオケが すごく" },
          { text: "好[す]きなのです", blank: true },
        ],
        notes: "すごく好き + のです (formal) variant.",
      },
      {
        segments: [
          { text: "実[じつ]は、カラオケが" },
          { text: "大好[だいす]きなんです", blank: true },
        ],
        notes: "Adding 実は (actually/to tell the truth) at the start for the \"actually\" nuance.",
      },
      {
        segments: [
          { text: "実[じつ]は、カラオケが" },
          { text: "大好[だいす]きなのです", blank: true },
        ],
        notes: "実は + カラオケが大好きなのです (formal のです).",
      },
      {
        segments: [
          { text: "実[じつ]は、カラオケが すごく" },
          { text: "好[す]きなんです", blank: true },
        ],
        notes: "実は + すごく好き + んです.",
      },
      {
        segments: [
          { text: "カラオケが" },
          { text: "大好[だいす]きなんですよ", blank: true },
        ],
        notes: "Adding よ particle for extra enthusiasm — んですよ.",
      },
      {
        segments: [
          { text: "カラオケは" },
          { text: "大好[だいす]きなんですよ", blank: true },
        ],
        notes: "は particle + んですよ variant.",
      },
      {
        segments: [
          { text: "実[じつ]は、カラオケが" },
          { text: "大好[だいす]きなんですよ", blank: true },
        ],
        notes: "実は + が + んですよ for enthusiastic \"actually\" assertion.",
      },
    ],
  },
  {
    english: "Actually, the dormitory is really cramped, but...",
    hint: "Trail off with \"but...\" to imply an unspoken follow-up",
    answers: [
      {
        segments: [
          { text: "寮[りょう]は 本当[ほんとう]に 狭[せま]い", blank: true },
          { text: "んですが" },
          { text: "…" },
        ],
      },
      {
        segments: [
          { text: "寮[りょう]は 本当[ほんとう]に 狭[せま]い", blank: true },
          { text: "んだけれど…" },
        ],
        notes: "Casual variant: んだけれど",
      },
      {
        segments: [
          { text: "寮[りょう]は 本当[ほんとう]に 狭[せま]い", blank: true },
          { text: "んだけれども…" },
        ],
        notes: "Casual variant: んだけれども",
      },
      {
        segments: [
          { text: "寮[りょう]は 本当[ほんとう]に 狭[せま]い", blank: true },
          { text: "のですが…" },
        ],
        notes: "Slightly more formal: のですが instead of んですが",
      },
      {
        segments: [
          { text: "寮[りょう]は 本当[ほんとう]に 狭[せま]い", blank: true },
          { text: "のだけど…" },
        ],
        notes: "Formal base + casual conjunction: のだけど",
      },
      {
        segments: [
          { text: "寮[りょう]は 本当[ほんとう]に 狭[せま]い", blank: true },
          { text: "んですけど…" },
        ],
        notes: "Polite + casual conjunction blend: んですけど",
      },
      {
        segments: [
          { text: "寮[りょう]は すごく 狭[せま]い", blank: true },
          { text: "んですが" },
          { text: "…" },
        ],
        notes: "すごく instead of 本当に as the intensifier",
      },
      {
        segments: [
          { text: "寮[りょう]は すごく 狭[せま]い", blank: true },
          { text: "んですけど…" },
        ],
        notes: "すごく intensifier, polite-casual blend: んですけど",
      },
      {
        segments: [
          { text: "寮[りょう]は とても 狭[せま]い", blank: true },
          { text: "んですが" },
          { text: "…" },
        ],
        notes: "とても as the intensifier instead",
      },
    ],
  },
  {
    english: "Rin, do you have a fever?",
    hint: "Rin = りん; express this as seeking an explanation, not just a simple question",
    answers: [
      {
        segments: [
          { text: "りんさん、熱[ねつ]が" },
          { text: "ある", blank: true },
          { text: "んですか" },
        ],
      },
      {
        segments: [
          { text: "りんさん、熱[ねつ]が" },
          { text: "ある", blank: true },
          { text: "のですか" },
        ],
      },
      {
        segments: [
          { text: "りんさん、熱[ねつ]が" },
          { text: "ある", blank: true },
          { text: "んですが" },
        ],
      },
      {
        segments: [
          { text: "りんさん、熱[ねつ]が" },
          { text: "ある", blank: true },
          { text: "んですかね" },
        ],
        notes: "Adding ね after か — softer, seeking gentle confirmation",
      },
      {
        segments: [
          { text: "りんさん、熱[ねつ]が" },
          { text: "ある", blank: true },
          { text: "のですかね" },
        ],
        notes: "のですかね — formal version with gentle ね",
      },
      {
        segments: [
          { text: "りんさん、熱[ねつ]が" },
          { text: "ある", blank: true },
          { text: "んだけれど" },
        ],
      },
      {
        segments: [
          { text: "りんさん、熱[ねつ]が" },
          { text: "ある", blank: true },
          { text: "んだけれども" },
        ],
      },
      {
        segments: [
          { text: "りんさん、熱[ねつ]が" },
          { text: "ある", blank: true },
          { text: "のだけど" },
        ],
      },
    ],
  },
  {
    english: "Actually, I want to use Yuki's dictionary, but...",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "ゆきさんの 辞書[じしょ]を" },
          { text: "使[つか]いたいんですが", blank: true },
          { text: "…" },
        ],
      },
      {
        segments: [
          { text: "ゆきさんの 辞書[じしょ]を" },
          { text: "使[つか]いたいんだけど", blank: true },
          { text: "…" },
        ],
      },
      {
        segments: [
          { text: "ゆきさんの 辞書[じしょ]を" },
          { text: "使[つか]いたいんだけれど", blank: true },
          { text: "…" },
        ],
      },
      {
        segments: [
          { text: "ゆきさんの 辞書[じしょ]を" },
          { text: "使[つか]いたいんだけれども", blank: true },
          { text: "…" },
        ],
      },
      {
        segments: [
          { text: "ゆきさんの 辞書[じしょ]を" },
          { text: "使[つか]いたいのですが", blank: true },
          { text: "…" },
        ],
      },
      {
        segments: [
          { text: "ゆきさんの 辞書[じしょ]を" },
          { text: "使[つか]いたいのだけど", blank: true },
          { text: "…" },
        ],
      },
      {
        segments: [
          { text: "ゆきさんの 辞書[じしょ]を" },
          { text: "使[つか]いたいのだけれど", blank: true },
          { text: "…" },
        ],
      },
      {
        segments: [
          { text: "ゆきさんの 辞書[じしょ]を" },
          { text: "使[つか]いたいのだけれども", blank: true },
          { text: "…" },
        ],
      },
    ],
  },
  {
    english: "Actually, I want to buy a new camera, but I don't have enough money.",
    answers: [
      {
        segments: [
          { text: "新[あたら]しいカメラを 買[か]いたい", blank: true },
          { text: "んですが" },
          { text: "、全然[ぜんぜん] お金[おかね]が" },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "新[あたら]しいカメラを 買[か]いたい", blank: true },
          { text: "んですが" },
          { text: "、お金[おかね]が 全然[ぜんぜん]" },
          { text: "ある", blank: true, conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "negative", tense: "non-past" } },
        ],
        notes: "Word order: お金が全然 instead of 全然 お金が",
      },
      {
        segments: [
          { text: "新[あたら]しいカメラを 買[か]いたい", blank: true },
          { text: "んですけど、全然[ぜんぜん] お金[おかね]が" },
          { text: "ありません", blank: true },
        ],
        notes: "Polite form with んですけど instead of んですが",
      },
      {
        segments: [
          { text: "新[あたら]しいカメラを 買[か]いたい", blank: true },
          { text: "んですが" },
          { text: "、全然[ぜんぜん] お金[おかね]が ない" },
          { text: "ん" },
          { text: "です" },
        ],
        notes: "Both clauses use the explanatory pattern — emphasizing both the want and the lack of money",
      },
      {
        segments: [
          { text: "新[あたら]しいカメラを 買[か]いたい", blank: true },
          { text: "のですが、全然[ぜんぜん] お金[おかの]が" },
          { text: "ありません", blank: true },
        ],
      },
      {
        segments: [
          { text: "新[あたら]しいカメラを 買[か]いたい", blank: true },
          { text: "んだけれど、全然[ぜんぜん] お金[おかね]が" },
          { text: "ない", blank: true },
        ],
      },
      {
        segments: [
          { text: "新[あたら]しいカメラを 買[か]いたい", blank: true },
          { text: "んだけれども、全然[ぜんぜん] お金[おかね]が" },
          { text: "ない", blank: true },
        ],
      },
      {
        segments: [
          { text: "新[あたら]しいカメラを 買[か]いたい", blank: true },
          { text: "んですけれど、全然[ぜんぜん] お金[おかね]が" },
          { text: "ありません", blank: true },
        ],
        notes: "Polite: んですけれど",
      },
      {
        segments: [
          { text: "新[あたら]しいカメラを 買[か]いたい", blank: true },
          { text: "んですけれども、全然[ぜんぜん] お金[おかね]が" },
          { text: "ありません", blank: true },
        ],
        notes: "Polite: んですけれども (most formal polite variant)",
      },
    ],
  },
  {
    english: "Actually, Kenji is a firefighter!",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは 消防士[しょうぼうし]" },
          { text: "な", blank: true },
          { text: "ん" },
          { text: "です" },
        ],
        notes: "Noun + な + んです",
      },
      {
        segments: [
          { text: "けんじさんは 消防士[しょうぼうし]" },
          { text: "な", blank: true },
          { text: "の" },
          { text: "です" },
        ],
        notes: "Noun + な + のです",
      },
      {
        segments: [
          { text: "けんじさんが 消防士[しょうぼうし]" },
          { text: "な", blank: true },
          { text: "ん" },
          { text: "です" },
        ],
        notes: "が particle instead of は",
      },
      {
        segments: [
          { text: "けんじさんが 消防士[しょうぼうし]" },
          { text: "な", blank: true },
          { text: "の" },
          { text: "です" },
        ],
        notes: "が + のです",
      },
      {
        segments: [
          { text: "けんじさんは 消防士[しょうぼうし]" },
          { text: "な", blank: true },
          { text: "ん" },
          { text: "です" },
          { text: "よ" },
        ],
        notes: "Adding よ for emphasis/exclamation",
      },
      {
        segments: [
          { text: "けんじさんが 消防士[しょうぼうし]" },
          { text: "な", blank: true },
          { text: "ん" },
          { text: "です" },
          { text: "よ" },
        ],
        notes: "が + んです + よ for emphasis",
      },
    ],
  },
  {
    english: "Actually, I want to go to the concert, but I don't have a ticket.",
    answers: [
    ],
  },
];
