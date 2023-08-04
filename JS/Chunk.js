function chunk(array, size = 1) {
    if(!array.length || size < 1){
        return [];
    }

    let res = [];

    for(let i=0; i<array.length; i+=size){
        const chunk = array.slice(i, i+size);
        res.push(chunk);
    }

    return res;

}

console.log(chunk(['a', 'b', 'c', 'd']));
console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4], 3));