import {memo} from 'react';

type ReserveTableProps = {
    max : number,
    min : number,
    title : string
}

const ReserveTable = ({ max, min, title } : ReserveTableProps ) => {
    return <table>
        <thead><th colSpan={2}>{title}</th></thead>
        <tbody>
            <tr>
                <td>
                    100%
                </td>
                <td>
                    {Math.round(((max - min) * 1 + min ) * 100) / 100}
                </td>
            </tr>
            <tr>
                <td>
                    90%
                </td>
                <td>
                    {Math.round(((max - min) * .9 + min ) * 100) / 100}
                </td>
            </tr>
            <tr>
                <td>
                    80%
                </td>
                <td>
                    {Math.round(((max - min) * .8 + min ) * 100) / 100}                
                </td>
            </tr>
            <tr>
                <td>
                    70%
                </td>
                <td>
                {Math.round(((max - min) * .7 + min ) * 100) / 100}
                </td>
            </tr>
            <tr>
                <td>
                    60%
                </td>
                <td>
                {Math.round(((max - min) * .6 + min ) * 100) / 100}
                </td>
            </tr>
            <tr>
                <td>
                    50%
                </td>
                <td>
                {Math.round(((max - min) * .5 + min ) * 100) / 100}
                </td>
            </tr>
            <tr>
                <td>
                    40%
                </td>
                <td>
                {Math.round(((max - min) * .4 + min ) * 100) / 100}
                </td>
            </tr>
            <tr>
                <td>
                    30%
                </td>
                <td>
                {Math.round(((max - min) * .3 + min ) * 100) / 100}
                </td>
            </tr>
            <tr>
                <td>
                    20%
                </td>
                <td>
                {Math.round(((max - min) * .2 + min ) * 100) / 100}
                </td>
            </tr>
            <tr>
                <td>
                    10%
                </td>
                <td>
                    {Math.round(((max - min) * .1 + min ) * 100) / 100}
                </td>
            </tr>
        </tbody>
    </table>
}

export default memo(ReserveTable);