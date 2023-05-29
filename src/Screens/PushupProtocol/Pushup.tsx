import strenghtTests from '../../Text/strengthTests.json';
import Instructions from '../../Components/Instructions/Instructions';
import EnduranceForm from '../../Components/EnduranceForm';

import React, {memo} from 'react'

function Pushup() {
  return (
    <main>
        <div>Pushup</div>
        <Instructions heading={strenghtTests[0].heading} paragraphs={strenghtTests[0].steps} />
        <EnduranceForm />
    </main>
  )
}

export default memo(Pushup)