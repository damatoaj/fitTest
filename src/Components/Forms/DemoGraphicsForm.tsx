import { useRef, memo } from 'react';
import useForm from '../../Hooks/useForm';
import { useUserContext } from '../../Hooks/useUserContext';
import MetricSwitcher from '../MetricSwitcher';
function DemoGraphicsForm() {
    const form = useRef<HTMLFormElement | null>(null)
    const { handleChange,handleSubmit,handleSelect, handleReset} = useForm();
    const { state : { user } } = useUserContext();
    let valid : boolean = Boolean(user.age && user.fname && user.lname && user.sex && user.height && user.currentWeight) || false
    
    if (form?.current !== null) {
        valid = form.current.checkValidity()
    }



  return (
    <form 
        ref={form}
        onSubmit={handleSubmit}
        onReset={handleReset}
    >
        <span>
            <h2>Your Demographics</h2>
        </span>
        <fieldset>
            <legend>First Name</legend>
            <input 
                autoFocus={true}
                name='fname'
                placeholder=''
                required
                type='text'
                pattern="^[a-zA-Z]+$"
                onChange={handleChange}
                title="No special characters"
            />      
        </fieldset>
        <fieldset>
            <legend>Last Name</legend>
            <input  
                name='lname'
                placeholder=''
                required 
                type='text'
                pattern='^[a-zA-Z]+$'
                onChange={handleChange}
                title="No special characters"
            />
        </fieldset>
        <fieldset>
            <legend>Age</legend>
            <input
                type='number'
                name='age'
                min='0'
                max='120'
                required
                onChange={handleChange}
                step={1}
                maxLength={3}
                placeholder=''
                title="Range is 20-69"
            />
        </fieldset>
        <fieldset>
            <legend>Weight</legend>
            <input 
                type='number'
                name='currentWeight'
                min='50'
                max='450'
                required
                onChange={handleChange}
                step={.5}
                maxLength={7}
                placeholder={user.prefers_metric ? 'Measured in KGS' : 'Measured In Pounds'}
                title="Range is 50 to 450"
            />
        </fieldset>
        <fieldset>
                <legend>
                    {user.prefers_metric ? 'Goal Weight in Kilograms' : 'Goal Weight in Pounds'}
                </legend>
                <input 
                    type='number' 
                    onChange={handleChange}
                    name='goalWeight'
                    min='50'
                    max='400'
                    required
                    step={.5}
                    maxLength={6}
                    // defaultValue={defaultValue}
                />
            </fieldset>
            <fieldset>
                <legend>Activity Level</legend>
                <span>
                <select 
                    name='activityLevel'
                    onChange={handleSelect}
                >
                    <option 
                        disabled 
                        value='default'
                    >
                        --Select--
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
        {user.prefers_metric ? 
            <fieldset>
                <legend>Height</legend>
                <input 
                    data-title='In Centimeters'
                    type='number'
                    name='height'
                    min='50'
                    max='250'
                    required
                    onChange={handleChange}
                    step={.5}
                    maxLength={6}
                    placeholder={'Measured in centimeters'}
                    title="Range is 50 to 300"
                />
            </fieldset>
            :
            <fieldset>
            <legend>Height</legend>
            <select 
                id='feet' 
                name='feet'
                onChange={handleChange}
                required
            >
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
            </select>
            <label htmlFor='feet' style={{marginRight : '15px', marginLeft: '10px'}}>Feet</label>

            <select
                id='inches'
                name='inches'
                onChange={handleChange}
                required
            >
                <option value='0'>0</option>
                <option value='.5'>.5</option>
                <option value='1'>1</option>
                <option value='1.5'>1.5</option>
                <option value='2'>2</option>
                <option value='2.5'>2.5</option>
                <option value='3'>3</option>
                <option value='3.5'>3.5</option>
                <option value='4'>4</option>
                <option value='4.5'>4.5</option>
                <option value='5'>5</option>
                <option value='5.5'>5.5</option>
                <option value='6'>6</option>
                <option value='6.5'>6.5</option>
                <option value='7'>7</option>
                <option value='7.5'>7.5</option>
                <option value='8'>8</option>
                <option value='8.5'>8.5</option>
                <option value='9'>9</option>
                <option value='9.5'>9.5</option>
                <option value='10'>10</option>
                <option value='10.5'>10.5</option>
                <option value='11'>11</option>
                <option value='11.5'>11.5</option>
            </select>
            <label htmlFor='inches'  style={{marginLeft: '10px'}}>Inches</label>
        </fieldset>
        }
        <fieldset>
        <legend>Sex</legend>
        <select
            name='sex'
            onChange={handleSelect}
            required
            defaultValue={'default'}
        >
            <option disabled value='default' >--Select--</option>
            <option value='FEMALE'>Female</option>
            <option value='MALE'>Male</option>
        </select>
    </fieldset>
        <span>
            <button type='submit' disabled={!valid}>{user.fname ?  'Update' : 'Submit' }</button>
            <button type='reset'>Reset</button>
        </span>
    </form>
  )
}

export default memo(DemoGraphicsForm)