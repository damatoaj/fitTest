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
import { useUserContext } from './useUserContext';


const useStrength = () => {
    const {state, dispatch} = useUserContext()
    const navigate = useNavigate()
    const [data, setData] = useState({
        sex:'FEMALE',
        age:0,
        currentWeight:-1,
        benchPress: -1,
        legPress: -1,
        leftHandGrip: -1,
        rightHandGrip: -1
    })

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
            sex: 'FEMALE',
            age: 0,
            currentWeight: -1,
            benchPress: -1,
            legPress: -1,
            leftHandGrip: -1,
            rightHandGrip: -1,
        }})
    };

    const handleSubmit : FormEventHandler<HTMLFormElement> = (e:FormEvent) => {
        e.preventDefault();
        let paramsObject = {};
        const gripStrength = (data.leftHandGrip + data.rightHandGrip) / 2.2;
        try {
            if (data.sex === 'FEMALE') {
                if (data.age < 14 || data.age > 69) {
                    paramsObject = {
                        benchPressRatio: data.benchPress !== -1 ? womenBenchPress(data.benchPress, data.currentWeight, data.age): 'No Data' ,
                        legPressRatio: data.legPress !== -1 ? womenLegPress(data.age, data.legPress, data.currentWeight) : 'No Data',
                        gripStrength: 'Outside Of Age Range For Test'
                    }
                } else {
                    paramsObject = {
                        benchPressRatio: data.benchPress !== -1 ? womenBenchPress(data.benchPress, data.currentWeight, data.age): 'No Data',
                        legPressRatio: data.legPress !== -1 ? womenLegPress(data.age, data.legPress, data.currentWeight) : 'No Data',
                        gripStrength: data.leftHandGrip !== -1 && data.rightHandGrip !== -1 ? womenGripStrength(data.age, gripStrength) : 'No Data'
                    }
                }
            } else {
                if (data.age < 14 || data.age > 69) {
                    paramsObject = {
                        benchPressRatio: data.benchPress !== -1 ? menBenchPress(data.benchPress, data.currentWeight, data.age) : 'No Data',
                        legPressRatio: data.legPress !== -1 ? menLegPress(data.age, data.legPress, data.currentWeight): 'No Data',
                        gripStrength: 'Outside Of Age Range For Test'
                    }
                } else {
                    paramsObject = {
                        benchPressRatio: data.benchPress !== -1 ? menBenchPress(data.benchPress, data.currentWeight, data.age) : 'No Data',
                        legPressRatio: data.legPress !== -1 ? menLegPress(data.age, data.legPress, data.currentWeight): 'No Data',
                        gripStrength: data.leftHandGrip !== -1 && data.rightHandGrip !== -1 ? menGripStrength(data.age, gripStrength) : 'No Data'
                    }
                }
            };

            if (!state.user.age) dispatch({type: 'UPDATE_AGE', payload:data.age})
            if (!state.user.currentWeight) dispatch({type:'UPDATE_CURRENT_WEIGHT', payload: data.currentWeight})
            dispatch({type:'UPDATE_BENCH_PRESS', payload:data.benchPress})
            const queryParams = new URLSearchParams(paramsObject)
    
            navigate({
                pathname:'/strength/results',
                search: `?${queryParams}`
            })
        } catch (e:any) {
            const error = e.message
            dispatch({type:'ERROR', payload: error})
        }
    };

    const newForm : MouseEventHandler = () => {
        setData(()=> { return {
            sex: 'FEMALE',
            age: 0,
            currentWeight: -1,
            benchPress: -1,
            legPress: -1,
            leftHandGrip: -1,
            rightHandGrip: -1
        }})
        navigate('/strength')
    };

    return { data, handleSubmit, newForm, handleReset, handleChange, handleSelect }
};

export default useStrength;