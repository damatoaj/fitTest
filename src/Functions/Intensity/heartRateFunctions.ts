//Max Heart Rate Equations

//For small group of men and women
const foxEquation = (age:number) => {
    if (age < 18) throw new RangeError('Age is outside of bounds for Fox Equation')
    return Math.round(220 - age);
}
//Men and women age 4-34 years old
const astrandEquation = (age: number) => {
    if (age < 4 || age > 34) throw new RangeError('Astrand Equation only is applicable for ages 4-34')
    return Math.round(216.6 - (.84 * age));
};

//Healthy men and women
const tanakaEquation = (age:number) => {
    if (age < 18 || age > 110) throw new RangeError('Age is outside of bounds for Tanaka HR equation')
    return Math.round(208 - (.7 * age));
}
//Men & women participants in an adult fitness program
//with broad range of age and fitness levels
const gellishEquation = (age:number) => {
    if (age < 18 || age > 110) throw new RangeError('Age is outside of bounds for Gellish HR equation')
    return Math.round(207 - (.7 * age));
}
//Asymptomatic middle-aged women referred for stress testing
const gulatiEquation = (age:number) => {
    if (age < 35 || age > 65) throw new RangeError('Age is outside of bounds for Gulati HR equation')
    return Math.round(206 - (.88 * age));
}
export {
    foxEquation,
    astrandEquation,
    tanakaEquation,
    gellishEquation,
    gulatiEquation
};