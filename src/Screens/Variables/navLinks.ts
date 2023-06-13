interface Link {
    label:string;
    value:string
}

export const navLinks : Link [] = [
    {label: 'Home', value:'/'},
    {label:'Pushups', value:'/pushups/instructions'},
    {label:'Nutrition', value:'/nutrition'},
    {label: 'Bench Press', value:'/bench-press/instructions'},
    {label: 'Leg Press', value:'/leg-press/instructions'},
    {label: 'Grip Strength', value:'/grip-strength/instructions'},
    {label: 'Equipment', value:'/equipment'},
    {label: 'Step Test', value:'/step-test/instructions'}
]