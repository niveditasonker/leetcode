const arr = [1, 2, 3, 4];

function shuffle(arr){
    for (let i=arr.length-1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1));
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    return arr;
}

console.log(shuffle(arr));
console.log(shuffle([9,8,7,6,5,4]));