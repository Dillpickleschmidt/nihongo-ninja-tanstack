// app/routes/_learn.tsx
import { createFileRoute, Outlet } from "@tanstack/solid-router"

export const Route = createFileRoute("/_learn")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <style>
        {`
          .custom-gradient-mask {
             mask-image: linear-gradient(to bottom, 
              transparent 0%,
              rgba(0, 0, 0, 1) 0%,
              rgba(0, 0, 0, 0) 100%
            );
            -webkit-mask-image: linear-gradient(to bottom, 
              transparent 0%,
              rgba(0, 0, 0, 1) 0%,
              rgba(0, 0, 0, 0) 100%
            );
          }
          .centered-bg-image {
            position: absolute;
            top: -64px;
            left: 50%;
            transform: translateX(-50%);
            width: auto;
            height: 100vh;
            min-height: 100vh;
            object-fit: cover;
            object-position: center;
            z-index: -2;
            pointer-events: none;
            opacity: 0.18;
          }
          @media (max-width: 768px) {
            .centered-bg-image {
              min-width: calc(100vw + 30px);
              width: calc(100vw + 30px);
              left: calc(50% + 15px);
            }
          }
        `}
      </style>
      <img
        src="/img/japanese-gate.png"
        class="custom-gradient-mask centered-bg-image"
        alt="Decorative Japanese Gate"
      />
      <Outlet />
    </div>
  )
}
