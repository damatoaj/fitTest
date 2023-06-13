import { Link } from 'react-router-dom'
import {memo} from 'react'
import { navLinks } from '../Screens/Variables/navLinks'
const NavBar = () => {
    const links = navLinks.map((link) => {
        return (<li key={link.value}>
            <Link to={link.value}>{link.label}</Link>
        </li>
    )})
    return (
        <header>
            <ul>
                {links}
            </ul>
        </header>
    )
}

export default memo(NavBar)