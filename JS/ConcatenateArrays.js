function concatArr(arr1, arr2){
    let mergedArr = [...arr1, ...arr2];
    let set = [...new Set(mergedArr)];

    return set;
}

function concatArr2(arr1, arr2) {
    let arr = arr1.concat(arr2);
    let set = [...new Set(arr)];

    return set;
}


let arr1 = [1, 2, 3, 4, 5, 6];  
let arr2 = [3, 4, 5, 7];
console.log(concatArr(arr1, arr2));
console.log(concatArr2(arr1, arr2));