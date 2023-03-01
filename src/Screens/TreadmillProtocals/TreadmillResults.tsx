import { useSearchParams } from "react-router-dom";
import { menCardioFitnessClassification } from "../../Functions/Testing/cardioFitness";
import { useUserContext } from "../../Hooks/useUserContext";
const TreadmillResults = () => {
    const [searchParams] = useSearchParams();
    const { state } = useUserContext();

    const kg : number = state.user.currentWeight ? state.user.currentWeight/ 2.2 : 0 ;
    const age : number = state.user.age ? state.user.age : 0;

    const mets : string = searchParams.get('mets') ?? '0';
    const vo2 : number = parseInt(mets) * kg;
    const category : string = menCardioFitnessClassification(age, vo2) ?? 'No Data'
    return (
        <main className='container'>
            <h1>Hello</h1>
            <p>You have {category} cardio respiratory fitness</p>
        </main>
    )
};

export default TreadmillResults