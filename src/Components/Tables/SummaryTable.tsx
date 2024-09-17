import { useUserContext } from "../../Hooks/useUserContext";
import StrengthTable from "./StrengthTable";
import MacrosTable from "./MacrosTable";
import MicrosTable from "./MicrosTable";

const SummaryTable = () => {
    const { state } = useUserContext()
    
    return (
        <main>
            <h1>Your Fitness Summary</h1>
            <h2>Muscular Strength & Endurance</h2>
            {(state.user.benchPress || state.user.legPress || state.user.gripStrength) ? <StrengthTable /> : <h3>No Summary Yet</h3>}
            <h2>Macro Nutrition Recommendations</h2>
            {state.user.macros ? <MacrosTable  macros={state.user.macros} /> : <h3>No Summary Yet</h3>}
            <h2>Micro Nutrition Recommendations</h2>
            {state.user.micros ? <MicrosTable  micros={state.user.micros}/>  : <h3>No Summary Yet</h3>}
        </main>
    )
};

export default SummaryTable;