import { BloodPressure} from "../interfaces";

export const bloodPressureCalculation = (sbp:number, dbp:number) => {
    if (typeof sbp !== 'number' || typeof dbp !== 'number') throw new TypeError('Blood pressure parameters must be numbers');
    if (sbp < 1 || dbp < 1 || sbp > 400 || dbp > 200) throw new RangeError('Blood pressure paremeters outside of acceptable range');
    let classification = 'normal';
    if ((sbp >= 120 && sbp <= 139) || (dbp >= 80 && dbp <= 89)) classification = 'prehypertension';
    if ((sbp >= 140 && sbp <= 159) || (dbp >= 90 && dbp <= 99)) classification = 'stage 1 hypertension';
    if (sbp >= 160 || dbp >= 100) classification = 'stage 2 hypertension';

    return { sbp, dbp, classification } as BloodPressure
}