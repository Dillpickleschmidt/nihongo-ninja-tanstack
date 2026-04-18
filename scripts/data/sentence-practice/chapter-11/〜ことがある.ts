import type { Question } from "../types"

const aruNeg = {
  pos: "Godan verb with 'ru' ending (irregular verb)" as const,
  form: "normal" as const,
  polarity: "negative" as const,
  tense: "non-past" as const,
}

const aruPos = {
  pos: "Godan verb with 'ru' ending (irregular verb)" as const,
  form: "normal" as const,
  polarity: "positive" as const,
  tense: "non-past" as const,
}

export const questions: Question[] = [
  {
    english: "I've never eaten sushi before.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は すしを 食[た]べたことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
        ],
      },
      {
        segments: [
          { text: "すしを 食[た]べたことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 寿司[すし]を 食[た]べたことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
        ],
      },
      {
        segments: [
          { text: "寿司[すし]を 食[た]べたことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
        ],
      },
    ],
  },
  {
    english: "I've been to Italy once — the pizza there was amazing!",
    hint: "Italy = イタリア",
    answers: [
      {
        segments: [
          { text: "イタリアに 行[い]ったことが" },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "。そこのピザは おいしかった" },
        ],
      },
      {
        segments: [
          { text: "イタリアへ 行[い]ったことが" },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "。そこのピザは おいしかった" },
        ],
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "イタリアに 一度[いちど] 行[い]ったことが" },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "。そこのピザは おいしかった" },
        ],
        notes: "with 一度 (once)",
      },
      {
        segments: [
          { text: "イタリアへ 一度[いちど] 行[い]ったことが" },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "。そこのピザは おいしかった" },
        ],
        notes: "へ + 一度",
      },
      {
        segments: [
          { text: "イタリアには 一度[いちど] 行[い]ったことが" },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "。そこのピザは 最高[さいこう]だった" },
        ],
        notes: "には + 最高だった (was the greatest) instead of おいしかった",
      },
    ],
  },
  {
    english: "I sometimes have dreams that are so scary I can't sleep.",
    answers: [
      {
        segments: [
          { text: "怖[こわ]くて 眠[ねむ]れない 夢[ゆめ]を 見[み]ることが" },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
      },
      {
        segments: [
          { text: "時々[ときどき]、怖[こわ]くて 眠[ねむ]れない 夢[ゆめ]を 見[み]ることが" },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "With 時々",
      },
      {
        segments: [
          { text: "私[わたし]は 怖[こわ]くて 眠[ねむ]れない 夢[ゆめ]を 見[み]ることが" },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "With 私は",
      },
      {
        segments: [
          { text: "私[わたし]は 時々[ときどき]、怖[こわ]くて 眠[ねむ]れない 夢[ゆめ]を 見[み]ることが" },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "私は + 時々",
      },
      {
        segments: [
          { text: "とても 怖[こわ]い 夢[ゆめ]を 見[み]ることが" },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "とても 怖い instead of 怖くて眠れない",
      },
      {
        segments: [
          { text: "すごく 怖[こわ]い 夢[ゆめ]を 見[み]ることが" },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "すごく 怖い variant",
      },
      {
        segments: [
          { text: "時々[ときどき]、とても 怖[こわ]い 夢[ゆめ]を 見[み]ることが" },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "時々 + とても 怖い",
      },
      {
        segments: [
          { text: "時々[ときどき]、すごく 怖[こわ]い 夢[ゆめ]を 見[み]ることが" },
          { text: "ある", blank: true, conjugation: aruPos },
        ],
        notes: "時々 + すごく 怖い",
      },
      {
        segments: [
          { text: "怖[こわ]くて 眠[ねむ]れない 夢[ゆめ]を 見[み]ることもある" },
        ],
        notes: "こともある variation (plain text, non-conjugated)",
      },
      {
        segments: [
          { text: "時々[ときどき]、怖[こわ]くて 眠[ねむ]れない 夢[ゆめ]を 見[み]ることもある" },
        ],
        notes: "時々 + こともある",
      },
    ],
  },
  {
    english: "Have you ever climbed Mt. Fuji, Kenji?",
    hint: "Kenji = けんじ",
    answers: [
      {
        segments: [
          { text: "けんじさん、富士山[ふじさん]に 登[のぼ]ったことが" },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "けんじくん、富士山[ふじさん]に 登[のぼ]ったことが" },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か" },
        ],
        notes: "くん suffix",
      },
      {
        segments: [
          { text: "富士山[ふじさん]に 登[のぼ]ったことが" },
          { text: "ある", blank: true, conjugation: aruPos },
          { text: "か、けんじさん" },
        ],
        notes: "Name at the end",
      },
    ],
  },
  {
    english: "I've never ridden a bullet train before.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 新幹線[しんかんせん]に 乗[の]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
        ],
      },
      {
        segments: [
          { text: "新幹線[しんかんせん]に 乗[の]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
        ],
        notes: "No 私は",
      },
      {
        segments: [
          { text: "私[わたし]は 新幹線[しんかんせん]に 乗[の]ったことは" },
          { text: "ある", blank: true, conjugation: aruNeg },
        ],
        notes: "は instead of が after こと",
      },
    ],
  },
  {
    english: "I've never seen snow before — I grew up in the Philippines.",
    answers: [
      {
        segments: [
          { text: "雪[ゆき]を 見[み]たことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。フィリピン 出身[しゅっしん]です" },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 雪[ゆき]を 見[み]たことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。フィリピン 出身[しゅっしん]です" },
        ],
        notes: "With 私は",
      },
    ],
  },
  {
    english: "I've never been to a hot spring before — have you, Miho?",
    hint: "Miho = みほ",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 温泉[おんせん]に 行[い]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。みほさんは？" },
        ],
      },
      {
        segments: [
          { text: "温泉[おんせん]に 行[い]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。みほさんは？" },
        ],
        notes: "No 私は",
      },
      {
        segments: [
          { text: "私[わたし]は 温泉[おんせん]に 行[い]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。みほさんは 温泉[おんせん]に 行[い]ったことがある？" },
        ],
        notes: "Full Miho question repeated",
      },
    ],
  },
  {
    english: "I've never been to a karaoke place — is it fun?",
    answers: [
      {
        segments: [
          { text: "私[わたし]は カラオケに 行[い]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。楽[たの]しいですか" },
        ],
      },
      {
        segments: [
          { text: "カラオケに 行[い]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。楽[たの]しいですか" },
        ],
        notes: "No 私は",
      },
      {
        segments: [
          { text: "私[わたし]は カラオケへ 行[い]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。楽[たの]しいですか" },
        ],
        notes: "へ instead of に",
      },
    ],
  },
  {
    english: "I've never done volunteer work before — have you, Sota?",
    hint: "Sota = そうた",
    answers: [
      {
        segments: [
          { text: "私[わたし]は ボランティアを したことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。そうたさんは？" },
        ],
      },
      {
        segments: [
          { text: "ボランティアを したことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。そうたさんは？" },
        ],
        notes: "No 私は",
      },
      {
        segments: [
          { text: "私[わたし]は ボランティアを したことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。そうたさんは したことがある？" },
        ],
        notes: "Sota's question explicit",
      },
    ],
  },
  {
    english: "I've never sung karaoke before — is it hard?",
    answers: [
      {
        segments: [
          { text: "私[わたし]は カラオケで 歌[うた]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。難[むずか]しいですか" },
        ],
      },
      {
        segments: [
          { text: "カラオケで 歌[うた]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。難[むずか]しいですか" },
        ],
        notes: "No 私は",
      },
      {
        segments: [
          { text: "私[わたし]は カラオケで 歌[うた]を 歌[うた]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。難[むずか]しいですか" },
        ],
        notes: "歌を歌う variant",
      },
    ],
  },
  {
    english:
      "I've never bought anything at a department store before — is it expensive?",
    answers: [
      {
        segments: [
          { text: "私[わたし]は デパートで 何[なに]も 買[か]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。高[たか]いですか" },
        ],
      },
      {
        segments: [
          { text: "デパートで 何[なに]も 買[か]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。高[たか]いですか" },
        ],
        notes: "No 私は",
      },
      {
        segments: [
          { text: "私[わたし]は デパートで ものを 買[か]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。高[たか]いですか" },
        ],
        notes: "ものを instead of 何も",
      },
    ],
  },
  {
    english: "I've never done fishing before — is it fun?",
    answers: [
      {
        segments: [
          { text: "私[わたし]は つりを したことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。楽[たの]しいですか" },
        ],
      },
      {
        segments: [
          { text: "つりを したことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。楽[たの]しいですか" },
        ],
        notes: "No 私は",
      },
    ],
  },
  {
    english: "I've never done a homestay before — is it fun?",
    answers: [
      {
        segments: [
          { text: "私[わたし]は ホームステイを したことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。楽[たの]しいですか" },
        ],
      },
      {
        segments: [
          { text: "ホームステイを したことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。楽[たの]しいですか" },
        ],
        notes: "No 私は",
      },
      {
        segments: [
          { text: "私[わたし]は ホームステイしたことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。楽[たの]しいですか" },
        ],
        notes: "ホームステイする without を",
      },
      {
        segments: [
          { text: "ホームステイしたことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。楽[たの]しいですか" },
        ],
        notes: "No 私は, no を",
      },
    ],
  },
  {
    english: "I've never been to a zoo before — is it interesting?",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 動物園[どうぶつえん]に 行[い]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。面白[おもしろ]いですか" },
        ],
      },
      {
        segments: [
          { text: "動物園[どうぶつえん]に 行[い]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。面白[おもしろ]いですか" },
        ],
        notes: "No 私は",
      },
      {
        segments: [
          { text: "私[わたし]は 動物園[どうぶつえん]へ 行[い]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。面白[おもしろ]いですか" },
        ],
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "動物園[どうぶつえん]へ 行[い]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。面白[おもしろ]いですか" },
        ],
        notes: "へ, no 私は",
      },
    ],
  },
  {
    english: "I've never driven a car before — is it scary?",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 車[くるま]を 運転[うんてん]したことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。怖[こわ]いですか" },
        ],
      },
      {
        segments: [
          { text: "車[くるま]を 運転[うんてん]したことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。怖[こわ]いですか" },
        ],
        notes: "No 私は",
      },
    ],
  },
  {
    english: "I've never been to a concert before — is it fun?",
    answers: [
      {
        segments: [
          { text: "私[わたし]は コンサートに 行[い]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。楽[たの]しいですか" },
        ],
      },
      {
        segments: [
          { text: "コンサートに 行[い]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。楽[たの]しいですか" },
        ],
        notes: "No 私は",
      },
    ],
  },
  {
    english: "I've never done a barbecue before — is it fun?",
    answers: [
      {
        segments: [
          { text: "私[わたし]は バーベキューを したことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。楽[たの]しいですか" },
        ],
      },
      {
        segments: [
          { text: "バーベキューを したことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。楽[たの]しいですか" },
        ],
        notes: "No 私は",
      },
    ],
  },
  {
    english: "I've never been to an art museum before — is it interesting?",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 美術館[びじゅつかん]に 行[い]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。面白[おもしろ]いですか" },
        ],
      },
      {
        segments: [
          { text: "美術館[びじゅつかん]に 行[い]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。面白[おもしろ]いですか" },
        ],
        notes: "No 私は",
      },
      {
        segments: [
          { text: "私[わたし]は 美術館[びじゅつかん]へ 行[い]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。面白[おもしろ]いですか" },
        ],
        notes: "へ instead of に",
      },
      {
        segments: [
          { text: "美術館[びじゅつかん]へ 行[い]ったことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。面白[おもしろ]いですか" },
        ],
        notes: "へ, no 私は",
      },
    ],
  },
  {
    english: "I've never done a drive before — is it fun?",
    answers: [
      {
        segments: [
          { text: "私[わたし]は ドライブを したことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。楽[たの]しいですか" },
        ],
      },
      {
        segments: [
          { text: "ドライブを したことが" },
          { text: "ある", blank: true, conjugation: aruNeg },
          { text: "。楽[たの]しいですか" },
        ],
        notes: "No 私は",
      },
    ],
  },
]
