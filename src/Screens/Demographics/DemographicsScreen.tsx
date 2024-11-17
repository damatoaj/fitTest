import DemoGraphicsForm from "../../Components/Forms/DemoGraphicsForm";
import BloodPressureForm from "../../Components/Forms/BloodPressureForm";
import WaistCircumferenceForm from "../../Components/Forms/WaistCircumferenceForm";
import Form from "../../Components/Form";
import { useState } from 'react';
import Error from "../../Components/Error";
import Loader from "../../Components/Loader";
import { useUserContext } from "../../Hooks/useUserContext";
const DemographicsScreen = () => {
    const [stage, setStage] = useState<number>(1);
    // const navigate = useNavigate();
    const {state} = useUserContext();



    return( <main>
        {state.error && <Error message={state.error} />}
        {state.isLoading && <Loader />}
        <h1>Demographics</h1>
        <section>
            {stage === 1 && <DemoGraphicsForm />}
            {stage === 2 && <BloodPressureForm />}
            {stage === 3 && <Form />}
            {stage === 4 && <WaistCircumferenceForm />}
        </section>
        <span>
            <button 
                type='button'
                data-direction='previous'
                title="Go back to the previous form"
                onClick={()=>{
                if (stage === 1) {
                    setStage(4)
                } else {
                    setStage(stage - 1)
                }
            }}>Prev</button>
            <button 
                title="Continue to the next form"
                type='button'
                data-direction='next'
                onClick={()=> {
                    if (stage === 4) {
                        setStage(1)
                    } else {
                        setStage(stage + 1)
                    }
                }}
            >
                Next
            </button>
        </span>
    </main>
    )
};

export default DemographicsScreen;