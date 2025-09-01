import { useRef, memo } from 'react'
import useForm from '../../Hooks/useForm'
import { useUserContext } from '../../Hooks/useUserContext'
const StrengthForm = () => {
    const { state } = useUserContext()
    const { handleChange, handleSelect, handleSubmit, handleReset} = useForm()
    const form = useRef<HTMLFormElement | null>(null)
    let valid : boolean = Boolean(state.user.sex && state.user.age && state.user.legPress?.legPress && state.user.benchPress?.benchPress) || false
    if(form.current && form.current !== null) {
        valid = form.current.checkValidity()
    }

    let defaultBench : string = '';
    if (state.user.benchPress && state.user.prefers_metric) {
        defaultBench = String(state.user.benchPress.benchPress);
    } else if (state.user.benchPress) {
        defaultBench = String(state.user.benchPress.benchPress * 2.2);
    };

    let defaultLeg : string = '';
    if (state.user.legPress && state.user.prefers_metric) {
        defaultLeg = String(state.user.legPress.legPress);
    } else if (state.user.legPress) {
        defaultLeg = String(state.user.legPress.legPress * 2.2);
    };

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            onReset={handleReset}
        >
            <h2>Calculate Your Muscular Fitness</h2>
            {!state.user.sex && (
                <fieldset>
                    <legend>Sex</legend>
                    <select 
                        name='sex'
                        defaultValue={'FEMALE'}
                        onChange={handleSelect}
                    >
                        <option value='FEMALE'>Female</option>
                        <option value='MALE'>Male</option>
                    </select>
                </fieldset>
            )}
            {!state.user.age && (
                <fieldset>
                    <legend>Age</legend>
                    <input 
                        onChange={handleChange}
                        type='number'
                        name='age'
                        min='14'
                        max='125'
                        required
                        enterKeyHint='next'
                        inputMode='numeric' 
                    />
                </fieldset>
            )}
            {!state.user.currentWeight && (
                <fieldset>
                    <legend>Weight in Pounds</legend>
                    <input
                        onChange={handleChange}
                        type='number'
                        name='currentWeight'
                        min='50'
                        max='400'
                        required
                        enterKeyHint='next'
                        inputMode='numeric' 
                    />
                </fieldset>
            )}
            <fieldset>
                <legend>Leg Press 1 Rep Max</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='legPress'
                    min='0'
                    max='2000'
                    placeholder={state.user.prefers_metric ? 'Weight Moved In KGS' : 'Weight Moved In LBS'}
                    defaultValue={defaultLeg}
                    autoFocus
                    enterKeyHint='next'
                    inputMode='numeric' 
                />
            </fieldset>
            <fieldset>
                <legend>Bench Press 1 Rep Max</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='benchPress'
                    min='0'
                    max='2000' 
                    placeholder={state.user.prefers_metric ? 'Weight Moved In KGS' : 'Weight Moved In LBS'}
                    defaultValue={defaultBench}
                    enterKeyHint='next'
                    inputMode='numeric' 
                />
            </fieldset>
            <fieldset>
                <legend>Grip Strength</legend>
                <label htmlFor='leftHand'>
                    Left Hand
                </label>
                    <input 
                        onChange={handleChange}
                        type='number'
                        name='leftHand'
                        min='0'
                        max='2000'
                        placeholder={state.user.prefers_metric ? 'Weight Moved In KGS' : 'Weight Moved In LBS'}
                        defaultValue={''}
                        enterKeyHint='next'
                        inputMode='numeric' 
                    />
                <label htmlFor='rightHand'>
                    Right Hand
                </label>
                    <input 
                        onChange={handleChange}
                        type='number'
                        name='rightHand'
                        min='0'
                        max='2000'
                        placeholder={state.user.prefers_metric ? 'Weight Moved In KGS' : 'Weight Moved In LBS'}
                        defaultValue={''}
                        enterKeyHint='done'
                        inputMode='numeric' 
                    />
            </fieldset>
            <span>
                <button type='submit' disabled={!valid}>Submit</button>
                <button type='reset' disabled={state.user.benchPress !== null ? true : false}>Reset</button>
            </span>
        </form>
    )
};

export default memo(StrengthForm);