/*
Given two strings a and b we need to add ith elements from both.
Time limit 0.5secs (AFAIR). (Input size limits I do not remember)
Eg1:
a = "99"
b = "99"
ans = "1818"
Eg2:
a = "9"
b = "11"
ans = "110"
*/

var addStrings = function(num1, num2) {
    let carry = 0, res = [];
    let i = num1.length-1, j = num2.length-1;

    while(i >= 0 || j >= 0){
       let sum = parseInt(num1[i]|| 0) + parseInt(num2[j]|| 0) + carry;
       res.unshift(sum%10);
       carry = sum > 9 ? 1 : 0;
       i--, j--;
    }

    if (carry === 1){
        res.unshift(1)
    }
    return res.join('');

};

let num1 = "11", num2 = "123";
console.log(addStrings(num1, num2));