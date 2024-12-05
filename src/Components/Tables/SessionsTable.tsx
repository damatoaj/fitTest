import { useState, memo, useEffect } from 'react';
import { getStoreData, initDB } from '../../indexedDB';
import Loader from '../Loader';

const SessionsTable = () => {
    const [sessions, setSessions]= useState<any[]>([]);
    const [dbReady, setDbReady] = useState<boolean>(false);
    
    // const handleGetSessions = async () => {
    //     console.log('handleGetSessions')
    //     await initDB(1)
    //     const s  = await getStoreData('sessions');
    //     console.table(s)
    //     if (s.length && s.length > 0) {
    //         setSessions(s);
    //     }
    // };

    useEffect(() => {
        initDB(1)
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
                        <th>Date</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>Height</th>
                        <th>Blood Pressure</th>
                        <th>Current Weight</th>
                        <th>Goal Weight</th>
                        <th>BMI</th>
                        <th>Waist Circumference</th>
                        <th>Max Heart Rate</th>
                        <th>Activity Level</th>
                        <th>VO2 Max</th>
                        <th>Pushups</th>
                        <th>Bench Press</th>
                        <th>Leg Press</th>
                        <th>Grip Strength</th>
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
                            <td>{session.height || '-'}</td>
                            <td>{session.systolic_blood_pressure && session.diastolic_blood_pressure ? `${session.systolic_blood_pressure} / ${session.diastolic_blood_pressure}` : '-'}</td>
                            <td>{session.current_weight || '-'}</td>
                            <td>{session.goal_weight || '-'}</td>
                            <td>{session.bmi || '-'}</td>
                            <td>{session.waist_circumference || '-'}</td>
                            <td>{session.max_heart_rate || '-'}</td>
                            <td>{session.activity_level || '-'}</td>
                            <td>{session.vo2_max || '-'}</td>
                            <td>{session.pushups || '-'}</td>
                            <td>{session.bench_press || '-'}</td>
                            <td>{session.leg_press || '-'}</td>
                            <td>{session.grip_strength || '-'}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
    ); 
};

export default memo(SessionsTable);