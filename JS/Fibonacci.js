var fibGenerator = function(n) {
    // let n0 =0, n1 =1, nextNum;
    // yield n0;
    // yield n1;
    // while(true){
    //     nextNum = n0 + n1;
    //     yield nextNum;
    //     n0 = n1;
    //     n1 = nextNum;
    // }

     x=0;
     y=1;
     let temp ;
     while(n>=0){
         temp = x ;
         x = x+y;
         y = temp;
         n--;
     }
    return y;    
}
var fibGenerator2 = function(n) {
    let arr = [0,1];
    for(let i = 2; i <= n; i++){
        arr.push(arr[i-2] + arr[i-1])
    }
    return arr[n];
};

const fib = (n) => {
    if (n < 2) return n
    return fib(n - 1) + fib(n - 2)
}

  // With memo
const cache = {}
const fibMemo = (n) => {
    if (n < 2) return n
    cache[n] = cache[n] || fibMemo(n - 1) + fibMemo(n - 2)
    return cache[n]
}  

console.log(fibGenerator(2));
console.log(fibGenerator(5));
console.log(fibGenerator(7));
console.log(fibGenerator(8));

console.log(fibGenerator2(2));
console.log(fibGenerator2(5));
console.log(fibGenerator2(7));
console.log(fibGenerator2(8));

/*
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

*/