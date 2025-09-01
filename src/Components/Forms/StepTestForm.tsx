import { useRef, memo, ChangeEventHandler, ChangeEvent } from 'react';
import useForm from '../../Hooks/useForm';
import { menMcArdleTest, womenMcArdleTest } from '../../Functions/Testing/cardioFitness';
import { useUserContext } from '../../Hooks/useUserContext';
function StepTestForm() {
    const { state } = useUserContext()
    const form = useRef<HTMLFormElement | null>(null)
    const { customChange,handleSubmit, handleReset} = useForm()
    const { state : { user } } = useUserContext()

    let valid : boolean = Boolean(user.vo2Max?.vo2Max) || false
    
    if (form?.current !== null) {
        valid = form.current.checkValidity()
    }

    const vo2 : ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) : void=> {
        if (state.user.sex === 'MALE') {
            customChange('vo2Max' as string, menMcArdleTest(parseInt(e.target.value)).toString())
        } else {
            customChange('vo2Max', womenMcArdleTest(parseInt(e.target.value)).toString())
        }
    }

  return (
    <form 
        ref={form}
        onSubmit={handleSubmit}
        onReset={handleReset}
        name='stepTest'
    >
        <h2>Step Test Results</h2>
        <fieldset>
            <legend>Enter Your Heart Rate</legend>
            <p>15 second count multiplied by four</p>
            <input
                type='number'
                name='vo2Max'
                min='40'
                max='400'
                required
                onChange={vo2}
                step={1}
                maxLength={3}
                defaultValue={user.vo2Max?.vo2Max || ''}
                autoFocus
                enterKeyHint='done'
                inputMode='numeric'            />
        </fieldset>
        <span>
            <button type='submit' disabled={!valid}>Submit</button>
            <button type='reset' disabled={user.vo2Max !== null ? true : false}>Reset</button>
        </span>
    </form>
  )
}

export default memo(StepTestForm)