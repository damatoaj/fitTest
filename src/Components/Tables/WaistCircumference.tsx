import { memo } from 'react'
const WaistCircumference = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={3}>
                        Risk Criteria For Waist Circumference in Adults
                    </th>
                </tr>
                <tr>
                    <th colSpan={3}>
                        Waist Circumerence cm (in)
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Risk Category
                    </td>
                    <td>
                        Women
                    </td>
                    <td>
                        Men
                    </td>
                </tr>
                <tr>
                    <td>
                        Very Low
                    </td>
                    <td>
                        {'< 70 cm (< 27.5 in)'}
                    </td>
                    <td>
                        {'< 80 cm (< 31.5 in)'}
                    </td>
                </tr>
                <tr>
                    <td>
                        Low
                    </td>
                    <td>
                        {'70-89 cm (27.5-35.0 in)'}
                    </td>
                    <td>
                        {'80-99 cm (31.5-39.0 in)'}
                    </td>
                </tr>
                <tr>
                    <td>
                        High
                    </td>
                    <td>
                        {'90-110 cm (35.5-43.0 in)'}
                    </td>
                    <td>
                        {'100-120 cm (39.5-47.0 in)'}
                    </td>
                </tr>
                <tr>
                    <td>
                        Very High
                    </td>
                    <td>
                        {'>110 cm (>43.5 in)'}
                    </td>
                    <td>
                        {'>120 cm (>47.0 in)'}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default memo(WaistCircumference);