import React from 'react'
import InstructionsScreen from '../../Components/Instructions/Instructions'
import mcardleTest from '../../Text/mcardleTest.json'
function StepTestInstructions() {
  return <InstructionsScreen 
    title={mcardleTest.testName}
    heading={mcardleTest.heading}
    paragraphs={mcardleTest.steps}
    nextURL={'/step-test/progress'}
  />
}

export default StepTestInstructions