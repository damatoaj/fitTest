import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to='/nutrition'>Nutrition</Link>
                </li>
                <li>
                    <Link to='/strength'>Strength</Link>
                </li>
                <li>
                    <Link to='/endurance'>Endurance</Link>
                </li>
                <li>
                    <Link to='/health'>Health</Link>
                </li>
            </ul>
        </header>
    )
};

export default NavBar;