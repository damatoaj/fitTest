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
                    <th>{user.legPress?.category ? user.legPress.category : '-'}</th>
                    <th>{user.benchPress?.category ? user.benchPress.category: '-'}</th>
                    <th>{user.gripStrength?.category ? user.gripStrength?.category : '-'}</th>
                </tr>
                <tr>
                    {user.prefers_metric ? <th>Weight Moved (KG): </th> : <th>Weight Moved (LBS): </th>}
                    {user.prefers_metric ? <th>{user.legPress?.legPress ? user.legPress.legPress : '-'}</th> : <th>{user.legPress?.legPress ? Math.round(user.legPress.legPress * 2.2 * 100) / 100 : '-'}</th>}
                    {user.prefers_metric ? <th>{user.benchPress?.benchPress ? user.benchPress.benchPress : '-'}</th> : <th>{user.benchPress?.benchPress ? Math.round(user.benchPress.benchPress * 2.2 * 100) / 100 : '-'}</th>}
                    {user.prefers_metric ? <th>{user.gripStrength?.gripStrength ? user.gripStrength?.gripStrength : '-'}</th> : <th>{user.gripStrength?.gripStrength ? Math.round(user.gripStrength?.gripStrength * 2.2 * 100) / 100 : '-'}</th>}
                    
                </tr>
                <tr>
                    <th>Weight Moved / Body Mass</th>
                    <th>{user.legPress?.legPress ? user.legPress.legPressRatio : '-'}</th>
                    <th>{user.benchPress?.benchPress ? user.benchPress.benchPressRatio : '-'}</th>
                    <th>{user.gripStrength?.gripStrength && user.currentWeight ? Math.floor(user.gripStrength.gripStrength  / user.currentWeight * 100) / 100: '-'}</th>
                </tr>
            </thead>
        </table>
    )
}

export default memo(StrengthTable)