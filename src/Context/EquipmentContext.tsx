import { createContext, PropsWithChildren, Dispatch, useReducer } from "react";
import { Equipment } from "../interfaces";


const initialEquipment: Equipment = {
    '12bench': null,
    '16bench':null,
    'benchPressStation':null,
    'bloodPressureCuff':null,
    'bodyFatPercentage':null,
    'handGripDynamometer':null,
    'legPressMachine':null,
    'measuringTape':null,
    'metronome':null,
    'sitReachBox':null,
    'skinFoldCalipers':null,
    'stopwatch':null,
    'treadmill':null,
    'treadmillDegrees': null
}

type State = {
    equipment : Equipment;
    isLoading:boolean;
    error: string | null
}

type Action = {type: 'ERROR', payload:string}
    | {type: 'UPDATE', payload: Equipment}
    | {type: 'LOADING', payload: boolean}


const initialState = {
    equipment: initialEquipment,
    error: null,
    isLoading: false
}

export const equipmentReducer = (state : State, action: Action) => {
    const { type, payload } = action 
    switch (type) {
        case 'UPDATE':
            return {error: null, isLoading:false, equipment:payload}
        case 'LOADING':
            return {...state, isLoading: true, }
        case 'ERROR':
            const error = payload
            return {...state, error, isLoading:false}
        default:
            return state
    }
}

type EquipmentContextType = {
    state: State;
    dispatch: Dispatch<any>;
}

export const EquipmentContext = createContext<EquipmentContextType>({state:initialState, dispatch:() => null});

export const EquipmentProvider = (props:PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(equipmentReducer, initialState)
    
    console.log('equipment: ', 
        state.equipment
    )
    return(
        <EquipmentContext.Provider 
            value={{
                state, 
                dispatch
            }}
        >
            {props.children}
        </EquipmentContext.Provider>
    )
}