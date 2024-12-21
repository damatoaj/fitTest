import { useUserContext } from "../../Hooks/useUserContext"
import { memo } from 'react'
const BMITable = () => {
    const { state : {user} } = useUserContext()
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
                    <td>{user.height ? user.height : '-'}</td>
                </tr>
                <tr>
                    <th>{user.prefers_metric ? 'Current weight in KG' : 'Current weight in LBs'}</th>
                    <td>{user.currentWeight ? user.currentWeight : '-'}</td>
                </tr>
                <tr>
                    <th>{user.prefers_metric ? 'Goal weight in KG' : 'Goal weight in LBs'}</th>
                    <td>{user.goalWeight ? user.goalWeight : '-'}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default memo(BMITable)