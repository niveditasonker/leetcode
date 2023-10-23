// Write a function that would allow you to do this.
function createBase(base){
    return(n) => {
        return n + base;
    }
}

var addSix = createBase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

function printNumber(){
    for (var i = 0; i < 3; i++) {
        setTimeout(function(i_local) { 
        return function() { alert(i_local); } 
        }(i), 1000 + i);
    }
}

/*
How would you use a closure to create a private counter?
Answer: You can create a function within an outer function (a closure)
that allows you to update a private variable but the variable wouldn't
be accessible from outside the function without the use of a helper function.
*/
function counter() {
  var _counter = 0;
  // return an object with several functions that allow you
  // to modify the private _counter variable
  return {
    add: function(increment) { _counter += increment; },
    retrieve: function() { return 'The counter is currently at: ' + _counter; }
  }
}

// error if we try to access the private variable like below
// _counter;

// usage of our counter function
var c = counter();
console.log(c.add(5)); 
console.log(c.add(9)); 

// now we can access the private variable in the following way
console.log(c.retrieve()); // => The counter is currently at: 14

let dev = 'bfe'

function a() {
  let dev = 'BFE'
  return function() {
    console.log(dev)
  }
}

dev = 'bigfrontend'

console.log(a()());

const arr = []
arr[(2 ** 32) - 2] = 1
arr[(2 ** 32) - 1] = 2
console.log(arr.at(-1), (2 ** 32));

/*
The at() method takes an integer value and returns the item at that index,
allowing for positive and negative integers. Negative integers count back
from the last item in the array. For the last item array[array.length-1],
you can also call array.at(-1)

JavaScript arrays are zero-based and use 32-bit indexes: the index of the
first element is 0, and the highest possible index is 4294967294 (2^32 − 2)
which we have assigned as 1

Accessing, arr.at(-1) thus returns the last element 1.

Also, note that arr[2^32 - 1] = 2 does store 2 at that index however since
its more than the max possible length it cannot be accessed by at
*/

console.log("Falsy", !!'')
console.log("Falsy", !!{})
console.log("Falsy", !![])

/*
Using !! before something is effectively doing boolean coercion of the operand.
0, -0, 0n, null, false, NaN, undefined, or the empty string ("") are treated as falsy.
All other values, including any object, an empty array ([]) are truthy
*/