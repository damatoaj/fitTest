import { memo } from 'react'
const BenchPressCategories = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan={8}>
                        <h2>Fitness Categories for Upper Body Strength in Men & Women</h2>
                    </th>
                </tr>
                <tr>
                    <th colSpan={8}>
                        <h3>
                            <strong>
                                Bench Press Weight Ratio = weight pushed in lbs / body weight in lbs
                            </strong>
                        </h3>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th colSpan={8}>
                        <h3>MEN</h3>
                    </th>
                </tr>
                <tr>
                    <th colSpan={8}>
                        <h4>A Group (yr)</h4>
                    </th>
                </tr>
                <tr>
                    <td colSpan={1}><strong>Percentile</strong></td>
                    <td colSpan={1}></td>
                    <td colSpan={1}><strong>{'<20'}</strong></td>
                    <td colSpan={1}><strong>20-29</strong></td>
                    <td colSpan={1}><strong>30-39</strong></td>
                    <td colSpan={1}><strong>40-49</strong></td>
                    <td colSpan={1}><strong>50-59</strong></td>
                    <td colSpan={1}><strong>60+</strong></td>
                </tr>
                <tr>
                    <td colSpan={1}>99</td>
                    <td colSpan={1} rowSpan={2}>Superior</td>
                    <td colSpan={1}>{'>1.76'}</td>
                    <td colSpan={1}>{'>1.63'}</td>
                    <td colSpan={1}>{'>1.35'}</td>
                    <td colSpan={1}>{'>1.20'}</td>
                    <td colSpan={1}>{'>1.05'}</td>
                    <td colSpan={1}>{'>.94'}</td>
                </tr>
                <tr>
                    <td colSpan={1}>95</td>
                    <td colSpan={1}>1.76</td>
                    <td colSpan={1}>1.63</td>
                    <td colSpan={1}>1.35</td>
                    <td colSpan={1}>1.20</td>
                    <td colSpan={1}>1.05</td>
                    <td colSpan={1}>0.94</td>
                </tr>
                <tr>
                    <td colSpan={1}>90</td>
                    <td colSpan={1} rowSpan={3}>Excellent</td>
                    <td colSpan={1}>1.46</td>
                    <td colSpan={1}>1.48</td>
                    <td colSpan={1}>1.24</td>
                    <td colSpan={1}>1.10</td>
                    <td colSpan={1}>0.97</td>
                    <td colSpan={1}>0.89</td>
                </tr>
                <tr>
                    <td colSpan={1}>85</td>
                    <td colSpan={1}>1.38</td>
                    <td colSpan={1}>1.37</td>
                    <td colSpan={1}>1.17</td>
                    <td colSpan={1}>1.04</td>
                    <td colSpan={1}>0.93</td>
                    <td colSpan={1}>0.84</td>
                </tr>
                <tr>
                    <td colSpan={1}>80</td>
                    <td colSpan={1}>1.34</td>
                    <td colSpan={1}>1.32</td>
                    <td colSpan={1}>1.12</td>
                    <td colSpan={1}>1.00</td>
                    <td colSpan={1}>0.90</td>
                    <td colSpan={1}>0.82</td>
                </tr>
                <tr>
                    <td colSpan={1}>75</td>
                    <td colSpan={1} rowSpan={4}>Good</td>
                    <td colSpan={1}>1.29</td>
                    <td colSpan={1}>1.26</td>
                    <td colSpan={1}>1.08</td>
                    <td colSpan={1}>0.96</td>
                    <td colSpan={1}>0.87</td>
                    <td colSpan={1}>0.79</td>
                </tr>
                <tr>
                    <td colSpan={1}>70</td>
                    <td colSpan={1}>1.24</td>
                    <td colSpan={1}>1.22</td>
                    <td colSpan={1}>1.04</td>
                    <td colSpan={1}>0.93</td>
                    <td colSpan={1}>0.84</td>
                    <td colSpan={1}>0.77</td>
                </tr>
                <tr>
                    <td colSpan={1}>65</td>
                    <td colSpan={1}>1.23</td>
                    <td colSpan={1}>1.18</td>
                    <td colSpan={1}>1.01</td>
                    <td colSpan={1}>0.90</td>
                    <td colSpan={1}>0.81</td>
                    <td colSpan={1}>0.74</td>
                </tr>
                <tr>
                    <td colSpan={1}>60</td>
                    <td colSpan={1}>1.19</td>
                    <td colSpan={1}>1.14</td>
                    <td colSpan={1}>0.98</td>
                    <td colSpan={1}>0.88</td>
                    <td colSpan={1}>0.79</td>
                    <td colSpan={1}>0.72</td>
                </tr>
                <tr>
                    <td colSpan={1}>55</td>
                    <td colSpan={1} rowSpan={4}>Fair</td>
                    <td colSpan={1}>1.16</td>
                    <td colSpan={1}>1.10</td>
                    <td colSpan={1}>0.96</td>
                    <td colSpan={1}>0.86</td>
                    <td colSpan={1}>0.77</td>
                    <td colSpan={1}>0.70</td>
                </tr>
                <tr>
                    <td colSpan={1}>50</td>
                    <td colSpan={1}>1.10</td>
                    <td colSpan={1}>1.03</td>
                    <td colSpan={1}>0.90</td>
                    <td colSpan={1}>0.82</td>
                    <td colSpan={1}>0.73</td>
                    <td colSpan={1}>0.67</td>
                </tr>
                <tr>
                    <td colSpan={1}>45</td>
                    <td colSpan={1}>1.10</td>
                    <td colSpan={1}>1.03</td>
                    <td colSpan={1}>0.90</td>
                    <td colSpan={1}>0.82</td>
                    <td colSpan={1}>0.73</td>
                    <td colSpan={1}>0.67</td>
                </tr>
                <tr>
                    <td colSpan={1}>40</td>
                    <td colSpan={1}>1.06</td>
                    <td colSpan={1}>0.99</td>
                    <td colSpan={1}>0.88</td>
                    <td colSpan={1}>0.80</td>
                    <td colSpan={1}>0.71</td>
                    <td colSpan={1}>0.66</td>
                </tr>
                <tr>
                    <td colSpan={1}>35</td>
                    <td colSpan={1} rowSpan={4}>Poor</td>
                    <td colSpan={1}>1.01</td>
                    <td colSpan={1}>0.96</td>
                    <td colSpan={1}>0.86</td>
                    <td colSpan={1}>0.78</td>
                    <td colSpan={1}>0.70</td>
                    <td colSpan={1}>0.65</td>
                </tr>
                <tr>
                    <td colSpan={1}>30</td>
                    <td colSpan={1}>0.96</td>
                    <td colSpan={1}>0.93</td>
                    <td colSpan={1}>0.86</td>
                    <td colSpan={1}>0.78</td>
                    <td colSpan={1}>0.70</td>
                    <td colSpan={1}>0.65</td>
                </tr>
                <tr>
                    <td colSpan={1}>25</td>
                    <td colSpan={1}>0.93</td>
                    <td colSpan={1}>0.90</td>
                    <td colSpan={1}>0.81</td>
                    <td colSpan={1}>0.74</td>
                    <td colSpan={1}>0.66</td>
                    <td colSpan={1}>0.60</td>
                </tr>
                <tr>
                    <td colSpan={1}>20</td>
                    <td colSpan={1}>0.89</td>
                    <td colSpan={1}>0.88</td>
                    <td colSpan={1}>0.78</td>
                    <td colSpan={1}>0.72</td>
                    <td colSpan={1}>0.63</td>
                    <td colSpan={1}>0.57</td>
                </tr>
                <tr>
                    <td colSpan={1}>15</td>
                    <td colSpan={1} rowSpan={4}>Very Poor</td>
                    <td colSpan={1}>0.86</td>
                    <td colSpan={1}>0.84</td>
                    <td colSpan={1}>0.75</td>
                    <td colSpan={1}>0.69</td>
                    <td colSpan={1}>0.60</td>
                    <td colSpan={1}>0.56</td>
                </tr>
                <tr>
                    <td colSpan={1}>10</td>
                    <td colSpan={1}>0.81</td>
                    <td colSpan={1}>0.80</td>
                    <td colSpan={1}>0.71</td>
                    <td colSpan={1}>0.65</td>
                    <td colSpan={1}>0.59</td>
                    <td colSpan={1}>0.53</td>
                </tr>
                <tr>
                    <td colSpan={1}>5</td>
                    <td colSpan={1}>0.76</td>
                    <td colSpan={1}>0.72</td>
                    <td colSpan={1}>0.65</td>
                    <td colSpan={1}>0.59</td>
                    <td colSpan={1}>0.53</td>
                    <td colSpan={1}>0.49</td>
                </tr>
                <tr>
                    <td colSpan={1}>1</td>
                    <td colSpan={1}>{'< 0.76'}</td>
                    <td colSpan={1}>{'< 0.72'}</td>
                    <td colSpan={1}>{'< 0.65'}</td>
                    <td colSpan={1}>{'< 0.59'}</td>
                    <td colSpan={1}>{'< 0.53'}</td>
                    <td colSpan={1}>{'< 0.49'}</td>
                </tr>
                <tr>
                    <th colSpan={8}>
                        <h3>WOMEN</h3>
                    </th>
                </tr>
                <tr>
                    <th colSpan={8}>
                        <h4>A Group (yr)</h4>
                    </th>
                </tr>
                <tr>
                    <td colSpan={1}><strong>Percentile</strong></td>
                    <td colSpan={1}></td>
                    <td colSpan={1}><strong>{'<20'}</strong></td>
                    <td colSpan={1}><strong>20-29</strong></td>
                    <td colSpan={1}><strong>30-39</strong></td>
                    <td colSpan={1}><strong>40-49</strong></td>
                    <td colSpan={1}><strong>50-59</strong></td>
                    <td colSpan={1}><strong>60+</strong></td>
                </tr>
                <tr>
                    <td colSpan={1}>99</td>
                    <td colSpan={1} rowSpan={2}>Superior</td>
                    <td colSpan={1}>{'>0.88'}</td>
                    <td colSpan={1}>{'>1.01'}</td>
                    <td colSpan={1}>{'>0.82'}</td>
                    <td colSpan={1}>{'>0.77'}</td>
                    <td colSpan={1}>{'>0.68'}</td>
                    <td colSpan={1}>{'>0.72'}</td>
                </tr>
                <tr>
                    <td colSpan={1}>95</td>
                    <td colSpan={1}>0.88</td>
                    <td colSpan={1}>1.01</td>
                    <td colSpan={1}>0.82</td>
                    <td colSpan={1}>0.77</td>
                    <td colSpan={1}>0.68</td>
                    <td colSpan={1}>0.72</td>
                </tr>
                <tr>
                    <td colSpan={1}>90</td>
                    <td colSpan={1} rowSpan={3}>Excellent</td>
                    <td colSpan={1}>0.83</td>
                    <td colSpan={1}>0.90</td>
                    <td colSpan={1}>0.76</td>
                    <td colSpan={1}>0.71</td>
                    <td colSpan={1}>0.61</td>
                    <td colSpan={1}>0.64</td>
                </tr>
                <tr>
                    <td colSpan={1}>85</td>
                    <td colSpan={1}>0.81</td>
                    <td colSpan={1}>0.83</td>
                    <td colSpan={1}>0.72</td>
                    <td colSpan={1}>0.66</td>
                    <td colSpan={1}>0.57</td>
                    <td colSpan={1}>0.59</td>
                </tr>
                <tr>
                    <td colSpan={1}>80</td>
                    <td colSpan={1}>0.77</td>
                    <td colSpan={1}>0.80</td>
                    <td colSpan={1}>0.70</td>
                    <td colSpan={1}>0.62</td>
                    <td colSpan={1}>0.55</td>
                    <td colSpan={1}>0.54</td>
                </tr>
                <tr>
                    <td colSpan={1}>75</td>
                    <td colSpan={1} rowSpan={4}>Good</td>
                    <td colSpan={1}>0.76</td>
                    <td colSpan={1}>0.77</td>
                    <td colSpan={1}>0.65</td>
                    <td colSpan={1}>0.60</td>
                    <td colSpan={1}>0.53</td>
                    <td colSpan={1}>0.53</td>
                </tr>
                <tr>
                    <td colSpan={1}>70</td>
                    <td colSpan={1}>0.74</td>
                    <td colSpan={1}>0.74</td>
                    <td colSpan={1}>0.63</td>
                    <td colSpan={1}>0.57</td>
                    <td colSpan={1}>0.52</td>
                    <td colSpan={1}>0.51</td>
                </tr>
                <tr>
                    <td colSpan={1}>65</td>
                    <td colSpan={1}>0.70</td>
                    <td colSpan={1}>0.72</td>
                    <td colSpan={1}>0.62</td>
                    <td colSpan={1}>0.55</td>
                    <td colSpan={1}>0.50</td>
                    <td colSpan={1}>0.48</td>
                </tr>
                <tr>
                    <td colSpan={1}>60</td>
                    <td colSpan={1}>0.65</td>
                    <td colSpan={1}>0.70</td>
                    <td colSpan={1}>0.60</td>
                    <td colSpan={1}>0.54</td>
                    <td colSpan={1}>0.48</td>
                    <td colSpan={1}>0.47</td>
                </tr>
                <tr>
                    <td colSpan={1}>55</td>
                    <td colSpan={1} rowSpan={4}>Fair</td>
                    <td colSpan={1}>0.64</td>
                    <td colSpan={1}>0.68</td>
                    <td colSpan={1}>0.58</td>
                    <td colSpan={1}>0.53</td>
                    <td colSpan={1}>0.47</td>
                    <td colSpan={1}>0.46</td>
                </tr>
                <tr>
                    <td colSpan={1}>50</td>
                    <td colSpan={1}>0.63</td>
                    <td colSpan={1}>0.65</td>
                    <td colSpan={1}>0.57</td>
                    <td colSpan={1}>0.52</td>
                    <td colSpan={1}>0.46</td>
                    <td colSpan={1}>0.45</td>
                </tr>
                <tr>
                    <td colSpan={1}>45</td>
                    <td colSpan={1}>0.60</td>
                    <td colSpan={1}>0.63</td>
                    <td colSpan={1}>0.55</td>
                    <td colSpan={1}>0.51</td>
                    <td colSpan={1}>0.45</td>
                    <td colSpan={1}>0.44</td>
                </tr>
                <tr>
                    <td colSpan={1}>40</td>
                    <td colSpan={1}>0.58</td>
                    <td colSpan={1}>0.59</td>
                    <td colSpan={1}>0.53</td>
                    <td colSpan={1}>0.50</td>
                    <td colSpan={1}>0.44</td>
                    <td colSpan={1}>0.43</td>
                </tr>
                <tr>
                    <td colSpan={1}>35</td>
                    <td colSpan={1} rowSpan={4}>Poor</td>
                    <td colSpan={1}>0.57</td>
                    <td colSpan={1}>0.58</td>
                    <td colSpan={1}>0.52</td>
                    <td colSpan={1}>0.48</td>
                    <td colSpan={1}>0.43</td>
                    <td colSpan={1}>0.41</td>
                </tr>
                <tr>
                    <td colSpan={1}>30</td>
                    <td colSpan={1}>0.56</td>
                    <td colSpan={1}>0.56</td>
                    <td colSpan={1}>0.51</td>
                    <td colSpan={1}>0.47</td>
                    <td colSpan={1}>0.42</td>
                    <td colSpan={1}>0.40</td>
                </tr>
                <tr>
                    <td colSpan={1}>25</td>
                    <td colSpan={1}>0.55</td>
                    <td colSpan={1}>0.53</td>
                    <td colSpan={1}>0.49</td>
                    <td colSpan={1}>0.45</td>
                    <td colSpan={1}>0.41</td>
                    <td colSpan={1}>0.39</td>
                </tr>
                <tr>
                    <td colSpan={1}>20</td>
                    <td colSpan={1}>0.53</td>
                    <td colSpan={1}>0.51</td>
                    <td colSpan={1}>0.47</td>
                    <td colSpan={1}>0.43</td>
                    <td colSpan={1}>0.39</td>
                    <td colSpan={1}>0.38</td>
                </tr>
                <tr>
                    <td colSpan={1}>15</td>
                    <td colSpan={1} rowSpan={4}>Very Poor</td>
                    <td colSpan={1}>0.52</td>
                    <td colSpan={1}>0.50</td>
                    <td colSpan={1}>0.45</td>
                    <td colSpan={1}>0.42</td>
                    <td colSpan={1}>0.38</td>
                    <td colSpan={1}>0.36</td>
                </tr>
                <tr>
                    <td colSpan={1}>10</td>
                    <td colSpan={1}>0.50</td>
                    <td colSpan={1}>0.48</td>
                    <td colSpan={1}>0.42</td>
                    <td colSpan={1}>0.38</td>
                    <td colSpan={1}>0.37</td>
                    <td colSpan={1}>0.33</td>
                </tr>
                <tr>
                    <td colSpan={1}>5</td>
                    <td colSpan={1}>0.41</td>
                    <td colSpan={1}>0.44</td>
                    <td colSpan={1}>0.39</td>
                    <td colSpan={1}>0.35</td>
                    <td colSpan={1}>0.31</td>
                    <td colSpan={1}>0.26</td>
                </tr>
                <tr>
                    <td colSpan={1}>1</td>
                    <td colSpan={1}>{'< 0.41'}</td>
                    <td colSpan={1}>{'< 0.44'}</td>
                    <td colSpan={1}>{'< 0.39'}</td>
                    <td colSpan={1}>{'< 0.35'}</td>
                    <td colSpan={1}>{'< 0.31'}</td>
                    <td colSpan={1}>{'< 0.26'}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default memo(BenchPressCategories);