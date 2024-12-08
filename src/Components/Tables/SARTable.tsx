import {memo} from 'react';
import { useUserContext } from '../../Hooks/useUserContext';
const SARTable = () => {
    const { state : {user} } = useUserContext()

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>Sit & Reach Test</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Distance in CM
                    </td>
                    <td>
                        Category
                    </td>
                </tr>
                <tr>
                    <td>
                        {user?.sar?.value || ''}
                    </td>
                    <td>
                        {user?.sar?.category || ''}
                    </td>
                </tr>
            </tbody>
        </table>
    )
};

export default memo(SARTable);