function reduce(array, callback, initialValue) {
    if (!array) {
        return -1;
    }
    
    for (let i=0; i<array.length; i++){
        initialValue = callback.apply(this, [array[i], initialValue]);
    }
    
    return initialValue;
    // Implementation Here
}
//[1,2,3,4,5] => [[1,1], [2,2], ...] => [1,1,2,2,3,3...]
// [[1,1,2], [[3]]] => [1,1,2, [3]]
// flatMap([1,2,3,4,5], (elem => [elem, elem])) = [1,1,2,2,3,3]
// [[1,1],[2,2],[3,3]] => [1,1,2,2,3,3]
function flatMap(array, callback) {
    // Implementation Here
    
    // let copyArr = array.slice();
    const newArr = array.map((elem) => {
        return callback.apply(this, [elem]);
    });
    console.log("===> Array: ", newArr);
    let res = [];
    
    for (let i=0; i<newArr.length; i++){
    // while(copyArr.length > 0){
        const elem = newArr[i];
        
        if (Array.isArray(elem)) {
            res.push(...elem);
        } else {
            res.push(elem);
        }
        
    }
    
    return res;
}

async function promiseAll(promises) {
    // Implementation Here
    return new Promise(async (resolve, reject) => {
        let res = [];
        try {
            for (let promise of promises) {
                res.push(await promise);
            }
            
            resolve(res);
                  
        } catch(err) {
            reject(res);
        }
        return;
        
        // if (promises.length > 0){
        //     resolve(res);
        //     return;
        // }
        

        
        // promises.forEach((promise, idx) => {
        //     Promise.resolve((promise).then(value) => {
        //         res[idx] =value;
        //     })
        // })
    })
}

// Helper functions
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
const mockFetch = async (value) => {
    await sleep(1e3 * Math.random() + 200);
    return value;
};


;(async () => {
    const value1 = { values: [1, 2, 3] };
    const value2 = { values: [4, 5] };
    const value3 = { values: [6, 7, 8] };
    const promises = [mockFetch(value1), mockFetch(value2), mockFetch(value3)];
    const objects = await promiseAll(promises);
    console.log(objects);
    const numbers = flatMap(objects, ({ values }) => values);
    console.log("flatMap: ", numbers); // -> [1,2,3,4,5,6,7,8]
    const num = [1,2,3,4,5,6,7,8];
    const result = reduce(num, (prev, curr) => prev + curr, 0);
    console.log(result); // -> 36
    
    console.log(flatMap([[1,1], [2,2]], (e) => e))
})();