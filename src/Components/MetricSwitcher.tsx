import { memo } from 'react';
import useMetric from '../Hooks/useMetric';

const MetricSwitcher = () => {
    const { handleChangeMetric, metric } = useMetric();

    return (
        <fieldset id='metric-switcher'>
            <legend>Metric or Imperial?</legend>
            {metric === true ?
                <select name='prefers_metric' onChange={handleChangeMetric}>               
                <option value="true" defaultChecked={true}>Metric</option>
                <option value="false">Imperial</option>
            </select>
            :
            <select name='prefers_metric' onChange={handleChangeMetric}>               
                <option value="true">Metric</option>
                <option value="false" defaultChecked={true}>Imperial</option>
            </select>
            }

        </fieldset>
    )
};

export default memo(MetricSwitcher);