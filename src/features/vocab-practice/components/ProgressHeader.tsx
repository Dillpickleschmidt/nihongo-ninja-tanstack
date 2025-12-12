type Props = {
  completed: number
  total: number
  deckName: string
}

export function ProgressHeader(props: Props) {
  return (
    <div>
      <h1>{props.deckName}</h1>
      <p>
        {props.completed} / {props.total}
      </p>
    </div>
  )
}
