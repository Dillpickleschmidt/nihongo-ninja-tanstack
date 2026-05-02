import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I'm eating breakfast right now.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今[いま] 朝[あさ]ご 飯[はん]を" },
          { text: "食[た]べて", blank: true },
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
          { text: "私[わたし]は 朝[あさ]ご 飯[はん]を 今[いま]" },
          { text: "食[た]べて", blank: true },
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
        notes: "今 moved to before the verb",
      },
      {
        segments: [
          { text: "今[いま] 私[わたし]は 朝[あさ]ご 飯[はん]を" },
          { text: "食[た]べて", blank: true },
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
        notes: "今 moved to the very beginning",
      },
      {
        segments: [
          { text: "私[わたし]が 今[いま] 朝[あさ]ご 飯[はん]を" },
          { text: "食[た]べて", blank: true },
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
    ],
  },
  {
    english: "Kenji was singing in the library!",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは 図書館[としょかん]で" },
          { text: "歌[うた]って", blank: true },
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
        ],
      },
      {
        segments: [
          { text: "けんじさんが 図書館[としょかん]で" },
          { text: "歌[うた]って", blank: true },
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
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "けんじさんは 図書館[としょかん]で 歌[うた]を" },
          { text: "歌[うた]って", blank: true },
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
        ],
        notes: "歌を歌っていた — 'singing a song'",
      },
      {
        segments: [
          { text: "けんじさんが 図書館[としょかん]で 歌[うた]を" },
          { text: "歌[うた]って", blank: true },
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
        ],
        notes: "歌を歌っていた + が",
      },
    ],
  },
  {
    english: "Is Kenji drinking coffee every morning (these days)?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは 毎朝[まいあさ] コーヒーを" },
          { text: "飲[の]んで", blank: true },
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
          { text: "けんじさんは 毎朝[まいあさ] コーヒーを" },
          { text: "飲[の]んで", blank: true },
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
          { text: "の" },
        ],
        notes: "の question particle instead of か",
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
    ],
  },
  {
    english: "The dog is dead.",
    answers: [
      {
        segments: [
          { text: "犬[いぬ]は" },
          { text: "死[し]んで", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "犬[いぬ]が" },
          { text: "死[し]んで", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が instead of は",
      },
    ],
  },
  {
    english: "I'm always listening to music while studying.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は いつも 勉強[べんきょう]して 音楽[おんがく]を 聞[き]いて" },
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
          { text: "私[わたし]が いつも 勉強[べんきょう]して 音楽[おんがく]を 聞[き]いて" },
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
          { text: "私[わたし]は 勉強[べんきょう]して いつも 音楽[おんがく]を 聞[き]いて" },
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
        notes: "いつも moved after 勉強して",
      },
      {
        segments: [
          { text: "私[わたし]は いつも 勉強[べんきょう]して 音楽[おんがく]を 聴[き]いて" },
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
        notes: "Using 聴く (listen attentively) instead of 聞く",
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
    ],
  },
  {
    english: "I was using my dad's car every day back then.",
    answers: [
      {
        segments: [
          {
            text: "あのころ、 私[わたし]は 毎日[まいにち] 父[ちち]の 車[くるま]を 使[つか]って",
          },
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
        ],
      },
      {
        segments: [
          {
            text: "その 頃[ころ]、 私[わたし]は 毎日[まいにち] 父[ちち]の 車[くるま]を 使[つか]って",
          },
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
        ],
        notes: "その頃 instead of あのころ",
      },
      {
        segments: [
          {
            text: "あのころ、 私[わたし]は 父[ちち]の 車[くるま]を 毎日[まいにち] 使[つか]って",
          },
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
        ],
        notes: "毎日 moved after 車を",
      },
      {
        segments: [
          {
            text: "私[わたし]は あのころ、 毎日[まいにち] 父[ちち]の 車[くるま]を 使[つか]って",
          },
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
        ],
        notes: "私は at start, あのころ after は",
      },
      {
        segments: [
          {
            text: "あのころ、 私[わたし]は 毎日[まいにち] 父[ちち]の 車[くるま]に 乗[の]って",
          },
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
        ],
        notes: "乗っていた — 'was riding/taking' as a synonym for using",
      },
      {
        segments: [
          {
            text: "その 頃[ころ]、 私[わたし]は 父[ちち]の 車[くるま]を 毎日[まいにち] 使[つか]って",
          },
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
        ],
        notes: "その頃 + 毎日 after 車を",
      },
      {
        segments: [
          {
            text: "毎日[まいにち]、 あのころは 私[わたし]は 父[ちち]の 車[くるま]を 使[つか]って",
          },
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
    english: "My mother is cooking every morning (these days).",
    answers: [
      {
        segments: [
          { text: "母[はは]は 毎朝[まいあさ] 料理[りょうり]" },
          { text: "して", blank: true },
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
          { text: "私[わたし]の 母[はは]は 毎朝[まいあさ] 料理[りょうり]" },
          { text: "して", blank: true },
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
        notes: "With 私の母 explicit",
      },
      {
        segments: [
          { text: "母[はは]は 毎朝[まいあさ] ご 飯[はん]を" },
          { text: "作[つく]って", blank: true },
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
        notes: "ご飯を作っている (making meals) as a synonym for cooking",
      },
      {
        segments: [
          { text: "母[はは]は 毎朝[まいあさ] 料理[りょうり]を" },
          { text: "して", blank: true },
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
        notes: "料理をしている — 料理 as a noun object with を",
      },
      {
        segments: [
          { text: "母[はは]が 毎朝[まいあさ] 料理[りょうり]" },
          { text: "して", blank: true },
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
          { text: "母[はは]は 毎朝[まいあさ] 朝[あさ]ご 飯[はん]を" },
          { text: "作[つく]って", blank: true },
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
    english: "My older brother is playing tennis every Saturday (these days).",
    answers: [
      {
        segments: [
          {
            text: "私[わたし]の 兄[あに]は 毎週[まいしゅう] 土曜日[どようび]に テニスを",
          },
          { text: "して", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "兄[あに]は 毎週[まいしゅう] 土曜日[どようび]に テニスを" },
          { text: "して", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Without 私の — 兄 alone is natural",
      },
      {
        segments: [
          { text: "兄[あに]は 毎週[まいしゅう] 土曜日[どようび]に テニスを" },
          { text: "やって", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "やっている instead of している",
      },
      {
        segments: [
          {
            text: "私[わたし]の 兄[あに]は 毎週[まいしゅう] 土曜日[どようび]に テニスを",
          },
          { text: "やって", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "With 私の + やっている",
      },
      {
        segments: [
          { text: "兄[あに]は 土曜日[どようび]に テニスを" },
          { text: "して", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Without 毎週",
      },
      {
        segments: [
          { text: "兄[あに]が 毎週[まいしゅう] 土曜日[どようび]に テニスを" },
          { text: "して", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "毎週[まいしゅう] 土曜日[どようび]に 兄[あに]は テニスを" },
          { text: "して", blank: true },
          { text: "いる", blank: true, conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time phrase moved to the front",
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
