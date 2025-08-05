import { useState, memo, useEffect } from 'react';
import { getStoreData, initDB } from '../../indexedDB';
import { useUserContext } from '../../Hooks/useUserContext';
import Loader from '../Loader';

const SessionsTable = () => {
    const [sessions, setSessions]= useState<any[]>([]);
    const [dbReady, setDbReady] = useState<boolean>(false);
    const { state : {user} } = useUserContext();
    let version = 7;

    useEffect(() => {
        initDB(version)
        .then((e)=> {
            console.log(e, '<--- initDb complete')
            if (e === true) {
                getStoreData('sessions')
                .then((s) => {
                    if (s.length > 0) {
                        setSessions(s)
                    }
                    setDbReady(true);
                })
                .catch((err) => {
                    console.warn(err);
                    setDbReady(true);
                })
            } else {
                throw new Error('Init Not complete')
            }
        })
        .catch((err)=> {
            console.error(err);
            alert(err);
            setDbReady(true);
        })
    }, [version])

    if (sessions.length === 0 && !dbReady) return (
        <Loader />
    )

    return (
            <table>
                <thead>
                    <tr><th colSpan={30}>Previous Sessions On This Browser</th></tr>
                    <tr>
                        <th colSpan={2}></th>
                        <th colSpan={4}>Demographics</th>
                        <th colSpan={5}>Body Composition</th>
                        <th colSpan={8}>Body Circumferences</th>
                        <th colSpan={6}>Heart & Cardio Related</th>
                        <th colSpan={1}>Musc Endurance</th>
                        <th colSpan={3}>Muscular Strength</th>
                        <th colSpan={1}>Flexibility</th>


                    </tr>
                    <tr>
                        <th>Time Stamp</th>
                        <th>Date (YYYY-MM-DD)</th>

                        <th>Name</th>
                        <th>Age (YRS)</th>
                        <th>Sex</th>
                        <th>Activity Level</th>


                        {user.prefers_metric ? <th>Height (CM)</th> : <th>Height (IN)</th>}
                        {user.prefers_metric ? <th>Current Weight (KG)</th> :<th>Current Weight (LBS)</th>} 
                        {user.prefers_metric ? <th>Goal Weight (KG)</th> : <th>Goal Weight (LBS)</th>}
                        <th>BMI</th>
                        <th>Body Fat Percentage</th>
                        {user.prefers_metric ? <th>Abdomen Circumference (CM)</th> : <th>Abdomen Circumference (IN)</th>}
                        {user.prefers_metric ? <th>Arm Circumference (CM)</th> : <th>Arm Circumference (IN)</th>}
                        {user.prefers_metric ? <th>Buttocks Circumference (CM)</th> : <th>Buttocks Circumference (IN)</th>}
                        {user.prefers_metric ? <th>Calf Circumference (CM)</th> : <th>Calf Circumference (IN)</th>}
                        {user.prefers_metric ? <th>Forearm Circumference (CM)</th> : <th>Forearm Circumference (IN)</th>}
                        {user.prefers_metric ? <th>Hip Circumference (CM)</th> : <th>Hip Circumference (IN)</th>}
                        {user.prefers_metric ? <th>Mid Thigh Circumference (CM)</th> : <th>Midthigh Circumference (IN)</th>}
                        {user.prefers_metric ? <th>Waist Circumference (CM)</th> : <th>Waist Circumference (IN)</th>}

                        <th>Resting Heart Rate</th>
                        <th>Max Heart Rate</th>
                        <th>Resting VO2 Uptake (ml/minute)</th>
                        <th>Maximal O2 Uptake (ml/minute)</th>
                        <th>VO2 Max (ml/kg/min)</th>
                        <th>Blood Pressure</th>

                        
                        <th>Pushups</th>
                        
                        {user.prefers_metric ? <th>Bench Press (KG)</th> : <th>Bench Press (LBS)</th> }
                        {user.prefers_metric  ? <th>Leg Press (KG)</th> : <th>Leg Press (LBS)</th>}
                        {user.prefers_metric ? <th>Grip Strength (KG)</th> : <th>Grip Strength (LBS)</th>}
                        {user.prefers_metric ? <th>Sit & Reach (CM)</th> : <th>Sit & Reach (IN)</th>}
                    </tr>
                </thead>
                <tbody>
                    {sessions.map((session, i) => {
                        return (<tr key={i}>
                            <td>{session.timestamp || '-'}</td>
                            <td>{session.date || '-'}</td>

                            <td>{session.name || '-'}</td>
                            <td>{session.age || '-'}</td>
                            <td>{session.sex || '-'}</td>
                            <td>{session.activity_level || '-'}</td>

                            {user.prefers_metric ? <td>{session.height || '-'}</td> : <td>{session.height / 2.54 || '-'}</td>}
                            {user.prefers_metric ? <td>{session.current_weight || '-'}</td> : <td>{session.current_weight * 2.2 || '-'}</td>}
                            {user.prefers_metric ? <td>{session.goal_weight || '-'}</td> : <td>{session.goal_weight * 2.2 || '-'}</td>}
                            <td>{session.bmi || '-'}</td>
                            <td>-</td>

                            {user.prefers_metric ? <td>{session.abdomen_circumference || '-'}</td> : <td>{session.abdomen_circumference / 2.54 || '-'}</td>}
                            {user.prefers_metric ? <td>{session.arm_circumference || '-'}</td> : <td>{session.arm_circumference / 2.54 || '-'}</td>}
                            {user.prefers_metric ? <td>{session.buttocks_circumference || '-'}</td> : <td>{session.buttocks_circumference / 2.54 || '-'}</td>}
                            {user.prefers_metric ? <td>{session.calf_circumference || '-'}</td> : <td>{session.calf_circumference / 2.54 || '-'}</td>}
                            {user.prefers_metric ? <td>{session.forearm_circumference || '-'}</td> : <td>{session.forearm_circumference / 2.54 || '-'}</td>}
                            {user.prefers_metric ? <td>{session.hips_circumference || '-'}</td> : <td>{session.hips_circumference / 2.54 || '-'}</td>}
                            {user.prefers_metric ? <td>{session.midthigh_circumference || '-'}</td> : <td>{session.midthigh_circumference / 2.54 || '-'}</td>}
                            {user.prefers_metric ? <td>{session.waist_circumference || '-'}</td> : <td>{session.waist_circumference / 2.54 || '-'}</td>}

                            <td>{session.resting_heart_rate || '-'}</td>
                            <td>{session.max_heart_rate || '-'}</td>
                            <td>{session.current_weight ? Math.round(session.current_weight * 3.5 * 100) / 100 : '-'}</td>
                            <td>{session.current_weight && session.vo2_max ? Math.round(session.current_weight * session.vo2_max * 100) / 100 : '-'}</td>
                            <td>{session.vo2_max || '-'}</td>
                            <td>{session.systolic_blood_pressure && session.diastolic_blood_pressure ? `${session.systolic_blood_pressure} / ${session.diastolic_blood_pressure}` : '-'}</td>
                            
                            <td>{session.pushups || '-'}</td>

                            {user.prefers_metric ? <td>{session.bench_press || '-'}</td> : <td>{session.bench_press * 2.2 || '-'}</td>}
                            {user.prefers_metric ? <td>{session.leg_press || '-'}</td> : <td>{session.leg_press * 2.2|| '-'}</td>}
                            {user.prefers_metric ? <td>{session.grip_strength || '-'}</td> : <td>{session.grip_strength * 2.2 || '-'}</td>}

                            {user.prefers_metric ? <td>{session.sit_and_reach || '-'}</td> : <td>{session.sit_and_reach / 2.54 || '-'}</td>}
                        </tr>
                    )})}
                </tbody>
            </table>
    ); 
};

export default memo(SessionsTable);