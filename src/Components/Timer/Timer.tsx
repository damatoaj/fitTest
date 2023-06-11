import { useState, useEffect } from 'react'
import './Timer.css'
import Countdown from './Countdown'
import { useNavigate } from 'react-router-dom'

type Props = {
    nextUrl: string;
}

const Timer = ({ nextUrl } : Props) =>{
    const [seconds,setSeconds] = useState<number>(2)
    const [active, setActive] = useState<boolean>(false)
    const navigate = useNavigate()

    useEffect(()=> {
        if (active === true) {
            return 
        }
        const decrement : ReturnType<typeof setInterval> = setInterval(()=> {
            if (seconds - 1 === 0) {
                setActive(true)
            }
            setSeconds(seconds => seconds - 1)
        }, 1000)
        return ()=> clearInterval(decrement)
    }, [seconds, active])

    useEffect(()=> {
        const increment : ReturnType<typeof setInterval> = setInterval(()=> {
            if (active === true) {
                setSeconds(seconds => seconds + 1)
            }
        }, 1000)
        return ()=> clearInterval(increment)
    }, [seconds, active])
  return (
    <div>
        <div>Timer</div>
        {seconds > 0 && active && <Countdown number={seconds} />}
        {seconds === 2 && !active && <h1>Ready!!!</h1>}
        {seconds === 1 && !active && <h1>Set!!!</h1>}
        {seconds === 0 && !active && <h1>Go!!!</h1>}
        <button type="button" onClick={()=> navigate(nextUrl)}>Finished</button>
    </div>
  )
}

export default Timer