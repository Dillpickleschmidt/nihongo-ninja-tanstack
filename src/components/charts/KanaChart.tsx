// components/KanaChart.tsx
import { JSX } from "solid-js"

type ChartType = "base-kana" | "dakuten" | "handakuten"

export default function KanaChart(props: { type: ChartType }): JSX.Element {
  const baseRows = [
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
      consonant: "h",
      cells: [
        ["は", "ha"],
        ["ひ", "hi"],
        ["ふ", "fu*"],
        ["へ", "he"],
        ["ほ", "ho"],
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

  const rows =
    props.type === "base-kana"
      ? baseRows
      : props.type === "dakuten"
        ? dakutenRows
        : handakutenRows

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
