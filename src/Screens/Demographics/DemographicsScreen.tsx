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
        {state.user.age && <article>
            <h2>With your demographic data up to date, now you can...</h2>
            <ul>
                <li>Navigate to the tests section to complete different fitness tests</li>
                <li>Fill out other sections of the User Info tabs body composition and other metrics</li>
                <li>Check out your current session's data in the "Current Session" tab</li>
                <li>See how you compare to others in your cohort by visiting the "Fitness Categories" tab</li>
                <li>Calculate different intensity values based off of your test scores in the "Exercise Intensity" tab</li>
            </ul>
        </article>}
        <MetricSwitcher />
    </main>
    )
};

export default DemographicsScreen;