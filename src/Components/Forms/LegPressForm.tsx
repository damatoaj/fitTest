import { useRef, memo } from 'react'
import useForm from '../../Hooks/useForm'
import { useUserContext } from '../../Hooks/useUserContext'
const checkInput = (input:HTMLInputElement) =>  {
    if (input.min && parseInt(input.value) < parseInt(input.min)) return 'Input value is too low'
    if (input.max && parseInt(input.value) > parseInt(input.max)) return 'Input value exceeds boundaries'
    if (input.maxLength && input.value.length > input.maxLength) return 'Too many characters'
    return ''
}
const LegPressForm = () => {
    const { handleChange, handleSubmit, handleReset} = useForm()
    const form = useRef<HTMLFormElement | null>(null)
    const input = useRef<HTMLInputElement | null>(null)
    const { state : {user } } = useUserContext()

    let valid : boolean = Boolean(user.legPress?.legPress) || false
    let message : string = ''
    if(form.current && form.current !== null) {
        valid = form.current.checkValidity()
        if(input.current) {message = checkInput(input.current)}
    }

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            onReset={handleReset}
        >
            <h2>Calculate Your Muscular Fitness</h2>
            <fieldset>
                <legend>Leg Press 1 Rep Max</legend>
                <input 
                    ref={input}
                    onChange={handleChange}
                    type='number'
                    name='legPress'
                    min='1'
                    max='2000'
                    placeholder='Measured in Pounds'
                    autoFocus={true}
                    step={.5}
                    maxLength={6}
                    defaultValue={user.legPress?.legPress || '' }
                />
            </fieldset>
            <div className='message-container'>
                {message.length > 0 && <p className='validity-error'>{message}</p>}
            </div>
            <span>
                <button type='submit' disabled={!valid}>Submit</button>
                <button type='reset'>Reset</button>
            </span>
        </form>
    )
};

export default memo(LegPressForm);