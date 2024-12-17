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
                        {user.prefers_metric ? 'Distance in CM' : 'Disctance in IN' }
                    </td>
                    <td>
                        Category
                    </td>
                </tr>
                <tr>
                    <td>
                        {user.prefers_metric ? 
                        user?.sar?.value || ''
                        :
                        user?.sar?.value ? user?.sar?.value / 2.54 : ''
                        }
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