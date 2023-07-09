var removeDuplicates = function(s, k) {
    const stack = [];
    let res = '';

    for (const char of s){
        if(stack.length && stack[stack.length - 1][0] === char){
            stack[stack.length - 1][1] += 1;

            if (stack[stack.length - 1][1] === k){
                stack.pop();
            }
        } else {
            stack.push([char, 1]);
        }
    }

    console.log(stack);

    for (let [char, count] of stack){
        res += char.repeat(count);
    }

    return res;
};

let s = "abcd", k = 2;
console.log(removeDuplicates(s,k));

s = "deeedbbcccbdaa", k = 3;
console.log(removeDuplicates(s,k));