const dbName : string = 'person_session';

const request : IDBOpenDBRequest = indexedDB.open(dbName);

request.onerror = (event: Event) => {
    console.error(event, '<--- error')
};

request.onupgradeneeded = (event:Event) => {
    console.log(event, '<-- on upgrade needed');
};

request.onblocked = (event:Event) => {
    console.log(event, '<--- on blocked')
}

request.onsuccess = (event:Event) => {
    console.log(event, '<-- on complete')
}

export default request