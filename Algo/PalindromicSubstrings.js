/**
 * @param {string} s
 * @return {string}
 */
var countSubstrings = function(s) {
    let palindromicCount = 0;

    for (let i=0; i<s.length; i++){
        // with i as anchor expand on both sides
        // even case:
        palindromicCount += helper(i, i, s);
        // odd case:
        palindromicCount += helper(i, i+1, s);
    }

    return palindromicCount;
};

function helper(left, right, s, count = 0) {
    while (left>=0 && right <s.length && s[left] === s[right]) {
        count++;
        left--;
        right++;
    }
    // by this time left is -1, hence we are adding 1.
    // right is already 1, so no need to increment it
    return count;
}

let s = "abc";
console.log(countSubstrings(s));

s = "aaa";
console.log(countSubstrings(s));