import { Link } from "@tanstack/solid-router"

export function Footer() {
  return (
    <footer class="border-t border-white/5 py-12">
      <div class="mx-auto max-w-7xl px-6">
        <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div class="flex items-center gap-2 text-lg font-bold">
            <img src="/icons/ninja.png" alt="Ninja" class="size-8 -mb-1.25" />
            <span class="text-white/70">Nihongo Ninja</span>
          </div>
          <div class="flex items-center gap-6 text-sm text-white/40">
            <Link to="/about" class="hover:text-white transition-colors">
              About
            </Link>
            <a href="#" class="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" class="hover:text-white transition-colors">
              Terms
            </a>
            <a
              href="https://github.com"
              class="hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
          <div class="text-sm text-white/30">© 2025 Nihongo Ninja</div>
        </div>
      </div>
    </footer>
  )
}
