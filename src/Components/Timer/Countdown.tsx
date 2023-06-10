type Props = {
    number: number
}

function Countdown({number} : Props) {
  return (
    <div className="countdown">{number}</div>
  )
}

export default Countdown
