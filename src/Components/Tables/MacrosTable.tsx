import { memo } from 'react';
import { Macros } from '../../interfaces';

type Props = {
    macros : Macros
};

const MacrosTable = ({macros} : Props) => {
    if (window.innerWidth > 400) {
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
                            <td>{macros.carbs.minGrams}<abbr title='Grams'><b>g</b></abbr></td>
                            <td>{macros.carbs.maxGrams}<abbr title='Grams'><b>g</b></abbr></td>
                            <td>{macros.carbs.minCal}<abbr title='Carbohydrates'><b>cal</b></abbr></td>
                            <td>{macros.carbs.maxCal}<abbr title='Carbohydrates'><b>cal</b></abbr></td>
                            <td>{macros.protein.minGrams}<abbr title='Grams'><b>g</b></abbr></td>
                            <td>{macros.protein.maxGrams}<abbr title='Grams'><b>g</b></abbr></td>
                            <td>{macros.protein.minCal}<abbr title='Carbohydrates'><b>cal</b></abbr></td>
                            <td>{macros.protein.maxCal}<abbr title='Carbohydrates'><b>cal</b></abbr></td>
                            <td>{macros.fats.minGrams}<abbr title='Grams'><b>g</b></abbr></td>
                            <td>{macros.fats.maxGrams}<abbr title='Grams'><b>g</b></abbr></td>
                            <td>{macros.fats.minCal}<abbr title='Carbohydrates'><b>cal</b></abbr></td>
                            <td>{macros.fats.maxCal}<abbr title='Carbohydrates'><b>cal</b></abbr></td>
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
            <tr>
                <th rowSpan={3} colSpan={4} title='This is how many calories you should shoot for in a day'>Total Calories</th>
                <th colSpan={4}>Carbohydrates</th>
            </tr>
            <tr>
                <th colSpan={2}>Grams</th>
                <th colSpan={2}>Carbohydrates</th>
            </tr>
            <tr>
                <th colSpan={1}>Min</th>
                <th colSpan={1}>Max</th>
                <th colSpan={1}>Min</th>
                <th colSpan={1}>Max</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colSpan={4}>{macros.totalCalories}</td>
                <td>{macros.carbs.minGrams}<abbr title='Grams'><b>g</b></abbr></td>
                <td>{macros.carbs.maxGrams}<abbr title='Grams'><b>g</b></abbr></td>
                <td>{macros.carbs.minCal}<abbr title='Calories'><b>cal</b></abbr></td>
                <td>{macros.carbs.maxCal}<abbr title='Calories'><b>cal</b></abbr></td>
            </tr>
        </tbody>
        <thead>
            <tr>
                <th colSpan={4}>Protein</th>
                <th colSpan={4}>Fats</th>
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
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{macros.protein.minGrams}<abbr title='Grams'><b>g</b></abbr></td>
                <td>{macros.protein.maxGrams}<abbr title='Grams'><b>g</b></abbr></td>
                <td>{macros.protein.minCal}<abbr title='Calories'><b>cal</b></abbr></td>
                <td>{macros.protein.maxCal}<abbr title='Calories'><b>cal</b></abbr></td>
                <td>{macros.fats.minGrams}<abbr title='Grams'><b>g</b></abbr></td>
                <td>{macros.fats.maxGrams}<abbr title='Grams'><b>g</b></abbr></td>
                <td>{macros.fats.minCal}<abbr title='Calories'><b>cal</b></abbr></td>
                <td>{macros.fats.maxCal}<abbr title='Calories'><b>cal</b></abbr></td>
            </tr>
        </tbody>
    </table>
    )
};

export default memo(MacrosTable);