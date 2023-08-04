Array.prototype.myMap = function(callback, thisObj) {
    const result = [];
    this.forEach((...args) => {
      const index = args[1];
      result[index] = callback.apply(thisObj, args);
    })
    return result;

}

// Sol 2:
Array.prototype.myMap = function(callback, thisArg) {
    const length = this.length;
    const result = Array(length);
  
    for(let i = 0; i < length; i++) {
      if(i in this) {
        result[i] = callback.call(thisArg, this[i], i, this);
      }
    }
    
    return result;

}

//Reduce:
Array.prototype.myReduce = function (callback, initial) {
    if(!callback || (!this.length && arguments.length == 1)) throw 'error';
    
    for(let i = 0; i < this.length; i++){
      if(i == 0 && arguments.length == 1){
        initial = this[i];
      }else{
        initial = callback.apply(this,[initial,this[i],i,this]);
      }
    }

    return initial;
}