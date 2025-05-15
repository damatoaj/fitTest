import { useUserContext } from "../../Hooks/useUserContext"
import { memo } from 'react'
const BMITable = () => {
    const { state : {user} } = useUserContext();
    let h : string = '-';
    let currentWeight : string =  '-';
    let goalWeight : string =  '-';
    

    if (user.prefers_metric ===true && user.goalWeight) {
        goalWeight = `${user.goalWeight}`
    } else if (user.goalWeight) {
        goalWeight = `${Math.floor(user.goalWeight * 2.2 * 100) / 100}`
    };

    if (user.prefers_metric ===true && user.currentWeight) {
        currentWeight = `${user.currentWeight}`
    } else if (user.currentWeight) {
        currentWeight = `${Math.floor(user.currentWeight * 2.2 * 100) / 100}`
    };
    
    if (user.prefers_metric === true && user.height) {
        h = `${user.height}`
    } else if (user.height) {
        h = `${Math.floor(user.height *  0.3937007874 * 100) / 100}`
    };

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>BMI & Weight</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Classification:</th>
                    <td>{user.bmi?.classification ? user.bmi.classification.charAt(0).toUpperCase() + user.bmi.classification.substring(1) : '-'}</td>
                </tr>
                <tr>
                    <th>Body Mass Index</th>
                    <td>{user.bmi?.bmi ? user.bmi.bmi : '-'}</td>
                </tr>
                <tr>
                    <th>{user.prefers_metric ? 'Height in CM' : 'Height in In'}</th>
                    <td>{h}</td>
                </tr>
                <tr>
                    <th>{user.prefers_metric ? 'Current weight in KG' : 'Current weight in LBs'}</th>
                    <td>{currentWeight}</td>
                </tr>
                <tr>
                    <th>{user.prefers_metric ? 'Goal weight in KG' : 'Goal weight in LBs'}</th>
                    <td>{goalWeight}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default memo(BMITable)