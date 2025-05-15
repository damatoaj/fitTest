import { useRef, memo } from 'react'
import { useUserContext } from '../../Hooks/useUserContext'
import useForm from '../../Hooks/useForm'
const EnduranceForm = () => {
    const form = useRef<HTMLFormElement | null>(null)
    const { handleChange, handleReset, handleSubmit} = useForm()
    const { state : {user } } = useUserContext()

    let valid : boolean = false;
    if (form?.current !== null) {
        valid = form.current.checkValidity();
    }
    return (
        <form
            ref={form}
            onSubmit={(e)=> handleSubmit(e)}
            onReset={handleReset}
            name='pushups'
        >
            <h2>Calculate Your Muscular Fitness</h2>
            <fieldset>
                <legend>Pushups Completed</legend>
                <input
                    type='number'
                    name='pushups'
                    min='0'
                    required
                    onChange={handleChange}
                    autoFocus={true}
                    step={1}
                    maxLength={3}
                    defaultValue={0}
                />
            </fieldset>
            <span>
                <button type='submit' disabled={!valid}>Submit</button>
                <button type='reset' disabled={user.pushups !== null ? true : false}>Reset</button>
            </span>
        </form>
    )
}

export default memo(EnduranceForm)