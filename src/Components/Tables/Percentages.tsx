import {memo} from 'react';

type PercentageTableProps = {
    max : number,
    title : string,
    categories : {
        vl : number,
        l : number,
        mo: number,
        h : number,
        max: number
    }
};

const determineIntensity = (i : number, categories : {
        vl : number,
        l : number,
        mo: number,
        h : number,
        max: number
    }) => {
    let c = 'moderate';
    if (i > categories['mo']) {
        if (i > categories['h']) {
            c = 'maximal';
        } else {
            c = 'high'
        }
    } else {
        if (i < categories['vl']) {
            c = 'very-low';
        } else if (i < categories['l']){
            c = 'low'
        }
    };
    return c;
};

const PercentageTable = ({ max, title, categories } : PercentageTableProps ) => {
    let array : [number] = [100];

    for (let i = 100; i > 1; i--) {
        array.push(i);
    };

    const rows = array.map((row, i) => {
        const intensity = Math.round(max * ((i + 1)/100));
        const category = determineIntensity(i+1, categories);

        return (<tr data-category={category}>
            <td>{i + 1 + '%'}</td>
            <td>{intensity} </td>
        </tr>)
    });

    return <table>
        <thead><th colSpan={2}>{title}</th></thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}

export default memo(PercentageTable);