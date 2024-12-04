

let request : IDBOpenDBRequest;
let version = 1;

export const initDB = (): Promise<boolean> => {
    return new Promise((resolve)=> {
        const request = indexedDB.open('sessions');

        request.onupgradeneeded = (event : any) => {
            console.log('request.onupgradeneeded - initDB');
            const db : IDBDatabase = event.target.result;
            if (!db.objectStoreNames.contains('sessions')) {
                console.log('Creating sessions store');
                let objectStore = db.createObjectStore('sessions', {keyPath:'timestamp',autoIncrement:true})
                // objectStore.createIndex('date', 'date', { unique: false })
                // objectStore.createIndex('name', 'name', { unique: false })
                // objectStore.createIndex('age', 'age', { unique: false })
                // objectStore.createIndex('sex', 'sex', { unique: false })
                // objectStore.createIndex('height', 'height', { unique: false })
                // objectStore.createIndex('current_weight', 'current_weight', { unique: false })
                // objectStore.createIndex('goal_weight', 'goal_weight', { unique: false })
                // objectStore.createIndex('activity_level', 'activity_level', { unique: false })
                // objectStore.createIndex('bmi', 'bmi', { unique: false })
                // objectStore.createIndex('waist_circumference', 'waist_circumference', { unique: false })
                // objectStore.createIndex('max_heart_rate', 'max_heart_rate', { unique: false })
                // objectStore.createIndex('pushups', 'pushups', { unique: false })
                // objectStore.createIndex('grip_strength', 'grip_strength', { unique: false })
                // objectStore.createIndex('leg_press', 'leg_press', { unique: false })
                // objectStore.createIndex('vo2_max', 'vo2_max', { unique: false })
                // objectStore.createIndex('bench_press', 'bench_press', { unique: false })
                // objectStore.createIndex('systolic_blood_pressure', 'systolic_blood_pressure', { unique: false })
                // objectStore.createIndex('diastolic_blood_pressure', 'diastolic_blood_pressure', { unique: false })
            }
        };

        request.onsuccess = (event:any) => {
            const db : IDBDatabase = event.target.result;
            version = db.version;
            console.log('request.onsuccess - initDB', version);
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
            const db : IDBDatabase = event.target.result;
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
        console.log('request.onsuccess - getAllData');
        const db : IDBDatabase = event.target.result;
        const tx : IDBTransaction = db.transaction(storeName, 'readonly');
        const store : IDBObjectStore = tx.objectStore(storeName);
        const res : IDBRequest<any[]> = store.getAll();
        res.onsuccess = () => {
          resolve(res.result);
        };
      };

      request.onerror = () => {
        console.error('request.onerror - getAllData')
        resolve([]);
      }
    });
  };
  