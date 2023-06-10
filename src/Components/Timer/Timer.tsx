import { useState, useEffect, memo, useRef} from 'react'
import './Timer.css'
import Countdown from './Countdown'
import { useNavigate } from 'react-router-dom'

type Props = {
    nextUrl: string;
}

const Timer = ({ nextUrl } : Props) =>{
    const [seconds,setSeconds] = useState<number>(3)
    const navigate = useNavigate()




    useEffect(()=> {
        console.log(seconds)
        const decrement : ReturnType<typeof setInterval> = setInterval(()=> {
            console.log('subtract')
            setSeconds(seconds - 1)
            console.log(seconds, '<-- after')
        }, 1000)
        return clearInterval(decrement)
    }, [seconds])
  return (
    <div>
        <div>Timer</div>
        <Countdown number={seconds} />
        <button type="button" onClick={()=> navigate(nextUrl)}>Finished</button>
    </div>
  )
}

export default Timer