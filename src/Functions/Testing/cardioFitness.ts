import { VO2Max, FitnessCategory } from "../../interfaces";

//both assume heartRate as bpm, return VO2Max as mL/kg/min
const menMcArdleTest = (heartRate:number) : Number => 111.33 - (.42 * heartRate);
const womenMcArdleTest = (heartRate:number) : Number => 65.81 - (.1847 * heartRate);


const menCardioFitnessClassification  = (age:number, vo2Max:number) : VO2Max => {
    if (age < 20 || age > 69) throw new Error('Age is outside of the acceptable range');

    if (age <= 29) {
        if (vo2Max >= 66.3) return { vo2Max, category: 'superior' as FitnessCategory} as VO2Max;
        if (vo2Max >= 57.1) return { vo2Max, category: 'excellent'as FitnessCategory} as VO2Max;
        if (vo2Max >= 50.2) return { vo2Max, category: 'good' as FitnessCategory} as VO2Max;
        if (vo2Max >= 44.9) return { vo2Max, category: 'fair' as FitnessCategory} as VO2Max;
        if (vo2Max >= 38.1) return { vo2Max, category: 'poor' as FitnessCategory} as VO2Max;
        return { vo2Max, category: 'very poor' as FitnessCategory} as VO2Max;
    }

    if (age <= 39) {
        if (vo2Max >= 59.8) return { vo2Max, category: 'superior' as FitnessCategory} as VO2Max;
        if (vo2Max >= 51.6) return { vo2Max, category: 'excellent' as FitnessCategory} as VO2Max;
        if (vo2Max >= 45.2) return { vo2Max, category: 'good' as FitnessCategory} as VO2Max;
        if (vo2Max >= 39.6) return { vo2Max, category: 'fair' as FitnessCategory} as VO2Max;
        if (vo2Max >= 34.1) return { vo2Max, category: 'poor' as FitnessCategory} as VO2Max;
        return { vo2Max, category: 'very poor' as FitnessCategory} as VO2Max;    
    };

    if (age <= 49) {
        if (vo2Max >= 55.6) return { vo2Max, category: 'superior' as FitnessCategory} as VO2Max;
        if (vo2Max >= 46.7) return { vo2Max, category: 'excellent' as FitnessCategory} as VO2Max;
        if (vo2Max >= 40.3) return { vo2Max, category: 'good' as FitnessCategory} as VO2Max;
        if (vo2Max >= 35.7) return { vo2Max, category: 'fair' as FitnessCategory} as VO2Max;
        if (vo2Max >= 30.5) return { vo2Max, category: 'poor' as FitnessCategory} as VO2Max;
        return { vo2Max, category: 'very poor' as FitnessCategory} as VO2Max;    
    };

    if (age <= 59) {
        if (vo2Max >= 50.7) return { vo2Max, category: 'superior' as FitnessCategory} as VO2Max;
        if (vo2Max >= 41.2) return { vo2Max, category: 'excellent' as FitnessCategory} as VO2Max;
        if (vo2Max >= 35.1) return { vo2Max, category: 'good' as FitnessCategory} as VO2Max;
        if (vo2Max >= 30.7) return { vo2Max, category: 'fair' as FitnessCategory} as VO2Max;
        if (vo2Max >= 26.1) return { vo2Max, category: 'poor' as FitnessCategory} as VO2Max;
        return { vo2Max, category: 'very poor' as FitnessCategory} as VO2Max;    
    };

    if (vo2Max >= 43) return { vo2Max, category: 'superior' as FitnessCategory} as VO2Max;
    if (vo2Max >= 36.1) return { vo2Max, category: 'excellent' as FitnessCategory} as VO2Max;
    if (vo2Max >= 30.5) return { vo2Max, category: 'good' as FitnessCategory} as VO2Max;
    if (vo2Max >= 26.6) return { vo2Max, category: 'fair' as FitnessCategory} as VO2Max;
    if (vo2Max >= 22.4) return { vo2Max, category: 'poor' as FitnessCategory} as VO2Max;
    return { vo2Max, category: 'very poor' as FitnessCategory} as VO2Max;    
};

const womenCardioFitnessClassification = (age:number, vo2Max:number) : VO2Max => {
    if (age < 20 || age > 69) throw new Error('Age is outside of the acceptable range');

    if (age <= 29) {
        if (vo2Max >= 56) return { vo2Max, category: 'superior' as FitnessCategory} as VO2Max;
        if (vo2Max >= 46.5) return { vo2Max, category: 'excellent' as FitnessCategory} as VO2Max;
        if (vo2Max >= 40.6) return { vo2Max, category: 'good' as FitnessCategory} as VO2Max;
        if (vo2Max >= 34.6) return { vo2Max, category: 'fair' as FitnessCategory} as VO2Max;
        if (vo2Max >= 28.6) return { vo2Max, category: 'poor' as FitnessCategory} as VO2Max;
        return { vo2Max, category: 'very poor' as FitnessCategory} as VO2Max;
    }

    if (age <= 39) {
        if (vo2Max >= 45.8) return { vo2Max, category: 'superior' as FitnessCategory} as VO2Max;
        if (vo2Max >= 37.5) return { vo2Max, category: 'excellent' as FitnessCategory} as VO2Max;
        if (vo2Max >= 32.2) return { vo2Max, category: 'good' as FitnessCategory} as VO2Max;
        if (vo2Max >= 28.2) return { vo2Max, category: 'fair' as FitnessCategory} as VO2Max;
        if (vo2Max >= 24.1) return { vo2Max, category: 'poor' as FitnessCategory} as VO2Max;
        return { vo2Max, category: 'very poor' as FitnessCategory} as VO2Max;    
    };

    if (age <= 49) {
        if (vo2Max >= 41.7) return { vo2Max, category: 'superior' as FitnessCategory} as VO2Max;
        if (vo2Max >= 34) return { vo2Max, category: 'excellent' as FitnessCategory} as VO2Max;
        if (vo2Max >= 28.7) return { vo2Max, category: 'good' as FitnessCategory} as VO2Max;
        if (vo2Max >= 24.9) return { vo2Max, category: 'fair' as FitnessCategory} as VO2Max;
        if (vo2Max >= 21.3) return { vo2Max, category: 'poor' as FitnessCategory} as VO2Max;
        return { vo2Max, category: 'very poor' as FitnessCategory} as VO2Max;    
    };

    if (age <= 59) {
        if (vo2Max >= 35.9) return { vo2Max, category: 'superior' as FitnessCategory} as VO2Max;
        if (vo2Max >= 28.6) return { vo2Max, category: 'excellent' as FitnessCategory} as VO2Max;
        if (vo2Max >= 25.2) return { vo2Max, category: 'good' as FitnessCategory} as VO2Max;
        if (vo2Max >= 21.8) return { vo2Max, category: 'fair' as FitnessCategory} as VO2Max;
        if (vo2Max >= 19.1) return { vo2Max, category: 'poor' as FitnessCategory} as VO2Max;
        return { vo2Max, category: 'very poor' as FitnessCategory} as VO2Max;    
    };

    if (vo2Max >= 29.4) return { vo2Max, category: 'superior' as FitnessCategory} as VO2Max;
    if (vo2Max >= 24.6) return { vo2Max, category: 'excellent' as FitnessCategory} as VO2Max;
    if (vo2Max >= 21.2) return { vo2Max, category: 'good' as FitnessCategory} as VO2Max;
    if (vo2Max >= 18.9) return { vo2Max, category: 'fair' as FitnessCategory} as VO2Max;
    if (vo2Max >= 16.5) return { vo2Max, category: 'poor' as FitnessCategory} as VO2Max;
    return { vo2Max, category: 'very poor' as FitnessCategory} as VO2Max;    
};

export {
    menCardioFitnessClassification,
    womenCardioFitnessClassification,
    menMcArdleTest,
    womenMcArdleTest
};