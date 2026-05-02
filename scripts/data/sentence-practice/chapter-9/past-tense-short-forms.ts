import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "The test was really hard yesterday.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]のテストは すごく" },
          {
            text: " 難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]のテストは 本当[ほんとう]に" },
          {
            text: " 難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "昨日[きのう]のテストは とても" },
          {
            text: " 難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
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
          { text: "昨日[きのう]のテストが すごく" },
          {
            text: " 難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
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
          { text: "昨日[きのう]、テストは すごく" },
          {
            text: " 難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "昨日 as standalone time adverb",
      },
      {
        segments: [
          { text: "昨日[きのう]の 試験[しけん]は すごく" },
          {
            text: " 難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "試験 instead of テスト",
      },
      {
        segments: [
          { text: "昨日[きのう]の 試験[しけん]は 本当[ほんとう]に" },
          {
            text: " 難[むずか]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
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
          {
            text: " 食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "今朝[けさ]は 朝[あさ]ご 飯[はん]を" },
          {
            text: " 食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "は on 今朝 for topic/contrast",
      },
      {
        segments: [
          { text: "今朝[けさ]、朝[あさ]ご 飯[はん]は" },
          {
            text: " 食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "は on 朝ご飯 for contrastive topic",
      },
      {
        segments: [
          { text: "朝[あさ]ご 飯[はん]を" },
          {
            text: " 食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Context implied without 今朝",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、朝[あさ]ご 飯[はん]を" },
          {
            text: " 食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Explicit 私は",
      },
      {
        segments: [
          { text: "今朝[けさ]、朝食[ちょうしょく]を" },
          {
            text: " 食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
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
          {
            text: " 面白[おもしろ]い",
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
          { text: "あの 映画[えいが]は 全然[ぜんぜん]" },
          {
            text: " 面白[おもしろ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "あの映画 (that movie we both know)",
      },
      {
        segments: [
          { text: "映画[えいが]は 全然[ぜんぜん]" },
          {
            text: "つまらない",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "つまらなかった (boring) instead of 面白くなかった",
      },
      {
        segments: [
          { text: "あの 映画[えいが]は 全然[ぜんぜん]" },
          {
            text: "つまらない",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
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
          {
            text: " 美味[おい]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、何[なに]も" },
          {
            text: " 飲[の]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]のご 飯[はん]はすごく" },
          {
            text: " 美味[おい]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、何[なに]も" },
          {
            text: " 飲[の]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
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
          { text: "昨日[きのう]の 晩[ばん]ご 飯[はん]はすごく" },
          {
            text: " 美味[おい]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、何[なに]も" },
          {
            text: " 飲[の]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "晩ご飯 instead of 夜のご飯",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夕[ゆう]ご 飯[はん]はすごく" },
          {
            text: " 美味[おい]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、何[なに]も" },
          {
            text: " 飲[の]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "夕ご飯 instead of 夜のご飯",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]のご 飯[はん]はすごく" },
          {
            text: " よい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、何[なに]も" },
          {
            text: " 飲[の]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "よかった instead of 美味しかった",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]のご 飯[はん]はとても" },
          {
            text: " 美味[おい]しい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、何[なに]も" },
          {
            text: " 飲[の]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
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
          { text: "けど、今[いま]は 先[せん]生[せい]" },
          { text: "です" },
        ],
      },
      {
        segments: [
          { text: "けんじさんは 去年[きょねん] 大学院生[だいがくいんせい]" },
          { text: "だった", blank: true },
          { text: "が、今[いま]は 先[せん]生[せい]" },
          { text: "です" },
        ],
        notes: "が gives the contrast a more formal sound than けど.",
      },
      {
        segments: [
          { text: "けんじさんは 去年[きょねん] 大学院生[だいがくいんせい]" },
          { text: "でした", blank: true },
          { text: "けど、今[いま]は 先[せん]生[せい]" },
          { text: "です" },
        ],
        register: "polite",
        notes: "でした makes the first clause polite.",
      },
      {
        segments: [
          { text: "けんじさんは 去年[きょねん] 大学院生[だいがくいんせい]" },
          { text: "でした", blank: true },
          { text: "が、今[いま]は 先[せん]生[せい]" },
          { text: "です" },
        ],
        register: "polite",
        notes: "でした with が keeps the sentence more formal.",
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
          {
            text: " 寒[さむ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "、すごく" },
          {
            text: " よい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]の 天気[てんき]は 全然[ぜんぜん]" },
          {
            text: " 寒[さむ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "、とても" },
          {
            text: " よい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
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
          { text: "週末[しゅうまつ]の 天気[てんき]は 全然[ぜんぜん]" },
          {
            text: " 寒[さむ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "、すごく" },
          {
            text: " よい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "週末 instead of 今週末",
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]の 天気[てんき]は 全然[ぜんぜん]" },
          {
            text: " 寒[さむ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "、すごく" },
          {
            text: " 素敵[すてき]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "素敵だった instead of よかった",
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]の 天気[てんき]は 全然[ぜんぜん]" },
          {
            text: " 寒[さむ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "、すごく" },
          {
            text: " 暖[あたた]かい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "暖かかった (was warm) instead of よかった",
      },
      {
        segments: [
          { text: "今週末[こんしゅうまつ]の 天気[てんき]は 全然[ぜんぜん]" },
          {
            text: " 寒[さむ]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
          { text: "、本当[ほんとう]に" },
          {
            text: " よい",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
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
        register: "casual",
        notes: "昨晩 + を omitted",
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
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
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
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
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
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
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
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
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
            text: " 寝[ね]る",
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
            text: " 寝[ね]る",
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
            text: " 寝[ね]る",
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
            text: " 寝[ね]る",
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
            text: " 寝[ね]る",
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
            text: " 疲[つか]れる",
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
          {
            text: " 待[ま]つ",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'tsu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、ゆきさんは" },
          {
            text: " 来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "駅[えき]で 三十分[さんじっぷん]くらい" },
          {
            text: " 待[ま]つ",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'tsu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、ゆきさんは" },
          {
            text: " 来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "くらい instead of ぐらい",
      },
      {
        segments: [
          { text: "三十分[さんじっぷん]ぐらい、駅[えき]で" },
          {
            text: " 待[ま]つ",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'tsu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、ゆきさんは" },
          {
            text: " 来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Time expression fronted",
      },
      {
        segments: [
          { text: "駅[えき]で 三十分[さんじっぷん]ぐらい" },
          {
            text: " 待[ま]つ",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'tsu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "が、ゆきさんは" },
          {
            text: " 来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
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
          { text: "駅[えき]で 三十分[さんじっぷん]ぐらい" },
          {
            text: " 待[ま]つ",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'tsu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、ゆきさんが" },
          {
            text: " 来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "ゆきさんが instead of ゆきさんは",
      },
      {
        segments: [
          { text: "私[わたし]は 駅[えき]で 三十分[さんじっぷん]ぐらい" },
          {
            text: " 待[ま]つ",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'tsu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、ゆきさんは" },
          {
            text: " 来[く]る",
            blank: true,
            conjugation: {
              pos: "Kuru verb - special class",
              form: "normal",
              polarity: "negative",
              tense: "past",
            },
          },
        ],
        notes: "Explicit 私は",
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
            text: "昨日[きのう]の テストは すごく 難[むずか]しかったと",
            blank: true,
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
            text: "昨日[きのう]の 試験[しけん]は とても 難[むずか]しかったと",
            blank: true,
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
            blank: true,
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
            text: "その 映画[えいが]は ちょっと 怖[こわ]かったと",
            blank: true,
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
            blank: true,
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
            blank: true,
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
    ],
  },
  {
    english: "I think last night was really fun.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は すごく" },
          { text: " 楽[たの]しかったと", blank: true },
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
          { text: "昨日[きのう]の 夜[よる]は とても" },
          { text: " 楽[たの]しかったと", blank: true },
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
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]は 本当[ほんとう]に" },
          { text: " 楽[たの]しかったと", blank: true },
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
        notes: "本当に instead of すごく",
      },
      {
        segments: [
          { text: "昨夜[さくや]は すごく" },
          { text: " 楽[たの]しかったと", blank: true },
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
        notes: "昨夜 instead of 昨日の夜",
      },
      {
        segments: [
          { text: "昨晩[さくばん]は すごく" },
          { text: " 楽[たの]しかったと", blank: true },
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
            text: "りこさんが 教科書[きょうかしょ]を 忘[わす]れたと",
            blank: true,
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
            text: "私[わたし]は りこさんが 教科書[きょうかしょ]を 忘[わす]れたと",
            blank: true,
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
            text: "今朝[けさ]のコーヒーは とても 熱[あつ]かったと",
            blank: true,
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
            text: "今朝[けさ]のコーヒーは 本当[ほんとう]に 熱[あつ]かったと",
            blank: true,
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
          { text: "けんじさんは 図書館[としょかん]で 勉強[べんきょう]して" },
          { text: "いる", blank: true },
          { text: "と" },
          { text: " 言[い]って", blank: true },
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
          { text: "けんじさんは 図書館[としょかん]で 勉強[べんきょう]して" },
          { text: "いる", blank: true },
          { text: "って" },
          { text: " 言[い]って", blank: true },
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
        register: "casual",
        notes: "って sounds more casual than と.",
      },
      {
        segments: [
          { text: "けんじさんは 図書館[としょかん]で 勉強[べんきょう]して" },
          { text: "いる", blank: true },
          { text: "と" },
          {
            text: " 言[い]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "言った is a simple past form for “said.”",
      },
      {
        segments: [
          { text: "図書館[としょかん]で 勉強[べんきょう]して" },
          { text: "いる", blank: true },
          { text: "と" },
          { text: "けんじさんが 言[い]って", blank: true },
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
        notes: "The quoted part can come before けんじさんが.",
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
            text: "ゆきさんは 朝[あさ]ご 飯[はん]にいちごを 食[た]べて",
            blank: true,
          },
          { text: "いる", blank: true },
          { text: "と" },
          { text: " 言[い]って" },
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
            text: "ゆきさんは 朝[あさ]ご 飯[はん]にいちごを 食[た]べて",
            blank: true,
          },
          { text: "いる", blank: true },
          { text: "って" },
          { text: " 言[い]って" },
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
        register: "casual",
        notes: "って sounds more casual than と.",
      },
      {
        segments: [
          {
            text: "ゆきさんは 朝[あさ]ご 飯[はん]にいちごを 食[た]べて",
            blank: true,
          },
          { text: "いる", blank: true },
          { text: "と" },
          {
            text: " 言[い]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "言った is a simple past form for “said.”",
      },
      {
        segments: [
          {
            text: "ゆきさんが 朝[あさ]ご 飯[はん]にいちごを 食[た]べて",
            blank: true,
          },
          { text: "いる", blank: true },
          { text: "と" },
          { text: " 言[い]って" },
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
        notes: "が puts more focus on Yuki than は.",
      },
      {
        segments: [
          {
            text: "ゆきさんは いちごを 朝[あさ]ご 飯[はん]に 食[た]べて",
            blank: true,
          },
          { text: "いる", blank: true },
          { text: "と" },
          { text: " 言[い]って" },
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
        notes: "いちごを can come before 朝ご飯に.",
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
          { text: " 書[か]いて", blank: true },
          { text: "いる", blank: true },
          { text: "と" },
          { text: " 言[い]って", blank: true },
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
          { text: "みほさんは おばあさんに 手紙[てがみ]を" },
          { text: " 書[か]いて", blank: true },
          { text: "いる", blank: true },
          { text: "って" },
          { text: " 言[い]って", blank: true },
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
        register: "casual",
        notes: "って quotation particle",
      },
      {
        segments: [
          { text: "みほさんが おばあさんに 手紙[てがみ]を" },
          { text: " 書[か]いて", blank: true },
          { text: "いる", blank: true },
          { text: "と" },
          { text: " 言[い]って", blank: true },
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
          { text: "みほさんは 手紙[てがみ]を おばあさんに" },
          { text: " 書[か]いて", blank: true },
          { text: "いる", blank: true },
          { text: "と" },
          { text: " 言[い]って", blank: true },
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
        notes: "手紙を before おばあさんに",
      },
      {
        segments: [
          { text: "みほさんは おばあさんに 手紙[てがみ]を" },
          { text: " 書[か]いて", blank: true },
          { text: "いる", blank: true },
          { text: "と" },
          {
            text: " 言[い]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
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
          { text: " 泳[およ]いで", blank: true },
          { text: "いる", blank: true },
          { text: "と" },
          { text: " 言[い]って", blank: true },
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
          { text: "なつきさんは 海[うみ]で" },
          { text: " 泳[およ]いで", blank: true },
          { text: "いる", blank: true },
          { text: "って" },
          { text: " 言[い]って", blank: true },
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
        register: "casual",
        notes: "って quotation particle",
      },
      {
        segments: [
          { text: "なつきさんが 海[うみ]で" },
          { text: " 泳[およ]いで", blank: true },
          { text: "いる", blank: true },
          { text: "と" },
          { text: " 言[い]って", blank: true },
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
          { text: "なつきさんは 海[うみ]で" },
          { text: " 泳[およ]いで", blank: true },
          { text: "いる", blank: true },
          { text: "と" },
          {
            text: " 言[い]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "言いました instead of 言っていました",
      },
    ],
  },
]
