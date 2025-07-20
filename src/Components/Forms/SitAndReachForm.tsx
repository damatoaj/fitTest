import { useRef, memo } from 'react'
import useForm from '../../Hooks/useForm'
import { Link } from 'react-router-dom';
import { useUserContext } from '../../Hooks/useUserContext'
const SitAndReachForm = () => {
    const { handleChange, handleSubmit, handleReset} = useForm()
    const form = useRef<HTMLFormElement | null>(null)
    const { state : {user } } = useUserContext()

    let valid : boolean = Boolean(user.benchPress?.benchPress) || false
    
    if(form.current && form.current !== null) {
        valid = form.current.checkValidity()
    };

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            onReset={handleReset}
            name='sar'
        >
            <h2>Calculate Your Flexibility</h2>
            <fieldset>
                <legend>Sit & Reach Test</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='sar'
                    min='0'
                    max='100' 
                    placeholder={user.prefers_metric ? 'Measured in CMs' : 'Measured in Inches'}
                    autoFocus={true}
                    step={.5}
                    maxLength={2}
                    required
                    defaultValue={0}
                />
            </fieldset>
            {user.age && user.sex ? 
            <span>
                <button type='submit' disabled={!valid}>{user.sar ?  'Update' : 'Submit' }</button>
                <button type='reset' disabled={user.sar !== null ? true : false}>Reset</button>
            </span>
            :
            <span>
                <h3>Please fill out the <Link to='/parq'>Demographic Form</Link></h3>
            </span>
            }
        </form>
    )
};

export default memo(SitAndReachForm);