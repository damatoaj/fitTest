import { useRef, memo } from 'react'
import useForm from '../../Hooks/useForm'
import { useUserContext } from '../../Hooks/useUserContext'
const BenchPressForm = () => {
    const { handleChange, handleSubmit, handleReset} = useForm();
    const form = useRef<HTMLFormElement | null>(null);
    const { state : {user } } = useUserContext();

    let valid : boolean = Boolean(user.bloodPressure?.sbp) || false;
    
    if(form.current && form.current !== null) {
        valid = form.current.checkValidity()
    };

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            onReset={handleReset}
            name='bloodPressure'
        >
            <h2>What Category Is Your Blood Pressure?</h2>
            <fieldset>
                <legend>Systolic Blood Pressure</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='sbp'
                    min='0'
                    max='400' 
                    placeholder=''
                    autoFocus={true}
                    step={1}
                    maxLength={3}
                    required
                    defaultValue={''}
                />
            </fieldset>
            <fieldset>
                <legend>Diastolic Blood Pressure</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='dbp'
                    min='0'
                    max='200' 
                    placeholder=''
                    autoFocus={false}
                    step={1}
                    maxLength={3}
                    required
                    defaultValue={''}
                />
            </fieldset>
            <span>
                <button type='submit' disabled={!valid}>{user.bloodPressure ?  'Update' : 'Submit' }</button>
                <button type='reset'>Reset</button>
            </span>
        </form>
    )
};

export default memo(BenchPressForm);