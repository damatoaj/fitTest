import strenghtTests from '../../Text/strengthTests.json';
import Instructions from '../../Components/Instructions/Instructions';

import { memo  } from 'react'
import { useNavigate } from 'react-router-dom';

function Pushup() {
    const navigate = useNavigate()

    return <main style={styles.main}>
        <Instructions heading={strenghtTests[0].heading} paragraphs={strenghtTests[0].steps} />
        <button type="button" style={styles.button} onClick={()=> navigate('/pushups/test')}>Click to Begin</button>
    </main>

}

const styles = {
    main : {
        display:'flex',
        flexDirection: 'column' as 'column',
        padding: '15px'
    },
    button: {
        marginLeft: '40%'
    }
}

export default memo(Pushup)