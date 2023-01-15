import './CSS/App.css';
import './CSS/Buttons.css';
import './CSS/Form.css';
import './CSS/Table.css';
import './CSS/Links.css';

import Form from './Components/Form';
import NavBar from './Components/NavBar';
import MobileNav from './Components/MobileNav';
import Results from './Screens/Results';
import useBMR from './Hooks/useBMR';

import { Route, Routes } from 'react-router-dom';
import StrengthForm from './Components/StrengthForm';
import StrengthTable from './Components/StrengthTable';
import EnduranceForm from './Components/EnduranceForm';
import Bruce from './Screens/TreadmillProtocals/Bruce';
import TreadmillResults from './Screens/TreadmillProtocals/TreadmillResults';
import { useUserContext } from './Hooks/useUserContext';
function App() {
  const { state } = useUserContext()
  const { 
    handleChange, 
    handleReset, 
    handleSelect, 
    handleSubmit,
    newForm
  } = useBMR();
  
    return (
      <>
      {window.innerWidth > 600 && <NavBar />}
      {window.innerWidth <= 600 && <MobileNav />}
        <Routes>
          <Route
            path='/nutrition' 
            element={<Form handleChange={handleChange} 
              handleReset={handleReset}
              handleSelect={handleSelect} 
              handleSubmit={handleSubmit}/>}
          >
          </Route> 
          {state.user.macros && state.user.micros && <Route path='/nutrition/results' element={<Results macros={state.user.macros} micros={state.user.micros} newForm={newForm}/>}/>}
          <Route path='/strength' element={<StrengthForm />} />
          <Route path='/strength/results' element={<StrengthTable/>} />
          <Route path='/endurance' element={<EnduranceForm />} />
          <Route path='/treadmill-protocols'>
            <Route path='bruce' element={<Bruce />} />
            <Route path='bruce/results' element={<TreadmillResults />} />
          </Route>
        </Routes>
      </>
    )
}

export default App;
