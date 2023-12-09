import { Link } from "../../interfaces";

export const navLinks : Link [] = [
    {label: 'Home', value:'/', dependencies: []},
    {label:'Pushups', value:'/pushups/instructions', dependencies: ['age', 'sex']},
    {label:'Nutrition', value:'/nutrition', dependencies: ['age', 'sex', 'currentWeight', 'goalWeight']},
    {label: 'Bench Press', value:'/bench-press/instructions', dependencies: ['age', 'sex', 'currentWeight']},
    {label: 'Leg Press', value:'/leg-press/instructions', dependencies: ['age', 'sex', 'currentWeight']},
    {label: 'Grip Strength', value:'/grip-strength/instructions', dependencies: ['age', 'sex', 'currentWeight']},
    {label: 'Equipment', value:'/equipment', dependencies: []},
    {label: 'Step Test', value:'/step-test/instructions', dependencies: ['age', 'sex']}
]