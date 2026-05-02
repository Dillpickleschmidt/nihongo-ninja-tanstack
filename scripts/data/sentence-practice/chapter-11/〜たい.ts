import type { Question, SegmentConjugation } from "../types"

const tai = (
  pos: SegmentConjugation["pos"],
  polarity: SegmentConjugation["polarity"] = "positive",
  tense: SegmentConjugation["tense"] = "non-past",
): SegmentConjugation => ({
  pos,
  form: "tai-form",
  polarity,
  tense,
})

export const questions: Question[] = [
  {
    english: "I want to swim in the sea this summer.",
    answers: [
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]、海[うみ]で" },
          { text: "泳[およ]ぐ", blank: true, conjugation: tai("Godan verb with 'gu' ending") },
        ],
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]に、海[うみ]で" },
          { text: "泳[およ]ぐ", blank: true, conjugation: tai("Godan verb with 'gu' ending") },
        ],
        notes: "夏に marks the time",
      },
      {
        segments: [
          { text: "この 夏[なつ]は 海[うみ]で" },
          { text: "泳[およ]ぐ", blank: true, conjugation: tai("Godan verb with 'gu' ending") },
        ],
        notes: "この夏は means this summer",
      },
    ],
  },
  {
    english: "I didn't want to eat vegetables when I was a child.",
    answers: [
      {
        segments: [
          { text: "子供[こども]の 時[とき]、野菜[やさい]が" },
          { text: "食[た]べる", blank: true, conjugation: tai("Ichidan verb", "negative", "past") },
        ],
      },
      {
        segments: [
          { text: "子供[こども]の 時[とき]、野菜[やさい]を" },
          { text: "食[た]べる", blank: true, conjugation: tai("Ichidan verb", "negative", "past") },
        ],
        notes: "を instead of が",
      },
      {
        segments: [
          { text: "子供[こども]の 時[とき]は、野菜[やさい]が" },
          { text: "食[た]べる", blank: true, conjugation: tai("Ichidan verb", "negative", "past") },
        ],
        notes: "時は marks the childhood period as the topic",
      },
    ],
  },
  {
    english: "I wanted to go to the concert, but I didn't have any money.",
    answers: [
      {
        segments: [
          { text: "コンサートに" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class", "positive", "past") },
          { text: "けど、お金[おかね]がなかった" },
        ],
      },
      {
        segments: [
          { text: "コンサートへ" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class", "positive", "past") },
          { text: "けど、お金[おかね]がなかった" },
        ],
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "コンサートに" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class", "positive", "past") },
          { text: "けど、お金[おかね]はなかった" },
        ],
        notes: "は marks money as the contrast",
      },
    ],
  },
  {
    english: "I don't want to ride the Shinkansen — I want to go by airplane.",
    answers: [
      {
        segments: [
          { text: "新幹線[しんかんせん]に" },
          { text: "乗[の]る", blank: true, conjugation: tai("Godan verb with 'ru' ending", "negative") },
          { text: "。飛行機[ひこうき]で" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class") },
        ],
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]には" },
          { text: "乗[の]る", blank: true, conjugation: tai("Godan verb with 'ru' ending", "negative") },
          { text: "。飛行機[ひこうき]で" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class") },
        ],
        notes: "には adds contrast",
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]には" },
          { text: "乗[の]る", blank: true, conjugation: tai("Godan verb with 'ru' ending", "negative") },
          { text: "けど、飛行機[ひこうき]で" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class") },
        ],
        notes: "けど connects the contrast",
      },
    ],
  },
  {
    english: "I want to sing karaoke with Kenji tonight, but he said he doesn't want to.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "今夜[こんや]、けんじさんとカラオケを" },
          { text: "する", blank: true, conjugation: tai("Suru verb - special class") },
          { text: "けど、けんじさんは" },
          { text: "する", blank: true, conjugation: tai("Suru verb - special class", "negative") },
          { text: "と 言[い]っていた" },
        ],
      },
      {
        segments: [
          { text: "今夜[こんや]、けんじさんとカラオケが" },
          { text: "する", blank: true, conjugation: tai("Suru verb - special class") },
          { text: "けど、けんじさんは" },
          { text: "する", blank: true, conjugation: tai("Suru verb - special class", "negative") },
          { text: "と 言[い]っていた" },
        ],
        notes: "が marks karaoke as the wanted activity",
      },
      {
        segments: [
          { text: "今夜[こんや]、けんじさんとカラオケを" },
          { text: "する", blank: true, conjugation: tai("Suru verb - special class") },
          { text: "けど、けんじさんは" },
          { text: "する", blank: true, conjugation: tai("Suru verb - special class", "negative") },
          { text: "と 聞[き]いた" },
        ],
        notes: "聞いた instead of 言っていた",
      },
    ],
  },
  {
    english: "I didn't want to become a lawyer — I wanted to become a researcher.",
    answers: [
      {
        segments: [
          { text: "弁護士[べんごし]に" },
          { text: "なる", blank: true, conjugation: tai("Godan verb with 'ru' ending", "negative", "past") },
          { text: "。研究者[けんきゅうしゃ]に" },
          { text: "なる", blank: true, conjugation: tai("Godan verb with 'ru' ending", "positive", "past") },
        ],
      },
      {
        segments: [
          { text: "弁護士[べんごし]には" },
          { text: "なる", blank: true, conjugation: tai("Godan verb with 'ru' ending", "negative", "past") },
          { text: "けど、研究者[けんきゅうしゃ]に" },
          { text: "なる", blank: true, conjugation: tai("Godan verb with 'ru' ending", "positive", "past") },
        ],
        notes: "には adds contrast",
      },
    ],
  },
  {
    english: "I want to go to a hot spring, but I didn't want to go alone.",
    answers: [
      {
        segments: [
          { text: "温泉[おんせん]に" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class") },
          { text: "けど、一人[ひとり]で" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class", "negative", "past") },
        ],
      },
      {
        segments: [
          { text: "温泉[おんせん]へ" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class") },
          { text: "けど、一人[ひとり]では" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class", "negative", "past") },
        ],
        notes: "へ and 一人では",
      },
    ],
  },
  {
    english: "I wanted to study abroad, but in the end I didn't want to leave my family.",
    answers: [
      {
        segments: [
          { text: "留学[りゅうがく]" },
          { text: "する", blank: true, conjugation: tai("Suru verb - special class", "positive", "past") },
          { text: "けど、家族[かぞく]から" },
          { text: "離[はな]れる", blank: true, conjugation: tai("Ichidan verb", "negative", "past") },
        ],
      },
      {
        segments: [
          { text: "留学[りゅうがく]" },
          { text: "する", blank: true, conjugation: tai("Suru verb - special class", "positive", "past") },
          { text: "けど、家族[かぞく]と" },
          { text: "別[わか]れる", blank: true, conjugation: tai("Ichidan verb", "negative", "past") },
        ],
        notes: "家族と別れる means parting from family",
      },
    ],
  },
  {
    english: "I want to climb Mount Fuji at least once in my life, but I don't want to go in winter.",
    hint: "Mount Fuji = 富士山 (ふじさん)",
    answers: [
      {
        segments: [
          { text: "一度[いちど]は 富士山[ふじさん]に" },
          { text: "登[のぼ]る", blank: true, conjugation: tai("Godan verb with 'ru' ending") },
          { text: "けど、冬[ふゆ]には" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class", "negative") },
        ],
      },
      {
        segments: [
          { text: "富士山[ふじさん]に" },
          { text: "登[のぼ]る", blank: true, conjugation: tai("Godan verb with 'ru' ending") },
          { text: "けど、冬[ふゆ]には" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class", "negative") },
        ],
        notes: "without 一度は",
      },
      {
        segments: [
          { text: "富士山[ふじさん]に" },
          { text: "登[のぼ]る", blank: true, conjugation: tai("Godan verb with 'ru' ending") },
          { text: "が、冬[ふゆ]には" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class", "negative") },
        ],
        notes: "が connects the contrast",
      },
    ],
  },
  {
    english: "I wanted to make sushi at home, but in the end I didn't want to do the shopping.",
    answers: [
      {
        segments: [
          { text: "家[いえ]で すしを" },
          { text: "作[つく]る", blank: true, conjugation: tai("Godan verb with 'ru' ending", "positive", "past") },
          { text: "けど、買[か]い 物[もの]を" },
          { text: "する", blank: true, conjugation: tai("Suru verb - special class", "negative", "past") },
        ],
      },
      {
        segments: [
          { text: "家[いえ]で すしを" },
          { text: "作[つく]る", blank: true, conjugation: tai("Godan verb with 'ru' ending", "positive", "past") },
          { text: "けど、買[か]い 物[もの]が" },
          { text: "する", blank: true, conjugation: tai("Suru verb - special class", "negative", "past") },
        ],
        notes: "が marks shopping as the unwanted activity",
      },
    ],
  },
  {
    english: "I want to visit Italy someday, but I didn't want to go alone, so I was waiting for a friend to come with me.",
    answers: [
      {
        segments: [
          { text: "いつか イタリアに" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class") },
          { text: "けど、一人[ひとり]で" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class", "negative", "past") },
          { text: "から、一緒[いっしょ]に行[い]く友達[ともだち]を待[ま]っていた" },
        ],
      },
      {
        segments: [
          { text: "イタリアへ" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class") },
          { text: "けど、一人[ひとり]では" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class", "negative", "past") },
          { text: "から、一緒[いっしょ]に行[い]く友達[ともだち]が 来[く]るのを待[ま]っていた" },
        ],
        notes: "へ and 友達が来るのを待っていた",
      },
    ],
  },
  {
    english: "I wanted to learn how to play the guitar, but I didn't want to practice every day.",
    answers: [
      {
        segments: [
          { text: "ギターを" },
          { text: "習[なら]う", blank: true, conjugation: tai("Godan verb with 'u' ending", "positive", "past") },
          { text: "けど、毎日[まいにち]" },
          { text: "練習[れんしゅう]する", blank: true, conjugation: tai("Suru verb - special class", "negative", "past") },
        ],
      },
      {
        segments: [
          { text: "ギターが" },
          { text: "習[なら]う", blank: true, conjugation: tai("Godan verb with 'u' ending", "positive", "past") },
          { text: "けど、毎日[まいにち]は" },
          { text: "練習[れんしゅう]する", blank: true, conjugation: tai("Suru verb - special class", "negative", "past") },
        ],
        notes: "が for ギター and は for 毎日",
      },
    ],
  },
  {
    english: "I want to visit a famous art museum in Italy someday, but when I was a child, I didn't want to go to art museums at all.",
    answers: [
      {
        segments: [
          { text: "いつか イタリアの 有名[ゆうめい]な 美術館[びじゅつかん]に" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class") },
          { text: "けど、子供[こども]の 時[とき]は、ぜんぜん 美術館[びじゅつかん]に" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class", "negative", "past") },
        ],
      },
      {
        segments: [
          { text: "いつか イタリアの 有名[ゆうめい]な 美術館[びじゅつかん]へ" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class") },
          { text: "けど、子供[こども]の 時[とき]は、ぜんぜん 美術館[びじゅつかん]へ" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class", "negative", "past") },
        ],
        notes: "へ instead of に",
      },
    ],
  },
  {
    english: "I want to try working at a café, but I didn't want to wake up early every morning.",
    answers: [
      {
        segments: [
          { text: "カフェで アルバイトを" },
          { text: "する", blank: true, conjugation: tai("Suru verb - special class") },
          { text: "けど、毎朝[まいあさ] 早[はや]く" },
          { text: "起[お]きる", blank: true, conjugation: tai("Ichidan verb", "negative", "past") },
        ],
      },
      {
        segments: [
          { text: "カフェで アルバイトが" },
          { text: "する", blank: true, conjugation: tai("Suru verb - special class") },
          { text: "けど、毎朝[まいあさ] 早[はや]く" },
          { text: "起[お]きる", blank: true, conjugation: tai("Ichidan verb", "negative", "past") },
        ],
        notes: "が marks the wanted activity",
      },
    ],
  },
  {
    english: "I want to work at a company in Japan someday, but when I was a student, I didn't want to study economics at all.",
    answers: [
      {
        segments: [
          { text: "いつか 日本[にほん]の 会社[かいしゃ]で" },
          { text: "働[はたら]く", blank: true, conjugation: tai("Godan verb with 'ku' ending") },
          { text: "けど、学生[がくせい]の 時[とき]は、経済[けいざい]を" },
          { text: "勉強[べんきょう]する", blank: true, conjugation: tai("Suru verb - special class", "negative", "past") },
        ],
      },
      {
        segments: [
          { text: "いつか 日本[にほん]の 会社[かいしゃ]で" },
          { text: "働[はたら]く", blank: true, conjugation: tai("Godan verb with 'ku' ending") },
          { text: "が、学生[がくせい]の 時[とき]には、経済[けいざい]を" },
          { text: "勉強[べんきょう]する", blank: true, conjugation: tai("Suru verb - special class", "negative", "past") },
        ],
        notes: "が and 時には",
      },
    ],
  },
  {
    english: "I wanted to go camping by the river, but in the end I didn't want to sleep in a cold place.",
    answers: [
      {
        segments: [
          { text: "川[かわ]のそばで キャンプに" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class", "positive", "past") },
          { text: "けど、寒[さむ]いところで" },
          { text: "寝[ね]る", blank: true, conjugation: tai("Ichidan verb", "negative", "past") },
        ],
      },
      {
        segments: [
          { text: "川[かわ]で キャンプ" },
          { text: "する", blank: true, conjugation: tai("Suru verb - special class", "positive", "past") },
          { text: "けど、寒[さむ]いところで" },
          { text: "寝[ね]る", blank: true, conjugation: tai("Ichidan verb", "negative", "past") },
        ],
        notes: "キャンプする instead of キャンプに行く",
      },
    ],
  },
  {
    english: "I want to work at a famous restaurant someday, but when I was a student, I didn't want to cook at all.",
    answers: [
      {
        segments: [
          { text: "いつか 有名[ゆうめい]な レストランで" },
          { text: "働[はたら]く", blank: true, conjugation: tai("Godan verb with 'ku' ending") },
          { text: "けど、学生[がくせい]の 時[とき]は、ぜんぜん" },
          { text: "料理[りょうり]する", blank: true, conjugation: tai("Suru verb - special class", "negative", "past") },
        ],
      },
      {
        segments: [
          { text: "いつか 有名[ゆうめい]な レストランで" },
          { text: "働[はたら]く", blank: true, conjugation: tai("Godan verb with 'ku' ending") },
          { text: "が、学生[がくせい]の 時[とき]は、ぜんぜん 料理[りょうり]を" },
          { text: "する", blank: true, conjugation: tai("Suru verb - special class", "negative", "past") },
        ],
        notes: "料理をする variant",
      },
    ],
  },
  {
    english: "I want to try fishing in a lake someday, but when I was a child, I didn't want to go outside at all.",
    answers: [
      {
        segments: [
          { text: "いつか 湖[みずうみ]で つりを" },
          { text: "する", blank: true, conjugation: tai("Suru verb - special class") },
          { text: "けど、子供[こども]の 時[とき]は、外[そと]に" },
          { text: "出[で]る", blank: true, conjugation: tai("Ichidan verb", "negative", "past") },
        ],
      },
      {
        segments: [
          { text: "いつか 湖[みずうみ]で つりを" },
          { text: "する", blank: true, conjugation: tai("Suru verb - special class") },
          { text: "けど、子供[こども]のころは、外[そと]に" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class", "negative", "past") },
        ],
        notes: "子供のころ and 外に行く",
      },
    ],
  },
  {
    english: "I want to visit a shrine during New Year's, but when I was a child, I didn't want to wake up early at all.",
    answers: [
      {
        segments: [
          { text: "お 正月[しょうがつ]に 神社[じんじゃ]に" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class") },
          { text: "けど、子供[こども]の 時[とき]は、ぜんぜん 早[はや]く" },
          { text: "起[お]きる", blank: true, conjugation: tai("Ichidan verb", "negative", "past") },
        ],
      },
      {
        segments: [
          { text: "お 正月[しょうがつ]に 神社[じんじゃ]へ" },
          { text: "行[い]く", blank: true, conjugation: tai("Godan verb - Iku/Yuku special class") },
          { text: "けど、子供[こども]の 時[とき]は、ぜんぜん 早[はや]く" },
          { text: "起[お]きる", blank: true, conjugation: tai("Ichidan verb", "negative", "past") },
        ],
        notes: "へ instead of に",
      },
    ],
  },
  {
    english: "I want to try driving a car someday, but when I was a student, I didn't want to learn at all.",
    answers: [
      {
        segments: [
          { text: "いつか 車[くるま]を 運転[うんてん]して" },
          { text: "みる", blank: true, conjugation: tai("Ichidan verb") },
          { text: "けど、学生[がくせい]の 時[とき]は、あまり" },
          { text: "習[なら]う", blank: true, conjugation: tai("Godan verb with 'u' ending", "negative", "past") },
        ],
      },
      {
        segments: [
          { text: "いつか 車[くるま]を 運転[うんてん]して" },
          { text: "みる", blank: true, conjugation: tai("Ichidan verb") },
          { text: "けど、学生[がくせい]の 時[とき]、あまり" },
          { text: "習[なら]う", blank: true, conjugation: tai("Godan verb with 'u' ending", "negative", "past") },
        ],
        notes: "without は after 時",
      },
    ],
  },
]
