import strenghtTests from '../../Text/strengthTests.json';
import Instructions from '../../Components/Instructions/Instructions';

import { memo  } from 'react'
import { useNavigate } from 'react-router-dom';

function Pushup() {
    const navigate = useNavigate()

    return <main>
        <h1>Pushup Test For Muscular Endurance</h1>
        <Instructions heading={strenghtTests[0].heading} paragraphs={strenghtTests[0].steps} />
        <button type="button"  onClick={()=> navigate('/pushups/test')}>Click to Begin</button>
    </main>

}



export default memo(Pushup)