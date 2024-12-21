import useMetric from '../Hooks/useMetric';

type Props = {
    prefers_metric : Boolean
}

const MetricSwitcher = ({prefers_metric}:Props) => {
    const { handleChangeMetric } = useMetric();
    return (
        <fieldset id='metric-switcher'>
            <legend>Metric or Imperial?</legend>
            {prefers_metric === true ?
                <select key={Math.random()} name='prefers_metric' onChange={handleChangeMetric}>               
                <option value="true">Metric</option>
                <option value="false">Imperial</option>
            </select>
            :
            <select key={Math.random()} name='prefers_metric' onChange={handleChangeMetric}>               
                <option value="false">Imperial</option>
                <option value="true">Metric</option>
            </select>
            }

        </fieldset>
    )
};

export default MetricSwitcher;