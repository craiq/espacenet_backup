// http://bgrins.github.io/devtools-snippets/#console-save
(function(console){
    console.save = function(data, filename){

        if(!data) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = 'console.json'

        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
})(console)

// open database connection to database "espacenet" in version 2
var connection = indexedDB.open('espacenet', 2);

connection.onsuccess = (e) => {
    var database = e.target.result;
    var transaction = database.transaction(['espacenetDataStore']);
    var objectStore = transaction.objectStore('espacenetDataStore');
    var keys = objectStore.getAllKeys();
    var store = objectStore.getAll();
    var backUp = {}
    keys.onsuccess = k => {
        store.onsuccess = s => {
            var stores = k.target.result
            stores.forEach((e,i) => {
                backUp[e] = s.target.result[i]
            })
            console.save(backUp, "backUp.json")
        }
    }
}