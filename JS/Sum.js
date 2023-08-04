function sum(num) {
    // your code here
    const func = (num2) => {
        return sum(num+num2);
    }

    func.valueOf = () => num;
    return func;
}

const sum1 = sum(1);
console.log(sum1(2) == 3) // true
console.log(sum1(3) == 4) // true
console.log(sum(1)(2)(3) == 6) // true
console.log(sum(5)(-1)(2) == 6) // true