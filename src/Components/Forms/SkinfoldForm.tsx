import { useRef, memo } from 'react'
import useForm from '../../Hooks/useForm'
import { useUserContext } from '../../Hooks/useUserContext'
import { useNavigate } from 'react-router-dom';

const SkinfoldForm = () => {
    const { handleChange, handleSubmit, handleReset} = useForm()
    const form = useRef<HTMLFormElement | null>(null)
    const { state : {user } } = useUserContext()
    const navigate = useNavigate()
    
    return (
        <form
            ref={form}
            onSubmit={handleSubmit}
            onReset={handleReset}
            name='skinfolds'
        >
            <h2>SkinFold Sites for Body Density/Bodyfat Percentage</h2>
            <fieldset>
                <legend>Abdominal</legend>
                <input 
                    autoFocus={true}
                    onChange={handleChange}
                    type='number'
                    name='abdominalSkin'
                    min='0'
                    max='500' 
                    placeholder={'Measured in millimeters'}
                    step={.5}
                    maxLength={3}
                    />
            </fieldset>
            <fieldset>
                <legend>Biceps</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='bicepSkin'
                    min='0'
                    max='50' 
                    placeholder={'Measured in millimeters'}                    
                    step={.5}
                    maxLength={3}
                />
            </fieldset>
            <fieldset>
                <legend>Chest</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='chestSkin'
                    min='0'
                    max='500' 
                    placeholder={'Measured in millimeters'}                    
                    step={.5}
                    maxLength={3}
                />
            </fieldset>
            <fieldset>
                <legend>Medial Calf</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='calfSkin'
                    min='0'
                    max='500' 
                    placeholder={'Measured in millimeters'}                    
                    step={.5}
                    maxLength={3}
                />
            </fieldset>
            <fieldset>
                <legend>Midaxillary</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='midaxillarySkin'
                    min='0'
                    max='500' 
                    placeholder={'Measured in millimeters'}                    
                    step={.5}
                    maxLength={3}
                    />
            </fieldset>
            <fieldset>
                <legend>Subscapular</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='subscapSkin'
                    min='0'
                    max='500' 
                    placeholder={'Measured in millimeters'}                    
                    step={.5}
                    maxLength={3}
                />
            </fieldset>
            <fieldset>
                <legend>Suprailiac</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='supraIliacSkin'
                    min='0'
                    max='500' 
                    placeholder={'Measured in millimeters'}                    
                    step={.5}
                    maxLength={3}
                />
            </fieldset>
            <fieldset>
                <legend>Thigh</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='thighSkin'
                    min='0'
                    max='500' 
                    placeholder={'Measured in millimeters'}                    
                    step={.5}
                    maxLength={3}
                />
            </fieldset>
            <fieldset>
                <legend>Triceps</legend>
                <input 
                    onChange={handleChange}
                    type='number'
                    name='tricepSkin'
                    min='0'
                    max='500' 
                    placeholder={'Measured in millimeters'}                    
                    step={.5}
                    maxLength={3}
                />
            </fieldset>
            <span>
                {user.sex ? 
                <span>
                    <button type='submit'disabled={user.sex ? false : true} >{user.waistCircumference ?  'Update' : 'Submit' }</button>
                    <button type='reset' disabled={user.sex !== null ? true : false}>Reset</button>
                </span>
                :
                <button type="button" onClick={()=> navigate('/parq')}>Please Fill Out Demographic Form</button>
            }
            </span>
        </form>
    )
};

export default memo(SkinfoldForm);