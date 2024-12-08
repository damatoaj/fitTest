let request : IDBOpenDBRequest;
let version = 2;
let db : IDBDatabase;

export const initDB = (v:number): Promise<boolean> => {
    return new Promise((resolve)=> {
        request = window.indexedDB.open('sessions', v);

        request.onupgradeneeded = (event : any) => {
            console.log('request.onupgradeneeded - initDB', v);
            db = event.target.result || request.result;
            console.log('Creating sessions store');
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
            objectStore.createIndex('max_heart_rate', 'max_heart_rate', { unique: false })
            objectStore.createIndex('pushups', 'pushups', { unique: false })
            objectStore.createIndex('grip_strength', 'grip_strength', { unique: false })
            objectStore.createIndex('leg_press', 'leg_press', { unique: false })
            objectStore.createIndex('vo2_max', 'vo2_max', { unique: false })
            objectStore.createIndex('bench_press', 'bench_press', { unique: false })
            objectStore.createIndex('systolic_blood_pressure', 'systolic_blood_pressure', { unique: false })
            objectStore.createIndex('diastolic_blood_pressure', 'diastolic_blood_pressure', { unique: false })
            objectStore.createIndex('sit_and_reach', 'sit_and_reach', { unique: false })
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
            } else {
                console.error(`request.onerror - initDB: Unknown Error`)
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
  