var reverseWords = function(s) {
    let words = '';
    let res = [];

    for (let w of s) {
        if (w == ' '){
            if (words) {
                console.log(`word: ${w}, res: ${res}`);
                res.unshift(words);
            }
            words = '';
        }else {
            words += w;
        }
    }

    if (words) {
        console.log(`words: ${words}, res: ${res}`);
        res.unshift(words);
    }

    // words && res.unshift(words);

    return res.join(' ');


};

let s = "the sky is blue";
console.log(reverseWords(s));