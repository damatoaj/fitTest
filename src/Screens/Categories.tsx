import {memo} from 'react';
import BMIRiskTable from '../Components/Tables/BMIRiskTable';
import PushupCategories from '../Components/Tables/PushupCategories';
import VO2MaxCategories from '../Components/Tables/VO2MaxCategories';
import LegPressCategories from '../Components/Tables/LegPressCategories';
import BenchPressCategories from '../Components/Tables/BenchPressCategories';
import GripStrengthCategories from '../Components/Tables/GripStrengthCategories';
import SARCategories from '../Components/Tables/SARCategories';
import WaistCircumference from '../Components/Tables/WaistCircumference';

const Categories = () => {
    return (
        <main>
            <h1>Fitness Categories</h1>
            <section>
                <h2>Health Metrics</h2>
                <details open id='bmi'>
                    <summary>BMI Categories</summary>
                    <BMIRiskTable />
                </details>
                <br></br>
                <details open id='waist-circumference'>
                    <summary>Waist Circumference & Cardiovascular Risk</summary>
                    <WaistCircumference />
                </details>
                <br></br>
            </section>
            <section>
                <h2>Endurance Metrics</h2>
                <details open id='pushups'>
                        <summary>Pushup Categories</summary>
                        <PushupCategories />
                    </details>
                    <br></br>
                    <details open id='vo2'>
                        <summary>VO2 Max Categories</summary>
                        <VO2MaxCategories />
                    </details>
            </section>
            <hr />
            <section>
                <h2>Strength Metrics</h2>
                <details open id='bench-press'>
                        <summary>Bench Press Categories</summary>
                        <BenchPressCategories />
                </details>
                <br></br>
                <details open id='leg-press'>
                    <summary>Leg Press Categories</summary>
                    <LegPressCategories />
                </details>
                <br></br>
                <details open id='grip'>
                    <summary>Grip Strength Categories</summary>
                    <GripStrengthCategories />
                </details>
                <br></br>
            </section>
            <section>
                <h2>Flexibility Metrics</h2>
                <details open id='sar'>
                    <summary>Sit & Reach Categories</summary>
                    <SARCategories />
                </details>
            </section>
        </main>
    )
};

export default memo(Categories);