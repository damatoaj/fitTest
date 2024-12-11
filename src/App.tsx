import './CSS/App.css';
import './CSS/Buttons.css';
import './CSS/Form.css';
import './CSS/Table.css';
import './CSS/Links.css';
import './CSS/Details.css';

import NavBar from './Components/NavBar';
import Home from './Screens/Home';
import Loader from './Components/Loader';
import Error from './Components/Error';
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
import StepTestTime from './Screens/McArdleStepTest/stepTestTimer';
import StepTestInstructions from './Screens/McArdleStepTest/StepTestInstructions';
import SummaryTable from './Components/Tables/SummaryTable';
import StepTestResults from './Screens/McArdleStepTest/StepTestResults';
import FourOhFourScreen from './Screens/404/404';
import SARInstructions from './Screens/SARProtocol/SARInstructions';
import SARResults from './Screens/SARProtocol/SARResults';
import SessionsTable from './Components/Tables/SessionsTable';
function App() {
  const { state } = useUserContext();
  // useEffect(()=> {
  //   function handleHamburger() {
  //       if (window.innerWidth > 800) {
  //           console.log('set hamburger false')
  //           // setShowHamburger(false);
  //       } else {
  //           console.log('set hamburger true')

  //           // setShowHamburger(true);
  //       };
  //   }
  //   window.addEventListener('resize', handleHamburger);
  //   return window.removeEventListener('resize', handleHamburger);
    
// }, [])
    return (
      <>
      {state.error && <Error message={state.error} />}
      {state.isLoading && <Loader />}
      {<NavBar u={state.user} />}
      {/* {window.innerWidth <= 600 && <MobileNav />} */}
        <Routes>
          <Route
            path='/'
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
            <Route path='instructions' element={<BenchInstructions />} />
            <Route path='test' element={<BenchTest />} />
            <Route path='results' element={<BenchResults />} />
          </Route>
          <Route path='/leg-press'>
            <Route path='instructions' element={<LegPressInstructions />} />
            <Route path='test' element={<h1>hi</h1>} />
            <Route path='results' element={<LegPressResults />} />
          </Route>
          <Route path='/grip-strength'>
            <Route path='instructions' element={<GripStrengthInstructions />} />
            <Route path='test' element={<GripStrengthTest />} />
            <Route path='results' element={<GripStrengthResults />} />
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
          <Route path='/sit-and-reach'>
            <Route path='instructions' element={<SARInstructions />} />
            <Route path='results' element={<SARResults />} />
          </Route>
          <Route path='/current-session' element={<SummaryTable/>}></Route>
          <Route path='/sessions' element={<main><SessionsTable /></main>}></Route>
          <Route path="/*" element={<FourOhFourScreen />}>
          </Route>
        </Routes>
      </>
    )
}

export default App;
