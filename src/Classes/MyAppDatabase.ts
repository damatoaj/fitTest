import { User } from "../interfaces";
import Dexie from "dexie";

class MyAppDatabase extends Dexie {
    users!: Dexie.Table<User, number>;

    constructor () {
        super('MyAppDatabase');
        this.version(1).stores({
            users:'++uid, activityLevel, age, benchPress, bmi, bodyWeightGoal, currentWeight, goalWeight, gripsStrength, heigh, hrMax, legPress, fname, lname, macros, micros, pushups, sex, vo2Max'
        })
    }
}

export default MyAppDatabase;