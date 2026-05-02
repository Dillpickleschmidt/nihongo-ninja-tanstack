import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "Would you mind waiting here for a little while?",
    answers: [
      {
        segments: [
          { text: "ちょっとここで" },
          { text: "待[ま]っていただけませんか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "すみませんが、ちょっとここで" },
          { text: "待[ま]っていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "With すみませんが as a polite softener at the start",
      },
      {
        segments: [
          { text: "ここでちょっと" },
          { text: "待[ま]っていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "ここで placed before ちょっと (word order variation)",
      },
      {
        segments: [
          { text: "すみませんが、ここでちょっと" },
          { text: "待[ま]っていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "すみませんが + ここで before ちょっと word order",
      },
      {
        segments: [
          { text: "ちょっとここで" },
          { text: "待[ま]ってもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "Using てもらえませんか instead (less formal than ていただけませんか)",
      },
      {
        segments: [
          { text: "すみませんが、ちょっとここで" },
          { text: "待[ま]ってもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "すみませんが + てもらえませんか",
      },
      {
        segments: [
          { text: "少[すこ]しここで" },
          { text: "待[ま]っていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Using 少し instead of ちょっと for \"a little while\"",
      },
      {
        segments: [
          { text: "すみませんが、少[すこ]しここで" },
          { text: "待[ま]っていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "すみませんが + 少し variation",
      },
      {
        segments: [
          { text: "少[すこ]しここで" },
          { text: "待[ま]ってもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "少し + てもらえませんか combination",
      },
    ],
  },
  {
    english: "Would you mind opening the window?",
    answers: [
      {
        segments: [
          { text: "窓[まど]を" },
          { text: "開[あ]けて" },
          { text: "いただけませんか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "窓[まど]を" },
          { text: "開[あ]けて" },
          { text: "もらえませんか", blank: true },
        ],
        register: "polite",
        notes: "Less humble form: もらえませんか instead of いただけませんか",
      },
      {
        segments: [
          { text: "すみませんが、窓[まど]を" },
          { text: "開[あ]けて" },
          { text: "いただけませんか", blank: true },
        ],
        register: "polite",
        notes: "With すみませんが as a polite softener before the request",
      },
      {
        segments: [
          { text: "すみませんが、窓[まど]を" },
          { text: "開[あ]けて" },
          { text: "もらえませんか", blank: true },
        ],
        register: "polite",
        notes: "With すみませんが softener + もらえませんか",
      },
      {
        segments: [
          { text: "ちょっと窓[まど]を" },
          { text: "開[あ]けて" },
          { text: "いただけませんか", blank: true },
        ],
        register: "polite",
        notes: "With ちょっと as a softening adverb (a very natural addition in Japanese requests)",
      },
      {
        segments: [
          { text: "ちょっと窓[まど]を" },
          { text: "開[あ]けて" },
          { text: "もらえませんか", blank: true },
        ],
        register: "polite",
        notes: "ちょっと softener + もらえませんか",
      },
    ],
  },
  {
    english: "Would you mind explaining this kanji to me one more time?",
    answers: [
      {
        segments: [
          { text: "この 漢字[かんじ]をもう一度[いちど]説明[せつめい]していただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Core variation: この漢字を + もう一度 + 説明していただけませんか",
      },
      {
        segments: [
          { text: "この 漢字[かんじ]をもう一度[いちど]説明[せつめい]してもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "てもらえませんか variation instead of ていただけませんか (slightly less formal)",
      },
      {
        segments: [
          { text: "もう一度[いちど]この 漢字[かんじ]を説明[せつめい]していただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Word order variation: もう一度 moved to front of sentence",
      },
      {
        segments: [
          { text: "もう一度[いちど]この 漢字[かんじ]を説明[せつめい]してもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "もう一度 first + てもらえませんか",
      },
      {
        segments: [
          { text: "すみませんが、この 漢字[かんじ]をもう 一度[いちど] 説明[せつめい]していただけませんか", blank: true },
        ],
        register: "polite",
        notes: "With すみませんが as a polite softener at the start.",
      },
      {
        segments: [
          { text: "すみませんが、この 漢字[かんじ]をもう 一度[いちど] 説明[せつめい]してもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "すみませんが softener + てもらえませんか",
      },
    ],
  },
  {
    english: "Would you mind showing me the map?",
    answers: [
      {
        segments: [
          { text: "地図[ちず]を" },
          { text: "見[み]せて いただけませんか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "地図[ちず]を" },
          { text: "見[み]せて もらえませんか", blank: true },
        ],
        register: "polite",
        notes: "Less formal version using てもらえませんか",
      },
      {
        segments: [
          { text: "この 地図[ちず]を" },
          { text: "見[み]せて いただけませんか", blank: true },
        ],
        register: "polite",
        notes: "With この (this map) using ていただけませんか",
      },
      {
        segments: [
          { text: "この 地図[ちず]を" },
          { text: "見[み]せて もらえませんか", blank: true },
        ],
        register: "polite",
        notes: "With この using てもらえませんか",
      },
      {
        segments: [
          { text: "その 地図[ちず]を" },
          { text: "見[み]せて いただけませんか", blank: true },
        ],
        register: "polite",
        notes: "With その (that map over there) using ていただけませんか",
      },
      {
        segments: [
          { text: "その 地図[ちず]を" },
          { text: "見[み]せて もらえませんか", blank: true },
        ],
        register: "polite",
        notes: "With その using てもらえませんか",
      },
    ],
  },
  {
    english: "Would you mind turning off the light?",
    answers: [
      {
        segments: [
          { text: "電気[でんき]を" },
          { text: "消[け]して いただけませんか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "電気[でんき]を" },
          { text: "消[け]して もらえませんか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "すみませんが、電気[でんき]を" },
          { text: "消[け]して いただけませんか", blank: true },
        ],
        register: "polite",
        notes: "With すみませんが prefix - very natural when making a polite request",
      },
      {
        segments: [
          { text: "すみませんが、電気[でんき]を" },
          { text: "消[け]して もらえませんか", blank: true },
        ],
        register: "polite",
        notes: "With すみませんが prefix + てもらえませんか",
      },
    ],
  },
  {
    english: "Would you mind taking a photo of me in front of the castle?",
    hint: "castle = お城",
    answers: [
      {
        segments: [
          { text: "お城[おしろ]の 前[まえ]で 写真[しゃしん]を" },
          { text: "撮[と]っていただけませんか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "お城[おしろ]の 前[まえ]で 写真[しゃしん]を" },
          { text: "撮[と]ってもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "Less formal alternative: てもらえませんか instead of ていただけませんか",
      },
      {
        segments: [
          { text: "写真[しゃしん]を" },
          { text: "撮[と]っていただけませんか", blank: true },
          { text: "、お城[おしろ]の 前[まえ]で" },
        ],
        register: "polite",
        notes: "Reversed word order — object first, location appended after the verb phrase",
      },
      {
        segments: [
          { text: "お城[おしろ]の 前[まえ]で 私[わたし]の 写真[しゃしん]を" },
          { text: "撮[と]っていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Explicitly includes 私の写真 (a photo of me) to make the subject clear",
      },
      {
        segments: [
          { text: "お城[おしろ]の 前[まえ]で 私[わたし]の 写真[しゃしん]を" },
          { text: "撮[と]ってもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "私の写真 (photo of me) + てもらえませんか (less humble alternative)",
      },
      {
        segments: [
          { text: "城[しろ]の 前[まえ]で 写真[しゃしん]を" },
          { text: "撮[と]っていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Using 城 instead of お城 (slightly less polite/formal word for castle)",
      },
      {
        segments: [
          { text: "城[しろ]の 前[まえ]で 写真[しゃしん]を" },
          { text: "撮[と]ってもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "城 (no お) + てもらえませんか",
      },
      {
        segments: [
          { text: "すみませんが、お城[おしろ]の 前[まえ]で 写真[しゃしん]を" },
          { text: "撮[と]っていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Prefixed with すみませんが (Excuse me, but...) — very natural when asking a stranger",
      },
      {
        segments: [
          { text: "すみませんが、お城[おしろ]の 前[まえ]で 写真[しゃしん]を" },
          { text: "撮[と]ってもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "すみませんが + てもらえませんか",
      },
    ],
  },
  {
    english: "Would you mind carrying this bag for me?",
    answers: [
      {
        segments: [
          { text: "このかばんを" },
          { text: "持[も]っていただけませんか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "このかばんを" },
          { text: "持[も]ってもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "Less formal: 持つ + てもらえませんか",
      },
      {
        segments: [
          { text: "このかばんを" },
          { text: "運[はこ]んでいただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Using 運ぶ (to carry/transport) instead of 持つ",
      },
      {
        segments: [
          { text: "このかばんを" },
          { text: "運[はこ]んでもらえませんか", blank: true },
        ],
        register: "polite",
      },
    ],
  },
  {
    english: "Would you mind lending me your dictionary?",
    answers: [
      {
        segments: [
          { text: "辞書[じしょ]を 貸[か]していただけませんか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "辞書[じしょ]を 貸[か]してもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "Using てもらえませんか instead of ていただけませんか (less formal but still polite)",
      },
      {
        segments: [
          { text: "すみませんが、辞書[じしょ]を 貸[か]していただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Adding すみませんが as a softening prefix before the request",
      },
      {
        segments: [
          { text: "すみませんが、辞書[じしょ]を 貸[か]してもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "すみませんが prefix with てもらえませんか",
      },
      {
        segments: [
          { text: "ちょっと辞書[じしょ]を 貸[か]していただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Adding ちょっと as a softener (\"could you lend me your dictionary for a moment?\")",
      },
      {
        segments: [
          { text: "ちょっと辞書[じしょ]を 貸[か]してもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "ちょっと with てもらえませんか",
      },
    ],
  },
  {
    english: "Would you mind translating this sentence for me?",
    answers: [
      {
        segments: [
          { text: "この 文[ぶん]を 訳[やく]していただけませんか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "この 文[ぶん]を 訳[やく]してもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "Using てもらえませんか instead of ていただけませんか (less formal alternative)",
      },
      {
        segments: [
          { text: "この 文章[ぶんしょう]を 訳[やく]していただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Using 文章 (ぶんしょう) instead of 文 for \"sentence\"",
      },
      {
        segments: [
          { text: "この 文章[ぶんしょう]を 訳[やく]してもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "文章 + てもらえませんか",
      },
      {
        segments: [
          { text: "すみませんが、この 文[ぶん]を 訳[やく]していただけませんか", blank: true },
        ],
        register: "polite",
        notes: "With すみませんが as a polite opener, using 文",
      },
      {
        segments: [
          { text: "すみませんが、この 文[ぶん]を 訳[やく]してもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "すみませんが opener + てもらえませんか",
      },
      {
        segments: [
          { text: "この 文[ぶん]を私[わたし]に 訳[やく]していただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Explicit 私に (\"for me\") added, using 文 + ていただけませんか",
      },
      {
        segments: [
          { text: "この 文[ぶん]を私[わたし]に 訳[やく]してもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "Explicit 私に + てもらえませんか",
      },
      {
        segments: [
          { text: "これを 訳[やく]していただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Using これ instead of この文 — more colloquial, pointing to \"this\"",
      },
      {
        segments: [
          { text: "これを 訳[やく]してもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "これを + てもらえませんか",
      },
    ],
  },
  {
    english: "Would you mind sending me this file?",
    answers: [
      {
        segments: [
          { text: "このファイルを 送[おく]っていただけませんか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "このファイルを 送[おく]ってもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "てもらえませんか form — slightly less formal than いただけませんか",
      },
      {
        segments: [
          { text: "このファイルを 私[わたし]に 送[おく]っていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Explicitly includes 私に (to me) for clarity",
      },
      {
        segments: [
          { text: "このファイルを 私[わたし]に 送[おく]ってもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "てもらえませんか with explicit 私に",
      },
      {
        segments: [
          { text: "すみませんが、このファイルを 送[おく]っていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Softened with すみませんが (excuse me, but...) before the request — very natural polite phrasing",
      },
      {
        segments: [
          { text: "すみませんが、このファイルを 送[おく]ってもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "Softened with すみませんが + てもらえませんか",
      },
    ],
  },
  {
    english: "Would you mind waking me up at seven tomorrow morning?",
    answers: [
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]七時[しちじ]に" },
          { text: "起[お]こしていただけませんか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]七時[しちじ]に" },
          { text: "起[お]こしてもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "Using てもらえませんか instead of ていただけませんか; slightly less formal",
      },
      {
        segments: [
          { text: "すみませんが、明日[あした]の 朝[あさ]七時[しちじ]に" },
          { text: "起[お]こしていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Adding すみませんが as a polite softener before the request",
      },
      {
        segments: [
          { text: "すみませんが、明日[あした]の 朝[あさ]七時[しちじ]に" },
          { text: "起[お]こしてもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "すみませんが + てもらえませんか variation",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]七時[しちじ]に 私[わたし]を" },
          { text: "起[お]こしていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Explicitly adding 私を as the direct object of 起こす",
      },
      {
        segments: [
          { text: "明日[あした]の 朝[あさ]七時[しちじ]に 私[わたし]を" },
          { text: "起[お]こしてもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "Explicitly adding 私を + てもらえませんか variation",
      },
    ],
  },
  {
    english: "Would you mind looking into this matter for me?",
    answers: [
      {
        segments: [
          { text: "この 件[けん]を 調[しら]べていただけませんか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "この 件[けん]を 調[しら]べてもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "Using てもらえませんか instead of ていただけませんか (less formal)",
      },
      {
        segments: [
          { text: "このことを 調[しら]べていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Using このこと instead of この件 for \"this matter\"",
      },
      {
        segments: [
          { text: "このことを 調[しら]べてもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "このこと + てもらえませんか",
      },
      {
        segments: [
          { text: "この 件[けん]について 調[しら]べていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Using について (about/regarding this matter) instead of を",
      },
      {
        segments: [
          { text: "この 件[けん]について 調[しら]べてもらえませんか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "すみませんが、この 件[けん]を 調[しら]べていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Adding すみませんが (Excuse me, but...) as a polite opener",
      },
      {
        segments: [
          { text: "すみませんが、このことについて 調[しら]べていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "すみませんが opener + このことについて + ていただけませんか",
      },
    ],
  },
  {
    english: "Would you mind helping me with my homework?",
    answers: [
      {
        segments: [
          { text: "宿題[しゅくだい]を" },
          { text: "手伝[てつだ]っていただけませんか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]を" },
          { text: "手伝[てつだ]ってもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "Less humble form with てもらえませんか",
      },
      {
        segments: [
          { text: "私[わたし]の 宿題[しゅくだい]を" },
          { text: "手伝[てつだ]っていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Adding 私の to make the possessive explicit",
      },
      {
        segments: [
          { text: "私[わたし]の 宿題[しゅくだい]を" },
          { text: "手伝[てつだ]ってもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "Adding 私の with てもらえませんか",
      },
      {
        segments: [
          { text: "すみませんが、 宿題[しゅくだい]を" },
          { text: "手伝[てつだ]っていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Adding すみませんが as a polite lead-in, very natural in real speech",
      },
      {
        segments: [
          { text: "すみませんが、 宿題[しゅくだい]を" },
          { text: "手伝[てつだ]ってもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "すみませんが lead-in with てもらえませんか",
      },
    ],
  },
  {
    english: "Would you mind correcting my essay?",
    answers: [
      {
        segments: [
          { text: "作文[さくぶん]を" },
          { text: "直[なお]していただけませんか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "作文[さくぶん]を" },
          { text: "直[なお]してもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "Less formal alternative using てもらえませんか",
      },
      {
        segments: [
          { text: "私[わたし]の 作文[さくぶん]を" },
          { text: "直[なお]していただけませんか", blank: true },
        ],
        register: "polite",
        notes: "With 私の to emphasize \"my\" essay; ていただけませんか",
      },
      {
        segments: [
          { text: "私[わたし]の 作文[さくぶん]を" },
          { text: "直[なお]してもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "With 私の; less formal てもらえませんか",
      },
    ],
  },
  {
    english: "Would you mind coming to the front of the class?",
    answers: [
      {
        segments: [
          { text: "教室[きょうしつ]の 前[まえ]に 来[き]ていただけませんか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "教室[きょうしつ]の 前[まえ]に 来[き]てもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "Less formal: てもらえませんか instead of ていただけませんか",
      },
      {
        segments: [
          { text: "クラスの 前[まえ]に 来[き]ていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "クラス instead of 教室 for \"class\"",
      },
      {
        segments: [
          { text: "クラスの 前[まえ]に 来[き]てもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "クラス + てもらえませんか",
      },
      {
        segments: [
          { text: "前[まえ]に 出[で]ていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "前に出て: natural Japanese expression \"come out to the front\" (no 教室の), ていただけませんか",
      },
      {
        segments: [
          { text: "前[まえ]に 出[で]てもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "前に出て + てもらえませんか",
      },
      {
        segments: [
          { text: "教室[きょうしつ]の 前[まえ]に 出[で]ていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "教室の前に出て: specifying 教室 with 出る verb, ていただけませんか",
      },
      {
        segments: [
          { text: "教室[きょうしつ]の 前[まえ]に 出[で]てもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "教室の前に出て + てもらえませんか",
      },
      {
        segments: [
          { text: "前[まえ]に 来[き]ていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Shortened: just 前に来て, dropping 教室の, ていただけませんか",
      },
      {
        segments: [
          { text: "前[まえ]に 来[き]てもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "Shortened: 前に来て + てもらえませんか",
      },
    ],
  },
  {
    english: "Would you mind sitting a little closer to the front?",
    answers: [
      {
        segments: [
          { text: "もう 少[すこ]し 前[まえ]に" },
          { text: "座[すわ]っていただけませんか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "もう 少[すこ]し 前[まえ]の方[ほう]に" },
          { text: "座[すわ]っていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "前の方に (toward the front) instead of 前に — more natural phrasing for \"closer to the front\"",
      },
      {
        segments: [
          { text: "少[すこ]し 前[まえ]に" },
          { text: "座[すわ]っていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "少し (a little) without もう — slightly softer nuance",
      },
      {
        segments: [
          { text: "少[すこ]し 前[まえ]の方[ほう]に" },
          { text: "座[すわ]っていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "少し前の方に — without もう, using 前の方に",
      },
      {
        segments: [
          { text: "もう 少[すこ]し 前[まえ]に" },
          { text: "座[すわ]ってもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "てもらえませんか instead of ていただけませんか — slightly less formal but still polite",
      },
      {
        segments: [
          { text: "もう 少[すこ]し 前[まえ]の方[ほう]に" },
          { text: "座[すわ]ってもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "てもらえませんか with 前の方に — slightly less formal",
      },
      {
        segments: [
          { text: "ちょっと 前[まえ]の方[ほう]に" },
          { text: "座[すわ]っていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "ちょっと instead of 少し/もう少し — casual but natural alternative for \"a little\"",
      },
      {
        segments: [
          { text: "ちょっと 前[まえ]に" },
          { text: "座[すわ]っていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "ちょっと 前に — using ちょっと with 前に",
      },
      {
        segments: [
          { text: "ちょっと 前[まえ]に" },
          { text: "座[すわ]ってもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "てもらえませんか with ちょっと 前に",
      },
    ],
  },
  {
    english: "Would you mind speaking a little more slowly?",
    answers: [
      {
        segments: [
          { text: "もう 少[すこ]し ゆっくり 話[はな]していただけませんか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "もう 少[すこ]し ゆっくり 話[はな]してもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "Less formal with もらえませんか instead of いただけませんか",
      },
      {
        segments: [
          { text: "ちょっと ゆっくり 話[はな]していただけませんか", blank: true },
        ],
        register: "polite",
        notes: "ちょっと instead of もう少し — slightly more casual nuance",
      },
      {
        segments: [
          { text: "ちょっと ゆっくり 話[はな]してもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "ちょっと + もらえませんか — more casual overall",
      },
      {
        segments: [
          { text: "少[すこ]しだけ ゆっくり 話[はな]していただけませんか", blank: true },
        ],
        register: "polite",
        notes: "少しだけ (just a little) instead of もう少し — slightly different nuance emphasizing smallness of request",
      },
      {
        segments: [
          { text: "少[すこ]しだけ ゆっくり 話[はな]してもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "少しだけ + もらえませんか",
      },
    ],
  },
  {
    english: "Would you mind writing your name and phone number on this form?",
    answers: [
      {
        segments: [
          { text: "このフォームに 名前[なまえ]と 電話[でんわ]番号[ばんごう]を" },
          { text: "書[か]いていただけませんか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "この用紙[ようし]に 名前[なまえ]と 電話[でんわ]番号[ばんごう]を" },
          { text: "書[か]いていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "用紙 (form/paper) instead of フォーム",
      },
      {
        segments: [
          { text: "この用紙[ようし]に 名前[なまえ]と 電話[でんわ]番号[ばんごう]を" },
          { text: "書[か]いてもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "用紙 + てもらえませんか (less formal than いただけませんか)",
      },
      {
        segments: [
          { text: "このフォームに 名前[なまえ]と 電話[でんわ]番号[ばんごう]を" },
          { text: "書[か]いてもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "フォーム + てもらえませんか",
      },
      {
        segments: [
          { text: "名前[なまえ]と 電話[でんわ]番号[ばんごう]をこのフォームに" },
          { text: "書[か]いていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Object first, then location: 名前と電話番号をこのフォームに書いて...",
      },
      {
        segments: [
          { text: "名前[なまえ]と 電話[でんわ]番号[ばんごう]をこの用紙[ようし]に" },
          { text: "書[か]いていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Object first, 用紙, ていただけませんか",
      },
      {
        segments: [
          { text: "名前[なまえ]と 電話[でんわ]番号[ばんごう]をこの用紙[ようし]に" },
          { text: "書[か]いてもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "Object first, 用紙, てもらえませんか",
      },
      {
        segments: [
          { text: "このフォームに お名前[なまえ]と 電話[でんわ]番号[ばんごう]を" },
          { text: "書[か]いていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "お名前 (honorific) instead of 名前, フォーム, ていただけませんか",
      },
      {
        segments: [
          { text: "この用紙[ようし]に お名前[なまえ]と 電話[でんわ]番号[ばんごう]を" },
          { text: "書[か]いていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "お名前 + 用紙 + ていただけませんか",
      },
      {
        segments: [
          { text: "すみませんが、このフォームに 名前[なまえ]と 電話[でんわ]番号[ばんごう]を" },
          { text: "書[か]いていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Softened with すみませんが at the start, フォーム, ていただけませんか",
      },
      {
        segments: [
          { text: "すみませんが、この用紙[ようし]に 名前[なまえ]と 電話[でんわ]番号[ばんごう]を" },
          { text: "書[か]いていただけませんか", blank: true },
        ],
        register: "polite",
        notes: "すみませんが + 用紙 + ていただけませんか",
      },
    ],
  },
  {
    english: "Would you mind introducing me to your teacher?",
    answers: [
      {
        segments: [
          { text: "先生に 私[わたし]を" },
          { text: "紹介[しょうかい]していただけませんか", blank: true },
        ],
        register: "polite",
      },
      {
        segments: [
          { text: "先生を 私[わたし]に" },
          { text: "紹介[しょうかい]していただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Reversed object/indirect: 先生を私に紹介する - introduce the teacher to me (same overall meaning, different framing)",
      },
      {
        segments: [
          { text: "先生に 私[わたし]を" },
          { text: "紹介[しょうかい]してもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "Using てもらえませんか instead of ていただけませんか (less formal)",
      },
      {
        segments: [
          { text: "先生を 私[わたし]に" },
          { text: "紹介[しょうかい]してもらえませんか", blank: true },
        ],
        register: "polite",
        notes: "Reversed framing (先生を私に) with てもらえませんか",
      },
      {
        segments: [
          { text: "すみませんが、先生に 私[わたし]を" },
          { text: "紹介[しょうかい]していただけませんか", blank: true },
        ],
        register: "polite",
        notes: "Added すみませんが as a polite softener before the request",
      },
    ],
  },
];
