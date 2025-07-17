import { AvatarGroup, type AvatarGroupItem } from "./avatar-group"

export const AvatarGroupDemo = () => {
  // Example data for 10 avatars
  const avatarItems: AvatarGroupItem[] = [
    {
      src: "/avatars/avatar1.png",
      fallback: "AB",
    },
    {
      src: "/avatars/avatar2.png",
      fallback: "CD",
    },
    {
      src: "/avatars/avatar3.png",
      fallback: "EF",
    },
    {
      src: "/avatars/avatar4.png",
      fallback: "GH",
    },
    {
      src: "/avatars/avatar5.png",
      fallback: "IJ",
    },
    {
      src: "/avatars/avatar6.png",
      fallback: "KL",
    },
    {
      src: "/avatars/avatar7.png",
      fallback: "MN",
    },
    {
      src: "/avatars/avatar8.png",
      fallback: "OP",
    },
    {
      src: "/avatars/avatar9.png",
      fallback: "QR",
    },
    {
      src: "/avatars/avatar10.png",
      fallback: "ST",
    },
  ]

  return (
    <div class="space-y-4">
      <h2 class="text-lg font-semibold">Avatar Group Examples</h2>

      <div>
        <h3 class="mb-2 text-sm font-medium">
          Default (LTR stacking - leftmost on top)
        </h3>
        <AvatarGroup items={avatarItems} />
      </div>

      <div>
        <h3 class="mb-2 text-sm font-medium">
          RTL stacking - rightmost on top
        </h3>
        <AvatarGroup items={avatarItems} direction="rtl" />
      </div>

      <div>
        <h3 class="mb-2 text-sm font-medium">With maximum 5 avatars shown</h3>
        <AvatarGroup items={avatarItems} maxItems={5} />
      </div>

      <div>
        <h3 class="mb-2 text-sm font-medium">With custom overlap (50%)</h3>
        <AvatarGroup items={avatarItems} overlap={50} />
      </div>
    </div>
  )
}
