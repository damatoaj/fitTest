import { useUserContext } from "../../Hooks/useUserContext"
import { memo } from 'react'
const Vo2MaxTable = () => {
    const { state : {user} } = useUserContext()
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>VO2 Max Scores</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Category: </th>
                    <th>{user.vo2Max?.category ? user.vo2Max.category : '-'}</th>
                </tr>
                <tr>
                    <th>Value</th>
                    <th>{user.vo2Max?.vo2Max ? user.vo2Max.vo2Max + 'ml/kg/minute': '-'}</th>
                </tr>
                <tr>
                    <th> Resting O2 Consumption </th>
                    <th>{sessionStorage.getItem('restingV02') ? sessionStorage.getItem('restingV02') + ' ml/minute': '-'}</th>
                </tr>
                <tr>
                    <th> Maximal O2 Consumption </th>
                    <th>{sessionStorage.getItem('rawV02')? sessionStorage.getItem('rawV02') + ' ml/minute': '-'}</th>
                </tr>
            </tbody>
        </table>
    )
}

export default memo(Vo2MaxTable)