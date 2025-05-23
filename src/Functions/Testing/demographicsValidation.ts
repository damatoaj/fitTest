const validateAge = (age:number) => {
    if (age < 18 || age > 100) throw new RangeError('Age Is Outside Of Acceptable Bounds')
    if (typeof age !== 'number') return parseInt(age)
    return age
}

const validateHeight = (height:number) => {
    //assumes centimeters
    if (height < 91 || height >= 274) throw new RangeError('Height is Outside of Bounds')
    if (typeof height !== 'number') return parseFloat(height)
    return height
}

const validateSex = (sex: string) => {
    if (sex !== 'FEMALE' && sex !== 'MALE') throw new TypeError('Sex Is Outside Testing Types')
    return sex
}

const validateCurrentWeight = (weight: number) => {
    //Assumes kilograms
    if (weight < 40) throw new RangeError('Weight Is Outside Of Acceptable Bounds')
    if (typeof weight !== 'number') return parseFloat(weight)
    return weight
}

const validateGoalWeight = (weight:number) => {
    //assumes kilograms
    if (weight < 40 || weight > 200) throw new RangeError('Weight Is Outside Of Acceptable Bounds')
    if (typeof weight !== 'number') return parseFloat(weight)
    return weight
}

const validateName = (name:string) => {
    let result : boolean = /^[a-zA-Z]+$/.test(name.trim())
    if (!result) throw new Error('Check Name For Special Character')
    return name.trim()
}

export {
    validateAge,
    validateHeight,
    validateSex,
    validateCurrentWeight,
    validateGoalWeight,
    validateName
}