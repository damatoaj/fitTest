import  { useState } from 'react';

const useStage = () => {
    const [stage, setStage] = useState(1)

    const increment = () => {
        setStage(stage + 1)
    }

    const decrement = () => {
        if (stage - 1 < 1) return stage
        setStage(stage - 1)
    }

    const resetStage = () => setStage(0)

    return { stage, increment, decrement, resetStage }
}

export default useStage;