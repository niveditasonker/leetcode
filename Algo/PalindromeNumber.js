var isPalindrome = function(x) {
    // let strNum = x.toString();
    let num = x;
    let reverseNum = 0;
    if (x < 0) {
        return false;
    }

    while (num > 0){
        let lastDigit = num%10;
        reverseNum = reverseNum * 10 + lastDigit;
        num = Math.floor(num/10);

        // console.log(lastDigit, reverseNum, num);
    }
    return (x==reverseNum);

};

var isPalindrome2 = function(x){
    const reversedNum =  `${x}`.split('').reverse().join('');

    return `${x}`=== reversedNum;

}

console.log(isPalindrome(121));
console.log(isPalindrome2(121));