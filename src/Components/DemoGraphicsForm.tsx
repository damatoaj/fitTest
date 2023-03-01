import { useRef, FormEventHandler, useState, FormEvent, ChangeEventHandler, ChangeEvent, memo } from 'react';
import { useUserContext } from '../Hooks/useUserContext';
import { Sex } from '../interfaces';

type DemoData = {
    fname:string;
    lname:string;
    age:string;
    height:string;
    weight:string;
    sex: Sex
}
function DemoGraphicsForm() {
    const {state, dispatch} = useUserContext()
    const form = useRef<HTMLFormElement | null>(null)
    const [data, setData] = useState<DemoData>({
        fname:'',
        lname:'',
        age:'',
        height:'',
        weight:'',
        sex: 'FEMALE'
    })

    let valid : boolean = false

    if (form?.current !== null) {
        valid = form.current.checkValidity()
    }

    if (state.error) alert(state.error)
  return (
    <form ref={form}>
        <h2>Your Demographics</h2>
        <fieldset>
            <legend>First Name</legend>
            <input 
                placeholder=''
                required
                type='text'
                pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
                value={data.fname}
            />      
        </fieldset>
        <fieldset>
            <legend>Last Name</legend>
            <input  
                placeholder=''
                required 
                type='text'
                pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
                value={data.lname}
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
                value={data.age}
                // onChange={handleChange}
            />
        </fieldset>
        <fieldset>
            <legend>Weight</legend>
            <input 
                type='number'
                name='weight'
                min='50'
                max='450'
                required
                value={data.weight}
            />
        </fieldset>
        <fieldset>
        <legend>Sex</legend>
        <select
            name='sex'
            value={data.sex}
        >
            <option value='FEMALE'>Female</option>
            <option value='MALE'>Male</option>
        </select>
    </fieldset>
         <span>
            <button type='submit' disabled={!valid}>Submit</button>
            <button type='reset' onClick={()=>console.log('click')}>Reset</button>
        </span>
    </form>
  )
}

export default memo(DemoGraphicsForm)