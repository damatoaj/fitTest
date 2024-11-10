import { useUserContext } from "../../Hooks/useUserContext"
import { memo } from 'react'
const PushupsTable = () => {
    const { state : {user} } = useUserContext()
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>Pushup Test</th>
                </tr>
                <tr>
                    <th>Category: </th>
                    <th>{user.pushups?.category ? user.pushups.category : ''}</th>
                </tr>
                <tr>
                    <th>Repetitions: </th>
                    <th>{user.pushups?.pushups ? user.pushups.pushups : ''}</th>
                </tr>
            </thead>
        </table>
    )
}

export default memo(PushupsTable)