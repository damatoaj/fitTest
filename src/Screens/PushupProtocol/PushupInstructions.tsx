import strenghtTests from '../../Text/strengthTests.json';
import InstructionsScreen from '../../Components/Instructions/Instructions';

function PushupInstructions() {
    return <InstructionsScreen 
        title={'Muscular Endurance'} 
        nextURL={'/pushups/results'}
        heading={strenghtTests[0].heading}
        paragraphs={strenghtTests[0].steps}
    />

}

export default PushupInstructions