import Romaji from "@/components/text/Romaji"

export default function Numbers10() {
  return (
    <div class="bg-card/80 border-border rounded-xl border shadow">
      <ul class="divide-border divide-y">
        {[
          { jp: <Romaji romaji="ichi">いち</Romaji>, num: 1 },
          { jp: <Romaji romaji="ni">に</Romaji>, num: 2 },
          { jp: <Romaji romaji="san">さん</Romaji>, num: 3 },
          {
            jp: (
              <>
                <Romaji romaji="yon">よん</Romaji> /{" "}
                <Romaji romaji="shi">し</Romaji>
              </>
            ),
            num: 4,
          },
          { jp: <Romaji romaji="go">ご</Romaji>, num: 5 },
          { jp: <Romaji romaji="roku">ろく</Romaji>, num: 6 },
          {
            jp: (
              <>
                <Romaji romaji="nana">なな</Romaji> /{" "}
                <Romaji romaji="shichi">しち</Romaji>
              </>
            ),
            num: 7,
          },
          { jp: <Romaji romaji="hachi">はち</Romaji>, num: 8 },
          {
            jp: (
              <>
                <Romaji romaji="kyuu">きゅう</Romaji> /{" "}
                <Romaji romaji="ku">く</Romaji>
              </>
            ),
            num: 9,
          },
          { jp: <Romaji romaji="juu">じゅう</Romaji>, num: 10 },
        ].map((item) => (
          <li
            key={item.num}
            class="flex items-center justify-between px-6 py-4"
          >
            <div class="flex flex-col">
              <span class="text-foreground text-2xl font-semibold">
                {item.jp}
              </span>
            </div>
            <span class="text-muted-foreground text-lg">{item.num}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
