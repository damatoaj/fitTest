import {memo} from 'react';
import { useState, ChangeEvent } from 'react';

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
    const [steps, setSteps] = useState<number>(10);

    let array = [];

    for (let i = 100; i > 0; i = i - steps) {
        array.push(i);
    };

    const rows = array.map((row, i) => {
        const intensity = Math.round(max * ((row )/100));
        const category = determineIntensity(row, categories);

        return (<tr data-category={category}>
            <td>{row + '%'}</td>
            <td>{intensity} </td>
        </tr>)
    });

    return <table>
        <thead>
            <tr>
                <th colSpan={2}>{title}</th>
            </tr>
            <tr className='no-print'>
                <th colSpan={1}>Select your percentage layout</th>
                <th colSpan={1}>
                    <select onChange={(event:  ChangeEvent<HTMLSelectElement>)=> {
                        return setSteps(parseInt(event.target.value))      
                    }}>
                        <option value='10'>
                            10
                        </option>
                        <option value='5'>
                            5
                        </option>
                        <option value='1'>
                            1
                        </option>
                    </select>
                </th>
            </tr> 
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}

export default memo(PercentageTable);