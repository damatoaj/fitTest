import { createContext, PropsWithChildren, Dispatch, useReducer, useMemo } from "react";
import { User, ActivityLevel, Macros, Micros, WeightGoal, BMI } from "../interfaces";
import { menPushupCategories, womenPushupCategories } from "../Functions/Testing/muscularEndurance";
import { womenCardioFitnessClassification, menCardioFitnessClassification } from "../Functions/Testing/cardioFitness";
import { menBenchPress, womenBenchPress, menGripStrength, womenGripStrength, menLegPress, womenLegPress } from "../Functions/Testing/muscularFitness";
import { astrandEquation, gellishEquation, } from "../Functions/Intensity/heartRateFunctions";
import { 
    validateName, 
    validateAge, 
    validateHeight, 
    validateSex, 
    validateCurrentWeight, 
    validateGoalWeight 
} from "../Functions/Testing/demographicsValidation";
import { poundsToKg,inchesToCm, cmToM } from "../Functions/Conversions";
import { calculateBMI } from "../Functions/Testing/bodyComposition";
import { calculateMacros } from "../Functions/Nutrition/calculateMacros";
import { calculateMicros } from "../Functions/Nutrition/calculateMicros";

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
    vo2Max: null
};

type State = {
    user : User;
    isLoading:boolean;
    error:string | null
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

const initialState = {
    user: initialUser,
    error: null,
    isLoading: false
}

export const userReducer = (state : State, action: Action) => {
    const { type, payload } = action 
    console.info(`Type: ${type}`)
    console.table(payload)
    switch (type) {
        case 'LOADING':
            return {...state, isLoading: true}
        case 'UPDATE_VO2MAX':
            console.log(payload)
            if (state.user.sex === 'MALE' && state.user.age) {
                const vo2Max = menCardioFitnessClassification(state.user.age, payload)
                sessionStorage.setItem('user', JSON.stringify( {...state.user, vo2Max}));
                return { error: null, isLoading: false, user: {...state.user, vo2Max}}
            } else if (state.user.sex === 'FEMALE' && state.user.age) {
                const vo2Max = womenCardioFitnessClassification(state.user.age, payload)
                sessionStorage.setItem('user', JSON.stringify( {...state.user, vo2Max}));
                return { error: null, isLoading: false, user: {...state.user, vo2Max}}
            } else {
                return {...state, isLoading:false}
            }
        case 'UPDATE_LEG_PRESS':
            if (state.user.sex === 'MALE' && state.user.age && state.user.currentWeight) {
                const legPress = menLegPress(state.user.age, payload, state.user.currentWeight)
                sessionStorage.setItem('user', JSON.stringify( {...state.user, legPress}));
                return { error: null, isLoading: false, user: {...state.user, legPress}}
            } else if (state.user.sex === 'FEMALE' && state.user.age && state.user.currentWeight) {
                const legPress = womenLegPress(state.user.age, payload, state.user.currentWeight)
                sessionStorage.setItem('user', JSON.stringify( {...state.user, legPress}));
                return { error: null, isLoading: false, user: {...state.user, legPress}}
            } else {
                return {...state, isLoading:false}
            }
        case 'UPDATE_GRIP_STRENGTH':
            if (state.user.sex === 'MALE' && state.user.age) {
                const gripStrength = menGripStrength(state.user.age, poundsToKg(payload))
                sessionStorage.setItem('user', JSON.stringify( {...state.user, gripStrength}));
                return {error:null, isLoading:false, user: {...state.user,gripStrength}}
            } else if (state.user.sex === 'FEMALE' && state.user.age) {
                const gripStrength = womenGripStrength(state.user.age,poundsToKg(payload))
                sessionStorage.setItem('user', JSON.stringify( {...state.user, gripStrength}));
                return {error:null, isLoading:false, user: {...state.user, gripStrength}}
            } else {
                return {...state, isLoading:false}
            }
        case 'UPDATE_CURRENT_WEIGHT':
            const currentWeight = validateCurrentWeight(payload)
            sessionStorage.setItem('user', JSON.stringify( {...state.user, currentWeight}));
            return {error:null, isLoading:false, user: {...state.user, currentWeight}}
        case "UPDATE_ACTIVITY_LEVEL":
            const activityLevel = payload;
            sessionStorage.setItem('user', JSON.stringify( {...state.user, activityLevel}));
            return {error:null, isLoading:false, user:{...state.user, activityLevel}};
        case 'UPDATE_NAME':
            const fname = validateName(payload.fname)
            const lname = validateName(payload.lname)
            sessionStorage.setItem('user', JSON.stringify( {...state.user, fname, lname}));
            return {error:null, isLoading:false, user: {...state.user, fname, lname}}
        case 'UPDATE_SEX':
            const sex = validateSex(payload)
            sessionStorage.setItem('user', JSON.stringify( {...state.user, sex}));
            return {error:null, isLoading:false, user: {...state.user, sex}}
        case 'UPDATE_AGE':
            const age = validateAge(payload)
            sessionStorage.setItem('user', JSON.stringify( {...state.user, age}));
            return {error:null, isLoading: false, user: {...state.user, age}}
        case 'UPDATE_HEIGHT':
            const height = validateHeight(payload)
            sessionStorage.setItem('user', JSON.stringify( {...state.user, height}));
            return {error: null, isLoading: false, user: {...state.user, height}}
        case 'UPDATE_GOAL_WEIGHT':
            const goalWeight = validateGoalWeight(payload)
            sessionStorage.setItem('user', JSON.stringify( {...state.user, goalWeight}));
            return {error:null, isLoading:false, user:{...state.user, goalWeight}}
        case 'UPDATE_PUSHUPS':
            if (state.user.sex === 'FEMALE' && state.user.age) {
                const pushups = Object.freeze({pushups:payload, category: womenPushupCategories(state.user.age, payload)})
                sessionStorage.setItem('user', JSON.stringify( {...state.user, pushups}));
                return {error:null, isLoading: false, user:{...state.user, pushups }}
            } else if (state.user.sex === 'MALE' && state.user.age){
                const pushups = Object.freeze({pushups:payload, category: menPushupCategories(state.user.age, payload)})
                sessionStorage.setItem('user', JSON.stringify( {...state.user, pushups}));
                return {error:null, isLoading: false, user:{...state.user, pushups }}
            } else {
                return {...state, isLoading:false}
            }
        case 'UPDATE_BENCH_PRESS':
            if (!state.user.sex || !state.user.age || !state.user.currentWeight) return {...state, isLoading:false}
            if (state.user.sex === 'MALE') {
                const benchPress = menBenchPress(poundsToKg(payload), poundsToKg(state.user.currentWeight), state.user.age)
                sessionStorage.setItem('user', JSON.stringify( {...state.user, benchPress}));

                return {error:null, isLoading:false, user:{...state.user, benchPress}}
            } else {
                const benchPress = womenBenchPress(poundsToKg(payload), poundsToKg(state.user.currentWeight), state.user.age)
                sessionStorage.setItem('user', JSON.stringify( {...state.user, benchPress}));

                return {error:null, isLoading:false, user:{...state.user, benchPress}}
            }
        case 'UPDATE_UID':
            return {error: null, isLoading:false, user:{...state.user, uid: Math.floor(Math.random() * Date.now()) }}
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
    const [state, dispatch] = useReducer(userReducer, initialState)
    

    
    const bmi : BMI | null = useMemo(()=> {
        if (state.user.height && state.user.currentWeight) {
            return calculateBMI(poundsToKg(state.user.currentWeight), cmToM(inchesToCm(state.user.height)))
        }
        return null
    }, [state.user.height, state.user.currentWeight])
    const bodyWeightGoal : WeightGoal | null = useMemo(()=> {
        if (state.user.currentWeight && state.user.goalWeight) {
            if (state.user.currentWeight > state.user.goalWeight) {
                return 'lose'
            } else if (state.user.currentWeight < state.user.goalWeight) {
                return 'gain'
            } else {return'maintain'}
        }
        return null
    }, [state.user.currentWeight, state.user.goalWeight])
    const macros : Macros | null = useMemo(()=> {
        if (state.user.age 
            && state.user.sex 
            && state.user.currentWeight
            && state.user.height
            && state.user.activityLevel
            && bodyWeightGoal) {
            return calculateMacros(state.user.sex,state.user.age, poundsToKg(state.user.currentWeight), inchesToCm(state.user.height), state.user.activityLevel, bodyWeightGoal)
        }
        return null
    }, [state.user.age, state.user.sex, state.user.currentWeight, state.user.activityLevel, bodyWeightGoal, state.user.height])
    const micros : Micros | null = useMemo(()=> {
        if (state.user.age && state.user.sex) {
            return calculateMicros(state.user.sex,state.user.age)
        }
        return null
    }, [state.user.age, state.user.sex])

    const hrMax : number | null= useMemo(()=> {
        if (!state.user.age) return null
        if (state.user.age < 34) {
            return astrandEquation(state.user.age)
        } else {
            return gellishEquation(state.user.age)
        }
    }, [state.user.age])

    if (state.user?.uid === null) {
        dispatch({type: 'UPDATE_UID', payload: null})
    };
    
    console.log('user: ', {
        ...state.user, 
        bodyWeightGoal, 
        bmi, 
        macros,
        micros,
        hrMax
    })

    return(
        <UserContext.Provider 
            value={{
                state: { 
                    user: {
                        ...state.user, 
                        bodyWeightGoal, 
                        bmi, 
                        macros,
                        micros
                    }, 
                    error:state.error, 
                    isLoading:state.isLoading
                }, 
                dispatch
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}