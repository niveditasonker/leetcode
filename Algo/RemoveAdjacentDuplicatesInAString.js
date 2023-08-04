var removeDuplicates = function(s) {
    let stack = [];
    for(let s of str){
        stack.push(s);
        while(stack.length > 1 && stack[stack.length-1] === stack[stack.length-2]){
            stack.pop();
            stack.pop();
        }
    }
}
return stack.join('');