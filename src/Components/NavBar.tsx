import { Link } from 'react-router-dom'
import { User, UserKeys, Link as L } from '../interfaces'
import { navLinks, sub } from '../Screens/Variables/navLinks'
import { useState } from 'react'
interface NavBarProps {
    u: User
}


const NavBar = ({u} : NavBarProps) => {
    const [state, setState] = useState({
        tests: 'false',
        muscularEndurance: 'false',
        muscularStrength: 'false',
        cardiovascularEndurance: 'false'
    });

    const links = navLinks.map((link : L, i: number) => {
        let enabled : Boolean = true;
        link.dependencies.forEach((d : UserKeys)=> {
            if (u[d] === null || !Object.hasOwn(u,d)) {
                enabled = false
            }            
        })

        if (enabled) {
            return (<li key={i}>
                <Link to={link.value} >{link.label}</Link>
            </li>
        )} else {
            return (<li key={i} hidden>
                <Link to={link.value} >{link.label}</Link>
            </li>
        )}
    })

   
    return (
        <nav>
            <ul>
                <li className='light'>
                    <Link to='/' >Home</Link>
                </li>
                <li className='dark'>
                    <Link to='/parq'>Par-Q</Link>
                </li>
                <li className='light'>
                    <Link to='/nutrition'>Nutrition</Link>
                </li>
                <li className='dark'>
                    <Link to='/equipment'>Equipment</Link>
                </li>
                <li className='subnav'>
                    <button 
                        type="button" 
                        className='link light' 
                        data-active={state.tests}
                        onClick={()=> state.tests=== 'false' ? setState({...state, tests : 'true'}) : setState({...state, tests : 'false'})}
                    >
                        Tests
                    </button>
                    <ul data-active='false'>
                        <li className='sub-subnav'>
                            <button 
                                type="button" 
                                className='link dark' 
                                data-active={state.muscularEndurance}
                                onClick={()=> state.muscularEndurance === 'false' ? setState({...state, muscularEndurance : 'true'}) : setState({...state, muscularEndurance : 'false'})}
                            >
                                Muscular Endurance
                            </button>
                            <ul>
                                <li className='light'>
                                    <Link to='/pushups/instructions'>Pushups</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='sub-subnav'>
                            <button 
                                className='link light' 
                                type='button'
                                data-active={state.muscularStrength}
                                onClick={()=> state.muscularStrength === 'false' ? setState({...state, muscularStrength : 'true'}) : setState({...state, muscularStrength : 'false'})}

                            >
                                Muscular Strength
                            </button>
                            <ul>
                                <li className='dark'>
                                    <Link to='/bench-press/instructions'>Bench Press</Link>
                                </li>
                                <li className='light'>
                                    <Link to='/grip-strength/instructions'>Grip Strength</Link>
                                </li>
                                <li className='dark'>
                                    <Link to='/leg-press/instructions'>Leg Press</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='sub-subnav'>
                            <button 
                                type="button" 
                                className='link dark' 
                                data-active={state.cardiovascularEndurance}
                                onClick={()=> state.cardiovascularEndurance === 'false' ? setState({...state, cardiovascularEndurance : 'true'}) : setState({...state, cardiovascularEndurance : 'false'})}
                            >
                                Cardiovascular Endurance
                            </button>
                            <ul>
                                <li className='light'>
                                    <Link to='/step-test/instructions'>McArdle Step Test</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar