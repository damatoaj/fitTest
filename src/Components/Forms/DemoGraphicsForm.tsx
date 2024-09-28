import { useRef, memo } from 'react';
import useForm from '../../Hooks/useForm';
import { useUserContext } from '../../Hooks/useUserContext';
function DemoGraphicsForm() {
    const form = useRef<HTMLFormElement | null>(null)
    const { handleChange,handleSubmit,handleSelect, handleReset} = useForm('/equipment')
    const { state : {user } } = useUserContext()
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
        <h2>Your Demographics</h2>
        <fieldset>
            <legend>First Name</legend>
            <input 
                autoFocus={true}
                name='fname'
                placeholder=''
                required
                type='text'
                pattern="^[\w'\-,\.][^0-9_!¡?÷?¿\/\\+=@#$%^&*\(\)\{\}\|~<>;:\[\]]{2,}$"
                onChange={handleChange}
                defaultValue={user.fname || ''}
            />      
        </fieldset>
        <fieldset>
            <legend>Last Name</legend>
            <input  
                name='lname'
                placeholder=''
                required 
                type='text'
                pattern="^[\w'\-,\.][^0-9_!¡?÷?¿\/\\+=@#$%^&*\(\)\{\}\|~<>;:\[\]]{2,}$"
                onChange={handleChange}
                defaultValue={user.lname || ''}
            />
        </fieldset>
        <fieldset>
            <legend>Age</legend>
            <input
                type='number'
                name='age'
                min='20'
                max='69'
                required
                onChange={handleChange}
                step={1}
                maxLength={3}
                defaultValue={user.age || ''}
                placeholder=''
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
                defaultValue={user.currentWeight || ''}
                placeholder='Measured In Pounds'
            />
        </fieldset>
        <fieldset>
            <legend>Height</legend>
            <input 
                data-title='In Inches'
                type='number'
                name='height'
                min='50'
                max='108'
                required
                onChange={handleChange}
                step={.5}
                maxLength={6}
                defaultValue={user.height || ''}
                placeholder='Measured In Inches'
            />
        </fieldset>
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
            <button type='reset'>Reset</button>
        </span>
    </form>
  )
}

export default memo(DemoGraphicsForm)