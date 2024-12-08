import SitAndReachForm from "../../Components/Forms/SitAndReachForm";
import ResultsScreen from "../../Components/ResultsScreen";
import {memo} from 'react';
const SARResults =() =>  {
  return <ResultsScreen 
    title='Sit & Reach Test For Flexibility'
    form={<SitAndReachForm />}
    test='sar'
  />
}

export default memo(SARResults);