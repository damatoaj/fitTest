import {memo} from "react"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <main>
            <h1>Home Page</h1>
            <p>
                Welcome to Test! Your app for exercise testing.
            </p>
            <p>
                Whether you're a professional coach, physical therapist, or just curious about your fitness...
            </p>
            <p>
                Test has all of the tests recommended for you!
            </p>
            <Link to='/parq'>Get Started</Link>
        </main>
    )
}

export default memo(Home)