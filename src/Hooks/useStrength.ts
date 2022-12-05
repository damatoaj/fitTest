import {ChangeEvent, ChangeEventHandler, MouseEventHandler, useState, FormEventHandler, FormEvent} from 'react'
import { useNavigate } from 'react-router-dom'
import { 
    menGripStrength, 
    womenGripStrength,
    menBenchPress,
    menLegPress,
    womenBenchPress,
    womenLegPress
} from '../Functions/Testing/muscularFitness';


const useStrength = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        sex:'female',
        age:0,
        bodyWeight:0,
        benchPress: 0,
        legPress: 0,
        leftHandGrip: 0,
        rightHandGrip: 0
    });
    const [error, setError] = useState(null);

    const handleChange : ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setData((prev)=> {
            return {...prev, [e.target.name]:e.target.value}
        })
    };

    const handleSelect : ChangeEventHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setData((prev) => {
            return {...prev, [e.target.name]:e.target.value}
        })
    };

    const handleReset : MouseEventHandler = () => {
        setData(()=> { return {
            sex: 'female',
            age: 0,
            bodyWeight: 0,
            benchPress: 0,
            legPress: 0,
            leftHandGrip: 0,
            rightHandGrip: 0
        }})
    };

    const handleSubmit : FormEventHandler<HTMLFormElement> = (e:FormEvent) => {
        e.preventDefault();
        setError(null);
        let paramsObject = {};
        const gripStrength = (data.leftHandGrip + data.rightHandGrip) / 2.2;
        try {
            if (data.sex === 'female') {
                if (data.age < 14 || data.age > 69) {
                    paramsObject = {
                        benchPressRatio: womenBenchPress(data.benchPress, data.bodyWeight, data.age),
                        legPressRatio: womenLegPress(data.age, data.legPress, data.bodyWeight),
                        gripStrength: 'Outside Of Age Range For Test'
                    }
                } else {
                    paramsObject = {
                        benchPressRatio: womenBenchPress(data.benchPress, data.bodyWeight, data.age),
                        legPressRatio: womenLegPress(data.age, data.legPress, data.bodyWeight),
                        gripStrength: womenGripStrength(data.age, gripStrength)
                    }
                }
            } else {
                if (data.age < 14 || data.age > 69) {
                    paramsObject = {
                        benchPressRatio: menBenchPress(data.benchPress, data.bodyWeight, data.age),
                        legPressRatio: menLegPress(data.age, data.legPress, data.bodyWeight),
                        gripStrength: 'Outside Of Age Range For Test'
                    }
                } else {
                    paramsObject = {
                        benchPressRatio: menBenchPress(data.benchPress, data.bodyWeight, data.age),
                        legPressRatio: menLegPress(data.age, data.legPress, data.bodyWeight),
                        gripStrength: menGripStrength(data.age, gripStrength)
                    }
                }
            };
    
            const queryParams = new URLSearchParams(paramsObject)
    
            navigate({
                pathname:'/strength/results',
                search: `?${queryParams}`
            })
        } catch (e:any) {
            setError(e)
        }
    };

    const newForm : MouseEventHandler = () => {
        setData(()=> { return {
            sex: 'female',
            age: 0,
            bodyWeight: 0,
            benchPress: 0,
            legPress: 0,
            leftHandGrip: 0,
            rightHandGrip: 0
        }})
        navigate('/strength')
    };

    return { data, handleSubmit, newForm, handleReset, handleChange, handleSelect, error }
};

export default useStrength;