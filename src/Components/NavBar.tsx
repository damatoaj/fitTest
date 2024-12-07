import { Link } from 'react-router-dom'
import { User, UserKeys, Link as L } from '../interfaces'
import { navLinks } from '../Screens/Variables/navLinks'
import { useState, useEffect } from 'react'
interface NavBarProps {
    u: User
}


const NavBar = ({u} : NavBarProps) => {
    const [state, setState] = useState({
        tests: 'false',
        muscularEndurance: 'false',
        muscularStrength: 'false',
        cardiovascularEndurance: 'false',
        showAll : window.innerWidth < 800 ? 'false' : 'true'
    });

    const [showHamburger, setShowHamburger]= useState<boolean>(window.innerWidth > 800 ? false : true);
        
    
    useEffect(()=> {
        function handleHamburger() {
            if (window.innerWidth > 800) {
                setShowHamburger(false);
            } else {
                setShowHamburger(true);
            };
        }
        window.addEventListener('resize', handleHamburger);
        return ()=> window.removeEventListener('resize', handleHamburger);
        
    }, [])


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

    const handleNavigate = () => {
        if (window.innerWidth < 800) {
            setState({
                tests: 'false',
                muscularEndurance: 'false',
                muscularStrength: 'false',
                cardiovascularEndurance: 'false',
                showAll : 'false'
            });
        } else {
            setState({
                tests: 'false',
                muscularEndurance: 'false',
                muscularStrength: 'false',
                cardiovascularEndurance: 'false',
                showAll : 'true'
            });
        };
    };
   
    return (
        <nav>
            <button 
                data-showhamburger={showHamburger}
                onClick={()=> state.showAll=== 'false' ? setState({...state, showAll : 'true'}) : setState({...state, showAll : 'false'})}
            >
                Menu
            </button>
            <ul data-showall={state.showAll}>
                <li className='light'>
                    <Link to='/fitTest/' onClick={handleNavigate}>Home</Link>
                </li>
                <li className='dark'>
                    <Link to='/fitTest/parq' onClick={handleNavigate}>Demographics</Link>
                </li>
                {/* <li className='light'>
                    <Link to='/nutrition' onClick={handleNavigate}>Nutrition</Link>
                </li> */}
                {/* <li className='dark'>
                    <Link to='/equipment' onClick={handleNavigate}>Equipment</Link>
                </li> */}
                <li className='subnav'>
                    <button 
                        // type="button" 
                        className='link light' 
                        data-active={state.tests}
                        onClick={()=> state.tests=== 'false' ? setState({...state, tests : 'true'}) : setState({...state, tests : 'false'})}
                    >
                        Tests
                    </button>
                    <ul data-active='false'>
                        <li className='sub-subnav'>
                            <button 
                                // type="button" 
                                className='link dark' 
                                data-active={state.muscularEndurance}
                                onClick={()=> state.muscularEndurance === 'false' ? setState({...state, muscularEndurance : 'true'}) : setState({...state, muscularEndurance : 'false'})}
                            >
                                Muscular Endurance
                            </button>
                            <ul>
                                <li className='light'>
                                    <Link to='/fitTest/pushups/instructions' onClick={handleNavigate}>Pushups</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='sub-subnav'>
                            <button 
                                className='link light' 
                                // type='button'
                                data-active={state.muscularStrength}
                                onClick={()=> state.muscularStrength === 'false' ? setState({...state, muscularStrength : 'true'}) : setState({...state, muscularStrength : 'false'})}

                            >
                                Muscular Strength
                            </button>
                            <ul>
                                <li className='dark'>
                                    <Link to='/fitTest/bench-press/instructions' onClick={handleNavigate}>Bench Press</Link>
                                </li>
                                <li className='light'>
                                    <Link to='/fitTest/grip-strength/instructions' onClick={handleNavigate}>Grip Strength</Link>
                                </li>
                                <li className='dark'>
                                    <Link to='/fitTest/leg-press/instructions' onClick={handleNavigate}>Leg Press</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='sub-subnav'>
                            <button 
                                // type="und" 
                                className='link dark' 
                                data-active={state.cardiovascularEndurance}
                                onClick={()=> state.cardiovascularEndurance === 'false' ? setState({...state, cardiovascularEndurance : 'true'}) : setState({...state, cardiovascularEndurance : 'false'})}
                            >
                                Cardiovascular Endurance
                            </button>
                            <ul>
                                <li className='light'>
                                    <Link to='/fitTest/step-test/instructions' onClick={handleNavigate}>McArdle Step Test</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className='dark'>
                    <Link to='/fitTest/summary' onClick={handleNavigate}>Summary</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar