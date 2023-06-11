import EnduranceForm from '../../Components/EnduranceForm'
import ResultsScreen from '../../Components/ResultsScreen'

const PushupResults =() =>  {
  return <ResultsScreen 
    title='Pushup Test For Muscular Endurance'
    form={<EnduranceForm />}
    test='pushups'
  />
}

export default PushupResults