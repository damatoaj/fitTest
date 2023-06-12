import { useRef, memo, useState, FormEvent, ChangeEvent } from 'react'
import { useEquipmentContext } from '../../Hooks/useEquipmentContext'
import Error from '../Error'
import Loader from '../Loader'
const checkInput = (input:HTMLInputElement) =>  {
    if (input.min && parseInt(input.value) < parseInt(input.min)) return 'Input value is too low'
    if (input.max && parseInt(input.value) > parseInt(input.max)) return 'Input value exceeds boundaries'
    if (input.maxLength && input.value.length > input.maxLength) return 'Too many characters'
    return ''
}
const EquipmentForm = () => {
    const { state, dispatch } = useEquipmentContext()
    const form = useRef<HTMLFormElement | null>(null)
    const input = useRef<HTMLInputElement | null>(null)
    const [data,setData] = useState({
        '12bench':false,
        '16bench':false,
        'benchPressStation':false,
        'bloodPressureCuff':false,
        'bodyFatPercentage':false,
        'handGripDynamometer':false,
        'legPress':false,
        'measuringTap':false,
        'metronome':false,
        'sitReachBox':false,
        'skinFoldCalipers':false,
        'stopwatch':false,
        'treadmill':false,
        'treadmillDegrees': null
})

    let valid : boolean = false
    let message : string = ''
    if(form.current && form.current !== null) {
        valid = form.current.checkValidity()
        if(input.current) {message = checkInput(input.current)}
    }


    const handleReset = () => {
        setData({
            '12bench':false,
            '16bench':false,
            'benchPressStation':false,
            'bloodPressureCuff':false,
            'bodyFatPercentage':false,
            'handGripDynamometer':false,
            'legPress':false,
            'measuringTap':false,
            'metronome':false,
            'sitReachBox':false,
            'skinFoldCalipers':false,
            'stopwatch':false,
            'treadmill':false,
            'treadmillDegrees': null
    })};

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        dispatch({type:'LOADING', payload:true})
        try {
            dispatch({type:'UPDATE', payload:data})
        } catch (error) {
            dispatch({type:'ERROR', payload:error})
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData(prev => {
            return {...prev, [e.target.name]:e.target.checked}
        })
    }

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            onReset={handleReset}
        >
            <h2>Available Testing Equipment</h2>
            <p>Check The Box If You Have Access To This Piece Of Equipment</p>
            <fieldset>
                <legend>Equipment</legend>
                <label>
                    <input 
                        autoFocus={true}
                        onChange={handleChange}
                        type='checkbox'
                        name='12bench'
                    />
                    12 Inch (30.5cm) Bench
                </label>
                <label>
                    <input 
                        onChange={handleChange}
                        type='checkbox'
                        name='16bench'
                    />
                    16.25 Inch (41.25cm) Bench
                </label>
                <label>
                    <input
                        onChange={handleChange}
                        type='checkbox'
                        name='benchPress'
                    />
                    Bench Press Station
                </label>
                <label>
                    <input 
                        onChange={handleChange}
                        type='checkbox'
                        name='bloodPressureCuff'
                    />
                    Blood Pressure Cuff (Manual with Stethoscope or Automated)
                </label>
                <label>
                    <input 
                        onChange={handleChange}
                        type='checkbox'
                        name='bodyFatPercentage'
                    />
                    Body Fat Percentage Device
                </label>
                <label>
                    <input
                         onChange={handleChange} 
                        type='checkbox'
                        name='handGripDynamometer'
                    />
                    Hand Grip Dynamometer
                </label>

                <label>
                    <input
                        onChange={handleChange}
                        type='checkbox'
                        name='legPress'
                    />
                    Leg Press Machine
                </label>
                <label>
                    <input 
                        onChange={handleChange}
                        type='checkbox'
                        name='measuringTape'
                    />
                    Measuring Tape
                </label>
                <label>
                    <input 
                        onChange={handleChange}
                        type='checkbox'
                        name='metronome'
                    />
                    Metronome
                </label>
                <label>
                    <input 
                        onChange={handleChange}
                        type='checkbox'
                        name='sitReachBox'
                    />
                    Sit & Reach Box
                </label>
                <label>
                    <input 
                        onChange={handleChange}
                        type='checkbox'
                        name='skinFoldCalipers'
                    />
                    Skin Fold Calipers
                </label>
                <label>
                    <input 
                        onChange={handleChange}
                        type='checkbox'
                        name='stopwatch'
                    />
                    Stopwatch or Timer
                </label>
                <label>
                    <input 
                        type='checkbox'
                        name='treadmill'
                        onChange={handleChange}
                    />
                    Tread Mill
                </label>
                {data.treadmill && (<>
                    <label htmlFor='treadmillDegrees'>
                        What is its max degree angle?
                    </label>
                    <input 
                        onChange={handleChange}
                        type='number'
                        name='treadmillDegrees'
                        maxLength={4}
                        min={0}
                        max={30}
                        step={.1}
                        ref={input}
                    />
                </>)}
            </fieldset>
            <div className='message-container'>
                {message.length > 0 && <p className='validity-error'>{message}</p>}
            </div>
            {state?.error && <Error message={state.error}/>}
            {state?.isLoading && <Loader />}
            <span>
                <button type='submit' disabled={!valid}>Submit</button>
                <button type='reset'>Reset</button>
            </span>
        </form>
    )
};

export default memo(EquipmentForm);