import { MouseEventHandler } from 'react';
import MacrosTable from '../Components/MacrosTable';
import MicrosTable from '../Components/MicrosTable';
import { Macros, Micros } from '../interfaces';
import { printTable } from '../Functions/printTable'

type ResultsProps = {
    macros: Macros,
    micros: Micros,
    newForm: MouseEventHandler
}
const Results = ({macros, micros, newForm}: ResultsProps) => {
    return (
        <article style={styles.article}>
            <div id='printable'>
                <MacrosTable macros={macros} />
                <MicrosTable micros={micros} />
            </div>
            <span>
                <button type='button' onClick={newForm}>New Form</button>
                <button type='button' onClick={()=> printTable('printable')}>Print</button>
            </span>
        </article>

    )
};

const styles : any = {
    article: {
        paddingBottom: '20px'
    }
}

export default Results;