import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "I usually study at the library on weekends.",
    answers: [
      {
      segments: [
        { text: "週末[しゅうまつ]は たいてい" },
        { text: "図書館[としょかん]で", blank: true },
        {
          text: "勉強[べんきょう]する",
          blank: true,
          conjugation: {
            pos: "Suru verb - compound word",
            form: "normal",
            polarity: "positive",
            tense: "non-past",
          },
        },
      ],
    },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ] たいてい" },
          { text: "図書館[としょかん]で", blank: true },
          {
            text: "勉強[べんきょう]する",
            blank: true,
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は at the start, weekend before たいてい",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]は" },
          { text: "図書館[としょかん]で", blank: true },
          { text: "たいてい" },
          {
            text: "勉強[べんきょう]する",
            blank: true,
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "たいてい after 図書館で",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]、たいてい" },
          { text: "図書館[としょかん]で", blank: true },
          {
            text: "勉強[べんきょう]する",
            blank: true,
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "週末 with comma, no は",
      },
      {
        segments: [
          { text: "私[わたし]は" },
          { text: "週末[しゅうまつ]は" },
          { text: "たいてい" },
          { text: "図書館[としょかん]で", blank: true },
          {
            text: "勉強[べんきょう]する",
            blank: true,
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "私は at the start",
      },
    ],
  },
  {
    english: "I sometimes eat lunch at the cafeteria with friends.",
    answers: [
      {
      segments: [
        { text: "時々[ときどき]友[とも]だちと" },
        { text: "食堂[しょくどう]で", blank: true },
        { text: "昼[ひる]ご飯[はん]を" },
        {
          text: "食[た]べる",
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
          {
            text: "友[とも]だちと時々[ときどき]食堂[しょくどう]で昼[ひる]ご飯[はん]を", blank: true,
          },
          {
            text: "食[た]べる",
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
          {
            text: "時々[ときどき]食堂[しょくどう]で友[とも]だちと昼[ひる]ご飯[はん]を", blank: true,
          },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "食堂で before 友だちと",
      },
    ],
  },
  {
    english: "I practice guitar in my room every night.",
    answers: [
      {
      segments: [
        { text: "毎晩[まいばん]" },
        { text: "部屋[へや]で", blank: true },
        { text: "ギターを" },
        {
          text: "練習[れんしゅう]する",
          blank: true,
          conjugation: {
            pos: "Suru verb - compound word",
            form: "normal",
            polarity: "positive",
            tense: "non-past",
          },
        },
      ],
    },
      {
        segments: [
          { text: "部屋[へや]で", blank: true },
          { text: "毎晩[まいばん]ギターを" },
          {
            text: "練習[れんしゅう]する",
            blank: true,
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "部屋で fronted",
      },
    ],
  },
  {
    english: "I bought this hat at a department store in Tokyo.",
    answers: [
      {
      segments: [
        { text: "東京[とうきょう]のデパートで", blank: true },
        { text: "この 帽子[ぼうし]を" },
        {
          text: "買[か]う",
          blank: true,
          conjugation: {
            pos: "Godan verb with 'u' ending",
            form: "normal",
            polarity: "positive",
            tense: "past",
          },
        },
      ],
    },
      {
        segments: [
          { text: "この 帽子[ぼうし]は" },
          { text: "東京[とうきょう]のデパートで", blank: true },
          {
            text: "買[か]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "帽子は topicalized",
      },
    ],
  },
  {
    english: "I swam in the sea every day during summer vacation.",
    answers: [
      {
      segments: [
        { text: "夏[なつ]は 毎日[まいにち]" },
        { text: "海[うみ]で", blank: true },
        {
          text: "泳[およ]ぐ",
          blank: true,
          conjugation: {
            pos: "Godan verb with 'gu' ending",
            form: "normal",
            polarity: "positive",
            tense: "past",
          },
        },
      ],
    },
      {
        segments: [
          { text: "毎日[まいにち]" },
          { text: "海[うみ]で", blank: true },
          {
            text: "泳[およ]ぐ",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'gu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Dropped 夏は",
      },
      {
        segments: [
          { text: "夏休[なつやす]みは 毎日[まいにち]" },
          { text: "海[うみ]で", blank: true },
          {
            text: "泳[およ]ぐ",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'gu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "夏休み (summer vacation) instead of 夏",
      },
    ],
  },
  {
    english: "I watched the movie at home, not at a cafe.",
    answers: [
      {
        segments: [
          { text: "カフェ" },
          { text: "じゃなくて", blank: true },
          { text: "、家[いえ]で 映画[えいが]を", blank: true },
          {
            text: "見[み]る",
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
          { text: "家[いえ]で 映画[えいが]を", blank: true },
          {
            text: "見[み]る",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Without the contrastive clause",
      },
      ],
  },
  {
    english: "I sang karaoke at a karaoke bar in Shibuya last Saturday.",
    hint: "Shibuya = しぶや",
    answers: [
      {
      segments: [
        { text: "先週[せんしゅう]の土曜日[どようび]、" },
        { text: "しぶやのカラオケでカラオケを", blank: true },
        {
          text: "歌[うた]う",
          blank: true,
          conjugation: {
            pos: "Godan verb with 'u' ending",
            form: "normal",
            polarity: "positive",
            tense: "past",
          },
        },
      ],
      notes: "Time expression at the start",
    },
      {
        segments: [
          { text: "しぶやのカラオケでカラオケを", blank: true },
          {
            text: "歌[うた]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "、先週[せんしゅう]の土曜日[どようび]" },
        ],
        notes: "Time expression at the end",
      },
      {
        segments: [
          {
            text: "先週[せんしゅう]の土曜日[どようび]にしぶやのカラオケでカラオケを", blank: true,
          },
          {
            text: "歌[うた]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "に added after time expression",
      },

    ],
  },
  {
    english: "I read the newspaper at the park this morning.",
    answers: [
      {
      segments: [
        { text: "今朝[けさ]" },
        { text: "公園[こうえん]で", blank: true },
        { text: "新聞[しんぶん]を" },
        {
          text: "読[よ]む",
          blank: true,
          conjugation: {
            pos: "Godan verb with 'mu' ending",
            form: "normal",
            polarity: "positive",
            tense: "past",
          },
        },
      ],
    },
      {
        segments: [
          { text: "公園[こうえん]で今朝[けさ]新聞[しんぶん]を", blank: true },
          {
            text: "読[よ]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "公園[こうえん]で新聞[しんぶん]を今朝[けさ]", blank: true },
          {
            text: "読[よ]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は今朝[けさ]公園[こうえん]で新聞[しんぶん]を", blank: true },
          {
            text: "読[よ]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
    ],
  },
  {
    english:
      "I bought these jeans at a shop in Shibuya, but they were actually cheaper than I expected.",
    answers: [
      {
      segments: [
        { text: "しぶやの" },
        { text: "店[みせ]で", blank: true },
        { text: "この ジーンズを" },
        {
          text: "買[か]う",
          blank: true,
          conjugation: {
            pos: "Godan verb with 'u' ending",
            form: "normal",
            polarity: "positive",
            tense: "past",
          },
        },
        { text: "けど、思[おも]ったより" },
        {
          text: "安[やす]い",
          blank: true,
          conjugation: {
            pos: "I-adjective",
            form: "normal",
            polarity: "positive",
            tense: "past",
          },
        },
      ],
      notes: "しぶやの店で marks where the jeans were bought",
    },
      {
        segments: [
          { text: "このジーンズは しぶやの 店[みせ]で", blank: true },
          {
            text: "買[か]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
          { text: "けど、 思[おも]ったより" },
          {
            text: "安[やす]い",
            blank: true,
            conjugation: {
              pos: "I-adjective",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Topic-marked これ variation with は",
      },
      ],
  },
  {
    english: "I always do my homework at a cafe near the station.",
    answers: [
      {
      segments: [
        { text: "いつも" },
        { text: "駅[えき]の近[ちか]くのカフェで", blank: true },
        { text: "宿題[しゅくだい]を" },
        {
          text: "する",
          blank: true,
          conjugation: {
            pos: "Suru verb - included",
            form: "normal",
            polarity: "positive",
            tense: "non-past",
          },
        },
      ],
    },
      {
        segments: [
          { text: "私[わたし]はいつも" },
          { text: "駅[えき]の 近[ちか]くのカフェで", blank: true },
          { text: "宿題[しゅくだい]を" },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "non-past",
            },
          },
        ],
        notes: "With explicit 私は subject",
      },
      {
        segments: [
          { text: "いつも" },
          { text: "駅[えき]の 近[ちか]くのカフェで", blank: true },
          { text: "宿題[しゅくだい]をして" },
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
        notes: "Using している for habitual action",
      },
      {
        segments: [
          { text: "私[わたし]はいつも 駅[えき]の 近[ちか]くの" },
          { text: "カフェで", blank: true },
          { text: "宿題[しゅくだい]をして" },
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
        notes: "私は + している habitual",
      },
    ],
  },
  {
    english:
      "I played soccer at the park near my house with friends last Sunday.",
    answers: [
      {
      segments: [
        { text: "先週[せんしゅう]の 日曜日[にちようび]、友[とも]だちと" },
        { text: "うちの 近[ちか]くの 公園[こうえん]で", blank: true },
        { text: "サッカーを" },
        {
          text: "する",
          blank: true,
          conjugation: {
            pos: "Suru verb - included",
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
            text: "友[とも]だちと先週[せんしゅう]の 日曜日[にちようび]、うちの 近[ちか]くの 公園[こうえん]でサッカーを", blank: true,
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - included",
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
            text: "先週[せんしゅう]の 日曜日[にちようび]、友[とも]だちと家[いえ]の 近[ちか]くの 公園[こうえん]でサッカーを", blank: true,
          },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "I met Kenji at the station this morning.",
    hint: "Kenji = けんじ",
    answers: [
      {
      segments: [
        { text: "今朝[けさ]" },
        { text: "駅[えき]で", blank: true },
        { text: "けんじさんに" },
        {
          text: "会[あ]う",
          blank: true,
          conjugation: {
            pos: "Godan verb with 'u' ending",
            form: "normal",
            polarity: "positive",
            tense: "past",
          },
        },
      ],
    },
      {
        segments: [
          { text: "駅[えき]で", blank: true },
          { text: "今朝[けさ]けんじさんに" },
          {
            text: "会[あ]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "駅で fronted",
      },
      {
        segments: [
          { text: "今朝[けさ]けんじさんに" },
          { text: "駅[えき]で", blank: true },
          {
            text: "会[あ]う",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'u' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "けんじさんに before 駅で",
      },
    ],
  },
  {
    english: "I watched the baseball game at a restaurant near the park.",
    answers: [
      {
      segments: [
        { text: "公園[こうえん]の 近[ちか]くの レストラン", blank: true },
        { text: "で", blank: true },
        { text: "野球[やきゅう]を" },
        {
          text: "見[み]る",
          blank: true,
          conjugation: {
            pos: "Ichidan verb",
            form: "normal",
            polarity: "positive",
            tense: "past",
          },
        },
      ],
      notes:
        "公園の近くのレストランで marks where the baseball was watched",
    },
      {
        segments: [
          {
            text: "私[わたし]は 公園[こうえん]の 近[ちか]くの レストランで 野球[やきゅう]を", blank: true,
          },
          {
            text: "見[み]る",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Particle は added as topic marker for 私",
      },
      {
        segments: [
          {
            text: "野球[やきゅう]を 公園[こうえん]の 近[ちか]くの レストランで", blank: true,
          },
          {
            text: "見[み]る",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes:
          "Word order: object before location (less natural but grammatically valid)",
      },
      ],
  },
  {
    english: "I drank coffee at a cafe near the university this morning.",
    answers: [
      {
      segments: [
        { text: "今朝[けさ]大学[だいがく]の 近[ちか]くの" },
        { text: "カフェで", blank: true },
        { text: "コーヒーを" },
        {
          text: "飲[の]む",
          blank: true,
          conjugation: {
            pos: "Godan verb with 'mu' ending",
            form: "normal",
            polarity: "positive",
            tense: "past",
          },
        },
      ],
      notes:
        "で marks the cafe as the location where the action (drinking coffee) takes place.",
    },
      {
        segments: [
          { text: "大学[だいがく]の近[ちか]くのカフェで今朝[けさ]コーヒーを", blank: true },
          {
            text: "飲[の]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
    ],
  },
  {
    english: "I cooked dinner at a friend's place last night.",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、" },
          { text: "友[とも]だちの家[いえ]で", blank: true },
          { text: "晩[ばん]ご 飯[はん]を" },
          {
            text: "料理[りょうり]する",
            blank: true,
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "昨晩[さくばん]、" },
          { text: "友[とも]だちの家[いえ]で", blank: true },
          { text: "晩[ばん]ご 飯[はん]を" },
          {
            text: "料理[りょうり]する",
            blank: true,
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "昨晩 for last night",
      },
      {
        segments: [
          { text: "昨日[きのう]の 夜[よる]、" },
          { text: "友[とも]だちの家[いえ]で", blank: true },
          { text: "夕[ゆう]ご 飯[はん]を" },
          {
            text: "料理[りょうり]する",
            blank: true,
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "夕ご飯 instead of 晩ご飯",
      },
    ],
  },
  {
    english: "I took photos at the zoo with my camera yesterday.",
    answers: [
      {
      segments: [
        { text: "昨日[きのう]" },
        { text: "動物園[どうぶつえん]で", blank: true },
        { text: "カメラで", blank: true },
        { text: "写真[しゃしん]を" },
        {
          text: "撮[と]る",
          blank: true,
          conjugation: {
            pos: "Godan verb with 'ru' ending",
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
            text: "カメラで昨日[きのう]動物園[どうぶつえん]で写真[しゃしん]を", blank: true,
          },
          {
            text: "撮[と]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "カメラで moved to front",
      },
      {
        segments: [
          {
            text: "昨日[きのう]動物園[どうぶつえん]で写真[しゃしん]をカメラで", blank: true,
          },
          {
            text: "撮[と]る",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'ru' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "カメラで moved after 写真を",
      },
    ],
  },
  {
    english:
      "I practiced tennis at the park near my school with Yuki on Tuesday.",
    hint: "Yuki = ゆき",
    answers: [
      {
      segments: [
        { text: "火曜日[かようび]に ゆきさんと 学校[がっこう]の 近[ちか]くの" },
        { text: "公園[こうえん]で", blank: true },
        { text: "テニスを" },
        {
          text: "練習[れんしゅう]する",
          blank: true,
          conjugation: {
            pos: "Suru verb - compound word",
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
            text: "学校[がっこう]の 近[ちか]くの 公園[こうえん]で ゆきさんと 火曜日[かようび]にテニスを", blank: true,
          },
          {
            text: "練習[れんしゅう]する",
            blank: true,
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Place first, person + time later",
      },
      {
        segments: [
          {
            text: "火曜日[かようび]、ゆきさんと 学校[がっこう]の 近[ちか]くの 公園[こうえん]でテニスを", blank: true,
          },
          {
            text: "練習[れんしゅう]する",
            blank: true,
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Tuesday with comma at front",
      },
      {
        segments: [
          {
            text: "ゆきさんと 火曜日[かようび]に 学校[がっこう]の 近[ちか]くの 公園[こうえん]でテニスを", blank: true,
          },
          {
            text: "練習[れんしゅう]する",
            blank: true,
            conjugation: {
              pos: "Suru verb - compound word",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Person before time phrase",
      },
    ],
  },
  {
    english: "I ate sushi at a restaurant in Osaka for the first time.",
    answers: [
      {
      segments: [
        { text: "大阪[おおさか]のレストランで", blank: true },
        { text: "はじめてすしを", blank: true },
        {
          text: "食[た]べる",
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
          { text: "大阪[おおさか]のレストランで", blank: true },
          { text: "はじめて 寿司[すし]を" },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "Using 寿司 kanji",
      },
      {
        segments: [
          { text: "はじめて" },
          { text: "大阪[おおさか]のレストランで", blank: true },
          { text: "すしを" },
          {
            text: "食[た]べる",
            blank: true,
            conjugation: {
              pos: "Ichidan verb",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "はじめて fronted",
      },
      {
        segments: [
          { text: "はじめて大阪[おおさか]のレストランで寿司[すし]を", blank: true },
          {
            text: "食[た]べる",
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
    ],
  },
  {
    english: "I did my laundry at the dormitory this morning.",
    answers: [
      {
      segments: [
        { text: "今朝[けさ]" },
        { text: "寮[りょう]で", blank: true },
        { text: "洗濯[せんたく]", blank: true },
        {
          text: "する",
          blank: true,
          conjugation: {
            pos: "Suru verb - compound word",
            form: "normal",
            polarity: "positive",
            tense: "past",
          },
        },
      ],
      notes:
        "The blank covers the location + で particle, demonstrating で marking the place where the action occurred.",
    },
      {
        segments: [
          { text: "今朝[けさ]" },
          { text: "寮[りょう]で", blank: true },
          { text: "洗濯[せんたく]を" },
          {
            text: "する",
            blank: true,
            conjugation: {
              pos: "Suru verb - included",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
        notes: "With を particle explicitly included (洗濯をする)",
      },
    ],
  },
  {
    english: "Last night, I drank wine at a restaurant in Italy.",
    answers: [
      {
      segments: [
        { text: "昨日[きのう]の 夜[よる]、" },
        { text: "イタリアのレストランでワインを", blank: true },
        {
          text: "飲[の]む",
          blank: true,
          conjugation: {
            pos: "Godan verb with 'mu' ending",
            form: "normal",
            polarity: "positive",
            tense: "past",
          },
        },
      ],
      notes:
        "Blank covers the で-marked location phrase plus the object, demonstrating で as a location marker. はじめて omitted (not in known vocab).",
    },
      {
        segments: [
          { text: "イタリアのレストランで昨日[きのう]の 夜[よる]ワインを", blank: true },
          {
            text: "飲[の]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
      {
        segments: [
          { text: "昨日[きのう]、イタリアのレストランでワインを", blank: true },
          {
            text: "飲[の]む",
            blank: true,
            conjugation: {
              pos: "Godan verb with 'mu' ending",
              form: "normal",
              polarity: "positive",
              tense: "past",
            },
          },
        ],
      },
    ],
  },
]
