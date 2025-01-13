import { memo } from 'react';
import { useUserContext } from '../../Hooks/useUserContext';
const WaistTable = () => {
    const { state } = useUserContext();
    return <table>
                <thead>
                    <tr>
                        <th colSpan={2}>
                            <strong>
                                Circumference Measurements in 
                                {state.user.prefers_metric ? ' Centimeters' : ' Inches' }
                            </strong>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Abdomen:
                        </td>
                        <td>
                            {state.user.abdomenCircumference ? state.user.abdomenCircumference : '-'}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Arm:
                        </td>
                        <td>
                            {state.user.armCircumference ? state.user.armCircumference : '-'}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Buttocks:
                        </td>
                        <td>
                            {state.user.buttocksCircumference ? state.user.buttocksCircumference : '-'}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Calf:
                        </td>
                        <td>
                            {state.user.calfCircumference ? state.user.calfCircumference : '-'}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Forearm:
                        </td>
                        <td>
                            {state.user.forearmCircumference ? state.user.forearmCircumference : '-'}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Hips:
                        </td>
                        <td>
                            {state.user.hipsCircumference ? state.user.hipsCircumference : '-'}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Mid Thigh:
                        </td>
                        <td>
                            {state.user.midthighCircumference ? state.user.midthighCircumference : '-'}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Waist:
                        </td>
                        <td>
                            {state.user.waistCircumference?.wc ? state.user.waistCircumference.wc : '-'}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Waist Circumference Risk Category:
                        </td>
                        <td>
                            {state.user.waistCircumference?.category ? state.user.waistCircumference.category : '-'}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Waist / Hip Ratio:
                        </td>
                        <td>
                            {state.user.waistHipRatio ? state.user.waistHipRatio : '-'}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Waist / Height Ratio:
                        </td>
                        <td>
                            {state.user.waistHeightRatio ? state.user.waistHeightRatio : '-'}
                        </td>
                    </tr>
                </tbody>
    </table>
}

export default memo(WaistTable);