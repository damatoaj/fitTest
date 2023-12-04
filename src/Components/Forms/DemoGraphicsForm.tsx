import { useRef, memo } from 'react';
import useForm from '../../Hooks/useForm';
import { useUserContext } from '../../Hooks/useUserContext';
function DemoGraphicsForm() {
    const form = useRef<HTMLFormElement | null>(null)
    const { handleChange,handleSubmit,handleSelect, handleReset} = useForm('/nutrition')
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
                pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
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
                pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
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
            />
        </fieldset>
        <fieldset>
        <legend>Sex</legend>
        <select
            name='sex'
            onChange={handleSelect}
            required
            defaultValue={user.sex || ''}
        >
            <option disabled value=''>--Select--</option>
            <option value='FEMALE'>Female</option>
            <option value='MALE'>Male</option>
        </select>
    </fieldset>
        <span>
            <button type='submit' disabled={!valid}>Submit</button>
            <button type='reset'>Reset</button>
        </span>
    </form>
  )
}

export default memo(DemoGraphicsForm)