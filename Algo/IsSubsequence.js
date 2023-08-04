
// O(1) space
var isSubsequence = function(s, t) {
    let count = 0;

    for (let i=0; i<t.length; i++) {
        if (s[count] === t[i]) {
            count++;
        }
    }

    return count === s.length;
};

// o(N) space
var isSubsequenceON = function(s, t) {
    let sChars = s.split('');

    for(let char of t){
        if (sChars[0] === char){
            sChars.shift();
        }
    }

    return sChars.length === 0;
};

let s = "abc", t = "ahbgdc";
console.log("isSubsequence: ", isSubsequence(s,t));
console.log("isSubsequenceON: ", isSubsequenceON(s,t));

s = "axc", t = "ahbgdc";
console.log("isSubsequence: ", isSubsequence(s,t));
console.log("isSubsequenceON: ", isSubsequenceON(s,t));