import { SitAndReach } from "../../interfaces";
const mensSitAndReach = (age:number, cm:number) : SitAndReach=> {
    console.time('mensSitAndReach');
    try {
        if (age < 20 || age > 69) throw RangeError(`Age: ${age}, is outside of the acceptable range`);
        let result = {unit : 'cm', value: Math.floor(cm * 100) / 100, category : ''}
        if (age > 49) {
            if (age > 59) {
                if (cm > 24) {
                    cm >= 33 ?
                    result.category = 'excellent' :
                    result.category = 'very good'
                } else if (cm < 20) {
                    cm <= 14 ?
                    result.category = 'poor' :
                    result.category = 'fair'
                } else {
                    result.category = 'good'
                }
            } else {
                if (cm >27) {
                    cm >=35 ?
                    result.category = 'excellent' :
                    result.category = 'very good'
                } else if (cm < 24) {
                    cm <= 15 ?
                    result.category = 'poor' :
                    result.category = 'fair'
                } else {
                    result.category = 'good'
                }
            }
        } else if (age < 40) {
            if (age < 29) {
                if (cm > 33) {
                    cm >= 40 ?
                    result.category = 'excellent':
                    result.category = 'very good'      
                } else if (cm < 30) {
                    cm <= 24 ?
                    result.category = 'poor' :
                    result.category = 'fair'

                } else {
                    result.category = 'good'
                }
            } else {
                if (cm >32) {
                    cm >= 38 ?
                    result.category = 'excellent':
                    result.category = 'very good'
                } else if (cm <28) {
                    cm <= 22 ?
                    result.category = 'poor':
                    result.category = 'fair'
                } else {
                    result.category = 'good'
                }
            }
        } else {
            if (cm > 28) {
                 cm >= 35 ?
                result.category = 'excellent' :
                result.category = 'very good'
            } else if (cm < 24) {
                cm <= 17 ?
                result.category = 'poor' :
                result.category = 'fair'
            } else {
                result.category = 'good'
            }
        }
        console.timeEnd('mensSitAndReach');
        return result as SitAndReach
    } catch (err) {
        console.error(err);
        console.timeEnd('mensSitAndReach');
        return { unit: 'cm', value: cm, category: '' } as SitAndReach
    };
    
}

const womensSitAndReach = (age:number, cm:number) => {
    console.time('womensSitAndReach');
    try {
        if (age < 20 || age > 69) throw RangeError(`Age: ${age}, is outside of the acceptable range`)
        let result = {unit : 'cm', value: Math.floor(cm * 100) / 100, category : ''}
        if (age > 49) {
            if (age > 59) {
                if (cm > 30) {
                    cm >= 35 ?
                    result.category = 'excellent' :
                    result.category = 'very good'
                } else if (cm < 27) {
                    cm <= 22 ?
                    result.category = 'poor' :
                    result.category = 'fair'
                } else {
                    result.category = 'good'
                }
            } else {
                if (cm > 32) {
                    cm >=39 ?
                    result.category = 'excellent' :
                    result.category = 'very good'
                } else if (cm < 30) {
                    cm <= 24 ?
                    result.category = 'poor' :
                    result.category = 'fair'
                } else {
                    result.category = 'good'
                }
            }
        } else if (age < 40) {
            if (age < 29) {
                if (cm > 36) {
                    cm >= 41 ?
                    result.category = 'excellent':
                    result.category = 'very good'
                    
                } else if (cm < 33) {
                    cm <= 27 ?
                    result.category = 'poor' :
                    result.category = 'fair'
                } else {
                    result.category = 'good'
                }
            } else {
                if (cm > 35) {
                    cm >= 41 ?
                    result.category = 'excellent':
                    result.category = 'very good'
                } else if (cm < 32) {
                    cm <= 26 ?
                    result.category = 'poor':
                    result.category = 'fair'
                } else {
                    result.category = 'good'
                }
            }
        } else {
            if (cm > 33) {
                cm >= 38 ?
                result.category = 'excellent' :
                result.category = 'very good'
            } else if (cm < 30) {
                cm <= 24 ?
                result.category = 'poor' :
                result.category = 'fair'
            } else {
                result.category = 'good'
            }
        }
        console.timeEnd('womensSitAndReach');
        return result as SitAndReach
    } catch (err) {
        console.error(err);
        console.timeEnd('womensSitAndReach');
        return { unit: 'cm', value: cm, category: ''} as SitAndReach
    };
    
}

export {
    mensSitAndReach,
    womensSitAndReach
}