import { useRef, memo } from 'react'
import useForm from '../../Hooks/useForm'
import { useUserContext } from '../../Hooks/useUserContext'
const SitAndReachForm = () => {
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
                    max='30' 
                    placeholder='Measured in Inches'
                    autoFocus={true}
                    step={.5}
                    maxLength={2}
                    required
                    defaultValue={user.sar?.value || ''}
                />
            </fieldset>
            {user.age && user.sex ? 
            <span>
                <button type='submit' disabled={!valid}>{user.sar ?  'Update' : 'Submit' }</button>
                <button type='reset'>Reset</button>
            </span>
            :
            <span>
                <button type='button'>Please Fill Out The Demographic Form</button>
            </span>
            }
        </form>
    )
};

export default memo(SitAndReachForm);