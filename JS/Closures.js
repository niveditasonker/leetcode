function outerfunction() {
    let outerVariable = "Hello";

    return (name) => {
        console.log(outerVariable, name);
    }
}

const in2 = outerfunction();
console.log(in2("john"));

function outerFunction2() {
    let outerVariable = "Hello";

    function innerFn(name){
        console.log(outerVariable, name);
    }

    return innerFn;
}

var inner = outerFunction2();
console.log(inner("John"));

function greeting(msg){
    return function greeter(name) {
        return `${msg} ${name}`;
    }
}

let sayHi = greeting('Hey there');
console.log(sayHi('Joe'));

function closure(){
    for (let i=0; i<=3; i++){
        setTimeout(()=> {
            console.log(i);
        }, i*1000);
    }

    for (var i=0; i<=3; i++){
        const close =(i) => {
            setTimeout(()=> {
                console.log(i);
            }, 1000);
        }
        close(i);
    }
}

console.log(closure());

function counter() {
    let count = 0;
  
    return function() {
      count++;
      console.log(count);
    }
  }
  
  const increment = counter();
  increment(); // logs 1
  increment(); // logs 2
  increment(); // logs 3