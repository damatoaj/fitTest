import './CSS/App.css';
import './CSS/Buttons.css';
import './CSS/Form.css';
import './CSS/Table.css';
import './CSS/Links.css';
import './CSS/Details.css';

import Form from './Components/Form';
import NavBar from './Components/NavBar';
import MobileNav from './Components/MobileNav';
import Results from './Screens/Results';
import Home from './Screens/Home';
import Loader from './Components/Loader';
import Error from './Components/Error';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import StrengthForm from './Components/Forms/StrengthForm';
import StrengthTable from './Components/Tables/StrengthTable';
import PushupInstructions from './Screens/PushupProtocol/PushupInstructions';
import Bruce from './Screens/TreadmillProtocals/Bruce';
import TreadmillResults from './Screens/TreadmillProtocals/TreadmillResults';
import { useUserContext } from './Hooks/useUserContext';
import DemographicsScreen from './Screens/Demographics/DemographicsScreen';
import PushupTest from './Screens/PushupProtocol/PushupTest';
import PushupResults from './Screens/PushupProtocol/PushupResults';
import GripStrengthInstructions from './Screens/GripStrengthProtocol/GripStrengthInstructions';
import GripStrengthTest from './Screens/GripStrengthProtocol/GripStrengthTest';
import GripStrengthResults from './Screens/GripStrengthProtocol/GripStrengthResults';
import BenchInstructions from './Screens/BenchPressProtocol/BenchInstructions';
import BenchResults from './Screens/BenchPressProtocol/BenchResults';
import BenchTest from './Screens/BenchPressProtocol/BenchTest';
import LegPressResults from './Screens/LegPressProtocol/LegPressResults';
import LegPressInstructions from './Screens/LegPressProtocol/LegPressInstructions';
import EquipmentForm from './Components/Forms/EquipmentForm';
import StepTestTime from './Screens/McArdleStepTest/stepTestTimer';
import StepTestInstructions from './Screens/McArdleStepTest/StepTestInstructions';
import SummaryTable from './Components/Tables/SummaryTable';
import StepTestResults from './Screens/McArdleStepTest/StepTestResults';
import FourOhFourScreen from './Screens/404/404';
function App() {
  const { state } = useUserContext()
  useEffect(()=> {
    function handleHamburger() {
        console.log(window.innerWidth, "<--inner width")

        if (window.innerWidth > 800) {
            console.log('set hamburger false')
            // setShowHamburger(false);
        } else {
            console.log('set hamburger true')

            // setShowHamburger(true);
        };
    }
    window.addEventListener('resize', handleHamburger);
    return window.removeEventListener('resize', handleHamburger);
    
}, [])
    return (
      <>
      {state.error && <Error message={state.error} />}
      {state.isLoading && <Loader />}
      {<NavBar u={state.user} />}
      {/* {window.innerWidth <= 600 && <MobileNav />} */}
        <Routes>
          <Route
            path='/macro_micro_calculator/'
            element={<Home />}
          />
            <Route path='/parq' element={<DemographicsScreen/>}></Route>
          {/* <Route
            path='/nutrition' 
            element={<Form />}
          > */}
            
          {/* </Route>  */}
          {/* <Route path='/equipment' element={<EquipmentForm />} /> */}
          {/* {state.user.macros && state.user.micros && <Route path='/nutrition/results' element={<Results macros={state.user.macros} micros={state.user.micros} />}/>} */}
          <Route path='/strength' element={<StrengthForm />} />
          <Route path='/strength/results' element={<StrengthTable/>} />
          <Route path='/bench-press'>
            <Route path='/bench-press/instructions' element={<BenchInstructions />} />
            <Route path='/bench-press/test' element={<BenchTest />} />
            <Route path='/bench-press/results' element={<BenchResults />} />
          </Route>
          <Route path='/leg-press'>
            <Route path='/leg-press/instructions' element={<LegPressInstructions />} />
            <Route path='/leg-press/test' element={<h1>hi</h1>} />
            <Route path='/leg-press/results' element={<LegPressResults />} />
          </Route>
          <Route path='/grip-strength'>
            <Route path='/grip-strength/instructions' element={<GripStrengthInstructions />} />
            <Route path='/grip-strength/test' element={<GripStrengthTest />} />
            <Route path='/grip-strength/results' element={<GripStrengthResults />} />
          </Route>
          <Route path='/pushups'>
            <Route path='instructions' element={<PushupInstructions />} />
            <Route path='test' element={<PushupTest /> } />
            <Route path='results' element={<PushupResults /> } />
          </Route>
          <Route path='/treadmill-protocols'>
            <Route path='bruce' element={<Bruce />} />
            <Route path='bruce/results' element={<TreadmillResults />} />
          </Route>
          <Route path='/step-test'>
            <Route path='instructions' element={<StepTestInstructions />} />
            <Route path='progress' element={<StepTestTime />} />
            <Route path='results' element={<StepTestResults />} />
          </Route>
          <Route path='/summary' element={<SummaryTable/>}></Route>
          <Route path="*" element={<FourOhFourScreen />}>
          </Route>
        </Routes>
      </>
    )
}

export default App;
