import { type ParentProps } from "solid-js"
import { cn } from "@/utils"

interface Button3DProps extends ParentProps {
  onClick?: () => void
  class?: string
  colors?: { top: string; bottom: string }
}

export function Button3D(props: Button3DProps) {
  const handleClick = () => {
    setTimeout(() => {
      if (props.onClick) {
        props.onClick()
      } else {
        alert("Clicked!")
      }
    }, 300)
  }

  return (
    <div
      class={cn("group relative w-[140px] h-[50px] cursor-pointer select-none", props.class)}
      onClick={handleClick}
    >
      {/* Shadow layer */}
      <div
        class="absolute w-[calc(100%+2px)] h-full top-3.5 -left-px rounded-[7mm] outline-2 outline-[rgb(36,38,34)] -z-2"
        style={{ "background-color": "rgb(80,80,80)" }}
      />
      {/* Bottom layer with side bars */}
      <div
        class={cn(
          "absolute w-full h-full top-[9px] left-0 rounded-[7mm] outline-2 outline-[rgb(36,38,34)] -z-1",
          "before:absolute before:content-[''] before:w-0.5 before:h-[8px] before:bg-[rgb(36,38,34)] before:bottom-0 before:left-[15%]",
          "after:absolute after:content-[''] after:w-0.5 after:h-[8px] after:bg-[rgb(36,38,34)] after:bottom-0 after:left-[85%]"
        )}
        style={{ "background-color": props.colors?.bottom ?? "rgb(188,188,163)" }}
      />
      {/* Top layer */}
      <div
        class={cn(
          "w-full h-full flex items-center justify-center rounded-[7mm] outline-2 outline-[rgb(36,38,34)] text-[rgb(36,38,34)] font-medium text-base transition-transform duration-100 relative overflow-hidden",
          "group-active:translate-y-[9px]",
          "before:absolute before:content-[''] before:w-[15px] before:h-full before:bg-black/10 before:skew-x-30 before:-left-5 before:transition-all before:duration-250",
          "group-active:before:left-[calc(100%+20px)]"
        )}
        style={{ "background-color": props.colors?.top ?? "rgb(225,225,208)" }}
      >
        {props.children}
      </div>
    </div>
  )
}
