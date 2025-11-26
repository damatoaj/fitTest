import { FormEvent, FormEventHandler, memo, useState, ChangeEvent, ChangeEventHandler } from 'react';
import { useUserContext } from '../../Hooks/useUserContext';

const convertMinAndSecToMin = (min : number, sec : number) => Math.round((min + sec / 60) * 100) / 100;
const calculateVo2From1Point5MileRun = (min : number) => 3.5 + 483 / min;
const calcVo2From12Min  = (m : number) => Math.round((m - 504.9) / 44.73 * 100) / 100;

const rockPort  = (mass: number, age:number, sex: string, minutes : number, h : number) => {
    const s : number= sex === 'MALE' ? 1 : 0;
    return 132.853 - (.1692 * mass) - (.3877 * age) + (6.315 * s) - (3.2649 * minutes) - (.1565 * h)
};

const sixMin = (meters: number, a: number, kg: number, cm: number, hr: number, sbp:number) => {
    return (.02 * meters) - (a * .191) - (.07 * kg) + (.09 * cm) + (.26 * (hr * sbp)**-3) + 2.45;
};


const FieldTests = () => {
    const { dispatch, state: { user } } = useUserContext()

    const [state, setState] = useState({
        min: '',
        sec: '',
        meters: '',
        rmin: '',
        rsec: '',
        rHR: '',
        sixHR : '',
        sixMeters: ''
    });

    const handleInput : ChangeEventHandler<HTMLInputElement> = (event:ChangeEvent) => {
        let n = event.target as HTMLInputElement;
        let {name, value} = event.target as HTMLInputElement;

        if (name === 'min') setState({...state, 'min' : value});
        if (name === 'sec') setState({...state, 'sec' : value});
        if (name === 'rmin') setState({...state, 'rmin' : value});
        if (name === 'rsec') setState({...state, 'rsec' : value});
        n.blur();
    };

    const handle15Submit : FormEventHandler<HTMLFormElement>= async(event : FormEvent) => {
        event.preventDefault();
                try {
            const t = user.vo2Max?.vo2Max;
            await dispatch({type: "UPDATE_VO2MAX", payload: calculateVo2From1Point5MileRun(convertMinAndSecToMin(parseInt(state.min), parseInt(state.sec)))});
            if (t && t !== user.vo2Max?.vo2Max) {
                dispatch({type:'ALERT', payload: {type:'success', message: 'V02 Max Updated'}});
                return true;
            } else if (!t && user.vo2Max) {
                dispatch({type:'ALERT', payload: {type:'success', message: 'V02 Max Added'}});
                return true
            } else if (t && t === user.vo2Max?.vo2Max) {
                dispatch({type:'ALERT', payload: {type:'success', message: 'V02 Max Value Stays The Same'}});
                return true
            } else if (!user.vo2Max) {
                throw new Error('Error Adding V02 Max')
            };
            return true;
        } catch (err: any) {
            console.error(err);
            const m = err.message;
            dispatch({type:'ALERT', payload: {type:'error', message: m}});
            return false;
        }
    };

    const handle12Submit : FormEventHandler<HTMLFormElement> = async (event : FormEvent) => {
        event.preventDefault();
        try {
            const t = user.vo2Max?.vo2Max;
            await dispatch({type: "UPDATE_VO2MAX", payload: calcVo2From12Min(parseInt(state.meters))});
            if (t && t !== user.vo2Max?.vo2Max) {
                dispatch({type:'ALERT', payload: {type:'success', message: 'V02 Max Updated'}});
                return true;
            } else if (!t && user.vo2Max) {
                dispatch({type:'ALERT', payload: {type:'success', message: 'V02 Max Added'}});
                return true
            } else if (t && t === user.vo2Max?.vo2Max) {
                dispatch({type:'ALERT', payload: {type:'success', message: 'V02 Max Value Stays The Same'}});
                return true
            } else if (!user.vo2Max) {
                throw new Error('Error Adding V02 Max')
            };
            return true;
        } catch (err: any) {
            console.error(err);
            const m = err.message;
            dispatch({type:'ALERT', payload: {type:'error', message: m}});
            return false;
        }
    };

    const handleSixSubmit : FormEventHandler<HTMLFormElement> = async(event : FormEvent) => {
        event.preventDefault();
        try {
            let t = user.vo2Max?.vo2Max;
            if (!user.age || !user.sex || !user.currentWeight || !user.height || !user.bloodPressure || !user.bloodPressure.sbp) throw new Error('Missing required user data')
            if (!state.sixHR || !state.sixMeters) throw new Error('Missing form inputs');
            await dispatch({type: "UPDATE_VO2MAX", payload: sixMin(parseInt(state.sixMeters), user.age, user.currentWeight, user.height, parseInt(state.sixHR) , user.bloodPressure?.sbp )});
            
            if (t && t !== user.vo2Max?.vo2Max) {
                dispatch({type:'ALERT', payload: {type:'success', message: 'V02 Max Updated'}});
                return true;
            } else if (!t && user.vo2Max) {
                dispatch({type:'ALERT', payload: {type:'success', message: 'V02 Max Added'}});
                return true
            } else if (t && t === user.vo2Max?.vo2Max) {
                dispatch({type:'ALERT', payload: {type:'success', message: 'V02 Max Value Stays The Same'}});
                return true
            } else if (!user.vo2Max) {
                throw new Error('Error Adding V02 Max')
            };
            return true
        } catch (err:any) {
            console.error(err);
            const m = err.message;
            dispatch({type:'ALERT', payload: {type:'error', message: m}});
            return false;
        };
    };

    const rockportSubmit : FormEventHandler<HTMLFormElement> = async (event: FormEvent) => {
        event.preventDefault();
        try {
            if (!user.currentWeight || !user.age || !user.sex) throw new Error('Missing User Data');
            let t = user.vo2Max?.vo2Max;

            await dispatch({type: "UPDATE_VO2MAX", payload: rockPort(user.currentWeight, user.age, user.sex, convertMinAndSecToMin(parseInt(state.rmin), parseInt(state.rsec)), parseInt(state.rHR))});
            
            if (t && t !== user.vo2Max?.vo2Max) {
                dispatch({type:'ALERT', payload: {type:'success', message: 'V02 Max Updated'}});
                return true;
            } else if (!t && user.vo2Max) {
                dispatch({type:'ALERT', payload: {type:'success', message: 'V02 Max Added'}});
                return true
            } else if (t && t === user.vo2Max?.vo2Max) {
                dispatch({type:'ALERT', payload: {type:'success', message: 'V02 Max Value Stays The Same'}});
                return true
            } else if (!user.vo2Max) {
                throw new Error('Error Adding V02 Max')
            };
            return true;
        } catch (err: any) {
            const m = err.message;
            console.error(err)
            dispatch({type:'ALERT', payload: {type:'error', message: m}});
            return false;
        };
    };

    const handleNumbersInput: ChangeEventHandler<HTMLInputElement> = (event:ChangeEvent) => {
        let {name, value} = event.target as HTMLInputElement;
        if (name === 'meters') setState({...state, 'meters' : value});
        if (name === 'sixMeters') setState({...state, 'sixMeters' : value});
        if (name === 'rHR') setState({...state, 'rHR' : value});
        if (name === 'sixHR') setState({...state, 'sixHR' : value});
    };

    return (
        <main>
            <datalist id='min'>
                <option value='0'/>
                <option value='1'/>
                <option value='2'/>
                <option value='3'/>
                <option value='4'/>
                <option value='5'/>
                <option value='6'/>
                <option value='7'/>
                <option value='8'/>
                <option value='9'/>
                <option value='11'/>
                <option value='12'/>
                <option value='13'/>
                <option value='14'/>
                <option value='15'/>
                <option value='16'/>
                <option value='17'/>
                <option value='18'/>
                <option value='19'/>
                <option value='20'/>
                <option value='21'/>
                <option value='22'/>
                <option value='23'/>
                <option value='24'/>
                <option value='25'/>
                <option value='26'/>
                <option value='27'/>
                <option value='28'/>
                <option value='29'/>
                <option value='30'/>
            </datalist>
            <datalist id='sec'>
                <option value='0'></option>
                <option value='1'/>
                <option value='2'/>
                <option value='3'/>
                <option value='4'/>
                <option value='5'/>
                <option value='6'/>
                <option value='7'/>
                <option value='8'/>
                <option value='9'/>
                <option value='11'/>
                <option value='12'/>
                <option value='13'/>
                <option value='14'/>
                <option value='15'/>
                <option value='16'/>
                <option value='17'/>
                <option value='18'/>
                <option value='19'/>
                <option value='20'/>
                <option value='21'/>
                <option value='22'/>
                <option value='23'/>
                <option value='24'/>
                <option value='25'/>
                <option value='26'/>
                <option value='27'/>
                <option value='28'/>
                <option value='29'/>
                <option value='30'/>
                <option value='31'/>
                <option value='32'/>
                <option value='33'/>
                <option value='34'/>
                <option value='35'/>
                <option value='36'/>
                <option value='37'/>
                <option value='38'/>
                <option value='39'/>
                <option value='40'/>
                <option value='41'/>
                <option value='42'/>
                <option value='43'/>
                <option value='44'/>
                <option value='45'/>
                <option value='46'/>
                <option value='47'/>
                <option value='48'/>
                <option value='49'/>
                <option value='50'/>
                <option value='51'/>
                <option value='52'/>
                <option value='53'/>
                <option value='54'/>
                <option value='55'/>
                <option value='56'/>
                <option value='57'/>
                <option value='58'/>
                <option value='59'/>
            </datalist>
            <h1>Field Tests For VO2 Max Testing</h1>
            <section id='run-walk-test'>
                <article>
                    <h2>1.5 Mile Run/Walk Test</h2>
                    <p>The objective of the test is to cover the distance of 1.5 miles (2.45 km) in as quick as a time as possible</p>
                    <p>With a stopwatch or clock, record the time it took below (in minutes)</p>
                    
                    <form onSubmit={handle15Submit}>
                        <fieldset>
                            <legend>Time To Complete 1.5 Mile (2.45km)</legend>
                            <span>
                                <span>
                                    <input list='min' name='min' onChange={handleInput} onFocus={(e)=> e.target.value = ''}/>
                                    <label>Minutes</label>
                                </span>
                                <span>
                                    <input list='sec' name='sec' onChange={handleInput} onFocus={(e)=> e.target.value=''}/>
                                    <label>Seconds</label>
                                </span>
                            </span>
                        </fieldset>
                        <span>
                            {
                                user.sex ? 
                                <button type='submit'>Submit</button> :
                                <p>Complete The Demographics Forms To Unlock</p>
                            }                        
                        </span>
                    </form>
                </article>
            </section>
            <section id='12-minute-test'>
                <article>
                    <h2>12 Minute Run/Walk Test</h2>
                    <p>The objective of the test is to cover the most distance as possible within 12 minutes</p>
                    <p>With a stopwatch or clock, walk or run as quickly as possible.</p>
                    <p>After the 12 minutes are up, records your distance in meters below</p>
                    
                    <form onSubmit={handle12Submit}>
                        <fieldset>
                            <legend>Distance Covered In 12 Minutes</legend>
                            <input 
                                placeholder="In meters"
                                type='number' 
                                name='meters' 
                                onChange={handleNumbersInput} 
                                onFocus={(e)=> e.target.value = ''}
                                min='0'
                                step={1}
                            />
                        </fieldset>
                        <span>
                            {
                                user.sex ? 
                                <button type='submit'>Submit</button> :
                                <p>Complete The Demographics Forms To Unlock</p>
                            }
                        </span>
                    </form>
                </article>
            </section>
            <section id='rockport-test'>
                <article>
                    <h2>Rockport One-Mile Walk Test</h2>
                    <p>The objective of the test is to cover the most distance as possible within 12 minutes</p>
                    <p>With a stopwatch or clock, walk or run as quickly as possible.</p>
                    <p>After the 12 minutes are up, records your distance in meters below</p>
                    
                    <form onSubmit={rockportSubmit}>
                        <fieldset>
                            <legend>Time To Complete 1 Mile (1.6km)</legend>
                            <span>
                                <span>
                                    <input list='min' name='rmin' onChange={handleInput} onFocus={(e)=> e.target.value = ''}/>
                                    <label>Minutes</label>
                                </span>
                                <span>
                                    <input list='sec' name='rsec' onChange={handleInput} onFocus={(e)=> e.target.value=''}/>
                                    <label>Seconds</label>
                                </span>
                            </span>
                        </fieldset>
                        <fieldset>
                            <legend>Heart Rate Obtained During The Final Minute</legend>
                            <span>
                                <span>
                                    <input 
                                        type='number'
                                        name='rHR' 
                                        onChange={handleNumbersInput} 
                                        onFocus={(e)=> e.target.value = ''}
                                        min='0'
                                        step={1}
                                    />
                                </span>
                            </span>
                        </fieldset>
                        <span>
                            {user.sex && user.currentWeight && user.age ?
                                <button type='submit'>Submit</button> :
                                <p>Complete The Demographics Forms To Unlock</p>
                            }
                        </span>
                    </form>
                </article>
            </section>
            <section id='6-min-test'>
                <article>
                    <h2>6 Minute Walk Test</h2>
                    <p>The objective of the test is to cover the most distance as possible within six minutes</p>
                    <p>With a stopwatch or clock, walk or run as quickly as possible.</p>
                    <p>After the six minutes are up, records your distance in meters below</p>
                    
                    <form onSubmit={handleSixSubmit}>
                        <fieldset>
                            <legend>Distance Cover in 6 Minutes</legend>
                            <input 
                                placeholder="In meters"
                                type='number' 
                                name='sixMeters' 
                                onChange={handleNumbersInput} 
                                onFocus={(e)=> e.target.value = ''}
                                min='0'
                                step={1}
                            />
                        </fieldset>
                        <fieldset>
                            <legend>Resting Heart Rate</legend>
                            <input 
                                placeholder="Taken While Seated Before The Test"
                                type='number' 
                                name='sixHR' 
                                onChange={handleNumbersInput} 
                                onFocus={(e)=> e.target.value = ''}
                                min='0'
                                step={1}
                            />
                        </fieldset>
                        <span>
                            {
                                user.sex && user.bloodPressure?.sbp ?
                                <button type='submit'>Submit</button> :
                                <p>Complete The Blood Pressure & Demographics Forms To Unlock</p>
                            }
                        </span>
                    </form>
                </article>
            </section>
        </main>
    )

};

export default memo(FieldTests);