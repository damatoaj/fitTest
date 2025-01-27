import useMetric from '../Hooks/useMetric';
import { useUserContext } from '../Hooks/useUserContext';

const MetricSwitcher = () => {
    const { handleChangeMetric } = useMetric();
    const { state } = useUserContext();
    return (
        <aside id='metric-switcher'>
            <fieldset>
                <legend>Metric or Imperial?</legend>
                {state.user.prefers_metric === true ?
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

        </aside>
    )
};

export default MetricSwitcher;