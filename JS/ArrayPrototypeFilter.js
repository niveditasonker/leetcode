Array.prototype.myFilter = function(fn){
    let filteredRes = [];

    for (let i=0; i<this.length; i++){
        if (fn(this[i])){
            filteredRes.push(this[i]);
        }
    }

    return filteredRes;
}

const data = [1, 2, 3, 4, 5];

const filteredData = data.myFilter(function (el) {
    if (el > 2) return el;
});

console.log(filteredData);