import './CSS/App.css';
import './CSS/Buttons.css';
import './CSS/Form.css';
import './CSS/Table.css';
import './CSS/Links.css';
import './CSS/ToolTip.css';

import Form from './Components/Form';
import NavBar from './Components/NavBar';
import MobileNav from './Components/MobileNav';
import Results from './Screens/Results';
import Home from './Screens/Home';
import Loader from './Components/Loader';
import Error from './Components/Error';

import { Route, Routes } from 'react-router-dom';
import StrengthForm from './Components/StrengthForm';
import StrengthTable from './Components/StrengthTable';
import PushupInstructions from './Screens/PushupProtocol/PushupInstructions';
import Bruce from './Screens/TreadmillProtocals/Bruce';
import TreadmillResults from './Screens/TreadmillProtocals/TreadmillResults';
import { useUserContext } from './Hooks/useUserContext';
import DemoGraphicsForm from './Components/DemoGraphicsForm';
import PushupTest from './Screens/PushupProtocol/PushupTest';
import PushupResults from './Screens/PushupProtocol/PushupResults';
import GripStrengthInstructions from './Screens/GripStrengthProtocol/GripStrengthInstructions';
import GripStrengthTest from './Screens/GripStrengthProtocol/GripStrengthTest';
import GripStrengthResults from './Screens/GripStrengthProtocol/GripStrengthResults';

function App() {
  const { state } = useUserContext()
  
    return (
      <>
      {state.error && <Error message={state.error} />}
      {state.isLoading && <Loader />}
      {window.innerWidth > 600 && <NavBar />}
      {window.innerWidth <= 600 && <MobileNav />}
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
            <Route path='/parq' element={<DemoGraphicsForm/>}></Route>
          <Route
            path='/nutrition' 
            element={<Form />}
          >
          </Route> 
          {state.user.macros && state.user.micros && <Route path='/nutrition/results' element={<Results macros={state.user.macros} micros={state.user.micros} />}/>}
          <Route path='/strength' element={<StrengthForm />} />
          <Route path='/strength/results' element={<StrengthTable/>} />
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
        </Routes>
      </>
    )
}

export default App;
