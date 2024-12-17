import { memo } from 'react';
import useMetric from '../Hooks/useMetric';
import { useUserContext } from '../Hooks/useUserContext';
const MetricSwitcher = () => {
    const { handleChangeMetric } = useMetric();
    const { state : {user } } = useUserContext()
    return (
        <fieldset id='metric-switcher'>
            <legend>Metric or Imperial?</legend>
            {user.prefers_metric === true ?
                <select name='prefers_metric' onChange={handleChangeMetric}>               
                <option value="true" defaultChecked={true}>Metric</option>
                <option value="false">Imperial</option>
            </select>
            :
            <select name='prefers_metric' onChange={handleChangeMetric}>               
                <option value="false" defaultChecked={true}>Imperial</option>
                <option value="true">Metric</option>
            </select>
            }

        </fieldset>
    )
};

export default memo(MetricSwitcher);