import { createContext, PropsWithChildren, Dispatch, useReducer } from "react";
import { FitnessCategory, User, ActivityLevel, Macros, Micros, WeightGoal } from "../interfaces";
import { menPushupCategories, womenPushupCategories } from "../Functions/Testing/muscularEndurance";
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
    height: null,
    leftHand: null,
    legPress: null,
    name: '',
    pushups: null,
    rightHand: null,
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


const initialState = {
    user: initialUser,
    error: null,
    isLoading: false
}

export const userReducer = (state : State, action: Action) => {
    switch (action.type) {
        case 'UPDATE_BMI':
            const { h, w} = action.payload
            state.user.bmi = calculateBMI(w, h)
            return {...state, error:null}
        case 'UPDATE_CURRENT_WEIGHT':
            state.user.currentWeight = validateCurrentWeight(action.payload)
            return {...state, error: null}
        case 'UPDATE_WEIGHT_GOAL':
            state.user.bodyWeightGoal = action.payload
            return {...state, error : null}
        case 'UPDATE_MACROS':
            state.user.macros = action.payload
            return {...state, error: null}
        case 'UPDATE_MICROS':
            state.user.micros = action.payload
            return {...state, error: null}
        case "UPDATE_ACTIVITY_LEVEL":
            state.user.activityLevel = action.payload
            return {...state, error: null}
        case 'UPDATE_NAME':
            const name = validateName(action.payload)
            state.user.name = name
            return {...state, error: null}
        case 'UPDATE_SEX':
            const sex = validateSex(action.payload)
            state.user.sex = sex
            return {...state, error: null}
        case 'UPDATE_AGE':
            const age = validateAge(action.payload)
            state.user.age = age
            return {...state, error: null}
        case 'UPDATE_HEIGHT':
            const height= validateHeight(action.payload)
            state.user.height = height
            return {...state, error: null}
        case 'UPDATE_GOAL_WEIGHT':
            state.user.goalWeight = validateGoalWeight(action.payload)
            return {...state, error: null}
        case 'UPDATE_PUSHUPS':
            let category : FitnessCategory = 'fair'

            if (state.user.sex === 'FEMALE' && state.user.age !== null) {
                category = womenPushupCategories(state.user.age, action.payload)
            } else if (state.user.sex === 'MALE' && state.user.age !== null){
                category = menPushupCategories(state.user.age, action.payload);
            } else {
                return {...state}
            }
            state.user.pushups = {
                pushups: action.payload, 
                category
            }
            return {...state, error: null}
        case 'ERROR':
            return {...state, error: action.payload}
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