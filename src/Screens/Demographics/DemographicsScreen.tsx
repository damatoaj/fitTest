import DemoGraphicsForm from "../../Components/Forms/DemoGraphicsForm";
import BloodPressureForm from "../../Components/Forms/BloodPressureForm";
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
        </section>
        <span>
            <button type='button' onClick={()=>{
                if (stage === 1) {
                    setStage(3)
                } else {
                    setStage(stage - 1)
                }
            }}>Prev</button>
            <button 
                type='button'
                onClick={()=> {
                    if (stage === 3) {
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