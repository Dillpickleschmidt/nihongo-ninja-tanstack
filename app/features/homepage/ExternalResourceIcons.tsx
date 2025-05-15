import {
  AvatarGroup,
  type AvatarGroupItem,
} from "@/components/ui/custom/avatar-group"

export default function ExternalResourceIcons() {
  // Example data for 10 avatars
  const avatarItems: AvatarGroupItem[] = [
    {
      src: "/avatars/avatar1.png",
      fallback: "AB",
      notes_internal: "YouTube",
    },
    {
      src: "/avatars/avatar2.png",
      fallback: "CD",
      notes_internal: "Genki",
    },
    {
      src: "/avatars/avatar3.png",
      fallback: "EF",
      notes_internal: "Anki",
    },
    {
      src: "/avatars/avatar4.png",
      fallback: "GH",
      notes_internal: "WaniKani",
    },
    {
      src: "/avatars/avatar5.png",
      fallback: "IJ",
      notes_internal: "Satori Reader",
    },
    {
      src: "/avatars/avatar6.png",
      fallback: "KL",
      notes_internal: "Netfix",
    },
    {
      src: "/avatars/avatar7.png",
      fallback: "MN",
      notes_internal: "ToKini Andy",
    },
    {
      src: "/avatars/avatar8.png",
      fallback: "OP",
      notes_internal: "Kaname",
    },
    {
      src: "/avatars/avatar9.png",
      fallback: "QR",
      notes_internal: "JPDB",
    },
    {
      src: "/avatars/avatar10.png",
      fallback: "ST",
      notes_internal: "Tofugu",
    },
    {
      src: "/avatars/avatar11.png",
      fallback: "TA",
      notes_internal: "Crunchyroll",
    },
    {
      src: "/avatars/avatar12.png",
      fallback: "MI",
      notes_internal: "Game Gengo",
    },
    {
      src: "/avatars/avatar12.png",
      fallback: "MI",
      notes_internal: "Miku Real Japanese",
    },
    {
      src: "/avatars/avatar12.png",
      fallback: "MI",
      notes_internal: "Nihongo Learning",
    },
    {
      src: "/avatars/avatar12.png",
      fallback: "MI",
      notes_internal: "Speak Japanese Naturally",
    },
  ]
  return (
    <div>
      <AvatarGroup items={avatarItems} maxItems={12} />
    </div>
  )
}
