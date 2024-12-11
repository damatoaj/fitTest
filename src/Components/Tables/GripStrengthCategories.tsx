import { memo } from 'react'
const GripStrengthCategories = () => {
    if (window.innerWidth > 460) {
        return (
            <table>
                <thead>
                    <tr>
                        <th colSpan={14}>Grip Strength Categories By Age & Sex</th>
                    </tr>
                    <tr><th colSpan={14}>Age</th></tr>
                    <tr>
                        <th colSpan={2} >Category</th>
                        <th colSpan={2}>15-19</th>
                        <th colSpan={2}>20-29</th>
                        <th colSpan={2}>30-39</th>
                        <th colSpan={2}>40-49</th>
                        <th colSpan={2}>50-59</th>
                        <th colSpan={2}>60-69</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2}></td>
                        <td colSpan={1}><strong>M</strong></td>
                        <td colSpan={1}><strong>F</strong></td>
                        <td colSpan={1}><strong>M</strong></td>
                        <td colSpan={1}><strong>F</strong></td>
                        <td colSpan={1}><strong>M</strong></td>
                        <td colSpan={1}><strong>F</strong></td>
                        <td colSpan={1}><strong>M</strong></td>
                        <td colSpan={1}><strong>F</strong></td>
                        <td colSpan={1}><strong>M</strong></td>
                        <td colSpan={1}><strong>F</strong></td>
                        <td colSpan={1}><strong>M</strong></td>
                        <td colSpan={1}><strong>F</strong></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Excellent</td>
                        <td colSpan={1}>{'>= 108'}</td>
                        <td colSpan={1}>{'>= 68'}</td>
                        <td colSpan={1}>{'>= 115'}</td>
                        <td colSpan={1}>{'>= 70'}</td>
                        <td colSpan={1}>{'>= 115'}</td>
                        <td colSpan={1}>{'>= 71'}</td>
                        <td colSpan={1}>{'>= 108'}</td>
                        <td colSpan={1}>{'>= 69'}</td>
                        <td colSpan={1}>{'>= 101'}</td>
                        <td colSpan={1}>{'>= 61'}</td>
                        <td colSpan={1}>{'>= 100'}</td>
                        <td colSpan={1}>{'>= 54'}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Very Good</td>
                        <td colSpan={1}>{'98-107'}</td>
                        <td colSpan={1}>{'60-67'}</td>
                        <td colSpan={1}>{'104-114'}</td>
                        <td colSpan={1}>{'63-69'}</td>
                        <td colSpan={1}>{'104-114'}</td>
                        <td colSpan={1}>{'63-70'}</td>
                        <td colSpan={1}>{'97-107'}</td>
                        <td colSpan={1}>{'61-68'}</td>
                        <td colSpan={1}>{'92-100'}</td>
                        <td colSpan={1}>{'54-60'}</td>
                        <td colSpan={1}>{'91-99'}</td>
                        <td colSpan={1}>{'48-53'}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Good</td>
                        <td colSpan={1}>{'90-97'}</td>
                        <td colSpan={1}>{'53-59'}</td>
                        <td colSpan={1}>{'95-103'}</td>
                        <td colSpan={1}>{'58-62'}</td>
                        <td colSpan={1}>{'95-103'}</td>
                        <td colSpan={1}>{'58-62'}</td>
                        <td colSpan={1}>{'88-96'}</td>
                        <td colSpan={1}>{'54-60'}</td>
                        <td colSpan={1}>{'84-91'}</td>
                        <td colSpan={1}>{'49-53'}</td>
                        <td colSpan={1}>{'84-90'}</td>
                        <td colSpan={1}>{'45-47'}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Fair</td>
                        <td colSpan={1}>{'79-89'}</td>
                        <td colSpan={1}>{'48-52'}</td>
                        <td colSpan={1}>{'84-94'}</td>
                        <td colSpan={1}>{'52-57'}</td>
                        <td colSpan={1}>{'84-94'}</td>
                        <td colSpan={1}>{'51-57'}</td>
                        <td colSpan={1}>{'80-87'}</td>
                        <td colSpan={1}>{'49-53'}</td>
                        <td colSpan={1}>{'76-83'}</td>
                        <td colSpan={1}>{'45-48'}</td>
                        <td colSpan={1}>{'73-83'}</td>
                        <td colSpan={1}>{'41-44'}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Poor</td>
                        <td colSpan={1}>{'<= 78'}</td>
                        <td colSpan={1}>{'<= 47'}</td>
                        <td colSpan={1}>{'<= 83'}</td>
                        <td colSpan={1}>{'<= 51'}</td>
                        <td colSpan={1}>{'<= 83'}</td>
                        <td colSpan={1}>{'<= 50'}</td>
                        <td colSpan={1}>{'<= 79'}</td>
                        <td colSpan={1}>{'<= 48'}</td>
                        <td colSpan={1}>{'<= 75'}</td>
                        <td colSpan={1}>{'<= 44'}</td>
                        <td colSpan={1}>{'<= 72'}</td>
                        <td colSpan={1}>{'<= 40'}</td>
                    </tr>
                </tbody>
            </table>
        )
    } else {
        return (
            <table>
                <thead>
                    <tr>
                        <th colSpan={7}>Grip Strength Categories By Age & Sex</th>
                    </tr>
                    <tr><th colSpan={7}>Age</th></tr>
                    <tr>
                        <th colSpan={1} >Category</th>
                        <th colSpan={1}>15-19</th>
                        <th colSpan={1}>20-29</th>
                        <th colSpan={1}>30-39</th>
                        <th colSpan={1}>40-49</th>
                        <th colSpan={1}>50-59</th>
                        <th colSpan={1}>60-69</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={7}><strong>M</strong></td>
                    </tr>
                    <tr>
                        <td colSpan={1}>Excellent</td>
                        <td colSpan={1}>{'>= 108'}</td>
                        <td colSpan={1}>{'>= 115'}</td>
                        <td colSpan={1}>{'>= 115'}</td>
                        <td colSpan={1}>{'>= 108'}</td>
                        <td colSpan={1}>{'>= 101'}</td>
                        <td colSpan={1}>{'>= 100'}</td>
                    </tr>
                    <tr>
                        <td colSpan={1}>Very Good</td>
                        <td colSpan={1}>{'98-107'}</td>
                        <td colSpan={1}>{'104-114'}</td>
                        <td colSpan={1}>{'104-114'}</td>
                        <td colSpan={1}>{'97-107'}</td>
                        <td colSpan={1}>{'92-100'}</td>
                        <td colSpan={1}>{'91-99'}</td>
                    </tr>
                    <tr>
                        <td colSpan={1}>Good</td>
                        <td colSpan={1}>{'90-97'}</td>
                        <td colSpan={1}>{'95-103'}</td>
                        <td colSpan={1}>{'95-103'}</td>
                        <td colSpan={1}>{'88-96'}</td>
                        <td colSpan={1}>{'84-91'}</td>
                        <td colSpan={1}>{'84-90'}</td>
                    </tr>
                    <tr>
                        <td colSpan={1}>Fair</td>
                        <td colSpan={1}>{'79-89'}</td>
                        <td colSpan={1}>{'84-94'}</td>
                        <td colSpan={1}>{'84-94'}</td>
                        <td colSpan={1}>{'80-87'}</td>
                        <td colSpan={1}>{'76-83'}</td>
                        <td colSpan={1}>{'73-83'}</td>
                    </tr>
                    <tr>
                        <td colSpan={1}>Poor</td>
                        <td colSpan={1}>{'<= 78'}</td>
                        <td colSpan={1}>{'<= 83'}</td>
                        <td colSpan={1}>{'<= 83'}</td>
                        <td colSpan={1}>{'<= 79'}</td>
                        <td colSpan={1}>{'<= 75'}</td>
                        <td colSpan={1}>{'<= 72'}</td>
                    </tr>
                    <tr>
                        <td colSpan={7}><strong>F</strong></td>
                    </tr>
                    <tr>
                        <td colSpan={1}>Excellent</td>
                        <td colSpan={1}>{'>= 68'}</td>
                        <td colSpan={1}>{'>= 70'}</td>
                        <td colSpan={1}>{'>= 71'}</td>
                        <td colSpan={1}>{'>= 69'}</td>
                        <td colSpan={1}>{'>= 61'}</td>
                        <td colSpan={1}>{'>= 54'}</td>
                    </tr>
                    <tr>
                        <td colSpan={1}>Very Good</td>
                        <td colSpan={1}>{'60-67'}</td>
                        <td colSpan={1}>{'63-69'}</td>
                        <td colSpan={1}>{'63-70'}</td>
                        <td colSpan={1}>{'61-68'}</td>
                        <td colSpan={1}>{'54-60'}</td>
                        <td colSpan={1}>{'48-53'}</td>
                    </tr>
                    <tr>
                        <td colSpan={1}>Good</td>
                        <td colSpan={1}>{'53-59'}</td>
                        <td colSpan={1}>{'58-62'}</td>
                        <td colSpan={1}>{'58-62'}</td>
                        <td colSpan={1}>{'54-60'}</td>
                        <td colSpan={1}>{'49-53'}</td>
                        <td colSpan={1}>{'45-47'}</td>
                    </tr>
                    <tr>
                        <td colSpan={1}>Fair</td>
                        <td colSpan={1}>{'48-52'}</td>
                        <td colSpan={1}>{'52-57'}</td>
                        <td colSpan={1}>{'51-57'}</td>
                        <td colSpan={1}>{'49-53'}</td>
                        <td colSpan={1}>{'45-48'}</td>
                        <td colSpan={1}>{'41-44'}</td>
                    </tr>
                    <tr>
                        <td colSpan={1}>Poor</td>
                        <td colSpan={1}>{'<= 47'}</td>
                        <td colSpan={1}>{'<= 51'}</td>
                        <td colSpan={1}>{'<= 50'}</td>
                        <td colSpan={1}>{'<= 48'}</td>
                        <td colSpan={1}>{'<= 44'}</td>
                        <td colSpan={1}>{'<= 40'}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
};

export default memo(GripStrengthCategories);