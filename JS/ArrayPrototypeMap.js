Array.prototype.myMap = function(cb, thisObj) {
    const result = [];
    this.forEach((item, index) => {
      result[index] = cb.call(thisObj, item, index, this);
    });
    return result;
}

let arr = [1,2,3];
console.log(arr.myMap((val, i) => val + i));
console.log(arr.myMap(((num,i) => num * 2)));


arr = [1,2,3,4];
console.log(arr.myMap((val, i) => val + i));
console.log(arr.myMap(((num,i) => num * 2)));

