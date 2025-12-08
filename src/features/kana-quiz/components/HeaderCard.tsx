// features/kana-quiz/components/HeaderCard.tsx
export function HeaderCard(props: {
  title: string
  theme?: { accent: string; message?: string }
}) {
  return (
    <div class="bg-card/70 border-border mx-auto max-w-2xl rounded-xl border p-6 text-center shadow backdrop-blur-sm">
      <h1 class="text-foreground mb-2 text-3xl font-extrabold">
        {props.title}
      </h1>

      {/* Optional accent line */}
      {props.theme && (
        <div class={`mx-auto mb-4 h-1 w-16 rounded ${props.theme.accent}`} />
      )}

      {/* Body message */}
      <p class="text-muted-foreground text-lg">
        {props.theme?.message ??
          "Type the romaji for each kana in the boxes below."}
      </p>

      {/* Only shown for normal intro */}
      {!props.theme && (
        <p class="text-muted-foreground/80 mt-2 text-sm">
          Practice until it feels natural 👍
        </p>
      )}
    </div>
  )
}
