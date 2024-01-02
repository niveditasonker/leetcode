// Goal: Implement the Model structure so that the following block of code runs as intended

class Model {
    constructor(options={}) {
        this.map = {};
        this.listeners = {};
        
        if (options !== undefined){
            Object.keys(options).map((k) => {
               this.set(k, options[k]);
            });
        }
    }
    
    set(key, value) {
        // keep track of the old val
        const oldVal = this.map[key];
        this.map[key] = value;
        // (event, key, old, new)
        this.callListeners('change', key, oldVal, value);
        //
        // this.callListeners(`change:${key}`, oldVal, value);
        this.callListeners(`change:${key}`, key, oldVal, value);
    }
    
    get(key){
        return this.map[key];
        
    }
    
    has(key){
        return key in this.map;
    }
    
    unset(key){
        const oldVal = this.map[key];
        if (this.has(key)){
            delete this.map[key];
        }
        
        this.callListeners('change', key, oldVal, undefined);
        this.callListeners(`change:${key}`, oldVal, undefined);
    }
    
    on(eventName, callback){
        if (!this.listeners[eventName]){
            this.listeners[eventName] = [];
        }
        
        this.listeners[eventName].push(callback);
    }
    
    callListeners(eventName, key, oldVal, newVal){
        
        if(this.listeners[eventName]){
            this.listeners[eventName].forEach((listener) => {
                if(eventName === 'change') {
                    listener(key, oldVal, newVal);  
                } else {
                    // console.log('===> calling change:');
                    listener(oldVal, newVal);    
                }
                
            });
        }
    }
    
}

function runTest(test) {
  setTimeout(test);
}

runTest(() => {
  const person = new Model({ name: 'Alice', age: 23 });
  // the on method allows us to add callbacks for events
  // Model emits two events for each change:
  // 'change':              emitted on any change
  // 'change:${attribute}': emitted only when 'attribute' changes
  // here’s a concrete example:

  // called when any attribute changes; note the callback signature
  person.on('change', function(key, oldVal, newVal) {
    console.log('attr', key, 'changed from', oldVal, 'to', newVal);
  });

  // called only when the "name" attribute changes.
  // note that the signature of this callback is
  // different from the general ’change’ event callback
  person.on('change:name', function(oldVal, newVal) {
    console.log('specifically name changed from', oldVal, 'to', newVal);
  });

  // multiple handlers for the same event name; school is an attribute here
  person.on('change:school', function() {
    console.log('first');
  });
  person.on('change:school', function() {
    console.log('second');
  });

  person.set('dogs', 2);      // -> attr dogs changed from undefined to 2
  person.set('name', 'Bob');  // -> attr name changed from Alice to Bob
                              // -> specifically name changed from Alice to Bob
  person.unset('name');       // -> attr name changed from Bob to undefined
                              // -> specifically name changed from Bob to undefined
  person.set('school', null); // -> attr school changed from undefined to null
                              // -> first
                              // -> second
});


// Part 1 of 2
// runTest(() => {
//   const person = new Model({ name: 'Alice', age: 20 });
//   console.log(person.get('name'));          // -> 'Alice'
//   console.log(person.get('age'));           // -> 20

//   const company = new Model();
//   company.set('employees', 2500);
//   company.set('revenue', 5);

//   console.log(company.get('employees'));    // -> 2500
//   console.log(company.get('revenue'));      // -> 5
//   console.log(company.get('location'));     // -> undefined

//   person.set('name', 'Bob');
//   console.log(person.get('name'));          // -> 'Bob'

//   console.log(person.has('name'));          // -> true
//   console.log(person.has('lastname'));      // -> false

//   person.unset('name');
//   console.log(person.has('name'));          // -> false
// });