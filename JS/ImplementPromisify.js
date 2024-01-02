const { promisify } = require('util');

//Using Node.js's util.promisify():
const getSumAsync = (num1, num2, callback) => {
 
    if (!num1 || !num2) {
      return callback(new Error("Missing arguments"), null);
    }
    return callback(null, num1 + num2);
}
  
// getSumAsync(1, 1, (err, result) => {
//     if (err){
//       doSomethingWithError(err)
//     }else {
//       console.log(result) // 2
//     }
// })

const getSumPromiseUtils = promisify(getSumAsync) // step 1

getSumPromiseUtils(1, 1) // step 2
.then(result => {
  console.log(result)
})
.catch(err =>{
  doSomethingWithError(err);
});

// custom promisify with just 2 args:
const myPromisify = (fn) => {
    return (...args) => {
        return new Promise((resolve, reject) => {
            const customCallback = (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            }
            args.push(customCallback);
            fn.call(this, ...args);
        });
    }
}

const getSumPromise = myPromisify(getSumAsync);

// promisify with multiple args:

const myPromisifyManyArgs = (fn) => {
    return (...args) => {
      return new Promise((resolve, reject) => {
        function customCallback(err, ...results) {
          if (err) {
            return reject(err)
          }
          return resolve(results.length === 1 ? results[0] : results) 
         }
         args.push(customCallback)
         fn.call(this, ...args)
       })
    }
}

const getSumAsyncMultiple = (num1, num2, callback) => {
 
    if (!num1 || !num2) {
      return callback(new Error("Missing dependencies"), null);
    }
    
    const sum = num1 + num2;
    const message = `Sum is ${sum}`
    return callback(null, sum, message);
  }
const getSumPromiseManyArgs = myPromisifyManyArgs(getSumAsyncMultiple)
getSumPromiseManyArgs(2, 3)
.then((arrayOfResults) => console.log(arrayOfResults)); // [6, 'Sum is 6']

//https://www.freecodecamp.org/news/write-your-own-promisify-function-from-scratch/