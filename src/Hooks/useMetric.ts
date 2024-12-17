import { useUserContext } from './useUserContext';
import { ChangeEvent } from 'react';
const useMetric = () => {
    const { dispatch } = useUserContext()

    const handleChangeMetric = (e : ChangeEvent<HTMLSelectElement>) => {
        dispatch({type: 'UPDATE_METRIC', payload: e.target.value === 'true' ? true : false });
    };
    return {handleChangeMetric};
};

export default useMetric;