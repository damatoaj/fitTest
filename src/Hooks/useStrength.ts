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
        bodyWeight:-1,
        benchPress: -1,
        legPress: -1,
        leftHandGrip: -1,
        rightHandGrip: -1
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
            bodyWeight: -1,
            benchPress: -1,
            legPress: -1,
            leftHandGrip: -1,
            rightHandGrip: -1,
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
                        benchPressRatio: data.benchPress !== -1 ? womenBenchPress(data.benchPress, data.bodyWeight, data.age): 'No Data' ,
                        legPressRatio: data.legPress !== -1 ? womenLegPress(data.age, data.legPress, data.bodyWeight) : 'No Data',
                        gripStrength: 'Outside Of Age Range For Test'
                    }
                } else {
                    paramsObject = {
                        benchPressRatio: data.benchPress !== -1 ? womenBenchPress(data.benchPress, data.bodyWeight, data.age): 'No Data',
                        legPressRatio: data.legPress !== -1 ? womenLegPress(data.age, data.legPress, data.bodyWeight) : 'No Data',
                        gripStrength: data.leftHandGrip !== -1 && data.rightHandGrip !== -1 ? womenGripStrength(data.age, gripStrength) : 'No Data'
                    }
                }
            } else {
                if (data.age < 14 || data.age > 69) {
                    paramsObject = {
                        benchPressRatio: data.benchPress !== -1 ? menBenchPress(data.benchPress, data.bodyWeight, data.age) : 'No Data',
                        legPressRatio: data.legPress !== -1 ? menLegPress(data.age, data.legPress, data.bodyWeight): 'No Data',
                        gripStrength: 'Outside Of Age Range For Test'
                    }
                } else {
                    paramsObject = {
                        benchPressRatio: data.benchPress !== -1 ? menBenchPress(data.benchPress, data.bodyWeight, data.age) : 'No Data',
                        legPressRatio: data.legPress !== -1 ? menLegPress(data.age, data.legPress, data.bodyWeight): 'No Data',
                        gripStrength: data.leftHandGrip !== -1 && data.rightHandGrip !== -1 ? menGripStrength(data.age, gripStrength) : 'No Data'
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
            bodyWeight: -1,
            benchPress: -1,
            legPress: -1,
            leftHandGrip: -1,
            rightHandGrip: -1
        }})
        navigate('/strength')
    };

    return { data, handleSubmit, newForm, handleReset, handleChange, handleSelect, error }
};

export default useStrength;