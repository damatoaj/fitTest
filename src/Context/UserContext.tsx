import { createContext, PropsWithChildren, Dispatch, useReducer, useMemo } from "react";
import { User, ActivityLevel, Macros, Micros, WeightGoal, BMI, BodyCompCategory, BodyComp } from "../interfaces";
import { menPushupCategories, womenPushupCategories } from "../Functions/Testing/muscularEndurance";
import { womenCardioFitnessClassification, menCardioFitnessClassification } from "../Functions/Testing/cardioFitness";
import { menBenchPress, womenBenchPress, menGripStrength, womenGripStrength, menLegPress, womenLegPress } from "../Functions/Testing/muscularFitness";
import { astrandEquation, gellishEquation, } from "../Functions/Intensity/heartRateFunctions";
import { 
    validateAge, 
    validateCurrentWeight, 
    validateGoalWeight 
} from "../Functions/Testing/demographicsValidation";
import { cmToM } from "../Functions/Conversions";
import { calculateBMI } from "../Functions/Testing/bodyComposition";
import { calculateMacros } from "../Functions/Nutrition/calculateMacros";
import { calculateMicros } from "../Functions/Nutrition/calculateMicros";
import { bloodPressureCalculation } from "../Functions/BloodPressure";
import { waistCircumferenceRiskFactor } from "../Functions/Testing/bodyComposition";
import { mensSitAndReach, womensSitAndReach } from "../Functions/Testing/flexibilityTests";
import { menBodyComp, womenBodyComp } from "../Functions/Testing/bodyComposition";
const u : string | null = localStorage.getItem('user');

const initialUser: User = typeof u === 'string' ? JSON.parse(u) : {
    activityLevel: null,
    age: null,
    benchPress: null,
    bmi: null,
    bodyWeightGoal: null,
    currentWeight: null,
    goalWeight: null,
    gripStrength: null,
    height: null,
    hrMax: null,
    legPress: null,
    fname: null,
    lname: null,
    pushups: null,
    sex: null,
    macros: null,
    micros: null,
    uid: null,
    vo2Max: null,
    bloodPressure : null,
    waistCircumference : null,
    sar : null,
    prefers_metric: true,
    abdomenCircumference : null,
    armCircumference : null,
    buttocksCircumference : null,
    calfCircumference : null,
    forearmCircumference : null,
    hipsCircumference : null,
    midthighCircumference : null,
    waistHipRatio : 0,
    waistHeightRatio : 0,
    abdominalSkin : 0,
    bicepSkin : 0,
    tricepSkin : 0,
    chestSkin : 0,
    calfSkin : 0,
    midaxillarySkin : 0,
    subscapSkin : 0,
    supraIliacSkin : 0,
    thighSkin : 0
};

type State = {
    user : User;
    isLoading:boolean;
    error:string | null;
    alert: {message: string, type: string} | null;
}

type Action = {type: 'UPDATE_PUSHUPS', payload: number}
    | {type: 'LOADING', payload: boolean}
    | {type: 'ERROR', payload:string}
    | {type: 'UPDATE_SEX', payload: 'MALE' | 'FEMALE'}
    | {type: 'UPDATE_AGE', payload: number}
    | {type: 'UPDATE_HEIGHT', payload:number}
    | {type: 'UPDATE_GOAL_WEIGHT', payload: number}
    | {type: 'UPDATE_WEIGHT_GOAL', payload: WeightGoal}
    | {type: 'UPDATE_CURRENT_WEIGHT', payload: number}
    | {type: 'UPDATE_NAME', payload: {fname:string, lname:string}}
    | {type: 'UPDATE_ACTIVITY_LEVEL', payload: ActivityLevel}
    | {type: 'UPDATE_CURRENT_WEIGHT', payload: number}
    | {type: 'UPDATE_BENCH_PRESS', payload: number}
    | {type: 'UPDATE_GRIP_STRENGTH', payload: number}
    | {type: 'UPDATE_LEG_PRESS', payload: number}
    | {type: 'UPDATE_VO2MAX', payload: number}
    | {type: 'UPDATE_UID', payload: null}
    | {type: 'UPDATE HR_MAX', payload : number}
    | {type: 'UPDATE_BLOOD_PRESSURE', payload: [number, number]}
    | {type: 'UPDATE_WAIST', payload: number}
    | {type : 'UPDATE_SAR', payload: number}
    | {type : 'UPDATE_METRIC', payload : boolean}
    | {type : 'UPDATE_ABDOMEN', payload: number}
    | {type : 'UPDATE_ARM', payload: number}
    | {type : 'UPDATE_BUTTOCKS', payload: number}
    | {type : 'UPDATE_CALF', payload: number}
    | {type : 'UPDATE_FOREARM', payload: number}
    | {type : 'UPDATE_HIPS', payload: number}
    | {type : 'UPDATE_MIDTHIGH', payload: number}
    | {type : 'UPDATE_ABDOMINAL_SKIN', payload: number}
    | {type : 'UPDATE_BICEPS_SKIN', payload: number}
    | {type : 'UPDATE_CALF_SKIN', payload: number}
    | {type : 'UPDATE_CHEST_SKIN', payload: number}
    | {type : 'UPDATE_MIDAXILLARY_SKIN', payload: number}
    | {type : 'UPDATE_SUBSCAP_SKIN', payload: number}
    | {type : 'UPDATE_SUPRAILIAC_SKIN', payload: number}
    | {type : 'UPDATE_THIGH_SKIN', payload: number}
    | {type : 'UPDATE_TRICEPS_SKIN', payload: number}
    | {type: 'ALERT', payload : {type: string, message: string}}
    | {type: 'REMOVEALERT', payload: null}


const initialState = {
    user: initialUser,
    error: null,
    isLoading: false,
    alert: null
}

export const userReducer = (state : State, action: Action) => {
    const { type, payload } = action
    console.group(`Dispatch Type: ${type}`);
    console.table(payload);
    console.groupEnd();
    switch (type) {
        case 'LOADING':
            return {...state, isLoading: true, error: null, alert: null}
        case 'UPDATE_ABDOMINAL_SKIN':
            sessionStorage.setItem('user', JSON.stringify({...state.user, abdominalSkin : payload}));
            return { user: {...state.user, abdominalSkin: payload}, isLoading: false, error: null,  alert: null};
        case 'UPDATE_BICEPS_SKIN':
            sessionStorage.setItem('user', JSON.stringify({...state.user, bicepSkin : payload}));
            return { user: {...state.user, bicepSkin: payload}, isLoading: false, error: null,  alert: null};
        case 'UPDATE_CALF_SKIN':
            sessionStorage.setItem('user', JSON.stringify({...state.user, calfSkin : payload}));
            return { user: {...state.user, calfSkin: payload}, isLoading: false, error: null, alert: null};
        case 'UPDATE_CHEST_SKIN':
            sessionStorage.setItem('user', JSON.stringify({...state.user, chestSkin : payload}));
            return { user: {...state.user, chestSkin: payload}, isLoading: false, error: null,  alert: null};
        case 'UPDATE_MIDAXILLARY_SKIN':
            sessionStorage.setItem('user', JSON.stringify({...state.user, midaxillarySkin : payload}));
            return { user: {...state.user, midaxillarySkin: payload}, isLoading: false, error: null,  alert: null};
        case 'UPDATE_SUBSCAP_SKIN':
            sessionStorage.setItem('user', JSON.stringify({...state.user, subscapSkin : payload}));
            return { user: {...state.user, subscapSkin: payload}, isLoading: false, error: null,  alert: null};
        case 'UPDATE_SUPRAILIAC_SKIN':
            sessionStorage.setItem('user', JSON.stringify({...state.user, supraIliacSkin : payload}));
            return { user: {...state.user, supraIliacSkin: payload}, isLoading: false, error: null,  alert: null};
        case 'UPDATE_THIGH_SKIN':
            sessionStorage.setItem('user', JSON.stringify({...state.user, thighSkin : payload}));
            return { user: {...state.user, thighSkin: payload}, isLoading: false, error: null,  alert: null};
        case 'UPDATE_TRICEPS_SKIN':
            sessionStorage.setItem('user', JSON.stringify({...state.user, tricepSkin : payload}));
            return { user: {...state.user, tricepSkin: payload}, isLoading: false, error: null,  alert: null};
        case 'UPDATE_ABDOMEN':
            sessionStorage.setItem('user', JSON.stringify({...state.user, abdomenCircumference : payload}));
            return { user: {...state.user, abdomenCircumference: payload}, isLoading: false, error: null,  alert: null};
        case 'UPDATE_ARM':
            sessionStorage.setItem('user', JSON.stringify({...state.user, armCircumference : payload}));
            return { user: {...state.user, armCircumference: payload}, isLoading: false, error: null,  alert: null};
        case 'UPDATE_BUTTOCKS':
            sessionStorage.setItem('user', JSON.stringify({...state.user, buttocksCircumference : payload}));
            return { user: {...state.user, buttocksCircumference: payload}, isLoading: false, error: null,  alert: null};
        case 'UPDATE_CALF':
            sessionStorage.setItem('user', JSON.stringify({...state.user, calfCircumference : payload}));
            return { user: {...state.user, calfCircumference: payload}, isLoading: false, error: null,  alert: null};
        case 'UPDATE_FOREARM':
            sessionStorage.setItem('user', JSON.stringify({...state.user, forearmCircumference : payload}));
            return { user: {...state.user, forearmCircumference: payload}, isLoading: false, error: null,  alert: null};
        case 'UPDATE_HIPS':
            sessionStorage.setItem('user', JSON.stringify({...state.user, hipsCircumference : payload}));
            return { user: {...state.user, hipsCircumference: payload}, isLoading: false, error: null,  alert: null};
        case 'UPDATE_MIDTHIGH':
            sessionStorage.setItem('user', JSON.stringify({...state.user, midthighCircumference : payload}));
            return { user: {...state.user, midthighCircumference: payload}, isLoading: false, error: null,  alert: null};
        case 'UPDATE_SAR':
            let sar = null;
            if (state.user.sex === 'MALE' && state.user.age) {
                sar = mensSitAndReach(state.user.age, payload);
                sessionStorage.setItem('user', JSON.stringify({...state.user, sar : mensSitAndReach(state.user.age, payload)}));

            };
            if (state.user.sex === 'FEMALE' && state.user.age) {
                sar = womensSitAndReach(state.user.age, payload);
                sessionStorage.setItem('user', JSON.stringify({...state.user, sar : womensSitAndReach(state.user.age, payload)}));
            };
            return {isLoading: false, error: null, user : {...state.user, sar},  alert: null}
        case 'UPDATE_WAIST':
            if (!state.user.sex) throw new Error('Sex is required before waist circumference can be calculated');
            sessionStorage.setItem('user', JSON.stringify({...state.user, waistCircumference : waistCircumferenceRiskFactor(state.user.sex, payload)}));
            return { user: {...state.user, waistCircumference: waistCircumferenceRiskFactor(state.user.sex, payload)}, isLoading: false, error: null, alert: null}
        case 'UPDATE_BLOOD_PRESSURE':
            if (!payload[0] || !payload[1] || typeof payload[0] !== 'number' || typeof payload[1] !== 'number') throw new Error(`UserContext Error: Blood Pressure Payload Length is invalid: ${payload}`);
            sessionStorage.setItem('user', JSON.stringify( {...state.user, bloodPressure : bloodPressureCalculation(payload[0], payload[1])}));
            return { error : null, isLoading : false, user: {...state.user, bloodPressure : bloodPressureCalculation(payload[0], payload[1])},  alert: null}
        case 'UPDATE HR_MAX':
            if (typeof payload !== 'number') throw new TypeError(`UserContext Error: HR MAX must use number, but received ${payload}`);
            if (payload > 220 || payload < 0) throw new Error('UserContext Error: HR MAX falls outside of acceptable range, check inputs');
            sessionStorage.setItem('user', JSON.stringify( {...state.user, hrMax: payload}));
            return { alert: null, error: null, isLoading: false, user : {...state.user, hrMax: payload}}
        case 'UPDATE_VO2MAX':
            if (state.user.sex === 'MALE' && state.user.age) {
                const vo2Max = menCardioFitnessClassification(state.user.age, payload)
                sessionStorage.setItem('user', JSON.stringify( {...state.user, vo2Max}));
                return { alert: null, error: null, isLoading: false, user: {...state.user, vo2Max}}
            } else if (state.user.sex === 'FEMALE' && state.user.age) {
                const vo2Max = womenCardioFitnessClassification(state.user.age, payload)
                sessionStorage.setItem('user', JSON.stringify( {...state.user, vo2Max}));
                return {alert: null, error: null, isLoading: false, user: {...state.user, vo2Max}}
            } else {
                return {...state, isLoading:false}
            }
        case 'UPDATE_LEG_PRESS':
            if (state.user.sex === 'MALE' && state.user.age && state.user.currentWeight) {
                const legPress = menLegPress(state.user.age, payload, state.user.currentWeight)
                sessionStorage.setItem('user', JSON.stringify( {...state.user, legPress}));
                return { alert: null, error: null, isLoading: false, user: {...state.user, legPress}}
            } else if (state.user.sex === 'FEMALE' && state.user.age && state.user.currentWeight) {
                const legPress = womenLegPress(state.user.age, payload, state.user.currentWeight)
                sessionStorage.setItem('user', JSON.stringify( {...state.user, legPress}));
                return { alert: null, error: null, isLoading: false, user: {...state.user, legPress}}
            } else {
                return {...state, isLoading:false}
            }
        case 'UPDATE_GRIP_STRENGTH':
            if (state.user.sex === 'MALE' && state.user.age) {
                const gripStrength = menGripStrength(state.user.age, payload)
                sessionStorage.setItem('user', JSON.stringify( {...state.user, gripStrength}));
                return { alert: null, error:null, isLoading:false, user: {...state.user,gripStrength}}
            } else if (state.user.sex === 'FEMALE' && state.user.age) {
                const gripStrength = womenGripStrength(state.user.age,payload)
                sessionStorage.setItem('user', JSON.stringify( {...state.user, gripStrength}));
                return { alert: null, error:null, isLoading:false, user: {...state.user, gripStrength}}
            } else {
                return {...state, isLoading:false}
            }
        case 'UPDATE_CURRENT_WEIGHT':
            const currentWeight = validateCurrentWeight(payload)
            sessionStorage.setItem('user', JSON.stringify( {...state.user, currentWeight}));
            return { alert: null, error:null, isLoading:false, user: {...state.user, currentWeight}}
        case "UPDATE_ACTIVITY_LEVEL":
            const activityLevel = payload;
            sessionStorage.setItem('user', JSON.stringify( {...state.user, activityLevel}));
            return { alert: null, error:null, isLoading:false, user:{...state.user, activityLevel}};
        case 'UPDATE_NAME':
            sessionStorage.setItem('user', JSON.stringify( {...state.user, fname: payload.fname, lname: payload.fname}));
            return { alert: null, error:null, isLoading:false, user: {...state.user, fname:  payload.fname, lname : payload.lname }}
        case 'UPDATE_SEX':
            sessionStorage.setItem('user', JSON.stringify( {...state.user, sex : payload}));
            return { alert: null, error:null, isLoading:false, user: {...state.user, sex : payload}}
        case 'UPDATE_AGE':
            const age = validateAge(payload)
            sessionStorage.setItem('user', JSON.stringify( {...state.user, age}));
            return { alert: null, error:null, isLoading: false, user: {...state.user, age}}
        case 'UPDATE_HEIGHT':
            const height = state.user.prefers_metric ? payload : payload * 2.54;
            sessionStorage.setItem('user', JSON.stringify( {...state.user, height}));
            return { alert: null, error: null, isLoading: false, user: {...state.user, height}}
        case 'UPDATE_GOAL_WEIGHT':
            const goalWeight = validateGoalWeight(payload)
            sessionStorage.setItem('user', JSON.stringify( {...state.user, goalWeight}));
            return {alert: null, error:null, isLoading:false, user:{...state.user, goalWeight}}
        case 'UPDATE_PUSHUPS':
            if (state.user.sex === 'FEMALE' && state.user.age) {
                const pushups = Object.freeze({pushups:payload, category: womenPushupCategories(state.user.age, payload)})
                sessionStorage.setItem('user', JSON.stringify( {...state.user, pushups}));
                return { alert: null, error:null, isLoading: false, user:{...state.user, pushups }}
            } else if (state.user.sex === 'MALE' && state.user.age){
                const pushups = Object.freeze({pushups:payload, category: menPushupCategories(state.user.age, payload)})
                sessionStorage.setItem('user', JSON.stringify( {...state.user, pushups}));
                return { alert: null, error:null, isLoading: false, user:{...state.user, pushups }}
            } else {
                return {...state, isLoading:false}
            }
        case 'UPDATE_BENCH_PRESS':
            if (!state.user.sex || !state.user.age || !state.user.currentWeight) return {...state, isLoading:false}
            if (state.user.sex === 'MALE') {
                const benchPress = menBenchPress(payload, state.user.currentWeight, state.user.age)
                sessionStorage.setItem('user', JSON.stringify( {...state.user, benchPress}));

                return { alert: null, error:null, isLoading:false, user:{...state.user, benchPress}}
            } else {
                const benchPress = womenBenchPress(payload, state.user.currentWeight, state.user.age)
                sessionStorage.setItem('user', JSON.stringify( {...state.user, benchPress}));

                return { alert: null, error:null, isLoading:false, user:{...state.user, benchPress}}
            }
        case 'UPDATE_METRIC':
            console.log(payload, '<----- update metric')
            return { alert: null, error:null, isLoading:false, user: {...state.user, prefers_metric: payload}}
        case 'UPDATE_UID':
            return { alert: null, error: null, isLoading:false, user:{...state.user, uid: Math.floor(Math.random() * Date.now()) }}
        case 'ALERT':
            return {...state, alert: payload}
        case 'REMOVEALERT':
            return {...state, alert: null}
        case 'ERROR':
            const error = payload
            return {...state, error, isLoading:false}
        default:
            return state
    }
}

type UserContextType = {
    state: State;
    dispatch: Dispatch<any>;
}

export const UserContext = createContext<UserContextType>({state:initialState, dispatch:() => null});

export const UserProvider = (props:PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(userReducer, initialState);
    
    const bmi : BMI | null = useMemo(()=> {
        console.log(state.user.height, state.user.currentWeight)

        if (state.user.height && state.user.currentWeight) {
            sessionStorage.setItem('user', JSON.stringify({...state.user, bmi : calculateBMI(state.user.currentWeight, cmToM(state.user.height))}));
            return calculateBMI(state.user.currentWeight, cmToM(state.user.height));
        }
        return null
    }, [state.user.height, state.user.currentWeight]);

    const bodyWeightGoal : WeightGoal | null = useMemo(()=> {
        if (state.user.currentWeight && state.user.goalWeight) {
            if (state.user.currentWeight > state.user.goalWeight) {
                return 'lose'
            } else if (state.user.currentWeight < state.user.goalWeight) {
                return 'gain'
            } else {return'maintain'}
        }
        return null;
    }, [state.user.currentWeight, state.user.goalWeight]);

    const waistHipRatio : number = useMemo(()=> {
        if (!state.user.waistCircumference || !state.user.hipsCircumference) return 0;
        return Math.floor(state.user.waistCircumference.wc / state.user.hipsCircumference * 100) / 100;

    }, [state.user.waistCircumference, state.user.hipsCircumference]);

    const waistHeightRatio : number = useMemo(()=> {
        if (!state.user.height || !state.user.waistCircumference) return 0;
        return Math.floor(state.user.waistCircumference.wc / state.user.height * 100) /100;
    }, [state.user.height, state.user.waistCircumference]);

    const bodyDensity : number = useMemo(()=> {
        const {
            chestSkin,
            midaxillarySkin,
            tricepSkin,
            subscapSkin,
            abdominalSkin,
            supraIliacSkin,
            thighSkin
        } = state.user;
        let d = 0;
        if (state.user?.sex === 'MALE' && state.user.age) {
            console.log('Branch A')
            if (chestSkin &&
                midaxillarySkin &&
                tricepSkin &&
                subscapSkin &&
                abdominalSkin &&
                supraIliacSkin &&
                thighSkin) {
                    d = (1.112 - .00043499 * (chestSkin+midaxillarySkin+tricepSkin+subscapSkin+abdominalSkin+supraIliacSkin+thighSkin)) + (.00000055 * (chestSkin+midaxillarySkin+tricepSkin+subscapSkin+abdominalSkin+supraIliacSkin+thighSkin)**2) - (.00028826 * state.user.age);
                } else if (chestSkin && abdominalSkin && thighSkin) {
                    d = 1.10938 - .0008267 * (chestSkin+abdominalSkin+thighSkin) + .00000016 * (chestSkin+abdominalSkin+thighSkin)**2 - .0002574 * state.user.age;
                } else if (chestSkin && tricepSkin && subscapSkin) {
                    d = 1.1125025 - .0013125 * (chestSkin+tricepSkin+subscapSkin) + .0000055 * (chestSkin+tricepSkin+subscapSkin)**2 - .000244 * state.user.age;
                }
        } else if (state.user?.sex === 'FEMALE' && state.user.age) {
            if (chestSkin &&
                midaxillarySkin &&
                tricepSkin &&
                subscapSkin &&
                abdominalSkin &&
                supraIliacSkin &&
                thighSkin) {
                    d = 1.097 - .00046971 * (chestSkin+midaxillarySkin+tricepSkin+subscapSkin+abdominalSkin+supraIliacSkin+thighSkin) + (.00000056 * (chestSkin+midaxillarySkin+tricepSkin+subscapSkin+abdominalSkin+supraIliacSkin+thighSkin)**2) - .00012828 * state.user.age;
                } else if (tricepSkin && supraIliacSkin && thighSkin) {
                    d = 1.0994921 - .0009929 * (tricepSkin+supraIliacSkin+thighSkin) + .0000023 * (tricepSkin+supraIliacSkin+thighSkin)**2 - .0001329 * state.user.age;
                } else if (abdominalSkin && tricepSkin && supraIliacSkin) {
                    d = 1.089733 - .0009245 * (abdominalSkin+tricepSkin+supraIliacSkin) + .0000025 * (abdominalSkin+tricepSkin+supraIliacSkin)**2 - .0000979 * state.user.age;
                };
        };
        return d > 0 ? Math.floor(d * 100)/100 : d;
    }, [state.user.sex, state.user.age, state.user.abdominalSkin, state.user.bicepSkin,state.user.calfSkin,state.user.chestSkin,state.user.midaxillarySkin,state.user.subscapSkin,state.user.supraIliacSkin,state.user.thighSkin,state.user.tricepSkin]);

    const bodyComp : BodyComp = useMemo(()=> {
        let bf : number = 0;
        let c : BodyCompCategory = '';
        if (bodyDensity) {
            bf = ((4.95 / bodyDensity) - 4.5) * 100;
            if (state.user.sex === 'MALE' && state.user.age) {
                c = menBodyComp(state.user.age, bf)
            };
            if (state.user.sex === 'FEMALE' && state.user.age) {
                c = womenBodyComp(state.user.age, bf)
            };
        };
        return { percentage : Math.floor(bf * 100) / 100, category : c }
    }, [bodyDensity, state.user]);

    const macros : Macros | null = useMemo(()=> {
        try {
            if (state.user.age 
                && state.user.sex 
                && state.user.currentWeight
                && state.user.height
                && state.user.activityLevel
                && bodyWeightGoal
                && state.user.prefers_metric === false) {
                sessionStorage.setItem('user', JSON.stringify({...state.user, macros: calculateMacros(state.user.sex,state.user.age, state.user.currentWeight, state.user.height, state.user.activityLevel, bodyWeightGoal)}));
                return calculateMacros(state.user.sex,state.user.age, state.user.currentWeight, state.user.height, state.user.activityLevel, bodyWeightGoal);
            }
    
            if (state.user.age 
                && state.user.sex 
                && state.user.currentWeight
                && state.user.height
                && state.user.activityLevel
                && bodyWeightGoal
                && state.user.prefers_metric) {
                sessionStorage.setItem('user', JSON.stringify({...state.user, macros: calculateMacros(state.user.sex,state.user.age, state.user.currentWeight, state.user.height, state.user.activityLevel, bodyWeightGoal)}));
                return calculateMacros(state.user.sex,state.user.age, state.user.currentWeight, state.user.height, state.user.activityLevel, bodyWeightGoal);
            }
            return null;
        } catch (err: any) {
            console.error(err)
            return null
        }
        
    }, [state.user.age, state.user.sex, state.user.currentWeight, state.user.activityLevel, bodyWeightGoal, state.user.height]);

    const micros : Micros | null = useMemo(()=> {
        try {
            if (state.user.age && state.user.sex) {
                if (!sessionStorage.getItem('user') || sessionStorage.getItem('user')?.includes('fiber')) {
                    sessionStorage.setItem('user',JSON.stringify({...state.user, micros : JSON.stringify(calculateMicros(state.user.sex,state.user.age))}));
                }
                return calculateMicros(state.user.sex,state.user.age)
            }
            return null
        } catch (err: any) {
            console.error(err)
            return null;
        }
    }, [state.user.age, state.user.sex]);

    const hrMax : number | null= useMemo(()=> {
        if (!state.user.age) return null
        if (state.user.age < 34) {
            if (!sessionStorage.getItem('hr_max')) {
                sessionStorage.setItem('hr_max', JSON.stringify(astrandEquation(state.user.age)));
            };
            dispatch({type: 'UPDATE HR_MAX', payload: astrandEquation(state.user.age)})
            return astrandEquation(state.user.age);
        } else {
            if (!sessionStorage.getItem('hr_max')) {
                sessionStorage.setItem('hr_max', JSON.stringify(gellishEquation(state.user.age)));
            };
            dispatch({type: 'UPDATE HR_MAX', payload: gellishEquation(state.user.age)})
            return gellishEquation(state.user.age);
        }
    }, [state.user.age]);

    if (state.user?.uid === null) {
        dispatch({type: 'UPDATE_UID', payload: null})
    };

    return(
        <UserContext.Provider 
            value={{
                state: { 
                    user: {
                        ...state.user, 
                        bodyWeightGoal, 
                        bmi, 
                        macros,
                        micros,
                        hrMax,
                        waistHipRatio,
                        waistHeightRatio,
                        bodyDensity,
                        bodyComp
                    }, 
                    error:state.error, 
                    isLoading:state.isLoading,
                    alert: state.alert
                }, 
                dispatch
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}