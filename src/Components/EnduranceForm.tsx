import { useRef, FormEventHandler, useState, FormEvent, ChangeEventHandler, ChangeEvent, memo } from 'react';
import { useUserContext } from '../Hooks/useUserContext';
const EnduranceForm = () => {
    const {state, dispatch} = useUserContext();
    const form = useRef<HTMLFormElement | null>(null);
    const [data, setData] = useState({
        sex: 'FEMALE',
        age: 20,
        pushups: 0
    });

    let valid : boolean = false;
    if (form?.current !== null) {
        valid = form.current.checkValidity();
    }

    const handleChange : ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
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
            sex: 'FEMALE',
            age: 0,
            pushups:0
        })
    }

    const handleSubmit : FormEventHandler<HTMLFormElement> = async(e:FormEvent) => {
        e.preventDefault()
        try {
            if (!state.user.sex) await dispatch({type:'UPDATE_SEX', payload:data.sex})
            if (!state.user.age) await dispatch({type: 'UPDATE_AGE', payload:data.age})
            dispatch({type:'UPDATE_PUSHUPS', payload: data.pushups})
        } catch (e:any) {
            const error : string = e.message
            dispatch({type:"ERROR", error})
        }
    }

    if (state.error) alert(state.error)
    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
        >
            <h2>Calculate Your Muscular Fitness</h2>
            {!state.user.sex && (
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
            )}
            {!state.user.age && (
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
            )}
            <fieldset>
                <legend>Pushups Completed</legend>
                <input
                    type='number'
                    name='pushups'
                    min='0'
                    required
                    onChange={handleChange}
                />
            </fieldset>
            <span>
                <button type='submit' disabled={!valid}>Submit</button>
                <button type='reset' onClick={handleReset}>Reset</button>
            </span>
        </form>
    )
};

export default memo(EnduranceForm);