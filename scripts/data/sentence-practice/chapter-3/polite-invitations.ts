import type { Question } from "../types"

export const questions: Question[] = [
  {
    "english": "Would you like to study at the library?",
    "answers": [
      {
        "segments": [
          {
            "text": "図書館[としょかん]で 勉強[べんきょう]しませんか"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "一緒[いっしょ]に 図書館[としょかん]で 勉強[べんきょう]しませんか"
          }
        ],
        "notes": "With 一緒に"
      }
    ]
  },
  {
    "english": "Would you like to watch a movie?",
    "answers": [
      {
        "segments": [
          {
            "text": "映画[えいが]を 見[み]ませんか"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "一緒[いっしょ]に 映画[えいが]を 見[み]ませんか"
          }
        ],
        "notes": "With 一緒に"
      }
    ]
  },
  {
    "english": "Would you like to drink coffee at the cafe?",
    "answers": [
      {
        "segments": [
          {
            "text": "カフェでコーヒーを 飲[の]みませんか"
          }
        ],
        "notes": "Location first"
      },
      {
        "segments": [
          {
            "text": "コーヒーをカフェで 飲[の]みませんか"
          }
        ],
        "notes": "Object first"
      },
      {
        "segments": [
          {
            "text": "一緒[いっしょ]にカフェでコーヒーを 飲[の]みませんか"
          }
        ],
        "notes": "With 一緒に, location first"
      },
      {
        "segments": [
          {
            "text": "一緒[いっしょ]にコーヒーをカフェで 飲[の]みませんか"
          }
        ],
        "notes": "With 一緒に, object first"
      }
    ]
  },
  {
    "english": "Would you like to read books?",
    "answers": [
      {
        "segments": [
          {
            "text": "本[ほん]を 読[よ]みませんか"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "一緒[いっしょ]に 本[ほん]を 読[よ]みませんか"
          }
        ],
        "notes": "With 一緒に"
      }
    ]
  },
  {
    "english": "Would you like go to school together?",
    "answers": [
      {
        "segments": [
          {
            "text": "一緒[いっしょ]に 学校[がっこう]に 行[い]きませんか"
          }
        ],
        "notes": "With 一緒に using に"
      },
      {
        "segments": [
          {
            "text": "一緒[いっしょ]に 学校[がっこう]へ 行[い]きませんか"
          }
        ],
        "notes": "With 一緒に using へ"
      },
      {
        "segments": [
          {
            "text": "学校[がっこう]に 行[い]きませんか"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "学校[がっこう]へ 行[い]きませんか"
          }
        ],
        "notes": "Using へ"
      }
    ]
  },
  {
    "english": "Would you like to listen to music?",
    "answers": [
      {
        "segments": [
          {
            "text": "音楽[おんがく]を 聞[き]きませんか"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "一緒[いっしょ]に 音楽[おんがく]を 聞[き]きませんか"
          }
        ],
        "notes": "With 一緒に"
      }
    ]
  },
  {
    "english": "Would you like to eat lunch together?",
    "answers": [
      {
        "segments": [
          {
            "text": "昼[ひる]ご 飯[はん]を 食[た]べませんか"
          }
        ]
      },
      {
        "segments": [
          {
            "text": "一緒[いっしょ]に 昼[ひる]ご 飯[はん]を 食[た]べませんか"
          }
        ],
        "notes": "With 一緒に"
      }
    ]
  },
  {
    "english": "Would you like to watch TV at my house?",
    "answers": [
      {
        "segments": [
          {
            "text": "うちでテレビを 見[み]ませんか"
          }
        ],
        "notes": "Location first"
      },
      {
        "segments": [
          {
            "text": "テレビをうちで 見[み]ませんか"
          }
        ],
        "notes": "Object first"
      },
      {
        "segments": [
          {
            "text": "一緒[いっしょ]にうちでテレビを 見[み]ませんか"
          }
        ],
        "notes": "With 一緒に, location first"
      },
      {
        "segments": [
          {
            "text": "一緒[いっしょ]にテレビをうちで 見[み]ませんか"
          }
        ],
        "notes": "With 一緒に, object first"
      }
    ]
  },
  {
    "english": "Would you study Japanese with me?",
    "answers": [
      {
        "segments": [
          {
            "text": "一緒[いっしょ]に 日本語[にほんご]を 勉強[べんきょう]しませんか"
          }
        ],
        "notes": "With 一緒に"
      },
      {
        "segments": [
          {
            "text": "日本語[にほんご]を 勉強[べんきょう]しませんか"
          }
        ]
      }
    ]
  }
]
