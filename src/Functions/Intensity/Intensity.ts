const percentHRRorVO2R = (hrr:number) => {
    if (hrr < 1) throw new Error('HRR or VO2 Reserve cannot be negative');
    const p = hrr / 100;
    if (p < 30) return 'very light';
    if (p <= 30 && p <= 30) return 'light';
    if (p <= 40 && p <= 59) return 'moderate';
    if (p <= 60 && p <= 89) return 'vigorous';
    return 'near maximal to maximal';
};

const percentHeartRateMax = (maxHR:number, hr:number) => {
    const p = hr / maxHR;
    if (p < 57) return 'very light';
    if (p >= 57 && p <= 63) return 'light';
    if (p >= 64 && p <= 76) return 'moderate';
    if (p >= 77 && p <= 95) return 'vigorous';
    return 'near maximal to maximal';
};

const percentVO2Max = (maxVO2: number, vo2:number) => {
    const p = vo2 / maxVO2;
    if (p < 37) return 'very light';
    if (p >= 37 && p <= 45) return 'light';
    if (p >=46 && p <= 63) return 'moderate';
    if (p >= 64 && p <= 90) return 'vigorous';
    return 'near maximal or maximal';
};

const borgRPE = (pe:number) => {
    //pe is for perceived exertion
    if (pe < 6 || pe > 20) throw new Error('Borg scale is between 6 and 20');
    if (pe < 9) return 'very light';
    if (pe <= 11) return 'very light to fairly light';
    if (pe <= 13) return 'fairly light to somewhat light';
    if (pe <= 17) return 'somewhat hard to very hard';
    return 'very hard';
};

const percentOneRepMax = (max:number, current:number) => {
    const p = current / max;
    if (p < 30) return 'very light';
    if (p >= 30 && p <= 49) return 'light';
    if (p >= 50 && p <= 69) return 'moderate';
    if (p >= 70 && p <= 84) return 'vigorous';
    return 'near maximal to maximal';
};

const absoluteIntensity = (mets:number) => {
    if (mets <= 0) throw new Error('No negative numbers');
    if (mets < 2) return 'light';
    if (mets <= 2.9) return 'very light';
    if (mets <= 5.9) return 'moderate';
    if (mets <= 8.7) return 'vigorous';
    return 'near maximal or maximal';
};

export {
    percentHRRorVO2R,
    percentHeartRateMax,
    percentVO2Max,
    borgRPE,
    percentOneRepMax,
    absoluteIntensity
}