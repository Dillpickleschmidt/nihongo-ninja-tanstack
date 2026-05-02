import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I will humbly prepare tea for the guest.",
    answers: [
      {
        segments: [
          { text: "お 客様[きゃくさま]にお 茶[ちゃ]を" },
          { text: "お 入[い]れ", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お入れいたします as the humble form of 入れる, combining the honorific prefix お with the verb stem 入れ and いたします (humble form of する).",
      },
      {
        segments: [
          { text: "お 客様[きゃくさま]にお 茶[ちゃ]を" },
          { text: "お 入[い]れ", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お入れします as another humble form of 入れる, using お with the verb stem 入れ and します (polite form of する).",
      },
      {
        segments: [
          { text: "お 茶[ちゃ]をお 客様[きゃくさま]に" },
          { text: "お 入[い]れ", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お入れいたします as the humble form of 入れる, combining お with 入れ and いたします.",
      },
      {
        segments: [
          { text: "お 茶[ちゃ]をお 客様[きゃくさま]に" },
          { text: "お 入[い]れ", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お入れします as another humble form of 入れる, using お with 入れ and します.",
      },
    ],
  },
  {
    english: "I humbly asked the teacher a question.",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]に 質問[しつもん]を" },
          {
            text: "伺[うかが]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses 伺いました as the humble form of 聞く, expressing humility when asking a question.",
      },
      {
        segments: [
          { text: "先生[せんせい]に 質問[しつもん]を" },
          { text: "伺[うかが]いたしました", blank: true },
        ],
        register: "polite",
        notes:
          "Uses 伺いたしました as an extra-formal variation. Because 伺う is already humble, adding いたしました can sound somewhat redundant or marked, but it is a useful example of layered humble wording.",
      },
    ],
  },
  {
    english: "I will humbly take the guest to the station.",
    answers: [
      {
        segments: [
          { text: "お 客様[きゃくさま]を 駅[えき]まで" },
          { text: "お 送[おく]り", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お送りいたします as the humble form of 送る, combining お with the verb stem 送り and いたします.",
      },
      {
        segments: [
          { text: "お 客様[きゃくさま]を 駅[えき]まで" },
          { text: "お 送[おく]り", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お送りします as another humble form of 送る, using お with 送り and します.",
      },
      {
        segments: [
          { text: "お 客様[きゃくさま]を 駅[えき]まで" },
          { text: "お 連[つ]れ", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お連れいたします as the humble form of 連れる, combining お with the verb stem 連れ and いたします.",
      },
      {
        segments: [
          { text: "お 客様[きゃくさま]を 駅[えき]まで" },
          { text: "お 連[つ]れ", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お連れします as another humble form of 連れる, using お with 連れ and します.",
      },
      {
        segments: [
          { text: "駅[えき]までお 客様[きゃくさま]を" },
          { text: "お 送[おく]り", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お送りいたします as the humble form of 送る, combining お with 送り and いたします.",
      },
      {
        segments: [
          { text: "駅[えき]までお 客様[きゃくさま]を" },
          { text: "お 送[おく]り", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お送りします as another humble form of 送る, using お with 送り and します.",
      },
      {
        segments: [
          { text: "駅[えき]までお 客様[きゃくさま]を" },
          { text: "お 連[つ]れ", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お連れいたします as the humble form of 連れる, combining お with 連れ and いたします.",
      },
      {
        segments: [
          { text: "駅[えき]までお 客様[きゃくさま]を" },
          { text: "お 連[つ]れ", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お連れします as another humble form of 連れる, using お with 連れ and します.",
      },
    ],
  },
  {
    english:
      "Because the department manager's baggage looked heavy, I carried it (for him).",
    answers: [
      {
        segments: [
          { text: "部長[ぶちょう]の 荷物[にもつ]が 重[おも]そうだったので" },
          { text: "お 持[も]ち", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お持ちいたしました as the humble form of 持つ, combining お with the verb stem 持ち and いたしました.",
      },
      {
        segments: [
          { text: "部長[ぶちょう]の 荷物[にもつ]が 重[おも]そうだったので" },
          { text: "お 持[も]ち", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お持ちしました as another humble form of 持つ, using お with 持ち and しました.",
      },
      {
        segments: [
          { text: "部長[ぶちょう]の 荷物[にもつ]は 重[おも]そうだったので" },
          { text: "お 持[も]ち", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お持ちいたしました as the humble form of 持つ, combining お with 持ち and いたしました.",
      },
      {
        segments: [
          { text: "部長[ぶちょう]の 荷物[にもつ]は 重[おも]そうだったので" },
          { text: "お 持[も]ち", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お持ちしました as another humble form of 持つ, using お with 持ち and しました.",
      },
    ],
  },
  {
    english:
      "Because the department manager was busy, I humbly sent the email on his behalf.",
    answers: [
      {
        segments: [
          { text: "部長[ぶちょう]がお 忙[いそが]しかったのでメールを" },
          { text: "お 送[おく]り", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お送りしました as the humble form of 送る, using お with the verb stem 送り and しました.",
      },
      {
        segments: [
          { text: "部長[ぶちょう]がお 忙[いそが]しかったのでメールを" },
          { text: "お 送[おく]り", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お送りいたしました as another humble form of 送る, combining お with 送り and いたしました.",
      },
      {
        segments: [
          { text: "部長[ぶちょう]はお 忙[いそが]しかったのでメールを" },
          { text: "お 送[おく]り", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お送りしました as the humble form of 送る, using お with 送り and しました.",
      },
      {
        segments: [
          { text: "部長[ぶちょう]はお 忙[いそが]しかったのでメールを" },
          { text: "お 送[おく]り", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お送りいたしました as another humble form of 送る, combining お with 送り and いたしました.",
      },
    ],
  },
  {
    english: "I humbly gave a present to the company president.",
    answers: [
      {
        segments: [
          { text: "社長[しゃちょう]にプレゼントを" },
          {
            text: "差[さ]し 上[あ]げる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes: "Uses 差し上げました as the humble form of あげる.",
      },
      {
        segments: [
          { text: "社長[しゃちょう]にプレゼントを" },
          { text: "お 渡[わた]し", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お渡ししました as the humble form of 渡す, combining お with the verb stem 渡し and しました to emphasize the act of handing over. It is grammatically valid, but the humble お〜しました pattern can sound a little heavy here because 渡す already politely names the act of handing something over.",
      },
      {
        segments: [
          { text: "社長[しゃちょう]にプレゼントを" },
          { text: "お 渡[わた]し", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お渡しいたしました as another humble form of 渡す, combining お with 渡し and いたしました for extra formality.",
      },
    ],
  },
  {
    english:
      "Tomorrow is Valentine's Day, so I intend to give the department manager a chocolate.",
    answers: [
      {
        segments: [
          {
            text: "明日[あした]はバレンタインデーなので 部長[ぶちょう]にチョコレートを",
          },
          { text: "差[さ]し 上[あ]げようと 思[おも]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses 差し上げようと思っています as the humble form of あげる, expressing intention with よう.",
      },
      {
        segments: [
          {
            text: "明日[あした]はバレンタインデーなので 部長[ぶちょう]にチョコレートを",
          },
          { text: "差[さ]し 上[あ]げるつもり", blank: true },
          { text: "です" },
        ],
        register: "polite",
        notes:
          "Uses 差し上げるつもりです as another humble way to express intention, using つもり to indicate a plan.",
      },
      {
        segments: [
          {
            text: "明日[あした]はバレンタインデーなので 部長[ぶちょう]にチョコを",
          },
          { text: "差[さ]し 上[あ]げようと 思[おも]って", blank: true },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses 差し上げようと思っています as the humble form of あげる, expressing intention with よう.",
      },
      {
        segments: [
          {
            text: "明日[あした]はバレンタインデーなので 部長[ぶちょう]にチョコを",
          },
          { text: "差[さ]し 上[あ]げるつもり", blank: true },
          { text: "です" },
        ],
        register: "polite",
        notes:
          "Uses 差し上げるつもりです as another humble way to express intention, using つもり to indicate a plan.",
      },
    ],
  },
  {
    english: "I humbly lent the book to the teacher.",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]に 本[ほん]を" },
          { text: "お 貸[か]し", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お貸ししました as the humble form of 貸す, using お with the verb stem 貸し and しました.",
      },
      {
        segments: [
          { text: "先生[せんせい]に 本[ほん]を" },
          { text: "お 貸[か]し", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お貸しいたしました as another humble form of 貸す, combining お with 貸し and いたしました.",
      },
    ],
  },
  {
    english: "I humbly brought lunch to the department manager.",
    answers: [
      {
        segments: [
          { text: "部長[ぶちょう]にお 昼[ひる]ご 飯[はん]を" },
          { text: "お 持[も]ち", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お持ちしました as the humble form of 持つ, using お with the verb stem 持ち and しました.",
      },
      {
        segments: [
          { text: "部長[ぶちょう]にお 昼[ひる]ご 飯[はん]を" },
          { text: "お 持[も]ち", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お持ちいたしました as another humble form of 持つ, combining お with 持ち and いたしました.",
      },
      {
        segments: [
          { text: "部長[ぶちょう]にお 昼[ひる]ご 飯[はん]を" },
          { text: "お 届[とど]け", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お届けしました as the humble form of 届ける, using お with the verb stem 届け and しました.",
      },
      {
        segments: [
          { text: "部長[ぶちょう]にお 昼[ひる]ご 飯[はん]を" },
          { text: "お 届[とど]け", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お届けいたしました as another humble form of 届ける, combining お with 届け and いたしました.",
      },
      {
        segments: [
          { text: "部長[ぶちょう]にお 弁当[べんとう]を" },
          { text: "お 持[も]ち", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お持ちしました as the humble form of 持つ, using お with 持ち and しました.",
      },
      {
        segments: [
          { text: "部長[ぶちょう]にお 弁当[べんとう]を" },
          { text: "お 持[も]ち", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お持ちいたしました as another humble form of 持つ, combining お with 持ち and いたしました.",
      },
      {
        segments: [
          { text: "部長[ぶちょう]にお 弁当[べんとう]を" },
          { text: "お 届[とど]け", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お届けしました as the humble form of 届ける, using お with 届け and しました.",
      },
      {
        segments: [
          { text: "部長[ぶちょう]にお 弁当[べんとう]を" },
          { text: "お 届[とど]け", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お届けいたしました as another humble form of 届ける, combining お with 届け and いたしました.",
      },
    ],
  },
  {
    english: "I humbly explained the product to the customer.",
    hint: "商品 (しょうひん) -> product",
    answers: [
      {
        segments: [
          { text: "お 客様[きゃくさま]に 商品[しょうひん]の 説明[せつめい]を" },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses いたしました as the humble form of する, treating 説明 as a noun.",
      },
      {
        segments: [
          { text: "お 客様[きゃくさま]に 商品[しょうひん]を" },
          { text: "ご 説明[せつめい]", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses ご説明いたしました as the humble form of 説明する, adding the prefix ご for politeness.",
      },
      {
        segments: [
          { text: "お 客様[きゃくさま]に 商品[しょうひん]を" },
          { text: "ご 説明[せつめい]", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses ご説明しました as another humble form of 説明する, using ご with 説明 and しました. It's grammatically fine but a little less modest than ご説明いたしました.",
      },
    ],
  },
  {
    english:
      "Because the department manager was not in the office, I humbly informed him of the meeting time by phone.",
    hint: "知らせる (しらせる) -> to inform; 会議 (かいぎ) -> meeting",
    answers: [
      {
        segments: [
          {
            text: "部長[ぶちょう]がオフィスにいらっしゃらなかったので 会議[かいぎ]の 時間[じかん]を 電話[でんわ]で",
          },
          { text: "お 知[し]らせ", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お知らせしました as the humble form of 知らせる, using お with the verb stem 知らせ and しました (fine but slightly less formal than お知らせいたしました).",
      },
      {
        segments: [
          {
            text: "部長[ぶちょう]がオフィスにいらっしゃらなかったので 会議[かいぎ]の 時間[じかん]を 電話[でんわ]で",
          },
          { text: "お 知[し]らせ", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お知らせいたしました as another humble form of 知らせる, combining お with 知らせ and いたしました.",
      },
      {
        segments: [
          {
            text: "部長[ぶちょう]はオフィスにいらっしゃらなかったので 会議[かいぎ]の 時間[じかん]を 電話[でんわ]で",
          },
          { text: "お 知[し]らせ", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お知らせしました as the humble form of 知らせる, using お with 知らせ and しました (fine but slightly less formal than お知らせいたしました).",
      },
      {
        segments: [
          {
            text: "部長[ぶちょう]はオフィスにいらっしゃらなかったので 会議[かいぎ]の 時間[じかん]を 電話[でんわ]で",
          },
          { text: "お 知[し]らせ", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お知らせいたしました as another humble form of 知らせる, combining お with 知らせ and いたしました.",
      },
    ],
  },
  {
    english: "I humbly had the teacher check/read my report.",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]にレポートを" },
          { text: "ご 確認[かくにん]" },
          {
            text: "いただく",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses ご確認いただきました as the humble form of 確認する, using ご with 確認 and いただきました.",
      },
      {
        segments: [
          { text: "先生[せんせい]にレポートを" },
          { text: "お 読[よ]み" },
          {
            text: "いただく",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お読みいただきました as the humble form of 読む, using お with 読み and いただきました.",
      },
      {
        segments: [
          { text: "先生[せんせい]にレポートを" },
          { text: "チェックして" },
          {
            text: "いただく",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses チェックしていただきました as the humble form of チェックする, using していただきました.",
      },
    ],
  },
  {
    english: "I humbly visited the department manager's house.",
    answers: [
      {
        segments: [
          { text: "部長[ぶちょう]のお 宅[たく]に" },
          {
            text: "伺[うかが]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes: "Uses 伺う as the humble form of 訪ねる.",
      },
      {
        segments: [
          { text: "部長[ぶちょう]のお 宅[たく]に" },
          { text: "お 邪魔[じゃま]", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お邪魔しました as an alternative to 伺う, using お with 邪魔 and しました.",
      },
    ],
  },
  {
    english: "I will humbly carry the luggage for the customer.",
    answers: [
      {
        segments: [
          { text: "お 客様[きゃくさま]に 荷物[にもつ]を" },
          { text: "お 持[も]ち", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お持ちいたします as the humble form of 持つ, combining お with 持ち and いたします.",
      },
      {
        segments: [
          { text: "荷物[にもつ]をお 客様[きゃくさま]に" },
          { text: "お 持[も]ち", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Places 荷物を before お客様に while using お持ちいたします as the humble form of 持つ.",
      },
      {
        segments: [
          { text: "お 客様[きゃくさま]に 荷物[にもつ]を" },
          { text: "お 持[も]ち", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お持ちします as another humble form of 持つ, using お with 持ち and します.",
      },
      {
        segments: [
          { text: "荷物[にもつ]をお 客様[きゃくさま]に" },
          { text: "お 持[も]ち", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Places 荷物を before お客様に while using お持ちします as another humble form of 持つ.",
      },
      {
        segments: [
          { text: "お 客様[きゃくさま]に 荷物[にもつ]を" },
          { text: "お 届[とど]け", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お届けいたします as the humble form of 届ける, combining お with 届け and いたします.",
      },
      {
        segments: [
          { text: "荷物[にもつ]をお 客様[きゃくさま]に" },
          { text: "お 届[とど]け", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Places 荷物を before お客様に while using お届けいたします as the humble form of 届ける.",
      },
      {
        segments: [
          { text: "お 客様[きゃくさま]に 荷物[にもつ]を" },
          { text: "お 届[とど]け", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お届けします as another humble form of 届ける, using お with 届け and します.",
      },
      {
        segments: [
          { text: "荷物[にもつ]をお 客様[きゃくさま]に" },
          { text: "お 届[とど]け", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Places 荷物を before お客様に while using お届けします as another humble form of 届ける.",
      },
    ],
  },
  {
    english: "I humbly received advice from the department manager.",
    answers: [
      {
        segments: [
          { text: "部長[ぶちょう]にアドバイスを" },
          {
            text: "いただく",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ku' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes: "Uses いただきました as the humble form of もらう.",
      },
      {
        segments: [
          { text: "部長[ぶちょう]にアドバイスを" },
          { text: "頂戴[ちょうだい]" },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes: "Uses 頂戴しました as another humble form of もらう.",
      },
    ],
  },
  {
    english: "I humbly talked to the president about the new project.",
    hint: "プロジェクト -> project",
    answers: [
      {
        segments: [
          { text: "社長[しゃちょう]に 新[あたら]しいプロジェクトについて" },
          { text: "お 話[はなし]", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お話しました as the humble form of 話す, using お with 話 and しました.",
      },
      {
        segments: [
          { text: "社長[しゃちょう]に 新[あたら]しいプロジェクトについて" },
          { text: "お 話[はなし]し", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お話しいたしました as another humble form of 話す, combining お with 話し and いたしました.",
      },
    ],
  },
  {
    english: "I humbly made a phone call to the department manager.",
    hint: "電話をかける -> to make a phone call",
    answers: [
      {
        segments: [
          { text: "部長[ぶちょう]にお 電話[でんわ]を" },
          { text: "おかけ", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses おかけしました as the humble form of 電話をかける, using お with かけ and しました.",
      },
      {
        segments: [
          { text: "部長[ぶちょう]にお 電話[でんわ]を" },
          { text: "おかけ", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses おかけいたしました as another humble form of 電話をかける, combining お with かけ and いたしました.",
      },
    ],
  },
  {
    english: "I humbly conveyed my gratitude to the teacher.",
    answers: [
      {
        segments: [
          { text: "先生[せんせい]に 感謝[かんしゃ]の 気持[きも]ちを" },
          { text: "お 伝[つた]え", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お伝えしました as the humble form of 伝える, using お with 伝え and しました.",
      },
      {
        segments: [
          { text: "先生[せんせい]に 感謝[かんしゃ]の 気持[きも]ちを" },
          { text: "お 伝[つた]え", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お伝えいたしました as another humble form of 伝える, combining お with 伝え and いたしました.",
      },
      {
        segments: [
          { text: "先生[せんせい]に 感謝[かんしゃ]の 気持[きも]ちを" },
          {
            text: "申[もう]し 上[あ]げる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes: "Uses 申し上げました as the humble form of 言う.",
      },
      {
        segments: [
          { text: "先生[せんせい]にお 礼[れい]を" },
          { text: "お 伝[つた]え", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes: "Uses お礼 and お伝えしました as the humble form of 伝える.",
      },
      {
        segments: [
          { text: "先生[せんせい]にお 礼[れい]を" },
          { text: "お 伝[つた]え", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お礼 and お伝えいたしました as another humble form of 伝える.",
      },
      {
        segments: [
          { text: "先生[せんせい]にお 礼[れい]を" },
          {
            text: "申[もう]し 上[あ]げる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes: "Uses お礼 and 申し上げました as the humble form of 言う.",
      },
    ],
  },
  {
    english:
      "Because the department manager will be going on a business trip, I humbly lent him my camera.",
    answers: [
      {
        segments: [
          {
            text: "部長[ぶちょう]が 出張[しゅっちょう]にいらっしゃるのでカメラを",
          },
          { text: "お 貸[か]し", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お貸ししました as the humble form of 貸す, using お with 貸し and しました.",
      },
      {
        segments: [
          {
            text: "部長[ぶちょう]が 出張[しゅっちょう]にいらっしゃるのでカメラを",
          },
          { text: "お 貸[か]し", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お貸しいたしました as another humble form of 貸す, combining お with 貸し and いたしました.",
      },
      {
        segments: [
          {
            text: "部長[ぶちょう]は 出張[しゅっちょう]にいらっしゃるのでカメラを",
          },
          { text: "お 貸[か]し", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お貸ししました as the humble form of 貸す, using お with 貸し and しました.",
      },
      {
        segments: [
          {
            text: "部長[ぶちょう]は 出張[しゅっちょう]にいらっしゃるのでカメラを",
          },
          { text: "お 貸[か]し", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お貸しいたしました as another humble form of 貸す, combining お with 貸し and いたしました.",
      },
    ],
  },
  {
    english: "I will humbly bring a drink to the customer.",
    answers: [
      {
        segments: [
          { text: "お 客様[きゃくさま]にお 飲[の]み 物[もの]を" },
          { text: "お 持[も]ち", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お持ちいたします as the humble form of 持つ, combining お with 持ち and いたします.",
      },
      {
        segments: [
          { text: "お 客様[きゃくさま]にお 飲[の]み 物[もの]を" },
          { text: "お 持[も]ち", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お持ちします as another humble form of 持つ, using お with 持ち and します.",
      },
      {
        segments: [
          { text: "お 客様[きゃくさま]にお 飲[の]み 物[もの]を" },
          { text: "お 届[とど]け", blank: true },
          {
            text: "いたす",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'su' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お届けいたします as the humble form of 届ける, combining お with 届け and いたします.",
      },
      {
        segments: [
          { text: "お 客様[きゃくさま]にお 飲[の]み 物[もの]を" },
          { text: "お 届[とど]け", blank: true },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        register: "polite",
        notes:
          "Uses お届けします as another humble form of 届ける, using お with 届け and します.",
      },
    ],
  },
]
