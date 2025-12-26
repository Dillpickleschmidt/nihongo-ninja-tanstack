export function CheckIcon(props: { class?: string }) {
  return (
    <svg
      class={props.class ?? "size-4"}
      viewBox="0 0 16 16"
      fill="currentColor"
    >
      <path d="M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0z" />
    </svg>
  )
}
