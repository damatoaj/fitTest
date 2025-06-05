import {memo} from 'react';

type PercentageTableProps = {
    max : number,
    title : string
}

const PercentageTable = ({ max, title } : PercentageTableProps ) => {
    return <table>
        <thead><th colSpan={2}>{title}</th></thead>
        <tbody>
            <tr>
                <td>
                    100%
                </td>
                <td>
                    {max}
                </td>
            </tr>
            <tr>
                <td>
                    90%
                </td>
                <td>
                    {Math.round(max * .9 * 100) / 100}
                </td>
            </tr>
            <tr>
                <td>
                    80%
                </td>
                <td>
                    {Math.round(max * .8 * 100)/100}
                </td>
            </tr>
            <tr>
                <td>
                    70%
                </td>
                <td>
                    {Math.round(max * .7 * 100) / 100 }
                </td>
            </tr>
            <tr>
                <td>
                    60%
                </td>
                <td>
                    {Math.round(max * .6 * 100) / 100}
                </td>
            </tr>
            <tr>
                <td>
                    50%
                </td>
                <td>
                    {Math.round(max * .5 * 100) / 100 }
                </td>
            </tr>
            <tr>
                <td>
                    40%
                </td>
                <td>
                    {Math.round(max * .4 * 100)/100}
                </td>
            </tr>
            <tr>
                <td>
                    30%
                </td>
                <td>
                    {Math.round(max * .3 * 100)/100}
                </td>
            </tr>
            <tr>
                <td>
                    20%
                </td>
                <td>
                    {Math.round(max * .2 * 100)/100}
                </td>
            </tr>
            <tr>
                <td>
                    10%
                </td>
                <td>
                    {Math.round(max * .1 * 100)/100}
                </td>
            </tr>
        </tbody>
    </table>
}

export default memo(PercentageTable);