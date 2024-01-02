Array.prototype.concat = function(...args) {
    let res = [];
    let initailArr = this;

    for (let i=0; i<initailArr.length; i++){
        res.push(initailArr[i]);
    }

    for (let i=0; i<args.length; i++){
        if (Array.isArray(args[i])){
            let tmp = args[i];
            for (let j=0; j<tmp.length; j++){
                res.push(tmp[j]);
            }
        } else {
            res.push(args[i]);
        }
        
    }

    return res;

}

let arr1 = [10, 20, 30];
let arr2 = [70, 80, 90];

console.log(arr1.concat(40,50,60));
console.log(arr1.concat(arr2));