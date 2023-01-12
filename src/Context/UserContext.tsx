import { createContext, PropsWithChildren, useState, Dispatch, SetStateAction } from "react";
import { UserContextInterface } from "../interfaces";

const initialUser = {
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

type UserContextType = {
    user: UserContextInterface | null,
    update: Dispatch<SetStateAction<UserContextInterface|null>>
}

export const UserContext = createContext<UserContextType>({user:null, update:() => {}});

export const UserProvider = (props:PropsWithChildren<{}>) => {
    const [user, update] = useState< UserContextInterface | null>(initialUser)
    console.log('user: ', user)
    return(
        <UserContext.Provider value={{user, update}}>
            {props.children}
        </UserContext.Provider>
    )
};