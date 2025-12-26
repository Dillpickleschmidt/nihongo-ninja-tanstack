import { StatCounter } from "../components/stat-counter"

export function StatsSection() {
  return (
    <section class="relative py-20 border-y border-white/5">
      <div class="mx-auto max-w-5xl px-6">
        <div class="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <StatCounter value="200+" label="Curated Lessons" delay={0} />
          <StatCounter value="11" label="Conjugation Forms" delay={100} />
          <StatCounter value="5" label="JLPT Levels" delay={200} />
          <StatCounter value="∞" label="Practice Sessions" delay={300} />
        </div>
      </div>
    </section>
  )
}
