import DemoGraphicsForm from "../../Components/Forms/DemoGraphicsForm";
import BloodPressureForm from "../../Components/Forms/BloodPressureForm";
const DemographicsScreen = () => {
    // const navigate = useNavigate();
    // const user = useUserContext();



    return( <main>
        <h1>Demographics</h1>
        <DemoGraphicsForm />
        <BloodPressureForm />
    </main>
    )
};

export default DemographicsScreen;