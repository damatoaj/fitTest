import { useSearchParams } from "react-router-dom";

const StrengthTable = () => {
    const [searchParams] = useSearchParams()
    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Leg Press Ratio</th>
                    <th>Bench Press Ratio</th>
                    <th>Grip Strength</th>
                </tr>
                <tr>
                    <th>Results: </th>
                    <th>{searchParams.get('legPressRatio')}</th>
                    <th>{searchParams.get('benchPressRatio')}</th>
                    <th>{searchParams.get('gripStrength')}</th>
                </tr>
            </thead>
        </table>
    )
};

export default StrengthTable;