/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstructEasy = function(ransomNote, magazine) {
    for (const char of magazine){
        ransomNote = ransomNote.replace(char, '');
    }

    return ransomNote.length === 0 ? true: false;
}

var canConstruct = function(ransomNote, magazine) {
    let map = new Map();

    if (ransomNote.length > magazine.length) return false;

    for (const char of magazine){
        const count = map.get(char) || 0;
        map.set(char, count+1);
    }

    for (const char of ransomNote){
        if (!map.has(char)){
            return false;
        } else {
            if(map.get(char) <=0 ){
                return false;
            } else {
                map.set(char, (map.get(char) - 1));
            }
            
        }
    }
    // console.log(map);

    return true;
};

let ransomNote = "a", magazine = "b";
console.log(canConstruct(ransomNote,magazine));
console.log(canConstructEasy(ransomNote,magazine));

ransomNote = "aa", magazine = "ab";
console.log(canConstruct(ransomNote,magazine));
console.log(canConstructEasy(ransomNote,magazine));

ransomNote = "aa", magazine = "aab";
console.log(canConstruct(ransomNote,magazine));
console.log(canConstructEasy(ransomNote,magazine));