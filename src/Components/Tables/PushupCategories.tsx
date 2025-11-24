import { memo } from 'react'

type Props = {
    c: string;
    s: string;
};

const PushupCategories = ({s, c} : Props) => {
    if (window.innerWidth > 459) {
        return (
            <table>
                <thead>
                    <tr>
                        <th colSpan={12}>Push Categories By Age & Sex</th>
                    </tr>
                    <tr><th colSpan={12}>Age</th></tr>
                    <tr>
                        <th colSpan={2}>Category</th>
                        <th colSpan={2}>20-29</th>
                        <th colSpan={2}>30-39</th>
                        <th colSpan={2}>40-49</th>
                        <th colSpan={2}>50-59</th>
                        <th colSpan={2}>60-69</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2}><strong>Sex</strong></td>
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
                        <td 
                            data-currentcategory={c && c === 'excellent' ? 'yes' : 'no'}                                         
                        colSpan={2}>Excellent</td>
                        <td 
                            colSpan={1}
                        >{'>= 36'}</td>
                        <td colSpan={1}>{'>= 30'}</td>
                        <td colSpan={1}>{'>= 30'}</td>
                        <td colSpan={1}>{'>= 27'}</td>
                        <td colSpan={1}>{'>= 25'}</td>
                        <td colSpan={1}>{'>= 24'}</td>
                        <td colSpan={1}>{'>= 21'}</td>
                        <td colSpan={1}>{'>= 21'}</td>
                        <td colSpan={1}>{'>= 18'}</td>
                        <td colSpan={1}>{'>= 17'}</td>
                    </tr>
                    <tr>
                        <td 
                            data-currentcategory={c && c === 'very good' ? 'yes' : 'no'}                                         
                            colSpan={2}
                        >Very Good</td>
                        <td colSpan={1}>{'29-35'}</td>
                        <td colSpan={1}>{'21-29'}</td>
                        <td colSpan={1}>{'22-29'}</td>
                        <td colSpan={1}>{'20-26'}</td>
                        <td colSpan={1}>{'17-24'}</td>
                        <td colSpan={1}>{'15-23'}</td>
                        <td colSpan={1}>{'13-20'}</td>
                        <td colSpan={1}>{'11-20'}</td>
                        <td colSpan={1}>{'11-17'}</td>
                        <td colSpan={1}>{'12-16'}</td>
                    </tr>
                    <tr>
                        <td 
                            colSpan={2}
                            data-currentcategory={c && c === 'good' ? 'yes' : 'no'}                                         

                        >Good</td>
                        <td colSpan={1}>{'22-28'}</td>
                        <td colSpan={1}>{'15-20'}</td>
                        <td colSpan={1}>{'17-21'}</td>
                        <td colSpan={1}>{'13-19'}</td>
                        <td colSpan={1}>{'13-16'}</td>
                        <td colSpan={1}>{'11-14'}</td>
                        <td colSpan={1}>{'10-12'}</td>
                        <td colSpan={1}>{'7-10'}</td>
                        <td colSpan={1}>{'8-10'}</td>
                        <td colSpan={1}>{'5-11'}</td>
                    </tr>
                    <tr>
                        <td 
                            colSpan={2}
                            data-currentcategory={c && c === 'fair' ? 'yes' : 'no'}                                         
                        >Fair</td>
                        <td colSpan={1}>{'17-21'}</td>
                        <td colSpan={1}>{'10-14'}</td>
                        <td colSpan={1}>{'12-16'}</td>
                        <td colSpan={1}>{'8-12'}</td>
                        <td colSpan={1}>{'10-12'}</td>
                        <td colSpan={1}>{'5-10'}</td>
                        <td colSpan={1}>{'7-9'}</td>
                        <td colSpan={1}>{'2-6'}</td>
                        <td colSpan={1}>{'5-7'}</td>
                        <td colSpan={1}>{'2-4'}</td>
                    </tr>
                    <tr>
                        <td 
                            colSpan={2}
                            data-currentcategory={c && c === 'poor' ? 'yes' : 'no'}                                         
                        >Poor</td>
                        <td colSpan={1}>{'<= 16'}</td>
                        <td colSpan={1}>{'<= 9'}</td>
                        <td colSpan={1}>{'<= 11'}</td>
                        <td colSpan={1}>{'<= 7'}</td>
                        <td colSpan={1}>{'<= 9'}</td>
                        <td colSpan={1}>{'<= 4'}</td>
                        <td colSpan={1}>{'<= 6'}</td>
                        <td colSpan={1}>{'<= 1'}</td>
                        <td colSpan={1}>{'<= 4'}</td>
                        <td colSpan={1}>{'<= 1'}</td>
                    </tr>
                </tbody>
            </table>
        )
    } else {
        return (
            <table>
            <thead>
                <tr>
                    <th colSpan={7}>Push Categories By Age & Sex</th>
                </tr>
                <tr><th colSpan={7}>Age</th></tr>
                <tr>
                    <th colSpan={2}>Category</th>
                    <th colSpan={1}>20-29</th>
                    <th colSpan={1}>30-39</th>
                    <th colSpan={1}>40-49</th>
                    <th colSpan={1}>50-59</th>
                    <th colSpan={1}>60-69</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={2}><strong>Sex</strong></td>
                    <td colSpan={5}><strong>M</strong></td>
                </tr>
                <tr>
                    <td colSpan={2}
                        data-currentcategory={c && c === 'excellent' && s && s === "MALE" ? 'yes' : 'no'}                                         

                    >Excellent</td>
                    <td colSpan={1}>{'>= 36'}</td>
                    <td colSpan={1}>{'>= 30'}</td>
                    <td colSpan={1}>{'>= 25'}</td>
                    <td colSpan={1}>{'>= 21'}</td>
                    <td colSpan={1}>{'>= 18'}</td>
                </tr>
                <tr>
                    <td colSpan={2}
                        data-currentcategory={c && c === 'very good' && s && s === "MALE" ? 'yes' : 'no'}                                         

                    >Very Good</td>
                    <td colSpan={1}>{'29-35'}</td>
                    <td colSpan={1}>{'22-29'}</td>
                    <td colSpan={1}>{'17-24'}</td>
                    <td colSpan={1}>{'13-20'}</td>
                    <td colSpan={1}>{'11-17'}</td>
                </tr>
                <tr>
                    <td colSpan={2}
                        data-currentcategory={c && c === 'good' && s && s === "MALE" ? 'yes' : 'no'}                                         

                    >Good</td>
                    <td colSpan={1}>{'22-28'}</td>
                    <td colSpan={1}>{'17-21'}</td>
                    <td colSpan={1}>{'13-16'}</td>
                    <td colSpan={1}>{'10-12'}</td>
                    <td colSpan={1}>{'8-10'}</td>
                </tr>
                <tr>
                    <td 
                        colSpan={2}
                        data-currentcategory={c && c === 'fair' && s && s === "MALE" ? 'yes' : 'no'}                                         
                    >Fair</td>
                    <td colSpan={1}>{'17-21'}</td>
                    <td colSpan={1}>{'12-16'}</td>
                    <td colSpan={1}>{'10-12'}</td>
                    <td colSpan={1}>{'7-9'}</td>
                    <td colSpan={1}>{'5-7'}</td>
                </tr>
                <tr>
                    <td 
                        colSpan={2}
                        data-currentcategory={c && c === 'poor' && s && s === "MALE" ? 'yes' : 'no'}                                         
                    >Poor</td>
                    <td colSpan={1}>{'<= 16'}</td>
                    <td colSpan={1}>{'<= 11'}</td>
                    <td colSpan={1}>{'<= 9'}</td>
                    <td colSpan={1}>{'<= 6'}</td>
                    <td colSpan={1}>{'<= 4'}</td>
                </tr>
                <tr>
                    <td colSpan={2}><strong>Sex</strong></td>
                    <td colSpan={5}><strong>F</strong></td>
                </tr>
                <tr>
                    <td colSpan={2}
                        data-currentcategory={c && c === 'excellent' && s && s === "FEMALE" ? 'yes' : 'no'}                                         

                    >Excellent</td>
                    <td colSpan={1}>{'>= 30'}</td>
                    <td colSpan={1}>{'>= 27'}</td>
                    <td colSpan={1}>{'>= 24'}</td>
                    <td colSpan={1}>{'>= 21'}</td>
                    <td colSpan={1}>{'>= 17'}</td>
                </tr>
                <tr>
                    <td colSpan={2}
                        data-currentcategory={c && c === 'very good' && s && s === "FEMALE" ? 'yes' : 'no'}                                         

                    >Very Good</td>
                    <td colSpan={1}>{'21-29'}</td>
                    <td colSpan={1}>{'20-26'}</td>
                    <td colSpan={1}>{'15-23'}</td>
                    <td colSpan={1}>{'11-20'}</td>
                    <td colSpan={1}>{'12-16'}</td>
                </tr>
                <tr>
                    <td colSpan={2}
                        data-currentcategory={c && c === 'good' && s && s === "FEMALE" ? 'yes' : 'no'}                                         

                    >Good</td>
                    <td colSpan={1}>{'15-20'}</td>
                    <td colSpan={1}>{'13-19'}</td>
                    <td colSpan={1}>{'11-14'}</td>
                    <td colSpan={1}>{'7-10'}</td>
                    <td colSpan={1}>{'5-11'}</td>
                </tr>
                <tr>
                    <td colSpan={2}
                        data-currentcategory={c && c === 'fair' && s && s === "FEMALE" ? 'yes' : 'no'}                                         
                    >Fair</td>
                    <td colSpan={1}>{'10-14'}</td>
                    <td colSpan={1}>{'8-12'}</td>
                    <td colSpan={1}>{'5-10'}</td>
                    <td colSpan={1}>{'2-6'}</td>
                    <td colSpan={1}>{'2-4'}</td>
                </tr>
                <tr>
                    <td colSpan={2}
                        data-currentcategory={c && c === 'poor' && s && s === "FEMALE" ? 'yes' : 'no'}                                         

                    >Poor</td>
                    <td colSpan={1}>{'<= 9'}</td>
                    <td colSpan={1}>{'<= 7'}</td>
                    <td colSpan={1}>{'<= 4'}</td>
                    <td colSpan={1}>{'<= 1'}</td>
                    <td colSpan={1}>{'<= 1'}</td>
                </tr>
            </tbody>
        </table>
        )
    }
}

export default memo(PushupCategories);