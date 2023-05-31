/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true
*/

var fizzBuzz = function(n) {
    let answer = [];

    // loop till n>0
    while(n){
    // for(let i=0; i<n;i++){
        if(((n%3) === 0) && ((n%5) === 0)) {
            // console.log(`Divisible by 3 & 5 ${i} ${n}`);
            answer[n-1] = "FizzBuzz";
            // answer.push("FizzBuzz");
        } else if(((n%3) === 0)) {
            // console.log(`Divisible by 3 i= ${i} n= ${n} ${n%3}`);
            answer[n-1] = "Fizz";
        } else if(((n%5) === 0)) {
            // console.log(`Divisible by 5 ${i} ${n}`);
            answer[n-1] = "Buzz";
        } else {
            // console.log(`Not Divisible by 3 & 5 ${i} ${n}`);
            answer[n-1] = n.toString();
        }
        n--;
    }

    return answer;
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));