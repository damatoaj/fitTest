import './App.css';

import Form from './Components/Form';
import NavBar from './Components/NavBar';
import Results from './Screens/Results';
import useBMR from './Hooks/useBMR';
function App() {
  const { 
    viewResults, 
    macros, 
    micros,
    handleChange, 
    handleReset, 
    handleSelect, 
    handleSubmit,
    newForm
  } = useBMR();
    return (
      <main>
        <NavBar />
        {!viewResults && <Form 
          handleChange={handleChange} 
          handleReset={handleReset}
          handleSelect={handleSelect} 
          handleSubmit={handleSubmit}
        />}
        {viewResults && <Results macros={macros} micros={micros} newForm={newForm}/>}
      </main>
    )
}

export default App;
