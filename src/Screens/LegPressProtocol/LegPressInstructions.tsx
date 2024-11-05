import strenghtTests from '../../Text/strengthTests.json';
import InstructionsScreen from '../../Components/Instructions/Instructions';

function LegPressInstructions() {
    return <InstructionsScreen 
        title={'Lower Body Strength'} 
        nextURL={'/leg-press/results'}
        heading={strenghtTests[1].heading}
        paragraphs={strenghtTests[1].steps}
    />

}

export default LegPressInstructions