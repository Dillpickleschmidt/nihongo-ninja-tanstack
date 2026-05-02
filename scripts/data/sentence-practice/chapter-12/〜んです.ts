import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I want to go to the party, but I have a lot of homework.",
    answers: [
      {
        segments: [
          {
            text: "パーティーに 行[い]きたい"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、 宿題[しゅくだい]が 沢山[たくさん] ある"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "パーティーに 行[い]きたい"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、 宿題[しゅくだい]が 沢山[たくさん] ある"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "パーティーに 行[い]きたい"
          },
          {
            text: "んだけれど",
            blank: true
          },
          {
            text: "、 宿題[しゅくだい]が 沢山[たくさん] ある"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "パーティーに 行[い]きたい"
          },
          {
            text: "んだけれども",
            blank: true
          },
          {
            text: "、 宿題[しゅくだい]が 沢山[たくさん] ある"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "パーティーに 行[い]きたい"
          },
          {
            text: "のですが",
            blank: true
          },
          {
            text: "、 宿題[しゅくだい]が 沢山[たくさん] あります"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "パーティーに 行[い]きたい"
          },
          {
            text: "のだけど",
            blank: true
          },
          {
            text: "、 宿題[しゅくだい]が 沢山[たくさん] ある"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "パーティーに 行[い]きたい"
          },
          {
            text: "んだが",
            blank: true
          },
          {
            text: "、 宿題[しゅくだい]が 沢山[たくさん] ある"
          }
        ],
        register: "casual"
      }
    ]
  },
  {
    english: "I'm sorry — I actually don't eat meat.",
    answers: [
      {
        segments: [
          {
            text: "すみません、 肉[にく]を 食[た]べない"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "すみません、 肉[にく]を 食[た]べない"
          },
          {
            text: "のです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "肉[にく]を 食[た]べない"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、すみません"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "すみませんが、 肉[にく]を 食[た]べない"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "すみませんが、 肉[にく]を 食[た]べない"
          },
          {
            text: "のです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "肉[にく]を 食[た]べない"
          },
          {
            text: "んですけど",
            blank: true
          },
          {
            text: "、すみません"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "すみません、 実[じつ]は 肉[にく]を 食[た]べない"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "すみません、 実[じつ]は 肉[にく]を 食[た]べない"
          },
          {
            text: "のです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "すみませんが、 実[じつ]は 肉[にく]を 食[た]べない"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "すみませんが、 実[じつ]は 肉[にく]を 食[た]べない"
          },
          {
            text: "のです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "実[じつ]は 肉[にく]を 食[た]べない"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、すみません"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "実[じつ]は 肉[にく]を 食[た]べない"
          },
          {
            text: "のですが",
            blank: true
          },
          {
            text: "、すみません"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "実[じつ]は 肉[にく]を 食[た]べない"
          },
          {
            text: "んだけど",
            blank: true
          },
          {
            text: "、ごめんなさい"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "肉[にく]を 食[た]べない"
          },
          {
            text: "んだけど",
            blank: true
          },
          {
            text: "、ごめんなさい"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "すみません、 肉[にく]は 食[た]べない"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "すみません、 実[じつ]は 肉[にく]は 食[た]べない"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "すみません、 実[じつ]は 肉[にく]は 食[た]べない"
          },
          {
            text: "のです",
            blank: true
          }
        ],
        register: "polite"
      }
    ]
  },
  {
    english: "Actually, I borrowed Kenji's bicycle, but...",
    hint: "Kenji = けんじさん",
    answers: [
      {
        segments: [
          {
            text: "けんじさんの 自転車[じてんしゃ]を 借[か]りた"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "けんじさんの 自転車[じてんしゃ]を 借[か]りた"
          },
          {
            text: "んだけど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "けんじさんの 自転車[じてんしゃ]を 借[か]りた"
          },
          {
            text: "んだけれど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "けんじさんの 自転車[じてんしゃ]を 借[か]りた"
          },
          {
            text: "んだけれども",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "けんじさんの 自転車[じてんしゃ]を 借[か]りた"
          },
          {
            text: "んですけど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "けんじさんの 自転車[じてんしゃ]を 借[か]りた"
          },
          {
            text: "のですが",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "けんじさんの 自転車[じてんしゃ]を 借[か]りた"
          },
          {
            text: "のだけど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "けんじさんの 自転車[じてんしゃ]を 借[か]りた"
          },
          {
            text: "んですけれど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      }
    ]
  },
  {
    english: "I actually have a test tomorrow, but I haven't studied at all.",
    answers: [
      {
        segments: [
          {
            text: "明日[あした]テストがある"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、全然[ぜんぜん]勉強[べんきょう]していない"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "明日[あした]テストがある"
          },
          {
            text: "んだけれど",
            blank: true
          },
          {
            text: "、全然[ぜんぜん]勉強[べんきょう]していない"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "明日[あした]テストがある"
          },
          {
            text: "んだけれども",
            blank: true
          },
          {
            text: "、全然[ぜんぜん]勉強[べんきょう]していない"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "明日[あした]テストがある"
          },
          {
            text: "のですが",
            blank: true
          },
          {
            text: "、全然[ぜんぜん]勉強[べんきょう]していません"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "明日[あした]テストがある"
          },
          {
            text: "のだけど",
            blank: true
          },
          {
            text: "、全然[ぜんぜん]勉強[べんきょう]していない"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "明日[あした]はテストがある"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、全然[ぜんぜん]勉強[べんきょう]していない"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "明日[あした] 試験[しけん]がある"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、全然[ぜんぜん]勉強[べんきょう]していない"
          }
        ],
        register: "polite"
      }
    ]
  },
  {
    english: "Actually, I'm a little hungry, but...",
    answers: [
      {
        segments: [
          {
            text: "ちょっと おなかが すいている"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "少し[すこし] おなかが すいている"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "ちょっと おなかが すいている"
          },
          {
            text: "んですけど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "少し[すこし] おなかが すいている"
          },
          {
            text: "んですけど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "ちょっと おなかが すいている"
          },
          {
            text: "のですが",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "ちょっと おなかが すいている"
          },
          {
            text: "のだけど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "おなかが ちょっと すいている"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "おなかが 少し[すこし] すいている"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "ちょっと おなかは すいている"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "ちょっと おなかが すいている"
          },
          {
            text: "んだけれど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "ちょっと おなかが すいている"
          },
          {
            text: "んですけれど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      }
    ]
  },
  {
    english: "Actually, I have a part-time job on Saturday, but...",
    answers: [
      {
        segments: [
          {
            text: "土曜日[どようび]に アルバイトがある"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "土曜日[どようび]は アルバイトがある"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "土曜日[どようび]に アルバイトがある"
          },
          {
            text: "んですけど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "土曜日[どようび]に アルバイトがある"
          },
          {
            text: "んですけれど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "土曜日[どようび]に アルバイトがある"
          },
          {
            text: "のですが",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "土曜日[どようび]に アルバイトがある"
          },
          {
            text: "んだけれど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "土曜日[どようび]は アルバイトがある"
          },
          {
            text: "んですけど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      }
    ]
  },
  {
    english: "I'm going to the park on Sunday, but do you want to come, Saki?",
    hint: "Saki = さきさん",
    answers: [
      {
        segments: [
          {
            text: "日曜日[にちようび]に 公園[こうえん]に 行[い]く"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、さきさんも来[き]ませんか"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "日曜日[にちようび]に 公園[こうえん]に 行[い]く"
          },
          {
            text: "んだけれど",
            blank: true
          },
          {
            text: "、さきさんも来[き]ませんか"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "日曜日[にちようび]に 公園[こうえん]に 行[い]く"
          },
          {
            text: "んだけれども",
            blank: true
          },
          {
            text: "、さきさんも来[き]ませんか"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "日曜日[にちようび]に 公園[こうえん]に 行[い]く"
          },
          {
            text: "のですが",
            blank: true
          },
          {
            text: "、さきさんも来[き]ませんか"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "日曜日[にちようび]に 公園[こうえん]に 行[い]く"
          },
          {
            text: "のだけど",
            blank: true
          },
          {
            text: "、さきさんも来[き]ませんか"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "日曜日[にちようび]に 公園[こうえん]に 行[い]く"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、さきさんも 一緒[いっしょ]に来[き]ませんか"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "さきさん、日曜日[にちようび]に 公園[こうえん]に 行[い]く"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、一緒[いっしょ]に来[き]ませんか"
          }
        ],
        register: "polite"
      }
    ]
  },
  {
    english: "Are you going on a trip, Daiki?",
    hint: "Daiki = だいきさん",
    answers: [
      {
        segments: [
          {
            text: "だいきさん、旅行[りょこう]に行[い]く"
          },
          {
            text: "んですか",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "旅行[りょこう]に行[い]く"
          },
          {
            text: "んですか",
            blank: true
          },
          {
            text: "、だいきさん"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "だいきさん、旅行[りょこう]する"
          },
          {
            text: "んですか",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "旅行[りょこう]する"
          },
          {
            text: "んですか",
            blank: true
          },
          {
            text: "、だいきさん"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "だいきさん、旅行[りょこう]に行[い]く"
          },
          {
            text: "のですか",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "だいきさん、旅行[りょこう]する"
          },
          {
            text: "のですか",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "だいきさんは、旅行[りょこう]に行[い]く"
          },
          {
            text: "んですか",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "だいきさんは、旅行[りょこう]する"
          },
          {
            text: "んですか",
            blank: true
          }
        ],
        register: "polite"
      }
    ]
  },
  {
    english: "Actually, I lost my wallet, but...",
    answers: [
      {
        segments: [
          {
            text: "財布[さいふ]を なくした"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "財布[さいふ]を なくした"
          },
          {
            text: "んだけど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "財布[さいふ]を なくした"
          },
          {
            text: "んだけれど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "財布[さいふ]を なくした"
          },
          {
            text: "んだけれども",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "財布[さいふ]を なくした"
          },
          {
            text: "のですが",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "財布[さいふ]を なくした"
          },
          {
            text: "のだけど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "財布[さいふ]を なくした"
          },
          {
            text: "のだけれど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "財布[さいふ]を なくした"
          },
          {
            text: "のだけれども",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "casual"
      }
    ]
  },
  {
    english: "Actually, this movie is really scary!",
    answers: [
      {
        segments: [
          {
            text: "この 映画[えいが]、本当[ほんとう]に 怖[こわ]い"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "この 映画[えいが]、すごく 怖[こわ]い"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "この 映画[えいが]、とても 怖[こわ]い"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "この 映画[えいが]、本当[ほんとう]に 怖[こわ]い"
          },
          {
            text: "のです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "この 映画[えいが]、すごく 怖[こわ]い"
          },
          {
            text: "のです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "この 映画[えいが]、とても 怖[こわ]い"
          },
          {
            text: "のです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "この 映画[えいが]は 本当[ほんとう]に 怖[こわ]い"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "この 映画[えいが]は すごく 怖[こわ]い"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "この 映画[えいが]は とても 怖[こわ]い"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "この 映画[えいが]が 本当[ほんとう]に 怖[こわ]い"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "この 映画[えいが]が すごく 怖[こわ]い"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      }
    ]
  },
  {
    english: "I'm actually tired, but is it okay if I rest for a bit?",
    answers: [
      {
        segments: [
          {
            text: "疲[つか]れている"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、ちょっと 休[やす]んでも よいですか"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "疲[つか]れている"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、少[すこ]し 休[やす]んでも よいですか"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "疲[つか]れている"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、ちょっと 休[やす]んでも かまいませんか"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "疲[つか]れている"
          },
          {
            text: "のですが",
            blank: true
          },
          {
            text: "、ちょっと 休[やす]んでも よいですか"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "疲[つか]れた"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、ちょっと 休[やす]んでも よいですか"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "疲[つか]れている"
          },
          {
            text: "んだけれど",
            blank: true
          },
          {
            text: "、ちょっと 休[やす]んでも よいですか"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "疲[つか]れている"
          },
          {
            text: "のだけど",
            blank: true
          },
          {
            text: "、ちょっと 休[やす]んでも よいですか"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "疲[つか]れている"
          },
          {
            text: "んだけれど",
            blank: true
          },
          {
            text: "、少[すこ]し 休[やす]んでも よいですか"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "疲[つか]れている"
          },
          {
            text: "のですが",
            blank: true
          },
          {
            text: "、少[すこ]し 休[やす]んでも よいですか"
          }
        ],
        register: "polite"
      }
    ]
  },
  {
    english: "Actually, Hana and her boyfriend just broke up.",
    hint: "Hana = はなさん",
    answers: [
      {
        segments: [
          {
            text: "はなさんと 彼氏[かれし]が さっき 別[わか]れた"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "はなさんと 彼氏[かれし]が さっき 別[わか]れた"
          },
          {
            text: "のです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "はなさんと 彼氏[かれし]が もう 別[わか]れた"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "はなさんと 彼氏[かれし]が もう 別[わか]れた"
          },
          {
            text: "のです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "はなさんと 彼氏[かれし]が 別[わか]れた"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "はなさんと 彼氏[かれし]が 別[わか]れた"
          },
          {
            text: "のです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "はなさんは 彼氏[かれし]と さっき 別[わか]れた"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "はなさんは 彼氏[かれし]と もう 別[わか]れた"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "はなさんは 彼氏[かれし]と 別[わか]れた"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "はなさんと 彼[かれ]が さっき 別[わか]れた"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "はなさんと 彼[かれ]が もう 別[わか]れた"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      }
    ]
  },
  {
    english: "Excuse me — I'm actually looking for the library, but could you tell me where it is?",
    answers: [
      {
        segments: [
          {
            text: "すみません、図書館[としょかん]を探[さが]している"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、どこにあるか 教[おし]えていただけますか"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "すみません、図書館[としょかん]を探[さが]している"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、どこにありますか"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "すみません、図書館[としょかん]を探[さが]している"
          },
          {
            text: "んだけど",
            blank: true
          },
          {
            text: "、どこにあるか 教[おし]えてもらえますか"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "すみません、図書館[としょかん]を探[さが]している"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "すみません、図書館[としょかん]を探[さが]している"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、図書館[としょかん]はどこですか"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "すみません、図書館[としょかん]に行[い]きたい"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、どこにあるか 教[おし]えていただけますか"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "すみません、図書館[としょかん]に行[い]きたい"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、どこにありますか"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "すみません、図書館[としょかん]に行[い]きたい"
          },
          {
            text: "んだけど",
            blank: true
          },
          {
            text: "、どこにあるか 教[おし]えてもらえますか"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "すみません、図書館[としょかん]を探[さが]している"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、図書館[としょかん]はどこか 教[おし]えていただけますか"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "すみません、図書館[としょかん]を探[さが]している"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、教[おし]えてもらえますか"
          }
        ],
        register: "polite"
      }
    ]
  },
  {
    english: "Actually, I'm really into karaoke!",
    answers: [
      {
        segments: [
          {
            text: "カラオケが大好[だいす]き"
          },
          {
            text: "なんです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "カラオケが大好[だいす]き"
          },
          {
            text: "なのです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "カラオケは大好[だいす]き"
          },
          {
            text: "なんです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "カラオケは大好[だいす]き"
          },
          {
            text: "なのです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "カラオケが すごく好[す]き"
          },
          {
            text: "なんです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "カラオケが すごく好[す]き"
          },
          {
            text: "なのです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "実[じつ]は、カラオケが大好[だいす]き"
          },
          {
            text: "なんです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "実[じつ]は、カラオケが大好[だいす]き"
          },
          {
            text: "なのです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "実[じつ]は、カラオケが すごく好[す]き"
          },
          {
            text: "なんです",
            blank: true
          }
        ],
        register: "polite"
      }
    ]
  },
  {
    english: "Actually, the dormitory is really cramped, but...",
    answers: [
      {
        segments: [
          {
            text: "寮[りょう]は 本当[ほんとう]に 狭[せま]い"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "寮[りょう]は 本当[ほんとう]に 狭[せま]い"
          },
          {
            text: "んだけれど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "寮[りょう]は 本当[ほんとう]に 狭[せま]い"
          },
          {
            text: "んだけれども",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "寮[りょう]は 本当[ほんとう]に 狭[せま]い"
          },
          {
            text: "のですが",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "寮[りょう]は 本当[ほんとう]に 狭[せま]い"
          },
          {
            text: "のだけど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "寮[りょう]は 本当[ほんとう]に 狭[せま]い"
          },
          {
            text: "んですけど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "寮[りょう]は すごく 狭[せま]い"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "寮[りょう]は すごく 狭[せま]い"
          },
          {
            text: "んですけど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "寮[りょう]は とても 狭[せま]い"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      }
    ]
  },
  {
    english: "Rin, do you have a fever?",
    hint: "Rin = りんさん",
    answers: [
      {
        segments: [
          {
            text: "りんさん、熱[ねつ]がある"
          },
          {
            text: "んですか",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "りんさん、熱[ねつ]がある"
          },
          {
            text: "のですか",
            blank: true
          }
        ],
        register: "polite"
      }
    ]
  },
  {
    english: "Actually, I want to use Yuki's dictionary, but...",
    hint: "Yuki = ゆきさん",
    answers: [
      {
        segments: [
          {
            text: "ゆきさんの 辞書[じしょ]を使[つか]いたい"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "ゆきさんの 辞書[じしょ]を使[つか]いたい"
          },
          {
            text: "んだけど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "ゆきさんの 辞書[じしょ]を使[つか]いたい"
          },
          {
            text: "んだけれど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "ゆきさんの 辞書[じしょ]を使[つか]いたい"
          },
          {
            text: "んだけれども",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "ゆきさんの 辞書[じしょ]を使[つか]いたい"
          },
          {
            text: "のですが",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "ゆきさんの 辞書[じしょ]を使[つか]いたい"
          },
          {
            text: "のだけど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "ゆきさんの 辞書[じしょ]を使[つか]いたい"
          },
          {
            text: "のだけれど",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "ゆきさんの 辞書[じしょ]を使[つか]いたい"
          },
          {
            text: "のだけれども",
            blank: true
          },
          {
            text: "…"
          }
        ],
        register: "casual"
      }
    ]
  },
  {
    english: "Actually, I want to buy a new camera, but I don't have enough money.",
    answers: [
      {
        segments: [
          {
            text: "新[あたら]しいカメラを 買[か]いたい"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、全然[ぜんぜん] お金[おかね]がない"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "新[あたら]しいカメラを 買[か]いたい"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、お金[おかね]が 全然[ぜんぜん]ない"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "新[あたら]しいカメラを 買[か]いたい"
          },
          {
            text: "んですけど",
            blank: true
          },
          {
            text: "、全然[ぜんぜん] お金[おかね]がありません"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "新[あたら]しいカメラを 買[か]いたい"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、全然[ぜんぜん] お金[おかね]がない"
          },
          {
            text: "んです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "新[あたら]しいカメラを 買[か]いたい"
          },
          {
            text: "のですが",
            blank: true
          },
          {
            text: "、全然[ぜんぜん] お金[おかね]がありません"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "新[あたら]しいカメラを 買[か]いたい"
          },
          {
            text: "んだけれど",
            blank: true
          },
          {
            text: "、全然[ぜんぜん] お金[おかね]がない"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "新[あたら]しいカメラを 買[か]いたい"
          },
          {
            text: "んだけれども",
            blank: true
          },
          {
            text: "、全然[ぜんぜん] お金[おかね]がない"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "新[あたら]しいカメラを 買[か]いたい"
          },
          {
            text: "んですけれど",
            blank: true
          },
          {
            text: "、全然[ぜんぜん] お金[おかね]がありません"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "新[あたら]しいカメラを 買[か]いたい"
          },
          {
            text: "んですけれども",
            blank: true
          },
          {
            text: "、全然[ぜんぜん] お金[おかね]がありません"
          }
        ],
        register: "polite"
      }
    ]
  },
  {
    english: "Actually, Kenji is a firefighter!",
    hint: "Kenji = けんじさん",
    answers: [
      {
        segments: [
          {
            text: "けんじさんは 消防士[しょうぼうし]"
          },
          {
            text: "なんです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "けんじさんは 消防士[しょうぼうし]"
          },
          {
            text: "なのです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "けんじさんが 消防士[しょうぼうし]"
          },
          {
            text: "なんです",
            blank: true
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "けんじさんが 消防士[しょうぼうし]"
          },
          {
            text: "なのです",
            blank: true
          }
        ],
        register: "polite"
      }
    ]
  },
  {
    english: "Actually, I want to go to the concert, but I don't have a ticket.",
    answers: [
      {
        segments: [
          {
            text: "コンサートに 行[い]きたい"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、チケットが ありません"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "コンサートに 行[い]きたい"
          },
          {
            text: "んだけど",
            blank: true
          },
          {
            text: "、チケットが ない"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "コンサートに 行[い]きたい"
          },
          {
            text: "んだけれど",
            blank: true
          },
          {
            text: "、チケットが ない"
          }
        ],
        register: "casual"
      },
      {
        segments: [
          {
            text: "コンサートに 行[い]きたい"
          },
          {
            text: "のですが",
            blank: true
          },
          {
            text: "、チケットが ありません"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "コンサートに 行[い]きたい"
          },
          {
            text: "んですけど",
            blank: true
          },
          {
            text: "、チケットが ありません"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "コンサートに 行[い]きたい"
          },
          {
            text: "んですが",
            blank: true
          },
          {
            text: "、チケットを 持[も]っていません"
          }
        ],
        register: "polite"
      },
      {
        segments: [
          {
            text: "コンサートに 行[い]きたい"
          },
          {
            text: "んだけど",
            blank: true
          },
          {
            text: "、チケットを 持[も]っていない"
          }
        ],
        register: "casual"
      }
    ]
  }
];
