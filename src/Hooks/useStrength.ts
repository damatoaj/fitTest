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
        let paramsObject = {};
        const gripStrength = (data.leftHandGrip + data.rightHandGrip) / 2.2;
        if (data.sex === 'female') {
            paramsObject = {
                benchPressRatio: womenBenchPress(data.benchPress, data.bodyWeight, data.age),
                legPressRatio: womenLegPress(data.age, data.legPress, data.bodyWeight),
                gripStrength: womenGripStrength(data.age, gripStrength)
            }
        } else {
            paramsObject = {
                benchPressRatio: menBenchPress(data.benchPress, data.bodyWeight, data.age),
                legPressRatio: menLegPress(data.age, data.legPress, data.bodyWeight),
                gripStrength: menGripStrength(data.age, gripStrength)
            }
        }

        const queryParams = new URLSearchParams(paramsObject)
        console.log(queryParams, '<--- query params')
        navigate({
            pathname:'/strength/results',
            search: `?${queryParams}`
        })
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

    return { data, handleSubmit, newForm, handleReset, handleChange, handleSelect }
};

export default useStrength;