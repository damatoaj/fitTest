import { useUserContext } from "../../Hooks/useUserContext"
import { memo } from 'react'
const StrengthTable = () => {
    const { state : {user} } = useUserContext()
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Leg Press Ratio</th>
                    <th>Bench Press Ratio</th>
                    <th>Grip Strength</th>
                </tr>
                <tr>
                    <th>Category: </th>
                    <th>{user.legPress?.category ? user.legPress.category : 'No Data'}</th>
                    <th>{user.benchPress?.category ? user.benchPress.category: 'No Data'}</th>
                    <th>{user.gripStrength?.category ? user.gripStrength?.category : 'No Data'}</th>
                </tr>
                <tr>
                    <th>Weight (lbs): </th>
                    <th>{user.legPress?.legPress ? user.legPress.legPress : 'No Data'}</th>
                    <th>{user.benchPress?.benchPress ? user.benchPress.benchPress: 'No Data'}</th>
                    <th>{user.gripStrength?.gripStrength ? user.gripStrength?.gripStrength : 'No Data'}</th>
                </tr>
            </thead>
        </table>
    )
}

export default memo(StrengthTable)