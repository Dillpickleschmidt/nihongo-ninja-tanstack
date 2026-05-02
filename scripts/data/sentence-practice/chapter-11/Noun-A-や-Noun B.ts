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

const oishiiPos = {
  pos: "I-adjective" as const,
  form: "normal" as const,
  polarity: "positive" as const,
  tense: "non-past" as const,
}

export const questions: Question[] = [
  {
    english: "On weekends I go to places like parks and the sea.",
    answers: [
      {
        segments: [
          {
            text: "週末[しゅうまつ]は 公園[こうえん]や 海[うみ]に",
            blank: true,
          },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          {
            text: "週末[しゅうまつ]に 公園[こうえん]や 海[うみ]に",
            blank: true,
          },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "週末に with に",
      },
      {
        segments: [
          {
            text: "週末[しゅうまつ]は 海[うみ]や 公園[こうえん]に",
            blank: true,
          },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "non-past" } },
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
          { text: "この 町[まち]には お 寺[てら]や 神社[じんじゃ]が あると",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          { text: "この 町[まち]には 神社[じんじゃ]や お 寺[てら]が あると",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
      {
        segments: [
          { text: "この 町[まち]に お 寺[てら]や 神社[じんじゃ]が あると",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "に instead of には",
      },
      {
        segments: [
          { text: "この 町[まち]には お 寺[てら]や 神社[じんじゃ]などが あると",
            blank: true },
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
          { text: "かばんの 中[なか]に 財布[さいふ]や 辞書[じしょ]が",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
      },
      {
        segments: [
          { text: "かばんの 中[なか]には 財布[さいふ]や 辞書[じしょ]が",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "には instead of に",
      },
      {
        segments: [
          { text: "かばんに 財布[さいふ]や 辞書[じしょ]が",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "に instead of の中に",
      },
      {
        segments: [
          { text: "かばんの 中[なか]に 辞書[じしょ]や 財布[さいふ]が",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "Reversed order",
      },
      {
        segments: [
          { text: "かばんには 財布[さいふ]や 辞書[じしょ]などが",
            blank: true },
          { text: "入[はい]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "入っている (is contained inside) instead of ある",
      },
    ],
  },
  {
    english:
      "I've heard that Kenji wants to do things like study abroad and part-time work next semester.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          {
            text: "けんじさんは 来学期[らいがっき]、留学[りゅうがく]や アルバイトを したいと",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          {
            text: "けんじさんは 来学期[らいがっき]、アルバイトや 留学[りゅうがく]を したいと",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
      {
        segments: [
          {
            text: "けんじさんは 来学期[らいがっき]に 留学[りゅうがく]や アルバイトを したいと",
            blank: true,
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
          { text: "私[わたし]の 部屋[へや]には ギターや カメラが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]に ギターや カメラが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "に instead of には",
      },
      {
        segments: [
          { text: "部屋[へや]には ギターや カメラが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "部屋には without 私の",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]には カメラや ギターが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "Reversed order",
      },
      {
        segments: [
          { text: "私[わたし]の 部屋[へや]には ギターや カメラなどが",
            blank: true },
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
          { text: "あのカフェでは コーヒーや ケーキが 人気[にんき]があると",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          { text: "あのカフェには コーヒーや ケーキが 人気[にんき]があると",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "には instead of では",
      },
      {
        segments: [
          { text: "あのカフェでは ケーキや コーヒーが 人気[にんき]があると",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english:
      "I want to visit places like art museums and mountains this summer vacation.",
    answers: [
      {
        segments: [
          {
            text: "今年[ことし]の 夏休[なつやす]みは 美術館[びじゅつかん]や 山[やま]に",
            blank: true,
          },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          {
            text: "夏休[なつやす]みは 美術館[びじゅつかん]や 山[やま]に",
            blank: true,
          },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "tai-form", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Without 今年の",
      },
      {
        segments: [
          {
            text: "今年[ことし]の 夏休[なつやす]みは 山[やま]や 美術館[びじゅつかん]に",
            blank: true,
          },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "tai-form", polarity: "positive", tense: "non-past" } },
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
          { text: "はなさんは 踊[おど]ることや 歌[うた]うことが",
            blank: true },
          { text: " 好[す]き" },
          { text: "です" },
          { text: "と" },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          { text: "はなさんは 歌[うた]うことや 踊[おど]ることが",
            blank: true },
          { text: " 好[す]き" },
          { text: "です" },
          { text: "と" },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english:
      "I've heard that Sota wants to become something like an astronaut or a singer in the future.",
    hint: "Sota = そうた",
    answers: [
      {
        segments: [
          {
            text: "そうたさんは 将来[しょうらい]、宇宙飛行士[うちゅうひこうし]や 歌手[かしゅ]に なりたいと",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          {
            text: "そうたさんは 将来[しょうらい]、歌手[かしゅ]や 宇宙飛行士[うちゅうひこうし]に なりたいと",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english: "Things like cats and dogs are popular as pets.",
    answers: [
      {
        segments: [
          { text: "猫[ねこ]や 犬[いぬ]は 人気[にんき]が",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
      },
      {
        segments: [
          { text: "犬[いぬ]や 猫[ねこ]は 人気[にんき]が",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
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
          { text: "めいさんのかばんの 中[なか]には 傘[かさ]やノートが あると",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          { text: "めいさんのかばんには 傘[かさ]やノートが あると",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "かばんには (no の中)",
      },
      {
        segments: [
          { text: "めいさんのかばんの 中[なか]には ノートや 傘[かさ]が あると",
            blank: true },
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
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          {
            text: "東京[とうきょう]には 美術館[びじゅつかん]や おいしいレストランが あると",
            blank: true,
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
          { text: "イタリアでは ピザや ワインが 安[やす]いと",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          { text: "イタリアには ピザや ワインが 安[やす]いと",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "には instead of では",
      },
      {
        segments: [
          { text: "イタリアでは ワインや ピザが 安[やす]いと",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english:
      "I've heard that Kenji's older sister works as something like a lawyer or a doctor.",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          {
            text: "けんじさんの お姉[ねえ]さんは 弁護士[べんごし]や 医者[いしゃ]として 働[はたら]いていると",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          {
            text: "けんじさんの お姉[ねえ]さんは 医者[いしゃ]や 弁護士[べんごし]として 働[はたら]いていると",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
      ],
  },
  {
    english:
      "I've heard that in summer, people do things like barbecues and camping by the river.",
    answers: [
      {
        segments: [
          {
            text: "夏[なつ]は 川[かわ]で バーベキューや キャンプを すると",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          {
            text: "夏[なつ]は 川[かわ]で キャンプや バーベキューを すると",
            blank: true,
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
          { text: "兄[あに]の 部屋[へや]には 古[ふる]い 雑誌[ざっし]や ゲームが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
      },
      {
        segments: [
          { text: "兄[あに]の 部屋[へや]に 古[ふる]い 雑誌[ざっし]や ゲームが",
            blank: true },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "に instead of には",
      },
      {
        segments: [
          { text: "兄[あに]の 部屋[へや]には ゲームや 古[ふる]い 雑誌[ざっし]が",
            blank: true },
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
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          {
            text: "学校[がっこう]のお 祭[まつ]りでは 屋台[やたい]やコンサートが あると",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "では instead of には",
      },
      {
        segments: [
          { text: "お 祭[まつ]りには 屋台[やたい]やコンサートが あると",
            blank: true },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Without 学校の",
      },
      {
        segments: [
          {
            text: "学校[がっこう]のお 祭[まつ]りには コンサートや 屋台[やたい]が あると",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english:
      "I like things like horror movies and games when I'm free.",
    answers: [
      {
        segments: [
          {
            text: "暇[ひま]な 時[とき]は ホラー 映画[えいが]や ゲームが",
            blank: true,
          },
          { text: " 好[す]き" },
          { text: "です" },
        ],
      },
      {
        segments: [
          {
            text: "休[やす]みの 日[ひ]は ホラー 映画[えいが]や ゲームが",
            blank: true,
          },
          { text: " 好[す]き" },
          { text: "です" },
        ],
        notes: "休みの日は instead of 暇な時は",
      },
      {
        segments: [
          {
            text: "暇[ひま]な 時[とき]は ゲームや ホラー 映画[えいが]が",
            blank: true,
          },
          { text: " 好[す]き" },
          { text: "です" },
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
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
      },
      {
        segments: [
          {
            text: "りくさんは 毎日[まいにち] ギターや ピアノを 練習[れんしゅう]すると",
            blank: true,
          },
          { text: "聞[き]く", blank: true, conjugation: kiitaPos },
        ],
        notes: "Reversed order",
      },
    ],
  },
  {
    english:
      "Things like strawberries and peaches are delicious in summer.",
    answers: [
      {
        segments: [
          { text: "いちごや ももは 夏[なつ]に",
            blank: true },
          { text: "おいしい", blank: true, conjugation: oishiiPos },
        ],
      },
      {
        segments: [
          { text: "夏[なつ]は いちごや ももが",
            blank: true },
          { text: "おいしい", blank: true, conjugation: oishiiPos },
        ],
        notes: "Topic on 夏",
      },
      {
        segments: [
          { text: "ももや いちごは 夏[なつ]に",
            blank: true },
          { text: "おいしい", blank: true, conjugation: oishiiPos },
        ],
        notes: "Reversed order",
      },
    ],
  },
]
