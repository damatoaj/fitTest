import { useState, useEffect, memo } from 'react'
import './Timer.css'
import Countdown from './Countdown'
import { useNavigate } from 'react-router-dom'

type Props = {
    nextUrl: string;
}



const RedirectBtn = memo(({ nextUrl } : Props) => {
    const navigate = useNavigate()
    const handleRedirect = () => {
        navigate(nextUrl)
    }
    return (
        <button type='button' onClick={handleRedirect}>Finished</button>
    )
})

const Timer = ({ nextUrl } : Props) =>{
    const [seconds,setSeconds] = useState<number>(3)
    const [active, setActive] = useState<boolean>(false)

    useEffect(()=> {
        if (active === true) {
            return 
        }
        const decrement : ReturnType<typeof setInterval> = setInterval(()=> {
            if (seconds - 1 === 0) {
                setActive(true)
                return
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
    <div className='timer'>
        {seconds > 0 && active && <Countdown number={seconds} />}
        {seconds === 3 && !active && <h2 className='blink'>Ready!!!</h2>}
        {seconds === 2 && !active && <h2 className='blink'>Set!!!</h2>}
        {seconds === 1 && !active && <h2 className='blink'>Go!!!</h2>}
        <RedirectBtn nextUrl={nextUrl} />
    </div>
  )
}

export default Timer