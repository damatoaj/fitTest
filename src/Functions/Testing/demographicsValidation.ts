import { Sex } from "../../interfaces"
const validateAge = (age:number) => {
    if (age < 18 || age > 100) throw new RangeError('Age Is Outside Of Acceptable Bounds')
    if (typeof age !== 'number') return parseInt(age)
    return age
}

const validateHeight = (height:number) => {
    if (height < 36 || height >= 96) throw new RangeError('Height is Outside of Bounds')
    if (typeof height !== 'number') return parseInt(height)
    return height
}

const validateSex = (sex: Sex) => {
    if (sex !== 'FEMALE' && sex !== 'MALE') throw new TypeError('Sex Is Outside Testing Types')
    return sex
}

const validateCurrentWeight = (weight: number) => {
    if (weight < 80) throw new RangeError('Weight Is Outside Of Acceptable Bounds')
    if (typeof weight !== 'number') return parseInt(weight)
    return weight
}

const validateGoalWeight = (weight:number) => {
    if (weight < 80 || weight > 400) throw new RangeError('Weight Is Outside Of Acceptable Bounds')
    if (typeof weight !== 'number') return parseInt(weight)
    return weight
}

const validateName = (name:string) => {
    let result : boolean = /^[a-zA-Z ]+$/.test(name.trim())
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