import { useSearchParams } from "react-router-dom";
import { menCardioFitnessClassification, womenCardioFitnessClassification } from "../../Functions/Testing/cardioFitness";
const TreadmillResults = () => {
    const [searchParams] = useSearchParams();

    const kg : number = 50;
    const age : number = 55

    const mets : string = searchParams.get('mets') ?? '0';
    const vo2 : number = parseInt(mets) * kg;
    const category = menCardioFitnessClassification(age, vo2)
    return (
        <main>
            <h1>Hello</h1>
            <p>You have {category} cardio respiratory fitness</p>
        </main>
    )
};

export default TreadmillResults