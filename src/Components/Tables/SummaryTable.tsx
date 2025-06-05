import { useUserContext } from "../../Hooks/useUserContext";
import StrengthTable from "./StrengthTable";
import PushupsTable from "./PushupsTable";
import MacrosTable from "./MacrosTable";
import MicrosTable from "./MicrosTable";
import BMITable from "./BMITable";
import { printTable } from "../../Functions/printTable";
import { addData } from "../../indexedDB";
import SARTable from "./SARTable";
import DemographicTable from "./DemographicTable";
import WaistTable from "./WaistTable";
import SkinFoldTable from "./SkinFoldTable";
import Vo2Maxtable from "./Vo2Maxtable";
const SummaryTable = () => {
    const { state } = useUserContext();
    const date : number = new Date().getDate();
    const month : number= new Date().getMonth();
    const year : number = new Date().getFullYear();
    const today : string = `${year}-${month}-${date}`;

    const handleSave = async () => {
        let u = state.user;
        let data = {
            'timestamp': Date.now(),
            'date' : today,
            'name' : u.fname + ' ' + u.lname,
            'age' : u.age,
            'sex' : u.sex,
            'height' : u.height,
            'current_weight': u.currentWeight,
            'goal_weight' : u.goalWeight,
            'activity_level' : u.activityLevel,
            'bmi' : u.bmi?.bmi ? u.bmi.bmi : null,
            'waist_circumference': u.waistCircumference?.wc ? u.waistCircumference.wc : null,
            'max_heart_rate': u.hrMax,
            'pushups' : u.pushups?.pushups ? u.pushups?.pushups : null,
            'grip_strength' : u.gripStrength?.gripStrength ? u.gripStrength?.gripStrength : null,
            'leg_press' : u.legPress?.legPress ? u.legPress.legPress : null,
            'bench_press' : u.benchPress?.benchPress ? u.benchPress.benchPress : null,
            'vo2_max' : u.vo2Max?.vo2Max ? u.vo2Max.vo2Max : null,
            'systolic_blood_pressure' : u.bloodPressure?.sbp ? u.bloodPressure?.sbp : null,
            'diastolic_blood_pressure' : u.bloodPressure?.dbp ? u.bloodPressure.dbp : null,
            'sit_and_reach' : u.sar?.value ? u.sar.value : null,
            'abdomen_circumference' : u.abdomenCircumference ? u.abdomenCircumference : null,
            'arm_circumference' : u.armCircumference ? u.armCircumference : null,
            'buttocks_circumference' : u.buttocksCircumference ? u.buttocksCircumference : null,
            'calf_circumference' : u.calfCircumference ? u.calfCircumference : null,
            'forearm_circumference' : u.forearmCircumference ? u.forearmCircumference : null,
            'hips_circumference' : u.hipsCircumference ? u.hipsCircumference : null,
            'midthigh_circumference' : u.midthighCircumference ? u.midthighCircumference : null,
            'abdominal_skin' : u.abdominalSkin ? u.abdominalSkin : null,
            'biceps_skin' : u.bicepSkin ? u.bicepSkin : null,
            'chest_skin' : u.chestSkin ? u.chestSkin : null,
            'calf_skin' : u.calfSkin ? u.calfSkin : null,
            'midaxillary_skin' : u.midaxillarySkin ? u.midaxillarySkin : null,
            'subscapular_skin' : u.subscapSkin ? u.subscapSkin : null,
            'suprailiac_skin' : u.supraIliacSkin ? u.supraIliacSkin : null,
            'thigh_skin' : u.thighSkin ? u.thighSkin : null,
            'triceps_skin' : u.tricepSkin ? u.tricepSkin : null,
        };
        try {
            await addData('sessions', data);
            let d : HTMLDialogElement | null = document.querySelector('dialog#confirmationModal');
            if (d !== null) d.close();
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <main >
            <h1>
                {state.user.fname ? `${state.user.fname} ${state.user.lname}'s ` : 'Your '}
                Fitness Summary on 
                <time dateTime={today}> {date}, {month}, {year}</time>
            </h1>
            <article>
            <section>
                <DemographicTable />
                <BMITable />
                <SkinFoldTable />
                <WaistTable />
            </section>
            <section>
                <h2>Muscular Strength & Endurance</h2>
                    <StrengthTable />
                    <PushupsTable />
                    <Vo2Maxtable />
            </section>
            <section>
                <h2>Flexibility</h2>
                <SARTable />
            </section>
            <section>
                <h2>Macro Nutrition Recommendations For Goal Weight</h2>
                <MacrosTable  macros={state.user.macros} />
            </section>
            <section>
                <h2>Micro Nutrition Recommendations From The FDA</h2>
                <MicrosTable  micros={state.user.micros}/> 
            </section>
            {state.user.fname === null && <h2>If you fill out the demographic forms, you can Save, Share, or Print your results here. </h2>}
            {state.user?.fname !== null && (
                <section>
                    <h3>Want to save your session to compare for next time?</h3>
                    <p>Clicking the "Save" button below will push your results into a cache that you can refer back to the next time you visit the site. That way, as long as you are using the same browser you can compare your previous performance to this session. You can view those results in the Previous Sessions tab.
                    </p>
                    <span>
                        <button type='button' onClick={()=> {
                            let d : HTMLDialogElement | null = document.querySelector('dialog#confirmationModal')

                            if (d !== null) d.showModal();
                            }}
                        >
                            {localStorage.getItem('mostRecentSession')?.includes('fname') ? 'Save This Session' : 'Update Most Recent Session'}
                        </button>
                        <button type='button' onClick={()=> {
                                let text : string = `Name: ${state.user.fname} ${state.user.lname}\nAge: ${state.user.age}\nHeight: ${state.user.height}"\nMax heart rate: ${state.user.hrMax} \nCurrent weight: ${state.user.currentWeight}`;

                                if  (state.user.goalWeight) {
                                    text = text.concat(`\nGoal weight: ${state.user.goalWeight}`)
                                };

                                if  (state.user.bmi) {
                                    text = text.concat(`\nBMI: ${state.user.bmi?.bmi}, ${state.user.bmi?.classification}`);
                                };
                                if  (state.user.bloodPressure) {
                                    text = text.concat(`\nBlood Pressure: ${state.user.bloodPressure.sbp}/${state.user.bloodPressure.dbp}, ${state.user.bloodPressure.classification}`)
                                };

                                if  (state.user.bodyDensity) {
                                    text = text.concat(`\nBody Density: ${state.user.bodyDensity}`);
                                };

                                if  (state.user.bodyComp) {
                                    text = text.concat(`\nBody Fat: ${state.user.bodyComp.percentage}; ${state.user.bodyComp.category}`);
                                };

                                if  (state.user.waistCircumference) {
                                    text = text.concat(`\nWaist Circumference: ${state.user.waistCircumference.wc}; ${state.user.waistCircumference.category}`);
                                };

                                if  (state.user.hrMax) {
                                    text = text.concat(`\nHeart Rate Max: ${state.user.hrMax}`);
                                };

                                if  (state.user.pushups) {
                                    text = text.concat(`\nUpper Body Endurance: ${state.user.pushups.pushups} pushups, ${state.user.pushups.category}`)
                                };

                                if  (state.user.benchPress) {
                                    text = text.concat(`\nUpper Body Strength: ${state.user.benchPress.benchPress}lbs, ${state.user.benchPress.category}`)
                                };

                                if  (state.user.legPress) {
                                    text = text.concat(`\nLower Body Strength: ${state.user.legPress.legPress}lbs, ${state.user.legPress.category}`)
                                };

                                if  (state.user.gripStrength) {
                                    text = text.concat(`\nGrip Strength: ${state.user.gripStrength.gripStrength}lbs, ${state.user.gripStrength.category}`)
                                };

                                if  (state.user.vo2Max) {
                                    text = text.concat(`\nCardiovascular Endurance: ${state.user.vo2Max.vo2Max}ml/o2, ${state.user.vo2Max.category}`)
                                };

                                if (state.user.sar) {
                                    text = text.concat(`\nLow Back/Hamstring Flexibility: ${state.user.sar.value}cm, ${state.user.sar.category}`)
                                };

                                console.log(text)
                                navigator.share({text})
                                .then((e) => {
                                    console.log(e)
                                })
                                .catch((err)=> {
                                    console.error(err)
                                })
                            }}>
                                Share Your Results!
                            </button>
                        <button 
                            type='button' 
                            onClick={async ()=> {
                                let d : HTMLDialogElement | null = document.querySelector('dialog#summary');
                                if (d !== null) {
                                    d.showModal();
                                    
                                    printTable('summary-table')
                                    d.close();
                                };
                            }}
                        >
                            Print Results
                        </button>
                    </span>
                    <dialog id='confirmationModal'>
                        <p>Are you sure? Clicking save add the session to the "Previous Sessions" table</p>
                        <span>
                            <button autoFocus type='submit' onClick={handleSave}>I'm sure</button>
                            <button 
                                type='button'
                                onClick={()=> {
                                    let d : HTMLDialogElement | null = document.querySelector('dialog#confirmationModal');
                                    if (d !== null) d.close();
                                }}
                            >
                                Close
                            </button>
                        </span>
                    </dialog>
                    <dialog id='summary'>
                        <section id='summary-table'>
                            <h1>Your Fitness Summary on 
                                <time dateTime={today}> {date}, {month}, {year}</time>
                            </h1>
                            <table>
                                <thead><tr><th colSpan={2}>Subject</th></tr></thead>
                                <tbody>
                                    <tr>
                                        <td>Name</td>
                                        <td>{`${state.user.fname} ${state.user.lname}`}</td>
                                    </tr>
                                    <tr>
                                        <td>Age</td>
                                        <td>{state.user.age}</td>
                                    </tr>
                                    <tr>
                                        <td>Height</td>
                                        <td>{state.user.height}</td>
                                    </tr>
                                    <tr>
                                        <td>Sex</td>
                                        <td>{state.user.sex}</td>
                                    </tr>
                                </tbody>
                            </table>
                            {state.user.hrMax && <table>
                                <thead>
                                    <tr>
                                        <th>
                                            <strong>Heart Rate Max</strong>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{state.user.hrMax}</td>
                                    </tr>
                                </tbody>
                            </table>}
                            {state.user.bloodPressure && <table>
                                <thead>
                                    <th>
                                        <strong>Blood Pressure</strong>
                                    </th>
                                </thead>
                                <tbody>
                                    <tr><td>Systolic / Diastolic Ratio</td><td>{state.user.bloodPressure.sbp}/{state.user.bloodPressure.dbp}</td></tr>
                                    <tr><td>BP Classification: </td><td>{state.user.bloodPressure.classification}</td></tr>
                                </tbody>
                            </table>}
                            {state.user.bmi?.classification && <BMITable />}
                            {(state.user.benchPress || state.user.legPress || state.user.gripStrength) && <StrengthTable />}
                            {state.user.pushups && <PushupsTable />}
                            {state.user.sar && <SARTable />}
                            {state.user.macros && <MacrosTable  macros={state.user.macros} />}
                            {state.user.micros && <MicrosTable  micros={state.user.micros}/>}
                        </section>
                    </dialog>
                </section>
            )}
            </article>
        </main>
    )
};

export default SummaryTable;