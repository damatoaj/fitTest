import { Sex, WeightGoal, ActivityLevel } from "../../interfaces";

export function calculateProtein(mass:number, goal: WeightGoal = 'maintain') {
    let min = 1.2;
    let max = 1.6;

    if (goal === 'gain') {
        min = 1.8;
        max = 2.4;
    };

    if (goal === 'lose') {
        min = 2;
        max = 2.6;
    };
    
    return {
        minGrams : Math.round(min * mass),
        maxGrams : Math.round(max * mass),
        minCal : Math.round(min * mass * 4),
        maxCal : Math.round(max * mass * 4)
    }
};

export function harrisBenedictBMR(sex:Sex='MALE', age:number, height:number, mass:number, activityLevel:ActivityLevel='moderately active') {
    // this calculation assumes measurements in metric
    let rawBMR:number =  66 + (14 * mass) + (5 * height) - (7 * age);
    if (sex === 'MALE') {
        if(activityLevel === 'sedentary') return Math.round(rawBMR * 1.2);
        if(activityLevel === 'light activity') return  Math.round(rawBMR * 1.375);
        if(activityLevel === 'very active') return  Math.round(rawBMR * 1.725);
        if(activityLevel === 'extra active') return Math.round(rawBMR * 1.9);
        return  Math.round(rawBMR * 1.55);
    };

    rawBMR = 655 + (9.6 * mass) + (1.85 * height) - (4.7 * age);
    if(activityLevel === 'sedentary') return  Math.round(rawBMR * 1.2);
    if(activityLevel === 'light activity') return  Math.round(rawBMR * 1.375);
    if(activityLevel === 'very active') return  Math.round(rawBMR * 1.725);
    if(activityLevel === 'extra active') return  Math.round(rawBMR * 1.9);
    return  Math.round(rawBMR * 1.55);
};

export function calculateCarbs(totalCalories:number) {
    return { 
        minGrams: Math.round(totalCalories * .55 / 4),
        maxGrams: Math.round(totalCalories * .65 / 4),
        minCal: Math.round(totalCalories * .55),
        maxCal: Math.round(totalCalories * .65)
    }
};

export function calculateMacros(sex:Sex='MALE', age:number, mass:number, height:number, activityLevel:ActivityLevel='moderately active', goal: WeightGoal = 'maintain'){
    console.warn(sex, age, mass, height, activityLevel, goal , typeof age)
    if (sex !== 'MALE' && sex !== 'FEMALE') throw new Error('Invalid sex for this equation')
    if (181 < mass || mass < 4.5) throw new Error('Mass is outside of the acceptable ranges')
    if (height < 90 || mass > 244) throw new Error('Height is outside of the acceptable ranges')
    if (age < 1 || age > 100) throw new Error('Age is outside of the acceptable range')

    const basalMetabolicRate = harrisBenedictBMR(sex, age, height, mass, activityLevel);
    const carbs = calculateCarbs(basalMetabolicRate);
    const protein = calculateProtein(mass, goal);

    return {
        totalCalories: basalMetabolicRate,
        carbs,
        protein
    }
};

