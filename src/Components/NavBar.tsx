import { Link } from 'react-router-dom'
import { User, UserKeys, Link as L } from '../interfaces'
import { navLinks } from '../Screens/Variables/navLinks'

interface NavBarProps {
    u: User
}


const NavBar = ({u} : NavBarProps) => {
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
        <header>
            <menu>
                {links}
            </menu>
        </header>
    )
}

export default NavBar