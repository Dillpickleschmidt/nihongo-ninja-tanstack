import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "Taro, do your homework now.",
    hint: "Taro = 太郎 (たろう)",
    answers: [
      {
        segments: [
          { text: "太郎[たろう]、今[いま] 宿題[しゅくだい]を" },
          { text: "しなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "太郎[たろう]、今[いま] 宿題[しゅくだい]を" },
          { text: "やりなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "太郎[たろう]、今[いま] 宿題[しゅくだい]" },
          { text: "しなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "太郎[たろう]、今[いま] 宿題[しゅくだい]" },
          { text: "やりなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "太郎[たろう]、宿題[しゅくだい]を 今[いま]" },
          { text: "しなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "太郎[たろう]、宿題[しゅくだい]を 今[いま]" },
          { text: "やりなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "太郎[たろう]、今[いま]すぐ 宿題[しゅくだい]を" },
          { text: "しなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "太郎[たろう]、今[いま]すぐ 宿題[しゅくだい]を" },
          { text: "やりなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "太郎[たろう]、今[いま]すぐ 宿題[しゅくだい]" },
          { text: "しなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "太郎[たろう]、今[いま]すぐ 宿題[しゅくだい]" },
          { text: "やりなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "太郎[たろう]、宿題[しゅくだい]を 今[いま]すぐ" },
          { text: "しなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "太郎[たろう]、宿題[しゅくだい]を 今[いま]すぐ" },
          { text: "やりなさい", blank: true },
        ],
      },
    ],
  },
  {
    english: "Shunsuke, turn off the TV and go to bed.",
    hint: "Shunsuke = 俊介 (しゅんすけ); TV = テレビ",
    answers: [
      {
        segments: [
          { text: "俊介[しゅんすけ]、テレビを 消[け]して" },
          { text: "寝[ね]なさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]、テレビを" },
          { text: "消[け]しなさい", blank: true },
          { text: "。それから" },
          { text: "寝[ね]なさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]、テレビを 消[け]してから" },
          { text: "寝[ね]なさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]、" },
          { text: "寝[ね]なさい", blank: true },
          { text: "。その 前[まえ]に テレビを 消[け]しなさい" },
        ],
      },
    ],
  },
  {
    english: "Mika, practice the piano for one hour.",
    hint: "Mika = 美香 (みか)",
    answers: [
      {
        segments: [
          { text: "美香[みか]、ピアノを 一時間[いちじかん] " },
          { text: "練習[れんしゅう]しなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "美香[みか]、一時間[いちじかん] ピアノを " },
          { text: "練習[れんしゅう]しなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "美香[みか]、ピアノの 練習[れんしゅう]を 一時間[いちじかん] " },
          { text: "しなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "美香[みか]、一時間[いちじかん] ピアノの 練習[れんしゅう]を " },
          { text: "しなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "美香[みか]、ピアノを 一時間[いちじかん] " },
          { text: "弾[ひ]きなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "美香[みか]、一時間[いちじかん] ピアノを " },
          { text: "弾[ひ]きなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "美香[みか]、ピアノ、 一時間[いちじかん] " },
          { text: "練習[れんしゅう]しなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "美香[みか]、一時間[いちじかん] ピアノ、" },
          { text: "練習[れんしゅう]しなさい", blank: true },
        ],
      },
    ],
  },
  {
    english: "Children, eat breakfast.",
    answers: [
      {
        segments: [
          { text: "子供[こども]たち、朝[あさ]ご飯[はん]を" },
          { text: "食[た]べなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "子供[こども]たち、朝[あさ]ご飯[はん]" },
          { text: "食[た]べなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "みんな、朝[あさ]ご飯[はん]を" },
          { text: "食[た]べなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "みんな、朝[あさ]ご飯[はん]" },
          { text: "食[た]べなさい", blank: true },
        ],
      },
    ],
  },
  {
    english: "Riku, write your name on this paper.",
    hint: "Riku = りく",
    answers: [
      {
        segments: [
          { text: "りく、この 紙[かみ]に 名前[なまえ]を" },
          { text: "書[か]きなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "りく、名前[なまえ]を この 紙[かみ]に" },
          { text: "書[か]きなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "りく、この 紙[かみ]に 自分[じぶん]の 名前[なまえ]を" },
          { text: "書[か]きなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "りく、自分[じぶん]の 名前[なまえ]を この 紙[かみ]に" },
          { text: "書[か]きなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "りく、この 紙[かみ]に りくの 名前[なまえ]を" },
          { text: "書[か]きなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "りく、りくの 名前[なまえ]を この 紙[かみ]に" },
          { text: "書[か]きなさい", blank: true },
        ],
      },
    ],
  },
  {
    english: "Hana, apologize to your older sister right away.",
    hint: "Hana = 花 (はな)",
    answers: [
      {
        segments: [
          { text: "花[はな]、姉[あね]に 今[いま]すぐ" },
          { text: "謝[あやま]りなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "花[はな]、今[いま]すぐ 姉[あね]に" },
          { text: "謝[あやま]りなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "花[はな]、姉[あね]に すぐ" },
          { text: "謝[あやま]りなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "花[はな]、すぐ 姉[あね]に" },
          { text: "謝[あやま]りなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "花[はな]、姉[あね]に すぐに" },
          { text: "謝[あやま]りなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "花[はな]、すぐに 姉[あね]に" },
          { text: "謝[あやま]りなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "花[はな]、姉[あね]に 今[いま]すぐに" },
          { text: "謝[あやま]りなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "花[はな]、今[いま]すぐに 姉[あね]に" },
          { text: "謝[あやま]りなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "花[はな]、早[はや]く 姉[あね]に" },
          { text: "謝[あやま]りなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "花[はな]、姉[あね]に 早[はや]く" },
          { text: "謝[あやま]りなさい", blank: true },
        ],
      },
    ],
  },
  {
    english: "Sora, clean this room now.",
    hint: "Sora = そら",
    answers: [
      {
        segments: [
          { text: "そら、" },
          { text: "今[いま] この 部屋[へや]を 掃除[そうじ]しなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "そら、この 部屋[へや]を " },
          { text: "今[いま] 掃除[そうじ]しなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "そら、" },
          { text: "今[いま]すぐ この 部屋[へや]を 掃除[そうじ]しなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "そら、この 部屋[へや]を " },
          { text: "今[いま]すぐ 掃除[そうじ]しなさい", blank: true },
        ],
      },
    ],
  },
  {
    english: "Children, sit down here.",
    answers: [
      {
        segments: [
          { text: "子供[こども]たち、ここに" },
          { text: "座[すわ]りなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "子供[こども]たち、ここに" },
          { text: "座[すわ]りなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "ここに" },
          { text: "座[すわ]りなさい", blank: true },
          { text: "、子供[こども]たち" },
        ],
      },
      {
        segments: [
          { text: "子供[こども]たち、ここに" },
          { text: "座[すわ]りなさい", blank: true },
        ],
      },
    ],
  },
  {
    english: "Miku, answer the question.",
    hint: "Miku = みく",
    answers: [
      {
        segments: [
          { text: "みく、質問[しつもん]に" },
          { text: "答[こた]えなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "みく、その 質問[しつもん]に" },
          { text: "答[こた]えなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "みく、質問[しつもん]の 答[こた]えを" },
          { text: "言[い]いなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "みく、その 質問[しつもん]の 答[こた]えを" },
          { text: "言[い]いなさい", blank: true },
        ],
      },
    ],
  },
  {
    english: "Rina, call your mother right away.",
    hint: "Rina = りな",
    answers: [
      {
        segments: [
          { text: "りな、今[いま]すぐ お 母[かあ]さんに" },
          { text: "電話[でんわ]しなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "りな、お 母[かあ]さんに 今[いま]すぐ" },
          { text: "電話[でんわ]しなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "りな、お 母[かあ]さんに" },
          { text: "電話[でんわ]しなさい", blank: true },
          { text: "、今[いま]すぐ" },
        ],
      },
      {
        segments: [
          { text: "りな、すぐ お 母[かあ]さんに" },
          { text: "電話[でんわ]しなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "りな、お 母[かあ]さんに すぐ" },
          { text: "電話[でんわ]しなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "りな、今[いま]すぐ お 母[かあ]さんに 電話[でんわ]を" },
          { text: "しなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "りな、お 母[かあ]さんに 今[いま]すぐ 電話[でんわ]を" },
          { text: "しなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "りな、早[はや]く お 母[かあ]さんに" },
          { text: "電話[でんわ]しなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "りな、今[いま]すぐ お 母[かあ]さんに 電話[でんわ]を" },
          { text: "かけなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "りな、お 母[かあ]さんに 今[いま]すぐ 電話[でんわ]を" },
          { text: "かけなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "りな、すぐ お 母[かあ]さんに 電話[でんわ]を" },
          { text: "かけなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "りな、早[はや]く お 母[かあ]さんに 電話[でんわ]を" },
          { text: "かけなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "りな、今[いま]すぐ お 母[かあ]さんへ" },
          { text: "電話[でんわ]しなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "りな、今[いま]すぐ お 母[かあ]さんへ 電話[でんわ]を" },
          { text: "かけなさい", blank: true },
        ],
      },
    ],
  },
  {
    english: "Yuto, wash your hands before dinner.",
    hint: "Yuto = ゆうと",
    answers: [
      {
        segments: [
          { text: "ゆうと、晩[ばん]ご飯[はん]の 前[まえ]に 手[て]を" },
          { text: "洗[あら]いなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "ゆうと、夕[ゆう]ご飯[はん]の 前[まえ]に 手[て]を" },
          { text: "洗[あら]いなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "ゆうと、晩[ばん]ご飯[はん]を 食[た]べる 前[まえ]に 手[て]を" },
          { text: "洗[あら]いなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "ゆうと、夕[ゆう]ご飯[はん]を 食[た]べる 前[まえ]に 手[て]を" },
          { text: "洗[あら]いなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "ゆうと、手[て]を 晩[ばん]ご飯[はん]の 前[まえ]に" },
          { text: "洗[あら]いなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "ゆうと、手[て]を 夕[ゆう]ご飯[はん]の 前[まえ]に" },
          { text: "洗[あら]いなさい", blank: true },
        ],
      },
    ],
  },
  {
    english: "Yumi, choose one present for your younger brother.",
    hint: "Yumi = ゆみ",
    answers: [
      {
        segments: [
          { text: "ゆみ、弟[おとうと]に プレゼントを 一[ひと]つ " },
          { text: "選[えら]びなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "ゆみ、プレゼントを 一[ひと]つ 弟[おとうと]に " },
          { text: "選[えら]びなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "ゆみ、弟[おとうと]のために プレゼントを 一[ひと]つ " },
          { text: "選[えら]びなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "ゆみ、プレゼントを 一[ひと]つ 弟[おとうと]のために " },
          { text: "選[えら]びなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "ゆみ、弟[おとうと]に 一[ひと]つ プレゼントを " },
          { text: "選[えら]びなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "ゆみ、一[ひと]つ プレゼントを 弟[おとうと]に " },
          { text: "選[えら]びなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "ゆみ、弟[おとうと]のために 一[ひと]つ プレゼントを " },
          { text: "選[えら]びなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "ゆみ、一[ひと]つ プレゼントを 弟[おとうと]のために " },
          { text: "選[えら]びなさい", blank: true },
        ],
      },
    ],
  },
  {
    english: "Kenta, give the dog its food before going to school.",
    hint: "Kenta = 健太 (けんた)",
    answers: [
      {
        segments: [
          { text: "健太[けんた]、学校[がっこう]に行[い]く 前[まえ]に、犬[いぬ]に えさを" },
          { text: "やりなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、学校[がっこう]へ行[い]く 前[まえ]に、犬[いぬ]に えさを" },
          { text: "やりなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、犬[いぬ]に えさを" },
          { text: "やりなさい", blank: true },
          { text: "、学校[がっこう]に行[い]く 前[まえ]に" },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、犬[いぬ]に えさを" },
          { text: "やりなさい", blank: true },
          { text: "、学校[がっこう]へ行[い]く 前[まえ]に" },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、学校[がっこう]に行[い]く 前[まえ]に、犬[いぬ]に ご飯[はん]を" },
          { text: "やりなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、学校[がっこう]へ行[い]く 前[まえ]に、犬[いぬ]に ご飯[はん]を" },
          { text: "やりなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、学校[がっこう]に行[い]く 前[まえ]に、犬[いぬ]に えさを" },
          { text: "あげなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、学校[がっこう]へ行[い]く 前[まえ]に、犬[いぬ]に えさを" },
          { text: "あげなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、学校[がっこう]に行[い]く 前[まえ]に、犬[いぬ]に ご飯[はん]を" },
          { text: "あげなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、学校[がっこう]へ行[い]く 前[まえ]に、犬[いぬ]に ご飯[はん]を" },
          { text: "あげなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、学校[がっこう]に行[い]く 前[まえ]に、犬[いぬ]の えさを" },
          { text: "やりなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、学校[がっこう]へ行[い]く 前[まえ]に、犬[いぬ]の えさを" },
          { text: "やりなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、犬[いぬ]に えさをやってから、学校[がっこう]に" },
          { text: "行[い]きなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、犬[いぬ]に えさをやってから、学校[がっこう]へ" },
          { text: "行[い]きなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、学校[がっこう]に行[い]く 前[まえ]に、犬[いぬ]の ご飯[はん]を" },
          { text: "やりなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、学校[がっこう]へ行[い]く 前[まえ]に、犬[いぬ]の ご飯[はん]を" },
          { text: "やりなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、学校[がっこう]に行[い]く 前[まえ]に、犬[いぬ]の えさを" },
          { text: "あげなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、学校[がっこう]へ行[い]く 前[まえ]に、犬[いぬ]の えさを" },
          { text: "あげなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、学校[がっこう]に行[い]く 前[まえ]に、犬[いぬ]の ご飯[はん]を" },
          { text: "あげなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、学校[がっこう]へ行[い]く 前[まえ]に、犬[いぬ]の ご飯[はん]を" },
          { text: "あげなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、犬[いぬ]に ご飯[はん]をやってから、学校[がっこう]に" },
          { text: "行[い]きなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、犬[いぬ]に ご飯[はん]をやってから、学校[がっこう]へ" },
          { text: "行[い]きなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、犬[いぬ]に えさをあげてから、学校[がっこう]に" },
          { text: "行[い]きなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、犬[いぬ]に えさをあげてから、学校[がっこう]へ" },
          { text: "行[い]きなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、犬[いぬ]に ご飯[はん]をあげてから、学校[がっこう]に" },
          { text: "行[い]きなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "健太[けんた]、犬[いぬ]に ご飯[はん]をあげてから、学校[がっこう]へ" },
          { text: "行[い]きなさい", blank: true },
        ],
      },
    ],
  },
  {
    english: "Nao, put your smartphone in your bag during class.",
    hint: "Nao = なお",
    answers: [
      {
        segments: [
          { text: "なお、授業[じゅぎょう]中[ちゅう]に スマホを かばんに" },
          { text: "入[い]れなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "なお、授業[じゅぎょう]中[ちゅう]は スマホを かばんに" },
          { text: "入[い]れなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "なお、授業[じゅぎょう]中[ちゅう]に スマホを かばんの 中[なか]に" },
          { text: "入[い]れなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "なお、授業[じゅぎょう]中[ちゅう]は スマホを かばんの 中[なか]に" },
          { text: "入[い]れなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "なお、スマホを 授業[じゅぎょう]中[ちゅう]に かばんに" },
          { text: "入[い]れなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "なお、スマホを 授業[じゅぎょう]中[ちゅう]は かばんに" },
          { text: "入[い]れなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "なお、授業[じゅぎょう]中[ちゅう]に スマホを かばんに" },
          { text: "入[い]れなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "なお、授業[じゅぎょう]中[ちゅう]は スマホを かばんに" },
          { text: "入[い]れなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "なお、授業[じゅぎょう]中[ちゅう]に かばんに スマホを" },
          { text: "入[い]れなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "なお、授業[じゅぎょう]中[ちゅう]は かばんに スマホを" },
          { text: "入[い]れなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "なお、授業[じゅぎょう]中[ちゅう]に スマホを 自分[じぶん]の かばんに" },
          { text: "入[い]れなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "なお、授業[じゅぎょう]中[ちゅう]は スマホを 自分[じぶん]の かばんに" },
          { text: "入[い]れなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "なお、授業[じゅぎょう]の 間[あいだ]に スマホを かばんに" },
          { text: "入[い]れなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "なお、授業[じゅぎょう]の 間[あいだ]は スマホを かばんに" },
          { text: "入[い]れなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "なお、授業[じゅぎょう]の 間[あいだ]に スマホを かばんの 中[なか]に" },
          { text: "入[い]れなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "なお、授業[じゅぎょう]の 間[あいだ]は スマホを かばんの 中[なか]に" },
          { text: "入[い]れなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "なお、授業[じゅぎょう]中[ちゅう]、スマホを かばんに" },
          { text: "入[い]れなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "なお、授業[じゅぎょう]中[ちゅう]、スマホを かばんの 中[なか]に" },
          { text: "入[い]れなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "なお、授業[じゅぎょう]中[ちゅう]に スマホ、かばんに" },
          { text: "入[い]れなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "なお、授業[じゅぎょう]中[ちゅう]は スマホ、かばんに" },
          { text: "入[い]れなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "なお、授業[じゅぎょう]の 間[あいだ]、スマホを かばんに" },
          { text: "入[い]れなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "なお、授業[じゅぎょう]の 間[あいだ]、スマホを かばんの 中[なか]に" },
          { text: "入[い]れなさい", blank: true },
        ],
      },
    ],
  },
  {
    english: "Sakura, lock the door before going out.",
    hint: "Sakura = 桜 (さくら)",
    answers: [
      {
        segments: [
          { text: "桜[さくら]、出[で]かける 前[まえ]に、ドアに 鍵[かぎ]を " },
          { text: "かけなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "桜[さくら]、出[で]かける 前[まえ]に、ドアの 鍵[かぎ]を " },
          { text: "かけなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "桜[さくら]、出[で]かける 前[まえ]に、ドアの 鍵[かぎ]を " },
          { text: "かけなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "桜[さくら]、外[そと]に 出[で]る 前[まえ]に、ドアに 鍵[かぎ]を " },
          { text: "かけなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "桜[さくら]、外[そと]に 出[で]る 前[まえ]に、ドアの 鍵[かぎ]を " },
          { text: "かけなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "桜[さくら]、出[で]かける 前[まえ]に、ドアを 閉[し]めて 鍵[かぎ]を " },
          { text: "かけなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "桜[さくら]、外[そと]に 出[で]る 前[まえ]に、ドアを 閉[し]めて 鍵[かぎ]を " },
          { text: "かけなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "桜[さくら]、出[で]かける 前[まえ]に、ドアを " },
          { text: "ロックしなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "桜[さくら]、外[そと]に 出[で]る 前[まえ]に、ドアを " },
          { text: "ロックしなさい", blank: true },
        ],
      },
    ],
  },
  {
    english: "Aya, take your medicine after dinner.",
    hint: "Aya = あや",
    answers: [
      {
        segments: [
          { text: "あや、晩[ばん]ご飯[はん]の 後[あと]で 薬[くすり]を" },
          { text: "飲[の]みなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "あや、夕[ゆう]ご飯[はん]の 後[あと]で 薬[くすり]を" },
          { text: "飲[の]みなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "あや、晩[ばん]ご飯[はん]を 食[た]べてから、薬[くすり]を" },
          { text: "飲[の]みなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "あや、夕[ゆう]ご飯[はん]を 食[た]べてから、薬[くすり]を" },
          { text: "飲[の]みなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "あや、食後[しょくご]に 薬[くすり]を" },
          { text: "飲[の]みなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "あや、薬[くすり]を 晩[ばん]ご飯[はん]の 後[あと]で" },
          { text: "飲[の]みなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "あや、薬[くすり]を 夕[ゆう]ご飯[はん]の 後[あと]で" },
          { text: "飲[の]みなさい", blank: true },
        ],
      },
    ],
  },
  {
    english: "Mari, pick up the garbage under the sofa.",
    hint: "Mari = まり; sofa = ソファ",
    answers: [
      {
        segments: [
          { text: "まり、ソファの 下[した]の ごみを" },
          { text: "拾[ひろ]いなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "まり、ソファの 下[した]にある ごみを" },
          { text: "拾[ひろ]いなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "まり、ソファの 下[した]から ごみを" },
          { text: "拾[ひろ]いなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "まり、ソファの 下[した]に 落[お]ちている ごみを" },
          { text: "拾[ひろ]いなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "まり、ソファの 下[した]の ごみを" },
          { text: "取[と]りなさい", blank: true },
        ],
      },
    ],
  },
  {
    english: "Sho, carry these documents to the reception desk before the meeting.",
    hint: "Sho = 翔 (しょう)",
    answers: [
      {
        segments: [
          { text: "翔[しょう]、この 書類[しょるい]を 会議[かいぎ]の 前[まえ]に 受付[うけつけ]まで" },
          { text: "運[はこ]びなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "翔[しょう]、会議[かいぎ]の 前[まえ]に この 書類[しょるい]を 受付[うけつけ]まで" },
          { text: "運[はこ]びなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "翔[しょう]、この 書類[しょるい]を 受付[うけつけ]まで 会議[かいぎ]の 前[まえ]に" },
          { text: "運[はこ]びなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "翔[しょう]、この 書類[しょるい]を 会議[かいぎ]の 前[まえ]に 受付[うけつけ]に" },
          { text: "運[はこ]びなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "翔[しょう]、会議[かいぎ]の 前[まえ]に この 書類[しょるい]を 受付[うけつけ]に" },
          { text: "運[はこ]びなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "翔[しょう]、この 書類[しょるい]を 会議[かいぎ]の 前[まえ]に 受付[うけつけ]へ" },
          { text: "運[はこ]びなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "翔[しょう]、会議[かいぎ]の 前[まえ]に この 書類[しょるい]を 受付[うけつけ]へ" },
          { text: "運[はこ]びなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "翔[しょう]、会議[かいぎ]の 前[まえ]に この 書類[しょるい]を 受付[うけつけ]まで" },
          { text: "持[も]って 行[い]きなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "翔[しょう]、この 書類[しょるい]を 会議[かいぎ]の 前[まえ]に 受付[うけつけ]まで" },
          { text: "持[も]って 行[い]きなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "翔[しょう]、会議[かいぎ]の 前[まえ]に この 書類[しょるい]を 受付[うけつけ]に" },
          { text: "持[も]って 行[い]きなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "翔[しょう]、会議[かいぎ]の 前[まえ]に この 書類[しょるい]を 受付[うけつけ]へ" },
          { text: "持[も]って 行[い]きなさい", blank: true },
        ],
      },
    ],
  },
  {
    english: "Ren, show the station attendant this map.",
    hint: "Ren = れん",
    answers: [
      {
        segments: [
          { text: "れん、駅員[えきいん]に この 地図[ちず]を " },
          { text: "見[み]せなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "れん、この 地図[ちず]を 駅員[えきいん]に " },
          { text: "見[み]せなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "れん、この 地図[ちず]、駅員[えきいん]に " },
          { text: "見[み]せなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "れん、駅員[えきいん]に この 地図[ちず] " },
          { text: "見[み]せなさい", blank: true },
        ],
      },
    ],
  },
  {
    english: "Hinata, look at the sky and count the clouds.",
    hint: "Hinata = 日向 (ひなた)",
    answers: [
      {
        segments: [
          { text: "日向[ひなた]、空[そら]を見[み]て、雲[くも]を" },
          { text: "数[かぞ]えなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "日向[ひなた]、空[そら]を" },
          { text: "見[み]なさい", blank: true },
          { text: "。それから、雲[くも]を" },
          { text: "数[かぞ]えなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "日向[ひなた]、空[そら]を" },
          { text: "見[み]なさい", blank: true },
          { text: "。そして、雲[くも]を" },
          { text: "数[かぞ]えなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "日向[ひなた]、空[そら]を見[み]てから、雲[くも]を" },
          { text: "数[かぞ]えなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "日向[ひなた]、空[そら]を見上[みあ]げて、雲[くも]を" },
          { text: "数[かぞ]えなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "日向[ひなた]、空[そら]を見[み]て、雲[くも]の 数[かず]を" },
          { text: "数[かぞ]えなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "日向[ひなた]、空[そら]を見上[みあ]げて、雲[くも]の 数[かず]を" },
          { text: "数[かぞ]えなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "日向[ひなた]、空[そら]を見[み]て、雲[くも]がいくつあるか" },
          { text: "数[かぞ]えなさい", blank: true },
        ],
      },
      {
        segments: [
          { text: "日向[ひなた]、空[そら]を見上[みあ]げて、雲[くも]がいくつあるか" },
          { text: "数[かぞ]えなさい", blank: true },
        ],
      },
    ],
  },
];
