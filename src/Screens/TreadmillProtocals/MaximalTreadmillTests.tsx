import { metsToVo2, rampProtocol, bruceProtocol, modifiedBruceProtocol, naughtonProtocol, modifiedNaughtonProtocol } from "../../Functions/Testing/cardioFitness";
import { useUserContext } from '../../Hooks/useUserContext';
import { FormEvent, FormEventHandler, ChangeEvent, useState, ChangeEventHandler } from "react";
import { Link } from "react-router-dom";
const b = [
    {stage : 1, grade:10, speed : 1.7},
    {stage : 2, grade:12, speed : 2.5},
    {stage : 3, grade:14, speed : 3.4},
    {stage : 4, grade:16, speed : 4.2},
    {stage : 5, grade:18, speed : 5.0},
    {stage : 6, grade:20, speed : 5.5},
    {stage : 7, grade:22, speed : 6.0}
];

const mb = [
    {stage : 1, grade:0, speed : 1.7},
    {stage : 2, grade:5, speed : 1.7},
    {stage : 3, grade:10, speed : 1.7},
    {stage : 4, grade:12, speed : 2.5},
    {stage : 5, grade:14, speed : 3.4},
    {stage : 6, grade:16, speed : 4.2},
    {stage : 7, grade:18, speed : 5.0},
    {stage : 8, grade:20, speed : 5.5},
    {stage : 9, grade:22, speed : 6}
];

const n = [
    {stage : 1, grade:0, speed : 1},
    {stage : 2, grade:0, speed : 2},
    {stage : 3, grade:3.5, speed : 2},
    {stage : 4, grade:7.0, speed : 2},
    {stage : 5, grade:10.5, speed : 2},
    {stage : 6, grade:14.0, speed : 2},
    {stage : 7, grade:17.5, speed : 2}
];

const mn = [
    {stage : 1, grade:0, speed : 1},
    {stage : 2, grade:0, speed : 1.5},
    {stage : 3, grade:3.5, speed : 2},
    {stage : 4, grade:7, speed : 2},
    {stage : 5, grade:10.5, speed : 2},
    {stage : 6, grade:7.5, speed : 3},
    {stage : 7, grade:10, speed : 3},
    {stage : 8, grade:12.5, speed : 3},
    {stage : 9, grade:15, speed : 3},
    {stage : 10, grade:17.5, speed : 3},
    {stage : 11, grade:20, speed : 3},
    {stage : 12, grade:22.5, speed : 3},
    {stage : 13, grade:25, speed : 3}
];

const r = [
    {stage : 1, grade:0, speed : .5},
    {stage : 2, grade:0, speed : 1},
    {stage : 3, grade:0, speed : 1.5},
    {stage : 4, grade:0, speed : 2},
    {stage : 5, grade:0, speed : 2.5},
    {stage : 6, grade:0, speed : 3},
    {stage : 7, grade:1, speed : 3},
    {stage : 8, grade:2, speed : 3},
    {stage : 9, grade:3, speed : 3},
    {stage : 10, grade:4, speed : 3},
    {stage : 11, grade:5, speed : 3},
    {stage : 12, grade:6, speed : 3},
    {stage : 13, grade:7, speed : 3},
    {stage : 14, grade:8, speed : 3},
    {stage : 15, grade:9, speed : 3},
    {stage : 16, grade:10, speed : 3},
    {stage : 17, grade:11, speed : 3},
    {stage : 18, grade:12, speed : 3},
    {stage : 19, grade:13, speed : 3},
    {stage : 20, grade:14, speed : 3},
    {stage : 21, grade:15, speed : 3},
    {stage : 22, grade:16, speed : 3},
    {stage : 23, grade:17, speed : 3},
    {stage : 24, grade:18, speed : 3},
    {stage : 25, grade:19, speed : 3},
    {stage : 26, grade:20, speed : 3},
    {stage : 27, grade:21, speed : 3},
    {stage : 28, grade:22, speed : 3},
    {stage : 29, grade:23, speed : 3},
    {stage : 30, grade:24, speed : 3},
    {stage : 31, grade:25, speed : 3}
];

const MaximalTreadmillTests = () => {
    const { dispatch, state: { user } } = useUserContext()
    const [state, setState] = useState({
        bruce : '',
        modifiedBruce: '',
        naughton : '',
        modifiedNaughton: '',
        ramp : ''
    });

    function row(arr : {
    stage: number;
    grade: number;
    speed: number;
}[]) { 
        return arr.map((a : {stage :number, grade : number, speed : number})=> {
        return <tr>
            <td>{a.stage}</td>
            <td>{a.grade}</td>
            <td>{a.speed}</td>
        </tr>
    })};

    const handleInput : ChangeEventHandler<HTMLInputElement> = (event:ChangeEvent) => {
            let n = event.target as HTMLInputElement;
            let {name, value} = event.target as HTMLInputElement;
    
            if (name === 'bruce') setState({...state, 'bruce' : value});
            if (name === 'modifiedBruce') setState({...state, 'modifiedBruce' : value});
            if (name === 'naughton') setState({...state, 'naughton' : value});
            if (name === 'modifiedNaughton') setState({...state, 'modifiedNaughton' : value});
            if (name === 'ramp') setState({...state, 'ramp' : value});

            n.blur();
        };

    const bruceSubmit : FormEventHandler<HTMLFormElement> = (event: FormEvent) => {
        event.preventDefault();
        try {
            if (!user.currentWeight || !user.age || !user.sex) throw new Error('Missing User Data');
            let m = parseInt(state.bruce) - 1;
            let b = bruceProtocol(m);
            let p = undefined;
            if (typeof b === 'number') {
                p = metsToVo2(b);
            };
            
            if (p) {
                dispatch({type: "UPDATE_VO2MAX", payload: p});
            };
            return setState({...state, bruce : ''});
        } catch (err) {
            console.error(err)
        }
    };

    const modBruceSubmit : FormEventHandler<HTMLFormElement> = (event: FormEvent) => {
        event.preventDefault();
        try {
            if (!user.currentWeight || !user.age || !user.sex) throw new Error('Missing User Data');
            let m = parseInt(state.modifiedBruce) - 1;
            let b = modifiedBruceProtocol(m);
            let p = undefined;
            if (typeof b === 'number') {
                p = metsToVo2(b);
            };
            
            if (p) {
                dispatch({type: "UPDATE_VO2MAX", payload: p});
            };
            return setState({...state, modifiedBruce : ''});
        } catch (err) {
            console.error(err)
        }
    };

        const naughtonSubmit : FormEventHandler<HTMLFormElement> = (event: FormEvent) => {
        event.preventDefault();
        try {
            if (!user.currentWeight || !user.age || !user.sex) throw new Error('Missing User Data');
            let m = parseInt(state.naughton) - 1;
            let b = naughtonProtocol(m);
            let p = undefined;
            if (typeof b === 'number') {
                p = metsToVo2(b);
            };
            
            if (p) {
                dispatch({type: "UPDATE_VO2MAX", payload: p});
            };
            return setState({...state, naughton : ''});
        } catch (err) {
            console.error(err)
        }
    };

        const modNaugthonSubmit : FormEventHandler<HTMLFormElement> = (event: FormEvent) => {
        event.preventDefault();
        try {
            if (!user.currentWeight || !user.age || !user.sex) throw new Error('Missing User Data');
            let m = parseInt(state.modifiedNaughton) - 1;
            let b = modifiedNaughtonProtocol(m);
            let p = undefined;
            if (typeof b === 'number') {
                p = metsToVo2(b);
            };
            
            if (p) {
                dispatch({type: "UPDATE_VO2MAX", payload: p});
            };
            return setState({...state, modifiedNaughton : ''});
        } catch (err) {
            console.error(err)
        }
    };

        const rampSubmit : FormEventHandler<HTMLFormElement> = (event: FormEvent) => {
        event.preventDefault();
        try {
            if (!user.currentWeight || !user.age || !user.sex) throw new Error('Missing User Data');
            let m = parseInt(state.bruce) - 1;
            let b = rampProtocol(m);
            let p = undefined;
            if (typeof b === 'number') {
                p = metsToVo2(b);
            };
            
            if (p) {
                dispatch({type: "UPDATE_VO2MAX", payload: p});
            };
            return setState({...state, ramp : ''});
        } catch (err) {
            console.error(err)
        }
    };
    return <main>
        <article>
            <h1>Teadmill Testing Protocols for V02 Max</h1>
            <p>The protocols below are maximal effort tests for measuring V02 Max</p>
            <p>In a laboratory setting you can get a direct measurement of your V02 Max by directly measuring how much oxygen you consume when you have reached exhaustion and cannot continue the tests.</p>
            <p>Outside of a laboratory, you can still get a rough estimation depending on which stage you finish in, because at that stage we can determine a rough MET value for the stage and then calculate how much oxygen you would have to consume at that workload</p>
            <p>
                Below are the five most popular tests: 
                <br></br>
                Bruce Protocols are for the most fit populations and those without physical limitations. The Ramp protocol is for folks with physical limitations or low fitness levels, and the Naughton protocols are for those in between.
                <br></br>
                Modified protocols may take longer but have more staages for greater accuracy and refinement
            </p>
            <h2>Safety Procedures</h2>
            <ul>
                <li>
                    <p>When performing maximal exertion tests, it is always a good idea to check with your doctor to verify that it is safe for you to do.</p>
                </li>
                <li>
                    <p>Performing a test with a spotter to help stop the treadmill of catch you if you slip is also a good idea</p>
                </li>
                <li>
                    Always use a treadmill with safety bars so that when you stop or slip, you can hold on to them for balance
                </li>
                
            </ul>
            <h2>Recording your score</h2>
            <ul>
                <li>
                    <p>Stage lengths, grade, and speed are displayed in the tables below</p>
                </li>
                <li>
                    <p>Set the treadmill to the appropriate grade and speed per stage, when you reach the point that you cannot continue, record the last stage you achieved at least 15 seconds in.</p>
                </li>
            </ul>

        </article>
        <form
            onSubmit={bruceSubmit}
        >
            <h2>Bruce Protocol</h2>
            <p>Each stage is three minutes long</p>
            <table>
                <thead>
                    <tr>
                        <th>
                            Stage
                        </th>
                        <th>
                            Grade
                        </th>
                        <th>
                            Speed
                        </th>
                    </tr>
                </thead>
                <tbody>
                {row(b)}
                </tbody>
            </table>
            <input 
                type='number' 
                min={1} 
                max={7}
                placeholder="Final stage achieved"
                name='bruce'
                value={state.bruce}
                onChange={handleInput}
            />
            <br></br>
            {user.currentWeight && user.age && user.sex ? 
            <button type='submit' disabled={state.bruce === '' ? true : false}>Submit</button> :
            <h3>Please fill out the <Link to='/parq'>Demographic Form</Link> before taking tests</h3>
            }
            
        </form>
        <form
            onSubmit={modBruceSubmit}
        >
            <h2>Modified Bruce Protocol</h2>
            <p>Each stage is three minutes long</p>
            <table>
                <thead>
                    <tr>
                        <th>
                            Stage
                        </th>
                        <th>
                            Grade
                        </th>
                        <th>
                            Speed
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {row(mb)}
                </tbody>
            </table>
            <input 
                type='number' 
                min={1} 
                max={9} 
                name='modifiedBruce'
                placeholder="Final stage achieved" 
                value={state.modifiedBruce}
                onChange={handleInput}
            />
            <br></br>
            {user.currentWeight && user.age && user.sex ? 
            <button type='submit' disabled={state.modifiedBruce === '' ? true : false}>Submit</button> :
            <h3>Please fill out the <Link to='/parq'>Demographic Form</Link> before taking tests</h3>
            }
        </form>
        <form onSubmit={naughtonSubmit}>
            <h2>Naughton Protocol</h2>
            <p>Each stage is two minutes long</p>
            <table>
                <thead>
                    <tr>
                        <th>
                            Stage
                        </th>
                        <th>
                            Grade
                        </th>
                        <th>
                            Speed
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {row(n)}
                </tbody>
            </table>
            <input 
                type='number' 
                min={1} 
                max={7}
                name='naughton'
                placeholder="Final stage achieved"
                value={state.naughton}
                onChange={handleInput}
            />
            <br></br>
            {user.currentWeight && user.age && user.sex ? 
            <button type='submit' disabled={state.naughton === '' ? true : false}>Submit</button> :
            <h3>Please fill out the <Link to='/parq'>Demographic Form</Link> before taking tests</h3>
            }
        </form>
        <form onSubmit={modNaugthonSubmit}>
            <h2>Modified Naughton Protocol</h2>
            <p>Each stage is two minutes long</p>
            <table>
                <thead>
                    <tr>
                        <th>
                            Stage
                        </th>
                        <th>
                            Grade
                        </th>
                        <th>
                            Speed
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {row(mn)}
                </tbody>
            </table>
            <input 
                type='number' 
                min={1}
                max={13} 
                name='modifiedNaughton'
                placeholder="Final stage achieved" 
                value={state.modifiedNaughton}
                onChange={handleInput}
            />
            <br></br>
            {user.currentWeight && user.age && user.sex ? 
            <button type='submit' disabled={state.modifiedNaughton === '' ? true : false}>Submit</button> :
            <h3>Please fill out the <Link to='/parq'>Demographic Form</Link> before taking tests</h3>
            }
        </form>
        <form onSubmit={rampSubmit}>
            <h2>Ramp Protocol</h2>
            <p>Each stage is 30 seconds long</p>
            <table>
                <thead>
                    <tr>
                        <th>
                            Stage
                        </th>
                        <th>
                            Grade
                        </th>
                        <th>
                            Speed
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {row(r)}
                </tbody>
            </table>
            <input 
                type='number' 
                min={1} 
                max={31} 
                name='ramp'
                placeholder="Final stage achieved"
                value={state.ramp}
                onChange={handleInput}
            />
            <br></br>
            {user.currentWeight && user.age && user.sex ? 
            <button type='submit' disabled={state.ramp === '' ? true : false}>Submit</button> :
            <h3>Please fill out the <Link to='/parq'>Demographic Form</Link>  before taking tests</h3>
            }
        </form>
    </main>
};

export default MaximalTreadmillTests;
