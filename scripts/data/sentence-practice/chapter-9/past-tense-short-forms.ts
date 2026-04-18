import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "The test was really hard yesterday.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]のテストは すごく" },
          { text: " 難[むずか]しかった", blank: true },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]のテストは 本当[ほんとう]に" },
          { text: " 難[むずか]しかった", blank: true },
        ],
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "昨日[きのう]のテストは とても" },
          { text: " 難[むずか]しかった", blank: true },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "昨日[きのう]のテストが すごく" },
          { text: " 難[むずか]しかった", blank: true },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "昨日[きのう]、テストは すごく" },
          { text: " 難[むずか]しかった", blank: true },
        ],
        notes: "昨日 as standalone time adverb",
      },
      {
        segments: [
          { text: "昨日[きのう]の 試験[しけん]は すごく" },
          { text: " 難[むずか]しかった", blank: true },
        ],
        notes: "試験 instead of テスト",
      },
      {
        segments: [
          { text: "昨日[きのう]の 試験[しけん]は 本当[ほんとう]に" },
          { text: " 難[むずか]しかった", blank: true },
        ],
        notes: "試験 + 本当に",
      },
    ],
  },
  {
    english: "I didn't eat breakfast this morning.",
    answers: [
      {
        segments: [
          { text: "今朝[けさ]、朝[あさ]ご 飯[はん]を" },
          { text: " 食[た]べなかった", blank: true },
        ],
      },
      {
        segments: [
          { text: "今朝[けさ]は 朝[あさ]ご 飯[はん]を" },
          { text: " 食[た]べなかった", blank: true },
        ],
        notes: "は on 今朝 for topic/contrast",
      },
      {
        segments: [
          { text: "今朝[けさ]、朝[あさ]ご 飯[はん]は" },
          { text: " 食[た]べなかった", blank: true },
        ],
        notes: "は on 朝ご飯 for contrastive topic",
      },
      {
        segments: [
          { text: "朝[あさ]ご 飯[はん]を" },
          { text: " 食[た]べなかった", blank: true },
        ],
        notes: "Context implied without 今朝",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、朝[あさ]ご 飯[はん]を" },
          { text: " 食[た]べなかった", blank: true },
        ],
        notes: "Explicit 私は",
      },
      {
        segments: [
          { text: "今朝[けさ]、朝食[ちょうしょく]を" },
          { text: " 食[た]べなかった", blank: true },
        ],
        notes: "朝食 (formal word for breakfast) instead of 朝ご飯",
      },
    ],
  },
  {
    english: "The movie wasn't interesting at all, was it.",
    answers: [
      {
        segments: [
          { text: "映画[えいが]は 全然[ぜんぜん]" },
          { text: " 面白[おもしろ]くなかった", blank: true },
          { text: "ね" },
        ],
      },
      {
        segments: [
          { text: "映画[えいが]は 全然[ぜんぜん]" },
          { text: " 面白[おもしろ]くなかったです", blank: true },
          { text: "ね" },
        ],
        notes: "Semi-polite 面白くなかったです",
      },
      {
        segments: [
          { text: "映画[えいが]は 全然[ぜんぜん]" },
          { text: " 面白[おもしろ]くありませんでした", blank: true },
          { text: "ね" },
        ],
        notes: "Polite 面白くありませんでした",
      },
      {
        segments: [
          { text: "あの 映画[えいが]は 全然[ぜんぜん]" },
          { text: " 面白[おもしろ]くなかった", blank: true },
          { text: "ね" },
        ],
        notes: "あの映画 (that movie we both know)",
      },
      {
        segments: [
          { text: "映画[えいが]は 全然[ぜんぜん]" },
          { text: "つまらなかった", blank: true },
          { text: "ね" },
        ],
        notes: "つまらなかった (boring) instead of 面白くなかった",
      },
      {
        segments: [
          { text: "あの 映画[えいが]は 全然[ぜんぜん]" },
          { text: "つまらなかった", blank: true },
          { text: "ね" },
        ],
        notes: "あの映画 + つまらなかった",
      },
    ],
  },
  {
    english:
      "Last night's dinner was really good, but I didn't drink anything.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]のご 飯[はん]はすごく" },
          { text: " 美味[おい]しかった", blank: true },
          { text: "けど、何[なに]も" },
          { text: " 飲[の]まなかった", blank: true },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]のご 飯[はん]はすごく" },
          { text: " 美味[おい]しかった", blank: true },
          { text: "が、何[なに]も" },
          { text: " 飲[の]まなかった", blank: true },
        ],
        notes: "が instead of けど",
      },
      {
        segments: [
          { text: "昨日[きのう]の 晩[ばん]ご 飯[はん]はすごく" },
          { text: " 美味[おい]しかった", blank: true },
          { text: "けど、何[なに]も" },
          { text: " 飲[の]まなかった", blank: true },
        ],
        notes: "晩ご飯 instead of 夜のご飯",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夕[ゆう]ご 飯[はん]はすごく" },
          { text: " 美味[おい]しかった", blank: true },
          { text: "けど、何[なに]も" },
          { text: " 飲[の]まなかった", blank: true },
        ],
        notes: "夕ご飯 instead of 夜のご飯",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]のご 飯[はん]はすごく" },
          { text: " よかった", blank: true },
          { text: "けど、何[なに]も" },
          { text: " 飲[の]まなかった", blank: true },
        ],
        notes: "よかった instead of 美味しかった",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]のご 飯[はん]はとても" },
          { text: " 美味[おい]しかった", blank: true },
          { text: "けど、何[なに]も" },
          { text: " 飲[の]まなかった", blank: true },
        ],
        notes: "とても instead of すごく",
      },
    ],
  },
  {
    english: "Kenji was a graduate student last year, but now he's a teacher.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは 去年[きょねん] 大学院生[だいがくいんせい]" },
          { text: "だった", blank: true },
          { text: "けど、今[いま]は 先生[せんせい]です" },
        ],
      },
      {
        segments: [
          { text: "けんじさんは 去年[きょねん] 大学院生[だいがくいんせい]" },
          { text: "だった", blank: true },
          { text: "が、今[いま]は 先生[せんせい]です" },
        ],
        notes: "が instead of けど",
      },
      {
        segments: [
          { text: "けんじさんは 去年[きょねん] 大学院生[だいがくいんせい]" },
          { text: "でした", blank: true },
          { text: "けど、今[いま]は 先生[せんせい]です" },
        ],
        notes: "Polite でした",
      },
      {
        segments: [
          { text: "けんじさんは 去年[きょねん] 大学院生[だいがくいんせい]" },
          { text: "でした", blank: true },
          { text: "が、今[いま]は 先生[せんせい]です" },
        ],
        notes: "Polite でした with が",
      },
    ],
  },
  {
    english:
      "The weather this weekend wasn't cold at all — it was really nice!",
    answers: [
      {
        segments: [
          { text: "今週末[こんしゅうまつ]の 天気[てんき]は 全然[ぜんぜん]" },
          { text: " 寒[さむ]くなかった", blank: true },
          { text: "、すごく よかった" },
        ],
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]の 天気[てんき]は 全然[ぜんぜん]" },
          { text: " 寒[さむ]くなかった", blank: true },
          { text: "、とても よかった" },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]の 天気[てんき]は 全然[ぜんぜん]" },
          { text: " 寒[さむ]くなかった", blank: true },
          { text: "、すごく よかった" },
        ],
        notes: "週末 instead of 今週末",
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]の 天気[てんき]は 全然[ぜんぜん]" },
          { text: " 寒[さむ]くなかった", blank: true },
          { text: "、すごく 素敵[すてき]だった" },
        ],
        notes: "素敵だった instead of よかった",
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]の 天気[てんき]は 全然[ぜんぜん]" },
          { text: " 寒[さむ]くなかった", blank: true },
          { text: "、すごく 暖[あたた]かかった" },
        ],
        notes: "暖かかった (was warm) instead of よかった",
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]の 天気[てんき]は 全然[ぜんぜん]" },
          { text: " 寒[さむ]くなかった", blank: true },
          { text: "、本当[ほんとう]に よかった" },
        ],
        notes: "本当に instead of すごく",
      },
    ],
  },
  {
    english: "I watched a horror movie last night, but it wasn't scary at all.",
    hint: "horror = ホラー",
    answers: [
      {
        segments: [
          {
            text: "昨日[きのう]の 夜[よる]、ホラー 映画[えいが]を 見[み]たけど、全然[ぜんぜん]",
          },
          {
            text: " 怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 夜[よる]にホラー 映画[えいが]を 見[み]たけど、全然[ぜんぜん]",
          },
          {
            text: " 怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "に instead of の for time",
      },
      {
        segments: [
          {
            text: "昨晩[さくばん]、ホラー 映画[えいが]を 見[み]たけど、全然[ぜんぜん]",
          },
          {
            text: " 怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "昨晩 instead of 昨日の夜",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 夜[よる]、ホラー 映画[えいが]を 見[み]たけど、あまり",
          },
          {
            text: " 怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "あまり instead of 全然",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 夜[よる]、ホラー 映画[えいが]を 見[み]たが、全然[ぜんぜん]",
          },
          {
            text: " 怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "が instead of けど",
      },
      {
        segments: [
          {
            text: "昨夜[さくや]、ホラー 映画[えいが]を 見[み]たけど、全然[ぜんぜん]",
          },
          {
            text: " 怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "昨夜 (さくや) instead of 昨日の夜",
      },
      {
        segments: [
          {
            text: "昨晩[さくばん] ホラー 映画[えいが] 見[み]たけど、全然[ぜんぜん]",
          },
          {
            text: " 怖[こわ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "昨晩 + を dropped (casual)",
      },
    ],
  },
  {
    english: "I sang at karaoke last night, but I wasn't very good.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、カラオケで 歌[うた]を" },
          {
            text: " 歌[うた]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、あまり" },
          { text: " 上手[じょうず]", blank: true },
          { text: "じゃなかった" },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、カラオケで" },
          {
            text: " 歌[うた]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、あまり" },
          { text: " 上手[じょうず]", blank: true },
          { text: "じゃなかった" },
        ],
        notes: "Without 歌を",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、カラオケで 歌[うた]を" },
          {
            text: " 歌[うた]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、あまり" },
          { text: " 上手[じょうず]", blank: true },
          { text: "じゃなかった" },
        ],
        notes: "が instead of けど",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、カラオケで 歌[うた]を" },
          {
            text: " 歌[うた]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、あまり" },
          { text: " 上手[じょうず]", blank: true },
          { text: "ではなかった" },
        ],
        notes: "ではなかった instead of じゃなかった",
      },
      {
        segments: [
          { text: "昨夜[さくや]、カラオケで 歌[うた]を" },
          {
            text: " 歌[うた]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、あまり" },
          { text: " 上手[じょうず]", blank: true },
          { text: "じゃなかった" },
        ],
        notes: "昨夜 instead of 昨日の夜",
      },
    ],
  },
  {
    english:
      "I didn't sleep much last night, so I was really tired this morning.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、あまり" },
          {
            text: " 寝[ね]なかった",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "から、今朝[けさ]すごく 疲[つか]れて" },
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
          { text: "昨日[きのう]の 夜[よる]、あまり" },
          {
            text: " 寝[ね]なかった",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "から、今朝[けさ]とても 疲[つか]れて" },
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
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、よく" },
          {
            text: " 寝[ね]なかった",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "から、今朝[けさ]すごく 疲[つか]れて" },
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
        notes: "よく instead of あまり",
      },
      {
        segments: [
          { text: "昨夜[さくや]、あまり" },
          {
            text: " 寝[ね]なかった",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "から、今朝[けさ]すごく 疲[つか]れて" },
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
        notes: "昨夜 instead of 昨日の夜",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、あまり" },
          {
            text: " 寝[ね]なかった",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "から、今朝[けさ]すごく" },
          {
            text: " 疲[つか]れた",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "疲れた (got tired) instead of 疲れていた (was tired)",
      },
    ],
  },
  {
    english:
      "I waited at the station for about thirty minutes, but Yuki didn't come.",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "駅[えき]で 三十分[さんじっぷん]ぐらい" },
          { text: " 待[ま]った", blank: true },
          { text: "けど、ゆきさんは" },
          { text: " 来[こ]なかった", blank: true },
        ],
      },
      {
        segments: [
          { text: "駅[えき]で 三十分[さんじっぷん]くらい" },
          { text: " 待[ま]った", blank: true },
          { text: "けど、ゆきさんは" },
          { text: " 来[こ]なかった", blank: true },
        ],
        notes: "くらい instead of ぐらい",
      },
      {
        segments: [
          { text: "三十分[さんじっぷん]ぐらい、駅[えき]で" },
          { text: " 待[ま]った", blank: true },
          { text: "けど、ゆきさんは" },
          { text: " 来[こ]なかった", blank: true },
        ],
        notes: "Time expression fronted",
      },
      {
        segments: [
          { text: "駅[えき]で 三十分[さんじっぷん]ぐらい" },
          { text: " 待[ま]った", blank: true },
          { text: "が、ゆきさんは" },
          { text: " 来[こ]なかった", blank: true },
        ],
        notes: "が instead of けど",
      },
      {
        segments: [
          { text: "駅[えき]で 三十分[さんじっぷん]ぐらい" },
          { text: " 待[ま]った", blank: true },
          { text: "けど、ゆきさんが" },
          { text: " 来[こ]なかった", blank: true },
        ],
        notes: "ゆきさんが instead of ゆきさんは",
      },
      {
        segments: [
          { text: "私[わたし]は 駅[えき]で 三十分[さんじっぷん]ぐらい" },
          { text: " 待[ま]った", blank: true },
          { text: "けど、ゆきさんは" },
          { text: " 来[こ]なかった", blank: true },
        ],
        notes: "Explicit 私は",
      },
      {
        segments: [
          { text: "駅[えき]で 三十分[さんじっぷん]ぐらい" },
          { text: " 待[ま]ちました", blank: true },
          { text: "が、ゆきさんは" },
          { text: " 来[こ]ませんでした", blank: true },
        ],
        notes: "Fully polite 待ちました + 来ませんでした + が",
      },
    ],
  },
  {
    english: "I think the exam yesterday was really difficult.",
    answers: [
      {
        segments: [
          {
            text: "昨日[きのう]の 試験[しけん]は すごく 難[むずか]しかったと",
            blank: true,
          },
          {
            text: " 思[おも]う",
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
          {
            text: "昨日[きのう]の テストは すごく 難[むずか]しかったと",
            blank: true,
          },
          {
            text: " 思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "テスト instead of 試験",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 試験[しけん]が すごく 難[むずか]しかったと",
            blank: true,
          },
          {
            text: " 思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
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
          {
            text: "昨日[きのう]の 試験[しけん]は とても 難[むずか]しかったと",
            blank: true,
          },
          {
            text: " 思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          {
            text: "昨日[きのう]の 試験[しけん]は 本当[ほんとう]に 難[むずか]しかったと",
            blank: true,
          },
          {
            text: " 思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "本当に instead of すごく",
      },
    ],
  },
  {
    english: "I think Takeshi went to the library yesterday.",
    hint: "Takeshi = たけし",
    answers: [
      {
        segments: [
          {
            text: "たけしさんは 昨日[きのう]、図書館[としょかん]に 行[い]ったと",
          },
          {
            text: " 思[おも]う",
            blank: true,
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
          {
            text: "たけしさんが 昨日[きのう]、図書館[としょかん]に 行[い]ったと",
          },
          {
            text: " 思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
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
          {
            text: "昨日[きのう]、たけしさんは 図書館[としょかん]に 行[い]ったと",
          },
          {
            text: " 思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "昨日 fronted",
      },
      {
        segments: [
          {
            text: "私[わたし]は たけしさんが 昨日[きのう]、図書館[としょかん]に 行[い]ったと",
          },
          {
            text: " 思[おも]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は + たけしさんが",
      },
    ],
  },
  {
    english: "I think that movie was a little scary.",
    answers: [
      {
        segments: [
          {
            text: "あの 映画[えいが]は ちょっと 怖[こわ]かったと",
            blank: true,
          },
          {
            text: " 思[おも]う",
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
          {
            text: "その 映画[えいが]は ちょっと 怖[こわ]かったと",
            blank: true,
          },
          {
            text: " 思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "その instead of あの",
      },
      {
        segments: [
          {
            text: "あの 映画[えいが]は 少[すこ]し 怖[こわ]かったと",
            blank: true,
          },
          {
            text: " 思[おも]う",
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
          {
            text: "私[わたし]は あの 映画[えいが]は ちょっと 怖[こわ]かったと",
            blank: true,
          },
          {
            text: " 思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は",
      },
      {
        segments: [
          {
            text: "あの 映画[えいが]が ちょっと 怖[こわ]かったと",
            blank: true,
          },
          {
            text: " 思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
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
    english: "I think last night was really fun.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は すごく" },
          {
            text: " 楽[たの]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "と" },
          {
            text: " 思[おも]う",
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
          { text: "昨日[きのう]の 夜[よる]は とても" },
          {
            text: " 楽[たの]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "と" },
          {
            text: " 思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は 本当[ほんとう]に" },
          {
            text: " 楽[たの]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "と" },
          {
            text: " 思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "昨夜[さくや]は すごく" },
          {
            text: " 楽[たの]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "と" },
          {
            text: " 思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "昨夜 instead of 昨日の夜",
      },
      {
        segments: [
          { text: "昨晩[さくばん]は すごく" },
          {
            text: " 楽[たの]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "と" },
          {
            text: " 思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "昨晩 instead of 昨日の夜",
      },
    ],
  },
  {
    english: "I think Riko forgot her textbook.",
    hint: "Riko = りこ",
    answers: [
      {
        segments: [
          {
            text: "りこさんは 教科書[きょうかしょ]を 忘[わす]れたと",
            blank: true,
          },
          {
            text: " 思[おも]う",
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
          {
            text: "りこさんが 教科書[きょうかしょ]を 忘[わす]れたと",
            blank: true,
          },
          {
            text: " 思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
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
          {
            text: "私[わたし]は りこさんが 教科書[きょうかしょ]を 忘[わす]れたと",
            blank: true,
          },
          {
            text: " 思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Explicit 私は + りこさんが",
      },
    ],
  },
  {
    english: "I think the coffee this morning was really hot.",
    answers: [
      {
        segments: [
          {
            text: "今朝[けさ]のコーヒーは すごく 熱[あつ]かったと",
            blank: true,
          },
          {
            text: " 思[おも]う",
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
          {
            text: "今朝[けさ]のコーヒーは とても 熱[あつ]かったと",
            blank: true,
          },
          {
            text: " 思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          {
            text: "今朝[けさ]のコーヒーが すごく 熱[あつ]かったと",
            blank: true,
          },
          {
            text: " 思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
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
          {
            text: "今朝[けさ]のコーヒーは 本当[ほんとう]に 熱[あつ]かったと",
            blank: true,
          },
          {
            text: " 思[おも]う",
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "本当に instead of すごく",
      },
    ],
  },
  {
    english: "Kenji said he was studying at the library.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          {
            text: "けんじさんは 図書館[としょかん]で 勉強[べんきょう]している",
          },
          { text: "と", blank: true },
          { text: " 言[い]っていました", blank: true },
        ],
      },
      {
        segments: [
          {
            text: "けんじさんは 図書館[としょかん]で 勉強[べんきょう]している",
          },
          { text: "って", blank: true },
          { text: " 言[い]っていました" },
        ],
        notes: "Casual って instead of と",
      },
      {
        segments: [
          { text: "けんじさんは 図書館[としょかん]で 勉強[べんきょう]してる" },
          { text: "と", blank: true },
          { text: " 言[い]っていました", blank: true },
        ],
        notes: "Contracted してる in quote",
      },
      {
        segments: [
          {
            text: "けんじさんは 図書館[としょかん]で 勉強[べんきょう]している",
          },
          { text: "と", blank: true },
          { text: " 言[い]った", blank: true },
        ],
        notes: "言った (simple past) instead of 言っていました",
      },
      {
        segments: [
          { text: "図書館[としょかん]で 勉強[べんきょう]している" },
          { text: "と", blank: true },
          { text: "けんじさんが 言[い]っていました", blank: true },
        ],
        notes: "Quote-first word order with けんじさんが",
      },
    ],
  },
  {
    english: "Yuki said she was eating strawberries for breakfast.",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          {
            text: "ゆきさんは 朝[あさ]ご 飯[はん]にいちごを 食[た]べていると",
            blank: true,
          },
          { text: " 言[い]っていました" },
        ],
      },
      {
        segments: [
          {
            text: "ゆきさんは 朝[あさ]ご 飯[はん]にいちごを 食[た]べているって",
            blank: true,
          },
          { text: " 言[い]っていました" },
        ],
        notes: "Casual って quotation particle",
      },
      {
        segments: [
          {
            text: "ゆきさんは 朝[あさ]ご 飯[はん]にいちごを 食[た]べていると",
            blank: true,
          },
          { text: " 言[い]いました" },
        ],
        notes: "言いました instead of 言っていました",
      },
      {
        segments: [
          {
            text: "ゆきさんが 朝[あさ]ご 飯[はん]にいちごを 食[た]べていると",
            blank: true,
          },
          { text: " 言[い]っていました" },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          {
            text: "ゆきさんは 朝[あさ]ご 飯[はん]にいちごを 食[た]べてると",
            blank: true,
          },
          { text: " 言[い]っていました" },
        ],
        notes: "Contracted 食べてる in quote",
      },
      {
        segments: [
          {
            text: "ゆきさんは いちごを 朝[あさ]ご 飯[はん]に 食[た]べていると",
            blank: true,
          },
          { text: " 言[い]っていました" },
        ],
        notes: "いちごを before 朝ご飯に",
      },
    ],
  },
  {
    english: "Miho said she was writing a letter to her grandmother.",
    hint: "Miho = みほ",
    answers: [
      {
        segments: [
          { text: "みほさんは おばあさんに 手紙[てがみ]を" },
          { text: " 書[か]いている", blank: true },
          { text: "と" },
          { text: " 言[い]っていました", blank: true },
        ],
      },
      {
        segments: [
          { text: "みほさんは おばあさんに 手紙[てがみ]を" },
          { text: " 書[か]いている", blank: true },
          { text: "って" },
          { text: " 言[い]っていました", blank: true },
        ],
        notes: "Casual って",
      },
      {
        segments: [
          { text: "みほさんが おばあさんに 手紙[てがみ]を" },
          { text: " 書[か]いている", blank: true },
          { text: "と" },
          { text: " 言[い]っていました", blank: true },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "みほさんは 手紙[てがみ]を おばあさんに" },
          { text: " 書[か]いている", blank: true },
          { text: "と" },
          { text: " 言[い]っていました", blank: true },
        ],
        notes: "手紙を before おばあさんに",
      },
      {
        segments: [
          { text: "みほさんは おばあさんに 手紙[てがみ]を" },
          { text: " 書[か]いている", blank: true },
          { text: "と" },
          { text: " 言[い]いました", blank: true },
        ],
        notes: "言いました instead of 言っていました",
      },
    ],
  },
  {
    english: "Natsuki said she was swimming in the sea.",
    hint: "Natsuki = なつき",
    answers: [
      {
        segments: [
          { text: "なつきさんは 海[うみ]で" },
          { text: " 泳[およ]いでいると 言[い]っていました", blank: true },
        ],
      },
      {
        segments: [
          { text: "なつきさんは 海[うみ]で" },
          { text: " 泳[およ]いでると 言[い]っていました", blank: true },
        ],
        notes: "Contracted 泳いでる in quote",
      },
      {
        segments: [
          { text: "なつきさんは 海[うみ]で" },
          { text: " 泳[およ]いでいるって 言[い]っていました", blank: true },
        ],
        notes: "Casual って quotation particle",
      },
      {
        segments: [
          { text: "なつきさんが 海[うみ]で" },
          { text: " 泳[およ]いでいると 言[い]っていました", blank: true },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "なつきさんは 海[うみ]で" },
          { text: " 泳[およ]いでいると 言[い]いました", blank: true },
        ],
        notes: "言いました instead of 言っていました",
      },
    ],
  },
]
