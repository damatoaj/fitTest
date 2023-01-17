import { BenchPress, GripStrength, LegPress } from "../../interfaces"
const menGripStrength = (age:number, kg:number) => {
    //assumes a combined kg for both hands
    if (age < 14 || age > 69) throw new RangeError('Age is outside of the acceptable range')
    if (kg < 0 || kg > 1000) throw new RangeError('KG is outside of acceptable range')
    if (age < 20) {
        if (kg >= 108) return {gripStrength:kg, category:'excellent'} as GripStrength
        if (kg >= 98) return {gripStrength:kg, category: 'very good'} as GripStrength
        if (kg >= 90) return {gripStrength:kg, category:'good'} as GripStrength
        if (kg >= 79) return {gripStrength:kg, category:'fair'} as GripStrength
        return {gripStrength: kg, category: 'poor'} as GripStrength
    }

    if (age <= 29) {
        if (kg >= 115) return {gripStrength:kg, category:'excellent'} as GripStrength
        if (kg >= 104) return {gripStrength:kg, category: 'very good'} as GripStrength
        if (kg >= 95) return {gripStrength:kg, category:'good'} as GripStrength
        if (kg >= 84) return {gripStrength:kg, category:'fair'} as GripStrength
        return {gripStrength: kg, category: 'poor'} as GripStrength
    }

    if (age <= 39) {
        if (kg >= 115) return {gripStrength:kg, category:'excellent'} as GripStrength
        if (kg >= 104) return {gripStrength:kg, category: 'very good'} as GripStrength
        if (kg >= 95) return {gripStrength:kg, category:'good'} as GripStrength
        if (kg >= 84) return {gripStrength:kg, category:'fair'} as GripStrength
        return {gripStrength: kg, category: 'poor'} as GripStrength
    }

    if (age <= 49) {
        if (kg >= 108) return {gripStrength:kg, category:'excellent'} as GripStrength
        if (kg >= 97) return {gripStrength:kg, category: 'very good'} as GripStrength
        if (kg >= 88) return {gripStrength:kg, category:'good'} as GripStrength
        if (kg >= 80) return {gripStrength:kg, category:'fair'} as GripStrength
        return {gripStrength: kg, category: 'poor'} as GripStrength
    }

    if (age <= 59) {
        if (kg >= 101) return {gripStrength:kg, category:'excellent'} as GripStrength
        if (kg >= 92) return {gripStrength:kg, category: 'very good'} as GripStrength
        if (kg >= 84) return {gripStrength:kg, category:'good'} as GripStrength
        if (kg >= 76) return {gripStrength:kg, category:'fair'} as GripStrength
        return {gripStrength: kg, category: 'poor'} as GripStrength
    }

    if (kg >= 100) return {gripStrength:kg, category:'excellent'} as GripStrength
    if (kg >= 91) return {gripStrength:kg, category: 'very good'} as GripStrength
    if (kg >= 84) return {gripStrength:kg, category:'good'} as GripStrength
    if (kg >= 73) return {gripStrength:kg, category:'fair'} as GripStrength
    return {gripStrength: kg, category: 'poor'} as GripStrength
}

const womenGripStrength = (age:number, kg:number) => {
    //assumes a combined kg for both hands
    if (age < 14 || age > 69) throw new RangeError('Age is outside of the acceptable range')
    if (kg < 0 || kg > 1000) throw new RangeError('KG is outside of acceptable range')
    if (age < 20) {
        if (kg >= 68) return {gripStrength:kg, category:'excellent'} as GripStrength
        if (kg >= 60) return {gripStrength:kg, category: 'very good'} as GripStrength
        if (kg >= 53) return {gripStrength:kg, category:'good'} as GripStrength
        if (kg >= 48) return {gripStrength:kg, category:'fair'} as GripStrength
        return {gripStrength: kg, category: 'poor'} as GripStrength
    }

    if (age <= 29) {
        if (kg >= 70) return {gripStrength:kg, category:'excellent'} as GripStrength
        if (kg >= 63) return {gripStrength:kg, category: 'very good'} as GripStrength
        if (kg >= 58) return {gripStrength:kg, category:'good'} as GripStrength
        if (kg >= 52) return {gripStrength:kg, category:'fair'} as GripStrength
        return {gripStrength: kg, category: 'poor'} as GripStrength
    }

    if (age <= 39) {
        if (kg >= 71) return {gripStrength:kg, category:'excellent'} as GripStrength
        if (kg >= 63) return {gripStrength:kg, category: 'very good'} as GripStrength
        if (kg >= 58) return {gripStrength:kg, category:'good'} as GripStrength
        if (kg >= 51) return {gripStrength:kg, category:'fair'} as GripStrength
        return {gripStrength: kg, category: 'poor'} as GripStrength
    }

    if (age <= 49) {
        if (kg >= 69) return {gripStrength:kg, category:'excellent'} as GripStrength
        if (kg >= 61) return {gripStrength:kg, category: 'very good'} as GripStrength
        if (kg >= 54) return {gripStrength:kg, category:'good'} as GripStrength
        if (kg >= 49) return {gripStrength:kg, category:'fair'} as GripStrength
        return {gripStrength: kg, category: 'poor'} as GripStrength
    }

    if (age <= 59) {
        if (kg >= 61) return {gripStrength:kg, category:'excellent'} as GripStrength
        if (kg >= 54) return {gripStrength:kg, category: 'very good'} as GripStrength
        if (kg >= 49) return {gripStrength:kg, category:'good'} as GripStrength
        if (kg >= 45) return {gripStrength:kg, category:'fair'} as GripStrength
        return {gripStrength: kg, category: 'poor'} as GripStrength
    }

    if (kg >= 54) return {gripStrength:kg, category:'excellent'} as GripStrength
    if (kg >= 48) return {gripStrength:kg, category: 'very good'} as GripStrength
    if (kg >= 45) return {gripStrength:kg, category:'good'} as GripStrength
    if (kg >= 41) return {gripStrength:kg, category:'fair'} as GripStrength
    return {gripStrength: kg, category: 'poor'} as GripStrength
}

const menBenchPress = (pushed:number, bodyWeight:number, age:number) => {
    //assumes pushed and bodyweight are both in kg or lbs
    if (bodyWeight < 0 || bodyWeight > 700) throw new Error('Bodyweight is outside of acceptable range')
    if (age < 0 || age > 100) throw new RangeError('Age is outside of acceptable range')
    if (pushed < 0 || pushed > 1000) throw new RangeError('Pushed is outside of acceptable range')

    const bpr = pushed / bodyWeight
    
    if (age < 20) {
        if (bpr >= 1.76) return {category:'superior', benchPress: pushed} as BenchPress
        if (bpr >= 1.34) return {category:'excellent',benchPress:pushed} as BenchPress
        if (bpr >= 1.19) return {category:'good',benchPress:pushed} as BenchPress
        if (bpr >= 1.06) return {category:'fair',benchPress:pushed} as BenchPress
        if (bpr >= .89) return {category:'poor',benchPress:pushed} as BenchPress
        return {category:'very poor',benchPress:pushed} as BenchPress
    }

    if (age <= 29) {
        if (bpr >= 1.63) return {category:'superior', benchPress: pushed} as BenchPress
        if (bpr >= 1.32) return {category:'excellent',benchPress:pushed} as BenchPress
        if (bpr >= 1.14) return {category:'good',benchPress:pushed} as BenchPress
        if (bpr >= .99) return {category:'fair',benchPress:pushed} as BenchPress
        if (bpr >= .88) return {category:'poor',benchPress:pushed} as BenchPress
        return {category:'very poor',benchPress:pushed} as BenchPress
    }

    if (age <= 39) {
        if (bpr >= 1.35) return {category:'superior', benchPress: pushed} as BenchPress
        if (bpr >= 1.12) return {category:'excellent',benchPress:pushed} as BenchPress
        if (bpr >= .98) return {category:'good',benchPress:pushed} as BenchPress
        if (bpr >= .88) return {category:'fair',benchPress:pushed} as BenchPress
        if (bpr >= .78) return {category:'poor',benchPress:pushed} as BenchPress
        return {category:'very poor',benchPress:pushed} as BenchPress
    }

    if (age <= 49) {
        if (bpr >= 1.2) return {category:'superior', benchPress: pushed} as BenchPress
        if (bpr >= 1) return {category:'excellent',benchPress:pushed} as BenchPress
        if (bpr >= .88) return {category:'good',benchPress:pushed} as BenchPress
        if (bpr >= .8) return {category:'fair',benchPress:pushed} as BenchPress
        if (bpr >= .72) return {category:'poor',benchPress:pushed} as BenchPress
        return {category:'very poor',benchPress:pushed} as BenchPress
    }

    if (age <= 59) {
        if (bpr >= 1.05) return {category:'superior', benchPress: pushed} as BenchPress
        if (bpr >= .9) return {category:'excellent',benchPress:pushed} as BenchPress
        if (bpr >= .79) return {category:'good',benchPress:pushed} as BenchPress
        if (bpr >= .71) return {category:'fair',benchPress:pushed} as BenchPress
        if (bpr >= .63) return {category:'poor',benchPress:pushed} as BenchPress
        return {category:'very poor',benchPress:pushed} as BenchPress
    }

    if (bpr >= .94) return {category:'superior', benchPress: pushed} as BenchPress
    if (bpr >= .82) return {category:'excellent',benchPress:pushed} as BenchPress
    if (bpr >= .72) return {category:'good',benchPress:pushed} as BenchPress
    if (bpr >= .66) return {category:'fair',benchPress:pushed} as BenchPress
    if (bpr >= .57) return {category:'poor',benchPress:pushed} as BenchPress
    return {category:'very poor',benchPress:pushed}as BenchPress 
}

const womenBenchPress = (pushed:number, bodyWeight:number, age:number) => {
    //assumes pushed and bodyweight are both in kg or lbs
    if (bodyWeight < 0 || bodyWeight > 700) throw new RangeError('Bodyweight is outside of acceptable range')
    if (age < 0 || age > 100) throw new RangeError('Age is outside of acceptable range')
    if (pushed < 0 || pushed > 1000) throw new RangeError('Pushed is outside of acceptable range')
    
    const bpr = pushed / bodyWeight
    
    if (age < 20) {
        if (bpr >= .88) return {category:'superior', benchPress: pushed} as BenchPress
        if (bpr >= .77) return {category:'excellent',benchPress:pushed} as BenchPress
        if (bpr >= .65) return {category:'good',benchPress:pushed} as BenchPress
        if (bpr >= .58) return {category:'fair',benchPress:pushed} as BenchPress
        if (bpr >= .53) return {category:'poor',benchPress:pushed} as BenchPress
        return {category:'very poor',benchPress:pushed} as BenchPress
    }

    if (age <= 29) {
        if (bpr >= 1.01) return {category:'superior', benchPress: pushed} as BenchPress
        if (bpr >= .8) return {category:'excellent',benchPress:pushed} as BenchPress
        if (bpr >= .7) return {category:'good',benchPress:pushed} as BenchPress
        if (bpr >= .59) return {category:'fair',benchPress:pushed} as BenchPress
        if (bpr >= .51) return {category:'poor',benchPress:pushed} as BenchPress
        return {category:'very poor',benchPress:pushed} as BenchPress
    }

    if (age <= 39) {
        if (bpr >= .82) return {category:'superior', benchPress: pushed} as BenchPress
        if (bpr >= .7) return {category:'excellent',benchPress:pushed} as BenchPress
        if (bpr >= .6) return {category:'good',benchPress:pushed} as BenchPress
        if (bpr >= .53) return {category:'fair',benchPress:pushed} as BenchPress
        if (bpr >= .47) return {category:'poor',benchPress:pushed} as BenchPress
        return {category:'very poor',benchPress:pushed} as BenchPress
    }

    if (age <= 49) {
        if (bpr >= .77) return {category:'superior', benchPress: pushed} as BenchPress
        if (bpr >= .62) return {category:'excellent',benchPress:pushed} as BenchPress
        if (bpr >= .54) return {category:'good',benchPress:pushed} as BenchPress
        if (bpr >= .5) return {category:'fair',benchPress:pushed} as BenchPress
        if (bpr >= .43) return {category:'poor',benchPress:pushed} as BenchPress
        return {category:'very poor',benchPress:pushed} as BenchPress
    }

    if (age <= 59) {
        if (bpr >= .68) return {category:'superior', benchPress: pushed} as BenchPress
        if (bpr >= .55) return {category:'excellent',benchPress:pushed} as BenchPress
        if (bpr >= .48) return {category:'good',benchPress:pushed} as BenchPress
        if (bpr >= .44) return {category:'fair',benchPress:pushed} as BenchPress
        if (bpr >= .39) return {category:'poor',benchPress:pushed} as BenchPress
        return {category:'very poor',benchPress:pushed} as BenchPress
    }

    if (bpr >= .72) return {category:'superior', benchPress: pushed} as BenchPress
    if (bpr >= .54) return {category:'excellent',benchPress:pushed} as BenchPress
    if (bpr >= .47) return {category:'good',benchPress:pushed} as BenchPress
    if (bpr >= .43) return {category:'fair',benchPress:pushed} as BenchPress
    if (bpr >= .38) return {category:'poor',benchPress:pushed} as BenchPress
    return {category:'very poor',benchPress:pushed} as BenchPress
}

const menLegPress = (age:number, pushed:number, bodyWeight:number) => {
    //assumes pushed and bodyweight are both in kg or lbs
    if (bodyWeight < 0 || bodyWeight > 700) throw new RangeError('Bodyweight must be between 1 and 700')
    if (pushed < 0 || pushed > 1000) throw new RangeError('Pushed must be between 1 and 1000')
    if (age < 20 || age > 100) throw new RangeError('Age must be between 20 and 100');
    
    const ratio = pushed / bodyWeight;
    if (age <= 29) {
        if (ratio >= 2.27) return {legPress:pushed, category:'well above average'} as LegPress
        if (ratio >= 2.05) return {legPress:pushed, category:'above average'} as LegPress
        if (ratio >= 1.91) return {legPress:pushed, category:'average'} as LegPress
        if (ratio >= 1.74) return {legPress:pushed, category:'below average'} as LegPress
        return {legPress:pushed, category: 'well below average'} as LegPress
    }

    if (age <= 39 && age >= 30) {
        if (ratio >= 2.07) return {legPress:pushed, category:'well above average'} as LegPress
        if (ratio >= 1.85) return {legPress:pushed, category:'above average'} as LegPress
        if (ratio >= 1.71) return {legPress:pushed, category:'average'} as LegPress
        if (ratio >= 1.59) return {legPress:pushed, category:'below average'} as LegPress
        return {legPress:pushed, category: 'well below average'} as LegPress
    }

    if (age <= 49 && age >= 40) {
        if (ratio >= 1.92) return {legPress:pushed, category:'well above average'} as LegPress
        if (ratio >= 1.74) return {legPress:pushed, category:'above average'} as LegPress
        if (ratio >= 1.62) return {legPress:pushed, category:'average'} as LegPress
        if (ratio >= 1.51) return {legPress:pushed, category:'below average'} as LegPress
        return {legPress:pushed, category: 'well below average'} as LegPress
    }

    if (age <= 59 && age >= 50) {
        if (ratio >= 1.8) return {legPress:pushed, category:'well above average'} as LegPress
        if (ratio >= 1.64) return {legPress:pushed, category:'above average'} as LegPress
        if (ratio >= 1.52) return {legPress:pushed, category:'average'} as LegPress
        if (ratio >= 1.39) return {legPress:pushed, category:'below average'} as LegPress
        return {legPress:pushed, category: 'well below average'} as LegPress
    }

    if (ratio >= 1.73) return {legPress:pushed, category:'well above average'} as LegPress
    if (ratio >= 1.56) return {legPress:pushed, category:'above average'} as LegPress
    if (ratio >= 1.43) return {legPress:pushed, category:'average'} as LegPress
    if (ratio >= 1.3) return {legPress:pushed, category:'below average'} as LegPress
    return {legPress:pushed, category: 'well below average'} as LegPress
}

const womenLegPress = (age:number, pushed:number, bodyWeight:number) => {
    //assumes pushed and bodyweight are both in kg or lbs
    if (bodyWeight < 0 || bodyWeight > 700) throw new RangeError('Bodyweight must be between 1 and 700')
    if (pushed < 0 || pushed > 1000) throw new RangeError('Pushed must be between 1 and 1000')
    if (age < 20 || age > 100) throw new RangeError('Age must be between 20 and 100');
    
    const ratio = pushed / bodyWeight
    if (age <= 29) {
        if (ratio >= 1.82) return {legPress:pushed, category:'well above average'} as LegPress
        if (ratio >= 1.58) return {legPress:pushed, category:'above average'} as LegPress
        if (ratio >= 1.44) return {legPress:pushed, category:'average'} as LegPress
        if (ratio >= 1.27) return {legPress:pushed, category:'below average'} as LegPress
        return {legPress:pushed, category: 'well below average'} as LegPress
    }

    if (age <= 39 && age >= 30) {
        if (ratio >= 1.61) return {legPress:pushed, category:'well above average'} as LegPress
        if (ratio >= 1.39) return {legPress:pushed, category:'above average'} as LegPress
        if (ratio >= 1.27) return {legPress:pushed, category:'average'} as LegPress
        if (ratio >= 1.15) return {legPress:pushed, category:'below average'} as LegPress
        return {legPress:pushed, category: 'well below average'} as LegPress
    }

    if (age <= 49 && age >= 40) {
        if (ratio >= 1.48) return {legPress:pushed, category:'well above average'} as LegPress
        if (ratio >= 1.29) return {legPress:pushed, category:'above average'} as LegPress
        if (ratio >= 1.18) return {legPress:pushed, category:'average'} as LegPress
        if (ratio >= 1.08) return {legPress:pushed, category:'below average'} as LegPress
        return {legPress:pushed, category: 'well below average'} as LegPress
    }

    if (age <= 59 && age >= 50) {
        if (ratio >= 1.37) return {legPress:pushed, category:'well above average'} as LegPress
        if (ratio >= 1.17) return {legPress:pushed, category:'above average'} as LegPress
        if (ratio >= 1.05) return {legPress:pushed, category:'average'} as LegPress
        if (ratio >= .95) return {legPress:pushed, category:'below average'} as LegPress
        return {legPress:pushed, category: 'well below average'} as LegPress
    }

    if (ratio >= 1.32) return {legPress:pushed, category:'well above average'} as LegPress
    if (ratio >= 1.13) return {legPress:pushed, category:'above average'} as LegPress
    if (ratio >= .99) return {legPress:pushed, category:'average'} as LegPress
    if (ratio >= .88) return {legPress:pushed, category:'below average'} as LegPress
    return {legPress:pushed, category: 'well below average'} as LegPress
}

export {
    menGripStrength,
    womenGripStrength,
    menBenchPress,
    womenBenchPress,
    menLegPress,
    womenLegPress
}