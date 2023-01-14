import { createContext, PropsWithChildren, Dispatch, useReducer } from "react";
import { UserContextInterface } from "../interfaces";

const initialUser: UserContextInterface = {
    activityLevel: '',
    age: null,
    benchPress: null,
    bodyWeightGoal: '',
    height: null,
    leftHand: null,
    legPress: null,
    name: '',
    pushups: null,
    rightHand: null,
    sex: '',
    weight: null,
    macros: null,
    micros: null
}

type State = {
    user : UserContextInterface;
    isLoading:boolean;
    error:string
}

type Action = {type: 'UPDATE', payload: UserContextInterface} 

const initialState = {
    user: initialUser,
    error: '',
    isLoading: false
}

export const userReducer = (state : State, action: Action) => {
    switch (action.type) {
        case 'UPDATE': 
            return {...state, user:action.payload }
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