import { For, Show, JSX } from "solid-js"
import { ChevronRight, ChevronDown } from "lucide-solid"

export interface TreeNode {
  id: string
  label: string
  children?: TreeNode[]
  data?: any
}

export interface TreeViewProps {
  nodes: TreeNode[]
  selectedId?: string
  onSelect?: (id: string, node: TreeNode) => void
  expandedIds?: Set<string>
  onToggle?: (id: string) => void
  level?: number
  className?: string
  renderIcon?: (node: TreeNode, isExpanded: boolean) => JSX.Element
  renderLabel?: (node: TreeNode, isSelected: boolean) => JSX.Element
  isSelectable?: (node: TreeNode) => boolean
}

function TreeViewNode(props: TreeViewProps & { node: TreeNode }) {
  const hasChildren = () =>
    props.node.children && props.node.children.length > 0
  const isExpanded = () => props.expandedIds?.has(props.node.id) ?? false
  const isSelected = () => props.selectedId === props.node.id
  const isSelectable = () => props.isSelectable?.(props.node) ?? true
  const level = () => props.level ?? 0
  const paddingLeft = `${level() * 16 + 8}px`

  const handleToggle = (e: MouseEvent) => {
    e.stopPropagation()
    if (hasChildren()) {
      props.onToggle?.(props.node.id)
    }
  }

  const handleSelect = (e: MouseEvent) => {
    e.stopPropagation()
    if (isSelectable()) {
      props.onSelect?.(props.node.id, props.node)
    }
  }

  return (
    <div>
      <div
        class={`flex items-center rounded-sm px-2 py-1 text-xs ${
          isSelectable() ? "cursor-pointer hover:bg-accent" : "cursor-default"
        } ${
          isSelected() && isSelectable() ? "ring-border bg-accent ring-1" : ""
        }`}
        style={{ "padding-left": paddingLeft }}
        onClick={handleSelect}
      >
        {/* Expand/Collapse Button */}
        <Show when={hasChildren()} fallback={<div class="mr-1 h-4 w-4" />}>
          <button
            class="mr-1 flex h-4 w-4 items-center justify-center rounded-sm hover:bg-accent"
            onClick={handleToggle}
          >
            <Show
              when={isExpanded()}
              fallback={<ChevronRight class="h-3 w-3" />}
            >
              <ChevronDown class="h-3 w-3" />
            </Show>
          </button>
        </Show>

        {/* Icon */}
        <Show when={props.renderIcon}>
          {props.renderIcon!(props.node, isExpanded())}
        </Show>

        {/* Label */}
        <Show
          when={props.renderLabel}
          fallback={<span class="flex-1 truncate">{props.node.label}</span>}
        >
          {props.renderLabel!(props.node, isSelected())}
        </Show>
      </div>

      {/* Children */}
      <Show when={hasChildren() && isExpanded()}>
        <TreeView
          nodes={props.node.children!}
          selectedId={props.selectedId}
          onSelect={props.onSelect}
          expandedIds={props.expandedIds}
          onToggle={props.onToggle}
          level={level() + 1}
          renderIcon={props.renderIcon}
          renderLabel={props.renderLabel}
          isSelectable={props.isSelectable}
        />
      </Show>
    </div>
  )
}

export function TreeView(props: TreeViewProps) {
  return (
    <div class={props.className}>
      <For each={props.nodes}>
        {(node) => <TreeViewNode {...props} node={node} />}
      </For>
    </div>
  )
}
