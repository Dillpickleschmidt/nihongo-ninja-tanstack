import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I will be in Tokyo next week, too.",
    answers: [
      {
        segments: [
          { text: "来週[らいしゅう]も 東京[とうきょう]に" },
          { text: "おります", blank: true }
        ],
        notes: "Uses おる as the extra-modest expression for いる."
      }
    ]
  },
  {
    english: "I will (modestly) go to the park where the company president (graciously) is.",
    answers: [
      {
        segments: [
          { text: "社長[しゃちょう]がいらっしゃる 公園[こうえん]に" },
          { text: "参[まい]ります", blank: true }
        ],
        notes: "Uses 参ります as the extra-modest expression for 行く and いらっしゃる as the honorific expression for いる."
      }
    ]
  },
  {
    english: "I will go to Osaka by Shinkansen.",
    answers: [
      {
        segments: [
          { text: "新幹線[しんかんせん]で 大阪[おおさか]に" },
          { text: "参[まい]ります", blank: true }
        ],
        notes: "Uses 参る as the extra-modest expression for 行く."
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]で 大阪[おおさか]へ" },
          { text: "参[まい]ります", blank: true }
        ],
        notes: "Uses へ instead of に for the destination particle."
      }
    ]
  },
  {
    english: "This product is on the first floor.",
    hint: "商品 (しょうひん) -> product",
    answers: [
      {
        segments: [
          { text: "こちらの 商品[しょうひん]は 一階[いっかい]に" },
          { text: "ございます", blank: true }
        ],
        notes: "Uses ございます as the extra-modest expression for ある."
      },
      {
        segments: [
          { text: "こちらの 商品[しょうひん]は 一階[いっかい]" },
          { text: "でございます", blank: true }
        ],
        notes: "Uses でございます as the extra-modest replacement for です."
      }
    ]
  },
  {
    english: "I am writing a novel as a hobby.",
    answers: [
      {
        segments: [
          { text: "趣味[しゅみ]で 小説[しょうせつ]を" },
          { text: "書[か]いております", blank: true }
        ],
        notes: "Uses ～ておる as the extra-modest expression for ～ている."
      },
      {
        segments: [
          { text: "趣味[しゅみ]で 小説[しょうせつ]を" },
          { text: "執筆[しっぴつ]しております", blank: true }
        ],
        notes: "Uses 執筆 (formal word for 'writing') with ～ておる."
      }
    ]
  },
  {
    english: "I will continue this project next month, too.",
    answers: [
      {
        segments: [
          { text: "来月[らいげつ]もこのプロジェクトを" },
          { text: "続[つづ]けております", blank: true }
        ],
        notes: "Uses ～ておる as the extra-modest expression for ～ている."
      },
      {
        segments: [
          { text: "来月[らいげつ]もこのプロジェクトを" },
          { text: "進[すす]めております", blank: true }
        ],
        notes: "Uses 進める (to advance) with ～ておる."
      }
    ]
  },
  {
    english: "I went to the travel agency the other day.",
    hint: "Use 先日 (せんじつ) instead of この間 for \"'the other day\" as it's more formal.",
    answers: [
      {
        segments: [
          { text: "先日[せんじつ]旅行会社[りょこうがいしゃ]に" },
          { text: "参[まい]りました", blank: true }
        ],
        notes: "Uses 参る as the extra-modest expression for 行く."
      },
      {
        segments: [
          { text: "先日[せんじつ]旅行会社[りょこうがいしゃ]へ" },
          { text: "参[まい]りました", blank: true }
        ],
        notes: "Uses へ instead of に for the destination particle."
      }
    ]
  },
  {
    english: "These sneakers are on the third floor.",
    answers: [
      {
        segments: [
          { text: "こちらのスニーカーは 三階[さんがい]に" },
          { text: "ございます", blank: true }
        ],
        notes: "Uses ございます as the extra-modest expression for ある."
      },
      {
        segments: [
          { text: "こちらのスニーカーは 三階[さんがい]" },
          { text: "でございます", blank: true }
        ],
        notes: "Uses でございます as the extra-modest replacement for です."
      }
    ]
  },
  {
    english: "I will (modestly) go to the branch office tomorrow, where the manager (graciously) is.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 明日[あした]部長[ぶちょう]がいらっしゃる 支店[してん]に" },
          { text: "参[まい]ります", blank: true }
        ],
        notes: "Uses 参ります as the extra-modest expression for 行く and いらっしゃる as the honorific expression for いる."
      }
    ]
  },
  {
    english: "I submitted my résumé last month.",
    hint: "提出する (ていしゅつする) is a formal verb for\"submit\" (for documents, reports, etc.).",
    answers: [
      {
        segments: [
          { text: "先月[せんげつ]履歴書[りれきしょ]を" },
          { text: "提出[ていしゅつ]いたしました", blank: true }
        ],
        notes: "Uses いたす as the extra-modest expression for する."
      },
      {
        segments: [
          { text: "先月[せんげつ]履歴書[りれきしょ]を" },
          { text: "お 出[だ]しいたしました", blank: true }
        ],
        notes: "Uses お出しいたす (extra-modest + humble in one)."
      }
    ]
  },
  {
    english: "I am painting as a hobby.",
    answers: [
      {
        segments: [
          { text: "趣味[しゅみ]で 絵[え]を" },
          { text: "描[か]いております", blank: true }
        ],
        notes: "Uses ～ておる as the extra-modest expression for ～ている."
      },
      {
        segments: [
          { text: "趣味[しゅみ]で 絵[え]を" },
          { text: "制作[せいさく]しております", blank: true }
        ],
        notes: "Uses 制作 (formal word for 'creating') with ～ておる."
      }
    ]
  },
  {
    english: "These headphones are very popular.",
    answers: [
      {
        segments: [
          { text: "こちらのヘッドホンはとても 人気[にんき]が" },
          { text: "ございます", blank: true }
        ],
        notes: "Uses ございます as the extra-modest expression for ある. \"とても\" to keep things simple."
      },
      {
        segments: [
          { text: "こちらのヘッドホンはとても 人気[にんき]" },
          { text: "でございます", blank: true }
        ],
        notes: "Uses でございます as the extra-modest replacement for です. \"とても\" to keep things simple."
      },
      {
        segments: [
          { text: "こちらのヘッドホンは 非常[ひじょう]に 人気[にんき]" },
          { text: "でございます", blank: true }
        ],
        notes: "Uses でございます as the extra-modest replacement for です. '非常に' is a more formal and refined adverb meaning 'extremely,' appropriate for polite contexts."
      },
      {
        segments: [
          { text: "こちらのヘッドホンは 非常[ひじょう]に 人気[にんき]が" },
          { text: "ございます", blank: true }
        ],
        notes: "Uses ございます as the extra-modest expression for ある. '非常に' is a formal adverb meaning 'extremely,' suitable for polite speech."
      }
    ]
  },
  {
    english: "I will go to Kyoto by Shinkansen next week, too.",
    answers: [
      {
        segments: [
          { text: "来週[らいしゅう]も 新幹線[しんかんせん]で 京都[きょうと]に" },
          { text: "参[まい]ります", blank: true }
        ],
        notes: "Uses 参る as the extra-modest expression for 行く."
      },
      {
        segments: [
          { text: "来週[らいしゅう]も 新幹線[しんかんせん]で 京都[きょうと]へ" },
          { text: "参[まい]ります", blank: true }
        ],
        notes: "Uses へ instead of に for the destination particle."
      }
    ]
  },
  {
    english: "I went to the branch office the other day.",
    hint: "Use 先日 (せんじつ) instead of この間 for \"'the other day\" as it's more formal.",
    answers: [
      {
        segments: [
          { text: "先日[せんじつ]支店[してん]に" },
          { text: "参[まい]りました", blank: true }
        ],
        notes: "Uses 参る as the extra-modest expression for 行く."
      },
      {
        segments: [
          { text: "先日[せんじつ]支店[してん]へ" },
          { text: "参[まい]りました", blank: true }
        ],
        notes: "Uses へ instead of に for the destination particle."
      }
    ]
  },
  {
    english: "This branch is scheduled to close next month.",
    hint: "Use 閉店する (へいてんする) for permanent closures, such as stores, branches, etc.",
    answers: [
      {
        segments: [
          { text: "こちらの 支店[してん]は 来月[らいげつ]閉店[へいてん]する 予定[よてい]" },
          { text: "でございます", blank: true }
        ],
        notes: "Uses でございます as the extra-modest replacement for です."
      },
      {
        segments: [
          { text: "こちらの 支店[してん]は 来月[らいげつ]で 閉店[へいてん]する 予定[よてい]" },
          { text: "でございます", blank: true }
        ],
        notes: "Adds で before 閉店 for emphasis (で meaning by/at next month)."
      }
    ]
  },
  {
    english: "I have recently been taking photos as a hobby.",
    answers: [
      {
        segments: [
          { text: "最近[さいきん]趣味[しゅみ]で 写真[しゃしん]を" },
          { text: "撮[と]っております", blank: true }
        ],
        notes: "Uses ～ておる as the extra-modest expression for ～ている."
      },
      {
        segments: [
          { text: "最近[さいきん]趣味[しゅみ]で 写真[しゃしん]を" },
          { text: "撮影[さつえい]しております", blank: true }
        ],
        notes: "Uses 撮影 (formal word for 'taking photos') with ～ておる."
      }
    ]
  },
  {
    english: "I will do this work next week, too.",
    answers: [
      {
        segments: [
          { text: "来週[らいしゅう]もこの 仕事[しごと]を" },
          { text: "いたします", blank: true }
        ],
        notes: "Uses いたす as the extra-modest expression for する."
      }
    ]
  },
  {
    english: "This fan is very mysterious, isn't it?",
    answers: [
      {
        segments: [
          { text: "こちらの 扇子[せんす]はとても 不思議[ふしぎ]" },
          { text: "でございますね", blank: true }
        ],
        notes: "Uses でございます as the extra-modest replacement for です."
      },
      {
        segments: [
          { text: "こちらの 扇子[せんす]は 非常[ひじょう]に 不思議[ふしぎ]" },
          { text: "でございますね", blank: true }
        ],
        notes: "Uses 非常に instead of とても for 'very.'"
      }
    ]
  },
  {
    english: "I will participate in this project next month, too.",
    answers: [
      {
        segments: [
          { text: "来月[らいげつ]もこのプロジェクトに" },
          { text: "参加[さんか]いたします", blank: true }
        ],
        notes: "Uses いたす as the extra-modest expression for する."
      }
    ]
  }
]
