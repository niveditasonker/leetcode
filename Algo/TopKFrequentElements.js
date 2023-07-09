var topKFrequent = function(nums, k) {
    let map = {};

    for (let n of nums){
        if(!map[n]){
            map[n] = 1;
        } else {
            map[n]++;
        }
    }

    console.log(map);
    // let sortedValues = Object.entries(map).sort((a,b) => b-a);
    // console.log(sortedValues);
    // return Object.keys(map).splice(0, k).map((elem) => parseInt(elem));

    let sortedKeys = Object.keys(map).sort((a,b) => map[b]-map[a]);
    let results =[]
     for(let i = 0; i < k; i++){
         results.push(sortedKeys[i]);
     }
    return results

    // return Object.keys(map).splice(0, k);
};