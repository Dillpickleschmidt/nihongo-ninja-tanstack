// features/kana-quiz/components/HeaderCard.tsx
export function HeaderCard(props: {
  title: string
  theme?: { accent: string; message?: string }
}) {
  return (
    <div class="mx-auto max-w-2xl py-2 text-center">
      <h1 class="text-foreground mb-2 text-3xl font-bold tracking-tight">
        {props.title}
      </h1>

      {props.theme && (
        <div
          class={`mx-auto mb-3 h-1 w-12 rounded-full ${props.theme.accent}`}
        />
      )}

      <p class="text-white/50 text-base leading-relaxed">
        {props.theme?.message ??
          "Type the romaji for each kana in the boxes below."}
      </p>

      {!props.theme && (
        <p class="mt-1.5 text-sm text-white/30">
          Practice until it feels natural
        </p>
      )}
    </div>
  )
}
