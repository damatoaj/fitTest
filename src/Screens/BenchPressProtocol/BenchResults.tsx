import ResultsScreen from '../../Components/ResultsScreen'
import BenchPressForm from '../../Components/Forms/BenchPressForm'
function BenchResults() {
  return <ResultsScreen 
    title='One Rep Max Bench Press Test'
    test='benchPress'
    form={<BenchPressForm />}
  />
}

export default BenchResults