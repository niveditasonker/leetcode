var romanToInt = function(s) {
    let symbols = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    let value = 0;

    for(let i=0; i<s.length;i++){
        // console.log(s[i], symbols[s[i]], s[i+1], symbols[s[i+1]]);
        if(symbols[s[i]] < symbols[s[i+1]]) {
            value -= symbols[s[i]];
            // console.log(`if Value = ${value}`);
        } else {
            value += symbols[s[i]];
            // console.log(`else Value = ${value}`);
        }
    }
    return value;
};


console.log(romanToInt('LVIII'));
console.log(romanToInt('IV'));
console.log(romanToInt('XXI'));