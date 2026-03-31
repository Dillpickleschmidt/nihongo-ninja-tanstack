import { type ParentProps, splitProps } from "solid-js"
import { cn } from "@/utils"

interface Button3DProps extends ParentProps {
  onClick?: () => void
  class?: string
  disabled?: boolean
  /** Base tint color — all other colors are derived from this */
  color?: string
  /** Override: main background */
  bgColor?: string
  /** Override: border/outline color */
  borderColor?: string
  /** Override: depth layer background */
  depthColor?: string
  /** Override: text color */
  textColor?: string
}

export function Button3D(props: Button3DProps) {
  const [local, others] = splitProps(props, [
    "onClick",
    "class",
    "disabled",
    "color",
    "bgColor",
    "borderColor",
    "depthColor",
    "textColor",
    "children",
  ])

  const tint = () => local.color ?? "rgb(180, 100, 120)"
  const bg = () => local.bgColor ?? `color-mix(in srgb, ${tint()} 50%, rgb(255,248,248))`
  const border = () => local.borderColor ?? `color-mix(in srgb, ${tint()} 75%, rgb(140,140,140))`
  const depth = () => local.depthColor ?? `color-mix(in srgb, ${tint()} 70%, rgb(255,230,230))`
  const text = () => local.textColor ?? `color-mix(in srgb, ${tint()} 10%, rgb(25,20,18))`

  return (
    <button
      type="button"
      disabled={local.disabled}
      onClick={local.onClick}
      class={cn(
        "action-btn",
        "relative inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-[1em] px-5 py-2.5 mb-[0.7em] text-base font-bold",
        "[transform-style:preserve-3d]",
        local.disabled && "pointer-events-none",
        local.class,
      )}
      style={{
        "background-color": bg(),
        border: `1px solid ${border()}`,
        color: text(),
        "--ab-depth": depth(),
        "--ab-border": border(),
      }}
      {...others}
    >
      <style>{`
        .action-btn {
          transition: transform .1s cubic-bezier(0, 0, .6, 1);
        }
        .action-btn:hover {
          transform: translateY(0.15em);
        }
        .action-btn:active {
          transform: translateY(0.35em);
        }
        .action-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          z-index: -1;
          background: var(--ab-depth);
          box-shadow: 0 0 0 1px var(--ab-border);
          transform: translate3d(0, 0.55em, -1em);
          transition: transform .1s cubic-bezier(0, 0, .6, 1);
        }
        .action-btn:hover::before {
          transform: translate3d(0, 0.4em, -1em);
        }
        .action-btn:active::before {
          transform: translate3d(0, 0.1em, -1em);
        }
      `}</style>
      {local.children}
    </button>
  )
}
