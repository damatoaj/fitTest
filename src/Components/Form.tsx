import React from 'react';
import useBMR from '../Hooks/useBMR';
import './Form.css'
const Form = () => {
    const { data, handleChange, handleReset, handleSelect} = useBMR();

    return (
        <form>
            <h1>Calculate Your Basal Metabolic Rate</h1>
            <fieldset>
                <legend>Sex</legend>
                <select 
                    name='sex'
                    onChange={handleSelect}
                    value={data.sex}
                >
                    <option>Female</option>
                    <option>Male</option>
                </select>
            </fieldset>
            <fieldset>
                <legend>Age</legend>
                <input 
                    type='number' 
                    onChange={handleChange}
                    name='age'
                    min='18'
                    max='125'
                    value={data.age}
                    required
                />
            </fieldset>
            <fieldset>
                <legend>Height In Inches</legend>
                <input 
                    type='number' 
                    name='height'
                    onChange={handleChange}
                    min='36'
                    max='96'
                    value={data.height}
                    required
                />
            </fieldset>
            <fieldset>
                <legend>Goal Weight in Pounds</legend>
                <input 
                    type='number' 
                    onChange={handleChange}
                    name='weight'
                    min='50'
                    max='400'
                    value={data.weight}
                    required
                />
            </fieldset>
            <fieldset>
                <legend>Activity Level</legend>
                <select 
                    name='activityLevel'
                    onChange={handleSelect}
                    value={data.activityLevel}
                >
                    <option value='sedentary'>Sedentary</option>
                    <option value='light activity'>Light Activity</option>
                    <option value='moderately activity' selected>Moderately Active</option>
                    <option value='very active'>Very Active</option>
                    <option value='extra active'>Extra Active</option>
                </select>
            </fieldset>
            <button type='submit'>Submit</button>
            <button type='button' onClick={handleReset}>Reset</button>
        </form>
    )
};

export default Form;