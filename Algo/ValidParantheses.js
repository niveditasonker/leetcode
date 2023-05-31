var isValid = function(s) {
    let stack = [];

    for (let i=0; i<s.length; i++) {
        if (s[i] === '(') {
            stack.push(')');
        } else if (s[i] === '[') {
            stack.push(']');
        } else if (s[i] === '{') {
            stack.push('}');
        } else {
            if (stack.pop() !== s[i]) {
                return false;
            }
        }
    }

    return !stack.length;
};

console.log(isValid("()"));

var isValid2 = function(s) {
    let stack = [];

    for (let char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            if (!stack.length ||
                (char === ')' && stack[stack.length-1] !== '(' ) ||
                (char === ']' && stack[stack.length-1] !== '[' ) ||
                (char === '}' && stack[stack.length-1] !== '{' )
            ) return false;
            stack.pop();
        }
        
    }

    return !stack.length;
};

console.log(isValid2("()"));