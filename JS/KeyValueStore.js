
class KeyStore {
    constructor(){
        this.map ={};
        this.events = {};
        this.eventsForSpecificKey = {};
    }

    set(key, value){
        const oldVal = this.map[key];
        this.map[key] = value;
        this.notifyListeners(key, oldVal, value);
        this.callKeyChangeEvent(key, oldVal, value)
    }

    has(key){
        return key in this.map;
    }

    get(key){
        if(!this.has(key)){
            return;
        }

        return this.map[key];
    }

    unset(key){
        if(!this.has(key)){
            return;
        }

        let oldVal =this.map[key];
        delete this.map[key];
        this.notifyListeners(key, oldVal, undefined);
    }

    on(eventName, callback) {
        if (!this.events[eventName]){
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
        console.log("on: ", this.events, eventName);
    }

    callKeyChangeEvent(key, oldVal, newVal){
        if(this.eventsForSpecificKey['change'][key]) {
            this.eventsForSpecificKey['change'][key].forEach((cb) => {
                cb(oldVal, newVal);
            })
        }
    }

    notifyListeners(key, oldVal, newVal){
        this.triggerListeners(key, oldVal, newVal);
    }

    triggerListeners(key, oldVal, newVal){
        console.log("events: ", this.events[key], key);
        if (this.events[key]){
            this.events[key].forEach((cb) => {
                console.log("In here");
                cb(oldVal, newVal);
            })
        } else {
            this.events[key] = 
        }
    }
}

const keyStoreInstance = new KeyStore();
keyStoreInstance.set('name', 'Joe');
// keyStoreInstance.set('name', 'Joe');
console.log(keyStoreInstance.has('name'));
console.log(keyStoreInstance.get('name'));
keyStoreInstance.unset('name');
console.log(keyStoreInstance.get('name'));
console.log(keyStoreInstance.has('name'));

keyStoreInstance.on('change', ((key, oldVal, newVal) => {
    console.log('1. attr', key, 'changed from', oldVal, 'to', newVal);
}));

keyStoreInstance.on('change', function(key, oldVal, newVal) {
    // called when any attribute changes
    console.log('2. attr', key, 'changed from', oldVal, 'to', newVal);
});

console.log('----- change callbacks ------')
keyStoreInstance.set('name', 'Riya') // 2 console logs of name chagned from Joe to Riya
// keyStoreInstance.unset('name') // 2 console logs of money changed from 1000 to undefined
keyStoreInstance.unset('name');


/*
class StoreData {
    constructor() {
      this.data = {};
      this.listeners = {};
    }
  
    // Add a key/value pair to the data store
    set(key, value) {
      this.data[key] = value;
      this.notifyListeners(key, value);
    }
  
    // Get the value associated with a key
    get(key) {
      return this.data[key];
    }
  
    // Listen for changes to a specific key
    subscribe(key, callback) {
      if (!this.listeners[key]) {
        this.listeners[key] = [];
      }
      this.listeners[key].push(callback);
    }
  
    // Remove a listener for a specific key
    unsubscribe(key, callback) {
      if (this.listeners[key]) {
        this.listeners[key] = this.listeners[key].filter(listener => listener !== callback);
      }
    }
  
    // Notify all listeners when a key's value changes
    notifyListeners(key, value) {
      if (this.listeners[key]) {
        this.listeners[key].forEach(listener => {
          listener(value);
        });
      }
    }
  }
  
  // Example usage:
  const dataStore = new StoreData();
  
  // Subscribe to changes for a specific key
  dataStore.subscribe('counter', (value) => {
    console.log('Counter changed:', value);
  });
  
  // Add a key/value pair and trigger the listener
  dataStore.set('counter', 1);
  
  // Update the value for the 'counter' key
  dataStore.set('counter', 2);
  
  // Unsubscribe from further changes
  dataStore.unsubscribe('counter', (value) => {
    console.log('No longer listening to counter changes');
  });
  
  // This won't trigger the listener because we unsubscribed
  dataStore.set('counter', 3);
*/  