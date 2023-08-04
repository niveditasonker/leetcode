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

var topKFrequent2 = function(nums, k) {
    const freqMap = new Map();
    const bucket = [];
    const result = [];
    
    for(let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    for(let [num, freq] of freqMap) {
        // bucket[freq] = (bucket[freq] || new Set()).add(num);
        // create new Set for this key if it doesn't already exist
        // Map contain number as key and frequency as value.
        // This code loops through map and insert keys and values inside bucket.
        // bucket[frequency] = (if there is bucket[frequency] set then add (number)) or new Set().add(number).
        bucket[freq] || bucket[freq] || new Set();
        bucket[freq].add(num);
    }
    
    for(let i = bucket.length-1; i >= 0; i--) {
        if(bucket[i]) result.push(...bucket[i]);
        if(result.length === k) break;
    }
    return result;
};