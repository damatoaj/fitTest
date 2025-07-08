import { VO2Max, FitnessCategory } from "../../interfaces";

//both assume heartRate as bpm, return VO2Max as mL/kg/min
const menMcArdleTest = (heartRate:number) : Number => 111.33 - (.42 * heartRate);
const womenMcArdleTest = (heartRate:number) : Number => 65.81 - (.1847 * heartRate);


const menCardioFitnessClassification  = (age:number, vo2Max:number) : VO2Max => {
    console.time('menCardioFitnessClassification');
    try {
        if (age < 20 || age > 69) throw new Error('Age is outside of the acceptable range');

        if (age <= 29) {
            if (vo2Max >= 66.3) return { vo2Max, category: 'superior' as FitnessCategory} as VO2Max;
            if (vo2Max >= 57.1) return { vo2Max, category: 'excellent'as FitnessCategory} as VO2Max;
            if (vo2Max >= 50.2) return { vo2Max, category: 'good' as FitnessCategory} as VO2Max;
            if (vo2Max >= 44.9) return { vo2Max, category: 'fair' as FitnessCategory} as VO2Max;
            if (vo2Max >= 38.1) return { vo2Max, category: 'poor' as FitnessCategory} as VO2Max;
            console.timeEnd('menCardioFitnessClassification');
            return { vo2Max, category: 'very poor' as FitnessCategory} as VO2Max;
        }
    
        if (age <= 39) {
            if (vo2Max >= 59.8) return { vo2Max, category: 'superior' as FitnessCategory} as VO2Max;
            if (vo2Max >= 51.6) return { vo2Max, category: 'excellent' as FitnessCategory} as VO2Max;
            if (vo2Max >= 45.2) return { vo2Max, category: 'good' as FitnessCategory} as VO2Max;
            if (vo2Max >= 39.6) return { vo2Max, category: 'fair' as FitnessCategory} as VO2Max;
            if (vo2Max >= 34.1) return { vo2Max, category: 'poor' as FitnessCategory} as VO2Max;
            console.timeEnd('menCardioFitnessClassification');
            return { vo2Max, category: 'very poor' as FitnessCategory} as VO2Max;    
        };
    
        if (age <= 49) {
            if (vo2Max >= 55.6) return { vo2Max, category: 'superior' as FitnessCategory} as VO2Max;
            if (vo2Max >= 46.7) return { vo2Max, category: 'excellent' as FitnessCategory} as VO2Max;
            if (vo2Max >= 40.3) return { vo2Max, category: 'good' as FitnessCategory} as VO2Max;
            if (vo2Max >= 35.7) return { vo2Max, category: 'fair' as FitnessCategory} as VO2Max;
            if (vo2Max >= 30.5) return { vo2Max, category: 'poor' as FitnessCategory} as VO2Max;
            console.timeEnd('menCardioFitnessClassification');
            return { vo2Max, category: 'very poor' as FitnessCategory} as VO2Max;    
        };
    
        if (age <= 59) {
            if (vo2Max >= 50.7) return { vo2Max, category: 'superior' as FitnessCategory} as VO2Max;
            if (vo2Max >= 41.2) return { vo2Max, category: 'excellent' as FitnessCategory} as VO2Max;
            if (vo2Max >= 35.1) return { vo2Max, category: 'good' as FitnessCategory} as VO2Max;
            if (vo2Max >= 30.7) return { vo2Max, category: 'fair' as FitnessCategory} as VO2Max;
            if (vo2Max >= 26.1) return { vo2Max, category: 'poor' as FitnessCategory} as VO2Max;
            console.timeEnd('menCardioFitnessClassification');
            return { vo2Max, category: 'very poor' as FitnessCategory} as VO2Max;    
        };
    
        if (vo2Max >= 43) return { vo2Max, category: 'superior' as FitnessCategory} as VO2Max;
        if (vo2Max >= 36.1) return { vo2Max, category: 'excellent' as FitnessCategory} as VO2Max;
        if (vo2Max >= 30.5) return { vo2Max, category: 'good' as FitnessCategory} as VO2Max;
        if (vo2Max >= 26.6) return { vo2Max, category: 'fair' as FitnessCategory} as VO2Max;
        if (vo2Max >= 22.4) return { vo2Max, category: 'poor' as FitnessCategory} as VO2Max;
        console.timeEnd('menCardioFitnessClassification');
        return { vo2Max, category: 'very poor' as FitnessCategory} as VO2Max;  
    } catch (err : any) {
        console.error(err);
        console.timeEnd('menCardioFitnessClassification');
        return { vo2Max, category: '' as FitnessCategory} as VO2Max;
    };  
};

const womenCardioFitnessClassification = (age:number, vo2Max:number) : VO2Max => {
    console.time('womenCardioFitnessClassification');
    try {
        if (age < 20 || age > 69) throw new Error('Age is outside of the acceptable range');
        if (age <= 29) {
            if (vo2Max >= 56) return { vo2Max, category: 'superior' as FitnessCategory} as VO2Max;
            if (vo2Max >= 46.5) return { vo2Max, category: 'excellent' as FitnessCategory} as VO2Max;
            if (vo2Max >= 40.6) return { vo2Max, category: 'good' as FitnessCategory} as VO2Max;
            if (vo2Max >= 34.6) return { vo2Max, category: 'fair' as FitnessCategory} as VO2Max;
            if (vo2Max >= 28.6) return { vo2Max, category: 'poor' as FitnessCategory} as VO2Max;
            console.timeEnd('womenCardioFitnessClassification');
            return { vo2Max, category: 'very poor' as FitnessCategory} as VO2Max;
        }
    
        if (age <= 39) {
            if (vo2Max >= 45.8) return { vo2Max, category: 'superior' as FitnessCategory} as VO2Max;
            if (vo2Max >= 37.5) return { vo2Max, category: 'excellent' as FitnessCategory} as VO2Max;
            if (vo2Max >= 32.2) return { vo2Max, category: 'good' as FitnessCategory} as VO2Max;
            if (vo2Max >= 28.2) return { vo2Max, category: 'fair' as FitnessCategory} as VO2Max;
            if (vo2Max >= 24.1) return { vo2Max, category: 'poor' as FitnessCategory} as VO2Max;
            console.timeEnd('womenCardioFitnessClassification');
            return { vo2Max, category: 'very poor' as FitnessCategory} as VO2Max;    
        };
    
        if (age <= 49) {
            if (vo2Max >= 41.7) return { vo2Max, category: 'superior' as FitnessCategory} as VO2Max;
            if (vo2Max >= 34) return { vo2Max, category: 'excellent' as FitnessCategory} as VO2Max;
            if (vo2Max >= 28.7) return { vo2Max, category: 'good' as FitnessCategory} as VO2Max;
            if (vo2Max >= 24.9) return { vo2Max, category: 'fair' as FitnessCategory} as VO2Max;
            if (vo2Max >= 21.3) return { vo2Max, category: 'poor' as FitnessCategory} as VO2Max;
            console.timeEnd('womenCardioFitnessClassification');
            return { vo2Max, category: 'very poor' as FitnessCategory} as VO2Max;    
        };
    
        if (age <= 59) {
            if (vo2Max >= 35.9) return { vo2Max, category: 'superior' as FitnessCategory} as VO2Max;
            if (vo2Max >= 28.6) return { vo2Max, category: 'excellent' as FitnessCategory} as VO2Max;
            if (vo2Max >= 25.2) return { vo2Max, category: 'good' as FitnessCategory} as VO2Max;
            if (vo2Max >= 21.8) return { vo2Max, category: 'fair' as FitnessCategory} as VO2Max;
            if (vo2Max >= 19.1) return { vo2Max, category: 'poor' as FitnessCategory} as VO2Max;
            console.timeEnd('womenCardioFitnessClassification');
            return { vo2Max, category: 'very poor' as FitnessCategory} as VO2Max;    
        };
    
        if (vo2Max >= 29.4) return { vo2Max, category: 'superior' as FitnessCategory} as VO2Max;
        if (vo2Max >= 24.6) return { vo2Max, category: 'excellent' as FitnessCategory} as VO2Max;
        if (vo2Max >= 21.2) return { vo2Max, category: 'good' as FitnessCategory} as VO2Max;
        if (vo2Max >= 18.9) return { vo2Max, category: 'fair' as FitnessCategory} as VO2Max;
        if (vo2Max >= 16.5) return { vo2Max, category: 'poor' as FitnessCategory} as VO2Max;
        console.timeEnd('womenCardioFitnessClassification');
        return { vo2Max, category: 'very poor' as FitnessCategory} as VO2Max;    
    } catch (err) {
        console.error(err)
        console.timeEnd('womenCardioFitnessClassification');
        return {vo2Max, category: ''}
    };
};

const bruceProtocol = (stage : number) => {
    try {
        console.time('Bruce Protocol');
        if (stage > 6 || stage < 0) throw new RangeError('Only seven stage in a Bruce Protocol');
        const mets = [
            5,
            7,
            10,
            13,
            15,
            18,
            20
        ];
        console.timeEnd('Bruce Protocol');
        return mets[stage]; 
    } catch (err) {
        console.error(err);
    };
};

const modifiedBruceProtocol = (stage : number) => {
    try {
        console.time('Modified Bruce Protocol');
        if (stage > 8 || stage < 0) throw new RangeError('Only seven stage in a Bruce Protocol');
        const mets = [
            2,
            3,
            5,
            7,
            10,
            13,
            15,
            18,
            20
        ];
        console.timeEnd('Modified Bruce Protocol');
        return mets[stage]; 
    } catch (err) {
        console.error(err);
    };
};

const naughtonProtocol = (stage : number) => {
    try {
        console.time('Naughton Protocol');
        if (stage > 6 || stage < 0) throw new RangeError('Only seven stage in a Bruce Protocol');
        const mets = [
            2,
            3,
            4,
            5,
            6,
            7,
            8
        ];
        console.timeEnd('Naughton Protocol');
        return mets[stage]; 
    } catch (err) {
        console.error(err);
    };
};

const modifiedNaughtonProtocol = (stage : number) => {
    try {
        console.time('Modified Naughton Protocol');
        if (stage > 12 || stage < 0) throw new RangeError('Only seven stage in a Bruce Protocol');
        const mets = [
            2,
            3,
            4,
            5,
            6,
            7,
            7,
            9,
            10,
            11,
            12,
            13
        ];
        console.timeEnd('Modified Naughton Protocol');
        return mets[stage]; 
    } catch (err) {
        console.error(err);
    };
};

const rampProtocol = (stage : number) => {
    try {
        console.time('Ramp Protocol');
        if (stage > 30 || stage < 0) throw new RangeError('Only seven stage in a Bruce Protocol');
        const mets = [
            1,
            1,
            2,
            2,
            2,
            3,
            3,
            4,
            4,
            4,
            5,
            5,
            6,
            6,
            6,
            7,
            7,
            8,
            8,
            8,
            9,
            9,
            10,
            10,
            10,
            11,
            11,
            12,
            12,
            13,
            13
        ];
        console.timeEnd('Ramp Protocol');
        return mets[stage]; 
    } catch (err) {
        console.error(err);
    };
};


export {
    menCardioFitnessClassification,
    womenCardioFitnessClassification,
    menMcArdleTest,
    womenMcArdleTest,
    bruceProtocol,
    modifiedBruceProtocol,
    naughtonProtocol,
    modifiedNaughtonProtocol,
    rampProtocol
};