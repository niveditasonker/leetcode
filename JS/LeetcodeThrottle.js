var throttle = function(fn, t) {
    let timer = null;
    let current = 0, next = 0;

    return(...args) =>{
        clearTimeout(timer);
        current = new Date().getTime();

        timer = setTimeout(() =>{
            fn(...args);
            next = new Date().getTime() + t
            
        }, next-current);
    }
};

let t = 100, calls = [{"t":20,"inputs":[1]}];
console.log(throttle(calls, t));