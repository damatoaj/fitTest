import { useRef, memo } from 'react'
import useForm from '../../Hooks/useForm'
import { useUserContext } from '../../Hooks/useUserContext'
const WaistCircumferenceForm = () => {
    const { handleChange, handleSubmit, handleReset} = useForm()
    const form = useRef<HTMLFormElement | null>(null)
    const { state : {user } } = useUserContext()
    let valid : boolean = Boolean(user.benchPress?.benchPress) || false
    
    if(form.current && form.current !== null) {
        valid = form.current.checkValidity()
    }

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            onReset={handleReset}
            name='waistCircumference'
        >
            <h2>Calculate Your Cardio Vascular Risk</h2>
            <fieldset>
                <legend>What is your waist circumference?</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='waistCircumference'
                    min='0'
                    max='500' 
                    placeholder='Measured in centimeters'
                    autoFocus={true}
                    step={.5}
                    maxLength={3}
                    required
                    defaultValue={user.waistCircumference?.wc || ''}
                />
            </fieldset>
            <span>
                {user.sex ? 
                <span>
                    <button type='submit' disabled={!valid}>{user.waistCircumference ?  'Update' : 'Submit' }</button>
                    <button type='reset' disabled={user.waistCircumference !== null ? true : false}>Reset</button>
                </span>
                :
                <button type="button">Please Fill Out Demographic Form</button>
            }
            </span>
        </form>
    )
};

export default memo(WaistCircumferenceForm);