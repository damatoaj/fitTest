import { useRef, memo } from 'react'
import useForm from '../../Hooks/useForm'
import { useUserContext } from '../../Hooks/useUserContext'
const BenchPressForm = () => {
    const { handleChange, handleSubmit, handleReset} = useForm()
    const form = useRef<HTMLFormElement | null>(null)
    const { state : {user } } = useUserContext()

    let valid : boolean = false
    if(form.current && form.current !== null) {
        valid = form.current.checkValidity()

    }

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            onReset={handleReset}
        >
            <h2>Calculate Your Muscular Fitness</h2>
            <fieldset>
                <legend>Bench Press 1 Rep Max</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='benchPress'
                    min='0'
                    max='2000' 
                    placeholder='Measured in Pounds'
                    autoFocus={true}
                    step={.5}
                    maxLength={6}
                    required
                    defaultValue={user.benchPress?.benchPress || ''}
                />
            </fieldset>
            <span>
                <button type='submit' disabled={!valid}>Submit</button>
                <button type='reset'>Reset</button>
            </span>
        </form>
    )
};

export default memo(BenchPressForm);