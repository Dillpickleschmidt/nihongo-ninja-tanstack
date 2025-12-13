import type { Question } from "../types"

export const questions: Question[] = [
  {
    "english": "The book is on the desk.",
    "answers": [
      {
        "segments": [
          {
            "text": "本[ほん]は 机[つくえ]の 上[うえ]です"
          }
        ],
        "notes": "Someone asks where the book is."
      },
      {
        "segments": [
          {
            "text": "机[つくえ]の 上[うえ]に 本[ほん]があります"
          }
        ],
        "notes": "Someone wonders if there is a book on the desk."
      },
      {
        "segments": [
          {
            "text": "本[ほん]は 机[つくえ]の 上[うえ]にあります"
          }
        ],
        "notes": "Emphasizing the book's existence on the desk."
      },
      {
        "segments": [
          {
            "text": "机[つくえ]の 上[うえ]は 本[ほん]です"
          }
        ],
        "notes": "Focusing on the desk's top being occupied by the book."
      }
    ]
  },
  {
    "english": "The chair is under the table.",
    "answers": [
      {
        "segments": [
          {
            "text": "椅子[いす]はテーブルの 下[した]です"
          }
        ],
        "notes": "Describing where the chair is when cleaning."
      },
      {
        "segments": [
          {
            "text": "テーブルの 下[した]に 椅子[いす]があります"
          }
        ],
        "notes": "Confirming if a chair exists under the table."
      },
      {
        "segments": [
          {
            "text": "椅子[いす]はテーブルの 下[した]にあります"
          }
        ],
        "notes": "Emphasizing the chair's location under the table."
      },
      {
        "segments": [
          {
            "text": "テーブルの 下[した]は 椅子[いす]です"
          }
        ],
        "notes": "Focusing on the table's underside being occupied by the chair."
      }
    ]
  },
  {
    "english": "The dog is behind the park.",
    "answers": [
      {
        "segments": [
          {
            "text": "犬[いぬ]は 公園[こうえん]の 後[うし]ろです"
          }
        ],
        "notes": "Someone asks where the dog is."
      },
      {
        "segments": [
          {
            "text": "公園[こうえん]の 後[うし]ろに 犬[いぬ]がいます"
          }
        ],
        "notes": "Looking for a dog near the park."
      },
      {
        "segments": [
          {
            "text": "犬[いぬ]は 公園[こうえん]の 後[うし]ろにいます"
          }
        ],
        "notes": "Emphasizing the dog's existence behind the park."
      },
      {
        "segments": [
          {
            "text": "公園[こうえん]の 後[うし]ろは 犬[いぬ]です"
          }
        ],
        "notes": "Focusing on the area behind the park being occupied by the dog."
      }
    ]
  },
  {
    "english": "The notebook is next to the computer.",
    "answers": [
      {
        "segments": [
          {
            "text": "ノートはコンピューターの 隣[となり]です"
          }
        ],
        "notes": "Pointing out the notebook's location."
      },
      {
        "segments": [
          {
            "text": "コンピューターの 隣[となり]にノートがあります"
          }
        ],
        "notes": "Checking if there is a notebook near the computer."
      },
      {
        "segments": [
          {
            "text": "ノートはコンピューターの 隣[となり]にあります"
          }
        ],
        "notes": "Emphasizing the notebook's location next to the computer."
      },
      {
        "segments": [
          {
            "text": "コンピューターの 隣[となり]はノートです"
          }
        ],
        "notes": "Focusing on the area next to the computer being occupied by the notebook."
      }
    ]
  },
  {
    "english": "The library is between the bank and the post office.",
    "answers": [
      {
        "segments": [
          {
            "text": "図書館[としょかん]は 銀行[ぎんこう]と 郵便局[ゆうびんきょく]の 間[あいだ]です"
          }
        ],
        "notes": "Explaining the library's location when giving directions."
      },
      {
        "segments": [
          {
            "text": "銀行[ぎんこう]と 郵便局[ゆうびんきょく]の 間[あいだ]に 図書館[としょかん]があります"
          }
        ],
        "notes": "Checking if a library exists between these buildings."
      },
      {
        "segments": [
          {
            "text": "図書館[としょかん]は 銀行[ぎんこう]と 郵便局[ゆうびんきょく]の 間[あいだ]にあります"
          }
        ],
        "notes": "Emphasizing the library's existence between the bank and the post office."
      },
      {
        "segments": [
          {
            "text": "銀行[ぎんこう]と 郵便局[ゆうびんきょく]の 間[あいだ]は 図書館[としょかん]です"
          }
        ],
        "notes": "Focusing on the area between the bank and the post office being occupied by the library."
      }
    ]
  },
  {
    "english": "The cat is in the box.",
    "hint": "box -> 箱[はこ]",
    "answers": [
      {
        "segments": [
          {
            "text": "猫[ねこ]は 箱[はこ]にいます"
          }
        ],
        "notes": "Casual, more straightforward way to say the cat is in the box."
      },
      {
        "segments": [
          {
            "text": "猫[ねこ]は 箱[はこ]の 中[なか]です"
          }
        ],
        "notes": "Ex: Explaining the cat's location after hearing noises."
      },
      {
        "segments": [
          {
            "text": "箱[はこ]の 中[なか]に 猫[ねこ]がいます"
          }
        ],
        "notes": "Checking if a cat is inside the box."
      },
      {
        "segments": [
          {
            "text": "猫[ねこ]は 箱[はこ]の 中[なか]にいます"
          }
        ],
        "notes": "Emphasizing the cat's existence inside the box."
      },
      {
        "segments": [
          {
            "text": "箱[はこ]の 中[なか]は 猫[ねこ]です"
          }
        ],
        "notes": "Focusing on the area inside the box being occupied by the cat."
      }
    ]
  },
  {
    "english": "The eraser is to the left of the book.",
    "hint": "eraser -> 消しゴム",
    "answers": [
      {
        "segments": [
          {
            "text": "消しゴムは 本[ほん]の 左[ひだり]です"
          }
        ],
        "notes": "Pointing out the eraser's location during study."
      },
      {
        "segments": [
          {
            "text": "本[ほん]の 左[ひだり]に 消[け]しゴムがあります"
          }
        ],
        "notes": "Confirming if an eraser is next to the book."
      },
      {
        "segments": [
          {
            "text": "消[け]しゴムは 本[ほん]の 左[ひだり]にあります"
          }
        ],
        "notes": "Emphasizing the eraser's existence to the left of the book."
      },
      {
        "segments": [
          {
            "text": "本[ほん]の 左[ひだり]は 消[け]しゴムです"
          }
        ],
        "notes": "Focusing on the area to the left of the book being occupied by the eraser."
      }
    ]
  },
  {
    "english": "The pencil is to the right of the notebook.",
    "answers": [
      {
        "segments": [
          {
            "text": "鉛筆[えんぴつ]はノートの 右[みぎ]です"
          }
        ],
        "notes": "Explaining where the pencil is during a test."
      },
      {
        "segments": [
          {
            "text": "ノートの 右[みぎ]に 鉛筆[えんぴつ]があります"
          }
        ],
        "notes": "Checking if a pencil is next to the notebook."
      },
      {
        "segments": [
          {
            "text": "鉛筆[えんぴつ]はノートの 右[みぎ]にあります"
          }
        ],
        "notes": "Emphasizing the pencil's existence to the right of the notebook."
      },
      {
        "segments": [
          {
            "text": "ノートの 右[みぎ]は 鉛筆[えんぴつ]です"
          }
        ],
        "notes": "Focusing on the area to the right of the notebook being occupied by the pencil."
      }
    ]
  },
  {
    "english": "The post office is behind the library.",
    "answers": [
      {
        "segments": [
          {
            "text": "郵便局[ゆうびんきょく]は 図書館[としょかん]の 後[うし]ろです"
          }
        ],
        "notes": "Giving directions to the post office."
      },
      {
        "segments": [
          {
            "text": "図書館[としょかん]の 後[うし]ろに 郵便局[ゆうびんきょく]があります"
          }
        ],
        "notes": "Checking if a post office is behind the library."
      },
      {
        "segments": [
          {
            "text": "郵便局[ゆうびんきょく]は 図書館[としょかん]の 後[うし]ろにあります"
          }
        ],
        "notes": "Emphasizing the post office's existence behind the library."
      },
      {
        "segments": [
          {
            "text": "図書館[としょかん]の 後[うし]ろは 郵便局[ゆうびんきょく]です"
          }
        ],
        "notes": "Focusing on the area behind the library being occupied by the post office."
      }
    ]
  },
  {
    "english": "The bus stop is in front of the train station.",
    "hint": "(train) station -> 駅[えき]",
    "answers": [
      {
        "segments": [
          {
            "text": "バス停[てい]は 駅[えき]の 前[まえ]です"
          }
        ],
        "notes": "Explaining where to catch the bus."
      },
      {
        "segments": [
          {
            "text": "駅[えき]の 前[まえ]にバス停[てい]があります"
          }
        ],
        "notes": "Confirming if a bus stop exists near the station."
      },
      {
        "segments": [
          {
            "text": "バス停[てい]は 駅[えき]の 前[まえ]にあります"
          }
        ],
        "notes": "Emphasizing the bus stop's existence in front of the station."
      },
      {
        "segments": [
          {
            "text": "駅[えき]の 前[まえ]はバス停[てい]です"
          }
        ],
        "notes": "Focusing on the area in front of the station being occupied by the bus stop."
      }
    ]
  },
  {
    "english": "The bag is behind the chair.",
    "answers": [
      {
        "segments": [
          {
            "text": "かばんは 椅子[いす]の 後[うし]ろです"
          }
        ],
        "notes": "Describing the bag's position relative to the chair."
      },
      {
        "segments": [
          {
            "text": "椅子[いす]の 後[うし]ろにかばんがあります"
          }
        ],
        "notes": "Confirming if the bag exists behind the chair."
      },
      {
        "segments": [
          {
            "text": "かばんは 椅子[いす]の 後[うし]ろにあります"
          }
        ],
        "notes": "Emphasizing the bag's existence behind the chair."
      },
      {
        "segments": [
          {
            "text": "椅子[いす]の 後[うし]ろはかばんです"
          }
        ],
        "notes": "Focusing on the area behind the chair being occupied by the bag."
      }
    ]
  },
  {
    "english": "The park is near the school.",
    "answers": [
      {
        "segments": [
          {
            "text": "公園[こうえん]は 学校[がっこう]の 近[ちか]くです"
          }
        ],
        "notes": "Pointing out the park's proximity to the school."
      },
      {
        "segments": [
          {
            "text": "学校[がっこう]の 近[ちか]くに 公園[こうえん]があります"
          }
        ],
        "notes": "Checking if a park is near the school."
      },
      {
        "segments": [
          {
            "text": "公園[こうえん]は 学校[がっこう]の 近[ちか]くにあります"
          }
        ],
        "notes": "Emphasizing the park's existence near the school."
      },
      {
        "segments": [
          {
            "text": "学校[がっこう]の 近[ちか]くは 公園[こうえん]です"
          }
        ],
        "notes": "Focusing on the area near the school being a park."
      }
    ]
  }
]
