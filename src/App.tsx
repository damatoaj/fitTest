import './App.css';

import Form from './Components/Form';
import NavBar from './Components/NavBar';
import Results from './Screens/Results';
import useBMR from './Hooks/useBMR';

import { Route, Routes } from 'react-router-dom';
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
        </Routes>
      </>
    )
}

export default App;
