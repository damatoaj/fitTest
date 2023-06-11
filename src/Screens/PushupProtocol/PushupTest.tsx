import { memo } from 'react'
import Timer from '../../Components/Timer/Timer'
function PushupTest() {
  return (
    <main>
        <h1>Pushup Test For Muscular Endurance</h1>
        <Timer nextUrl={'/pushups/results'} />
    </main>
  )
}

export default memo(PushupTest)