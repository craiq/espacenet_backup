var connection = indexedDB.open('espacenet', 2);

connection.onsuccess = (e) => {
    var database = e.target.result;
    var transaction = database.transaction(['espacenetDataStore'], "readwrite");
    var objectStore = transaction.objectStore('espacenetDataStore');
    Object.keys(EspacenetBackup).forEach(k => {
        objectStore.put(EspacenetBackup[k], k)
    })
}