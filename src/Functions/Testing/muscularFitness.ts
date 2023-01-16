import { BenchPress } from "../../interfaces";
const menGripStrength = (age:number, kg:number) => {
    //assumes a combined kg for both hands
    if (age < 14 || age > 69) throw new Error('Age is outside of the acceptable range');

    if (age < 20) {
        if (kg >= 108) return 'excellent'
        if (kg >= 98) return 'very good'
        if (kg >= 90) return 'good'
        if (kg >= 79) return 'fair'
        return 'poor'
    };

    if (age <= 29) {
        if (kg >= 115) return 'excellent'
        if (kg >= 104) return 'very good'
        if (kg >= 95) return 'good'
        if (kg >= 84) return 'fair'
        return 'poor'
    };

    if (age <= 39) {
        if (kg >= 115) return 'excellent'
        if (kg >= 104) return 'very good'
        if (kg >= 95) return 'good'
        if (kg >= 84) return 'fair'
        return 'poor'
    };

    if (age <= 49) {
        if (kg >= 108) return 'excellent'
        if (kg >= 97) return 'very good'
        if (kg >= 88) return 'good'
        if (kg >= 80) return 'fair'
        return 'poor'
    };

    if (age <= 59) {
        if (kg >= 101) return 'excellent'
        if (kg >= 92) return 'very good'
        if (kg >= 84) return 'good'
        if (kg >= 76) return 'fair'
        return 'poor'
    };

    if (kg >= 100) return 'excellent'
    if (kg >= 91) return 'very good'
    if (kg >= 84) return 'good'
    if (kg >= 73) return 'fair'
    return 'poor'
};

const womenGripStrength = (age:number, kg:number) => {
    //assumes a combined kg for both hands
    if (age < 14 || age > 69) throw new Error('Age is outside of the acceptable range');

    if (age < 20) {
        if (kg >= 68) return 'excellent'
        if (kg >= 60) return 'very good'
        if (kg >= 53) return 'good'
        if (kg >= 48) return 'fair'
        return 'poor'
    };

    if (age <= 29) {
        if (kg >= 70) return 'excellent'
        if (kg >= 63) return 'very good'
        if (kg >= 58) return 'good'
        if (kg >= 52) return 'fair'
        return 'poor'
    };

    if (age <= 39) {
        if (kg >= 71) return 'excellent'
        if (kg >= 63) return 'very good'
        if (kg >= 58) return 'good'
        if (kg >= 51) return 'fair'
        return 'poor'
    };

    if (age <= 49) {
        if (kg >= 69) return 'excellent'
        if (kg >= 61) return 'very good'
        if (kg >= 54) return 'good'
        if (kg >= 49) return 'fair'
        return 'poor'
    };

    if (age <= 59) {
        if (kg >= 61) return 'excellent'
        if (kg >= 54) return 'very good'
        if (kg >= 49) return 'good'
        if (kg >= 45) return 'fair'
        return 'poor'
    };

    if (kg >= 54) return 'excellent'
    if (kg >= 48) return 'very good'
    if (kg >= 45) return 'good'
    if (kg >= 41) return 'fair'
    return 'poor'
};

const menBenchPress = (pushed:number, bodyWeight:number, age:number) => {
    const bpr = pushed / bodyWeight;
    
    if (age < 20) {
        if (bpr >= 1.76) return {category:'superior', benchPress: pushed} as BenchPress
        if (bpr >= 1.34) return {category:'excellent',benchPress:pushed} as BenchPress
        if (bpr >= 1.19) return {category:'good',benchPress:pushed} as BenchPress
        if (bpr >= 1.06) return {category:'fair',benchPress:pushed} as BenchPress
        if (bpr >= .89) return {category:'poor',benchPress:pushed} as BenchPress
        return {category:'very poor',benchPress:pushed} as BenchPress
    };

    if (age <= 29) {
        if (bpr >= 1.63) return {category:'superior', benchPress: pushed} as BenchPress
        if (bpr >= 1.32) return {category:'excellent',benchPress:pushed} as BenchPress
        if (bpr >= 1.14) return {category:'good',benchPress:pushed} as BenchPress
        if (bpr >= .99) return {category:'fair',benchPress:pushed} as BenchPress
        if (bpr >= .88) return {category:'poor',benchPress:pushed} as BenchPress
        return {category:'very poor',benchPress:pushed} as BenchPress
    };

    if (age <= 39) {
        if (bpr >= 1.35) return {category:'superior', benchPress: pushed} as BenchPress
        if (bpr >= 1.12) return {category:'excellent',benchPress:pushed} as BenchPress
        if (bpr >= .98) return {category:'good',benchPress:pushed} as BenchPress
        if (bpr >= .88) return {category:'fair',benchPress:pushed} as BenchPress
        if (bpr >= .78) return {category:'poor',benchPress:pushed} as BenchPress
        return {category:'very poor',benchPress:pushed} as BenchPress
    };

    if (age <= 49) {
        if (bpr >= 1.2) return {category:'superior', benchPress: pushed} as BenchPress
        if (bpr >= 1) return {category:'excellent',benchPress:pushed} as BenchPress
        if (bpr >= .88) return {category:'good',benchPress:pushed} as BenchPress
        if (bpr >= .8) return {category:'fair',benchPress:pushed} as BenchPress
        if (bpr >= .72) return {category:'poor',benchPress:pushed} as BenchPress
        return {category:'very poor',benchPress:pushed} as BenchPress
    };

    if (age <= 59) {
        if (bpr >= 1.05) return {category:'superior', benchPress: pushed} as BenchPress
        if (bpr >= .9) return {category:'excellent',benchPress:pushed} as BenchPress
        if (bpr >= .79) return {category:'good',benchPress:pushed} as BenchPress
        if (bpr >= .71) return {category:'fair',benchPress:pushed} as BenchPress
        if (bpr >= .63) return {category:'poor',benchPress:pushed} as BenchPress
        return {category:'very poor',benchPress:pushed} as BenchPress
    };

    if (bpr >= .94) return {category:'superior', benchPress: pushed} as BenchPress
    if (bpr >= .82) return {category:'excellent',benchPress:pushed} as BenchPress
    if (bpr >= .72) return {category:'good',benchPress:pushed} as BenchPress
    if (bpr >= .66) return {category:'fair',benchPress:pushed} as BenchPress
    if (bpr >= .57) return {category:'poor',benchPress:pushed} as BenchPress
    return {category:'very poor',benchPress:pushed}as BenchPress 
};

const womenBenchPress = (pushed:number, bodyWeight:number, age:number) => {
    const bpr = pushed / bodyWeight;
    
    if (age < 20) {
        if (bpr >= .88) return {category:'superior', benchPress: pushed} as BenchPress
        if (bpr >= .77) return {category:'excellent',benchPress:pushed} as BenchPress
        if (bpr >= .65) return {category:'good',benchPress:pushed} as BenchPress
        if (bpr >= .58) return {category:'fair',benchPress:pushed} as BenchPress
        if (bpr >= .53) return {category:'poor',benchPress:pushed} as BenchPress
        return {category:'very poor',benchPress:pushed} as BenchPress
    };

    if (age <= 29) {
        if (bpr >= 1.01) return {category:'superior', benchPress: pushed} as BenchPress
        if (bpr >= .8) return {category:'excellent',benchPress:pushed} as BenchPress
        if (bpr >= .7) return {category:'good',benchPress:pushed} as BenchPress
        if (bpr >= .59) return {category:'fair',benchPress:pushed} as BenchPress
        if (bpr >= .51) return {category:'poor',benchPress:pushed} as BenchPress
        return {category:'very poor',benchPress:pushed} as BenchPress
    };

    if (age <= 39) {
        if (bpr >= .82) return {category:'superior', benchPress: pushed} as BenchPress
        if (bpr >= .7) return {category:'excellent',benchPress:pushed} as BenchPress
        if (bpr >= .6) return {category:'good',benchPress:pushed} as BenchPress
        if (bpr >= .53) return {category:'fair',benchPress:pushed} as BenchPress
        if (bpr >= .47) return {category:'poor',benchPress:pushed} as BenchPress
        return {category:'very poor',benchPress:pushed} as BenchPress
    };

    if (age <= 49) {
        if (bpr >= .77) return {category:'superior', benchPress: pushed} as BenchPress
        if (bpr >= .62) return {category:'excellent',benchPress:pushed} as BenchPress
        if (bpr >= .54) return {category:'good',benchPress:pushed} as BenchPress
        if (bpr >= .5) return {category:'fair',benchPress:pushed} as BenchPress
        if (bpr >= .43) return {category:'poor',benchPress:pushed} as BenchPress
        return {category:'very poor',benchPress:pushed} as BenchPress
    };

    if (age <= 59) {
        if (bpr >= .68) return {category:'superior', benchPress: pushed} as BenchPress
        if (bpr >= .55) return {category:'excellent',benchPress:pushed} as BenchPress
        if (bpr >= .48) return {category:'good',benchPress:pushed} as BenchPress
        if (bpr >= .44) return {category:'fair',benchPress:pushed} as BenchPress
        if (bpr >= .39) return {category:'poor',benchPress:pushed} as BenchPress
        return {category:'very poor',benchPress:pushed} as BenchPress
    };

    if (bpr >= .72) return {category:'superior', benchPress: pushed} as BenchPress
    if (bpr >= .54) return {category:'excellent',benchPress:pushed} as BenchPress
    if (bpr >= .47) return {category:'good',benchPress:pushed} as BenchPress
    if (bpr >= .43) return {category:'fair',benchPress:pushed} as BenchPress
    if (bpr >= .38) return {category:'poor',benchPress:pushed} as BenchPress
    return {category:'very poor',benchPress:pushed} as BenchPress
};

const menLegPress = (age:number, pushed:number, bodyWeight:number) => {
    if (age < 20) throw new Error('Age is outside of accepted range');
    const ratio = pushed / bodyWeight;
    if (age <= 29) {
        if (ratio >= 2.27) return 'Well above average';
        if (ratio >= 2.05) return 'Well above average';
        if (ratio >= 1.91) return 'Well above average';
        if (ratio >= 1.74) return 'Well above average';
        return 'Well below average'
    };

    if (age <= 39 && age >= 30) {
        if (ratio >= 2.07) return 'Well above average';
        if (ratio >= 1.85) return 'Well above average';
        if (ratio >= 1.71) return 'Well above average';
        if (ratio >= 1.59) return 'Well above average';
        return 'Well below average'
    };

    if (age <= 49 && age >= 40) {
        if (ratio >= 1.92) return 'Well above average';
        if (ratio >= 1.74) return 'Well above average';
        if (ratio >= 1.62) return 'Well above average';
        if (ratio >= 1.51) return 'Well above average';
        return 'Well below average'
    };

    if (age <= 59 && age >= 50) {
        if (ratio >= 1.8) return 'Well above average';
        if (ratio >= 1.64) return 'Well above average';
        if (ratio >= 1.52) return 'Well above average';
        if (ratio >= 1.39) return 'Well above average';
        return 'Well below average'
    };

    if (ratio >= 1.73) return 'Well above average';
    if (ratio >= 1.56) return 'Well above average';
    if (ratio >= 1.43) return 'Well above average';
    if (ratio >= 1.3) return 'Well above average';
    return 'Well below average' 
};

const womenLegPress = (age:number, pushed:number, bodyWeight:number) => {
    if (age < 20) throw new Error('Age is outside of accepted range');
    const ratio = pushed / bodyWeight;
    if (age <= 29) {
        if (ratio >= 1.82) return 'Well above average';
        if (ratio >= 1.58) return 'Well above average';
        if (ratio >= 1.44) return 'Well above average';
        if (ratio >= 1.27) return 'Well above average';
        return 'Well below average'
    };

    if (age <= 39 && age >= 30) {
        if (ratio >= 1.61) return 'Well above average';
        if (ratio >= 1.39) return 'Well above average';
        if (ratio >= 1.27) return 'Well above average';
        if (ratio >= 1.15) return 'Well above average';
        return 'Well below average'
    };

    if (age <= 49 && age >= 40) {
        if (ratio >= 1.48) return 'Well above average';
        if (ratio >= 1.29) return 'Well above average';
        if (ratio >= 1.18) return 'Well above average';
        if (ratio >= 1.08) return 'Well above average';
        return 'Well below average'
    };

    if (age <= 59 && age >= 50) {
        if (ratio >= 1.37) return 'Well above average';
        if (ratio >= 1.17) return 'Well above average';
        if (ratio >= 1.05) return 'Well above average';
        if (ratio >= .95) return 'Well above average';
        return 'Well below average'
    };

    if (ratio >= 1.32) return 'Well above average';
    if (ratio >= 1.13) return 'Well above average';
    if (ratio >= .99) return 'Well above average';
    if (ratio >= .88) return 'Well above average';
    return 'Well below average' 
};

export {
    menGripStrength,
    womenGripStrength,
    menBenchPress,
    womenBenchPress,
    menLegPress,
    womenLegPress
};