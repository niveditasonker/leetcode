/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = '';

    for (let i=0; i<s.length; i++){
        // with i as anchor expand on both sides
        // even case:
        let leftStr = helper(i, i, s);
        // odd case:
        let rightStr = helper(i, i+1, s);

        const longParindrome = leftStr.length > rightStr.length ? leftStr : rightStr;
        if (longParindrome.length > longest.length){
            longest = longParindrome;
        }
    }

    return longest;
};

function helper(left, right, s) {
    while (left>=0 && right <s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    // by this time left is -1, hence we are adding 1.
    // right is already 1, so no need to increment it
    return s.slice(left+1, right);
}