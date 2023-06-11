import strenghtTests from '../../Text/strengthTests.json';
import InstructionsScreen from '../../Components/Instructions/Instructions';

function LegPressInstructions() {
    return <InstructionsScreen 
        title={'One Rep Max Leg Press Test'} 
        nextURL={'/leg-press/test'}
        heading={strenghtTests[1].heading}
        paragraphs={strenghtTests[1].steps}
    />

}

export default LegPressInstructions