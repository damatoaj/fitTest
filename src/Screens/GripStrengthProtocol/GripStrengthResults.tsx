import ResultsScreen from '../../Components/ResultsScreen'
import GripForm from '../../Components/Forms/GripForm'
function GripStrengthResults() {
  return <ResultsScreen 
    title='Hand Grip Test For Muscular Strength'
    test='gripStrength'
    form={<GripForm />}
  />
}

export default GripStrengthResults