import ResultsScreen from "../../Components/ResultsScreen";
import StepTestForm from "../../Components/Forms/StepTestForm";
import { useUserContext } from "../../Hooks/useUserContext";
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

function StepTestTime() {
    const navigate = useNavigate();
    const [state, setState] = useState({
        count : 0,
        phase : 0,
    });

    const [step, setStep] = useState(1)

    const phrases = [
        'Get ready in...',
        'Step test in progress',
        'Find your pulse on the wrist or neck',
        'Count your pulses for 15 seconds',
        'Hit next to enter your pulse rate '
    ];

    const progress = useMemo(()=> {
        const phases = [3,180,5,15];

        return state.count * 100 / phases[state.phase];
    }, [state.count, state.phase]);

    const time = useMemo(()=> {
        let minutes = `0${Math.floor(state.count / 60 % 60)}`;
        let seconds = `${state.count % 60}`;
        if (parseInt(seconds) < 9) seconds = `0${seconds}`
        return `${minutes} : ${seconds}`
    }, [state.phase, state.count]);
    const user = useUserContext();
    const bpm : number = user.state.user.sex === 'MALE' ? Math.floor(60000 / 96) : Math.floor(60000 / 84);

    useEffect(()=> {
        const countInterval = setInterval(()=> {
           if (progress === 100 && state.phase === 3) return
           if (progress < 100) {
            setState({...state, count: state.count + 1, phase : state.phase})
           } else {
               setState({...state, count: 0, phase : state.phase + 1})
           }
        }, 1000);
        return  ()=> clearInterval(countInterval);
    }, [state, progress]);

    useEffect(()=> {
        const stepInterval = setInterval(()=> {
            if (state.phase !== 1) return 
            if (step === 4) {
                setStep(1)
            } else {
                setStep(step + 1)
            };
        }, bpm)
        return ()=> clearInterval(stepInterval);
    }, [step, bpm, state.phase])

    let root = document.documentElement;
    root.style.setProperty('--bpm-animation-duration', `${bpm}ms`);

  return(
    <main>
        <h1 data-phase={state.phase}>{phrases[state.phase]}</h1>
        <progress value={progress} max='100'/>
        {/* <span>{state.count} </span> */}
        <span>{time}</span>
    {state.phase === 1 && <h2 data-direction={step === 1 || step === 2 ? 'up' : 'down'} data-foot={step === 1 || step === 3  ? 'left' : 'right'}>{step > 2 ? 'Down' : 'Up'}</h2>}
        {state.phase === 3 && progress === 100 && <button type='button' onClick={()=> navigate('/step-test/results')}>Click To Enter Your Results</button>}
    </main>
  )
}

export default StepTestTime;