import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I'm not very good at singing.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 歌[うた]を 歌[うた]うのが あまり" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 歌[うた]うのが あまり" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 歌を",
      },
      {
        segments: [
          { text: "歌[うた]を 歌[うた]うのが あまり" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は",
      },
      {
        segments: [
          { text: "歌[うた]うのが あまり" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は and 歌を",
      },
      {
        segments: [
          { text: "私[わたし]は 歌[うた]を 歌[うた]うのが" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Using 下手 instead of あまり上手じゃない",
      },
      {
        segments: [
          { text: "私[わたし]は 歌[うた]うのが" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "下手, dropped 歌を",
      },
      {
        segments: [
          { text: "歌[うた]うのが" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "下手, dropped 私は and 歌を",
      },
    ],
  },
  {
    english: "Kobayashi is really good at making Italian food.",
    hint: "Kobayashi = 小林 (こばやし)",
    answers: [
      {
        segments: [
          {
            text: "小林[こばやし]さんは イタリア 料理[りょうり]を 作[つく]るのが とても",
          },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
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
            text: "小林[こばやし]さんは イタリア 料理[りょうり]を 作[つく]るのが すごく",
          },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "すごく instead of とても",
      },
      {
        segments: [
          {
            text: "小林[こばやし]さんは イタリア 料理[りょうり]を 作[つく]るのが 本当[ほんとう]に",
          },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "本当に instead of とても",
      },
      {
        segments: [
          {
            text: "小林[こばやし]さんが イタリア 料理[りょうり]を 作[つく]るのが とても",
          },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
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
    english: "I love eating watermelon in the summer.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 夏[なつ]にすいかを 食[た]べるのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "夏[なつ]にすいかを 食[た]べるのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は",
      },
      {
        segments: [
          { text: "私[わたし]は 夏[なつ] すいかを 食[た]べるのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Without に particle after 夏",
      },
      {
        segments: [
          { text: "私[わたし]は 夏[なつ]はすいかを 食[た]べるのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "夏は topicalized",
      },
    ],
  },
  {
    english: "I'm pretty bad at writing kanji.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 漢字[かんじ]を 書[か]くのが ちょっと" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 漢字[かんじ]を 書[か]くのが" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Without ちょっと",
      },
      {
        segments: [
          { text: "漢字[かんじ]を 書[か]くのが ちょっと" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は",
      },
      {
        segments: [
          { text: "漢字[かんじ]を 書[か]くのが" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は, without ちょっと",
      },
      {
        segments: [
          { text: "私[わたし]は 漢字[かんじ]を 書[か]くのが あまり" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "あまり上手じゃない instead of 下手",
      },
      {
        segments: [
          { text: "漢字[かんじ]を 書[か]くのが" },
          {
            text: " 苦手[にがて]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "苦手 (weak point) instead of 下手; subject dropped",
      },
    ],
  },
  {
    english: "Does Kaede like reading magazines?",
    hint: "Kaede = 楓 (かえで)",
    answers: [
      {
        segments: [
          { text: "楓[かえで]さんは 雑誌[ざっし]を 読[よ]むのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
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
          { text: "楓[かえで]さんが 雑誌[ざっし]を 読[よ]むのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "楓[かえで]さんは 雑誌[ざっし]を 読[よ]むのは" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "のは instead of のが",
      },
    ],
  },
  {
    english: "Is Yosuke good at driving?",
    hint: "Yosuke = 陽介 (ようすけ)",
    answers: [
      {
        segments: [
          { text: "陽介[ようすけ]さんは 運転[うんてん]するのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
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
          { text: "陽介[ようすけ]さんが 運転[うんてん]するのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "陽介[ようすけ]さんは 運転[うんてん]するのは" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "のは instead of のが",
      },
    ],
  },
  {
    english: "I love listening to music but I'm not very good at singing.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 音楽[おんがく]を 聞[き]くのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、歌[うた]を 歌[うた]うのは あまり" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 音楽[おんがく]を 聞[き]くのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が、歌[うた]を 歌[うた]うのは あまり" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "が conjunction instead of けど",
      },
      {
        segments: [
          { text: "音楽[おんがく]を 聞[き]くのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、歌[うた]を 歌[うた]うのは あまり" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 私は",
      },
      {
        segments: [
          { text: "私[わたし]は 音楽[おんがく]を 聞[き]くのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、歌[うた]を 歌[うた]うのが あまり" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "のが instead of のは in second clause",
      },
      {
        segments: [
          { text: "私[わたし]は 音楽[おんがく]を 聞[き]くのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が、歌[うた]を 歌[うた]うのが あまり" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "が conjunction + のが in second clause",
      },
      {
        segments: [
          { text: "音楽[おんがく]を 聞[き]くのは" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、歌[うた]を 歌[うた]うのは あまり" },
          {
            text: " 得意[とくい]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "得意 (specialty) instead of 上手; のは in both clauses",
      },
    ],
  },
  {
    english: "Shunsuke is bad at washing dishes but loves cooking.",
    hint: "Shunsuke = 俊介 (しゅんすけ)",
    answers: [
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは お 皿[さら]を 洗[あら]うのが" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、料理[りょうり]するのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは お 皿[さら]を 洗[あら]うのが" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が、料理[りょうり]するのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が conjunction",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは お 皿[さら]を 洗[あら]うのは" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、料理[りょうり]するのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "のは for contrast in first clause",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは お 皿[さら]を 洗[あら]うのが" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、料理[りょうり]するのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "好き instead of 大好き",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは 皿[さら]を 洗[あら]うのが" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、料理[りょうり]するのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "皿 without お prefix",
      },
    ],
  },
  {
    english: "Mizuki is bad at swimming but loves going to the sea.",
    hint: "Mizuki = 瑞希 (みずき)",
    answers: [
      {
        segments: [
          { text: "瑞希[みずき]さんは 泳[およ]ぐのが" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、海[うみ]に 行[い]くのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "瑞希[みずき]さんは 泳[およ]ぐのが" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が、海[うみ]に 行[い]くのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が conjunction",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんは 泳[およ]ぐのが" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、海[うみ]へ 行[い]くのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "へ instead of に particle",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんは 泳[およ]ぐのが" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、海[うみ]に 行[い]くのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "好き instead of 大好き",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんは 海[うみ]に 行[い]くのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、泳[およ]ぐのが" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "Reversed clause order",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんは 泳[およ]ぐのが" },
          {
            text: " 苦手[にがて]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、海[うみ]に 行[い]くのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "苦手 (weak point) instead of 下手",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんは 泳[およ]ぐのが" },
          {
            text: " 苦手[にがて]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が、海[うみ]に 行[い]くのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "苦手 + が conjunction",
      },
    ],
  },
  {
    english: "Does Haruto like playing games after doing homework?",
    hint: "Haruto = 陽翔 (はると)",
    answers: [
      {
        segments: [
          { text: "陽翔[はると]さんは 宿題[しゅくだい]の 後[あと]で ゲームを するのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
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
          { text: "陽翔[はると]さんは 宿題[しゅくだい]の 後[あと]で ゲームするのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "ゲームする without を particle."
      },
      {
        segments: [
          { text: "陽翔[はると]さんが 宿題[しゅくだい]の 後[あと]で ゲームを するのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "が instead of は",
      },
      {
        segments: [
          { text: "陽翔[はると]さんが 宿題[しゅくだい]の 後[あと]で ゲームするのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "か" },
        ],
        notes: "が instead of は, with ゲームする without を particle.",
      },
    ],
  },
  {
    english: "Miku is good at taking photos but doesn't like reading books.",
    hint: "Miku = ミク",
    answers: [
      {
        segments: [
          { text: "ミクさんは 写真[しゃしん]を 撮[と]るのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、本[ほん]を 読[よ]むのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "ミクさんは 写真[しゃしん]を 撮[と]るのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が、本[ほん]を 読[よ]むのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "が conjunction",
      },
      {
        segments: [
          { text: "ミクさんは 写真[しゃしん]を 撮[と]るのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、本[ほん]を 読[よ]むのは" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "のは for contrast in second clause",
      },
      {
        segments: [
          { text: "ミクさんは 写真[しゃしん]を 撮[と]るのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が、本[ほん]を 読[よ]むのは" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "のは for contrast + が conjunction",
      },
    ],
  },
  {
    english: "Akiko is good at cooking but doesn't like cleaning.",
    hint: "Akiko = 明子 (あきこ)",
    answers: [
      {
        segments: [
          { text: "明子[あきこ]さんは 料理[りょうり]するのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、掃除[そうじ]するのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "明子[あきこ]さんは 料理[りょうり]するのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が、掃除[そうじ]するのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "が conjunction",
      },
      {
        segments: [
          { text: "明子[あきこ]さんは 料理[りょうり]するのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、掃除[そうじ]するのは" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "のは for contrast in second clause",
      },
      {
        segments: [
          { text: "明子[あきこ]さんが 料理[りょうり]するのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、掃除[そうじ]するのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "が instead of は for subject",
      },
    ],
  },
  {
    english:
      "Riku is good at playing tennis but doesn't like studying every day.",
    hint: "Riku = 陸 (りく)",
    answers: [
      {
        segments: [
          { text: "陸[りく]さんは テニスをするのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、毎日[まいにち] 勉強[べんきょう]するのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "陸[りく]さんは テニスをするのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が、毎日[まいにち] 勉強[べんきょう]するのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "が conjunction",
      },
      {
        segments: [
          { text: "陸[りく]さんは テニスするのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、毎日[まいにち] 勉強[べんきょう]するのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "テニスする without を",
      },
      {
        segments: [
          { text: "陸[りく]さんは テニスをするのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、毎日[まいにち] 勉強[べんきょう]するのは" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "のは for contrast in second clause",
      },
    ],
  },
  {
    english:
      "Yosuke doesn't like doing overtime work, but he's good at finishing his job quickly.",
    hint: "Yosuke = 陽介 (ようすけ)",
    answers: [
      {
        segments: [
          { text: "陽介[ようすけ]さんは 残業[ざんぎょう]するのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "けど、仕事[しごと]を 早[はや]くするのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "陽介[ようすけ]さんは 残業[ざんぎょう]するのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "が、仕事[しごと]を 早[はや]くするのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が conjunction",
      },
      {
        segments: [
          { text: "陽介[ようすけ]さんは 残業[ざんぎょう]するのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "けど、仕事[しごと]を 早[はや]くやるのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "やる instead of する",
      },
      {
        segments: [
          { text: "陽介[ようすけ]さんは 残業[ざんぎょう]するのは" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
          { text: "けど、仕事[しごと]を 早[はや]くするのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "のは for contrast in first clause",
      },
    ],
  },
  {
    english: "Grandpa is really good at telling interesting stories.",
    answers: [
      {
        segments: [
          {
            text: "おじいさんは 面白[おもしろ]い 話[はなし]を するのが すごく",
          },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
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
            text: "おじいさんは 面白[おもしろ]い 話[はなし]を 話[はな]すのが すごく",
          },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "話す instead of する",
      },
      {
        segments: [
          {
            text: "おじいさんは 面白[おもしろ]い 話[はなし]を するのが とても",
          },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
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
            text: "おじいさんは 面白[おもしろ]い 話[はなし]を するのが 本当[ほんとう]に",
          },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
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
    english: "Haruto is good at swimming but doesn't like going to the sea.",
    hint: "Haruto = 陽翔 (はると)",
    answers: [
      {
        segments: [
          { text: "陽翔[はると]さんは 泳[およ]ぐのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、海[うみ]に 行[い]くのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "陽翔[はると]さんは 泳[およ]ぐのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が、海[うみ]に 行[い]くのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "が conjunction",
      },
      {
        segments: [
          { text: "陽翔[はると]さんは 泳[およ]ぐのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、海[うみ]へ 行[い]くのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "陽翔[はると]さんは 泳[およ]ぐのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、海[うみ]に 行[い]くのは" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "のは for contrast in second clause",
      },
      {
        segments: [
          { text: "陽翔[はると]さんは 泳[およ]ぐのが" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が、海[うみ]に 行[い]くのは" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "のは for contrast + が conjunction",
      },
    ],
  },
  {
    english: "Akiko is bad at doing laundry but loves cooking.",
    hint: "Akiko = 明子 (あきこ)",
    answers: [
      {
        segments: [
          { text: "明子[あきこ]さんは 洗濯[せんたく]するのが" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、料理[りょうり]するのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "明子[あきこ]さんは 洗濯[せんたく]するのが" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が、料理[りょうり]するのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が conjunction",
      },
      {
        segments: [
          { text: "明子[あきこ]さんは 洗濯[せんたく]するのが" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、料理[りょうり]するのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "好き instead of 大好き",
      },
      {
        segments: [
          { text: "明子[あきこ]さんは 洗濯[せんたく]するのは" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、料理[りょうり]するのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "のは for contrast in first clause",
      },
    ],
  },
  {
    english: "Grandma is bad at using computers but loves writing letters.",
    answers: [
      {
        segments: [
          { text: "おばあさんは コンピューターを 使[つか]うのが" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、手紙[てがみ]を 書[か]くのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "おばあさんは コンピューターを 使[つか]うのが" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が、手紙[てがみ]を 書[か]くのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "が conjunction",
      },
      {
        segments: [
          { text: "おばあさんは コンピューターを 使[つか]うのは" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、手紙[てがみ]を 書[か]くのが" },
          {
            text: " 大好[だいす]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "のは for contrast in first clause",
      },
      {
        segments: [
          { text: "おばあさんは コンピューターを 使[つか]うのが" },
          {
            text: " 下手[へた]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、手紙[てがみ]を 書[か]くのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "好き instead of 大好き",
      },
    ],
  },
  {
    english: "Shinji is really good at speaking Japanese.",
    hint: "Shinji = 慎司 (しんじ)",
    answers: [
      {
        segments: [
          { text: "慎司[しんじ]さんは 日本語[にほんご]を 話[はな]すのが すごく" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "慎司[しんじ]さんは 日本語[にほんご]を 話[はな]すのが とても" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
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
            text: "慎司[しんじ]さんは 日本語[にほんご]を 話[はな]すのが 本当[ほんとう]に",
          },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
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
          { text: "慎司[しんじ]さんが 日本語[にほんご]を 話[はな]すのが すごく" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
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
    english:
      "Naomi is really good at listening to people but doesn't like talking.",
    hint: "Naomi = 直美 (なおみ)",
    answers: [
      {
        segments: [
          { text: "直美[なおみ]さんは 人[ひと]の 話[はなし]を 聞[き]くのが すごく" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、話[はな]すのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "直美[なおみ]さんは 人[ひと]の 話[はなし]を 聞[き]くのが すごく" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が、話[はな]すのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "が conjunction",
      },
      {
        segments: [
          { text: "直美[なおみ]さんは 人[ひと]の 話[はなし]を 聞[き]くのが とても" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、話[はな]すのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "とても instead of すごく",
      },
      {
        segments: [
          { text: "直美[なおみ]さんは 話[はなし]を 聞[き]くのが すごく" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、話[はな]すのが" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "Dropped 人の",
      },
      {
        segments: [
          { text: "直美[なおみ]さんは 人[ひと]の 話[はなし]を 聞[き]くのが すごく" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、話[はな]すのは" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "のは for contrast in second clause",
      },
      {
        segments: [
          { text: "直美[なおみ]さんは 人[ひと]の 話[はなし]を 聞[き]くのが とても" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "けど、話[はな]すのは" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "とても + のは for contrast",
      },
      {
        segments: [
          { text: "直美[なおみ]さんは 人[ひと]の 話[はなし]を 聞[き]くのが とても" },
          {
            text: " 上手[じょうず]",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
          { text: "が、話[はな]すのは" },
          {
            text: " 好[す]き",
            blank: true,
            conjugation: {
              pos: "Na-adjective",
              form: "normal",
              polarity: "negative",
              tense: "non-past",
            },
          },
        ],
        notes: "とても + のは + が conjunction",
      },
    ],
  },
]
