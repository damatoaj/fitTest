import { createContext, PropsWithChildren, Dispatch, useReducer } from "react";
import { FitnessCategory, User, ActivityLevel, Macros, Micros, WeightGoal } from "../interfaces";
import { menPushupCategories, womenPushupCategories } from "../Functions/Testing/muscularEndurance";
import { menBenchPress, womenBenchPress, menGripStrength, womenGripStrength, menLegPress, womenLegPress } from "../Functions/Testing/muscularFitness";
import { 
    validateName, 
    validateAge, 
    validateHeight, 
    validateSex, 
    validateCurrentWeight, 
    validateGoalWeight 
} from "../Functions/Testing/demographicsValidation";
import { calculateBMI } from "../Functions/Testing/bodyComposition";
const initialUser: User = {
    activityLevel: null,
    age: null,
    benchPress: null,
    bmi: null,
    bodyWeightGoal: null,
    currentWeight: null,
    goalWeight: null,
    gripStrength: null,
    height: null,
    legPress: null,
    name: '',
    pushups: null,
    sex: null,
    macros: null,
    micros: null
}

type State = {
    user : User;
    isLoading:boolean;
    error:string | null
}

type Action = {type: 'UPDATE_PUSHUPS', payload: number}
    | {type: 'ERROR', payload:string}
    | {type: 'UPDATE_SEX', payload: 'MALE' | 'FEMALE'}
    | {type:'UPDATE_AGE', payload: number}
    | {type:'UPDATE_HEIGHT', payload:number}
    | {type: 'UPDATE_GOAL_WEIGHT', payload: number}
    | {type: 'UPDATE_CURRENT_WEIGHT', payload: number}
    | {type: 'UPDATE_NAME', payload: string}
    | {type: 'UPDATE_ACTIVITY_LEVEL', payload: ActivityLevel}
    | {type: 'UPDATE_MACROS', payload: Macros}
    | {type: 'UPDATE_MICROS', payload: Micros}
    | {type: 'UPDATE_WEIGHT_GOAL', payload: WeightGoal}
    | {type: 'UPDATE_CURRENT_WEIGHT', payload: number}
    | {type: 'UPDATE_BMI', payload: {h:number, w:number}}
    | {type: 'UPDATE_BENCH_PRESS', payload: number}
    | {type: 'UPDATE_GRIP_STRENGTH', payload: number}
    | {type: 'UPDATE_LEG_PRESS', payload:number}

const initialState = {
    user: initialUser,
    error: null,
    isLoading: false
}

export const userReducer = (state : State, action: Action) => {
    const { type, payload } = action 
    switch (type) {
        case 'UPDATE_LEG_PRESS':
            console.log('leg press')
            if (state.user.sex === 'MALE' && state.user.age && state.user.currentWeight) {
                console.log('first option')
                state.user.legPress = menLegPress(state.user.age, payload, state.user.currentWeight)
                state.error = null
                return {...state}
            } else if (state.user.sex === 'FEMALE' && state.user.age && state.user.currentWeight) {
                console.log('second option')
                state.user.legPress = womenLegPress(state.user.age, payload, state.user.currentWeight)
                state.error = null
                return {...state}
            } else {
                console.log('third option')
                return {...state}
            }
        case 'UPDATE_GRIP_STRENGTH':
            if (state.user.sex === 'MALE' && state.user.age) {
                state.user.gripStrength = menGripStrength(state.user.age, payload)
                state.error = null
            } else if (state.user.sex === 'FEMALE' && state.user.age) {
                state.user.gripStrength = womenGripStrength(state.user.age, payload)
                state.error = null
            } 
            return {...state}
        case 'UPDATE_BMI':
            const { h, w} = payload
            state.user.bmi = calculateBMI(w, h)
            state.error = null
            return {...state}
        case 'UPDATE_CURRENT_WEIGHT':
            state.user.currentWeight = validateCurrentWeight(payload)
            state.error = null
            return {...state}
        case 'UPDATE_WEIGHT_GOAL':
            state.user.bodyWeightGoal = payload
            state.error = null
            return {...state}
        case 'UPDATE_MACROS':
            state.user.macros = payload
            state.error = null
            return {...state}
        case 'UPDATE_MICROS':
            state.user.micros = payload
            state.error = null
            return {...state}
        case "UPDATE_ACTIVITY_LEVEL":
            state.user.activityLevel = payload
            state.error = null
            return {...state}
        case 'UPDATE_NAME':
            const name = validateName(payload)
            state.user.name = name
            state.error = null
            return {...state}
        case 'UPDATE_SEX':
            state.user.sex = validateSex(payload)
            state.error = null
            return {...state}
        case 'UPDATE_AGE':
            state.user.age = validateAge(payload)
            state.error = null
            return {...state}
        case 'UPDATE_HEIGHT':
            state.user.height = validateHeight(payload)
            state.error = null
            return {...state}
        case 'UPDATE_GOAL_WEIGHT':
            state.user.goalWeight = validateGoalWeight(payload)
            state.error = null
            return {...state}
        case 'UPDATE_PUSHUPS':
            let category : FitnessCategory = 'fair'

            if (state.user.sex === 'FEMALE' && state.user.age !== null) {
                category = womenPushupCategories(state.user.age, payload)
            } else if (state.user.sex === 'MALE' && state.user.age !== null){
                category = menPushupCategories(state.user.age, payload);
            } else {
                return {...state}
            }
            state.user.pushups = {
                pushups: payload, 
                category
            }
            state.error = null
            return {...state}
        case 'UPDATE_BENCH_PRESS':
            if (!state.user.sex || !state.user.age || !state.user.currentWeight) return {...state}
            if (state.user.sex === 'MALE') {
                state.user.benchPress = menBenchPress(payload, state.user.currentWeight, state.user.age)
            } else {
                state.user.benchPress = womenBenchPress(payload, state.user.currentWeight, state.user.age)
            }
            state.error = null
            return {...state}
        case 'ERROR':
            state.error = payload
            return {...state}
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
    console.log('user: ', state.user)
    return(
        <UserContext.Provider value={{state, dispatch}}>
            {props.children}
        </UserContext.Provider>
    )
}