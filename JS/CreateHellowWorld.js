var createHelloWorld = function() {
    const greeting = "Hello World";
    return function(...args) {
        return greeting;
    }
};

let args = [];
let f = createHelloWorld()
console.log(f());

args = [{},null,42];
f = createHelloWorld();
console.log(f());