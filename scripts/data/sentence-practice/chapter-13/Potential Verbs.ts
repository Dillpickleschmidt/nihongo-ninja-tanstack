import type { Question, SegmentConjugation } from "../types";

const normal = (
  pos: SegmentConjugation["pos"],
  polarity: SegmentConjugation["polarity"] = "positive",
  tense: SegmentConjugation["tense"] = "non-past",
): SegmentConjugation => ({ pos, form: "normal", polarity, tense });

const potential = (
  pos: SegmentConjugation["pos"],
  polarity: SegmentConjugation["polarity"] = "positive",
  tense: SegmentConjugation["tense"] = "non-past",
): SegmentConjugation => ({ pos, form: "potential", polarity, tense });

export const questions: Question[] = [
  {
    english: "Is Kobayashi able to swim in the sea?",
    hint: "Kobayashi = 小林 (こばやし)",
    answers: [
      {
        segments: [
          { text: "小林[こばやし]さんは 海[うみ]で" },
          { text: "泳[およ]ぐ", blank: true, conjugation: potential("Godan verb with 'gu' ending") },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "小林[こばやし]さんは 海[うみ]で 泳[およ]ぐ" },
          { text: "ことが", blank: true },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb") },
          { text: "か" },
        ],
        notes: "ことができる gives a direct 'be able to' phrasing.",
      },
      {
        segments: [
          { text: "小林[こばやし]さんが 海[うみ]で" },
          { text: "泳[およ]ぐ", blank: true, conjugation: potential("Godan verb with 'gu' ending") },
          { text: "か" },
        ],
        notes: "が puts more focus on Kobayashi as the person in question.",
      },
      {
        segments: [
          { text: "小林[こばやし]さんは 海[うみ]を" },
          { text: "泳[およ]ぐ", blank: true, conjugation: potential("Godan verb with 'gu' ending") },
          { text: "か" },
        ],
        notes: "を treats the sea as the area being swum through.",
      },
    ],
  },
  {
    english: "I can't eat spicy food at all.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 辛[から]い 食[た]べ物[もの]が 全然[ぜんぜん]" },
          { text: "食[た]べる", blank: true, conjugation: potential("Ichidan verb", "negative") },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 辛[から]いものが 全然[ぜんぜん]" },
          { text: "食[た]べる", blank: true, conjugation: potential("Ichidan verb", "negative") },
        ],
        notes: "辛いもの is a compact way to say spicy things or spicy food.",
      },
      {
        segments: [
          { text: "辛[から]いものは 全[まった]く 食[た]べる" },
          { text: "ことが", blank: true },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb", "negative") },
        ],
        notes: "全く is another strong way to say 'not at all'.",
      },
    ],
  },
  {
    english: "Shunsuke can drink coffee, but not milk.",
    hint: "Shunsuke = 俊介 (しゅんすけ)",
    answers: [
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは コーヒーは" },
          { text: "飲[の]む", blank: true, conjugation: potential("Godan verb with 'mu' ending") },
          { text: "が、牛乳[ぎゅうにゅう]は" },
          { text: "飲[の]む", blank: true, conjugation: potential("Godan verb with 'mu' ending", "negative") },
        ],
        notes: "は contrasts coffee with milk.",
      },
      {
        segments: [
          { text: "俊介[しゅんすけ]さんは コーヒーを 飲[の]む" },
          { text: "ことが", blank: true },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb") },
          { text: "が、牛乳[ぎゅうにゅう]は 飲[の]む" },
          { text: "ことが", blank: true },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb", "negative") },
        ],
        notes: "ことができる / ことができない states the two abilities explicitly.",
      },
    ],
  },
  {
    english: "Kaede can play the piano and sing at the same time!",
    hint: "Kaede = 楓 (かえで)",
    answers: [
      {
        segments: [
          { text: "楓[かえで]さんは、ピアノを 弾[ひ]きながら 歌[うた]を" },
          { text: "歌[うた]う", blank: true, conjugation: potential("Godan verb with 'u' ending") },
        ],
      },
      {
        segments: [
          { text: "楓[かえで]さんは、ピアノを 弾[ひ]きながら 歌[うた]も" },
          { text: "歌[うた]う", blank: true, conjugation: potential("Godan verb with 'u' ending") },
        ],
        notes: "も adds the feeling that singing is another thing Kaede can do at the same time.",
      },
      {
        segments: [
          { text: "楓[かえで]さんは、ピアノを 弾[ひ]きながら 歌[うた]う" },
          { text: "ことが", blank: true },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb") },
        ],
        notes: "ことができる expresses the same ability without changing 歌う itself.",
      },
    ],
  },
  {
    english: "Mizuki can use chopsticks!",
    hint: "Mizuki = 瑞希 (みずき)",
    answers: [
      {
        segments: [
          { text: "瑞希[みずき]さんは はしが" },
          { text: "使[つか]う", blank: true, conjugation: potential("Godan verb with 'u' ending") },
        ],
      },
      {
        segments: [
          { text: "瑞希[みずき]さんは はしを" },
          { text: "使[つか]う", blank: true, conjugation: potential("Godan verb with 'u' ending") },
        ],
        notes: "を can also mark what Hana uses.",
      },
      {
        segments: [
          { text: "瑞希[みずき]さんは はしを 使[つか]う" },
          { text: "ことが", blank: true },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb") },
        ],
        notes: "ことができる gives a direct 'can use' phrasing.",
      },
    ],
  },
  {
    english: "I couldn't ride a bike when I was a child.",
    answers: [
      {
        segments: [
          { text: "子供[こども]の 時[とき]、自転車[じてんしゃ]に" },
          { text: "乗[の]る", blank: true, conjugation: potential("Godan verb with 'ru' ending", "negative", "past") },
        ],
      },
      {
        segments: [
          { text: "子供[こども]の ころ、自転車[じてんしゃ]に" },
          { text: "乗[の]る", blank: true, conjugation: potential("Godan verb with 'ru' ending", "negative", "past") },
        ],
        notes: "ころ gives a softer 'around the time I was a child' nuance.",
      },
      {
        segments: [
          { text: "小[ちい]さい 時[とき]、自転車[じてんしゃ]に 乗[の]る" },
          { text: "ことが", blank: true },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb", "negative", "past") },
        ],
        notes: "小さい時 means when I was little.",
      },
    ],
  },
  {
    english: "Can Hana write her name in kanji?",
    hint: "Hana = ハナ",
    answers: [
      {
        segments: [
          { text: "ハナさんは 漢字[かんじ]で 名前[なまえ]が" },
          { text: "書[か]く", blank: true, conjugation: potential("Godan verb with 'ku' ending") },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "ハナさんは 漢字[かんじ]で 名前[なまえ]を" },
          { text: "書[か]く", blank: true, conjugation: potential("Godan verb with 'ku' ending") },
          { text: "か" },
        ],
        notes: "を is also natural for the thing being written.",
      },
      {
        segments: [
          { text: "ハナさんは 名前[なまえ]を 漢字[かんじ]で 書[か]く" },
          { text: "ことが", blank: true },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb") },
          { text: "か" },
        ],
        notes: "This puts 名前を before 漢字で.",
      },
    ],
  },
  {
    english: "Can Takeshi understand English?",
    hint: "Takeshi = たけし",
    answers: [
      {
        segments: [
          { text: "たけしさんは 英語[えいご]が" },
          { text: "分[わ]かる", blank: true },
          { text: "か" },
        ],
        notes: "分かる naturally expresses being able to understand.",
      },
      {
        segments: [
          { text: "たけしさんは 英語[えいご]を 理解[りかい]する" },
          { text: "ことが", blank: true },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb") },
          { text: "か" },
        ],
        notes: "理解する is a more formal word for understand.",
      },
    ],
  },
  {
    english: "I was able to make sushi for the first time!",
    answers: [
      {
        segments: [
          { text: "初[はじ]めて すしを" },
          { text: "作[つく]る", blank: true, conjugation: potential("Godan verb with 'ru' ending", "positive", "past") },
        ],
      },
      {
        segments: [
          { text: "初[はじ]めて 寿司[すし]が" },
          { text: "作[つく]る", blank: true, conjugation: potential("Godan verb with 'ru' ending", "positive", "past") },
        ],
        notes: "が is common with potential verbs.",
      },
      {
        segments: [
          { text: "初[はじ]めて 寿司[すし]を 作[つく]る" },
          { text: "ことが", blank: true },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb", "positive", "past") },
        ],
        notes: "ことができた clearly states that it became possible.",
      },
    ],
  },
  {
    english: "Can Kenji come to the party?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさんは パーティーに" },
          { text: "来[く]る", blank: true, conjugation: potential("Kuru verb - special class") },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "けんじさんが パーティーに" },
          { text: "来[く]る", blank: true, conjugation: potential("Kuru verb - special class") },
          { text: "か" },
        ],
        notes: "が focuses on Kenji as the person who may come.",
      },
      {
        segments: [
          { text: "けんじさんは パーティーに 来[く]る" },
          { text: "ことが", blank: true },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb") },
          { text: "か" },
        ],
        notes: "ことができる asks about the ability or possibility to come.",
      },
    ],
  },
  {
    english: "Can Hana climb that mountain?",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "はなさんは あの 山[やま]に" },
          { text: "登[のぼ]る", blank: true, conjugation: potential("Godan verb with 'ru' ending") },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "はなさんは あの 山[やま]を" },
          { text: "登[のぼ]る", blank: true, conjugation: potential("Godan verb with 'ru' ending") },
          { text: "か" },
        ],
        notes: "を treats the mountain as the route or object of climbing.",
      },
      {
        segments: [
          { text: "はなさんは あの 山[やま]に 登[のぼ]る" },
          { text: "ことが", blank: true },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb") },
          { text: "か" },
        ],
        notes: "ことができる is a direct way to ask whether climbing is possible.",
      },
    ],
  },
  {
    english: "Can Takeshi run to the station?",
    hint: "Takeshi = たけし",
    answers: [
      {
        segments: [
          { text: "たけしさんは 駅[えき]まで" },
          { text: "走[はし]る", blank: true, conjugation: potential("Godan verb with 'ru' ending") },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "たけしさんが 駅[えき]まで" },
          { text: "走[はし]る", blank: true, conjugation: potential("Godan verb with 'ru' ending") },
          { text: "か" },
        ],
        notes: "が puts focus on Takeshi.",
      },
      {
        segments: [
          { text: "たけしさんは 駅[えき]まで 走[はし]る" },
          { text: "ことが", blank: true },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb") },
          { text: "か" },
        ],
        notes: "ことができる asks whether running that far is possible.",
      },
    ],
  },
  {
    english: "Can I take a photo of this menu here?",
    hint: "menu = メニュー",
    answers: [
      {
        segments: [
          { text: "ここで この メニューの 写真[しゃしん]が" },
          { text: "撮[と]る", blank: true, conjugation: potential("Godan verb with 'ru' ending") },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "ここで この メニューの 写真[しゃしん]を" },
          { text: "撮[と]る", blank: true, conjugation: potential("Godan verb with 'ru' ending") },
          { text: "か" },
        ],
        notes: "を is also used for the photo being taken; the menu makes the permission question more specific.",
      },
      {
        segments: [
          { text: "ここで この メニューの 写真[しゃしん]を 撮[と]る" },
          { text: "ことが", blank: true },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb") },
          { text: "か" },
        ],
        notes: "ことができる asks if taking a menu photo is allowed or possible here.",
      },
    ],
  },
  {
    english: "I can't sleep on the bus.",
    answers: [
      {
        segments: [
          { text: "バスで" },
          { text: "寝[ね]る", blank: true, conjugation: potential("Ichidan verb", "negative") },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は バスで" },
          { text: "寝[ね]る", blank: true, conjugation: potential("Ichidan verb", "negative") },
        ],
        notes: "The subject is stated explicitly.",
      },
      {
        segments: [
          { text: "バスの 中[なか]で 寝[ね]る" },
          { text: "ことが", blank: true },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb", "negative") },
        ],
        notes: "バスの中で means inside the bus.",
      },
    ],
  },
  {
    english: "I can do laundry by myself.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 一人[ひとり]で 洗濯[せんたく]が" },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb") },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 自分[じぶん]で 洗濯[せんたく]が" },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb") },
        ],
        notes: "自分で also means by oneself.",
      },
      {
        segments: [
          { text: "私[わたし]は 一人[ひとり]で 洗濯[せんたく]する" },
          { text: "ことが", blank: true },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb") },
        ],
        notes: "洗濯することができる uses the verb phrase for doing laundry.",
      },
    ],
  },
  {
    english: "I can forget all my stress on the weekend!",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]に ストレスを 全部[ぜんぶ]" },
          { text: "忘[わす]れる", blank: true, conjugation: potential("Ichidan verb") },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]は ストレスを 全部[ぜんぶ]" },
          { text: "忘[わす]れる", blank: true, conjugation: potential("Ichidan verb") },
        ],
        notes: "週末は makes the weekend the contrastive topic.",
      },
      {
        segments: [
          { text: "私[わたし]は 週末[しゅうまつ]に 全部[ぜんぶ]の ストレスを 忘[わす]れる" },
          { text: "ことが", blank: true },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb") },
        ],
        notes: "全部のストレス means all of the stress.",
      },
    ],
  },
  {
    english: "Can Hana come home early tonight?",
    hint: "Hana = はな",
    answers: [
      {
        segments: [
          { text: "はなさんは 今晩[こんばん]、早[はや]く" },
          { text: "帰[かえ]る", blank: true, conjugation: potential("Godan verb with 'ru' ending") },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "はなさんは 今夜[こんや]、早[はや]く" },
          { text: "帰[かえ]る", blank: true, conjugation: potential("Godan verb with 'ru' ending") },
          { text: "か" },
        ],
        notes: "今夜 is another way to say tonight.",
      },
      {
        segments: [
          { text: "はなさんは 今晩[こんばん]、早[はや]く 帰[かえ]る" },
          { text: "ことが", blank: true },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb") },
          { text: "か" },
        ],
        notes: "ことができる asks if coming home early is possible.",
      },
    ],
  },
  {
    english: "Can Takeshi keep a promise?",
    hint: "Takeshi = たけし",
    answers: [
      {
        segments: [
          { text: "たけしさんは 約束[やくそく]を" },
          { text: "守[まも]る", blank: true, conjugation: potential("Godan verb with 'ru' ending") },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "たけしさんは 約束[やくそく]が" },
          { text: "守[まも]る", blank: true, conjugation: potential("Godan verb with 'ru' ending") },
          { text: "か" },
        ],
        notes: "が is common with potential verbs.",
      },
      {
        segments: [
          { text: "たけしさんは 約束[やくそく]を 守[まも]る" },
          { text: "ことが", blank: true },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb") },
          { text: "か" },
        ],
        notes: "ことができる asks whether keeping the promise is possible.",
      },
    ],
  },
  {
    english: "I can't pay — I don't have any money.",
    answers: [
      {
        segments: [
          { text: "払[はら]う", blank: true, conjugation: potential("Godan verb with 'u' ending", "negative") },
          { text: "、お金[かね]が ない" },
        ],
      },
      {
        segments: [
          { text: "お金[かね]が ないから、" },
          { text: "払[はら]う", blank: true, conjugation: potential("Godan verb with 'u' ending", "negative") },
        ],
        notes: "The reason comes first.",
      },
      {
        segments: [
          { text: "お金[かね]が 全然[ぜんぜん] ないから、払[はら]う" },
          { text: "ことが", blank: true },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb", "negative") },
        ],
        notes: "全然 makes the lack of money stronger.",
      },
      {
        segments: [
          { text: "払[はら]う", blank: true, conjugation: potential("Godan verb with 'u' ending", "negative") },
          { text: "、お金[かね]を 持[も]っていない" },
        ],
        notes: "お金を持っていない means I don't have money on me.",
      },
    ],
  },
  {
    english: "Can Sakura stay at a hotel by herself?",
    hint: "Sakura = さくら",
    answers: [
      {
        segments: [
          { text: "さくらさんは 一人[ひとり]で ホテルに" },
          { text: "泊[と]まる", blank: true, conjugation: potential("Godan verb with 'ru' ending") },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "さくらさんは 自分[じぶん]で ホテルに" },
          { text: "泊[と]まる", blank: true, conjugation: potential("Godan verb with 'ru' ending") },
          { text: "か" },
        ],
        notes: "自分で also means by herself.",
      },
      {
        segments: [
          { text: "さくらさんは 一人[ひとり]で ホテルに 泊[と]まる" },
          { text: "ことが", blank: true },
          { text: "できる", blank: true, conjugation: normal("Ichidan verb") },
          { text: "か" },
        ],
        notes: "ことができる asks if staying alone is possible.",
      },
    ],
  },
];
