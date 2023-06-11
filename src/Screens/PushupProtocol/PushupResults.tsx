import React from 'react'
import EnduranceForm from '../../Components/EnduranceForm'
import { useUserContext } from '../../Hooks/useUserContext'
const PushupResults =() =>  {
const { state : {user} } = useUserContext()

  return (
    <main>
        <h1>Pushup Test For Muscular Endurance</h1>
        <EnduranceForm />
        {user.pushups && <h2>You scored {user.pushups.category}</h2>}
    </main>

  )
}

export default PushupResults