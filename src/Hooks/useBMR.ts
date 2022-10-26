import { useState, useMemo, ChangeEvent } from 'react';

const useBMR = () => {
    const [data, setData] = useState({
        sex: 'female',
        age: 0,
        height: 0,
        weight: 0,
        activityLevel: 'moderately activity'
    });

    const kg = data.weight / 2.2;
    const cm = data.height * 2.54;

    const bmr = useMemo(()=> {
        let raw =  66 + (14 * kg) + (5 * cm) - (7 * data.age);

        if (data.sex === 'male') {
            if(data.activityLevel === 'sedentary') return raw * 1.2;
            if(data.activityLevel === 'light activity') return raw * 1.375;
            if(data.activityLevel === 'moderately active') return raw * 1.55;
            if(data.activityLevel === 'very active') return raw * 1.725;
            if(data.activityLevel === 'extra active') return raw * 1.9;
        };

        raw = 655 + (9.6 * kg) + (1.85 * cm) - (4.7 * data.age);
        if(data.activityLevel === 'sedentary') return raw * 1.2;
        if(data.activityLevel === 'light activity') return raw * 1.375;
        if(data.activityLevel === 'moderately active') return raw * 1.55;
        if(data.activityLevel === 'very active') return raw * 1.725;
        if(data.activityLevel === 'extra active') return raw * 1.9;
    }, [data, kg, cm])

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setData((prev)=> {
            return {...prev, [e.target.name]: e.target.value}
        })
    };

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setData((prev)=> {
            return {...prev, [e.target.name]:e.target.value}
        })
    };

    const handleReset = () => {
        setData(()=> { return {
            sex: 'male',
            age: 0,
            height: 0,
            weight: 0,
            activityLevel: ''
        }}) 
    }

    return { data, bmr, handleChange, handleSelect, handleReset}
};

export default useBMR;