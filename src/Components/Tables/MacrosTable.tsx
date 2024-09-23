import { memo } from 'react';
import { Macros } from '../../interfaces';

type Props = {
    macros : Macros
};

const MacrosTable = ({macros} : Props) => {
    if (window.innerWidth > 500) {
        return (
                <table>
                    <thead>
                        <tr>
                            <th colSpan={13}>Macro Nutrients</th>
                        </tr>
                        <tr>
                            <th rowSpan={3} title='This is how many calories you should shoot for in a day'>Total Calories</th>
                            <th colSpan={4}>Carbohydrates</th>
                            <th colSpan={4}>Protein</th>
                            <th colSpan={4}>Fats</th>
                        </tr>
                        <tr>
                            <th colSpan={2}>Grams</th>
                            <th colSpan={2}>Calories</th>
                            <th colSpan={2}>Grams</th>
                            <th colSpan={2}>Calories</th>
                            <th colSpan={2}>Grams</th>
                            <th colSpan={2}>Calories</th>
                        </tr>
                        <tr>
                            <th colSpan={1}>Min</th>
                            <th colSpan={1}>Max</th>
                            <th colSpan={1}>Min</th>
                            <th colSpan={1}>Max</th>
                            <th colSpan={1}>Min</th>
                            <th colSpan={1}>Max</th>
                            <th colSpan={1}>Min</th>
                            <th colSpan={1}>Max</th>
                            <th colSpan={1}>Min</th>
                            <th colSpan={1}>Max</th>
                            <th colSpan={1}>Min</th>
                            <th colSpan={1}>Max</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{macros.totalCalories}</td>
                            <td>{macros.carbs.minGrams}</td>
                            <td>{macros.carbs.maxGrams}</td>
                            <td>{macros.carbs.minCal}</td>
                            <td>{macros.carbs.maxCal}</td>
                            <td>{macros.protein.minGrams}</td>
                            <td>{macros.protein.maxGrams}</td>
                            <td>{macros.protein.minCal}</td>
                            <td>{macros.protein.maxCal}</td>
                            <td>{macros.fats.minGrams}</td>
                            <td>{macros.fats.maxGrams}</td>
                            <td>{macros.fats.minCal}</td>
                            <td>{macros.fats.maxCal}</td>
                        </tr>
                    </tbody>
                </table>
        )
    }

    return (
        <table>
        <thead>
            <tr>
                <th colSpan={8}>Macro Nutrients</th>
            </tr>
        </thead>
        <thead>
            <th colSpan={8}>
                Total Calories
            </th>
        </thead>
        <tbody>
            <tr>
                <td colSpan={8}>{macros.totalCalories}</td>
            </tr>
        </tbody>
        <thead>
            <tr>
                <th colSpan={8}>Carbohydrates</th>
            </tr>
            <tr>
                <th colSpan={4}>Grams</th>
                <th colSpan={4}>Calories</th>
            </tr>
            <tr>
                <th colSpan={2}>Min</th>
                <th colSpan={2}>Max</th>
                <th colSpan={2}>Min</th>
                <th colSpan={2}>Max</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colSpan={2}>{macros.carbs.minGrams}</td>
                <td colSpan={2}>{macros.carbs.maxGrams}</td>
                <td colSpan={2}>{macros.carbs.minCal}</td>
                <td colSpan={2}>{macros.carbs.maxCal}</td>
            </tr>
        </tbody>
        <thead>
            <tr>
                <th colSpan={8}>Protein</th>
            </tr>
            <tr>
                <th colSpan={4}>Grams</th>
                <th colSpan={4}>Calories</th>
            </tr>
            <tr>
                <th colSpan={2}>Min</th>
                <th colSpan={2}>Max</th>
                <th colSpan={2}>Min</th>
                <th colSpan={2}>Max</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colSpan={2}>{macros.protein.minGrams}</td>
                <td colSpan={2}>{macros.protein.maxGrams}</td>
                <td colSpan={2}>{macros.protein.minCal}</td>
                <td colSpan={2}>{macros.protein.maxCal}</td>
            </tr>
        </tbody>
        <thead>
            <tr>
                <th colSpan={8}>Fats</th>
            </tr>
            <tr>
                <th colSpan={4}>Grams</th>
                <th colSpan={4}>Calories</th>
            </tr>
            <tr>
                <th colSpan={2}>Min</th>
                <th colSpan={2}>Max</th>
                <th colSpan={2}>Min</th>
                <th colSpan={2}>Max</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colSpan={2}>{macros.fats.minGrams}</td>
                <td colSpan={2}>{macros.fats.maxGrams}</td>
                <td colSpan={2}>{macros.fats.minCal}</td>
                <td colSpan={2}>{macros.fats.maxCal}</td>
            </tr>
        </tbody>
    </table>
    )
};

export default memo(MacrosTable);