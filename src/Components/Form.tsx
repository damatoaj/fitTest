import { useRef, memo, ChangeEventHandler, FormEventHandler, MouseEventHandler } from 'react';
import { useUserContext } from '../Hooks/useUserContext';
type FormProps = {
    handleChange: ChangeEventHandler<HTMLInputElement>,
    handleReset: MouseEventHandler<HTMLButtonElement>,
    handleSelect: ChangeEventHandler<HTMLSelectElement>,
    handleSubmit: FormEventHandler<HTMLFormElement>
}
const Form = (props:FormProps) => {
    const { state } = useUserContext()
    const form = useRef<HTMLFormElement | null>(null)
    let valid : boolean = false
    if(form.current && form.current !== null) {
        valid = form.current.checkValidity()
    }
    return (
        <form
            onSubmit={props.handleSubmit}
            ref={form}
        >
            <h2>Calculate Your Basal Metabolic Rate</h2>
            {!state.user.sex && (
                <fieldset>
                    <legend>Sex</legend>
                    <select 
                        name='sex'
                        onChange={props.handleSelect}
                        defaultValue={'female'}
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
                        type='number' 
                        onChange={props.handleChange}
                        name='age'
                        min='18'
                        max='125'
                        required
                    />
                </fieldset>
            )}
            {!state.user.height && (
                <fieldset>
                    <legend>Height In Inches</legend>
                    <input 
                        type='number' 
                        name='height'
                        onChange={props.handleChange}
                        min='36'
                        max='96'
                        required
                />
                </fieldset>
            )}
            {!state.user.currentWeight && (
                <fieldset>
                    <legend>Current Weight in Pounds</legend>
                    <input 
                        type='number' 
                        onChange={props.handleChange}
                        name='currentWeight'
                        min='50'
                        max='400'
                        required
                    />
                </fieldset>
            )}
            <fieldset>
                <legend>Goal Weight in Pounds</legend>
                <input 
                    type='number' 
                    onChange={props.handleChange}
                    name='goalWeight'
                    min='50'
                    max='400'
                    required
                />
            </fieldset>
            <fieldset>
                <legend>Activity Level</legend>
                <select 
                    name='activityLevel'
                    onChange={props.handleSelect}
                    defaultValue={'moderately active'}
                >
                    <option 
                        title='Little or no exercise'
                        value='sedentary'
                    >
                        Sedentary
                    </option>
                    <option 
                        title='Light exercise/sports 1-3 days/week'
                        value='light activity'
                    >
                        Light Activity
                    </option>
                    <option 
                        title='Moderate exercise/sports 3-5 days/week'
                        value='moderately active'
                    >
                        Moderately Active
                    </option>
                    <option 
                        title='Hard exercise/sports 6-7 days/week'
                        value='very active'
                    >
                        Very Active
                    </option>
                    <option 
                        title='Very hard exercise/sports and a physical job'
                        value='extra active'
                    >
                        Extra Active    
                    </option>
                </select>
            </fieldset>
            <fieldset>
                <legend>Body Weight Goal</legend>
                <select
                    onChange={props.handleSelect}
                    name='goal'
                    defaultValue={'maintain'}
                >
                    <option value='maintain'>Maintain Current Size</option>
                    <option value='gain'>Increase Muscle Mass</option>
                    <option value='lose'>Decrease Body Fat</option>
                </select>
            </fieldset>
            <span>
                <button type='submit' disabled={!valid}>Submit</button>
                <button type='reset' onClick={props.handleReset}>Reset</button>
            </span>
        </form>
    )
};

export default memo(Form);