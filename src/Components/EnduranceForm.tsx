import { useRef, memo } from 'react'

import useForm from '../Hooks/useForm'
const EnduranceForm = () => {
    const form = useRef<HTMLFormElement | null>(null)
    const { handleChange, handleReset, handleSubmit} = useForm()

    let valid : boolean = false;
    if (form?.current !== null) {
        valid = form.current.checkValidity();
    }
    return (
        <form
            ref={form}
            onSubmit={(e)=> handleSubmit(e)}
            onReset={handleReset}
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
                />
            </fieldset>
            <span>
                <button type='submit' disabled={!valid}>Submit</button>
                <button type='reset'>Reset</button>
            </span>
        </form>
    )
}

export default memo(EnduranceForm)