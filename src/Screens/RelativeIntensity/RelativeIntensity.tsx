import {memo} from 'react';
import Percentages from '../../Components/Tables/Percentages';
import ReserveTable from '../../Components/Tables/ReserveTable';
import { useUserContext } from '../../Hooks/useUserContext';

const RelativeIntensity = () => {
    const { state } = useUserContext();

    return (
        <main>
            <article>
            <h1>Relative Intensity</h1>
            <p>As you fill out forms and complete tests, your relative intensities will be added here.</p>
            <p>Programming your exercise with relative intensity in mind gives you control over your progress</p>
            <p>For instance, if you wanted to go for a light jog then maybe you would want to keep your heart rate in the 57-63% range, or if you are bodybuilding you may want to lift in the moderate range for 8-12 repetitions.</p>
            <section id='hr-max'>
                <div>
                    <h2>Percent of Heart Rate Max Intensities</h2>
                    <ul>
                        <li>Very light: less than 57%</li>
                        <li>Light: 57% to 63%</li>
                        <li>Moderate: 64% to 76%</li>
                        <li>Vigorous: 77% to 95%</li>
                        <li>Near maximal to maximal: greater than 95%</li>
                    </ul>
                </div>
                    {state.user.hrMax ? (
                        <Percentages 
                            max={state.user.hrMax}
                            title='Percentage Of Heart Rate Max'
                            categories={{
                                vl : 57,
                                l : 63,
                                mo : 76,
                                h : 95,
                                max : 100
                            }}
                        />
                    ) : <Percentages 
                        max={0} 
                        title='Percentage Of Heart Rate Max' 
                        categories={{
                            vl : 57,
                            l : 63,
                            mo : 76,
                            h : 95,
                            max : 100
                        }}
                    />}
                    
                    
            </section>
            <section id='heart-rate-reserve'>
                <div>
                    <h2>Percent of Heart Rate Reserve</h2>
                    <ul>
                        <li>Very light: less than 30%</li>
                        <li>Light: 30% to 39%</li>
                        <li>Moderate: 40% to 59%</li>
                        <li>Vigorous: 60% to 89%</li>
                        <li>Near maximal to maximal: greater than 89%</li>
                    </ul>
                </div>
                {(state.user.hrMax && state.user.hrMax >  0) && (state.user.restingHR > 0)? (
                    <ReserveTable 
                        max={state.user.hrMax}
                        min={state.user.restingHR}
                        title='Percentage Of Heart Rate Reserve'
                        categories={{
                            vl : 30,
                            l : 39,
                            mo : 59,
                            h : 89,
                            max : 100
                        }}
                    />
                ) : <ReserveTable 
                        max={0} min={0} 
                        title='Percentage Of Heart Rate Reserve' 
                        categories={{
                            vl : 30,
                            l : 39,
                            mo : 59,
                            h : 89,
                            max : 100
                        }}/>}
            </section>
            <section id='vo2-max'>
                <div>
                    <h2>Percent of VO2 Max Intensities</h2>
                    <ul>
                        <li>Very light: less than 37%</li>
                        <li>Light: 37% to 45%</li>
                        <li>Moderate: 46% to 63%</li>
                        <li>Vigorous: 64% to 90%</li>
                        <li>Near maximal to maximal: greater than 90%</li>
                    </ul>
                </div>
                        {state.user.vo2Max?.vo2Max ? (
                        <Percentages 
                            max={state.user.vo2Max?.vo2Max}
                            title='Percentage Of VO2 Max'
                            categories={{
                            vl : 37,
                            l : 45,
                            mo : 63,
                            h : 90,
                            max : 100
                            }}
                        />
                        ) : <Percentages 
                            max={0} 
                            title='Percentage Of VO2 Max' 
                            categories={{
                            vl : 37,
                            l : 45,
                            mo : 63,
                            h : 90,
                            max : 100
                        }}
                        />}

            </section>
            {/* <section id='vo2-max-reserve'>
                <div>
                    <h2>Percent of V02 Max Reserve</h2>
                    <ul>
                        <li>Very light: less than 30%</li>
                        <li>Light: 30% to 39%</li>
                        <li>Moderate: 40% to 59%</li>
                        <li>Vigorous: 60% to 89%</li>
                        <li>Near maximal to maximal: greater than 89%</li>
                    </ul>
                </div>
                {(state.user.vo2Max && state.user.vo2Max.vo2Max >  0) && (state.user.restingHR > 0)? (
                    <ReserveTable 
                        max={state.user.hrMax}
                        min={state.user.restingHR}
                        title='Percentage Of Heart Rate Reserve'
                        categories={{
                            vl : 30,
                            l : 39,
                            mo : 59,
                            h : 89,
                            max : 100
                        }}
                    />
                ) : <ReserveTable 
                        max={0} min={0} 
                        title='Percentage Of Heart Rate Reserve' 
                        categories={{
                            vl : 30,
                            l : 39,
                            mo : 59,
                            h : 89,
                            max : 100
                        }}/>}
            </section> */}
            <section id='one-rep-max'>
                <div>
                    <h2>Percent of 1 Rep Max Intensities</h2>
                    <ul>
                        <li>Very light: less than 30%</li>
                        <li>Light: 30% to 49%</li>
                        <li>Moderate: 50% to 69%</li>
                        <li>Vigorous: 70% to 84%</li>
                        <li>Near maximal to maximal: greater than 84%</li>
                    </ul>
                </div>

                    {state.user.benchPress?.benchPress ? (
                    <Percentages 
                        max={state.user.prefers_metric ? state.user.benchPress?.benchPress : Math.round(state.user.benchPress?.benchPress * 2.2 * 100) / 100}
                        title='Percentage Of 1RM Bench Press'
                        categories={{
                        vl : 30,
                        l : 49,
                        mo : 69,
                        h : 84,
                        max : 100
                        }}
                    />
                    ) : <Percentages 
                        max={0} 
                        title='Percentage Of 1RM Bench Press' 
                        categories={{
                        vl : 30,
                        l : 49,
                        mo : 69,
                        h : 84,
                        max : 100
                        }}
                    />}
                    {state.user.legPress?.legPress ? (
                    <Percentages 
                        max={state.user.prefers_metric ? state.user.legPress?.legPress : Math.round(state.user.legPress.legPress * 2.2 * 100) / 100}
                        title='Percentage Of 1RM Leg Press'
                        categories={{
                        vl : 30,
                        l : 49,
                        mo : 69,
                        h : 84,
                        max : 100
                        }}
                    />
                    ) : <Percentages 
                    max={0} 
                    title='Percentage Of 1RM Leg Press' 
                    categories={{
                        vl : 30,
                        l : 49,
                        mo : 69,
                        h : 84,
                        max : 100
                    }}
                    />} 
            </section>
        </article>


        </main>
    )
}

export default memo(RelativeIntensity);