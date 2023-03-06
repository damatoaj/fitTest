import { createContext, PropsWithChildren, Dispatch, useReducer, useMemo } from "react";
import { FitnessCategory, User, ActivityLevel, Macros, Micros, WeightGoal, BMI } from "../interfaces";
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
import { calculateMacros } from "../Functions/Nutrition/calculateMacros";
import { calculateMicros } from "../Functions/Nutrition/calculateMicros";
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
    fname: null,
    lname: null,
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
    | {type: 'UPDATE_HEIGHT', payload:number}
    | {type: 'UPDATE_GOAL_WEIGHT', payload: number}
    | {type: 'UPDATE_WEIGHT_GOAL', payload: WeightGoal}
    | {type: 'UPDATE_CURRENT_WEIGHT', payload: number}
    | {type: 'UPDATE_NAME', payload: {fname:string, lname:string}}
    | {type: 'UPDATE_ACTIVITY_LEVEL', payload: ActivityLevel}
    | {type: 'UPDATE_CURRENT_WEIGHT', payload: number}
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
            if (state.user.sex === 'MALE' && state.user.age && state.user.currentWeight) {
                state.user.legPress = menLegPress(state.user.age, payload, state.user.currentWeight)
                state.error = null
                return {...state}
            } else if (state.user.sex === 'FEMALE' && state.user.age && state.user.currentWeight) {
                state.user.legPress = womenLegPress(state.user.age, payload, state.user.currentWeight)
                state.error = null
                return {...state}
            } else {
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
        case 'UPDATE_CURRENT_WEIGHT':
            state.user.currentWeight = validateCurrentWeight(payload)
            state.error = null
            return {...state}
        case "UPDATE_ACTIVITY_LEVEL":
            state.user.activityLevel = payload
            state.error = null
            return {...state}
        case 'UPDATE_NAME':
            const fname = validateName(payload.fname)
            const lname = validateName(payload.lname)
            state.user.fname = fname
            state.user.lname= lname
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
    const bmi : BMI | null = useMemo(()=> {
        if (state.user.height && state.user.currentWeight) {
            return calculateBMI(state.user.currentWeight/2.2, state.user.height * 2.54)
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
        console.log('age: ',state.user.age )
        console.log('sex: ',state.user.sex )
        console.log('weight: ',state.user.currentWeight )
        console.log('height: ',state.user.height )
        console.log('ativity level: ',state.user.activityLevel )
        console.log('bodyweightgoal: ',bodyWeightGoal )

        if (state.user.age 
            && state.user.sex 
            && state.user.currentWeight
            && state.user.height
            && state.user.activityLevel
            && bodyWeightGoal) {
                console.log('should return ')
            return calculateMacros(state.user.sex,state.user.age, state.user.currentWeight/2.2, state.user.height * 2.54, state.user.activityLevel, bodyWeightGoal)
        }
        return null
    }, [state.user.age, state.user.sex, state.user.currentWeight, state.user.activityLevel, bodyWeightGoal, state.user.height])
    const micros : Micros | null = useMemo(()=> {
        if (state.user.age && state.user.sex) {
            return calculateMicros(state.user.sex,state.user.age)
        }
        return null
    }, [state.user.age, state.user.sex])
    console.log('user: ', state.user)
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