var removeOuterParentheses = function(s) {
    //using stack
    let stack = [];
    let result = '';

    //traverse the string
    for (let i=0; i<s.length; i++){
        //if opening brace, push in stack
        if(s[i] === '(') {
            if(stack.length) result += s[i];
            stack.push(s[i]);            
        }

        // if closing brace, pop from stack && if stack not empty add to result
        if(s[i] === ')'){
            stack.pop();
            if (stack.length) result += s[i];
        }
    }

    return result;
};

console.log(removeOuterParentheses("(()())(())"));
console.log(removeOuterParentheses("(()())(())(()(()))"));