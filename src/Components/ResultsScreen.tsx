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
        {user[test] && <h2 data-category={user[test]?.category}>You are in the "<output name={test}>{user[test]?.category}</output>" category</h2>}
    </main>
    )
}

export default memo(ResultsScreen)