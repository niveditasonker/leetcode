
Array.prototype.square = function () {
    // throw 'Not implemented!';
    const len = this.length;
    const res = [];

    for (let i=0; i<len; i++){
        res[i] = this[i]*this[i];
    }
    console.log(res);
    return this.map((x) => x*x);
  
};

const arr = new Array();
console.log([-2].square());
console.log([1, 2, , 4].square());