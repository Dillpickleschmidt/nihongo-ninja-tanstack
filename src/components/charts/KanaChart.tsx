// components/KanaChart.tsx
import { JSX } from "solid-js"

type ChartType = "base-kana" | "dakuten" | "handakuten" | "katakana"

export default function KanaChart(props: { type: ChartType }): JSX.Element {
  const baseRows = [
    {
      consonant: "",
      cells: [
        ["あ", "a"],
        ["い", "i"],
        ["う", "u"],
        ["え", "e"],
        ["お", "o"],
      ],
    },
    {
      consonant: "k",
      cells: [
        ["か", "ka"],
        ["き", "ki"],
        ["く", "ku"],
        ["け", "ke"],
        ["こ", "ko"],
      ],
    },
    {
      consonant: "s",
      cells: [
        ["さ", "sa"],
        ["し", "shi*"],
        ["す", "su"],
        ["せ", "se"],
        ["そ", "so"],
      ],
    },
    {
      consonant: "t",
      cells: [
        ["た", "ta"],
        ["ち", "chi*"],
        ["つ", "tsu*"],
        ["て", "te"],
        ["と", "to"],
      ],
    },
    {
      consonant: "n",
      cells: [
        ["な", "na"],
        ["に", "ni"],
        ["ぬ", "nu"],
        ["ね", "ne"],
        ["の", "no"],
      ],
    },
    {
      consonant: "h",
      cells: [
        ["は", "ha"],
        ["ひ", "hi"],
        ["ふ", "fu*"],
        ["へ", "he"],
        ["ほ", "ho"],
      ],
    },
    {
      consonant: "m",
      cells: [
        ["ま", "ma"],
        ["み", "mi"],
        ["む", "mu"],
        ["め", "me"],
        ["も", "mo"],
      ],
    },
    {
      consonant: "y",
      cells: [
        ["や", "ya"],
        [null, ""],
        ["ゆ", "yu"],
        [null, ""],
        ["よ", "yo"],
      ],
    },
    {
      consonant: "r",
      cells: [
        ["ら", "ra"],
        ["り", "ri"],
        ["る", "ru"],
        ["れ", "re"],
        ["ろ", "ro"],
      ],
    },
    {
      consonant: "w",
      cells: [
        ["わ", "wa"],
        [null, ""],
        [null, ""],
        [null, ""],
        ["を", "wo*"],
      ],
    },
    {
      consonant: "n",
      cells: [
        [null, ""],
        [null, ""],
        ["ん", "n*"],
        [null, ""],
        [null, ""],
      ],
    },
  ]

  // Dakuten mappings
  const dakutenRows = [
    {
      consonant: "g",
      cells: [
        ["が", "ga"],
        ["ぎ", "gi"],
        ["ぐ", "gu"],
        ["げ", "ge"],
        ["ご", "go"],
      ],
    },
    {
      consonant: "z",
      cells: [
        ["ざ", "za"],
        ["じ", "ji"],
        ["ず", "zu"],
        ["ぜ", "ze"],
        ["ぞ", "zo"],
      ],
    },
    {
      consonant: "d",
      cells: [
        ["だ", "da"],
        ["ぢ", "ji*"],
        ["づ", "zu*"],
        ["で", "de"],
        ["ど", "do"],
      ],
    },
    {
      consonant: "b",
      cells: [
        ["ば", "ba"],
        ["び", "bi"],
        ["ぶ", "bu"],
        ["べ", "be"],
        ["ぼ", "bo"],
      ],
    },
  ]

  // Handakuten mappings
  const handakutenRows = [
    {
      consonant: "p",
      cells: [
        ["ぱ", "pa"],
        ["ぴ", "pi"],
        ["ぷ", "pu"],
        ["ぺ", "pe"],
        ["ぽ", "po"],
      ],
    },
  ]

  // Katakana mappings
  const katakanaRows = [
    {
      consonant: "",
      cells: [
        ["ア", "a"],
        ["イ", "i"],
        ["ウ", "u"],
        ["エ", "e"],
        ["オ", "o"],
      ],
    },
    {
      consonant: "k",
      cells: [
        ["カ", "ka"],
        ["キ", "ki"],
        ["ク", "ku"],
        ["ケ", "ke"],
        ["コ", "ko"],
      ],
    },
    {
      consonant: "s",
      cells: [
        ["サ", "sa"],
        ["シ", "shi*"],
        ["ス", "su"],
        ["セ", "se"],
        ["ソ", "so"],
      ],
    },
    {
      consonant: "t",
      cells: [
        ["タ", "ta"],
        ["チ", "chi*"],
        ["ツ", "tsu*"],
        ["テ", "te"],
        ["ト", "to"],
      ],
    },
    {
      consonant: "n",
      cells: [
        ["ナ", "na"],
        ["ニ", "ni"],
        ["ヌ", "nu"],
        ["ネ", "ne"],
        ["ノ", "no"],
      ],
    },
    {
      consonant: "h",
      cells: [
        ["ハ", "ha"],
        ["ヒ", "hi"],
        ["フ", "fu*"],
        ["ヘ", "he"],
        ["ホ", "ho"],
      ],
    },
    {
      consonant: "m",
      cells: [
        ["マ", "ma"],
        ["ミ", "mi"],
        ["ム", "mu"],
        ["メ", "me"],
        ["モ", "mo"],
      ],
    },
    {
      consonant: "y",
      cells: [
        ["ヤ", "ya"],
        [null, ""],
        ["ユ", "yu"],
        [null, ""],
        ["ヨ", "yo"],
      ],
    },
    {
      consonant: "r",
      cells: [
        ["ラ", "ra"],
        ["リ", "ri"],
        ["ル", "ru"],
        ["レ", "re"],
        ["ロ", "ro"],
      ],
    },
    {
      consonant: "w",
      cells: [
        ["ワ", "wa"],
        [null, ""],
        [null, ""],
        [null, ""],
        ["ヲ", "wo*"],
      ],
    },
    {
      consonant: "n",
      cells: [
        [null, ""],
        [null, ""],
        ["ン", "n*"],
        [null, ""],
        [null, ""],
      ],
    },
  ]

  const rows =
    props.type === "base-kana"
      ? baseRows
      : props.type === "dakuten"
        ? dakutenRows
        : props.type === "handakuten"
          ? handakutenRows
          : katakanaRows

  return (
    <div
      class="grid gap-2 pr-5"
      style="grid-template-columns: auto repeat(5, minmax(64px, 1fr));"
    >
      {rows.map((row) => (
        <>
          <div class="text-muted-foreground flex w-5 items-center justify-end pr-2 text-center text-base">
            {row.consonant}
          </div>
          {row.cells.map(([jp, romaji]) =>
            jp ? <SyllableTile jp={jp} romaji={romaji} /> : <div></div>,
          )}
        </>
      ))}
    </div>
  )
}

function SyllableTile(props: { jp: string; romaji: string }) {
  return (
    <div class="bg-card/50 text-foreground rounded-md p-3 text-center">
      <p class="font-japanese text-2xl">{props.jp}</p>
      <p class="text-muted-foreground text-xs">{props.romaji}</p>
    </div>
  )
}
