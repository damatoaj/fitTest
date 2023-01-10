import { createContext, PropsWithChildren, useState } from "react";
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
    weight: null
}
export const UserContext = createContext<UserContextInterface | null>(null);

export const UserProvider = (props:PropsWithChildren<{}>) => {
    const [user, setUser] = useState(initialUser)
    console.log('user: ', user)
    return(
        <UserContext.Provider value={user}>
            {props.children}
        </UserContext.Provider>
    )
};