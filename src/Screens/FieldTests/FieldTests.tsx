import { FormEvent, FormEventHandler, memo, useState, ChangeEvent, ChangeEventHandler } from 'react';
import useForm from '../../Hooks/useForm';
import { ObjectType } from 'typescript';

const convertMinAndSecToMin  = (min : number, sec : number) => Math.round((min + sec / 60) * 100) / 100;
const calculateVo2From1Point5MileRun  = (min : number) => 3.5 + 483 / min;

const FieldTests = () => {
    const [state, setState] = useState({
        min: '',
        sec: '',
        meters: ''
    });

    const handleInput : ChangeEventHandler<HTMLInputElement> = (event:ChangeEvent) => {
        console.log(event)
        let n = event.target as HTMLInputElement;
        if (n.name === 'min') setState({...state, 'min' : n.value});
        if (n.name === 'sec') setState({...state, 'sec' : n.value});
        n.blur();
    }

    const handle15Submit : FormEventHandler<HTMLFormElement>= (event : FormEvent) => {
        event.preventDefault();
        return calculateVo2From1Point5MileRun(convertMinAndSecToMin(parseInt(state.min), parseInt(state.sec)))
    };
    return (
        <main>
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
                        </fieldset>
                        <span>
                            <button type='submit'>Submit</button>

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
                    
                    <form onSubmit={handle15Submit}>
                        <fieldset>
                            <legend>Distance Cover in 12 Minutes</legend>
                            <input 
                                placeholder="In meters"
                                type='number' 
                                name='meters' 
                                onChange={handleInput} 
                                onFocus={(e)=> e.target.value = ''}
                                min='0'
                            />
                        </fieldset>
                        <span>
                            <button type='submit'>Submit</button>
                        </span>
                    </form>
                </article>
            </section>
        </main>
    )

};

export default memo(FieldTests);