var longestUniqueSubstr = function(s) {

    let charSet = new Set();
    let res = '';

    for (let i=0; i<s.length; i++){
        if(charSet.has(s[i])){
            const tmp = [...charSet].join('');
            res = tmp.length > res.length ? tmp : res;
            charSet.clear();
        } else {
            charSet.add(s[i]);
        }
    }

    return res;

};

let s= "abcabc";
console.log(longestUniqueSubstr(s));

s = 'a12#2';
console.log(longestUniqueSubstr(s));

s = 'aaaaa';
console.log(longestUniqueSubstr(s));