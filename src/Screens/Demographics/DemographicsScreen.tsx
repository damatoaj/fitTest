import DemoGraphicsForm from "../../Components/Forms/DemoGraphicsForm";
import Error from "../../Components/Error";
import Loader from "../../Components/Loader";
import { useUserContext } from "../../Hooks/useUserContext";
const DemographicsScreen = () => {
    const {state} = useUserContext();



    return( <main>
        {state.error && <Error message={state.error} />}
        {state.isLoading && <Loader />}
        <h1>Demographics</h1>
        <DemoGraphicsForm />
 
    </main>
    )
};

export default DemographicsScreen;