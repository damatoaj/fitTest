import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './TreadmillTests.css';

type Treadmill = {
    seconds:number;
    minutes:number;
    stage:number;
    grade:number;
    mph:number;
    inProgress:boolean;
    mets:number
}

const Ramp = () => {
    const navigate = useNavigate();
    const [state, setState] = useState<Treadmill>({
        seconds: 0,
        minutes: 0,
        stage : 1,
        grade : 0,
        mph: .5,
        inProgress: false,
        mets: 1
    });

    const handleStart = () => {
        setState((prev:Treadmill) => {
            return {...prev, inProgress : true }
        })
    };

    const handleStop = () => {
        const queryParams = new URLSearchParams({
            mets: state.mets.toString()
        });
        navigate({
            pathname: '/treadmill-protocols/bruce/results/',
            search: `?${queryParams}`
        })
    };

    useEffect(()=> {
        if (state.inProgress) {
            const rampTest = setInterval(()=> {
                if (state.seconds < 59) {
                    setState((prev:Treadmill) => ({ ...prev, seconds : prev.seconds + 1 }))
                } else {
                    setState((prev:Treadmill) => ({...prev, seconds:0 }))
                };

                if (state.seconds === 0 || state.seconds === 30) {
                    console.warn('update stage')
                    //update stage
                    if (state.stage < 32) {
                        setState((prev:Treadmill)=> ({...prev, stage: prev.stage + 1})) 
                    } else {
                        setState((prev:Treadmill)=> ({...prev, inProgress:false}))
                        clearInterval(rampTest)
                    }
                    //update mph
                    if (state.stage < 6) setState((prev:Treadmill) => ({ ...prev, mph:prev.mph + .5 }))
                    //update grad
                    if (state.stage > 6) setState((prev:Treadmill)=> ({ ...prev, grade: prev.grade+1 }))
                    //update METS
                    if (6 > state.stage && state.stage > 2) setState((prev:Treadmill)=> ({ ...prev, mets: 2 }))
                    if (state.stage < 8) setState((prev:Treadmill)=> ({ ...prev, mets: 3 }))
                    if (state.stage < 11) setState((prev:Treadmill)=> ({ ...prev, mets: 4 }))
                    if (state.stage < 13) setState((prev:Treadmill)=> ({ ...prev, mets: 5 }))
                    if (state.stage < 16) setState((prev:Treadmill)=> ({ ...prev, mets: 6 }))
                    if (state.stage < 19) setState((prev:Treadmill)=> ({ ...prev, mets: 7 }))
                    if (state.stage < 21) setState((prev:Treadmill)=> ({ ...prev, mets: 8 }))
                    if (state.stage < 24) setState((prev:Treadmill)=> ({ ...prev, mets: 9 }))
                    if (state.stage < 27) setState((prev:Treadmill)=> ({ ...prev, mets: 10 }))
                    if (state.stage < 29) setState((prev:Treadmill)=> ({ ...prev, mets: 11 }))
                    if (state.stage < 31) setState((prev:Treadmill)=> ({ ...prev, mets: 12 }))
                    if (state.stage < 33) setState((prev:Treadmill)=> ({ ...prev, mets: 13 }))
                }   

                
            }, 1000)
            return ()=> clearInterval(rampTest);
        }
    }, [state])

    return (
        <main className='container'>
            {state.inProgress && (
                <section>
                    <h1>You Are In Stage {state.stage}</h1>
                    <h2>Your Treadmill Should Be Set At</h2>
                    <span>
                        <h3>{state.mph} MPH</h3>
                        <h3>{state.grade}% Grade</h3>
                    </span>
                </section>
            )}
            <h2>Time</h2>
            <time>{state.minutes < 10 ? `0${state.minutes}`:state.minutes}:{state.seconds < 10 ? `0${state.seconds}`:state.seconds}</time>

            {!state.inProgress && <button type='button' onClick={handleStart} disabled={state.inProgress}>Start</button>}
            {state.inProgress && <button type='button' onClick={handleStop} disabled={!state.inProgress}>Stop</button>}
        </main>
    )
};

export default Ramp;