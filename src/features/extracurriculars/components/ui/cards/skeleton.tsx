import { Component } from 'solid-js'

interface SkeletonProps {
  animate?: boolean
}

const Skeleton: Component<SkeletonProps> = (props) => {
  const { animate = true } = props

  return (
    <div class="p-4 shrink-0">
      <div class="item w-[9.5rem] flex flex-col">
        <div class={`h-[13.5rem] w-full bg-primary/5 rounded ${animate ? 'animate-pulse' : ''}`} />
        <div class={`mt-4 bg-primary/5 rounded h-2 w-28 ${animate ? 'animate-pulse' : ''}`} />
        <div class={`mt-2 bg-primary/5 rounded h-2 w-20 ${animate ? 'animate-pulse' : ''}`} />
      </div>

      <style>{`
        .item {
          animation: 0.3s ease 0s 1 load-in;
          aspect-ratio: 152/290;
        }

        @keyframes load-in {
          from {
            opacity: 0;
            transform: translate3d(-50%, 1.2rem, 0) scale(0.95);
          }
        }
      `}</style>
    </div>
  )
}

export default Skeleton
export { Skeleton }
export type { SkeletonProps }
