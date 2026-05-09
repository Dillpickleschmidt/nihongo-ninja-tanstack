import type { Question } from "../types";

export const questions: Question[] = [
  {
    english: "That robot flies through the sky like a bird.",
    answers: [
      {
        segments: [
          { text: "あの ロボットは " },
          { text: "鳥[とり]のように", blank: true },
          { text: " 空[そら]を " },
          { text: "飛[と]ぶ", conjugation: { pos: "Godan verb with 'bu' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "あの refers to something distant from both speaker and listener; は marks it as the topic.",
      },
      {
        segments: [
          { text: "あの ロボットが " },
          { text: "鳥[とり]のように", blank: true },
          { text: " 空[そら]を " },
          { text: "飛[と]ぶ", conjugation: { pos: "Godan verb with 'bu' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to mark the robot as the subject/focus.",
      },
      {
        segments: [
          { text: "あの ロボットは 空[そら]を " },
          { text: "鳥[とり]のように", blank: true },
          { text: " " },
          { text: "飛[と]ぶ", conjugation: { pos: "Godan verb with 'bu' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adverbial phrase placed immediately before the verb.",
      },
      {
        segments: [
          { text: "あの ロボットが 空[そら]を " },
          { text: "鳥[とり]のように", blank: true },
          { text: " " },
          { text: "飛[と]ぶ", conjugation: { pos: "Godan verb with 'bu' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が, with the comparison phrase closer to the verb.",
      },
    ],
  },
  {
    english: "During the presentation, please speak like a teacher.",
    answers: [
      {
        segments: [
          { text: "発表[はっぴょう]中[ちゅう]に、先生[せんせい]" },
          { text: "のように", blank: true },
          { text: "話[はな]してください" },
        ],
        notes: "発表中に means “during the presentation”; 先生のように means “like the teacher.”",
      },
      {
        segments: [
          { text: "発表[はっぴょう]中[ちゅう]は、先生[せんせい]" },
          { text: "のように", blank: true },
          { text: "話[はな]してください" },
        ],
        notes: "Using は to mark the presentation period as the topic",
      },
      {
        segments: [
          { text: "発表[はっぴょう]中[ちゅう]、先生[せんせい]" },
          { text: "のように", blank: true },
          { text: "話[はな]してください" },
        ],
        notes: "Dropping に after 発表中 for a natural adverbial phrase",
      },
      {
        segments: [
          { text: "発表[はっぴょう]の 時[とき]に、先生[せんせい]" },
          { text: "のように", blank: true },
          { text: "話[はな]してください" },
        ],
        notes: "Using 発表の時に for 'during/at the time of the presentation'",
      },
      {
        segments: [
          { text: "発表[はっぴょう]の 時[とき]は、先生[せんせい]" },
          { text: "のように", blank: true },
          { text: "話[はな]してください" },
        ],
        notes: "Using 発表の時は as a topical time phrase",
      },
      {
        segments: [
          { text: "発表[はっぴょう]している 間[あいだ]は、先生[せんせい]" },
          { text: "のように", blank: true },
          { text: "話[はな]してください" },
        ],
        notes: "Using 発表している間は for 'while giving the presentation'",
      },
      {
        segments: [
          { text: "発表[はっぴょう]している 間[あいだ]に、先生[せんせい]" },
          { text: "のように", blank: true },
          { text: "話[はな]してください" },
        ],
        notes: "Using 間に to mark the time during the presentation",
      },
      {
        segments: [
          { text: "発表[はっぴょう]中[ちゅう]に、教師[きょうし]" },
          { text: "のように", blank: true },
          { text: "話[はな]してください" },
        ],
        notes: "Using 教師 instead of 先生 for 'teacher' as a profession",
      },
      {
        segments: [
          { text: "発表[はっぴょう]中[ちゅう]は、教師[きょうし]" },
          { text: "のように", blank: true },
          { text: "話[はな]してください" },
        ],
        notes: "Using 教師 with topical 発表中は",
      },
      {
        segments: [
          { text: "発表[はっぴょう]中[ちゅう]に、先生[せんせい]" },
          { text: "のような", blank: true },
          { text: "話[はな]し 方[かた]で 話[はな]してください" },
        ],
        notes: "Using のような with the noun 話し方",
      },
      {
        segments: [
          { text: "発表[はっぴょう]中[ちゅう]は、先生[せんせい]" },
          { text: "のような", blank: true },
          { text: "話[はな]し 方[かた]で 話[はな]してください" },
        ],
        notes: "Using のような話し方 with 発表中は",
      },
      {
        segments: [
          { text: "発表[はっぴょう]中[ちゅう]に、教師[きょうし]" },
          { text: "のような", blank: true },
          { text: "話[はな]し 方[かた]で 話[はな]してください" },
        ],
        notes: "Using 教師のような話し方",
      },
      {
        segments: [
          { text: "発表[はっぴょう]の 時[とき]に、先生[せんせい]" },
          { text: "のような", blank: true },
          { text: "話[はな]し 方[かた]で 話[はな]してください" },
        ],
        notes: "Using のような with 発表の時に",
      },
      {
        segments: [
          { text: "発表[はっぴょう]中[ちゅう]に、先生[せんせい]" },
          { text: "のように", blank: true },
          { text: "上手[じょうず]に 話[はな]してください" },
        ],
        notes: "Adding 上手に to imply speaking skillfully like a teacher",
      },
      {
        segments: [
          { text: "発表[はっぴょう]中[ちゅう]は、先生[せんせい]" },
          { text: "のように", blank: true },
          { text: "上手[じょうず]に 話[はな]してください" },
        ],
        notes: "Using 上手に with topical 発表中は",
      },
    ],
  },
  {
    english: "I want a quiet room like a library.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 図書館[としょかん]" },
          { text: "のような", blank: true },
          { text: " 静[しず]かな 部屋[へや]が " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "のような modifies the noun 部屋.",
      },
      {
        segments: [
          { text: "私[わたし]は 静[しず]かな、図書館[としょかん]" },
          { text: "のような", blank: true },
          { text: " 部屋[へや]が " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Places 静かな before the comparison phrase; means a quiet, library-like room",
      },
      {
        segments: [
          { text: "私[わたし]は 図書館[としょかん]" },
          { text: "のように", blank: true },
          { text: " 静[しず]かな 部屋[へや]が " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses のように adverbially with 静かな: quiet like a library",
      },
      {
        segments: [
          { text: "私[わたし]は 図書館[としょかん]" },
          { text: "のように", blank: true },
          { text: " 静[しず]かな 部屋[へや]を " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses を with 欲しい; common in casual/natural speech though が is standard",
      },
      {
        segments: [
          { text: "私[わたし]は 図書館[としょかん]" },
          { text: "のような", blank: true },
          { text: " 部屋[へや]が " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Leaves 静かな implicit in the comparison to a library; natural but slightly less explicit",
      },
      {
        segments: [
          { text: "私[わたし]は 図書館[としょかん]" },
          { text: "のような", blank: true },
          { text: " 静[しず]かな 部屋[へや]を " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Same direct wording but uses を with 欲しい",
      },
    ],
  },
  {
    english: "This room is as dark as night.",
    hint: "Use the more formal comparison, not the casual one.",
    answers: [
      {
        segments: [
          { text: "この 部屋[へや]は " },
          { text: "夜[よる]のように", blank: true },
          { text: " 暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "のように modifies the adjective 暗い.",
      },
      {
        segments: [
          { text: "この 部屋[へや]が " },
          { text: "夜[よる]のように", blank: true },
          { text: " 暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は to emphasize this room as the subject",
      },
      {
        segments: [
          { text: "この 部屋[へや]は まるで " },
          { text: "夜[よる]のように", blank: true },
          { text: " 暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds まるで for emphasis: just as if it were night",
      },
      {
        segments: [
          { text: "夜[よる]のように", blank: true },
          { text: "、この 部屋[へや]は 暗[くら]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed word order, placing the comparison first",
      },
    ],
  },
  {
    english: "My older brother eats vegetables like a cow.",
    answers: [
      {
        segments: [
          { text: "兄[あに]は" },
          { text: "牛[うし]のように", blank: true },
          { text: "野菜[やさい]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "兄 implies “my older brother”; 牛のように modifies the eating action.",
      },
      {
        segments: [
          { text: "兄[あに]は 野菜[やさい]を" },
          { text: "牛[うし]のように", blank: true },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adverbial phrase placed immediately before the verb.",
      },
      {
        segments: [
          { text: "私[わたし]の 兄[あに]は" },
          { text: "牛[うし]のように", blank: true },
          { text: "野菜[やさい]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicitly includes 'my' with 私の.",
      },
      {
        segments: [
          { text: "私[わたし]の 兄[あに]は 野菜[やさい]を" },
          { text: "牛[うし]のように", blank: true },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 私の with the comparison phrase placed before the verb.",
      },
      {
        segments: [
          { text: "兄[あに]が" },
          { text: "牛[うし]のように", blank: true },
          { text: "野菜[やさい]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses が to identify the older brother as the one who eats vegetables like a cow.",
      },
      {
        segments: [
          { text: "私[わたし]の 兄[あに]が" },
          { text: "牛[うし]のように", blank: true },
          { text: "野菜[やさい]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 'my older brother' with が.",
      },
      {
        segments: [
          { text: "兄[あに]は" },
          { text: "牛[うし]のように", blank: true },
          { text: "たくさん 野菜[やさい]を" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adds たくさん to convey the cow-like manner as eating lots of vegetables.",
      },
      {
        segments: [
          { text: "兄[あに]は 野菜[やさい]を" },
          { text: "牛[うし]のように", blank: true },
          { text: "たくさん" },
          { text: "食[た]べる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Places たくさん after the comparison phrase.",
      },
    ],
  },
  {
    english: "The child is smiling as if the child got a Christmas present.",
    hint: "Use a confident comparison based on what the speaker can see; Christmas present = クリスマスプレゼント",
    answers: [
      {
        segments: [
          { text: "子供[こども]は クリスマスプレゼントを" },
          { text: "もらったように", blank: true },
          { text: " 笑[わら]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "は marks the child as the topic.",
      },
      {
        segments: [
          { text: "子供[こども]が クリスマスプレゼントを" },
          { text: "もらったように", blank: true },
          { text: " 笑[わら]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to mark the observed child as the subject.",
      },
      {
        segments: [
          { text: "その 子供[こども]は クリスマスプレゼントを" },
          { text: "もらったように", blank: true },
          { text: " 笑[わら]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using その子供 to translate 'the child' more explicitly.",
      },
      {
        segments: [
          { text: "その 子供[こども]が クリスマスプレゼントを" },
          { text: "もらったように", blank: true },
          { text: " 笑[わら]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "その子供 with が for direct observation.",
      },
      {
        segments: [
          { text: "子供[こども]は クリスマスプレゼントを" },
          { text: "もらったような", blank: true },
          { text: " 顔[かお]で 笑[わら]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ような before 顔で: 'with a face as if...'",
      },
      {
        segments: [
          { text: "子供[こども]が クリスマスプレゼントを" },
          { text: "もらったような", blank: true },
          { text: " 顔[かお]で 笑[わら]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ような顔で with が subject marking.",
      },
      {
        segments: [
          { text: "その 子供[こども]は クリスマスプレゼントを" },
          { text: "もらったような", blank: true },
          { text: " 顔[かお]で 笑[わら]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit 'that/the child' plus ような顔で.",
      },
      {
        segments: [
          { text: "その 子供[こども]が クリスマスプレゼントを" },
          { text: "もらったような", blank: true },
          { text: " 顔[かお]で 笑[わら]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Explicit child with が and ような顔で.",
      },
      {
        segments: [
          { text: "子供[こども]は クリスマスプレゼントを" },
          { text: "もらったような", blank: true },
          { text: " 顔[かお]をして" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Natural observation phrase 顔をしている: 'has a look as if...'",
      },
      {
        segments: [
          { text: "子供[こども]が クリスマスプレゼントを" },
          { text: "もらったような", blank: true },
          { text: " 顔[かお]をして" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "顔をしている with が subject marking.",
      },
      {
        segments: [
          { text: "その 子供[こども]は クリスマスプレゼントを" },
          { text: "もらったような", blank: true },
          { text: " 顔[かお]をして" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "その子供 with the natural expression 顔をしている.",
      },
      {
        segments: [
          { text: "その 子供[こども]が クリスマスプレゼントを" },
          { text: "もらったような", blank: true },
          { text: " 顔[かお]をして" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "その子供 with が and 顔をしている.",
      },
    ],
  },
  {
    english: "Today, the sky is blue like the sea.",
    answers: [
      {
        segments: [
          { text: "今日[きょう]の 空[そら]は " },
          { text: "海[うみ]のように", blank: true },
          { text: " 青[あお]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "ように modifies the adjective 青い.",
      },
      {
        segments: [
          { text: "今日[きょう]、空[そら]は " },
          { text: "海[うみ]のように", blank: true },
          { text: " 青[あお]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time word set off first; 空 is the topic",
      },
      {
        segments: [
          { text: "今日[きょう]は 空[そら]が " },
          { text: "海[うみ]のように", blank: true },
          { text: " 青[あお]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 今日は for the day/time frame and が for the sky as the observed subject",
      },
      {
        segments: [
          { text: "今日[きょう]、空[そら]が " },
          { text: "海[うみ]のように", blank: true },
          { text: " 青[あお]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Observation-style が with 今日 placed at the beginning",
      },
      {
        segments: [
          { text: "今日[きょう]は " },
          { text: "海[うみ]のような", blank: true },
          { text: " 青[あお]い 空[そら]です" },
        ],
        notes: "Uses ような to modify the noun phrase 青い空",
      },
      {
        segments: [
          { text: "今日[きょう]の 空[そら]は " },
          { text: "海[うみ]のような", blank: true },
          { text: " 青[あお]い 空[そら]です" },
        ],
        notes: "Uses ような with a noun phrase, keeping 今日の空 as the topic",
      },
    ],
  },
  {
    english: "After the typhoon, the town looked like a place from a horror movie.",
    hint: "horror = ホラー",
    answers: [
      {
        segments: [
          { text: "台風[たいふう]の 後[あと]で、町[まち]は ホラー映画[えいが]に 出[で]てくる 場所[ばしょ]" },
          { text: "のように", blank: true },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "のように modifies 見える.",
      },
      {
        segments: [
          { text: "台風[たいふう]の 後[あと]で、町[まち]は ホラー映画[えいが]に 出[で]てくる" },
          { text: "ような", blank: true },
          { text: "場所[ばしょ]に " },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using Verb + ような + Noun: a place like one that appears in a horror movie",
      },
      {
        segments: [
          { text: "台風[たいふう]の 後[あと]で、町[まち]は ホラー映画[えいが]の 中[なか]の 場所[ばしょ]" },
          { text: "のように", blank: true },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using ホラー映画の中の場所 for “a place from inside a horror movie”",
      },
      {
        segments: [
          { text: "台風[たいふう]の 後[あと]で、町[まち]は ホラー映画[えいが]" },
          { text: "のような", blank: true },
          { text: "場所[ばしょ]に " },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "More concise noun comparison: a horror-movie-like place",
      },
      {
        segments: [
          { text: "台風[たいふう]の 後[あと]の 町[まち]は、ホラー映画[えいが]に 出[で]てくる" },
          { text: "ような", blank: true },
          { text: "場所[ばしょ]に " },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Making “the town after the typhoon” the topic",
      },
      {
        segments: [
          { text: "台風[たいふう]の 後[あと]の 町[まち]は、ホラー映画[えいが]の 中[なか]の 場所[ばしょ]" },
          { text: "のように", blank: true },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Same meaning with topic phrase and のように",
      },
      {
        segments: [
          { text: "台風[たいふう]の 後[あと]の 町[まち]は、ホラー映画[えいが]" },
          { text: "のような", blank: true },
          { text: "場所[ばしょ]に " },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Concise topic version with のような",
      },
      {
        segments: [
          { text: "台風[たいふう]の 後[あと]、町[まち]は ホラー映画[えいが]に 出[で]てくる" },
          { text: "ような", blank: true },
          { text: "場所[ばしょ]に " },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 台風の後 without で",
      },
      {
        segments: [
          { text: "台風[たいふう]の 後[あと]で、町[まち]が ホラー映画[えいが]に 出[で]てくる" },
          { text: "ような", blank: true },
          { text: "場所[ばしょ]に " },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が instead of は to describe the scene",
      },
      {
        segments: [
          { text: "台風[たいふう]の 後[あと]で、町[まち]は ホラー映画[えいが]から 出[で]てきた" },
          { text: "ような", blank: true },
          { text: "場所[ばしょ]に " },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using “as if it came out of a horror movie”",
      },
      {
        segments: [
          { text: "台風[たいふう]の 後[あと]で、町[まち]は ホラー映画[えいが]の 世界[せかい]" },
          { text: "のように", blank: true },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 世界 instead of 場所 for a natural “world of a horror movie” phrasing",
      },
    ],
  },
  {
    english: "That salaryman is sleeping on the train like a baby.",
    hint: "salaryman = サラリーマン",
    answers: [
      {
        segments: [
          { text: "あの サラリーマンは 電車[でんしゃ]で " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "あの サラリーマンは 電車[でんしゃ]の 中[なか]で " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 電車の中で for “on/in the train”",
      },
      {
        segments: [
          { text: "その サラリーマンは 電車[でんしゃ]で " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using その for “that” near the listener/context",
      },
      {
        segments: [
          { text: "その サラリーマンは 電車[でんしゃ]の 中[なか]で " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using その and 電車の中で",
      },
      {
        segments: [
          { text: "電車[でんしゃ]で、あの サラリーマンは " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reversed word order with location first",
      },
      {
        segments: [
          { text: "電車[でんしゃ]の 中[なか]で、あの サラリーマンは " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Location first with 電車の中で",
      },
      {
        segments: [
          { text: "電車[でんしゃ]で、その サラリーマンは " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Location first with その",
      },
      {
        segments: [
          { text: "電車[でんしゃ]の 中[なか]で、その サラリーマンは " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Location first with その and 電車の中で",
      },
      {
        segments: [
          { text: "あの サラリーマンが 電車[でんしゃ]で " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は to point out the salaryman",
      },
      {
        segments: [
          { text: "あの サラリーマンが 電車[でんしゃ]の 中[なか]で " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が with 電車の中で",
      },
      {
        segments: [
          { text: "その サラリーマンが 電車[でんしゃ]で " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using その and が",
      },
      {
        segments: [
          { text: "その サラリーマンが 電車[でんしゃ]の 中[なか]で " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using その, が, and 電車の中で",
      },
      {
        segments: [
          { text: "電車[でんしゃ]で、あの サラリーマンが " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Location first and が",
      },
      {
        segments: [
          { text: "電車[でんしゃ]の 中[なか]で、あの サラリーマンが " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Location first with が and 電車の中で",
      },
      {
        segments: [
          { text: "電車[でんしゃ]で、その サラリーマンが " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Location first, その, and が",
      },
      {
        segments: [
          { text: "電車[でんしゃ]の 中[なか]で、その サラリーマンが " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Location first, その, が, and 電車の中で",
      },
      {
        segments: [
          { text: "あの サラリーマンは " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 電車[でんしゃ]で 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Placing the comparison before the location",
      },
      {
        segments: [
          { text: "その サラリーマンは " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 電車[でんしゃ]で 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Comparison before location with その",
      },
      {
        segments: [
          { text: "あの サラリーマンは " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 電車[でんしゃ]の 中[なか]で 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Comparison before 電車の中で",
      },
      {
        segments: [
          { text: "その サラリーマンは " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 電車[でんしゃ]の 中[なか]で 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Comparison before 電車の中で with その",
      },
      {
        segments: [
          { text: "あの サラリーマンが " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 電車[でんしゃ]で 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Comparison before location with が",
      },
      {
        segments: [
          { text: "その サラリーマンが " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 電車[でんしゃ]で 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Comparison before location with その and が",
      },
      {
        segments: [
          { text: "あの サラリーマンが " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 電車[でんしゃ]の 中[なか]で 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Comparison before 電車の中で with が",
      },
      {
        segments: [
          { text: "その サラリーマンが " },
          { text: "赤[あか]ちゃんのように", blank: true },
          { text: " 電車[でんしゃ]の 中[なか]で 寝[ね]る", conjugation: { pos: "Ichidan verb", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Comparison before 電車の中で with その and が",
      },
    ],
  },
  {
    english: "There is a mountain of documents on the desk.",
    answers: [
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]に " },
          { text: "山[やま]のような", blank: true },
          { text: " 書類[しょるい]が " },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "書類[しょるい]が " },
          { text: "山[やま]のように", blank: true },
          { text: " 机[つくえ]の 上[うえ]に " },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses ように adverbially: documents exist on the desk like a mountain.",
      },
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]には " },
          { text: "山[やま]のような", blank: true },
          { text: " 書類[しょるい]が " },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses には to emphasize the location/topic: as for on the desk.",
      },
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]に 書類[しょるい]が " },
          { text: "山[やま]のように", blank: true },
          { text: " " },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Places the location before the subject, with ように before the existential verb.",
      },
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]には 書類[しょるい]が " },
          { text: "山[やま]のように", blank: true },
          { text: " " },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses には plus ように after the subject; emphasizes the desktop location.",
      },
      {
        segments: [
          { text: "机[つくえ]の 上[うえ]に " },
          { text: "山[やま]のような", blank: true },
          { text: " 書類[しょるい]の 山[やま]が " },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 書類の山, explicitly 'a pile/mountain of documents,' modified by 山のような.",
      },
      {
        segments: [
          { text: "机[つくえ]には " },
          { text: "山[やま]のような", blank: true },
          { text: " 書類[しょるい]が " },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 机には with 机 implying the desktop; topicalized location.",
      },
      {
        segments: [
          { text: "机[つくえ]に " },
          { text: "山[やま]のような", blank: true },
          { text: " 書類[しょるい]が " },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 机に instead of 机の上に; natural when referring to things on a desk.",
      },
      {
        segments: [
          { text: "書類[しょるい]が " },
          { text: "山[やま]のように", blank: true },
          { text: " 机[つくえ]に " },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered version using 机に, with 書類 as the sentence subject.",
      },
      {
        segments: [
          { text: "机[つくえ]に 書類[しょるい]が " },
          { text: "山[やま]のように", blank: true },
          { text: " " },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Location first with 机に; ように describes the manner/shape of existence.",
      },
    ],
  },
  {
    english: "The wind is blowing as if it is angry.",
    answers: [
      {
        segments: [
          { text: "風[かぜ]が" },
          { text: "怒[おこ]っているように", blank: true },
          { text: "吹[ふ]いている" },
        ],
        notes: "ように modifies 吹いている.",
      },
      {
        segments: [
          { text: "風[かぜ]は" },
          { text: "怒[おこ]っているように", blank: true },
          { text: "吹[ふ]いている" },
        ],
        notes: "Using は to make the wind the topic",
      },
      {
        segments: [
          { text: "風[かぜ]が" },
          { text: "怒[おこ]ったように", blank: true },
          { text: "吹[ふ]いている" },
        ],
        notes: "Using past-form 怒ったように, also natural for an 'as if angry' impression",
      },
      {
        segments: [
          { text: "怒[おこ]っているように", blank: true },
          { text: "風[かぜ]が 吹[ふ]いている" },
        ],
        notes: "Fronted ように phrase for emphasis",
      },
      {
        segments: [
          { text: "怒[おこ]ったように", blank: true },
          { text: "風[かぜ]が 吹[ふ]いている" },
        ],
        notes: "Fronted past-form ように phrase",
      },
      {
        segments: [
          { text: "風[かぜ]が" },
          { text: "怒[おこ]っているような", blank: true },
          { text: "吹[ふ]き 方[かた]をしている" },
        ],
        notes: "Using ような before noun 吹き方, 'a way of blowing as if angry'",
      },
      {
        segments: [
          { text: "風[かぜ]は" },
          { text: "怒[おこ]っているような", blank: true },
          { text: "吹[ふ]き 方[かた]をしている" },
        ],
        notes: "Using は with ような modifying 吹き方",
      },
      {
        segments: [
          { text: "風[かぜ]が" },
          { text: "怒[おこ]ったような", blank: true },
          { text: "吹[ふ]き 方[かた]をしている" },
        ],
        notes: "Using past-form 怒ったような modifying 吹き方",
      },
      {
        segments: [
          { text: "風[かぜ]は" },
          { text: "怒[おこ]ったような", blank: true },
          { text: "吹[ふ]き 方[かた]をしている" },
        ],
        notes: "Using は with past-form 怒ったような modifying 吹き方",
      },
    ],
  },
  {
    english: "Why is the department manager laughing like a monkey during the meeting?",
    answers: [
      {
        segments: [
          { text: "どうして 部長[ぶちょう]は 会議[かいぎ]中[ちゅう]に " },
          { text: "猿[さる]のように", blank: true },
          { text: " 笑[わら]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "Without explanatory んです",
      },
      {
        segments: [
          { text: "なぜ 部長[ぶちょう]は 会議[かいぎ]中[ちゅう]に " },
          { text: "猿[さる]のように", blank: true },
          { text: " 笑[わら]って" },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
          { text: "か" },
        ],
        notes: "なぜ without explanatory んです",
      },
      {
        segments: [
          { text: "どうして 部長[ぶちょう]は 会議[かいぎ]中[ちゅう]に " },
          { text: "猿[さる]のように", blank: true },
          { text: " 笑[わら]っているん" },
          { text: "です" },
          { text: "か" },
        ],
        notes: "The verb stays plain before explanatory んです.",
      },
      {
        segments: [
          { text: "部長[ぶちょう]は どうして 会議[かいぎ]中[ちゅう]に " },
          { text: "猿[さる]のように", blank: true },
          { text: " 笑[わら]っているん" },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Places どうして after the topic",
      },
      {
        segments: [
          { text: "会議[かいぎ]中[ちゅう]に、どうして 部長[ぶちょう]は " },
          { text: "猿[さる]のように", blank: true },
          { text: " 笑[わら]っているん" },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Fronts the time expression",
      },
      {
        segments: [
          { text: "どうして 部長[ぶちょう]が 会議[かいぎ]中[ちゅう]に " },
          { text: "猿[さる]のように", blank: true },
          { text: " 笑[わら]っているん" },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses が to focus on the department manager as subject",
      },
      {
        segments: [
          { text: "なぜ 部長[ぶちょう]は 会議[かいぎ]中[ちゅう]に " },
          { text: "猿[さる]のように", blank: true },
          { text: " 笑[わら]っているん" },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses なぜ instead of どうして",
      },
      {
        segments: [
          { text: "どうして 部長[ぶちょう]は 会議[かいぎ]で " },
          { text: "猿[さる]のように", blank: true },
          { text: " 笑[わら]っているん" },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Uses 会議で instead of 会議中に",
      },
      {
        segments: [
          { text: "会議[かいぎ]で、どうして 部長[ぶちょう]は " },
          { text: "猿[さる]のように", blank: true },
          { text: " 笑[わら]っているん" },
          { text: "です" },
          { text: "か" },
        ],
        notes: "Fronts 会議で",
      },
    ],
  },
  {
    english: "I want a robot that does housework like a person.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は " },
          { text: "人[ひと]のように", blank: true },
          { text: " 家事[かじ]をする ロボットが " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]は 家事[かじ]を " },
          { text: "人[ひと]のように", blank: true },
          { text: "する ロボットが " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adverbial comparison placed after the object.",
      },
      {
        segments: [
          { text: "私[わたし]は " },
          { text: "人[ひと]のように", blank: true },
          { text: " 家事[かじ]をしてくれる ロボットが " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses てくれる to imply the robot does the housework for me.",
      },
      {
        segments: [
          { text: "私[わたし]は 家事[かじ]を " },
          { text: "人[ひと]のように", blank: true },
          { text: "してくれる ロボットが " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "てくれる version with the object before the comparison phrase.",
      },
      {
        segments: [
          { text: "私[わたし]は " },
          { text: "人[ひと]がするように", blank: true },
          { text: " 家事[かじ]をする ロボットが " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses Verb + ように: 'as a person does'.",
      },
      {
        segments: [
          { text: "私[わたし]は " },
          { text: "人[ひと]がするように", blank: true },
          { text: " 家事[かじ]をしてくれる ロボットが " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Verb + ように comparison with てくれる.",
      },
      {
        segments: [
          { text: "私[わたし]は 家事[かじ]をする " },
          { text: "人[ひと]のような", blank: true },
          { text: " ロボットが " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses のような to describe the robot as person-like; includes housework in relative clause.",
      },
      {
        segments: [
          { text: "私[わたし]は " },
          { text: "人[ひと]のような", blank: true },
          { text: "、家事[かじ]をする ロボットが " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses のような to describe a human-like robot, with a following relative clause for doing housework.",
      },
      {
        segments: [
          { text: "私[わたし]は 家事[かじ]をしてくれる " },
          { text: "人[ひと]のような", blank: true },
          { text: " ロボットが " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses のような with a relative clause: like a person who does housework for me.",
      },
      {
        segments: [
          { text: "私[わたし]は " },
          { text: "人間[にんげん]のように", blank: true },
          { text: " 家事[かじ]をする ロボットが " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 人間 instead of 人 for 'human/person'.",
      },
      {
        segments: [
          { text: "私[わたし]は 家事[かじ]を " },
          { text: "人間[にんげん]のように", blank: true },
          { text: "する ロボットが " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "人間 synonym with object placed before the comparison phrase.",
      },
      {
        segments: [
          { text: "私[わたし]は " },
          { text: "人[ひと]のように", blank: true },
          { text: " 家事[かじ]をやる ロボットが " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses the more casual verb やる for doing housework.",
      },
      {
        segments: [
          { text: "私[わたし]は 家事[かじ]を " },
          { text: "人[ひと]のように", blank: true },
          { text: "やる ロボットが " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "やる version with the object before the comparison phrase.",
      },
      {
        segments: [
          { text: "私[わたし]は " },
          { text: "人間[にんげん]がするように", blank: true },
          { text: " 家事[かじ]をする ロボットが " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses 人間 + Verb + ように: 'as a human does'.",
      },
      {
        segments: [
          { text: "私[わたし]は " },
          { text: "人間[にんげん]のように", blank: true },
          { text: " 家事[かじ]をしてくれる ロボットが " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "人間 synonym with てくれる beneficiary nuance.",
      },
      {
        segments: [
          { text: "私[わたし]は 家事[かじ]をしてくれる " },
          { text: "人間[にんげん]のような", blank: true },
          { text: " ロボットが " },
          { text: "欲[ほ]しい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Uses のような with 人間 to describe a human-like robot that does housework.",
      },
    ],
  },
  {
    english: "This soup is spicy like curry.",
    hint: "Use a formal “like/as” expression rather than the casual one.",
    answers: [
      {
        segments: [
          { text: "この スープは カレー" },
          { text: "のように", blank: true },
          { text: " 辛[から]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "この スープが カレー" },
          { text: "のように", blank: true },
          { text: " 辛[から]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が for emphasis or contrast: this soup, specifically, is spicy like curry.",
      },
      {
        segments: [
          { text: "この スープは カレー" },
          { text: "のような", blank: true },
          { text: " 辛[から]い スープ" },
          { text: "です" },
        ],
        notes: "Using のような to modify the noun phrase 辛いスープ.",
      },
      {
        segments: [
          { text: "カレー" },
          { text: "のように", blank: true },
          { text: "、この スープは " },
          { text: "辛[から]い", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Fronted comparison phrase for emphasis.",
      },
    ],
  },
  {
    english: "Tonight's moon looks like a mysterious eye.",
    hint: "Use the more formal comparison pattern, not the casual one.",
    answers: [
      {
        segments: [
          { text: "今夜[こんや]の 月[つき]は、" },
          { text: "不思議[ふしぎ]な 目[め]のように", blank: true },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "のように見える means “looks like/as if.”",
      },
      {
        segments: [
          { text: "今夜[こんや]の 月[つき]が、" },
          { text: "不思議[ふしぎ]な 目[め]のように", blank: true },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to put focus on tonight's moon.",
      },
      {
        segments: [
          { text: "今晩[こんばん]の 月[つき]は、" },
          { text: "不思議[ふしぎ]な 目[め]のように", blank: true },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 今晩 instead of 今夜.",
      },
      {
        segments: [
          { text: "今晩[こんばん]の 月[つき]が、" },
          { text: "不思議[ふしぎ]な 目[め]のように", blank: true },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 今晩 with が for subject focus.",
      },
      {
        segments: [
          { text: "今夜[こんや]、月[つき]は" },
          { text: "不思議[ふしぎ]な 目[め]のように", blank: true },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time phrase placed at the beginning instead of modifying 月.",
      },
      {
        segments: [
          { text: "今夜[こんや]、月[つき]が" },
          { text: "不思議[ふしぎ]な 目[め]のように", blank: true },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Time phrase at start with が for the moon.",
      },
      {
        segments: [
          { text: "今晩[こんばん]、月[つき]は" },
          { text: "不思議[ふしぎ]な 目[め]のように", blank: true },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 今晩 as the time phrase.",
      },
      {
        segments: [
          { text: "今晩[こんばん]、月[つき]が" },
          { text: "不思議[ふしぎ]な 目[め]のように", blank: true },
          { text: "見[み]える", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 今晩 as time phrase with が.",
      },
    ],
  },
  {
    english: "I found a key in the garden that looked like a small toy.",
    hint: "Use the more formal comparison, not the casual one.",
    answers: [
      {
        segments: [
          { text: "私[わたし]は 庭[にわ]で、" },
          { text: "小[ちい]さい おもちゃのような", blank: true },
          { text: " 鍵[かぎ]を " },
          { text: "見[み]つける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "のような modifies 鍵.",
      },
      {
        segments: [
          { text: "庭[にわ]で、" },
          { text: "小[ちい]さい おもちゃのような", blank: true },
          { text: " 鍵[かぎ]を " },
          { text: "見[み]つける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted; natural when context makes 'I' clear",
      },
      {
        segments: [
          { text: "私[わたし]は " },
          { text: "小[ちい]さい おもちゃのような", blank: true },
          { text: " 鍵[かぎ]を 庭[にわ]で " },
          { text: "見[み]つける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Different word order: object before location",
      },
      {
        segments: [
          { text: "私[わたし]は 庭[にわ]で、" },
          { text: "小[ちい]さな おもちゃのような", blank: true },
          { text: " 鍵[かぎ]を " },
          { text: "見[み]つける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 小さな instead of 小さい",
      },
      {
        segments: [
          { text: "庭[にわ]で、" },
          { text: "小[ちい]さな おもちゃのような", blank: true },
          { text: " 鍵[かぎ]を " },
          { text: "見[み]つける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted with 小さな",
      },
      {
        segments: [
          { text: "私[わたし]は 庭[にわ]で、" },
          { text: "小[ちい]さい おもちゃのように", blank: true },
          { text: " 見[み]える 鍵[かぎ]を " },
          { text: "見[み]つける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using のように with 見える: a key that looked like a small toy",
      },
      {
        segments: [
          { text: "庭[にわ]で、" },
          { text: "小[ちい]さい おもちゃのように", blank: true },
          { text: " 見[み]える 鍵[かぎ]を " },
          { text: "見[み]つける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted; using のように見える",
      },
      {
        segments: [
          { text: "私[わたし]は 庭[にわ]で、" },
          { text: "小[ちい]さな おもちゃのように", blank: true },
          { text: " 見[み]える 鍵[かぎ]を " },
          { text: "見[み]つける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 小さな with のように見える",
      },
      {
        segments: [
          { text: "庭[にわ]で、" },
          { text: "小[ちい]さな おもちゃのように", blank: true },
          { text: " 見[み]える 鍵[かぎ]を " },
          { text: "見[み]つける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted; 小さな with のように見える",
      },
      {
        segments: [
          { text: "庭[にわ]の 中[なか]で、" },
          { text: "小[ちい]さい おもちゃのような", blank: true },
          { text: " 鍵[かぎ]を " },
          { text: "見[み]つける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using 庭の中で for 'in the garden'",
      },
      {
        segments: [
          { text: "私[わたし]は 庭[にわ]の 中[なか]で、" },
          { text: "小[ちい]さい おもちゃのような", blank: true },
          { text: " 鍵[かぎ]を " },
          { text: "見[み]つける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Explicit subject with 庭の中で",
      },
      {
        segments: [
          { text: "私[わたし]は 庭[にわ]で、" },
          { text: "小[ちい]さい おもちゃのように", blank: true },
          { text: " 見[み]えた 鍵[かぎ]を " },
          { text: "見[み]つける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using past 見えた to match 'looked'",
      },
      {
        segments: [
          { text: "庭[にわ]で、" },
          { text: "小[ちい]さい おもちゃのように", blank: true },
          { text: " 見[み]えた 鍵[かぎ]を " },
          { text: "見[み]つける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted; past 見えた",
      },
      {
        segments: [
          { text: "私[わたし]は 庭[にわ]で、" },
          { text: "小[ちい]さな おもちゃのように", blank: true },
          { text: " 見[み]えた 鍵[かぎ]を " },
          { text: "見[み]つける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Past 見えた with 小さな",
      },
      {
        segments: [
          { text: "庭[にわ]で、" },
          { text: "小[ちい]さな おもちゃのように", blank: true },
          { text: " 見[み]えた 鍵[かぎ]を " },
          { text: "見[み]つける", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Subject omitted; past 見えた with 小さな",
      },
    ],
  },
  {
    english: "That restaurant has a menu like a newspaper.",
    hint: "Use the more formal comparison pattern, not みたい.",
    answers: [
      {
        segments: [
          { text: "あの レストランでは、" },
          { text: "新聞[しんぶん]のような", blank: true },
          { text: " メニューを " },
          { text: "使[つか]う", conjugation: { pos: "Godan verb with 'u' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using では and 使っている to express that the restaurant uses/has such a menu",
      },
      {
        segments: [
          { text: "あの レストランには、メニューが " },
          { text: "新聞[しんぶん]のように", blank: true },
          { text: " 大[おお]きい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Predicate adjective version: the restaurant's menu is large like a newspaper",
      },
      {
        segments: [
          { text: "その レストランには、メニューが " },
          { text: "新聞[しんぶん]のように", blank: true },
          { text: " 大[おお]きい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Predicate adjective version with その",
      },
      {
        segments: [
          { text: "あの レストランの メニューは " },
          { text: "新聞[しんぶん]のように", blank: true },
          { text: " 大[おお]きい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using possessive の: that restaurant's menu is large like a newspaper",
      },
      {
        segments: [
          { text: "その レストランの メニューは " },
          { text: "新聞[しんぶん]のように", blank: true },
          { text: " 大[おお]きい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using possessive の with その",
      },
      {
        segments: [
          { text: "あの レストランには、" },
          { text: "新聞[しんぶん]のような", blank: true },
          { text: " メニューが " },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Basic translation with あの for 'that' and には marking the restaurant as the place that has it; corrected ある conjugation",
      },
      {
        segments: [
          { text: "その レストランには、" },
          { text: "新聞[しんぶん]のような", blank: true },
          { text: " メニューが " },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using その for 'that' restaurant near the listener or previously mentioned; corrected ある conjugation",
      },
      {
        segments: [
          { text: "あの レストランは、" },
          { text: "新聞[しんぶん]のような", blank: true },
          { text: " メニューが " },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using は to topic-mark the restaurant; corrected ある conjugation",
      },
      {
        segments: [
          { text: "その レストランは、" },
          { text: "新聞[しんぶん]のような", blank: true },
          { text: " メニューが " },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using その with は topic marking; corrected ある conjugation",
      },
      {
        segments: [
          { text: "あの レストランに、" },
          { text: "新聞[しんぶん]のような", blank: true },
          { text: " メニューが " },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using に to mark the location where the menu exists; corrected ある conjugation",
      },
      {
        segments: [
          { text: "その レストランに、" },
          { text: "新聞[しんぶん]のような", blank: true },
          { text: " メニューが " },
          { text: "ある", conjugation: { pos: "Godan verb with 'ru' ending (irregular verb)", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using その and に as a location marker; corrected ある conjugation",
      },
      {
        segments: [
          { text: "あの レストランには、メニューが " },
          { text: "新聞[しんぶん]のように", blank: true },
          { text: " " },
          { text: "大[おお]きい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Predicate adjective version: the restaurant's menu is large like a newspaper",
      },
      {
        segments: [
          { text: "その レストランには、メニューが " },
          { text: "新聞[しんぶん]のように", blank: true },
          { text: " " },
          { text: "大[おお]きい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Predicate adjective version with その",
      },
      {
        segments: [
          { text: "あの レストランの メニューは " },
          { text: "新聞[しんぶん]のように", blank: true },
          { text: " " },
          { text: "大[おお]きい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using possessive の: that restaurant's menu is large like a newspaper",
      },
      {
        segments: [
          { text: "その レストランの メニューは " },
          { text: "新聞[しんぶん]のように", blank: true },
          { text: " " },
          { text: "大[おお]きい", conjugation: { pos: "I-adjective", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using possessive の with その",
      },
    ],
  },
  {
    english: "My younger sister sings in the bath like a famous singer.",
    answers: [
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は お風呂[ふろ]で、" },
          { text: "有名[ゆうめい]な 歌手[かしゅ]のように", blank: true },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は " },
          { text: "有名[ゆうめい]な 歌手[かしゅ]のように", blank: true },
          { text: "お風呂[ふろ]で 歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Adverbial comparison placed before the location phrase",
      },
      {
        segments: [
          { text: "お風呂[ふろ]で、私[わたし]の 妹[いもうと]は " },
          { text: "有名[ゆうめい]な 歌手[かしゅ]のように", blank: true },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Location phrase fronted",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]が お風呂[ふろ]で、" },
          { text: "有名[ゆうめい]な 歌手[かしゅ]のように", blank: true },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が instead of は to mark the younger sister",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は お風呂[ふろ]の 中[なか]で、" },
          { text: "有名[ゆうめい]な 歌手[かしゅ]のように", blank: true },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using お風呂の中で for “in the bath”",
      },
      {
        segments: [
          { text: "私[わたし]の 妹[いもうと]は 風呂[ふろ]で、" },
          { text: "有名[ゆうめい]な 歌手[かしゅ]のように", blank: true },
          { text: "歌[うた]う", conjugation: { pos: "Godan verb with 'u' ending", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using 風呂 instead of お風呂",
      },
    ],
  },
  {
    english: "After losing the game, the company president cried like a child.",
    answers: [
      {
        segments: [
          { text: "会社[かいしゃ]の 社長[しゃちょう]は、試合[しあい]に 負[ま]けた 後[あと]で、" },
          { text: "子供[こども]のように", blank: true },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
      },
      {
        segments: [
          { text: "試合[しあい]に 負[ま]けた 後[あと]で、会社[かいしゃ]の 社長[しゃちょう]は" },
          { text: "子供[こども]のように", blank: true },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Time clause placed at the beginning",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の 社長[しゃちょう]は、ゲームに 負[ま]けた 後[あと]で、" },
          { text: "子供[こども]のように", blank: true },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using ゲーム instead of 試合 for “game”",
      },
      {
        segments: [
          { text: "ゲームに 負[ま]けた 後[あと]で、会社[かいしゃ]の 社長[しゃちょう]は" },
          { text: "子供[こども]のように", blank: true },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using ゲーム with the time clause first",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の 社長[しゃちょう]は、試合[しあい]に 負[ま]けてから、" },
          { text: "子供[こども]のように", blank: true },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using てから for “after losing”",
      },
      {
        segments: [
          { text: "試合[しあい]に 負[ま]けてから、会社[かいしゃ]の 社長[しゃちょう]は" },
          { text: "子供[こども]のように", blank: true },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using てから with the time clause first",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の 社長[しゃちょう]は、ゲームに 負[ま]けてから、" },
          { text: "子供[こども]のように", blank: true },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using ゲーム and てから",
      },
      {
        segments: [
          { text: "ゲームに 負[ま]けてから、会社[かいしゃ]の 社長[しゃちょう]は" },
          { text: "子供[こども]のように", blank: true },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using ゲーム and てから with the time clause first",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の 社長[しゃちょう]が、試合[しあい]に 負[ま]けた 後[あと]で、" },
          { text: "子供[こども]のように", blank: true },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が instead of は to mark the company president as the subject in a narrative",
      },
      {
        segments: [
          { text: "試合[しあい]に 負[ま]けた 後[あと]で、会社[かいしゃ]の 社長[しゃちょう]が" },
          { text: "子供[こども]のように", blank: true },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が with the time clause first",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の 社長[しゃちょう]が、ゲームに 負[ま]けた 後[あと]で、" },
          { text: "子供[こども]のように", blank: true },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が and ゲーム for “game”",
      },
      {
        segments: [
          { text: "ゲームに 負[ま]けた 後[あと]で、会社[かいしゃ]の 社長[しゃちょう]が" },
          { text: "子供[こども]のように", blank: true },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が and ゲーム with the time clause first",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の 社長[しゃちょう]が、試合[しあい]に 負[ま]けてから、" },
          { text: "子供[こども]のように", blank: true },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が and てから",
      },
      {
        segments: [
          { text: "試合[しあい]に 負[ま]けてから、会社[かいしゃ]の 社長[しゃちょう]が" },
          { text: "子供[こども]のように", blank: true },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が and てから with the time clause first",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の 社長[しゃちょう]が、ゲームに 負[ま]けてから、" },
          { text: "子供[こども]のように", blank: true },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が, ゲーム, and てから",
      },
      {
        segments: [
          { text: "ゲームに 負[ま]けてから、会社[かいしゃ]の 社長[しゃちょう]が" },
          { text: "子供[こども]のように", blank: true },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using が, ゲーム, and てから with the time clause first",
      },
      {
        segments: [
          { text: "社長[しゃちょう]は、試合[しあい]に 負[ま]けた 後[あと]で、" },
          { text: "子供[こども]のように", blank: true },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omitting 会社の when context makes “company president” clear",
      },
      {
        segments: [
          { text: "試合[しあい]に 負[ま]けた 後[あと]で、社長[しゃちょう]は" },
          { text: "子供[こども]のように", blank: true },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omitting 会社の with the time clause first",
      },
      {
        segments: [
          { text: "社長[しゃちょう]は、試合[しあい]に 負[ま]けてから、" },
          { text: "子供[こども]のように", blank: true },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omitting 会社の and using てから",
      },
      {
        segments: [
          { text: "試合[しあい]に 負[ま]けてから、社長[しゃちょう]は" },
          { text: "子供[こども]のように", blank: true },
          { text: "泣[な]く", conjugation: { pos: "Godan verb with 'ku' ending", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Omitting 会社の and placing the てから clause first",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の 社長[しゃちょう]は、試合[しあい]に 負[ま]けた 後[あと]で、" },
          { text: "子供[こども]のような", blank: true },
          { text: "泣[な]き 方[かた]を" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using のような to modify 泣き方 instead of adverbial のように",
      },
      {
        segments: [
          { text: "試合[しあい]に 負[ま]けた 後[あと]で、会社[かいしゃ]の 社長[しゃちょう]は" },
          { text: "子供[こども]のような", blank: true },
          { text: "泣[な]き 方[かた]を" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using のような泣き方 with the time clause first",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の 社長[しゃちょう]は、試合[しあい]に 負[ま]けてから、" },
          { text: "子供[こども]のような", blank: true },
          { text: "泣[な]き 方[かた]を" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using のような泣き方 and てから",
      },
      {
        segments: [
          { text: "試合[しあい]に 負[ま]けてから、会社[かいしゃ]の 社長[しゃちょう]は" },
          { text: "子供[こども]のような", blank: true },
          { text: "泣[な]き 方[かた]を" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using のような泣き方 and てから with the time clause first",
      },
      {
        segments: [
          { text: "会社[かいしゃ]の 社長[しゃちょう]は、ゲームに 負[ま]けた 後[あと]で、" },
          { text: "子供[こども]のような", blank: true },
          { text: "泣[な]き 方[かた]を" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using ゲーム and のような泣き方",
      },
      {
        segments: [
          { text: "ゲームに 負[ま]けた 後[あと]で、会社[かいしゃ]の 社長[しゃちょう]は" },
          { text: "子供[こども]のような", blank: true },
          { text: "泣[な]き 方[かた]を" },
          { text: "する", conjugation: { pos: "Suru verb - included", form: "normal", polarity: "positive", tense: "past" } },
        ],
        notes: "Using ゲーム and のような泣き方 with the time clause first",
      },
    ],
  },
  {
    english: "That dog is sitting on the sofa like a person.",
    hint: "sofa = ソファ; use the more formal comparison, not the casual one.",
    answers: [
      {
        segments: [
          { text: "あの 犬[いぬ]は " },
          { text: "人[ひと]のように", blank: true },
          { text: " ソファに " },
          { text: "座[すわ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
      },
      {
        segments: [
          { text: "その 犬[いぬ]は " },
          { text: "人[ひと]のように", blank: true },
          { text: " ソファに " },
          { text: "座[すわ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using その for 'that' near the listener",
      },
      {
        segments: [
          { text: "あの 犬[いぬ]が " },
          { text: "人[ひと]のように", blank: true },
          { text: " ソファに " },
          { text: "座[すわ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using が to identify/emphasize the dog",
      },
      {
        segments: [
          { text: "その 犬[いぬ]が " },
          { text: "人[ひと]のように", blank: true },
          { text: " ソファに " },
          { text: "座[すわ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using その and が",
      },
      {
        segments: [
          { text: "あの 犬[いぬ]は " },
          { text: "人[ひと]のように", blank: true },
          { text: " ソファの 上[うえ]に " },
          { text: "座[すわ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using ソファの上に to explicitly say 'on the sofa'",
      },
      {
        segments: [
          { text: "その 犬[いぬ]は " },
          { text: "人[ひと]のように", blank: true },
          { text: " ソファの 上[うえ]に " },
          { text: "座[すわ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Using その with ソファの上に",
      },
      {
        segments: [
          { text: "あの 犬[いぬ]は ソファに " },
          { text: "人[ひと]のように", blank: true },
          { text: " " },
          { text: "座[すわ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered: placing ソファに before the comparison",
      },
      {
        segments: [
          { text: "その 犬[いぬ]は ソファに " },
          { text: "人[ひと]のように", blank: true },
          { text: " " },
          { text: "座[すわ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered with その犬",
      },
      {
        segments: [
          { text: "あの 犬[いぬ]は ソファの 上[うえ]に " },
          { text: "人[ひと]のように", blank: true },
          { text: " " },
          { text: "座[すわ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered with ソファの上に before the comparison",
      },
      {
        segments: [
          { text: "その 犬[いぬ]は ソファの 上[うえ]に " },
          { text: "人[ひと]のように", blank: true },
          { text: " " },
          { text: "座[すわ]る", conjugation: { pos: "Godan verb with 'ru' ending", form: "te-form", polarity: "positive", tense: "non-past" } },
          { text: "いる", conjugation: { pos: "Ichidan verb", form: "normal", polarity: "positive", tense: "non-past" } },
        ],
        notes: "Reordered with その犬 and ソファの上に",
      },
    ],
  },
];
