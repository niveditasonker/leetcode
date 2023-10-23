var wordPattern = function(pattern, s) {
    let map = {};

    let patternArr = pattern.split('');
    let sArr = s.split(' ');

    if (patternArr.length !== sArr.length) return false;
    if (new Set(patternArr).size !== new Set(sArr).size) return false;

    for (let i=0; i<sArr.length; i++){
        if(!map[patternArr[i]]){
            map[patternArr[i]] = sArr[i];
        } 

        if(map[patternArr[i]] !== sArr[i]) return false;
    }

    return true;
};

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern2 = function(pattern, s) {
    s = s.split(' ')
    console.log("here: ", new Set(pattern).size, new Set(s).size);
    //edge cases:
    if (pattern.length !== s.length) return false;
    if (new Set(pattern).size !== new Set(s).size) return false;
    

    let map = new Map()
    for (let i = 0; i < pattern.length; i++) {
        if (!map.has(pattern[i])) {
            map.set(pattern[i], s[i])
        }
        console.log("=====>");
        console.log(map, s[i], map.get(pattern[i]));
        if (s[i] !== map.get(pattern[i])) return false;
    }
    return true
};

let pattern = "abba", s = "dog cat cat dog";
// console.log(wordPattern(pattern,s));
// console.log(wordPattern2(pattern,s));

pattern = "abba", s = "dog cat cat fish";
// console.log(wordPattern(pattern,s));
// console.log(wordPattern2(pattern,s));

pattern = "aaaa", s = "dog cat cat dog";
// console.log(wordPattern(pattern,s));
// console.log(wordPattern2(pattern,s));


pattern ="abba", s = "dog dog dog dog";
console.log(wordPattern(pattern,s));
console.log(wordPattern2(pattern,s));