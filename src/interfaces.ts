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
    benchPress: number | null;
    bodyWeightGoal: WeightGoal | null;
    currentWeight: number | null;
    goalWeight: number | null;
    height: number | null;
    leftHand: number | null;
    legPress: number | null;
    name: string;
    pushups: { pushups: number, category: FitnessCategory} | null;
    rightHand: number| null;
    sex: Sex | null;
    macros: Macros | null;
    micros: Micros | null;
}

type Sex = 'MALE' | 'FEMALE'

type FitnessCategory = 'poor' | 'fair' | 'good' | 'very good' | 'excellent' | 'superior'

type ActivityLevel = 'sedentary' | 'light activity' | 'moderately active' | 'very active' | 'extra active'

type WeightGoal = 'lose' | 'maintain' | 'gain'

export type {
    Macros,
    Micros,
    User,
    FitnessCategory,
    ActivityLevel,
    WeightGoal,
    Sex
}