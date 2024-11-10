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
                    <th>{user.legPress?.category ? user.legPress.category : ''}</th>
                    <th>{user.benchPress?.category ? user.benchPress.category: ''}</th>
                    <th>{user.gripStrength?.category ? user.gripStrength?.category : ''}</th>
                </tr>
                <tr>
                    <th>Weight Moved(lbs): </th>
                    <th>{user.legPress?.legPress ? user.legPress.legPress : ''}</th>
                    <th>{user.benchPress?.benchPress ? Math.floor(user.benchPress.benchPress * 2.2): ''}</th>
                    <th>{user.gripStrength?.gripStrength ? Math.floor(user.gripStrength?.gripStrength * 2.2) : ''}</th>
                </tr>
                <tr>
                    <th>Weight Moved / Body Mass</th>
                    <th>{user.legPress?.legPress ? user.legPress.legPressRatio : ''}</th>
                    <th>{user.benchPress?.benchPress ? user.benchPress.benchPressRatio: ''}</th>
                    <th>{user.gripStrength?.gripStrength && user.currentWeight ? user.gripStrength.gripStrength * 2.2 / user.currentWeight : ''}</th>
                </tr>
            </thead>
        </table>
    )
}

export default memo(StrengthTable)