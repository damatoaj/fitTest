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
                    <th>Value: </th>
                    <th>{user.vo2Max?.vo2Max ? user.vo2Max.vo2Max : '-'}</th>
                </tr>
            </tbody>
        </table>
    )
}

export default memo(Vo2MaxTable)