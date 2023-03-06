import { useRef, memo } from 'react';
import useForm from '../Hooks/useForm';

const Form = () => {
    const { handleChange, handleReset, handleSelect, handleSubmit} = useForm()
    const form = useRef<HTMLFormElement | null>(null)
    let valid : boolean = false
    if(form.current && form.current !== null) {
        valid = form.current.checkValidity()
    }
    return (
        <form
            onSubmit={handleSubmit}
            ref={form}
            onReset={handleReset}
        >
            <h2>Calculate Your Basal Metabolic Rate</h2>
            <fieldset>
                <legend>Goal Weight in Pounds</legend>
                <input 
                    type='number' 
                    onChange={handleChange}
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
                    onChange={handleSelect}
                    defaultValue={''}
                >
                    <option value='' disabled>
                        --Select One--
                    </option>
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
            <span>
                <button type='submit' disabled={!valid}>Submit</button>
                <button type='reset' onClick={handleReset}>Reset</button>
            </span>
        </form>
    )
};

export default memo(Form);