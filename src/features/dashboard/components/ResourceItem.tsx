import type { ResourceItem as ResourceItemType } from "../types"

interface ResourceItemProps {
  resource: ResourceItemType
  index: () => number
}

export function ResourceItem(props: ResourceItemProps) {
  const getTypeIndicator = () => {
    switch (props.resource.type) {
      case "guide":
        return { color: "text-blue-400", badge: "Guide" }
      case "external":
        return { color: "text-green-400", badge: "External" }
      case "tool":
        return { color: "text-purple-400", badge: "Tool" }
      default:
        return { color: "text-muted-foreground", badge: "" }
    }
  }

  const typeInfo = getTypeIndicator()

  return (
    <a
      href={props.resource.href}
      class="group bg-card border-border hover:bg-accent flex items-center space-x-4 rounded-lg border p-4 transition-all duration-200 hover:scale-[1.01] hover:shadow-md"
    >
      <div class="text-2xl transition-transform duration-200 group-hover:scale-110">
        {props.resource.icon}
      </div>
      <div class="min-w-0 flex-1">
        <div class="mb-1 flex items-center gap-2">
          <h3
            class={`text-foreground font-semibold group-hover:${typeInfo.color} transition-colors duration-200`}
          >
            {props.resource.name}
          </h3>
          {typeInfo.badge && (
            <span
              class={`bg-muted rounded-full px-2 py-1 text-xs ${typeInfo.color} font-medium`}
            >
              {typeInfo.badge}
            </span>
          )}
        </div>
        <p class="text-muted-foreground text-sm leading-relaxed">
          {props.resource.description}
        </p>
      </div>
      <div class="text-muted-foreground group-hover:text-foreground transition-all duration-200 group-hover:translate-x-1">
        →
      </div>
    </a>
  )
}
