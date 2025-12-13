import type { Question } from "../types"

export const questions: Question[] = [
  {
    "english": "This is not my book.",
    "hint": "XはYです",
    "answers": [
      {
        "segments": [
          {
            "text": "これは 私[わたし]の 本[ほん]じゃないです"
          }
        ],
        "notes": "Full form with これは"
      },
      {
        "segments": [
          {
            "text": "私[わたし]の 本[ほん]じゃないです"
          }
        ],
        "notes": "Shorter form without これは"
      }
    ]
  },
  {
    "english": "Isn't this Tanaka's bag?",
    "hint": "Seeking confirmation about ownership",
    "answers": [
      {
        "segments": [
          {
            "text": "これは 田中[たなか]さんのかばんじゃないですか"
          }
        ],
        "notes": "Full form with これは"
      },
      {
        "segments": [
          {
            "text": "田中[たなか]さんのかばんじゃないですか"
          }
        ],
        "notes": "Shorter form without これは"
      }
    ]
  },
  {
    "english": "This is not Tanaka's dictionary.",
    "hint": "Denying ownership of a dictionary",
    "answers": [
      {
        "segments": [
          {
            "text": "これは 田中[たなか]さんのじしょじゃないです"
          }
        ],
        "notes": "Full form with これは"
      },
      {
        "segments": [
          {
            "text": "田中[たなか]さんのじしょじゃないです"
          }
        ],
        "notes": "Shorter form without これは"
      }
    ]
  },
  {
    "english": "Tanaka is not a student. Yamada is not a student either.",
    "hint": "Expressing that multiple people aren't students",
    "answers": [
      {
        "segments": [
          {
            "text": "田中[たなか]さんは 学生[がくせい]じゃないです。山田[やまだ]さんも 学生[がくせい]じゃないです。"
          }
        ],
        "notes": "Using も to add another person who isn't a student"
      }
    ]
  },
  {
    "english": "Isn't that person Chinese?",
    "hint": "Seeking confirmation about someone's nationality",
    "answers": [
      {
        "segments": [
          {
            "text": "あの 人[ひと]は 中国人[ちゅうごくじん]じゃないですか"
          }
        ]
      }
    ]
  },
  {
    "english": "This is not a student.",
    "hint": "Simple negation of someone's role",
    "answers": [
      {
        "segments": [
          {
            "text": "これは 学生[がくせい]じゃないです"
          }
        ],
        "notes": "Full form with これは"
      },
      {
        "segments": [
          {
            "text": "これが 学生[がくせい]じゃないです"
          }
        ],
        "notes": "Full form with これは"
      },
      {
        "segments": [
          {
            "text": "学生[がくせい]じゃないです"
          }
        ],
        "notes": "Shorter form without これは, when context is clear"
      }
    ]
  },
  {
    "english": "Tanaka is not a teacher.",
    "hint": "Stating what someone is not",
    "answers": [
      {
        "segments": [
          {
            "text": "田中[たなか]さんは 先生[せんせい]じゃないです"
          }
        ]
      }
    ]
  },
  {
    "english": "Isn't Yamada a nurse?",
    "hint": "Seeking confirmation about someone's profession",
    "answers": [
      {
        "segments": [
          {
            "text": "山田[やまだ]さんは 看護師[かんごし]じゃないですか"
          }
        ]
      }
    ]
  },
  {
    "english": "This is not an English book.",
    "hint": "Denying type of book",
    "answers": [
      {
        "segments": [
          {
            "text": "これは 英語[えいご]の 本[ほん]じゃないです"
          }
        ],
        "notes": "Full form with これは"
      },
      {
        "segments": [
          {
            "text": "英語[えいご]の 本[ほん]じゃないです"
          }
        ],
        "notes": "Shorter form without これは"
      }
    ]
  },
  {
    "english": "Yamada is not a doctor. Kim is not a doctor either.",
    "hint": "Expressing that multiple people aren't doctors",
    "answers": [
      {
        "segments": [
          {
            "text": "山田[やまだ]さんは 医者[いしゃ]じゃないです。キムさんも 医者[いしゃ]じゃないです。"
          }
        ],
        "notes": "Using も to add another person who isn't a doctor"
      }
    ]
  }
]
