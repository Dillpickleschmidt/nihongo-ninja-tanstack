import type { Question } from "../types"

export const questions: Question[] = [
  {
    english: "The book is on the desk.",
    answers: [
      {
        segments: [
          { text: "本[ほん]は 机[つくえ]の" },
          { text: "上[うえ]", blank: true },
          { text: "です" },
        ],
        notes: "Someone asks where the book is.",
      },
      {
        segments: [
          { text: "机[つくえ]の" },
          { text: "上[うえ]", blank: true },
          { text: "に 本[ほん]が" },
          { text: "あります", blank: true },
        ],
        notes: "Someone wonders if there is a book on the desk.",
      },
      {
        segments: [
          { text: "本[ほん]は 机[つくえ]の" },
          { text: "上[うえ]", blank: true },
          { text: "に" },
          { text: "あります", blank: true },
        ],
        notes: "Emphasizing the book's existence on the desk.",
      },
      {
        segments: [
          { text: "机[つくえ]の" },
          { text: "上[うえ]", blank: true },
          { text: "は 本[ほん]です" },
        ],
        notes: "Focusing on the desk's top being occupied by the book.",
      },
    ],
  },
  {
    english: "The chair is under the table.",
    answers: [
      {
        segments: [
          { text: "椅子[いす]はテーブルの" },
          { text: "下[した]", blank: true },
          { text: "です" },
        ],
        notes: "Describing where the chair is when cleaning.",
      },
      {
        segments: [
          { text: "テーブルの" },
          { text: "下[した]", blank: true },
          { text: "に 椅子[いす]が" },
          { text: "あります", blank: true },
        ],
        notes: "Confirming if a chair exists under the table.",
      },
      {
        segments: [
          { text: "椅子[いす]はテーブルの" },
          { text: "下[した]", blank: true },
          { text: "に" },
          { text: "あります", blank: true },
        ],
        notes: "Emphasizing the chair's location under the table.",
      },
      {
        segments: [
          { text: "テーブルの" },
          { text: "下[した]", blank: true },
          { text: "は 椅子[いす]です" },
        ],
        notes: "Focusing on the table's underside being occupied by the chair.",
      },
    ],
  },
  {
    english: "The dog is behind the park.",
    answers: [
      {
        segments: [
          { text: "犬[いぬ]は 公園[こうえん]の" },
          { text: "後[うし]ろ", blank: true },
          { text: "です" },
        ],
        notes: "Someone asks where the dog is.",
      },
      {
        segments: [
          { text: "公園[こうえん]の" },
          { text: "後[うし]ろ", blank: true },
          { text: "に 犬[いぬ]が" },
          { text: "います", blank: true },
        ],
        notes: "Looking for a dog near the park.",
      },
      {
        segments: [
          { text: "犬[いぬ]は 公園[こうえん]の" },
          { text: "後[うし]ろ", blank: true },
          { text: "に" },
          { text: "います", blank: true },
        ],
        notes: "Emphasizing the dog's existence behind the park.",
      },
      {
        segments: [
          { text: "公園[こうえん]の" },
          { text: "後[うし]ろ", blank: true },
          { text: "は 犬[いぬ]です" },
        ],
        notes:
          "Focusing on the area behind the park being occupied by the dog.",
      },
    ],
  },
  {
    english: "The notebook is next to the computer.",
    answers: [
      {
        segments: [
          { text: "ノートはコンピューターの" },
          { text: "隣[となり]", blank: true },
          { text: "です" },
        ],
        notes: "Pointing out the notebook's location.",
      },
      {
        segments: [
          { text: "コンピューターの" },
          { text: "隣[となり]", blank: true },
          { text: "にノートが" },
          { text: "あります", blank: true },
        ],
        notes: "Checking if there is a notebook near the computer.",
      },
      {
        segments: [
          { text: "ノートはコンピューターの" },
          { text: "隣[となり]", blank: true },
          { text: "に" },
          { text: "あります", blank: true },
        ],
        notes: "Emphasizing the notebook's location next to the computer.",
      },
      {
        segments: [
          { text: "コンピューターの" },
          { text: "隣[となり]", blank: true },
          { text: "はノートです" },
        ],
        notes:
          "Focusing on the area next to the computer being occupied by the notebook.",
      },
    ],
  },
  {
    english: "The library is between the bank and the post office.",
    answers: [
      {
        segments: [
          {
            text: "図書館[としょかん]は 銀行[ぎんこう]と 郵便局[ゆうびんきょく]の",
          },
          { text: "間[あいだ]", blank: true },
          { text: "です" },
        ],
        notes: "Explaining the library's location when giving directions.",
      },
      {
        segments: [
          { text: "銀行[ぎんこう]と 郵便局[ゆうびんきょく]の" },
          { text: "間[あいだ]", blank: true },
          { text: "に 図書館[としょかん]が" },
          { text: "あります", blank: true },
        ],
        notes: "Checking if a library exists between these buildings.",
      },
      {
        segments: [
          {
            text: "図書館[としょかん]は 銀行[ぎんこう]と 郵便局[ゆうびんきょく]の",
          },
          { text: "間[あいだ]", blank: true },
          { text: "に" },
          { text: "あります", blank: true },
        ],
        notes:
          "Emphasizing the library's existence between the bank and the post office.",
      },
      {
        segments: [
          { text: "銀行[ぎんこう]と 郵便局[ゆうびんきょく]の" },
          { text: "間[あいだ]", blank: true },
          { text: "は 図書館[としょかん]です" },
        ],
        notes:
          "Focusing on the area between the bank and the post office being occupied by the library.",
      },
    ],
  },
  {
    english: "The cat is in the box.",
    hint: "box -> 箱[はこ]",
    answers: [
      {
        segments: [
          { text: "猫[ねこ]は 箱[はこ]に" },
          { text: "います", blank: true },
        ],
        notes: "Casual, more straightforward way to say the cat is in the box.",
      },
      {
        segments: [
          { text: "猫[ねこ]は 箱[はこ]の" },
          { text: "中[なか]", blank: true },
          { text: "です" },
        ],
        notes: "Ex: Explaining the cat's location after hearing noises.",
      },
      {
        segments: [
          { text: "箱[はこ]の" },
          { text: "中[なか]", blank: true },
          { text: "に 猫[ねこ]が" },
          { text: "います", blank: true },
        ],
        notes: "Checking if a cat is inside the box.",
      },
      {
        segments: [
          { text: "猫[ねこ]は 箱[はこ]の" },
          { text: "中[なか]", blank: true },
          { text: "に" },
          { text: "います", blank: true },
        ],
        notes: "Emphasizing the cat's existence inside the box.",
      },
      {
        segments: [
          { text: "箱[はこ]の" },
          { text: "中[なか]", blank: true },
          { text: "は 猫[ねこ]です" },
        ],
        notes: "Focusing on the area inside the box being occupied by the cat.",
      },
    ],
  },
  {
    english: "The eraser is to the left of the book.",
    hint: "eraser -> 消しゴム",
    answers: [
      {
        segments: [
          { text: "消しゴムは 本[ほん]の" },
          { text: "左[ひだり]", blank: true },
          { text: "です" },
        ],
        notes: "Pointing out the eraser's location during study.",
      },
      {
        segments: [
          { text: "本[ほん]の" },
          { text: "左[ひだり]", blank: true },
          { text: "に 消[け]しゴムが" },
          { text: "あります", blank: true },
        ],
        notes: "Confirming if an eraser is next to the book.",
      },
      {
        segments: [
          { text: "消[け]しゴムは 本[ほん]の" },
          { text: "左[ひだり]", blank: true },
          { text: "に" },
          { text: "あります", blank: true },
        ],
        notes: "Emphasizing the eraser's existence to the left of the book.",
      },
      {
        segments: [
          { text: "本[ほん]の" },
          { text: "左[ひだり]", blank: true },
          { text: "は 消[け]しゴムです" },
        ],
        notes:
          "Focusing on the area to the left of the book being occupied by the eraser.",
      },
    ],
  },
  {
    english: "The pencil is to the right of the notebook.",
    answers: [
      {
        segments: [
          { text: "鉛筆[えんぴつ]はノートの" },
          { text: "右[みぎ]", blank: true },
          { text: "です" },
        ],
        notes: "Explaining where the pencil is during a test.",
      },
      {
        segments: [
          { text: "ノートの" },
          { text: "右[みぎ]", blank: true },
          { text: "に 鉛筆[えんぴつ]が" },
          { text: "あります", blank: true },
        ],
        notes: "Checking if a pencil is next to the notebook.",
      },
      {
        segments: [
          { text: "鉛筆[えんぴつ]はノートの" },
          { text: "右[みぎ]", blank: true },
          { text: "に" },
          { text: "あります", blank: true },
        ],
        notes:
          "Emphasizing the pencil's existence to the right of the notebook.",
      },
      {
        segments: [
          { text: "ノートの" },
          { text: "右[みぎ]", blank: true },
          { text: "は 鉛筆[えんぴつ]です" },
        ],
        notes:
          "Focusing on the area to the right of the notebook being occupied by the pencil.",
      },
    ],
  },
  {
    english: "The post office is behind the library.",
    answers: [
      {
        segments: [
          { text: "郵便局[ゆうびんきょく]は 図書館[としょかん]の" },
          { text: "後[うし]ろ", blank: true },
          { text: "です" },
        ],
        notes: "Giving directions to the post office.",
      },
      {
        segments: [
          { text: "図書館[としょかん]の" },
          { text: "後[うし]ろ", blank: true },
          { text: "に 郵便局[ゆうびんきょく]が" },
          { text: "あります", blank: true },
        ],
        notes: "Checking if a post office is behind the library.",
      },
      {
        segments: [
          { text: "郵便局[ゆうびんきょく]は 図書館[としょかん]の" },
          { text: "後[うし]ろ", blank: true },
          { text: "に" },
          { text: "あります", blank: true },
        ],
        notes: "Emphasizing the post office's existence behind the library.",
      },
      {
        segments: [
          { text: "図書館[としょかん]の" },
          { text: "後[うし]ろ", blank: true },
          { text: "は 郵便局[ゆうびんきょく]です" },
        ],
        notes:
          "Focusing on the area behind the library being occupied by the post office.",
      },
    ],
  },
  {
    english: "The bus stop is in front of the train station.",
    hint: "(train) station -> 駅[えき]",
    answers: [
      {
        segments: [
          { text: "バス停[てい]は 駅[えき]の" },
          { text: "前[まえ]", blank: true },
          { text: "です" },
        ],
        notes: "Explaining where to catch the bus.",
      },
      {
        segments: [
          { text: "駅[えき]の" },
          { text: "前[まえ]", blank: true },
          { text: "にバス停[てい]が" },
          { text: "あります", blank: true },
        ],
        notes: "Confirming if a bus stop exists near the station.",
      },
      {
        segments: [
          { text: "バス停[てい]は 駅[えき]の" },
          { text: "前[まえ]", blank: true },
          { text: "に" },
          { text: "あります", blank: true },
        ],
        notes: "Emphasizing the bus stop's existence in front of the station.",
      },
      {
        segments: [
          { text: "駅[えき]の" },
          { text: "前[まえ]", blank: true },
          { text: "はバス停[てい]です" },
        ],
        notes:
          "Focusing on the area in front of the station being occupied by the bus stop.",
      },
    ],
  },
  {
    english: "The bag is behind the chair.",
    answers: [
      {
        segments: [
          { text: "かばんは 椅子[いす]の" },
          { text: "後[うし]ろ", blank: true },
          { text: "です" },
        ],
        notes: "Describing the bag's position relative to the chair.",
      },
      {
        segments: [
          { text: "椅子[いす]の" },
          { text: "後[うし]ろ", blank: true },
          { text: "にかばんが" },
          { text: "あります", blank: true },
        ],
        notes: "Confirming if the bag exists behind the chair.",
      },
      {
        segments: [
          { text: "かばんは 椅子[いす]の" },
          { text: "後[うし]ろ", blank: true },
          { text: "に" },
          { text: "あります", blank: true },
        ],
        notes: "Emphasizing the bag's existence behind the chair.",
      },
      {
        segments: [
          { text: "椅子[いす]の" },
          { text: "後[うし]ろ", blank: true },
          { text: "はかばんです" },
        ],
        notes:
          "Focusing on the area behind the chair being occupied by the bag.",
      },
    ],
  },
  {
    english: "The park is near the school.",
    answers: [
      {
        segments: [
          { text: "公園[こうえん]は 学校[がっこう]の" },
          { text: "近[ちか]く", blank: true },
          { text: "です" },
        ],
        notes: "Pointing out the park's proximity to the school.",
      },
      {
        segments: [
          { text: "学校[がっこう]の" },
          { text: "近[ちか]く", blank: true },
          { text: "に 公園[こうえん]が" },
          { text: "あります", blank: true },
        ],
        notes: "Checking if a park is near the school.",
      },
      {
        segments: [
          { text: "公園[こうえん]は 学校[がっこう]の" },
          { text: "近[ちか]く", blank: true },
          { text: "に" },
          { text: "あります", blank: true },
        ],
        notes: "Emphasizing the park's existence near the school.",
      },
      {
        segments: [
          { text: "学校[がっこう]の" },
          { text: "近[ちか]く", blank: true },
          { text: "は 公園[こうえん]です" },
        ],
        notes: "Focusing on the area near the school being a park.",
      },
    ],
  },
]
