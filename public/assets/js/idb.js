let db;

const request = indexedDB.open('pizza_hunt', 1);

request.onupgradeneeded = function(event) {
  const db = event.target.result;
  db.createObjectStore('new pizza', { autoIncrement: true });
};

request.onsuccess = function(event) {
  db = event.target.result;

  if (navigator.online) {
    // uploadPizza();
  }
};

request.onerror = function(event) {
  console.log(event.target.errorCode);
};

function saveRecord(record) {
  const transaction = db.transaction(['new pizza'], 'readwrite');

  const pizzaObjectStore = transaction.objectStore('new_pizza');

  pizzaObjectStore.add(record);
}