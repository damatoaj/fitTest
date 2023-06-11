import InstructionsScreen from "../../Components/Instructions/Instructions"
import strenghtTests from '../../Text/strengthTests.json';

function BenchInstructions() {
  return <InstructionsScreen 
    title={'One Rep Max Bench Press Test'}
    nextURL={'/bench-press/test'}
    heading={strenghtTests[1].heading}
    paragraphs={strenghtTests[1].steps}
  />
}

export default BenchInstructions