import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "Would you like to study at the library?",
    answers: [
      {
        segments: [
          { text: "図書館[としょかん]で" },
          { text: "勉強[べんきょう]しませんか", blank: true }
        ]
      },
      {
        segments: [
          { text: "一緒[いっしょ]に 図書館[としょかん]で" },
          { text: "勉強[べんきょう]しませんか", blank: true }
        ],
        notes: "With 一緒に"
      }
    ]
  },
  {
    english: "Would you like to watch a movie?",
    answers: [
      {
        segments: [
          { text: "映画[えいが]を" },
          { text: "見[み]ませんか", blank: true }
        ]
      },
      {
        segments: [
          { text: "一緒[いっしょ]に 映画[えいが]を" },
          { text: "見[み]ませんか", blank: true }
        ],
        notes: "With 一緒に"
      }
    ]
  },
  {
    english: "Would you like to drink coffee at the cafe?",
    answers: [
      {
        segments: [
          { text: "カフェでコーヒーを" },
          { text: "飲[の]みませんか", blank: true }
        ],
        notes: "Location first"
      },
      {
        segments: [
          { text: "コーヒーをカフェで" },
          { text: "飲[の]みませんか", blank: true }
        ],
        notes: "Object first"
      },
      {
        segments: [
          { text: "一緒[いっしょ]にカフェでコーヒーを" },
          { text: "飲[の]みませんか", blank: true }
        ],
        notes: "With 一緒に, location first"
      },
      {
        segments: [
          { text: "一緒[いっしょ]にコーヒーをカフェで" },
          { text: "飲[の]みませんか", blank: true }
        ],
        notes: "With 一緒に, object first"
      }
    ]
  },
  {
    english: "Would you like to read books?",
    answers: [
      {
        segments: [
          { text: "本[ほん]を" },
          { text: "読[よ]みませんか", blank: true }
        ]
      },
      {
        segments: [
          { text: "一緒[いっしょ]に 本[ほん]を" },
          { text: "読[よ]みませんか", blank: true }
        ],
        notes: "With 一緒に"
      }
    ]
  },
  {
    english: "Would you like go to school together?",
    answers: [
      {
        segments: [
          { text: "一緒[いっしょ]に 学校[がっこう]に" },
          { text: "行[い]きませんか", blank: true }
        ],
        notes: "With 一緒に using に"
      },
      {
        segments: [
          { text: "一緒[いっしょ]に 学校[がっこう]へ" },
          { text: "行[い]きませんか", blank: true }
        ],
        notes: "With 一緒に using へ"
      },
      {
        segments: [
          { text: "学校[がっこう]に" },
          { text: "行[い]きませんか", blank: true }
        ]
      },
      {
        segments: [
          { text: "学校[がっこう]へ" },
          { text: "行[い]きませんか", blank: true }
        ],
        notes: "Using へ"
      }
    ]
  },
  {
    english: "Would you like to listen to music?",
    answers: [
      {
        segments: [
          { text: "音楽[おんがく]を" },
          { text: "聞[き]きませんか", blank: true }
        ]
      },
      {
        segments: [
          { text: "一緒[いっしょ]に 音楽[おんがく]を" },
          { text: "聞[き]きませんか", blank: true }
        ],
        notes: "With 一緒に"
      }
    ]
  },
  {
    english: "Would you like to eat lunch together?",
    answers: [
      {
        segments: [
          { text: "昼[ひる]ご 飯[はん]を" },
          { text: "食[た]べませんか", blank: true }
        ]
      },
      {
        segments: [
          { text: "一緒[いっしょ]に 昼[ひる]ご 飯[はん]を" },
          { text: "食[た]べませんか", blank: true }
        ],
        notes: "With 一緒に"
      }
    ]
  },
  {
    english: "Would you like to watch TV at my house?",
    answers: [
      {
        segments: [
          { text: "うちでテレビを" },
          { text: "見[み]ませんか", blank: true }
        ],
        notes: "Location first"
      },
      {
        segments: [
          { text: "テレビをうちで" },
          { text: "見[み]ませんか", blank: true }
        ],
        notes: "Object first"
      },
      {
        segments: [
          { text: "一緒[いっしょ]にうちでテレビを" },
          { text: "見[み]ませんか", blank: true }
        ],
        notes: "With 一緒に, location first"
      },
      {
        segments: [
          { text: "一緒[いっしょ]にテレビをうちで" },
          { text: "見[み]ませんか", blank: true }
        ],
        notes: "With 一緒に, object first"
      }
    ]
  },
  {
    english: "Would you study Japanese with me?",
    answers: [
      {
        segments: [
          { text: "一緒[いっしょ]に 日本語[にほんご]を" },
          { text: "勉強[べんきょう]しませんか", blank: true }
        ],
        notes: "With 一緒に"
      },
      {
        segments: [
          { text: "日本語[にほんご]を" },
          { text: "勉強[べんきょう]しませんか", blank: true }
        ]
      }
    ]
  }
]
