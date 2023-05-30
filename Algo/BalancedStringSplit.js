// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0, equal = 0;

    for (let char of s){
        // console.log(char);
        if (char === 'R') equal--;
        else if (char === 'L') equal++;

        if(equal === 0) count++;
    }

    return count;
    
};

console.log(balancedStringSplit('RLRRLLRLRL'));
console.log(balancedStringSplit('RLRRRLLRLL'));

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
// Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.