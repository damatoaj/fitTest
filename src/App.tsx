import './CSS/App.css';
import './CSS/Buttons.css';
import './CSS/Form.css';
import './CSS/Table.css';
import './CSS/Links.css';
import './CSS/Details.css';
import './CSS/Alert.css';

import { useState } from 'react';
import Alert from './Components/Alert';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Screens/Home';
import Loader from './Components/Loader';
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
import Categories from './Screens/Categories';
import BodyCircumference from './Screens/BodyCircumference/BodyCircumference';
import BloodPressureScreen from './Screens/BloodPressure/BloodPressureScreen';
import SkinfoldScreen from './Screens/SkinFolds/SkinfoldScreen';
import FieldTests from './Screens/FieldTests/FieldTests';

function App() {
  const { state } = useUserContext();
  const [feedback, showFeedback] = useState(true);
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
      {feedback && (
        <address>
          <button type='button' title='Close feedback widget' onClick={()=> {
            showFeedback(false);
          }}>X</button>
          <a href='mailto:mr.arthurdamato@gmail.com'>
          
              FeedBack
          </a>
      </address>
      )}
      {state.error && <Alert message={state.error} type={'error'} />}
      {state.alert && <Alert message={state.alert.message} type={state.alert.type} />}
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
          <Route path='/field-tests' element={<FieldTests />} />
          <Route path='/sit-and-reach'>
            <Route path='instructions' element={<SARInstructions />} />
            <Route path='results' element={<SARResults />} />
          </Route>
          <Route path='/current-session' element={<SummaryTable/>}></Route>
          <Route path='/sessions' element={<main style={{alignItems:'start'}}><SessionsTable /></main>}></Route>
          <Route path='/categories' element={<Categories />}></Route>
          <Route path='/circumferences' element={<BodyCircumference />}></Route>
          <Route path='/blood-pressure' element={<BloodPressureScreen />}></Route>
          <Route path='/skinfolds' element={<SkinfoldScreen />} ></Route>
          <Route path="/*" element={<FourOhFourScreen />}>
          </Route>
        </Routes>
        <Footer />
      </>
    )
}

export default App;
