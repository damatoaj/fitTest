let request : IDBOpenDBRequest;
let version = 7;
let db : IDBDatabase;

export const initDB = (v:number): Promise<boolean> => {
    return new Promise((resolve)=> {
        request = window.indexedDB.open('sessions', v);

        request.onupgradeneeded = (event : any) => {
            console.log('request.onupgradeneeded - initDB', v);
            db = event.target.result || request.result;
            console.log('Creating sessions store');
            if (!db.objectStoreNames.contains('sessions')) {
                let objectStore = db.createObjectStore('sessions', {keyPath:'timestamp',autoIncrement:true})
                objectStore.createIndex('date', 'date', { unique: false })
                objectStore.createIndex('name', 'name', { unique: false })
                objectStore.createIndex('age', 'age', { unique: false })
                objectStore.createIndex('sex', 'sex', { unique: false })
                objectStore.createIndex('height', 'height', { unique: false })
                objectStore.createIndex('current_weight', 'current_weight', { unique: false })
                objectStore.createIndex('goal_weight', 'goal_weight', { unique: false })
                objectStore.createIndex('activity_level', 'activity_level', { unique: false })
                objectStore.createIndex('bmi', 'bmi', { unique: false })
                objectStore.createIndex('waist_circumference', 'waist_circumference', { unique: false })
                objectStore.createIndex('resting_heart_rate', 'resting_heart_rate', { unique: false })
                objectStore.createIndex('max_heart_rate', 'max_heart_rate', { unique: false })
                objectStore.createIndex('pushups', 'pushups', { unique: false })
                objectStore.createIndex('grip_strength', 'grip_strength', { unique: false })
                objectStore.createIndex('leg_press', 'leg_press', { unique: false })
                objectStore.createIndex('vo2_max', 'vo2_max', { unique: false })
                objectStore.createIndex('bench_press', 'bench_press', { unique: false })
                objectStore.createIndex('systolic_blood_pressure', 'systolic_blood_pressure', { unique: false })
                objectStore.createIndex('diastolic_blood_pressure', 'diastolic_blood_pressure', { unique: false })
                objectStore.createIndex('sit_and_reach', 'sit_and_reach', { unique: false })
                objectStore.createIndex('abdomen_circumference', 'abdomen_circumference', { unique: false })
                objectStore.createIndex('arm_circumference', 'arm_circumference', { unique: false })
                objectStore.createIndex('buttocks_circumference', 'buttocks_circumference', { unique: false })
                objectStore.createIndex('calf_circumference', 'calf_circumference', { unique: false })
                objectStore.createIndex('forearm_circumference', 'forearm_circumference', { unique: false })
                objectStore.createIndex('hips_circumference', 'hips_circumference', { unique: false })
                objectStore.createIndex('midthigh_circumference', 'midthigh_circumference', { unique: false })
                objectStore.createIndex('abdominal_skin', 'abdominal_skin', { unique: false })
                objectStore.createIndex('biceps_skin', 'biceps_skin', { unique: false })
                objectStore.createIndex('calf_skin', 'calf_skin', { unique: false })
                objectStore.createIndex('chest_skin', 'chest_skin', { unique: false })
                objectStore.createIndex('midaxillary_skin', 'midaxillary_skin', { unique: false })
                objectStore.createIndex('subscapular_skin', 'subscapular_skin', { unique: false })
                objectStore.createIndex('suprailiac_skin', 'suprailiac_skin', { unique: false })
                objectStore.createIndex('thigh_skin', 'thigh_skin', { unique: false })
                objectStore.createIndex('triceps_skin', 'triceps_skin', { unique: false })
            } else {
                console.log('IndexedDb object already exists.')
            };
        };

        request.onsuccess = (event:any) => {
            db = event.target.result || request.result;

            version = db.version;
            console.log('request.onsuccess - initDB', version, db);
            resolve(true);
        };

        request.onerror = () => {
            let error = request.error?.message;
            if (error) {
                console.error(`request.onerror - initDB: ${error}`)
                alert(`request.onerror - initDB: ${error}`)
            } else {
                console.error(`request.onerror - initDB: Unknown Error`)
                alert(`request.onerror - initDB: Unknown Error`)
            }
            resolve(false);
        };
    })
}

export const addData = <T>(storeName:string, data:T):Promise<T|string|null>=> {
    return new Promise((resolve)=> {
        request = indexedDB.open('sessions', version);

        request.onsuccess = (event: any) => {
            console.log('request.onsuccess - addData');
            db =  event.target.result || request.result;
            console.log('DB: ', db)
            const tx : IDBTransaction = db.transaction('sessions', 'readwrite');
            const store : IDBObjectStore = tx.objectStore(storeName);
            store.add(data);
            resolve(data);
        }
       

        request.onerror = (event: any) => {
            const error = request.error?.message;
            if (error) {
                resolve(`request.onerror - addData: ${error}`);
            } else {
                resolve('request.onerror - addDatat: Unknown Error');
            }
        };
    });
};


export const getStoreData = <T>(storeName: string): Promise<T[]> => {
    return new Promise((resolve) => {
      request = indexedDB.open(storeName);
  
      request.onsuccess = (event : any) => {
        console.log('request.onsuccess - getAllData', storeName);
        db = event.target.result || request.result;
        if (db) {
            console.log('DB: ', db)
            const tx : IDBTransaction = db.transaction(storeName, 'readonly');
            const store : IDBObjectStore = tx.objectStore(storeName);
            const res : IDBRequest<any[]> = store.getAll();
            res.onsuccess = () => {
              resolve(res.result);
            };
        } else {
            resolve([])
        }
      };

      request.onerror = () => {
        console.error('request.onerror - getAllData')
        resolve([]);
      }
    });
  };
  