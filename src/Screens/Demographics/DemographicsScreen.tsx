import DemoGraphicsForm from "../../Components/Forms/DemoGraphicsForm";
import Error from "../../Components/Error";
import Loader from "../../Components/Loader";
import { useUserContext } from "../../Hooks/useUserContext";
import MetricSwitcher from "../../Components/MetricSwitcher";
const DemographicsScreen = () => {
    const {state} = useUserContext();



    return( <main>
        {state.error && <Error message={state.error} />}
        {state.isLoading && <Loader />}
        <h1>Tell Us About Yourself...</h1>
        <DemoGraphicsForm />
        <MetricSwitcher />
    </main>
    )
};

export default DemographicsScreen;