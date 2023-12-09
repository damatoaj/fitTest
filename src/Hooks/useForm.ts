import { useState, ChangeEventHandler, ChangeEvent, FormEventHandler, FormEvent} from 'react';
import { useUserContext } from './useUserContext';
import { useNavigate } from 'react-router-dom';

type Data = {
    activityLevel: string,
    age: string,
    benchPress: string,
    currentWeight: string,
    fname:string,
    goalWeight: string,
    height: string,
    leftHand:string,
    legPress: string,
    lname:string,
    pushups:string,
    rightHand:string
    sex: string,
    vo2Max:string
}

const useForm = (url?:string) => {
    const navigate : Function = useNavigate()
    const { dispatch} = useUserContext()
    const [data, setData] = useState<Data>({
        age: '',
        activityLevel: '',
        benchPress:'',
        currentWeight: '', //pounds
        fname:'',
        goalWeight: '', //pounds
        height: '', //inches
        leftHand:'',
        legPress:'',
        lname:'',
        pushups:'',
        rightHand:'',
        sex: '',
        vo2Max: ''
    })

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

    const handleReset : FormEventHandler = () => {
        setData(()=> { return {
            age: '',
            activityLevel: '',
            benchPress:'',
            currentWeight: '', //pounds
            fname:'',
            goalWeight: '', //pounds
            height: '', //inches
            leftHand:'',
            legPress:'',
            lname:'',
            pushups:'',
            rightHand:'',
            sex: '',
            vo2Max:'',
        }}) 
    }

    const customChange = (field:string, value:string) => {
        setData(prev => {
            return {...prev, [field]:value}
        })
    }

    const handleSubmit : FormEventHandler<HTMLFormElement> = async (e:FormEvent,) => {
        e.preventDefault()
        try {
            if (data.activityLevel.length > 0) await dispatch({type: "UPDATE_ACTIVITY_LEVEL", payload: data.activityLevel})
            if (data.age.length > 0) await dispatch({type:'UPDATE_AGE', payload: parseInt(data.age)})
            if (data.benchPress.length > 0) await dispatch({type:'UPDATE_BENCH_PRESS', payload: Math.round(parseInt(data.benchPress))})
            if (data.currentWeight.length > 0) await dispatch({type: 'UPDATE_CURRENT_WEIGHT', payload: parseInt(data.currentWeight)})
            if (data.fname.length > 0 && data.lname.length > 0) await dispatch({type: 'UPDATE_NAME', payload: {fname:data.fname,lname:data.lname}})
            if (data.goalWeight.length > 0) await dispatch({type:'UPDATE_GOAL_WEIGHT', payload:data.goalWeight})
            if (data.height.length > 0) await dispatch({type:'UPDATE_HEIGHT', payload: parseInt(data.height)})
            if (data.leftHand.length > 0 && data.rightHand.length > 0) await dispatch({type:'UPDATE_GRIP_STRENGTH', payload: Math.round((parseInt(data.leftHand) + parseInt(data.rightHand))/2)})
            if (data.legPress.length > 0) await dispatch({type: 'UPDATE_LEG_PRESS', payload: Math.round(parseInt(data.legPress))})
            if (data.sex.length > 0) await dispatch({type:'UPDATE_SEX', payload: data.sex})
            if (data.pushups.length > 0) await dispatch({ type:'UPDATE_PUSHUPS', payload: parseInt(data.pushups)})
            if (data.vo2Max.length > 0) await dispatch({type:'UPDATE_VO2MAX', payload: parseInt(data.vo2Max)})
            if (url) navigate(url)
        } catch (e:any) {
            const error = e.message
            dispatch({type:'ERROR', payload:error})
        }
    }

    return { data, handleChange, handleSelect, handleReset, handleSubmit, customChange }
}

export default useForm