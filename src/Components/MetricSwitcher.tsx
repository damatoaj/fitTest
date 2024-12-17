import { memo } from 'react';
import useMetric from '../Hooks/useMetric';

const MetricSwitcher = () => {
    const { handleChangeMetric } = useMetric();

    return (
        <fieldset>
            <legend>Do you prefer metric or imperial?</legend>
            <select name='prefers_metric' onChange={handleChangeMetric}>
                <option value="true" defaultChecked={true}>Metric</option>
                <option value="false">Imperial</option>
            </select>
        </fieldset>
    )
};

export default memo(MetricSwitcher);