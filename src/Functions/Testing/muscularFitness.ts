import { BenchPress, GripStrength, LegPress } from "../../interfaces"

const menGripStrength = (age:number, kg:number): GripStrength => {
    console.time('menGripStrength');
    const ageWeightThresholds = [
        { ageRange: { min: 14, max: 19 }, thresholds: [108, 98, 90, 79] },
        { ageRange: { min: 20, max: 29 }, thresholds: [115, 104, 95, 84] },
        { ageRange: { min: 30, max: 39 }, thresholds: [115, 104, 95, 84] },
        { ageRange: { min: 40, max: 49 }, thresholds: [108, 97, 88, 80] },
        { ageRange: { min: 50, max: 59 }, thresholds: [101, 92, 84, 76] },
        { ageRange: { min: 60, max: 69 }, thresholds: [100, 91, 84, 74] }
    ];
    try {
        if (age < 14 || age > 69) throw new RangeError('Age is outside of the acceptable range')
        if (kg < 0 || kg > 1000) throw new RangeError('KG is outside of acceptable range')
        
        const entry = ageWeightThresholds.find(
            (entry) => age >= entry.ageRange.min && age <= entry.ageRange.max
        );
        
        if (!entry) throw new Error('No matching Age Range Found')

        const { thresholds } = entry;
        const categoryIndex = (
            Number(kg >= thresholds[0]) * 8 +
            Number(kg >= thresholds[1]) * 4 +
            Number(kg >= thresholds[2]) * 2 +
            Number(kg >= thresholds[3])
        );

        const categories: ('excellent' | 'very good' | 'good' | 'fair' | 'poor')[] = ['excellent', 'very good', 'good', 'fair', 'poor'];
        console.timeEnd('menGripStrength');
        return {
            gripStrength: Math.round(kg),
            category: categories[categoryIndex],
        };  
    } catch (err: any) {
        console.error(err);
        console.timeEnd('menGripStrength');
        return {
            gripStrength: kg,
            category: ''
        }
    }
}

const womenGripStrength = (age:number, kg:number) : GripStrength => {
    console.time('womenGripStrength')
    const ageWeightThresholds = [
        { ageRange: { min: 14, max: 19 }, thresholds: [68, 60, 53, 48] },
        { ageRange: { min: 20, max: 29 }, thresholds: [70, 63, 58, 52] },
        { ageRange: { min: 30, max: 39 }, thresholds: [71, 63, 58, 51] },
        { ageRange: { min: 40, max: 49 }, thresholds: [69, 61, 54, 49] },
        { ageRange: { min: 50, max: 59 }, thresholds: [61, 54, 49, 45] },
        { ageRange: { min: 60, max: 69 }, thresholds: [54, 48, 45, 41] }
      ];

    try {
        if (age < 14 || age > 69) throw new RangeError('Age is outside of the acceptable range')
        if (kg < 0 || kg > 1000) throw new RangeError('KG is outside of acceptable range')

        const entry = ageWeightThresholds.find(
            (entry) => age >= entry.ageRange.min && age <= entry.ageRange.max
        );

        if (!entry) throw new Error('No matching Age Range Found')

        const { thresholds } = entry;
        const categoryIndex : number = (
            0 +
            Number(kg >= thresholds[3]) +
            Number(kg >= thresholds[2]) +
            Number(kg >= thresholds[1]) +
            Number(kg >= thresholds[0]) 
        );
        const categories: ('excellent' | 'very good' | 'good' | 'fair' | 'poor')[] = ['poor', 'fair', 'good', 'very good', 'excellent'];
        console.timeEnd('womenGripStrength')
        return {
            gripStrength: Math.round(kg),
            category: categories[categoryIndex % categories.length],
        };  
    } catch (err: any){
        console.error(err);
        console.timeEnd('womenGripStrength');
        return {
            gripStrength: kg,
            category: '',
        }; 
    }
    
}

const menBenchPress = (pushed:number, bodyWeight:number, age:number) : BenchPress => {
    //assumes pushed and bodyweight are both in kg or lbs
    console.time('menBenchPress');
    const ageWeightThresholds = [
        { ageRange: { min: 0, max: 19 }, thresholds: [1.76, 1.34, 1.19, 1.06, .89] },
        { ageRange: { min: 20, max: 29 }, thresholds: [1.63, 1.32, 1.14, .99, .88] },
        { ageRange: { min: 30, max: 39 }, thresholds: [1.35, 1.12, .98, .88, .78] },
        { ageRange: { min: 40, max: 49 }, thresholds: [1.2, 1, .88, .8, .72] },
        { ageRange: { min: 50, max: 59 }, thresholds: [1.05, .9, .79, .71, .63] },
        { ageRange: { min: 60, max: 69 }, thresholds: [.94, .82, .72, .66, .55] }
      ];
    
    const bpr = pushed / bodyWeight;
    try {
        if (bodyWeight < 0 || bodyWeight > 700) throw new Error('Bodyweight is outside of acceptable range')
        if (age < 0 || age > 100) throw new RangeError('Age is outside of acceptable range')
        if (pushed < 0 || pushed > 1000) throw new RangeError('Pushed is outside of acceptable range')
        
        const entry = ageWeightThresholds.find(
            (entry) => age >= entry.ageRange.min && age <= entry.ageRange.max
        );

        if (!entry) throw new Error('No matching age range found');

        const { thresholds } = entry;
        const categoryIndex : number = (
            0 +
            Number(bpr >= thresholds[3]) +
            Number(bpr >= thresholds[2]) +
            Number(bpr >= thresholds[1]) +
            Number(bpr >= thresholds[0]) 
        );
        const categories: ('superior' | 'excellent' | 'good' | 'fair' | 'poor')[] = ['poor', 'fair', 'good', 'excellent', 'superior'];
        console.timeEnd('menBenchPress');
        return { category : categories[categoryIndex % categories.length],benchPress:Math.floor(pushed), benchPressRatio: bpr} 
    } catch (err: any) {
        console.error(err);
        console.timeEnd('menBenchPress')
        return {category:'',benchPress:Math.floor(pushed), benchPressRatio: bpr} 
    };  
};

const womenBenchPress = (pushed:number, bodyWeight:number, age:number) : BenchPress => {
    //assumes pushed and bodyweight are both in kg or lbs
    console.time('womenBenchPress');
    const ageWeightThresholds = [
        { ageRange: { min: 0, max: 19 }, thresholds: [.88, .77, .65, .58, .53] },
        { ageRange: { min: 20, max: 29 }, thresholds: [1.01, .8, .7, .59, .51] },
        { ageRange: { min: 30, max: 39 }, thresholds: [.82, .7, .6, .53, .47] },
        { ageRange: { min: 40, max: 49 }, thresholds: [.77, .62, .54, .5, .43] },
        { ageRange: { min: 50, max: 59 }, thresholds: [.68, .55, .48, .44, .39] },
        { ageRange: { min: 60, max: 69 }, thresholds: [.72, .54, .47, .43, .38] }
      ];
    const bpr = pushed / bodyWeight
    try {
        if (bodyWeight < 0 || bodyWeight > 700) throw new RangeError('Bodyweight is outside of acceptable range')
        if (age < 0 || age > 100) throw new RangeError('Age is outside of acceptable range')
        if (pushed < 0 || pushed > 1000) throw new RangeError('Pushed is outside of acceptable range')
            
        const entry = ageWeightThresholds.find(
            (entry) => age >= entry.ageRange.min && age <= entry.ageRange.max
        );

        if (!entry) throw new Error('No matching age range found');

        const { thresholds } = entry;
        const categoryIndex : number = (
            0 +
            Number(bpr >= thresholds[3]) +
            Number(bpr >= thresholds[2]) +
            Number(bpr >= thresholds[1]) +
            Number(bpr >= thresholds[0]) 
        );
        const categories: ('superior' | 'excellent' | 'good' | 'fair' | 'poor')[] = ['poor', 'fair', 'good', 'excellent', 'superior'];
        console.timeEnd('womenBenchPress');
        return { category : categories[categoryIndex % categories.length],benchPress:Math.floor(pushed), benchPressRatio: bpr} 
    } catch (err) {
        console.error(err);
        console.timeEnd('womenBenchPress');
        return {category:'', benchPress: Math.floor(pushed), benchPressRatio:bpr}
    };
};

const menLegPress = (age:number, pushed:number, bodyWeight:number) : LegPress => {
    //assumes pushed and bodyweight are both in kg or lbs
    console.time('menLegPress');

    const ageWeightThresholds = [
        { ageRange: { min: 20, max: 29 }, thresholds: [2.27, 2.05, 1.91, 1.74] },
        { ageRange: { min: 30, max: 39 }, thresholds: [2.07, 1.85, 1.71, 1.59] },
        { ageRange: { min: 40, max: 49 }, thresholds: [1.92, 1.74, 1.62, 1.51] },
        { ageRange: { min: 50, max: 59 }, thresholds: [1.8, 1.64, 1.52, 1.39] },
        { ageRange: { min: 60, max: 69 }, thresholds: [1.73, 1.56, 1.43, 1.3] }
      ];

    const r = pushed / bodyWeight;
    try {
        if (bodyWeight < 0 || bodyWeight > 700) throw new RangeError('Body weight is outside of acceptable ranges');
        if (pushed < 0 || pushed > 1000) throw new RangeError('Weight pushed is outside of acceptable ranges');
        if (age < 20 || age > 100) throw new RangeError('Age is outside of acceptable ranges')
    
        const entry = ageWeightThresholds.find(
            (entry) => age >= entry.ageRange.min && age <= entry.ageRange.max
        );

        if (!entry) throw new Error('No matching age range found');

        const { thresholds } = entry;
        const categoryIndex : number = (
            0 +
            Number(r >= thresholds[3]) +
            Number(r >= thresholds[2]) +
            Number(r >= thresholds[1]) +
            Number(r >= thresholds[0]) 
        );
        const categories: ('well above average' | 'above average' | 'average' | 'below average' | 'well below average')[] = ['well below average', 'below average', 'average', 'above average', 'well above average'];
        console.timeEnd('menLegPress');
        return {legPress:pushed, category : categories[categoryIndex % categories.length], legPressRatio: r }
    } catch (err : any) {
        console.error(err);
        console.timeEnd('menLegPress');
        return {legPress:pushed, category:'', legPressRatio: r};
    };
};

const womenLegPress = (age:number, pushed:number, bodyWeight:number) : LegPress => {
    //assumes pushed and bodyweight are both in kg or lbs
    console.time('womenLegPress');

    const ageWeightThresholds = [
        { ageRange: { min: 20, max: 29 }, thresholds: [1.82, 1.58, 1.44, 1.27] },
        { ageRange: { min: 30, max: 39 }, thresholds: [1.61, 1.39, 1.27, 1.15] },
        { ageRange: { min: 40, max: 49 }, thresholds: [1.48, 1.29, 1.18, 1.08] },
        { ageRange: { min: 50, max: 59 }, thresholds: [1.37, 1.17, 1.05, .95] },
        { ageRange: { min: 60, max: 69 }, thresholds: [1.32, 1.13, .99, .88] }
      ];

    const r = pushed / bodyWeight;

    try {
        if (bodyWeight < 0 || bodyWeight > 700) throw new RangeError('Body weight outside acceptable range');
        if (pushed < 0 || pushed > 1000) throw new RangeError('Pushed weight outside of acceptable range');
        if (age < 20 || age > 100) throw new RangeError('Age is outside of acceptable range');
            
        const entry = ageWeightThresholds.find(
            (entry) => age >= entry.ageRange.min && age <= entry.ageRange.max
        );

        if (!entry) throw new Error('No matching age range found');

        const { thresholds } = entry;
        const categoryIndex : number = (
            0 +
            Number(r >= thresholds[3]) +
            Number(r >= thresholds[2]) +
            Number(r >= thresholds[1]) +
            Number(r >= thresholds[0]) 
        );    

        const categories: ('well above average' | 'above average' | 'average' | 'below average' | 'well below average')[] = ['well below average', 'below average', 'average', 'above average', 'well above average'];
        console.timeEnd('womenLegPress');
        return {legPress:pushed, category : categories[categoryIndex % categories.length], legPressRatio:r};
    } catch (err: any) {
        console.error(err);
        console.timeEnd('womenLegPress');
        return {legPress:pushed, category:'', legPressRatio:r};
    };
    
}

export {
    menGripStrength,
    womenGripStrength,
    menBenchPress,
    womenBenchPress,
    menLegPress,
    womenLegPress
}