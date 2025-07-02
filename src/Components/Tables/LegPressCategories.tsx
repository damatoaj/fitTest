import { memo } from 'react';
import { useUserContext } from '../../Hooks/useUserContext';
const LegPressCategories = () => {
    const { state : {user} } = useUserContext()
    
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={8}>
                        <h2>Fitness Categories for Lower Body Strength in Men & Women</h2>
                    </th>
                </tr>
                <tr>
                    <th colSpan={8}>
                        <h3>
                            <strong>
                                {user.prefers_metric ? 
                                'Leg Press Weight Ratio = weight pushed in KG / body weight in KG' 
                                : 
                                'Leg Press Weight Ratio = weight pushed in LBS / body weight in LBS'
                                }
                            </strong>
                        </h3>
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
                    <td colSpan={1}><strong>60+</strong></td>
                </tr>
                <tr>
                    <td colSpan={1}>90</td>
                    <td colSpan={1} rowSpan={1}>Well Above Average</td>
                    <td colSpan={1}>2.27</td>
                    <td colSpan={1}>2.07</td>
                    <td colSpan={1}>1.92</td>
                    <td colSpan={1}>1.80</td>
                    <td colSpan={1}>1.73</td>
                </tr>
                <tr>
                    <td colSpan={1}>80</td>
                    <td colSpan={1} rowSpan={2}>Above Average</td>
                    <td colSpan={1}>2.13</td>
                    <td colSpan={1}>1.93</td>
                    <td colSpan={1}>1.82</td>
                    <td colSpan={1}>1.71</td>
                    <td colSpan={1}>1.62</td>
                </tr>
                <tr>
                    <td colSpan={1}>70</td>
                    <td colSpan={1}>2.05</td>
                    <td colSpan={1}>1.85</td>
                    <td colSpan={1}>1.74</td>
                    <td colSpan={1}>1.64</td>
                    <td colSpan={1}>1.56</td>
                </tr>
                <tr>
                    <td colSpan={1}>60</td>
                    <td colSpan={1} rowSpan={2}>Average</td>
                    <td colSpan={1}>1.97</td>
                    <td colSpan={1}>1.77</td>
                    <td colSpan={1}>1.68</td>
                    <td colSpan={1}>1.58</td>
                    <td colSpan={1}>1.49</td>
                </tr>
                <tr>
                    <td colSpan={1}>50</td>
                    <td colSpan={1}>1.91</td>
                    <td colSpan={1}>1.71</td>
                    <td colSpan={1}>1.62</td>
                    <td colSpan={1}>1.52</td>
                    <td colSpan={1}>1.43</td>
                </tr>
                <tr>
                    <td colSpan={1}>40</td>
                    <td colSpan={1} rowSpan={2}>Below Average</td>
                    <td colSpan={1}>1.83</td>
                    <td colSpan={1}>1.65</td>
                    <td colSpan={1}>1.57</td>
                    <td colSpan={1}>1.46</td>
                    <td colSpan={1}>1.38</td>
                </tr>
                <tr>
                    <td colSpan={1}>30</td>
                    <td colSpan={1}>1.74</td>
                    <td colSpan={1}>1.59</td>
                    <td colSpan={1}>1.51</td>
                    <td colSpan={1}>1.39</td>
                    <td colSpan={1}>1.30</td>
                </tr>
                <tr>
                    <td colSpan={1}>20</td>
                    <td colSpan={1} rowSpan={2}>Well Below Average</td>
                    <td colSpan={1}>1.63</td>
                    <td colSpan={1}>1.52</td>
                    <td colSpan={1}>1.44</td>
                    <td colSpan={1}>1.32</td>
                    <td colSpan={1}>1.25</td>
                </tr>
                <tr>
                    <td colSpan={1}>10</td>
                    <td colSpan={1}>1.51</td>
                    <td colSpan={1}>1.43</td>
                    <td colSpan={1}>1.35</td>
                    <td colSpan={1}>1.22</td>
                    <td colSpan={1}>1.16</td>
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
                    <td colSpan={1}><strong>60+</strong></td>
                </tr>
                <tr>
                    <td colSpan={1}>90</td>
                    <td colSpan={1} rowSpan={1}>Well Above Average</td>
                    <td colSpan={1}>1.82</td>
                    <td colSpan={1}>1.61</td>
                    <td colSpan={1}>1.48</td>
                    <td colSpan={1}>1.37</td>
                    <td colSpan={1}>1.32</td>
                </tr>
                <tr>
                    <td colSpan={1}>80</td>
                    <td colSpan={1} rowSpan={2}>Above Average</td>
                    <td colSpan={1}>1.68</td>
                    <td colSpan={1}>1.47</td>
                    <td colSpan={1}>1.37</td>
                    <td colSpan={1}>1.25</td>
                    <td colSpan={1}>1.18</td>
                </tr>
                <tr>
                    <td colSpan={1}>70</td>
                    <td colSpan={1}>1.58</td>
                    <td colSpan={1}>1.39</td>
                    <td colSpan={1}>1.29</td>
                    <td colSpan={1}>1.17</td>
                    <td colSpan={1}>1.13</td>
                </tr>
                <tr>
                    <td colSpan={1}>60</td>
                    <td colSpan={1} rowSpan={2}>Average</td>
                    <td colSpan={1}>1.50</td>
                    <td colSpan={1}>1.33</td>
                    <td colSpan={1}>1.23</td>
                    <td colSpan={1}>1.10</td>
                    <td colSpan={1}>1.04</td>
                </tr>
                <tr>
                    <td colSpan={1}>50</td>
                    <td colSpan={1}>1.44</td>
                    <td colSpan={1}>1.27</td>
                    <td colSpan={1}>1.18</td>
                    <td colSpan={1}>1.05</td>
                    <td colSpan={1}>0.99</td>
                </tr>
                <tr>
                    <td colSpan={1}>40</td>
                    <td colSpan={1} rowSpan={2}>Below Average</td>
                    <td colSpan={1}>1.37</td>
                    <td colSpan={1}>1.21</td>
                    <td colSpan={1}>1.13</td>
                    <td colSpan={1}>0.99</td>
                    <td colSpan={1}>0.93</td>
                </tr>
                <tr>
                    <td colSpan={1}>30</td>
                    <td colSpan={1}>1.27</td>
                    <td colSpan={1}>1.15</td>
                    <td colSpan={1}>1.08</td>
                    <td colSpan={1}>0.95</td>
                    <td colSpan={1}>0.88</td>
                </tr>
                <tr>
                    <td colSpan={1}>20</td>
                    <td colSpan={1} rowSpan={2}>Well Below Average</td>
                    <td colSpan={1}>1.22</td>
                    <td colSpan={1}>1.09</td>
                    <td colSpan={1}>1.02</td>
                    <td colSpan={1}>0.88</td>
                    <td colSpan={1}>0.85</td>
                </tr>
                <tr>
                    <td colSpan={1}>10</td>
                    <td colSpan={1}>1.14</td>
                    <td colSpan={1}>1.00</td>
                    <td colSpan={1}>0.94</td>
                    <td colSpan={1}>0.78</td>
                    <td colSpan={1}>0.72</td>
                </tr>
            </tbody>
        </table>
    )
}

export default memo(LegPressCategories);