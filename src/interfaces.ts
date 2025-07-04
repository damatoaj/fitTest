interface Macros {
    totalCalories: number,
    carbs: Carbohydrates,
    protein: Protein,
    fats: Fats
}

type Protein = {
    minGrams:number;
    maxGrams:number;
    minCal:number;
    maxCal:number;
}

type Carbohydrates = {
    minGrams:number;
    maxGrams:number;
    minCal:number;
    maxCal:number;
}

type Fats = {
    minGrams:number;
    maxGrams:number;
    minCal:number;
    maxCal:number;
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

interface Equipment {
    '12bench': boolean | null,
    '16bench': boolean | null,
    'benchPressStation': boolean | null,
    'bloodPressureCuff': boolean | null,
    'bodyFatPercentage': boolean | null,
    'handGripDynamometer': boolean | null,
    'legPressMachine': boolean | null,
    'measuringTape': boolean | null,
    'metronome': boolean | null,
    'sitReachBox': boolean | null,
    'skinFoldCalipers': boolean | null,
    'stopwatch': boolean | null,
    'treadmill': boolean | null,
    'treadmillDegrees': number | null
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
    hrMax: number | null;
    legPress: LegPress | null;
    fname: string | null;
    lname: string | null;
    macros: Macros | null;
    micros: Micros | null;
    pushups: { pushups: number, category: FitnessCategory} | null;
    sex: Sex | null;
    uid: number | null;
    vo2Max: VO2Max | null;
    bloodPressure : BloodPressure | null;
    waistCircumference: WaistCircumference | null;
    sar : SitAndReach | null;
    prefers_metric : Boolean;
    abdomenCircumference : number | null;
    armCircumference : number | null;
    buttocksCircumference : number | null;
    calfCircumference : number | null;
    forearmCircumference : number | null;
    hipsCircumference : number | null;
    midthighCircumference : number | null;
    waistHipRatio : number;
    waistHeightRatio : number;
    abdominalSkin: number;
    bicepSkin: number;
    chestSkin: number;
    calfSkin: number;
    midaxillarySkin: number;
    subscapSkin: number;
    supraIliacSkin: number;
    thighSkin: number;
    tricepSkin: number;
    bodyDensity: number;
    bodyComp: BodyComp;
    restingHR : number;
    restingV02 : number;
}

type UserKeys = keyof User;

type VO2Max = { vo2Max: number, category: FitnessCategory};

type BloodPressureClassifications = 'normal' | 'prehypertension' | 'stage 1 hypertension' | 'stage 2 hypertension';

type BloodPressure = { sbp : number, dbp : number, classification : BloodPressureClassifications };

type BMIClassifications = 'underweight' | 'normal' | 'overweight' | 'obesity class 1' | 'obesity class 2' | 'obesity class 3' | '';

type BMI = { bmi:number, classification: BMIClassifications };

type Sex = 'MALE' | 'FEMALE'

type FitnessCategory = 'very poor' | 'poor' | 'fair' | 'good' | 'very good' | 'excellent' | 'superior' | ''

type ActivityLevel = 'sedentary' | 'light activity' | 'moderately active' | 'very active' | 'extra active'

type WeightGoal = 'lose' | 'maintain' | 'gain'

type WaistCircumferenceCategory = 'very low' | 'low' | 'high' | 'very high' | ''

type WaistCircumference = { wc : number, category: WaistCircumferenceCategory }

type  BodyCompCategory = 'very lean'|'excellent'|'good'|'fair'|'poor'|'very poor' | ''

type BodyComp = { category : BodyCompCategory, percentage : number }

type BenchPress = {benchPress:number, category:'superior'|'excellent'|'good'|'fair'|'poor'|'very poor' | '', benchPressRatio: number}
type LegPress = {legPress:number, category:'well above average'|'above average'|'average'|'below average'|'well below average' | '', legPressRatio:number}

type GripStrength = {gripStrength: number, category:'excellent'|'very good'|'good'|'fair'|'poor' | ''}

type SitAndReach = {unit : string, value: number, category : 'excellent' | 'very good' | 'good' | 'fair'|'poor' | ''}

interface Link {
    label:string;
    value:string;
    dependencies: UserKeys[];
}

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
    BloodPressureClassifications,
    BloodPressure,
    WaistCircumferenceCategory,
    WaistCircumference,
    BodyComp,
    BodyCompCategory,
    BenchPress,
    LegPress,
    GripStrength,
    Protein,
    Fats,
    Carbohydrates,
    Equipment,
    VO2Max,
    UserKeys,
    Link,
    SitAndReach
}