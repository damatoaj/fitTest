interface Macros {
    totalCalories: number,
    carbs: {
        minGrams: number,
        maxGrams: number,
        minCal: number,
        maxCal: number
    },
    protein: {
        minGrams: number,
        maxGrams: number,
        minCal: number,
        maxCal: number
    }
}

interface Micros {
    fiber : { amount: number, unit: string},
    vitaminA : { amount: number, unit: string},
    vitaminD : { amount: number, unit: string},
    vitaminE : { amount: number, unit: string},
    vitaminK : { amount: number, unit: string},
    vitaminC : { amount: number, unit: string},
    vitaminB6 : { amount: number, unit: string},
    vitaminB12 : { amount: number, unit: string},
    folate : { amount: number, unit: string},
    riboflavin : { amount: number, unit: string},
    calcium : { amount: number, unit: string},
    iodine : { amount: number, unit: string},
    chromium : { amount: number, unit: string},
    iron : { amount: number, unit: string},
    magnesium : { amount: number, unit: string},
    selenium : { amount: number, unit: string},
    zinc : { amount: number, unit: string}
}

interface User {
    activityLevel: ActivityLevel | null;
    age: number | null;
    benchPress: BenchPress | null;
    bmi: BMI | null
    bodyWeightGoal: WeightGoal | null;
    currentWeight: number | null;
    goalWeight: number | null;
    gripStrength: GripStrength | null;
    height: number | null;
    legPress: LegPress | null;
    name: string;
    pushups: { pushups: number, category: FitnessCategory} | null;
    sex: Sex | null;
    macros: Macros | null;
    micros: Micros | null;
}
type BMIClassifications = 'underweight' | 'normal' | 'overweight' | 'obesity class 1' | 'obesity class 2' | 'obesity class 3'

type BMI = { bmi:number, classification: BMIClassifications }

type Sex = 'MALE' | 'FEMALE'

type FitnessCategory = 'poor' | 'fair' | 'good' | 'very good' | 'excellent' | 'superior'

type ActivityLevel = 'sedentary' | 'light activity' | 'moderately active' | 'very active' | 'extra active'

type WeightGoal = 'lose' | 'maintain' | 'gain'

type WaistCircumferenceCategory = 'very low' | 'low' | 'high' | 'very high'

type  BodyCompCategory = 'very lean'|'excellent'|'good'|'fair'|'poor'|'very poor'

type BenchPress = {benchPress:number, category:'superior'|'excellent'|'good'|'fair'|'poor'|'very poor'}
type LegPress = {legPress:number, category:'well above average'|'above average'|'average'|'below average'|'well below average'}

type GripStrength = {gripStrength: number, category:'excellent'|'very good'|'good'|'fair'|'poor'}

export type {
    Macros,
    Micros,
    User,
    FitnessCategory,
    ActivityLevel,
    WeightGoal,
    Sex,
    BMI,
    BMIClassifications,
    WaistCircumferenceCategory,
    BodyCompCategory,
    BenchPress,
    LegPress,
    GripStrength
}