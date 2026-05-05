import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "I left the house this morning without eating breakfast.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、朝[あさ]ご 飯[はん]を " },
          { text: "食[た]べないで", blank: true },
          { text: "、家[いえ]を " },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard word order with 私は and を marking breakfast as the object",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は 朝[あさ]ご 飯[はん]を " },
          { text: "食[た]べないで", blank: true },
          { text: "、家[いえ]を " },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase placed at the beginning before 私は",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、朝[あさ]ご 飯[はん]を " },
          { text: "食[た]べないで", blank: true },
          { text: "、家[いえ]を " },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 家 for home/house",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は 朝[あさ]ご 飯[はん]を " },
          { text: "食[た]べないで", blank: true },
          { text: "、家[いえ]を " },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time phrase first and using 家",
      },
      {
        segments: [
          { text: "私[わたし]は 朝[あさ]ご 飯[はん]を " },
          { text: "食[た]べないで", blank: true },
          { text: "、今朝[けさ] 家[いえ]を " },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Placing 今朝 before the main action",
      },
      {
        segments: [
          { text: "私[わたし]は 朝[あさ]ご 飯[はん]を " },
          { text: "食[た]べないで", blank: true },
          { text: "、今朝[けさ] 家[いえ]を " },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Placing 今朝 before the main action and using 家",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、朝[あさ]ご 飯[はん] " },
          { text: "食[た]べないで", blank: true },
          { text: "、家[いえ]を " },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Casual dropped を after 朝ご飯",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、朝[あさ]ご 飯[はん] " },
          { text: "食[た]べないで", blank: true },
          { text: "、家[いえ]を " },
          { text: "出[で]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Casual dropped を after 朝ご飯 and using 家",
      },
    ],
  },
  {
    english: "Don't open the window; the air conditioner is on.",
    answers: [
      {
        segments: [
          { text: "エアコンが ついているから、窓[まど]を" },
          { text: "開[あ]けないで", blank: true },
        ],
        notes: "Basic order with reason first using から",
      },
      {
        segments: [
          { text: "窓[まど]を" },
          { text: "開[あ]けないで", blank: true },
          { text: "、エアコンが ついているから" },
        ],
        notes: "Request first, then reason with から",
      },
      {
        segments: [
          { text: "エアコンが ついているので、窓[まど]を" },
          { text: "開[あ]けないで", blank: true },
        ],
        notes: "Using ので instead of から for a softer reason",
      },
      {
        segments: [
          { text: "窓[まど]を" },
          { text: "開[あ]けないで", blank: true },
          { text: "、エアコンが ついているので" },
        ],
        notes: "Request first, then softer reason with ので",
      },
      {
        segments: [
          { text: "エアコンを つけているから、窓[まど]を" },
          { text: "開[あ]けないで", blank: true },
        ],
        notes: "Using transitive つけている: someone has the air conditioner on",
      },
      {
        segments: [
          { text: "窓[まど]を" },
          { text: "開[あ]けないで", blank: true },
          { text: "、エアコンを つけているから" },
        ],
        notes: "Request first with transitive つけている reason",
      },
      {
        segments: [
          { text: "エアコンを つけているので、窓[まど]を" },
          { text: "開[あ]けないで", blank: true },
        ],
        notes: "Transitive つけている with ので",
      },
      {
        segments: [
          { text: "窓[まど]を" },
          { text: "開[あ]けないで", blank: true },
          { text: "、エアコンを つけているので" },
        ],
        notes: "Request first with transitive つけている and ので",
      },
      {
        segments: [
          { text: "エアコンが ついているから、" },
          { text: "窓[まど]、開[あ]けないで", blank: true },
        ],
        notes: "Casual topic-like placement of 窓 with dropped を",
      },
      {
        segments: [
          { text: "エアコンが ついているので、" },
          { text: "窓[まど]、開[あ]けないで", blank: true },
        ],
        notes: "Casual dropped を with softer ので",
      },
      {
        segments: [
          { text: "エアコンを つけているから、" },
          { text: "窓[まど]、開[あ]けないで", blank: true },
        ],
        notes: "Casual dropped を with transitive つけている",
      },
      {
        segments: [
          { text: "エアコンを つけているので、" },
          { text: "窓[まど]、開[あ]けないで", blank: true },
        ],
        notes: "Casual dropped を with transitive つけている and ので",
      },
    ],
  },
  {
    english: "I took the exam without studying at all.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 全然[ぜんぜん] " },
          { text: "勉強[べんきょう]しないで", blank: true },
          { text: "、試験[しけん]を " },
          { text: "受[う]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard translation using 試験 and 全然 before the ないで phrase",
      },
      {
        segments: [
          { text: "私[わたし]は 全然[ぜんぜん] " },
          { text: "勉強[べんきょう]しないで", blank: true },
          { text: "、テストを " },
          { text: "受[う]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using テスト instead of 試験",
      },
      {
        segments: [
          { text: "私[わたし]は 勉強[べんきょう]を 全然[ぜんぜん] " },
          { text: "しないで", blank: true },
          { text: "、試験[しけん]を " },
          { text: "受[う]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 勉強をする construction with 全然 before しないで",
      },
      {
        segments: [
          { text: "私[わたし]は 勉強[べんきょう]を 全然[ぜんぜん] " },
          { text: "しないで", blank: true },
          { text: "、テストを " },
          { text: "受[う]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 勉強をする construction and テスト",
      },
      {
        segments: [
          { text: "私[わたし]は 試験[しけん]を、全然[ぜんぜん] " },
          { text: "勉強[べんきょう]しないで", blank: true },
          { text: " " },
          { text: "受[う]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reordered to put the exam topic before the ないで phrase",
      },
      {
        segments: [
          { text: "私[わたし]は テストを、全然[ぜんぜん] " },
          { text: "勉強[べんきょう]しないで", blank: true },
          { text: " " },
          { text: "受[う]ける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reordered version using テスト",
      },
    ],
  },
  {
    english: "This morning, I went to the convenience store without taking my wallet.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、財布[さいふ]を " },
          { text: "持[も]たないで", blank: true },
          { text: "、コンビニに " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic translation using コンビニに and 財布を持たないで",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、財布[さいふ]を " },
          { text: "持[も]たないで", blank: true },
          { text: "、コンビニへ " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using へ instead of に for the destination",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、コンビニに 財布[さいふ]を " },
          { text: "持[も]たないで", blank: true },
          { text: " " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Destination placed before the ないで phrase",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、コンビニへ 財布[さいふ]を " },
          { text: "持[も]たないで", blank: true },
          { text: " " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Destination before the ないで phrase, using へ",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は 財布[さいふ]を " },
          { text: "持[も]たないで", blank: true },
          { text: "、コンビニに " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "今朝 placed at the very beginning",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は 財布[さいふ]を " },
          { text: "持[も]たないで", blank: true },
          { text: "、コンビニへ " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "今朝 at the beginning, using へ for the destination",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、財布[さいふ]を " },
          { text: "持[も]っていかないで", blank: true },
          { text: "、コンビニに " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 持っていかないで to mean without taking/bringing along",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、財布[さいふ]を " },
          { text: "持[も]っていかないで", blank: true },
          { text: "、コンビニへ " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 持っていかないで with へ as destination marker",
      },
      {
        segments: [
          { text: "私[わたし]は 今朝[けさ]、コンビニに 財布[さいふ]を " },
          { text: "持[も]っていかないで", blank: true },
          { text: " " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Word order with destination first and 持っていかないで",
      },
      {
        segments: [
          { text: "今朝[けさ]、私[わたし]は 財布[さいふ]を " },
          { text: "持[も]っていかないで", blank: true },
          { text: "、コンビニに " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "今朝 sentence-initial with 持っていかないで",
      },
    ],
  },
  {
    english: "I drank the coffee without putting sugar in it.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は コーヒーに 砂糖[さとう]を" },
          { text: "入[い]れないで", blank: true },
          { text: "、コーヒーを" },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard translation; explicitly says putting sugar into the coffee.",
      },
      {
        segments: [
          { text: "私[わたし]は 砂糖[さとう]を" },
          { text: "入[い]れないで", blank: true },
          { text: "、コーヒーを" },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Natural version omitting the repeated コーヒーに before 入れる.",
      },
      {
        segments: [
          { text: "私[わたし]は コーヒーを、砂糖[さとう]を" },
          { text: "入[い]れないで", blank: true },
          { text: "、" },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Topicalizes/object-fronts コーヒー before the without-clause.",
      },
      {
        segments: [
          { text: "私[わたし]は 砂糖[さとう]を コーヒーに" },
          { text: "入[い]れないで", blank: true },
          { text: "、コーヒーを" },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Changes word order inside the ないで clause: sugar first, then coffee.",
      },
      {
        segments: [
          { text: "私[わたし]は コーヒーに 砂糖[さとう]を" },
          { text: "入[い]れないで", blank: true },
          { text: "、" },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omits the repeated object コーヒーを after it is clear from コーヒーに.",
      },
      {
        segments: [
          { text: "私[わたし]は 砂糖[さとう]を コーヒーに" },
          { text: "入[い]れないで", blank: true },
          { text: "、" },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Combines sugar-first word order with omission of the repeated コーヒーを.",
      },
      {
        segments: [
          { text: "私[わたし]は コーヒーを 砂糖[さとう]を" },
          { text: "入[い]れないで", blank: true },
          { text: "、" },
          { text: "飲[の]む", conjugation: { pos: "Godan verb with 'mu' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Colloquial/object-fronted version without に; natural when the coffee is the object being drunk.",
      },
    ],
  },
  {
    english: "Don't laugh; this letter is really important.",
    answers: [
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。この 手紙[てがみ]は 本当[ほんとう]に 大切[たいせつ]" },
          { text: "です" },
        ],
        notes: "Basic order: request first, then explains that this letter is really important.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。この 手紙[てがみ]は 本当[ほんとう]に 大事[だいじ]" },
          { text: "です" },
        ],
        notes: "Uses 大事 as a natural synonym for 大切.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。この 手紙[てがみ]、本当[ほんとう]に 大切[たいせつ]" },
          { text: "です" },
        ],
        notes: "Drops the topic particle は after この手紙, which is natural in speech.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。この 手紙[てがみ]、本当[ほんとう]に 大事[だいじ]" },
          { text: "です" },
        ],
        notes: "Drops は and uses 大事 as a synonym for 大切.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。この 手紙[てがみ]は すごく 大切[たいせつ]" },
          { text: "です" },
        ],
        notes: "Uses すごく to express “really/very.”",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。この 手紙[てがみ]は すごく 大事[だいじ]" },
          { text: "です" },
        ],
        notes: "Uses すごく with 大事.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。この 手紙[てがみ]、すごく 大切[たいせつ]" },
          { text: "です" },
        ],
        notes: "Casual-sounding particle drop with すごく大切.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。この 手紙[てがみ]、すごく 大事[だいじ]" },
          { text: "です" },
        ],
        notes: "Casual-sounding particle drop with すごく大事.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]は 本当[ほんとう]に 大切[たいせつ]" },
          { text: "です" },
          { text: "から、笑[わら]わないで", blank: true },
        ],
        notes: "Reversed order: gives the reason first using から.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]は 本当[ほんとう]に 大事[だいじ]" },
          { text: "です" },
          { text: "から、笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order with 大事.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]、本当[ほんとう]に 大切[たいせつ]" },
          { text: "です" },
          { text: "から、笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order with は dropped.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]、本当[ほんとう]に 大事[だいじ]" },
          { text: "です" },
          { text: "から、笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order with は dropped and 大事.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]は すごく 大切[たいせつ]" },
          { text: "です" },
          { text: "から、笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order using すごく.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]は すごく 大事[だいじ]" },
          { text: "です" },
          { text: "から、笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order using すごく and 大事.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]、すごく 大切[たいせつ]" },
          { text: "です" },
          { text: "から、笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order, は dropped, with すごく大切.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]、すごく 大事[だいじ]" },
          { text: "です" },
          { text: "から、笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order, は dropped, with すごく大事.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。この 手紙[てがみ]は とても 大切[たいせつ]" },
          { text: "です" },
        ],
        notes: "Uses とても for “really/very.”",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。この 手紙[てがみ]は とても 大事[だいじ]" },
          { text: "です" },
        ],
        notes: "Uses とても with 大事.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。この 手紙[てがみ]、とても 大切[たいせつ]" },
          { text: "です" },
        ],
        notes: "Drops は and uses とても大切.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。この 手紙[てがみ]、とても 大事[だいじ]" },
          { text: "です" },
        ],
        notes: "Drops は and uses とても大事.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]は とても 大切[たいせつ]" },
          { text: "です" },
          { text: "から、笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order using とても大切.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]は とても 大事[だいじ]" },
          { text: "です" },
          { text: "から、笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order using とても大事.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]、とても 大切[たいせつ]" },
          { text: "です" },
          { text: "から、笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order, は dropped, with とても大切.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]、とても 大事[だいじ]" },
          { text: "です" },
          { text: "から、笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order, は dropped, with とても大事.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]は 本当[ほんとう]に 大切[たいせつ]" },
          { text: "です" },
          { text: "。笑[わら]わないで", blank: true },
        ],
        notes: "Statement first, then the request as a separate sentence.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]は 本当[ほんとう]に 大事[だいじ]" },
          { text: "です" },
          { text: "。笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order with 大事.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]、本当[ほんとう]に 大切[たいせつ]" },
          { text: "です" },
          { text: "。笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order with は dropped.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]、本当[ほんとう]に 大事[だいじ]" },
          { text: "です" },
          { text: "。笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order with は dropped and 大事.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]は すごく 大切[たいせつ]" },
          { text: "です" },
          { text: "。笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order with すごく大切.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]は すごく 大事[だいじ]" },
          { text: "です" },
          { text: "。笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order with すごく大事.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]、すごく 大切[たいせつ]" },
          { text: "です" },
          { text: "。笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order, は dropped, with すごく大切.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]、すごく 大事[だいじ]" },
          { text: "です" },
          { text: "。笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order, は dropped, with すごく大事.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]は とても 大切[たいせつ]" },
          { text: "です" },
          { text: "。笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order with とても大切.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]は とても 大事[だいじ]" },
          { text: "です" },
          { text: "。笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order with とても大事.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]、とても 大切[たいせつ]" },
          { text: "です" },
          { text: "。笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order, は dropped, with とても大切.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]、とても 大事[だいじ]" },
          { text: "です" },
          { text: "。笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order, は dropped, with とても大事.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。これは 本当[ほんとう]に 大切[たいせつ]な 手紙[てがみ]" },
          { text: "です" },
        ],
        notes: "Uses これは and a noun-modifying phrase 大切な手紙.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。これは 本当[ほんとう]に 大事[だいじ]な 手紙[てがみ]" },
          { text: "です" },
        ],
        notes: "Uses これは with 大事な手紙.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。これ、本当[ほんとう]に 大切[たいせつ]な 手紙[てがみ]" },
          { text: "です" },
        ],
        notes: "Uses これ with は dropped.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。これ、本当[ほんとう]に 大事[だいじ]な 手紙[てがみ]" },
          { text: "です" },
        ],
        notes: "Uses これ with は dropped and 大事な手紙.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。これは すごく 大切[たいせつ]な 手紙[てがみ]" },
          { text: "です" },
        ],
        notes: "Uses これは with すごく大切な手紙.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。これは すごく 大事[だいじ]な 手紙[てがみ]" },
          { text: "です" },
        ],
        notes: "Uses これは with すごく大事な手紙.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。これは とても 大切[たいせつ]な 手紙[てがみ]です" },
        ],
        notes: "Uses これは with とても大切な手紙.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。これは とても 大事[だいじ]な 手紙[てがみ]です" },
        ],
        notes: "Uses これは with とても大事な手紙.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。これ、とても 大切[たいせつ]な 手紙[てがみ]です" },
        ],
        notes: "Uses これ with は dropped and とても大切な手紙.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。これ、とても 大事[だいじ]な 手紙[てがみ]です" },
        ],
        notes: "Uses これ with は dropped and とても大事な手紙.",
      },
      {
        segments: [
          { text: "これは 本当[ほんとう]に 大切[たいせつ]な 手紙[てがみ]ですから、" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order with これは and 大切な手紙.",
      },
      {
        segments: [
          { text: "これは 本当[ほんとう]に 大事[だいじ]な 手紙[てがみ]ですから、" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order with これは and 大事な手紙.",
      },
      {
        segments: [
          { text: "これ、本当[ほんとう]に 大切[たいせつ]な 手紙[てがみ]ですから、" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order with これ and は dropped.",
      },
      {
        segments: [
          { text: "これ、本当[ほんとう]に 大事[だいじ]な 手紙[てがみ]ですから、" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order with これ, は dropped, and 大事な手紙.",
      },
      {
        segments: [
          { text: "これは すごく 大切[たいせつ]な 手紙[てがみ]ですから、" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order with すごく大切な手紙.",
      },
      {
        segments: [
          { text: "これは すごく 大事[だいじ]な 手紙[てがみ]ですから、" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order with すごく大事な手紙.",
      },
      {
        segments: [
          { text: "これ、すごく 大切[たいせつ]な 手紙[てがみ]ですから、" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order with これ, は dropped, and すごく大切な手紙.",
      },
      {
        segments: [
          { text: "これ、すごく 大事[だいじ]な 手紙[てがみ]ですから、" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order with これ, は dropped, and すごく大事な手紙.",
      },
      {
        segments: [
          { text: "これは とても 大切[たいせつ]な 手紙[てがみ]ですから、" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order with とても大切な手紙.",
      },
      {
        segments: [
          { text: "これは とても 大事[だいじ]な 手紙[てがみ]ですから、" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order with とても大事な手紙.",
      },
      {
        segments: [
          { text: "これ、とても 大切[たいせつ]な 手紙[てがみ]ですから、" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order with これ, は dropped, and とても大切な手紙.",
      },
      {
        segments: [
          { text: "これ、とても 大事[だいじ]な 手紙[てがみ]ですから、" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order with これ, は dropped, and とても大事な手紙.",
      },
      {
        segments: [
          { text: "これは 本当[ほんとう]に 大切[たいせつ]な 手紙[てがみ]です。" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order with これは and 大切な手紙.",
      },
      {
        segments: [
          { text: "これは 本当[ほんとう]に 大事[だいじ]な 手紙[てがみ]です。" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order with これは and 大事な手紙.",
      },
      {
        segments: [
          { text: "これ、本当[ほんとう]に 大切[たいせつ]な 手紙[てがみ]です。" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order with これ and は dropped.",
      },
      {
        segments: [
          { text: "これ、本当[ほんとう]に 大事[だいじ]な 手紙[てがみ]です。" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order with これ, は dropped, and 大事な手紙.",
      },
      {
        segments: [
          { text: "これは すごく 大切[たいせつ]な 手紙[てがみ]です。" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order with すごく大切な手紙.",
      },
      {
        segments: [
          { text: "これは すごく 大事[だいじ]な 手紙[てがみ]です。" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order with すごく大事な手紙.",
      },
      {
        segments: [
          { text: "これ、すごく 大切[たいせつ]な 手紙[てがみ]です。" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order with これ, は dropped, and すごく大切な手紙.",
      },
      {
        segments: [
          { text: "これ、すごく 大事[だいじ]な 手紙[てがみ]です。" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order with これ, は dropped, and すごく大事な手紙.",
      },
      {
        segments: [
          { text: "これは とても 大切[たいせつ]な 手紙[てがみ]です。" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order with とても大切な手紙.",
      },
      {
        segments: [
          { text: "これは とても 大事[だいじ]な 手紙[てがみ]です。" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order with とても大事な手紙.",
      },
      {
        segments: [
          { text: "これ、とても 大切[たいせつ]な 手紙[てがみ]です。" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order with これ, は dropped, and とても大切な手紙.",
      },
      {
        segments: [
          { text: "これ、とても 大事[だいじ]な 手紙[てがみ]です。" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Statement-first order with これ, は dropped, and とても大事な手紙.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "よ。この 手紙[てがみ]は 本当[ほんとう]に 大切[たいせつ]です" },
        ],
        notes: "Adds よ to the request for emphasis.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "よ。この 手紙[てがみ]は 本当[ほんとう]に 大事[だいじ]です" },
        ],
        notes: "Adds よ to the request and uses 大事.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "よ。この 手紙[てがみ]、本当[ほんとう]に 大切[たいせつ]です" },
        ],
        notes: "Adds よ and drops は after この手紙.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "よ。この 手紙[てがみ]、本当[ほんとう]に 大事[だいじ]です" },
        ],
        notes: "Adds よ, drops は, and uses 大事.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "ね。この 手紙[てがみ]は 本当[ほんとう]に 大切[たいせつ]です" },
        ],
        notes: "Adds ね to make the request softer.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "ね。この 手紙[てがみ]は 本当[ほんとう]に 大事[だいじ]です" },
        ],
        notes: "Adds ね to soften the request and uses 大事.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "ね。この 手紙[てがみ]、本当[ほんとう]に 大切[たいせつ]です" },
        ],
        notes: "Adds ね and drops は after この手紙.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "ね。この 手紙[てがみ]、本当[ほんとう]に 大事[だいじ]です" },
        ],
        notes: "Adds ね, drops は, and uses 大事.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "ください。この 手紙[てがみ]は 本当[ほんとう]に 大切[たいせつ]です" },
        ],
        notes: "Politer request using ないでください.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "ください。この 手紙[てがみ]は 本当[ほんとう]に 大事[だいじ]です" },
        ],
        notes: "Politer request using ないでください with 大事.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "ください。この 手紙[てがみ]、本当[ほんとう]に 大切[たいせつ]です" },
        ],
        notes: "Politer request with は dropped after この手紙.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "ください。この 手紙[てがみ]、本当[ほんとう]に 大事[だいじ]です" },
        ],
        notes: "Politer request with は dropped and 大事.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。この 手紙[てがみ]は 本当[ほんとう]に 重要[じゅうよう]です" },
        ],
        notes: "Uses 重要 as a natural synonym for important.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。この 手紙[てがみ]、本当[ほんとう]に 重要[じゅうよう]です" },
        ],
        notes: "Uses 重要 and drops は after この手紙.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]は 本当[ほんとう]に 重要[じゅうよう]ですから、" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order using 重要.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]、本当[ほんとう]に 重要[じゅうよう]ですから、" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order using 重要 with は dropped.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。これは 本当[ほんとう]に 重要[じゅうよう]な 手紙[てがみ]です" },
        ],
        notes: "Uses これは and 重要な手紙.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。これ、本当[ほんとう]に 重要[じゅうよう]な 手紙[てがみ]です" },
        ],
        notes: "Uses これ with は dropped and 重要な手紙.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。この 手紙[てがみ]は すごく 重要[じゅうよう]です" },
        ],
        notes: "Uses すごく重要 to express “really important.”",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。この 手紙[てがみ]は とても 重要[じゅうよう]です" },
        ],
        notes: "Uses とても重要 to express “really important.”",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。この 手紙[てがみ]、すごく 重要[じゅうよう]です" },
        ],
        notes: "Uses すごく重要 with は dropped.",
      },
      {
        segments: [
          { text: "笑[わら]わないで", blank: true },
          { text: "。この 手紙[てがみ]、とても 重要[じゅうよう]です" },
        ],
        notes: "Uses とても重要 with は dropped.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]は すごく 重要[じゅうよう]ですから、" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order with すごく重要.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]は とても 重要[じゅうよう]ですから、" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order with とても重要.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]、すごく 重要[じゅうよう]ですから、" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order with すごく重要 and は dropped.",
      },
      {
        segments: [
          { text: "この 手紙[てがみ]、とても 重要[じゅうよう]ですから、" },
          { text: "笑[わら]わないで", blank: true },
        ],
        notes: "Reason-first order with とても重要 and は dropped.",
      },
    ],
  },
  {
    english: "I got on the train without buying a ticket.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 切符[きっぷ]を" },
          { text: "買[か]わないで", blank: true },
          { text: "、電車[でんしゃ]に" },
          { text: "乗[の]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic translation using 切符 and 電車",
      },
      {
        segments: [
          { text: "私[わたし]は 電車[でんしゃ]の 切符[きっぷ]を" },
          { text: "買[か]わないで", blank: true },
          { text: "、電車[でんしゃ]に" },
          { text: "乗[の]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Explicitly says 'train ticket' with 電車の切符",
      },
      {
        segments: [
          { text: "私[わたし]は 乗車券[じょうしゃけん]を" },
          { text: "買[か]わないで", blank: true },
          { text: "、電車[でんしゃ]に" },
          { text: "乗[の]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "More formal word for ticket: 乗車券",
      },
      {
        segments: [
          { text: "私[わたし]は 電車[でんしゃ]に、切符[きっぷ]を" },
          { text: "買[か]わないで", blank: true },
          { text: " " },
          { text: "乗[の]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed word order: destination/action first, then the ないで phrase before the main verb",
      },
      {
        segments: [
          { text: "私[わたし]は 切符[きっぷ]" },
          { text: "買[か]わないで", blank: true },
          { text: "、電車[でんしゃ]に" },
          { text: "乗[の]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Casual particle drop: 切符を → 切符",
      },
      {
        segments: [
          { text: "私[わたし]は 電車[でんしゃ]に、乗車券[じょうしゃけん]を" },
          { text: "買[か]わないで", blank: true },
          { text: " " },
          { text: "乗[の]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed word order with formal 乗車券",
      },
    ],
  },
  {
    english: "Don't take pictures in the art museum.",
    answers: [
      {
        segments: [
          { text: "美術館[びじゅつかん]で 写真[しゃしん]を" },
          { text: "撮[と]らないでください", blank: true },
        ],
        notes: "Polite request form, natural for a public instruction.",
      },
      {
        segments: [
          { text: "美術館[びじゅつかん]では 写真[しゃしん]を" },
          { text: "撮[と]らないでください", blank: true },
        ],
        notes: "Using では to mark the art museum as the setting where the rule applies.",
      },
      {
        segments: [
          { text: "美術館[びじゅつかん]の 中[なか]で 写真[しゃしん]を" },
          { text: "撮[と]らないでください", blank: true },
        ],
        notes: "Using の中で to explicitly say inside the art museum.",
      },
    ],
  },
  {
    english: "I went to the party without inviting my roommate.",
    hint: "party = パーティー; roommate = ルームメイト",
    answers: [
      {
        segments: [
          { text: "私[わたし]は ルームメイトを" },
          { text: "招待[しょうたい]しないで", blank: true },
          { text: "、パーティーに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic translation using 招待する and パーティーに行く",
      },
      {
        segments: [
          { text: "私[わたし]は ルームメイトを" },
          { text: "誘[さそ]わないで", blank: true },
          { text: "、パーティーに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 誘う instead of 招待する; more conversational for inviting someone to a party",
      },
      {
        segments: [
          { text: "私[わたし]は ルームメイトを" },
          { text: "招待[しょうたい]しないで", blank: true },
          { text: "、パーティーへ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using へ instead of に for destination",
      },
      {
        segments: [
          { text: "私[わたし]は ルームメイトを" },
          { text: "誘[さそ]わないで", blank: true },
          { text: "、パーティーへ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 誘う with へ for destination",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の ルームメイトを" },
          { text: "招待[しょうたい]しないで", blank: true },
          { text: "、パーティーに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Explicitly saying 私のルームメイト for 'my roommate'",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の ルームメイトを" },
          { text: "誘[さそ]わないで", blank: true },
          { text: "、パーティーに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Explicit possession with the conversational verb 誘う",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の ルームメイトを" },
          { text: "招待[しょうたい]しないで", blank: true },
          { text: "、パーティーへ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Explicit possession with へ for destination",
      },
      {
        segments: [
          { text: "私[わたし]は 私[わたし]の ルームメイトを" },
          { text: "誘[さそ]わないで", blank: true },
          { text: "、パーティーへ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Explicit possession, using 誘う and へ",
      },
      {
        segments: [
          { text: "私[わたし]は パーティーに ルームメイトを" },
          { text: "招待[しょうたい]しないで", blank: true },
          { text: " " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reordered: destination placed before the ないで phrase",
      },
      {
        segments: [
          { text: "私[わたし]は パーティーに ルームメイトを" },
          { text: "誘[さそ]わないで", blank: true },
          { text: " " },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reordered with 誘う",
      },
      {
        segments: [
          { text: "私[わたし]は ルームメイトを" },
          { text: "呼[よ]ばないで", blank: true },
          { text: "、パーティーに" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 呼ぶ in the sense of inviting someone to an event",
      },
    ],
  },
  {
    english: "Yesterday, Yuki slept without locking the apartment door.",
    hint: "Yuki = ゆき",
    answers: [
      {
        segments: [
          { text: "昨日[きのう]、ゆきさんは アパートの ドアの 鍵[かぎ]を" },
          { text: "かけないで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard word order with は and ドアの鍵をかける",
      },
      {
        segments: [
          { text: "ゆきさんは 昨日[きのう]、アパートの ドアの 鍵[かぎ]を" },
          { text: "かけないで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Topic first, then time expression",
      },
      {
        segments: [
          { text: "昨日[きのう]、ゆきさんが アパートの ドアの 鍵[かぎ]を" },
          { text: "かけないで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が instead of は to mark Yuki as the subject",
      },
      {
        segments: [
          { text: "ゆきさんが 昨日[きのう]、アパートの ドアの 鍵[かぎ]を" },
          { text: "かけないで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject with が and time after the subject",
      },
      {
        segments: [
          { text: "昨日[きのう]、ゆきさんは アパートの 鍵[かぎ]を" },
          { text: "かけないで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Shorter object phrase: アパートの鍵をかける",
      },
      {
        segments: [
          { text: "ゆきさんは 昨日[きのう]、アパートの 鍵[かぎ]を" },
          { text: "かけないで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Shorter object phrase with topic first",
      },
      {
        segments: [
          { text: "昨日[きのう]、ゆきさんが アパートの 鍵[かぎ]を" },
          { text: "かけないで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Shorter object phrase with が",
      },
      {
        segments: [
          { text: "ゆきさんが 昨日[きのう]、アパートの 鍵[かぎ]を" },
          { text: "かけないで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Shorter object phrase with が and topic-first order",
      },
      {
        segments: [
          { text: "昨日[きのう]、ゆきさんは アパートの ドアに 鍵[かぎ]を" },
          { text: "かけないで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using ドアに鍵をかける instead of ドアの鍵をかける",
      },
      {
        segments: [
          { text: "ゆきさんは 昨日[きのう]、アパートの ドアに 鍵[かぎ]を" },
          { text: "かけないで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "ドアに鍵をかける with topic first",
      },
      {
        segments: [
          { text: "昨日[きのう]、ゆきさんが アパートの ドアに 鍵[かぎ]を" },
          { text: "かけないで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "ドアに鍵をかける with が",
      },
      {
        segments: [
          { text: "ゆきさんが 昨日[きのう]、アパートの ドアに 鍵[かぎ]を" },
          { text: "かけないで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "ドアに鍵をかける with が and subject-first order",
      },
    ],
  },
  {
    english: "Don't tell anyone; it's a secret.",
    answers: [
      {
        segments: [
          { text: "誰[だれ]にも " },
          { text: "言[い]わないで", blank: true },
          { text: "。秘密[ひみつ]" },
          { text: "です" },
        ],
        notes: "Most direct: 誰にも言わないで for “don’t tell anyone.”",
      },
      {
        segments: [
          { text: "秘密[ひみつ]だから、誰[だれ]にも " },
          { text: "言[い]わないで", blank: true },
        ],
        notes: "Starts with the reason: “Because it’s a secret...”",
      },
      {
        segments: [
          { text: "誰[だれ]にも " },
          { text: "言[い]わないで", blank: true },
          { text: "。これは 秘密[ひみつ]" },
          { text: "です" },
        ],
        notes: "Adds これは to explicitly mark “this is a secret.”",
      },
      {
        segments: [
          { text: "これは 秘密[ひみつ]だから、誰[だれ]にも " },
          { text: "言[い]わないで", blank: true },
        ],
        notes: "Explicit これは plus reason-first order.",
      },
      {
        segments: [
          { text: "誰[だれ]にも " },
          { text: "言[い]わないでください", blank: true },
          { text: "。秘密[ひみつ]" },
          { text: "です" },
        ],
        notes: "Polite request using ないでください; still includes ないで.",
      },
      {
        segments: [
          { text: "秘密[ひみつ]だから、誰[だれ]にも " },
          { text: "言[い]わないでください", blank: true },
        ],
        notes: "Polite request with reason-first order.",
      },
      {
        segments: [
          { text: "誰[だれ]にも " },
          { text: "言[い]わないでください", blank: true },
          { text: "。これは 秘密[ひみつ]" },
          { text: "です" },
        ],
        notes: "Polite request plus explicit これは.",
      },
      {
        segments: [
          { text: "これは 秘密[ひみつ]だから、誰[だれ]にも " },
          { text: "言[い]わないでください", blank: true },
        ],
        notes: "Polite request with explicit topic and reason-first order.",
      },
    ],
  },
  {
    english: "I ate curry without using a spoon.",
    hint: "spoon = スプーン",
    answers: [
      {
        segments: [
          { text: "私[わたし]は スプーンを" },
          { text: "使[つか]わないで", blank: true },
          { text: "、カレーを" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard word order: without using a spoon, ate curry",
      },
      {
        segments: [
          { text: "私[わたし]は カレーを、スプーンを" },
          { text: "使[つか]わないで", blank: true },
          { text: " " },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Object placed first for emphasis on curry",
      },
      {
        segments: [
          { text: "私[わたし]は カレーは スプーンを" },
          { text: "使[つか]わないで", blank: true },
          { text: " " },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using は to topicalize curry",
      },
    ],
  },
  {
    english: "I handed in the report without correcting the mistakes.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は レポートの 間違[まちが]いを" },
          { text: "直[なお]さないで", blank: true },
          { text: "、レポートを" },
          { text: "出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic translation using known vocabulary; specifies the mistakes in the report.",
      },
      {
        segments: [
          { text: "私[わたし]は 間違[まちが]いを" },
          { text: "直[なお]さないで", blank: true },
          { text: "、レポートを" },
          { text: "出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omits 'report's' before mistakes; natural when context makes it clear.",
      },
      {
        segments: [
          { text: "私[わたし]は レポートを" },
          { text: "直[なお]さないで", blank: true },
          { text: "、出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 'without correcting the report' as a concise natural equivalent.",
      },
      {
        segments: [
          { text: "私[わたし]は レポートの 間違[まちが]いを" },
          { text: "直[なお]さないで", blank: true },
          { text: "、出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Avoids repeating レポート; most concise with 'the report's mistakes'.",
      },
      {
        segments: [
          { text: "私[わたし]は 直[なお]しを" },
          { text: "しないで", blank: true },
          { text: "、レポートを" },
          { text: "出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses the noun 直し 'corrections/repair' plus する.",
      },
      {
        segments: [
          { text: "私[わたし]は レポートの 直[なお]しを" },
          { text: "しないで", blank: true },
          { text: "、出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses レポートの直し for 'corrections to the report'.",
      },
      {
        segments: [
          { text: "間違[まちが]いを" },
          { text: "直[なお]さないで", blank: true },
          { text: "、私[わたし]は レポートを" },
          { text: "出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reversed word order, topicalizing the 'without correcting mistakes' clause first.",
      },
      {
        segments: [
          { text: "レポートの 間違[まちが]いを" },
          { text: "直[なお]さないで", blank: true },
          { text: "、私[わたし]は レポートを" },
          { text: "出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Fronts the ないで clause while explicitly saying 'the report's mistakes'.",
      },
      {
        segments: [
          { text: "レポートを" },
          { text: "直[なお]さないで", blank: true },
          { text: "、私[わたし]は レポートを" },
          { text: "出[だ]す", conjugation: { pos: "Godan verb with 'su' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Fronted concise version using 'without correcting the report'.",
      },
    ],
  },
  {
    english: "Yesterday, I went to bed without taking my medicine.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、薬[くすり]を" },
          { text: "飲[の]まないで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard word order with 私は first and 昨日 after the topic",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 薬[くすり]を" },
          { text: "飲[の]まないで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time expression placed at the beginning",
      },
      {
        segments: [
          { text: "昨日[きのう]は、私[わたし]は 薬[くすり]を" },
          { text: "飲[の]まないで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 昨日は to make yesterday the topic/contrast",
      },
      {
        segments: [
          { text: "昨日[きのう]、薬[くすり]を" },
          { text: "飲[の]まないで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Natural pronoun omission",
      },
      {
        segments: [
          { text: "昨日[きのう]は、薬[くすり]を" },
          { text: "飲[の]まないで", blank: true },
          { text: "、" },
          { text: "寝[ね]る", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Pronoun omitted with 昨日は as topic",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、薬[くすり]を" },
          { text: "飲[の]まないで", blank: true },
          { text: "、ベッドに" },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using ベッドに入る for “go to bed”",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は 薬[くすり]を" },
          { text: "飲[の]まないで", blank: true },
          { text: "、ベッドに" },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "ベッドに入る with time expression first",
      },
      {
        segments: [
          { text: "昨日[きのう]、薬[くすり]を" },
          { text: "飲[の]まないで", blank: true },
          { text: "、ベッドに" },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Pronoun omitted with ベッドに入る",
      },
      {
        segments: [
          { text: "昨日[きのう]は、薬[くすり]を" },
          { text: "飲[の]まないで", blank: true },
          { text: "、ベッドに" },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Pronoun omitted and yesterday topicalized with ベッドに入る",
      },
    ],
  },
  {
    english: "I walked to the station without looking at the map.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 地図[ちず]を" },
          { text: "見[み]ないで", blank: true },
          { text: "、駅[えき]まで" },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic sentence with 駅まで歩く",
      },
      {
        segments: [
          { text: "私[わたし]は 地図[ちず]を" },
          { text: "見[み]ないで", blank: true },
          { text: "、歩[ある]いて 駅[えき]まで" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 歩いて行く to express went on foot",
      },
      {
        segments: [
          { text: "私[わたし]は 地図[ちず]を" },
          { text: "見[み]ないで", blank: true },
          { text: "、歩[ある]いて 駅[えき]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "歩いて行く with 駅に destination",
      },
      {
        segments: [
          { text: "私[わたし]は 地図[ちず]を" },
          { text: "見[み]ないで", blank: true },
          { text: "、駅[えき]へ" },
          { text: "歩[ある]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using へ to mark direction toward the station",
      },
      {
        segments: [
          { text: "私[わたし]は 地図[ちず]を" },
          { text: "見[み]ないで", blank: true },
          { text: "、歩[ある]いて 駅[えき]へ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "歩いて行く with へ marking direction",
      },
    ],
  },
  {
    english: "Don't put your smartphone in the refrigerator; that's dangerous.",
    hint: "Use casual form, not polite.",
    answers: [
      {
        segments: [
          { text: "スマホを 冷蔵庫[れいぞうこ]に " },
          { text: "入[い]れないで", blank: true },
          { text: "。危[あぶ]ない" },
        ],
        notes: "Basic word order with スマホを first and casual warning よ",
      },
      {
        segments: [
          { text: "冷蔵庫[れいぞうこ]に スマホを " },
          { text: "入[い]れないで", blank: true },
          { text: "。危[あぶ]ない" },
        ],
        notes: "Reversed object/location order",
      },
      {
        segments: [
          { text: "スマホを 冷蔵庫[れいぞうこ]に " },
          { text: "入[い]れないで", blank: true },
          { text: "。危[あぶ]ない" },
        ],
        notes: "Same basic sentence without sentence-final よ",
      },
      {
        segments: [
          { text: "冷蔵庫[れいぞうこ]に スマホを " },
          { text: "入[い]れないで", blank: true },
          { text: "。危[あぶ]ない" },
        ],
        notes: "Reversed order without sentence-final よ",
      },
      {
        segments: [
          { text: "スマホを 冷蔵庫[れいぞうこ]に " },
          { text: "入[い]れないで", blank: true },
          { text: "。それは 危[あぶ]ない" },
        ],
        notes: "Explicitly adds それは for “that”",
      },
      {
        segments: [
          { text: "冷蔵庫[れいぞうこ]に スマホを " },
          { text: "入[い]れないで", blank: true },
          { text: "。それは 危[あぶ]ない" },
        ],
        notes: "Explicit それは with reversed order",
      },
      {
        segments: [
          { text: "スマホを 冷蔵庫[れいぞうこ]に " },
          { text: "入[い]れないで", blank: true },
          { text: "。それは 危[あぶ]ない" },
        ],
        notes: "Explicit それは without よ",
      },
      {
        segments: [
          { text: "冷蔵庫[れいぞうこ]に スマホを " },
          { text: "入[い]れないで", blank: true },
          { text: "。それは 危[あぶ]ない" },
        ],
        notes: "Explicit それは, reversed order, no よ",
      },
      {
        segments: [
          { text: "スマホを 冷蔵庫[れいぞうこ]の 中[なか]に " },
          { text: "入[い]れないで", blank: true },
          { text: "。危[あぶ]ない" },
        ],
        notes: "Uses 冷蔵庫の中に for “in the refrigerator”",
      },
      {
        segments: [
          { text: "冷蔵庫[れいぞうこ]の 中[なか]に スマホを " },
          { text: "入[い]れないで", blank: true },
          { text: "。危[あぶ]ない" },
        ],
        notes: "冷蔵庫の中に with location first",
      },
      {
        segments: [
          { text: "スマホを 冷蔵庫[れいぞうこ]の 中[なか]に " },
          { text: "入[い]れないで", blank: true },
          { text: "。それは 危[あぶ]ない" },
        ],
        notes: "冷蔵庫の中に plus explicit それは",
      },
      {
        segments: [
          { text: "冷蔵庫[れいぞうこ]の 中[なか]に スマホを " },
          { text: "入[い]れないで", blank: true },
          { text: "。それは 危[あぶ]ない" },
        ],
        notes: "冷蔵庫の中に, explicit それは, location first",
      },
    ],
  },
  {
    english: "Today I went to work without wearing a necktie.",
    hint: "necktie = ネクタイ",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、ネクタイを" },
          { text: "しないで", blank: true },
          { text: "、仕事[しごと]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic translation using 仕事に行く for “went to work”",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、ネクタイを" },
          { text: "しないで", blank: true },
          { text: "、仕事[しごと]へ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using へ instead of に for direction toward work",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、ネクタイを" },
          { text: "しないで", blank: true },
          { text: "、会社[かいしゃ]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 会社に行く as a natural way to say go to work/the office",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、ネクタイを" },
          { text: "しないで", blank: true },
          { text: "、会社[かいしゃ]へ" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 会社へ with directional へ",
      },
      {
        segments: [
          { text: "今日[きょう]は 私[わたし]は ネクタイを" },
          { text: "しないで", blank: true },
          { text: "、仕事[しごと]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Topicalizing today with 今日は",
      },
      {
        segments: [
          { text: "今日[きょう]、私[わたし]は ネクタイを" },
          { text: "しないで", blank: true },
          { text: "、仕事[しごと]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Moving 今日 to the beginning before the subject",
      },
      {
        segments: [
          { text: "今日[きょう]、ネクタイを" },
          { text: "しないで", blank: true },
          { text: "、仕事[しごと]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Dropping the subject after the time expression",
      },
      {
        segments: [
          { text: "今日[きょう]、ネクタイを" },
          { text: "しないで", blank: true },
          { text: "、会社[かいしゃ]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted; using 会社に行く",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、ネクタイを" },
          { text: "締[し]めないで", blank: true },
          { text: "、仕事[しごと]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 締める, the standard verb for putting on/tightening a necktie",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、ネクタイを" },
          { text: "締[し]めないで", blank: true },
          { text: "、会社[かいしゃ]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 締めないで with 会社に行く",
      },
      {
        segments: [
          { text: "今日[きょう]、ネクタイを" },
          { text: "締[し]めないで", blank: true },
          { text: "、仕事[しごと]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted with 締めないで",
      },
      {
        segments: [
          { text: "今日[きょう]、ネクタイを" },
          { text: "締[し]めないで", blank: true },
          { text: "、会社[かいしゃ]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted; 締めないで with 会社",
      },
      {
        segments: [
          { text: "私[わたし]は ネクタイを" },
          { text: "しないで", blank: true },
          { text: "、今日[きょう] 仕事[しごと]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Placing 今日 before the main verb phrase",
      },
      {
        segments: [
          { text: "私[わたし]は ネクタイを" },
          { text: "締[し]めないで", blank: true },
          { text: "、今日[きょう] 仕事[しごと]に" },
          { text: "行[い]く", conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Placing 今日 before 仕事に行く, using 締める",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、ネクタイを" },
          { text: "しないで", blank: true },
          { text: "、" },
          { text: "出勤[しゅっきん]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 出勤する for “go to work/report to work”",
      },
      {
        segments: [
          { text: "今日[きょう]、ネクタイを" },
          { text: "しないで", blank: true },
          { text: "、" },
          { text: "出勤[しゅっきん]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted with 出勤する",
      },
      {
        segments: [
          { text: "私[わたし]は 今日[きょう]、ネクタイを" },
          { text: "締[し]めないで", blank: true },
          { text: "、" },
          { text: "出勤[しゅっきん]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using the more specific ネクタイを締める with 出勤する",
      },
      {
        segments: [
          { text: "今日[きょう]、ネクタイを" },
          { text: "締[し]めないで", blank: true },
          { text: "、" },
          { text: "出勤[しゅっきん]する", conjugation: { pos: "Suru verb - compound word", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted; concise natural phrasing with 出勤する",
      },
    ],
  },
  {
    english: "I bought the sweater without looking at the price.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 値段[ねだん]を" },
          { text: "見[み]ないで", blank: true },
          { text: "、セーターを" },
          { text: "買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic translation with 値段を見ないで before the main action",
      },
      {
        segments: [
          { text: "私[わたし]は セーターを、値段[ねだん]を" },
          { text: "見[み]ないで", blank: true },
          { text: "、" },
          { text: "買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Object placed first, then the without-looking phrase",
      },
      {
        segments: [
          { text: "私[わたし]は セーターの 値段[ねだん]を" },
          { text: "見[み]ないで", blank: true },
          { text: "、セーターを" },
          { text: "買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Specifies 'the sweater's price' explicitly",
      },
      {
        segments: [
          { text: "私[わたし]は セーターを、セーターの 値段[ねだん]を" },
          { text: "見[み]ないで", blank: true },
          { text: "、" },
          { text: "買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Object-first version with explicit 'sweater's price'",
      },
      {
        segments: [
          { text: "私[わたし]は 値段[ねだん]を" },
          { text: "見[み]ないで", blank: true },
          { text: "、その セーターを" },
          { text: "買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses そのセーター for a previously mentioned sweater",
      },
      {
        segments: [
          { text: "私[わたし]は その セーターを、値段[ねだん]を" },
          { text: "見[み]ないで", blank: true },
          { text: "、" },
          { text: "買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Object-first version using そのセーター",
      },
      {
        segments: [
          { text: "私[わたし]は 値段[ねだん]を" },
          { text: "見[み]ないで", blank: true },
          { text: "、この セーターを" },
          { text: "買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses このセーター if referring to this sweater",
      },
      {
        segments: [
          { text: "私[わたし]は この セーターを、値段[ねだん]を" },
          { text: "見[み]ないで", blank: true },
          { text: "、" },
          { text: "買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Object-first version using このセーター",
      },
      {
        segments: [
          { text: "私[わたし]は 値段[ねだん]を" },
          { text: "見[み]ないで", blank: true },
          { text: "、あの セーターを" },
          { text: "買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses あのセーター if referring to that sweater over there",
      },
      {
        segments: [
          { text: "私[わたし]は あの セーターを、値段[ねだん]を" },
          { text: "見[み]ないで", blank: true },
          { text: "、" },
          { text: "買[か]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Object-first version using あのセーター",
      },
    ],
  },
  {
    english: "Yesterday, I took a bath without taking out my contact lenses.",
    hint: "contact lenses = コンタクト",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、コンタクトを" },
          { text: "取[と]らないで", blank: true },
          { text: "、お 風呂[ふろ]に" },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Basic translation using known vocabulary 取る for taking out/removing contact lenses.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は コンタクトを" },
          { text: "取[と]らないで", blank: true },
          { text: "、お 風呂[ふろ]に" },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time expression placed at the beginning of the sentence.",
      },
      {
        segments: [
          { text: "昨日[きのう]、私[わたし]は コンタクトを" },
          { text: "外[はず]さないで", blank: true },
          { text: "、お 風呂[ふろ]に" },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 外す with the time expression at the beginning.",
      },
      {
        segments: [
          { text: "昨日[きのう]、コンタクトを" },
          { text: "取[と]らないで", blank: true },
          { text: "、お 風呂[ふろ]に" },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Natural pronoun omission with the time expression first.",
      },
      {
        segments: [
          { text: "昨日[きのう]、コンタクトを" },
          { text: "外[はず]さないで", blank: true },
          { text: "、お 風呂[ふろ]に" },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Natural pronoun omission using 外す.",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、コンタクトを" },
          { text: "取[と]らないで", blank: true },
          { text: "、風呂[ふろ]に" },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 風呂 instead of お風呂.",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、コンタクトを" },
          { text: "外[はず]さないで", blank: true },
          { text: "、風呂[ふろ]に" },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 外す and 風呂 instead of お風呂.",
      },
      {
        segments: [
          { text: "昨日[きのう]、コンタクトを" },
          { text: "外[はず]さないで", blank: true },
          { text: "、風呂[ふろ]に" },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Pronoun omitted, with 外す and plain 風呂.",
      },
      {
        segments: [
          { text: "昨日[きのう]、コンタクトを" },
          { text: "取[と]らないで", blank: true },
          { text: "、風呂[ふろ]に" },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Pronoun omitted, using 取る and plain 風呂.",
      },
      {
        segments: [
          { text: "私[わたし]は 昨日[きのう]、コンタクトを" },
          { text: "外[はず]さないで", blank: true },
          { text: "、お 風呂[ふろ]に" },
          { text: "入[はい]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Uses 外す, the most natural verb for removing contact lenses; corrected 入る verb class.",
      },
    ],
  },
  {
    english: "I made coffee without boiling the water.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は お湯[ゆ]を" },
          { text: "沸[わ]かさないで", blank: true },
          { text: "、コーヒーを" },
          { text: "入[い]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Standard translation using idiomatic お湯を沸かす and コーヒーを入れる",
      },
      {
        segments: [
          { text: "私[わたし]は 水[みず]を" },
          { text: "沸[わ]かさないで", blank: true },
          { text: "、コーヒーを" },
          { text: "入[い]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 水を沸かす for “boil the water”",
      },
      {
        segments: [
          { text: "私[わたし]は お湯[ゆ]を" },
          { text: "沸[わ]かさないで", blank: true },
          { text: "、コーヒーを" },
          { text: "作[つく]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 作る for “make coffee”",
      },
      {
        segments: [
          { text: "私[わたし]は 水[みず]を" },
          { text: "沸[わ]かさないで", blank: true },
          { text: "、コーヒーを" },
          { text: "作[つく]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 水 and 作る",
      },
      {
        segments: [
          { text: "私[わたし]は コーヒーを、お湯[ゆ]を" },
          { text: "沸[わ]かさないで", blank: true },
          { text: "、" },
          { text: "入[い]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reordered to put コーヒーを first",
      },
      {
        segments: [
          { text: "私[わたし]は コーヒーを、水[みず]を" },
          { text: "沸[わ]かさないで", blank: true },
          { text: "、" },
          { text: "入[い]れる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reordered with 水を沸かす",
      },
      {
        segments: [
          { text: "私[わたし]は コーヒーを、お湯[ゆ]を" },
          { text: "沸[わ]かさないで", blank: true },
          { text: "、" },
          { text: "作[つく]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reordered with 作る",
      },
      {
        segments: [
          { text: "私[わたし]は コーヒーを、水[みず]を" },
          { text: "沸[わ]かさないで", blank: true },
          { text: "、" },
          { text: "作[つく]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Reordered using 水 and 作る",
      },
    ],
  },
];
