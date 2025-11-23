import { JSXElement } from "solid-js"

interface CategoryLayoutProps {
  sidebar: JSXElement
  children: JSXElement
}

export function CategoryLayout(props: CategoryLayoutProps) {
  return (
    <div class="relative flex min-h-[calc(100vh-4rem)] w-full flex-col md:flex-row">
      {/* ================= Desktop Sidebar ================= */}
      <aside class="hidden w-64 shrink-0 flex-col gap-6 border-r border-white/5 p-6 md:flex lg:w-72">
        {props.sidebar}
      </aside>

      {/* ================= Main Content Area ================= */}
      <div class="flex min-w-0 flex-1 flex-col">{props.children}</div>
    </div>
  )
}
