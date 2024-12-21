import { calculateBMI } from "../Functions/Testing/bodyComposition";
describe('calculateBMI', () => {
    
    // Test cases for valid inputs
    it('should return correct BMI and classification for underweight', () => {
        const result = calculateBMI(45, 1.75);  // BMI should be ~14.69
        expect(result.bmi).toBeCloseTo(14.69, 2);
        expect(result.classification).toBe('underweight');
    });

    it('should return correct BMI and classification for normal weight', () => {
        const result = calculateBMI(70, 1.75);  // BMI should be ~22.86
        expect(result.bmi).toBeCloseTo(22.86, 2);
        expect(result.classification).toBe('normal');
    });

    it('should return correct BMI and classification for overweight', () => {
        const result = calculateBMI(90, 1.75);  // BMI should be ~29.39
        expect(result.bmi).toBeCloseTo(29.39, 2);
        expect(result.classification).toBe('overweight');
    });

    it('should return correct BMI and classification for obesity class 1', () => {
        const result = calculateBMI(100, 1.75);  // BMI should be ~32.65
        expect(result.bmi).toBeCloseTo(32.65, 2);
        expect(result.classification).toBe('obesity class 1');
    });

    it('should return correct BMI and classification for obesity class 2', () => {
        const result = calculateBMI(120, 1.75);  // BMI should be ~39.18
        expect(result.bmi).toBeCloseTo(39.18, 2);
        expect(result.classification).toBe('obesity class 2');
    });

    it('should return correct BMI and classification for obesity class 3', () => {
        const result = calculateBMI(150, 1.75);  // BMI should be ~49.02
        expect(result.bmi).toBeCloseTo(49.02, 2);
        expect(result.classification).toBe('obesity class 3');
    });

    // Boundary tests for weight and height
    it('should throw error for weight less than 1 kg', () => {
        const result = calculateBMI(0.5, 1.75);
        expect(result.classification).toBe('');
    });

    it('should throw error for weight greater than 800 kg', () => {
        const result = calculateBMI(801, 1.75);
        expect(result.classification).toBe('');
    });

    it('should throw error for height less than 1 m', () => {
        const result = calculateBMI(70, 0.5);
        expect(result.classification).toBe('');
    });

    it('should throw error for height greater than 274 cm (2.74 m)', () => {
        const result = calculateBMI(70, 2.75);
        expect(result.classification).toBe('');
    });

    // Edge cases for BMI boundary values
    it('should return "normal" for BMI exactly 18.5', () => {
        const result = calculateBMI(70, 1.87);  // BMI should be exactly 18.5
        expect(result.bmi).toBe(18.5);
        expect(result.classification).toBe('normal');
    });

    it('should return "normal" for BMI exactly 24.9', () => {
        const result = calculateBMI(70, 1.88);  // BMI should be exactly 24.9
        expect(result.bmi).toBe(24.9);
        expect(result.classification).toBe('normal');
    });

    it('should return "overweight" for BMI exactly 25', () => {
        const result = calculateBMI(80, 1.75);  // BMI should be exactly 25
        expect(result.bmi).toBe(25);
        expect(result.classification).toBe('overweight');
    });

    it('should return "obesity class 1" for BMI exactly 30', () => {
        const result = calculateBMI(105, 1.75);  // BMI should be exactly 30
        expect(result.bmi).toBe(30);
        expect(result.classification).toBe('obesity class 1');
    });

    it('should return "obesity class 2" for BMI exactly 35', () => {
        const result = calculateBMI(122.5, 1.75);  // BMI should be exactly 35
        expect(result.bmi).toBe(35);
        expect(result.classification).toBe('obesity class 2');
    });

    it('should return "obesity class 3" for BMI exactly 40', () => {
        const result = calculateBMI(140, 1.75);  // BMI should be exactly 40
        expect(result.bmi).toBe(40);
        expect(result.classification).toBe('obesity class 3');
    });

    // Test performance (console.time)
    it('should log the time for calculation', () => {
        const spy = jest.spyOn(console, 'time').mockImplementation();
        calculateBMI(70, 1.75);
        expect(spy).toHaveBeenCalledWith('calculateBMI');
        spy.mockRestore();
    });
});

