import {ChangeEvent, ChangeEventHandler, MouseEventHandler, useState, FormEventHandler, FormEvent} from 'react'
import { useNavigate } from 'react-router-dom'
import { Sex } from '../interfaces';
import { useUserContext } from './useUserContext';

type data = {
    sex: Sex,
    age: string,
    currentWeight: string,
    benchPress: string,
    leftHand:string,
    rightHand:string,
    legPress:string
}
const useStrength = () => {
    const {state, dispatch} = useUserContext()
    const navigate = useNavigate()
    const [data, setData] = useState<data>({
        sex:'FEMALE',
        age:'0',
        currentWeight: '0',
        benchPress: '0',
        legPress: '0',
        leftHand: '0',
        rightHand: '0'
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
            age: '0',
            currentWeight: '0',
            benchPress: '0',
            legPress: '0',
            leftHand: '0',
            rightHand: '0',
        }})
    };

    const handleSubmit : FormEventHandler<HTMLFormElement> = async (e:FormEvent) => {
        e.preventDefault();

        try {
            const gripStrength = (parseInt(data.leftHand) + parseInt(data.rightHand))/ 2.2;
            if (!state.user.sex) await dispatch({type:'UPDATE_SEX', payload:data.sex})
            if (!state.user.age) await dispatch({type: 'UPDATE_AGE', payload:data.age})
            if (!state.user.currentWeight) await dispatch({type:'UPDATE_CURRENT_WEIGHT', payload: data.currentWeight})
            await dispatch({type:'UPDATE_BENCH_PRESS', payload: Math.round(parseInt(data.benchPress))})
            await dispatch({type:'UPDATE_GRIP_STRENGTH', payload: Math.round(gripStrength)})
            await dispatch({type: 'UPDATE_LEG_PRESS', payload: Math.round(parseInt(data.legPress))})
            navigate({
                pathname:'/strength/results',
            })
        } catch (e:any) {
            const error = e.message
            alert(`${e.name}: ${error}`)
            dispatch({type:'ERROR', payload: error})
        }
    };

    const newForm : MouseEventHandler = () => {
        setData(()=> { return {
            sex: 'FEMALE',
            age: '0',
            currentWeight: '0',
            benchPress: '0',
            legPress: '0',
            leftHand: '0',
            rightHand: '0'
        }})
        navigate('/strength')
    };

    return { data, handleSubmit, newForm, handleReset, handleChange, handleSelect }
};

export default useStrength;