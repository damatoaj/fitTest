import InstructionsScreen from "../../Components/Instructions/Instructions"
import strenghtTests from '../../Text/strengthTests.json';

function GripStrengthInstructions() {
  return <InstructionsScreen 
    title={'Grip Test for Muscular Strength'}
    nextURL={'/grip-strength/test'}
    heading={strenghtTests[2].heading}
    paragraphs={strenghtTests[2].steps}
  />
}

export default GripStrengthInstructions