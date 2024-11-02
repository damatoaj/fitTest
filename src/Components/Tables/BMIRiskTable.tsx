import { useUserContext } from "../../Hooks/useUserContext"
import { memo } from 'react'
const BMIRiskTable = () => {
    const { state : {user} } = useUserContext();
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>BMI Categories</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Category: </td>
                    <td>BMI (kg * m<sup>-2</sup>)</td>
                </tr>
                <tr data-currentcategory={user.bmi?.bmi && user.bmi?.bmi < 18.5 ? 'yes' : 'no'}>
                    <td>Underweight</td>
                    <td>{'< 18.5'}</td>
                </tr>
                <tr data-currentcategory={user.bmi?.bmi && (user.bmi?.bmi >= 18.5 && user.bmi?.bmi <= 25)? 'yes' : 'no'}>
                    <td>Normal</td>
                    <td>18.5-24.9</td>

                </tr>
                <tr data-currentcategory={user.bmi?.bmi && (user.bmi?.bmi >= 25 && user.bmi?.bmi <= 29.9)? 'yes' : 'no'}>
                    <td>Overweight</td>
                    <td>25.0-29.9</td>
                </tr>
                <tr>
                    <td>Obsesity, class</td>
                </tr>
                <tr data-currentcategory={user.bmi?.bmi && (user.bmi?.bmi >= 30 && user.bmi?.bmi <= 34.9)? 'yes' : 'no'}>
                    <td>I</td>
                    <td>30.0-34.9</td>
                </tr>
                <tr data-currentcategory={user.bmi?.bmi && (user.bmi?.bmi >= 35 && user.bmi?.bmi <= 39.9)? 'yes' : 'no'}>
                    <td>II</td>
                    <td>35.0-39.9</td>
                </tr>
                <tr data-currentcategory={user.bmi?.bmi && user.bmi?.bmi >= 40 ? 'yes' : 'no'}>
                    <td>III</td>
                    <td>{'>= 40'}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default memo(BMIRiskTable);