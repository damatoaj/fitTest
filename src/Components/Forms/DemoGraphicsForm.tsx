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

    let defaultWeight : string = '';
    if (user.currentWeight && user.prefers_metric) {
        defaultWeight = String(user.currentWeight);
    } else if (user.currentWeight) {
        defaultWeight = String(user.currentWeight * 2.2);
    };

    let defaultHeight : string = '';
    if (user.height && user.prefers_metric) {
        defaultHeight = String(user.height);
    } else if (user.height) {
        defaultHeight = String(user.height / 2.54);
    };

  return (
    <form 
        ref={form}
        onSubmit={handleSubmit}
        onReset={handleReset}
    >
        <span>
            <h2>Your Demographics</h2>
            <MetricSwitcher />
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
                defaultValue={user.fname || ''}
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
                defaultValue={user.lname || ''}
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
                defaultValue={user.age || ''}
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
                defaultValue={defaultWeight}
                placeholder={user.prefers_metric ? 'Measured in KGS' : 'Measured In Pounds'}
                title="Range is 50 to 450"
            />
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
                    defaultValue={defaultHeight}
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
            defaultValue={user.sex || 'default'}
        >
            <option disabled value='default' >--Select--</option>
            <option value='FEMALE'>Female</option>
            <option value='MALE'>Male</option>
        </select>
    </fieldset>
        <span>
            <button type='submit' disabled={!valid}>{user.fname ?  'Update' : 'Submit' }</button>
            <button type='reset' disabled={user.fname !== null ? true : false}>Reset</button>
        </span>
    </form>
  )
}

export default memo(DemoGraphicsForm)