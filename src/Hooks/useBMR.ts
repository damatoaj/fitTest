import { useState, ChangeEventHandler, MouseEventHandler, ChangeEvent, FormEventHandler, FormEvent} from 'react';
import { calculateMicros } from '../Functions/Nutrition/calculateMicros';
import { calculateMacros } from '../Functions/Nutrition/calculateMacros';
import { ActivityLevel, WeightGoal, Sex } from '../interfaces';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from './useUserContext';

type Demographics = {
    sex: Sex,
    age: number,
    height: number,
    currentWeight: number,
    activityLevel: ActivityLevel,
    goal: WeightGoal,
    goalWeight: number
}

const useBMR = () => {
    const {state, dispatch} = useUserContext()
    const navigate = useNavigate()
    const [data, setData] = useState<Demographics>({
        sex: 'FEMALE',
        age: 0,
        height: 0,
        currentWeight: 0,
        activityLevel: 'moderately active',
        goal: 'maintain',
        goalWeight: 0
    })

    const kg : number = data.goalWeight / 2.2
    const cm : number = data.height * 2.54

    const handleChange : ChangeEventHandler = (e : ChangeEvent<HTMLInputElement>) => {
        setData((prev)=> {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    const handleSelect : ChangeEventHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setData((prev)=> {
            return {...prev, [e.target.name]:e.target.value}
        })
    }

    const handleReset : MouseEventHandler = () => {
        setData(()=> { return {
            sex: 'FEMALE',
            age: 0,
            height: 0,
            currentWeight: 0,
            activityLevel: 'moderately active',
            goal: 'maintain',
            goalWeight: 0
        }}) 
    }

    const handleSubmit : FormEventHandler<HTMLFormElement> = async(e:FormEvent) => {
        e.preventDefault()
        try {
            if (!state.user.age) await dispatch({type:'UPDATE_AGE', payload: data.age})
            if (!state.user.sex) await dispatch({type:'UPDATE_SEX', payload: data.sex})
            if (!state.user.height) await dispatch({type:'UPDATE_HEIGHT', payload:data.height})
            if (!state.user.currentWeight) await dispatch({type: 'UPDATE_CURRENT_WEIGHT', payload:data.currentWeight})
            if (!state.user.bmi) await dispatch({type:'UPDATE_BMI', payload:{h:state.user.height, w:state.user.currentWeight}})
            await dispatch({type:"UPDATE_WEIGHT_GOAL", payload:data.goal})
            await dispatch({type:'UPDATE_GOAL_WEIGHT', payload:data.goalWeight})
            await dispatch({type: "UPDATE_ACTIVITY_LEVEL", payload: data.activityLevel})

            if (state.user.sex && state.user.age && state.user.activityLevel && state.user.bodyWeightGoal) {
                dispatch({type:'UPDATE_MACROS', payload:calculateMacros(state.user.sex, state.user.age, kg, cm, state.user.activityLevel, data.goal)})
                dispatch({type:'UPDATE_MICROS', payload:calculateMicros(state.user.sex, state.user.age)})
            }
            navigate('/nutrition/results')
        } catch (e:any) {
            const error = e.message
            dispatch({type:'ERROR', payload:error})
        }
    }

    const newForm : MouseEventHandler = () => {
        setData(()=> { return {
            sex: 'FEMALE',
            age: 0,
            height: 0,
            currentWeight: 0,
            activityLevel: 'moderately active',
            goal: 'maintain',
            goalWeight: 0
        }}) 
        navigate('/nutrition')
    }

    return { data, handleChange, handleSelect, handleReset, handleSubmit, newForm}
}

export default useBMR