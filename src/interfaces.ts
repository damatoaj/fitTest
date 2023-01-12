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

interface UserContextInterface {
    activityLevel: string;
    age: number | null;
    benchPress: number | null;
    bodyWeightGoal: string;
    height: number | null;
    leftHand: number | null;
    legPress: number | null;
    name: string;
    pushups: number | null;
    rightHand: number| null;
    sex: string;
    weight: number | null;
    macros: Macros | null;
    micros: Micros | null;
}

export type {
    Macros,
    Micros,
    UserContextInterface
}