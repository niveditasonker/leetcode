var uncompress = function(s) {
    let stack = [];
    let currStr = '';
    let currNum = 0;

    for (let i=0; i<s.length; i++){
        // console.log(`s[i]; ${s[i]}, currStr: ${currStr}, currNum: ${currNum}`);
        if (s[i] === '('){
            stack.push(currStr);
            stack.push(currNum);
            currStr = '';
            currNum = 0;
        } else if(s[i] === ')'){
            const prevNum = stack.pop();
            const prevStr = stack.pop();
            currStr = prevStr + currStr.repeat(prevNum);
            // console.log(`closed bracket currStr; ${currStr}`);
        } else if(Number(s[i])){
            currNum = `${currNum}${s[i]}`
        } else {
            currStr += s[i];
        }
        // console.log(stack);
    }

    return currStr;
};

let s = '3(ab)';
console.log(uncompress(s));
console.log(uncompress('3(ab2(c))'));

// s = "3[a]2[bc]";
// console.log(decodeString(s));

// s = "3[a2[c]]";
// console.log(decodeString(s));
// console.log(decodeString2(s));

// s = "32[a2[c]]";
// console.log(decodeString(s));
