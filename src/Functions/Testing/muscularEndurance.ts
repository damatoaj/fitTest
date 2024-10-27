const menPushupCategories = (age:number, pushups:number) => {
    console.time('menPushupCategories');
    try{
        if(age < 20 || age > 69) throw new RangeError('Age is outside of accepted ranges');
        if (age <= 29) {
            if (pushups >= 36) return 'excellent';
            if (pushups >= 29) return 'very good';
            if (pushups >= 22) return 'good';
            if (pushups >= 16) return 'fair';
            console.timeEnd('menPushupCategories');
            return 'poor'
        }
    
        if ( 39 >= age && age >= 30) {
            if (pushups >= 30) return 'excellent';
            if (pushups >= 22) return 'very good';
            if (pushups >= 17) return 'good';
            if (pushups >= 12) return 'fair';
            console.timeEnd('menPushupCategories');
            return 'poor';
        };
    
        if ( 49 >= age && age >= 40) {
            if (pushups >= 25) return 'excellent';
            if (pushups >= 17) return 'very good';
            if (pushups >= 13) return 'good';
            if (pushups >= 8) return 'fair';
            console.timeEnd('menPushupCategories');
            return 'poor';
        };
    
        if ( 59 >= age && age >= 50) {
            if (pushups >= 21) return 'excellent';
            if (pushups >= 13) return 'very good';
            if (pushups >= 10) return 'good';
            if (pushups >= 7) return 'fair';
            console.timeEnd('menPushupCategories');
            return 'poor';
        };
    
        if (pushups >= 18) return 'excellent';
        if (pushups >= 11) return 'very good';
        if (pushups >= 8) return 'good';
        if (pushups >= 5) return 'fair';
        console.timeEnd('menPushupCategories');
        return 'poor';
    } catch (err:any) {
        console.error(err);
        console.timeEnd('menPushupCategories');
        return '';
    };
};

const womenPushupCategories = (age: number, pushups:number) => {
    console.time('womenPushupCategories');
    try {
        if(age < 20 || age > 69) throw new RangeError('Age is outside of acceptable range');
        if (age <= 29) {
            if (pushups >= 30) return 'excellent';
            if (pushups >= 21) return 'very good';
            if (pushups >= 15) return 'good';
            if (pushups >= 10) return 'fair';
            console.timeEnd('womenPushupCategories');
            return 'poor'
        }
    
        if ( 39 >= age && age >= 30) {
            if (pushups >= 27) return 'excellent';
            if (pushups >= 20) return 'very good';
            if (pushups >= 13) return 'good';
            if (pushups >= 8) return 'fair';
            console.timeEnd('womenPushupCategories');
            return 'poor';
        };
    
        if ( 49 >= age && age >= 40) {
            if (pushups >= 24) return 'excellent';
            if (pushups >= 15) return 'very good';
            if (pushups >= 11) return 'good';
            if (pushups >= 5) return 'fair';
            console.timeEnd('womenPushupCategories');
            return 'poor';
        };
    
        if ( 59 >= age && age >= 50) {
            if (pushups >= 21) return 'excellent';
            if (pushups >= 11) return 'very good';
            if (pushups >= 7) return 'good';
            if (pushups >= 2) return 'fair';
            console.timeEnd('womenPushupCategories');
            return 'poor';
        };
    
        if (pushups >= 17) return 'excellent';
        if (pushups >= 12) return 'very good';
        if (pushups >= 5) return 'good';
        if (pushups >= 2) return 'fair';
        console.timeEnd('womenPushupCategories');
        return 'poor';
    } catch (err:any) {
        console.error(err);
        console.timeEnd('womenPushupCategories');
        return '';
    };
};

export {
    menPushupCategories,
    womenPushupCategories
};