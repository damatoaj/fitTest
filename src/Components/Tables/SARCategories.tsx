import { memo } from 'react';

type Props = {
    s?: 'MALE' | 'FEMALE' | '';
    c?: 'very poor'| 'poor'| 'fair'| 'good' | "very good" | 'superior' | 'excellent' | '';
};

const SARCategories = ({s, c} : Props) => {
    const x : number = s === 'MALE' ? 10 : 1;

    const y = {
        'very poor' : 1,
        'poor' : 2,
        'fair' : 3,
        'good' : 4,
        'very good' : 5,
        'excellent' : 6,
        'superior' : 7
    };

    const z : number = 
        (!s || !c) ? 0
        : x * y[c];


    if (window.innerWidth > 460) {
        return (
            <table>
                <thead>
                    <tr>
                        <th colSpan={12}>Sit & Reach Categories By Age & Sex</th>
                    </tr>
                    <tr><th colSpan={12}>Age (yr)</th></tr>
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
                            colSpan={2}
                            data-currentcategory={z === 60 || z=== 6 ? 'yes' : 'no'}                                         
                        >Excellent</td>
                        <td 
                            colSpan={1}
                        >{'>= 40'}</td>
                        <td colSpan={1}>{'>= 41'}</td>
                        <td colSpan={1}>{'>= 38'}</td>
                        <td colSpan={1}>{'>= 41'}</td>
                        <td colSpan={1}>{'>= 35'}</td>
                        <td colSpan={1}>{'>= 38'}</td>
                        <td colSpan={1}>{'>= 35'}</td>
                        <td colSpan={1}>{'>= 39'}</td>
                        <td colSpan={1}>{'>= 33'}</td>
                        <td colSpan={1}>{'>= 35'}</td>
                    </tr>
                    <tr>
                        <td 
                            colSpan={2}
                            data-currentcategory={z === 50 || z=== 5 ? 'yes' : 'no'}                                         

                        >Very Good</td>
                        <td colSpan={1}>{'34-39'}</td>
                        <td colSpan={1}>{'37-40'}</td>
                        <td colSpan={1}>{'33-37'}</td>
                        <td colSpan={1}>{'36-40'}</td>
                        <td colSpan={1}>{'29-34'}</td>
                        <td colSpan={1}>{'34-37'}</td>
                        <td colSpan={1}>{'28-34'}</td>
                        <td colSpan={1}>{'33-38'}</td>
                        <td colSpan={1}>{'25-32'}</td>
                        <td colSpan={1}>{'31-34'}</td>
                    </tr>
                    <tr>
                        <td 
                            colSpan={2}
                            data-currentcategory={z === 40 || z=== 4 ? 'yes' : 'no'}                                         

                        >Good</td>
                        <td colSpan={1}>{'30-33'}</td>
                        <td colSpan={1}>{'33-36'}</td>
                        <td colSpan={1}>{'28-32'}</td>
                        <td colSpan={1}>{'32-35'}</td>
                        <td colSpan={1}>{'24-28'}</td>
                        <td colSpan={1}>{'30-33'}</td>
                        <td colSpan={1}>{'24-27'}</td>
                        <td colSpan={1}>{'30-32'}</td>
                        <td colSpan={1}>{'20-24'}</td>
                        <td colSpan={1}>{'27-30'}</td>
                    </tr>
                    <tr>
                        <td 
                            colSpan={2}
                            data-currentcategory={z === 30 || z=== 3 ? 'yes' : 'no'}                                         
                        >Fair</td>
                        <td colSpan={1}>{'25-29'}</td>
                        <td colSpan={1}>{'28-32'}</td>
                        <td colSpan={1}>{'23-27'}</td>
                        <td colSpan={1}>{'27-31'}</td>
                        <td colSpan={1}>{'18-23'}</td>
                        <td colSpan={1}>{'25-29'}</td>
                        <td colSpan={1}>{'16-23'}</td>
                        <td colSpan={1}>{'25-29'}</td>
                        <td colSpan={1}>{'15-19'}</td>
                        <td colSpan={1}>{'23-26'}</td>
                    </tr>
                    <tr>
                        <td 
                            colSpan={2}
                            data-currentcategory={z === 20 || z=== 2 ? 'yes' : 'no'}                                         

                        >Poor</td>
                        <td colSpan={1}>{'<= 24'}</td>
                        <td colSpan={1}>{'<= 27'}</td>
                        <td colSpan={1}>{'<= 22'}</td>
                        <td colSpan={1}>{'<= 26'}</td>
                        <td colSpan={1}>{'<= 17'}</td>
                        <td colSpan={1}>{'<= 24'}</td>
                        <td colSpan={1}>{'<= 15'}</td>
                        <td colSpan={1}>{'<= 24'}</td>
                        <td colSpan={1}>{'<= 14'}</td>
                        <td colSpan={1}>{'<= 22'}</td>
                    </tr>
                </tbody>
            </table>
        )
    } else 
        return (
            <table>
                <thead>
                    <tr>
                        <th colSpan={7}>Sit & Reach Categories By Age & Sex</th>
                    </tr>
                    <tr><th colSpan={7}>Age (yr)</th></tr>
                    <tr>
                        <th colSpan={2}></th>
                        <th colSpan={1}>20-29</th>
                        <th colSpan={1}>30-39</th>
                        <th colSpan={1}>40-49</th>
                        <th colSpan={1}>50-59</th>
                        <th colSpan={1}>60-69</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={7}><strong>Males</strong></td>
                    </tr>
                    <tr>
                        <td 
                            colSpan={2}
                            data-currentcategory={z === 60 ? 'yes' : 'no'}                                         
                        >Excellent</td>
                        <td colSpan={1}>{'>= 40'}</td>
                        <td colSpan={1}>{'>= 38'}</td>
                        <td colSpan={1}>{'>= 35'}</td>
                        <td colSpan={1}>{'>= 35'}</td>
                        <td colSpan={1}>{'>= 33'}</td>
                    </tr>
                    <tr>
                        <td 
                            colSpan={2}
                            data-currentcategory={z === 50 ? 'yes' : 'no'}                                         

                        >Very Good</td>
                        <td colSpan={1}>{'34-39'}</td>
                        <td colSpan={1}>{'33-37'}</td>
                        <td colSpan={1}>{'29-34'}</td>
                        <td colSpan={1}>{'28-34'}</td>
                        <td colSpan={1}>{'25-32'}</td>
                    </tr>
                    <tr>
                        <td 
                            colSpan={2}
                            data-currentcategory={z === 40 ? 'yes' : 'no'}                                         

                        >Good</td>
                        <td colSpan={1}>{'30-33'}</td>
                        <td colSpan={1}>{'28-32'}</td>
                        <td colSpan={1}>{'24-28'}</td>
                        <td colSpan={1}>{'24-27'}</td>
                        <td colSpan={1}>{'20-24'}</td>
                    </tr>
                    <tr>
                        <td 
                            colSpan={2}
                            data-currentcategory={z === 30 ? 'yes' : 'no'}                                         
                        >Fair</td>
                        <td colSpan={1}>{'25-29'}</td>
                        <td colSpan={1}>{'23-27'}</td>
                        <td colSpan={1}>{'18-23'}</td>
                        <td colSpan={1}>{'16-23'}</td>
                        <td colSpan={1}>{'15-19'}</td>
                    </tr>
                    <tr>
                        <td 
                            data-currentcategory={z === 20 ? 'yes' : 'no'}                                         
                            colSpan={2}
                        >Poor</td>
                        <td colSpan={1}>{'<= 24'}</td>
                        <td colSpan={1}>{'<= 22'}</td>
                        <td colSpan={1}>{'<= 17'}</td>
                        <td colSpan={1}>{'<= 15'}</td>
                        <td colSpan={1}>{'<= 14'}</td>
                    </tr>
                    <tr>
                        <td colSpan={7}><strong>Females</strong></td>
                    </tr>
                    <tr>
                        <td 
                            data-currentcategory={z === 6 ? 'yes' : 'no'}                                         
                            colSpan={2}
                        >Excellent</td>
                        <td colSpan={1}>{'>= 41'}</td>
                        <td colSpan={1}>{'>= 41'}</td>
                        <td colSpan={1}>{'>= 38'}</td>
                        <td colSpan={1}>{'>= 39'}</td>
                        <td colSpan={1}>{'>= 35'}</td>
                    </tr>
                    <tr>
                        <td 
                            colSpan={2}
                            data-currentcategory={z === 5 ? 'yes' : 'no'}                                         
                        >Very Good</td>
                        <td colSpan={1}>{'37-40'}</td>
                        <td colSpan={1}>{'36-40'}</td>
                        <td colSpan={1}>{'34-37'}</td>
                        <td colSpan={1}>{'33-38'}</td>
                        <td colSpan={1}>{'31-34'}</td>
                    </tr>
                    <tr>
                        <td 
                            colSpan={2}
                            data-currentcategory={z === 4 ? 'yes' : 'no'}                                         
                        >Good</td>
                        <td colSpan={1}>{'33-36'}</td>
                        <td colSpan={1}>{'32-35'}</td>
                        <td colSpan={1}>{'30-33'}</td>
                        <td colSpan={1}>{'30-32'}</td>
                        <td colSpan={1}>{'27-30'}</td>
                    </tr>
                    <tr>
                        <td 
                            colSpan={2}
                            data-currentcategory={z === 3 ? 'yes' : 'no'}                                         
                        >Fair</td>
                        <td colSpan={1}>{'28-32'}</td>
                        <td colSpan={1}>{'27-31'}</td>
                        <td colSpan={1}>{'25-29'}</td>
                        <td colSpan={1}>{'25-29'}</td>
                        <td colSpan={1}>{'23-26'}</td>
                    </tr>
                    <tr>
                        <td 
                            colSpan={2}
                            data-currentcategory={z === 2 ? 'yes' : 'no'}                                         
                        >Poor</td>
                        <td colSpan={1}>{'<= 27'}</td>
                        <td colSpan={1}>{'<= 26'}</td>
                        <td colSpan={1}>{'<= 24'}</td>
                        <td colSpan={1}>{'<= 24'}</td>
                        <td colSpan={1}>{'<= 22'}</td>
                    </tr>
                </tbody>
            </table>
    )  
};

export default memo(SARCategories);