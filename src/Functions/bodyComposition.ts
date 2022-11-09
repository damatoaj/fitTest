const calculateBMI = (weight:number, height:number) => {
    //this equation assumes that weight (kg), height (m)
    if (weight < 1 || weight > 800) throw new Error('Weight is outside the acceptable parameters');
    if (height < 1 || height > 274) throw new Error('Height is outside of the acceptable parameters');

    const bmi = weight / height^2 
    if (bmi < 18.5) return { classification: 'underweight', bmi }
    if (25 > bmi && bmi >= 18.5) return { classification: 'normal', bmi }
    if (30 > bmi && bmi >= 25) return { classification: 'overweight', bmi}
    if (35 > bmi && bmi >= 30) return { classification: 'obesity class 1', bmi }
    if (40 > bmi && bmi >= 35) return { classification: 'obesity class 2', bmi }
    if ( bmi >= 40) return { classification: 'obesity class 3', bmi }
};

const waistCircumferenceRiskFactor = (sex:string = 'male', wc: number) => {
    //WC should be in centimeters
    const Sex = sex.toLocaleLowerCase();
    if (Sex !== 'male' && Sex !== 'female') throw new Error('Sex must be male or female');
    if (Sex === 'male') {
        if (wc < 80) return 'very low';
        if (wc <= 99 && wc >= 80) return 'low';
        if (wc <= 120 && wc >= 100) return 'high';
        if (wc > 120) return 'very high';
    }
    if (wc <70) return 'very low';
    if (wc <= 89 && wc >= 70) return 'low';
    if (wc <= 110 && wc >= 90) return 'high'; 
    if (wc > 110) return 'very high';
};

const menBodyComp = (age:number, bodyFat:number) => {
    if(age < 20 || age > 80) throw new Error('Age is outside of range');
    if (bodyFat < 1 || bodyFat > 100) throw new Error('Percent must be between 1 and 100');

    if (age <= 29) {
        if (bodyFat <= 6.4) return 'very lean';
        if (bodyFat <= 10.5) return 'excellent';
        if (bodyFat <= 14.8) return 'good';
        if (bodyFat <= 18.6) return 'fair';
        if (bodyFat <= 23.3) return 'poor';
        return 'very poor';
    }

    if (age <= 39) {
        if (bodyFat <= 10.3) return 'very lean';
        if (bodyFat <= 14.9) return 'excellent';
        if (bodyFat <= 18.4) return 'good';
        if (bodyFat <= 21.6) return 'fair';
        if (bodyFat <= 26.6) return 'poor';
        return 'very poor';    
    };

    if (age <= 49) {
        if (bodyFat <= 12.9) return 'very lean';
        if (bodyFat <= 17.5) return 'excellent';
        if (bodyFat <= 20.8) return 'good';
        if (bodyFat <= 23.5) return 'fair';
        if (bodyFat <= 26.6) return 'poor';
        return 'very poor';    
    };

    if (age <= 59) {
        if (bodyFat <= 14.8) return 'very lean';
        if (bodyFat <= 19.4) return 'excellent';
        if (bodyFat <= 22.3) return 'good';
        if (bodyFat <= 24.9) return 'fair';
        if (bodyFat <= 28.1) return 'poor';
        return 'very poor';    
    };

    if (age <= 69) {
        if (bodyFat <= 16.2) return 'very lean';
        if (bodyFat <= 20.2) return 'excellent';
        if (bodyFat <= 23) return 'good';
        if (bodyFat <= 25.6) return 'fair';
        if (bodyFat <= 28.8) return 'poor';
        return 'very poor';    
    };

    if (bodyFat <= 15.5) return 'very lean';
    if (bodyFat <= 20.1) return 'excellent';
    if (bodyFat <= 22.9) return 'good';
    if (bodyFat <= 25.3) return 'fair';
    if (bodyFat <= 28.4) return 'poor';
    return 'very poor'; 
};

const womenBodyComp = (age:number, bodyFat:number) => {
    if(age < 20 || age > 80) throw new Error('Age is outside of range');
    if (bodyFat < 1 || bodyFat > 100) throw new Error('Percent must be between 1 and 100');

    if (age <= 29) {
        if (bodyFat <= 14) return 'very lean';
        if (bodyFat <= 16.1) return 'excellent';
        if (bodyFat <= 19.8) return 'good';
        if (bodyFat <= 23.4) return 'fair';
        if (bodyFat <= 28.2) return 'poor';
        return 'very poor';
    }

    if (age <= 39) {
        if (bodyFat <= 13.9) return 'very lean';
        if (bodyFat <= 16.5) return 'excellent';
        if (bodyFat <= 21) return 'good';
        if (bodyFat <= 24.8) return 'fair';
        if (bodyFat <= 29.6) return 'poor';
        return 'very poor';    
    };

    if (age <= 49) {
        if (bodyFat <= 15.2) return 'very lean';
        if (bodyFat <= 18.3) return 'excellent';
        if (bodyFat <= 23.7) return 'good';
        if (bodyFat <= 27.5) return 'fair';
        if (bodyFat <= 31.9) return 'poor';
        return 'very poor';    
    };

    if (age <= 59) {
        if (bodyFat <= 16.9) return 'very lean';
        if (bodyFat <= 20.8) return 'excellent';
        if (bodyFat <= 26.7) return 'good';
        if (bodyFat <= 30.1) return 'fair';
        if (bodyFat <= 33.9) return 'poor';
        return 'very poor';    
    };

    if (age <= 69) {
        if (bodyFat <= 17.7) return 'very lean';
        if (bodyFat <= 22) return 'excellent';
        if (bodyFat <= 27.5) return 'good';
        if (bodyFat <= 30.8) return 'fair';
        if (bodyFat <= 34.4) return 'poor';
        return 'very poor';    
    };

    if (bodyFat <= 16.4) return 'very lean';
    if (bodyFat <= 21.2) return 'excellent';
    if (bodyFat <= 26.6) return 'good';
    if (bodyFat <= 30.5) return 'fair';
    if (bodyFat <= 34) return 'poor';
    return 'very poor'; 
};
export {
    calculateBMI,
    waistCircumferenceRiskFactor,
    menBodyComp,
    womenBodyComp
}