import { useRef, memo } from 'react'
import useForm from '../../Hooks/useForm'
import { useUserContext } from '../../Hooks/useUserContext'
import { Link } from 'react-router-dom';
const WaistCircumferenceForm = () => {
    const { handleChange, handleSubmit, handleReset} = useForm()
    const form = useRef<HTMLFormElement | null>(null)
    const { state : {user } } = useUserContext()

    let valid : boolean = Boolean(user.benchPress?.benchPress) || false
    
    if(form.current && form.current !== null) {
        valid = form.current.checkValidity()
    };

    // let defaultValue : string = '';
    // if (user.waistCircumference && user.prefers_metric) {
    //     defaultValue = String(user.waistCircumference.wc);
    // } else if (user.waistCircumference) {
    //     defaultValue = String(Math.floor(user.waistCircumference.wc / 2.54 * 100) / 100);
    // };

    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            onReset={handleReset}
            name='circumferences'
        >
            <h2>Record Your Body Circumferences</h2>
            <fieldset>
                <legend>Abdomen</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='abdomenCircumference'
                    min='0'
                    max='500' 
                    placeholder={user.prefers_metric ? 'Measured in centimeters' : 'Measured in inches'}
                    step={.5}
                    maxLength={3}
                    required
                    // defaultValue={defaultValue}
                    />
            </fieldset>
            <fieldset>
                <legend>Arm</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='armCircumference'
                    min='0'
                    max='500' 
                    placeholder={user.prefers_metric ? 'Measured in centimeters' : 'Measured in inches'}
                    step={.5}
                    maxLength={3}
                    required
                    // defaultValue={defaultValue}
                    />
            </fieldset>
            <fieldset>
                <legend>Buttocks</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='buttocksCircumference'
                    min='0'
                    max='500' 
                    placeholder={user.prefers_metric ? 'Measured in centimeters' : 'Measured in inches'}
                    step={.5}
                    maxLength={3}
                    required
                    // defaultValue={defaultValue}
                />
            </fieldset>
            <fieldset>
                <legend>Calf</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='calfCircumference'
                    min='0'
                    max='500' 
                    placeholder={user.prefers_metric ? 'Measured in centimeters' : 'Measured in inches'}
                    step={.5}
                    maxLength={3}
                    required
                    // defaultValue={defaultValue}
                />
            </fieldset>
            <fieldset>
                <legend>Forearm</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='forearmCircumference'
                    min='0'
                    max='500' 
                    placeholder={user.prefers_metric ? 'Measured in centimeters' : 'Measured in inches'}
                    step={.5}
                    maxLength={3}
                    required
                    // defaultValue={defaultValue}
                    />
            </fieldset>
            <fieldset>
                <legend>Hips</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='hipsCircumference'
                    min='0'
                    max='500' 
                    placeholder={user.prefers_metric ? 'Measured in centimeters' : 'Measured in inches'}
                    step={.5}
                    maxLength={3}
                    required
                    // defaultValue={defaultValue}
                />
            </fieldset>
            <fieldset>
                <legend>Mid Thigh</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='midthighCircumference'
                    min='0'
                    max='500' 
                    placeholder={user.prefers_metric ? 'Measured in centimeters' : 'Measured in inches'}
                    step={.5}
                    maxLength={3}
                    required
                    // defaultValue={defaultValue}
                />
            </fieldset>
            <fieldset>
                <legend>Waist</legend>
                <h4>Additional Directions</h4>
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
            <input 
                onChange={handleChange}
                type='number'
                name='waistCircumference'
                min='0'
                max='500' 
                placeholder={user.prefers_metric ? 'Measured in centimeters' : 'Measured in inches'}
                step={.5}
                maxLength={3}
                required
                // defaultValue={defaultValue}
            />
            </fieldset>
            <span>
                {user.sex ? 
                <span>
                    <button type='submit' disabled={!valid}>{user.waistCircumference ?  'Update' : 'Submit' }</button>
                    <button type='reset' disabled={user.waistCircumference !== null ? true : false}>Reset</button>
                </span>
                :
                <h3>Please fill out the <Link to='/parq'>Demographic Form</Link></h3>
            }
            </span>
        </form>
    )
};

export default memo(WaistCircumferenceForm);