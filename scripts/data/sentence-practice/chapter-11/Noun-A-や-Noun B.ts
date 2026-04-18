import type { Question } from "../types"

const aruPos = {
  pos: "Godan verb with 'ru' ending (irregular verb)" as const,
  form: "normal" as const,
  polarity: "positive" as const,
  tense: "non-past" as const,
}

const kiitaPos = {
  pos: "Godan verb with 'ku' ending" as const,
  form: "normal" as const,
  polarity: "positive" as const,
  tense: "past" as const,
}

const suruPos = {
  pos: "Suru verb - special class" as const,
  form: "normal" as const,
  polarity: "positive" as const,
  tense: "non-past" as const,
}

const suruTai = {
  pos: "Suru verb - special class" as const,
  form: "tai-form" as const,
  polarity: "positive" as const,
  tense: "non-past" as const,
}

const oishiiPos = {
  pos: "I-adjective" as const,
  form: "normal" as const,
  polarity: "positive" as const,
  tense: "non-past" as const,
}

export const questions: Question[] = [
  {
    english: "On weekends I do things like go to the park or swim in the sea.",
    answers: [
      {
        segments: [
          {
            text: "週末[しゅうまつ]は 公園[こうえん]に 行[い]くとか 海[うみ]で 泳[およ]ぐとか",
          },
          { text: "する", blank: true, conjugation: suruPos },
        ],
      },
      {
        segments: [
          {
            text: "週末[しゅうまつ]に 公園[こうえん]に 行[い]くとか 海[うみ]で 泳[およ]ぐとか",
          },
          { text: "する", blank: true, conjugation: suruPos },
        ],
        notes: "週末に with に",
      },
      {
        segments: [
          {
            text: "週末[しゅうまつ]は 海[うみ]で 泳[およ]ぐとか 公園[こうえん]に 行[い]くとか",
          },
          { text: "する", blank: true, conjugation: suruPos },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english:
      "I've heard that this town has things like temples and shrines.",
    answers: [
      {
        segments: [
          { text: "この 町[まち]には お 寺[てら]や 神社[じんじゃ]が あると" },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          { text: "この 町[まち]には 神社[じんじゃ]や お 寺[てら]が あると" },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
      {
        segments: [
          { text: "この 町[まち]に お 寺[てら]や 神社[じんじゃ]が あると" },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "に instead of には",
      },
      {
        segments: [
          { text: "この 町[まち]には お 寺[てら]や 神社[じんじゃ]などが あると" },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "など (etc.) added — common with 〜や listing",
      },
    ],
  },
  {
    english: "My bag has things like a wallet and a dictionary in it.",
    answers: [
      {
        segments: [
          { text: "かばんの 中[なか]に 財布[さいふ]や 辞書[じしょ]が" },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
      },
      {
        segments: [
          { text: "かばんの 中[なか]には 財布[さいふ]や 辞書[じしょ]が" },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "には instead of に",
      },
      {
        segments: [
          { text: "かばんに 財布[さいふ]や 辞書[じしょ]が" },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "に instead of の中に",
      },
      {
        segments: [
          { text: "かばんの 中[なか]に 辞書[じしょ]や 財布[さいふ]が" },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "Reversed order",
      },
      {
        segments: [
          { text: "かばんには 財布[さいふ]や 辞書[じしょ]などが" },
          { text: "入[はい]って", blank: true },
          { text: "いる", conjugation: aruPos },
        ],
        notes: "入っている (is contained inside) instead of ある",
      },
    ],
  },
  {
    english:
      "I've heard that Kenji wants to do things like study abroad or get a part-time job next semester.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          {
            text: "けんじさんは 来学期[らいがっき]、留学[りゅうがく]するとか アルバイトするとか したいと",
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          {
            text: "けんじさんは 来学期[らいがっき]、アルバイトするとか 留学[りゅうがく]するとか したいと",
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
      {
        segments: [
          {
            text: "けんじさんは 来学期[らいがっき]に 留学[りゅうがく]するとか アルバイトするとか したいと",
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "来学期に with に",
      },
    ],
  },
  {
    english: "My room has things like a guitar and a camera in it.",
    answers: [
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]には ギターや カメラが" },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]に ギターや カメラが" },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "に instead of には",
      },
      {
        segments: [
          { text: "部屋[へや]には ギターや カメラが" },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "No 私の",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]には カメラや ギターが" },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "Reversed order",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]には ギターや カメラなどが" },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "など (etc.) added to listing",
      },
    ],
  },
  {
    english:
      "I've heard that things like coffee and cake are popular at that café.",
    answers: [
      {
        segments: [
          { text: "あのカフェでは コーヒーや ケーキが 人気[にんき]があると" },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          { text: "あのカフェには コーヒーや ケーキが 人気[にんき]があると" },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "には instead of では",
      },
      {
        segments: [
          { text: "あのカフェでは ケーキや コーヒーが 人気[にんき]があると" },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english:
      "I want to do things like visit an art museum or climb a mountain this summer vacation.",
    answers: [
      {
        segments: [
          {
            text: "今年[ことし]の 夏休[なつやす]みは 美術館[びじゅつかん]に 行[い]くとか 山[やま]に 登[のぼ]るとか",
          },
          { text: "する", blank: true, conjugation: suruTai },
        ],
      },
      {
        segments: [
          {
            text: "夏休[なつやす]みは 美術館[びじゅつかん]に 行[い]くとか 山[やま]に 登[のぼ]るとか",
          },
          { text: "する", blank: true, conjugation: suruTai },
        ],
        notes: "Without 今年の",
      },
      {
        segments: [
          {
            text: "今年[ことし]の 夏休[なつやす]みは 山[やま]に 登[のぼ]るとか 美術館[びじゅつかん]に 行[い]くとか",
          },
          { text: "する", blank: true, conjugation: suruTai },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english: "I've heard that Hana likes things like dancing and singing.",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "はなさんは 踊[おど]ることや 歌[うた]うことが 好[す]きだと" },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          { text: "はなさんは 歌[うた]うことや 踊[おど]ることが 好[す]きだと" },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english:
      "I've heard that Sota's future dream is something like becoming an astronaut or a singer.",
    hint: "Sota = そうた",
    answers: [
      {
        segments: [
          {
            text: "そうたさんの 将来[しょうらい]の 夢[ゆめ]は 宇宙飛行士[うちゅうひこうし]になるとか 歌手[かしゅ]になるとかだと",
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          {
            text: "そうたさんの 将来[しょうらい]の 夢[ゆめ]は 歌手[かしゅ]になるとか 宇宙飛行士[うちゅうひこうし]になるとかだと",
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english: "Things like cats and dogs are popular as pets, aren't they?",
    answers: [
      {
        segments: [
          { text: "猫[ねこ]や 犬[いぬ]は 人気[にんき]が" },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "ね" },
        ],
      },
      {
        segments: [
          { text: "犬[いぬ]や 猫[ねこ]は 人気[にんき]が" },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "ね" },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english:
      "I've heard that Mei's bag has things like an umbrella and a notebook in it.",
    hint: "Mei = めい",
    answers: [
      {
        segments: [
          { text: "めいさんのかばんの 中[なか]には 傘[かさ]やノートが あると" },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          { text: "めいさんのかばんには 傘[かさ]やノートが あると" },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "かばんには (no の中)",
      },
      {
        segments: [
          { text: "めいさんのかばんの 中[なか]には ノートや 傘[かさ]が あると" },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english:
      "I've heard that Tokyo has things like good restaurants and museums.",
    answers: [
      {
        segments: [
          {
            text: "東京[とうきょう]には おいしいレストランや 美術館[びじゅつかん]が あると",
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          {
            text: "東京[とうきょう]には 美術館[びじゅつかん]や おいしいレストランが あると",
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english: "I've heard that in Italy, things like pizza and wine are cheap.",
    answers: [
      {
        segments: [
          { text: "イタリアでは ピザや ワインが 安[やす]いと" },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          { text: "イタリアには ピザや ワインが 安[やす]いと" },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "には instead of では",
      },
      {
        segments: [
          { text: "イタリアでは ワインや ピザが 安[やす]いと" },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english:
      "I've heard that Kenji's older sister is someone like a lawyer or a doctor.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          {
            text: "けんじさんの お姉[ねえ]さんは 弁護士[べんごし]とか 医者[いしゃ]とかだと",
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          {
            text: "けんじさんの お姉[ねえ]さんは 医者[いしゃ]とか 弁護士[べんごし]とかだと",
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
      {
        segments: [
          {
            text: "けんじさんの お姉[ねえ]さんは 弁護士[べんごし]や 医者[いしゃ]だと",
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "や instead of とか",
      },
    ],
  },
  {
    english:
      "I've heard that in summer, people do things like barbecues or camp by the river.",
    answers: [
      {
        segments: [
          {
            text: "夏[なつ]は 川[かわ]で バーベキューするとか キャンプするとか すると",
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          {
            text: "夏[なつ]は 川[かわ]で キャンプするとか バーベキューするとか すると",
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english:
      "My older brother's room has things like old magazines and games in it.",
    answers: [
      {
        segments: [
          { text: "兄[あに]の 部屋[へや]には 古[ふる]い 雑誌[ざっし]や ゲームが" },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
      },
      {
        segments: [
          { text: "兄[あに]の 部屋[へや]に 古[ふる]い 雑誌[ざっし]や ゲームが" },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "に instead of には",
      },
      {
        segments: [
          { text: "兄[あに]の 部屋[へや]には ゲームや 古[ふる]い 雑誌[ざっし]が" },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english:
      "I've heard that at the school festival, there are things like food stalls and concerts.",
    hint: "food stall = 屋台 (やたい)",
    answers: [
      {
        segments: [
          {
            text: "学校[がっこう]のお 祭[まつ]りには 屋台[やたい]やコンサートが あると",
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          {
            text: "学校[がっこう]のお 祭[まつ]りでは 屋台[やたい]やコンサートが あると",
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "では instead of には",
      },
      {
        segments: [
          { text: "お 祭[まつ]りには 屋台[やたい]やコンサートが あると" },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Without 学校の",
      },
      {
        segments: [
          {
            text: "学校[がっこう]のお 祭[まつ]りには コンサートや 屋台[やたい]が あると",
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english:
      "I do things like watch horror movies or play games when I'm free.",
    answers: [
      {
        segments: [
          {
            text: "暇[ひま]な 時[とき]は ホラー 映画[えいが]を 見[み]るとか ゲームをするとか",
          },
          { text: "する", blank: true, conjugation: suruPos },
        ],
      },
      {
        segments: [
          {
            text: "休[やす]みの 日[ひ]は ホラー 映画[えいが]を 見[み]るとか ゲームをするとか",
          },
          { text: "する", blank: true, conjugation: suruPos },
        ],
        notes: "休みの日は instead of 暇な時は",
      },
      {
        segments: [
          {
            text: "暇[ひま]な 時[とき]は ゲームをするとか ホラー 映画[えいが]を 見[み]るとか",
          },
          { text: "する", blank: true, conjugation: suruPos },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english:
      "I've heard that Riku practices things like piano and guitar every day.",
    hint: "Riku = りく",
    answers: [
      {
        segments: [
          {
            text: "りくさんは 毎日[まいにち] ピアノや ギターを 練習[れんしゅう]すると",
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          {
            text: "りくさんは 毎日[まいにち] ギターや ピアノを 練習[れんしゅう]すると",
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english:
      "Things like strawberries and peaches are delicious in summer, aren't they?",
    answers: [
      {
        segments: [
          { text: "いちごや ももは 夏[なつ]に" },
          { text: "おいしい", blank: true, conjugation: oishiiPos },
          { text: "ね" },
        ],
      },
      {
        segments: [
          { text: "夏[なつ]は いちごや ももが" },
          { text: "おいしい", blank: true, conjugation: oishiiPos },
          { text: "ね" },
        ],
        notes: "Topic on 夏",
      },
      {
        segments: [
          { text: "ももや いちごは 夏[なつ]に" },
          { text: "おいしい", blank: true, conjugation: oishiiPos },
          { text: "ね" },
        ],
        notes: "Reversed order",
      },
    ],
  },
]
