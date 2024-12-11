import {memo} from "react"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <main>
            <h1>Home Page</h1>
            <article>

                <p>
                    Welcome to FitTest! Your app for exercise testing.
                </p>
                <p>
                    Whether you're a professional coach, physical therapist, or just curious about your fitness...
                </p>
                <p>
                    FitTest has all of the tests recommended for you!
                </p>
                <p>
                    To get started, fill out your demographic information. We'll be able to calculate basic health information and provide nutritional recommendations for micro and macro nutrients.
                </p>
                <p>
                    Then navigate to the fitness test options. Follow the instructions, record your results, and we will tell you how well you do compared to your peers.
                </p>
                <p>
                    The recommended order is: VO2 Max, flexibility, muscular strength, and then end with muscular endurance tests.
                </p>
            </article>
            <Link to='/parq'>Get Started</Link>
        </main>
    )
}

export default memo(Home)