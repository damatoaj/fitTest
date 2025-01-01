import { useRef, memo } from 'react'
import useForm from '../../Hooks/useForm'
import { useUserContext } from '../../Hooks/useUserContext'
const WaistCircumferenceForm = () => {
    const { handleChange, handleSubmit, handleReset} = useForm()
    const form = useRef<HTMLFormElement | null>(null)
    const { state : {user } } = useUserContext()
    let valid : boolean = Boolean(user.benchPress?.benchPress) || false
    
    if(form.current && form.current !== null) {
        valid = form.current.checkValidity()
    };

    let defaultValue : string = '';
    if (user.waistCircumference && user.prefers_metric) {
        defaultValue = String(user.waistCircumference.wc);
    } else if (user.waistCircumference) {
        defaultValue = String(user.waistCircumference.wc / 2.54);
    };

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            onReset={handleReset}
            name='waistCircumference'
        >
            <h2>Calculate Your Cardio Vascular Risk</h2>
            <h3>How To Find Your Waist Circumference</h3>
            <ol>
                <li>
                    <p>
                        Find the top of your hip bone and the bottom of your ribs.
                    </p>
                </li>
                <li>
                    <p>
                        Breathe out normally.
                    </p>
                </li>
                <li>
                    <p>
                        Place the tape measure midway between these points, in line with your belly button, and wrap it around your waist loose enough to fit one finger inside the tape.
                    </p>
                </li>
                <li>
                    <p>
                        Check your measurement. 
                    </p>
                </li>
            </ol>
            <fieldset>
                <legend>What is your waist circumference?</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='waistCircumference'
                    min='0'
                    max='500' 
                    placeholder={user.prefers_metric ? 'Measured in centimeters' : 'Measured in inches'}
                    autoFocus={true}
                    step={.5}
                    maxLength={3}
                    required
                    defaultValue={defaultValue}
                />
            </fieldset>
            <span>
                {user.sex ? 
                <span>
                    <button type='submit' disabled={!valid}>{user.waistCircumference ?  'Update' : 'Submit' }</button>
                    <button type='reset' disabled={user.waistCircumference !== null ? true : false}>Reset</button>
                </span>
                :
                <button type="button">Please Fill Out Demographic Form</button>
            }
            </span>
        </form>
    )
};

export default memo(WaistCircumferenceForm);