import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/tools')({
  component: RouteComponent,
})

const tools = [
  {
    title: 'Vocab Decks',
    description: 'Practice vocabulary with spaced repetition flashcards',
    icon: '📚',
    href: '/practice/vocab',
    gradient: 'from-blue-400 to-blue-600'
  },
  {
    title: 'Grammar Sheets',
    description: 'Study grammar patterns and structures',
    icon: '📝',
    href: '/learn/grammar',
    gradient: 'from-green-400 to-green-600'
  },
  {
    title: 'Lessons',
    description: 'Follow structured learning paths',
    icon: '🎓',
    href: '/learn',
    gradient: 'from-purple-400 to-purple-600'
  },
  {
    title: 'Sentence Practice',
    description: 'Build sentences and improve comprehension',
    icon: '💬',
    href: '/practice/sentences',
    gradient: 'from-orange-400 to-orange-600'
  },
  {
    title: 'Conjugation',
    description: 'Master verb and adjective conjugations',
    icon: '🔄',
    href: '/practice/conjugation',
    gradient: 'from-red-400 to-red-600'
  }
]

function RouteComponent() {
  return (
    <div class="min-h-screen bg-background p-4">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-3xl font-bold text-foreground mb-8 text-center">
          Learning Tools
        </h1>
        
        {/* Desktop: Grid layout with tall cards */}
        <div class="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tools.map((tool) => (
            <a
              href={tool.href}
              class={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${tool.gradient} p-6 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl aspect-[3/4] flex flex-col justify-between min-h-[300px]`}
            >
              <div class="flex flex-col items-center text-center">
                <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <h2 class="text-xl font-bold mb-3">
                  {tool.title}
                </h2>
                <p class="text-sm opacity-90 leading-relaxed">
                  {tool.description}
                </p>
              </div>
              
              <div class="mt-auto pt-4">
                <div class="w-full h-0.5 bg-white/20 rounded"></div>
                <div class="mt-3 text-center text-sm font-medium opacity-80">
                  Start Learning →
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile: Vertical stack with wide cards */}
        <div class="md:hidden space-y-4">
          {tools.map((tool) => (
            <a
              href={tool.href}
              class={`group block relative overflow-hidden rounded-xl bg-gradient-to-r ${tool.gradient} p-6 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
            >
              <div class="flex items-center space-x-4">
                <div class="text-3xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {tool.icon}
                </div>
                <div class="flex-1 min-w-0">
                  <h2 class="text-lg font-bold mb-1">
                    {tool.title}
                  </h2>
                  <p class="text-sm opacity-90 leading-snug">
                    {tool.description}
                  </p>
                </div>
                <div class="text-white/60 group-hover:text-white transition-colors duration-300 text-xl flex-shrink-0">
                  →
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
