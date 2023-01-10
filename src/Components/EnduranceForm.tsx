import { useRef, FormEventHandler, useState, FormEvent, ChangeEventHandler, ChangeEvent, memo } from 'react';
import { menPushupCategories, womenPushupCategories } from '../Functions/Testing/muscularEndurance';
const EnduranceForm = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const [data, setData] = useState({
        sex: 'female',
        age: 20,
        pushups: 0
    });
    let error : string | null = null;

    let valid : boolean = false;
    if (form?.current !== null) {
        valid = form.current.checkValidity();
    };

    const handleChange : ChangeEventHandler<HTMLInputElement> = (e: ChangeEvent<HTMLInputElement>) => {
        setData((prev)=> {
            return {...prev, [e.target.name]:e.target.value}
        })
    };

    const handleSelect : ChangeEventHandler<HTMLSelectElement> = (e: ChangeEvent<HTMLSelectElement>) => {
        setData((prev) => {
            return {...prev, [e.target.name]:e.target.value}
        })
    };

    const handleReset = () => {
        setData({
            sex: 'female',
            age: 20,
            pushups:0
        })
    };

    const handleSubmit : FormEventHandler<HTMLFormElement> = (e:FormEvent) => {
        e.preventDefault();
        let category : string = '';
        try {
            if (data.sex === 'female') {
                category = womenPushupCategories(data.age, data.pushups)
                alert(`Category: ${category}`)
            } else {
               category = menPushupCategories(data.age, data.pushups);
               alert(`Category: ${category}`)
            };
        } catch (e:any) {
            error = e.message
            alert(error)
        }
;    };
    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
        >
            <h2>Calculate Your Muscular Fitness</h2>
            <fieldset>
                <legend>Sex</legend>
                <select
                    name='sex'
                    value={data.sex}
                    onChange={handleSelect}
                >
                    <option value='female'>Female</option>
                    <option value='male'>Male</option>
                </select>
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
                    onChange={handleChange}
                />
            </fieldset>
            <fieldset>
                <legend>Pushups Completed</legend>
                <input
                    type='number'
                    name='pushups'
                    min='0'
                    required
                    value={data.pushups}
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