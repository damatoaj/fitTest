import { memo } from 'react';
import WaistCircumferenceForm from '../../Components/Forms/WaistCircumferenceForm';
const BodyCircumference = () => {
    return (
        <main>
            <h1>Body Circumference Measurements</h1>
            <section id='instructions'>
                <article>
                    <h2>Instructions</h2>
                    <h3>Cirumerfence Sites & Procedures</h3>
                    <h4>All measurements are taken while standing.</h4>
                    <ul>
                        <li>
                            <span>
                                <h4>
                                    Abdomen:
                                </h4>
                            </span>
                            <span>
                                <p>
                                    A horizontal measure is taken at the height of the iliac crest, usually at the belly button.
                                </p>
                            </span>
                        </li>
                        <li>
                            <span>
                                <h4>
                                    Arm:
                                </h4>
                            </span>
                            <span>
                                <p>
                                    With arms hangin freely at your sides and hands facing your sides, a horizontal measure is taken midway between the olecranon and acromion processes.
                                </p>
                            </span>
                        </li>
                        <li>
                            <span>
                                <h4>
                                    Buttocks/Hips:
                                </h4>
                            </span>
                            <span>
                                <p>
                                    With feet together, a horizontal measure is taken at the maximal circumference of the buttocks. This is utilized when calculating waist to hip ratios.
                                </p>
                            </span>
                        </li>
                        <li>
                            <span>
                                <h4>
                                    Calf:
                                </h4>
                            </span>
                            <span>
                                <p>
                                    Place your feet roughly 20 cm apart (~ 8 inches), a horizontal measure is taken at the maximum circumference between the knee and ankle, perpendicular to the long axis.
                                </p>
                            </span>
                        </li>
                        <li>
                            <span>
                                <h4>
                                    Forearm:
                                </h4>
                            </span>
                            <span>
                                <p>
                                    With arms hanging at your sides and palms facing forward, a horizontal measure is taken at the maximum circumference.
                                </p>
                            </span>
                        </li>
                        <li>
                            <span>
                                <h4>
                                    Hips/Thigh:
                                </h4>
                            </span>
                            <span>
                                <p>
                                    Place your feet roughly 10 cm apart (~ 4 inches), a horizontal measure is taken at the maximum circumference of the hip/proximal thigh, just below the gluteal fold.
                                </p>
                            </span>
                        </li>
                        <li>
                            <span>
                                <h4>
                                    Mid-thigh:
                                </h4>
                            </span>
                            <span>
                                <p>
                                    Place one foot on a bench so the knee is flexed at 90 degrees, a measure is taken midway between the inguinal crease and the proximal border of the patella, perpendicular to the long axis.
                                </p>
                            </span>
                        </li>
                        <li>
                            <span>
                                <h4>
                                    Waist:
                                </h4>
                            </span>
                            <span>
                                <p>
                                    Arms at the sides, feet together, and abdomen relaxed, a horizontal measure is taken at the narrowest part of the torso (above the belly button and below where the ribs come together).
                                </p>
                            </span>
                        </li>
                    </ul>
                    <br></br>
                    <h4>Procedures</h4>
                    <ol>
                        <li>
                            <p>
                                All measurements should be made with a flexible yet inelastic tape measure.
                            </p>
                        </li>
                        <li>
                            <p>
                                The tape should be placed on the skin surface without compressing the subcutaneous adipose tissue.                            
                            </p>
                        </li>
                        <li>
                            <p>
                                Of a Gulick-type spring-loaded tape measure is used, the handle should be extended to the same marking with each trial.                            
                            </p>
                        </li>
                        <li>
                            <p>
                                Take duplicate measures at each site and retest if duplicate measurements are not within 5mm ( .2 inches).                            
                            </p>
                        </li>
                        <li>
                            <p>
                                Rotate through measurement sites or allow time for skin to regain normal texture.                            
                            </p>
                        </li>
                    </ol>
                </article>
            </section>
            <section id="body-circumerference-form">
                <WaistCircumferenceForm />
            </section>
        </main>
    )
};

export default memo(BodyCircumference);