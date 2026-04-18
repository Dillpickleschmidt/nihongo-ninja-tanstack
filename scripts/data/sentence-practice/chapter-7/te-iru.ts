import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I'm eating breakfast right now.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今[いま] 朝[あさ]ご 飯[はん]を" },
          {
            text: "食[た]べている",
            blank: true,
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
          { text: "私[わたし]は 朝[あさ]ご 飯[はん]を 今[いま]" },
          {
            text: "食[た]べている",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "今 moved to before the verb",
      },
      {
        segments: [
          { text: "今[いま] 私[わたし]は 朝[あさ]ご 飯[はん]を" },
          {
            text: "食[た]べている",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "今 moved to the very beginning",
      },
      {
        segments: [
          { text: "私[わたし]は 今[いま] 朝[あさ]ご 飯[はん]を" },
          { text: "食[た]べてる", blank: true },
        ],
        notes: "Contracted てる form",
      },
      {
        segments: [
          { text: "今[いま] 朝[あさ]ご 飯[はん]を" },
          { text: "食[た]べてる", blank: true },
        ],
        notes: "Contracted てる, pronoun dropped, 今 at start",
      },
      {
        segments: [
          { text: "私[わたし]が 今[いま] 朝[あさ]ご 飯[はん]を" },
          {
            text: "食[た]べている",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が instead of は",
      },
    ],
  },
  {
    english: "Kenji is married.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは" },
          { text: "結婚[けっこん]して", blank: true },
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
      },
      {
        segments: [
          { text: "けんじさんは" },
          { text: "結婚[けっこん]してる", blank: true },
        ],
        notes: "Casual い-dropped form",
      },
      {
        segments: [
          { text: "けんじさんは" },
          { text: "結婚[けっこん]してます", blank: true },
        ],
        notes: "Polite い-dropped form",
      },
    ],
  },
  {
    english: "Kenji was singing in the library!",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは 図書館[としょかん]で" },
          {
            text: "歌[うた]っていた",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "けんじさんが 図書館[としょかん]で" },
          {
            text: "歌[うた]っていた",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "けんじさんは 図書館[としょかん]で 歌[うた]を" },
          {
            text: "歌[うた]っていた",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "歌を歌っていた — 'singing a song'",
      },
      {
        segments: [
          { text: "けんじさんが 図書館[としょかん]で 歌[うた]を" },
          {
            text: "歌[うた]っていた",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "歌を歌っていた + が",
      },
    ],
  },
  {
    english: "Does Kenji drink coffee every morning?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは 毎朝[まいあさ] コーヒーを" },
          {
            text: "飲[の]んでいる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "けんじさんは 毎朝[まいあさ] コーヒーを" },
          {
            text: "飲[の]んでる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "Contracted でる form",
      },
      {
        segments: [
          { text: "けんじさんは 毎朝[まいあさ] コーヒーを" },
          {
            text: "飲[の]んでいる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "の" },
        ],
        notes: "の question particle instead of か",
      },
      {
        segments: [
          { text: "けんじさんは 毎朝[まいあさ] コーヒーを" },
          {
            text: "飲[の]んでる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "の" },
        ],
        notes: "Contracted でる + の question",
      },
    ],
  },
  {
    english: "My father works at a bank.",
    answers: [
      {
        segments: [
          { text: "父[ちち]は 銀行[ぎんこう]で 働[はたら]いて" },
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
      },
      {
        segments: [
          { text: "父[ちち]が 銀行[ぎんこう]で 働[はたら]いて" },
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
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "父[ちち]は 銀行[ぎんこう]で" },
          { text: "働[はたら]いてる", blank: true },
        ],
        notes: "Contracted てる form",
      },
      {
        segments: [
          { text: "私[わたし]の 父[ちち]は 銀行[ぎんこう]で 働[はたら]いて" },
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
        notes: "Explicit 私の父は",
      },
      {
        segments: [
          { text: "父[ちち]は 銀行[ぎんこう]で" },
          { text: "働[はたら]いている", blank: true },
        ],
        notes: "働いている as a single chunk",
      },
      {
        segments: [
          { text: "父[ちち]が 銀行[ぎんこう]で" },
          { text: "働[はたら]いている", blank: true },
        ],
        notes: "が + single-chunk 働いている",
      },
      {
        segments: [
          { text: "父[ちち]が 銀行[ぎんこう]で" },
          { text: "働[はたら]いてる", blank: true },
        ],
        notes: "Contracted てる with が",
      },
      {
        segments: [
          { text: "父[ちち]は 銀行[ぎんこう]に 勤[つと]めて" },
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
        notes: "勤める + に — emphasizes employment relationship (vs 働く + で)",
      },
    ],
  },
  {
    english: "Is Kenji wearing glasses?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは 眼鏡[めがね]を" },
          { text: "かけて", blank: true },
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
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "けんじさんは 眼鏡[めがね]を" },
          { text: "かけてる", blank: true },
          { text: "か" },
        ],
        notes: "Casual い-dropped",
      },
      {
        segments: [
          { text: "けんじさんは 眼鏡[めがね]を" },
          { text: "かけてます", blank: true },
          { text: "か" },
        ],
        notes: "Polite い-dropped",
      },
    ],
  },
  {
    english: "Kenji is sleeping in the car right now.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは 今[いま] 車[くるま]の 中[なか]で" },
          { text: "寝[ね]て", blank: true },
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
      },
      {
        segments: [
          { text: "今[いま]、 けんじさんは 車[くるま]の 中[なか]で" },
          { text: "寝[ね]て", blank: true },
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
        notes: "今 moved to the front",
      },
      {
        segments: [
          { text: "けんじさんは 今[いま] 車[くるま]で" },
          { text: "寝[ね]て", blank: true },
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
        notes: "車で instead of 車の中で",
      },
      {
        segments: [
          { text: "けんじさんが 今[いま] 車[くるま]の 中[なか]で" },
          { text: "寝[ね]て", blank: true },
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
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "けんじさんが 今[いま] 車[くるま]で" },
          { text: "寝[ね]て", blank: true },
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
        notes: "が + 車で",
      },
      {
        segments: [
          { text: "けんじさんは 今[いま] 車[くるま]の 中[なか]で" },
          { text: "寝[ね]てる", blank: true },
        ],
        notes: "Contracted てる form",
      },
      {
        segments: [
          { text: "けんじさんは 今[いま] 車[くるま]で" },
          { text: "寝[ね]てる", blank: true },
        ],
        notes: "Contracted てる + 車で",
      },
      {
        segments: [
          { text: "今[いま]、 けんじさんが 車[くるま]の 中[なか]で" },
          { text: "寝[ね]て", blank: true },
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
        notes: "今 at front + が",
      },
      {
        segments: [
          { text: "けんじさんは 今[いま] 車[くるま]の 中[なか]で" },
          {
            text: "寝[ね]ている",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "寝ている as a single chunk",
      },
      {
        segments: [
          { text: "けんじさんは 今[いま] 車[くるま]で" },
          {
            text: "寝[ね]ている",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "寝ている single chunk + 車で",
      },
    ],
  },
  {
    english: "The dog is dead.",
    answers: [
      {
        segments: [
          { text: "犬[いぬ]は" },
          { text: "死[し]んでいる", blank: true },
        ],
      },
      {
        segments: [
          { text: "犬[いぬ]は" },
          { text: "死[し]んでいます", blank: true },
        ],
        notes: "Polite",
      },
      {
        segments: [
          { text: "犬[いぬ]は" },
          { text: "死[し]んでる", blank: true },
        ],
        notes: "Casual い-dropped",
      },
      {
        segments: [
          { text: "犬[いぬ]は" },
          { text: "死[し]んでます", blank: true },
        ],
        notes: "Polite い-dropped",
      },
      {
        segments: [
          { text: "犬[いぬ]が" },
          { text: "死[し]んでいる", blank: true },
        ],
        notes: "が instead of は",
      },
    ],
  },
  {
    english: "I always listen to music while studying.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は いつも 勉強[べんきょう]して 音楽[おんがく]を" },
          { text: "聞[き]いている", blank: true },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は いつも 勉強[べんきょう]して 音楽[おんがく]を" },
          { text: "聞[き]いてる", blank: true },
        ],
        notes: "Contracted てる form",
      },
      {
        segments: [
          { text: "私[わたし]が いつも 勉強[べんきょう]して 音楽[おんがく]を" },
          { text: "聞[き]いている", blank: true },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "私[わたし]は 勉強[べんきょう]して いつも 音楽[おんがく]を" },
          { text: "聞[き]いている", blank: true },
        ],
        notes: "いつも moved after 勉強して",
      },
      {
        segments: [
          { text: "私[わたし]は いつも 勉強[べんきょう]して 音楽[おんがく]を" },
          { text: "聴[き]いている", blank: true },
        ],
        notes: "Using 聴く (listen attentively) instead of 聞く",
      },
      {
        segments: [
          { text: "いつも 勉強[べんきょう]しながら 音楽[おんがく]を" },
          { text: "聞[き]いている", blank: true },
        ],
        notes: "〜ながら (while) for concurrent action, subject dropped",
      },
    ],
  },
  {
    english: "The door is open.",
    answers: [
      {
        segments: [
          { text: "ドアが" },
          { text: "開[あ]いて", blank: true },
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
      },
      {
        segments: [
          { text: "ドアは" },
          { text: "開[あ]いて", blank: true },
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
        notes: "は particle",
      },
    ],
  },
  {
    english: "Was Kenji writing a report at the café?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは カフェで レポートを 書[か]いて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "カフェで けんじさんは レポートを 書[か]いて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "Location カフェで moved to front",
      },
      {
        segments: [
          { text: "けんじさんが カフェで レポートを 書[か]いて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "けんじさんは 喫茶店[きっさてん]で レポートを 書[か]いて" },
          {
            text: "いる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "か" },
        ],
        notes: "喫茶店 instead of カフェ",
      },
    ],
  },
  {
    english: "The window is closed.",
    answers: [
      {
        segments: [
          { text: "窓[まど]が" },
          { text: "閉[し]まって", blank: true },
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
      },
      {
        segments: [
          { text: "窓[まど]は" },
          { text: "閉[し]まって", blank: true },
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
        notes: "は particle",
      },
      {
        segments: [
          { text: "窓[まど]が" },
          { text: "閉[し]まってる", blank: true },
        ],
        notes: "Casual い-dropped",
      },
      {
        segments: [
          { text: "窓[まど]は" },
          { text: "閉[し]まってる", blank: true },
        ],
        notes: "は + casual い-dropped",
      },
    ],
  },
  {
    english: "I work at a hospital every day.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 毎日[まいにち] 病院[びょういん]で" },
          { text: "働[はたら]いて", blank: true },
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
      },
      {
        segments: [
          { text: "私[わたし]は 病院[びょういん]で 毎日[まいにち]" },
          { text: "働[はたら]いて", blank: true },
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
        notes: "Location before time",
      },
      {
        segments: [
          { text: "私[わたし]は 毎日[まいにち] 病院[びょういん]で" },
          { text: "働[はたら]いてる", blank: true },
        ],
        notes: "Contracted てる form",
      },
      {
        segments: [
          { text: "私[わたし]が 毎日[まいにち] 病院[びょういん]で" },
          { text: "働[はたら]いて", blank: true },
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
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "私[わたし]は 病院[びょういん]で 毎日[まいにち]" },
          { text: "働[はたら]いてる", blank: true },
        ],
        notes: "Contracted てる, location before time",
      },
      {
        segments: [
          { text: "私[わたし]が 病院[びょういん]で 毎日[まいにち]" },
          { text: "働[はたら]いて", blank: true },
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
        notes: "が + location before time",
      },
      {
        segments: [
          { text: "私[わたし]が 毎日[まいにち] 病院[びょういん]で" },
          { text: "働[はたら]いてる", blank: true },
        ],
        notes: "が + contracted てる form",
      },
    ],
  },
  {
    english: "Kenji's younger brother is living in Canada now.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんの 弟[おとうと]は 今[いま] カナダに" },
          { text: "住[す]んで", blank: true },
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
      },
      {
        segments: [
          { text: "けんじさんの 弟[おとうと]は カナダに 今[いま]" },
          { text: "住[す]んで", blank: true },
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
        notes: "今 moved after カナダに",
      },
      {
        segments: [
          { text: "けんじさんの 弟[おとうと]は 今[いま] カナダに" },
          { text: "住[す]んでる", blank: true },
        ],
        notes: "Casual い-dropped form",
      },
      {
        segments: [
          { text: "けんじさんの 弟[おとうと]は カナダに 今[いま]" },
          { text: "住[す]んでる", blank: true },
        ],
        notes: "Casual い-dropped, alternate word order",
      },
    ],
  },
  {
    english: "I was using my dad's car every day back then.",
    answers: [
      {
        segments: [
          {
            text: "あのころ、 私[わたし]は 毎日[まいにち] 父[ちち]の 車[くるま]を",
          },
          { text: "使[つか]っていた", blank: true },
        ],
      },
      {
        segments: [
          {
            text: "その 頃[ころ]、 私[わたし]は 毎日[まいにち] 父[ちち]の 車[くるま]を",
          },
          { text: "使[つか]っていた", blank: true },
        ],
        notes: "その頃 instead of あのころ",
      },
      {
        segments: [
          {
            text: "あのころ、 私[わたし]は 父[ちち]の 車[くるま]を 毎日[まいにち]",
          },
          { text: "使[つか]っていた", blank: true },
        ],
        notes: "毎日 moved after 車を",
      },
      {
        segments: [
          {
            text: "私[わたし]は あのころ、 毎日[まいにち] 父[ちち]の 車[くるま]を",
          },
          { text: "使[つか]っていた", blank: true },
        ],
        notes: "私は at start, あのころ after は",
      },
      {
        segments: [
          {
            text: "あのころ、 私[わたし]は 毎日[まいにち] 父[ちち]の 車[くるま]に",
          },
          { text: "乗[の]っていた", blank: true },
        ],
        notes: "乗っていた — 'was riding/taking' as a synonym for using",
      },
      {
        segments: [
          {
            text: "その 頃[ころ]、 私[わたし]は 父[ちち]の 車[くるま]を 毎日[まいにち]",
          },
          { text: "使[つか]っていた", blank: true },
        ],
        notes: "その頃 + 毎日 after 車を",
      },
      {
        segments: [
          {
            text: "毎日[まいにち]、 あのころは 私[わたし]は 父[ちち]の 車[くるま]を",
          },
          { text: "使[つか]っていた", blank: true },
        ],
        notes: "毎日 fronted, あのころは as topic",
      },
    ],
  },
  {
    english: "The light in the room is on.",
    answers: [
      {
        segments: [
          { text: "部屋[へや]の 電気[でんき]は" },
          { text: "つけて", blank: true },
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
      },
      {
        segments: [
          { text: "部屋[へや]の 電気[でんき]が" },
          { text: "つけて", blank: true },
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
        notes: "が particle",
      },
      {
        segments: [
          { text: "部屋[へや]の 電気[でんき]が" },
          { text: "ついて", blank: true },
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
        notes: "Intransitive つく (電気がついている) — more natural for \"the light is on\"",
      },
    ],
  },
  {
    english: "My mother cooks every morning.",
    answers: [
      {
        segments: [
          { text: "母[はは]は 毎朝[まいあさ] 料理[りょうり]" },
          {
            text: "している",
            blank: true,
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
          { text: "私[わたし]の 母[はは]は 毎朝[まいあさ] 料理[りょうり]" },
          {
            text: "している",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "With 私の母 explicit",
      },
      {
        segments: [
          { text: "母[はは]は 毎朝[まいあさ] ご 飯[はん]を" },
          {
            text: "作[つく]っている",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "ご飯を作っている (making meals) as a synonym for cooking",
      },
      {
        segments: [
          { text: "母[はは]は 毎朝[まいあさ] 料理[りょうり]を" },
          {
            text: "している",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "料理をしている — 料理 as a noun object with を",
      },
      {
        segments: [
          { text: "母[はは]が 毎朝[まいあさ] 料理[りょうり]" },
          {
            text: "している",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "母[はは]は 毎朝[まいあさ] 朝[あさ]ご 飯[はん]を" },
          {
            text: "作[つく]っている",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "朝ご飯を作っている — making breakfast specifically",
      },
    ],
  },
  {
    english: "The traffic light has turned red.",
    answers: [
      {
        segments: [
          { text: "信号[しんごう]は" },
          { text: "赤[あか]くなって", blank: true },
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
      },
      {
        segments: [
          { text: "信号[しんごう]が" },
          { text: "赤[あか]くなって", blank: true },
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
        notes: "が particle",
      },
    ],
  },
  {
    english: "My older brother plays tennis every Saturday.",
    answers: [
      {
        segments: [
          {
            text: "私[わたし]の 兄[あに]は 毎週[まいしゅう] 土曜日[どようび]に テニスを",
          },
          { text: "している", blank: true },
        ],
      },
      {
        segments: [
          { text: "兄[あに]は 毎週[まいしゅう] 土曜日[どようび]に テニスを" },
          { text: "している", blank: true },
        ],
        notes: "Without 私の — 兄 alone is natural",
      },
      {
        segments: [
          { text: "兄[あに]は 毎週[まいしゅう] 土曜日[どようび]に テニスを" },
          { text: "やっている", blank: true },
        ],
        notes: "やっている instead of している",
      },
      {
        segments: [
          {
            text: "私[わたし]の 兄[あに]は 毎週[まいしゅう] 土曜日[どようび]に テニスを",
          },
          { text: "やっている", blank: true },
        ],
        notes: "With 私の + やっている",
      },
      {
        segments: [
          { text: "兄[あに]は 土曜日[どようび]に テニスを" },
          { text: "している", blank: true },
        ],
        notes: "Without 毎週",
      },
      {
        segments: [
          { text: "兄[あに]が 毎週[まいしゅう] 土曜日[どようび]に テニスを" },
          { text: "している", blank: true },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "毎週[まいしゅう] 土曜日[どようび]に 兄[あに]は テニスを" },
          { text: "している", blank: true },
        ],
        notes: "Time phrase moved to the front",
      },
      {
        segments: [
          { text: "兄[あに]は 毎週[まいしゅう] 土曜日[どようび]に テニスを" },
          { text: "してる", blank: true },
        ],
        notes: "Contracted してる",
      },
      {
        segments: [
          { text: "兄[あに]は 毎週[まいしゅう] 土曜日[どようび]に テニスを" },
          { text: "やってる", blank: true },
        ],
        notes: "Contracted やってる",
      },
    ],
  },
  {
    english: "The dog is sitting on the chair.",
    answers: [
      {
        segments: [
          { text: "犬[いぬ]は いすに" },
          {
            text: "座[すわ]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
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
      },
      {
        segments: [
          { text: "犬[いぬ]は いすの 上[うえ]に" },
          {
            text: "座[すわ]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
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
        notes: "With 上に (on top of)",
      },
      {
        segments: [
          { text: "犬[いぬ]が いすに" },
          {
            text: "座[すわ]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
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
        notes: "が particle",
      },
      {
        segments: [
          { text: "犬[いぬ]が いすの 上[うえ]に" },
          {
            text: "座[すわ]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "te-form",
              polarity: "positive",
              tense: "non-past",
            },
          },
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
        notes: "が particle + 上に",
      },
    ],
  },
]
