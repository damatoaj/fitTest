import { useRef, memo } from 'react';
import useForm from '../Hooks/useForm';
import { useUserContext } from '../Hooks/useUserContext';
import { useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();
    const { handleChange, handleReset, handleSelect, handleSubmit} = useForm('/summary')
    const form = useRef<HTMLFormElement | null>(null)
    const { state: {user} } = useUserContext()
    let valid : boolean = Boolean(user.activityLevel && user.goalWeight) || false
    if(form.current && form.current !== null) {
        valid = form.current.checkValidity()
    }
    return (
        <form
            onSubmit={(e)=>handleSubmit(e)}
            ref={form}
            onReset={handleReset}
        >
            <h2>Calculate Your Basal Metabolic Rate</h2>
            <fieldset>
                <legend>Goal Weight in Pounds</legend>
                <input 
                    autoFocus={true}
                    type='number' 
                    onChange={handleChange}
                    name='goalWeight'
                    min='50'
                    max='400'
                    required
                    step={.5}
                    maxLength={6}
                    defaultValue={user.goalWeight || ''}
                />
            </fieldset>
            <fieldset>
                <legend>Activity Level</legend>
                <span>
                <select 
                    name='activityLevel'
                    onChange={handleSelect}
                    defaultValue={user.activityLevel || 'default'}
                >
                    <option value='default' disabled>
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
                <details className='popover'>
                    <ol>
                        <li>Sedentary: Little or no exercise</li>
                        <li>Light Activity: Light exercise/sports 1-3 days/week</li>
                        <li>Moderately Active: Moderate exercise/sports 3-5 days/week</li>
                        <li>Very Active: Hard exercise/sports 6-7 days/week</li>
                        <li>Extra Active: Very hard exercise/sports and a physical job</li>
                    </ol>
                </details>
                </span>
            </fieldset>
            {user.currentWeight ? 
                <span>
                    <button type='submit' disabled={!valid}>Submit</button>
                    <button type='reset' onClick={handleReset}>Reset</button>
                </span>
                :
                <span>
                    <button type="button"  onClick={()=> navigate('/parq')}>Please Fill Out Demographic Form</button>
                </span>
            }
        </form>
    )
};

export default memo(Form);