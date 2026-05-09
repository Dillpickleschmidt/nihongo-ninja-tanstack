import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "Let's swim in the sea tomorrow!",
    answers: [
      {
        segments: [
          { text: "明日[あした]、海[うみ]で" },
          { text: "泳[およ]ぐ", blank: true, conjugation: { pos: "Godan verb with 'gu' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "明日[あした]、海[うみ]を" },
          { text: "泳[およ]ぐ", blank: true, conjugation: { pos: "Godan verb with 'gu' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "を instead of で — を is also natural with 泳ぐ (swim through/across the water body)",
      },
      {
        segments: [
          { text: "明日[あした]は、海[うみ]で" },
          { text: "泳[およ]ぐ", blank: true, conjugation: { pos: "Godan verb with 'gu' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "明日は — は marks tomorrow as the topic, with で",
      },
      {
        segments: [
          { text: "明日[あした]は、海[うみ]を" },
          { text: "泳[およ]ぐ", blank: true, conjugation: { pos: "Godan verb with 'gu' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "明日は + を particle combination",
      },
      {
        segments: [
          { text: "明日[あした]、海[うみ]に泳[およ]ぎに" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "海に泳ぎに行こう — \"let's go to the sea to swim\", natural in Japanese",
      },
      {
        segments: [
          { text: "明日[あした]、海[うみ]で一緒[いっしょ]に" },
          { text: "泳[およ]ぐ", blank: true, conjugation: { pos: "Godan verb with 'gu' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "一緒に added — \"let's swim together in the sea\"",
      },
      {
        segments: [
          { text: "明日[あした] 海[うみ]で" },
          { text: "泳[およ]ぐ", blank: true, conjugation: { pos: "Godan verb with 'gu' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Without comma after 明日",
      },
    ],
  },
  {
    english: "I'm going to try making curry tonight!",
    answers: [
      {
        segments: [
          { text: "今夜[こんや]、カレーを" },
          { text: "作[つく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Volitional of 作る (Godan): 作ろう. Expressing personal intention to make curry tonight.",
      },
      {
        segments: [
          { text: "今晩[こんばん]、カレーを" },
          { text: "作[つく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今晩 instead of 今夜 for \"tonight\".",
      },
      {
        segments: [
          { text: "今夜[こんや]、カレーを料理[りょうり]" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "料理しよう: volitional of 料理する (to cook), a synonym for 作る in this context.",
      },
      {
        segments: [
          { text: "今晩[こんばん]、カレーを料理[りょうり]" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今晩 + 料理しよう variation.",
      },
      {
        segments: [
          { text: "カレーを今夜[こんや]" },
          { text: "作[つく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Object-first word order: カレーを today, then time word 今夜.",
      },
    ],
  },
  {
    english: "I'm going to walk to the station today!",
    answers: [
      {
        segments: [
          { text: "今日[きょう]、駅[えき]まで" },
          { text: "歩[ある]く", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "！" },
        ],
      },
      {
        segments: [
          { text: "今日[きょう]は、駅[えき]まで" },
          { text: "歩[ある]く", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "！" },
        ],
        notes: "Adding は after 今日 for topic marking emphasis",
      },
      {
        segments: [
          { text: "今日[きょう]、駅[えき]へ" },
          { text: "歩[ある]く", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "！" },
        ],
        notes: "Using へ (toward the station) instead of まで",
      },
      {
        segments: [
          { text: "今日[きょう]は、駅[えき]へ" },
          { text: "歩[ある]く", blank: true, conjugation: { pos: "Godan verb with 'ku' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "！" },
        ],
      },
    ],
  },
  {
    english: "Let's read manga together this weekend!",
    answers: [
      {
        segments: [
          { text: "週末[しゅうまつ]、一緒[いっしょ]に 漫画[まんが]を" },
          { text: "読[よ]む", blank: true, conjugation: { pos: "Godan verb with 'mu' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "週末[しゅうまつ]は、一緒[いっしょ]に 漫画[まんが]を" },
          { text: "読[よ]む", blank: true, conjugation: { pos: "Godan verb with 'mu' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adding は after 週末 for topic marking",
      },
      {
        segments: [
          { text: "一緒[いっしょ]に週末[しゅうまつ]、漫画[まんが]を" },
          { text: "読[よ]む", blank: true, conjugation: { pos: "Godan verb with 'mu' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "一緒に fronted before 週末",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]は、漫画[まんが]を一緒[いっしょ]に" },
          { text: "読[よ]む", blank: true, conjugation: { pos: "Godan verb with 'mu' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "一緒に placed after 漫画を (before the verb)",
      },
      {
        segments: [
          { text: "週末[しゅうまつ]に一緒[いっしょ]に 漫画[まんが]を" },
          { text: "読[よ]む", blank: true, conjugation: { pos: "Godan verb with 'mu' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "週末に with に particle instead of no particle/は",
      },
    ],
  },
  {
    english: "After the exam, let's all go to karaoke tonight!",
    answers: [
      {
        segments: [
          { text: "試験[しけん]の 後[あと]で、今夜[こんや]、カラオケを" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]で、今夜[こんや]、カラオケで" },
          { text: "歌[うた]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]で、今晩[こんばん]、カラオケを" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 今晩 instead of 今夜 for \"tonight\"",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]で、今晩[こんばん]、カラオケで" },
          { text: "歌[うた]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今晩 + 歌おう at karaoke variation",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]で、今夜[こんや]、カラオケに" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Let's go to karaoke tonight — カラオケに行こう/行きましょう",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]で、今晩[こんばん]、カラオケに" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今晩 + カラオケに行こう variation",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]で、今夜[こんや]、一緒[いっしょ]にカラオケを" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adding 一緒に (together) — let's do karaoke together tonight",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]で、今夜[こんや]、一緒[いっしょ]にカラオケで" },
          { text: "歌[うた]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "一緒に + 歌おう at karaoke tonight",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]で、今夜[こんや]、一緒[いっしょ]にカラオケに" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "一緒に + カラオケに行こう tonight",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]で、今夜[こんや]、みんなでカラオケを" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "みんなで (all together) + しよう",
      },
      {
        segments: [
          { text: "試験[しけん]の 後[あと]で、今夜[こんや]、みんなでカラオケで" },
          { text: "歌[うた]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "みんなで + 歌おう at karaoke tonight",
      },
    ],
  },
  {
    english: "Let's go to the park this Sunday!",
    answers: [
      {
        segments: [
          { text: "今週[こんしゅう]の 日曜日[にちようび]、公園[こうえん]に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "今週[こんしゅう]の 日曜日[にちようび]、公園[こうえん]へ" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "へ instead of に for destination particle",
      },
      {
        segments: [
          { text: "この 日曜日[にちようび]、公園[こうえん]に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "この日曜日 instead of 今週の日曜日 for \"this Sunday\", に for destination",
      },
      {
        segments: [
          { text: "この 日曜日[にちようび]、公園[こうえん]へ" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "この日曜日 + へ particle",
      },
      {
        segments: [
          { text: "日曜日[にちようび]は 公園[こうえん]に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "日曜日は as the topic, に particle — natural casual phrasing",
      },
      {
        segments: [
          { text: "日曜日[にちようび]は 公園[こうえん]へ" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "日曜日は as the topic, へ particle",
      },
    ],
  },
  {
    english: "I'm going to buy a new camera tomorrow!",
    answers: [
      {
        segments: [
          { text: "明日[あした]、新[あたら]しい カメラを" },
          { text: "買[か]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "新[あたら]しい カメラを、明日[あした]" },
          { text: "買[か]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Object-first word order: カメラを先に、明日 moved after",
      },
      {
        segments: [
          { text: "明日[あした]は新[あたら]しい カメラを" },
          { text: "買[か]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "明日は instead of 明日、 - topicalizing the time",
      },
      {
        segments: [
          { text: "明日[あした]、新[あたら]しい カメラを、絶対[ぜったい]" },
          { text: "買[か]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Added 絶対 (definitely/absolutely) for emphasis",
      },
      {
        segments: [
          { text: "明日[あした]、絶対[ぜったい]に新[あたら]しい カメラを" },
          { text: "買[か]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "絶対に (with に) placed before the object for emphasis",
      },
      {
        segments: [
          { text: "明日[あした]、新[あたら]しい カメラをぜひ" },
          { text: "買[か]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Added ぜひ (by all means) for stronger intention",
      },
      {
        segments: [
          { text: "明日[あした]、新[あたら]しい カメラをデパートで" },
          { text: "買[か]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Added デパートで (at a department store) as location",
      },
      {
        segments: [
          { text: "明日[あした]、新[あたら]しい カメラをお店[みせ]で" },
          { text: "買[か]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "お店で (at a shop) as the location",
      },
    ],
  },
  {
    english: "I'm going to take a lot of photos at the festival!",
    answers: [
      {
        segments: [
          { text: "お 祭[まつ]りで 多[おお]くの 写真[しゃしん]を" },
          { text: "撮[と]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "祭[まつ]りで 多[おお]くの 写真[しゃしん]を" },
          { text: "撮[と]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 祭り instead of お祭り (without honorific お), with 多くの for a lot of",
      },
      {
        segments: [
          { text: "お 祭[まつ]りで 写真[しゃしん]を いっぱい" },
          { text: "撮[と]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using いっぱい instead of たくさん, placed after 写真を",
      },
      {
        segments: [
          { text: "お 祭[まつ]りで いっぱい 写真[しゃしん]を" },
          { text: "撮[と]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "いっぱい before 写真を",
      },
      {
        segments: [
          { text: "祭[まつ]りで いっぱい 写真[しゃしん]を" },
          { text: "撮[と]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "祭り (no honorific) + いっぱい before 写真を",
      },
    ],
  },
  {
    english: "I'm going to quit my part-time job next week!",
    answers: [
      {
        segments: [
          { text: "来週[らいしゅう]、アルバイトを" },
          { text: "やめる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "来週[らいしゅう]、バイトを" },
          { text: "やめる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using casual abbreviation バイト instead of アルバイト",
      },
      {
        segments: [
          { text: "私[わたし]は 来週[らいしゅう]、アルバイトを" },
          { text: "やめる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit subject 私は added for emphasis",
      },
      {
        segments: [
          { text: "私[わたし]は 来週[らいしゅう]、バイトを" },
          { text: "やめる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私は with casual バイト",
      },
      {
        segments: [
          { text: "来週[らいしゅう]には アルバイトを" },
          { text: "やめる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "来週[らいしゅう]には バイトを" },
          { text: "やめる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "には with casual バイト",
      },
    ],
  },
  {
    english: "Shall I drive to the airport?",
    answers: [
      {
        segments: [
          { text: "空港[くうこう]まで 運転[うんてん]" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - special class", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "空港[くうこう]まで 私[わたし]が 運転[うんてん]" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - special class", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Emphasizing \"I\" with が particle",
      },
      {
        segments: [
          { text: "車[くるま]で 空港[くうこう]まで 運転[うんてん]" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - special class", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Adding 車で (by car) for extra specificity",
      },
      {
        segments: [
          { text: "空港[くうこう]に 運転[うんてん]" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - special class", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using に instead of まで for destination",
      },
      {
        segments: [
          { text: "私[わたし]が 空港[くうこう]まで 車[くるま]で 運転[うんてん]" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - special class", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "With 私が + 車で, emphasizing the subject and means of transport",
      },
    ],
  },
  {
    english: "Shall I look into cheap flights to Italy?",
    answers: [
      {
        segments: [
          { text: "イタリア 行[ゆ]きの 安[やす]い 飛行機[ひこうき]を" },
          { text: "調[しら]べる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "イタリアへの 安[やす]い 飛行機[ひこうき]を" },
          { text: "調[しら]べる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using イタリアへの instead of イタリア行きの",
      },
      {
        segments: [
          { text: "イタリア 行[ゆ]きの 安[やす]い 航空券[こうくうけん]を" },
          { text: "調[しら]べる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using 航空券 (airline ticket) instead of 飛行機",
      },
      {
        segments: [
          { text: "イタリアへの 安[やす]い 航空券[こうくうけん]を" },
          { text: "調[しら]べる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "イタリア 行[ゆ]きの 安[やす]い 飛行機[ひこうき]の チケットを" },
          { text: "調[しら]べる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "イタリア 行[ゆ]きの 飛行機[ひこうき]で 安[やす]いのを" },
          { text: "調[しら]べる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Rephrased as \"look into cheap ones among flights to Italy\" using nominalization の",
      },
      {
        segments: [
          { text: "イタリア 行[ゆ]きの 安[やす]い 飛行機[ひこうき]、" },
          { text: "調[しら]べる", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Dropping を particle before 調べよう (casual particle drop)",
      },
    ],
  },
  {
    english: "I'm going to order the tonkatsu!",
    answers: [
      {
        segments: [
          { text: "とんかつを" },
          { text: "注文[ちゅうもん]する", blank: true, conjugation: { pos: "Suru verb - compound word", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "とんかつに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "とんかつを" },
          { text: "たのむ", blank: true, conjugation: { pos: "Godan verb with 'mu' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は とんかつを" },
          { text: "注文[ちゅうもん]する", blank: true, conjugation: { pos: "Suru verb - compound word", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "With 私は for emphasis — \"As for me, I'll order the tonkatsu!\"",
      },
      {
        segments: [
          { text: "私[わたし]は とんかつに" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "With 私は + にしよう — emphatic \"I'll go with the tonkatsu!\"",
      },
      {
        segments: [
          { text: "私[わたし]は とんかつを" },
          { text: "たのむ", blank: true, conjugation: { pos: "Godan verb with 'mu' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "With 私は + たのもう — emphatic \"I'll order the tonkatsu!\"",
      },
      {
        segments: [
          { text: "私[わたし]が とんかつを" },
          { text: "注文[ちゅうもん]する", blank: true, conjugation: { pos: "Suru verb - compound word", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は — slightly more emphatic \"I (specifically) will order the tonkatsu\"",
      },
    ],
  },
  {
    english: "Shall I help with the homework?",
    answers: [
      {
        segments: [
          { text: "宿題[しゅくだい]を" },
          { text: "手伝[てつだ]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "宿題[しゅくだい]、" },
          { text: "手伝[てつだ]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        register: "casual",
        notes: "Casual particle drop: 宿題、手伝おうか — topic set without を",
      },
      {
        segments: [
          { text: "宿題[しゅくだい]の手伝[てつだ]いを" },
          { text: "する", blank: true, conjugation: { pos: "Suru verb - special class", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "私[わたし]が宿題[しゅくだい]を" },
          { text: "手伝[てつだ]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Explicit 私が emphasizes that I would be the one helping.",
      },
    ],
  },
  {
    english: "Let's all climb Mount Fuji together this summer!",
    hint: "Mount Fuji = 富士山 (ふじさん)",
    answers: [
      {
        segments: [
          { text: "この 夏[なつ]、みんなで 富士山に" },
          { text: "登[のぼ]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "この 夏[なつ]、 一緒[いっしょ]に 富士山に" },
          { text: "登[のぼ]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 一緒に instead of みんなで",
      },
      {
        segments: [
          { text: "この 夏[なつ]、みんなで 一緒[いっしょ]に 富士山に" },
          { text: "登[のぼ]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "今年[ことし]の 夏[なつ]、みんなで 富士山に" },
          { text: "登[のぼ]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 今年の夏 instead of この夏",
      },
      {
        segments: [
          { text: "富士山に、この 夏[なつ]みんなで" },
          { text: "登[のぼ]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "富士山 fronted as topic, then この夏、みんなで",
      },
    ],
  },
  {
    english: "Let's grab drinks after work tonight!",
    answers: [
      {
        segments: [
          { text: "今夜[こんや]、仕事[しごと]の 後[あと]で お 酒[さけ]を 飲[の]み に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Core answer: 飲みに行こう — let's go for drinks after work tonight. 仕事の後で, with お酒を.",
      },
      {
        segments: [
          { text: "今夜[こんや]、仕事[しごと]の 後[あと]で お 酒[さけ]を" },
          { text: "飲[の]む", blank: true, conjugation: { pos: "Godan verb with 'mu' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "飲もう — let's drink (without 飲みに行く). More direct: let's have drinks. 仕事の後で, today is 今夜.",
      },
      {
        segments: [
          { text: "今晩[こんばん]、仕事[しごと]の 後[あと]で お 酒[さけ]を 飲[の]み に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今晩 instead of 今夜, otherwise same as first variation. 飲みに行こう + お酒を.",
      },
      {
        segments: [
          { text: "今晩[こんばん]、仕事[しごと]の 後[あと]で お 酒[さけ]を" },
          { text: "飲[の]む", blank: true, conjugation: { pos: "Godan verb with 'mu' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今晩 + 飲もう — let's drink, without 飲みに行く. 仕事の後で.",
      },
      {
        segments: [
          { text: "今夜[こんや]、仕事[しごと]の 後[あと]に お 酒[さけ]を 飲[の]み に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "後に instead of 後で — both are natural for \"after work\". 今夜 + お酒を飲みに行こう.",
      },
      {
        segments: [
          { text: "今夜[こんや]、仕事[しごと]の 後[あと]に お 酒[さけ]を" },
          { text: "飲[の]む", blank: true, conjugation: { pos: "Godan verb with 'mu' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "後に + 飲もう. 今夜.",
      },
      {
        segments: [
          { text: "今晩[こんばん]、仕事[しごと]の 後[あと]に お 酒[さけ]を 飲[の]み に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今晩 + 後に + お酒を飲みに行こう.",
      },
      {
        segments: [
          { text: "今晩[こんばん]、仕事[しごと]の 後[あと]に お 酒[さけ]を" },
          { text: "飲[の]む", blank: true, conjugation: { pos: "Godan verb with 'mu' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今晩 + 後に + 飲もう.",
      },
      {
        segments: [
          { text: "今夜[こんや]、仕事[しごと]の 後[あと]で 飲[の]み に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "飲みに行こう without お酒を — \"let's go for drinks\" is very natural in Japanese without explicitly saying お酒. 今夜 + 後で.",
      },
      {
        segments: [
          { text: "今晩[こんばん]、仕事[しごと]の 後[あと]で 飲[の]み に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今晩 + 後で + 飲みに行こう without お酒を.",
      },
      {
        segments: [
          { text: "今夜[こんや]、仕事[しごと]の 後[あと]に 飲[の]み に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今夜 + 後に + 飲みに行こう without お酒を.",
      },
      {
        segments: [
          { text: "今晩[こんばん]、仕事[しごと]の 後[あと]に 飲[の]み に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今晩 + 後に + 飲みに行こう without お酒を.",
      },
      {
        segments: [
          { text: "今夜[こんや]、仕事[しごと]終わり[おわり]に 飲[の]み に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "仕事終わりに — very natural colloquial \"after finishing work\". 今夜 + 飲みに行こう without お酒を.",
      },
      {
        segments: [
          { text: "今夜[こんや]、仕事[しごと]終わり[おわり]に お 酒[さけ]を 飲[の]み に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "仕事終わりに + お酒を飲みに行こう. 今夜.",
      },
      {
        segments: [
          { text: "今晩[こんばん]、仕事[しごと]終わり[おわり]に 飲[の]み に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今晩 + 仕事終わりに + 飲みに行こう without お酒を.",
      },
      {
        segments: [
          { text: "今晩[こんばん]、仕事[しごと]終わり[おわり]に お 酒[さけ]を 飲[の]み に" },
          { text: "行[い]く", blank: true, conjugation: { pos: "Godan verb - Iku/Yuku special class", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今晩 + 仕事終わりに + お酒を飲みに行こう.",
      },
    ],
  },
  {
    english: "Let's watch a horror movie tonight!",
    hint: "horror = ホラー",
    answers: [
      {
        segments: [
          { text: "今夜[こんや]、ホラー 映画[えいが]を" },
          { text: "見[み]る", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "今晩[こんばん]、ホラー 映画[えいが]を" },
          { text: "見[み]る", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今晩 instead of 今夜 for \"tonight\"",
      },
      {
        segments: [
          { text: "今夜[こんや]、一緒[いっしょ]に ホラー 映画[えいが]を" },
          { text: "見[み]る", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adding 一緒に for emphasis on \"let's (together)\"",
      },
      {
        segments: [
          { text: "今晩[こんばん]、一緒[いっしょ]に ホラー 映画[えいが]を" },
          { text: "見[み]る", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今晩 + 一緒に",
      },
      {
        segments: [
          { text: "今夜[こんや]、ホラーの 映画[えいが]を" },
          { text: "見[み]る", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ホラーの映画 — using の to connect ホラー and 映画",
      },
      {
        segments: [
          { text: "今夜[こんや]、ホラーを" },
          { text: "見[み]る", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Dropping 映画 — ホラーを見よう is natural shorthand for the genre",
      },
      {
        segments: [
          { text: "今晩[こんばん]、ホラーを" },
          { text: "見[み]る", blank: true, conjugation: { pos: "Ichidan verb", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "今晩 + ホラーを見よう (no 映画)",
      },
    ],
  },
  {
    english: "Shall I send the map to Kaede on LINE?",
    hint: "Kaede = 楓 (かえで); LINE = ライン",
    answers: [
      {
        segments: [
          { text: "LINEで 地図[ちず]を 楓[かえで]さんに" },
          { text: "送[おく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "LINEで 楓[かえで]さんに 地図[ちず]を" },
          { text: "送[おく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Reversed word order: LINEで plus recipient first, then object",
      },
      {
        segments: [
          { text: "LINEで 地図[ちず]を 楓[かえで]さんへ" },
          { text: "送[おく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Using へ instead of に for the recipient",
      },
      {
        segments: [
          { text: "LINEで 楓[かえで]さんへ 地図[ちず]を" },
          { text: "送[おく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Recipient with へ placed first, then object",
      },
      {
        segments: [
          { text: "私[わたし]が LINEで 地図[ちず]を 楓[かえで]さんに" },
          { text: "送[おく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Explicit subject 私が, emphasizing \"shall I (be the one to) send\"; LINEで plus object first, recipient with に",
      },
      {
        segments: [
          { text: "私[わたし]が LINEで 楓[かえで]さんに 地図[ちず]を" },
          { text: "送[おく]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Explicit 私が, LINEで plus recipient with に placed before object",
      },
    ],
  },
  {
    english: "Shall I turn off the air conditioner?",
    answers: [
      {
        segments: [
          { text: "エアコンを" },
          { text: "消[け]す", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
      {
        segments: [
          { text: "私[わたし]が エアコンを" },
          { text: "消[け]す", blank: true, conjugation: { pos: "Godan verb with 'su' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Explicit 私が emphasizes that I would be the one turning it off.",
      },
      {
        segments: [
          { text: "エアコンを" },
          { text: "切[き]る", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
      },
    ],
  },
  {
    english: "Let's use cash today — I don't have my credit card!",
    answers: [
      {
        segments: [
          { text: "クレジットカードがないから、今日[きょう]は 現金[げんきん]を" },
          { text: "使[つか]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reason-first order (natural Japanese): クレジットカードがないから leads into the suggestion. Volitional 使おう written explicitly.",
      },
      {
        segments: [
          { text: "今日[きょう]は 現金[げんきん]を" },
          { text: "使[つか]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "—クレジットカードがない" },
        ],
        notes: "Suggestion-first order matching English structure: 今日は現金を使おう — クレジットカードがない",
      },
      {
        segments: [
          { text: "クレジットカードを 持[も]っていないから、今日[きょう]は 現金[げんきん]を" },
          { text: "使[つか]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 持っていないから instead of がないから — \"I'm not carrying my credit card\"",
      },
      {
        segments: [
          { text: "今日[きょう]は クレジットカードがないから、現金[げんきん]で" },
          { text: "払[はら]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 払う (to pay) instead of 使う, with 現金で (with cash) construction",
      },
      {
        segments: [
          { text: "今日[きょう]は 現金[げんきん]で" },
          { text: "払[はら]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "—クレジットカードがないから" },
        ],
        notes: "現金で払おう with reason after (suggestion first, matching English order)",
      },
      {
        segments: [
          { text: "クレジットカードがないから、今日[きょう]は 現金[げんきん]で" },
          { text: "払[はら]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "現金で払おう, reason-first order",
      },
      {
        segments: [
          { text: "今日[きょう]は 現金[げんきん]を" },
          { text: "使[つか]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "—クレジットカードを 持[も]っていない" },
        ],
        notes: "Suggestion-first with 持っていない for \"don't have (on me)\"",
      },
      {
        segments: [
          { text: "クレジットカードがないので、今日[きょう]は 現金[げんきん]を" },
          { text: "使[つか]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ので instead of から to express reason (slightly more formal/indirect)",
      },
      {
        segments: [
          { text: "クレジットカードがないので、今日[きょう]は 現金[げんきん]で" },
          { text: "払[はら]う", blank: true, conjugation: { pos: "Godan verb with 'u' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
        ],
        notes: "現金で払おう with ので for reason",
      },
    ],
  },
  {
    english: "Let's stay at a hot spring inn this winter!",
    answers: [
      {
        segments: [
          { text: "この 冬[ふゆ]、温泉[おんせん] 旅館[りょかん]に" },
          { text: "泊[と]まる", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "！" },
        ],
      },
      {
        segments: [
          { text: "今年[ことし]の 冬[ふゆ]、温泉[おんせん] 旅館[りょかん]に" },
          { text: "泊[と]まる", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "！" },
        ],
        notes: "今年の冬 = \"this year's winter\" as an alternative to この冬",
      },
      {
        segments: [
          { text: "この 冬[ふゆ]は、温泉[おんせん] 旅館[りょかん]に" },
          { text: "泊[と]まる", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "！" },
        ],
        notes: "この冬は with は for emphasis/contrast",
      },
      {
        segments: [
          { text: "今年[ことし]の 冬[ふゆ]は、温泉[おんせん] 旅館[りょかん]に" },
          { text: "泊[と]まる", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "！" },
        ],
        notes: "今年の冬は — combining 今年の冬 with は",
      },
      {
        segments: [
          { text: "この 冬[ふゆ]、温泉[おんせん]の 旅館[りょかん]に" },
          { text: "泊[と]まる", blank: true, conjugation: { pos: "Godan verb with 'ru' ending", form: "volitional", polarity: "positive", tense: "non-past" } },
          { text: "！" },
        ],
        notes: "温泉の旅館 — \"inn of/at a hot spring\" as alternative phrasing",
      },
    ],
  },
];
