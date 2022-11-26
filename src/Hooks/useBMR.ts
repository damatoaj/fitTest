import { useState, ChangeEventHandler, MouseEventHandler, ChangeEvent, FormEventHandler, FormEvent} from 'react';
import { calculateMicros } from '../Functions/Nutrition/calculateMicros';
import { calculateMacros } from '../Functions/Nutrition/calcuateMacros';
import { Micros, Macros } from '../interfaces';
import { useNavigate } from 'react-router-dom'

type Demographics = {
    sex: string,
    age: number,
    height: number,
    weight: number,
    activityLevel: string,
    goal: string
};
const useBMR = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<Demographics>({
        sex: 'female',
        age: 0,
        height: 0,
        weight: 0,
        activityLevel: 'moderate activity',
        goal: 'maintain'
    });

    const kg : number = data.weight / 2.2;
    const cm : number = data.height * 2.54;

    const [macros, setMacros] = useState<Macros>({
        totalCalories: 0,
        carbs: {
            minGrams: 0,
            maxGrams: 0,
            minCal: 0,
            maxCal: 0
        },
        protein: {
            minGrams: 0,
            maxGrams: 0,
            minCal: 0,
            maxCal: 0
        }
    });
    const [micros, setMicros] = useState<Micros>({
        fiber : { amount: 0, unit: 'grams'},
        vitaminA : { amount: 0, unit: 'micrograms'},
        vitaminD : { amount: 0, unit: 'micrograms'},
        vitaminE : { amount: 0, unit: 'milligrams'},
        vitaminK : { amount: 0, unit: 'micrograms'},
        vitaminC : { amount: 0, unit: 'milligrams'},
        vitaminB6 : { amount: 0, unit: 'milligrams'},
        vitaminB12 : { amount: 0, unit: 'milligrams'},
        folate : { amount: 0, unit: 'micrograms'},
        riboflavin : { amount: 0, unit: 'milligrams'},
        calcium : { amount: 0, unit: 'milligrams'},
        iodine : { amount: 0, unit: 'micrograms'},
        chromium : { amount: 0, unit: 'micrograms'},
        iron : { amount: 0, unit: 'milligrams'},
        magnesium : { amount: 0, unit: 'milligrams'},
        selenium : { amount: 0, unit: 'micrograms'},
        zinc : { amount: 0, unit: 'milligrams'}
    });

    const handleChange : ChangeEventHandler = (e : ChangeEvent<HTMLInputElement>) => {
        setData((prev)=> {
            return {...prev, [e.target.name]: e.target.value}
        })
    };

    const handleSelect : ChangeEventHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setData((prev)=> {
            return {...prev, [e.target.name]:e.target.value}
        })
    };

    const handleReset : MouseEventHandler = () => {
        setData(()=> { return {
            sex: 'female',
            age: 0,
            height: 0,
            weight: 0,
            activityLevel: 'moderately active',
            goal: 'maintain'
        }}) 
    };

    const handleSubmit : FormEventHandler<HTMLFormElement>= (e:FormEvent) => {
        e.preventDefault();
        if (data.age < 18 || data.weight < 50 || data.height < 36) return
        setMacros(calculateMacros(data.sex, data.age, kg, cm, data.activityLevel, data.goal));
        setMicros(calculateMicros(data.sex, data.age));
        navigate('/nutrition/results')
    };

    const newForm : MouseEventHandler = () => {
        setData(()=> { return {
            sex: 'female',
            age: 0,
            height: 0,
            weight: 0,
            activityLevel: 'moderately active',
            goal: 'maintain'
        }}) 
        navigate('/nutrition')
    }

    return { data, macros, micros, handleChange, handleSelect, handleReset, handleSubmit, newForm}
};

export default useBMR;