import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I'm sorry for forgetting your birthday.",
    answers: [
      {
        segments: [
          { text: "誕生日[たんじょうび]を" },
          { text: "忘[わす]れてすみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "お誕生日[たんじょうび]を" },
          { text: "忘[わす]れてすみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "あなたの 誕生日[たんじょうび]を" },
          { text: "忘[わす]れてすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Explicitly includes あなたの (\"your\") to match the English prompt more directly.",
      },
      {
        segments: [
          { text: "あなたの お誕生日[たんじょうび]を" },
          { text: "忘[わす]れてすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Combines explicit あなたの with honorific お誕生日.",
      },
      {
        segments: [
          { text: "誕生日[たんじょうび]を" },
          { text: "忘[わす]れてしまってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "〜てしまって for added \"regret\" nuance",
      },
    ],
  },
  {
    english: "I'm sorry for coming home so late last night.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、こんなに 遅[おそ]く 帰[かえ]ってすみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "昨夜[さくや]、こんなに 遅[おそ]く 帰[かえ]ってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "昨夜 (さくや) as a synonym for \"last night\"",
      },
      {
        segments: [
          { text: "昨晩[さくばん]、こんなに 遅[おそ]く 帰[かえ]ってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "昨晩 (さくばん) as another synonym for \"last night\"",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、こんな 遅[おそ]い 時間[じかん]に 帰[かえ]ってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "こんな遅い時間に for \"at such a late hour\" instead of こんなに遅く",
      },
      {
        segments: [
          { text: "昨夜[さくや]、こんな 遅[おそ]い 時間[じかん]に 帰[かえ]ってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "昨夜 + こんな遅い時間に combination",
      },
      {
        segments: [
          { text: "昨晩[さくばん]、こんな 遅[おそ]い 時間[じかん]に 帰[かえ]ってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "昨晩 + こんな遅い時間に combination",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、帰[かえ]りが 遅[おそ]くなってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "帰りが遅くなって — \"my return became late\" — a very natural phrasing in Japanese",
      },
      {
        segments: [
          { text: "昨夜[さくや]、帰[かえ]りが 遅[おそ]くなってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "昨夜 + 帰りが遅くなって combination",
      },
      {
        segments: [
          { text: "昨晩[さくばん]、帰[かえ]りが 遅[おそ]くなってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "昨晩 + 帰りが遅くなって combination",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、こんなに 遅[おそ]く 家[いえ]に 帰[かえ]ってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "家に帰って — explicitly saying \"came home to the house\"",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、こんなに 遅[おそ]く うちに 帰[かえ]ってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "うちに帰って — \"came home\" using うち (my place)",
      },
    ],
  },
  {
    english: "I'm sorry for eating your lunch.",
    answers: [
      {
        segments: [
          { text: "お 昼[ひる]ご 飯[はん]を 食[た]べてすみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "お 弁当[べんとう]を 食[た]べてすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Using お弁当 (boxed lunch) instead of お昼ご飯 — more specific, common for packed lunches",
      },
      {
        segments: [
          { text: "あなたの 昼[ひる]ご 飯[はん]を 食[た]べてすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Explicitly using あなたの to mark possession (\"your lunch\")",
      },
      {
        segments: [
          { text: "あなたの お 弁当[べんとう]を 食[た]べてすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Explicitly using あなたの + お弁当",
      },
      {
        segments: [
          { text: "昼[ひる]ご 飯[はん]を 食[た]べてすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Without お prefix — slightly less formal but still natural",
      },
      {
        segments: [
          { text: "あなたの お 弁当[べんとう]を 食[た]べてしまって、すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "〜てしまって for added regret nuance + お弁当 + あなたの",
      },
    ],
  },
  {
    english: "I'm sorry for using your computer right before the presentation.",
    hint: "presentation = 発表 (はっぴょう)",
    answers: [
      {
        segments: [
          { text: "発表[はっぴょう]の 前[まえ]に パソコンを" },
          { text: "使[つか]って すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Most natural: パソコン (common word for personal computer), を, 使って + すみませんでした",
      },
      {
        segments: [
          { text: "発表[はっぴょう]の 前[まえ]に コンピューターを" },
          { text: "使[つか]って すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Using コンピューター instead of パソコン",
      },
      {
        segments: [
          { text: "発表[はっぴょう]の 前[まえ]に あなたの パソコンを" },
          { text: "使[つか]って すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Explicitly stating あなたの (your) to match \"your computer\"",
      },
      {
        segments: [
          { text: "発表[はっぴょう]の 前[まえ]に あなたの コンピューターを" },
          { text: "使[つか]って すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Explicit あなたの + コンピューター",
      },
    ],
  },
  {
    english: "I'm sorry for calling so late at night.",
    answers: [
      {
        segments: [
          { text: "夜[よる]遅[おそ]く 電話[でんわ]してすみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "こんなに 遅[おそ]い 時間[じかん]に 電話[でんわ]してすみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "こんなに 夜[よる] 遅[おそ]く 電話[でんわ]してすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "こんなに夜遅く — adverb placement with こんなに before 夜遅く",
      },
      {
        segments: [
          { text: "夜[よる] こんなに 遅[おそ]く 電話[でんわ]してすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "夜 comes first, then こんなに遅く — slightly different word order",
      },
      {
        segments: [
          { text: "夜[よる]遅[おそ]く 電話[でんわ]を かけてすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Using 電話をかける instead of 電話する — more specific \"to place a call\"",
      },
      {
        segments: [
          { text: "こんなに 遅[おそ]い 時間[じかん]に 電話[でんわ]を かけてすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "こんなに遅い時間に + 電話をかける",
      },
    ],
  },
  {
    english: "I'm sorry for leaving so much food on my plate.",
    answers: [
      {
        segments: [
          { text: "ご 飯[はん]をたくさん" },
          { text: "残[のこ]してすみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "食[た]べ 物[もの]をたくさん" },
          { text: "残[のこ]してすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Using 食べ物 (food) instead of ご飯",
      },
      {
        segments: [
          { text: "お 爵[さら]にご 飯[はん]をたくさん" },
          { text: "残[のこ]してすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Specifying \"on my plate\" with お皿に",
      },
      {
        segments: [
          { text: "こんなにたくさんご 飯[はん]を" },
          { text: "残[のこ]してすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Using こんなに (so much/this much) instead of たくさん",
      },
      {
        segments: [
          { text: "お 爵[さら]に食[た]べ 物[もの]をたくさん" },
          { text: "残[のこ]してすみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "お 爵[さら]にこんなにたくさんご 飯[はん]を" },
          { text: "残[のこ]してすみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "たくさんのご 飯[はん]を" },
          { text: "残[のこ]してすみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "こんなにたくさん食[た]べ 物[もの]を" },
          { text: "残[のこ]してすみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "こんなに" },
          { text: "残[のこ]してしまってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "〜てしまって for added regret nuance + ません (no past)",
      },
    ],
  },
  {
    english: "I'm sorry for waking you up so early.",
    answers: [
      {
        segments: [
          { text: "こんなに 早[はや]く 起[お]こしてすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "With こんなに早く (so early like this).",
      },
      {
        segments: [
          { text: "そんなに 早[はや]く 起[お]こしてすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "With そんなに早く (so early like that) instead of こんなに",
      },
      {
        segments: [
          { text: "朝[あさ]早[はや]く 起[お]こしてすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "With 朝早く (early in the morning) instead of こんなに早く",
      },
      {
        segments: [
          { text: "こんなに 朝[あさ]早[はや]く 起[お]こしてすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Combining こんなに and 朝早く for emphasis: \"so early in the morning\"",
      },
      {
        segments: [
          { text: "早[はや]い 時間[じかん]に 起[お]こしてすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Using 早い時間に (at an early hour) instead of 早く as an adverb",
      },
      {
        segments: [
          { text: "こんなに 早[はや]く" },
          { text: "起[お]こしてしまってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "〜てしまって for regret nuance",
      },
    ],
  },
  {
    english: "I'm sorry for talking so much during the movie.",
    answers: [
      {
        segments: [
          { text: "映画[えいが]の 間[あいだ]、たくさん" },
          { text: "話[はな]してすみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "映画[えいが]の 間[あいだ]、たくさん" },
          { text: "しゃべってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Using しゃべる (to chat/talk) instead of 話す",
      },
      {
        segments: [
          { text: "映画[えいが]中[ちゅう]に、たくさん" },
          { text: "話[はな]してすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "映画中に (during the movie) instead of 映画の間",
      },
      {
        segments: [
          { text: "映画[えいが]中[ちゅう]に、たくさん" },
          { text: "しゃべってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "映画中に + しゃべる",
      },
      {
        segments: [
          { text: "映画[えいが]の 間[あいだ]、いっぱい" },
          { text: "話[はな]してすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Using いっぱい (a lot) instead of たくさん",
      },
      {
        segments: [
          { text: "映画[えいが]の 間[あいだ]、あんなに" },
          { text: "話[はな]してすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Using あんなに (so much/that much) instead of たくさん",
      },
      {
        segments: [
          { text: "映画[えいが]中[ちゅう]に、あんなに" },
          { text: "話[はな]してすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "映画中に + あんなに + 話す",
      },
      {
        segments: [
          { text: "映画[えいが]中[ちゅう]に、あんなに" },
          { text: "しゃべってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "映画中に + あんなに + しゃべる",
      },
      {
        segments: [
          { text: "映画[えいが]中[ちゅう]に、いっぱい" },
          { text: "しゃべってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "映画中に + いっぱい + しゃべる",
      },
      {
        segments: [
          { text: "映画[えいが]の 間[あいだ]、いっぱい" },
          { text: "しゃべってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "映画の間 + いっぱい + しゃべる",
      },
    ],
  },
  {
    english: "I'm sorry for losing the map you lent me.",
    answers: [
      {
        segments: [
          { text: "借[か]りた 地図[ちず]をなくして すみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "貸[か]してもらった 地図[ちず]をなくして すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "貸してもらった地図 emphasizes that someone lent the map to the speaker.",
      },
      {
        segments: [
          { text: "地図[ちず]を なくしてすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Shorter version that says simply 'the map' without restating who lent it.",
      },
      {
        segments: [
          { text: "借[か]りていた 地図[ちず]をなくして すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "借りていた describes the map as one the speaker had been borrowing.",
      },
    ],
  },
  {
    english: "I'm sorry for laughing during the exam.",
    answers: [
      {
        segments: [
          { text: "試験[しけん]の 間[あいだ]、笑[わら]ってすみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "テストの 間[あいだ]、笑[わら]ってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "テスト instead of 試験 for exam",
      },
      {
        segments: [
          { text: "試験[しけん]中[ちゅう]に 笑[わら]ってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "試験中に for \"during the exam\" (using 中に)",
      },
      {
        segments: [
          { text: "テスト中[ちゅう]に 笑[わら]ってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "テスト中に with テスト for exam",
      },
      {
        segments: [
          { text: "試験[しけん]中[ちゅう]に" },
          { text: "笑[わら]ってしまって、すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "〜てしまって adds a nuance of regret.",
      },
    ],
  },
  {
    english: "I'm sorry for copying your notes without asking.",
    answers: [
      {
        segments: [
          { text: "聞[き]かないで あなたの ノートを 写[うつ]して すみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "聞[き]かないで その ノートを 写[うつ]して すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Using その instead of あなたの — \"that notebook of yours\"",
      },
      {
        segments: [
          { text: "あなたの ノートを 聞[き]かないで コピーして すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Using コピーする instead of 写す — \"to copy\" (loanword)",
      },
      {
        segments: [
          { text: "その ノートを 聞[き]かないで コピーして すみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "断[ことわ]らないで あなたの ノートを 写[うつ]して すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Using 断らないで (without getting permission/notifying) instead of 聞かないで",
      },
      {
        segments: [
          { text: "断[ことわ]らないで その ノートを 写[うつ]して すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "断らないで + その ノート combination",
      },
      {
        segments: [
          { text: "聞[き]かないで あなたの メモを 写[うつ]して すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Using メモ instead of ノート for \"notes\"",
      },
    ],
  },
  {
    english: "I'm sorry for selling Kenji's bicycle.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんの 自転車[じてんしゃ]を" },
          { text: "売[う]ってすみませんでした", blank: true },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "I'm sorry for bringing my dog into your room.",
    answers: [
      {
        segments: [
          { text: "犬[いぬ]を あなたの 部屋[へや]に 連[つ]れてきてすみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "犬[いぬ]を 部屋[へや]に 連[つ]れてきてすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Without あなたの — \"your room\" implied by context, just 部屋に",
      },
      {
        segments: [
          { text: "犬[いぬ]を あなたの 部屋[へや]に 入[い]れてすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Using 入れる (to put/let in) instead of 連れてくる — \"I'm sorry for letting my dog into your room\"",
      },
      {
        segments: [
          { text: "犬[いぬ]を 部屋[へや]に 入[い]れてすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "入れる without あなたの — \"your room\" implied",
      },
      {
        segments: [
          { text: "私[わたし]の 犬[いぬ]を あなたの 部屋[へや]に 連[つ]れてきてすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "With 私の犬 explicitly stating \"my dog\"",
      },
      {
        segments: [
          { text: "私[わたし]の 犬[いぬ]を あなたの 部屋[へや]に 入[い]れてすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "私の犬 + 入れて — \"letting my dog into your room\"",
      },
      {
        segments: [
          { text: "犬[いぬ]を そちらの 部屋[へや]に 連[つ]れてきてすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "そちらの部屋 as a more natural/polite way to say \"your room\" instead of あなたの部屋",
      },
      {
        segments: [
          { text: "犬[いぬ]を 連[つ]れて あなたの 部屋[へや]に" },
          { text: "入[はい]ってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Different framing: 犬を連れて部屋に入って — \"entering your room with my dog\"; uses 入る instead of 連れてくる/入れる",
      },
    ],
  },
  {
    english: "I'm sorry for throwing away the letter you wrote me.",
    answers: [
      {
        segments: [
          { text: "私[わたし]に 書[か]いてくれた 手紙[てがみ]を" },
          { text: "捨[す]ててすみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "あなたが 書[か]いてくれた 手紙[てがみ]を" },
          { text: "捨[す]ててすみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "もらった 手紙[てがみ]を" },
          { text: "捨[す]ててすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "もらった手紙 = the letter I received (from you) — rephrasing the relative clause",
      },
      {
        segments: [
          { text: "あなたに もらった 手紙[てがみ]を" },
          { text: "捨[す]ててすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "あなたにもらった手紙 = the letter I received from you (explicit giver)",
      },
    ],
  },
  {
    english: "I'm sorry for being late to class today.",
    answers: [
      {
        segments: [
          { text: "今日[きょう]、授業[じゅぎょう]に" },
          { text: "遅刻[ちこく]してすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Most natural: 遅刻する (to be late for class) in て-form + すみませんでした",
      },
      {
        segments: [
          { text: "今日[きょう]、授業[じゅぎょう]に" },
          { text: "遅[おく]れてすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Using 遅れる (to be late/delayed) instead of 遅刻する",
      },
      {
        segments: [
          { text: "今日[きょう]の授業[じゅぎょう]に" },
          { text: "遅刻[ちこく]してすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "今日の授業 (today's class) using の to connect, instead of 今日、授業に",
      },
      {
        segments: [
          { text: "今日[きょう]の授業[じゅぎょう]に" },
          { text: "遅[おく]れてすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "今日の授業に遅れて — combining の connector with 遅れる",
      },
      {
        segments: [
          { text: "今日[きょう]のクラスに" },
          { text: "遅刻[ちこく]してすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Using クラス instead of 授業 for \"class\"",
      },
      {
        segments: [
          { text: "今日[きょう]のクラスに" },
          { text: "遅[おく]れてすみませんでした", blank: true },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "I'm sorry for reading your diary without asking.",
    answers: [
      {
        segments: [
          { text: "聞[き]かないで あなたの 日記[にっき]を" },
          { text: "読[よ]んで すみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "あなたの 日記[にっき]を 聞[き]かないで" },
          { text: "読[よ]んで すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Object moved to front: your diary + without asking + read + sorry",
      },
    ],
  },
  {
    english: "I'm sorry for not returning the money I borrowed from you.",
    answers: [
      {
        segments: [
          { text: "借[か]りた お金[おかね]を 返[かえ]さないで" },
          { text: "いて すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "返さないでいてすみませんでした apologizes for leaving the money unreturned.",
      },
      {
        segments: [
          { text: "お 金[おかね]を 返[かえ]さないで" },
          { text: "いて すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Dropping 借りた — simpler \"the money\" without the relative clause modifier.",
      },
      {
        segments: [
          { text: "借[か]りた お金[おかね]を まだ 返[かえ]さないで" },
          { text: "いて すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Adding まだ (still/yet) for emphasis — \"sorry for still not having returned the borrowed money.\"",
      },
      {
        segments: [
          { text: "借[か]りた お金[おかね]を ずっと 返[かえ]さないで" },
          { text: "いて すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Adding ずっと (all along/this whole time) — \"sorry for not having returned the borrowed money all this time.\"",
      },
      {
        segments: [
          { text: "あなたから 借[か]りた お金[おかね]を 返[かえ]さないで" },
          { text: "いて すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Adding あなたから explicitly says the money was borrowed from the listener.",
      },
    ],
  },
  {
    english: "I'm sorry for telling everyone your secret.",
    answers: [
      {
        segments: [
          { text: "あなたの 秘密[ひみつ]を みんなに" },
          { text: " 話[はな]して すみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "あなたの 秘密[ひみつ]を みんなに" },
          { text: " 言[い]って すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Using 言う (to say/tell) instead of 話す — slightly more \"blurting out\" nuance",
      },
      {
        segments: [
          { text: "みんなに あなたの 秘密[ひみつ]を" },
          { text: " 話[はな]して すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Word order variation: みんなに moved to the front before the object",
      },
      {
        segments: [
          { text: "みんなに あなたの 秘密[ひみつ]を" },
          { text: " 言[い]って すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Word order: みんなに first + 言う",
      },
      {
        segments: [
          { text: "あなたの 秘密[ひみつ]を 皆[みんな]に" },
          { text: " 話[はな]して すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Using 皆 (kanji form) instead of みんな for \"everyone\"",
      },
      {
        segments: [
          { text: "あなたの 秘密[ひみつ]を 皆[みんな]に" },
          { text: " 言[い]って すみませんでした", blank: true },
        ],
        register: "polite",
        notes: "皆 + 言う combination",
      },
    ],
  },
  {
    english: "I'm sorry for missing your graduation ceremony.",
    answers: [
      {
        segments: [
          { text: "卒業式[そつぎょうしき]を" },
          { text: "サボってすみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]を" },
          { text: "欠席[けっせき]してすみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]に" },
          { text: "欠席[けっせき]してすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Same as above but with に instead of を (に for event/occasion)",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]を" },
          { text: "休[やす]んですみませんでした", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "卒業式[そつぎょうしき]に" },
          { text: "休[やす]んですみませんでした", blank: true },
        ],
        register: "polite",
        notes: "休んで with に particle for the ceremony",
      },
      {
        segments: [
          { text: "あなたの 卒業式[そつぎょうしき]に" },
          { text: "欠席[けっせき]してすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Explicitly including あなたの (your graduation ceremony), に particle",
      },
      {
        segments: [
          { text: "あなたの 卒業式[そつぎょうしき]を" },
          { text: "欠席[けっせき]してすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "Explicitly including あなたの (your graduation ceremony), を particle",
      },
      {
        segments: [
          { text: "あなたの 卒業式[そつぎょうしき]を" },
          { text: "サボってすみませんでした", blank: true },
        ],
        register: "polite",
        notes: "サボる (to skip) with あなたの explicitly, を particle",
      },
    ],
  },
];
