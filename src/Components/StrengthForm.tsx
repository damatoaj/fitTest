import { useRef, memo } from 'react';
import useStrength from '../Hooks/useStrength';
const StrengthForm = () => {
    const { handleChange, handleSelect, handleSubmit, error, handleReset} = useStrength();
    const form = useRef<HTMLFormElement | null>(null);
    let valid : boolean = false;
    if(form.current && form.current !== null) {
        valid = form.current.checkValidity();
    };

    if (error) {
        alert(error)
    }

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
                    defaultValue={'female'}
                    onChange={handleSelect}
                >
                    <option value='female'>Female</option>
                    <option value='male'>Male</option>
                </select>
            </fieldset>
            <fieldset>
                <legend>Age</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='age'
                    min='14'
                    max='125'
                    required
                />
            </fieldset>
            <fieldset>
                <legend>Weight in Pounds</legend>
                <input
                    onChange={handleChange}
                    type='number'
                    name='weight'
                    min='50'
                    max='400'
                    required
                />
            </fieldset>
            <fieldset>
                <legend>Leg Press 1 Rep Max</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='legPress'
                    min='0'
                    max='2000'
                    placeholder='Lbs'
                />
            </fieldset>
            <fieldset>
                <legend>Bench Press 1 Rep Max</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='benchPress'
                    min='0'
                    max='2000' 
                    placeholder='Lbs'
                />
            </fieldset>
            <fieldset>
                <legend>Grip Strength</legend>
                <label htmlFor='leftHand'>
                    Left Hand
                </label>
                    <input 
                        onChange={handleChange}
                        type='number'
                        name='leftHand'
                        min='0'
                        max='2000'
                        placeholder='Lbs'
                    />
                <label htmlFor='rightHand'>
                    Right Hand
                </label>
                    <input 
                        onChange={handleChange}
                        type='number'
                        name='rightHand'
                        min='0'
                        max='2000'
                        placeholder='Lbs'
                    />
            </fieldset>
            <span>
                <button type='submit' disabled={!valid}>Submit</button>
                <button type='reset' onClick={handleReset}>Reset</button>
            </span>
        </form>
    )
};

export default memo(StrengthForm);