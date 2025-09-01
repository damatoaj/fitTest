import { useRef, memo } from 'react';
import useForm from '../../Hooks/useForm';
import { useUserContext } from '../../Hooks/useUserContext';
function RestingHeartRate() {
    const form = useRef<HTMLFormElement | null>(null)
    const { handleChange,handleSubmit, handleReset} = useForm();
    const { state : { user } } = useUserContext();
    let valid : boolean = Boolean(user.age && user.fname && user.lname && user.sex && user.height && user.currentWeight) || false
    
    if (form?.current !== null) {
        valid = form.current.checkValidity()
    }

  return (
    <main>


    <form 
        ref={form}
        onSubmit={handleSubmit}
        onReset={handleReset}
    >
            <h2>Resting Heart Rate</h2>
            <p>
                Capturing a resting heart rate is most accurate after lying down or sitting for five minutes at the beginning of the session, thereby allowing you to relax.
            </p>
            <p>
                After your rest period, heart rate can be captured with a heart rate monitor, stethescope, or by feeling (palpating) the pulse at the wrist with your index and pointer finger.
            </p>
            <p>
                For best accuracy, measure the pulse for a full minute. You can alternatively measure for 30 seconds and then multiply the scor by two.
            </p>
            <p>
                The results will provide you with an overall assesment of your heart health and also can be used to calculate exercise intensity via the Heart Rate Reserve (HRR) method.
            </p>
        <fieldset>
            <legend>Resting Heart Rate</legend>
            <input
                type='number'
                name='restingHR'
                min='1'
                max='500'
                required
                onChange={handleChange}
                step={1}
                maxLength={3}
                placeholder=''
                title="Resting Heart Rate"
                enterKeyHint='done'
                inputMode='numeric'
            />
        </fieldset>
   
        <span>
            <button type='submit' disabled={!valid}>{user.fname ?  'Update' : 'Submit' }</button>
            <button type='reset'>Reset</button>
        </span>
    </form>
    </main>
  )
}

export default memo(RestingHeartRate)