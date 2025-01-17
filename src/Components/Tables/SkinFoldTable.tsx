import { memo } from 'react';
import { useUserContext } from '../../Hooks/useUserContext';

const SkinFoldTable = () => {
    const { state } = useUserContext();

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>
                        Skinfold Measurements in MM
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Abdominal: 
                    </td>
                    <td>
                        {state.user.abdominalSkin ? state.user.abdominalSkin : '-'}
                    </td>
                </tr>
                <tr>
                    <td>
                        Biceps: 
                    </td>
                    <td>
                        {state.user.bicepSkin ? state.user.bicepSkin : '-'}
                    </td>
                </tr>
                <tr>
                    <td>
                        Calf: 
                    </td>
                    <td>
                        {state.user.calfSkin ? state.user.calfSkin : '-'}
                    </td>
                </tr>
                <tr>
                    <td>
                        Chest: 
                    </td>
                    <td>
                        {state.user.chestSkin ? state.user.chestSkin : '-'}
                    </td>
                </tr>
                <tr>
                    <td>
                        Midaxillary: 
                    </td>
                    <td>
                        {state.user.midaxillarySkin ? state.user.midaxillarySkin : '-'}
                    </td>
                </tr>
                <tr>
                    <td>
                        Subscapularis: 
                    </td>
                    <td>
                        {state.user.subscapSkin ? state.user.subscapSkin : '-'}
                    </td>
                </tr>
                <tr>
                    <td>
                        Suprailiac: 
                    </td>
                    <td>
                        {state.user.supraIliacSkin ? state.user.supraIliacSkin : '-'}
                    </td>
                </tr>
                <tr>
                    <td>
                        Thigh: 
                    </td>
                    <td>
                        {state.user.thighSkin ? state.user.thighSkin : '-'}
                    </td>
                </tr>
                <tr>
                    <td>
                        Triceps: 
                    </td>
                    <td>
                        {state.user.tricepSkin ? state.user.tricepSkin : '-'}
                    </td>
                </tr>
            </tbody>
        </table>
    )
};

export default memo(SkinFoldTable);