import { memo } from 'react';
import { useUserContext } from '../../Hooks/useUserContext';
const DemographicTable = () => {
    const { state } = useUserContext();

    return <>
        <h2>Demographic Data</h2>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <strong>Heart Rate Max</strong>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {state.user.hrMax ? state.user.hrMax : '-'}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th colSpan={2}>
                                <strong>Blood Pressure</strong>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Systolic / Diastolic Ratio</td>
                            <td>
                                {state?.user?.bloodPressure?.sbp ? state.user.bloodPressure.sbp : '-' } /
                                {state?.user?.bloodPressure?.dbp ? state.user.bloodPressure.dbp : '-'}
                            </td>
                        </tr>
                        <tr>
                            <td>Classification: </td>
                            <td>
                                {state.user.bloodPressure?.classification ? state.user.bloodPressure.classification : '-'}
                            </td>
                        </tr>
                    </tbody>
                </table>
    </>
};

export default memo(DemographicTable);