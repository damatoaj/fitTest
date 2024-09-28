import { useUserContext } from "../../Hooks/useUserContext";
import StrengthTable from "./StrengthTable";
import PushupsTable from "./PushupsTable";
import MacrosTable from "./MacrosTable";
import MicrosTable from "./MicrosTable";
import BMITable from "./BMITable";

const SummaryTable = () => {
    const { state } = useUserContext();
    const date : number = new Date().getDate();
    const month : number= new Date().getMonth();
    const year : number = new Date().getFullYear();
    const today : string = `${year}-${month}-${date}`

    return (
        <main>
            <h1>Your Fitness Summary on 
                <time dateTime={today}> {date}, {month}, {year}</time>
            </h1>
            <h2>Demongraphic Data</h2>
            {state.user.hrMax && <table>
                <th>Heart Rate Max</th>
                <tr><td>{state.user.hrMax}</td></tr>
            </table>}
            {state.user.bloodPressure && <table>
                <th>Blood Pressure</th>
                <tr><td>Systolic / Diastolic Ration</td><td>{state.user.bloodPressure.sbp}/{state.user.bloodPressure.dbp}</td></tr>
                <tr><td>Classification: </td><td>{state.user.bloodPressure.classification}</td></tr>
            </table>}
            <h2>Muscular Strength & Endurance</h2>
            {(state.user.benchPress || state.user.legPress || state.user.gripStrength) ? <StrengthTable /> : <h3>No Summary Yet</h3>}
            {state.user.pushups && <PushupsTable />}
            <h2>BMI and Weight</h2>
            <BMITable />
            <h2>Macro Nutrition Recommendations For Goal Weight</h2>
            {state.user.macros ? <MacrosTable  macros={state.user.macros} /> : <h3>No Summary Yet</h3>}
            <h2>Micro Nutrition Recommendations From The FDA</h2>
            {state.user.micros ? <MicrosTable  micros={state.user.micros}/>  : <h3>No Summary Yet</h3>}
        </main>
    )
};

export default SummaryTable;