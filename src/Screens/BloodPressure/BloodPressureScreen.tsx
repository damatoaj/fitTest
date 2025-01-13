import {memo} from 'react';
import BloodPressureForm from '../../Components/Forms/BloodPressureForm';

const BloodPressurescreen = () => {
    return (
        <main>
            <h1>Blood Pressure</h1>
            <BloodPressureForm />
        </main>
    )
};

export default memo(BloodPressurescreen);