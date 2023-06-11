import ResultsScreen from '../../Components/ResultsScreen'
import LegPressForm from '../../Components/Forms/LegPressForm'
function LegPressResults() {
  return <ResultsScreen 
    title='One Rep Max Leg Press Test'
    test='legPress'
    form={<LegPressForm />}
  />
}

export default LegPressResults