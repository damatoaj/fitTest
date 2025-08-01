import { useRef, memo } from 'react';
import useForm from '../Hooks/useForm';
import { useUserContext } from '../Hooks/useUserContext';
import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

const Form = () => {
    // const navigate = useNavigate();
    const { handleChange, handleReset, handleSelect, handleSubmit} = useForm()
    const form = useRef<HTMLFormElement | null>(null)
    const { state: {user} } = useUserContext()
    let valid : boolean = Boolean(user.activityLevel && user.goalWeight) || false
    if(form.current && form.current !== null) {
        valid = form.current.checkValidity()
    }

    let defaultValue : string = '';
    if (user.prefers_metric && user.goalWeight) {
        defaultValue = String(user.goalWeight)
    } else if (user.goalWeight && user.prefers_metric === false) {
        defaultValue = String(user.goalWeight * 2.2)
    };
    return (
        <form
            onSubmit={(e)=>handleSubmit(e)}
            ref={form}
            onReset={handleReset}
        >
            <h2>Calculate Your Basal Metabolic Rate</h2>
            <fieldset>
                <legend>
                    {user.prefers_metric ? 'Goal Weight in Kilograms' : 'Goal Weight in Pounds'}
                </legend>
                <input 
                    autoFocus={true}
                    type='number' 
                    onChange={handleChange}
                    name='goalWeight'
                    min={user.prefers_metric ? '40' : '88'}
                    max={user.prefers_metric ? '200' : '400'}
                    required
                    step={.5}
                    maxLength={6}
                    defaultValue={defaultValue}
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
                <details open>
                    <summary>Activity Level Definitions</summary>
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
                    <button type='reset' onClick={handleReset} disabled={user.bodyWeightGoal !== null ? true : false}>Reset</button>
                </span>
                :
                <span>
                    <h3>Please fill out the <Link to='/parq'>Demographic Form</Link></h3>
                </span>
            }
        </form>
    )
};

export default memo(Form);