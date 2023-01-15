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
const initialUser: User = {
    activityLevel: null,
    age: null,
    benchPress: null,
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
    error:string
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


const initialState = {
    user: initialUser,
    error: '',
    isLoading: false
}

export const userReducer = (state : State, action: Action) => {
    switch (action.type) {
        case 'UPDATE_CURRENT_WEIGHT':
            state.user.currentWeight = validateCurrentWeight(action.payload)
            return {...state}
        case 'UPDATE_WEIGHT_GOAL':
            state.user.bodyWeightGoal = action.payload
            return {...state}
        case 'UPDATE_MACROS':
            state.user.macros = action.payload
            return {...state}
        case 'UPDATE_MICROS':
            state.user.micros = action.payload
            return {...state}
        case "UPDATE_ACTIVITY_LEVEL":
            state.user.activityLevel = action.payload
            return {...state}
        case 'UPDATE_NAME':
            const name = validateName(action.payload)
            state.user.name = name
            return {...state}
        case 'UPDATE_SEX':
            const sex = validateSex(action.payload)
            state.user.sex = sex
            return {...state}
        case 'UPDATE_AGE':
            const age = validateAge(action.payload)
            state.user.age = age
            return {...state}
        case 'UPDATE_HEIGHT':
            const height= validateHeight(action.payload)
            state.user.height = height
            return {...state}
        case 'UPDATE_GOAL_WEIGHT':
            state.user.goalWeight = validateGoalWeight(action.payload)
            return {...state}
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
            return {...state}
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
    const [state, dispatch] = useReducer(userReducer, {
        user:initialUser,
        error:'',
        isLoading:false
    })
    console.log('user: ', state.user)
    return(
        <UserContext.Provider value={{state, dispatch}}>
            {props.children}
        </UserContext.Provider>
    )
}