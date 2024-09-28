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
                    <td>{user.bmi?.classification ? user.bmi.classification.charAt(0).toUpperCase() + user.bmi.classification.substring(1) : 'No Data'}</td>
                </tr>
                <tr>
                    <th>Body Mass Index</th>
                    <td>{user.bmi?.bmi ? user.bmi.bmi : 'No Data'}</td>
                </tr>
                <tr>
                    <th>Current Weight</th>
                    <td>{user.currentWeight ? user.currentWeight : 'No Data'}</td>
                </tr>
                <tr>
                    <th>Goal Weight</th>
                    <td>{user.goalWeight ? user.goalWeight : 'No Data'}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default memo(BMITable)