var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let left = 0;
    let charSet = new Set();

    for (let i=0; i<s.length; i++){
        while(charSet.has(s[i])){
            // console.log(`left: ${left}, s[i]: ${s[i]}`);
            charSet.delete(s[left]);
            // console.log("Inside set....", charSet);
            left++;
        }
        charSet.add(s[i]);
        // console.log(charSet);
        max = Math.max(max, charSet.size);
    }

    return max;

};

/*
for loop: O(n)
while loop: O(1)
charSet.add(): O(1)
Math.max(): O(1)
Therefore, the overall complexity of the program is O(n).
*/

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));

s = "bbbbb";
console.log(lengthOfLongestSubstring(s));

s = "pwwkew";
console.log(lengthOfLongestSubstring(s));