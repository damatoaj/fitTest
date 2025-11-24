import { memo } from 'react';
import { useUserContext } from '../../Hooks/useUserContext';

const BodyfatCategories = () => {
    const { state : {user} } = useUserContext();

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={8}>
                        <h2>Body Fat Percentage Classifications</h2>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th colSpan={8}>
                        <h3>Male</h3>
                    </th>
                </tr>
                <tr>
                    <th colSpan={8}>
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
                    <td colSpan={1}><strong>70-79</strong></td>
                </tr>
                <tr>
                    <td colSpan={1}>99</td>
                    <td 
                        colSpan={1} 
                        rowSpan={2}
                        data-currentcategory={user.bodyComp.category && user.bodyComp?.category === 'very lean' && user.sex === 'MALE' ? 'yes' : 'no'}
                    >Very Lean</td>
                    <td colSpan={1}>4.2</td>
                    <td colSpan={1}>7.3</td>
                    <td colSpan={1}>9.5</td>
                    <td colSpan={1}>11.0</td>
                    <td colSpan={1}>11.9</td>
                    <td colSpan={1}>13.6</td>
                </tr>
                <tr>
                    <td colSpan={1}>95</td>
                    <td colSpan={1}>6.4</td>
                    <td colSpan={1}>10.3</td>
                    <td colSpan={1}>12.9</td>
                    <td colSpan={1}>14.8</td>
                    <td colSpan={1}>16.2</td>
                    <td colSpan={1}>15.5</td>
                </tr>
                <tr>
                    <td colSpan={1}>90</td>
                    <td 
                        colSpan={1} 
                        rowSpan={3}
                        data-currentcategory={user.bodyComp.category && user.bodyComp?.category === 'excellent' && user.sex === 'MALE' ? 'yes' : 'no'}
                    >Excellent</td>
                    <td colSpan={1}>7.9</td>
                    <td colSpan={1}>12.4</td>
                    <td colSpan={1}>15.0</td>
                    <td colSpan={1}>17.0</td>
                    <td colSpan={1}>18.1</td>
                    <td colSpan={1}>17.5</td>
                </tr>
                <tr>
                    <td colSpan={1}>85</td>
                    <td colSpan={1}>9.1</td>
                    <td colSpan={1}>13.7</td>
                    <td colSpan={1}>16.4</td>
                    <td colSpan={1}>18.3</td>
                    <td colSpan={1}>19.2</td>
                    <td colSpan={1}>19.0</td>
                </tr>
                <tr>
                    <td colSpan={1}>80</td>
                    <td colSpan={1}>10.5</td>
                    <td colSpan={1}>14.9</td>
                    <td colSpan={1}>17.5</td>
                    <td colSpan={1}>19.4</td>
                    <td colSpan={1}>20.2</td>
                    <td colSpan={1}>20.1</td>
                </tr>
                <tr>
                    <td colSpan={1}>75</td>
                    <td 
                        colSpan={1} 
                        rowSpan={4}
                        data-currentcategory={user.bodyComp.category && user.bodyComp?.category === 'good' && user.sex === 'MALE' ? 'yes' : 'no'}                        
                        >Good</td>
                    <td colSpan={1}>11.5</td>
                    <td colSpan={1}>15.9</td>
                    <td colSpan={1}>18.5</td>
                    <td colSpan={1}>20.2</td>
                    <td colSpan={1}>21.0</td>
                    <td colSpan={1}>21.0</td>
                </tr>
                <tr>
                    <td colSpan={1}>70</td>
                    <td colSpan={1}>12.6</td>
                    <td colSpan={1}>16.8</td>
                    <td colSpan={1}>19.3</td>
                    <td colSpan={1}>21.0</td>
                    <td colSpan={1}>21.7</td>
                    <td colSpan={1}>21.6</td>
                </tr>
                <tr>
                    <td colSpan={1}>65</td>
                    <td colSpan={1}>13.8</td>
                    <td colSpan={1}>17.7</td>
                    <td colSpan={1}>20.1</td>
                    <td colSpan={1}>21.7</td>
                    <td colSpan={1}>22.4</td>
                    <td colSpan={1}>22.3</td>
                </tr>
                <tr>
                    <td colSpan={1}>60</td>
                    <td colSpan={1}>14.8</td>
                    <td colSpan={1}>18.4</td>
                    <td colSpan={1}>20.8</td>
                    <td colSpan={1}>22.3</td>
                    <td colSpan={1}>23.0</td>
                    <td colSpan={1}>22.9</td>
                </tr>
                <tr>
                    <td colSpan={1}>55</td>
                    <td 
                        colSpan={1} 
                        rowSpan={4}
                         data-currentcategory={user.bodyComp.category && user.bodyComp?.category === 'fair' && user.sex === 'MALE' ? 'yes' : 'no'}                       
                        >Fair</td>
                    <td colSpan={1}>15.8</td>
                    <td colSpan={1}>19.2</td>
                    <td colSpan={1}>21.4</td>
                    <td colSpan={1}>23.0</td>
                    <td colSpan={1}>23.6</td>
                    <td colSpan={1}>23.7</td>
                </tr>
                <tr>
                    <td colSpan={1}>50</td>
                    <td colSpan={1}>16.6</td>
                    <td colSpan={1}>20.0</td>
                    <td colSpan={1}>22.1</td>
                    <td colSpan={1}>23.6</td>
                    <td colSpan={1}>24.2</td>
                    <td colSpan={1}>24.1</td>
                </tr>
                <tr>
                    <td colSpan={1}>45</td>
                    <td colSpan={1}>17.5</td>
                    <td colSpan={1}>20.7</td>
                    <td colSpan={1}>22.8</td>
                    <td colSpan={1}>24.2</td>
                    <td colSpan={1}>24.9</td>
                    <td colSpan={1}>24.7</td>
                </tr>
                <tr>
                    <td colSpan={1}>40</td>
                    <td colSpan={1}>18.6</td>
                    <td colSpan={1}>21.6</td>
                    <td colSpan={1}>23.5</td>
                    <td colSpan={1}>24.9</td>
                    <td colSpan={1}>25.6</td>
                    <td colSpan={1}>25.3</td>
                </tr>
                <tr>
                    <td colSpan={1}>35</td>
                    <td 
                        colSpan={1} 
                        rowSpan={4}
                        data-currentcategory={user.bodyComp.category && user.bodyComp?.category === 'poor' && user.sex === 'MALE' ? 'yes' : 'no'}                        
                        >Poor</td>
                    <td colSpan={1}>19.7</td>
                    <td colSpan={1}>22.4</td>
                    <td colSpan={1}>24.2</td>
                    <td colSpan={1}>25.6</td>
                    <td colSpan={1}>26.4</td>
                    <td colSpan={1}>25.8</td>
                </tr>
                <tr>
                    <td colSpan={1}>30</td>
                    <td colSpan={1}>20.7</td>
                    <td colSpan={1}>23.2</td>
                    <td colSpan={1}>24.9</td>
                    <td colSpan={1}>26.3</td>
                    <td colSpan={1}>27.0</td>
                    <td colSpan={1}>26.5</td>
                </tr>
                <tr>
                    <td colSpan={1}>25</td>
                    <td colSpan={1}>22.0</td>
                    <td colSpan={1}>24.1</td>
                    <td colSpan={1}>25.7</td>
                    <td colSpan={1}>27.1</td>
                    <td colSpan={1}>27.9</td>
                    <td colSpan={1}>27.1</td>
                </tr>
                <tr>
                    <td colSpan={1}>20</td>
                    <td colSpan={1}>23.3</td>
                    <td colSpan={1}>25.1</td>
                    <td colSpan={1}>26.6</td>
                    <td colSpan={1}>28.1</td>
                    <td colSpan={1}>28.8</td>
                    <td colSpan={1}>28.4</td>
                </tr>
                <tr>
                    <td colSpan={1}>15</td>
                    <td 
                        colSpan={1} 
                        rowSpan={4}
                        data-currentcategory={user.bodyComp.category && user.bodyComp?.category === 'very poor' && user.sex === 'MALE' ? 'yes' : 'no'}            
                        >Very Poor</td>
                    <td colSpan={1}>24.9</td>
                    <td colSpan={1}>26.4</td>
                    <td colSpan={1}>27.8</td>
                    <td colSpan={1}>29.2</td>
                    <td colSpan={1}>29.8</td>
                    <td colSpan={1}>29.4</td>
                </tr>
                <tr>
                    <td colSpan={1}>10</td>
                    <td colSpan={1}>26.6</td>
                    <td colSpan={1}>27.8</td>
                    <td colSpan={1}>29.2</td>
                    <td colSpan={1}>30.6</td>
                    <td colSpan={1}>31.2</td>
                    <td colSpan={1}>30.7</td>
                </tr>
                <tr>
                    <td colSpan={1}>5</td>
                    <td colSpan={1}>29.2</td>
                    <td colSpan={1}>30.2</td>
                    <td colSpan={1}>31.3</td>
                    <td colSpan={1}>32.7</td>
                    <td colSpan={1}>33.3</td>
                    <td colSpan={1}>32.9</td>
                </tr>
                <tr>
                    <td colSpan={1}>1</td>
                    <td colSpan={1}>33.4</td>
                    <td colSpan={1}>34.4</td>
                    <td colSpan={1}>35.2</td>
                    <td colSpan={1}>36.4</td>
                    <td colSpan={1}>36.8</td>
                    <td colSpan={1}>37.2</td>
                </tr>
                <tr>
                    <th colSpan={8}>
                        <h3>Female</h3>
                    </th>
                </tr>
                <tr>
                    <th colSpan={8}>
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
                    <td colSpan={1}><strong>70-79</strong></td>
                </tr>
                <tr>
                    <td colSpan={1}>99</td>
                    <td colSpan={1} rowSpan={2}
                        data-currentcategory={user.bodyComp.category && user.bodyComp?.category === 'very lean' && user.sex === 'FEMALE' ? 'yes' : 'no'}                 
                    >Very Lean</td>
                    <td colSpan={1}>11.4</td>
                    <td colSpan={1}>11.2</td>
                    <td colSpan={1}>12.1</td>
                    <td colSpan={1}>13.9</td>
                    <td colSpan={1}>13.9</td>
                    <td colSpan={1}>11.7</td>
                </tr>
                <tr>
                    <td colSpan={1}>95</td>
                    <td colSpan={1}>14.0</td>
                    <td colSpan={1}>13.9</td>
                    <td colSpan={1}>15.2</td>
                    <td colSpan={1}>16.9</td>
                    <td colSpan={1}>17.7</td>
                    <td colSpan={1}>16.4</td>
                </tr>
                <tr>
                    <td colSpan={1}>90</td>
                    <td colSpan={1} rowSpan={2}
                        data-currentcategory={user.bodyComp.category && user.bodyComp?.category === 'excellent' && user.sex === 'FEMALE' ? 'yes' : 'no'}                 
                    
                    >Excellent</td>
                    <td colSpan={1}>15.1</td>
                    <td colSpan={1}>15.5</td>
                    <td colSpan={1}>16.8</td>
                    <td colSpan={1}>19.1</td>
                    <td colSpan={1}>20.2</td>
                    <td colSpan={1}>18.3</td>
                </tr>
                <tr>
                    <td colSpan={1}>85</td>
                    <td colSpan={1}>16.1</td>
                    <td colSpan={1}>16.5</td>
                    <td colSpan={1}>18.3</td>
                    <td colSpan={1}>20.8</td>
                    <td colSpan={1}>22.0</td>
                    <td colSpan={1}>21.2</td>
                </tr>
                <tr>
                    <td colSpan={1}>80</td>
                    <td 
                        colSpan={1} 
                        rowSpan={5}
                        data-currentcategory={user.bodyComp.category && user.bodyComp?.category === 'good' && user.sex === 'FEMALE' ? 'yes' : 'no'}                 
                    >Good</td>
                    <td colSpan={1}>16.8</td>
                    <td colSpan={1}>17.5</td>
                    <td colSpan={1}>19.5</td>
                    <td colSpan={1}>22.3</td>
                    <td colSpan={1}>23.3</td>
                    <td colSpan={1}>22.5</td>
                </tr>
                <tr>
                    <td colSpan={1}>75</td>
                    <td colSpan={1}>17.6</td>
                    <td colSpan={1}>18.3</td>
                    <td colSpan={1}>20.6</td>
                    <td colSpan={1}>23.6</td>
                    <td colSpan={1}>24.6</td>
                    <td colSpan={1}>23.7</td>
                </tr>
                <tr>
                    <td colSpan={1}>70</td>
                    <td colSpan={1}>18.4</td>
                    <td colSpan={1}>19.2</td>
                    <td colSpan={1}>21.7</td>
                    <td colSpan={1}>24.8</td>
                    <td colSpan={1}>25.7</td>
                    <td colSpan={1}>24.8</td>
                </tr>
                <tr>
                    <td colSpan={1}>65</td>
                    <td colSpan={1}>19.0</td>
                    <td colSpan={1}>20.1</td>
                    <td colSpan={1}>22.7</td>
                    <td colSpan={1}>25.8</td>
                    <td colSpan={1}>26.7</td>
                    <td colSpan={1}>25.7</td>
                </tr>
                <tr>
                    <td colSpan={1}>60</td>
                    <td colSpan={1}>19.8</td>
                    <td colSpan={1}>21.0</td>
                    <td colSpan={1}>23.7</td>
                    <td colSpan={1}>26.7</td>
                    <td colSpan={1}>27.5</td>
                    <td colSpan={1}>6.6</td>
                </tr>
                <tr>
                    <td colSpan={1}>55</td>
                    <td 
                        colSpan={1} 
                        rowSpan={4}
                        data-currentcategory={user.bodyComp.category && user.bodyComp?.category === 'fair' && user.sex === 'FEMALE' ? 'yes' : 'no'}                 
                    >Fair</td>
                    <td colSpan={1}>20.6</td>
                    <td colSpan={1}>22.0</td>
                    <td colSpan={1}>24.6</td>
                    <td colSpan={1}>27.6</td>
                    <td colSpan={1}>28.3</td>
                    <td colSpan={1}>27.6</td>
                </tr>
                <tr>
                    <td colSpan={1}>50</td>
                    <td colSpan={1}>21.5</td>
                    <td colSpan={1}>22.8</td>
                    <td colSpan={1}>25.5</td>
                    <td colSpan={1}>28.4</td>
                    <td colSpan={1}>29.2</td>
                    <td colSpan={1}>28.2</td>
                </tr>
                <tr>
                    <td colSpan={1}>45</td>
                    <td colSpan={1}>22.2</td>
                    <td colSpan={1}>23.7</td>
                    <td colSpan={1}>26.4</td>
                    <td colSpan={1}>29.3</td>
                    <td colSpan={1}>30.1</td>
                    <td colSpan={1}>28.9</td>
                </tr>
                <tr>
                    <td colSpan={1}>40</td>
                    <td colSpan={1}>23.4</td>
                    <td colSpan={1}>24.8</td>
                    <td colSpan={1}>27.5</td>
                    <td colSpan={1}>30.1</td>
                    <td colSpan={1}>30.8</td>
                    <td colSpan={1}>30.5</td>
                </tr>
                <tr>
                    <td colSpan={1}>35</td>
                    <td 
                        colSpan={1} 
                        rowSpan={4}
                        data-currentcategory={user.bodyComp.category && user.bodyComp?.category === 'poor' && user.sex === 'FEMALE' ? 'yes' : 'no'}                 
                    >Poor</td>
                    <td colSpan={1}>24.2</td>
                    <td colSpan={1}>25.8</td>
                    <td colSpan={1}>28.4</td>
                    <td colSpan={1}>30.8</td>
                    <td colSpan={1}>31.5</td>
                    <td colSpan={1}>31.0</td>
                </tr>
                <tr>
                    <td colSpan={1}>30</td>
                    <td colSpan={1}>25.5</td>
                    <td colSpan={1}>26.9</td>
                    <td colSpan={1}>29.5</td>
                    <td colSpan={1}>31.8</td>
                    <td colSpan={1}>32.6</td>
                    <td colSpan={1}>31.9</td>
                </tr>
                <tr>
                    <td colSpan={1}>25</td>
                    <td colSpan={1}>26.7</td>
                    <td colSpan={1}>28.1</td>
                    <td colSpan={1}>30.7</td>
                    <td colSpan={1}>32.9</td>
                    <td colSpan={1}>33.3</td>
                    <td colSpan={1}>32.9</td>
                </tr>
                <tr>
                    <td colSpan={1}>20</td>
                    <td colSpan={1}>28.2</td>
                    <td colSpan={1}>29.6</td>
                    <td colSpan={1}>31.9</td>
                    <td colSpan={1}>33.9</td>
                    <td colSpan={1}>34.4</td>
                    <td colSpan={1}>34.0</td>
                </tr>
                <tr>
                    <td colSpan={1}>15</td>
                    <td 
                        colSpan={1} 
                        rowSpan={4}
                        data-currentcategory={user.bodyComp.category && user.bodyComp?.category === 'very poor' && user.sex === 'FEMALE' ? 'yes' : 'no'}                 
                    >Very Poor</td>
                    <td colSpan={1}>30.5</td>
                    <td colSpan={1}>31.5</td>
                    <td colSpan={1}>33.4</td>
                    <td colSpan={1}>35.0</td>
                    <td colSpan={1}>35.6</td>
                    <td colSpan={1}>35.3</td>
                </tr>
                <tr>
                    <td colSpan={1}>10</td>
                    <td colSpan={1}>33.5</td>
                    <td colSpan={1}>33.6</td>
                    <td colSpan={1}>35.1</td>
                    <td colSpan={1}>36.1</td>
                    <td colSpan={1}>36.6</td>
                    <td colSpan={1}>36.4</td>
                </tr>
                <tr>
                    <td colSpan={1}>5</td>
                    <td colSpan={1}>36.6</td>
                    <td colSpan={1}>36.2</td>
                    <td colSpan={1}>37.1</td>
                    <td colSpan={1}>37.6</td>
                    <td colSpan={1}>38.2</td>
                    <td colSpan={1}>38.1</td>
                </tr>
                <tr>
                    <td colSpan={1}>1</td>
                    <td colSpan={1}>38.6</td>
                    <td colSpan={1}>39.0</td>
                    <td colSpan={1}>39.1</td>
                    <td colSpan={1}>39.8</td>
                    <td colSpan={1}>40.3</td>
                    <td colSpan={1}>40.2</td>
                </tr>
            </tbody>
        </table>
    )
}

export default memo(BodyfatCategories);