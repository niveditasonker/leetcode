function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let output = [];
        const len = promises.length;
        if (promises.length === 0) {
            return output;
        }

        promises.forEach((promise, idx)=> {
            Promise.resolve(promise)
            .then((res) => {
                count++;
                output[idx] = res;

                if (count === len){
                    resolve(output);
                }
            }, reject);
            
        });
    });
}

const p1 = Promise.resolve(1)
const p2 = new Promise((resolve) => {
  setTimeout(() => resolve(2), 1000)
})
const p3 = new Promise((resolve) => {
  setTimeout(() => resolve(3), 3000)
})
const p4 = Promise.reject('err4')
const p5 = Promise.reject('err5')
// 1. All promise succeeded
const p11 = myPromiseAll([ p1, p2, p3 ])
	.then(console.log) // [ 1, 2, 3 ]
      .catch(console.log)
      
// 2. One promise failed
// const p12 = Promise.myPromiseAll([ p1, p2, p4 ])
// 	.then(console.log)
//       .catch(console.log) // err4
      
// // 3. Two promises failed. The final output is err4. The return value of the first failure
// const p13 = Promise.myPromiseAll([ p1, p4, p5 ])
// 	.then(console.log)
//       .catch(console.log) // err4