import { BenchPress, GripStrength, LegPress } from "../../interfaces"

const menGripStrength = (age:number, kg:number): GripStrength => {
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
        return {
            gripStrength: kg,
            category: categories[categoryIndex],
        };  
    } catch (err: any) {
        console.error(err)
        return {
            gripStrength: -1,
            category: err.message
        }
    }
}

const womenGripStrength = (age:number, kg:number) : GripStrength => {
    console.log(age, kg)
    console.time('women grip')
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
        console.log(entry, thresholds, categoryIndex, '<--- category index')
        const categories: ('excellent' | 'very good' | 'good' | 'fair' | 'poor')[] = ['poor', 'fair', 'good', 'very good', 'excellent'];
        console.timeEnd('women grip')
        return {
            gripStrength: kg,
            category: categories[categoryIndex % categories.length],
        };  
    } catch (err: any){
        console.error(err)
        console.timeEnd('women grip')
        return {
            gripStrength: -1,
            category: err.message,
        }; 
    }
    
}

const menBenchPress = (pushed:number, bodyWeight:number, age:number) : BenchPress => {
    //assumes pushed and bodyweight are both in kg or lbs
    if (bodyWeight < 0 || bodyWeight > 700) throw new Error('Bodyweight is outside of acceptable range')
    if (age < 0 || age > 100) throw new RangeError('Age is outside of acceptable range')
    if (pushed < 0 || pushed > 1000) throw new RangeError('Pushed is outside of acceptable range')

    const bpr = pushed / bodyWeight
    
    if (age < 20) {
        if (bpr >= 1.76) return {category:'superior', benchPress: pushed} 
        if (bpr >= 1.34) return {category:'excellent',benchPress:pushed} 
        if (bpr >= 1.19) return {category:'good',benchPress:pushed} 
        if (bpr >= 1.06) return {category:'fair',benchPress:pushed} 
        if (bpr >= .89) return {category:'poor',benchPress:pushed} 
        return {category:'very poor',benchPress:pushed} 
    }

    if (age <= 29) {
        if (bpr >= 1.63) return {category:'superior', benchPress: pushed} 
        if (bpr >= 1.32) return {category:'excellent',benchPress:pushed} 
        if (bpr >= 1.14) return {category:'good',benchPress:pushed} 
        if (bpr >= .99) return {category:'fair',benchPress:pushed} 
        if (bpr >= .88) return {category:'poor',benchPress:pushed} 
        return {category:'very poor',benchPress:pushed} 
    }

    if (age <= 39) {
        if (bpr >= 1.35) return {category:'superior', benchPress: pushed} 
        if (bpr >= 1.12) return {category:'excellent',benchPress:pushed} 
        if (bpr >= .98) return {category:'good',benchPress:pushed} 
        if (bpr >= .88) return {category:'fair',benchPress:pushed} 
        if (bpr >= .78) return {category:'poor',benchPress:pushed} 
        return {category:'very poor',benchPress:pushed} 
    }

    if (age <= 49) {
        if (bpr >= 1.2) return {category:'superior', benchPress: pushed} 
        if (bpr >= 1) return {category:'excellent',benchPress:pushed} 
        if (bpr >= .88) return {category:'good',benchPress:pushed} 
        if (bpr >= .8) return {category:'fair',benchPress:pushed} 
        if (bpr >= .72) return {category:'poor',benchPress:pushed} 
        return {category:'very poor',benchPress:pushed} 
    }

    if (age <= 59) {
        if (bpr >= 1.05) return {category:'superior', benchPress: pushed} 
        if (bpr >= .9) return {category:'excellent',benchPress:pushed} 
        if (bpr >= .79) return {category:'good',benchPress:pushed} 
        if (bpr >= .71) return {category:'fair',benchPress:pushed} 
        if (bpr >= .63) return {category:'poor',benchPress:pushed} 
        return {category:'very poor',benchPress:pushed} 
    }

    if (bpr >= .94) return {category:'superior', benchPress: pushed} 
    if (bpr >= .82) return {category:'excellent',benchPress:pushed} 
    if (bpr >= .72) return {category:'good',benchPress:pushed} 
    if (bpr >= .66) return {category:'fair',benchPress:pushed} 
    if (bpr >= .57) return {category:'poor',benchPress:pushed} 
    return {category:'very poor',benchPress:pushed} 
}

const womenBenchPress = (pushed:number, bodyWeight:number, age:number) : BenchPress => {
    //assumes pushed and bodyweight are both in kg or lbs
    if (bodyWeight < 0 || bodyWeight > 700) throw new RangeError('Bodyweight is outside of acceptable range')
    if (age < 0 || age > 100) throw new RangeError('Age is outside of acceptable range')
    if (pushed < 0 || pushed > 1000) throw new RangeError('Pushed is outside of acceptable range')
    
    const bpr = pushed / bodyWeight
    
    if (age < 20) {
        if (bpr >= .88) return {category:'superior', benchPress: pushed}
        if (bpr >= .77) return {category:'excellent',benchPress:pushed}
        if (bpr >= .65) return {category:'good',benchPress:pushed}
        if (bpr >= .58) return {category:'fair',benchPress:pushed}
        if (bpr >= .53) return {category:'poor',benchPress:pushed}
        return {category:'very poor',benchPress:pushed}
    }

    if (age <= 29) {
        if (bpr >= 1.01) return {category:'superior', benchPress: pushed}
        if (bpr >= .8) return {category:'excellent',benchPress:pushed}
        if (bpr >= .7) return {category:'good',benchPress:pushed}
        if (bpr >= .59) return {category:'fair',benchPress:pushed}
        if (bpr >= .51) return {category:'poor',benchPress:pushed}
        return {category:'very poor',benchPress:pushed}
    }

    if (age <= 39) {
        if (bpr >= .82) return {category:'superior', benchPress: pushed}
        if (bpr >= .7) return {category:'excellent',benchPress:pushed}
        if (bpr >= .6) return {category:'good',benchPress:pushed}
        if (bpr >= .53) return {category:'fair',benchPress:pushed}
        if (bpr >= .47) return {category:'poor',benchPress:pushed}
        return {category:'very poor',benchPress:pushed}
    }

    if (age <= 49) {
        if (bpr >= .77) return {category:'superior', benchPress: pushed}
        if (bpr >= .62) return {category:'excellent',benchPress:pushed}
        if (bpr >= .54) return {category:'good',benchPress:pushed}
        if (bpr >= .5) return {category:'fair',benchPress:pushed}
        if (bpr >= .43) return {category:'poor',benchPress:pushed}
        return {category:'very poor',benchPress:pushed}
    }

    if (age <= 59) {
        if (bpr >= .68) return {category:'superior', benchPress: pushed}
        if (bpr >= .55) return {category:'excellent',benchPress:pushed}
        if (bpr >= .48) return {category:'good',benchPress:pushed}
        if (bpr >= .44) return {category:'fair',benchPress:pushed}
        if (bpr >= .39) return {category:'poor',benchPress:pushed}
        return {category:'very poor',benchPress:pushed}
    }

    if (bpr >= .72) return {category:'superior', benchPress: pushed}
    if (bpr >= .54) return {category:'excellent',benchPress:pushed}
    if (bpr >= .47) return {category:'good',benchPress:pushed}
    if (bpr >= .43) return {category:'fair',benchPress:pushed}
    if (bpr >= .38) return {category:'poor',benchPress:pushed}
    return {category:'very poor',benchPress:pushed}
}

const menLegPress = (age:number, pushed:number, bodyWeight:number) : LegPress => {
    //assumes pushed and bodyweight are both in kg or lbs
    if (bodyWeight < 0 || bodyWeight > 700) throw new RangeError('Bodyweight must be between 1 and 700')
    if (pushed < 0 || pushed > 1000) throw new RangeError('Pushed must be between 1 and 1000')
    if (age < 20 || age > 100) throw new RangeError('Age must be between 20 and 100');
    
    const ratio = pushed / bodyWeight;
    if (age <= 29) {
        if (ratio >= 2.27) return {legPress:pushed, category:'well above average'}
        if (ratio >= 2.05) return {legPress:pushed, category:'above average'}
        if (ratio >= 1.91) return {legPress:pushed, category:'average'}
        if (ratio >= 1.74) return {legPress:pushed, category:'below average'}
        return {legPress:pushed, category: 'well below average'}
    }

    if (age <= 39 && age >= 30) {
        if (ratio >= 2.07) return {legPress:pushed, category:'well above average'}
        if (ratio >= 1.85) return {legPress:pushed, category:'above average'}
        if (ratio >= 1.71) return {legPress:pushed, category:'average'}
        if (ratio >= 1.59) return {legPress:pushed, category:'below average'}
        return {legPress:pushed, category: 'well below average'}
    }

    if (age <= 49 && age >= 40) {
        if (ratio >= 1.92) return {legPress:pushed, category:'well above average'}
        if (ratio >= 1.74) return {legPress:pushed, category:'above average'}
        if (ratio >= 1.62) return {legPress:pushed, category:'average'}
        if (ratio >= 1.51) return {legPress:pushed, category:'below average'}
        return {legPress:pushed, category: 'well below average'}
    }

    if (age <= 59 && age >= 50) {
        if (ratio >= 1.8) return {legPress:pushed, category:'well above average'}
        if (ratio >= 1.64) return {legPress:pushed, category:'above average'}
        if (ratio >= 1.52) return {legPress:pushed, category:'average'}
        if (ratio >= 1.39) return {legPress:pushed, category:'below average'}
        return {legPress:pushed, category: 'well below average'}
    }

    if (ratio >= 1.73) return {legPress:pushed, category:'well above average'}
    if (ratio >= 1.56) return {legPress:pushed, category:'above average'}
    if (ratio >= 1.43) return {legPress:pushed, category:'average'}
    if (ratio >= 1.3) return {legPress:pushed, category:'below average'}
    return {legPress:pushed, category: 'well below average'}
}

const womenLegPress = (age:number, pushed:number, bodyWeight:number) : LegPress => {
    //assumes pushed and bodyweight are both in kg or lbs
    if (bodyWeight < 0 || bodyWeight > 700) throw new RangeError('Bodyweight must be between 1 and 700')
    if (pushed < 0 || pushed > 1000) throw new RangeError('Pushed must be between 1 and 1000')
    if (age < 20 || age > 100) throw new RangeError('Age must be between 20 and 100');
    
    const ratio = pushed / bodyWeight
    if (age <= 29) {
        if (ratio >= 1.82) return {legPress:pushed, category:'well above average'}
        if (ratio >= 1.58) return {legPress:pushed, category:'above average'}
        if (ratio >= 1.44) return {legPress:pushed, category:'average'}
        if (ratio >= 1.27) return {legPress:pushed, category:'below average'}
        return {legPress:pushed, category: 'well below average'}
    }

    if (age <= 39 && age >= 30) {
        if (ratio >= 1.61) return {legPress:pushed, category:'well above average'}
        if (ratio >= 1.39) return {legPress:pushed, category:'above average'}
        if (ratio >= 1.27) return {legPress:pushed, category:'average'}
        if (ratio >= 1.15) return {legPress:pushed, category:'below average'}
        return {legPress:pushed, category: 'well below average'}
    }

    if (age <= 49 && age >= 40) {
        if (ratio >= 1.48) return {legPress:pushed, category:'well above average'}
        if (ratio >= 1.29) return {legPress:pushed, category:'above average'}
        if (ratio >= 1.18) return {legPress:pushed, category:'average'}
        if (ratio >= 1.08) return {legPress:pushed, category:'below average'}
        return {legPress:pushed, category: 'well below average'}
    }

    if (age <= 59 && age >= 50) {
        if (ratio >= 1.37) return {legPress:pushed, category:'well above average'}
        if (ratio >= 1.17) return {legPress:pushed, category:'above average'}
        if (ratio >= 1.05) return {legPress:pushed, category:'average'}
        if (ratio >= .95) return {legPress:pushed, category:'below average'}
        return {legPress:pushed, category: 'well below average'}
    }

    if (ratio >= 1.32) return {legPress:pushed, category:'well above average'}
    if (ratio >= 1.13) return {legPress:pushed, category:'above average'}
    if (ratio >= .99) return {legPress:pushed, category:'average'}
    if (ratio >= .88) return {legPress:pushed, category:'below average'}
    return {legPress:pushed, category: 'well below average'}
}

export {
    menGripStrength,
    womenGripStrength,
    menBenchPress,
    womenBenchPress,
    menLegPress,
    womenLegPress
}