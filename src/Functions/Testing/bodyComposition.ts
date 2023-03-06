import { Sex, BMI, BMIClassifications, WaistCircumferenceCategory, BodyCompCategory } from "../../interfaces";

const calculateBMI = (weight:number, height:number) => {
    //this equation assumes that weight (kg), height (m)
    if (weight < 1 || weight > 800) throw new RangeError('Weight is outside the acceptable parameters');
    if (height < 1 || height > 274) throw new RangeError('Height is outside of the acceptable parameters');

    const bmi = weight / (height ** 2)
    if (bmi < 18.5) return { bmi, classification:  'underweight' as BMIClassifications } as BMI
    if (25 > bmi && bmi >= 18.5) return {bmi, classification: 'normal'  as BMIClassifications } as BMI
    if (30 > bmi && bmi >= 25) return { bmi, classification: 'overweight' as BMIClassifications } as BMI
    if (35 > bmi && bmi >= 30) return {bmi, classification: 'obesity class 1'  as BMIClassifications } as BMI
    if (40 > bmi && bmi >= 35) return { bmi, classification: 'obesity class 2' as BMIClassifications } as BMI
    return { bmi, classification: 'obesity class 3'  as BMIClassifications } as BMI
};

const waistCircumferenceRiskFactor = (sex:Sex = 'MALE', wc: number) => {
    if (sex !== 'MALE' && sex !== 'FEMALE') throw new TypeError('Sex must be MALE or FEMALE')
    if (wc < 20 || wc > 500) throw new RangeError('WC must be between 20 and 500')
    //WC should be in centimeters
    if (sex === 'MALE') {
        if (wc < 80) return 'very low' as WaistCircumferenceCategory;
        if (wc <= 99 && wc >= 80) return 'low' as WaistCircumferenceCategory;
        if (wc <= 120 && wc >= 100) return 'high' as WaistCircumferenceCategory;
        if (wc > 120) return 'very high' as WaistCircumferenceCategory;
    }
    if (wc <70) return 'very low' as WaistCircumferenceCategory;
    if (wc <= 89 && wc >= 70) return 'low' as WaistCircumferenceCategory;
    if (wc <= 110 && wc >= 90) return 'high' as WaistCircumferenceCategory; 
    if (wc > 110) return 'very high' as WaistCircumferenceCategory;
};

const menBodyComp = (age:number, bodyFat:number) => {
    if(age < 20 || age > 80) throw new RangeError('Age is outside of range');
    if (bodyFat < 1 || bodyFat > 100) throw new RangeError('Percent must be between 1 and 100');

    if (age <= 29) {
        if (bodyFat <= 6.4) return 'very lean' as BodyCompCategory;
        if (bodyFat <= 10.5) return 'excellent' as BodyCompCategory;
        if (bodyFat <= 14.8) return 'good' as BodyCompCategory;
        if (bodyFat <= 18.6) return 'fair' as BodyCompCategory;
        if (bodyFat <= 23.3) return 'poor' as BodyCompCategory;
        return 'very poor' as BodyCompCategory;
    }

    if (age <= 39) {
        if (bodyFat <= 10.3) return 'very lean' as BodyCompCategory;
        if (bodyFat <= 14.9) return 'excellent' as BodyCompCategory;
        if (bodyFat <= 18.4) return 'good' as BodyCompCategory;
        if (bodyFat <= 21.6) return 'fair' as BodyCompCategory;
        if (bodyFat <= 26.6) return 'poor' as BodyCompCategory;
        return 'very poor' as BodyCompCategory;    
    };

    if (age <= 49) {
        if (bodyFat <= 12.9) return 'very lean' as BodyCompCategory;
        if (bodyFat <= 17.5) return 'excellent' as BodyCompCategory;
        if (bodyFat <= 20.8) return 'good' as BodyCompCategory;
        if (bodyFat <= 23.5) return 'fair' as BodyCompCategory;
        if (bodyFat <= 26.6) return 'poor' as BodyCompCategory;
        return 'very poor' as BodyCompCategory;    
    };

    if (age <= 59) {
        if (bodyFat <= 14.8) return 'very lean' as BodyCompCategory;
        if (bodyFat <= 19.4) return 'excellent' as BodyCompCategory;
        if (bodyFat <= 22.3) return 'good' as BodyCompCategory;
        if (bodyFat <= 24.9) return 'fair' as BodyCompCategory;
        if (bodyFat <= 28.1) return 'poor' as BodyCompCategory;
        return 'very poor' as BodyCompCategory;    
    };

    if (age <= 69) {
        if (bodyFat <= 16.2) return 'very lean' as BodyCompCategory;
        if (bodyFat <= 20.2) return 'excellent' as BodyCompCategory;
        if (bodyFat <= 23) return 'good' as BodyCompCategory;
        if (bodyFat <= 25.6) return 'fair' as BodyCompCategory;
        if (bodyFat <= 28.8) return 'poor' as BodyCompCategory;
        return 'very poor' as BodyCompCategory;    
    };

    if (bodyFat <= 15.5) return 'very lean' as BodyCompCategory;
    if (bodyFat <= 20.1) return 'excellent' as BodyCompCategory;
    if (bodyFat <= 22.9) return 'good' as BodyCompCategory;
    if (bodyFat <= 25.3) return 'fair' as BodyCompCategory;
    if (bodyFat <= 28.4) return 'poor' as BodyCompCategory;
    return 'very poor' as BodyCompCategory; 
};

const womenBodyComp = (age:number, bodyFat:number) => {
    if(age < 20 || age > 80) throw new RangeError('Age is outside of range');
    if (bodyFat < 1 || bodyFat > 100) throw new RangeError('Percent must be between 1 and 100');

    if (age <= 29) {
        if (bodyFat <= 14) return 'very lean' as BodyCompCategory;
        if (bodyFat <= 16.1) return 'excellent' as BodyCompCategory;
        if (bodyFat <= 19.8) return 'good' as BodyCompCategory;
        if (bodyFat <= 23.4) return 'fair' as BodyCompCategory;
        if (bodyFat <= 28.2) return 'poor' as BodyCompCategory;
        return 'very poor' as BodyCompCategory;
    }

    if (age <= 39) {
        if (bodyFat <= 13.9) return 'very lean' as BodyCompCategory;
        if (bodyFat <= 16.5) return 'excellent' as BodyCompCategory;
        if (bodyFat <= 21) return 'good' as BodyCompCategory;
        if (bodyFat <= 24.8) return 'fair' as BodyCompCategory;
        if (bodyFat <= 29.6) return 'poor' as BodyCompCategory;
        return 'very poor' as BodyCompCategory;    
    };

    if (age <= 49) {
        if (bodyFat <= 15.2) return 'very lean' as BodyCompCategory;
        if (bodyFat <= 18.3) return 'excellent' as BodyCompCategory;
        if (bodyFat <= 23.7) return 'good' as BodyCompCategory;
        if (bodyFat <= 27.5) return 'fair' as BodyCompCategory;
        if (bodyFat <= 31.9) return 'poor' as BodyCompCategory;
        return 'very poor' as BodyCompCategory;    
    };

    if (age <= 59) {
        if (bodyFat <= 16.9) return 'very lean' as BodyCompCategory;
        if (bodyFat <= 20.8) return 'excellent' as BodyCompCategory;
        if (bodyFat <= 26.7) return 'good' as BodyCompCategory;
        if (bodyFat <= 30.1) return 'fair' as BodyCompCategory;
        if (bodyFat <= 33.9) return 'poor' as BodyCompCategory;
        return 'very poor' as BodyCompCategory;    
    };

    if (age <= 69) {
        if (bodyFat <= 17.7) return 'very lean' as BodyCompCategory;
        if (bodyFat <= 22) return 'excellent' as BodyCompCategory;
        if (bodyFat <= 27.5) return 'good' as BodyCompCategory;
        if (bodyFat <= 30.8) return 'fair' as BodyCompCategory;
        if (bodyFat <= 34.4) return 'poor' as BodyCompCategory;
        return 'very poor' as BodyCompCategory;    
    };

    if (bodyFat <= 16.4) return 'very lean' as BodyCompCategory;
    if (bodyFat <= 21.2) return 'excellent' as BodyCompCategory;
    if (bodyFat <= 26.6) return 'good' as BodyCompCategory;
    if (bodyFat <= 30.5) return 'fair' as BodyCompCategory;
    if (bodyFat <= 34) return 'poor' as BodyCompCategory;
    return 'very poor' as BodyCompCategory; 
};
export {
    calculateBMI,
    waistCircumferenceRiskFactor,
    menBodyComp,
    womenBodyComp
}