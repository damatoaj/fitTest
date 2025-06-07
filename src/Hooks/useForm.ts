import { useState, ChangeEventHandler, ChangeEvent, FormEventHandler, FormEvent} from 'react';
import { useUserContext } from './useUserContext';
import { useNavigate } from 'react-router-dom';
import { validateName, validateSex } from '../Functions/Testing/demographicsValidation';
import { validateCurrentWeight,validateGoalWeight, validateAge } from '../Functions/Testing/demographicsValidation';
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
    inches : string,
    abdomenCircumference : string,
    armCircumference : string,
    calfCircumference : string,
    buttocksCircumference : string,
    forearmCircumference : string,
    hipsCircumference : string,
    midthighCircumference : string,
    abdominalSkin : string,
    bicepSkin : string,
    calfSkin : string,
    chestSkin : string,
    midaxillarySkin : string,
    subscapSkin: string,
    supraIliacSkin: string,
    thighSkin: string,
    tricepSkin: string,
    restingHR: string
};

const d = {
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
    inches: '',
    abdomenCircumference : '',
    armCircumference : '',
    calfCircumference : '',
    buttocksCircumference : '',
    forearmCircumference : '',
    hipsCircumference : '',
    midthighCircumference : '',
    abdominalSkin : '',
    bicepSkin : '',
    calfSkin : '',
    chestSkin : '',
    midaxillarySkin : '',
    subscapSkin: '',
    supraIliacSkin: '',
    thighSkin: '',
    tricepSkin: '',
    restingHR: ''
};

const useForm = (url?:string) => {
    const navigate : Function = useNavigate()
    const { state : { user } } = useUserContext()
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
        inches: '',
        abdomenCircumference : '',
        armCircumference : '',
        calfCircumference : '',
        buttocksCircumference : '',
        forearmCircumference : '',
        hipsCircumference : '',
        midthighCircumference : '',
        abdominalSkin : '',
        bicepSkin : '',
        calfSkin : '',
        chestSkin : '',
        midaxillarySkin : '',
        subscapSkin: '',
        supraIliacSkin: '',
        thighSkin: '',
        tricepSkin: '',
        restingHR: ''
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

    const handleReset : FormEventHandler = (e:FormEvent) => {
        setData(d);
    };

    const customChange = (field:string, value:string) => {
        setData(prev => {
            return {...prev, [field]:value}
        })
    };

    const handleSubmit : FormEventHandler<HTMLFormElement> = async (e:FormEvent) => {
        e.preventDefault()
        dispatch({type: 'LOADING', payload : null})
        try {
            if (data.abdominalSkin.length > 0) await dispatch({type: 'UPDATE_ABDOMINAL_SKIN', payload: parseFloat(data.abdominalSkin) });
            if (data.bicepSkin.length > 0) await dispatch({type: 'UPDATE_BICEPS_SKIN', payload: parseFloat(data.bicepSkin)});
            if (data.calfSkin.length > 0) await dispatch({type: 'UPDATE_CALF_SKIN', payload: parseFloat(data.calfSkin)});
            if (data.chestSkin.length > 0) await dispatch({type: 'UPDATE_CHEST_SKIN', payload: parseFloat(data.chestSkin)});
            if (data.midaxillarySkin.length > 0) await dispatch({type: 'UPDATE_MIDAXILLARY_SKIN', payload: parseFloat(data.midaxillarySkin)});
            if (data.subscapSkin.length > 0) await dispatch({type: 'UPDATE_SUBSCAP_SKIN', payload: parseFloat(data.subscapSkin)});
            if (data.supraIliacSkin.length > 0) await dispatch({type: 'UPDATE_SUPRAILIAC_SKIN', payload: parseFloat(data.supraIliacSkin)});
            if (data.thighSkin.length > 0) await dispatch({type: 'UPDATE_THIGH_SKIN', payload: parseFloat(data.thighSkin)});
            if (data.tricepSkin.length > 0) await dispatch({type: 'UPDATE_TRICEPS_SKIN', payload: parseFloat(data.tricepSkin)});

            if (data.abdomenCircumference.length > 0) await dispatch({type: 'UPDATE_ABDOMEN', payload: user.prefers_metric ? parseFloat(data.abdomenCircumference) : Math.floor(parseFloat(data.abdomenCircumference) * 2.54 * 100) / 100 });
            if (data.armCircumference.length > 0) await dispatch({type: 'UPDATE_ARM', payload: user.prefers_metric ? parseFloat(data.armCircumference) : Math.floor(parseFloat(data.armCircumference) * 2.54 * 100) / 100 });
            if (data.buttocksCircumference.length > 0) await dispatch({type: 'UPDATE_BUTTOCKS', payload: user.prefers_metric ? parseFloat(data.buttocksCircumference) : Math.floor(parseFloat(data.buttocksCircumference) * 2.54 * 100) / 100 });
            if (data.calfCircumference.length > 0) await dispatch({type: 'UPDATE_CALF', payload: user.prefers_metric ? parseFloat(data.calfCircumference) : Math.floor(parseFloat(data.calfCircumference) * 2.54 * 100) / 100 });
            if (data.forearmCircumference.length > 0) await dispatch({type: 'UPDATE_FOREARM', payload: user.prefers_metric ? parseFloat(data.forearmCircumference) : Math.floor(parseFloat(data.forearmCircumference) * 2.54 * 100) / 100 });
            if (data.hipsCircumference.length > 0) await dispatch({type: 'UPDATE_HIPS', payload: user.prefers_metric ? parseFloat(data.hipsCircumference) : Math.floor(parseFloat(data.hipsCircumference) * 2.54 * 100) / 100 });
            if (data.midthighCircumference.length > 0) await dispatch({type: 'UPDATE_MIDTHIGH', payload: user.prefers_metric ? parseFloat(data.midthighCircumference) : Math.floor(parseFloat(data.midthighCircumference) * 2.54 * 100) / 100 });

            if (data.inches.length > 0 && data.inches.length > 0) await dispatch({type:'UPDATE_HEIGHT', payload: parseInt(data.feet) * 12 + parseFloat(data.inches)});
            if (data.sar.length > 0) await dispatch({type: 'UPDATE_SAR', payload : Number(data.sar)})
            if (data.sbp.length > 0 && data.dbp.length > 0) await dispatch({type: 'UPDATE_BLOOD_PRESSURE', payload: [parseInt(data.sbp), parseInt(data.dbp)]});
            if (data.activityLevel.length > 0) await dispatch({type: "UPDATE_ACTIVITY_LEVEL", payload: data.activityLevel});
            if (data.age.length > 0) {
                validateAge(parseInt(data.age));
                await dispatch({type:'UPDATE_AGE', payload: parseInt(data.age)});
            };
            if (data.benchPress.length > 0) await dispatch({type:'UPDATE_BENCH_PRESS', payload: user.prefers_metric ? Math.round(parseFloat(data.benchPress)) : Math.floor(parseFloat(data.benchPress) / 2.2 * 100) / 100 });
            if (data.currentWeight.length > 0) {
                user.prefers_metric ? validateCurrentWeight(parseFloat(data.currentWeight)) : validateCurrentWeight(Math.floor(parseFloat(data.currentWeight) / 2.2 * 100) / 100);
                
                await dispatch({type: 'UPDATE_CURRENT_WEIGHT', payload: user.prefers_metric ? parseFloat(data.currentWeight) : Math.floor(parseFloat(data.currentWeight) / 2.2 * 100) / 100 })
            };
            if (data.fname.length > 0 && data.lname.length > 0) {
                let f = validateName(data.fname);
                let l = validateName(data.lname);
                await dispatch({type: 'UPDATE_NAME', payload: {fname:f,lname:l}});
            };
            if (data.goalWeight.length > 0) {
                user.prefers_metric ? validateGoalWeight(parseFloat(data.goalWeight)) : validateGoalWeight(Math.round(parseFloat(data.goalWeight) / 2.2 * 100 ) / 100); 
                await dispatch({type:'UPDATE_GOAL_WEIGHT', payload: user.prefers_metric ? parseFloat(data.goalWeight) : Math.round(parseFloat(data.goalWeight) / 2.2 * 100 ) / 100 });
            };
            if (data.height.length > 0) await dispatch({type:'UPDATE_HEIGHT', payload: user.prefers_metric ? parseFloat(data.height) : Math.round(parseFloat(data.height) / 2.54 * 100 ) / 100 });
            if (data.leftHand.length > 0 && data.rightHand.length > 0) await dispatch({type:'UPDATE_GRIP_STRENGTH', payload: user.prefers_metric ?  Math.round((parseFloat(data.leftHand) + parseFloat(data.rightHand)) / 2 ) : (Math.round((parseFloat(data.leftHand) + parseFloat(data.rightHand)) / 2 / 2.2 * 100)) / 100 });
            if (data.legPress.length > 0) await dispatch({type: 'UPDATE_LEG_PRESS', payload: user.prefers_metric ? Math.round(parseFloat(data.legPress)) : Math.round(parseFloat(data.legPress) / 2.2 * 100) / 100 });
            if (data.sex.length > 0) {
                validateSex(data.sex);
                await dispatch({type:'UPDATE_SEX', payload: data.sex});
            };
            if (data.pushups.length > 0) await dispatch({ type:'UPDATE_PUSHUPS', payload: parseInt(data.pushups)});
            if (data.vo2Max.length > 0) await dispatch({type:'UPDATE_VO2MAX', payload: parseInt(data.vo2Max)});
            if (data.waistCircumference.length > 0) await dispatch({type:'UPDATE_WAIST', payload: user.prefers_metric ? parseFloat(data.waistCircumference) : Math.round(parseFloat(data.waistCircumference) * 2.54 * 100) / 100 });
            if (data.restingHR.length > 0) await dispatch({type: 'UPDATE_RESTING_HR', payload: parseInt(data.restingHR)});
            setData(d);
            (e.target as HTMLFormElement).reset();
            if (url) navigate(url);
            dispatch({type:'ALERT', payload: {type:'success', message: 'form submitted'}});
        } catch (e:any) {
            const error = e.message;
            setData(d);
            dispatch({type:'ERROR', payload:error});
        }
    }

    return { data, handleChange, handleSelect, handleReset, handleSubmit, customChange }
};

export default useForm