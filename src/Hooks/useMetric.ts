import { useUserContext } from './useUserContext';
import { ChangeEvent, useState } from 'react';
const useMetric = () => {
    const [metric, setMetric] = useState<Boolean>(true);
    const { dispatch } = useUserContext()

    const handleChangeMetric = (e : ChangeEvent<HTMLSelectElement>) => {
        dispatch({type: 'UPDATE_METRIC', payload: e.target.value === 'true' ? true : false });
        if (e.target.value === 'true') {
            setMetric(true)
        } else {
            setMetric(false)
        };

    };
    return {handleChangeMetric, metric};
};

export default useMetric;