import { memo } from 'react';
import { useUserContext } from '../../Hooks/useUserContext';
const WaistTable = () => {
    const { state } = useUserContext();
    return <table>
                <thead>
                    <tr>
                        <th colSpan={2}>
                            <strong>Waist Circumference Risk Category</strong>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {state.user.prefers_metric ? 'Centimeters' : 'Inches' }
                        </td>
                        <td>
                            {'Category'}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            {state.user.waistCircumference?.wc ? state.user.waistCircumference.wc : '-'}
                        </td>
                        <td>
                            {state.user.waistCircumference?.category ? state.user.waistCircumference.category : '-'}
                        </td>
                    </tr>
                </tbody>
    </table>
}

export default memo(WaistTable);