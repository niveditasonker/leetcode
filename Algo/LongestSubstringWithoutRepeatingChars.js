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

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));

s = "bbbbb";
console.log(lengthOfLongestSubstring(s));

s = "pwwkew";
console.log(lengthOfLongestSubstring(s));