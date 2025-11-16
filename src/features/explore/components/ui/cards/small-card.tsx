import { Link } from "@tanstack/solid-router"
import { Show, createSignal } from "solid-js"
import { CalendarDays, Tv } from "lucide-solid"
import { StatusDot } from "../status-dot"
import { LoadImage } from "../img/load-image"
import type { FragmentOf } from "gql.tada"
import type { FullMedia } from "../../../api/anilist/queries"
import { coverMedium, format, title } from "../../../api/anilist/util"

interface SmallAnimeCardProps {
  media: FragmentOf<typeof FullMedia>
  status?:
    | "CURRENT"
    | "PLANNING"
    | "COMPLETED"
    | "PAUSED"
    | "DROPPED"
    | "REPEATING"
}

export function SmallAnimeCard(props: SmallAnimeCardProps) {
  const [hidden, setHidden] = createSignal(true)

  const coverUrl = () => coverMedium(props.media as any) ?? ""
  const titleText = () => title(props.media as any)
  const formatText = () => format(props.media as any)
  const year = () => props.media.seasonYear ?? "TBA"

  function onclick() {
    // Navigation happens automatically via <A> link
  }

  function onhover(state: boolean) {
    setHidden(!state)
  }

  return (
    <Link
      to={`.`}
      // to={`/extracurriculars-v2/anime/${props.media.id}`}
      class="pointer-events-auto relative shrink-0 cursor-pointer p-4 text-white [contain-intrinsic-size:auto_152px_auto_290.4px] [content-visibility:auto]"
      classList={{
        "![content-visibility:visible]": !hidden(),
        "z-40": !hidden(),
      }}
      onMouseEnter={() => onhover(true)}
      onMouseLeave={() => onhover(false)}
      onClick={onclick}
    >
      <div
        class="item flex w-[9.5rem] flex-col"
        style={{ "aspect-ratio": "152/290" }}
      >
        {/* Cover Image */}
        <div class="h-[13.5rem]">
          <LoadImage
            src={coverUrl()}
            alt="cover"
            class="h-full w-full rounded object-cover"
            color={props.media.coverImage?.color}
          />
        </div>

        {/* Title */}
        <div class="line-clamp-2 pt-3 text-[0.8rem] font-black">
          <Show when={props.status}>
            <StatusDot variant={props.status!} />
          </Show>
          {titleText()}
        </div>

        {/* Metadata */}
        <div class="mt-auto flex justify-between pt-2 text-neutral-500">
          <div class="flex items-center text-xs font-medium">
            <CalendarDays class="mr-1 -ml-0.5 h-[1rem] w-[1rem]" />
            {year()}
          </div>
          <div class="flex items-center text-xs font-medium">
            {formatText()}
            <Tv class="-mr-0.5 ml-1 h-[1rem] w-[1rem]" />
          </div>
        </div>
      </div>
    </Link>
  )
}
