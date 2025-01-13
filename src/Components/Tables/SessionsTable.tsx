import { useState, memo, useEffect } from 'react';
import { getStoreData, initDB } from '../../indexedDB';
import { useUserContext } from '../../Hooks/useUserContext';
import Loader from '../Loader';

const SessionsTable = () => {
    const [sessions, setSessions]= useState<any[]>([]);
    const [dbReady, setDbReady] = useState<boolean>(false);
    const { state : {user} } = useUserContext();
    useEffect(() => {
        initDB(3)
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
        .catch((err)=> console.error(err))
    }, [])

    if (sessions.length === 0 && !dbReady) return (
        <Loader />
    )

    return (
            <table>
                <thead>
                    <tr><th colSpan={18}>Previous Sessions On This Browser</th></tr>
                    <tr>
                        <th>Time Stamp</th>
                        <th>Date (YYYY-MM-DD)</th>
                        <th>Name</th>
                        <th>Age (YRS)</th>
                        <th>Sex</th>
                        {user.prefers_metric ? <th>Height (CM)</th> : <th>Height (IN)</th>}
                        <th>Blood Pressure</th>
                        {user.prefers_metric ? <th>Current Weight (KG)</th> :<th>Current Weight (LBS)</th>} 
                        {user.prefers_metric ? <th>Goal Weight (KG)</th> : <th>Goal Weight (LBS)</th>}
                        <th>BMI</th>
                        {user.prefers_metric ? <th>Abdomen Circumference (CM)</th> : <th>Abdomen Circumference (IN)</th>}
                        {user.prefers_metric ? <th>Arm Circumference (CM)</th> : <th>Arm Circumference (IN)</th>}
                        {user.prefers_metric ? <th>Buttocks Circumference (CM)</th> : <th>Buttocks Circumference (IN)</th>}
                        {user.prefers_metric ? <th>Calf Circumference (CM)</th> : <th>Calf Circumference (IN)</th>}
                        {user.prefers_metric ? <th>Forearm Circumference (CM)</th> : <th>Forearm Circumference (IN)</th>}
                        {user.prefers_metric ? <th>Hip Circumference (CM)</th> : <th>Hip Circumference (IN)</th>}
                        {user.prefers_metric ? <th>Mid Thigh Circumference (CM)</th> : <th>Midthigh Circumference (IN)</th>}
                        {user.prefers_metric ? <th>Waist Circumference (CM)</th> : <th>Waist Circumference (IN)</th>}
                        <th>Max Heart Rate</th>
                        <th>Activity Level</th>
                        <th>VO2 Max</th>
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
                            {user.prefers_metric ? <td>{session.height || '-'}</td> : <td>{session.height / 2.54 || '-'}</td>}
                            <td>{session.systolic_blood_pressure && session.diastolic_blood_pressure ? `${session.systolic_blood_pressure} / ${session.diastolic_blood_pressure}` : '-'}</td>
                            {user.prefers_metric ? <td>{session.current_weight || '-'}</td> : <td>{session.current_weight * 2.2 || '-'}</td>}
                            {user.prefers_metric ? <td>{session.goal_weight || '-'}</td> : <td>{session.goal_weight * 2.2 || '-'}</td>}
                            <td>{session.bmi || '-'}</td>
                            {user.prefers_metric ? <td>{session.abdomen_circumference || '-'}</td> : <td>{session.abdomen_circumference / 2.54 || '-'}</td>}
                            {user.prefers_metric ? <td>{session.arm_circumference || '-'}</td> : <td>{session.arm_circumference / 2.54 || '-'}</td>}
                            {user.prefers_metric ? <td>{session.buttocks_circumference || '-'}</td> : <td>{session.buttocks_circumference / 2.54 || '-'}</td>}
                            {user.prefers_metric ? <td>{session.calf_circumference || '-'}</td> : <td>{session.calf_circumference / 2.54 || '-'}</td>}
                            {user.prefers_metric ? <td>{session.forearm_circumference || '-'}</td> : <td>{session.forearm_circumference / 2.54 || '-'}</td>}
                            {user.prefers_metric ? <td>{session.hips_circumference || '-'}</td> : <td>{session.hips_circumference / 2.54 || '-'}</td>}
                            {user.prefers_metric ? <td>{session.midthigh_circumference || '-'}</td> : <td>{session.midthigh_circumference / 2.54 || '-'}</td>}
                            {user.prefers_metric ? <td>{session.waist_circumference || '-'}</td> : <td>{session.waist_circumference / 2.54 || '-'}</td>}
                            <td>{session.max_heart_rate || '-'}</td>
                            <td>{session.activity_level || '-'}</td>
                            <td>{session.vo2_max || '-'}</td>
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