import { useRef, memo } from 'react'
import useForm from '../../Hooks/useForm'
import { useUserContext } from '../../Hooks/useUserContext'
const BenchPressForm = () => {
    const { handleChange, handleSubmit, handleReset} = useForm()
    const form = useRef<HTMLFormElement | null>(null)
    const { state : {user } } = useUserContext()

    let valid : boolean = Boolean(user.benchPress?.benchPress) || false
    
    if(form.current && form.current !== null) {
        valid = form.current.checkValidity()
    }

    let defaultValue : string = '';
    if (user.benchPress && user.prefers_metric) {
        defaultValue = String(user.benchPress.benchPress);
    } else if (user.benchPress) {
        defaultValue = String(user.benchPress.benchPress * 2.2);
    };

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            onReset={handleReset}
            name='benchPress'
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
                    placeholder={user.prefers_metric ? 'Measured in Kiligrams' :'Measured in Pounds'}
                    autoFocus={true}
                    step={.5}
                    maxLength={6}
                    required
                    defaultValue={defaultValue}
                />
            </fieldset>
            <span>
                <button type='submit' disabled={!valid}>{user.benchPress ?  'Update' : 'Submit' }</button>
                <button type='reset' disabled={user.benchPress !== null ? true : false}>Reset</button>
            </span>
        </form>
    )
};

export default memo(BenchPressForm);