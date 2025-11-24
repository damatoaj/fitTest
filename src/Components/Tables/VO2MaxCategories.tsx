import { memo } from 'react';

type Props = {
    s?: 'MALE' | 'FEMALE' | '';
    c?: 'very poor'| 'poor'| 'fair'| 'good' | "very good" | 'superior' | 'excellent' | '';
};

const VO2MaxCategories = ({s, c} : Props) => {
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

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={7}>
                        <h2>Cardiorespiratory Fitness Classifications (VO<sub>2max</sub>)</h2>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th colSpan={7}>
                        <h3>Male</h3>
                    </th>
                </tr>
                <tr>
                    <th colSpan={7}>
                        <h4>Age Group (yr)</h4>
                    </th>
                </tr>
                <tr>
                    <td colSpan={1}><strong>Percentile</strong></td>
                    <td colSpan={1}></td>
                    <td colSpan={1}><strong>20-29</strong></td>
                    <td colSpan={1}><strong>30-39</strong></td>
                    <td colSpan={1}><strong>40-49</strong></td>
                    <td colSpan={1}><strong>50-59</strong></td>
                    <td colSpan={1}><strong>60-69</strong></td>
                </tr>
                <tr>
                    <td colSpan={1}>95</td>
                    <td 
                        colSpan={1}
                        data-currentcategory={z === 70 ? 'yes' : 'no'}                                         
                        >Superior</td>
                    <td colSpan={1}>66.3</td>
                    <td colSpan={1}>59.8</td>
                    <td colSpan={1}>55.6</td>
                    <td colSpan={1}>50.7</td>
                    <td colSpan={1}>43.0</td>
                </tr>
                <tr>
                    <td colSpan={1}>90</td>
                    <td 
                        colSpan={1} 
                        rowSpan={3}
                        data-currentcategory={z === 50 ? 'yes' : 'no'}                                         

                    >Excellent</td>
                    <td colSpan={1}>61.8</td>
                    <td colSpan={1}>56.6</td>
                    <td colSpan={1}>52.1</td>
                    <td colSpan={1}>45.6</td>
                    <td colSpan={1}>40.3</td>
                </tr>
                <tr>
                    <td colSpan={1}>85</td>
                    {/* <td colSpan={1}>Excellent</td> */}
                    <td colSpan={1}>59.3</td>
                    <td colSpan={1}>54.2</td>
                    <td colSpan={1}>49.3</td>
                    <td colSpan={1}>43.2</td>
                    <td colSpan={1}>38.2</td>
                </tr>
                <tr>
                    <td colSpan={1}>80</td>
                    {/* <td colSpan={1}>Excellent</td> */}
                    <td colSpan={1}>57.1</td>
                    <td colSpan={1}>51.6</td>
                    <td colSpan={1}>46.7</td>
                    <td colSpan={1}>41.2</td>
                    <td colSpan={1}>36.1</td>
                </tr>
                <tr>
                    <td colSpan={1}>75</td>
                    <td 
                        colSpan={1} 
                        rowSpan={4}
                        data-currentcategory={z === 40 ? 'yes' : 'no'}                                         
                    >Good</td>
                    <td colSpan={1}>55.2</td>
                    <td colSpan={1}>49.2</td>
                    <td colSpan={1}>45.0</td>
                    <td colSpan={1}>39.7</td>
                    <td colSpan={1}>34.5</td>
                </tr>
                <tr>
                    <td colSpan={1}>70</td>
                    {/* <td colSpan={1}>Good</td> */}
                    <td colSpan={1}>53.7</td>
                    <td colSpan={1}>48.0</td>
                    <td colSpan={1}>43.9</td>
                    <td colSpan={1}>38.2</td>
                    <td colSpan={1}>32.9</td>
                </tr>
                <tr>
                    <td colSpan={1}>65</td>
                    {/* <td colSpan={1}>Good</td> */}
                    <td colSpan={1}>52.1</td>
                    <td colSpan={1}>46.6</td>
                    <td colSpan={1}>42.1</td>
                    <td colSpan={1}>36.3</td>
                    <td colSpan={1}>31.6</td>
                </tr>
                <tr>
                    <td colSpan={1}>60</td>
                    {/* <td colSpan={1}>Good</td> */}
                    <td colSpan={1}>50.2</td>
                    <td colSpan={1}>45.2</td>
                    <td colSpan={1}>40.3</td>
                    <td colSpan={1}>35.1</td>
                    <td colSpan={1}>30.5</td>
                </tr>
                <tr>
                    <td colSpan={1}>55</td>
                    <td 
                        colSpan={1} 
                        rowSpan={4}
                        data-currentcategory={z === 30 ? 'yes' : 'no'}                                          
                    >Fair</td>
                    <td colSpan={1}>49.0</td>
                    <td colSpan={1}>43.8</td>
                    <td colSpan={1}>38.9</td>
                    <td colSpan={1}>33.8</td>
                    <td colSpan={1}>29.1</td>
                </tr>
                <tr>
                    <td colSpan={1}>50</td>
                    {/* <td colSpan={1}>Fair</td> */}
                    <td colSpan={1}>48</td>
                    <td colSpan={1}>42.4</td>
                    <td colSpan={1}>37.8</td>
                    <td colSpan={1}>32.6</td>
                    <td colSpan={1}>28.2</td>
                </tr>
                <tr>
                    <td colSpan={1}>45</td>
                    {/* <td colSpan={1}>Fair</td> */}
                    <td colSpan={1}>46.5</td>
                    <td colSpan={1}>41.3</td>
                    <td colSpan={1}>36.7</td>
                    <td colSpan={1}>31.6</td>
                    <td colSpan={1}>27.2</td>
                </tr>
                <tr>
                    <td colSpan={1}>40</td>
                    {/* <td colSpan={1}>Fair</td> */}
                    <td colSpan={1}>44.9</td>
                    <td colSpan={1}>39.6</td>
                    <td colSpan={1}>35.7</td>
                    <td colSpan={1}>30.7</td>
                    <td colSpan={1}>26.6</td>
                </tr>
                <tr>
                    <td colSpan={1}>35</td>
                    <td 
                        colSpan={1} 
                        rowSpan={4}
                        data-currentcategory={z === 20 ? 'yes' : 'no'}                                         
                    >Poor</td>
                    <td colSpan={1}>53.7</td>
                    <td colSpan={1}>48.0</td>
                    <td colSpan={1}>43.9</td>
                    <td colSpan={1}>38.2</td>
                    <td colSpan={1}>32.9</td>
                </tr>
                <tr>
                    <td colSpan={1}>30</td>
                    {/* <td colSpan={1}>Poor</td> */}
                    <td colSpan={1}>41.9</td>
                    <td colSpan={1}>37.4</td>
                    <td colSpan={1}>33.3</td>
                    <td colSpan={1}>28.4</td>
                    <td colSpan={1}>24.6</td>
                </tr>
                <tr>
                    <td colSpan={1}>25</td>
                    {/* <td colSpan={1}>Poor</td> */}
                    <td colSpan={1}>40.1</td>
                    <td colSpan={1}>35.9</td>
                    <td colSpan={1}>31.9</td>
                    <td colSpan={1}>27.1</td>
                    <td colSpan={1}>23.7</td>
                </tr>
                <tr>
                    <td colSpan={1}>20</td>
                    {/* <td colSpan={1}>Poor</td> */}
                    <td colSpan={1}>38.1</td>
                    <td colSpan={1}>34.1</td>
                    <td colSpan={1}>30.5</td>
                    <td colSpan={1}>26.1</td>
                    <td colSpan={1}>22.4</td>
                </tr>
                <tr>
                    <td colSpan={1}>15</td>
                    <td 
                        colSpan={1} 
                        rowSpan={3}
                        data-currentcategory={z === 10 ? 'yes' : 'no'}                                             
                    >Very Poor</td>
                    <td colSpan={1}>35.4</td>
                    <td colSpan={1}>32.7</td>
                    <td colSpan={1}>29.0</td>
                    <td colSpan={1}>24.4</td>
                    <td colSpan={1}>21.2</td>
                </tr>
                <tr>
                    <td colSpan={1}>10</td>
                    {/* <td colSpan={1}>Very Poor</td> */}
                    <td colSpan={1}>32.1</td>
                    <td colSpan={1}>30.2</td>
                    <td colSpan={1}>26.8</td>
                    <td colSpan={1}>22.8</td>
                    <td colSpan={1}>19.8</td>
                </tr>
                <tr>
                    <td colSpan={1}>5</td>
                    {/* <td colSpan={1}>Very Poor</td> */}
                    <td colSpan={1}>29.0</td>
                    <td colSpan={1}>27.2</td>
                    <td colSpan={1}>24.2</td>
                    <td colSpan={1}>20.9</td>
                    <td colSpan={1}>17.4</td>
                </tr>
                <tr>
                    <th colSpan={7}>
                        <h3>Female</h3>
                    </th>
                </tr>
                <tr>
                    <th colSpan={7}>
                        <h4>Age Group (yr)</h4>
                    </th>
                </tr>
                <tr>
                    <td colSpan={1}><strong>Percentile</strong></td>
                    <td colSpan={1}></td>
                    <td colSpan={1}><strong>20-29</strong></td>
                    <td colSpan={1}><strong>30-39</strong></td>
                    <td colSpan={1}><strong>40-49</strong></td>
                    <td colSpan={1}><strong>50-59</strong></td>
                    <td colSpan={1}><strong>60-69</strong></td>
                </tr>
                <tr>
                    <td colSpan={1}>95</td>
                    <td 
                        colSpan={1}
                        data-currentcategory={z === 7 ? 'yes' : 'no'}                                         
                        
                    >Superior</td>
                    <td colSpan={1}>56.0</td>
                    <td colSpan={1}>45.8</td>
                    <td colSpan={1}>41.7</td>
                    <td colSpan={1}>35.9</td>
                    <td colSpan={1}>29.4</td>
                </tr>
                <tr>
                    <td colSpan={1}>90</td>
                    <td 
                        colSpan={1} 
                        rowSpan={3}
                        data-currentcategory={z === 5 ? 'yes' : 'no'}                                         
    
                    >Excellent</td>
                    <td colSpan={1}>51.3</td>
                    <td colSpan={1}>41.4</td>
                    <td colSpan={1}>38.4</td>
                    <td colSpan={1}>32.0</td>
                    <td colSpan={1}>27.9</td>
                </tr>
                <tr>
                    <td colSpan={1}>85</td>
                    {/* <td colSpan={1}>Excellent</td> */}
                    <td colSpan={1}>48.3</td>
                    <td colSpan={1}>39.3</td>
                    <td colSpan={1}>36.0</td>
                    <td colSpan={1}>30.2</td>
                    <td colSpan={1}>25.6</td>
                </tr>
                <tr>
                    <td colSpan={1}>80</td>
                    {/* <td colSpan={1}>Excellent</td> */}
                    <td colSpan={1}>46.5</td>
                    <td colSpan={1}>37.5</td>
                    <td colSpan={1}>34.0</td>
                    <td colSpan={1}>28.6</td>
                    <td colSpan={1}>24.6</td>
                </tr>
                <tr>
                    <td colSpan={1}>75</td>
                    <td 
                        colSpan={1} 
                        rowSpan={4}
                        data-currentcategory={z === 4 ? 'yes' : 'no'}                                         
    
                    >Good</td>
                    <td colSpan={1}>44.7</td>
                    <td colSpan={1}>36.1</td>
                    <td colSpan={1}>32.4</td>
                    <td colSpan={1}>27.6</td>
                    <td colSpan={1}>23.8</td>
                </tr>
                <tr>
                    <td colSpan={1}>70</td>
                    {/* <td colSpan={1}>Good</td> */}
                    <td colSpan={1}>43.2</td>
                    <td colSpan={1}>34.6</td>
                    <td colSpan={1}>31.1</td>
                    <td colSpan={1}>26.8</td>
                    <td colSpan={1}>23.1</td>
                </tr>
                <tr>
                    <td colSpan={1}>65</td>
                    {/* <td colSpan={1}>Good</td> */}
                    <td colSpan={1}>41.6</td>
                    <td colSpan={1}>33.5</td>
                    <td colSpan={1}>30.0</td>
                    <td colSpan={1}>26.0</td>
                    <td colSpan={1}>22.0</td>
                </tr>
                <tr>
                    <td colSpan={1}>60</td>
                    {/* <td colSpan={1}>Good</td> */}
                    <td colSpan={1}>40.6</td>
                    <td colSpan={1}>32.2</td>
                    <td colSpan={1}>28.7</td>
                    <td colSpan={1}>25.2</td>
                    <td colSpan={1}>21.2</td>
                </tr>
                <tr>
                    <td colSpan={1}>55</td>
                    <td 
                        colSpan={1} 
                        rowSpan={4}
                        data-currentcategory={z === 3 ? 'yes' : 'no'}                                         

                    >Fair</td>
                    <td colSpan={1}>49.0</td>
                    <td colSpan={1}>43.8</td>
                    <td colSpan={1}>38.9</td>
                    <td colSpan={1}>33.8</td>
                    <td colSpan={1}>29.1</td>
                </tr>
                <tr>
                    <td colSpan={1}>50</td>
                    {/* <td colSpan={1}>Fair</td> */}
                    <td colSpan={1}>38.9</td>
                    <td colSpan={1}>31.2</td>
                    <td colSpan={1}>27.7</td>
                    <td colSpan={1}>24.4</td>
                    <td colSpan={1}>20.5</td>
                </tr>
                <tr>
                    <td colSpan={1}>45</td>
                    {/* <td colSpan={1}>Fair</td> */}
                    <td colSpan={1}>35.9</td>
                    <td colSpan={1}>29.3</td>
                    <td colSpan={1}>25.9</td>
                    <td colSpan={1}>22.7</td>
                    <td colSpan={1}>19.6</td>
                </tr>
                <tr>
                    <td colSpan={1}>40</td>
                    {/* <td colSpan={1}>Fair</td> */}
                    <td colSpan={1}>34.6</td>
                    <td colSpan={1}>28.2</td>
                    <td colSpan={1}>24.9</td>
                    <td colSpan={1}>21.8</td>
                    <td colSpan={1}>18.9</td>
                </tr>
                <tr>
                    <td colSpan={1}>35</td>
                    <td colSpan={1} rowSpan={4}
                        data-currentcategory={z === 2 ? 'yes' : 'no'}                                         

                    >Poor</td>
                    <td colSpan={1}>33.6</td>
                    <td colSpan={1}>27.4</td>
                    <td colSpan={1}>24.1</td>
                    <td colSpan={1}>21.2</td>
                    <td colSpan={1}>18.4</td>
                </tr>
                <tr>
                    <td colSpan={1}>30</td>
                    {/* <td colSpan={1}>Poor</td> */}
                    <td colSpan={1}>32.0</td>
                    <td colSpan={1}>26.4</td>
                    <td colSpan={1}>23.3</td>
                    <td colSpan={1}>20.6</td>
                    <td colSpan={1}>17.9</td>
                </tr>
                <tr>
                    <td colSpan={1}>25</td>
                    {/* <td colSpan={1}>Poor</td> */}
                    <td colSpan={1}>30.5</td>
                    <td colSpan={1}>25.3</td>
                    <td colSpan={1}>22.1</td>
                    <td colSpan={1}>19.9</td>
                    <td colSpan={1}>17.2</td>
                </tr>
                <tr>
                    <td colSpan={1}>20</td>
                    {/* <td colSpan={1}>Poor</td> */}
                    <td colSpan={1}>28.6</td>
                    <td colSpan={1}>24.1</td>
                    <td colSpan={1}>21.3</td>
                    <td colSpan={1}>19.1</td>
                    <td colSpan={1}>16.5</td>
                </tr>
                <tr>
                    <td colSpan={1}>15</td>
                    <td colSpan={1} rowSpan={3}
                        data-currentcategory={z === 1 ? 'yes' : 'no'}                                         

                    >Very Poor</td>
                    <td colSpan={1}>26.2</td>
                    <td colSpan={1}>22.5</td>
                    <td colSpan={1}>20.0</td>
                    <td colSpan={1}>18.3</td>
                    <td colSpan={1}>15.6</td>
                </tr>
                <tr>
                    <td colSpan={1}>10</td>
                    {/* <td colSpan={1}>Very Poor</td> */}
                    <td colSpan={1}>23.9</td>
                    <td colSpan={1}>20.9</td>
                    <td colSpan={1}>18.8</td>
                    <td colSpan={1}>17.3</td>
                    <td colSpan={1}>14.6</td>
                </tr>
                <tr>
                    <td colSpan={1}>5</td>
                    {/* <td colSpan={1}>Very Poor</td> */}
                    <td colSpan={1}>21.7</td>
                    <td colSpan={1}>19.0</td>
                    <td colSpan={1}>17.0</td>
                    <td colSpan={1}>16.0</td>
                    <td colSpan={1}>13.4</td>
                </tr>
            </tbody>
        </table>
    )
}

export default memo(VO2MaxCategories);