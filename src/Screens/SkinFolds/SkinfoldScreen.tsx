import { memo } from 'react';
import SkinfoldForm from '../../Components/Forms/SkinfoldForm';

const SkinfoldScreen = () => {
    return (
        <main>
            <h1>Body Density and Body Fat Percentages</h1>
            <section id='instructions'>
                <article>
                    <h2>Instructions</h2>
                    <h3>Skinfold Sites & Procedures</h3>
                    <h4>All measurements are taken while standing.</h4>
                    <ul>
                        <li>
                            <span>
                                <h4>
                                    Abdominal:
                                </h4>
                            </span>
                            <span>
                                <p>
                                    Vertical fold; 2cm to the right of the belly button.
                                </p>
                            </span>
                        </li>
                        <li>
                            <span>
                                <h4>
                                    Biceps:
                                </h4>
                            </span>
                            <span>
                                <p>
                                    Vertical fold; on the anterior aspect of the arm over the belly of the biceps muscle, 1 cm above the level used to mark the triceps site.                                
                                </p>
                            </span>
                        </li>
                        <li>
                            <span>
                                <h4>
                                    Chest:
                                </h4>
                            </span>
                            <span>
                                <p>
                                    Diagonal fold, one-half of the distance between the anterior axilary line and the nipple (men), or one-third of the distance between the anterior axilary line and the nipple (women). 
                                </p>
                            </span>
                        </li>
                        <li>
                            <span>
                                <h4>
                                    Medial Calf:
                                </h4>
                            </span>
                            <span>
                                <p>
                                    Vertical fold; at the maximum circumference of the calf on the midline of its medial border.
                                </p>
                            </span>
                        </li>
                        <li>
                            <span>
                                <h4>
                                    Midaxillary:
                                </h4>
                            </span>
                            <span>
                                <p>
                                    Vertical fold; on the midaxillary line at the level of the xiphoid process of the sternum. An alternate method is a horizontal fold taken at the level of the xiphoid/sternal border on the midaxillary line.
                                </p>
                            </span>
                        </li>
                        <li>
                            <span>
                                <h4>
                                    Subscapular:
                                </h4>
                            </span>
                            <span>
                                <p>
                                    Diagonal fold (45-degree angle); 1-2 cm below the inferior angle of the scapula.
                                </p>
                            </span>
                        </li>
                        <li>
                            <span>
                                <h4>
                                    Suprailiac:
                                </h4>
                            </span>
                            <span>
                                <p>
                                    Diagonal fold; in line with the natural angle of the iliac crest taken in the anterior axilary line immediately superior to the iliac crest.
                                </p>
                            </span>
                        </li>
                        <li>
                            <span>
                                <h4>
                                    Thigh:
                                </h4>
                            </span>
                            <span>
                                <p>
                                    Vertical fold; on the anterior midline of the thigh, midway between the proximal border of the patella and the inguinal crease (hip).
                                </p>
                            </span>
                        </li>
                    </ul>
                    <br></br>
                    <h4>Procedures</h4>
                    <ol>
                        <li>
                            <p>
                                All measurements should be made on the right side of the body.
                            </p>
                        </li>
                        <li>
                            <p>
                                Caliper should be placed directly on the skin surface, 1 cm away from the thumb and finger, perpendicular to the skinfold, and halfway between the crest and the base of the fold.                            
                            </p>
                        </li>
                        <li>
                            <p>
                                Pinch should be maintained while reading the caliper.                            
                            </p>
                        </li>
                        <li>
                            <p>
                                Wait 1-2 seconds before reading the caliper.                            
                            </p>
                        </li>
                        <li>
                            <p>
                                Take duplicate measures at each site and retest if duplicate measurements are not within 1-2 mm.                            
                            </p>
                        </li>
                        <li>
                            <p>
                                Rotate through measurement sites or allow time for skin to regain normal texture and thickness.                            
                            </p>
                        </li>
                    </ol>
                </article>
            </section>
            <SkinfoldForm />
        </main>
    )
};

export default memo(SkinfoldScreen);