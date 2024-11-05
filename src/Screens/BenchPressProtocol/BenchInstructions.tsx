import InstructionsScreen from "../../Components/Instructions/Instructions"
import strenghtTests from '../../Text/strengthTests.json';

function BenchInstructions() {
  return <InstructionsScreen 
    title={'Upper Body Strength'}
    nextURL={'/bench-press/results'}
    heading={strenghtTests[1].heading}
    paragraphs={strenghtTests[1].steps}
  />
}

export default BenchInstructions