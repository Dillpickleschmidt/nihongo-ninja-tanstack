import { cn } from "@/utils"
import { JSXElement, ParentComponent } from "solid-js"

interface SettingsSectionProps {
  title: string
  description?: string
  children: JSXElement
  class?: string
}

export const SettingsSection: ParentComponent<SettingsSectionProps> = (props) => {
  return (
    <div class={cn("space-y-6", props.class)}>
      <div>
        <h2 class="text-2xl font-bold text-white">{props.title}</h2>
        {props.description && (
          <p class="text-muted-foreground mt-1 text-base">{props.description}</p>
        )}
      </div>
      <div class="w-full">
        {props.children}
      </div>
    </div>
  )
}

