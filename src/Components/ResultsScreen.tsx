import { ReactNode, memo } from 'react'
import { useUserContext } from '../Hooks/useUserContext'
import Loader from './Loader'
import Error from './Error'
type Props = {
    title : any;
    form : ReactNode;
    test: 'pushups' | 'legPress' | 'benchPress' | 'gripStrength' | 'vo2Max' | 'sar';
}
function ResultsScreen({title, test, form} : Props) {
    const { state : {user, error, isLoading} } = useUserContext()

    if (isLoading) {
        <Loader />
    }

    if (error) {
        <Error message={error} />
    }
    return (
    <main>
        <h1>{title}</h1>
        {form}
        {user[test] && <article>
            <h2 data-category={user[test]?.category}>You are in the "<output name={test}>{user[test]?.category}</output>" category</h2>
            <p>Your next steps are now...</p>
            <ul>
                <li>Move on to your next test in the session</li>
                <li>Checkout out how you compare to others in your cohort in the "Fitness Categories" tab</li>
                <li>Share, print, or save your results in the "Current Session" tab.</li>
            </ul>
        </article>}
    </main>
    )
}

export default memo(ResultsScreen)