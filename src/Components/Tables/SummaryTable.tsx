import { useUserContext } from "../../Hooks/useUserContext";
import StrengthTable from "./StrengthTable";
import PushupsTable from "./PushupsTable";
import MacrosTable from "./MacrosTable";
import MicrosTable from "./MicrosTable";
import BMITable from "./BMITable";
import BMIRiskTable from "./BMIRiskTable";
import PushupCategories from "./PushupCategories";
import VO2MaxCategories from "./VO2MaxCategories";
import LegPressCategories from "./LegPressCategories";
import { printTable } from "../../Functions/printTable";
import BenchPressCategories from "./BenchPressCategories";

const SummaryTable = () => {
    const { state } = useUserContext();
    const date : number = new Date().getDate();
    const month : number= new Date().getMonth();
    const year : number = new Date().getFullYear();
    const today : string = `${year}-${month}-${date}`

    const handleSave = () => {
        const u : string | null = sessionStorage.getItem('user');
        if (typeof u === 'string') {
            localStorage.setItem('mostRecentSession', JSON.stringify({...JSON.parse(u), date: today}));
            console.log('update localstorage');
            let d : HTMLDialogElement | null= document.querySelector('dialog#confirmationModal');
            if (d !== null) d.close();
            return true
        }
        
        return false
    };
    return (
        <main id='summary-table'>
            <h1>Your Fitness Summary on 
                <time dateTime={today}> {date}, {month}, {year}</time>
            </h1>
            <section>
            <h2>Demographic Data</h2>
                {state.user.hrMax && <table>
                    <thead>Heart Rate Max</thead>
                    <tbody>
                    <tr><td>{state.user.hrMax}</td></tr>
                    </tbody>
                </table>}
                {state.user.bloodPressure && <table>
                    <thead>Blood Pressure</thead>
                    <tbody>
                        <tr><td>Systolic / Diastolic Ratio</td><td>{state.user.bloodPressure.sbp}/{state.user.bloodPressure.dbp}</td></tr>
                        <tr><td>Classification: </td><td>{state.user.bloodPressure.classification}</td></tr>
                    </tbody>
                </table>}
                <BMITable />
                <details>
                    <summary>BMI Categories</summary>
                    <BMIRiskTable />
                </details>
            </section>
            <section>
                <h2>Muscular Strength & Endurance</h2>
                    {(state.user.benchPress || state.user.legPress || state.user.gripStrength) ? <StrengthTable /> : <h3>No Summary Yet</h3>}
                    <details>
                        <summary>Bench Press Categories</summary>
                        <BenchPressCategories />
                    </details>
                    <details>
                        <summary>Leg Press Categories</summary>
                        <LegPressCategories />
                    </details>
                    {state.user.pushups && <PushupsTable />}
                    <details>
                        <summary>Pushup Categories</summary>
                        <PushupCategories />
                    </details>
                    <details>
                        <summary>VO2 Max Categories</summary>
                        <VO2MaxCategories />
                    </details>
                </section>
            <section>
                <h2>Macro Nutrition Recommendations For Goal Weight</h2>
                {state.user.macros ? <MacrosTable  macros={state.user.macros} /> : <h3>No Summary Yet</h3>}
            </section>
                <section>
                    <h2>Micro Nutrition Recommendations From The FDA</h2>
                    {state.user.micros ? <MicrosTable  micros={state.user.micros}/>  : <h3>No Summary Yet</h3>}
                </section>

            {state.user?.fname !== null && (
                <section>
                    <h3>Want to save your session to compare for next time?</h3>
                    <p>Clicking the "Save" button below will push your results into a cache that you can refer back to the next time you visit the site. That way, as long as you are using the same browser you can compare your previous performance to this session.
                    </p>
                    <span>
                        <button type='button' onClick={()=> {
                            let d : HTMLDialogElement | null = document.querySelector('dialog#confirmationModal')

                            if (d !== null) d.showModal();
                            }}
                        >
                            {localStorage.getItem('mostRecentSession')?.includes('fname') ? 'Save This Session' : 'Update Most Recent Session'}
                        </button>
                        <button type='button' onClick={()=> printTable('summary-table')}>Print Results</button>
                    </span>
                    <dialog id='confirmationModal'>
                        <p>Are you sure? Clicking save will overwrite previous test data</p>
                        <span>
                            <button autoFocus type='submit' onClick={handleSave}>I'm sure</button>
                            <button 
                                type='button'
                                onClick={()=> {
                                    let d : HTMLDialogElement | null = document.querySelector('dialog#confirmationModal');
                                    if (d !== null) d.close();
                                }}
                            >
                                Close
                            </button>
                        </span>
                    </dialog>
                </section>
            )}
        </main>
    )
};

export default SummaryTable;