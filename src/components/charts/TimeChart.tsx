// components/charts/TimeChart.tsx
import Romaji from "@/components/text/Romaji"
import Furigana from "@/components/text/Furigana"

export default function TimeChart() {
  const hours = [
    {
      jp: (
        <Romaji romaji="ichiji">
          い<Furigana furigana={<span class="text-xs">●</span>}>ち</Furigana>じ
        </Romaji>
      ),
      en: "1 o’clock",
    },
    {
      jp: (
        <Romaji romaji="niji">
          <Furigana furigana={<span class="text-xs">●</span>}>に</Furigana>じ
        </Romaji>
      ),
      en: "2 o’clock",
    },
    {
      jp: (
        <Romaji romaji="sanji">
          <Furigana furigana={<span class="text-xs">●</span>}>さ</Furigana>んじ
        </Romaji>
      ),
      en: "3 o’clock",
    },
    {
      jp: (
        <Romaji romaji="yoji">
          <Furigana furigana={<span class="text-xs">●</span>}>よ</Furigana>じ
        </Romaji>
      ),
      en: "4 o’clock",
    },
    {
      jp: (
        <Romaji romaji="goji">
          <Furigana furigana={<span class="text-xs">●</span>}>ご</Furigana>じ
        </Romaji>
      ),
      en: "5 o’clock",
    },
    {
      jp: (
        <Romaji romaji="rokuji">
          ろ<Furigana furigana={<span class="text-xs">●</span>}>く</Furigana>じ
        </Romaji>
      ),
      en: "6 o’clock",
    },
    {
      jp: (
        <Romaji romaji="shichiji">
          し<Furigana furigana={<span class="text-xs">●</span>}>ち</Furigana>じ
        </Romaji>
      ),
      en: "7 o’clock",
    },
    {
      jp: (
        <Romaji romaji="hachiji">
          は<Furigana furigana={<span class="text-xs">●</span>}>ち</Furigana>じ
        </Romaji>
      ),
      en: "8 o’clock",
    },
    {
      jp: (
        <Romaji romaji="kuji">
          <Furigana furigana={<span class="text-xs">●</span>}>く</Furigana>じ
        </Romaji>
      ),
      en: "9 o’clock",
    },
    {
      jp: (
        <Romaji romaji="juuji">
          <Furigana furigana={<span class="text-xs">●</span>}>じゅ</Furigana>
          うじ
        </Romaji>
      ),
      en: "10 o’clock",
    },
    {
      jp: (
        <Romaji romaji="juuichiji">
          じゅうい
          <Furigana furigana={<span class="text-xs">●</span>}>ち</Furigana>じ
        </Romaji>
      ),
      en: "11 o’clock",
    },
    {
      jp: (
        <Romaji romaji="juuniji">
          じゅう
          <Furigana furigana={<span class="text-xs">●</span>}>に</Furigana>じ
        </Romaji>
      ),
      en: "12 o’clock",
    },
  ]

  return (
    <div class="bg-card/80 border-border rounded-xl border shadow">
      <ul class="divide-border divide-y">
        {hours.map((h, idx) => (
          <li key={idx} class="flex items-center justify-between px-6 py-4">
            <span class="text-foreground text-2xl font-semibold">{h.jp}</span>
            <span class="text-muted-foreground text-lg">{h.en}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
