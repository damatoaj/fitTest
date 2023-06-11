type Props = {
    number: number
}

function Countdown({number} : Props) {
  return (
    <h2 className="countdown">{number}</h2>
  )
}

export default Countdown
