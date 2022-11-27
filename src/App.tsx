import './App.css';

import Form from './Components/Form';
import NavBar from './Components/NavBar';
import Results from './Screens/Results';
import useBMR from './Hooks/useBMR';

import { Route, Routes } from 'react-router-dom';
import StrengthForm from './Components/StrengthForm';
import StrengthTable from './Components/StrengthTable';
function App() {
  const { 
    macros, 
    micros,
    handleChange, 
    handleReset, 
    handleSelect, 
    handleSubmit,
    newForm
  } = useBMR();
    return (
      <>
        <NavBar />
        <Routes>
          <Route
            path='/nutrition' 
            element={<Form handleChange={handleChange} 
              handleReset={handleReset}
              handleSelect={handleSelect} 
              handleSubmit={handleSubmit}/>}
          >
          </Route> 
          <Route path='/nutrition/results' element={<Results macros={macros} micros={micros} newForm={newForm}/>}/>
          <Route path='/strength' element={<StrengthForm />} />
          <Route path='/strength/results' element={<StrengthTable/>} />
        </Routes>
      </>
    )
}

export default App;
