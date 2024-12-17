import { useState, ChangeEventHandler, ChangeEvent, FormEventHandler, FormEvent} from 'react';
import { useUserContext } from './useUserContext';
import { useNavigate } from 'react-router-dom';
import { validateName, validateSex } from '../Functions/Testing/demographicsValidation';

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
    vo2Max:string,
    sbp : string,
    dbp : string,
    waistCircumference : string,
    sar : string,
    feet : string,
    inches : string
}

const useForm = (url?:string) => {
    const navigate : Function = useNavigate()
    const { state : {user } } = useUserContext()
    const { dispatch} = useUserContext()
    const [data, setData] = useState<Data>({
        age: '',
        activityLevel: '',
        benchPress:'',
        currentWeight: '',
        fname:'',
        goalWeight: '',
        height: '',
        leftHand:'',
        legPress:'',
        lname:'',
        pushups:'',
        rightHand:'',
        sex: '',
        vo2Max: '',
        sbp: '',
        dbp: '',
        waistCircumference: '',
        sar: '',
        feet: '',
        inches: ''
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
            sbp : '',
            dbp : '',
            waistCircumference: '',
            sar : '',
            inches: '',
            feet: ''
        }}) 
    }

    const customChange = (field:string, value:string) => {
        setData(prev => {
            return {...prev, [field]:value}
        })
    }

    const handleSubmit : FormEventHandler<HTMLFormElement> = async (e:FormEvent,) => {
        e.preventDefault()
        dispatch({type: 'LOADING', payload : null})
        try {
            if (data.inches.length > 0 && data.inches.length > 0) await  await dispatch({type:'UPDATE_HEIGHT', payload: parseInt(data.feet) * 12 + parseFloat(data.inches)});
            if (data.sar.length > 0) await dispatch({type: 'UPDATE_SAR', payload : Number(data.sar)})
            if (data.sbp.length > 0 && data.dbp.length > 0) await dispatch({type: 'UPDATE_BLOOD_PRESSURE', payload: [parseInt(data.sbp), parseInt(data.dbp)]});
            if (data.activityLevel.length > 0) await dispatch({type: "UPDATE_ACTIVITY_LEVEL", payload: data.activityLevel});
            if (data.age.length > 0) await dispatch({type:'UPDATE_AGE', payload: parseInt(data.age)});
            if (data.benchPress.length > 0) await dispatch({type:'UPDATE_BENCH_PRESS', payload: user.prefers_metric ? Math.round(parseInt(data.benchPress)) : Math.round(parseInt(data.benchPress) / 2.2) });
            if (data.currentWeight.length > 0) await dispatch({type: 'UPDATE_CURRENT_WEIGHT', payload: user.prefers_metric ? parseInt(data.currentWeight) : parseInt(data.currentWeight)/2.2 });
            if (data.fname.length > 0 && data.lname.length > 0) {
                let f = validateName(data.fname);
                let l = validateName(data.lname);
                await dispatch({type: 'UPDATE_NAME', payload: {fname:f,lname:l}});
            };
            if (data.goalWeight.length > 0) await dispatch({type:'UPDATE_GOAL_WEIGHT', payload: user.prefers_metric ? parseInt(data.goalWeight) : parseInt(data.goalWeight) / 2.2 });
            if (data.height.length > 0) await dispatch({type:'UPDATE_HEIGHT', payload: user.prefers_metric ? parseInt(data.height) : Math.round(parseInt(data.height) / 2.54 * 100 ) / 100});
            if (data.leftHand.length > 0 && data.rightHand.length > 0) await dispatch({type:'UPDATE_GRIP_STRENGTH', payload: user.prefers_metric ?  Math.round((parseInt(data.leftHand) + parseInt(data.rightHand))/2) : (Math.round((parseInt(data.leftHand) + parseInt(data.rightHand))/2)) / 2.2 });
            if (data.legPress.length > 0) await dispatch({type: 'UPDATE_LEG_PRESS', payload: user.prefers_metric ? Math.round(parseInt(data.legPress)) : Math.round(parseInt(data.legPress)) / 2.2});
            if (data.sex.length > 0) {
                const sex = validateSex(data.sex);
                await dispatch({type:'UPDATE_SEX', payload: sex});
            };
            if (data.pushups.length > 0) await dispatch({ type:'UPDATE_PUSHUPS', payload: parseInt(data.pushups)});
            if (data.vo2Max.length > 0) await dispatch({type:'UPDATE_VO2MAX', payload: parseInt(data.vo2Max)});
            if (data.waistCircumference.length > 0) await dispatch({type:'UPDATE_WAIST', payload: user.prefers_metric ? parseFloat(data.waistCircumference) : Math.round(parseFloat(data.waistCircumference) / 2.54 * 100) / 100 })
            if (url) navigate(url);
        } catch (e:any) {
            const error = e.message;
            dispatch({type:'ERROR', payload:error});
        }
    }

    return { data, handleChange, handleSelect, handleReset, handleSubmit, customChange }
}

export default useForm