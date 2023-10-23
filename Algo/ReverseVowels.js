/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split('');
    let i=0; j=s.length - 1;

    while (i < j){
        if (isVowel(s[i])) {
            if (isVowel(s[j])) {
                [s[i], s[j]] = [s[j], s[i]];
                // let tmp = s[i];
                // s[i] = s[j];
                // s[j] = tmp;
                i++;
                j--;
            } else {
                j--;
            }
        } else {
            i++;
        }
    }

    return s.join('');
};

function isVowel(char) {
    return (char === 'a' || char === 'A' || 
    char === 'e' || char === 'E' || 
    char === 'i' || char === 'I' || 
    char === 'o' || char === 'O' || 
    char === 'u' || char === 'U' );
}

let s = "leetcode";
console.log(reverseVowels(s));

s = "hello";
console.log(reverseVowels(s));