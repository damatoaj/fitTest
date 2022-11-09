const menCardioFitnessClassification = (age:number, vo2Max:number) => {
    if (age < 20 || age > 69) throw new Error('Age is outside of the acceptable range');

    if (age <= 29) {
        if (vo2Max >= 66.3) return 'superior';
        if (vo2Max >= 57.1) return 'excellent';
        if (vo2Max >= 50.2) return 'good';
        if (vo2Max >= 44.9) return 'fair';
        if (vo2Max >= 38.1) return 'poor';
        return 'very poor';
    }

    if (age <= 39) {
        if (vo2Max >= 59.8) return 'superior';
        if (vo2Max >= 51.6) return 'excellent';
        if (vo2Max >= 45.2) return 'good';
        if (vo2Max >= 39.6) return 'fair';
        if (vo2Max >= 34.1) return 'poor';
        return 'very poor';    
    };

    if (age <= 49) {
        if (vo2Max >= 55.6) return 'superior';
        if (vo2Max >= 46.7) return 'excellent';
        if (vo2Max >= 40.3) return 'good';
        if (vo2Max >= 35.7) return 'fair';
        if (vo2Max >= 30.5) return 'poor';
        return 'very poor';    
    };

    if (age <= 59) {
        if (vo2Max >= 50.7) return 'superior';
        if (vo2Max >= 41.2) return 'excellent';
        if (vo2Max >= 35.1) return 'good';
        if (vo2Max >= 30.7) return 'fair';
        if (vo2Max >= 26.1) return 'poor';
        return 'very poor';    
    };

    if (vo2Max >= 43) return 'superior';
    if (vo2Max >= 36.1) return 'excellent';
    if (vo2Max >= 30.5) return 'good';
    if (vo2Max >= 26.6) return 'fair';
    if (vo2Max >= 22.4) return 'poor';
    return 'very poor';    
};

const womenCardioFitnessClassification = (age:number, vo2Max:number) => {
    if (age < 20 || age > 69) throw new Error('Age is outside of the acceptable range');

    if (age <= 29) {
        if (vo2Max >= 56) return 'superior';
        if (vo2Max >= 46.5) return 'excellent';
        if (vo2Max >= 40.6) return 'good';
        if (vo2Max >= 34.6) return 'fair';
        if (vo2Max >= 28.6) return 'poor';
        return 'very poor';
    }

    if (age <= 39) {
        if (vo2Max >= 45.8) return 'superior';
        if (vo2Max >= 37.5) return 'excellent';
        if (vo2Max >= 32.2) return 'good';
        if (vo2Max >= 28.2) return 'fair';
        if (vo2Max >= 24.1) return 'poor';
        return 'very poor';    
    };

    if (age <= 49) {
        if (vo2Max >= 41.7) return 'superior';
        if (vo2Max >= 34) return 'excellent';
        if (vo2Max >= 28.7) return 'good';
        if (vo2Max >= 24.9) return 'fair';
        if (vo2Max >= 21.3) return 'poor';
        return 'very poor';    
    };

    if (age <= 59) {
        if (vo2Max >= 35.9) return 'superior';
        if (vo2Max >= 28.6) return 'excellent';
        if (vo2Max >= 25.2) return 'good';
        if (vo2Max >= 21.8) return 'fair';
        if (vo2Max >= 19.1) return 'poor';
        return 'very poor';    
    };

    if (vo2Max >= 29.4) return 'superior';
    if (vo2Max >= 24.6) return 'excellent';
    if (vo2Max >= 21.2) return 'good';
    if (vo2Max >= 18.9) return 'fair';
    if (vo2Max >= 16.5) return 'poor';
    return 'very poor';    
};

export {
    menCardioFitnessClassification,
    womenCardioFitnessClassification
};