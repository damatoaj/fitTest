//Max Heart Rate Equations

//For small group of men and women
const foxEquation = (age:number) => 220 - age;

//Men and women age 4-34 years old
const astrandEquation = (age: number) => 216.6 - (.84 * age);

//Healthy men and women
const tanakaEquation = (age:number) => 208 - (.7 * age);

//Men & women participants in an adult fitness program
//with broad range of age and fitness levels
const gellishEquation = (age:number) => 207 - (.7 * age);

//Asymptomatic middle-aged women referred for stress testing
const gulatiEquation = (age:number) => 206 - (.88 * age);

export {
    foxEquation,
    astrandEquation,
    tanakaEquation,
    gellishEquation,
    gulatiEquation
};