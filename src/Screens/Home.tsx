import {memo} from "react"
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <main>
            <article>
                <h1> Welcome to Fit Tests!</h1>
                <p>
                 Your app for exercise testing.
                </p>
                <p>
                    Whether you're a professional coach, physical therapist, or just curious about your fitness...
                </p>
                <p>
                    FitTests has all of the tests recommended for you!
                </p>
                <p>
                    To get started, fill out your demographic information. We'll be able to calculate basic health information and provide nutritional recommendations for micro and macro nutrients.
                </p>
                <p>
                    Then navigate to the fitness test options. Follow the instructions, record your results, and we will tell you how well you do compared to your peers.
                </p>
                <p>
                    As you fill out the forms, your results will be visible in the Current Session tab, and you can Save, Share, or Print your results!
                </p>
                <p>
                    The recommended order is: VO2 Max, flexibility, muscular strength, and then end with muscular endurance tests.
                </p>

                <p>
                    Feel like you need assistance taking these tests? Try reaching out to a 
                    <a 
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.ecosia.org/search?addon=opensearch&addonversion=7.1.0&q=personal+trainers+near+me'>
                        personal trainer
                    </a>,
                    <a 
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.ecosia.org/search?addon=opensearch&addonversion=7.1.0&q=exercise+physiologist+near+me'>
                        exercise physiologist
                    </a>,
                    or
                    <a 
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.ecosia.org/search?addon=opensearch&addonversion=7.1.0&q=strength+and+conditioning+coach+near+me'>
                        strength & conditioning coach
                    </a>
                </p>
                <p>
                    Otherwise, click the link below to start
                </p>
                <p>
                    <Link to='/parq' style={{textAlign:'center'}}>Get Started</Link>
                </p>
            </article>
        </main>
    )
}

export default memo(Home)