import { Link } from 'react-router-dom'
import { User } from '../interfaces'
// import { navLinks } from '../Screens/Variables/navLinks'
import { useState, useEffect } from 'react'
interface NavBarProps {
    u: User
}


const NavBar = ({u} : NavBarProps) => {
    const [state, setState] = useState({
        userInfo: 'false',
        tests: 'false',
        muscularEndurance: 'false',
        muscularStrength: 'false',
        cardiovascularEndurance: 'false',
        flexibility : 'false',
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


    // const links = navLinks.map((link : L, i: number) => {
    //     let enabled : Boolean = true;
    //     link.dependencies.forEach((d : UserKeys)=> {
    //         if (u[d] === null || !Object.hasOwn(u,d)) {
    //             enabled = false
    //         }            
    //     })

    //     if (enabled) {
    //         return (<li key={i}>
    //             <Link to={link.value} >{link.label}</Link>
    //         </li>
    //     )} else {
    //         return (<li key={i} hidden>
    //             <Link to={link.value} >{link.label}</Link>
    //         </li>
    //     )}
    // })

    const handleNavigate = () => {
        if (window.innerWidth < 800) {
            setState({
                userInfo: 'false',
                tests: 'false',
                muscularEndurance: 'false',
                muscularStrength: 'false',
                cardiovascularEndurance: 'false',
                flexibility: 'false',
                showAll : 'false'
            });
        } else {
            setState({
                userInfo : 'false',
                tests: 'false',
                muscularEndurance: 'false',
                muscularStrength: 'false',
                cardiovascularEndurance: 'false',
                flexibility : 'false',
                showAll : 'true'
            });
        };
    };
   
    return (
        <header>
            <img src={require('../assets/fittest_logo_2.jpg')} className='logo' alt='Fit Test Logo'></img>
            <nav>
                <button 
                    data-showhamburger={showHamburger}
                    onClick={()=> state.showAll=== 'false' ? setState({...state, showAll : 'true'}) : setState({...state, showAll : 'false'})}
                >
                    Menu
                </button>
                <ul data-showall={state.showAll}>
                    <li className='light'>
                        <Link to='/' onClick={handleNavigate}>Home</Link>
                    </li>
                    <li className='subnav'>
                        <button 
                            className='link dark'
                            data-active={state.userInfo}
                            onClick={()=> state.userInfo === 'false' ? setState({...state, userInfo : 'true'}) : setState({...state, userInfo : 'false'})}

                        >
                            User Info
                        </button>
                        <ul>
                            <li className='light'>
                                <Link to='/parq' onClick={handleNavigate}>Demographics</Link>
                            </li>
                            <li className='dark'>
                                <Link to='/circumferences' onClick={handleNavigate}>Body Circumferences</Link>
                            </li>
                            <li className='light'>
                                <Link to='/blood-pressure' onClick={handleNavigate}>Blood Pressure</Link>
                            </li>
                            <li className='dark'>
                                <Link to='/skinfolds' onClick={handleNavigate}>Skinfold Sites</Link>
                            </li>
                        </ul>
                    </li>

                    <li className='subnav'>
                        <button 
                            className='link light' 
                            data-active={state.tests}
                            onClick={()=> state.tests === 'false' ? setState({...state, tests : 'true'}) : setState({...state, tests : 'false'})}
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
                                        <Link to='/pushups/instructions' onClick={handleNavigate}>Pushups</Link>
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
                                        <Link to='/bench-press/instructions' onClick={handleNavigate}>Bench Press</Link>
                                    </li>
                                    <li className='light'>
                                        <Link to='/grip-strength/instructions' onClick={handleNavigate}>Grip Strength</Link>
                                    </li>
                                    <li className='dark'>
                                        <Link to='/leg-press/instructions' onClick={handleNavigate}>Leg Press</Link>
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
                                        <Link to='/step-test/instructions' onClick={handleNavigate}>McArdle Step Test</Link>
                                    </li>
                                    <li className='dark'>
                                        <Link to='/field-tests' onClick={handleNavigate}>Field Tests</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className='sub-subnav'>
                                <button 
                                    // type="und" 
                                    className='link light' 
                                    data-active={state.flexibility}
                                    onClick={()=> state.flexibility === 'false' ? setState({...state, flexibility : 'true'}) : setState({...state, flexibility : 'false'})}
                                >
                                    Flexibility
                                </button>
                                <ul>
                                    <li className='dark'>
                                        <Link to='/sit-and-reach/instructions' onClick={handleNavigate}>Sit & Reach Test</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className='dark'>
                        <Link to='/current-session' onClick={handleNavigate}>Current Session</Link>
                    </li>
                    <li className='light'>
                        <Link to='/sessions' onClick={handleNavigate}>Past Sessions</Link>
                    </li>
                    <li className='dark'>
                        <Link to='/categories' onClick={handleNavigate}>Fitness Categories</Link>
                    </li>
                    <li className='light'>
                        <Link to='/relative-intensity' onClick={handleNavigate}>Exercise Intensity</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar