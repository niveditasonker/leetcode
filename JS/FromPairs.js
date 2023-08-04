function fromPairs(pairs) {
    // throw 'Not implemented!';
    let map = {};
  
    for (let [k,v] of pairs){
      if(!map[k]){
        map[k] = v;
      } else {
        map[k] += v;
      }
    }
  
    return map;
}

const pairs = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ];
  
console.log(fromPairs(pairs)); 