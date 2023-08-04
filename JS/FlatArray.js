function flat(arr, depth = 1) {
    let res= [];

    arr.forEach((elem) => {
        if(Array.isArray(elem) && depth > 0){
            res.push(...flat(elem, depth-1))
        } else {
            res.push(elem);
        }
    })

    return res;
}

function flatIterative(arr, depth = 1) {
    // your imeplementation here
    let res = [];
    let newArr = [[arr, depth+1]];
    while(newArr.length > 0){
      const [elem, dep] = newArr.shift();
  
      if (Array.isArray(elem) && dep >0){
        newArr.unshift(...elem.map(i => [i, dep-1]));
      } else {
        res.push(elem);
      }
  
    }
    return res;
}

let arr = [1, [2], [3, [4]]];
console.log(flat(arr));
arr = [1, [2], [3, [4]]];
console.log(flatIterative(arr));