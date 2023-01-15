export const bloodPressureClassification = (sbp:number, dbp:number) => {
    if (sbp < 1 || dbp < 1) throw new Error('Paremeters outside of acceptable range');
    if (sbp < 120 && dbp < 80) return 'normal';
    if ((sbp >= 120 && sbp <= 139) || (dbp >= 80 && dbp <= 89)) return 'prehypertension';
    if ((sbp >= 140 && sbp <= 159) || (dbp >= 90 && dbp <= 99)) return 'stage 1 hypertension';
    if (sbp >= 160 || dbp >= 100) return 'stage 2 hypertension';
}