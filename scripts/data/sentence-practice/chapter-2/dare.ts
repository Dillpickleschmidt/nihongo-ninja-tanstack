import type { Question } from "../types"

export const questions: Question[] = [
  {
    "english": "Who is the Japanese teacher?",
    "hint": "Several teachers are present in the teachers' room",
    "answers": [
      {
        "segments": [
          {
            "text": "だれが 日本語[にほんご]の 先生[せんせい]ですか"
          }
        ],
        "notes": "Using が to identify which specific person among the teachers is the Japanese teacher"
      },
      {
        "segments": [
          {
            "text": "日本語[にほんご]の 先生[せんせい]はだれですか"
          }
        ],
        "notes": "Using は to ask about the Japanese teacher in general"
      }
    ]
  },
  {
    "english": "Whose umbrella is this?",
    "hint": "Looking at an umbrella by the door",
    "answers": [
      {
        "segments": [
          {
            "text": "これはだれのかさですか"
          }
        ],
        "notes": "Longer, less natural sounding"
      },
      {
        "segments": [
          {
            "text": "だれのかさですか"
          }
        ],
        "notes": "Shorter, natural sounding"
      }
    ]
  },
  {
    "english": "Who is an international student in this class?",
    "hint": "Looking around at classroom members",
    "answers": [
      {
        "segments": [
          {
            "text": "だれがこのクラスの 留学生[りゅうがくせい]ですか"
          }
        ],
        "notes": "Using が to identify a specific person"
      },
      {
        "segments": [
          {
            "text": "このクラスでだれが 留学生[りゅうがくせい]ですか"
          }
        ],
        "notes": "Using で to specify the location first, then asking who within that space is the international student (Chapter 3)"
      }
    ]
  },
  {
    "english": "Who is Korean?",
    "hint": "Looking at a group of people",
    "answers": [
      {
        "segments": [
          {
            "text": "だれが 韓国人[かんこくじん]ですか"
          }
        ],
        "notes": "Using が to identify a specific person"
      },
      {
        "segments": [
          {
            "text": "韓国人[かんこくじん]はだれですか"
          }
        ],
        "notes": "Using は to ask the question in general"
      }
    ]
  },
  {
    "english": "Whose English textbook is this?",
    "hint": "Looking at a textbook on a desk",
    "answers": [
      {
        "segments": [
          {
            "text": "これはだれの 英語[えいご]の 本[ほん]ですか"
          }
        ],
        "notes": "Longer, less natural sounding"
      },
      {
        "segments": [
          {
            "text": "だれの 英語[えいご]の 本[ほん]ですか"
          }
        ],
        "notes": "Shorter, more natural sounding"
      }
    ]
  },
  {
    "english": "Whose bag is this?",
    "hint": "Looking at a bag on a chair",
    "answers": [
      {
        "segments": [
          {
            "text": "これはだれのかばんですか"
          }
        ],
        "notes": "Longer, less natural sounding"
      },
      {
        "segments": [
          {
            "text": "だれのかばんですか"
          }
        ],
        "notes": "Shorter, natural sounding"
      }
    ]
  },
  {
    "english": "Who's the doctor at the university?",
    "hint": "Discussing university staff members",
    "answers": [
      {
        "segments": [
          {
            "text": "だれがこの 大学[だいがく]の 医者[いしゃ]ですか"
          }
        ],
        "notes": "Using が to identify a specific person"
      },
      {
        "segments": [
          {
            "text": "この 大学[だいがく]でだれが 医者[いしゃ]ですか"
          }
        ],
        "notes": "Using で to ask about who at this university is a doctor (Chapter 3)"
      }
    ]
  },
  {
    "english": "Who is a first-year student?",
    "hint": "In a classroom with multiple students",
    "answers": [
      {
        "segments": [
          {
            "text": "だれが 一年生[いちねんせい]ですか"
          }
        ],
        "notes": "Using が to identify a specific person"
      }
    ]
  },
  {
    "english": "Who is the English teacher?",
    "hint": "Trying to identify one teacher among several",
    "answers": [
      {
        "segments": [
          {
            "text": "だれが 英語[えいご]の 先生[せんせい]ですか"
          }
        ],
        "notes": "Using が to identify a specific person"
      },
      {
        "segments": [
          {
            "text": "英語[えいご]の 先生[せんせい]はだれですか"
          }
        ],
        "notes": "Using は to ask about the English teacher's identity in general"
      }
    ]
  },
  {
    "english": "Whose wallet is this?",
    "hint": "Found a wallet in the classroom",
    "answers": [
      {
        "segments": [
          {
            "text": "これはだれのさいふですか"
          }
        ],
        "notes": "Longer, less natural sounding"
      },
      {
        "segments": [
          {
            "text": "だれのさいふですか"
          }
        ],
        "notes": "Shorter, natural sounding"
      }
    ]
  },
  {
    "english": "Whose notebook is this?",
    "hint": "Looking at a notebook left in the classroom",
    "answers": [
      {
        "segments": [
          {
            "text": "これはだれのノートですか"
          }
        ],
        "notes": "Longer, less natural sounding"
      },
      {
        "segments": [
          {
            "text": "だれのノートですか"
          }
        ],
        "notes": "Shorter, natural sounding"
      }
    ]
  },
  {
    "english": "Who at this high school is a nurse?",
    "hint": "Asking about school staff",
    "answers": [
      {
        "segments": [
          {
            "text": "だれがこの 高校[こうこう]の 看護師[かんごし]ですか"
          }
        ],
        "notes": "Using が to identify a specific person"
      },
      {
        "segments": [
          {
            "text": "この 高校[こうこう]でだれが 看護師[かんごし]ですか"
          }
        ],
        "notes": "Using で to ask about who in this location is Chinese (Chapter 3)"
      }
    ]
  },
  {
    "english": "Who in this office is Chinese?",
    "hint": "Looking at office staff",
    "answers": [
      {
        "segments": [
          {
            "text": "だれがこのオフィスの 中国人[ちゅうごくじん]ですか"
          }
        ],
        "notes": "Using が to ask who has the role of teacher for this class"
      },
      {
        "segments": [
          {
            "text": "このオフィスでだれが 中国人[ちゅうごくじん]ですか"
          }
        ],
        "notes": "Using で to specify where (Chapter 3)"
      }
    ]
  },
  {
    "english": "Whose dictionary is this?",
    "hint": "Found a dictionary in the library",
    "answers": [
      {
        "segments": [
          {
            "text": "これはだれのじしょですか"
          }
        ],
        "notes": "Longer, less natural sounding"
      },
      {
        "segments": [
          {
            "text": "だれのじしょですか"
          }
        ],
        "notes": "Shorter, natural sounding"
      }
    ]
  },
  {
    "english": "Who is your teacher?",
    "hint": "Asking about someone's teacher",
    "answers": [
      {
        "segments": [
          {
            "text": "だれが 先生[せんせい]ですか"
          }
        ],
        "notes": "Using が to identify a specific person"
      },
      {
        "segments": [
          {
            "text": "先生[せんせい]はだれですか"
          }
        ],
        "notes": "Using は to ask the question in general"
      }
    ]
  },
  {
    "english": "Who is American?",
    "hint": "Looking at a group of people",
    "answers": [
      {
        "segments": [
          {
            "text": "だれがアメリカ人[じん]ですか"
          }
        ],
        "notes": "Using が to identify a specific person"
      },
      {
        "segments": [
          {
            "text": "アメリカ人[じん]はだれですか"
          }
        ],
        "notes": "Using は to ask the question in general"
      }
    ]
  },
  {
    "english": "Who is an office worker?",
    "hint": "Looking at a group of people",
    "answers": [
      {
        "segments": [
          {
            "text": "だれが 会社員[かいしゃいん]ですか"
          }
        ],
        "notes": "Using が to identify a specific person"
      },
      {
        "segments": [
          {
            "text": "会社員[かいしゃいん]はだれですか"
          }
        ],
        "notes": "Using は to ask about the office worker's identity in general"
      }
    ]
  },
  {
    "english": "Whose newspaper is this?",
    "hint": "Looking at a newspaper on the desk",
    "answers": [
      {
        "segments": [
          {
            "text": "これはだれのしんぶんですか"
          }
        ],
        "notes": "Longer, less natural sounding"
      },
      {
        "segments": [
          {
            "text": "だれのしんぶんですか"
          }
        ],
        "notes": "Shorter, natural sounding"
      }
    ]
  },
  {
    "english": "Who at this school is a high school student?",
    "hint": "In a mixed group of students",
    "answers": [
      {
        "segments": [
          {
            "text": "だれがこの 学校[がっこう]の 高校生[こうこうせい]ですか"
          }
        ],
        "notes": "Using が to identify a specific person"
      },
      {
        "segments": [
          {
            "text": "この 学校[がっこう]でだれが 高校生[こうこうせい]ですか"
          }
        ],
        "notes": "Using で to ask about who in this class is Chinese (Chapter 3)"
      }
    ]
  },
  {
    "english": "Who is a lawyer?",
    "hint": "Discussing a group of professionals",
    "answers": [
      {
        "segments": [
          {
            "text": "だれが 弁護士[べんごし]ですか"
          }
        ],
        "notes": "Using が to identify a specific person"
      },
      {
        "segments": [
          {
            "text": "弁護士[べんごし]はだれですか"
          }
        ],
        "notes": "Using は to ask the question in general"
      }
    ]
  }
]
