import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "This coffee is hot and delicious!",
    answers: [
      {
        segments: [
          { text: "このコーヒーは" },
          { text: "熱[あつ]くて", blank: true },
          {
            text: "おいしい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "このコーヒーが" },
          { text: "熱[あつ]くて", blank: true },
          {
            text: "おいしい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が instead of は — emphasizes this coffee specifically",
      },
      {
        segments: [
          { text: "このコーヒーは" },
          { text: "熱[あつ]くて", blank: true },
          {
            text: "うまい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: 'うまい instead of おいしい — casual/masculine synonym for "delicious"',
      },
      {
        segments: [
          { text: "このコーヒーが" },
          { text: "熱[あつ]くて", blank: true },
          {
            text: "うまい",
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が + うまい — emphasizes this coffee, casual/masculine",
      },
    ],
  },
  {
    english:
      "Kobayashi is a graduate student and sometimes teaches Japanese at school.",
    hint: "Kobayashi = 小林 (こばやし)",
    answers: [
      {
        segments: [
          { text: "小林[こばやし]さんは" },
          { text: "大学院生[だいがくいんせい]で", blank: true },
          { text: "、 学校[がっこう]で 時々[ときどき] 日本語[にほんご]を" },
          {
            text: "教[おし]える",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "小林[こばやし]さんは 大学院生[だいがくいんせい]で、 時々[ときどき] 学校[がっこう]で 日本語[にほんご]を" },
          {
            text: "教[おし]える",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "時々 moved before 学校で",
      },
    ],
  },
  {
    english: "Kaede's room is quiet and beautiful, so I always study there.",
    hint: "Kaede = 楓 (かえで)",
    answers: [
      {
        segments: [
          { text: "楓[かえで]さんの 部屋[へや]は" },
          { text: "静[しず]かできれいで", blank: true },
          { text: "、いつもそこで 勉強[べんきょう]" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "楓[かえで]さんの 部屋[へや]は" },
          { text: "静[しず]かできれいだから", blank: true },
          { text: "、いつもそこで 勉強[べんきょう]" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using だから instead of で for 'so/because'",
      },
      {
        segments: [
          { text: "楓[かえで]の 部屋[へや]は" },
          { text: "静[しず]かできれいで", blank: true },
          { text: "、いつもそこで 勉強[べんきょう]" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "楓 without さん",
      },
      {
        segments: [
          { text: "楓[かえで]の 部屋[へや]は" },
          { text: "静[しず]かできれいだから", blank: true },
          { text: "、いつもそこで 勉強[べんきょう]" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "楓 without さん + だから",
      },
    ],
  },
  {
    english: "I was busy and couldn't go to the park yesterday.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]は" },
          {
            text: "忙[いそが]しくて、 公園[こうえん]に 行[い]く",
            blank: true,
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]" },
          { text: "忙[いそが]しくて、 公園[こうえん]に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "は dropped",
      },
      {
        segments: [
          { text: "昨日[きのう]は 忙[いそが]しくて 公園[こうえん]に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう] 忙[いそが]しくて 公園[こうえん]に" },
          {
            text: "行[い]く",
            conjugation: {
              pos: "Godan verb - Iku/Yuku special class",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "は dropped, no comma",
      },
    ],
  },
  {
    english:
      "Shunsuke's older sister is smart and kind, so she has lots of friends at her company.",
    hint: "Shunsuke = 俊介 (しゅんすけ)",
    answers: [
      {
        segments: [
          { text: "俊介[しゅんすけ]さんのお 姉[ねえ]さんは" },
          { text: "頭[あたま]がよくて 親切[しんせつ]で", blank: true },
          { text: "、 会社[かいしゃ]で 友達[ともだち]がたくさん" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんのお 姉[ねえ]さんは 頭[あたま]がよくて 親切[しんせつ]で、 会社[かいしゃ]に 友達[ともだち]がたくさん" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "会社に instead of 会社で",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんのお 姉[ねえ]さんは 頭[あたま]がよくて 親切[しんせつ]なので、 会社[かいしゃ]で 友達[ともだち]がたくさん" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using なので instead of で for causation",
      },
    ],
  },
  {
    english:
      "The homework is long and difficult, so I can't finish it quickly.",
    answers: [
      {
        segments: [
          { text: "宿題[しゅくだい]は" },
          { text: "長[なが]くて 難[むずか]しくて", blank: true },
          { text: "、 早[はや]く" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "宿題[しゅくだい]は 長[なが]くて 難[むずか]しいから、 早[はや]く" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Using から instead of て-form for 'so'",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]は 難[むずか]しくて 長[なが]くて、 早[はや]く" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Reversed order: 難しくて before 長くて",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]が 長[なが]くて 難[むずか]しくて、 早[はや]く" },
          {
            text: "する",
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "が instead of は",
      },
    ],
  },
  {
    english: "The cafeteria food is cheap and good, so I eat there every day.",
    answers: [
      {
        segments: [
          { text: "食堂[しょくどう]のご 飯[はん]は" },
          { text: "安[やす]くておいしい", blank: true },
          { text: "ので、 毎日[まいにち]" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "食堂[しょくどう]のご 飯[はん]は" },
          { text: "安[やす]くておいしいから", blank: true },
          { text: "、 毎日[まいにち]" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "から instead of ので",
      },
      {
        segments: [
          { text: "食堂[しょくどう]の 食[た]べ 物[もの]は" },
          { text: "安[やす]くておいしい", blank: true },
          { text: "ので、 毎日[まいにち]" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "食べ物 instead of ご飯",
      },
      {
        segments: [
          { text: "食堂[しょくどう]の 食[た]べ 物[もの]は" },
          { text: "安[やす]くておいしいから", blank: true },
          { text: "、 毎日[まいにち]" },
          {
            text: "食[た]べる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "食べ物 + から",
      },
    ],
  },
  {
    english: "Fujii is a nurse and very kind, so everyone likes him.",
    hint: "Fujii = 藤井 (ふじい)",
    answers: [
      {
        segments: [
          { text: "藤井[ふじい]さんは" },
          { text: "看護師[かんごし]で とても 親切[しんせつ]で", blank: true },
          { text: "、みんなが 藤井[ふじい]さんが 好[す]き" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "藤井[ふじい]さんは" },
          { text: "看護師[かんごし]で、 とても 親切[しんせつ]で", blank: true },
          { text: "、みんなが 藤井[ふじい]さんが 好[す]き" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "藤井[ふじい]さんは" },
          { text: "看護師[かんごし]で とても 親切[しんせつ]だから", blank: true },
          { text: "、みんなが 藤井[ふじい]さんが 好[す]き" },
          { text: "です" },
        ],
        notes: "Using だから instead of the で-chain for 'so'",
      },
    ],
  },
  {
    english:
      "This park is large and lively, so a lot of people come here on weekends.",
    answers: [
      {
        segments: [
          { text: "この 公園[こうえん]は" },
          { text: "大[おお]きくてにぎやかで", blank: true },
          { text: "、 週末[しゅうまつ]に たくさんの 人[ひと]が" },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "この 公園[こうえん]は" },
          { text: "大[おお]きくてにぎやかで", blank: true },
          { text: "、 週末[しゅうまつ]に たくさん 人[ひと]が" },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "たくさん without の",
      },
      {
        segments: [
          { text: "この 公園[こうえん]は" },
          { text: "大[おお]きくてにぎやかで", blank: true },
          { text: "、 週末[しゅうまつ]は たくさんの 人[ひと]が" },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "週末は (topic) instead of 週末に",
      },
      {
        segments: [
          { text: "この 公園[こうえん]は" },
          { text: "大[おお]きくてにぎやかで", blank: true },
          { text: "、 週末[しゅうまつ]に たくさんの 人[ひと]が ここに" },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "With ここに explicit",
      },
    ],
  },
  {
    english: "Sora's dog is cute and small, so everyone likes it.",
    hint: "Sora = 空 (そら)",
    answers: [
      {
        segments: [
          { text: "空[そら]さんの 犬[いぬ]は" },
          { text: "かわいくて 小[ちい]さくて", blank: true },
          { text: "、みんながいつも 好[す]き" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "空[そら]の 犬[いぬ]は" },
          { text: "かわいくて 小[ちい]さくて", blank: true },
          { text: "、みんながいつも 好[す]き" },
          { text: "です" },
        ],
        notes: "空 without さん",
      },
      {
        segments: [
          { text: "空[そら]さんの 犬[いぬ]は" },
          { text: "かわいくて 小[ちい]さいから", blank: true },
          { text: "、みんながいつも 好[す]き" },
          { text: "です" },
        ],
        notes: "から instead of て for the reason clause",
      },
      {
        segments: [
          { text: "空[そら]の 犬[いぬ]は" },
          { text: "かわいくて 小[ちい]さいから", blank: true },
          { text: "、みんながいつも 好[す]き" },
          { text: "です" },
        ],
        notes: "空 without さん + から",
      },
    ],
  },
  {
    english:
      "This dictionary is old and a little small, but I use it every day.",
    answers: [
      {
        segments: [
          { text: "この 辞書[じしょ]は" },
          { text: "古[ふる]くてちょっと 小[ちい]さい", blank: true },
          { text: "、でも 毎日[まいにち]" },
          {
            text: "使[つか]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "この 辞書[じしょ]は" },
          { text: "古[ふる]くて 少[すこ]し 小[ちい]さい", blank: true },
          { text: "、でも 毎日[まいにち]" },
          {
            text: "使[つか]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "少し instead of ちょっと",
      },
      {
        segments: [
          { text: "この 辞書[じしょ]は" },
          { text: "古[ふる]くてちょっと 小[ちい]さいけど", blank: true },
          { text: "、 毎日[まいにち]" },
          {
            text: "使[つか]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "けど instead of でも",
      },
      {
        segments: [
          { text: "この 辞書[じしょ]は" },
          { text: "古[ふる]くて 少[すこ]し 小[ちい]さいけど", blank: true },
          { text: "、 毎日[まいにち]" },
          {
            text: "使[つか]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "少し + けど",
      },
    ],
  },
  {
    english: "Mori is a lawyer and very busy, so she can't come to the party.",
    hint: "Mori = 森 (もり)",
    answers: [
      {
        segments: [
          { text: "森[もり]さんは" },
          { text: "弁護士[べんごし]で とても 忙[いそが]しくて", blank: true },
          { text: "、パーティーに" },
          {
            text: "来[く]",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "potential",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "森[もり]は" },
          { text: "弁護士[べんごし]で とても 忙[いそが]しくて", blank: true },
          { text: "、パーティーに" },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "potential",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "森 without さん",
      },
      {
        segments: [
          { text: "森[もり]さんは" },
          { text: "弁護士[べんごし]で、 とても 忙[いそが]しくて", blank: true },
          { text: "、パーティーに" },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "potential",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "森[もり]さんは" },
          { text: "弁護士[べんごし]で とても 忙[いそが]しくて", blank: true },
          { text: "、パーティーに" },
          {
            text: "来[こ]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Plain negative 来ない instead of potential",
      },
    ],
  },
  {
    english: "This song is fun and easy, so everyone sings it well.",
    answers: [
      {
        segments: [
          { text: "この 歌[うた]は" },
          { text: "楽[たの]しくてやさしい", blank: true },
          { text: "から、みんなよく" },
          {
            text: "歌[うた]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "この 歌[うた]は" },
          { text: "楽[たの]しくてやさしい", blank: true },
          { text: "から、みんなが よく" },
          {
            text: "歌[うた]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "みんなが instead of みんな",
      },
      {
        segments: [
          { text: "この 歌[うた]は" },
          { text: "楽[たの]しくてやさしい", blank: true },
          { text: "ので、みんな よく" },
          {
            text: "歌[うた]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "ので instead of から",
      },
      {
        segments: [
          { text: "この 歌[うた]は" },
          { text: "楽[たの]しくてやさしい", blank: true },
          { text: "ので、みんなが よく" },
          {
            text: "歌[うた]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "ので + みんなが",
      },
    ],
  },
  {
    english:
      "My older brother is tall and good-looking, so he has lots of friends at his university.",
    answers: [
      {
        segments: [
          { text: "兄[あに]は" },
          { text: "背[せ]が 高[たか]くてかっこよくて", blank: true },
          { text: "、 大学[だいがく]で 友達[ともだち]がたくさん" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "兄[あに]は" },
          { text: "背[せ]が 高[たか]くて 頭[あたま]がよくて", blank: true },
          { text: "、 大学[だいがく]で 友達[ともだち]がたくさん" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "頭がよくて (smart) instead of かっこよくて",
      },
      {
        segments: [
          { text: "兄[あに]は" },
          { text: "背[せ]が 高[たか]くてかっこよくて", blank: true },
          { text: "、 大学[だいがく]でたくさんの 友達[ともだち]が" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "たくさんの友達が instead of 友達がたくさん",
      },
      {
        segments: [
          { text: "兄[あに]は" },
          { text: "背[せ]が 高[たか]くて 頭[あたま]がよくて", blank: true },
          { text: "、 大学[だいがく]でたくさんの 友達[ともだち]が" },
          {
            text: "いる",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "頭がよくて + たくさんの友達が",
      },
    ],
  },
  {
    english:
      "This restaurant is quiet and convenient, so I always bring friends here.",
    answers: [
      {
        segments: [
          { text: "このレストランは" },
          { text: "静[しず]かで 便利[べんり]で", blank: true },
          { text: "、いつも 友達[ともだち]と" },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "このレストランは" },
          { text: "静[しず]かで 便利[べんり]で", blank: true },
          { text: "、いつも 友達[ともだち]とここに" },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "With ここに explicit",
      },
      {
        segments: [
          { text: "このレストランは" },
          { text: "静[しず]かで 便利[べんり]だから", blank: true },
          { text: "、いつも 友達[ともだち]と" },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using だから instead of で",
      },
      {
        segments: [
          { text: "このレストランは" },
          { text: "静[しず]かで 便利[べんり]だから", blank: true },
          { text: "、いつも 友達[ともだち]とここに" },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "だから + ここに",
      },
      {
        segments: [
          { text: "このレストランは" },
          { text: "静[しず]かで 便利[べんり]で", blank: true },
          { text: "、いつも 友達[ともだち]とここへ" },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "ここへ instead of ここに",
      },
      {
        segments: [
          { text: "このレストランは" },
          { text: "便利[べんり]で 静[しず]かで", blank: true },
          { text: "、いつも 友達[ともだち]と" },
          {
            text: "来[く]る",
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Adjective order reversed: 便利で 静かで",
      },
    ],
  },
  {
    english:
      "I love this neighborhood — it's lively and convenient, so I want to live here forever.",
    answers: [
      {
        segments: [
          { text: "この 町[まち]は" },
          { text: "にぎやかで 便利[べんり]だから", blank: true },
          { text: "、いつもここに" },
          {
            text: "住[す]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "この 町[まち]は" },
          { text: "にぎやかで 便利[べんり]で", blank: true },
          { text: "、いつもここに" },
          {
            text: "住[す]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "で chain instead of だから",
      },
      {
        segments: [
          { text: "この 町[まち]は" },
          { text: "便利[べんり]でにぎやかだから", blank: true },
          { text: "、いつもここに" },
          {
            text: "住[す]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Reversed adjective order: 便利で + にぎやかだから",
      },
      {
        segments: [
          { text: "この 町[まち]は" },
          { text: "にぎやかで 便利[べんり]だから", blank: true },
          { text: "、ここにいつも" },
          {
            text: "住[す]む",
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Adverb ここに before いつも",
      },
    ],
  },
  {
    english:
      "My younger brother is funny and interesting, so everyone at school likes him.",
    answers: [
      {
        segments: [
          { text: "弟[おとうと]は" },
          { text: "おもしろくて 楽[たの]しくて", blank: true },
          { text: "、 学校[がっこう]でみんなが 好[す]き" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "弟[おとうと]は" },
          { text: "おもしろくて 楽[たの]しいから", blank: true },
          { text: "、 学校[がっこう]でみんなが 好[す]き" },
          { text: "です" },
        ],
        notes: "から instead of て for the reason clause",
      },
      {
        segments: [
          { text: "弟[おとうと]は" },
          { text: "おもしろくて 楽[たの]しいので", blank: true },
          { text: "、 学校[がっこう]でみんなが 好[す]き" },
          { text: "です" },
        ],
        notes: "ので instead of て",
      },
      {
        segments: [
          { text: "弟[おとうと]は" },
          { text: "おもしろくて 楽[たの]しくて", blank: true },
          { text: "、 学校[がっこう]でみんなが 大好[だいす]き" },
          { text: "です" },
        ],
        notes: "大好き instead of 好き",
      },
      {
        segments: [
          { text: "弟[おとうと]は" },
          { text: "おもしろくて 楽[たの]しくて", blank: true },
          { text: "、 学校[がっこう]でみんなが 弟[おとうと]のことが 好[す]き" },
          { text: "です" },
        ],
        notes: "Explicit object 弟のことが好き",
      },
      {
        segments: [
          { text: "弟[おとうと]は" },
          { text: "頭[あたま]がよくて 親切[しんせつ]で", blank: true },
          { text: "、 学校[がっこう]でみんなが 好[す]き" },
          { text: "です" },
        ],
        notes: "頭がよくて 親切で instead of おもしろくて 楽しくて",
      },
    ],
  },
  {
    english:
      "Miho's older sister is a doctor and kind, so she always teaches me about Japanese carefully.",
    hint: "Miho = 美穂 (みほ)",
    answers: [
      {
        segments: [
          { text: "美穂[みほ]さんのお 姉[ねえ]さんは" },
          { text: "医者[いしゃ]で 親切[しんせつ]で", blank: true },
          { text: "、いつも 私[わたし]に 日本語[にほんご]をやさしく" },
          {
            text: "教[おし]える",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "美穂[みほ]さんのお 姉[ねえ]さんは" },
          { text: "医者[いしゃ]で 親切[しんせつ]だから", blank: true },
          { text: "、いつも 私[わたし]に 日本語[にほんご]をやさしく" },
          {
            text: "教[おし]える",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "だから instead of chained で",
      },
      {
        segments: [
          { text: "美穂[みほ]のお 姉[ねえ]さんは" },
          { text: "医者[いしゃ]で 親切[しんせつ]で", blank: true },
          { text: "、いつも 私[わたし]に 日本語[にほんご]をやさしく" },
          {
            text: "教[おし]える",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "美穂 without さん",
      },
      {
        segments: [
          { text: "美穂[みほ]のお 姉[ねえ]さんは" },
          { text: "医者[いしゃ]で 親切[しんせつ]だから", blank: true },
          { text: "、いつも 私[わたし]に 日本語[にほんご]をやさしく" },
          {
            text: "教[おし]える",
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "美穂 without さん + だから",
      },
    ],
  },
  {
    english: "This souvenir is cute and cheap, so I want to buy a lot!",
    answers: [
      {
        segments: [
          { text: "このお 土産[みやげ]は" },
          { text: "かわいくて 安[やす]くて", blank: true },
          { text: "、たくさん" },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "このお 土産[みやげ]は" },
          { text: "かわいくて 安[やす]いから", blank: true },
          { text: "、たくさん" },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "から instead of て",
      },
      {
        segments: [
          { text: "この 土産[みやげ]は" },
          { text: "かわいくて 安[やす]くて", blank: true },
          { text: "、たくさん" },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "土産 without お",
      },
      {
        segments: [
          { text: "この 土産[みやげ]は" },
          { text: "かわいくて 安[やす]いから", blank: true },
          { text: "、たくさん" },
          {
            text: "買[か]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "tai-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "土産 without お + から",
      },
    ],
  },
  {
    english:
      "Mizuki's apartment is new and clean, so she lives there very comfortably.",
    hint: "Mizuki = 瑞希 (みずき); apartment = アパート",
    answers: [
      {
        segments: [
          { text: "瑞希[みずき]さんのアパートは" },
          { text: "新[あたら]しくてきれいで", blank: true },
          { text: "、とても 楽[たの]しく 住[す]んで" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "瑞希[みずき]さんのアパートは" },
          { text: "新[あたら]しくてきれいだから", blank: true },
          { text: "、とても 楽[たの]しく 住[す]んで" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "だから instead of で",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんのアパートは" },
          { text: "新[あたら]しくてきれいなので", blank: true },
          { text: "、とても 楽[たの]しく 住[す]んで" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "なので instead of で",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんのアパートは" },
          { text: "新[あたら]しくてきれいで", blank: true },
          { text: "、とても 楽[たの]しくそこに 住[す]んで" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "With そこに explicit",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんのアパートは" },
          { text: "新[あたら]しくてきれいだから", blank: true },
          { text: "、とても 楽[たの]しくそこに 住[す]んで" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "だから + そこに",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんのアパートは" },
          { text: "新[あたら]しくてきれいで", blank: true },
          { text: "、瑞希[みずき]さんはそこにとても 楽[たの]しく 住[す]んで" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "With 瑞希[みずき]さんは re-introduced + そこに",
      },
    ],
  },
]
