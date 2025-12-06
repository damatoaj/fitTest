import {memo, MouseEventHandler} from 'react';
import { useState, ChangeEvent } from 'react';
import { calPerMinute } from '../../Functions/Intensity/Intensity';
import { useUserContext } from '../../Hooks/useUserContext';

type ReserveTableProps = {
    max : number,
    rest : number,
    title : string,
    onDownload : any,
    categories : {
    vl : number,
    l : number,
    mo: number,
    h : number,
    max: number
    }
}

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

const ReserveTable = ({ max, rest, title, categories, onDownload } : ReserveTableProps ) => {
       const [steps, setSteps] = useState<number>(10);
        const { state } = useUserContext();
        let array = [];
    
        for (let i = 100; i > 0; i = i - steps) {
            array.push(i);
        };
    
        const rows = array.map((row, i) => {
            const intensity = Math.round((max - rest) * row * .01 + rest);
            const category = determineIntensity(row, categories);

            if(title.includes('V02')) {
                return (<tr data-category={category}>
                <td>{row + '%'}</td>
                <td>{intensity} </td>
                <td>{state.user.currentWeight ? Math.round(calPerMinute(state.user.currentWeight,intensity)): '0'}</td>
            </tr>)
            }
            
            return (<tr data-category={category}>
                <td>{row + '%'}</td>
                <td>{intensity} </td>
            </tr>)
        });
    
    if (title.includes('V02')) {
        return <table id={title.split(' ').join('-').toLocaleLowerCase()}>
                <thead>
                    <tr>
                        <th colSpan={3}>{title}</th>
                    </tr>
                    <tr className='no-print'>
                        <th colSpan={2}>Select your percentage layout</th>
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
                    <tr>
                        <th colSpan={2}>
                            ml/kg/minute
                        </th>
                        <th colSpan={1}>
                            cal / min
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>
                            <button onClick={(e) => onDownload(e, title.split(' ').join('-').toLocaleLowerCase())}>
                                Download Table
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
    }
    
    return <table id={title.split(' ').join('-').toLocaleLowerCase()}>
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
        <tfoot>
            <tr>
                <td colSpan={3}>
                    <button onClick={(e)=> onDownload(e, title.split(' ').join('-').toLocaleLowerCase())}>
                        Download Table
                    </button>
                </td>
            </tr>
        </tfoot>
    </table>
}

export default memo(ReserveTable);