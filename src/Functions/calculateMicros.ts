function calculateFiber(sex:string, age:number) {
    const unit : string = 'grams';
    if (sex === 'male') {
        if (age < 4) return { amount: 19, unit }
        if (age < 9) return { amount: 25, unit }
        if (age < 14) return { amount: 31, unit }
        if (age < 52) return { amount: 38, unit }
        return { amount: 30, unit }
    }

    if (age < 4) return { amount: 19, unit }
    if (age < 9) return { amount: 25, unit }
    if (age < 19) return { amount: 26, unit }
    if (age < 51) return { amount: 25, unit }
    return { amount: 21, unit }
};

function calculateVitaminA(sex:string, age:number){
    const unit : string = 'micrograms';
    if (sex === 'male') {
        if (age < .9) return { amount: 400, unit }
        if (age < 1) return { amount: 500, unit }
        if (age < 3) return { amount: 300, unit }
        if (age < 9) return { amount: 400, unit }
        if (age < 14) return { amount: 600, unit }
        return { amount: 900, unit }
    }

    if (age < .9) return { amount: 400, unit }
    if (age < 1) return { amount: 500, unit }
    if (age < 4) return { amount: 300, unit }
    if (age < 9) return { amount: 400, unit }
    if (age < 14) return { amount: 600, unit }

    return { amount: 700, unit }
};

function calculateVitaminD(sex:string, age:number){
    const unit : string = 'micrograms';
    if (sex === 'male') {
        if (age < 1) return { amount: 400, unit }
        if (age < 70) return { amount: 600, unit }
        return { amount: 800, unit }
    }

    if (age < 1) return { amount: 400, unit }
    if (age < 70) return { amount: 600, unit }
    return { amount: 800, unit }
};

function calculateVitaminE(sex:string, age:number){
    const unit : string = 'milligrams';
    if (sex === 'male') {
        if (age < 4) return { amount: 6, unit }
        if (age < 9) return { amount: 7, unit }
        if (age < 14) return { amount: 11, unit }
        return { amount: 15, unit }
    }

    if (age < .9) return { amount: 4, unit }
    if (age < 1) return { amount: 5, unit }
    if (age < 4) return { amount: 6, unit }
    if (age < 9) return { amount: 11, unit }
    return { amount: 15, unit }
};

function calculateVitaminK(sex:string, age:number){
    const unit : string = 'micrograms';
    if (sex === 'male') {
        if (age < .9) return { amount: 2, unit }
        if (age < 1) return { amount: 2.5, unit }
        if (age < 4) return { amount: 30, unit }
        if (age < 9) return { amount: 55, unit }
        if (age < 14) return { amount: 60, unit }
        if (age < 19) return { amount: 75, unit }

        return { amount: 120, unit }
    }

    if (age < .9) return { amount: 2, unit }
    if (age < 1) return { amount: 2.5, unit }
    if (age < 4) return { amount: 30, unit }
    if (age < 9) return { amount: 55, unit }
    if (age < 14) return { amount: 60, unit }
    if (age < 19) return { amount: 75, unit }

    return { amount: 90, unit }
};

function calculateVitaminC(sex:string, age:number){
    const unit : string = 'milligrams';
    if (sex === 'male') {
        if (age < .9) return { amount: 40, unit }
        if (age < 1) return { amount: 50, unit }
        if (age < 4) return { amount: 15, unit }
        if (age < 9) return { amount: 25, unit }
        if (age < 14) return { amount: 45, unit }
        if (age < 19) return { amount: 75, unit }

        return { amount: 90, unit }
    }

    if (age < .9) return { amount: 40, unit }
    if (age < 1) return { amount: 50, unit }
    if (age < 4) return { amount: 15, unit }
    if (age < 9) return { amount: 25, unit }
    if (age < 14) return { amount: 45, unit }
    if (age < 19) return { amount: 65, unit }

    return { amount: 75, unit }
};

function calculateVitaminB6(sex:string, age:number){
    const unit : string = 'milligrams';
    if (sex === 'male') {
        if (age < 1) return { amount: .3, unit }
        if (age < 4) return { amount: .5, unit }
        if (age < 9) return { amount: .6, unit }
        if (age < 14) return { amount: 1, unit }
        if (age < 51) return { amount: 1.3, unit }

        return { amount: 1.7, unit }
    }

    if (age < 1) return { amount: .3, unit }
    if (age < 4) return { amount: .5, unit }
    if (age < 9) return { amount: .6, unit }
    if (age < 14) return { amount: 1, unit }
    if (age < 19) return { amount: 1.2, unit }
    if (age < 50) return { amount: 1.3, unit }

    return { amount: 1.5, unit }
};

function calculateVitaminB12(sex:string, age:number){
    const unit : string = 'milligrams';
    if (sex === 'male') {
        if (age < .9) return { amount: .3, unit }
        if (age < 1) return { amount: .5, unit }
        if (age < 4) return { amount: .9, unit }
        if (age < 9) return { amount: 1.2, unit }
        if (age < 14) return { amount: 1.8, unit }

        return { amount: 2.4, unit }
    }

    if (age < .9) return { amount: .4, unit }
    if (age < 1) return { amount: .5, unit }
    if (age < 4) return { amount: .9, unit }
    if (age < 9) return { amount: 1.2, unit }
    if (age < 14) return { amount: 1.8, unit }

    return { amount: 2.4, unit }
};

function calculateRiboflavin(sex:string, age:number){
    const unit : string = 'milligrams';
    if (sex === 'male') {
        if (age < .9) return { amount: .3, unit }
        if (age < 1) return { amount: .4, unit }
        if (age < 4) return { amount: .5, unit }
        if (age < 9) return { amount: .6, unit }
        if (age < 14) return { amount: .9, unit }

        return { amount: 1.3, unit }
    }

    if (age < .9) return { amount: .3, unit }
    if (age < 1) return { amount: .4, unit }
    if (age < 4) return { amount: .5, unit }
    if (age < 9) return { amount: .6, unit }
    if (age < 14) return { amount: .9, unit }
    if (age < 19) return { amount: 1, unit }


    return { amount: 1.1, unit }
};

function calculateFolate(sex:string, age:number){
    const unit : string = 'micrograms';
    if (sex === 'male') {
        if (age < .9) return { amount: 65, unit }
        if (age < 1) return { amount: 80, unit }
        if (age < 4) return { amount: 150, unit }
        if (age < 9) return { amount: 200, unit }
        if (age < 14) return { amount: 300, unit }

        return { amount: 400, unit }
    }

    if (age < .9) return { amount: 65, unit }
    if (age < 1) return { amount: 80, unit }
    if (age < 4) return { amount: 150, unit }
    if (age < 9) return { amount: 200, unit }
    if (age < 14) return { amount: 300, unit }

    return { amount: 400, unit }
};

function calculateCalcium(sex:string, age:number){
    const unit : string = 'milligrams';
    if (sex === 'male') {
        if (age < .9) return { amount: 200, unit }
        if (age < 1) return { amount: 260, unit }
        if (age < 4) return { amount: 700, unit }
        if (age < 9) return { amount: 1000, unit }
        if (age < 19) return { amount: 1300, unit }

        return { amount: 1000, unit }
    }

    if (age < .9) return { amount: 200, unit }
    if (age < 1) return { amount: 260, unit }
    if (age < 4) return { amount: 700, unit }
    if (age < 9) return { amount: 1000, unit }
    if (age < 19) return { amount: 1300, unit }
    if (age < 51) return { amount: 1000, unit }


    return { amount: 1200, unit }
};

function calculateChromium(sex:string, age:number){
    const unit : string = 'micrograms';
    if (sex === 'male') {
        if (age < .9) return { amount: .2, unit }
        if (age < 1) return { amount: 5.5, unit }
        if (age < 4) return { amount: 11, unit }
        if (age < 9) return { amount: 15, unit }
        if (age < 14) return { amount: 25, unit }
        if (age < 51) return { amount: 35, unit }


        return { amount: 30, unit }
    }

    if (age < .9) return { amount: .2, unit }
    if (age < 1) return { amount: 5.5, unit }
    if (age < 4) return { amount: 11, unit }
    if (age < 9) return { amount: 15, unit }
    if (age < 14) return { amount: 21, unit }
    if (age < 51) return { amount: 25, unit }


    return { amount: 20, unit }
};

function calculateIodine(sex:string, age:number){
    const unit : string = 'micrograms';
    if (sex === 'male') {
        if (age < .9) return { amount: 110, unit }
        if (age < 1) return { amount: 120, unit }
        if (age < 9) return { amount: 90, unit }
        if (age < 14) return { amount: 120, unit }

        return { amount: 150, unit }
    }

    if (age < .9) return { amount: 110, unit }
    if (age < 1) return { amount: 120, unit }
    if (age < 9) return { amount: 90, unit }
    if (age < 14) return { amount: 120, unit }

    return { amount: 150, unit }
};

function calculateIron(sex:string, age:number){
    const unit : string = 'milligrams';
    if (sex === 'male') {
        if (age < .9) return { amount: .27, unit }
        if (age < 1) return { amount: 11, unit }
        if (age < 4) return { amount: 7, unit }
        if (age < 9) return { amount: 10, unit }
        if (age < 14) return { amount: 8, unit }
        if (age < 19) return { amount: 11, unit }

        return { amount: 8, unit }
    }

    if (age < .9) return { amount: .27, unit }
    if (age < 1) return { amount: 11, unit }
    if (age < 4) return { amount: 7, unit }
    if (age < 9) return { amount: 10, unit }
    if (age < 14) return { amount: 8, unit }
    if (age < 19) return { amount: 15, unit }
    if (age < 51) return { amount: 18, unit }

    return { amount: 8, unit }
};

function calculateMagnesium(sex:string, age:number){
    const unit : string = 'milligrams';
    if (sex === 'male') {
        if (age < .9) return { amount: 30, unit }
        if (age < 1) return { amount: 75, unit }
        if (age < 9) return { amount: 130, unit }
        if (age < 14) return { amount: 410, unit }
        if (age < 31) return { amount: 400, unit }

        return { amount: 420, unit }
    }

    if (age < .9) return { amount: 30, unit }
    if (age < 1) return { amount: 75, unit }
    if (age < 9) return { amount: 130, unit }
    if (age < 14) return { amount: 410, unit }
    if (age < 19) return { amount: 360, unit }
    if (age < 31) return { amount: 310, unit }

    return { amount: 320, unit }
};

function calculateSelenium(sex:string, age:number){
    const unit : string = 'micrograms';
    if (sex === 'male') {
        if (age < .9) return { amount: 15, unit }
        if (age < 4) return { amount: 20, unit }
        if (age < 9) return { amount: 30, unit }
        if (age < 14) return { amount: 40, unit }

        return { amount: 55, unit }
    }

    if (age < .9) return { amount: 15, unit }
    if (age < 4) return { amount: 20, unit }
    if (age < 9) return { amount: 30, unit }
    if (age < 14) return { amount: 40, unit }

    return { amount: 55, unit }
};

function calculateZinc(sex:string, age:number){
    const unit : string = 'milligrams';
    if (sex === 'male') {
        if (age < .9) return { amount: 2, unit }
        if (age < 4) return { amount: 3, unit }
        if (age < 9) return { amount: 5, unit }
        if (age < 14) return { amount: 8, unit }

        return { amount: 11, unit }
    }

    if (age < .9) return { amount: 2, unit }
    if (age < 4) return { amount: 3, unit }
    if (age < 9) return { amount: 5, unit }
    if (age < 14) return { amount: 8, unit }
    if (age < 19) return { amount: 9, unit }
    return { amount: 8, unit }
};

export function calculateMicros(sex:string = 'male', age:number) {
    if (sex !== 'male' && sex !== 'female') throw new Error('Sex must be male or female');
    if (age <= 0 || age > 120) throw new Error("Age is outside the acceptabel range");

    const fiber = calculateFiber(sex, age);
    const vitaminA = calculateVitaminA(sex, age);
    const vitaminD = calculateVitaminD(sex, age);
    const vitaminE = calculateVitaminE(sex, age);
    const vitaminK = calculateVitaminK(sex, age);
    const vitaminC = calculateVitaminC(sex, age);
    const vitaminB6 = calculateVitaminB6(sex, age);
    const vitaminB12 = calculateVitaminB12(sex, age);
    const folate = calculateFolate(sex, age);
    const riboflavin = calculateRiboflavin(sex, age);
    const calcium = calculateCalcium(sex, age);
    const chromium = calculateChromium(sex, age);
    const iodine = calculateIodine(sex, age);
    const iron = calculateIron(sex, age);
    const magnesium = calculateMagnesium(sex, age);
    const selenium = calculateSelenium(sex, age);
    const zinc = calculateZinc(sex, age);

    return {
        fiber,
        vitaminA,
        vitaminD,
        vitaminE,
        vitaminK,
        vitaminC,
        vitaminB6,
        vitaminB12,
        folate,
        riboflavin,
        calcium,
        iodine,
        chromium,
        iron,
        magnesium,
        selenium,
        zinc
    }
};