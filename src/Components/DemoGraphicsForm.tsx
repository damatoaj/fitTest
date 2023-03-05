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

    const handleChange : ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e)
        setData((prev)=> {
            return {...prev, [e.target.name]:e.target.value}
        })
    }

    const handleSelect : ChangeEventHandler<HTMLSelectElement> = (e: ChangeEvent<HTMLSelectElement>) => {
        setData((prev) => {
            return {...prev, [e.target.name]:e.target.value}
        })
    }

    const handleReset = () => {
        setData({
            fname:'',
            lname:'',
            height:'',
            weight:'',
            sex: 'FEMALE',
            age: '',
        })
    }

    const handleSubmit : FormEventHandler<HTMLFormElement> = async(e:FormEvent) => {
        e.preventDefault()
        try {
            dispatch({type:'UPDATE_SEX', payload:data.sex})
            dispatch({type: 'UPDATE_AGE', payload:data.age})
            dispatch({type:'UPDATE_WEIGHT', payload: data.weight})
            dispatch({type:'UPDATE_HEIGHT', payload:data.height})
            dispatch({type: 'UPDATE_NAME', payload: {fname:data.fname,lname:data.lname}})
        } catch (e:any) {
            const error : string = e.message
            dispatch({type:"ERROR", error})
        }
    }

    if (form?.current !== null) {
        valid = form.current.checkValidity()
    }

    if (state.error) alert(state.error)
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
                name='fname'
                placeholder=''
                required
                type='text'
                pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
                onChange={handleChange}
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
                onChange={handleChange}
            />
        </fieldset>
        <fieldset>
            <legend>Height</legend>
            <input 
                type='number'
                name='height'
                min='50'
                max='450'
                required
                onChange={handleChange}
            />
        </fieldset>
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
         <span>
            <button type='submit' disabled={!valid}>Submit</button>
            <button type='reset'>Reset</button>
        </span>
    </form>
  )
}

export default memo(DemoGraphicsForm)