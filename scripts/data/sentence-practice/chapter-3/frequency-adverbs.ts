import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I rarely eat fish.",
    answers: [
      {
        segments: [
          { text: "あまり", blank: true },
          { text: "魚[さかな]を 食[た]べません" },
        ],
      },
      {
        segments: [
          { text: "魚[さかな]を" },
          { text: "あまり", blank: true },
          { text: "食[た]べません" },
        ],
      },
    ],
  },
  {
    english: "Yamada often eats rice.",
    answers: [
      {
        segments: [
          { text: "山田[やまだ]さんは" },
          { text: "よく", blank: true },
          { text: "ご飯[ごはん]を 食[た]べます" },
        ],
      },
      {
        segments: [
          { text: "山田[やまだ]さんはご飯[ごはん]を" },
          { text: "よく", blank: true },
          { text: "食[た]べます" },
        ],
      },
    ],
  },
  {
    english: "I sometimes drink tea at the café.",
    answers: [
      {
        segments: [
          { text: "時々[ときどき]", blank: true },
          { text: "カフェでお茶[おちゃ]を 飲[の]みます" },
        ],
      },
      {
        segments: [
          { text: "カフェで" },
          { text: "時々[ときどき]", blank: true },
          { text: "お茶[おちゃ]を 飲[の]みます" },
        ],
      },
      {
        segments: [
          { text: "カフェでお茶[おちゃ]を" },
          { text: "時々[ときどき]", blank: true },
          { text: "飲[の]みます" },
        ],
      },
    ],
  },
  {
    english: "Ms. Takeda doesn't drink coffee at all, right?",
    hint: "Seeking agreement using ね",
    answers: [
      {
        segments: [
          { text: "武田[たけだ]さんは" },
          { text: "全然[ぜんぜん]", blank: true },
          { text: "コーヒーを 飲[の]みませんね" },
        ],
      },
      {
        segments: [
          { text: "武田[たけだ]さんはコーヒーを" },
          { text: "全然[ぜんぜん]", blank: true },
          { text: "飲[の]みませんね" },
        ],
      },
      {
        segments: [
          { text: "武田[たけだ]さんはコーヒーを 飲[の]みませんね" },
          { text: "全然[ぜんぜん]", blank: true },
        ],
      },
    ],
  },
  {
    english: "I usually eat breakfast, but I'll skip it today.",
    answers: [
      {
        segments: [
          { text: "たいてい", blank: true },
          { text: "朝ご飯[あさごはん]を 食[た]べますが 今日は 食[た]べません" },
        ],
      },
      {
        segments: [
          { text: "朝ご飯[あさごはん]を" },
          { text: "たいてい", blank: true },
          { text: "食[た]べますが 今日は 食[た]べませんでした" },
        ],
      },
      {
        segments: [
          { text: "朝ご飯[あさごはん]を 食[た]べますが" },
          { text: "たいてい", blank: true },
          { text: "今日は 食[た]べませんでした" },
        ],
      },
    ],
  },
  {
    english: "Yamamoto rarely watches TV.",
    answers: [
      {
        segments: [
          { text: "山本[やまもと]さんは" },
          { text: "あまり", blank: true },
          { text: "テレビを 見[み]ません" },
        ],
      },
      {
        segments: [
          { text: "山本[やまもと]さんはテレビを" },
          { text: "あまり", blank: true },
          { text: "見[み]ません" },
        ],
      },
    ],
  },
  {
    english: "I often come here.",
    answers: [
      {
        segments: [
          { text: "よく", blank: true },
          { text: "ここに 来[き]ます" },
        ],
      },
      {
        segments: [
          { text: "ここに" },
          { text: "よく", blank: true },
          { text: "来[き]ます" },
        ],
      },
    ],
  },
  {
    english: "Takeda sometimes studies Japanese.",
    answers: [
      {
        segments: [
          { text: "武田[たけだ]さんは" },
          { text: "時々[ときどき]", blank: true },
          { text: "日本語[にほんご]を 勉強[べんきょう]します" },
        ],
      },
      {
        segments: [
          { text: "武田[たけだ]さんは 日本語[にほんご]を" },
          { text: "時々[ときどき]", blank: true },
          { text: "勉強[べんきょう]します" },
        ],
      },
    ],
  },
  {
    english: "I don't listen to music at all, but I like TV shows.",
    answers: [
      {
        segments: [
          { text: "全然[ぜんぜん]", blank: true },
          { text: "音楽[おんがく]を 聞[き]きませんがテレビが 好[す]きです" },
        ],
      },
      {
        segments: [
          { text: "音楽[おんがく]を" },
          { text: "全然[ぜんぜん]", blank: true },
          { text: "聞[き]きませんがテレビが 好[す]きです" },
        ],
      },
      {
        segments: [
          { text: "音楽[おんがく]を 聞[き]きませんが" },
          { text: "全然[ぜんぜん]", blank: true },
          { text: "テレビが 好[す]きです" },
        ],
      },
    ],
  },
  {
    english: "I usually go to school at 8 o'clock, but I sometimes go at 7:30.",
    answers: [
      {
        segments: [
          { text: "たいてい", blank: true },
          { text: "八時[はちじ]に 学校[がっこう]に 行[い]きますが" },
          { text: "時々[ときどき]", blank: true },
          { text: "七時半[はん]に 行[い]きます" },
        ],
      },
      {
        segments: [
          { text: "八時[はちじ]に" },
          { text: "たいてい", blank: true },
          { text: "学校[がっこう]に 行[い]きますが" },
          { text: "時々[ときどき]", blank: true },
          { text: "七時半[はん]に 行[い]きます" },
        ],
      },
      {
        segments: [
          { text: "八時[はちじ]に 学校[がっこう]に" },
          { text: "たいてい", blank: true },
          { text: "行[い]きますが" },
          { text: "時々[ときどき]", blank: true },
          { text: "七時半[はん]に 行[い]きます" },
        ],
      },
    ],
  },
  {
    english: "Ms. Yamada rarely reads books.",
    answers: [
      {
        segments: [
          { text: "山田[やまだ]さんは" },
          { text: "あまり", blank: true },
          { text: "本[ほん]を 読[よ]みません" },
        ],
      },
      {
        segments: [
          { text: "山田[やまだ]さんは 本[ほん]を" },
          { text: "あまり", blank: true },
          { text: "読[よ]みません" },
        ],
      },
    ],
  },
  {
    english: "I sometimes eat ramen for breakfast.",
    hint: "ramen -> ラーメン",
    answers: [
      {
        segments: [
          { text: "時々[ときどき]", blank: true },
          { text: "朝ご飯[あさごはん]にラーメンを 食[た]べます" },
        ],
      },
      {
        segments: [
          { text: "朝ご飯[あさごはん]に" },
          { text: "時々[ときどき]", blank: true },
          { text: "ラーメンを 食[た]べます" },
        ],
      },
      {
        segments: [
          { text: "朝ご飯[あさごはん]にラーメンを" },
          { text: "時々[ときどき]", blank: true },
          { text: "食[た]べます" },
        ],
      },
    ],
  },
  {
    english: "Yamamoto usually drinks tea in the evening.",
    answers: [
      {
        segments: [
          { text: "山本[やまもと]さんは" },
          { text: "たいてい", blank: true },
          { text: "夜[よる]お茶[おちゃ]を 飲[の]みます" },
        ],
      },
      {
        segments: [
          { text: "山本[やまもと]さんは 夜[よる]お茶[おちゃ]を" },
          { text: "たいてい", blank: true },
          { text: "飲[の]みます" },
        ],
      },
      {
        segments: [
          { text: "山本[やまもと]さんは 夜[よる]" },
          { text: "たいてい", blank: true },
          { text: "お茶[おちゃ]を 飲[の]みます" },
        ],
      },
    ],
  },
  {
    english: "I don't eat meat at all.",
    answers: [
      {
        segments: [
          { text: "全然[ぜんぜん]", blank: true },
          { text: "肉[にく]を 食[た]べません" },
        ],
      },
      {
        segments: [
          { text: "肉[にく]を" },
          { text: "全然[ぜんぜん]", blank: true },
          { text: "食[た]べません" },
        ],
      },
    ],
  },
  {
    english: "I rarely go to the cafe, but I like the coffee there.",
    answers: [
      {
        segments: [
          { text: "あまり", blank: true },
          { text: "カフェに 行[い]きませんがそこのコーヒーが 好[す]きです" },
        ],
      },
      {
        segments: [
          { text: "カフェに" },
          { text: "あまり", blank: true },
          { text: "行[い]きませんがそこのコーヒーが 好[す]きです" },
        ],
      },
    ],
  },
  {
    english: "Yamada often studies Japanese.",
    answers: [
      {
        segments: [
          { text: "山田[やまだ]さんは" },
          { text: "よく", blank: true },
          { text: "日本語[にほんご]を 勉強[べんきょう]します" },
        ],
      },
      {
        segments: [
          { text: "山田[やまだ]さんは 日本語[にほんご]を" },
          { text: "よく", blank: true },
          { text: "勉強[べんきょう]します" },
        ],
      },
    ],
  },
  {
    english: "I sometimes drink water.",
    answers: [
      {
        segments: [
          { text: "時々[ときどき]", blank: true },
          { text: "水[みず]を 飲[の]みます" },
        ],
      },
      {
        segments: [
          { text: "水[みず]を" },
          { text: "時々[ときどき]", blank: true },
          { text: "飲[の]みます" },
        ],
      },
    ],
  },
  {
    english: "Takeda usually watches TV at night.",
    answers: [
      {
        segments: [
          { text: "武田[たけだ]さんは" },
          { text: "たいてい", blank: true },
          { text: "夜[よる]テレビを 見[み]ます" },
        ],
      },
      {
        segments: [
          { text: "武田[たけだ]さんは 夜[よる]テレビを" },
          { text: "たいてい", blank: true },
          { text: "見[み]ます" },
        ],
      },
    ],
  },
  {
    english: "Yamamoto doesn't drink juice at all, right?",
    hint: "juice -> ジュース; Seeking agreement with よね",
    answers: [
      {
        segments: [
          { text: "山本[やまもと]さんは" },
          { text: "全然[ぜんぜん]", blank: true },
          { text: "ジュースを 飲[の]みませんよね" },
        ],
      },
      {
        segments: [
          { text: "山本[やまもと]さんはジュースを" },
          { text: "全然[ぜんぜん]", blank: true },
          { text: "飲[の]みませんよね" },
        ],
      },
      {
        segments: [
          { text: "山本[やまもと]さんはジュースを 飲[の]みませんよね" },
          { text: "全然[ぜんぜん]", blank: true },
        ],
      },
    ],
  },
  {
    english:
      "I sometimes eat a few vegetables for breakfast, but I don't really like them.",
    hint: "a few -> 少し",
    answers: [
      {
        segments: [
          { text: "時々[ときどき]", blank: true },
          {
            text: "朝ご飯[あさごはん]に 少し[すこし] 野菜[やさい]を 食[た]べますが",
          },
          { text: "あまり", blank: true },
          { text: "好き[すき]じゃないです" },
        ],
      },
      {
        segments: [
          { text: "朝ご飯[あさごはん]に" },
          { text: "時々[ときどき]", blank: true },
          { text: "少し[すこし] 野菜[やさい]を 食[た]べますが" },
          { text: "あまり", blank: true },
          { text: "好き[すき]じゃないです" },
        ],
      },
      {
        segments: [
          { text: "時々[ときどき]", blank: true },
          {
            text: "朝ご飯[あさごはん]に 少し[すこし] 野菜[やさい]を 食[た]べますが 好き[すき]じゃないです",
          },
          { text: "あまり", blank: true },
        ],
      },
    ],
  },
]
