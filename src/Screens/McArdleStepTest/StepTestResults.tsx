import ResultsScreen from "../../Components/ResultsScreen";
import StepTestForm from "../../Components/Forms/StepTestForm";

function StepTestResults() {
  return <ResultsScreen 
  title='Step Test For VO2 Max'
  form={<StepTestForm />}
  test='vo2Max'
/>
}

export default StepTestResults