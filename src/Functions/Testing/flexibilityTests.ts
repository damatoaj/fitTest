const mensSitAndReach = (age:number, cm:number) => {
    console.time('mensSitAndReach');
    try {
        if (age < 20 || age > 69) throw RangeError(`Age: ${age}, is outside of the acceptable range`);
        let result
        if (age > 49) {
            if (age > 59) {
                if (cm > 24) {
                    result = cm >= 33 ?
                    { unit: 'cm', value: cm, classification: 'excellent'} :
                    { unit: 'cm', value: cm, classification: 'very good'}
                } else if (cm < 20) {
                    result = cm <= 14 ?
                    { unit: 'cm', value: cm, classification: 'poor'} :
                    { unit: 'cm', value: cm, classification: 'fair'}
                } else {
                    result = { unit: 'cm', value: cm, classification: 'good'}
                }
            } else {
                if (cm >27) {
                    result = cm >=35 ?
                        { unit: 'cm', value: cm, classification: 'excellent'} :
                        { unit: 'cm', value: cm, classification: 'very good'}
                } else if (cm < 24) {
                    result = cm <= 15 ?
                        { unit: 'cm', value: cm, classification: 'poor'} :
                        { unit: 'cm', value: cm, classification: 'fair'}
                } else {
                    result = { unit: 'cm', value: cm, classification: 'good'}
                }
            }
        } else if (age < 40) {
            if (age < 29) {
                if (cm > 33) {
                    result = cm >= 40 ?
                    { unit: 'cm', value: cm, classification: 'excellent'}:
                    { unit: 'cm', value: cm, classification: 'very good'}
                    
                } else if (cm < 30) {
                    result = cm <= 24 ?
                    { unit: 'cm', value: cm, classification: 'poor'} :
                    { unit: 'cm', value: cm, classification: 'fair'}

                } else {
                    result = { unit: 'cm', value: cm, classification: 'good'}
                }
            } else {
                if (cm >32) {
                    result = cm >= 38 ?
                    { unit: 'cm', value: cm, classification: 'excellent'}:
                    { unit: 'cm', value: cm, classification: 'very good'}
                } else if (cm <28) {
                    result = cm <= 22 ?
                    { unit: 'cm', value: cm, classification: 'poor'}:
                    { unit: 'cm', value: cm, classification: 'fair'}
                } else {
                    result = { unit: 'cm', value: cm, classification: 'good'}
                }
            }
        } else {
            if (cm > 28) {
                result = cm >= 35 ?
                    { unit: 'cm', value: cm, classification: 'excellent'} :
                    { unit: 'cm', value: cm, classification: 'very good'}
            } else if (cm < 24) {
                result = cm <= 17 ?
                { unit: 'cm', value: cm, classification: 'poor'} :
                { unit: 'cm', value: cm, classification: 'fair'}
            } else {
                result = { unit: 'cm', value: cm, classification: 'good'}
            }
        }
        console.timeEnd('mensSitAndReach');
        return result
    } catch (err) {
        console.error(err);
        console.timeEnd('mensSitAndReach');
        return { unit: 'cm', value: cm, classification: '' }
    };
    
}

const womensSitAndReach = (age:number, cm:number) => {
    console.time('womensSitAndReach');
    try {
        if (age < 20 || age > 69) throw RangeError(`Age: ${age}, is outside of the acceptable range`)
        let result
        if (age > 49) {
            if (age > 59) {
                if (cm > 30) {
                    result = cm >= 35 ?
                    { unit: 'cm', value: cm, classification: 'excellent'} :
                    { unit: 'cm', value: cm, classification: 'very good'}
                } else if (cm < 27) {
                    result = cm <= 22 ?
                    { unit: 'cm', value: cm, classification: 'poor'} :
                    { unit: 'cm', value: cm, classification: 'fair'}
                } else {
                    result = { unit: 'cm', value: cm, classification: 'good'}
                }
            } else {
                if (cm > 32) {
                    result = cm >=39 ?
                        { unit: 'cm', value: cm, classification: 'excellent'} :
                        { unit: 'cm', value: cm, classification: 'very good'}
                } else if (cm < 30) {
                    result = cm <= 24 ?
                        { unit: 'cm', value: cm, classification: 'poor'} :
                        { unit: 'cm', value: cm, classification: 'fair'}
                } else {
                    result = { unit: 'cm', value: cm, classification: 'good'}
                }
            }
        } else if (age < 40) {
            if (age < 29) {
                if (cm > 36) {
                    result = cm >= 41 ?
                    { unit: 'cm', value: cm, classification: 'excellent'}:
                    { unit: 'cm', value: cm, classification: 'very good'}
                    
                } else if (cm < 33) {
                    result = cm <= 27 ?
                    { unit: 'cm', value: cm, classification: 'poor'} :
                    { unit: 'cm', value: cm, classification: 'fair'}
    
                } else {
                    result = { unit: 'cm', value: cm, classification: 'good'}
                }
            } else {
                if (cm > 35) {
                    result = cm >= 41 ?
                    { unit: 'cm', value: cm, classification: 'excellent'}:
                    { unit: 'cm', value: cm, classification: 'very good'}
                } else if (cm < 32) {
                    result = cm <= 26 ?
                    { unit: 'cm', value: cm, classification: 'poor'}:
                    { unit: 'cm', value: cm, classification: 'fair'}
                } else {
                    result = { unit: 'cm', value: cm, classification: 'good'}
                }
            }
        } else {
            if (cm > 33) {
                result = cm >= 38 ?
                    { unit: 'cm', value: cm, classification: 'excellent'} :
                    { unit: 'cm', value: cm, classification: 'very good'}
            } else if (cm < 30) {
                result = cm <= 24 ?
                { unit: 'cm', value: cm, classification: 'poor'} :
                { unit: 'cm', value: cm, classification: 'fair'}
            } else {
                result = { unit: 'cm', value: cm, classification: 'good'}
            }
        }
        console.timeEnd('womensSitAndReach');
        return result
    } catch (err) {
        console.error(err);
        console.timeEnd('womensSitAndReach');
        return { unit: 'cm', value: cm, classification: ''}
    };
    
}

export {
    mensSitAndReach,
    womensSitAndReach
}