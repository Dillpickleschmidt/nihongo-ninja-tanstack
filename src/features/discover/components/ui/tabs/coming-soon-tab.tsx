interface ComingSoonTabProps {
  label: string
}

export function ComingSoonTab(props: ComingSoonTabProps) {
  return (
    <div class="flex min-h-[60vh] flex-col items-center justify-center px-6">
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(1rem); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.5s ease-out both; }
      `}</style>

      {/* Decorative background glyph */}
      <div class="pointer-events-none select-none text-[12rem] font-black leading-none text-white/2">
        {props.label === "YouTube" ? "再" : "劇"}
      </div>

      <div class="animate-fade-up relative -mt-24 flex flex-col items-center gap-3">
        <div class="rounded-full border border-white/8 bg-white/3 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/25">
          Coming Soon
        </div>
        <h2 class="text-2xl font-semibold text-white/50">{props.label}</h2>
        <p class="max-w-xs text-center text-sm leading-relaxed text-white/20">
          {props.label === "YouTube"
            ? "Japanese YouTube channels curated for language learning — gaming, science, vlogs, and more."
            : "Japanese and Korean dramas with comprehension tracking and vocab integration."}
        </p>
      </div>
    </div>
  )
}
