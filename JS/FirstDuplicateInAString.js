function firstDuplicate(str) {
    // your code here
    let map = {};

    for (let i=0; i< str.length; i++){
        
        if (map[str[i]] !== undefined){
        return str[i];
        }
        map[str[i]] = i;
    }

    return null;
}

console.log(firstDuplicate('abca'));
console.log(firstDuplicate('abcdefe'));
console.log(firstDuplicate('abcdef'));

function firstDuplicate2(str) {
// your code here
    let set = new Set();

    for (let i=0; i< str.length; i++){
        
        if (set.has(str[i])){
            return str[i];
        }
        set.add(str[i]);
    }

    return null;
}

console.log(firstDuplicate2('abca'));
console.log(firstDuplicate2('abcdefe'));
console.log(firstDuplicate2('abcdef'));
  
