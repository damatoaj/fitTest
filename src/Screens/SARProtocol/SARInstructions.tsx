import flexibilityTests from '../../Text/flexibilityTests.json';
import InstructionsScreen from '../../Components/Instructions/Instructions';
import { memo } from 'react';

const SARInstructions = () => {
    return (
        <InstructionsScreen 
        title={'Flexibility'} 
        nextURL={'/sit-and-reach/results'}
        heading={flexibilityTests[0].heading}
        paragraphs={flexibilityTests[0].steps}
        />
    )
};

export default memo(SARInstructions);